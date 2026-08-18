(ns scrov.data
  (:require
   [promesa.core :as p]
   [scrov.state :as state]))

(def database-name "scrov-workspace")
(def store-name "workspace")

(defn open-db []
  (js/Promise.
   (fn [resolve reject]
     (let [request
           (.open js/indexedDB database-name 1)]
       (set! (.-onupgradeneeded request)
             (fn []
               (let [db (.-result request)]
                 (when-not
                  (.contains (.-objectStoreNames db) store-name)
                   (.createObjectStore db store-name)))))
       (set! (.-onsuccess request)
             (fn []
               (resolve (.-result request))))
       (set! (.-onerror request)
             (fn []
               (reject (.-error request))))))))

(defn put! [key value]
  (p/let [db (open-db)]
    (js/Promise.
     (fn [resolve reject]
       (let [tx (.transaction db #js [store-name] "readwrite")
             store (.objectStore tx store-name)]
         (.put store value key)
         (set! (.-oncomplete tx)
               #(resolve value))
         (set! (.-onerror tx)
               #(reject (.-error tx))))))))

(defn get! [key]
  (p/let [db (open-db)]
    (js/Promise.
     (fn [resolve reject]
       (let [tx (.transaction db #js [store-name] "readonly")
             request (.get (.objectStore tx store-name) key)]
         (set! (.-onsuccess request)
               #(resolve (.-result request)))
         (set! (.-onerror request)
               #(reject (.-error request))))))))
