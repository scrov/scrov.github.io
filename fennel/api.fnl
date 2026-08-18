(local cjson (require :cjson))

(local M {})

(fn M.health []
  {:ok true
   :runtime :openresty
   :service :scrov})

(fn M.json [value]
  (cjson.encode value))

M
