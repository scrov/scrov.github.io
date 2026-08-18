goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__16601){
var map__16602 = p__16601;
var map__16602__$1 = cljs.core.__destructure_map(map__16602);
var msg = map__16602__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16602__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16602__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__16611){
var map__16612 = p__16611;
var map__16612__$1 = cljs.core.__destructure_map(map__16612);
var msg = map__16612__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16612__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16612__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__16613 = info;
var map__16613__$1 = cljs.core.__destructure_map(map__16613);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16613__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16613__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16613__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__16614){
var map__16615 = p__16614;
var map__16615__$1 = cljs.core.__destructure_map(map__16615);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16615__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16615__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__16616){
var map__16617 = p__16616;
var map__16617__$1 = cljs.core.__destructure_map(map__16617);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16617__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (next){
var seq__16618_16664 = cljs.core.seq(files_to_require);
var chunk__16619_16665 = null;
var count__16620_16666 = (0);
var i__16621_16667 = (0);
while(true){
if((i__16621_16667 < count__16620_16666)){
var src_16668 = chunk__16619_16665.cljs$core$IIndexed$_nth$arity$2(null,i__16621_16667);
shadow.cljs.devtools.client.env.before_load_src(src_16668);

shadow.cljs.devtools.client.node.closure_import(src_16668);


var G__16669 = seq__16618_16664;
var G__16670 = chunk__16619_16665;
var G__16671 = count__16620_16666;
var G__16672 = (i__16621_16667 + (1));
seq__16618_16664 = G__16669;
chunk__16619_16665 = G__16670;
count__16620_16666 = G__16671;
i__16621_16667 = G__16672;
continue;
} else {
var temp__5804__auto___16673 = cljs.core.seq(seq__16618_16664);
if(temp__5804__auto___16673){
var seq__16618_16674__$1 = temp__5804__auto___16673;
if(cljs.core.chunked_seq_QMARK_(seq__16618_16674__$1)){
var c__5525__auto___16675 = cljs.core.chunk_first(seq__16618_16674__$1);
var G__16676 = cljs.core.chunk_rest(seq__16618_16674__$1);
var G__16677 = c__5525__auto___16675;
var G__16678 = cljs.core.count(c__5525__auto___16675);
var G__16679 = (0);
seq__16618_16664 = G__16676;
chunk__16619_16665 = G__16677;
count__16620_16666 = G__16678;
i__16621_16667 = G__16679;
continue;
} else {
var src_16680 = cljs.core.first(seq__16618_16674__$1);
shadow.cljs.devtools.client.env.before_load_src(src_16680);

shadow.cljs.devtools.client.node.closure_import(src_16680);


var G__16681 = cljs.core.next(seq__16618_16674__$1);
var G__16682 = null;
var G__16683 = (0);
var G__16684 = (0);
seq__16618_16664 = G__16681;
chunk__16619_16665 = G__16682;
count__16620_16666 = G__16683;
i__16621_16667 = G__16684;
continue;
}
} else {
}
}
break;
}

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__16626,msg){
var map__16627 = p__16626;
var map__16627__$1 = cljs.core.__destructure_map(map__16627);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16627__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__16628){
var map__16629 = p__16628;
var map__16629__$1 = cljs.core.__destructure_map(map__16629);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16629__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16629__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__16631 = SHADOW_NODE_EVAL(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__16631) : success.call(null,G__16631));
}catch (e16630){var e = e16630;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,msg,success,fail){
var this$__$1 = this;
try{var G__16633 = shadow.cljs.devtools.client.node.node_eval(msg);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__16633) : success.call(null,G__16633));
}catch (e16632){var e = e16632;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__16634,done,error){
var map__16635 = p__16634;
var map__16635__$1 = cljs.core.__destructure_map(map__16635);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16635__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__16637_16685 = cljs.core.seq(repl_sources);
var chunk__16639_16686 = null;
var count__16640_16687 = (0);
var i__16641_16688 = (0);
while(true){
if((i__16641_16688 < count__16640_16687)){
var map__16645_16689 = chunk__16639_16686.cljs$core$IIndexed$_nth$arity$2(null,i__16641_16688);
var map__16645_16690__$1 = cljs.core.__destructure_map(map__16645_16689);
var src_16691 = map__16645_16690__$1;
var output_name_16692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16645_16690__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_16692)))){
shadow.cljs.devtools.client.node.closure_import(output_name_16692);


var G__16693 = seq__16637_16685;
var G__16694 = chunk__16639_16686;
var G__16695 = count__16640_16687;
var G__16696 = (i__16641_16688 + (1));
seq__16637_16685 = G__16693;
chunk__16639_16686 = G__16694;
count__16640_16687 = G__16695;
i__16641_16688 = G__16696;
continue;
} else {
var G__16697 = seq__16637_16685;
var G__16698 = chunk__16639_16686;
var G__16699 = count__16640_16687;
var G__16700 = (i__16641_16688 + (1));
seq__16637_16685 = G__16697;
chunk__16639_16686 = G__16698;
count__16640_16687 = G__16699;
i__16641_16688 = G__16700;
continue;
}
} else {
var temp__5804__auto___16701 = cljs.core.seq(seq__16637_16685);
if(temp__5804__auto___16701){
var seq__16637_16702__$1 = temp__5804__auto___16701;
if(cljs.core.chunked_seq_QMARK_(seq__16637_16702__$1)){
var c__5525__auto___16703 = cljs.core.chunk_first(seq__16637_16702__$1);
var G__16704 = cljs.core.chunk_rest(seq__16637_16702__$1);
var G__16705 = c__5525__auto___16703;
var G__16706 = cljs.core.count(c__5525__auto___16703);
var G__16707 = (0);
seq__16637_16685 = G__16704;
chunk__16639_16686 = G__16705;
count__16640_16687 = G__16706;
i__16641_16688 = G__16707;
continue;
} else {
var map__16646_16708 = cljs.core.first(seq__16637_16702__$1);
var map__16646_16709__$1 = cljs.core.__destructure_map(map__16646_16708);
var src_16710 = map__16646_16709__$1;
var output_name_16711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16646_16709__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_16711)))){
shadow.cljs.devtools.client.node.closure_import(output_name_16711);


var G__16712 = cljs.core.next(seq__16637_16702__$1);
var G__16713 = null;
var G__16714 = (0);
var G__16715 = (0);
seq__16637_16685 = G__16712;
chunk__16639_16686 = G__16713;
count__16640_16687 = G__16714;
i__16641_16688 = G__16715;
continue;
} else {
var G__16716 = cljs.core.next(seq__16637_16702__$1);
var G__16717 = null;
var G__16718 = (0);
var G__16719 = (0);
seq__16637_16685 = G__16716;
chunk__16639_16686 = G__16717;
count__16640_16687 = G__16718;
i__16641_16688 = G__16719;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e16636){var e = e16636;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__16647,done,error){
var map__16648 = p__16647;
var map__16648__$1 = cljs.core.__destructure_map(map__16648);
var msg = map__16648__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16648__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16648__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__16650_16720 = cljs.core.seq(sources);
var chunk__16651_16721 = null;
var count__16652_16722 = (0);
var i__16653_16723 = (0);
while(true){
if((i__16653_16723 < count__16652_16722)){
var map__16656_16724 = chunk__16651_16721.cljs$core$IIndexed$_nth$arity$2(null,i__16653_16723);
var map__16656_16725__$1 = cljs.core.__destructure_map(map__16656_16724);
var src_16726 = map__16656_16725__$1;
var provides_16727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16656_16725__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_16728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16656_16725__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_16728)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_16727);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_16728);
} else {
}


