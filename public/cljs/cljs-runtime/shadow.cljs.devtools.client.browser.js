goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28064 = arguments.length;
var i__5727__auto___28065 = (0);
while(true){
if((i__5727__auto___28065 < len__5726__auto___28064)){
args__5732__auto__.push((arguments[i__5727__auto___28065]));

var G__28066 = (i__5727__auto___28065 + (1));
i__5727__auto___28065 = G__28066;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq27715){
var G__27716 = cljs.core.first(seq27715);
var seq27715__$1 = cljs.core.next(seq27715);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27716,seq27715__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__27719 = cljs.core.seq(sources);
var chunk__27720 = null;
var count__27721 = (0);
var i__27722 = (0);
while(true){
if((i__27722 < count__27721)){
var map__27727 = chunk__27720.cljs$core$IIndexed$_nth$arity$2(null,i__27722);
var map__27727__$1 = cljs.core.__destructure_map(map__27727);
var src = map__27727__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27727__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27727__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27727__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27727__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e27731){var e_28067 = e27731;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_28067);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_28067.message)].join('')));
}

var G__28068 = seq__27719;
var G__28069 = chunk__27720;
var G__28070 = count__27721;
var G__28071 = (i__27722 + (1));
seq__27719 = G__28068;
chunk__27720 = G__28069;
count__27721 = G__28070;
i__27722 = G__28071;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27719);
if(temp__5804__auto__){
var seq__27719__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27719__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27719__$1);
var G__28072 = cljs.core.chunk_rest(seq__27719__$1);
var G__28073 = c__5525__auto__;
var G__28074 = cljs.core.count(c__5525__auto__);
var G__28075 = (0);
seq__27719 = G__28072;
chunk__27720 = G__28073;
count__27721 = G__28074;
i__27722 = G__28075;
continue;
} else {
var map__27733 = cljs.core.first(seq__27719__$1);
var map__27733__$1 = cljs.core.__destructure_map(map__27733);
var src = map__27733__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e27734){var e_28076 = e27734;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_28076);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_28076.message)].join('')));
}

var G__28077 = cljs.core.next(seq__27719__$1);
var G__28078 = null;
var G__28079 = (0);
var G__28080 = (0);
seq__27719 = G__28077;
chunk__27720 = G__28078;
count__27721 = G__28079;
i__27722 = G__28080;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__27737 = cljs.core.seq(js_requires);
var chunk__27738 = null;
var count__27739 = (0);
var i__27740 = (0);
while(true){
if((i__27740 < count__27739)){
var js_ns = chunk__27738.cljs$core$IIndexed$_nth$arity$2(null,i__27740);
var require_str_28081 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28081);


var G__28082 = seq__27737;
var G__28083 = chunk__27738;
var G__28084 = count__27739;
var G__28085 = (i__27740 + (1));
seq__27737 = G__28082;
chunk__27738 = G__28083;
count__27739 = G__28084;
i__27740 = G__28085;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27737);
if(temp__5804__auto__){
var seq__27737__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27737__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27737__$1);
var G__28086 = cljs.core.chunk_rest(seq__27737__$1);
var G__28087 = c__5525__auto__;
var G__28088 = cljs.core.count(c__5525__auto__);
var G__28089 = (0);
seq__27737 = G__28086;
chunk__27738 = G__28087;
count__27739 = G__28088;
i__27740 = G__28089;
continue;
} else {
var js_ns = cljs.core.first(seq__27737__$1);
var require_str_28090 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28090);


