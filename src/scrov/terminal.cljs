(ns scrov.terminal
  (:require
   [reagent.core :as r]
   [scrov.state :as state]))

(defonce socket
  (atom nil))

(defn connect! []
  (let [ws
        (js/WebSocket
         (str
          (if (= "https:" (.-protocol js/location))
            "wss://"
            "ws://")
          (.-host js/location)
          "/ws/terminal"))]
    (reset! socket ws)
    (set! (.-onopen ws)
          #(swap! state/app-state assoc
                  :terminal-connected true))
    (set! (.-onmessage ws)
          (fn [event]
            (let [message
                  (js/JSON.parse (.-data event))]
              (when (= "output" (aget message "type"))
                (swap! state/app-state update
                       :command-output
                       str
                       (aget message "data"))))))
    ws))

(defn send! [data]
  (when
   (and @socket
        (= (.-OPEN js/WebSocket)
           (.-readyState @socket)))
    (.send
     @socket
     (js/JSON.stringify
      #js {:type "input"
           :data data}))))

(defn component []
  [:section.panel
   [:h2 "TERMINAL"]
   [:pre.terminal-output
    (:command-output @state/app-state)]
   [:button
    {:on-click #(connect!)}
    "CONNECT"]])
