const API = "/api";

browser.runtime.onMessage.addListener(
  async message => {
    if (message.type === "clipboard-read") {
      const response =
        await fetch(`${API}/clipboard`);

      return response.json();
    }

    if (message.type === "clipboard-write") {
      const response =
        await fetch(`${API}/clipboard`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            value:
              message.value
          })
        });

      return response.json();
    }

    if (message.type === "command") {
      const response =
        await fetch(`${API}/command`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            command:
              message.command
          })
        });

      return response.json();
    }
  }
);
