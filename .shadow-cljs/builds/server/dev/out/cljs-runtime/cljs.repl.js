goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15199){
var map__15200 = p__15199;
var map__15200__$1 = cljs.core.__destructure_map(map__15200);
var m = map__15200__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15200__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15200__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15202_15495 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15203_15496 = null;
var count__15204_15497 = (0);
var i__15205_15498 = (0);
while(true){
if((i__15205_15498 < count__15204_15497)){
var f_15499 = chunk__15203_15496.cljs$core$IIndexed$_nth$arity$2(null,i__15205_15498);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15499], 0));


var G__15500 = seq__15202_15495;
var G__15501 = chunk__15203_15496;
var G__15502 = count__15204_15497;
var G__15503 = (i__15205_15498 + (1));
seq__15202_15495 = G__15500;
chunk__15203_15496 = G__15501;
count__15204_15497 = G__15502;
i__15205_15498 = G__15503;
continue;
} else {
var temp__5804__auto___15504 = cljs.core.seq(seq__15202_15495);
if(temp__5804__auto___15504){
var seq__15202_15505__$1 = temp__5804__auto___15504;
if(cljs.core.chunked_seq_QMARK_(seq__15202_15505__$1)){
var c__5525__auto___15506 = cljs.core.chunk_first(seq__15202_15505__$1);
var G__15507 = cljs.core.chunk_rest(seq__15202_15505__$1);
var G__15508 = c__5525__auto___15506;
var G__15509 = cljs.core.count(c__5525__auto___15506);
var G__15510 = (0);
seq__15202_15495 = G__15507;
chunk__15203_15496 = G__15508;
count__15204_15497 = G__15509;
i__15205_15498 = G__15510;
continue;
} else {
var f_15511 = cljs.core.first(seq__15202_15505__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15511], 0));


var G__15512 = cljs.core.next(seq__15202_15505__$1);
var G__15513 = null;
var G__15514 = (0);
var G__15515 = (0);
seq__15202_15495 = G__15512;
chunk__15203_15496 = G__15513;
count__15204_15497 = G__15514;
i__15205_15498 = G__15515;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15516 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_15516], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_15516)))?cljs.core.second(arglists_15516):arglists_15516)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15269_15517 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15270_15518 = null;
var count__15271_15519 = (0);
var i__15272_15520 = (0);
while(true){
if((i__15272_15520 < count__15271_15519)){
var vec__15368_15521 = chunk__15270_15518.cljs$core$IIndexed$_nth$arity$2(null,i__15272_15520);
var name_15522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15368_15521,(0),null);
var map__15373_15523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15368_15521,(1),null);
var map__15373_15524__$1 = cljs.core.__destructure_map(map__15373_15523);
var doc_15525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15373_15524__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15373_15524__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15522], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15526], 0));

if(cljs.core.truth_(doc_15525)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15525], 0));
} else {
}


var G__15527 = seq__15269_15517;
var G__15528 = chunk__15270_15518;
var G__15529 = count__15271_15519;
var G__15530 = (i__15272_15520 + (1));
seq__15269_15517 = G__15527;
chunk__15270_15518 = G__15528;
count__15271_15519 = G__15529;
i__15272_15520 = G__15530;
continue;
} else {
var temp__5804__auto___15531 = cljs.core.seq(seq__15269_15517);
if(temp__5804__auto___15531){
var seq__15269_15532__$1 = temp__5804__auto___15531;
if(cljs.core.chunked_seq_QMARK_(seq__15269_15532__$1)){
var c__5525__auto___15533 = cljs.core.chunk_first(seq__15269_15532__$1);
var G__15534 = cljs.core.chunk_rest(seq__15269_15532__$1);
var G__15535 = c__5525__auto___15533;
var G__15536 = cljs.core.count(c__5525__auto___15533);
var G__15537 = (0);
seq__15269_15517 = G__15534;
chunk__15270_15518 = G__15535;
count__15271_15519 = G__15536;
i__15272_15520 = G__15537;
continue;
} else {
var vec__15381_15538 = cljs.core.first(seq__15269_15532__$1);
var name_15539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15381_15538,(0),null);
var map__15384_15540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15381_15538,(1),null);
var map__15384_15541__$1 = cljs.core.__destructure_map(map__15384_15540);
var doc_15542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15384_15541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15384_15541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15539], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15543], 0));

if(cljs.core.truth_(doc_15542)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15542], 0));
} else {
}


var G__15546 = cljs.core.next(seq__15269_15532__$1);
var G__15547 = null;
var G__15548 = (0);
var G__15549 = (0);
seq__15269_15517 = G__15546;
chunk__15270_15518 = G__15547;
count__15271_15519 = G__15548;
i__15272_15520 = G__15549;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__15386 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15387 = null;
var count__15388 = (0);
var i__15389 = (0);
while(true){
if((i__15389 < count__15388)){
var role = chunk__15387.cljs$core$IIndexed$_nth$arity$2(null,i__15389);
var temp__5804__auto___15551__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___15551__$1)){
var spec_15552 = temp__5804__auto___15551__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_15552)], 0));
} else {
}


var G__15553 = seq__15386;
var G__15554 = chunk__15387;
var G__15555 = count__15388;
var G__15556 = (i__15389 + (1));
seq__15386 = G__15553;
chunk__15387 = G__15554;
count__15388 = G__15555;
i__15389 = G__15556;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__15386);
if(temp__5804__auto____$1){
var seq__15386__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__15386__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15386__$1);
var G__15557 = cljs.core.chunk_rest(seq__15386__$1);
var G__15558 = c__5525__auto__;
var G__15559 = cljs.core.count(c__5525__auto__);
var G__15560 = (0);
seq__15386 = G__15557;
chunk__15387 = G__15558;
count__15388 = G__15559;
i__15389 = G__15560;
continue;
} else {
var role = cljs.core.first(seq__15386__$1);
var temp__5804__auto___15561__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___15561__$2)){
var spec_15562 = temp__5804__auto___15561__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_15562)], 0));
} else {
}


