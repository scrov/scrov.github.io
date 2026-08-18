goog.provide('scrov.bookmarks');
scrov.bookmarks.bookmarklet = (function scrov$bookmarks$bookmarklet(source){
return ["javascript:(async()=>{",clojure.string.replace(source,/^javascript:/,""),"})()"].join('');
});
scrov.bookmarks.save_BANG_ = (function scrov$bookmarks$save_BANG_(){
var source = new cljs.core.Keyword(null,"bookmarklet","bookmarklet",-1073843547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state));
var id = ["bookmarklet-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
scrov.data.put_BANG_(id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bookmarklet","bookmarklet",-1073843547),new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"url","url",276297046),scrov.bookmarks.bookmarklet(source)], null));

return id;
});
scrov.bookmarks.component = (function scrov$bookmarks$component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.panel","section.panel",-1893414141),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"BOOKMARKLET"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"bookmarklet","bookmarklet",-1073843547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30551_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"bookmarklet","bookmarklet",-1073843547),p1__30551_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),scrov.bookmarks.save_BANG_], null),"SAVE"], null)], null);
});

//# sourceMappingURL=scrov.bookmarks.js.map
