(local _M {})

(fn _M.proxy [upstream]
  (ngx.req.set_header "X-SCROV-Proxy" "openresty")
  (ngx.exec upstream))

_M
