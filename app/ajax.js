import $ from "jquery";

export const ajax = {
  request(options) {
    return new Promise((resolve, reject) => {
      $.ajax({
        ...options,
        success: resolve,
        error: (_, __, error) => reject(new Error(error))
      });
    });
  },

  get(url, data) {
    return this.request({
      url,
      method: "GET",
      data
    });
  },

  post(url, data) {
    return this.request({
      url,
      method: "POST",
      data: JSON.stringify(data),
      contentType: "application/json"
    });
  },

  xhr(method, url, body = null, headers = {}) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.open(method, url);

      Object.entries(headers).forEach(([key, value]) => {
        request.setRequestHeader(key, value);
      });

      request.onload = () => {
        resolve({
          status: request.status,
          headers: request.getAllResponseHeaders(),
          body: request.responseText
        });
      };

      request.onerror = () => {
        reject(new Error("XHR request failed"));
      };

      request.send(body);
    });
  }
};
