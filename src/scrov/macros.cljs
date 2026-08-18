(ns scrov.macros
  (:require
   [clojure.string :as str]
   [scrov.state :as state]
   [scrov.command :as command]))

(defn run-macro! []
  (let [lines
        (-> (:macro @state/app-state)
            (str/split-lines)
            (->> (map str/trim)
                 (remove empty?)
                 vec))]
    (doseq [line lines]
      (command/execute! line))))

(defn component []
  [:section.panel
   [:h2 "MACRO"]
   [:textarea
    {:value (:macro @state/app-state)
     :on-change
     #(swap! state/app-state
             assoc
             :macro
             (-> % .-target .-value))}]
   [:button
    {:on-click run-macro!}
    "RUN PIPELINE"]])
