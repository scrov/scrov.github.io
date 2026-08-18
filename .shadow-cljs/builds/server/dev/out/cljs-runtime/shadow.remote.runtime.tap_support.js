goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__16212,p__16213){
var map__16214 = p__16212;
var map__16214__$1 = cljs.core.__destructure_map(map__16214);
var svc = map__16214__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16214__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16214__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16214__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__16215 = p__16213;
var map__16215__$1 = cljs.core.__destructure_map(map__16215);
var msg = map__16215__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16215__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16215__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16215__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16215__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__16229,p__16230){
var map__16233 = p__16229;
var map__16233__$1 = cljs.core.__destructure_map(map__16233);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16233__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__16234 = p__16230;
var map__16234__$1 = cljs.core.__destructure_map(map__16234);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16234__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__16239,p__16240){
var map__16241 = p__16239;
var map__16241__$1 = cljs.core.__destructure_map(map__16241);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16241__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16241__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__16242 = p__16240;
var map__16242__$1 = cljs.core.__destructure_map(map__16242);
var msg = map__16242__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16242__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__16247,tid){
var map__16248 = p__16247;
var map__16248__$1 = cljs.core.__destructure_map(map__16248);
var svc = map__16248__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16248__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__16259 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__16260 = null;
var count__16261 = (0);
var i__16262 = (0);
while(true){
if((i__16262 < count__16261)){
var vec__16272 = chunk__16260.cljs$core$IIndexed$_nth$arity$2(null,i__16262);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16272,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16272,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__16281 = seq__16259;
var G__16282 = chunk__16260;
var G__16283 = count__16261;
var G__16284 = (i__16262 + (1));
seq__16259 = G__16281;
chunk__16260 = G__16282;
count__16261 = G__16283;
i__16262 = G__16284;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16259);
if(temp__5804__auto__){
var seq__16259__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16259__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16259__$1);
var G__16285 = cljs.core.chunk_rest(seq__16259__$1);
var G__16286 = c__5525__auto__;
var G__16287 = cljs.core.count(c__5525__auto__);
var G__16288 = (0);
seq__16259 = G__16285;
chunk__16260 = G__16286;
count__16261 = G__16287;
i__16262 = G__16288;
continue;
} else {
var vec__16276 = cljs.core.first(seq__16259__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16276,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16276,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__16289 = cljs.core.next(seq__16259__$1);
var G__16290 = null;
var G__16291 = (0);
var G__16292 = (0);
seq__16259 = G__16289;
chunk__16260 = G__16290;
count__16261 = G__16291;
i__16262 = G__16292;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__16253_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__16253_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__16254_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__16254_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__16255_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__16255_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__16256_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__16256_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__16279){
var map__16280 = p__16279;
var map__16280__$1 = cljs.core.__destructure_map(map__16280);
var svc = map__16280__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16280__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16280__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
