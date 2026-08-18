local M = {}

function M.mark()
    ngx.req.set_header(
        "X-SCROV-Proxy",
        "openresty"
    )
end

return M
