goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19413 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19413(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19416 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19416(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18385 = coll;
var G__18386 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18385,G__18386) : shadow.dom.lazy_native_coll_seq.call(null,G__18385,G__18386));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18408 = arguments.length;
switch (G__18408) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18411 = arguments.length;
switch (G__18411) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18414 = arguments.length;
switch (G__18414) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18418 = arguments.length;
switch (G__18418) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18424 = arguments.length;
switch (G__18424) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18427 = arguments.length;
switch (G__18427) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18451){if((e18451 instanceof Object)){
var e = e18451;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18451;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18464 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18465 = null;
var count__18466 = (0);
var i__18467 = (0);
while(true){
if((i__18467 < count__18466)){
var el = chunk__18465.cljs$core$IIndexed$_nth$arity$2(null,i__18467);
var handler_19472__$1 = ((function (seq__18464,chunk__18465,count__18466,i__18467,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18464,chunk__18465,count__18466,i__18467,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19472__$1);


var G__19474 = seq__18464;
var G__19475 = chunk__18465;
var G__19476 = count__18466;
var G__19477 = (i__18467 + (1));
seq__18464 = G__19474;
chunk__18465 = G__19475;
count__18466 = G__19476;
i__18467 = G__19477;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18464);
if(temp__5804__auto__){
var seq__18464__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18464__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18464__$1);
var G__19478 = cljs.core.chunk_rest(seq__18464__$1);
var G__19479 = c__5525__auto__;
var G__19480 = cljs.core.count(c__5525__auto__);
var G__19481 = (0);
seq__18464 = G__19478;
chunk__18465 = G__19479;
count__18466 = G__19480;
i__18467 = G__19481;
continue;
} else {
var el = cljs.core.first(seq__18464__$1);
var handler_19482__$1 = ((function (seq__18464,chunk__18465,count__18466,i__18467,el,seq__18464__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18464,chunk__18465,count__18466,i__18467,el,seq__18464__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19482__$1);


var G__19483 = cljs.core.next(seq__18464__$1);
var G__19484 = null;
var G__19485 = (0);
var G__19486 = (0);
seq__18464 = G__19483;
chunk__18465 = G__19484;
count__18466 = G__19485;
i__18467 = G__19486;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18473 = arguments.length;
switch (G__18473) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18484 = cljs.core.seq(events);
var chunk__18485 = null;
var count__18486 = (0);
var i__18487 = (0);
while(true){
if((i__18487 < count__18486)){
var vec__18496 = chunk__18485.cljs$core$IIndexed$_nth$arity$2(null,i__18487);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18496,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18496,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19490 = seq__18484;
var G__19491 = chunk__18485;
var G__19492 = count__18486;
var G__19493 = (i__18487 + (1));
seq__18484 = G__19490;
chunk__18485 = G__19491;
count__18486 = G__19492;
i__18487 = G__19493;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18484);
if(temp__5804__auto__){
var seq__18484__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18484__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18484__$1);
var G__19495 = cljs.core.chunk_rest(seq__18484__$1);
var G__19496 = c__5525__auto__;
var G__19497 = cljs.core.count(c__5525__auto__);
var G__19498 = (0);
seq__18484 = G__19495;
chunk__18485 = G__19496;
count__18486 = G__19497;
i__18487 = G__19498;
continue;
} else {
var vec__18499 = cljs.core.first(seq__18484__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18499,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18499,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19500 = cljs.core.next(seq__18484__$1);
var G__19501 = null;
var G__19502 = (0);
var G__19503 = (0);
seq__18484 = G__19500;
chunk__18485 = G__19501;
count__18486 = G__19502;
i__18487 = G__19503;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18503 = cljs.core.seq(styles);
var chunk__18504 = null;
var count__18505 = (0);
var i__18506 = (0);
while(true){
if((i__18506 < count__18505)){
var vec__18518 = chunk__18504.cljs$core$IIndexed$_nth$arity$2(null,i__18506);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18518,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18518,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19506 = seq__18503;
var G__19507 = chunk__18504;
var G__19508 = count__18505;
var G__19509 = (i__18506 + (1));
seq__18503 = G__19506;
chunk__18504 = G__19507;
count__18505 = G__19508;
i__18506 = G__19509;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18503);
if(temp__5804__auto__){
var seq__18503__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18503__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18503__$1);
var G__19511 = cljs.core.chunk_rest(seq__18503__$1);
var G__19512 = c__5525__auto__;
var G__19513 = cljs.core.count(c__5525__auto__);
var G__19514 = (0);
seq__18503 = G__19511;
chunk__18504 = G__19512;
count__18505 = G__19513;
i__18506 = G__19514;
continue;
} else {
var vec__18525 = cljs.core.first(seq__18503__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18525,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19516 = cljs.core.next(seq__18503__$1);
var G__19517 = null;
var G__19518 = (0);
var G__19519 = (0);
seq__18503 = G__19516;
chunk__18504 = G__19517;
count__18505 = G__19518;
i__18506 = G__19519;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18528_19521 = key;
var G__18528_19522__$1 = (((G__18528_19521 instanceof cljs.core.Keyword))?G__18528_19521.fqn:null);
switch (G__18528_19522__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19527 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_19527,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_19527,"aria-");
}
})())){
el.setAttribute(ks_19527,value);
} else {
(el[ks_19527] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18535){
var map__18536 = p__18535;
var map__18536__$1 = cljs.core.__destructure_map(map__18536);
var props = map__18536__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18536__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18537 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18537,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18537,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18537,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18541 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18541,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18541;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18543 = arguments.length;
switch (G__18543) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18550){
var vec__18552 = p__18550;
var seq__18553 = cljs.core.seq(vec__18552);
var first__18554 = cljs.core.first(seq__18553);
var seq__18553__$1 = cljs.core.next(seq__18553);
var nn = first__18554;
var first__18554__$1 = cljs.core.first(seq__18553__$1);
var seq__18553__$2 = cljs.core.next(seq__18553__$1);
var np = first__18554__$1;
var nc = seq__18553__$2;
var node = vec__18552;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18556 = nn;
var G__18557 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18556,G__18557) : create_fn.call(null,G__18556,G__18557));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18559 = nn;
var G__18560 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18559,G__18560) : create_fn.call(null,G__18559,G__18560));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18562 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18562,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18562,(1),null);
var seq__18565_19548 = cljs.core.seq(node_children);
var chunk__18567_19549 = null;
var count__18568_19550 = (0);
var i__18569_19551 = (0);
while(true){
if((i__18569_19551 < count__18568_19550)){
var child_struct_19552 = chunk__18567_19549.cljs$core$IIndexed$_nth$arity$2(null,i__18569_19551);
var children_19554 = shadow.dom.dom_node(child_struct_19552);
if(cljs.core.seq_QMARK_(children_19554)){
var seq__18606_19555 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19554));
var chunk__18608_19556 = null;
var count__18609_19557 = (0);
var i__18610_19558 = (0);
while(true){
if((i__18610_19558 < count__18609_19557)){
var child_19560 = chunk__18608_19556.cljs$core$IIndexed$_nth$arity$2(null,i__18610_19558);
if(cljs.core.truth_(child_19560)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19560);


var G__19563 = seq__18606_19555;
var G__19564 = chunk__18608_19556;
var G__19565 = count__18609_19557;
var G__19566 = (i__18610_19558 + (1));
seq__18606_19555 = G__19563;
chunk__18608_19556 = G__19564;
count__18609_19557 = G__19565;
i__18610_19558 = G__19566;
continue;
} else {
var G__19567 = seq__18606_19555;
var G__19568 = chunk__18608_19556;
var G__19569 = count__18609_19557;
var G__19570 = (i__18610_19558 + (1));
seq__18606_19555 = G__19567;
chunk__18608_19556 = G__19568;
count__18609_19557 = G__19569;
i__18610_19558 = G__19570;
continue;
}
} else {
var temp__5804__auto___19571 = cljs.core.seq(seq__18606_19555);
if(temp__5804__auto___19571){
var seq__18606_19572__$1 = temp__5804__auto___19571;
if(cljs.core.chunked_seq_QMARK_(seq__18606_19572__$1)){
var c__5525__auto___19574 = cljs.core.chunk_first(seq__18606_19572__$1);
var G__19576 = cljs.core.chunk_rest(seq__18606_19572__$1);
var G__19577 = c__5525__auto___19574;
var G__19578 = cljs.core.count(c__5525__auto___19574);
var G__19579 = (0);
seq__18606_19555 = G__19576;
chunk__18608_19556 = G__19577;
count__18609_19557 = G__19578;
i__18610_19558 = G__19579;
continue;
} else {
var child_19580 = cljs.core.first(seq__18606_19572__$1);
if(cljs.core.truth_(child_19580)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19580);


var G__19582 = cljs.core.next(seq__18606_19572__$1);
var G__19583 = null;
var G__19584 = (0);
var G__19585 = (0);
seq__18606_19555 = G__19582;
chunk__18608_19556 = G__19583;
count__18609_19557 = G__19584;
i__18610_19558 = G__19585;
continue;
} else {
var G__19586 = cljs.core.next(seq__18606_19572__$1);
var G__19587 = null;
var G__19588 = (0);
var G__19589 = (0);
seq__18606_19555 = G__19586;
chunk__18608_19556 = G__19587;
count__18609_19557 = G__19588;
i__18610_19558 = G__19589;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19554);
}


var G__19591 = seq__18565_19548;
var G__19592 = chunk__18567_19549;
var G__19593 = count__18568_19550;
var G__19594 = (i__18569_19551 + (1));
seq__18565_19548 = G__19591;
chunk__18567_19549 = G__19592;
count__18568_19550 = G__19593;
i__18569_19551 = G__19594;
continue;
} else {
var temp__5804__auto___19596 = cljs.core.seq(seq__18565_19548);
if(temp__5804__auto___19596){
var seq__18565_19597__$1 = temp__5804__auto___19596;
if(cljs.core.chunked_seq_QMARK_(seq__18565_19597__$1)){
var c__5525__auto___19598 = cljs.core.chunk_first(seq__18565_19597__$1);
var G__19599 = cljs.core.chunk_rest(seq__18565_19597__$1);
var G__19600 = c__5525__auto___19598;
var G__19601 = cljs.core.count(c__5525__auto___19598);
var G__19602 = (0);
seq__18565_19548 = G__19599;
chunk__18567_19549 = G__19600;
count__18568_19550 = G__19601;
i__18569_19551 = G__19602;
continue;
} else {
var child_struct_19603 = cljs.core.first(seq__18565_19597__$1);
var children_19604 = shadow.dom.dom_node(child_struct_19603);
if(cljs.core.seq_QMARK_(children_19604)){
var seq__18634_19605 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19604));
var chunk__18636_19606 = null;
var count__18637_19607 = (0);
var i__18638_19608 = (0);
while(true){
if((i__18638_19608 < count__18637_19607)){
var child_19610 = chunk__18636_19606.cljs$core$IIndexed$_nth$arity$2(null,i__18638_19608);
if(cljs.core.truth_(child_19610)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19610);


var G__19612 = seq__18634_19605;
var G__19613 = chunk__18636_19606;
var G__19614 = count__18637_19607;
var G__19615 = (i__18638_19608 + (1));
seq__18634_19605 = G__19612;
chunk__18636_19606 = G__19613;
count__18637_19607 = G__19614;
i__18638_19608 = G__19615;
continue;
} else {
var G__19616 = seq__18634_19605;
var G__19617 = chunk__18636_19606;
var G__19618 = count__18637_19607;
var G__19619 = (i__18638_19608 + (1));
seq__18634_19605 = G__19616;
chunk__18636_19606 = G__19617;
count__18637_19607 = G__19618;
i__18638_19608 = G__19619;
continue;
}
} else {
var temp__5804__auto___19620__$1 = cljs.core.seq(seq__18634_19605);
if(temp__5804__auto___19620__$1){
var seq__18634_19621__$1 = temp__5804__auto___19620__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18634_19621__$1)){
var c__5525__auto___19622 = cljs.core.chunk_first(seq__18634_19621__$1);
var G__19623 = cljs.core.chunk_rest(seq__18634_19621__$1);
var G__19624 = c__5525__auto___19622;
var G__19625 = cljs.core.count(c__5525__auto___19622);
var G__19626 = (0);
seq__18634_19605 = G__19623;
chunk__18636_19606 = G__19624;
count__18637_19607 = G__19625;
i__18638_19608 = G__19626;
continue;
} else {
var child_19627 = cljs.core.first(seq__18634_19621__$1);
if(cljs.core.truth_(child_19627)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19627);


var G__19629 = cljs.core.next(seq__18634_19621__$1);
var G__19630 = null;
var G__19631 = (0);
var G__19632 = (0);
seq__18634_19605 = G__19629;
chunk__18636_19606 = G__19630;
count__18637_19607 = G__19631;
i__18638_19608 = G__19632;
continue;
} else {
var G__19633 = cljs.core.next(seq__18634_19621__$1);
var G__19634 = null;
var G__19635 = (0);
var G__19636 = (0);
seq__18634_19605 = G__19633;
chunk__18636_19606 = G__19634;
count__18637_19607 = G__19635;
i__18638_19608 = G__19636;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19604);
}


var G__19639 = cljs.core.next(seq__18565_19597__$1);
var G__19640 = null;
var G__19641 = (0);
var G__19642 = (0);
seq__18565_19548 = G__19639;
chunk__18567_19549 = G__19640;
count__18568_19550 = G__19641;
i__18569_19551 = G__19642;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18672 = cljs.core.seq(node);
var chunk__18673 = null;
var count__18674 = (0);
var i__18675 = (0);
while(true){
if((i__18675 < count__18674)){
var n = chunk__18673.cljs$core$IIndexed$_nth$arity$2(null,i__18675);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19660 = seq__18672;
var G__19661 = chunk__18673;
var G__19662 = count__18674;
var G__19663 = (i__18675 + (1));
seq__18672 = G__19660;
chunk__18673 = G__19661;
count__18674 = G__19662;
i__18675 = G__19663;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18672);
if(temp__5804__auto__){
var seq__18672__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18672__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18672__$1);
var G__19664 = cljs.core.chunk_rest(seq__18672__$1);
var G__19665 = c__5525__auto__;
var G__19666 = cljs.core.count(c__5525__auto__);
var G__19667 = (0);
seq__18672 = G__19664;
chunk__18673 = G__19665;
count__18674 = G__19666;
i__18675 = G__19667;
continue;
} else {
var n = cljs.core.first(seq__18672__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19671 = cljs.core.next(seq__18672__$1);
var G__19672 = null;
var G__19673 = (0);
var G__19674 = (0);
seq__18672 = G__19671;
chunk__18673 = G__19672;
count__18674 = G__19673;
i__18675 = G__19674;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18683 = arguments.length;
switch (G__18683) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18685 = arguments.length;
switch (G__18685) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18687 = arguments.length;
switch (G__18687) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19701 = arguments.length;
var i__5727__auto___19702 = (0);
while(true){
if((i__5727__auto___19702 < len__5726__auto___19701)){
args__5732__auto__.push((arguments[i__5727__auto___19702]));

var G__19703 = (i__5727__auto___19702 + (1));
i__5727__auto___19702 = G__19703;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18706_19704 = cljs.core.seq(nodes);
var chunk__18707_19705 = null;
var count__18708_19706 = (0);
var i__18709_19707 = (0);
while(true){
if((i__18709_19707 < count__18708_19706)){
var node_19708 = chunk__18707_19705.cljs$core$IIndexed$_nth$arity$2(null,i__18709_19707);
fragment.appendChild(shadow.dom._to_dom(node_19708));


var G__19710 = seq__18706_19704;
var G__19711 = chunk__18707_19705;
var G__19712 = count__18708_19706;
var G__19713 = (i__18709_19707 + (1));
seq__18706_19704 = G__19710;
chunk__18707_19705 = G__19711;
count__18708_19706 = G__19712;
i__18709_19707 = G__19713;
continue;
} else {
var temp__5804__auto___19714 = cljs.core.seq(seq__18706_19704);
if(temp__5804__auto___19714){
var seq__18706_19718__$1 = temp__5804__auto___19714;
if(cljs.core.chunked_seq_QMARK_(seq__18706_19718__$1)){
var c__5525__auto___19720 = cljs.core.chunk_first(seq__18706_19718__$1);
var G__19721 = cljs.core.chunk_rest(seq__18706_19718__$1);
var G__19722 = c__5525__auto___19720;
var G__19723 = cljs.core.count(c__5525__auto___19720);
var G__19724 = (0);
seq__18706_19704 = G__19721;
chunk__18707_19705 = G__19722;
count__18708_19706 = G__19723;
i__18709_19707 = G__19724;
continue;
} else {
var node_19725 = cljs.core.first(seq__18706_19718__$1);
fragment.appendChild(shadow.dom._to_dom(node_19725));


var G__19726 = cljs.core.next(seq__18706_19718__$1);
var G__19727 = null;
var G__19728 = (0);
var G__19729 = (0);
seq__18706_19704 = G__19726;
chunk__18707_19705 = G__19727;
count__18708_19706 = G__19728;
i__18709_19707 = G__19729;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18704){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18704));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18710_19734 = cljs.core.seq(scripts);
var chunk__18711_19735 = null;
var count__18712_19736 = (0);
var i__18713_19737 = (0);
while(true){
if((i__18713_19737 < count__18712_19736)){
var vec__18723_19741 = chunk__18711_19735.cljs$core$IIndexed$_nth$arity$2(null,i__18713_19737);
var script_tag_19742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18723_19741,(0),null);
var script_body_19743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18723_19741,(1),null);
eval(script_body_19743);


var G__19744 = seq__18710_19734;
var G__19745 = chunk__18711_19735;
var G__19746 = count__18712_19736;
var G__19747 = (i__18713_19737 + (1));
seq__18710_19734 = G__19744;
chunk__18711_19735 = G__19745;
count__18712_19736 = G__19746;
i__18713_19737 = G__19747;
continue;
} else {
var temp__5804__auto___19748 = cljs.core.seq(seq__18710_19734);
if(temp__5804__auto___19748){
var seq__18710_19753__$1 = temp__5804__auto___19748;
if(cljs.core.chunked_seq_QMARK_(seq__18710_19753__$1)){
var c__5525__auto___19754 = cljs.core.chunk_first(seq__18710_19753__$1);
var G__19755 = cljs.core.chunk_rest(seq__18710_19753__$1);
var G__19756 = c__5525__auto___19754;
var G__19757 = cljs.core.count(c__5525__auto___19754);
var G__19758 = (0);
seq__18710_19734 = G__19755;
chunk__18711_19735 = G__19756;
count__18712_19736 = G__19757;
i__18713_19737 = G__19758;
continue;
} else {
var vec__18727_19759 = cljs.core.first(seq__18710_19753__$1);
var script_tag_19760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18727_19759,(0),null);
var script_body_19761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18727_19759,(1),null);
eval(script_body_19761);


var G__19762 = cljs.core.next(seq__18710_19753__$1);
var G__19763 = null;
var G__19764 = (0);
var G__19765 = (0);
seq__18710_19734 = G__19762;
chunk__18711_19735 = G__19763;
count__18712_19736 = G__19764;
i__18713_19737 = G__19765;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18730){
var vec__18732 = p__18730;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18732,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18732,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18742 = arguments.length;
switch (G__18742) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18747 = cljs.core.seq(style_keys);
var chunk__18748 = null;
var count__18749 = (0);
var i__18750 = (0);
while(true){
if((i__18750 < count__18749)){
var it = chunk__18748.cljs$core$IIndexed$_nth$arity$2(null,i__18750);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19793 = seq__18747;
var G__19794 = chunk__18748;
var G__19795 = count__18749;
var G__19796 = (i__18750 + (1));
seq__18747 = G__19793;
chunk__18748 = G__19794;
count__18749 = G__19795;
i__18750 = G__19796;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18747);
if(temp__5804__auto__){
var seq__18747__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18747__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18747__$1);
var G__19798 = cljs.core.chunk_rest(seq__18747__$1);
var G__19800 = c__5525__auto__;
var G__19801 = cljs.core.count(c__5525__auto__);
var G__19802 = (0);
seq__18747 = G__19798;
chunk__18748 = G__19800;
count__18749 = G__19801;
i__18750 = G__19802;
continue;
} else {
var it = cljs.core.first(seq__18747__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19803 = cljs.core.next(seq__18747__$1);
var G__19804 = null;
var G__19805 = (0);
var G__19806 = (0);
seq__18747 = G__19803;
chunk__18748 = G__19804;
count__18749 = G__19805;
i__18750 = G__19806;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18781,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18788 = k18781;
var G__18788__$1 = (((G__18788 instanceof cljs.core.Keyword))?G__18788.fqn:null);
switch (G__18788__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18781,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18790){
var vec__18792 = p__18790;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18792,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18792,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18780){
var self__ = this;
var G__18780__$1 = this;
return (new cljs.core.RecordIter((0),G__18780__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18782,other18783){
var self__ = this;
var this18782__$1 = this;
return (((!((other18783 == null)))) && ((((this18782__$1.constructor === other18783.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18782__$1.x,other18783.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18782__$1.y,other18783.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18782__$1.__extmap,other18783.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18781){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18818 = k18781;
var G__18818__$1 = (((G__18818 instanceof cljs.core.Keyword))?G__18818.fqn:null);
switch (G__18818__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18781);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18780){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18825 = cljs.core.keyword_identical_QMARK_;
var expr__18826 = k__5309__auto__;
if(cljs.core.truth_((pred__18825.cljs$core$IFn$_invoke$arity$2 ? pred__18825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18826) : pred__18825.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18826)))){
return (new shadow.dom.Coordinate(G__18780,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18825.cljs$core$IFn$_invoke$arity$2 ? pred__18825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18826) : pred__18825.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18826)))){
return (new shadow.dom.Coordinate(self__.x,G__18780,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18780),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18780){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18780,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18785){
var extmap__5342__auto__ = (function (){var G__18843 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18785,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18785)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18843);
} else {
return G__18843;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18785),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18785),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18847,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18852 = k18847;
var G__18852__$1 = (((G__18852 instanceof cljs.core.Keyword))?G__18852.fqn:null);
switch (G__18852__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18847,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18857){
var vec__18858 = p__18857;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18858,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18858,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18846){
var self__ = this;
var G__18846__$1 = this;
return (new cljs.core.RecordIter((0),G__18846__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18848,other18849){
var self__ = this;
var this18848__$1 = this;
return (((!((other18849 == null)))) && ((((this18848__$1.constructor === other18849.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18848__$1.w,other18849.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18848__$1.h,other18849.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18848__$1.__extmap,other18849.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18847){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18941 = k18847;
var G__18941__$1 = (((G__18941 instanceof cljs.core.Keyword))?G__18941.fqn:null);
switch (G__18941__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18847);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18846){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18944 = cljs.core.keyword_identical_QMARK_;
var expr__18945 = k__5309__auto__;
if(cljs.core.truth_((pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18945) : pred__18944.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18945)))){
return (new shadow.dom.Size(G__18846,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18945) : pred__18944.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18945)))){
return (new shadow.dom.Size(self__.w,G__18846,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18846),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18846){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18846,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18851){
var extmap__5342__auto__ = (function (){var G__18963 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18851,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18851)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18963);
} else {
return G__18963;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18851),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18851),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__19854 = (i + (1));
var G__19855 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19854;
ret = G__19855;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19047){
var vec__19052 = p__19047;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19052,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19052,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19083 = arguments.length;
switch (G__19083) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19867 = ps;
var G__19868 = (i + (1));
el__$1 = G__19867;
i = G__19868;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19147 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19147,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19147,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19147,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19152_19880 = cljs.core.seq(props);
var chunk__19153_19881 = null;
var count__19154_19882 = (0);
var i__19155_19883 = (0);
while(true){
if((i__19155_19883 < count__19154_19882)){
var vec__19179_19884 = chunk__19153_19881.cljs$core$IIndexed$_nth$arity$2(null,i__19155_19883);
var k_19886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19179_19884,(0),null);
var v_19887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19179_19884,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19886);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19886),v_19887);


var G__19894 = seq__19152_19880;
var G__19895 = chunk__19153_19881;
var G__19896 = count__19154_19882;
var G__19897 = (i__19155_19883 + (1));
seq__19152_19880 = G__19894;
chunk__19153_19881 = G__19895;
count__19154_19882 = G__19896;
i__19155_19883 = G__19897;
continue;
} else {
var temp__5804__auto___19898 = cljs.core.seq(seq__19152_19880);
if(temp__5804__auto___19898){
var seq__19152_19899__$1 = temp__5804__auto___19898;
if(cljs.core.chunked_seq_QMARK_(seq__19152_19899__$1)){
var c__5525__auto___19900 = cljs.core.chunk_first(seq__19152_19899__$1);
var G__19901 = cljs.core.chunk_rest(seq__19152_19899__$1);
var G__19902 = c__5525__auto___19900;
var G__19903 = cljs.core.count(c__5525__auto___19900);
var G__19904 = (0);
seq__19152_19880 = G__19901;
chunk__19153_19881 = G__19902;
count__19154_19882 = G__19903;
i__19155_19883 = G__19904;
continue;
} else {
var vec__19196_19905 = cljs.core.first(seq__19152_19899__$1);
var k_19906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19196_19905,(0),null);
var v_19907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19196_19905,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19906);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19906),v_19907);


var G__19908 = cljs.core.next(seq__19152_19899__$1);
var G__19909 = null;
var G__19910 = (0);
var G__19911 = (0);
seq__19152_19880 = G__19908;
chunk__19153_19881 = G__19909;
count__19154_19882 = G__19910;
i__19155_19883 = G__19911;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19229 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19229,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19229,(1),null);
var seq__19238_19915 = cljs.core.seq(node_children);
var chunk__19240_19916 = null;
var count__19241_19917 = (0);
var i__19242_19918 = (0);
while(true){
if((i__19242_19918 < count__19241_19917)){
var child_struct_19920 = chunk__19240_19916.cljs$core$IIndexed$_nth$arity$2(null,i__19242_19918);
if((!((child_struct_19920 == null)))){
if(typeof child_struct_19920 === 'string'){
var text_19921 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19921),child_struct_19920].join(''));
} else {
var children_19923 = shadow.dom.svg_node(child_struct_19920);
if(cljs.core.seq_QMARK_(children_19923)){
var seq__19319_19925 = cljs.core.seq(children_19923);
var chunk__19321_19926 = null;
var count__19322_19927 = (0);
var i__19323_19928 = (0);
while(true){
if((i__19323_19928 < count__19322_19927)){
var child_19932 = chunk__19321_19926.cljs$core$IIndexed$_nth$arity$2(null,i__19323_19928);
if(cljs.core.truth_(child_19932)){
node.appendChild(child_19932);


var G__19934 = seq__19319_19925;
var G__19935 = chunk__19321_19926;
var G__19936 = count__19322_19927;
var G__19937 = (i__19323_19928 + (1));
seq__19319_19925 = G__19934;
chunk__19321_19926 = G__19935;
count__19322_19927 = G__19936;
i__19323_19928 = G__19937;
continue;
} else {
var G__19938 = seq__19319_19925;
var G__19939 = chunk__19321_19926;
var G__19940 = count__19322_19927;
var G__19941 = (i__19323_19928 + (1));
seq__19319_19925 = G__19938;
chunk__19321_19926 = G__19939;
count__19322_19927 = G__19940;
i__19323_19928 = G__19941;
continue;
}
} else {
var temp__5804__auto___19942 = cljs.core.seq(seq__19319_19925);
if(temp__5804__auto___19942){
var seq__19319_19943__$1 = temp__5804__auto___19942;
if(cljs.core.chunked_seq_QMARK_(seq__19319_19943__$1)){
var c__5525__auto___19944 = cljs.core.chunk_first(seq__19319_19943__$1);
var G__19945 = cljs.core.chunk_rest(seq__19319_19943__$1);
var G__19946 = c__5525__auto___19944;
var G__19947 = cljs.core.count(c__5525__auto___19944);
var G__19948 = (0);
seq__19319_19925 = G__19945;
chunk__19321_19926 = G__19946;
count__19322_19927 = G__19947;
i__19323_19928 = G__19948;
continue;
} else {
var child_19949 = cljs.core.first(seq__19319_19943__$1);
if(cljs.core.truth_(child_19949)){
node.appendChild(child_19949);


var G__19950 = cljs.core.next(seq__19319_19943__$1);
var G__19951 = null;
var G__19952 = (0);
var G__19953 = (0);
seq__19319_19925 = G__19950;
chunk__19321_19926 = G__19951;
count__19322_19927 = G__19952;
i__19323_19928 = G__19953;
continue;
} else {
var G__19954 = cljs.core.next(seq__19319_19943__$1);
var G__19955 = null;
var G__19956 = (0);
var G__19957 = (0);
seq__19319_19925 = G__19954;
chunk__19321_19926 = G__19955;
count__19322_19927 = G__19956;
i__19323_19928 = G__19957;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19923);
}
}


var G__19959 = seq__19238_19915;
var G__19960 = chunk__19240_19916;
var G__19961 = count__19241_19917;
var G__19962 = (i__19242_19918 + (1));
seq__19238_19915 = G__19959;
chunk__19240_19916 = G__19960;
count__19241_19917 = G__19961;
i__19242_19918 = G__19962;
continue;
} else {
var G__19965 = seq__19238_19915;
var G__19966 = chunk__19240_19916;
var G__19967 = count__19241_19917;
var G__19968 = (i__19242_19918 + (1));
seq__19238_19915 = G__19965;
chunk__19240_19916 = G__19966;
count__19241_19917 = G__19967;
i__19242_19918 = G__19968;
continue;
}
} else {
var temp__5804__auto___19969 = cljs.core.seq(seq__19238_19915);
if(temp__5804__auto___19969){
var seq__19238_19970__$1 = temp__5804__auto___19969;
if(cljs.core.chunked_seq_QMARK_(seq__19238_19970__$1)){
var c__5525__auto___19972 = cljs.core.chunk_first(seq__19238_19970__$1);
var G__19975 = cljs.core.chunk_rest(seq__19238_19970__$1);
var G__19976 = c__5525__auto___19972;
var G__19977 = cljs.core.count(c__5525__auto___19972);
var G__19978 = (0);
seq__19238_19915 = G__19975;
chunk__19240_19916 = G__19976;
count__19241_19917 = G__19977;
i__19242_19918 = G__19978;
continue;
} else {
var child_struct_19979 = cljs.core.first(seq__19238_19970__$1);
if((!((child_struct_19979 == null)))){
if(typeof child_struct_19979 === 'string'){
var text_19980 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19980),child_struct_19979].join(''));
} else {
var children_19981 = shadow.dom.svg_node(child_struct_19979);
if(cljs.core.seq_QMARK_(children_19981)){
var seq__19343_19983 = cljs.core.seq(children_19981);
var chunk__19345_19984 = null;
var count__19346_19985 = (0);
var i__19347_19986 = (0);
while(true){
if((i__19347_19986 < count__19346_19985)){
var child_19988 = chunk__19345_19984.cljs$core$IIndexed$_nth$arity$2(null,i__19347_19986);
if(cljs.core.truth_(child_19988)){
node.appendChild(child_19988);


var G__19991 = seq__19343_19983;
var G__19992 = chunk__19345_19984;
var G__19993 = count__19346_19985;
var G__19994 = (i__19347_19986 + (1));
seq__19343_19983 = G__19991;
chunk__19345_19984 = G__19992;
count__19346_19985 = G__19993;
i__19347_19986 = G__19994;
continue;
} else {
var G__19995 = seq__19343_19983;
var G__19996 = chunk__19345_19984;
var G__19997 = count__19346_19985;
var G__19998 = (i__19347_19986 + (1));
seq__19343_19983 = G__19995;
chunk__19345_19984 = G__19996;
count__19346_19985 = G__19997;
i__19347_19986 = G__19998;
continue;
}
} else {
var temp__5804__auto___19999__$1 = cljs.core.seq(seq__19343_19983);
if(temp__5804__auto___19999__$1){
var seq__19343_20002__$1 = temp__5804__auto___19999__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19343_20002__$1)){
var c__5525__auto___20003 = cljs.core.chunk_first(seq__19343_20002__$1);
var G__20004 = cljs.core.chunk_rest(seq__19343_20002__$1);
var G__20005 = c__5525__auto___20003;
var G__20006 = cljs.core.count(c__5525__auto___20003);
var G__20007 = (0);
seq__19343_19983 = G__20004;
chunk__19345_19984 = G__20005;
count__19346_19985 = G__20006;
i__19347_19986 = G__20007;
continue;
} else {
var child_20010 = cljs.core.first(seq__19343_20002__$1);
if(cljs.core.truth_(child_20010)){
node.appendChild(child_20010);


var G__20012 = cljs.core.next(seq__19343_20002__$1);
var G__20013 = null;
var G__20014 = (0);
var G__20015 = (0);
seq__19343_19983 = G__20012;
chunk__19345_19984 = G__20013;
count__19346_19985 = G__20014;
i__19347_19986 = G__20015;
continue;
} else {
var G__20019 = cljs.core.next(seq__19343_20002__$1);
var G__20020 = null;
var G__20021 = (0);
var G__20022 = (0);
seq__19343_19983 = G__20019;
chunk__19345_19984 = G__20020;
count__19346_19985 = G__20021;
i__19347_19986 = G__20022;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19981);
}
}


var G__20024 = cljs.core.next(seq__19238_19970__$1);
var G__20025 = null;
var G__20026 = (0);
var G__20027 = (0);
seq__19238_19915 = G__20024;
chunk__19240_19916 = G__20025;
count__19241_19917 = G__20026;
i__19242_19918 = G__20027;
continue;
} else {
var G__20029 = cljs.core.next(seq__19238_19970__$1);
var G__20030 = null;
var G__20031 = (0);
var G__20032 = (0);
seq__19238_19915 = G__20029;
chunk__19240_19916 = G__20030;
count__19241_19917 = G__20031;
i__19242_19918 = G__20032;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20040 = arguments.length;
var i__5727__auto___20041 = (0);
while(true){
if((i__5727__auto___20041 < len__5726__auto___20040)){
args__5732__auto__.push((arguments[i__5727__auto___20041]));

var G__20044 = (i__5727__auto___20041 + (1));
i__5727__auto___20041 = G__20044;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19381){
var G__19382 = cljs.core.first(seq19381);
var seq19381__$1 = cljs.core.next(seq19381);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19382,seq19381__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
