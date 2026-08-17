export const extension = {
  available() {
    return Boolean(globalThis.browser?.runtime?.sendMessage);
  },

  async request(type, payload = {}) {
    if (!this.available()) {
      throw new Error("SCROV Firefox extension is unavailable");
    }

    return browser.runtime.sendMessage({
      type,
      ...payload
    });
  },

  async terminal(command = {}) {
    return this.request("native-terminal", command);
  },

  async exec(command, args = []) {
    return this.request("native-exec", {
      command,
      args
    });
  },

  async clipboardRead() {
    return this.request("clipboard-read");
  },

  async clipboardWrite(text) {
    return this.request("clipboard-write", {
      text
    });
  }
};
