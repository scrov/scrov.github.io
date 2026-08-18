goog.provide('scrov.network');
scrov.network.parse_json = (function scrov$network$parse_json(value){
try{return JSON.parse(value);
}catch (e30554){var _ = e30554;
return value;
}});
scrov.network.request_BANG_ = (function scrov$network$request_BANG_(){
var map__30555 = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state));
var map__30555__$1 = cljs.core.__destructure_map(map__30555);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30555__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30555__$1,new cljs.core.Keyword(null,"url","url",276297046));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30555__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30555__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var header_map = scrov.network.parse_json(headers);
var options = ({"method": method, "headers": cljs.core.clj__GT_js(header_map)});
if((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["HEAD",null,"GET",null], null), null),method)))) && ((!(cljs.core.empty_QMARK_(body)))))){
(options["body"] = body);
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30220__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch(url,options)),(function (response){
return promesa.protocols._mcat(promesa.protocols._promise(response.text()),(function (text){
return promesa.protocols._mcat(promesa.protocols._promise((function (){try{return JSON.parse(text);
}catch (e30556){var _ = e30556;
return text;
}})()),(function (parsed){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),response.status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),response.statusText,new cljs.core.Keyword(null,"body","body",-2049205669),parsed], null))),(function (___30188__auto__){
return promesa.protocols._promise(parsed);
}));
}));
}));
}));
}));
});

//# sourceMappingURL=scrov.network.js.map
