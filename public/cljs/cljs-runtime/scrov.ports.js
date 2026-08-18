goog.provide('scrov.ports');
scrov.ports.ports = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cockpit","cockpit",1450878936),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Cockpit",new cljs.core.Keyword(null,"url","url",276297046),"/ports/cockpit/"], null),new cljs.core.Keyword(null,"github","github",567794498),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"GitHub",new cljs.core.Keyword(null,"url","url",276297046),"https://github.com/"], null),new cljs.core.Keyword(null,"obsidian","obsidian",-192812871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Obsidian",new cljs.core.Keyword(null,"url","url",276297046),"https://obsidian.md/"], null),new cljs.core.Keyword(null,"canva","canva",1733769073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Canva",new cljs.core.Keyword(null,"url","url",276297046),"https://www.canva.com/"], null),new cljs.core.Keyword(null,"plantuml","plantuml",-810825755),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"PlantUML",new cljs.core.Keyword(null,"url","url",276297046),"https://plantuml.com/"], null),new cljs.core.Keyword(null,"drawio","drawio",-1325875363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"draw.io",new cljs.core.Keyword(null,"url","url",276297046),"https://app.diagrams.net/"], null)], null);
scrov.ports.open_BANG_ = (function scrov$ports$open_BANG_(url,name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"embedded-url","embedded-url",1130408604),url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"embedded-title","embedded-title",-748810266),name], 0));
});
scrov.ports.component = (function scrov$ports$component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.panel","section.panel",-1893414141),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"PORTS"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.port-grid","div.port-grid",-1888195003),(function (){var iter__5480__auto__ = (function scrov$ports$component_$_iter__30539(s__30540){
return (new cljs.core.LazySeq(null,(function (){
var s__30540__$1 = s__30540;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30540__$1);
if(temp__5804__auto__){
var s__30540__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30540__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__30540__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__30542 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__30541 = (0);
while(true){
if((i__30541 < size__5479__auto__)){
var vec__30543 = cljs.core._nth(c__5478__auto__,i__30541);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30543,(0),null);
var map__30546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30543,(1),null);
var map__30546__$1 = cljs.core.__destructure_map(map__30546);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30546__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30546__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append(b__30542,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30541,vec__30543,id,map__30546,map__30546__$1,name,url,c__5478__auto__,size__5479__auto__,b__30542,s__30540__$2,temp__5804__auto__){
return (function (){
return scrov.ports.open_BANG_(url,name);
});})(i__30541,vec__30543,id,map__30546,map__30546__$1,name,url,c__5478__auto__,size__5479__auto__,b__30542,s__30540__$2,temp__5804__auto__))
], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__30552 = (i__30541 + (1));
i__30541 = G__30552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30542),scrov$ports$component_$_iter__30539(cljs.core.chunk_rest(s__30540__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30542),null);
}
} else {
var vec__30547 = cljs.core.first(s__30540__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30547,(0),null);
var map__30550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30547,(1),null);
var map__30550__$1 = cljs.core.__destructure_map(map__30550);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__30547,id,map__30550,map__30550__$1,name,url,s__30540__$2,temp__5804__auto__){
return (function (){
return scrov.ports.open_BANG_(url,name);
});})(vec__30547,id,map__30550,map__30550__$1,name,url,s__30540__$2,temp__5804__auto__))
], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),scrov$ports$component_$_iter__30539(cljs.core.rest(s__30540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(scrov.ports.ports);
})()], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"embedded-url","embedded-url",1130408604).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state));
if(cljs.core.truth_(temp__5804__auto__)){
var url = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.embedded","div.embedded",-2029359654),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"embedded-title","embedded-title",-748810266).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.dissoc,new cljs.core.Keyword(null,"embedded-url","embedded-url",1130408604),new cljs.core.Keyword(null,"embedded-title","embedded-title",-748810266));
})], null),"\u00D7"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"embedded-title","embedded-title",-748810266).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state))], null)], null)], null);
} else {
return null;
}
})()], null);
});

//# sourceMappingURL=scrov.ports.js.map
