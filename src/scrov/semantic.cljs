(ns scrov.semantic
  (:require
   [scrov.state :as state]))

(defn jsonld->triples [value]
  (let [data (js->clj value :keywordize-keys false)
        subject (or (get data "@id") "_:node")]
    (for [[key item] data
          :when (not= key "@context")
          :when (not= key "@id")]
      {:subject subject
       :predicate key
       :object item})))

(defn plantuml []
  "@startuml
class SCROV
SCROV : ShadowCLJS
SCROV : Reagent
SCROV : Sitefox
SCROV : OpenResty
SCROV : Fennel
SCROV : Fengari
SCROV : Melange
@enduml")

(defn component []
  [:section.panel
   [:h2 "SEMANTIC MODEL"]
   [:textarea
    {:value (:semantic @state/app-state)
     :on-change
     #(swap! state/app-state
             assoc
             :semantic
             (-> % .-target .-value))}]
   [:div.toolbar
    [:button
     {:on-click
      #(swap! state/app-state
              assoc
              :command-output
              (plantuml))}
     "PLANTUML"]]
   [:pre.output
    (:command-output @state/app-state)]])
