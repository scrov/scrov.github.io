import { clipboard } from "./clipboard.js";

const text = document.querySelector("#clipboardText");

export const initializeClipboard = () => {
  document.querySelector("#clipboardRead").addEventListener("click", async () => {
    text.value = await clipboard.read();
  });

  document.querySelector("#clipboardWrite").addEventListener("click", async () => {
    await clipboard.write(text.value);
  });

  document.querySelector("#clipboardClear").addEventListener("click", async () => {
    text.value = "";
    await clipboard.write("");
  });

  document.querySelector("#clipboardHostRead").addEventListener("click", async () => {
    const response = await fetch("http://127.0.0.1:8787/api/clipboard");
    const result = await response.json();
    text.value = result.text || "";
  });

  document.querySelector("#clipboardHostWrite").addEventListener("click", async () => {
    await fetch("http://127.0.0.1:8787/api/clipboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: text.value
      })
    });
  });
};
