const extensionClipboard = async type => {
  if (!globalThis.browser?.runtime) {
    return null;
  }

  return browser.runtime.sendMessage({
    type
  });
};

export const clipboard = {
  async read() {
    const extensionResult = await extensionClipboard("clipboard-read");

    if (extensionResult !== null) {
      return extensionResult.text;
    }

    return navigator.clipboard.readText();
  },

  async write(text) {
    const extensionResult = await browser.runtime.sendMessage({
      type: "clipboard-write",
      text
    });

    if (extensionResult?.ok) {
      return true;
    }

    await navigator.clipboard.writeText(text);
    return true;
  }
};
