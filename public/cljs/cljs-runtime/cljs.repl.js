goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26638){
var map__26639 = p__26638;
var map__26639__$1 = cljs.core.__destructure_map(map__26639);
var m = map__26639__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26639__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26639__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__26658_26950 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26659_26951 = null;
var count__26660_26952 = (0);
var i__26661_26953 = (0);
while(true){
if((i__26661_26953 < count__26660_26952)){
var f_26955 = chunk__26659_26951.cljs$core$IIndexed$_nth$arity$2(null,i__26661_26953);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26955], 0));


var G__26958 = seq__26658_26950;
var G__26959 = chunk__26659_26951;
var G__26960 = count__26660_26952;
var G__26961 = (i__26661_26953 + (1));
seq__26658_26950 = G__26958;
chunk__26659_26951 = G__26959;
count__26660_26952 = G__26960;
i__26661_26953 = G__26961;
continue;
} else {
var temp__5804__auto___26962 = cljs.core.seq(seq__26658_26950);
if(temp__5804__auto___26962){
var seq__26658_26963__$1 = temp__5804__auto___26962;
if(cljs.core.chunked_seq_QMARK_(seq__26658_26963__$1)){
var c__5525__auto___26964 = cljs.core.chunk_first(seq__26658_26963__$1);
var G__26965 = cljs.core.chunk_rest(seq__26658_26963__$1);
var G__26966 = c__5525__auto___26964;
var G__26967 = cljs.core.count(c__5525__auto___26964);
var G__26968 = (0);
seq__26658_26950 = G__26965;
chunk__26659_26951 = G__26966;
count__26660_26952 = G__26967;
i__26661_26953 = G__26968;
continue;
} else {
var f_26969 = cljs.core.first(seq__26658_26963__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26969], 0));


var G__26970 = cljs.core.next(seq__26658_26963__$1);
var G__26971 = null;
var G__26972 = (0);
var G__26973 = (0);
seq__26658_26950 = G__26970;
chunk__26659_26951 = G__26971;
count__26660_26952 = G__26972;
i__26661_26953 = G__26973;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26974 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_26974], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_26974)))?cljs.core.second(arglists_26974):arglists_26974)], 0));
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
var seq__26762_26975 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26764_26976 = null;
var count__26765_26977 = (0);
var i__26766_26978 = (0);
while(true){
if((i__26766_26978 < count__26765_26977)){
var vec__26799_26979 = chunk__26764_26976.cljs$core$IIndexed$_nth$arity$2(null,i__26766_26978);
var name_26980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26799_26979,(0),null);
var map__26802_26981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26799_26979,(1),null);
var map__26802_26982__$1 = cljs.core.__destructure_map(map__26802_26981);
var doc_26983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26802_26982__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26802_26982__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26980], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26984], 0));

if(cljs.core.truth_(doc_26983)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26983], 0));
} else {
}


var G__26985 = seq__26762_26975;
var G__26986 = chunk__26764_26976;
var G__26987 = count__26765_26977;
var G__26988 = (i__26766_26978 + (1));
seq__26762_26975 = G__26985;
chunk__26764_26976 = G__26986;
count__26765_26977 = G__26987;
i__26766_26978 = G__26988;
continue;
} else {
var temp__5804__auto___26989 = cljs.core.seq(seq__26762_26975);
if(temp__5804__auto___26989){
var seq__26762_26990__$1 = temp__5804__auto___26989;
if(cljs.core.chunked_seq_QMARK_(seq__26762_26990__$1)){
var c__5525__auto___26991 = cljs.core.chunk_first(seq__26762_26990__$1);
var G__26992 = cljs.core.chunk_rest(seq__26762_26990__$1);
var G__26993 = c__5525__auto___26991;
var G__26994 = cljs.core.count(c__5525__auto___26991);
var G__26995 = (0);
seq__26762_26975 = G__26992;
chunk__26764_26976 = G__26993;
count__26765_26977 = G__26994;
i__26766_26978 = G__26995;
continue;
} else {
var vec__26816_26996 = cljs.core.first(seq__26762_26990__$1);
var name_26997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26816_26996,(0),null);
var map__26819_26998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26816_26996,(1),null);
var map__26819_26999__$1 = cljs.core.__destructure_map(map__26819_26998);
var doc_27000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26819_26999__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26819_26999__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26997], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27001], 0));

if(cljs.core.truth_(doc_27000)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27000], 0));
} else {
}


var G__27002 = cljs.core.next(seq__26762_26990__$1);
var G__27003 = null;
var G__27004 = (0);
var G__27005 = (0);
seq__26762_26975 = G__27002;
chunk__26764_26976 = G__27003;
count__26765_26977 = G__27004;
i__26766_26978 = G__27005;
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

var seq__26826 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26827 = null;
var count__26828 = (0);
var i__26829 = (0);
while(true){
if((i__26829 < count__26828)){
var role = chunk__26827.cljs$core$IIndexed$_nth$arity$2(null,i__26829);
var temp__5804__auto___27007__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27007__$1)){
var spec_27008 = temp__5804__auto___27007__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27008)], 0));
} else {
}


