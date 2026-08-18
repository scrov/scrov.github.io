browser.runtime.onMessage.addListener(
  message => {
    if (message.type !== "insert-text") {
      return;
    }

    const element =
      document.activeElement;

    if (
      element instanceof
        HTMLInputElement ||
      element instanceof
        HTMLTextAreaElement
    ) {
      const start =
        element.selectionStart ??
        element.value.length;

      const end =
        element.selectionEnd ??
        element.value.length;

      element.value =
        element.value.slice(
          0,
          start
        ) +
        message.value +
        element.value.slice(
          end
        );

      element.dispatchEvent(
        new Event(
          "input",
          {
            bubbles: true
          }
        )
      );
    }
  }
);
