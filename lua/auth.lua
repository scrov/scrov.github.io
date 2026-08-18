local M = {}

function M.local_only()
    if ngx.var.remote_addr == "127.0.0.1" then
        return true
    end

    ngx.status = 403
    ngx.say("forbidden")
    return false
end

return M
