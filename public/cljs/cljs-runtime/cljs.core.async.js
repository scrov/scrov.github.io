goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22111 = (function (f,blockable,meta22112){
this.f = f;
this.blockable = blockable;
this.meta22112 = meta22112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22113,meta22112__$1){
var self__ = this;
var _22113__$1 = this;
return (new cljs.core.async.t_cljs$core$async22111(self__.f,self__.blockable,meta22112__$1));
}));

(cljs.core.async.t_cljs$core$async22111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22113){
var self__ = this;
var _22113__$1 = this;
return self__.meta22112;
}));

(cljs.core.async.t_cljs$core$async22111.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22111.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async22111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async22111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22112","meta22112",-1563683460,null)], null);
}));

(cljs.core.async.t_cljs$core$async22111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22111");

(cljs.core.async.t_cljs$core$async22111.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22111.
 */
cljs.core.async.__GT_t_cljs$core$async22111 = (function cljs$core$async$__GT_t_cljs$core$async22111(f,blockable,meta22112){
return (new cljs.core.async.t_cljs$core$async22111(f,blockable,meta22112));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22110 = arguments.length;
switch (G__22110) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async22111(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__22217 = arguments.length;
switch (G__22217) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__22271 = arguments.length;
switch (G__22271) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__22283 = arguments.length;
switch (G__22283) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_25009 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25009) : fn1.call(null,val_25009));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25009) : fn1.call(null,val_25009));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__22286 = arguments.length;
switch (G__22286) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___25011 = n;
var x_25012 = (0);
while(true){
if((x_25012 < n__5593__auto___25011)){
(a[x_25012] = x_25012);

var G__25013 = (x_25012 + (1));
x_25012 = G__25013;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22294 = (function (flag,meta22295){
this.flag = flag;
this.meta22295 = meta22295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22296,meta22295__$1){
var self__ = this;
var _22296__$1 = this;
return (new cljs.core.async.t_cljs$core$async22294(self__.flag,meta22295__$1));
}));

(cljs.core.async.t_cljs$core$async22294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22296){
var self__ = this;
var _22296__$1 = this;
return self__.meta22295;
}));

(cljs.core.async.t_cljs$core$async22294.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22294.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async22294.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22294.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async22294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22295","meta22295",1343635371,null)], null);
}));

(cljs.core.async.t_cljs$core$async22294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22294");

(cljs.core.async.t_cljs$core$async22294.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22294.
 */
cljs.core.async.__GT_t_cljs$core$async22294 = (function cljs$core$async$__GT_t_cljs$core$async22294(flag,meta22295){
return (new cljs.core.async.t_cljs$core$async22294(flag,meta22295));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async22294(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22305 = (function (flag,cb,meta22306){
this.flag = flag;
this.cb = cb;
this.meta22306 = meta22306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22307,meta22306__$1){
var self__ = this;
var _22307__$1 = this;
return (new cljs.core.async.t_cljs$core$async22305(self__.flag,self__.cb,meta22306__$1));
}));

(cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22307){
var self__ = this;
var _22307__$1 = this;
return self__.meta22306;
}));

(cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async22305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22306","meta22306",765128719,null)], null);
}));

