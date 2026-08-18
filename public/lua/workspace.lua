local function health()
  local xhr = XMLHttpRequest.new()
  xhr:open("GET", "/api/health", false)
  xhr:send()
  return xhr.responseText
end

local result = health()

print(result)
