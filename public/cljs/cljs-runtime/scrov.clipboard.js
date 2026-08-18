goog.provide('scrov.clipboard');
scrov.clipboard.read_BANG_ = (function scrov$clipboard$read_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30220__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch("/api/clipboard")),(function (response){
return promesa.protocols._mcat(promesa.protocols._promise(response.json()),(function (data){
return promesa.protocols._mcat(promesa.protocols._promise((data["value"])),(function (value){
return promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"clipboard","clipboard",398281908),value));
}));
}));
}));
}));
});
scrov.clipboard.write_BANG_ = (function scrov$clipboard$write_BANG_(){
return fetch("/api/clipboard",({"method": "POST", "headers": ({"Content-Type": "application/json"}), "body": JSON.stringify(({"value": new cljs.core.Keyword(null,"clipboard","clipboard",398281908).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state))}))}));
});
scrov.clipboard.component = (function scrov$clipboard$component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.panel","section.panel",-1893414141),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"CLIPBOARD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"clipboard","clipboard",398281908).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30477_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"clipboard","clipboard",398281908),p1__30477_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),scrov.clipboard.read_BANG_], null),"READ"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),scrov.clipboard.write_BANG_], null),"WRITE"], null)], null)], null);
});

//# sourceMappingURL=scrov.clipboard.js.map