var G__28091 = cljs.core.next(seq__27737__$1);
var G__28092 = null;
var G__28093 = (0);
var G__28094 = (0);
seq__27737 = G__28091;
chunk__27738 = G__28092;
count__27739 = G__28093;
i__27740 = G__28094;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__27742){
var map__27743 = p__27742;
var map__27743__$1 = cljs.core.__destructure_map(map__27743);
var msg = map__27743__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27743__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27743__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27744(s__27745){
return (new cljs.core.LazySeq(null,(function (){
var s__27745__$1 = s__27745;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27745__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__27750 = cljs.core.first(xs__6360__auto__);
var map__27750__$1 = cljs.core.__destructure_map(map__27750);
var src = map__27750__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27750__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27750__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__27745__$1,map__27750,map__27750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27743,map__27743__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27744_$_iter__27746(s__27747){
return (new cljs.core.LazySeq(null,((function (s__27745__$1,map__27750,map__27750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27743,map__27743__$1,msg,info,reload_info){
return (function (){
var s__27747__$1 = s__27747;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27747__$1);
if(temp__5804__auto____$1){
var s__27747__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27747__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__27747__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__27749 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__27748 = (0);
while(true){
if((i__27748 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__27748);
cljs.core.chunk_append(b__27749,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__28095 = (i__27748 + (1));
i__27748 = G__28095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27749),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27744_$_iter__27746(cljs.core.chunk_rest(s__27747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27749),null);
}
} else {
var warning = cljs.core.first(s__27747__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27744_$_iter__27746(cljs.core.rest(s__27747__$2)));
}
} else {
return null;
}
break;
}
});})(s__27745__$1,map__27750,map__27750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27743,map__27743__$1,msg,info,reload_info))
,null,null));
});})(s__27745__$1,map__27750,map__27750__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__27743,map__27743__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__27744(cljs.core.rest(s__27745__$1)));
} else {
var G__28096 = cljs.core.rest(s__27745__$1);
s__27745__$1 = G__28096;
continue;
}
} else {
var G__28097 = cljs.core.rest(s__27745__$1);
s__27745__$1 = G__28097;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__27754_28098 = cljs.core.seq(warnings);
var chunk__27755_28099 = null;
var count__27756_28100 = (0);
var i__27757_28101 = (0);
while(true){
if((i__27757_28101 < count__27756_28100)){
var map__27761_28102 = chunk__27755_28099.cljs$core$IIndexed$_nth$arity$2(null,i__27757_28101);
var map__27761_28103__$1 = cljs.core.__destructure_map(map__27761_28102);
var w_28104 = map__27761_28103__$1;
var msg_28105__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27761_28103__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27761_28103__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27761_28103__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27761_28103__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28108)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28106),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28107),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28105__$1)].join(''));


var G__28109 = seq__27754_28098;
var G__28110 = chunk__27755_28099;
var G__28111 = count__27756_28100;
var G__28112 = (i__27757_28101 + (1));
seq__27754_28098 = G__28109;
chunk__27755_28099 = G__28110;
count__27756_28100 = G__28111;
i__27757_28101 = G__28112;
continue;
} else {
var temp__5804__auto___28113 = cljs.core.seq(seq__27754_28098);
if(temp__5804__auto___28113){
var seq__27754_28114__$1 = temp__5804__auto___28113;
if(cljs.core.chunked_seq_QMARK_(seq__27754_28114__$1)){
var c__5525__auto___28115 = cljs.core.chunk_first(seq__27754_28114__$1);
var G__28116 = cljs.core.chunk_rest(seq__27754_28114__$1);
var G__28117 = c__5525__auto___28115;
var G__28118 = cljs.core.count(c__5525__auto___28115);
var G__28119 = (0);
seq__27754_28098 = G__28116;
chunk__27755_28099 = G__28117;
count__27756_28100 = G__28118;
i__27757_28101 = G__28119;
continue;
} else {
var map__27764_28120 = cljs.core.first(seq__27754_28114__$1);
var map__27764_28121__$1 = cljs.core.__destructure_map(map__27764_28120);
var w_28122 = map__27764_28121__$1;
var msg_28123__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27764_28121__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27764_28121__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27764_28121__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27764_28121__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28126)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28124),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28125),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28123__$1)].join(''));


var G__28127 = cljs.core.next(seq__27754_28114__$1);
var G__28128 = null;
var G__28129 = (0);
var G__28130 = (0);
seq__27754_28098 = G__28127;
chunk__27755_28099 = G__28128;
count__27756_28100 = G__28129;
i__27757_28101 = G__28130;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__27741_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__27741_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27769 = node_uri;
G__27769.setQuery(null);

G__27769.setPath(new$);

