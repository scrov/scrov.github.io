#!/usr/bin/env node

import readline from "node:readline";
import { execa } from "execa";
import pty from "node-pty";
import clipboardy from "clipboardy";

const output = message => {
  const json = JSON.stringify(message);
  const buffer = Buffer.from(json);
  const header = Buffer.alloc(4);

  header.writeUInt32LE(buffer.length, 0);

  process.stdout.write(header);
  process.stdout.write(buffer);
};

const input = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity
});

let terminal = null;

const execute = async message => {
  if (message.type === "exec") {
    const result = await execa(
      message.command,
      message.args || [],
      {
        reject: false,
        shell: false
      }
    );

    return {
      type: "exec-result",
      command: message.command,
      args: message.args || [],
      exitCode: result.exitCode,
      stdout: result.stdout,
      stderr: result.stderr
    };
  }

  if (message.type === "clipboard-read") {
    return {
      type: "clipboard-result",
      text: await clipboardy.read()
    };
  }

  if (message.type === "clipboard-write") {
    await clipboardy.write(String(message.text || ""));

    return {
      type: "clipboard-result",
      ok: true
    };
  }

  if (message.type === "terminal") {
    if (message.action === "start") {
      const shell = process.env.SHELL || "/bin/bash";

      terminal = pty.spawn(shell, [], {
        name: "xterm-256color",
        cols: 120,
        rows: 32,
        cwd: process.env.HOME || process.cwd(),
        env: process.env
      });

      terminal.onData(data => {
        output({
          type: "terminal-data",
          data
        });
      });

      return {
        type: "terminal-started"
      };
    }

    if (message.action === "input") {
      terminal?.write(String(message.data || ""));

      return {
        type: "terminal-input"
      };
    }

    if (message.action === "resize") {
      terminal?.resize(
        Number(message.cols || 120),
        Number(message.rows || 32)
      );

      return {
        type: "terminal-resized"
      };
    }

    if (message.action === "stop") {
      terminal?.kill();
      terminal = null;

      return {
        type: "terminal-stopped"
      };
    }
  }

  return {
    error: "Unsupported native operation"
  };
};

const chunks = [];

process.stdin.on("data", async chunk => {
  chunks.push(chunk);

  const data = Buffer.concat(chunks);

  while (data.length >= 4) {
    const length = data.readUInt32LE(0);

    if (data.length < length + 4) {
      break;
    }

    const payload = data.subarray(4, length + 4);

    chunks.length = 0;

    const remaining = data.subarray(length + 4);

    if (remaining.length) {
      chunks.push(remaining);
    }

    try {
      const message = JSON.parse(payload.toString("utf8"));
      const result = await execute(message);

      output(result);
    } catch (error) {
      output({
        error: error.message
      });
    }
  }
});
