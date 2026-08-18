(ns scrov.bookmarks
  (:require
   [scrov.state :as state]
   [scrov.data :as data]))

(defn bookmarklet [source]
  (str
   "javascript:(async()=>{"
   (clojure.string/replace
    source
    #"^javascript:"
    "")
   "})()"))

(defn save! []
  (let [source (:bookmarklet @state/app-state)
        id (str "bookmarklet-" (random-uuid))]
    (data/put!
     id
     {:type :bookmarklet
      :source source
      :url (bookmarklet source)})
    id))

(defn component []
  [:section.panel
   [:h2 "BOOKMARKLET"]
   [:textarea
    {:value (:bookmarklet @state/app-state)
     :on-change
     #(swap! state/app-state
             assoc
             :bookmarklet
             (-> % .-target .-value))}]
   [:button {:on-click save!}
    "SAVE"]])