return G__27769;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__27770){
var map__27771 = p__27770;
var map__27771__$1 = cljs.core.__destructure_map(map__27771);
var msg = map__27771__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27771__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27771__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__27772 = cljs.core.seq(updates);
var chunk__27774 = null;
var count__27775 = (0);
var i__27776 = (0);
while(true){
if((i__27776 < count__27775)){
var path = chunk__27774.cljs$core$IIndexed$_nth$arity$2(null,i__27776);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__27904_28131 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__27908_28132 = null;
var count__27909_28133 = (0);
var i__27910_28134 = (0);
while(true){
if((i__27910_28134 < count__27909_28133)){
var node_28135 = chunk__27908_28132.cljs$core$IIndexed$_nth$arity$2(null,i__27910_28134);
if(cljs.core.not(node_28135.shadow$old)){
var path_match_28136 = shadow.cljs.devtools.client.browser.match_paths(node_28135.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28136)){
var new_link_28137 = (function (){var G__27942 = node_28135.cloneNode(true);
G__27942.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28136),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__27942;
})();
(node_28135.shadow$old = true);

(new_link_28137.onload = ((function (seq__27904_28131,chunk__27908_28132,count__27909_28133,i__27910_28134,seq__27772,chunk__27774,count__27775,i__27776,new_link_28137,path_match_28136,node_28135,path,map__27771,map__27771__$1,msg,updates,reload_info){
return (function (e){
var seq__27943_28138 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__27945_28139 = null;
var count__27946_28140 = (0);
var i__27947_28141 = (0);
while(true){
if((i__27947_28141 < count__27946_28140)){
var map__27955_28142 = chunk__27945_28139.cljs$core$IIndexed$_nth$arity$2(null,i__27947_28141);
var map__27955_28143__$1 = cljs.core.__destructure_map(map__27955_28142);
var task_28144 = map__27955_28143__$1;
var fn_str_28145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27955_28143__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27955_28143__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28147 = goog.getObjectByName(fn_str_28145,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28146)].join(''));

(fn_obj_28147.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28147.cljs$core$IFn$_invoke$arity$2(path,new_link_28137) : fn_obj_28147.call(null,path,new_link_28137));


var G__28148 = seq__27943_28138;
var G__28149 = chunk__27945_28139;
var G__28150 = count__27946_28140;
var G__28151 = (i__27947_28141 + (1));
seq__27943_28138 = G__28148;
chunk__27945_28139 = G__28149;
count__27946_28140 = G__28150;
i__27947_28141 = G__28151;
continue;
} else {
var temp__5804__auto___28152 = cljs.core.seq(seq__27943_28138);
if(temp__5804__auto___28152){
var seq__27943_28153__$1 = temp__5804__auto___28152;
if(cljs.core.chunked_seq_QMARK_(seq__27943_28153__$1)){
var c__5525__auto___28154 = cljs.core.chunk_first(seq__27943_28153__$1);
var G__28155 = cljs.core.chunk_rest(seq__27943_28153__$1);
var G__28156 = c__5525__auto___28154;
var G__28157 = cljs.core.count(c__5525__auto___28154);
var G__28158 = (0);
seq__27943_28138 = G__28155;
chunk__27945_28139 = G__28156;
count__27946_28140 = G__28157;
i__27947_28141 = G__28158;
continue;
} else {
var map__27956_28159 = cljs.core.first(seq__27943_28153__$1);
var map__27956_28160__$1 = cljs.core.__destructure_map(map__27956_28159);
var task_28161 = map__27956_28160__$1;
var fn_str_28162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27956_28160__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27956_28160__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28164 = goog.getObjectByName(fn_str_28162,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28163)].join(''));

(fn_obj_28164.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28164.cljs$core$IFn$_invoke$arity$2(path,new_link_28137) : fn_obj_28164.call(null,path,new_link_28137));


var G__28165 = cljs.core.next(seq__27943_28153__$1);
var G__28166 = null;
var G__28167 = (0);
var G__28168 = (0);
seq__27943_28138 = G__28165;
chunk__27945_28139 = G__28166;
count__27946_28140 = G__28167;
i__27947_28141 = G__28168;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28135);
});})(seq__27904_28131,chunk__27908_28132,count__27909_28133,i__27910_28134,seq__27772,chunk__27774,count__27775,i__27776,new_link_28137,path_match_28136,node_28135,path,map__27771,map__27771__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28136], 0));

goog.dom.insertSiblingAfter(new_link_28137,node_28135);


var G__28169 = seq__27904_28131;
var G__28170 = chunk__27908_28132;
var G__28171 = count__27909_28133;
var G__28172 = (i__27910_28134 + (1));
seq__27904_28131 = G__28169;
chunk__27908_28132 = G__28170;
count__27909_28133 = G__28171;
i__27910_28134 = G__28172;
continue;
} else {
var G__28174 = seq__27904_28131;
var G__28175 = chunk__27908_28132;
var G__28176 = count__27909_28133;
var G__28177 = (i__27910_28134 + (1));
seq__27904_28131 = G__28174;
chunk__27908_28132 = G__28175;
count__27909_28133 = G__28176;
i__27910_28134 = G__28177;
continue;
}
} else {
var G__28178 = seq__27904_28131;
var G__28179 = chunk__27908_28132;
var G__28180 = count__27909_28133;
var G__28181 = (i__27910_28134 + (1));
seq__27904_28131 = G__28178;
chunk__27908_28132 = G__28179;
count__27909_28133 = G__28180;
i__27910_28134 = G__28181;
continue;
}
} else {
var temp__5804__auto___28182 = cljs.core.seq(seq__27904_28131);
if(temp__5804__auto___28182){
var seq__27904_28183__$1 = temp__5804__auto___28182;
if(cljs.core.chunked_seq_QMARK_(seq__27904_28183__$1)){
var c__5525__auto___28184 = cljs.core.chunk_first(seq__27904_28183__$1);
var G__28185 = cljs.core.chunk_rest(seq__27904_28183__$1);
var G__28186 = c__5525__auto___28184;
var G__28187 = cljs.core.count(c__5525__auto___28184);
var G__28188 = (0);
seq__27904_28131 = G__28185;
chunk__27908_28132 = G__28186;
count__27909_28133 = G__28187;
i__27910_28134 = G__28188;
continue;
} else {
var node_28189 = cljs.core.first(seq__27904_28183__$1);
if(cljs.core.not(node_28189.shadow$old)){
var path_match_28190 = shadow.cljs.devtools.client.browser.match_paths(node_28189.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28190)){
var new_link_28191 = (function (){var G__27957 = node_28189.cloneNode(true);
G__27957.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28190),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__27957;
})();
(node_28189.shadow$old = true);

(new_link_28191.onload = ((function (seq__27904_28131,chunk__27908_28132,count__27909_28133,i__27910_28134,seq__27772,chunk__27774,count__27775,i__27776,new_link_28191,path_match_28190,node_28189,seq__27904_28183__$1,temp__5804__auto___28182,path,map__27771,map__27771__$1,msg,updates,reload_info){
return (function (e){
var seq__27958_28192 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__27960_28193 = null;
var count__27961_28194 = (0);
var i__27962_28195 = (0);
while(true){
if((i__27962_28195 < count__27961_28194)){
var map__27967_28196 = chunk__27960_28193.cljs$core$IIndexed$_nth$arity$2(null,i__27962_28195);
var map__27967_28197__$1 = cljs.core.__destructure_map(map__27967_28196);
var task_28198 = map__27967_28197__$1;
var fn_str_28199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27967_28197__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27967_28197__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28201 = goog.getObjectByName(fn_str_28199,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28200)].join(''));

(fn_obj_28201.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28201.cljs$core$IFn$_invoke$arity$2(path,new_link_28191) : fn_obj_28201.call(null,path,new_link_28191));


var G__28202 = seq__27958_28192;
var G__28203 = chunk__27960_28193;
var G__28204 = count__27961_28194;
var G__28205 = (i__27962_28195 + (1));
seq__27958_28192 = G__28202;
chunk__27960_28193 = G__28203;
count__27961_28194 = G__28204;
i__27962_28195 = G__28205;
continue;
} else {
var temp__5804__auto___28206__$1 = cljs.core.seq(seq__27958_28192);
if(temp__5804__auto___28206__$1){
var seq__27958_28207__$1 = temp__5804__auto___28206__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27958_28207__$1)){
var c__5525__auto___28208 = cljs.core.chunk_first(seq__27958_28207__$1);
var G__28209 = cljs.core.chunk_rest(seq__27958_28207__$1);
var G__28210 = c__5525__auto___28208;
var G__28211 = cljs.core.count(c__5525__auto___28208);
var G__28212 = (0);
seq__27958_28192 = G__28209;
chunk__27960_28193 = G__28210;
count__27961_28194 = G__28211;
i__27962_28195 = G__28212;
continue;
} else {
var map__27968_28213 = cljs.core.first(seq__27958_28207__$1);
var map__27968_28214__$1 = cljs.core.__destructure_map(map__27968_28213);
var task_28215 = map__27968_28214__$1;
var fn_str_28216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27968_28214__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27968_28214__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28218 = goog.getObjectByName(fn_str_28216,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28217)].join(''));

(fn_obj_28218.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28218.cljs$core$IFn$_invoke$arity$2(path,new_link_28191) : fn_obj_28218.call(null,path,new_link_28191));


var G__28219 = cljs.core.next(seq__27958_28207__$1);
var G__28220 = null;
var G__28221 = (0);
var G__28222 = (0);
seq__27958_28192 = G__28219;
chunk__27960_28193 = G__28220;
count__27961_28194 = G__28221;
i__27962_28195 = G__28222;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28189);
});})(seq__27904_28131,chunk__27908_28132,count__27909_28133,i__27910_28134,seq__27772,chunk__27774,count__27775,i__27776,new_link_28191,path_match_28190,node_28189,seq__27904_28183__$1,temp__5804__auto___28182,path,map__27771,map__27771__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28190], 0));

goog.dom.insertSiblingAfter(new_link_28191,node_28189);


var G__28223 = cljs.core.next(seq__27904_28183__$1);
var G__28224 = null;
var G__28225 = (0);
var G__28226 = (0);
seq__27904_28131 = G__28223;
chunk__27908_28132 = G__28224;
count__27909_28133 = G__28225;
i__27910_28134 = G__28226;
continue;
} else {
var G__28227 = cljs.core.next(seq__27904_28183__$1);
var G__28228 = null;
var G__28229 = (0);
var G__28230 = (0);
seq__27904_28131 = G__28227;
chunk__27908_28132 = G__28228;
count__27909_28133 = G__28229;
i__27910_28134 = G__28230;
continue;
}
} else {
var G__28231 = cljs.core.next(seq__27904_28183__$1);
var G__28232 = null;
var G__28233 = (0);
var G__28234 = (0);
seq__27904_28131 = G__28231;
chunk__27908_28132 = G__28232;
count__27909_28133 = G__28233;
i__27910_28134 = G__28234;
continue;
}
}
} else {
}
}
break;
}


