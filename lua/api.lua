local cjson = require("cjson.safe")

local M = {}

function M.health()
    ngx.header.content_type = "application/json"

    ngx.say(
        cjson.encode({
            ok = true,
            runtime = "openresty",
            service = "scrov"
        })
    )
end

return M
