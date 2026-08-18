(ns scrov.workspace
  (:require
   [scrov.state :as state]
   [scrov.command :as command]
   [scrov.userscripts :as userscripts]
   [scrov.macros :as macros]
   [scrov.bookmarks :as bookmarks]
   [scrov.terminal :as terminal]
   [scrov.clipboard :as clipboard]
   [scrov.ports :as ports]
   [scrov.network :as network]
   [scrov.semantic :as semantic]))

(defn command-footer []
  [:footer.footer
   [:span.prompt "›_"]
   [:form
    {:on-submit
     (fn [event]
       (.preventDefault event)
       (command/execute!
        (:command @state/app-state))
       (swap! state/app-state assoc :command ""))}
    [:input
     {:value (:command @state/app-state)
      :on-change
      #(swap! state/app-state
              assoc
              :command
              (-> % .-target .-value))
      :placeholder "command | pipeline"}]
    [:button
     {:type "submit"}
     "RUN"]]])

(defn home []
  [:section.panel
   [:div.hero
    [:div
     [:span.eyebrow "BROWSER CONTROL PLANE"]
     [:h1 "SCROV"]
     [:p
      "Sitefox + Shadow-CLJS + Reagent + OpenResty + Fennel + Fengari + Melange."]
     [:div.toolbar
      [:button
       {:on-click #(swap! state/app-state assoc :route :automation)}
       "AUTOMATION"]
      [:button
       {:on-click #(swap! state/app-state assoc :route :network)}
       "REST"]
      [:button
       {:on-click #(swap! state/app-state assoc :route :terminal)}
       "TERMINAL"]]]
    [:div.status-card
     [:strong "POLYGLOT"]
     [:span "CLJS / OCAML / LUA / FENNEL"]]]])

(defn network-panel []
  [:section.panel
   [:h2 "REST / AJAX / XHR"]
   [:input
    {:placeholder "https://example.com/api"
     :value (get-in @state/app-state [:request :url])
     :on-change
     #(swap! state/app-state assoc-in
             [:request :url]
             (-> % .-target .-value))}]
   [:textarea
    {:value (get-in @state/app-state [:request :body])
     :on-change
     #(swap! state/app-state assoc-in
             [:request :body]
             (-> % .-target .-value))}]
   [:button
    {:on-click network/request!}
    "SEND"]
   [:pre.output
    (pr-str (:response @state/app-state))]])

(defn render-panel []
  (case (:route @state/app-state)
    :home [home]
    :automation
    [:div.workspace-grid
     [userscripts/component]
     [macros/component]
     [bookmarks/component]]
    :terminal [terminal/component]
    :clipboard [clipboard/component]
    :ports [ports/component]
    :network [network-panel]
    :semantic [semantic/component]
    :dom
    [:section.panel
     [:h2 "DOM / XPATH"]
     [:p "DOM and XPath commands are bridged through Firefox."]]
    :data
    [:section.panel
     [:h2 "DATA"]
     [:p "IndexedDB and Sitefox SQLite storage."]]
    [home]))

(defn header []
  [:header.header
   [:button
    {:on-click
     #(swap! state/app-state
             update
             :nav-open
             not)}
    "☰"]
   [:strong.brand "SCROV"]
   [:nav.tabs
    (for [[route label]
          [[:home "HOME"]
           [:automation "AUTOMATION"]
           [:network "REST"]
           [:semantic "SEMANTIC"]
           [:terminal "TERMINAL"]
           [:ports "PORTS"]]]
      ^{:key route}
      [:button
       {:class
        (when (= route (:route @state/app-state))
          "active")
        :on-click
        #(swap! state/app-state
                assoc
                :route route)}
       label])]])

(defn component []
  [:<>
   [header]
   [:main.main
    [render-panel]]
   [command-footer]])
