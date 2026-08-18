(ns scrov.server
  (:require
   [promesa.core :as p]
   [sitefox.web :as web]
   [sitefox.html :refer [render]]
   [sitefox.db :as db]))

(defn health [_req res]
  (.json
   res
   #js {:ok true
        :service "scrov"
        :runtime "sitefox"}))

(defn homepage [_req res]
  (.send
   res
   (render
    [:main
     [:div {:id "app"}]])))

(defn db-get [_req res]
  (let [key (aget _req "params" "key")
        table (db/kv "scrov")]
    (-> (.get table key)
        (.then
         (fn [value]
           (.json res
                  #js {:key key
                       :value value}))))))

(defn db-put [req res]
  (let [key (aget req "body" "key")
        value (aget req "body" "value")
        table (db/kv "scrov")]
    (-> (.set table key value)
        (.then
         (fn [_]
           (.json res
                  #js {:ok true
                       :key key
                       :value value}))))))

(defn setup-routes [app]
  (web/reset-routes app)

  (.get
   app
   "/"
   homepage)

  (.get
   app
   "/api/health"
   health)

  (.get
   app
   "/api/db/get/:key"
   db-get)

  (.post
   app
   "/api/db/put"
   db-put)

  (web/static-folder
   app
   "/"
   "public"))

(defn main! []
  (p/let [[app host port]
          (web/start)]
    (setup-routes app)
    (js/console.log
     (str
      "SCROV Sitefox: http://"
      host
      ":"
      port))))