var G__16729 = seq__16650_16720;
var G__16730 = chunk__16651_16721;
var G__16731 = count__16652_16722;
var G__16732 = (i__16653_16723 + (1));
seq__16650_16720 = G__16729;
chunk__16651_16721 = G__16730;
count__16652_16722 = G__16731;
i__16653_16723 = G__16732;
continue;
} else {
var temp__5804__auto___16733 = cljs.core.seq(seq__16650_16720);
if(temp__5804__auto___16733){
var seq__16650_16734__$1 = temp__5804__auto___16733;
if(cljs.core.chunked_seq_QMARK_(seq__16650_16734__$1)){
var c__5525__auto___16735 = cljs.core.chunk_first(seq__16650_16734__$1);
var G__16736 = cljs.core.chunk_rest(seq__16650_16734__$1);
var G__16737 = c__5525__auto___16735;
var G__16738 = cljs.core.count(c__5525__auto___16735);
var G__16739 = (0);
seq__16650_16720 = G__16736;
chunk__16651_16721 = G__16737;
count__16652_16722 = G__16738;
i__16653_16723 = G__16739;
continue;
} else {
var map__16657_16740 = cljs.core.first(seq__16650_16734__$1);
var map__16657_16741__$1 = cljs.core.__destructure_map(map__16657_16740);
var src_16742 = map__16657_16741__$1;
var provides_16743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16657_16741__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_16744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16657_16741__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_16744)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_16743);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_16744);
} else {
}


var G__16745 = cljs.core.next(seq__16650_16734__$1);
var G__16746 = null;
var G__16747 = (0);
var G__16748 = (0);
seq__16650_16720 = G__16745;
chunk__16651_16721 = G__16746;
count__16652_16722 = G__16747;
i__16653_16723 = G__16748;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e16649){var e = e16649;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__16658){
var map__16659 = p__16658;
var map__16659__$1 = cljs.core.__destructure_map(map__16659);
var env = map__16659__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16659__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__16660){
var map__16661 = p__16660;
var map__16661__$1 = cljs.core.__destructure_map(map__16661);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16661__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16661__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__16662){
var map__16663 = p__16662;
var map__16663__$1 = cljs.core.__destructure_map(map__16663);
var svc = map__16663__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16663__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
