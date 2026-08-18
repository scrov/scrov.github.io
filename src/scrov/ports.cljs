(ns scrov.ports
  (:require
   [scrov.state :as state]))

(def ports
  {:cockpit
   {:name "Cockpit"
    :url "/ports/cockpit/"}

   :github
   {:name "GitHub"
    :url "https://github.com/"}

   :obsidian
   {:name "Obsidian"
    :url "https://obsidian.md/"}

   :canva
   {:name "Canva"
    :url "https://www.canva.com/"}

   :plantuml
   {:name "PlantUML"
    :url "https://plantuml.com/"}

   :drawio
   {:name "draw.io"
    :url "https://app.diagrams.net/"}})

(defn open! [url name]
  (swap! state/app-state
         assoc
         :embedded-url url
         :embedded-title name))

(defn component []
  [:section.panel
   [:h2 "PORTS"]
   [:div.port-grid
    (for [[id {:keys [name url]}] ports]
      ^{:key id}
      [:button
       {:on-click #(open! url name)}
       name])]
   (when-let [url (:embedded-url @state/app-state)]
     [:div.embedded
      [:header
       [:strong (:embedded-title @state/app-state)]
       [:button
        {:on-click #(swap! state/app-state dissoc
                           :embedded-url
                           :embedded-title)}
        "×"]]
      [:iframe
       {:src url
        :title (:embedded-title @state/app-state)}]])])