var G__27009 = seq__26826;
var G__27010 = chunk__26827;
var G__27011 = count__26828;
var G__27012 = (i__26829 + (1));
seq__26826 = G__27009;
chunk__26827 = G__27010;
count__26828 = G__27011;
i__26829 = G__27012;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__26826);
if(temp__5804__auto____$1){
var seq__26826__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26826__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26826__$1);
var G__27013 = cljs.core.chunk_rest(seq__26826__$1);
var G__27014 = c__5525__auto__;
var G__27015 = cljs.core.count(c__5525__auto__);
var G__27016 = (0);
seq__26826 = G__27013;
chunk__26827 = G__27014;
count__26828 = G__27015;
i__26829 = G__27016;
continue;
} else {
var role = cljs.core.first(seq__26826__$1);
var temp__5804__auto___27017__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27017__$2)){
var spec_27018 = temp__5804__auto___27017__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27018)], 0));
} else {
}


var G__27019 = cljs.core.next(seq__26826__$1);
var G__27020 = null;
var G__27021 = (0);
var G__27022 = (0);
seq__26826 = G__27019;
chunk__26827 = G__27020;
count__26828 = G__27021;
i__26829 = G__27022;
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
var map__26853 = datafied_throwable;
var map__26853__$1 = cljs.core.__destructure_map(map__26853);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26853__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26853__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26853__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26854 = cljs.core.last(via);
var map__26854__$1 = cljs.core.__destructure_map(map__26854);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26854__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26854__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26854__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26855 = data;
var map__26855__$1 = cljs.core.__destructure_map(map__26855);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26856 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__26856__$1 = cljs.core.__destructure_map(map__26856);
var top_data = map__26856__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26856__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__26858 = phase;
var G__26858__$1 = (((G__26858 instanceof cljs.core.Keyword))?G__26858.fqn:null);
switch (G__26858__$1) {
case "read-source":
var map__26859 = data;
var map__26859__$1 = cljs.core.__destructure_map(map__26859);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26859__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26859__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26860 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__26860__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26860,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26860);
var G__26860__$2 = (cljs.core.truth_((function (){var fexpr__26861 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26861.cljs$core$IFn$_invoke$arity$1 ? fexpr__26861.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26861.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26860__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26860__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26860__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26860__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26862 = top_data;
var G__26862__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26862,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26862);
var G__26862__$2 = (cljs.core.truth_((function (){var fexpr__26863 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26863.cljs$core$IFn$_invoke$arity$1 ? fexpr__26863.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26863.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26862__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26862__$1);
var G__26862__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26862__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26862__$2);
var G__26862__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26862__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26862__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26862__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26862__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26867 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26867,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26867,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26867,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26867,(3),null);
var G__26870 = top_data;
var G__26870__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26870,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26870);
var G__26870__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26870__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26870__$1);
var G__26870__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26870__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26870__$2);
var G__26870__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26870__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26870__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26870__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26870__$4;
}

break;
case "execution":
var vec__26872 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26872,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26872,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26872,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26872,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26848_SHARP_){
var or__5002__auto__ = (p1__26848_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__26875 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26875.cljs$core$IFn$_invoke$arity$1 ? fexpr__26875.cljs$core$IFn$_invoke$arity$1(p1__26848_SHARP_) : fexpr__26875.call(null,p1__26848_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__26876 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26876__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26876,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26876);
var G__26876__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26876__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26876__$1);
var G__26876__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26876__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26876__$2);
var G__26876__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26876__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26876__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26876__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26876__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26858__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26879){
var map__26880 = p__26879;
var map__26880__$1 = cljs.core.__destructure_map(map__26880);
var triage_data = map__26880__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26880__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26880__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26880__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26880__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26880__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26880__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26880__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26880__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__26884 = phase;
var G__26884__$1 = (((G__26884 instanceof cljs.core.Keyword))?G__26884.fqn:null);
switch (G__26884__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__26886 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__26887 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26888 = loc;
var G__26889 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26890_27032 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26891_27033 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26892_27034 = true;
var _STAR_print_fn_STAR__temp_val__26893_27035 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26892_27034);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26893_27035);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26877_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26877_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26891_27033);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26890_27032);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26886,G__26887,G__26888,G__26889) : format.call(null,G__26886,G__26887,G__26888,G__26889));

break;
case "macroexpansion":
var G__26894 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__26895 = cause_type;
var G__26896 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26897 = loc;
var G__26898 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26894,G__26895,G__26896,G__26897,G__26898) : format.call(null,G__26894,G__26895,G__26896,G__26897,G__26898));

break;
case "compile-syntax-check":
var G__26899 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__26900 = cause_type;
var G__26901 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26902 = loc;
var G__26903 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26899,G__26900,G__26901,G__26902,G__26903) : format.call(null,G__26899,G__26900,G__26901,G__26902,G__26903));

break;
case "compilation":
var G__26904 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__26905 = cause_type;
var G__26906 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26907 = loc;
var G__26908 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26904,G__26905,G__26906,G__26907,G__26908) : format.call(null,G__26904,G__26905,G__26906,G__26907,G__26908));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__26909 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__26910 = symbol;
var G__26911 = loc;
var G__26912 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26913_27036 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26914_27037 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26915_27038 = true;
var _STAR_print_fn_STAR__temp_val__26916_27039 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26915_27038);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26916_27039);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26878_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26878_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26914_27037);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26913_27036);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26909,G__26910,G__26911,G__26912) : format.call(null,G__26909,G__26910,G__26911,G__26912));
} else {
var G__26926 = "Execution error%s at %s(%s).\n%s\n";
var G__26927 = cause_type;
var G__26928 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26929 = loc;
var G__26930 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26926,G__26927,G__26928,G__26929,G__26930) : format.call(null,G__26926,G__26927,G__26928,G__26929,G__26930));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26884__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
