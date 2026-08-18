(ns scrov.core
  (:require
   [reagent.dom.client :as rdom]
   [scrov.state :as state]
   [scrov.workspace :as workspace]))

(defonce root
  (atom nil))

(defn app []
  [workspace/component])

(defn init []
  (let [element
        (.getElementById
         js/document
         "app")]
    (reset!
     root
     (rdom/create-root element))
    (rdom/render
     @root
     [app])))

(defn reload! []
  (when @root
    (rdom/render
     @root
     [app])))
