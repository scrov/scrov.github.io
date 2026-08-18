(ns scrov.navbox
  (:require
   [scrov.routes :as routes]
   [scrov.state :as state]))

(defn item [route]
  [:button
   {:on-click #(routes/navigate! route)}
   (get routes/routes route)])

(defn component []
  [:aside
   {:class (when (:nav-open @state/app-state)
             "navbox open")}
   [:div.navbox-header
    [:strong "NAVBOX"]
    [:button
     {:on-click #(swap! state/app-state update :nav-open not)}
     "×"]]
   [item :home]
   [item :dom]
   [item :network]
   [item :data]
   [item :semantic]
   [item :automation]
   [item :terminal]
   [item :clipboard]
   [item :ports]])
