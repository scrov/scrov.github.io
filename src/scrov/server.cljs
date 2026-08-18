(ns scrov.server)

(defn main! []
  (js/console.log
   "SCROV server runtime loaded"))

(set! *main-cli-fn* main!)
