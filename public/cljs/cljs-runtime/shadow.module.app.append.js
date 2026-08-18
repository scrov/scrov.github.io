
shadow.cljs.devtools.client.env.module_loaded('app');

try { scrov.core.init(); } catch (e) { console.error("An error occurred when calling (scrov.core/init)"); console.error(e); }