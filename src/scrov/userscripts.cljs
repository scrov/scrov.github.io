(ns scrov.userscripts
  (:require
   [scrov.state :as state]
   [scrov.data :as data]))

(defn parse-metadata [source]
  (let [match
        (re-find
         #"(?s)// ==UserScript==(.*?)// ==/UserScript=="
         source)]
    (if-not match
      {}
      (into {}
            (map
             (fn [[_ key value]]
               [(keyword key) value])
             (re-seq
              #"(?m)^\s*//\s*@(\S+)\s+(.+)$"
              (second match)))))))

(defn save! []
  (let [source (:userscript @state/app-state)
        metadata (parse-metadata source)
        id (str "userscript-" (random-uuid))]
    (data/put!
     id
     {:type :userscript
      :metadata metadata
      :source source})
    id))

(defn execute-userscript! []
  (let [source (:userscript @state/app-state)]
    (.postMessage
     js/window
     #js {:source "scrov"
          :type "userscript"
          :source-code source}
     "*")))

(defn component []
  [:section.panel
   [:h2 "USERSCRIPT"]
   [:textarea
    {:value (:userscript @state/app-state)
     :on-change
     #(swap! state/app-state
             assoc
             :userscript
             (-> % .-target .-value))}]
   [:div.toolbar
    [:button
     {:on-click execute-userscript!}
     "RUN"]
    [:button
     {:on-click save!}
     "SAVE"]]])