var G__28235 = seq__27772;
var G__28236 = chunk__27774;
var G__28237 = count__27775;
var G__28238 = (i__27776 + (1));
seq__27772 = G__28235;
chunk__27774 = G__28236;
count__27775 = G__28237;
i__27776 = G__28238;
continue;
} else {
var G__28239 = seq__27772;
var G__28240 = chunk__27774;
var G__28241 = count__27775;
var G__28242 = (i__27776 + (1));
seq__27772 = G__28239;
chunk__27774 = G__28240;
count__27775 = G__28241;
i__27776 = G__28242;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27772);
if(temp__5804__auto__){
var seq__27772__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27772__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27772__$1);
var G__28243 = cljs.core.chunk_rest(seq__27772__$1);
var G__28244 = c__5525__auto__;
var G__28245 = cljs.core.count(c__5525__auto__);
var G__28246 = (0);
seq__27772 = G__28243;
chunk__27774 = G__28244;
count__27775 = G__28245;
i__27776 = G__28246;
continue;
} else {
var path = cljs.core.first(seq__27772__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__27971_28247 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__27975_28248 = null;
var count__27976_28249 = (0);
var i__27977_28250 = (0);
while(true){
if((i__27977_28250 < count__27976_28249)){
var node_28253 = chunk__27975_28248.cljs$core$IIndexed$_nth$arity$2(null,i__27977_28250);
if(cljs.core.not(node_28253.shadow$old)){
var path_match_28254 = shadow.cljs.devtools.client.browser.match_paths(node_28253.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28254)){
var new_link_28255 = (function (){var G__28011 = node_28253.cloneNode(true);
G__28011.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28254),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28011;
})();
(node_28253.shadow$old = true);

(new_link_28255.onload = ((function (seq__27971_28247,chunk__27975_28248,count__27976_28249,i__27977_28250,seq__27772,chunk__27774,count__27775,i__27776,new_link_28255,path_match_28254,node_28253,path,seq__27772__$1,temp__5804__auto__,map__27771,map__27771__$1,msg,updates,reload_info){
return (function (e){
var seq__28012_28257 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28014_28258 = null;
var count__28015_28259 = (0);
var i__28016_28260 = (0);
while(true){
if((i__28016_28260 < count__28015_28259)){
var map__28023_28261 = chunk__28014_28258.cljs$core$IIndexed$_nth$arity$2(null,i__28016_28260);
var map__28023_28262__$1 = cljs.core.__destructure_map(map__28023_28261);
var task_28263 = map__28023_28262__$1;
var fn_str_28264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28023_28262__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28023_28262__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28266 = goog.getObjectByName(fn_str_28264,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28265)].join(''));

(fn_obj_28266.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28266.cljs$core$IFn$_invoke$arity$2(path,new_link_28255) : fn_obj_28266.call(null,path,new_link_28255));


var G__28267 = seq__28012_28257;
var G__28268 = chunk__28014_28258;
var G__28269 = count__28015_28259;
var G__28270 = (i__28016_28260 + (1));
seq__28012_28257 = G__28267;
chunk__28014_28258 = G__28268;
count__28015_28259 = G__28269;
i__28016_28260 = G__28270;
continue;
} else {
var temp__5804__auto___28271__$1 = cljs.core.seq(seq__28012_28257);
if(temp__5804__auto___28271__$1){
var seq__28012_28272__$1 = temp__5804__auto___28271__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28012_28272__$1)){
var c__5525__auto___28273 = cljs.core.chunk_first(seq__28012_28272__$1);
var G__28274 = cljs.core.chunk_rest(seq__28012_28272__$1);
var G__28275 = c__5525__auto___28273;
var G__28276 = cljs.core.count(c__5525__auto___28273);
var G__28277 = (0);
seq__28012_28257 = G__28274;
chunk__28014_28258 = G__28275;
count__28015_28259 = G__28276;
i__28016_28260 = G__28277;
continue;
} else {
var map__28024_28278 = cljs.core.first(seq__28012_28272__$1);
var map__28024_28279__$1 = cljs.core.__destructure_map(map__28024_28278);
var task_28280 = map__28024_28279__$1;
var fn_str_28281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28024_28279__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28024_28279__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28283 = goog.getObjectByName(fn_str_28281,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28282)].join(''));

(fn_obj_28283.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28283.cljs$core$IFn$_invoke$arity$2(path,new_link_28255) : fn_obj_28283.call(null,path,new_link_28255));


var G__28284 = cljs.core.next(seq__28012_28272__$1);
var G__28285 = null;
var G__28286 = (0);
var G__28287 = (0);
seq__28012_28257 = G__28284;
chunk__28014_28258 = G__28285;
count__28015_28259 = G__28286;
i__28016_28260 = G__28287;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28253);
});})(seq__27971_28247,chunk__27975_28248,count__27976_28249,i__27977_28250,seq__27772,chunk__27774,count__27775,i__27776,new_link_28255,path_match_28254,node_28253,path,seq__27772__$1,temp__5804__auto__,map__27771,map__27771__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28254], 0));

goog.dom.insertSiblingAfter(new_link_28255,node_28253);


var G__28288 = seq__27971_28247;
var G__28289 = chunk__27975_28248;
var G__28290 = count__27976_28249;
var G__28291 = (i__27977_28250 + (1));
seq__27971_28247 = G__28288;
chunk__27975_28248 = G__28289;
count__27976_28249 = G__28290;
i__27977_28250 = G__28291;
continue;
} else {
var G__28292 = seq__27971_28247;
var G__28293 = chunk__27975_28248;
var G__28294 = count__27976_28249;
var G__28295 = (i__27977_28250 + (1));
seq__27971_28247 = G__28292;
chunk__27975_28248 = G__28293;
count__27976_28249 = G__28294;
i__27977_28250 = G__28295;
continue;
}
} else {
var G__28296 = seq__27971_28247;
var G__28297 = chunk__27975_28248;
var G__28298 = count__27976_28249;
var G__28299 = (i__27977_28250 + (1));
seq__27971_28247 = G__28296;
chunk__27975_28248 = G__28297;
count__27976_28249 = G__28298;
i__27977_28250 = G__28299;
continue;
}
} else {
var temp__5804__auto___28300__$1 = cljs.core.seq(seq__27971_28247);
if(temp__5804__auto___28300__$1){
var seq__27971_28301__$1 = temp__5804__auto___28300__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27971_28301__$1)){
var c__5525__auto___28302 = cljs.core.chunk_first(seq__27971_28301__$1);
var G__28303 = cljs.core.chunk_rest(seq__27971_28301__$1);
var G__28304 = c__5525__auto___28302;
var G__28305 = cljs.core.count(c__5525__auto___28302);
var G__28306 = (0);
seq__27971_28247 = G__28303;
chunk__27975_28248 = G__28304;
count__27976_28249 = G__28305;
i__27977_28250 = G__28306;
continue;
} else {
var node_28307 = cljs.core.first(seq__27971_28301__$1);
if(cljs.core.not(node_28307.shadow$old)){
var path_match_28308 = shadow.cljs.devtools.client.browser.match_paths(node_28307.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28308)){
var new_link_28309 = (function (){var G__28025 = node_28307.cloneNode(true);
G__28025.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28308),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28025;
})();
(node_28307.shadow$old = true);

(new_link_28309.onload = ((function (seq__27971_28247,chunk__27975_28248,count__27976_28249,i__27977_28250,seq__27772,chunk__27774,count__27775,i__27776,new_link_28309,path_match_28308,node_28307,seq__27971_28301__$1,temp__5804__auto___28300__$1,path,seq__27772__$1,temp__5804__auto__,map__27771,map__27771__$1,msg,updates,reload_info){
return (function (e){
var seq__28026_28310 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__28028_28311 = null;
var count__28029_28312 = (0);
var i__28030_28313 = (0);
while(true){
if((i__28030_28313 < count__28029_28312)){
var map__28034_28314 = chunk__28028_28311.cljs$core$IIndexed$_nth$arity$2(null,i__28030_28313);
var map__28034_28315__$1 = cljs.core.__destructure_map(map__28034_28314);
var task_28316 = map__28034_28315__$1;
var fn_str_28317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28034_28315__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28034_28315__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28319 = goog.getObjectByName(fn_str_28317,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28318)].join(''));

(fn_obj_28319.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28319.cljs$core$IFn$_invoke$arity$2(path,new_link_28309) : fn_obj_28319.call(null,path,new_link_28309));


var G__28320 = seq__28026_28310;
var G__28321 = chunk__28028_28311;
var G__28322 = count__28029_28312;
var G__28323 = (i__28030_28313 + (1));
seq__28026_28310 = G__28320;
chunk__28028_28311 = G__28321;
count__28029_28312 = G__28322;
i__28030_28313 = G__28323;
continue;
} else {
var temp__5804__auto___28324__$2 = cljs.core.seq(seq__28026_28310);
if(temp__5804__auto___28324__$2){
var seq__28026_28325__$1 = temp__5804__auto___28324__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28026_28325__$1)){
var c__5525__auto___28326 = cljs.core.chunk_first(seq__28026_28325__$1);
var G__28327 = cljs.core.chunk_rest(seq__28026_28325__$1);
var G__28328 = c__5525__auto___28326;
var G__28329 = cljs.core.count(c__5525__auto___28326);
var G__28330 = (0);
seq__28026_28310 = G__28327;
chunk__28028_28311 = G__28328;
count__28029_28312 = G__28329;
i__28030_28313 = G__28330;
continue;
} else {
var map__28035_28331 = cljs.core.first(seq__28026_28325__$1);
var map__28035_28332__$1 = cljs.core.__destructure_map(map__28035_28331);
var task_28333 = map__28035_28332__$1;
var fn_str_28334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28035_28332__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_28335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28035_28332__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_28336 = goog.getObjectByName(fn_str_28334,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_28335)].join(''));

(fn_obj_28336.cljs$core$IFn$_invoke$arity$2 ? fn_obj_28336.cljs$core$IFn$_invoke$arity$2(path,new_link_28309) : fn_obj_28336.call(null,path,new_link_28309));


var G__28337 = cljs.core.next(seq__28026_28325__$1);
var G__28338 = null;
var G__28339 = (0);
var G__28340 = (0);
seq__28026_28310 = G__28337;
chunk__28028_28311 = G__28338;
count__28029_28312 = G__28339;
i__28030_28313 = G__28340;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_28307);
});})(seq__27971_28247,chunk__27975_28248,count__27976_28249,i__27977_28250,seq__27772,chunk__27774,count__27775,i__27776,new_link_28309,path_match_28308,node_28307,seq__27971_28301__$1,temp__5804__auto___28300__$1,path,seq__27772__$1,temp__5804__auto__,map__27771,map__27771__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28308], 0));

