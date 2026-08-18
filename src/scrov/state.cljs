(ns scrov.state
  (:require
   [reagent.core :as r]))

(defonce app-state
  (r/atom
   {:route :home
    :nav-open false
    :command ""
    :command-output ""
    :embedded-url nil
    :embedded-title nil
    :terminal-connected false
    :userscript ""
    :macro ""
    :bookmarklet ""
    :snippet ""
    :semantic ""
    :clipboard ""
    :request
    {:method "GET"
     :url ""
     :headers "{}"
     :body ""}
    :response nil}))
