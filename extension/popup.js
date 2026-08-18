const $ =
  selector =>
    document.querySelector(
      selector
    );

const output =
  value => {
    $("#output")
      .textContent =
      typeof value ===
      "string"
        ? value
        : JSON.stringify(
            value,
            null,
            2
          );
  };

$("#run")
  .addEventListener(
    "click",
    async () => {
      const result =
        await browser.runtime.sendMessage({
          type:
            "command",
          command:
            $("#command")
              .value
        });

      output(result);
    }
  );

$("#read")
  .addEventListener(
    "click",
    async () => {
      const result =
        await browser.runtime.sendMessage({
          type:
            "clipboard-read"
        });

      output(result);
    }
  );

$("#write")
  .addEventListener(
    "click",
    async () => {
      const result =
        await browser.runtime.sendMessage({
          type:
            "clipboard-write",
          value:
            $("#command")
              .value
        });

      output(result);
    }
  );
