(ns scrov.network
  (:require
   [promesa.core :as p]
   [scrov.state :as state]))

(defn parse-json [value]
  (try
    (js/JSON.parse value)
    (catch :default _
      value)))

(defn request! []
  (let [{:keys [method url headers body]}
        (:request @state/app-state)
        header-map
        (parse-json headers)
        options
        #js {:method method
             :headers (clj->js header-map)}]
    (when
      (and
       (not (contains? #{"GET" "HEAD"} method))
       (not (empty? body)))
      (aset options "body" body))
    (p/let [response (js/fetch url options)
            text (.text response)
            parsed (try
                     (js/JSON.parse text)
                     (catch :default _ text))]
      (swap! state/app-state assoc :response
             {:status (.-status response)
              :status-text (.-statusText response)
              :body parsed})
      parsed)))