var G__15563 = cljs.core.next(seq__15386__$1);
var G__15564 = null;
var G__15565 = (0);
var G__15566 = (0);
seq__15386 = G__15563;
chunk__15387 = G__15564;
count__15388 = G__15565;
i__15389 = G__15566;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__15407 = datafied_throwable;
var map__15407__$1 = cljs.core.__destructure_map(map__15407);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15407__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15407__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15407__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__15408 = cljs.core.last(via);
var map__15408__$1 = cljs.core.__destructure_map(map__15408);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15408__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15408__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15408__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__15409 = data;
var map__15409__$1 = cljs.core.__destructure_map(map__15409);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15409__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15409__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15409__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__15410 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__15410__$1 = cljs.core.__destructure_map(map__15410);
var top_data = map__15410__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15410__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__15414 = phase;
var G__15414__$1 = (((G__15414 instanceof cljs.core.Keyword))?G__15414.fqn:null);
switch (G__15414__$1) {
case "read-source":
var map__15415 = data;
var map__15415__$1 = cljs.core.__destructure_map(map__15415);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15415__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15415__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__15418 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__15418__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15418,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15418);
var G__15418__$2 = (cljs.core.truth_((function (){var fexpr__15419 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15419.cljs$core$IFn$_invoke$arity$1 ? fexpr__15419.cljs$core$IFn$_invoke$arity$1(source) : fexpr__15419.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15418__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15418__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15418__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15418__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__15422 = top_data;
var G__15422__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15422,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15422);
var G__15422__$2 = (cljs.core.truth_((function (){var fexpr__15423 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15423.cljs$core$IFn$_invoke$arity$1 ? fexpr__15423.cljs$core$IFn$_invoke$arity$1(source) : fexpr__15423.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15422__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15422__$1);
var G__15422__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15422__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15422__$2);
var G__15422__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15422__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15422__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15422__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15422__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__15424 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15424,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15424,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15424,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15424,(3),null);
var G__15427 = top_data;
var G__15427__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15427,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__15427);
var G__15427__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15427__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__15427__$1);
var G__15427__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15427__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__15427__$2);
var G__15427__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15427__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15427__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15427__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15427__$4;
}

break;
case "execution":
var vec__15432 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15432,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15432,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15432,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15432,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__15403_SHARP_){
var or__5002__auto__ = (p1__15403_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__15435 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15435.cljs$core$IFn$_invoke$arity$1 ? fexpr__15435.cljs$core$IFn$_invoke$arity$1(p1__15403_SHARP_) : fexpr__15435.call(null,p1__15403_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__15436 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__15436__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15436,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__15436);
var G__15436__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15436__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15436__$1);
var G__15436__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15436__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__15436__$2);
var G__15436__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15436__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__15436__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15436__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15436__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15414__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__15449){
var map__15450 = p__15449;
var map__15450__$1 = cljs.core.__destructure_map(map__15450);
var triage_data = map__15450__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15450__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15450__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15450__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15450__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15450__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15450__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15450__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15450__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__15452 = phase;
var G__15452__$1 = (((G__15452 instanceof cljs.core.Keyword))?G__15452.fqn:null);
switch (G__15452__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__15453 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__15454 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15455 = loc;
var G__15456 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15457_15569 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15458_15570 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15459_15571 = true;
var _STAR_print_fn_STAR__temp_val__15460_15572 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15459_15571);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15460_15572);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15444_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15444_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15458_15570);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15457_15569);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__15453,G__15454,G__15455,G__15456) : format.call(null,G__15453,G__15454,G__15455,G__15456));

break;
case "macroexpansion":
var G__15462 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__15463 = cause_type;
var G__15464 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15465 = loc;
var G__15466 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15462,G__15463,G__15464,G__15465,G__15466) : format.call(null,G__15462,G__15463,G__15464,G__15465,G__15466));

break;
case "compile-syntax-check":
var G__15467 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__15468 = cause_type;
var G__15469 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15470 = loc;
var G__15471 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15467,G__15468,G__15469,G__15470,G__15471) : format.call(null,G__15467,G__15468,G__15469,G__15470,G__15471));

break;
case "compilation":
var G__15473 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__15474 = cause_type;
var G__15475 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15476 = loc;
var G__15477 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15473,G__15474,G__15475,G__15476,G__15477) : format.call(null,G__15473,G__15474,G__15475,G__15476,G__15477));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__15478 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__15479 = symbol;
var G__15480 = loc;
var G__15481 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15482_15582 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15483_15583 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15484_15584 = true;
var _STAR_print_fn_STAR__temp_val__15485_15585 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15484_15584);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15485_15585);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15445_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15445_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15483_15583);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15482_15582);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__15478,G__15479,G__15480,G__15481) : format.call(null,G__15478,G__15479,G__15480,G__15481));
} else {
var G__15486 = "Execution error%s at %s(%s).\n%s\n";
var G__15487 = cause_type;
var G__15488 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15489 = loc;
var G__15490 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15486,G__15487,G__15488,G__15489,G__15490) : format.call(null,G__15486,G__15487,G__15488,G__15489,G__15490));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15452__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
