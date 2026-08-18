import express from "express";
import { WebSocketServer } from "ws";
import { execa } from "execa";
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { spawn } from "node-pty";
import clipboardy from "clipboardy";

const require = createRequire(import.meta.url);
const Database = require("better-sqlite3");

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server, path: "/terminal" });
const database = new Database("./workspace.sqlite");

database.exec(`
  CREATE TABLE IF NOT EXISTS workspace (
    id TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at INTEGER NOT NULL
  )
`);

app.use(express.json({ limit: "2mb" }));

app.get("/health", (_, res) => {
  res.json({
    status: "ok",
    service: "scrov-host"
  });
});

app.post("/api/exec", async (req, res) => {
  const { command, args = [], cwd } = req.body;

  try {
    const result = await execa(command, args, {
      cwd,
      reject: false,
      timeout: 30000
    });

    res.json({
      command,
      args,
      exitCode: result.exitCode,
      stdout: result.stdout,
      stderr: result.stderr
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.post("/api/curl", async (req, res) => {
  const { url, method = "GET", body, headers = [] } = req.body;

  const args = [
    "-sS",
    "-i",
    "-X",
    method
  ];

  for (const header of headers) {
    args.push("-H", header);
  }

  if (body !== undefined) {
    args.push("--data", typeof body === "string" ? body : JSON.stringify(body));
  }

  args.push(url);

  const result = await execa("curl", args, {
    reject: false,
    timeout: 30000
  });

  res.json({
    exitCode: result.exitCode,
    stdout: result.stdout,
    stderr: result.stderr
  });
});

app.post("/api/jq", async (req, res) => {
  const { input, filter = "." } = req.body;

  const result = await execa("jq", ["-M", filter], {
    input: typeof input === "string" ? input : JSON.stringify(input),
    reject: false
  });

  res.json({
    exitCode: result.exitCode,
    stdout: result.stdout,
    stderr: result.stderr
  });
});

app.get("/api/clipboard", async (_, res) => {
  try {
    res.json({
      text: await clipboardy.read()
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.post("/api/clipboard", async (req, res) => {
  try {
    await clipboardy.write(String(req.body.text ?? ""));
    res.json({
      ok: true
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.get("/api/sqlite", (req, res) => {
  const sql = String(req.query.sql ?? "");

  try {
    const result = database.prepare(sql).all();
    res.json({
      rows: result
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

app.post("/api/sqlite", (req, res) => {
  const { sql, params = [] } = req.body;

  try {
    const statement = database.prepare(sql);
    const result = statement.run(...params);

    res.json({
      changes: result.changes,
      lastInsertRowid: result.lastInsertRowid
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

wss.on("connection", socket => {
  const shell = process.platform === "win32"
    ? "powershell.exe"
    : process.env.SHELL || "/bin/bash";

  const terminal = spawn(shell, [], {
    name: "xterm-256color",
    cols: 120,
    rows: 30,
    cwd: process.env.HOME || process.cwd(),
    env: process.env
  });

  terminal.onData(data => {
    socket.send(JSON.stringify({
      type: "output",
      data
    }));
  });

  socket.on("message", message => {
    const event = JSON.parse(message.toString());

    if (event.type === "input") {
      terminal.write(event.data);
    }

    if (event.type === "resize") {
      terminal.resize(
        Math.max(1, Number(event.cols)),
        Math.max(1, Number(event.rows))
      );
    }
  });

  socket.on("close", () => {
    terminal.kill();
  });
});

server.listen(8787, "127.0.0.1", () => {
  console.log("SCROV host http://127.0.0.1:8787");
  console.log("SCROV terminal ws://127.0.0.1:8787/terminal");
});
