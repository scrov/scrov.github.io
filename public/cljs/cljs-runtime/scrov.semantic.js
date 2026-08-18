goog.provide('scrov.semantic');
scrov.semantic.jsonld__GT_triples = (function scrov$semantic$jsonld__GT_triples(value){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false], 0));
var subject = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"@id");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "_:node";
}
})();
var iter__5480__auto__ = (function scrov$semantic$jsonld__GT_triples_$_iter__30561(s__30562){
return (new cljs.core.LazySeq(null,(function (){
var s__30562__$1 = s__30562;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30562__$1);
if(temp__5804__auto__){
var s__30562__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30562__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__30562__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__30564 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__30563 = (0);
while(true){
if((i__30563 < size__5479__auto__)){
var vec__30570 = cljs.core._nth(c__5478__auto__,i__30563);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30570,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30570,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,"@context")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,"@id")){
cljs.core.chunk_append(b__30564,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"subject","subject",-1411880451),subject,new cljs.core.Keyword(null,"predicate","predicate",-1742501860),key,new cljs.core.Keyword(null,"object","object",1474613949),item], null));

var G__30590 = (i__30563 + (1));
i__30563 = G__30590;
continue;
} else {
var G__30591 = (i__30563 + (1));
i__30563 = G__30591;
continue;
}
} else {
var G__30592 = (i__30563 + (1));
i__30563 = G__30592;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30564),scrov$semantic$jsonld__GT_triples_$_iter__30561(cljs.core.chunk_rest(s__30562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30564),null);
}
} else {
var vec__30581 = cljs.core.first(s__30562__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30581,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30581,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,"@context")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,"@id")){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"subject","subject",-1411880451),subject,new cljs.core.Keyword(null,"predicate","predicate",-1742501860),key,new cljs.core.Keyword(null,"object","object",1474613949),item], null),scrov$semantic$jsonld__GT_triples_$_iter__30561(cljs.core.rest(s__30562__$2)));
} else {
var G__30593 = cljs.core.rest(s__30562__$2);
s__30562__$1 = G__30593;
continue;
}
} else {
var G__30598 = cljs.core.rest(s__30562__$2);
s__30562__$1 = G__30598;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(data);
});
scrov.semantic.plantuml = (function scrov$semantic$plantuml(){
return "@startuml\nclass SCROV\nSCROV : ShadowCLJS\nSCROV : Reagent\nSCROV : Sitefox\nSCROV : OpenResty\nSCROV : Fennel\nSCROV : Fengari\nSCROV : Melange\n@enduml";
});
scrov.semantic.component = (function scrov$semantic$component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.panel","section.panel",-1893414141),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"SEMANTIC MODEL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"semantic","semantic",-1174869020).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30585_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"semantic","semantic",-1174869020),p1__30585_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"command-output","command-output",-931527943),scrov.semantic.plantuml());
})], null),"PLANTUML"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.output","pre.output",1335022114),new cljs.core.Keyword(null,"command-output","command-output",-931527943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state))], null)], null);
});

//# sourceMappingURL=scrov.semantic.js.map
