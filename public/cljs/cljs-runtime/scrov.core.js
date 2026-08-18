goog.provide('scrov.core');
if((typeof scrov !== 'undefined') && (typeof scrov.core !== 'undefined') && (typeof scrov.core.root !== 'undefined')){
} else {
scrov.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
scrov.core.app = (function scrov$core$app(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrov.workspace.component], null);
});
scrov.core.init = (function scrov$core$init(){
var element = document.getElementById("app");
cljs.core.reset_BANG_(scrov.core.root,reagent.dom.client.create_root(element));

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scrov.core.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrov.core.app], null));
});
scrov.core.reload_BANG_ = (function scrov$core$reload_BANG_(){
if(cljs.core.truth_(cljs.core.deref(scrov.core.root))){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(scrov.core.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrov.core.app], null));
} else {
return null;
}
});

//# sourceMappingURL=scrov.core.js.map
