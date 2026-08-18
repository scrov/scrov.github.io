(ns scrov.command
  (:require
   [clojure.string :as str]
   [promesa.core :as p]
   [scrov.state :as state]))

(def commands
  {"help" {:description "list commands"}
   "route" {:description "navigate workspace"}
   "api" {:description "REST request"}
   "dom" {:description "DOM selector"}
   "xpath" {:description "XPath query"}
   "db.get" {:description "read Sitefox storage"}
   "db.put" {:description "write Sitefox storage"}
   "clipboard.read" {:description "read clipboard"}
   "clipboard.write" {:description "write clipboard"}
   "lua" {:description "execute browser Lua"}
   "fennel" {:description "OpenResty/Fennel route"}})

(defn tokens [value]
  (->> (re-seq #"\"[^\"]*\"|'[^']*'|\S+" value)
       (map #(str/replace % #"^['\"]|['\"]$" ""))
       vec))

(defn dispatch-route [route]
  (let [route-key
        (keyword route)]
    (when
     (contains? #{:home :dom :network :data :semantic :automation :terminal :clipboard :ports}
                route-key)
      (swap! state/app-state assoc :route route-key))))

(defn execute-local [line]
  (let [[name & args] (tokens line)]
    (case name
      "help"
      (str/join "\n"
                (map
                 (fn [[k v]]
                   (str k "  " (:description v)))
                 commands))

      "route"
      (do
        (dispatch-route (first args))
        (str "route: " (first args)))

      "clipboard.read"
      (p/let [value
                    (-> (js/fetch "/api/clipboard")
                        (.then #(.json %))
                        (.then #(aget % "value")))]
        value)

      "clipboard.write"
      (p/let [_ (js/fetch "/api/clipboard"
                          #js {:method "POST"
                               :headers #js {"Content-Type" "application/json"}
                               :body (js/JSON.stringify
                                      #js {:value (str/join " " args)})})]
        "clipboard written")

      "api"
      (p/let [response
                    (js/fetch
                     (first args))
             value
             (.then response #(.text %))]
        value)

      "dom"
      (str "selector: " (str/join " " args))

      "xpath"
      (str "xpath: " (str/join " " args))

      "lua"
      (str "fengari: " (str/join " " args))

      "fennel"
      (str "fennel route: " (str/join " " args))

      "db.get"
      (p/let [response
                    (js/fetch
                     (str "/api/db/get/" (first args)))
             value
             (.then response #(.json %))]
        (js/JSON.stringify value nil 2))

      "db.put"
      (p/let [response
                    (js/fetch
                     "/api/db/put"
                     #js {:method "POST"
                          :headers #js {"Content-Type" "application/json"}
                          :body
                          (js/JSON.stringify
                           #js {:key (first args)
                                :value (str/join " " (rest args))})})]
        (.text response))

      (str "unknown command: " name))))

(defn execute! [value]
  (p/let [result (execute-local value)]
    (swap! state/app-state assoc
           :command-output
           (str result))
    result))
