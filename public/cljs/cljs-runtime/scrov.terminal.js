goog.provide('scrov.terminal');
if((typeof scrov !== 'undefined') && (typeof scrov.terminal !== 'undefined') && (typeof scrov.terminal.socket !== 'undefined')){
} else {
scrov.terminal.socket = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
scrov.terminal.connect_BANG_ = (function scrov$terminal$connect_BANG_(){
var ws = WebSocket([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("https:",location.protocol))?"wss://":"ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),"/ws/terminal"].join(''));
cljs.core.reset_BANG_(scrov.terminal.socket,ws);

(ws.onopen = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scrov.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"terminal-connected","terminal-connected",6555591),true);
}));

(ws.onmessage = (function (event){
var message = JSON.parse(event.data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("output",(message["type"]))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(scrov.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"command-output","command-output",-931527943),cljs.core.str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(message["data"])], 0));
} else {
return null;
}
}));

return ws;
});
scrov.terminal.send_BANG_ = (function scrov$terminal$send_BANG_(data){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(scrov.terminal.socket);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(WebSocket.OPEN,cljs.core.deref(scrov.terminal.socket).readyState);
} else {
return and__5000__auto__;
}
})())){
return cljs.core.deref(scrov.terminal.socket).send(JSON.stringify(({"type": "input", "data": data})));
} else {
return null;
}
});
scrov.terminal.component = (function scrov$terminal$component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.panel","section.panel",-1893414141),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"TERMINAL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.terminal-output","pre.terminal-output",-698520987),new cljs.core.Keyword(null,"command-output","command-output",-931527943).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scrov.state.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return scrov.terminal.connect_BANG_();
})], null),"CONNECT"], null)], null);
});

//# sourceMappingURL=scrov.terminal.js.map
