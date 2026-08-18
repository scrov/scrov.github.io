goog.provide('scrov.userscripts');
scrov.userscripts.parse_metadata = (function scrov$userscripts$parse_metadata(source){
var match = cljs.core.re_find(/\/\/ ==UserScript==(.*?)\/\/ ==\/UserScript==/s,source);
if(cljs.core.not(match)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30535){
var vec__30536 = p__30535;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30536,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30536,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30536,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),value], null);
}),cljs.core.re_seq(/^\s*\/\/\s*@(\S+)\s+(.+)$/m,cljs.core.second(match))));
}
});
scrov.userscripts.save_BANG_ = (function scrov$userscripts$save_BANG_(){
var source = new cljs.core.Keyword(null,"userscript","userscript",952174919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state));
var metadata = scrov.userscripts.parse_metadata(source);
var id = ["userscript-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
scrov.data.put_BANG_(id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"userscript","userscript",952174919),new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"source","source",-433931539),source], null));

return id;
});
scrov.userscripts.execute_userscript_BANG_ = (function scrov$userscripts$execute_userscript_BANG_(){
var source = new cljs.core.Keyword(null,"userscript","userscript",952174919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state));
return window.postMessage(({"source": "scrov", "type": "userscript", "source-code": source}),"*");
});
scrov.userscripts.component = (function scrov$userscripts$component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.panel","section.panel",-1893414141),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"USERSCRIPT"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"userscript","userscript",952174919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30553_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"userscript","userscript",952174919),p1__30553_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),scrov.userscripts.execute_userscript_BANG_], null),"RUN"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),scrov.userscripts.save_BANG_], null),"SAVE"], null)], null)], null);
});

//# sourceMappingURL=scrov.userscripts.js.map
