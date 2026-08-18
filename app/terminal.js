import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { extension } from "./bridge.js";
import "xterm/css/xterm.css";

export const createTerminal = async element => {
  const terminal = new Terminal({
    cursorBlink: true,
    convertEol: true,
    fontSize: 13,
    scrollback: 5000
  });

  const fit = new FitAddon();

  terminal.loadAddon(fit);
  terminal.open(element);
  fit.fit();

  await extension.terminal({
    action: "start"
  });

  terminal.onData(data => {
    extension.terminal({
      action: "input",
      data
    });
  });

  terminal.onResize(({ cols, rows }) => {
    extension.terminal({
      action: "resize",
      cols,
      rows
    });
  });

  return terminal;
};
