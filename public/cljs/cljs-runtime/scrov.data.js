goog.provide('scrov.data');
scrov.data.database_name = "scrov-workspace";
scrov.data.store_name = "workspace";
scrov.data.open_db = (function scrov$data$open_db(){
return (new Promise((function (resolve,reject){
var request = indexedDB.open(scrov.data.database_name,(1));
(request.onupgradeneeded = (function (){
var db = request.result;
if(cljs.core.truth_(db.objectStoreNames.contains(scrov.data.store_name))){
return null;
} else {
return db.createObjectStore(scrov.data.store_name);
}
}));

(request.onsuccess = (function (){
var G__30492 = request.result;
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__30492) : resolve.call(null,G__30492));
}));

return (request.onerror = (function (){
var G__30501 = request.error;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__30501) : reject.call(null,G__30501));
}));
})));
});
scrov.data.put_BANG_ = (function scrov$data$put_BANG_(key,value){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30220__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(scrov.data.open_db()),(function (db){
return promesa.protocols._promise((new Promise((function (resolve,reject){
var tx = db.transaction([scrov.data.store_name],"readwrite");
var store = tx.objectStore(scrov.data.store_name);
store.put(value,key);

(tx.oncomplete = (function (){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(value) : resolve.call(null,value));
}));

return (tx.onerror = (function (){
var G__30527 = tx.error;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__30527) : reject.call(null,G__30527));
}));
}))));
}));
}));
});
scrov.data.get_BANG_ = (function scrov$data$get_BANG_(key){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30220__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(scrov.data.open_db()),(function (db){
return promesa.protocols._promise((new Promise((function (resolve,reject){
var tx = db.transaction([scrov.data.store_name],"readonly");
var request = tx.objectStore(scrov.data.store_name).get(key);
(request.onsuccess = (function (){
var G__30533 = request.result;
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__30533) : resolve.call(null,G__30533));
}));

return (request.onerror = (function (){
var G__30534 = request.error;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__30534) : reject.call(null,G__30534));
}));
}))));
}));
}));
});

//# sourceMappingURL=scrov.data.js.map
