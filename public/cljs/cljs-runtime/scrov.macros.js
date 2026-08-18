goog.provide('scrov.macros');
scrov.macros.run_macro_BANG_ = (function scrov$macros$run_macro_BANG_(){
var lines = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split_lines(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state))))));
var seq__30557 = cljs.core.seq(lines);
var chunk__30558 = null;
var count__30559 = (0);
var i__30560 = (0);
while(true){
if((i__30560 < count__30559)){
var line = chunk__30558.cljs$core$IIndexed$_nth$arity$2(null,i__30560);
scrov.command.execute_BANG_(line);


var G__30566 = seq__30557;
var G__30567 = chunk__30558;
var G__30568 = count__30559;
var G__30569 = (i__30560 + (1));
seq__30557 = G__30566;
chunk__30558 = G__30567;
count__30559 = G__30568;
i__30560 = G__30569;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30557);
if(temp__5804__auto__){
var seq__30557__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30557__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30557__$1);
var G__30573 = cljs.core.chunk_rest(seq__30557__$1);
var G__30574 = c__5525__auto__;
var G__30575 = cljs.core.count(c__5525__auto__);
var G__30576 = (0);
seq__30557 = G__30573;
chunk__30558 = G__30574;
count__30559 = G__30575;
i__30560 = G__30576;
continue;
} else {
var line = cljs.core.first(seq__30557__$1);
scrov.command.execute_BANG_(line);


var G__30577 = cljs.core.next(seq__30557__$1);
var G__30578 = null;
var G__30579 = (0);
var G__30580 = (0);
seq__30557 = G__30577;
chunk__30558 = G__30578;
count__30559 = G__30579;
i__30560 = G__30580;
continue;
}
} else {
return null;
}
}
break;
}
});
scrov.macros.component = (function scrov$macros$component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.panel","section.panel",-1893414141),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"MACRO"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30565_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),p1__30565_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),scrov.macros.run_macro_BANG_], null),"RUN PIPELINE"], null)], null);
});

//# sourceMappingURL=scrov.macros.js.map