goog.dom.insertSiblingAfter(new_link_28309,node_28307);


var G__28341 = cljs.core.next(seq__27971_28301__$1);
var G__28342 = null;
var G__28343 = (0);
var G__28344 = (0);
seq__27971_28247 = G__28341;
chunk__27975_28248 = G__28342;
count__27976_28249 = G__28343;
i__27977_28250 = G__28344;
continue;
} else {
var G__28345 = cljs.core.next(seq__27971_28301__$1);
var G__28346 = null;
var G__28347 = (0);
var G__28348 = (0);
seq__27971_28247 = G__28345;
chunk__27975_28248 = G__28346;
count__27976_28249 = G__28347;
i__27977_28250 = G__28348;
continue;
}
} else {
var G__28349 = cljs.core.next(seq__27971_28301__$1);
var G__28350 = null;
var G__28351 = (0);
var G__28352 = (0);
seq__27971_28247 = G__28349;
chunk__27975_28248 = G__28350;
count__27976_28249 = G__28351;
i__27977_28250 = G__28352;
continue;
}
}
} else {
}
}
break;
}


var G__28353 = cljs.core.next(seq__27772__$1);
var G__28354 = null;
var G__28355 = (0);
var G__28356 = (0);
seq__27772 = G__28353;
chunk__27774 = G__28354;
count__27775 = G__28355;
i__27776 = G__28356;
continue;
} else {
var G__28357 = cljs.core.next(seq__27772__$1);
var G__28358 = null;
var G__28359 = (0);
var G__28360 = (0);
seq__27772 = G__28357;
chunk__27774 = G__28358;
count__27775 = G__28359;
i__27776 = G__28360;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__28041 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__28041) : success.call(null,G__28041));
}catch (e28040){var e = e28040;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__28042,success,fail){
var map__28043 = p__28042;
var map__28043__$1 = cljs.core.__destructure_map(map__28043);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28043__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__28045 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__28045) : success.call(null,G__28045));
}catch (e28044){var e = e28044;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__28046,done,error){
var map__28047 = p__28046;
var map__28047__$1 = cljs.core.__destructure_map(map__28047);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28047__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__28048,done,error){
var map__28049 = p__28048;
var map__28049__$1 = cljs.core.__destructure_map(map__28049);
var msg = map__28049__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__28050){
var map__28051 = p__28050;
var map__28051__$1 = cljs.core.__destructure_map(map__28051);
var src = map__28051__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28051__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__28054 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__28054) : done.call(null,G__28054));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__28055){
var map__28056 = p__28055;
var map__28056__$1 = cljs.core.__destructure_map(map__28056);
var msg__$1 = map__28056__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28056__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e28057){var ex = e28057;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__28058){
var map__28059 = p__28058;
var map__28059__$1 = cljs.core.__destructure_map(map__28059);
var env = map__28059__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28059__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__28060){
var map__28061 = p__28060;
var map__28061__$1 = cljs.core.__destructure_map(map__28061);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28061__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28061__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__28062){
var map__28063 = p__28062;
var map__28063__$1 = cljs.core.__destructure_map(map__28063);
var svc = map__28063__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28063__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
