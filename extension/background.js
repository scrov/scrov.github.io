const native = {
  name: "scrov_host",
  port: null,

  connect() {
    if (!this.port) {
      this.port = browser.runtime.connectNative(this.name);

      this.port.onDisconnect.addListener(() => {
        this.port = null;
      });
    }

    return this.port;
  },

  request(message) {
    return new Promise((resolve, reject) => {
      const port = this.connect();

      const listener = response => {
        port.onMessage.removeListener(listener);
        resolve(response);
      };

      port.onMessage.addListener(listener);

      port.postMessage(message);

      setTimeout(() => {
        port.onMessage.removeListener(listener);
        reject(new Error("Native host timeout"));
      }, 30000);
    });
  }
};

browser.runtime.onMessage.addListener(async message => {
  if (message.type === "native-exec") {
    return native.request({
      type: "exec",
      command: message.command,
      args: message.args || []
    });
  }

  if (message.type === "native-terminal") {
    return native.request({
      type: "terminal",
      action: message.action,
      data: message.data
    });
  }

  if (message.type === "clipboard-read") {
    return native.request({
      type: "clipboard-read"
    });
  }

  if (message.type === "clipboard-write") {
    return native.request({
      type: "clipboard-write",
      text: message.text || ""
    });
  }

  return {
    error: "Unknown SCROV message"
  };
});
let terminalPort = null;

browser.runtime.onConnect.addListener(port => {
  if (port.name !== "scrov-terminal") {
    return;
  }

  terminalPort = port;

  port.onDisconnect.addListener(() => {
    terminalPort = null;
  });
});
native.connect();

native.port.onMessage.addListener(message => {
  if (message.type !== "terminal-data") {
    return;
  }

  terminalPort?.postMessage(message);
});
const port = browser.runtime.connect({
  name: "scrov-terminal"
});

port.onMessage.addListener(message => {
  if (message.type === "terminal-data") {
    terminal.write(message.data);
  }
});