(cljs.core.async.t_cljs$core$async22305.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22305");

(cljs.core.async.t_cljs$core$async22305.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22305");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22305.
 */
cljs.core.async.__GT_t_cljs$core$async22305 = (function cljs$core$async$__GT_t_cljs$core$async22305(flag,cb,meta22306){
return (new cljs.core.async.t_cljs$core$async22305(flag,cb,meta22306));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async22305(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22342_SHARP_){
var G__22352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22342_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22352) : fret.call(null,G__22352));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22347_SHARP_){
var G__22356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22347_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22356) : fret.call(null,G__22356));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25014 = (i + (1));
i = G__25014;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___25018 = arguments.length;
var i__5727__auto___25019 = (0);
while(true){
if((i__5727__auto___25019 < len__5726__auto___25018)){
args__5732__auto__.push((arguments[i__5727__auto___25019]));

var G__25020 = (i__5727__auto___25019 + (1));
i__5727__auto___25019 = G__25020;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22378){
var map__22380 = p__22378;
var map__22380__$1 = cljs.core.__destructure_map(map__22380);
var opts = map__22380__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22361){
var G__22367 = cljs.core.first(seq22361);
var seq22361__$1 = cljs.core.next(seq22361);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22367,seq22361__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__22434 = arguments.length;
switch (G__22434) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21931__auto___25022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_22509){
var state_val_22510 = (state_22509[(1)]);
if((state_val_22510 === (7))){
var inst_22482 = (state_22509[(2)]);
var state_22509__$1 = state_22509;
var statearr_22512_25023 = state_22509__$1;
(statearr_22512_25023[(2)] = inst_22482);

(statearr_22512_25023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (1))){
var state_22509__$1 = state_22509;
var statearr_22513_25024 = state_22509__$1;
(statearr_22513_25024[(2)] = null);

(statearr_22513_25024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (4))){
var inst_22458 = (state_22509[(7)]);
var inst_22458__$1 = (state_22509[(2)]);
var inst_22465 = (inst_22458__$1 == null);
var state_22509__$1 = (function (){var statearr_22514 = state_22509;
(statearr_22514[(7)] = inst_22458__$1);

return statearr_22514;
})();
if(cljs.core.truth_(inst_22465)){
var statearr_22516_25025 = state_22509__$1;
(statearr_22516_25025[(1)] = (5));

} else {
var statearr_22517_25026 = state_22509__$1;
(statearr_22517_25026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (13))){
var state_22509__$1 = state_22509;
var statearr_22521_25027 = state_22509__$1;
(statearr_22521_25027[(2)] = null);

(statearr_22521_25027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (6))){
var inst_22458 = (state_22509[(7)]);
var state_22509__$1 = state_22509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22509__$1,(11),to,inst_22458);
} else {
if((state_val_22510 === (3))){
var inst_22487 = (state_22509[(2)]);
var state_22509__$1 = state_22509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22509__$1,inst_22487);
} else {
if((state_val_22510 === (12))){
var state_22509__$1 = state_22509;
var statearr_22525_25028 = state_22509__$1;
(statearr_22525_25028[(2)] = null);

(statearr_22525_25028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (2))){
var state_22509__$1 = state_22509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22509__$1,(4),from);
} else {
if((state_val_22510 === (11))){
var inst_22475 = (state_22509[(2)]);
var state_22509__$1 = state_22509;
if(cljs.core.truth_(inst_22475)){
var statearr_22527_25029 = state_22509__$1;
(statearr_22527_25029[(1)] = (12));

} else {
var statearr_22528_25030 = state_22509__$1;
(statearr_22528_25030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (9))){
var state_22509__$1 = state_22509;
var statearr_22530_25031 = state_22509__$1;
(statearr_22530_25031[(2)] = null);

(statearr_22530_25031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (5))){
var state_22509__$1 = state_22509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22534_25032 = state_22509__$1;
(statearr_22534_25032[(1)] = (8));

} else {
var statearr_22535_25033 = state_22509__$1;
(statearr_22535_25033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (14))){
var inst_22480 = (state_22509[(2)]);
var state_22509__$1 = state_22509;
var statearr_22540_25034 = state_22509__$1;
(statearr_22540_25034[(2)] = inst_22480);

(statearr_22540_25034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (10))){
var inst_22472 = (state_22509[(2)]);
var state_22509__$1 = state_22509;
var statearr_22549_25035 = state_22509__$1;
(statearr_22549_25035[(2)] = inst_22472);

(statearr_22549_25035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (8))){
var inst_22469 = cljs.core.async.close_BANG_(to);
var state_22509__$1 = state_22509;
var statearr_22558_25036 = state_22509__$1;
(statearr_22558_25036[(2)] = inst_22469);

(statearr_22558_25036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21429__auto__ = null;
var cljs$core$async$state_machine__21429__auto____0 = (function (){
var statearr_22560 = [null,null,null,null,null,null,null,null];
(statearr_22560[(0)] = cljs$core$async$state_machine__21429__auto__);

(statearr_22560[(1)] = (1));

return statearr_22560;
});
var cljs$core$async$state_machine__21429__auto____1 = (function (state_22509){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_22509);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e22562){var ex__21432__auto__ = e22562;
var statearr_22563_25037 = state_22509;
(statearr_22563_25037[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_22509[(4)]))){
var statearr_22564_25038 = state_22509;
(statearr_22564_25038[(1)] = cljs.core.first((state_22509[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25039 = state_22509;
state_22509 = G__25039;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$state_machine__21429__auto__ = function(state_22509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21429__auto____1.call(this,state_22509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21429__auto____0;
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21429__auto____1;
return cljs$core$async$state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_22565 = f__21932__auto__();
(statearr_22565[(6)] = c__21931__auto___25022);

return statearr_22565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__22572){
var vec__22573 = p__22572;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22573,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22573,(1),null);
var job = vec__22573;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21931__auto___25043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_22580){
var state_val_22581 = (state_22580[(1)]);
if((state_val_22581 === (1))){
var state_22580__$1 = state_22580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22580__$1,(2),res,v);
} else {
if((state_val_22581 === (2))){
var inst_22577 = (state_22580[(2)]);
var inst_22578 = cljs.core.async.close_BANG_(res);
var state_22580__$1 = (function (){var statearr_22582 = state_22580;
(statearr_22582[(7)] = inst_22577);

return statearr_22582;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22580__$1,inst_22578);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0 = (function (){
var statearr_22583 = [null,null,null,null,null,null,null,null];
(statearr_22583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__);

(statearr_22583[(1)] = (1));

return statearr_22583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1 = (function (state_22580){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_22580);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e22584){var ex__21432__auto__ = e22584;
var statearr_22585_25051 = state_22580;
(statearr_22585_25051[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_22580[(4)]))){
var statearr_22586_25052 = state_22580;
(statearr_22586_25052[(1)] = cljs.core.first((state_22580[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25056 = state_22580;
state_22580 = G__25056;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__ = function(state_22580){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1.call(this,state_22580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_22587 = f__21932__auto__();
(statearr_22587[(6)] = c__21931__auto___25043);

return statearr_22587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__22589){
var vec__22590 = p__22589;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22590,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22590,(1),null);
var job = vec__22590;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___25057 = n;
var __25058 = (0);
while(true){
if((__25058 < n__5593__auto___25057)){
var G__22594_25059 = type;
var G__22594_25060__$1 = (((G__22594_25059 instanceof cljs.core.Keyword))?G__22594_25059.fqn:null);
switch (G__22594_25060__$1) {
case "compute":
var c__21931__auto___25066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25058,c__21931__auto___25066,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async){
return (function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = ((function (__25058,c__21931__auto___25066,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async){
return (function (state_22607){
var state_val_22608 = (state_22607[(1)]);
if((state_val_22608 === (1))){
var state_22607__$1 = state_22607;
var statearr_22609_25067 = state_22607__$1;
(statearr_22609_25067[(2)] = null);

(statearr_22609_25067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (2))){
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22607__$1,(4),jobs);
} else {
if((state_val_22608 === (3))){
var inst_22605 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22607__$1,inst_22605);
} else {
if((state_val_22608 === (4))){
var inst_22597 = (state_22607[(2)]);
var inst_22598 = process__$1(inst_22597);
var state_22607__$1 = state_22607;
if(cljs.core.truth_(inst_22598)){
var statearr_22615_25068 = state_22607__$1;
(statearr_22615_25068[(1)] = (5));

} else {
var statearr_22616_25069 = state_22607__$1;
(statearr_22616_25069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (5))){
var state_22607__$1 = state_22607;
var statearr_22617_25070 = state_22607__$1;
(statearr_22617_25070[(2)] = null);

(statearr_22617_25070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (6))){
var state_22607__$1 = state_22607;
var statearr_22618_25071 = state_22607__$1;
(statearr_22618_25071[(2)] = null);

(statearr_22618_25071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (7))){
var inst_22603 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22619_25076 = state_22607__$1;
(statearr_22619_25076[(2)] = inst_22603);

(statearr_22619_25076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25058,c__21931__auto___25066,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async))
;
return ((function (__25058,switch__21428__auto__,c__21931__auto___25066,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0 = (function (){
var statearr_22621 = [null,null,null,null,null,null,null];
(statearr_22621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__);

(statearr_22621[(1)] = (1));

return statearr_22621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1 = (function (state_22607){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_22607);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e22622){var ex__21432__auto__ = e22622;
var statearr_22623_25083 = state_22607;
(statearr_22623_25083[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_22607[(4)]))){
var statearr_22624_25084 = state_22607;
(statearr_22624_25084[(1)] = cljs.core.first((state_22607[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25085 = state_22607;
state_22607 = G__25085;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__ = function(state_22607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1.call(this,state_22607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__;
})()
;})(__25058,switch__21428__auto__,c__21931__auto___25066,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async))
})();
var state__21933__auto__ = (function (){var statearr_22625 = f__21932__auto__();
(statearr_22625[(6)] = c__21931__auto___25066);

return statearr_22625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
});})(__25058,c__21931__auto___25066,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async))
);


break;
case "async":
var c__21931__auto___25087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25058,c__21931__auto___25087,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async){
return (function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = ((function (__25058,c__21931__auto___25087,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async){
return (function (state_22639){
var state_val_22640 = (state_22639[(1)]);
if((state_val_22640 === (1))){
var state_22639__$1 = state_22639;
var statearr_22642_25088 = state_22639__$1;
(statearr_22642_25088[(2)] = null);

(statearr_22642_25088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22640 === (2))){
var state_22639__$1 = state_22639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22639__$1,(4),jobs);
} else {
if((state_val_22640 === (3))){
var inst_22637 = (state_22639[(2)]);
var state_22639__$1 = state_22639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22639__$1,inst_22637);
} else {
if((state_val_22640 === (4))){
var inst_22629 = (state_22639[(2)]);
var inst_22630 = async(inst_22629);
var state_22639__$1 = state_22639;
if(cljs.core.truth_(inst_22630)){
var statearr_22644_25089 = state_22639__$1;
(statearr_22644_25089[(1)] = (5));

} else {
var statearr_22645_25090 = state_22639__$1;
(statearr_22645_25090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22640 === (5))){
var state_22639__$1 = state_22639;
var statearr_22647_25091 = state_22639__$1;
(statearr_22647_25091[(2)] = null);

(statearr_22647_25091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22640 === (6))){
var state_22639__$1 = state_22639;
var statearr_22648_25092 = state_22639__$1;
(statearr_22648_25092[(2)] = null);

(statearr_22648_25092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22640 === (7))){
var inst_22635 = (state_22639[(2)]);
var state_22639__$1 = state_22639;
var statearr_22650_25093 = state_22639__$1;
(statearr_22650_25093[(2)] = inst_22635);

(statearr_22650_25093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25058,c__21931__auto___25087,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async))
;
return ((function (__25058,switch__21428__auto__,c__21931__auto___25087,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0 = (function (){
var statearr_22652 = [null,null,null,null,null,null,null];
(statearr_22652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__);

(statearr_22652[(1)] = (1));

return statearr_22652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1 = (function (state_22639){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_22639);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e22653){var ex__21432__auto__ = e22653;
var statearr_22654_25101 = state_22639;
(statearr_22654_25101[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_22639[(4)]))){
var statearr_22655_25102 = state_22639;
(statearr_22655_25102[(1)] = cljs.core.first((state_22639[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25107 = state_22639;
state_22639 = G__25107;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__ = function(state_22639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1.call(this,state_22639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__;
})()
;})(__25058,switch__21428__auto__,c__21931__auto___25087,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async))
})();
var state__21933__auto__ = (function (){var statearr_22658 = f__21932__auto__();
(statearr_22658[(6)] = c__21931__auto___25087);

return statearr_22658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
});})(__25058,c__21931__auto___25087,G__22594_25059,G__22594_25060__$1,n__5593__auto___25057,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22594_25060__$1)].join('')));

}

var G__25111 = (__25058 + (1));
__25058 = G__25111;
continue;
} else {
}
break;
}

var c__21931__auto___25112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_22684){
var state_val_22685 = (state_22684[(1)]);
if((state_val_22685 === (7))){
var inst_22680 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22687_25113 = state_22684__$1;
(statearr_22687_25113[(2)] = inst_22680);

(statearr_22687_25113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (1))){
var state_22684__$1 = state_22684;
var statearr_22689_25117 = state_22684__$1;
(statearr_22689_25117[(2)] = null);

(statearr_22689_25117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (4))){
var inst_22664 = (state_22684[(7)]);
var inst_22664__$1 = (state_22684[(2)]);
var inst_22665 = (inst_22664__$1 == null);
var state_22684__$1 = (function (){var statearr_22691 = state_22684;
(statearr_22691[(7)] = inst_22664__$1);

return statearr_22691;
})();
if(cljs.core.truth_(inst_22665)){
var statearr_22692_25124 = state_22684__$1;
(statearr_22692_25124[(1)] = (5));

} else {
var statearr_22693_25125 = state_22684__$1;
(statearr_22693_25125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (6))){
var inst_22664 = (state_22684[(7)]);
var inst_22669 = (state_22684[(8)]);
var inst_22669__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22672 = [inst_22664,inst_22669__$1];
var inst_22673 = (new cljs.core.PersistentVector(null,2,(5),inst_22671,inst_22672,null));
var state_22684__$1 = (function (){var statearr_22695 = state_22684;
(statearr_22695[(8)] = inst_22669__$1);

return statearr_22695;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22684__$1,(8),jobs,inst_22673);
} else {
if((state_val_22685 === (3))){
var inst_22682 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22684__$1,inst_22682);
} else {
if((state_val_22685 === (2))){
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22684__$1,(4),from);
} else {
if((state_val_22685 === (9))){
var inst_22677 = (state_22684[(2)]);
var state_22684__$1 = (function (){var statearr_22696 = state_22684;
(statearr_22696[(9)] = inst_22677);

return statearr_22696;
})();
var statearr_22701_25128 = state_22684__$1;
(statearr_22701_25128[(2)] = null);

(statearr_22701_25128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (5))){
var inst_22667 = cljs.core.async.close_BANG_(jobs);
var state_22684__$1 = state_22684;
var statearr_22704_25129 = state_22684__$1;
(statearr_22704_25129[(2)] = inst_22667);

(statearr_22704_25129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (8))){
var inst_22669 = (state_22684[(8)]);
var inst_22675 = (state_22684[(2)]);
var state_22684__$1 = (function (){var statearr_22705 = state_22684;
(statearr_22705[(10)] = inst_22675);

return statearr_22705;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22684__$1,(9),results,inst_22669);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0 = (function (){
var statearr_22707 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__);

(statearr_22707[(1)] = (1));

return statearr_22707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1 = (function (state_22684){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_22684);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e22709){var ex__21432__auto__ = e22709;
var statearr_22710_25136 = state_22684;
(statearr_22710_25136[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_22684[(4)]))){
var statearr_22711_25138 = state_22684;
(statearr_22711_25138[(1)] = cljs.core.first((state_22684[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25149 = state_22684;
state_22684 = G__25149;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__ = function(state_22684){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1.call(this,state_22684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_22716 = f__21932__auto__();
(statearr_22716[(6)] = c__21931__auto___25112);

return statearr_22716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


var c__21931__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_22756){
var state_val_22757 = (state_22756[(1)]);
if((state_val_22757 === (7))){
var inst_22752 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
var statearr_22759_25160 = state_22756__$1;
(statearr_22759_25160[(2)] = inst_22752);

(statearr_22759_25160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (20))){
var state_22756__$1 = state_22756;
var statearr_22760_25167 = state_22756__$1;
(statearr_22760_25167[(2)] = null);

(statearr_22760_25167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (1))){
var state_22756__$1 = state_22756;
var statearr_22762_25172 = state_22756__$1;
(statearr_22762_25172[(2)] = null);

(statearr_22762_25172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (4))){
var inst_22720 = (state_22756[(7)]);
var inst_22720__$1 = (state_22756[(2)]);
var inst_22721 = (inst_22720__$1 == null);
var state_22756__$1 = (function (){var statearr_22768 = state_22756;
(statearr_22768[(7)] = inst_22720__$1);

return statearr_22768;
})();
if(cljs.core.truth_(inst_22721)){
var statearr_22770_25177 = state_22756__$1;
(statearr_22770_25177[(1)] = (5));

} else {
var statearr_22771_25178 = state_22756__$1;
(statearr_22771_25178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (15))){
var inst_22734 = (state_22756[(8)]);
var state_22756__$1 = state_22756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22756__$1,(18),to,inst_22734);
} else {
if((state_val_22757 === (21))){
var inst_22747 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
var statearr_22773_25185 = state_22756__$1;
(statearr_22773_25185[(2)] = inst_22747);

(statearr_22773_25185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (13))){
var inst_22749 = (state_22756[(2)]);
var state_22756__$1 = (function (){var statearr_22774 = state_22756;
(statearr_22774[(9)] = inst_22749);

return statearr_22774;
})();
var statearr_22775_25192 = state_22756__$1;
(statearr_22775_25192[(2)] = null);

(statearr_22775_25192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (6))){
var inst_22720 = (state_22756[(7)]);
var state_22756__$1 = state_22756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22756__$1,(11),inst_22720);
} else {
if((state_val_22757 === (17))){
var inst_22742 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
if(cljs.core.truth_(inst_22742)){
var statearr_22777_25197 = state_22756__$1;
(statearr_22777_25197[(1)] = (19));

} else {
var statearr_22778_25198 = state_22756__$1;
(statearr_22778_25198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (3))){
var inst_22754 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22756__$1,inst_22754);
} else {
if((state_val_22757 === (12))){
var inst_22731 = (state_22756[(10)]);
var state_22756__$1 = state_22756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22756__$1,(14),inst_22731);
} else {
if((state_val_22757 === (2))){
var state_22756__$1 = state_22756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22756__$1,(4),results);
} else {
if((state_val_22757 === (19))){
var state_22756__$1 = state_22756;
var statearr_22781_25199 = state_22756__$1;
(statearr_22781_25199[(2)] = null);

(statearr_22781_25199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (11))){
var inst_22731 = (state_22756[(2)]);
var state_22756__$1 = (function (){var statearr_22784 = state_22756;
(statearr_22784[(10)] = inst_22731);

return statearr_22784;
})();
var statearr_22786_25200 = state_22756__$1;
(statearr_22786_25200[(2)] = null);

(statearr_22786_25200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (9))){
var state_22756__$1 = state_22756;
var statearr_22787_25202 = state_22756__$1;
(statearr_22787_25202[(2)] = null);

(statearr_22787_25202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (5))){
var state_22756__$1 = state_22756;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22789_25203 = state_22756__$1;
(statearr_22789_25203[(1)] = (8));

} else {
var statearr_22791_25204 = state_22756__$1;
(statearr_22791_25204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (14))){
var inst_22734 = (state_22756[(8)]);
var inst_22736 = (state_22756[(11)]);
var inst_22734__$1 = (state_22756[(2)]);
var inst_22735 = (inst_22734__$1 == null);
var inst_22736__$1 = cljs.core.not(inst_22735);
var state_22756__$1 = (function (){var statearr_22792 = state_22756;
(statearr_22792[(8)] = inst_22734__$1);

(statearr_22792[(11)] = inst_22736__$1);

return statearr_22792;
})();
if(inst_22736__$1){
var statearr_22797_25205 = state_22756__$1;
(statearr_22797_25205[(1)] = (15));

} else {
var statearr_22798_25206 = state_22756__$1;
(statearr_22798_25206[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (16))){
var inst_22736 = (state_22756[(11)]);
var state_22756__$1 = state_22756;
var statearr_22799_25207 = state_22756__$1;
(statearr_22799_25207[(2)] = inst_22736);

(statearr_22799_25207[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (10))){
var inst_22727 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
var statearr_22800_25208 = state_22756__$1;
(statearr_22800_25208[(2)] = inst_22727);

(statearr_22800_25208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (18))){
var inst_22739 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
var statearr_22801_25209 = state_22756__$1;
(statearr_22801_25209[(2)] = inst_22739);

(statearr_22801_25209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (8))){
var inst_22724 = cljs.core.async.close_BANG_(to);
var state_22756__$1 = state_22756;
var statearr_22803_25211 = state_22756__$1;
(statearr_22803_25211[(2)] = inst_22724);

(statearr_22803_25211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0 = (function (){
var statearr_22804 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__);

(statearr_22804[(1)] = (1));

return statearr_22804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1 = (function (state_22756){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_22756);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e22805){var ex__21432__auto__ = e22805;
var statearr_22806_25214 = state_22756;
(statearr_22806_25214[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_22756[(4)]))){
var statearr_22808_25215 = state_22756;
(statearr_22808_25215[(1)] = cljs.core.first((state_22756[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25216 = state_22756;
state_22756 = G__25216;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__ = function(state_22756){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1.call(this,state_22756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_22813 = f__21932__auto__();
(statearr_22813[(6)] = c__21931__auto__);

return statearr_22813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));

return c__21931__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__22815 = arguments.length;
switch (G__22815) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__22823 = arguments.length;
switch (G__22823) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__22838 = arguments.length;
switch (G__22838) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__21931__auto___25229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_22879){
var state_val_22880 = (state_22879[(1)]);
if((state_val_22880 === (7))){
var inst_22874 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
var statearr_22886_25230 = state_22879__$1;
(statearr_22886_25230[(2)] = inst_22874);

(statearr_22886_25230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (1))){
var state_22879__$1 = state_22879;
var statearr_22888_25231 = state_22879__$1;
(statearr_22888_25231[(2)] = null);

(statearr_22888_25231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (4))){
var inst_22855 = (state_22879[(7)]);
var inst_22855__$1 = (state_22879[(2)]);
var inst_22856 = (inst_22855__$1 == null);
var state_22879__$1 = (function (){var statearr_22893 = state_22879;
(statearr_22893[(7)] = inst_22855__$1);

return statearr_22893;
})();
if(cljs.core.truth_(inst_22856)){
var statearr_22895_25232 = state_22879__$1;
(statearr_22895_25232[(1)] = (5));

} else {
var statearr_22896_25233 = state_22879__$1;
(statearr_22896_25233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (13))){
var state_22879__$1 = state_22879;
var statearr_22897_25234 = state_22879__$1;
(statearr_22897_25234[(2)] = null);

(statearr_22897_25234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (6))){
var inst_22855 = (state_22879[(7)]);
var inst_22861 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22855) : p.call(null,inst_22855));
var state_22879__$1 = state_22879;
if(cljs.core.truth_(inst_22861)){
var statearr_22903_25236 = state_22879__$1;
(statearr_22903_25236[(1)] = (9));

} else {
var statearr_22904_25238 = state_22879__$1;
(statearr_22904_25238[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (3))){
var inst_22876 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22879__$1,inst_22876);
} else {
if((state_val_22880 === (12))){
var state_22879__$1 = state_22879;
var statearr_22909_25249 = state_22879__$1;
(statearr_22909_25249[(2)] = null);

(statearr_22909_25249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (2))){
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22879__$1,(4),ch);
} else {
if((state_val_22880 === (11))){
var inst_22855 = (state_22879[(7)]);
var inst_22865 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22879__$1,(8),inst_22865,inst_22855);
} else {
if((state_val_22880 === (9))){
var state_22879__$1 = state_22879;
var statearr_22912_25250 = state_22879__$1;
(statearr_22912_25250[(2)] = tc);

(statearr_22912_25250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (5))){
var inst_22858 = cljs.core.async.close_BANG_(tc);
var inst_22859 = cljs.core.async.close_BANG_(fc);
var state_22879__$1 = (function (){var statearr_22913 = state_22879;
(statearr_22913[(8)] = inst_22858);

return statearr_22913;
})();
var statearr_22914_25251 = state_22879__$1;
(statearr_22914_25251[(2)] = inst_22859);

(statearr_22914_25251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (14))){
var inst_22872 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
var statearr_22922_25252 = state_22879__$1;
(statearr_22922_25252[(2)] = inst_22872);

(statearr_22922_25252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (10))){
var state_22879__$1 = state_22879;
var statearr_22927_25253 = state_22879__$1;
(statearr_22927_25253[(2)] = fc);

(statearr_22927_25253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (8))){
var inst_22867 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
if(cljs.core.truth_(inst_22867)){
var statearr_22930_25255 = state_22879__$1;
(statearr_22930_25255[(1)] = (12));

} else {
var statearr_22933_25256 = state_22879__$1;
(statearr_22933_25256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21429__auto__ = null;
var cljs$core$async$state_machine__21429__auto____0 = (function (){
var statearr_22943 = [null,null,null,null,null,null,null,null,null];
(statearr_22943[(0)] = cljs$core$async$state_machine__21429__auto__);

(statearr_22943[(1)] = (1));

return statearr_22943;
});
var cljs$core$async$state_machine__21429__auto____1 = (function (state_22879){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_22879);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e22954){var ex__21432__auto__ = e22954;
var statearr_22956_25257 = state_22879;
(statearr_22956_25257[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_22879[(4)]))){
var statearr_22958_25258 = state_22879;
(statearr_22958_25258[(1)] = cljs.core.first((state_22879[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25262 = state_22879;
state_22879 = G__25262;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$state_machine__21429__auto__ = function(state_22879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21429__auto____1.call(this,state_22879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21429__auto____0;
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21429__auto____1;
return cljs$core$async$state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_22967 = f__21932__auto__();
(statearr_22967[(6)] = c__21931__auto___25229);

return statearr_22967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21931__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_23027){
var state_val_23028 = (state_23027[(1)]);
if((state_val_23028 === (7))){
var inst_23022 = (state_23027[(2)]);
var state_23027__$1 = state_23027;
var statearr_23048_25282 = state_23027__$1;
(statearr_23048_25282[(2)] = inst_23022);

(statearr_23048_25282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23028 === (1))){
var inst_22988 = init;
var inst_22989 = inst_22988;
var state_23027__$1 = (function (){var statearr_23057 = state_23027;
(statearr_23057[(7)] = inst_22989);

return statearr_23057;
})();
var statearr_23060_25294 = state_23027__$1;
(statearr_23060_25294[(2)] = null);

(statearr_23060_25294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23028 === (4))){
var inst_22995 = (state_23027[(8)]);
var inst_22995__$1 = (state_23027[(2)]);
var inst_22996 = (inst_22995__$1 == null);
var state_23027__$1 = (function (){var statearr_23070 = state_23027;
(statearr_23070[(8)] = inst_22995__$1);

return statearr_23070;
})();
if(cljs.core.truth_(inst_22996)){
var statearr_23074_25299 = state_23027__$1;
(statearr_23074_25299[(1)] = (5));

} else {
var statearr_23075_25300 = state_23027__$1;
(statearr_23075_25300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23028 === (6))){
var inst_23005 = (state_23027[(9)]);
var inst_22995 = (state_23027[(8)]);
var inst_22989 = (state_23027[(7)]);
var inst_23005__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22989,inst_22995) : f.call(null,inst_22989,inst_22995));
var inst_23007 = cljs.core.reduced_QMARK_(inst_23005__$1);
var state_23027__$1 = (function (){var statearr_23083 = state_23027;
(statearr_23083[(9)] = inst_23005__$1);

return statearr_23083;
})();
if(inst_23007){
var statearr_23087_25301 = state_23027__$1;
(statearr_23087_25301[(1)] = (8));

} else {
var statearr_23091_25302 = state_23027__$1;
(statearr_23091_25302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23028 === (3))){
var inst_23024 = (state_23027[(2)]);
var state_23027__$1 = state_23027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23027__$1,inst_23024);
} else {
if((state_val_23028 === (2))){
var state_23027__$1 = state_23027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23027__$1,(4),ch);
} else {
if((state_val_23028 === (9))){
var inst_23005 = (state_23027[(9)]);
var inst_22989 = inst_23005;
var state_23027__$1 = (function (){var statearr_23128 = state_23027;
(statearr_23128[(7)] = inst_22989);

return statearr_23128;
})();
var statearr_23130_25307 = state_23027__$1;
(statearr_23130_25307[(2)] = null);

(statearr_23130_25307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23028 === (5))){
var inst_22989 = (state_23027[(7)]);
var state_23027__$1 = state_23027;
var statearr_23141_25308 = state_23027__$1;
(statearr_23141_25308[(2)] = inst_22989);

(statearr_23141_25308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23028 === (10))){
var inst_23019 = (state_23027[(2)]);
var state_23027__$1 = state_23027;
var statearr_23151_25309 = state_23027__$1;
(statearr_23151_25309[(2)] = inst_23019);

(statearr_23151_25309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23028 === (8))){
var inst_23005 = (state_23027[(9)]);
var inst_23010 = cljs.core.deref(inst_23005);
var state_23027__$1 = state_23027;
var statearr_23157_25310 = state_23027__$1;
(statearr_23157_25310[(2)] = inst_23010);

(statearr_23157_25310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__21429__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21429__auto____0 = (function (){
var statearr_23162 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23162[(0)] = cljs$core$async$reduce_$_state_machine__21429__auto__);

(statearr_23162[(1)] = (1));

return statearr_23162;
});
var cljs$core$async$reduce_$_state_machine__21429__auto____1 = (function (state_23027){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_23027);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e23163){var ex__21432__auto__ = e23163;
var statearr_23164_25314 = state_23027;
(statearr_23164_25314[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_23027[(4)]))){
var statearr_23165_25315 = state_23027;
(statearr_23165_25315[(1)] = cljs.core.first((state_23027[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25319 = state_23027;
state_23027 = G__25319;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21429__auto__ = function(state_23027){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21429__auto____1.call(this,state_23027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21429__auto____0;
cljs$core$async$reduce_$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21429__auto____1;
return cljs$core$async$reduce_$_state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_23169 = f__21932__auto__();
(statearr_23169[(6)] = c__21931__auto__);

return statearr_23169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));

return c__21931__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__21931__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_23179){
var state_val_23180 = (state_23179[(1)]);
if((state_val_23180 === (1))){
var inst_23174 = cljs.core.async.reduce(f__$1,init,ch);
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23179__$1,(2),inst_23174);
} else {
if((state_val_23180 === (2))){
var inst_23176 = (state_23179[(2)]);
var inst_23177 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_23176) : f__$1.call(null,inst_23176));
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23179__$1,inst_23177);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21429__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21429__auto____0 = (function (){
var statearr_23182 = [null,null,null,null,null,null,null];
(statearr_23182[(0)] = cljs$core$async$transduce_$_state_machine__21429__auto__);

(statearr_23182[(1)] = (1));

return statearr_23182;
});
var cljs$core$async$transduce_$_state_machine__21429__auto____1 = (function (state_23179){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_23179);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e23183){var ex__21432__auto__ = e23183;
var statearr_23184_25330 = state_23179;
(statearr_23184_25330[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_23179[(4)]))){
var statearr_23185_25331 = state_23179;
(statearr_23185_25331[(1)] = cljs.core.first((state_23179[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25332 = state_23179;
state_23179 = G__25332;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21429__auto__ = function(state_23179){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21429__auto____1.call(this,state_23179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21429__auto____0;
cljs$core$async$transduce_$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21429__auto____1;
return cljs$core$async$transduce_$_state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_23187 = f__21932__auto__();
(statearr_23187[(6)] = c__21931__auto__);

return statearr_23187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));

return c__21931__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__23194 = arguments.length;
switch (G__23194) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21931__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_23219){
var state_val_23220 = (state_23219[(1)]);
if((state_val_23220 === (7))){
var inst_23201 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
var statearr_23221_25335 = state_23219__$1;
(statearr_23221_25335[(2)] = inst_23201);

(statearr_23221_25335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (1))){
var inst_23195 = cljs.core.seq(coll);
var inst_23196 = inst_23195;
var state_23219__$1 = (function (){var statearr_23222 = state_23219;
(statearr_23222[(7)] = inst_23196);

return statearr_23222;
})();
var statearr_23223_25336 = state_23219__$1;
(statearr_23223_25336[(2)] = null);

(statearr_23223_25336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (4))){
var inst_23196 = (state_23219[(7)]);
var inst_23199 = cljs.core.first(inst_23196);
var state_23219__$1 = state_23219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23219__$1,(7),ch,inst_23199);
} else {
if((state_val_23220 === (13))){
var inst_23213 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
var statearr_23225_25337 = state_23219__$1;
(statearr_23225_25337[(2)] = inst_23213);

(statearr_23225_25337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (6))){
var inst_23204 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
if(cljs.core.truth_(inst_23204)){
var statearr_23226_25338 = state_23219__$1;
(statearr_23226_25338[(1)] = (8));

} else {
var statearr_23227_25339 = state_23219__$1;
(statearr_23227_25339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (3))){
var inst_23217 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23219__$1,inst_23217);
} else {
if((state_val_23220 === (12))){
var state_23219__$1 = state_23219;
var statearr_23228_25353 = state_23219__$1;
(statearr_23228_25353[(2)] = null);

(statearr_23228_25353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (2))){
var inst_23196 = (state_23219[(7)]);
var state_23219__$1 = state_23219;
if(cljs.core.truth_(inst_23196)){
var statearr_23229_25355 = state_23219__$1;
(statearr_23229_25355[(1)] = (4));

} else {
var statearr_23230_25356 = state_23219__$1;
(statearr_23230_25356[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (11))){
var inst_23210 = cljs.core.async.close_BANG_(ch);
var state_23219__$1 = state_23219;
var statearr_23231_25358 = state_23219__$1;
(statearr_23231_25358[(2)] = inst_23210);

(statearr_23231_25358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (9))){
var state_23219__$1 = state_23219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23232_25359 = state_23219__$1;
(statearr_23232_25359[(1)] = (11));

} else {
var statearr_23233_25360 = state_23219__$1;
(statearr_23233_25360[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (5))){
var inst_23196 = (state_23219[(7)]);
var state_23219__$1 = state_23219;
var statearr_23234_25361 = state_23219__$1;
(statearr_23234_25361[(2)] = inst_23196);

(statearr_23234_25361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (10))){
var inst_23215 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
var statearr_23235_25362 = state_23219__$1;
(statearr_23235_25362[(2)] = inst_23215);

(statearr_23235_25362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (8))){
var inst_23196 = (state_23219[(7)]);
var inst_23206 = cljs.core.next(inst_23196);
var inst_23196__$1 = inst_23206;
var state_23219__$1 = (function (){var statearr_23236 = state_23219;
(statearr_23236[(7)] = inst_23196__$1);

return statearr_23236;
})();
var statearr_23237_25367 = state_23219__$1;
(statearr_23237_25367[(2)] = null);

(statearr_23237_25367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21429__auto__ = null;
var cljs$core$async$state_machine__21429__auto____0 = (function (){
var statearr_23238 = [null,null,null,null,null,null,null,null];
(statearr_23238[(0)] = cljs$core$async$state_machine__21429__auto__);

(statearr_23238[(1)] = (1));

return statearr_23238;
});
var cljs$core$async$state_machine__21429__auto____1 = (function (state_23219){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_23219);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e23239){var ex__21432__auto__ = e23239;
var statearr_23240_25375 = state_23219;
(statearr_23240_25375[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_23219[(4)]))){
var statearr_23241_25376 = state_23219;
(statearr_23241_25376[(1)] = cljs.core.first((state_23219[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25377 = state_23219;
state_23219 = G__25377;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$state_machine__21429__auto__ = function(state_23219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21429__auto____1.call(this,state_23219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21429__auto____0;
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21429__auto____1;
return cljs$core$async$state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_23247 = f__21932__auto__();
(statearr_23247[(6)] = c__21931__auto__);

return statearr_23247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));

return c__21931__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23265 = arguments.length;
switch (G__23265) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_25385 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_25385(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25387 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_25387(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25388 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_25388(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25389 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_25389(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23283 = (function (ch,cs,meta23284){
this.ch = ch;
this.cs = cs;
this.meta23284 = meta23284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23285,meta23284__$1){
var self__ = this;
var _23285__$1 = this;
return (new cljs.core.async.t_cljs$core$async23283(self__.ch,self__.cs,meta23284__$1));
}));

(cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23285){
var self__ = this;
var _23285__$1 = this;
return self__.meta23284;
}));

(cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async23283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23284","meta23284",-1876750362,null)], null);
}));

(cljs.core.async.t_cljs$core$async23283.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23283");

(cljs.core.async.t_cljs$core$async23283.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23283");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23283.
 */
cljs.core.async.__GT_t_cljs$core$async23283 = (function cljs$core$async$__GT_t_cljs$core$async23283(ch,cs,meta23284){
return (new cljs.core.async.t_cljs$core$async23283(ch,cs,meta23284));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async23283(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__21931__auto___25397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_23427){
var state_val_23428 = (state_23427[(1)]);
if((state_val_23428 === (7))){
var inst_23423 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23429_25402 = state_23427__$1;
(statearr_23429_25402[(2)] = inst_23423);

(statearr_23429_25402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (20))){
var inst_23321 = (state_23427[(7)]);
var inst_23334 = cljs.core.first(inst_23321);
var inst_23335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23334,(0),null);
var inst_23336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23334,(1),null);
var state_23427__$1 = (function (){var statearr_23430 = state_23427;
(statearr_23430[(8)] = inst_23335);

return statearr_23430;
})();
if(cljs.core.truth_(inst_23336)){
var statearr_23431_25403 = state_23427__$1;
(statearr_23431_25403[(1)] = (22));

} else {
var statearr_23432_25407 = state_23427__$1;
(statearr_23432_25407[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (27))){
var inst_23367 = (state_23427[(9)]);
var inst_23369 = (state_23427[(10)]);
var inst_23374 = (state_23427[(11)]);
var inst_23290 = (state_23427[(12)]);
var inst_23374__$1 = cljs.core._nth(inst_23367,inst_23369);
var inst_23375 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23374__$1,inst_23290,done);
var state_23427__$1 = (function (){var statearr_23433 = state_23427;
(statearr_23433[(11)] = inst_23374__$1);

return statearr_23433;
})();
if(cljs.core.truth_(inst_23375)){
var statearr_23434_25414 = state_23427__$1;
(statearr_23434_25414[(1)] = (30));

} else {
var statearr_23435_25416 = state_23427__$1;
(statearr_23435_25416[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (1))){
var state_23427__$1 = state_23427;
var statearr_23436_25419 = state_23427__$1;
(statearr_23436_25419[(2)] = null);

(statearr_23436_25419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (24))){
var inst_23321 = (state_23427[(7)]);
var inst_23341 = (state_23427[(2)]);
var inst_23342 = cljs.core.next(inst_23321);
var inst_23299 = inst_23342;
var inst_23300 = null;
var inst_23301 = (0);
var inst_23302 = (0);
var state_23427__$1 = (function (){var statearr_23437 = state_23427;
(statearr_23437[(13)] = inst_23302);

(statearr_23437[(14)] = inst_23300);

(statearr_23437[(15)] = inst_23341);

(statearr_23437[(16)] = inst_23299);

(statearr_23437[(17)] = inst_23301);

return statearr_23437;
})();
var statearr_23438_25431 = state_23427__$1;
(statearr_23438_25431[(2)] = null);

(statearr_23438_25431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (39))){
var state_23427__$1 = state_23427;
var statearr_23442_25433 = state_23427__$1;
(statearr_23442_25433[(2)] = null);

(statearr_23442_25433[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (4))){
var inst_23290 = (state_23427[(12)]);
var inst_23290__$1 = (state_23427[(2)]);
var inst_23291 = (inst_23290__$1 == null);
var state_23427__$1 = (function (){var statearr_23443 = state_23427;
(statearr_23443[(12)] = inst_23290__$1);

return statearr_23443;
})();
if(cljs.core.truth_(inst_23291)){
var statearr_23444_25436 = state_23427__$1;
(statearr_23444_25436[(1)] = (5));

} else {
var statearr_23445_25437 = state_23427__$1;
(statearr_23445_25437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (15))){
var inst_23302 = (state_23427[(13)]);
var inst_23300 = (state_23427[(14)]);
var inst_23299 = (state_23427[(16)]);
var inst_23301 = (state_23427[(17)]);
var inst_23317 = (state_23427[(2)]);
var inst_23318 = (inst_23302 + (1));
var tmp23439 = inst_23300;
var tmp23440 = inst_23299;
var tmp23441 = inst_23301;
var inst_23299__$1 = tmp23440;
var inst_23300__$1 = tmp23439;
var inst_23301__$1 = tmp23441;
var inst_23302__$1 = inst_23318;
var state_23427__$1 = (function (){var statearr_23446 = state_23427;
(statearr_23446[(13)] = inst_23302__$1);

(statearr_23446[(14)] = inst_23300__$1);

(statearr_23446[(16)] = inst_23299__$1);

(statearr_23446[(18)] = inst_23317);

(statearr_23446[(17)] = inst_23301__$1);

return statearr_23446;
})();
var statearr_23447_25443 = state_23427__$1;
(statearr_23447_25443[(2)] = null);

(statearr_23447_25443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (21))){
var inst_23345 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23451_25453 = state_23427__$1;
(statearr_23451_25453[(2)] = inst_23345);

(statearr_23451_25453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (31))){
var inst_23374 = (state_23427[(11)]);
var inst_23378 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23374);
var state_23427__$1 = state_23427;
var statearr_23452_25456 = state_23427__$1;
(statearr_23452_25456[(2)] = inst_23378);

(statearr_23452_25456[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (32))){
var inst_23367 = (state_23427[(9)]);
var inst_23369 = (state_23427[(10)]);
var inst_23368 = (state_23427[(19)]);
var inst_23366 = (state_23427[(20)]);
var inst_23380 = (state_23427[(2)]);
var inst_23381 = (inst_23369 + (1));
var tmp23448 = inst_23367;
var tmp23449 = inst_23368;
var tmp23450 = inst_23366;
var inst_23366__$1 = tmp23450;
var inst_23367__$1 = tmp23448;
var inst_23368__$1 = tmp23449;
var inst_23369__$1 = inst_23381;
var state_23427__$1 = (function (){var statearr_23453 = state_23427;
(statearr_23453[(9)] = inst_23367__$1);

(statearr_23453[(10)] = inst_23369__$1);

(statearr_23453[(19)] = inst_23368__$1);

(statearr_23453[(21)] = inst_23380);

(statearr_23453[(20)] = inst_23366__$1);

return statearr_23453;
})();
var statearr_23454_25457 = state_23427__$1;
(statearr_23454_25457[(2)] = null);

(statearr_23454_25457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (40))){
var inst_23396 = (state_23427[(22)]);
var inst_23400 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23396);
var state_23427__$1 = state_23427;
var statearr_23455_25461 = state_23427__$1;
(statearr_23455_25461[(2)] = inst_23400);

(statearr_23455_25461[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (33))){
var inst_23384 = (state_23427[(23)]);
var inst_23386 = cljs.core.chunked_seq_QMARK_(inst_23384);
var state_23427__$1 = state_23427;
if(inst_23386){
var statearr_23457_25462 = state_23427__$1;
(statearr_23457_25462[(1)] = (36));

} else {
var statearr_23458_25463 = state_23427__$1;
(statearr_23458_25463[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (13))){
var inst_23311 = (state_23427[(24)]);
var inst_23314 = cljs.core.async.close_BANG_(inst_23311);
var state_23427__$1 = state_23427;
var statearr_23460_25466 = state_23427__$1;
(statearr_23460_25466[(2)] = inst_23314);

(statearr_23460_25466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (22))){
var inst_23335 = (state_23427[(8)]);
var inst_23338 = cljs.core.async.close_BANG_(inst_23335);
var state_23427__$1 = state_23427;
var statearr_23461_25467 = state_23427__$1;
(statearr_23461_25467[(2)] = inst_23338);

(statearr_23461_25467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (36))){
var inst_23384 = (state_23427[(23)]);
var inst_23388 = cljs.core.chunk_first(inst_23384);
var inst_23389 = cljs.core.chunk_rest(inst_23384);
var inst_23390 = cljs.core.count(inst_23388);
var inst_23366 = inst_23389;
var inst_23367 = inst_23388;
var inst_23368 = inst_23390;
var inst_23369 = (0);
var state_23427__$1 = (function (){var statearr_23462 = state_23427;
(statearr_23462[(9)] = inst_23367);

(statearr_23462[(10)] = inst_23369);

(statearr_23462[(19)] = inst_23368);

(statearr_23462[(20)] = inst_23366);

return statearr_23462;
})();
var statearr_23464_25468 = state_23427__$1;
(statearr_23464_25468[(2)] = null);

(statearr_23464_25468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (41))){
var inst_23384 = (state_23427[(23)]);
var inst_23402 = (state_23427[(2)]);
var inst_23403 = cljs.core.next(inst_23384);
var inst_23366 = inst_23403;
var inst_23367 = null;
var inst_23368 = (0);
var inst_23369 = (0);
var state_23427__$1 = (function (){var statearr_23465 = state_23427;
(statearr_23465[(9)] = inst_23367);

(statearr_23465[(25)] = inst_23402);

(statearr_23465[(10)] = inst_23369);

(statearr_23465[(19)] = inst_23368);

(statearr_23465[(20)] = inst_23366);

return statearr_23465;
})();
var statearr_23466_25473 = state_23427__$1;
(statearr_23466_25473[(2)] = null);

(statearr_23466_25473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (43))){
var state_23427__$1 = state_23427;
var statearr_23467_25475 = state_23427__$1;
(statearr_23467_25475[(2)] = null);

(statearr_23467_25475[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (29))){
var inst_23411 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23468_25476 = state_23427__$1;
(statearr_23468_25476[(2)] = inst_23411);

(statearr_23468_25476[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (44))){
var inst_23420 = (state_23427[(2)]);
var state_23427__$1 = (function (){var statearr_23469 = state_23427;
(statearr_23469[(26)] = inst_23420);

return statearr_23469;
})();
var statearr_23470_25478 = state_23427__$1;
(statearr_23470_25478[(2)] = null);

(statearr_23470_25478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (6))){
var inst_23358 = (state_23427[(27)]);
var inst_23357 = cljs.core.deref(cs);
var inst_23358__$1 = cljs.core.keys(inst_23357);
var inst_23359 = cljs.core.count(inst_23358__$1);
var inst_23360 = cljs.core.reset_BANG_(dctr,inst_23359);
var inst_23365 = cljs.core.seq(inst_23358__$1);
var inst_23366 = inst_23365;
var inst_23367 = null;
var inst_23368 = (0);
var inst_23369 = (0);
var state_23427__$1 = (function (){var statearr_23471 = state_23427;
(statearr_23471[(9)] = inst_23367);

(statearr_23471[(10)] = inst_23369);

(statearr_23471[(19)] = inst_23368);

(statearr_23471[(27)] = inst_23358__$1);

(statearr_23471[(20)] = inst_23366);

(statearr_23471[(28)] = inst_23360);

return statearr_23471;
})();
var statearr_23472_25479 = state_23427__$1;
(statearr_23472_25479[(2)] = null);

(statearr_23472_25479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (28))){
var inst_23384 = (state_23427[(23)]);
var inst_23366 = (state_23427[(20)]);
var inst_23384__$1 = cljs.core.seq(inst_23366);
var state_23427__$1 = (function (){var statearr_23473 = state_23427;
(statearr_23473[(23)] = inst_23384__$1);

return statearr_23473;
})();
if(inst_23384__$1){
var statearr_23474_25480 = state_23427__$1;
(statearr_23474_25480[(1)] = (33));

} else {
var statearr_23475_25481 = state_23427__$1;
(statearr_23475_25481[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (25))){
var inst_23369 = (state_23427[(10)]);
var inst_23368 = (state_23427[(19)]);
var inst_23371 = (inst_23369 < inst_23368);
var inst_23372 = inst_23371;
var state_23427__$1 = state_23427;
if(cljs.core.truth_(inst_23372)){
var statearr_23476_25482 = state_23427__$1;
(statearr_23476_25482[(1)] = (27));

} else {
var statearr_23477_25483 = state_23427__$1;
(statearr_23477_25483[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (34))){
var state_23427__$1 = state_23427;
var statearr_23478_25487 = state_23427__$1;
(statearr_23478_25487[(2)] = null);

(statearr_23478_25487[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (17))){
var state_23427__$1 = state_23427;
var statearr_23479_25489 = state_23427__$1;
(statearr_23479_25489[(2)] = null);

(statearr_23479_25489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (3))){
var inst_23425 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23427__$1,inst_23425);
} else {
if((state_val_23428 === (12))){
var inst_23353 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23480_25490 = state_23427__$1;
(statearr_23480_25490[(2)] = inst_23353);

(statearr_23480_25490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (2))){
var state_23427__$1 = state_23427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23427__$1,(4),ch);
} else {
if((state_val_23428 === (23))){
var state_23427__$1 = state_23427;
var statearr_23481_25491 = state_23427__$1;
(statearr_23481_25491[(2)] = null);

(statearr_23481_25491[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (35))){
var inst_23409 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23482_25492 = state_23427__$1;
(statearr_23482_25492[(2)] = inst_23409);

(statearr_23482_25492[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (19))){
var inst_23321 = (state_23427[(7)]);
var inst_23325 = cljs.core.chunk_first(inst_23321);
var inst_23326 = cljs.core.chunk_rest(inst_23321);
var inst_23327 = cljs.core.count(inst_23325);
var inst_23299 = inst_23326;
var inst_23300 = inst_23325;
var inst_23301 = inst_23327;
var inst_23302 = (0);
var state_23427__$1 = (function (){var statearr_23483 = state_23427;
(statearr_23483[(13)] = inst_23302);

(statearr_23483[(14)] = inst_23300);

(statearr_23483[(16)] = inst_23299);

(statearr_23483[(17)] = inst_23301);

return statearr_23483;
})();
var statearr_23484_25497 = state_23427__$1;
(statearr_23484_25497[(2)] = null);

(statearr_23484_25497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (11))){
var inst_23321 = (state_23427[(7)]);
var inst_23299 = (state_23427[(16)]);
var inst_23321__$1 = cljs.core.seq(inst_23299);
var state_23427__$1 = (function (){var statearr_23485 = state_23427;
(statearr_23485[(7)] = inst_23321__$1);

return statearr_23485;
})();
if(inst_23321__$1){
var statearr_23486_25499 = state_23427__$1;
(statearr_23486_25499[(1)] = (16));

} else {
var statearr_23487_25500 = state_23427__$1;
(statearr_23487_25500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (9))){
var inst_23355 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23488_25501 = state_23427__$1;
(statearr_23488_25501[(2)] = inst_23355);

(statearr_23488_25501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (5))){
var inst_23297 = cljs.core.deref(cs);
var inst_23298 = cljs.core.seq(inst_23297);
var inst_23299 = inst_23298;
var inst_23300 = null;
var inst_23301 = (0);
var inst_23302 = (0);
var state_23427__$1 = (function (){var statearr_23489 = state_23427;
(statearr_23489[(13)] = inst_23302);

(statearr_23489[(14)] = inst_23300);

(statearr_23489[(16)] = inst_23299);

(statearr_23489[(17)] = inst_23301);

return statearr_23489;
})();
var statearr_23490_25507 = state_23427__$1;
(statearr_23490_25507[(2)] = null);

(statearr_23490_25507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (14))){
var state_23427__$1 = state_23427;
var statearr_23491_25508 = state_23427__$1;
(statearr_23491_25508[(2)] = null);

(statearr_23491_25508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (45))){
var inst_23417 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23492_25509 = state_23427__$1;
(statearr_23492_25509[(2)] = inst_23417);

(statearr_23492_25509[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (26))){
var inst_23358 = (state_23427[(27)]);
var inst_23413 = (state_23427[(2)]);
var inst_23414 = cljs.core.seq(inst_23358);
var state_23427__$1 = (function (){var statearr_23493 = state_23427;
(statearr_23493[(29)] = inst_23413);

return statearr_23493;
})();
if(inst_23414){
var statearr_23494_25516 = state_23427__$1;
(statearr_23494_25516[(1)] = (42));

} else {
var statearr_23495_25517 = state_23427__$1;
(statearr_23495_25517[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (16))){
var inst_23321 = (state_23427[(7)]);
var inst_23323 = cljs.core.chunked_seq_QMARK_(inst_23321);
var state_23427__$1 = state_23427;
if(inst_23323){
var statearr_23496_25521 = state_23427__$1;
(statearr_23496_25521[(1)] = (19));

} else {
var statearr_23497_25522 = state_23427__$1;
(statearr_23497_25522[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (38))){
var inst_23406 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23498_25523 = state_23427__$1;
(statearr_23498_25523[(2)] = inst_23406);

(statearr_23498_25523[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (30))){
var state_23427__$1 = state_23427;
var statearr_23502_25524 = state_23427__$1;
(statearr_23502_25524[(2)] = null);

(statearr_23502_25524[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (10))){
var inst_23302 = (state_23427[(13)]);
var inst_23300 = (state_23427[(14)]);
var inst_23310 = cljs.core._nth(inst_23300,inst_23302);
var inst_23311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23310,(0),null);
var inst_23312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23310,(1),null);
var state_23427__$1 = (function (){var statearr_23505 = state_23427;
(statearr_23505[(24)] = inst_23311);

return statearr_23505;
})();
if(cljs.core.truth_(inst_23312)){
var statearr_23511_25526 = state_23427__$1;
(statearr_23511_25526[(1)] = (13));

} else {
var statearr_23512_25527 = state_23427__$1;
(statearr_23512_25527[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (18))){
var inst_23351 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23518_25528 = state_23427__$1;
(statearr_23518_25528[(2)] = inst_23351);

(statearr_23518_25528[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (42))){
var state_23427__$1 = state_23427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23427__$1,(45),dchan);
} else {
if((state_val_23428 === (37))){
var inst_23290 = (state_23427[(12)]);
var inst_23384 = (state_23427[(23)]);
var inst_23396 = (state_23427[(22)]);
var inst_23396__$1 = cljs.core.first(inst_23384);
var inst_23397 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23396__$1,inst_23290,done);
var state_23427__$1 = (function (){var statearr_23519 = state_23427;
(statearr_23519[(22)] = inst_23396__$1);

return statearr_23519;
})();
if(cljs.core.truth_(inst_23397)){
var statearr_23520_25533 = state_23427__$1;
(statearr_23520_25533[(1)] = (39));

} else {
var statearr_23521_25534 = state_23427__$1;
(statearr_23521_25534[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (8))){
var inst_23302 = (state_23427[(13)]);
var inst_23301 = (state_23427[(17)]);
var inst_23304 = (inst_23302 < inst_23301);
var inst_23305 = inst_23304;
var state_23427__$1 = state_23427;
if(cljs.core.truth_(inst_23305)){
var statearr_23522_25535 = state_23427__$1;
(statearr_23522_25535[(1)] = (10));

} else {
var statearr_23524_25536 = state_23427__$1;
(statearr_23524_25536[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__21429__auto__ = null;
var cljs$core$async$mult_$_state_machine__21429__auto____0 = (function (){
var statearr_23539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23539[(0)] = cljs$core$async$mult_$_state_machine__21429__auto__);

(statearr_23539[(1)] = (1));

return statearr_23539;
});
var cljs$core$async$mult_$_state_machine__21429__auto____1 = (function (state_23427){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_23427);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e23545){var ex__21432__auto__ = e23545;
var statearr_23546_25537 = state_23427;
(statearr_23546_25537[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_23427[(4)]))){
var statearr_23547_25544 = state_23427;
(statearr_23547_25544[(1)] = cljs.core.first((state_23427[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25546 = state_23427;
state_23427 = G__25546;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21429__auto__ = function(state_23427){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21429__auto____1.call(this,state_23427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21429__auto____0;
cljs$core$async$mult_$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21429__auto____1;
return cljs$core$async$mult_$_state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_23552 = f__21932__auto__();
(statearr_23552[(6)] = c__21931__auto___25397);

return statearr_23552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__23559 = arguments.length;
switch (G__23559) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_25556 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_25556(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25559 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_25559(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25562 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25562(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25563 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_25563(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25564 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25564(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___25570 = arguments.length;
var i__5727__auto___25572 = (0);
while(true){
if((i__5727__auto___25572 < len__5726__auto___25570)){
args__5732__auto__.push((arguments[i__5727__auto___25572]));

var G__25574 = (i__5727__auto___25572 + (1));
i__5727__auto___25572 = G__25574;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23652){
var map__23653 = p__23652;
var map__23653__$1 = cljs.core.__destructure_map(map__23653);
var opts = map__23653__$1;
var statearr_23654_25581 = state;
(statearr_23654_25581[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_23655_25582 = state;
(statearr_23655_25582[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_23665_25583 = state;
(statearr_23665_25583[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23647){
var G__23648 = cljs.core.first(seq23647);
var seq23647__$1 = cljs.core.next(seq23647);
var G__23649 = cljs.core.first(seq23647__$1);
var seq23647__$2 = cljs.core.next(seq23647__$1);
var G__23650 = cljs.core.first(seq23647__$2);
var seq23647__$3 = cljs.core.next(seq23647__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23648,G__23649,G__23650,seq23647__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23695 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23696){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23696 = meta23696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23697,meta23696__$1){
var self__ = this;
var _23697__$1 = this;
return (new cljs.core.async.t_cljs$core$async23695(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23696__$1));
}));

(cljs.core.async.t_cljs$core$async23695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23697){
var self__ = this;
var _23697__$1 = this;
return self__.meta23696;
}));

(cljs.core.async.t_cljs$core$async23695.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23695.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async23695.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23695.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async23695.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async23695.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async23695.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async23695.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async23695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23696","meta23696",-1335888392,null)], null);
}));

(cljs.core.async.t_cljs$core$async23695.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23695");

(cljs.core.async.t_cljs$core$async23695.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23695");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23695.
 */
cljs.core.async.__GT_t_cljs$core$async23695 = (function cljs$core$async$__GT_t_cljs$core$async23695(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23696){
return (new cljs.core.async.t_cljs$core$async23695(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23696));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async23695(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__21931__auto___25599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_23785){
var state_val_23786 = (state_23785[(1)]);
if((state_val_23786 === (7))){
var inst_23739 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23739)){
var statearr_23790_25601 = state_23785__$1;
(statearr_23790_25601[(1)] = (8));

} else {
var statearr_23791_25603 = state_23785__$1;
(statearr_23791_25603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (20))){
var inst_23732 = (state_23785[(7)]);
var state_23785__$1 = state_23785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23785__$1,(23),out,inst_23732);
} else {
if((state_val_23786 === (1))){
var inst_23715 = calc_state();
var inst_23716 = cljs.core.__destructure_map(inst_23715);
var inst_23717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23716,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23716,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23716,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23720 = inst_23715;
var state_23785__$1 = (function (){var statearr_23796 = state_23785;
(statearr_23796[(8)] = inst_23717);

(statearr_23796[(9)] = inst_23720);

(statearr_23796[(10)] = inst_23718);

(statearr_23796[(11)] = inst_23719);

return statearr_23796;
})();
var statearr_23797_25611 = state_23785__$1;
(statearr_23797_25611[(2)] = null);

(statearr_23797_25611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (24))){
var inst_23723 = (state_23785[(12)]);
var inst_23720 = inst_23723;
var state_23785__$1 = (function (){var statearr_23806 = state_23785;
(statearr_23806[(9)] = inst_23720);

return statearr_23806;
})();
var statearr_23807_25612 = state_23785__$1;
(statearr_23807_25612[(2)] = null);

(statearr_23807_25612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (4))){
var inst_23734 = (state_23785[(13)]);
var inst_23732 = (state_23785[(7)]);
var inst_23731 = (state_23785[(2)]);
var inst_23732__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23731,(0),null);
var inst_23733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23731,(1),null);
var inst_23734__$1 = (inst_23732__$1 == null);
var state_23785__$1 = (function (){var statearr_23814 = state_23785;
(statearr_23814[(13)] = inst_23734__$1);

(statearr_23814[(14)] = inst_23733);

(statearr_23814[(7)] = inst_23732__$1);

return statearr_23814;
})();
if(cljs.core.truth_(inst_23734__$1)){
var statearr_23815_25613 = state_23785__$1;
(statearr_23815_25613[(1)] = (5));

} else {
var statearr_23816_25614 = state_23785__$1;
(statearr_23816_25614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (15))){
var inst_23756 = (state_23785[(15)]);
var inst_23724 = (state_23785[(16)]);
var inst_23756__$1 = cljs.core.empty_QMARK_(inst_23724);
var state_23785__$1 = (function (){var statearr_23817 = state_23785;
(statearr_23817[(15)] = inst_23756__$1);

return statearr_23817;
})();
if(inst_23756__$1){
var statearr_23818_25615 = state_23785__$1;
(statearr_23818_25615[(1)] = (17));

} else {
var statearr_23819_25619 = state_23785__$1;
(statearr_23819_25619[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (21))){
var inst_23723 = (state_23785[(12)]);
var inst_23720 = inst_23723;
var state_23785__$1 = (function (){var statearr_23832 = state_23785;
(statearr_23832[(9)] = inst_23720);

return statearr_23832;
})();
var statearr_23833_25624 = state_23785__$1;
(statearr_23833_25624[(2)] = null);

(statearr_23833_25624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (13))){
var inst_23746 = (state_23785[(2)]);
var inst_23747 = calc_state();
var inst_23720 = inst_23747;
var state_23785__$1 = (function (){var statearr_23834 = state_23785;
(statearr_23834[(9)] = inst_23720);

(statearr_23834[(17)] = inst_23746);

return statearr_23834;
})();
var statearr_23835_25628 = state_23785__$1;
(statearr_23835_25628[(2)] = null);

(statearr_23835_25628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (22))){
var inst_23776 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23836_25629 = state_23785__$1;
(statearr_23836_25629[(2)] = inst_23776);

(statearr_23836_25629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (6))){
var inst_23733 = (state_23785[(14)]);
var inst_23737 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23733,change);
var state_23785__$1 = state_23785;
var statearr_23840_25630 = state_23785__$1;
(statearr_23840_25630[(2)] = inst_23737);

(statearr_23840_25630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (25))){
var state_23785__$1 = state_23785;
var statearr_23841_25632 = state_23785__$1;
(statearr_23841_25632[(2)] = null);

(statearr_23841_25632[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (17))){
var inst_23725 = (state_23785[(18)]);
var inst_23733 = (state_23785[(14)]);
var inst_23758 = (inst_23725.cljs$core$IFn$_invoke$arity$1 ? inst_23725.cljs$core$IFn$_invoke$arity$1(inst_23733) : inst_23725.call(null,inst_23733));
var inst_23759 = cljs.core.not(inst_23758);
var state_23785__$1 = state_23785;
var statearr_23843_25636 = state_23785__$1;
(statearr_23843_25636[(2)] = inst_23759);

(statearr_23843_25636[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (3))){
var inst_23780 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23785__$1,inst_23780);
} else {
if((state_val_23786 === (12))){
var state_23785__$1 = state_23785;
var statearr_23844_25639 = state_23785__$1;
(statearr_23844_25639[(2)] = null);

(statearr_23844_25639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (2))){
var inst_23720 = (state_23785[(9)]);
var inst_23723 = (state_23785[(12)]);
var inst_23723__$1 = cljs.core.__destructure_map(inst_23720);
var inst_23724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23723__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23723__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23723__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23785__$1 = (function (){var statearr_23845 = state_23785;
(statearr_23845[(18)] = inst_23725);

(statearr_23845[(16)] = inst_23724);

(statearr_23845[(12)] = inst_23723__$1);

return statearr_23845;
})();
return cljs.core.async.ioc_alts_BANG_(state_23785__$1,(4),inst_23726);
} else {
if((state_val_23786 === (23))){
var inst_23767 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23767)){
var statearr_23849_25640 = state_23785__$1;
(statearr_23849_25640[(1)] = (24));

} else {
var statearr_23850_25641 = state_23785__$1;
(statearr_23850_25641[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (19))){
var inst_23762 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23852_25645 = state_23785__$1;
(statearr_23852_25645[(2)] = inst_23762);

(statearr_23852_25645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (11))){
var inst_23733 = (state_23785[(14)]);
var inst_23743 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23733);
var state_23785__$1 = state_23785;
var statearr_23856_25647 = state_23785__$1;
(statearr_23856_25647[(2)] = inst_23743);

(statearr_23856_25647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (9))){
var inst_23750 = (state_23785[(19)]);
var inst_23733 = (state_23785[(14)]);
var inst_23724 = (state_23785[(16)]);
var inst_23750__$1 = (inst_23724.cljs$core$IFn$_invoke$arity$1 ? inst_23724.cljs$core$IFn$_invoke$arity$1(inst_23733) : inst_23724.call(null,inst_23733));
var state_23785__$1 = (function (){var statearr_23857 = state_23785;
(statearr_23857[(19)] = inst_23750__$1);

return statearr_23857;
})();
if(cljs.core.truth_(inst_23750__$1)){
var statearr_23858_25650 = state_23785__$1;
(statearr_23858_25650[(1)] = (14));

} else {
var statearr_23859_25652 = state_23785__$1;
(statearr_23859_25652[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (5))){
var inst_23734 = (state_23785[(13)]);
var state_23785__$1 = state_23785;
var statearr_23863_25654 = state_23785__$1;
(statearr_23863_25654[(2)] = inst_23734);

(statearr_23863_25654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (14))){
var inst_23750 = (state_23785[(19)]);
var state_23785__$1 = state_23785;
var statearr_23864_25656 = state_23785__$1;
(statearr_23864_25656[(2)] = inst_23750);

(statearr_23864_25656[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (26))){
var inst_23772 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23865_25664 = state_23785__$1;
(statearr_23865_25664[(2)] = inst_23772);

(statearr_23865_25664[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (16))){
var inst_23764 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23764)){
var statearr_23866_25669 = state_23785__$1;
(statearr_23866_25669[(1)] = (20));

} else {
var statearr_23867_25671 = state_23785__$1;
(statearr_23867_25671[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (10))){
var inst_23778 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23871_25673 = state_23785__$1;
(statearr_23871_25673[(2)] = inst_23778);

(statearr_23871_25673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (18))){
var inst_23756 = (state_23785[(15)]);
var state_23785__$1 = state_23785;
var statearr_23875_25675 = state_23785__$1;
(statearr_23875_25675[(2)] = inst_23756);

(statearr_23875_25675[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (8))){
var inst_23732 = (state_23785[(7)]);
var inst_23741 = (inst_23732 == null);
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23741)){
var statearr_23876_25680 = state_23785__$1;
(statearr_23876_25680[(1)] = (11));

} else {
var statearr_23877_25681 = state_23785__$1;
(statearr_23877_25681[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__21429__auto__ = null;
var cljs$core$async$mix_$_state_machine__21429__auto____0 = (function (){
var statearr_23882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23882[(0)] = cljs$core$async$mix_$_state_machine__21429__auto__);

(statearr_23882[(1)] = (1));

return statearr_23882;
});
var cljs$core$async$mix_$_state_machine__21429__auto____1 = (function (state_23785){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_23785);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e23883){var ex__21432__auto__ = e23883;
var statearr_23884_25682 = state_23785;
(statearr_23884_25682[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_23785[(4)]))){
var statearr_23885_25683 = state_23785;
(statearr_23885_25683[(1)] = cljs.core.first((state_23785[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25684 = state_23785;
state_23785 = G__25684;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21429__auto__ = function(state_23785){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21429__auto____1.call(this,state_23785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21429__auto____0;
cljs$core$async$mix_$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21429__auto____1;
return cljs$core$async$mix_$_state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_23886 = f__21932__auto__();
(statearr_23886[(6)] = c__21931__auto___25599);

return statearr_23886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_25685 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_25685(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25688 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_25688(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25691 = (function() {
var G__25692 = null;
var G__25692__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__25692__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__25692 = function(p,v){
switch(arguments.length){
case 1:
return G__25692__1.call(this,p);
case 2:
return G__25692__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25692.cljs$core$IFn$_invoke$arity$1 = G__25692__1;
G__25692.cljs$core$IFn$_invoke$arity$2 = G__25692__2;
return G__25692;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23908 = arguments.length;
switch (G__23908) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25691(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25691(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23923 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23924){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23924 = meta23924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23925,meta23924__$1){
var self__ = this;
var _23925__$1 = this;
return (new cljs.core.async.t_cljs$core$async23923(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23924__$1));
}));

(cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23925){
var self__ = this;
var _23925__$1 = this;
return self__.meta23924;
}));

(cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async23923.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async23923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23924","meta23924",505226462,null)], null);
}));

(cljs.core.async.t_cljs$core$async23923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23923");

(cljs.core.async.t_cljs$core$async23923.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async23923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23923.
 */
cljs.core.async.__GT_t_cljs$core$async23923 = (function cljs$core$async$__GT_t_cljs$core$async23923(ch,topic_fn,buf_fn,mults,ensure_mult,meta23924){
return (new cljs.core.async.t_cljs$core$async23923(ch,topic_fn,buf_fn,mults,ensure_mult,meta23924));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__23915 = arguments.length;
switch (G__23915) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__23913_SHARP_){
if(cljs.core.truth_((p1__23913_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23913_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23913_SHARP_.call(null,topic)))){
return p1__23913_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23913_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async23923(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__21931__auto___25719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_24038){
var state_val_24039 = (state_24038[(1)]);
if((state_val_24039 === (7))){
var inst_24034 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
var statearr_24040_25720 = state_24038__$1;
(statearr_24040_25720[(2)] = inst_24034);

(statearr_24040_25720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (20))){
var state_24038__$1 = state_24038;
var statearr_24041_25721 = state_24038__$1;
(statearr_24041_25721[(2)] = null);

(statearr_24041_25721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (1))){
var state_24038__$1 = state_24038;
var statearr_24042_25722 = state_24038__$1;
(statearr_24042_25722[(2)] = null);

(statearr_24042_25722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (24))){
var inst_24017 = (state_24038[(7)]);
var inst_24026 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24017);
var state_24038__$1 = state_24038;
var statearr_24043_25723 = state_24038__$1;
(statearr_24043_25723[(2)] = inst_24026);

(statearr_24043_25723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (4))){
var inst_23969 = (state_24038[(8)]);
var inst_23969__$1 = (state_24038[(2)]);
var inst_23970 = (inst_23969__$1 == null);
var state_24038__$1 = (function (){var statearr_24044 = state_24038;
(statearr_24044[(8)] = inst_23969__$1);

return statearr_24044;
})();
if(cljs.core.truth_(inst_23970)){
var statearr_24045_25724 = state_24038__$1;
(statearr_24045_25724[(1)] = (5));

} else {
var statearr_24046_25725 = state_24038__$1;
(statearr_24046_25725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (15))){
var inst_24011 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
var statearr_24047_25726 = state_24038__$1;
(statearr_24047_25726[(2)] = inst_24011);

(statearr_24047_25726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (21))){
var inst_24031 = (state_24038[(2)]);
var state_24038__$1 = (function (){var statearr_24048 = state_24038;
(statearr_24048[(9)] = inst_24031);

return statearr_24048;
})();
var statearr_24049_25727 = state_24038__$1;
(statearr_24049_25727[(2)] = null);

(statearr_24049_25727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (13))){
var inst_23993 = (state_24038[(10)]);
var inst_23995 = cljs.core.chunked_seq_QMARK_(inst_23993);
var state_24038__$1 = state_24038;
if(inst_23995){
var statearr_24050_25728 = state_24038__$1;
(statearr_24050_25728[(1)] = (16));

} else {
var statearr_24051_25729 = state_24038__$1;
(statearr_24051_25729[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (22))){
var inst_24023 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
if(cljs.core.truth_(inst_24023)){
var statearr_24056_25731 = state_24038__$1;
(statearr_24056_25731[(1)] = (23));

} else {
var statearr_24059_25732 = state_24038__$1;
(statearr_24059_25732[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (6))){
var inst_24017 = (state_24038[(7)]);
var inst_24019 = (state_24038[(11)]);
var inst_23969 = (state_24038[(8)]);
var inst_24017__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23969) : topic_fn.call(null,inst_23969));
var inst_24018 = cljs.core.deref(mults);
var inst_24019__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24018,inst_24017__$1);
var state_24038__$1 = (function (){var statearr_24060 = state_24038;
(statearr_24060[(7)] = inst_24017__$1);

(statearr_24060[(11)] = inst_24019__$1);

return statearr_24060;
})();
if(cljs.core.truth_(inst_24019__$1)){
var statearr_24061_25738 = state_24038__$1;
(statearr_24061_25738[(1)] = (19));

} else {
var statearr_24062_25739 = state_24038__$1;
(statearr_24062_25739[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (25))){
var inst_24028 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
var statearr_24063_25741 = state_24038__$1;
(statearr_24063_25741[(2)] = inst_24028);

(statearr_24063_25741[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (17))){
var inst_23993 = (state_24038[(10)]);
var inst_24002 = cljs.core.first(inst_23993);
var inst_24003 = cljs.core.async.muxch_STAR_(inst_24002);
var inst_24004 = cljs.core.async.close_BANG_(inst_24003);
var inst_24005 = cljs.core.next(inst_23993);
var inst_23979 = inst_24005;
var inst_23980 = null;
var inst_23981 = (0);
var inst_23982 = (0);
var state_24038__$1 = (function (){var statearr_24067 = state_24038;
(statearr_24067[(12)] = inst_23982);

(statearr_24067[(13)] = inst_23980);

(statearr_24067[(14)] = inst_23979);

(statearr_24067[(15)] = inst_24004);

(statearr_24067[(16)] = inst_23981);

return statearr_24067;
})();
var statearr_24068_25746 = state_24038__$1;
(statearr_24068_25746[(2)] = null);

(statearr_24068_25746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (3))){
var inst_24036 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24038__$1,inst_24036);
} else {
if((state_val_24039 === (12))){
var inst_24013 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
var statearr_24072_25747 = state_24038__$1;
(statearr_24072_25747[(2)] = inst_24013);

(statearr_24072_25747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (2))){
var state_24038__$1 = state_24038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24038__$1,(4),ch);
} else {
if((state_val_24039 === (23))){
var state_24038__$1 = state_24038;
var statearr_24074_25749 = state_24038__$1;
(statearr_24074_25749[(2)] = null);

(statearr_24074_25749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (19))){
var inst_24019 = (state_24038[(11)]);
var inst_23969 = (state_24038[(8)]);
var inst_24021 = cljs.core.async.muxch_STAR_(inst_24019);
var state_24038__$1 = state_24038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24038__$1,(22),inst_24021,inst_23969);
} else {
if((state_val_24039 === (11))){
var inst_23979 = (state_24038[(14)]);
var inst_23993 = (state_24038[(10)]);
var inst_23993__$1 = cljs.core.seq(inst_23979);
var state_24038__$1 = (function (){var statearr_24075 = state_24038;
(statearr_24075[(10)] = inst_23993__$1);

return statearr_24075;
})();
if(inst_23993__$1){
var statearr_24076_25750 = state_24038__$1;
(statearr_24076_25750[(1)] = (13));

} else {
var statearr_24077_25752 = state_24038__$1;
(statearr_24077_25752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (9))){
var inst_24015 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
var statearr_24078_25753 = state_24038__$1;
(statearr_24078_25753[(2)] = inst_24015);

(statearr_24078_25753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (5))){
var inst_23976 = cljs.core.deref(mults);
var inst_23977 = cljs.core.vals(inst_23976);
var inst_23978 = cljs.core.seq(inst_23977);
var inst_23979 = inst_23978;
var inst_23980 = null;
var inst_23981 = (0);
var inst_23982 = (0);
var state_24038__$1 = (function (){var statearr_24079 = state_24038;
(statearr_24079[(12)] = inst_23982);

(statearr_24079[(13)] = inst_23980);

(statearr_24079[(14)] = inst_23979);

(statearr_24079[(16)] = inst_23981);

return statearr_24079;
})();
var statearr_24080_25754 = state_24038__$1;
(statearr_24080_25754[(2)] = null);

(statearr_24080_25754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (14))){
var state_24038__$1 = state_24038;
var statearr_24084_25755 = state_24038__$1;
(statearr_24084_25755[(2)] = null);

(statearr_24084_25755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (16))){
var inst_23993 = (state_24038[(10)]);
var inst_23997 = cljs.core.chunk_first(inst_23993);
var inst_23998 = cljs.core.chunk_rest(inst_23993);
var inst_23999 = cljs.core.count(inst_23997);
var inst_23979 = inst_23998;
var inst_23980 = inst_23997;
var inst_23981 = inst_23999;
var inst_23982 = (0);
var state_24038__$1 = (function (){var statearr_24085 = state_24038;
(statearr_24085[(12)] = inst_23982);

(statearr_24085[(13)] = inst_23980);

(statearr_24085[(14)] = inst_23979);

(statearr_24085[(16)] = inst_23981);

return statearr_24085;
})();
var statearr_24086_25757 = state_24038__$1;
(statearr_24086_25757[(2)] = null);

(statearr_24086_25757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (10))){
var inst_23982 = (state_24038[(12)]);
var inst_23980 = (state_24038[(13)]);
var inst_23979 = (state_24038[(14)]);
var inst_23981 = (state_24038[(16)]);
var inst_23987 = cljs.core._nth(inst_23980,inst_23982);
var inst_23988 = cljs.core.async.muxch_STAR_(inst_23987);
var inst_23989 = cljs.core.async.close_BANG_(inst_23988);
var inst_23990 = (inst_23982 + (1));
var tmp24081 = inst_23980;
var tmp24082 = inst_23979;
var tmp24083 = inst_23981;
var inst_23979__$1 = tmp24082;
var inst_23980__$1 = tmp24081;
var inst_23981__$1 = tmp24083;
var inst_23982__$1 = inst_23990;
var state_24038__$1 = (function (){var statearr_24087 = state_24038;
(statearr_24087[(12)] = inst_23982__$1);

(statearr_24087[(13)] = inst_23980__$1);

(statearr_24087[(14)] = inst_23979__$1);

(statearr_24087[(17)] = inst_23989);

(statearr_24087[(16)] = inst_23981__$1);

return statearr_24087;
})();
var statearr_24088_25765 = state_24038__$1;
(statearr_24088_25765[(2)] = null);

(statearr_24088_25765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (18))){
var inst_24008 = (state_24038[(2)]);
var state_24038__$1 = state_24038;
var statearr_24089_25766 = state_24038__$1;
(statearr_24089_25766[(2)] = inst_24008);

(statearr_24089_25766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24039 === (8))){
var inst_23982 = (state_24038[(12)]);
var inst_23981 = (state_24038[(16)]);
var inst_23984 = (inst_23982 < inst_23981);
var inst_23985 = inst_23984;
var state_24038__$1 = state_24038;
if(cljs.core.truth_(inst_23985)){
var statearr_24090_25767 = state_24038__$1;
(statearr_24090_25767[(1)] = (10));

} else {
var statearr_24091_25768 = state_24038__$1;
(statearr_24091_25768[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21429__auto__ = null;
var cljs$core$async$state_machine__21429__auto____0 = (function (){
var statearr_24092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24092[(0)] = cljs$core$async$state_machine__21429__auto__);

(statearr_24092[(1)] = (1));

return statearr_24092;
});
var cljs$core$async$state_machine__21429__auto____1 = (function (state_24038){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_24038);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e24093){var ex__21432__auto__ = e24093;
var statearr_24094_25771 = state_24038;
(statearr_24094_25771[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_24038[(4)]))){
var statearr_24095_25774 = state_24038;
(statearr_24095_25774[(1)] = cljs.core.first((state_24038[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25777 = state_24038;
state_24038 = G__25777;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$state_machine__21429__auto__ = function(state_24038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21429__auto____1.call(this,state_24038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21429__auto____0;
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21429__auto____1;
return cljs$core$async$state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_24096 = f__21932__auto__();
(statearr_24096[(6)] = c__21931__auto___25719);

return statearr_24096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24098 = arguments.length;
switch (G__24098) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24101 = arguments.length;
switch (G__24101) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24103 = arguments.length;
switch (G__24103) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__21931__auto___25786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_24174){
var state_val_24175 = (state_24174[(1)]);
if((state_val_24175 === (7))){
var state_24174__$1 = state_24174;
var statearr_24176_25788 = state_24174__$1;
(statearr_24176_25788[(2)] = null);

(statearr_24176_25788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (1))){
var state_24174__$1 = state_24174;
var statearr_24177_25790 = state_24174__$1;
(statearr_24177_25790[(2)] = null);

(statearr_24177_25790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (4))){
var inst_24114 = (state_24174[(7)]);
var inst_24110 = (state_24174[(8)]);
var inst_24117 = (inst_24114 < inst_24110);
var state_24174__$1 = state_24174;
if(cljs.core.truth_(inst_24117)){
var statearr_24178_25792 = state_24174__$1;
(statearr_24178_25792[(1)] = (6));

} else {
var statearr_24179_25793 = state_24174__$1;
(statearr_24179_25793[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (15))){
var inst_24160 = (state_24174[(9)]);
var inst_24165 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24160);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24174__$1,(17),out,inst_24165);
} else {
if((state_val_24175 === (13))){
var inst_24160 = (state_24174[(9)]);
var inst_24160__$1 = (state_24174[(2)]);
var inst_24161 = cljs.core.some(cljs.core.nil_QMARK_,inst_24160__$1);
var state_24174__$1 = (function (){var statearr_24181 = state_24174;
(statearr_24181[(9)] = inst_24160__$1);

return statearr_24181;
})();
if(cljs.core.truth_(inst_24161)){
var statearr_24183_25795 = state_24174__$1;
(statearr_24183_25795[(1)] = (14));

} else {
var statearr_24184_25796 = state_24174__$1;
(statearr_24184_25796[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (6))){
var state_24174__$1 = state_24174;
var statearr_24185_25797 = state_24174__$1;
(statearr_24185_25797[(2)] = null);

(statearr_24185_25797[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (17))){
var inst_24167 = (state_24174[(2)]);
var state_24174__$1 = (function (){var statearr_24187 = state_24174;
(statearr_24187[(10)] = inst_24167);

return statearr_24187;
})();
var statearr_24188_25798 = state_24174__$1;
(statearr_24188_25798[(2)] = null);

(statearr_24188_25798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (3))){
var inst_24172 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24174__$1,inst_24172);
} else {
if((state_val_24175 === (12))){
var _ = (function (){var statearr_24189 = state_24174;
(statearr_24189[(4)] = cljs.core.rest((state_24174[(4)])));

return statearr_24189;
})();
var state_24174__$1 = state_24174;
var ex24186 = (state_24174__$1[(2)]);
var statearr_24190_25801 = state_24174__$1;
(statearr_24190_25801[(5)] = ex24186);


if((ex24186 instanceof Object)){
var statearr_24191_25802 = state_24174__$1;
(statearr_24191_25802[(1)] = (11));

(statearr_24191_25802[(5)] = null);

} else {
throw ex24186;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (2))){
var inst_24109 = cljs.core.reset_BANG_(dctr,cnt);
var inst_24110 = cnt;
var inst_24114 = (0);
var state_24174__$1 = (function (){var statearr_24192 = state_24174;
(statearr_24192[(7)] = inst_24114);

(statearr_24192[(8)] = inst_24110);

(statearr_24192[(11)] = inst_24109);

return statearr_24192;
})();
var statearr_24193_25804 = state_24174__$1;
(statearr_24193_25804[(2)] = null);

(statearr_24193_25804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (11))){
var inst_24131 = (state_24174[(2)]);
var inst_24132 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24174__$1 = (function (){var statearr_24194 = state_24174;
(statearr_24194[(12)] = inst_24131);

return statearr_24194;
})();
var statearr_24195_25805 = state_24174__$1;
(statearr_24195_25805[(2)] = inst_24132);

(statearr_24195_25805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (9))){
var inst_24114 = (state_24174[(7)]);
var _ = (function (){var statearr_24196 = state_24174;
(statearr_24196[(4)] = cljs.core.cons((12),(state_24174[(4)])));

return statearr_24196;
})();
var inst_24142 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24114) : chs__$1.call(null,inst_24114));
var inst_24143 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24114) : done.call(null,inst_24114));
var inst_24144 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24142,inst_24143);
var ___$1 = (function (){var statearr_24197 = state_24174;
(statearr_24197[(4)] = cljs.core.rest((state_24174[(4)])));

return statearr_24197;
})();
var state_24174__$1 = state_24174;
var statearr_24201_25807 = state_24174__$1;
(statearr_24201_25807[(2)] = inst_24144);

(statearr_24201_25807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (5))){
var inst_24155 = (state_24174[(2)]);
var state_24174__$1 = (function (){var statearr_24202 = state_24174;
(statearr_24202[(13)] = inst_24155);

return statearr_24202;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24174__$1,(13),dchan);
} else {
if((state_val_24175 === (14))){
var inst_24163 = cljs.core.async.close_BANG_(out);
var state_24174__$1 = state_24174;
var statearr_24209_25808 = state_24174__$1;
(statearr_24209_25808[(2)] = inst_24163);

(statearr_24209_25808[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (16))){
var inst_24170 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24210_25809 = state_24174__$1;
(statearr_24210_25809[(2)] = inst_24170);

(statearr_24210_25809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (10))){
var inst_24114 = (state_24174[(7)]);
var inst_24147 = (state_24174[(2)]);
var inst_24149 = (inst_24114 + (1));
var inst_24114__$1 = inst_24149;
var state_24174__$1 = (function (){var statearr_24211 = state_24174;
(statearr_24211[(7)] = inst_24114__$1);

(statearr_24211[(14)] = inst_24147);

return statearr_24211;
})();
var statearr_24212_25810 = state_24174__$1;
(statearr_24212_25810[(2)] = null);

(statearr_24212_25810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24175 === (8))){
var inst_24153 = (state_24174[(2)]);
var state_24174__$1 = state_24174;
var statearr_24213_25811 = state_24174__$1;
(statearr_24213_25811[(2)] = inst_24153);

(statearr_24213_25811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21429__auto__ = null;
var cljs$core$async$state_machine__21429__auto____0 = (function (){
var statearr_24214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24214[(0)] = cljs$core$async$state_machine__21429__auto__);

(statearr_24214[(1)] = (1));

return statearr_24214;
});
var cljs$core$async$state_machine__21429__auto____1 = (function (state_24174){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_24174);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e24215){var ex__21432__auto__ = e24215;
var statearr_24216_25812 = state_24174;
(statearr_24216_25812[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_24174[(4)]))){
var statearr_24217_25815 = state_24174;
(statearr_24217_25815[(1)] = cljs.core.first((state_24174[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25816 = state_24174;
state_24174 = G__25816;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$state_machine__21429__auto__ = function(state_24174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21429__auto____1.call(this,state_24174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21429__auto____0;
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21429__auto____1;
return cljs$core$async$state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_24218 = f__21932__auto__();
(statearr_24218[(6)] = c__21931__auto___25786);

return statearr_24218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24222 = arguments.length;
switch (G__24222) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21931__auto___25821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_24259){
var state_val_24260 = (state_24259[(1)]);
if((state_val_24260 === (7))){
var inst_24236 = (state_24259[(7)]);
var inst_24237 = (state_24259[(8)]);
var inst_24236__$1 = (state_24259[(2)]);
var inst_24237__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24236__$1,(0),null);
var inst_24238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24236__$1,(1),null);
var inst_24239 = (inst_24237__$1 == null);
var state_24259__$1 = (function (){var statearr_24269 = state_24259;
(statearr_24269[(9)] = inst_24238);

(statearr_24269[(7)] = inst_24236__$1);

(statearr_24269[(8)] = inst_24237__$1);

return statearr_24269;
})();
if(cljs.core.truth_(inst_24239)){
var statearr_24270_25822 = state_24259__$1;
(statearr_24270_25822[(1)] = (8));

} else {
var statearr_24271_25824 = state_24259__$1;
(statearr_24271_25824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (1))){
var inst_24226 = cljs.core.vec(chs);
var inst_24227 = inst_24226;
var state_24259__$1 = (function (){var statearr_24276 = state_24259;
(statearr_24276[(10)] = inst_24227);

return statearr_24276;
})();
var statearr_24277_25825 = state_24259__$1;
(statearr_24277_25825[(2)] = null);

(statearr_24277_25825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (4))){
var inst_24227 = (state_24259[(10)]);
var state_24259__$1 = state_24259;
return cljs.core.async.ioc_alts_BANG_(state_24259__$1,(7),inst_24227);
} else {
if((state_val_24260 === (6))){
var inst_24253 = (state_24259[(2)]);
var state_24259__$1 = state_24259;
var statearr_24278_25826 = state_24259__$1;
(statearr_24278_25826[(2)] = inst_24253);

(statearr_24278_25826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (3))){
var inst_24255 = (state_24259[(2)]);
var state_24259__$1 = state_24259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24259__$1,inst_24255);
} else {
if((state_val_24260 === (2))){
var inst_24227 = (state_24259[(10)]);
var inst_24229 = cljs.core.count(inst_24227);
var inst_24230 = (inst_24229 > (0));
var state_24259__$1 = state_24259;
if(cljs.core.truth_(inst_24230)){
var statearr_24280_25827 = state_24259__$1;
(statearr_24280_25827[(1)] = (4));

} else {
var statearr_24281_25828 = state_24259__$1;
(statearr_24281_25828[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (11))){
var inst_24227 = (state_24259[(10)]);
var inst_24246 = (state_24259[(2)]);
var tmp24279 = inst_24227;
var inst_24227__$1 = tmp24279;
var state_24259__$1 = (function (){var statearr_24282 = state_24259;
(statearr_24282[(10)] = inst_24227__$1);

(statearr_24282[(11)] = inst_24246);

return statearr_24282;
})();
var statearr_24284_25829 = state_24259__$1;
(statearr_24284_25829[(2)] = null);

(statearr_24284_25829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (9))){
var inst_24237 = (state_24259[(8)]);
var state_24259__$1 = state_24259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24259__$1,(11),out,inst_24237);
} else {
if((state_val_24260 === (5))){
var inst_24251 = cljs.core.async.close_BANG_(out);
var state_24259__$1 = state_24259;
var statearr_24292_25830 = state_24259__$1;
(statearr_24292_25830[(2)] = inst_24251);

(statearr_24292_25830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (10))){
var inst_24249 = (state_24259[(2)]);
var state_24259__$1 = state_24259;
var statearr_24298_25831 = state_24259__$1;
(statearr_24298_25831[(2)] = inst_24249);

(statearr_24298_25831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (8))){
var inst_24238 = (state_24259[(9)]);
var inst_24227 = (state_24259[(10)]);
var inst_24236 = (state_24259[(7)]);
var inst_24237 = (state_24259[(8)]);
var inst_24241 = (function (){var cs = inst_24227;
var vec__24232 = inst_24236;
var v = inst_24237;
var c = inst_24238;
return (function (p1__24219_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24219_SHARP_);
});
})();
var inst_24242 = cljs.core.filterv(inst_24241,inst_24227);
var inst_24227__$1 = inst_24242;
var state_24259__$1 = (function (){var statearr_24302 = state_24259;
(statearr_24302[(10)] = inst_24227__$1);

return statearr_24302;
})();
var statearr_24303_25840 = state_24259__$1;
(statearr_24303_25840[(2)] = null);

(statearr_24303_25840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21429__auto__ = null;
var cljs$core$async$state_machine__21429__auto____0 = (function (){
var statearr_24304 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24304[(0)] = cljs$core$async$state_machine__21429__auto__);

(statearr_24304[(1)] = (1));

return statearr_24304;
});
var cljs$core$async$state_machine__21429__auto____1 = (function (state_24259){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_24259);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e24305){var ex__21432__auto__ = e24305;
var statearr_24306_25844 = state_24259;
(statearr_24306_25844[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_24259[(4)]))){
var statearr_24307_25845 = state_24259;
(statearr_24307_25845[(1)] = cljs.core.first((state_24259[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25846 = state_24259;
state_24259 = G__25846;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$state_machine__21429__auto__ = function(state_24259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21429__auto____1.call(this,state_24259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21429__auto____0;
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21429__auto____1;
return cljs$core$async$state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_24308 = f__21932__auto__();
(statearr_24308[(6)] = c__21931__auto___25821);

return statearr_24308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24310 = arguments.length;
switch (G__24310) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21931__auto___25857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_24354){
var state_val_24355 = (state_24354[(1)]);
if((state_val_24355 === (7))){
var inst_24316 = (state_24354[(7)]);
var inst_24316__$1 = (state_24354[(2)]);
var inst_24317 = (inst_24316__$1 == null);
var inst_24318 = cljs.core.not(inst_24317);
var state_24354__$1 = (function (){var statearr_24372 = state_24354;
(statearr_24372[(7)] = inst_24316__$1);

return statearr_24372;
})();
if(inst_24318){
var statearr_24377_25861 = state_24354__$1;
(statearr_24377_25861[(1)] = (8));

} else {
var statearr_24378_25862 = state_24354__$1;
(statearr_24378_25862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24355 === (1))){
var inst_24311 = (0);
var state_24354__$1 = (function (){var statearr_24379 = state_24354;
(statearr_24379[(8)] = inst_24311);

return statearr_24379;
})();
var statearr_24380_25863 = state_24354__$1;
(statearr_24380_25863[(2)] = null);

(statearr_24380_25863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24355 === (4))){
var state_24354__$1 = state_24354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24354__$1,(7),ch);
} else {
if((state_val_24355 === (6))){
var inst_24336 = (state_24354[(2)]);
var state_24354__$1 = state_24354;
var statearr_24381_25864 = state_24354__$1;
(statearr_24381_25864[(2)] = inst_24336);

(statearr_24381_25864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24355 === (3))){
var inst_24338 = (state_24354[(2)]);
var inst_24345 = cljs.core.async.close_BANG_(out);
var state_24354__$1 = (function (){var statearr_24382 = state_24354;
(statearr_24382[(9)] = inst_24338);

return statearr_24382;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24354__$1,inst_24345);
} else {
if((state_val_24355 === (2))){
var inst_24311 = (state_24354[(8)]);
var inst_24313 = (inst_24311 < n);
var state_24354__$1 = state_24354;
if(cljs.core.truth_(inst_24313)){
var statearr_24387_25868 = state_24354__$1;
(statearr_24387_25868[(1)] = (4));

} else {
var statearr_24388_25869 = state_24354__$1;
(statearr_24388_25869[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24355 === (11))){
var inst_24311 = (state_24354[(8)]);
var inst_24321 = (state_24354[(2)]);
var inst_24322 = (inst_24311 + (1));
var inst_24311__$1 = inst_24322;
var state_24354__$1 = (function (){var statearr_24398 = state_24354;
(statearr_24398[(8)] = inst_24311__$1);

(statearr_24398[(10)] = inst_24321);

return statearr_24398;
})();
var statearr_24399_25874 = state_24354__$1;
(statearr_24399_25874[(2)] = null);

(statearr_24399_25874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24355 === (9))){
var state_24354__$1 = state_24354;
var statearr_24400_25877 = state_24354__$1;
(statearr_24400_25877[(2)] = null);

(statearr_24400_25877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24355 === (5))){
var state_24354__$1 = state_24354;
var statearr_24401_25883 = state_24354__$1;
(statearr_24401_25883[(2)] = null);

(statearr_24401_25883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24355 === (10))){
var inst_24326 = (state_24354[(2)]);
var state_24354__$1 = state_24354;
var statearr_24402_25885 = state_24354__$1;
(statearr_24402_25885[(2)] = inst_24326);

(statearr_24402_25885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24355 === (8))){
var inst_24316 = (state_24354[(7)]);
var state_24354__$1 = state_24354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24354__$1,(11),out,inst_24316);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21429__auto__ = null;
var cljs$core$async$state_machine__21429__auto____0 = (function (){
var statearr_24403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24403[(0)] = cljs$core$async$state_machine__21429__auto__);

(statearr_24403[(1)] = (1));

return statearr_24403;
});
var cljs$core$async$state_machine__21429__auto____1 = (function (state_24354){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_24354);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e24408){var ex__21432__auto__ = e24408;
var statearr_24409_25888 = state_24354;
(statearr_24409_25888[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_24354[(4)]))){
var statearr_24410_25889 = state_24354;
(statearr_24410_25889[(1)] = cljs.core.first((state_24354[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25895 = state_24354;
state_24354 = G__25895;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$state_machine__21429__auto__ = function(state_24354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21429__auto____1.call(this,state_24354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21429__auto____0;
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21429__auto____1;
return cljs$core$async$state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_24411 = f__21932__auto__();
(statearr_24411[(6)] = c__21931__auto___25857);

return statearr_24411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24424 = (function (f,ch,meta24420,_,fn1,meta24425){
this.f = f;
this.ch = ch;
this.meta24420 = meta24420;
this._ = _;
this.fn1 = fn1;
this.meta24425 = meta24425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24426,meta24425__$1){
var self__ = this;
var _24426__$1 = this;
return (new cljs.core.async.t_cljs$core$async24424(self__.f,self__.ch,self__.meta24420,self__._,self__.fn1,meta24425__$1));
}));

(cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24426){
var self__ = this;
var _24426__$1 = this;
return self__.meta24425;
}));

(cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__24418_SHARP_){
var G__24428 = (((p1__24418_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24418_SHARP_) : self__.f.call(null,p1__24418_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24428) : f1.call(null,G__24428));
});
}));

(cljs.core.async.t_cljs$core$async24424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24420","meta24420",1227101116,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24419","cljs.core.async/t_cljs$core$async24419",1226139049,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24425","meta24425",-925102660,null)], null);
}));

(cljs.core.async.t_cljs$core$async24424.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24424");

(cljs.core.async.t_cljs$core$async24424.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24424");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24424.
 */
cljs.core.async.__GT_t_cljs$core$async24424 = (function cljs$core$async$__GT_t_cljs$core$async24424(f,ch,meta24420,_,fn1,meta24425){
return (new cljs.core.async.t_cljs$core$async24424(f,ch,meta24420,_,fn1,meta24425));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24419 = (function (f,ch,meta24420){
this.f = f;
this.ch = ch;
this.meta24420 = meta24420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24421,meta24420__$1){
var self__ = this;
var _24421__$1 = this;
return (new cljs.core.async.t_cljs$core$async24419(self__.f,self__.ch,meta24420__$1));
}));

(cljs.core.async.t_cljs$core$async24419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24421){
var self__ = this;
var _24421__$1 = this;
return self__.meta24420;
}));

(cljs.core.async.t_cljs$core$async24419.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24419.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async24424(self__.f,self__.ch,self__.meta24420,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24433 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24433) : self__.f.call(null,G__24433));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async24419.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async24419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24420","meta24420",1227101116,null)], null);
}));

(cljs.core.async.t_cljs$core$async24419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24419");

(cljs.core.async.t_cljs$core$async24419.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24419.
 */
cljs.core.async.__GT_t_cljs$core$async24419 = (function cljs$core$async$__GT_t_cljs$core$async24419(f,ch,meta24420){
return (new cljs.core.async.t_cljs$core$async24419(f,ch,meta24420));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async24419(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24440 = (function (f,ch,meta24441){
this.f = f;
this.ch = ch;
this.meta24441 = meta24441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24442,meta24441__$1){
var self__ = this;
var _24442__$1 = this;
return (new cljs.core.async.t_cljs$core$async24440(self__.f,self__.ch,meta24441__$1));
}));

(cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24442){
var self__ = this;
var _24442__$1 = this;
return self__.meta24441;
}));

(cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async24440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24441","meta24441",194978614,null)], null);
}));

(cljs.core.async.t_cljs$core$async24440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24440");

(cljs.core.async.t_cljs$core$async24440.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24440.
 */
cljs.core.async.__GT_t_cljs$core$async24440 = (function cljs$core$async$__GT_t_cljs$core$async24440(f,ch,meta24441){
return (new cljs.core.async.t_cljs$core$async24440(f,ch,meta24441));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async24440(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24456 = (function (p,ch,meta24457){
this.p = p;
this.ch = ch;
this.meta24457 = meta24457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24458,meta24457__$1){
var self__ = this;
var _24458__$1 = this;
return (new cljs.core.async.t_cljs$core$async24456(self__.p,self__.ch,meta24457__$1));
}));

(cljs.core.async.t_cljs$core$async24456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24458){
var self__ = this;
var _24458__$1 = this;
return self__.meta24457;
}));

(cljs.core.async.t_cljs$core$async24456.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24456.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24456.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24456.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async24456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24457","meta24457",1757271378,null)], null);
}));

(cljs.core.async.t_cljs$core$async24456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24456");

(cljs.core.async.t_cljs$core$async24456.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async24456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24456.
 */
cljs.core.async.__GT_t_cljs$core$async24456 = (function cljs$core$async$__GT_t_cljs$core$async24456(p,ch,meta24457){
return (new cljs.core.async.t_cljs$core$async24456(p,ch,meta24457));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async24456(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24460 = arguments.length;
switch (G__24460) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21931__auto___25916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_24491){
var state_val_24492 = (state_24491[(1)]);
if((state_val_24492 === (7))){
var inst_24487 = (state_24491[(2)]);
var state_24491__$1 = state_24491;
var statearr_24498_25917 = state_24491__$1;
(statearr_24498_25917[(2)] = inst_24487);

(statearr_24498_25917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (1))){
var state_24491__$1 = state_24491;
var statearr_24499_25918 = state_24491__$1;
(statearr_24499_25918[(2)] = null);

(statearr_24499_25918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (4))){
var inst_24471 = (state_24491[(7)]);
var inst_24471__$1 = (state_24491[(2)]);
var inst_24472 = (inst_24471__$1 == null);
var state_24491__$1 = (function (){var statearr_24501 = state_24491;
(statearr_24501[(7)] = inst_24471__$1);

return statearr_24501;
})();
if(cljs.core.truth_(inst_24472)){
var statearr_24502_25919 = state_24491__$1;
(statearr_24502_25919[(1)] = (5));

} else {
var statearr_24503_25921 = state_24491__$1;
(statearr_24503_25921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (6))){
var inst_24471 = (state_24491[(7)]);
var inst_24478 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24471) : p.call(null,inst_24471));
var state_24491__$1 = state_24491;
if(cljs.core.truth_(inst_24478)){
var statearr_24504_25922 = state_24491__$1;
(statearr_24504_25922[(1)] = (8));

} else {
var statearr_24505_25923 = state_24491__$1;
(statearr_24505_25923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (3))){
var inst_24489 = (state_24491[(2)]);
var state_24491__$1 = state_24491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24491__$1,inst_24489);
} else {
if((state_val_24492 === (2))){
var state_24491__$1 = state_24491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24491__$1,(4),ch);
} else {
if((state_val_24492 === (11))){
var inst_24481 = (state_24491[(2)]);
var state_24491__$1 = state_24491;
var statearr_24506_25929 = state_24491__$1;
(statearr_24506_25929[(2)] = inst_24481);

(statearr_24506_25929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (9))){
var state_24491__$1 = state_24491;
var statearr_24507_25931 = state_24491__$1;
(statearr_24507_25931[(2)] = null);

(statearr_24507_25931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (5))){
var inst_24475 = cljs.core.async.close_BANG_(out);
var state_24491__$1 = state_24491;
var statearr_24508_25933 = state_24491__$1;
(statearr_24508_25933[(2)] = inst_24475);

(statearr_24508_25933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (10))){
var inst_24484 = (state_24491[(2)]);
var state_24491__$1 = (function (){var statearr_24509 = state_24491;
(statearr_24509[(8)] = inst_24484);

return statearr_24509;
})();
var statearr_24510_25938 = state_24491__$1;
(statearr_24510_25938[(2)] = null);

(statearr_24510_25938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24492 === (8))){
var inst_24471 = (state_24491[(7)]);
var state_24491__$1 = state_24491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24491__$1,(11),out,inst_24471);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21429__auto__ = null;
var cljs$core$async$state_machine__21429__auto____0 = (function (){
var statearr_24511 = [null,null,null,null,null,null,null,null,null];
(statearr_24511[(0)] = cljs$core$async$state_machine__21429__auto__);

(statearr_24511[(1)] = (1));

return statearr_24511;
});
var cljs$core$async$state_machine__21429__auto____1 = (function (state_24491){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_24491);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e24512){var ex__21432__auto__ = e24512;
var statearr_24513_25963 = state_24491;
(statearr_24513_25963[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_24491[(4)]))){
var statearr_24514_25964 = state_24491;
(statearr_24514_25964[(1)] = cljs.core.first((state_24491[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25965 = state_24491;
state_24491 = G__25965;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$state_machine__21429__auto__ = function(state_24491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21429__auto____1.call(this,state_24491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21429__auto____0;
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21429__auto____1;
return cljs$core$async$state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_24515 = f__21932__auto__();
(statearr_24515[(6)] = c__21931__auto___25916);

return statearr_24515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24532 = arguments.length;
switch (G__24532) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21931__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_24635){
var state_val_24636 = (state_24635[(1)]);
if((state_val_24636 === (7))){
var inst_24631 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24638_25981 = state_24635__$1;
(statearr_24638_25981[(2)] = inst_24631);

(statearr_24638_25981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (20))){
var inst_24598 = (state_24635[(7)]);
var inst_24612 = (state_24635[(2)]);
var inst_24613 = cljs.core.next(inst_24598);
var inst_24581 = inst_24613;
var inst_24583 = null;
var inst_24586 = (0);
var inst_24587 = (0);
var state_24635__$1 = (function (){var statearr_24639 = state_24635;
(statearr_24639[(8)] = inst_24581);

(statearr_24639[(9)] = inst_24586);

(statearr_24639[(10)] = inst_24612);

(statearr_24639[(11)] = inst_24583);

(statearr_24639[(12)] = inst_24587);

return statearr_24639;
})();
var statearr_24640_25983 = state_24635__$1;
(statearr_24640_25983[(2)] = null);

(statearr_24640_25983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (1))){
var state_24635__$1 = state_24635;
var statearr_24641_25984 = state_24635__$1;
(statearr_24641_25984[(2)] = null);

(statearr_24641_25984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (4))){
var inst_24537 = (state_24635[(13)]);
var inst_24537__$1 = (state_24635[(2)]);
var inst_24538 = (inst_24537__$1 == null);
var state_24635__$1 = (function (){var statearr_24642 = state_24635;
(statearr_24642[(13)] = inst_24537__$1);

return statearr_24642;
})();
if(cljs.core.truth_(inst_24538)){
var statearr_24647_25985 = state_24635__$1;
(statearr_24647_25985[(1)] = (5));

} else {
var statearr_24648_25986 = state_24635__$1;
(statearr_24648_25986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (15))){
var state_24635__$1 = state_24635;
var statearr_24652_25987 = state_24635__$1;
(statearr_24652_25987[(2)] = null);

(statearr_24652_25987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (21))){
var state_24635__$1 = state_24635;
var statearr_24654_25989 = state_24635__$1;
(statearr_24654_25989[(2)] = null);

(statearr_24654_25989[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (13))){
var inst_24581 = (state_24635[(8)]);
var inst_24586 = (state_24635[(9)]);
var inst_24583 = (state_24635[(11)]);
var inst_24587 = (state_24635[(12)]);
var inst_24594 = (state_24635[(2)]);
var inst_24595 = (inst_24587 + (1));
var tmp24649 = inst_24581;
var tmp24650 = inst_24586;
var tmp24651 = inst_24583;
var inst_24581__$1 = tmp24649;
var inst_24583__$1 = tmp24651;
var inst_24586__$1 = tmp24650;
var inst_24587__$1 = inst_24595;
var state_24635__$1 = (function (){var statearr_24655 = state_24635;
(statearr_24655[(8)] = inst_24581__$1);

(statearr_24655[(9)] = inst_24586__$1);

(statearr_24655[(14)] = inst_24594);

(statearr_24655[(11)] = inst_24583__$1);

(statearr_24655[(12)] = inst_24587__$1);

return statearr_24655;
})();
var statearr_24656_25990 = state_24635__$1;
(statearr_24656_25990[(2)] = null);

(statearr_24656_25990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (22))){
var state_24635__$1 = state_24635;
var statearr_24657_25991 = state_24635__$1;
(statearr_24657_25991[(2)] = null);

(statearr_24657_25991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (6))){
var inst_24537 = (state_24635[(13)]);
var inst_24579 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24537) : f.call(null,inst_24537));
var inst_24580 = cljs.core.seq(inst_24579);
var inst_24581 = inst_24580;
var inst_24583 = null;
var inst_24586 = (0);
var inst_24587 = (0);
var state_24635__$1 = (function (){var statearr_24662 = state_24635;
(statearr_24662[(8)] = inst_24581);

(statearr_24662[(9)] = inst_24586);

(statearr_24662[(11)] = inst_24583);

(statearr_24662[(12)] = inst_24587);

return statearr_24662;
})();
var statearr_24663_25993 = state_24635__$1;
(statearr_24663_25993[(2)] = null);

(statearr_24663_25993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (17))){
var inst_24598 = (state_24635[(7)]);
var inst_24605 = cljs.core.chunk_first(inst_24598);
var inst_24606 = cljs.core.chunk_rest(inst_24598);
var inst_24607 = cljs.core.count(inst_24605);
var inst_24581 = inst_24606;
var inst_24583 = inst_24605;
var inst_24586 = inst_24607;
var inst_24587 = (0);
var state_24635__$1 = (function (){var statearr_24664 = state_24635;
(statearr_24664[(8)] = inst_24581);

(statearr_24664[(9)] = inst_24586);

(statearr_24664[(11)] = inst_24583);

(statearr_24664[(12)] = inst_24587);

return statearr_24664;
})();
var statearr_24669_25994 = state_24635__$1;
(statearr_24669_25994[(2)] = null);

(statearr_24669_25994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (3))){
var inst_24633 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24635__$1,inst_24633);
} else {
if((state_val_24636 === (12))){
var inst_24621 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24670_26001 = state_24635__$1;
(statearr_24670_26001[(2)] = inst_24621);

(statearr_24670_26001[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (2))){
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24635__$1,(4),in$);
} else {
if((state_val_24636 === (23))){
var inst_24629 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24671_26002 = state_24635__$1;
(statearr_24671_26002[(2)] = inst_24629);

(statearr_24671_26002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (19))){
var inst_24616 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24672_26003 = state_24635__$1;
(statearr_24672_26003[(2)] = inst_24616);

(statearr_24672_26003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (11))){
var inst_24581 = (state_24635[(8)]);
var inst_24598 = (state_24635[(7)]);
var inst_24598__$1 = cljs.core.seq(inst_24581);
var state_24635__$1 = (function (){var statearr_24673 = state_24635;
(statearr_24673[(7)] = inst_24598__$1);

return statearr_24673;
})();
if(inst_24598__$1){
var statearr_24674_26010 = state_24635__$1;
(statearr_24674_26010[(1)] = (14));

} else {
var statearr_24675_26011 = state_24635__$1;
(statearr_24675_26011[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (9))){
var inst_24623 = (state_24635[(2)]);
var inst_24624 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_24635__$1 = (function (){var statearr_24676 = state_24635;
(statearr_24676[(15)] = inst_24623);

return statearr_24676;
})();
if(cljs.core.truth_(inst_24624)){
var statearr_24677_26017 = state_24635__$1;
(statearr_24677_26017[(1)] = (21));

} else {
var statearr_24678_26018 = state_24635__$1;
(statearr_24678_26018[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (5))){
var inst_24540 = cljs.core.async.close_BANG_(out);
var state_24635__$1 = state_24635;
var statearr_24679_26019 = state_24635__$1;
(statearr_24679_26019[(2)] = inst_24540);

(statearr_24679_26019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (14))){
var inst_24598 = (state_24635[(7)]);
var inst_24600 = cljs.core.chunked_seq_QMARK_(inst_24598);
var state_24635__$1 = state_24635;
if(inst_24600){
var statearr_24680_26023 = state_24635__$1;
(statearr_24680_26023[(1)] = (17));

} else {
var statearr_24681_26024 = state_24635__$1;
(statearr_24681_26024[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (16))){
var inst_24619 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24682_26025 = state_24635__$1;
(statearr_24682_26025[(2)] = inst_24619);

(statearr_24682_26025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (10))){
var inst_24583 = (state_24635[(11)]);
var inst_24587 = (state_24635[(12)]);
var inst_24592 = cljs.core._nth(inst_24583,inst_24587);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24635__$1,(13),out,inst_24592);
} else {
if((state_val_24636 === (18))){
var inst_24598 = (state_24635[(7)]);
var inst_24610 = cljs.core.first(inst_24598);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24635__$1,(20),out,inst_24610);
} else {
if((state_val_24636 === (8))){
var inst_24586 = (state_24635[(9)]);
var inst_24587 = (state_24635[(12)]);
var inst_24589 = (inst_24587 < inst_24586);
var inst_24590 = inst_24589;
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24590)){
var statearr_24683_26026 = state_24635__$1;
(statearr_24683_26026[(1)] = (10));

} else {
var statearr_24684_26027 = state_24635__$1;
(statearr_24684_26027[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21429__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21429__auto____0 = (function (){
var statearr_24685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24685[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21429__auto__);

(statearr_24685[(1)] = (1));

return statearr_24685;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21429__auto____1 = (function (state_24635){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_24635);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e24686){var ex__21432__auto__ = e24686;
var statearr_24687_26032 = state_24635;
(statearr_24687_26032[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_24635[(4)]))){
var statearr_24692_26033 = state_24635;
(statearr_24692_26033[(1)] = cljs.core.first((state_24635[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26035 = state_24635;
state_24635 = G__26035;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21429__auto__ = function(state_24635){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21429__auto____1.call(this,state_24635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21429__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21429__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_24693 = f__21932__auto__();
(statearr_24693[(6)] = c__21931__auto__);

return statearr_24693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));

return c__21931__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24710 = arguments.length;
switch (G__24710) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24718 = arguments.length;
switch (G__24718) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24741 = arguments.length;
switch (G__24741) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21931__auto___26057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_24767){
var state_val_24768 = (state_24767[(1)]);
if((state_val_24768 === (7))){
var inst_24762 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24771_26058 = state_24767__$1;
(statearr_24771_26058[(2)] = inst_24762);

(statearr_24771_26058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (1))){
var inst_24744 = null;
var state_24767__$1 = (function (){var statearr_24772 = state_24767;
(statearr_24772[(7)] = inst_24744);

return statearr_24772;
})();
var statearr_24773_26059 = state_24767__$1;
(statearr_24773_26059[(2)] = null);

(statearr_24773_26059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (4))){
var inst_24747 = (state_24767[(8)]);
var inst_24747__$1 = (state_24767[(2)]);
var inst_24748 = (inst_24747__$1 == null);
var inst_24749 = cljs.core.not(inst_24748);
var state_24767__$1 = (function (){var statearr_24774 = state_24767;
(statearr_24774[(8)] = inst_24747__$1);

return statearr_24774;
})();
if(inst_24749){
var statearr_24775_26067 = state_24767__$1;
(statearr_24775_26067[(1)] = (5));

} else {
var statearr_24776_26068 = state_24767__$1;
(statearr_24776_26068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (6))){
var state_24767__$1 = state_24767;
var statearr_24777_26069 = state_24767__$1;
(statearr_24777_26069[(2)] = null);

(statearr_24777_26069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (3))){
var inst_24764 = (state_24767[(2)]);
var inst_24765 = cljs.core.async.close_BANG_(out);
var state_24767__$1 = (function (){var statearr_24778 = state_24767;
(statearr_24778[(9)] = inst_24764);

return statearr_24778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24767__$1,inst_24765);
} else {
if((state_val_24768 === (2))){
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24767__$1,(4),ch);
} else {
if((state_val_24768 === (11))){
var inst_24747 = (state_24767[(8)]);
var inst_24756 = (state_24767[(2)]);
var inst_24744 = inst_24747;
var state_24767__$1 = (function (){var statearr_24779 = state_24767;
(statearr_24779[(10)] = inst_24756);

(statearr_24779[(7)] = inst_24744);

return statearr_24779;
})();
var statearr_24780_26081 = state_24767__$1;
(statearr_24780_26081[(2)] = null);

(statearr_24780_26081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (9))){
var inst_24747 = (state_24767[(8)]);
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24767__$1,(11),out,inst_24747);
} else {
if((state_val_24768 === (5))){
var inst_24747 = (state_24767[(8)]);
var inst_24744 = (state_24767[(7)]);
var inst_24751 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24747,inst_24744);
var state_24767__$1 = state_24767;
if(inst_24751){
var statearr_24785_26082 = state_24767__$1;
(statearr_24785_26082[(1)] = (8));

} else {
var statearr_24786_26083 = state_24767__$1;
(statearr_24786_26083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (10))){
var inst_24759 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24787_26084 = state_24767__$1;
(statearr_24787_26084[(2)] = inst_24759);

(statearr_24787_26084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (8))){
var inst_24744 = (state_24767[(7)]);
var tmp24784 = inst_24744;
var inst_24744__$1 = tmp24784;
var state_24767__$1 = (function (){var statearr_24788 = state_24767;
(statearr_24788[(7)] = inst_24744__$1);

return statearr_24788;
})();
var statearr_24789_26096 = state_24767__$1;
(statearr_24789_26096[(2)] = null);

(statearr_24789_26096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21429__auto__ = null;
var cljs$core$async$state_machine__21429__auto____0 = (function (){
var statearr_24790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24790[(0)] = cljs$core$async$state_machine__21429__auto__);

(statearr_24790[(1)] = (1));

return statearr_24790;
});
var cljs$core$async$state_machine__21429__auto____1 = (function (state_24767){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_24767);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e24791){var ex__21432__auto__ = e24791;
var statearr_24792_26102 = state_24767;
(statearr_24792_26102[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_24767[(4)]))){
var statearr_24799_26103 = state_24767;
(statearr_24799_26103[(1)] = cljs.core.first((state_24767[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26104 = state_24767;
state_24767 = G__26104;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$state_machine__21429__auto__ = function(state_24767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21429__auto____1.call(this,state_24767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21429__auto____0;
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21429__auto____1;
return cljs$core$async$state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_24800 = f__21932__auto__();
(statearr_24800[(6)] = c__21931__auto___26057);

return statearr_24800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24806 = arguments.length;
switch (G__24806) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21931__auto___26114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_24854){
var state_val_24855 = (state_24854[(1)]);
if((state_val_24855 === (7))){
var inst_24850 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24856_26115 = state_24854__$1;
(statearr_24856_26115[(2)] = inst_24850);

(statearr_24856_26115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (1))){
var inst_24817 = (new Array(n));
var inst_24818 = inst_24817;
var inst_24819 = (0);
var state_24854__$1 = (function (){var statearr_24857 = state_24854;
(statearr_24857[(7)] = inst_24819);

(statearr_24857[(8)] = inst_24818);

return statearr_24857;
})();
var statearr_24858_26116 = state_24854__$1;
(statearr_24858_26116[(2)] = null);

(statearr_24858_26116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (4))){
var inst_24822 = (state_24854[(9)]);
var inst_24822__$1 = (state_24854[(2)]);
var inst_24823 = (inst_24822__$1 == null);
var inst_24824 = cljs.core.not(inst_24823);
var state_24854__$1 = (function (){var statearr_24859 = state_24854;
(statearr_24859[(9)] = inst_24822__$1);

return statearr_24859;
})();
if(inst_24824){
var statearr_24860_26117 = state_24854__$1;
(statearr_24860_26117[(1)] = (5));

} else {
var statearr_24861_26118 = state_24854__$1;
(statearr_24861_26118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (15))){
var inst_24844 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24862_26119 = state_24854__$1;
(statearr_24862_26119[(2)] = inst_24844);

(statearr_24862_26119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (13))){
var state_24854__$1 = state_24854;
var statearr_24863_26120 = state_24854__$1;
(statearr_24863_26120[(2)] = null);

(statearr_24863_26120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (6))){
var inst_24819 = (state_24854[(7)]);
var inst_24840 = (inst_24819 > (0));
var state_24854__$1 = state_24854;
if(cljs.core.truth_(inst_24840)){
var statearr_24864_26121 = state_24854__$1;
(statearr_24864_26121[(1)] = (12));

} else {
var statearr_24865_26122 = state_24854__$1;
(statearr_24865_26122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (3))){
var inst_24852 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24854__$1,inst_24852);
} else {
if((state_val_24855 === (12))){
var inst_24818 = (state_24854[(8)]);
var inst_24842 = cljs.core.vec(inst_24818);
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24854__$1,(15),out,inst_24842);
} else {
if((state_val_24855 === (2))){
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24854__$1,(4),ch);
} else {
if((state_val_24855 === (11))){
var inst_24834 = (state_24854[(2)]);
var inst_24835 = (new Array(n));
var inst_24818 = inst_24835;
var inst_24819 = (0);
var state_24854__$1 = (function (){var statearr_24875 = state_24854;
(statearr_24875[(7)] = inst_24819);

(statearr_24875[(8)] = inst_24818);

(statearr_24875[(10)] = inst_24834);

return statearr_24875;
})();
var statearr_24876_26123 = state_24854__$1;
(statearr_24876_26123[(2)] = null);

(statearr_24876_26123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (9))){
var inst_24818 = (state_24854[(8)]);
var inst_24832 = cljs.core.vec(inst_24818);
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24854__$1,(11),out,inst_24832);
} else {
if((state_val_24855 === (5))){
var inst_24827 = (state_24854[(11)]);
var inst_24819 = (state_24854[(7)]);
var inst_24822 = (state_24854[(9)]);
var inst_24818 = (state_24854[(8)]);
var inst_24826 = (inst_24818[inst_24819] = inst_24822);
var inst_24827__$1 = (inst_24819 + (1));
var inst_24828 = (inst_24827__$1 < n);
var state_24854__$1 = (function (){var statearr_24881 = state_24854;
(statearr_24881[(11)] = inst_24827__$1);

(statearr_24881[(12)] = inst_24826);

return statearr_24881;
})();
if(cljs.core.truth_(inst_24828)){
var statearr_24882_26125 = state_24854__$1;
(statearr_24882_26125[(1)] = (8));

} else {
var statearr_24883_26126 = state_24854__$1;
(statearr_24883_26126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (14))){
var inst_24847 = (state_24854[(2)]);
var inst_24848 = cljs.core.async.close_BANG_(out);
var state_24854__$1 = (function (){var statearr_24885 = state_24854;
(statearr_24885[(13)] = inst_24847);

return statearr_24885;
})();
var statearr_24886_26128 = state_24854__$1;
(statearr_24886_26128[(2)] = inst_24848);

(statearr_24886_26128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (10))){
var inst_24838 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24887_26129 = state_24854__$1;
(statearr_24887_26129[(2)] = inst_24838);

(statearr_24887_26129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (8))){
var inst_24827 = (state_24854[(11)]);
var inst_24818 = (state_24854[(8)]);
var tmp24884 = inst_24818;
var inst_24818__$1 = tmp24884;
var inst_24819 = inst_24827;
var state_24854__$1 = (function (){var statearr_24899 = state_24854;
(statearr_24899[(7)] = inst_24819);

(statearr_24899[(8)] = inst_24818__$1);

return statearr_24899;
})();
var statearr_24900_26131 = state_24854__$1;
(statearr_24900_26131[(2)] = null);

(statearr_24900_26131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21429__auto__ = null;
var cljs$core$async$state_machine__21429__auto____0 = (function (){
var statearr_24901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24901[(0)] = cljs$core$async$state_machine__21429__auto__);

(statearr_24901[(1)] = (1));

return statearr_24901;
});
var cljs$core$async$state_machine__21429__auto____1 = (function (state_24854){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_24854);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e24902){var ex__21432__auto__ = e24902;
var statearr_24903_26133 = state_24854;
(statearr_24903_26133[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_24854[(4)]))){
var statearr_24904_26134 = state_24854;
(statearr_24904_26134[(1)] = cljs.core.first((state_24854[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26135 = state_24854;
state_24854 = G__26135;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$state_machine__21429__auto__ = function(state_24854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21429__auto____1.call(this,state_24854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21429__auto____0;
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21429__auto____1;
return cljs$core$async$state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_24905 = f__21932__auto__();
(statearr_24905[(6)] = c__21931__auto___26114);

return statearr_24905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24907 = arguments.length;
switch (G__24907) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21931__auto___26145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21932__auto__ = (function (){var switch__21428__auto__ = (function (state_24952){
var state_val_24953 = (state_24952[(1)]);
if((state_val_24953 === (7))){
var inst_24948 = (state_24952[(2)]);
var state_24952__$1 = state_24952;
var statearr_24954_26149 = state_24952__$1;
(statearr_24954_26149[(2)] = inst_24948);

(statearr_24954_26149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (1))){
var inst_24908 = [];
var inst_24909 = inst_24908;
var inst_24910 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24952__$1 = (function (){var statearr_24955 = state_24952;
(statearr_24955[(7)] = inst_24909);

(statearr_24955[(8)] = inst_24910);

return statearr_24955;
})();
var statearr_24956_26151 = state_24952__$1;
(statearr_24956_26151[(2)] = null);

(statearr_24956_26151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (4))){
var inst_24913 = (state_24952[(9)]);
var inst_24913__$1 = (state_24952[(2)]);
var inst_24914 = (inst_24913__$1 == null);
var inst_24915 = cljs.core.not(inst_24914);
var state_24952__$1 = (function (){var statearr_24957 = state_24952;
(statearr_24957[(9)] = inst_24913__$1);

return statearr_24957;
})();
if(inst_24915){
var statearr_24958_26152 = state_24952__$1;
(statearr_24958_26152[(1)] = (5));

} else {
var statearr_24959_26153 = state_24952__$1;
(statearr_24959_26153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (15))){
var inst_24909 = (state_24952[(7)]);
var inst_24940 = cljs.core.vec(inst_24909);
var state_24952__$1 = state_24952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24952__$1,(18),out,inst_24940);
} else {
if((state_val_24953 === (13))){
var inst_24935 = (state_24952[(2)]);
var state_24952__$1 = state_24952;
var statearr_24960_26154 = state_24952__$1;
(statearr_24960_26154[(2)] = inst_24935);

(statearr_24960_26154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (6))){
var inst_24909 = (state_24952[(7)]);
var inst_24937 = inst_24909.length;
var inst_24938 = (inst_24937 > (0));
var state_24952__$1 = state_24952;
if(cljs.core.truth_(inst_24938)){
var statearr_24961_26155 = state_24952__$1;
(statearr_24961_26155[(1)] = (15));

} else {
var statearr_24962_26156 = state_24952__$1;
(statearr_24962_26156[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (17))){
var inst_24945 = (state_24952[(2)]);
var inst_24946 = cljs.core.async.close_BANG_(out);
var state_24952__$1 = (function (){var statearr_24963 = state_24952;
(statearr_24963[(10)] = inst_24945);

return statearr_24963;
})();
var statearr_24964_26157 = state_24952__$1;
(statearr_24964_26157[(2)] = inst_24946);

(statearr_24964_26157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (3))){
var inst_24950 = (state_24952[(2)]);
var state_24952__$1 = state_24952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24952__$1,inst_24950);
} else {
if((state_val_24953 === (12))){
var inst_24909 = (state_24952[(7)]);
var inst_24928 = cljs.core.vec(inst_24909);
var state_24952__$1 = state_24952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24952__$1,(14),out,inst_24928);
} else {
if((state_val_24953 === (2))){
var state_24952__$1 = state_24952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24952__$1,(4),ch);
} else {
if((state_val_24953 === (11))){
var inst_24909 = (state_24952[(7)]);
var inst_24913 = (state_24952[(9)]);
var inst_24917 = (state_24952[(11)]);
var inst_24925 = inst_24909.push(inst_24913);
var tmp24965 = inst_24909;
var inst_24909__$1 = tmp24965;
var inst_24910 = inst_24917;
var state_24952__$1 = (function (){var statearr_24966 = state_24952;
(statearr_24966[(7)] = inst_24909__$1);

(statearr_24966[(8)] = inst_24910);

(statearr_24966[(12)] = inst_24925);

return statearr_24966;
})();
var statearr_24967_26159 = state_24952__$1;
(statearr_24967_26159[(2)] = null);

(statearr_24967_26159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (9))){
var inst_24910 = (state_24952[(8)]);
var inst_24921 = cljs.core.keyword_identical_QMARK_(inst_24910,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_24952__$1 = state_24952;
var statearr_24968_26161 = state_24952__$1;
(statearr_24968_26161[(2)] = inst_24921);

(statearr_24968_26161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (5))){
var inst_24918 = (state_24952[(13)]);
var inst_24910 = (state_24952[(8)]);
var inst_24913 = (state_24952[(9)]);
var inst_24917 = (state_24952[(11)]);
var inst_24917__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24913) : f.call(null,inst_24913));
var inst_24918__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24917__$1,inst_24910);
var state_24952__$1 = (function (){var statearr_24969 = state_24952;
(statearr_24969[(13)] = inst_24918__$1);

(statearr_24969[(11)] = inst_24917__$1);

return statearr_24969;
})();
if(inst_24918__$1){
var statearr_24970_26162 = state_24952__$1;
(statearr_24970_26162[(1)] = (8));

} else {
var statearr_24971_26163 = state_24952__$1;
(statearr_24971_26163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (14))){
var inst_24913 = (state_24952[(9)]);
var inst_24917 = (state_24952[(11)]);
var inst_24930 = (state_24952[(2)]);
var inst_24931 = [];
var inst_24932 = inst_24931.push(inst_24913);
var inst_24909 = inst_24931;
var inst_24910 = inst_24917;
var state_24952__$1 = (function (){var statearr_24972 = state_24952;
(statearr_24972[(7)] = inst_24909);

(statearr_24972[(14)] = inst_24930);

(statearr_24972[(8)] = inst_24910);

(statearr_24972[(15)] = inst_24932);

return statearr_24972;
})();
var statearr_24973_26168 = state_24952__$1;
(statearr_24973_26168[(2)] = null);

(statearr_24973_26168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (16))){
var state_24952__$1 = state_24952;
var statearr_24974_26169 = state_24952__$1;
(statearr_24974_26169[(2)] = null);

(statearr_24974_26169[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (10))){
var inst_24923 = (state_24952[(2)]);
var state_24952__$1 = state_24952;
if(cljs.core.truth_(inst_24923)){
var statearr_24975_26170 = state_24952__$1;
(statearr_24975_26170[(1)] = (11));

} else {
var statearr_24976_26171 = state_24952__$1;
(statearr_24976_26171[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (18))){
var inst_24942 = (state_24952[(2)]);
var state_24952__$1 = state_24952;
var statearr_24978_26173 = state_24952__$1;
(statearr_24978_26173[(2)] = inst_24942);

(statearr_24978_26173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (8))){
var inst_24918 = (state_24952[(13)]);
var state_24952__$1 = state_24952;
var statearr_24979_26174 = state_24952__$1;
(statearr_24979_26174[(2)] = inst_24918);

(statearr_24979_26174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21429__auto__ = null;
var cljs$core$async$state_machine__21429__auto____0 = (function (){
var statearr_24981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24981[(0)] = cljs$core$async$state_machine__21429__auto__);

(statearr_24981[(1)] = (1));

return statearr_24981;
});
var cljs$core$async$state_machine__21429__auto____1 = (function (state_24952){
while(true){
var ret_value__21430__auto__ = (function (){try{while(true){
var result__21431__auto__ = switch__21428__auto__(state_24952);
if(cljs.core.keyword_identical_QMARK_(result__21431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21431__auto__;
}
break;
}
}catch (e24982){var ex__21432__auto__ = e24982;
var statearr_24983_26176 = state_24952;
(statearr_24983_26176[(2)] = ex__21432__auto__);


if(cljs.core.seq((state_24952[(4)]))){
var statearr_24984_26178 = state_24952;
(statearr_24984_26178[(1)] = cljs.core.first((state_24952[(4)])));

} else {
throw ex__21432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26182 = state_24952;
state_24952 = G__26182;
continue;
} else {
return ret_value__21430__auto__;
}
break;
}
});
cljs$core$async$state_machine__21429__auto__ = function(state_24952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21429__auto____1.call(this,state_24952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21429__auto____0;
cljs$core$async$state_machine__21429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21429__auto____1;
return cljs$core$async$state_machine__21429__auto__;
})()
})();
var state__21933__auto__ = (function (){var statearr_24985 = f__21932__auto__();
(statearr_24985[(6)] = c__21931__auto___26145);

return statearr_24985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21933__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
