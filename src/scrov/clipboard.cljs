(ns scrov.clipboard
  (:require
   [promesa.core :as p]
   [scrov.state :as state]))

(defn read! []
  (p/let [response
          (js/fetch "/api/clipboard")
          data
          (.json response)
          value
          (aget data "value")]
    (swap! state/app-state
           assoc
           :clipboard
           value)))

(defn write! []
  (js/fetch
   "/api/clipboard"
   #js {:method "POST"
        :headers
        #js {"Content-Type"
             "application/json"}
        :body
        (js/JSON.stringify
         #js {:value
              (:clipboard
               @state/app-state)})}))

(defn component []
  [:section.panel
   [:h2 "CLIPBOARD"]
   [:textarea
    {:value (:clipboard @state/app-state)
     :on-change
     #(swap! state/app-state
             assoc
             :clipboard
             (-> % .-target .-value))}]
   [:div.toolbar
    [:button {:on-click read!} "READ"]
    [:button {:on-click write!} "WRITE"]]])
