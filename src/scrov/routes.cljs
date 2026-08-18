(ns scrov.routes
  (:require
   [scrov.state :as state]))

(def routes
  {:home "HOME"
   :dom "DOM"
   :network "NETWORK"
   :data "DATA"
   :semantic "SEMANTIC"
   :automation "AUTOMATION"
   :terminal "TERMINAL"
   :clipboard "CLIPBOARD"
   :ports "PORTS"})

(defn navigate! [route]
  (swap! state/app-state
         assoc
         :route route
         :nav-open false))

(defn current-route []
  (:route @state/app-state))
