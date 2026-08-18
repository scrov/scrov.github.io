goog.provide('scrov.command');
scrov.command.commands = cljs.core.PersistentHashMap.fromArrays(["dom","clipboard.read","route","fennel","db.get","lua","api","help","clipboard.write","xpath","db.put"],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"DOM selector"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"read clipboard"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"navigate workspace"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"OpenResty/Fennel route"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"read Sitefox storage"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"execute browser Lua"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"REST request"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"list commands"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"write clipboard"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"XPath query"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"write Sitefox storage"], null)]);
scrov.command.tokens = (function scrov$command$tokens(value){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30484_SHARP_){
return clojure.string.replace(p1__30484_SHARP_,/^['\"]|['\"]$/,"");
}),cljs.core.re_seq(/\"[^\"]*\"|'[^']*'|\S+/,value)));
});
scrov.command.dispatch_route = (function scrov$command$dispatch_route(route){
var route_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"terminal","terminal",-927870592),null,new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"semantic","semantic",-1174869020),null,new cljs.core.Keyword(null,"ports","ports",-1014790862),null,new cljs.core.Keyword(null,"clipboard","clipboard",398281908),null,new cljs.core.Keyword(null,"automation","automation",1657381622),null,new cljs.core.Keyword(null,"network","network",2050004697),null,new cljs.core.Keyword(null,"dom","dom",-1236537922),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),route_key)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"route","route",329891309),route_key);
} else {
return null;
}
});
scrov.command.execute_local = (function scrov$command$execute_local(line){
var vec__30522 = scrov.command.tokens(line);
var seq__30523 = cljs.core.seq(vec__30522);
var first__30524 = cljs.core.first(seq__30523);
var seq__30523__$1 = cljs.core.next(seq__30523);
var name = first__30524;
var args = seq__30523__$1;
var G__30526 = name;
switch (G__30526) {
case "help":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30528){
var vec__30530 = p__30528;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30530,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30530,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(v))].join('');
}),scrov.command.commands));

break;
case "route":
scrov.command.dispatch_route(cljs.core.first(args));

return ["route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))].join('');

break;
case "clipboard.read":
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30220__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch("/api/clipboard").then((function (p1__30511_SHARP_){
return p1__30511_SHARP_.json();
})).then((function (p1__30512_SHARP_){
return (p1__30512_SHARP_["value"]);
}))),(function (value){
return promesa.protocols._promise(value);
}));
}));

break;
case "clipboard.write":
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30220__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch("/api/clipboard",({"method": "POST", "headers": ({"Content-Type": "application/json"}), "body": JSON.stringify(({"value": clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args)}))}))),(function (_){
return promesa.protocols._promise("clipboard written");
}));
}));

break;
case "api":
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30220__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch(cljs.core.first(args))),(function (response){
return promesa.protocols._mcat(promesa.protocols._promise(response.then((function (p1__30514_SHARP_){
return p1__30514_SHARP_.text();
}))),(function (value){
return promesa.protocols._promise(value);
}));
}));
}));

break;
case "dom":
return ["selector: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args)].join('');

break;
case "xpath":
return ["xpath: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args)].join('');

break;
case "lua":
return ["fengari: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args)].join('');

break;
case "fennel":
return ["fennel route: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args)].join('');

break;
case "db.get":
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30220__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch(["/api/db/get/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))].join(''))),(function (response){
return promesa.protocols._mcat(promesa.protocols._promise(response.then((function (p1__30516_SHARP_){
return p1__30516_SHARP_.json();
}))),(function (value){
return promesa.protocols._promise(JSON.stringify(value,null,(2)));
}));
}));
}));

break;
case "db.put":
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30220__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch("/api/db/put",({"method": "POST", "headers": ({"Content-Type": "application/json"}), "body": JSON.stringify(({"key": cljs.core.first(args), "value": clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.rest(args))}))}))),(function (response){
return promesa.protocols._promise(response.text());
}));
}));

break;
default:
return ["unknown command: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');

}
});
scrov.command.execute_BANG_ = (function scrov$command$execute_BANG_(value){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30220__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(scrov.command.execute_local(value)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"command-output","command-output",-931527943),cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))),(function (___30188__auto__){
return promesa.protocols._promise(result);
}));
}));
}));
});

//# sourceMappingURL=scrov.command.js.map
