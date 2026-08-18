browser.userScripts.onBeforeScript.addListener(
  script => {
    script.exportFunction(
      async message =>
        browser.runtime.sendMessage(
          message
        ),
      "scrovBridge"
    );
  }
);
