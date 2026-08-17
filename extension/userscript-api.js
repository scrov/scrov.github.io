browser.userScripts.onBeforeScript.addListener(script => {
  script.exportFunction(
    async (message) => {
      return browser.runtime.sendMessage({
        type: "userscript-request",
        message
      });
    },
    "scrovNative"
  );
});
