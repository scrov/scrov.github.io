export const createHarEntry = ({
  method,
  url,
  requestHeaders = {},
  requestBody = "",
  status,
  responseHeaders = {},
  responseBody = "",
  startedDateTime,
  time = 0
}) => ({
  startedDateTime,
  time,
  request: {
    method,
    url,
    httpVersion: "HTTP/1.1",
    headers: Object.entries(requestHeaders).map(([name, value]) => ({
      name,
      value: String(value)
    })),
    queryString: [...new URL(url).searchParams.entries()].map(([name, value]) => ({
      name,
      value
    })),
    postData: requestBody
      ? {
          mimeType: "application/json",
          text: requestBody
        }
      : undefined
  },
  response: {
    status,
    statusText: "",
    httpVersion: "HTTP/1.1",
    headers: Object.entries(responseHeaders).map(([name, value]) => ({
      name,
      value: String(value)
    })),
    content: {
      size: responseBody.length,
      mimeType: "application/json",
      text: responseBody
    }
  },
  cache: {},
  timings: {
    send: 0,
    wait: time,
    receive: 0
  }
});

export const createHar = entries => ({
  log: {
    version: "1.2",
    creator: {
      name: "SCROV",
      version: "1.1.0"
    },
    entries
  }
});
