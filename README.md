<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<title>GitHub Flavored Markdown Spec</title>
<style type="text/css">
body { font-family: Helvetica, arial, freesans, clean, sans-serif;
    line-height: 1.4;
    max-width: 48em;
    margin: auto;
    color: #333333;
    background-color: #fff;
    font-size: 13pt;
}
div#TOC ul { list-style: none; }
div.license {
  margin-top: 1em;
  font-style: italic;
  font-size: 80%;
}
h1 { font-size: 140%; font-weight: bold; border-top: 1px solid gray; padding-top: 0.5em; }
h2 { font-size: 120%; font-weight: bold; }
h3 { font-size: 110%; font-weight: bold; }
h4 { font-size: 100%; font-weight: bold; }
a.definition { font-weight: bold; }
a.toc-link {
  float: right;
  color: #ddd;
  text-decoration: none;
  font-weight: normal;
}
a.toc-link::after {
  content: "\25B2";
}
a.toc-link:hover { color: #000; }
span.space { position: relative; }
span.number:after { content: "  " }
span.space:after {
  content: "·";
  position: absolute;
  /* create a mark that indicates a space (trick from D. Greenspan) */
  top: 0px; bottom: 7px; left: 1px; right: 1px;
  color: #AAA;
}
div.example { overflow: hidden; }
p { text-align: justify; }
pre { padding: 0.5em; margin-left: 0; margin-right: 0; margin-top: 0.2em;
  margin-bottom: 0.5em; font-size: 88%; }
pre {
 white-space: pre-wrap;       /* css-3 */
 white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
 white-space: -pre-wrap;      /* Opera 4-6 */
 white-space: -o-pre-wrap;    /* Opera 7 */
 word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
code { font-family: monospace; background-color: #D3E1E4; }
pre > code { background-color: transparent; }
.example { font-size: 0; /* hack to get width:50% to work on inline-block */
           padding-bottom: 6pt; }
.column pre  { font-size: 11pt; padding-left: 6pt; padding-right: 6pt;
               padding-top: 2pt; padding-bottom: 2pt; }
div.examplenum { font-size: 11pt; text-align: left; margin-bottom:10px; }
div.column { display: inline-block; width: 50%; vertical-align: top; }
.extension { background: #e0f0e0; }
div.example > div:nth-child(2) { clear:left; background-color: #D3E1E4; }
div.example > div:nth-child(3) { clear:right; background-color: #C9CaCE; }
#watermark {
 position:fixed;
 bottom:0px;
 left:0px;
 padding: 1em;
 width: 100%;
 font-size: 120%;
 opacity:0.7;
 z-index:99;
 color: white;
}
#watermark a { color: white; }
a.dingus { 
  margin-left: 1em;
  cursor: pointer;
  line-height: 30px;
  padding: 4px 7px;
  color: #FFF;
  background-color: #33C3F0;
  box-shadow: 2px 2px 2px rgba(0,0,0,.2);
  border-color: #4FCAEF;
  border-bottom: 2px #2A9EC1 solid;
  border-right: 2px #2A9EC1 solid;
}
a.footnoteRef > sup:before {
  content: "[";
}
a.footnoteRef > sup:after {
  content: "]";
}
a.footnoteRef > sup {
  vertical-align: baseline;
  font-size: 100%;
}
@media print {
  @page {
    size: auto;
    margin: 1.2in 1.2in 1.2in 1.2in;
  }
  body {
      margin: 0px;
      line-height: 1.2;
      font-size: 10pt;
    }
 .column pre  { font-size: 9pt; }
 div.examplenum { font-size: 9pt; }
 a.dingus { display: none; }
}
</style>
<style id="mdt-style">
  :root {
    --bg:    #1e1e1e; --bg1: #252526; --bg2: #2d2d2d; --bg3: #333;
    --bdr:   rgba(255,255,255,.08);
    --acc:   #569cd6; --grn: #4ec9b0; --yel: #ce9178; --red: #f44747;
    --pur:   #c586c0; --org: #d7ba7d; --wht: #d4d4d4; --dim: #6a6a6a;
    --info:  #9cdcfe; --warn-bg: rgba(255,193,7,.06); --err-bg: rgba(244,71,71,.07);
    --mono:  'JetBrains Mono','Fira Code','Cascadia Code',Consolas,monospace;
    --ui:    system-ui,-apple-system,sans-serif;
    --tab-h: 30px; --tb-h: 28px;
    /* Mobile touch targets */
    --touch: 40px;
    --touch-sm: 36px;
  }
  #mdt-root,#mdt-root * { box-sizing:border-box; }
  #mdt-root {
    position:fixed; bottom:0; left:0; right:0;
    height:60vh; min-height:260px; max-height:94vh;
    background:var(--bg); border-top:1px solid var(--bdr);
    box-shadow:0 -2px 0 #569cd640, 0 -20px 60px rgba(0,0,0,.9);
    font-family:var(--mono); font-size:13px; color:var(--wht);
    display:flex; flex-direction:column; z-index:2147483646;
    overflow:hidden; transform:translateY(100%);
    transition:transform .2s cubic-bezier(.4,0,.2,1);
    /* Firefox Mobile: avoid toolbar overlap */
    padding-bottom:env(safe-area-inset-bottom, 0px);
  }
  #mdt-root.open { transform:translateY(0); }

  /* ── resize handle ── */
  #mdt-handle {
    height:8px; background:var(--bg1); cursor:ns-resize; flex-shrink:0;
    touch-action:none; border-bottom:1px solid var(--bdr);
  }
  #mdt-handle::before {
    content:''; display:block; width:48px; height:3px; margin:2px auto;
    background:var(--dim); border-radius:2px;
  }

  /* ── top tabs ── */
  #mdt-topbar {
    display:flex; align-items:stretch; flex-shrink:0;
    background:var(--bg1); border-bottom:1px solid var(--bdr);
    overflow-x:auto; scrollbar-width:none; height:38px;
    -webkit-overflow-scrolling:touch;
  }
  #mdt-topbar::-webkit-scrollbar { display:none; }
  .mdt-tab {
    display:flex; align-items:center; gap:5px; padding:0 16px;
    cursor:pointer; border:none; background:transparent;
    color:var(--dim); font-family:var(--ui); font-size:13px;
    white-space:nowrap; border-bottom:2px solid transparent;
    transition:color .15s,border-color .15s; flex-shrink:0;
    height:38px; -webkit-tap-highlight-color:transparent;
  }
  .mdt-tab:hover { color:var(--wht); }
  .mdt-tab.on { color:var(--acc); border-bottom-color:var(--acc); }
  .mdt-tab svg { width:13px; height:13px; flex-shrink:0; }
  .mdt-badge {
    background:var(--red); color:#fff; border-radius:8px; padding:0 5px;
    font-size:10px; font-weight:700; line-height:1.6; font-family:var(--ui);
    min-width:15px; text-align:center;
  }
  #mdt-closebtn {
    margin-left:auto; padding:0 16px; background:transparent; border:none;
    cursor:pointer; color:var(--dim); font-size:16px; line-height:38px;
    flex-shrink:0; transition:color .15s; -webkit-tap-highlight-color:transparent;
  }
  #mdt-closebtn:hover { color:var(--red); }

  /* ── panels container ── */
  #mdt-panels { flex:1; overflow:hidden; display:flex; flex-direction:column; min-height:0; }
  .mdt-panel { display:none; flex:1; flex-direction:column; overflow:hidden; min-height:0; }
  .mdt-panel.on { display:flex; }

  /* ── toolbar row ── */
  .mdt-toolbar {
    display:flex; align-items:center; gap:4px; padding:3px 8px;
    background:var(--bg1); border-bottom:1px solid var(--bdr);
    flex-shrink:0; flex-wrap:wrap; min-height:var(--tb-h);
  }
  .mdt-tbinput {
    flex:1; min-width:80px; background:var(--bg2); border:1px solid var(--bdr);
    border-radius:3px; color:var(--wht); padding:2px 8px; font-size:12px;
    font-family:var(--mono); outline:none; height:28px;
    -webkit-appearance:none;
  }
  .mdt-tbinput:focus { border-color:var(--acc); }
  .mdt-tbinput::placeholder { color:var(--dim); }
  .mdt-tbtn {
    background:transparent; border:1px solid transparent; border-radius:3px;
    color:var(--dim); cursor:pointer; padding:2px 6px; display:flex;
    align-items:center; justify-content:center;
    height:28px; min-width:28px;
    transition:color .15s,border-color .15s,background .15s;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-tbtn:hover { color:var(--wht); border-color:var(--bdr); background:var(--bg3); }
  .mdt-tbtn.on { color:var(--acc); border-color:var(--acc); }
  .mdt-tbtn svg { width:13px; height:13px; }
  .mdt-sep { width:1px; height:16px; background:var(--bdr); flex-shrink:0; margin:0 2px; }

  /* ── filter chips ── */
  .mdt-chip {
    padding:1px 8px; border-radius:2px; cursor:pointer; border:1px solid transparent;
    background:transparent; color:var(--dim); font-size:11px; font-family:var(--ui);
    transition:all .15s; height:26px; display:flex; align-items:center;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-chip:hover { color:var(--wht); }
  .mdt-chip.on { color:var(--wht); border-color:var(--bdr); background:var(--bg3); }
  .mdt-chip.error { color:var(--red) !important; }
  .mdt-chip.warn  { color:var(--yel) !important; }
  .mdt-chip.info  { color:var(--info) !important; }

  /* ══════ CONSOLE PANEL ══════ */
  #mdt-con-outer { flex:1; display:flex; flex-direction:column; overflow:hidden; min-height:0; }

  /* Settings bar (collapsible, hidden by default) */
  #mdt-con-settings {
    display:none; flex-wrap:wrap; gap:0; padding:6px 12px;
    background:var(--bg1); border-bottom:1px solid var(--bdr); flex-shrink:0;
  }
  #mdt-con-settings.open { display:flex; }
  .mdt-con-ck {
    display:flex; align-items:center; gap:5px; padding:3px 10px 3px 0;
    font-size:11px; font-family:var(--ui); color:var(--wht); cursor:pointer;
    white-space:nowrap; min-width:100%;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-con-ck input[type=checkbox] { accent-color:var(--acc); width:12px; height:12px; flex-shrink:0; cursor:pointer; }

  /* Main toolbar */
  #mdt-con-toolbar {
    display:flex; align-items:center; gap:4px; padding:2px 6px;
    background:var(--bg1); border-bottom:1px solid var(--bdr);
    flex-shrink:0; flex-wrap:nowrap; height:28px; overflow:hidden;
  }
  .mdt-con-tbtn {
    background:transparent; border:none; cursor:pointer; padding:2px 4px;
    color:var(--dim); border-radius:3px; display:flex; align-items:center;
    justify-content:center; height:22px; min-width:22px; flex-shrink:0;
    transition:color .12s,background .12s; -webkit-tap-highlight-color:transparent;
  }
  .mdt-con-tbtn:hover { color:var(--wht); background:rgba(255,255,255,.08); }
  .mdt-con-tbtn.on  { color:var(--acc); }
  .mdt-con-tbtn svg { width:13px; height:13px; }
  .mdt-con-sep { width:1px; height:16px; background:var(--bdr); flex-shrink:0; margin:0 2px; }
  /* Filter input */
  #mdt-con-filter {
    flex:1; min-width:60px; background:var(--bg2); border:1px solid var(--bdr);
    border-radius:3px; color:var(--wht); padding:1px 8px 1px 24px;
    font-size:11px; font-family:var(--ui); outline:none; height:20px;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236a6a6a' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='M21 21l-4.35-4.35'/%3E%3C/svg%3E");
    background-repeat:no-repeat; background-position:6px center;
    -webkit-appearance:none;
  }
  #mdt-con-filter:focus { border-color:var(--acc); }
  #mdt-con-filter::placeholder { color:var(--dim); }
  /* Level dropdown */
  #mdt-con-levels {
    background:var(--bg2); border:1px solid var(--bdr); border-radius:3px;
    color:var(--wht); font-size:11px; font-family:var(--ui); padding:1px 4px;
    height:20px; outline:none; cursor:pointer; flex-shrink:0; -webkit-appearance:none;
  }

  /* Log area */
  #mdt-logwrap {
    flex:1; overflow-y:auto; overflow-x:hidden; scroll-behavior:smooth;
    -webkit-overflow-scrolling:touch; background:var(--bg);
  }
  #mdt-logwrap::-webkit-scrollbar { width:6px; }
  #mdt-logwrap::-webkit-scrollbar-thumb { background:var(--bg3); border-radius:3px; }

  /* Log entry — icon | message | source */
  .mdt-logentry {
    display:flex; align-items:baseline; gap:6px;
    padding:4px 8px;
    border-bottom:1px solid rgba(255,255,255,.03);
    line-height:1.6; word-break:break-word; cursor:default;
    position:relative; min-height:28px;
  }
  .mdt-logentry:hover { background:rgba(255,255,255,.04); }
  .mdt-logentry.warn  { background:var(--warn-bg); border-left:2px solid var(--yel); }
  .mdt-logentry.error { background:var(--err-bg);  border-left:2px solid var(--red); }
  .mdt-logentry.result { border-left:2px solid var(--grn); }
  .mdt-logentry.info  { border-left:2px solid var(--info); }
  /* Icon column */
  .mdt-le-ic {
    font-size:12px; flex-shrink:0; width:14px; text-align:center;
    user-select:none; align-self:flex-start; padding-top:2px;
  }
  /* Message column */
  .mdt-le-msg {
    flex:1; white-space:pre-wrap; font-size:12px;
    font-family:var(--mono); min-width:0; word-break:break-word;
  }
  .mdt-logentry.log    .mdt-le-msg { color:var(--wht); }
  .mdt-logentry.info   .mdt-le-msg { color:var(--info); }
  .mdt-logentry.warn   .mdt-le-msg { color:var(--yel); }
  .mdt-logentry.error  .mdt-le-msg { color:var(--red); }
  .mdt-logentry.result .mdt-le-msg { color:var(--grn); }
  /* Source link (right side) */
  .mdt-le-src {
    font-size:10px; color:var(--acc); font-family:var(--ui);
    white-space:nowrap; flex-shrink:0; align-self:flex-start;
    padding-top:3px; cursor:pointer; opacity:.8;
    text-decoration:underline; text-underline-offset:2px;
    max-width:80px; overflow:hidden; text-overflow:ellipsis;
  }
  .mdt-le-src:hover { opacity:1; }
  /* Stack trace */
  .mdt-le-stk {
    font-size:10px; color:var(--dim); white-space:pre-wrap;
    border-left:2px solid rgba(255,255,255,.1); padding-left:8px;
    margin-top:2px; font-family:var(--mono); width:100%;
  }
  /* Count badge */
  .mdt-cnt {
    background:var(--bg3); color:var(--wht); border-radius:8px;
    padding:0 5px; font-size:10px; font-family:var(--ui);
    margin-left:4px; flex-shrink:0; align-self:center; min-width:18px; text-align:center;
  }
  .mdt-logentry.error .mdt-cnt { background:var(--red); }
  .mdt-logentry.warn  .mdt-cnt { background:var(--yel); color:#1e1e1e; }

  /* REPL — Chrome-style inline input at bottom of log */
  #mdt-replwrap {
    display:flex; align-items:center; flex-shrink:0;
    border-top:1px solid var(--bdr); background:var(--bg);
    position:relative; min-height:42px;
  }
  /* The > prompt icon */
  #mdt-replpfx {
    padding:0 4px 0 6px; color:var(--dim); font-weight:400;
    font-size:11px; flex-shrink:0; user-select:none;
    font-family:var(--mono); align-self:stretch;
    display:flex; align-items:center;
  }
  /* The textarea input — inline, no box */
  #mdt-repl {
    flex:1; background:transparent; border:none; color:var(--wht);
    font-family:var(--mono); font-size:13px;
    padding:10px 4px;
    caret-color:var(--wht); resize:none;
    min-height:42px; max-height:120px;
    line-height:1.6; scrollbar-width:thin; outline:none; -webkit-appearance:none;
  }
  /* Run button — only visible on mobile */
  #mdt-replrun {
    display:flex;
    padding:0 14px; background:transparent; border:none;
    border-left:1px solid var(--bdr); color:var(--acc);
    cursor:pointer; font-weight:700; font-size:12px;
    min-height:42px;
    flex-shrink:0; font-family:var(--ui); align-self:stretch;
    align-items:center; gap:4px;
    transition:background .12s; -webkit-tap-highlight-color:transparent;
  }
  #mdt-replrun:hover { background:rgba(86,156,214,.1); }

  /* Autocomplete popup */
  #mdt-ac {
    position:absolute; bottom:100%; left:0; right:0;
    background:#252526; border:1px solid var(--acc);
    border-radius:3px; display:none; flex-direction:column;
    max-height:220px; overflow-y:auto; z-index:2147483647;
    scrollbar-width:thin; box-shadow:0 4px 20px rgba(0,0,0,.6);
    -webkit-overflow-scrolling:touch;
  }
  .mdt-ac-group { padding:2px 8px; font-size:10px; color:var(--dim); font-family:var(--ui); border-top:1px solid var(--bdr); margin-top:2px; user-select:none; }
  .mdt-ac-item {
    padding:6px 12px; cursor:pointer; font-size:12px; color:var(--wht);
    display:flex; align-items:center; gap:8px; white-space:nowrap;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-ac-item:hover, .mdt-ac-item.sel { background:var(--acc); color:#1e1e1e; }
  .mdt-ac-item:hover .mdt-ac-type, .mdt-ac-item.sel .mdt-ac-type { color:#1e1e1e; }
  .mdt-ac-name { flex:1; overflow:hidden; text-overflow:ellipsis; }
  .mdt-ac-type { color:var(--dim); font-size:10px; font-family:var(--ui); flex-shrink:0; }

  /* ══════ NETWORK PANEL ══════ */
  #mdt-net-list { flex:1; overflow-y:auto; scrollbar-width:thin; -webkit-overflow-scrolling:touch; }
  #mdt-net-list::-webkit-scrollbar { width:6px; }
  #mdt-net-list::-webkit-scrollbar-thumb { background:var(--bg3); }
  .mdt-net-hdr {
    display:grid; grid-template-columns:24px 52px 60px 1fr 52px 54px 60px;
    gap:0; padding:2px 8px; background:var(--bg2);
    border-bottom:1px solid var(--bdr); font-size:10px;
    color:var(--dim); font-family:var(--ui); flex-shrink:0;
    text-transform:uppercase; letter-spacing:.04em; position:sticky; top:0; z-index:1;
  }
  .mdt-net-row {
    display:grid; grid-template-columns:24px 52px 60px 1fr 52px 54px 60px;
    gap:0; padding:5px 8px; border-bottom:1px solid rgba(255,255,255,.03);
    cursor:pointer; align-items:center; font-size:12px; transition:background .1s;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-net-row:hover { background:var(--bg2); }
  .mdt-net-row.sel { background:#1a3a5c; }
  .mdt-net-row.pend { opacity:.5; }
  .mdt-net-row.err { background:rgba(244,71,71,.07); }
  .mdt-net-row > span { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .mdt-net-row .nc-ico { font-size:12px; }
  .mdt-method { font-weight:700; font-size:11px; }
  .mdt-m-GET { color:var(--grn); } .mdt-m-POST { color:var(--acc); }
  .mdt-m-PUT { color:var(--org); } .mdt-m-DELETE { color:var(--red); }
  .mdt-m-PATCH { color:var(--pur); } .mdt-m-X { color:var(--dim); }
  .mdt-st-2 { color:var(--grn); } .mdt-st-3 { color:var(--acc); }
  .mdt-st-4 { color:var(--yel); } .mdt-st-5 { color:var(--red); }
  .mdt-st-x { color:var(--dim); }
  .mdt-net-waterfall { background:var(--bg2); border-radius:2px; height:10px; position:relative; }
  .mdt-net-bar { height:100%; border-radius:2px; background:var(--acc); position:absolute; opacity:.7; }
  #mdt-net-detail {
    display:none; flex-direction:column; border-top:2px solid var(--acc);
    background:var(--bg); max-height:45%; overflow:hidden; flex-shrink:0;
  }
  #mdt-net-detail.on { display:flex; }
  #mdt-net-detail-tabs {
    display:flex; background:var(--bg1); border-bottom:1px solid var(--bdr); flex-shrink:0;
  }
  .mdt-ndt {
    padding:4px 12px; cursor:pointer; border:none; background:transparent;
    color:var(--dim); font-size:11px; font-family:var(--ui);
    border-bottom:2px solid transparent; transition:all .15s;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-ndt:hover { color:var(--wht); }
  .mdt-ndt.on { color:var(--acc); border-bottom-color:var(--acc); }
  #mdt-net-detail-body { flex:1; overflow-y:auto; padding:8px 12px; font-size:12px; scrollbar-width:thin; -webkit-overflow-scrolling:touch; }
  .mdt-drow { display:flex; gap:8px; padding:2px 0; border-bottom:1px solid rgba(255,255,255,.04); }
  .mdt-dk { color:var(--dim); min-width:130px; flex-shrink:0; font-size:11px; font-family:var(--ui); }
  .mdt-dv { color:var(--wht); word-break:break-all; }
  .mdt-dsec { color:var(--acc); font-weight:700; padding:6px 0 3px; font-size:11px; font-family:var(--ui); text-transform:uppercase; letter-spacing:.06em; }
  .mdt-hdr-name { color:var(--org); } .mdt-hdr-val { color:var(--wht); }

  /* ══════ ELEMENTS / DOM PANEL ══════ */
  #mdt-dom-outer { flex:1; display:flex; flex-direction:column; overflow:hidden; min-height:0; }
  /* Desktop: tree | sidebar side by side. Mobile: tree on top, sidebar below */
  #mdt-dom-split {
    flex:1; display:flex; overflow:hidden; min-height:0;
    flex-direction:column;
  }

  /* ── DOM Tree ── */
  #mdt-dom-tree {
    flex:1; overflow:auto; padding:2px 0; font-size:11px;
    scrollbar-width:thin; -webkit-overflow-scrolling:touch;
    background:var(--bg); line-height:1;
    min-height:120px; /* ensure tree always visible on mobile */
  }
  #mdt-dom-tree::-webkit-scrollbar { width:6px; }
  #mdt-dom-tree::-webkit-scrollbar-thumb { background:var(--bg3); border-radius:3px; }

  /* Each DOM row — one line, compact */
  .mdt-drow2 {
    display:flex; align-items:center; height:16px;
    padding-right:8px; cursor:pointer; white-space:pre;
    font-size:11px; position:relative; flex-shrink:0;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-drow2:hover { background:rgba(255,255,255,.06); }
  .mdt-drow2.sel  { background:#1a3a5c; }
  /* Mini action button ⋮ shown on hover / always on touch */
  .mdt-drow2 .mdt-dom-menubtn {
    display:none; align-items:center; justify-content:center;
    margin-left:auto; flex-shrink:0;
    width:18px; height:16px; border-radius:3px;
    background:transparent; border:none; cursor:pointer;
    color:var(--dim); font-size:14px; line-height:1;
    padding:0; transition:color .1s, background .1s;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-drow2:hover .mdt-dom-menubtn { display:flex; }
  .mdt-drow2.sel  .mdt-dom-menubtn { display:flex; color:rgba(255,255,255,.5); }
  .mdt-dom-menubtn:hover { color:var(--wht) !important; background:rgba(255,255,255,.12); }
  /* Always visible on touch screens */
  @media (pointer:coarse) { .mdt-drow2 .mdt-dom-menubtn { display:flex; } }
  /* Blue left bar on selected */
  .mdt-drow2.sel::before {
    content:''; position:absolute; left:0; top:0; bottom:0;
    width:2px; background:var(--acc); pointer-events:none;
  }
  /* Closing tag row — same height */
  .mdt-dclose {
    display:flex; align-items:center; height:16px;
    padding-right:8px; white-space:pre; font-size:11px;
  }
  /* Inline text rows */
  .mdt-dtextrow {
    display:flex; align-items:center; height:16px;
    padding-right:8px; white-space:nowrap; font-size:11px;
    cursor:pointer; -webkit-tap-highlight-color:transparent;
  }
  .mdt-dtextrow:hover { background:rgba(255,255,255,.04); }

  /* Toggle ▶/▼ — MUST have fixed width so tag starts at same x */
  .mdt-dtog {
    display:inline-flex; align-items:center; justify-content:center;
    width:10px; height:16px; flex-shrink:0; cursor:pointer;
    color:var(--dim); font-size:8px; user-select:none;
    margin-right:2px;
  }
  .mdt-dtog:hover { color:var(--wht); }
  /* Placeholder for nodes without children — same width */
  .mdt-dnotog { display:inline-block; width:10px; flex-shrink:0; margin-right:2px; }

  /* Colors — DevTools palette */
  .mdt-tag  { color:#569cd6; }            /* <tag> blue */
  .mdt-an   { color:#9cdcfe; }            /* attr-name light-blue */
  .mdt-av   { color:#ce9178; }            /* attr-value orange */
  .mdt-txt  { color:var(--dim); font-style:italic; }  /* text node */
  .mdt-cmt  { color:#6a9955; font-style:italic; }     /* comment */
  .mdt-eq   { color:var(--wht); }                     /* = sign */

  /* ── Styles Sidebar: RIGHT on desktop, BOTTOM on mobile ── */
  #mdt-dom-side {
    overflow:hidden; flex-shrink:0;
    display:flex; flex-direction:column; background:var(--bg1);
    transition:all .18s ease;
    height:0;border-top:1px solid var(--bdr);width:100%;
  }
  #mdt-dom-side.on { height:52vh; overflow:hidden; }

  /* Sidebar tab bar — Styles / Computed / Layout / Event Listeners */
  #mdt-styles-tabs {
    display:flex; flex-shrink:0; background:var(--bg1);
    border-bottom:1px solid var(--bdr); overflow-x:auto; scrollbar-width:none;
    height:28px;
  }
  #mdt-styles-tabs::-webkit-scrollbar { display:none; }
  .mdt-stab {
    padding:0 10px; font-size:11px; font-family:var(--ui); color:var(--dim);
    cursor:pointer; border:none; background:transparent;
    border-bottom:2px solid transparent; height:28px;
    display:flex; align-items:center; white-space:nowrap;
    transition:color .12s; flex-shrink:0;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-stab:hover { color:var(--wht); }
  .mdt-stab.on { color:var(--wht); border-bottom-color:var(--acc); }

  /* Filter row */
  #mdt-styles-filter {
    display:flex; align-items:center; gap:4px; padding:3px 6px;
    border-bottom:1px solid var(--bdr); flex-shrink:0; background:var(--bg1);
  }
  #mdt-styles-filter input {
    flex:1; background:var(--bg2); border:1px solid var(--bdr); border-radius:3px;
    color:var(--wht); padding:1px 6px; font-size:11px; font-family:var(--ui);
    outline:none; height:20px; -webkit-appearance:none;
  }
  #mdt-styles-filter input:focus { border-color:var(--acc); }
  .mdt-sf-btn {
    background:transparent; border:1px solid var(--bdr); border-radius:2px;
    color:var(--dim); font-size:10px; padding:1px 5px; cursor:pointer;
    font-family:var(--ui); transition:all .12s; height:20px;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-sf-btn:hover { color:var(--wht); }
  .mdt-sf-btn.on { color:var(--acc); border-color:var(--acc); background:rgba(86,156,214,.08); }

  /* Styles scroll body */
  #mdt-styles-body {
    flex:1; overflow-y:auto; scrollbar-width:thin;
    -webkit-overflow-scrolling:touch; display:block;
  }
  #mdt-styles-body::-webkit-scrollbar { width:4px; }
  #mdt-styles-body::-webkit-scrollbar-thumb { background:var(--bg3); }
  #mdt-computed-body {
    flex:1; overflow-y:auto; scrollbar-width:thin;
    -webkit-overflow-scrolling:touch; display:none; padding:4px 0;
  }
  #mdt-computed-body::-webkit-scrollbar { width:4px; }
  #mdt-computed-body::-webkit-scrollbar-thumb { background:var(--bg3); }

  /* Style block: "element.style { ... }" */
  .mdt-style-block { border-bottom:1px solid var(--bdr); padding-bottom:4px; }
  .mdt-style-selector {
    padding:4px 8px 2px; font-size:11px; font-family:var(--mono);
    color:var(--wht); cursor:default; user-select:text;
  }
  .mdt-style-selector-name { color:#dcdcaa; } /* selector in yellow */
  .mdt-style-brace { color:var(--wht); }
  .mdt-style-source {
    float:right; color:var(--dim); font-size:10px; font-family:var(--ui);
    font-style:normal; cursor:pointer;
  }
  .mdt-style-source:hover { color:var(--acc); text-decoration:underline; }
  .mdt-style-closebrace { padding:2px 8px 4px 8px; font-size:11px; color:var(--wht); }

  /* Individual rule line */
  .mdt-style-rule {
    display:flex; align-items:center; padding:0 4px 0 20px;
    font-size:11px; min-height:15px; line-height:1.5;
    font-family:var(--mono); gap:0;
  }
  .mdt-style-rule:hover { background:rgba(255,255,255,.04); }
  .mdt-style-prop { color:#9cdcfe; flex-shrink:0; }  /* light blue for prop */
  .mdt-style-colon { color:var(--wht); padding:0 1px 0 0; flex-shrink:0; }
  .mdt-style-val { color:var(--wht); flex:1; word-break:break-word; }
  .mdt-style-val.color-val { color:#ce9178; }
  .mdt-style-semi { color:var(--wht); flex-shrink:0; }
  .mdt-style-disabled { opacity:.4; text-decoration:line-through; }
  /* Color swatch */
  .mdt-cb {
    display:inline-block; width:9px; height:9px;
    border:1px solid rgba(255,255,255,.25); border-radius:1px;
    margin-right:3px; vertical-align:middle; flex-shrink:0;
  }

  /* Computed panel rows */
  .mdt-comp-row {
    display:flex; align-items:baseline; gap:0; padding:1px 8px;
    font-size:11px; min-height:15px; font-family:var(--mono);
  }
  .mdt-comp-row:hover { background:rgba(255,255,255,.04); }
  .mdt-comp-prop { color:#9cdcfe; width:150px; flex-shrink:0; overflow:hidden; text-overflow:ellipsis; }
  .mdt-comp-val { color:var(--wht); flex:1; word-break:break-word; }

  /* ── BOTTOM: Breadcrumb ── */
  #mdt-dom-breadcrumb {
    display:flex; align-items:center; flex-shrink:0;
    overflow-x:auto; scrollbar-width:none;
    background:#111; border-top:1px solid var(--bdr);
    padding:0 8px; height:20px; gap:0;
    font-family:var(--mono); font-size:11px;
    -webkit-overflow-scrolling:touch;
  }
  #mdt-dom-breadcrumb::-webkit-scrollbar { display:none; }
  .mdt-bc-item {
    display:inline-flex; align-items:center; gap:0;
    white-space:nowrap; cursor:pointer; padding:0 3px;
    height:20px; border-radius:2px; color:var(--dim);
    transition:background .1s; -webkit-tap-highlight-color:transparent;
  }
  .mdt-bc-item:hover { background:rgba(255,255,255,.08); color:var(--wht); }
  .mdt-bc-item.active .mdt-bc-tag { color:var(--wht); }
  .mdt-bc-tag { color:#569cd6; }
  .mdt-bc-id  { color:var(--wht); }
  .mdt-bc-cls { color:#9cdcfe; font-size:10px; }
  .mdt-bc-sep { color:var(--dim); padding:0 1px; user-select:none; font-size:10px; }

  /* ── Guide panel ── */
  #mdt-guide-scroll {
    flex:1; overflow-y:auto; padding:0; scrollbar-width:thin;
    -webkit-overflow-scrolling:touch; background:var(--bg);
  }
  #mdt-guide-scroll::-webkit-scrollbar { width:6px; }
  #mdt-guide-scroll::-webkit-scrollbar-thumb { background:var(--bg3); }
  /* Guide hero */
  .mdt-guide-hero {
    background:linear-gradient(135deg,#1a2744 0%,#0d1117 100%);
    padding:20px 20px 16px; border-bottom:1px solid var(--bdr);
  }
  .mdt-guide-hero-title {
    font-size:18px; font-weight:700; color:var(--wht);
    font-family:var(--ui); margin-bottom:4px;
    display:flex; align-items:center; gap:8px;
  }
  .mdt-guide-hero-sub { font-size:12px; color:var(--dim); font-family:var(--ui); }
  /* Step cards */
  .mdt-guide-steps { padding:12px 14px; display:flex; flex-direction:column; gap:8px; }
  .mdt-guide-step {
    background:var(--bg1); border:1px solid var(--bdr); border-radius:6px;
    overflow:hidden; cursor:pointer; transition:border-color .15s;
  }
  .mdt-guide-step:hover { border-color:rgba(86,156,214,.4); }
  .mdt-guide-step.open { border-color:var(--acc); }
  .mdt-guide-step-hdr {
    display:flex; align-items:center; gap:10px; padding:10px 14px;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-guide-step-num {
    width:24px; height:24px; border-radius:50%; background:var(--acc);
    color:#1e1e1e; font-size:11px; font-weight:700; font-family:var(--ui);
    display:flex; align-items:center; justify-content:center; flex-shrink:0;
  }
  .mdt-guide-step.done .mdt-guide-step-num { background:var(--grn); }
  .mdt-guide-step-title { font-size:12px; font-weight:600; color:var(--wht); font-family:var(--ui); flex:1; }
  .mdt-guide-step-tag {
    font-size:10px; color:var(--dim); font-family:var(--ui); flex-shrink:0;
    background:var(--bg3); border-radius:3px; padding:1px 6px;
  }
  .mdt-guide-step-tag.mobile { color:var(--org); background:rgba(215,186,125,.1); }
  .mdt-guide-step-arrow { color:var(--dim); font-size:11px; flex-shrink:0; transition:transform .15s; }
  .mdt-guide-step.open .mdt-guide-step-arrow { transform:rotate(90deg); }
  /* Step body */
  .mdt-guide-step-body {
    display:none; padding:0 14px 12px; border-top:1px solid var(--bdr);
    background:var(--bg);
  }
  .mdt-guide-step.open .mdt-guide-step-body { display:block; }
  .mdt-guide-desc { font-size:11px; color:var(--dim); font-family:var(--ui); line-height:1.7; padding:10px 0 6px; }
  /* Step visual demo */
  .mdt-guide-demo {
    background:var(--bg2); border-radius:4px; padding:10px 12px; margin:6px 0;
    font-size:11px; font-family:var(--mono); color:var(--wht);
    border-left:3px solid var(--acc); line-height:1.8;
  }
  .mdt-guide-demo.warn { border-color:var(--org); }
  .mdt-guide-demo.green { border-color:var(--grn); }
  /* Try it button */
  .mdt-guide-try {
    background:var(--acc); color:#1e1e1e; border:none; border-radius:4px;
    padding:6px 14px; font-size:11px; font-weight:700; font-family:var(--ui);
    cursor:pointer; margin-top:8px; -webkit-tap-highlight-color:transparent;
    transition:opacity .15s; display:inline-flex; align-items:center; gap:6px;
  }
  .mdt-guide-try:hover { opacity:.85; }
  .mdt-guide-tip {
    display:flex; align-items:flex-start; gap:8px; padding:8px 12px;
    background:rgba(86,156,214,.06); border-radius:4px; margin:6px 0;
    font-size:11px; font-family:var(--ui); color:var(--wht); line-height:1.6;
  }
  .mdt-guide-tip-icon { font-size:14px; flex-shrink:0; }
  /* Mobile tip banner */
  .mdt-guide-mobile-banner {
    background:rgba(215,186,125,.08); border:1px solid rgba(215,186,125,.2);
    border-radius:4px; padding:10px 12px; margin:6px 0;
    display:flex; align-items:flex-start; gap:8px;
    font-size:11px; font-family:var(--ui); color:var(--org); line-height:1.6;
  }
  /* Progress bar */
  .mdt-guide-progress { padding:0 14px 14px; }
  .mdt-guide-prog-label { font-size:11px; color:var(--dim); font-family:var(--ui); margin-bottom:4px; }
  .mdt-guide-prog-bar { height:4px; background:var(--bg3); border-radius:2px; overflow:hidden; }
  .mdt-guide-prog-fill { height:100%; background:var(--acc); border-radius:2px; transition:width .4s ease; }
  /* Pick button glow when active */
  .mdt-pick-btn.on { color:var(--acc) !important; box-shadow:0 0 0 2px rgba(86,156,214,.3); }

  /* ── Inspect cursor overlay ── */
  #mdt-iov.on { cursor:crosshair; }
  #mdt-pick-cursor {
    position:fixed; pointer-events:none; z-index:2147483646; display:none;
    width:24px; height:24px; transform:translate(-50%,-50%);
  }
  #mdt-pick-cursor.on { display:block; }
  .mdt-pick-ring {
    position:absolute; inset:0; border:2px solid #569cd6;
    border-radius:50%; animation:mdt-pulse 1.2s ease-in-out infinite;
  }
  .mdt-pick-dot {
    position:absolute; top:50%; left:50%;
    width:4px; height:4px; background:#569cd6; border-radius:50%;
    transform:translate(-50%,-50%);
  }
  @keyframes mdt-pulse {
    0%,100% { transform:scale(1); opacity:1; }
    50% { transform:scale(1.4); opacity:.5; }
  }

  /* ── Styles action buttons (copy/delete) — appear on hover ── */
  .mdt-style-actions {
    display:none; align-items:center; gap:2px;
    margin-left:auto; flex-shrink:0; padding-left:6px;
  }
  .mdt-style-rule:hover .mdt-style-actions { display:flex; }
  /* Always visible on touch devices */
  @media (pointer:coarse) { .mdt-style-actions { display:flex; } }
  .mdt-style-action-btn {
    background:transparent; border:none; cursor:pointer; padding:1px 3px;
    font-size:11px; color:var(--dim); border-radius:2px; line-height:1;
    transition:color .1s,background .1s; -webkit-tap-highlight-color:transparent;
    height:16px; display:flex; align-items:center;
  }
  .mdt-style-action-btn:hover { color:var(--wht); background:rgba(255,255,255,.08); }
  /* Copy button in selector header */
  .mdt-style-copy-btn {
    background:transparent; border:none; cursor:pointer; padding:1px 4px;
    font-size:11px; color:var(--dim); border-radius:2px;
    transition:color .1s; -webkit-tap-highlight-color:transparent;
    opacity:0; transition:opacity .15s;
  }
  .mdt-style-block:hover .mdt-style-copy-btn,
  .mdt-style-selector:hover .mdt-style-copy-btn { opacity:1; }
  @media (pointer:coarse) { .mdt-style-copy-btn { opacity:1; } }
  .mdt-style-copy-btn:hover { color:var(--acc); }
  /* Strike-through for disabled rules */
  .mdt-style-rule.disabled .mdt-style-prop,
  .mdt-style-rule.disabled .mdt-style-val { text-decoration:line-through; opacity:.45; }
  /* Active add-property row */
  .mdt-style-addrow-active { background:rgba(86,156,214,.04); border-left:2px solid var(--acc); }
  /* ── Inline edit input (inside style rules) ── */
  .mdt-style-editinput {
    background:var(--bg); border:1px solid var(--acc); border-radius:2px;
    color:var(--wht); font-size:11px; font-family:var(--mono);
    padding:0 4px; outline:none; min-width:40px; height:16px;
    vertical-align:baseline; line-height:1; -webkit-appearance:none;
  }
  .mdt-style-editinput:focus { box-shadow:0 0 0 1px var(--acc); }
  /* Add property row */
  .mdt-style-addprop {
    padding:0 8px 2px 20px; font-size:11px; color:var(--dim);
    font-family:var(--mono); cursor:pointer; font-style:italic;
  }
  .mdt-style-addprop:hover { color:var(--acc); }
  /* Checkbox to disable rule */
  .mdt-style-cb {
    width:12px; height:12px; margin:0 2px 0 0; flex-shrink:0;
    cursor:pointer; accent-color:var(--acc); vertical-align:middle;
  }
  /* Space span — keeps tag-attr separation */
  .mdt-sp { white-space:pre; } /* preserves the space */
  /* Context menu — shared by DOM tree and Source editor */
  .mdt-ctx-menu { -webkit-user-select:none; user-select:none; }
  .mdt-ctx-item { -webkit-tap-highlight-color:transparent; }
  /* Source editor context menu specifics */
  .mdt-src-ctx-sep { height:1px; background:var(--bdr); margin:3px 0; }
  /* Legacy compat */
  .mdt-propsec,.mdt-proprow,.mdt-propkey,.mdt-propval { display:none; }

  /* ══════════════════════════════════════════════════════════════
     SOURCES PANEL
     LEFT: file navigator | CENTER: editor | RIGHT: debugger sidebar
  ══════════════════════════════════════════════════════════════ */
  #mdt-src-outer { flex:1; display:flex; flex-direction:column; overflow:hidden; min-height:0; }

  /* Sub-tabs row: Page / Workspace / … */
  #mdt-src-subtabs {
    display:flex; align-items:center; background:var(--bg1);
    border-bottom:1px solid var(--bdr); flex-shrink:0; padding:0 4px;
    height:26px; gap:0;
  }
  .mdt-src-stab {
    padding:0 10px; font-size:11px; font-family:var(--ui); color:var(--dim);
    cursor:pointer; border:none; background:transparent;
    border-bottom:2px solid transparent; height:26px;
    display:flex; align-items:center; transition:color .15s,border-color .15s;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-src-stab:hover { color:var(--wht); }
  .mdt-src-stab.on { color:var(--wht); border-bottom-color:var(--acc); }
  #mdt-src-stab-more {
    margin-left:auto; padding:0 6px; color:var(--dim); cursor:pointer;
    border:none; background:transparent; height:26px; display:flex; align-items:center;
    font-size:14px; -webkit-tap-highlight-color:transparent;
  }
  /* Snippets panel */
  #mdt-snippets-nav { display:flex; flex-direction:column; height:100%; }
  #mdt-snippets-nav-hdr { display:flex; align-items:center; justify-content:space-between; padding:4px 8px; border-bottom:1px solid var(--bdr); flex-shrink:0; background:var(--bg2); min-height:26px; }
  #mdt-snippets-nav-hdr span { font-size:10px; font-weight:600; color:var(--dim); font-family:var(--ui); text-transform:uppercase; letter-spacing:.06em; }
  #mdt-snippets-new-btn { background:transparent; border:none; color:var(--acc); cursor:pointer; font-size:18px; line-height:1; padding:0 2px; -webkit-tap-highlight-color:transparent; }
  #mdt-snippets-new-btn:hover { color:var(--wht); }
  #mdt-snippets-list { flex:1; overflow-y:auto; scrollbar-width:thin; }
  .mdt-snippet-item {
    display:flex; align-items:center; gap:5px; padding:3px 8px;
    cursor:pointer; font-size:12px; font-family:var(--ui); color:var(--wht);
    min-height:30px; -webkit-tap-highlight-color:transparent;
    position:relative; border-radius:2px;
  }
  .mdt-snippet-item:hover { background:rgba(255,255,255,.06); }
  .mdt-snippet-item.active { background:#094771; }
  .mdt-snippet-item .snip-icon { font-size:11px; flex-shrink:0; }
  /* Name — click to rename inline */
  .mdt-snippet-item .snip-name {
    flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
    cursor:text;
  }
  /* Inline rename input */
  .mdt-snippet-item .snip-rename-inp {
    flex:1; background:var(--bg); border:1px solid var(--acc); border-radius:2px;
    color:var(--wht); font-size:12px; font-family:var(--ui); padding:1px 5px;
    outline:none; min-width:0; -webkit-appearance:none;
  }
  /* Action buttons group — hidden until hover, always on touch */
  .mdt-snip-actions {
    display:none; align-items:center; gap:2px; flex-shrink:0;
  }
  .mdt-snippet-item:hover .mdt-snip-actions { display:flex; }
  .mdt-snippet-item.active .mdt-snip-actions { display:flex; }
  @media (pointer:coarse) { .mdt-snip-actions { display:flex; } }
  /* Each action button */
  .mdt-snip-act {
    background:transparent; border:none; cursor:pointer; padding:2px 4px;
    font-size:11px; border-radius:3px; color:var(--dim); line-height:1;
    transition:color .1s, background .1s; -webkit-tap-highlight-color:transparent;
    height:18px; display:flex; align-items:center; justify-content:center;
  }
  .mdt-snip-act:hover { color:var(--wht); background:rgba(255,255,255,.12); }
  .mdt-snip-act.run  { color:var(--acc); }
  .mdt-snip-act.del  { color:var(--red); }
  .mdt-snip-act.rename { color:var(--org); }
  .mdt-snip-run-btn { background:var(--grn); border:none; color:#1e1e1e; border-radius:3px; padding:2px 10px; font-size:11px; font-weight:700; font-family:var(--ui); cursor:pointer; display:flex; align-items:center; gap:4px; -webkit-tap-highlight-color:transparent; transition:opacity .12s; }
  .mdt-snip-run-btn:hover { opacity:.85; }

  /* Snippet editor */
  .mdt-snip-editor-wrap {
    display:flex; flex:1; overflow:hidden; background:var(--bg);
    min-height:0; position:relative;
  }
  /* Line numbers gutter */
  .mdt-snip-gutter {
    width:44px; flex-shrink:0; background:var(--bg1);
    border-right:1px solid var(--bdr);
    font-family:var(--mono); font-size:13px;
    line-height:1.8;
    color:var(--dim); text-align:right;
    padding:10px 6px 10px 0;
    overflow:hidden; box-sizing:border-box; user-select:none;
    white-space:pre; pointer-events:none;
  }
  /* The highlighted preview layer — hidden, not used */
  .mdt-snip-hl { display:none; }
  /* The textarea — visible, full color, the ONLY input area */
  .mdt-snip-ta {
    flex:1; background:var(--bg); border:none; outline:none; resize:none;
    font-family:var(--mono); font-size:14px;
    line-height:1.8;
    color:var(--wht); caret-color:var(--wht);
    padding:10px 10px 10px 50px;
    tab-size:2; box-sizing:border-box;
    -webkit-appearance:none; scrollbar-width:thin; overflow:auto;
    white-space:pre; min-height:0; width:100%;
    /* Firefox Mobile: prevent zoom on focus */
    font-size:max(14px, 16px);
  }
  .mdt-snip-ta::-webkit-scrollbar { width:6px; height:6px; }
  .mdt-snip-ta::-webkit-scrollbar-thumb { background:var(--bg3); }

  /* Three-column split */
  #mdt-src-split {
    flex:1; display:flex; overflow:hidden; min-height:0;
    flex-direction:column;
  }

  /* File Navigator */
  #mdt-src-nav {
    overflow:auto; font-size:12px; scrollbar-width:thin;
    background:var(--bg1); transition:all .18s ease;
    -webkit-overflow-scrolling:touch;
    width:100%;flex-shrink:0;border-bottom:1px solid var(--bdr);height:180px;
  }
  #mdt-src-nav.collapsed { height:0; overflow:hidden; border-bottom:none; }
  #mdt-src-nav::-webkit-scrollbar { width:4px; }
  #mdt-src-nav::-webkit-scrollbar-thumb { background:var(--bg3); }

  /* Tree nodes */
  .mdt-tree-node {
    display:flex; align-items:center; gap:4px;
    padding:2px 0; cursor:pointer; white-space:nowrap;
    font-family:var(--ui); font-size:12px; color:var(--wht);
    user-select:none; border-radius:2px; transition:background .1s;
    min-height:28px;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-tree-node:hover { background:rgba(255,255,255,.05); }
  .mdt-tree-node.selected { background:#094771; color:#fff; }
  .mdt-tree-indent { flex-shrink:0; }
  .mdt-tree-arrow {
    width:14px; flex-shrink:0; color:var(--dim); font-size:10px;
    display:flex; align-items:center; justify-content:center;
    transition:transform .15s;
  }
  .mdt-tree-arrow.open { transform:rotate(90deg); }
  .mdt-tree-icon { font-size:12px; flex-shrink:0; }
  .mdt-tree-label { overflow:hidden; text-overflow:ellipsis; flex:1; }
  .mdt-tree-children { display:none; }
  .mdt-tree-children.open { display:block; }

  /* CENTER — Editor */
  #mdt-src-editor-wrap {
    flex:1; display:flex; flex-direction:column; overflow:hidden; min-height:0;
    background:var(--bg);
  }

  /* File tabs bar — open files as tabs */
  #mdt-src-filetabs {
    display:flex; align-items:stretch; flex-shrink:0; overflow-x:auto;
    background:#252526; border-bottom:1px solid var(--bdr); min-height:26px;
    scrollbar-width:none; -webkit-overflow-scrolling:touch;
  }
  #mdt-src-filetabs::-webkit-scrollbar { display:none; }
  .mdt-filetab {
    display:flex; align-items:center; gap:6px; padding:0 12px;
    border-right:1px solid var(--bdr); cursor:pointer; font-size:12px;
    font-family:var(--ui); color:var(--dim); white-space:nowrap;
    background:transparent; border-bottom:1px solid transparent;
    transition:color .15s,background .15s; min-height:26px; flex-shrink:0;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-filetab:hover { background:var(--bg2); color:var(--wht); }
  .mdt-filetab.active { background:var(--bg); color:var(--wht); border-bottom-color:transparent; }
  .mdt-filetab-icon { font-size:11px; }
  .mdt-filetab-name { font-size:12px; }
  .mdt-filetab-close {
    width:14px; height:14px; border-radius:2px; display:flex; align-items:center;
    justify-content:center; color:var(--dim); font-size:10px;
    transition:color .15s,background .15s; cursor:pointer;
  }
  .mdt-filetab-close:hover { color:var(--wht); background:rgba(255,255,255,.1); }

  /* Editor view with line numbers */
  #mdt-src-editor { flex:1; overflow:auto; position:relative; -webkit-overflow-scrolling:touch; }
  #mdt-src-code {
    font-size:12px; line-height:1.6; white-space:pre;
    overflow-x:auto; tab-size:2; min-height:100%;
    display:flex; flex-direction:column;
  }
  #mdt-src-code-empty {
    display:flex; align-items:center; justify-content:center;
    height:100%; color:var(--dim); font-size:13px; font-family:var(--ui);
    text-align:center; padding:20px; line-height:1.7;
  }
  .mdt-src-line {
    display:flex; align-items:flex-start; min-height:22px;
    cursor:pointer; transition:background .1s;
  }
  .mdt-src-line:hover { background:rgba(255,255,255,.03); }
  .mdt-src-line.bp { background:rgba(244,71,71,.12); }
  .mdt-src-line.bp .mdt-src-ln { color:var(--red); }
  .mdt-src-ln {
    width:40px; color:var(--dim); text-align:right; padding:0 8px 0 0;
    flex-shrink:0; user-select:none; font-size:11px; line-height:22px;
    border-right:1px solid var(--bdr); position:relative;
  }
  .mdt-src-ln .bp-dot {
    position:absolute; left:4px; top:50%; transform:translateY(-50%);
    width:8px; height:8px; border-radius:50%; background:var(--red); display:none;
  }
  .mdt-src-line.bp .bp-dot { display:block; }
  .mdt-src-code-txt { flex:1; padding:0 12px; color:var(--wht); line-height:22px; }

  /* Editor bottom bar */
  #mdt-src-statusbar {
    display:flex; align-items:center; justify-content:space-between;
    background:#007acc; padding:0 12px; font-size:11px; font-family:var(--ui);
    color:#fff; flex-shrink:0; height:20px; gap:12px;
  }
  #mdt-src-statusbar .sb-left { display:flex; align-items:center; gap:12px; }
  #mdt-src-statusbar .sb-right { display:flex; align-items:center; gap:12px; color:rgba(255,255,255,.8); }
  #mdt-src-prettybtn {
    background:transparent; border:none; color:#fff; cursor:pointer;
    font-family:var(--mono); font-size:12px; padding:0; display:flex; align-items:center; gap:4px;
    -webkit-tap-highlight-color:transparent;
  }
  #mdt-src-prettybtn:hover { text-decoration:underline; }

  /* RIGHT — Debugger Sidebar */
  #mdt-src-dbg {
    width:0; flex-shrink:0; overflow-y:auto; overflow-x:hidden;
    border-left:1px solid var(--bdr); font-size:12px; scrollbar-width:thin;
    background:var(--bg1); transition:width .2s;
    -webkit-overflow-scrolling:touch;
  }
  #mdt-src-dbg.collapsed { width:0; border-left:none; }
  #mdt-src-dbg::-webkit-scrollbar { width:4px; }
  #mdt-src-dbg::-webkit-scrollbar-thumb { background:var(--bg3); }
  
  
  /* ═══ FIX Firefox Mobile: layout Sources ═══ */
  
  /* Su mobile srcSplit è in column: il debugger diventa pannello in altezza */
  #mdt-src-dbg {
    width: 100% !important;
    height: 0;
    border-left: none !important;
    border-top: 1px solid var(--bdr);
    transition: height .2s ease;
    flex-shrink: 0;
  }
  #mdt-src-dbg.collapsed {
    height: 0 !important;
    border-top: none;
  }
  #mdt-src-dbg:not(.collapsed) {
    height: 40vh;
  }
  /* Editor non deve mai collassare a zero */
  #mdt-src-editor-wrap {
    min-height: 200px;
    flex: 1 1 auto;
  }
  /* Nav file: stessa logica del debugger */
  #mdt-src-nav.collapsed {
    height: 0 !important;
    border-bottom: none !important;
    overflow: hidden !important;
  }
  #mdt-src-nav:not(.collapsed) {
    height: 35vh;
    flex-shrink: 0;
  }
  /* srcSplit deve poter calcolare bene le altezze dei figli */
  #mdt-src-split {
    min-height: 0;
  }
  
  
  /* ═══ FIX Firefox Mobile: Snippets ═══ */
  
  /* L'editor wrap deve avere min-height per non collassare i figli flex */
  #mdt-src-editor-wrap {
    min-height: 0;
    display: flex;
    flex-direction: column;
  }
  /* L'editor div interno deve poter crescere */
  #mdt-src-editor {
    flex: 1 1 auto;
    min-height: 250px;
    display: flex;
    flex-direction: column;
  }
  /* srcCode (contenitore del wrap snippet) deve riempire l'editor */
  #mdt-src-code {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }
  /* Wrap dell'editor snippet */
  .mdt-snip-editor-wrap {
    flex: 1 1 auto;
    min-height: 250px;
    display: flex;
  }
  /* Textarea snippet */
  .mdt-snip-ta {
    flex: 1 1 auto;
    min-height: 250px;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }
  /* Gutter line numbers visibile */
  .mdt-snip-gutter {
    flex-shrink: 0;
  }
  /* Lista snippet quando il nav fa da snippet panel */
  #mdt-src-nav:not(.collapsed) #mdt-snippets-nav {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  #mdt-snippets-list {
    flex: 1 1 auto;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  /* Bottone + più grande e tap-friendly */
  #mdt-snippets-new-btn {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    -webkit-tap-highlight-color: rgba(86,156,214,.2);
  }
  

  /* Debugger section */
  .mdt-dbg-sec {
    border-bottom:1px solid var(--bdr);
  }
  .mdt-dbg-sec-hdr {
    display:flex; align-items:center; gap:6px; padding:5px 10px;
    cursor:pointer; font-size:11px; font-family:var(--ui); color:var(--wht);
    user-select:none; background:var(--bg1); -webkit-tap-highlight-color:transparent;
    min-height:32px;
  }
  .mdt-dbg-sec-hdr:hover { background:var(--bg2); }
  .mdt-dbg-arrow {
    color:var(--dim); font-size:9px; width:12px; flex-shrink:0;
    transition:transform .15s; display:flex; align-items:center;
  }
  .mdt-dbg-arrow.open { transform:rotate(90deg); }
  .mdt-dbg-sec-title { font-weight:600; font-size:11px; color:var(--wht); flex:1; }
  .mdt-dbg-sec-body { padding:4px 0; display:none; }
  .mdt-dbg-sec-body.open { display:block; }

  /* Pause controls */
  #mdt-dbg-controls {
    display:flex; align-items:center; gap:2px; padding:6px 8px;
    border-bottom:1px solid var(--bdr); background:var(--bg2); flex-shrink:0;
  }
  .mdt-dbg-ctrl {
    background:transparent; border:none; color:var(--dim); cursor:pointer;
    padding:4px; border-radius:3px; display:flex; align-items:center; justify-content:center;
    transition:color .15s,background .15s; -webkit-tap-highlight-color:transparent;
    width:36px; height:36px;
  }
  .mdt-dbg-ctrl:hover { color:var(--wht); background:var(--bg3); }
  .mdt-dbg-ctrl.active { color:var(--acc); }
  .mdt-dbg-ctrl svg { width:14px; height:14px; }
  #mdt-dbg-status { font-size:11px; font-family:var(--ui); color:var(--dim); padding:4px 10px; font-style:italic; }

  /* Breakpoint item */
  .mdt-dbg-bp-item {
    display:flex; align-items:center; gap:6px; padding:3px 10px;
    font-size:11px; font-family:var(--ui); cursor:pointer;
    -webkit-tap-highlight-color:transparent;
    min-height:28px;
  }
  .mdt-dbg-bp-item:hover { background:rgba(255,255,255,.04); }
  .mdt-dbg-bp-cb {
    width:12px; height:12px; border:1px solid var(--dim); border-radius:2px;
    flex-shrink:0; display:flex; align-items:center; justify-content:center;
    cursor:pointer;
  }
  .mdt-dbg-bp-cb.checked { background:var(--acc); border-color:var(--acc); }
  .mdt-dbg-bp-cb.checked::after { content:"✓"; color:#fff; font-size:8px; }
  .mdt-dbg-bp-label { color:var(--wht); flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .mdt-dbg-bp-loc { color:var(--dim); font-size:10px; margin-left:auto; flex-shrink:0; }

  /* Empty state for debugger sections */
  .mdt-dbg-empty { padding:4px 16px 8px; color:var(--dim); font-size:11px; font-style:italic; font-family:var(--ui); }

  /* Watch expression */
  .mdt-dbg-watch-add {
    display:flex; align-items:center; gap:4px; padding:3px 10px;
    cursor:pointer; color:var(--dim); font-size:11px; font-family:var(--ui);
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-dbg-watch-add:hover { color:var(--acc); }

  /* Scope variables */
  .mdt-dbg-scope-var {
    display:flex; align-items:baseline; gap:6px; padding:2px 16px;
    font-size:11px; min-height:24px;
  }
  .mdt-dbg-scope-key { color:var(--org); min-width:70px; flex-shrink:0; }
  .mdt-dbg-scope-val { color:var(--wht); word-break:break-all; }

  /* Mobile: toggle buttons for nav/dbg panels */
  #mdt-src-mobile-bar {
    display:flex;
    align-items:center; gap:6px; padding:5px 10px;
    background:var(--bg2); border-bottom:1px solid var(--bdr); flex-shrink:0;
    overflow-x:auto; scrollbar-width:none;
  }
  #mdt-src-mobile-bar::-webkit-scrollbar { display:none; }
  .mdt-src-mob-btn {
    background:var(--bg3); border:1px solid var(--bdr); color:var(--dim);
    border-radius:5px; padding:6px 12px; font-size:12px; font-family:var(--ui);
    cursor:pointer; transition:all .15s; -webkit-tap-highlight-color:transparent;
    white-space:nowrap; flex-shrink:0; display:flex; align-items:center; gap:4px;
    min-height:32px;
  }
  .mdt-src-mob-btn.on { color:var(--acc); border-color:var(--acc); background:rgba(86,156,214,.12); }

  /* Horizontal scrollbar for src editor */
  #mdt-src-editor::-webkit-scrollbar { width:6px; height:6px; }
  #mdt-src-editor::-webkit-scrollbar-thumb { background:var(--bg3); border-radius:3px; }
  #mdt-src-editor::-webkit-scrollbar-corner { background:var(--bg); }

  /* syntax */
  .tok-kw { color:#569cd6; } .tok-str { color:#ce9178; } .tok-num { color:#b5cea8; }
  .tok-cmt { color:#6a9955; font-style:italic; } .tok-fn { color:#dcdcaa; }
  .tok-cls { color:#4ec9b0; } .tok-rx { color:#d16969; } .tok-op { color:#d4d4d4; }
  .tok-prop { color:#9cdcfe; }

  /* ══════ PERFORMANCE PANEL ══════ */
  #mdt-perf-scroll { flex:1; overflow-y:auto; padding:12px; display:flex; flex-direction:column; gap:12px; scrollbar-width:thin; -webkit-overflow-scrolling:touch; }
  .mdt-pcard { background:var(--bg1); border:1px solid var(--bdr); border-radius:4px; padding:10px 14px; }
  .mdt-pcard h4 { margin:0 0 8px; font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:.08em; color:var(--dim); font-family:var(--ui); }
  .mdt-pmrow { display:flex; justify-content:space-between; align-items:baseline; padding:3px 0; border-bottom:1px solid rgba(255,255,255,.04); }
  .mdt-pmrow:last-child { border-bottom:none; }
  .mdt-pmk { color:var(--dim); font-size:11px; font-family:var(--ui); }
  .mdt-pmv { font-size:12px; font-weight:600; }
  .mdt-bar-track { height:6px; background:var(--bg2); border-radius:3px; overflow:hidden; margin-top:5px; }
  .mdt-bar-fill { height:100%; border-radius:3px; background:var(--acc); transition:width .4s ease; }
  .mdt-bar-fill.y { background:var(--yel); } .mdt-bar-fill.r { background:var(--red); }
  .mdt-fps-big { font-size:42px; font-weight:900; color:var(--grn); line-height:1; letter-spacing:-2px; font-family:var(--mono); }
  .mdt-vital { display:flex; align-items:center; gap:8px; padding:4px 0; }
  .mdt-vital-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
  .mdt-vital-g { background:var(--grn); } .mdt-vital-y { background:var(--yel); } .mdt-vital-r { background:var(--red); }

  /* ══════ APPLICATION PANEL ══════ */
  #mdt-app-outer { flex:1; display:flex; flex-direction:row; overflow:hidden; min-height:0; }

  /* LEFT — Tree navigator */
  #mdt-app-nav {
    width:0; flex-shrink:0; overflow-y:auto; overflow-x:hidden;
    border-right:1px solid var(--bdr); background:var(--bg1);
    scrollbar-width:thin; -webkit-overflow-scrolling:touch;
    transition:width .2s;
  }
  #mdt-app-nav.mobile-open { width:180px; }
  #mdt-app-nav::-webkit-scrollbar { width:4px; }
  #mdt-app-nav::-webkit-scrollbar-thumb { background:var(--bg3); }

  /* Nav section header (Storage, Background services…) */
  .mdt-app-section-hdr {
    padding:6px 10px 2px; font-size:10px; font-weight:600;
    color:var(--dim); font-family:var(--ui); text-transform:uppercase;
    letter-spacing:.06em; user-select:none; margin-top:4px;
  }
  /* Nav tree item */
  .mdt-app-nav-item {
    display:flex; align-items:center; gap:6px; padding:3px 8px 3px 16px;
    cursor:pointer; font-size:11px; font-family:var(--ui); color:var(--wht);
    border-radius:0; transition:background .1s; min-height:28px;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-app-nav-item:hover { background:rgba(255,255,255,.05); }
  .mdt-app-nav-item.sel { background:#094771; color:#fff; }
  .mdt-app-nav-item .nav-icon { font-size:12px; flex-shrink:0; }
  /* Sub-items (like cookie domains) */
  .mdt-app-nav-item.sub { padding-left:28px; color:var(--dim); }
  .mdt-app-nav-item.sub.sel { color:#fff; }

  /* RIGHT — Detail panel */
  #mdt-app-detail {
    flex:1; display:flex; flex-direction:column; overflow:hidden; min-height:0;
  }
  /* Detail toolbar */
  #mdt-app-toolbar {
    display:flex; align-items:center; gap:4px; padding:3px 8px;
    background:var(--bg1); border-bottom:1px solid var(--bdr); flex-shrink:0;
    min-height:28px;
  }
  #mdt-app-filter {
    flex:1; background:var(--bg2); border:1px solid var(--bdr); border-radius:3px;
    color:var(--wht); padding:1px 8px; font-size:11px; font-family:var(--ui);
    outline:none; height:20px; -webkit-appearance:none;
  }
  #mdt-app-filter:focus { border-color:var(--acc); }
  #mdt-app-filter::placeholder { color:var(--dim); }
  .mdt-app-tbtn {
    background:transparent; border:1px solid transparent; border-radius:3px;
    color:var(--dim); cursor:pointer; padding:2px 6px; height:22px;
    display:flex; align-items:center; transition:all .12s;
    font-size:11px; font-family:var(--ui);
    -webkit-tap-highlight-color:transparent;
  }
  .mdt-app-tbtn:hover { color:var(--wht); border-color:var(--bdr); background:var(--bg3); }
  .mdt-app-tbtn.danger { color:var(--red); }
  .mdt-app-tbtn svg { width:13px; height:13px; }

  /* Table area */
  #mdt-app-table-wrap {
    flex:1; overflow:auto; scrollbar-width:thin; -webkit-overflow-scrolling:touch;
  }
  #mdt-app-table-wrap::-webkit-scrollbar { width:6px; height:6px; }
  #mdt-app-table-wrap::-webkit-scrollbar-thumb { background:var(--bg3); border-radius:3px; }
  .mdt-app-table {
    width:100%; border-collapse:collapse; font-size:11px;
    font-family:var(--mono); table-layout:auto;
  }
  .mdt-app-table th {
    position:sticky; top:0; background:var(--bg2); text-align:left;
    padding:3px 10px; color:var(--dim); font-size:10px; font-weight:600;
    font-family:var(--ui); border-bottom:1px solid var(--bdr);
    white-space:nowrap; user-select:none; z-index:1;
  }
  .mdt-app-table td {
    padding:3px 10px; border-bottom:1px solid rgba(255,255,255,.03);
    max-width:240px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
    cursor:default; color:var(--wht);
  }
  .mdt-app-table tr:hover td { background:rgba(255,255,255,.04); }
  .mdt-app-table tr.sel td { background:#094771; }
  /* Detail/preview pane at bottom */
  #mdt-app-preview {
    flex-shrink:0; border-top:1px solid var(--bdr); background:var(--bg1);
    min-height:60px; max-height:30%; overflow:auto; padding:8px 12px;
    font-size:11px; font-family:var(--mono); color:var(--wht);
    scrollbar-width:thin;
  }
  #mdt-app-preview.hidden { display:none; }
  .mdt-app-empty {
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    height:100%; color:var(--dim); font-family:var(--ui); text-align:center; gap:6px;
  }
  .mdt-app-empty-icon { font-size:28px; opacity:.4; }
  .mdt-app-empty-title { font-size:12px; font-weight:600; color:var(--wht); opacity:.7; }
  .mdt-app-empty-sub { font-size:11px; }

  /* Mobile toggle for nav */
  #mdt-app-mob-toggle {
    display:flex;
    align-items:center; gap:6px; padding:4px 10px;
    background:var(--bg2); border-bottom:1px solid var(--bdr);
    font-size:11px; font-family:var(--ui); color:var(--dim);
    cursor:pointer; -webkit-tap-highlight-color:transparent; flex-shrink:0;
  }
  #mdt-app-mob-toggle:hover { color:var(--wht); }

  /* Legacy compat */
  .mdt-scard,.mdt-scard-hdr,.mdt-sdel,.mdt-stable,.mdt-empty { display:none!important; }
  #mdt-stor-scroll { display:none!important; }

  /* ══════ UA PANEL ══════ */
  #mdt-ua-scroll { flex:1; overflow-y:auto; padding:12px; display:flex; flex-direction:column; gap:8px; scrollbar-width:thin; -webkit-overflow-scrolling:touch; }
  .mdt-uarow { display:flex; align-items:flex-start; gap:10px; background:var(--bg1); border:1px solid var(--bdr); border-radius:4px; padding:8px 12px; }
  .mdt-uaicon { font-size:16px; flex-shrink:0; width:22px; text-align:center; }
  .mdt-ualbl { font-size:10px; text-transform:uppercase; letter-spacing:.06em; color:var(--dim); font-family:var(--ui); }
  .mdt-uaval { font-size:12px; color:var(--wht); word-break:break-word; margin-top:1px; }

  /* ══════ FLOAT BUTTON ══════ */
  #mdt-fab {
    position:fixed; z-index:2147483647; bottom:calc(14px + env(safe-area-inset-bottom, 0px)); right:14px;
    width:46px; height:46px; border-radius:50%; border:none; cursor:pointer;
    background:#1e1e1e; border:1px solid rgba(86,156,214,.4);
    color:#569cd6; display:none; align-items:center; justify-content:center;
    box-shadow:0 2px 12px rgba(0,0,0,.7); touch-action:manipulation;
    transition:background .2s, transform .15s; -webkit-tap-highlight-color:transparent;
  }
  #mdt-fab:hover { background:#252526; transform:scale(1.08); }
  #mdt-fab svg { width:22px; height:22px; }

  /* ══════ INSPECT ══════ */
  #mdt-iov { position:fixed; inset:0; z-index:2147483643; display:none; cursor:crosshair; }
  #mdt-iov.on { display:block; }
  #mdt-ihl { position:fixed; pointer-events:none; z-index:2147483644; border:1px dashed #569cd6; background:rgba(86,156,214,.08); display:none; }
  #mdt-itip { position:fixed; pointer-events:none; z-index:2147483645; background:#1e1e1e; border:1px solid #569cd680; border-radius:4px; padding:4px 8px; font-size:11px; color:var(--wht); display:none; font-family:var(--mono); max-width:280px; }

  /* Firefox Mobile: ensure keyboard doesn't overlap */
  @supports (-moz-appearance:none) {
    #mdt-root { bottom:0; }
    #mdt-repl { font-size:16px; } /* Prevent iOS/FF zoom on input focus */
  }

  /* ═══ PERF: containment & reduced motion ═══
     Limita il blast-radius di reflow/repaint sui pannelli principali.
     Per dispositivi lenti questo riduce drasticamente il costo dello
     scroll nei log e nella network list. */
  #mdt-root { contain: layout style; }
  .mdt-panel { contain: layout style; }
  #mdt-logwrap, #mdt-net-list, #mdt-src-code {
    contain: strict; content-visibility: auto;
  }
  .mdt-log, .mdt-net-row, .mdt-src-line {
    contain: layout style;
    content-visibility: auto;
    contain-intrinsic-size: auto 22px;
  }

  /* Rispetta prefers-reduced-motion: niente animazioni se l'utente
     ha "reduce motion" attivo a sistema. */
  @media (prefers-reduced-motion: reduce) {
    #mdt-root, #mdt-fab, .mdt-tab, .mdt-tbtn, .mdt-chip,
    #mdt-assistant, #mdt-assistant.idle, #mdt-assistant-bubble {
      animation: none !important;
      transition: none !important;
    }
  }
  </style><style id="mdt-assistant-style">
  #mdt-assistant {
    position: absolute; right: 14px; bottom: 56px;
    width: 44px; height: 52px; cursor: pointer; z-index: 2147483646;
    transition: transform .18s cubic-bezier(.4,0,.2,1), opacity .18s;
    -webkit-tap-highlight-color: transparent;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,.55));
  }
  #mdt-assistant:hover, #mdt-assistant:active { transform: translateY(-2px) scale(1.05); }
  #mdt-assistant.hidden { display: none; }
  #mdt-assistant svg { width: 100%; height: 100%; display: block; }
  #mdt-assistant .body { fill: #9b59b6; stroke: #c586c0; stroke-width: 1.3; }
  #mdt-assistant .eye-w { fill: #fff; }
  #mdt-assistant .eye-p { fill: #1e1e1e; }
  #mdt-assistant .smile { fill: none; stroke: #fff; stroke-width: 1.6; stroke-linecap: round; }
  #mdt-assistant .antenna { stroke: #c586c0; stroke-width: 1.6; stroke-linecap: round; fill: none; }
  #mdt-assistant .antenna-dot { fill: #c586c0; }
  @keyframes mdt-assistant-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
  #mdt-assistant.idle { animation: mdt-assistant-bob 2.4s ease-in-out infinite; }

  #mdt-assistant-bubble {
    position: absolute; right: 70px; bottom: 56px;
    max-width: 260px; min-width: 180px;
    background: #2d2d2d; color: #d4d4d4;
    border: 1px solid rgba(255,255,255,.12); border-radius: 10px;
    padding: 10px 12px 8px 12px; font-family: system-ui, -apple-system, sans-serif;
    font-size: 12px; line-height: 1.45; z-index: 2147483646;
    box-shadow: 0 8px 24px rgba(0,0,0,.7);
    opacity: 0; transform: translateY(6px); pointer-events: none;
    transition: opacity .2s, transform .2s;
  }
  #mdt-assistant-bubble.shown { opacity: 1; transform: translateY(0); pointer-events: auto; }
  #mdt-assistant-bubble::after {
    content: ""; position: absolute; right: -8px; bottom: 12px;
    border: 8px solid transparent; border-left-color: #2d2d2d; border-right: 0;
  }
  #mdt-assistant-bubble .row {
    display: flex; align-items: center; justify-content: space-between;
    gap: 6px; margin-top: 6px;
  }
  #mdt-assistant-bubble .name {
    font-size: 10px; font-weight: 700; color: #c586c0; letter-spacing: .5px;
    text-transform: uppercase; margin-bottom: 4px;
  }
  #mdt-assistant-bubble button {
    background: transparent; border: 1px solid rgba(255,255,255,.16);
    color: #d4d4d4; font-size: 11px; font-family: inherit;
    border-radius: 4px; padding: 3px 9px; cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  #mdt-assistant-bubble button:hover { background: rgba(255,255,255,.06); }
  #mdt-assistant-bubble .danger { color: #f0a; border-color: rgba(240,0,170,.4); }

  @media (max-width: 480px) {
    #mdt-assistant { width: 52px; height: 60px; bottom: 70px; }
    #mdt-assistant-bubble { right: 14px; bottom: 134px; max-width: calc(100vw - 28px); }
    #mdt-assistant-bubble::after { right: 24px; bottom: -8px; border-top-color: #2d2d2d; border-bottom: 0; border-left-color: transparent; }
  }
  </style></head>
<body data-mdt-orig-pad-bottom="" style="padding-bottom: calc(1861px);">
<h1 class="title">GitHub Flavored Markdown Spec</h1>
<div class="version">Version 0.29-gfm (2019-04-06)</div>
<div class="license">
  This formal specification is based on the
  <a href="http://spec.commonmark.org">CommonMark Spec</a> by
  <a href="http://github.com/jgm">John MacFarlane</a> and licensed under
  <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
    <img style="vertical-align:middle" alt="Creative Commons BY-SA" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"></a>
</div>
<div id="watermark"></div>

<div id="TOC">
<ul>
<li><a href="#introduction"><span class="number">1</span>Introduction</a>
<ul>
<li><a href="#what-is-github-flavored-markdown-"><span class="number">1.1</span>What is GitHub Flavored Markdown?</a></li>
<li><a href="#what-is-markdown-"><span class="number">1.2</span>What is Markdown?</a></li>
<li><a href="#why-is-a-spec-needed-"><span class="number">1.3</span>Why is a spec needed?</a></li>
<li><a href="#about-this-document"><span class="number">1.4</span>About this document</a></li>
</ul>
</li>
<li><a href="#preliminaries"><span class="number">2</span>Preliminaries</a>
<ul>
<li><a href="#characters-and-lines"><span class="number">2.1</span>Characters and lines</a></li>
<li><a href="#tabs"><span class="number">2.2</span>Tabs</a></li>
<li><a href="#insecure-characters"><span class="number">2.3</span>Insecure characters</a></li>
</ul>
</li>
<li><a href="#blocks-and-inlines"><span class="number">3</span>Blocks and inlines</a>
<ul>
<li><a href="#precedence"><span class="number">3.1</span>Precedence</a></li>
<li><a href="#container-blocks-and-leaf-blocks"><span class="number">3.2</span>Container blocks and leaf blocks</a></li>
</ul>
</li>
<li><a href="#leaf-blocks"><span class="number">4</span>Leaf blocks</a>
<ul>
<li><a href="#thematic-breaks"><span class="number">4.1</span>Thematic breaks</a></li>
<li><a href="#atx-headings"><span class="number">4.2</span>ATX headings</a></li>
<li><a href="#setext-headings"><span class="number">4.3</span>Setext headings</a></li>
<li><a href="#indented-code-blocks"><span class="number">4.4</span>Indented code blocks</a></li>
<li><a href="#fenced-code-blocks"><span class="number">4.5</span>Fenced code blocks</a></li>
<li><a href="#html-blocks"><span class="number">4.6</span>HTML blocks</a></li>
<li><a href="#link-reference-definitions"><span class="number">4.7</span>Link reference definitions</a></li>
<li><a href="#paragraphs"><span class="number">4.8</span>Paragraphs</a></li>
<li><a href="#blank-lines"><span class="number">4.9</span>Blank lines</a></li>
<li><span class="extension"><a href="#tables-extension-"><span class="number">4.10</span>Tables (extension)</a></span></li>
</ul>
</li>
<li><a href="#container-blocks"><span class="number">5</span>Container blocks</a>
<ul>
<li><a href="#block-quotes"><span class="number">5.1</span>Block quotes</a></li>
<li><a href="#list-items"><span class="number">5.2</span>List items</a></li>
<li><span class="extension"><a href="#task-list-items-extension-"><span class="number">5.3</span>Task list items (extension)</a></span></li>
<li><a href="#lists"><span class="number">5.4</span>Lists</a></li>
</ul>
</li>
<li><a href="#inlines"><span class="number">6</span>Inlines</a>
<ul>
<li><a href="#backslash-escapes"><span class="number">6.1</span>Backslash escapes</a></li>
<li><a href="#entity-and-numeric-character-references"><span class="number">6.2</span>Entity and numeric character references</a></li>
<li><a href="#code-spans"><span class="number">6.3</span>Code spans</a></li>
<li><a href="#emphasis-and-strong-emphasis"><span class="number">6.4</span>Emphasis and strong emphasis</a></li>
<li><span class="extension"><a href="#strikethrough-extension-"><span class="number">6.5</span>Strikethrough (extension)</a></span></li>
<li><a href="#links"><span class="number">6.6</span>Links</a></li>
<li><a href="#images"><span class="number">6.7</span>Images</a></li>
<li><a href="#autolinks"><span class="number">6.8</span>Autolinks</a></li>
<li><span class="extension"><a href="#autolinks-extension-"><span class="number">6.9</span>Autolinks (extension)</a></span></li>
<li><a href="#raw-html"><span class="number">6.10</span>Raw HTML</a></li>
<li><span class="extension"><a href="#disallowed-raw-html-extension-"><span class="number">6.11</span>Disallowed Raw HTML (extension)</a></span></li>
<li><a href="#hard-line-breaks"><span class="number">6.12</span>Hard line breaks</a></li>
<li><a href="#soft-line-breaks"><span class="number">6.13</span>Soft line breaks</a></li>
<li><a href="#textual-content"><span class="number">6.14</span>Textual content</a></li>
</ul>
</li>
<li><a href="#appendix-a-parsing-strategy">Appendix: A parsing strategy</a>
<ul>
<li><a href="#overview">Overview</a></li>
<li><a href="#phase-1-block-structure">Phase 1: block structure</a></li>
<li><a href="#phase-2-inline-structure">Phase 2: inline structure</a></li>
</ul>
</li>
</ul>

</div>

<h1 id="introduction" href="#introduction" class="definition">
<span class="number">1</span>Introduction
</h1>
<h2 id="what-is-github-flavored-markdown-" href="#what-is-github-flavored-markdown-" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">1.1</span>What is GitHub Flavored Markdown?
</h2>
<p>GitHub Flavored Markdown, often shortened as GFM, is the dialect of Markdown
that is currently supported for user content on GitHub.com and GitHub
Enterprise.</p>
<p>This formal specification, based on the CommonMark Spec, defines the syntax and
semantics of this dialect.</p>
<p>GFM is a strict superset of CommonMark. All the features which are supported in
GitHub user content and that are not specified on the original CommonMark Spec
are hence known as <strong>extensions</strong>, and highlighted as such.</p>
<p>While GFM supports a wide range of inputs, it’s worth noting that GitHub.com
and GitHub Enterprise perform additional post-processing and sanitization after
GFM is converted to HTML to ensure security and consistency of the website.</p>
<h2 id="what-is-markdown-" href="#what-is-markdown-" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">1.2</span>What is Markdown?
</h2>
<p>Markdown is a plain text format for writing structured documents,
based on conventions for indicating formatting in email
and usenet posts.  It was developed by John Gruber (with
help from Aaron Swartz) and released in 2004 in the form of a
<a href="http://daringfireball.net/projects/markdown/syntax">syntax description</a>
and a Perl script (<code>Markdown.pl</code>) for converting Markdown to
HTML.  In the next decade, dozens of implementations were
developed in many languages.  Some extended the original
Markdown syntax with conventions for footnotes, tables, and
other document elements.  Some allowed Markdown documents to be
rendered in formats other than HTML.  Websites like Reddit,
StackOverflow, and GitHub had millions of people using Markdown.
And Markdown started to be used beyond the web, to author books,
articles, slide shows, letters, and lecture notes.</p>
<p>What distinguishes Markdown from many other lightweight markup
syntaxes, which are often easier to write, is its readability.
As Gruber writes:</p>
<blockquote>
<p>The overriding design goal for Markdown’s formatting syntax is
to make it as readable as possible. The idea is that a
Markdown-formatted document should be publishable as-is, as
plain text, without looking like it’s been marked up with tags
or formatting instructions.
(<a href="http://daringfireball.net/projects/markdown/">http://daringfireball.net/projects/markdown/</a>)</p>
</blockquote>
<p>The point can be illustrated by comparing a sample of
<a href="http://www.methods.co.nz/asciidoc/">AsciiDoc</a> with
an equivalent sample of Markdown.  Here is a sample of
AsciiDoc from the AsciiDoc manual:</p>
<pre><code>1. List item one.
+
List item one continued with a second paragraph followed by an
Indented block.
+
.................
$ ls *.sh
$ mv *.sh ~/tmp
.................
+
List item continued with a third paragraph.

2. List item two continued with an open block.
+
--
This paragraph is part of the preceding list item.

a. This list is nested and does not require explicit item
continuation.
+
This paragraph is part of the preceding list item.

b. List item b.

This paragraph belongs to item two of the outer list.
--
</code></pre>
<p>And here is the equivalent in Markdown:</p>
<pre><code>1.  List item one.

    List item one continued with a second paragraph followed by an
    Indented block.

        $ ls *.sh
        $ mv *.sh ~/tmp

    List item continued with a third paragraph.

2.  List item two continued with an open block.

    This paragraph is part of the preceding list item.

    1. This list is nested and does not require explicit item continuation.

       This paragraph is part of the preceding list item.

    2. List item b.

    This paragraph belongs to item two of the outer list.
</code></pre>
<p>The AsciiDoc version is, arguably, easier to write. You don’t need
to worry about indentation.  But the Markdown version is much easier
to read.  The nesting of list items is apparent to the eye in the
source, not just in the processed document.</p>
<h2 id="why-is-a-spec-needed-" href="#why-is-a-spec-needed-" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">1.3</span>Why is a spec needed?
</h2>
<p>John Gruber’s <a href="http://daringfireball.net/projects/markdown/syntax">canonical description of Markdown’s
syntax</a>
does not specify the syntax unambiguously.  Here are some examples of
questions it does not answer:</p>
<ol>
<li>
<p>How much indentation is needed for a sublist?  The spec says that
continuation paragraphs need to be indented four spaces, but is
not fully explicit about sublists.  It is natural to think that
they, too, must be indented four spaces, but <code>Markdown.pl</code> does
not require that.  This is hardly a “corner case,” and divergences
between implementations on this issue often lead to surprises for
users in real documents. (See <a href="http://article.gmane.org/gmane.text.markdown.general/1997">this comment by John
Gruber</a>.)</p>
</li>
<li>
<p>Is a blank line needed before a block quote or heading?
Most implementations do not require the blank line.  However,
this can lead to unexpected results in hard-wrapped text, and
also to ambiguities in parsing (note that some implementations
put the heading inside the blockquote, while others do not).
(John Gruber has also spoken <a href="http://article.gmane.org/gmane.text.markdown.general/2146">in favor of requiring the blank
lines</a>.)</p>
</li>
<li>
<p>Is a blank line needed before an indented code block?
(<code>Markdown.pl</code> requires it, but this is not mentioned in the
documentation, and some implementations do not require it.)</p>
<pre><code class="language-markdown">paragraph
    code?
</code></pre>
</li>
<li>
<p>What is the exact rule for determining when list items get
wrapped in <code>&lt;p&gt;</code> tags?  Can a list be partially “loose” and partially
“tight”?  What should we do with a list like this?</p>
<pre><code class="language-markdown">1. one

2. two
3. three
</code></pre>
<p>Or this?</p>
<pre><code class="language-markdown">1.  one
    - a

    - b
2.  two
</code></pre>
<p>(There are some relevant comments by John Gruber
<a href="http://article.gmane.org/gmane.text.markdown.general/2554">here</a>.)</p>
</li>
<li>
<p>Can list markers be indented?  Can ordered list markers be right-aligned?</p>
<pre><code class="language-markdown"> 8. item 1
 9. item 2
10. item 2a
</code></pre>
</li>
<li>
<p>Is this one list with a thematic break in its second item,
or two lists separated by a thematic break?</p>
<pre><code class="language-markdown">* a
* * * * *
* b
</code></pre>
</li>
<li>
<p>When list markers change from numbers to bullets, do we have
two lists or one?  (The Markdown syntax description suggests two,
but the perl scripts and many other implementations produce one.)</p>
<pre><code class="language-markdown">1. fee
2. fie
-  foe
-  fum
</code></pre>
</li>
<li>
<p>What are the precedence rules for the markers of inline structure?
For example, is the following a valid link, or does the code span
take precedence ?</p>
<pre><code class="language-markdown">[a backtick (`)](/url) and [another backtick (`)](/url).
</code></pre>
</li>
<li>
<p>What are the precedence rules for markers of emphasis and strong
emphasis?  For example, how should the following be parsed?</p>
<pre><code class="language-markdown">*foo *bar* baz*
</code></pre>
</li>
<li>
<p>What are the precedence rules between block-level and inline-level
structure?  For example, how should the following be parsed?</p>
<pre><code class="language-markdown">- `a long code span can contain a hyphen like this
  - and it can screw things up`
</code></pre>
</li>
<li>
<p>Can list items include section headings?  (<code>Markdown.pl</code> does not
allow this, but does allow blockquotes to include headings.)</p>
<pre><code class="language-markdown">- # Heading
</code></pre>
</li>
<li>
<p>Can list items be empty?</p>
<pre><code class="language-markdown">* a
*
* b
</code></pre>
</li>
<li>
<p>Can link references be defined inside block quotes or list items?</p>
<pre><code class="language-markdown">&gt; Blockquote [foo].
&gt;
&gt; [foo]: /url
</code></pre>
</li>
<li>
<p>If there are multiple definitions for the same reference, which takes
precedence?</p>
<pre><code class="language-markdown">[foo]: /url1
[foo]: /url2

[foo][]
</code></pre>
</li>
</ol>
<p>In the absence of a spec, early implementers consulted <code>Markdown.pl</code>
to resolve these ambiguities.  But <code>Markdown.pl</code> was quite buggy, and
gave manifestly bad results in many cases, so it was not a
satisfactory replacement for a spec.</p>
<p>Because there is no unambiguous spec, implementations have diverged
considerably.  As a result, users are often surprised to find that
a document that renders one way on one system (say, a GitHub wiki)
renders differently on another (say, converting to docbook using
pandoc).  To make matters worse, because nothing in Markdown counts
as a “syntax error,” the divergence often isn’t discovered right away.</p>
<h2 id="about-this-document" href="#about-this-document" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">1.4</span>About this document
</h2>
<p>This document attempts to specify Markdown syntax unambiguously.
It contains many examples with side-by-side Markdown and
HTML.  These are intended to double as conformance tests.  An
accompanying script <code>spec_tests.py</code> can be used to run the tests
against any Markdown program:</p>
<pre><code>python test/spec_tests.py --spec spec.txt --program PROGRAM
</code></pre>
<p>Since this document describes how Markdown is to be parsed into
an abstract syntax tree, it would have made sense to use an abstract
representation of the syntax tree instead of HTML.  But HTML is capable
of representing the structural distinctions we need to make, and the
choice of HTML for the tests makes it possible to run the tests against
an implementation without writing an abstract syntax tree renderer.</p>
<p>This document is generated from a text file, <code>spec.txt</code>, written
in Markdown with a small extension for the side-by-side tests.
The script <code>tools/makespec.py</code> can be used to convert <code>spec.txt</code> into
HTML or CommonMark (which can then be converted into other formats).</p>
<p>In the examples, the <code>→</code> character is used to represent tabs.</p>
<h1 id="preliminaries" href="#preliminaries" class="definition">
<span class="number">2</span>Preliminaries
</h1>
<h2 id="characters-and-lines" href="#characters-and-lines" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">2.1</span>Characters and lines
</h2>
<p>Any sequence of <a href="#character">characters</a> is a valid CommonMark
document.</p>
<p>A <a id="character" href="#character" class="definition">character</a> is a Unicode code point.  Although some
code points (for example, combining accents) do not correspond to
characters in an intuitive sense, all code points count as characters
for purposes of this spec.</p>
<p>This spec does not specify an encoding; it thinks of lines as composed
of <a href="#character">characters</a> rather than bytes.  A conforming parser may be limited
to a certain encoding.</p>
<p>A <a id="line" href="#line" class="definition">line</a> is a sequence of zero or more <a href="#character">characters</a>
other than newline (<code>U+000A</code>) or carriage return (<code>U+000D</code>),
followed by a <a href="#line-ending">line ending</a> or by the end of file.</p>
<p>A <a id="line-ending" href="#line-ending" class="definition">line ending</a> is a newline (<code>U+000A</code>), a carriage return
(<code>U+000D</code>) not followed by a newline, or a carriage return and a
following newline.</p>
<p>A line containing no characters, or a line containing only spaces
(<code>U+0020</code>) or tabs (<code>U+0009</code>), is called a <a id="blank-line" href="#blank-line" class="definition">blank line</a>.</p>
<p>The following definitions of character classes will be used in this spec:</p>
<p>A <a id="whitespace-character" href="#whitespace-character" class="definition">whitespace character</a> is a space
(<code>U+0020</code>), tab (<code>U+0009</code>), newline (<code>U+000A</code>), line tabulation (<code>U+000B</code>),
form feed (<code>U+000C</code>), or carriage return (<code>U+000D</code>).</p>
<p><a id="whitespace" href="#whitespace" class="definition">Whitespace</a> is a sequence of one or more <a href="#whitespace-character">whitespace
characters</a>.</p>
<p>A <a id="unicode-whitespace-character" href="#unicode-whitespace-character" class="definition">Unicode whitespace character</a> is
any code point in the Unicode <code>Zs</code> general category, or a tab (<code>U+0009</code>),
carriage return (<code>U+000D</code>), newline (<code>U+000A</code>), or form feed
(<code>U+000C</code>).</p>
<p><a id="unicode-whitespace" href="#unicode-whitespace" class="definition">Unicode whitespace</a> is a sequence of one
or more <a href="#unicode-whitespace-character">Unicode whitespace characters</a>.</p>
<p>A <a id="space" href="#space" class="definition">space</a> is <code>U+0020</code>.</p>
<p>A <a id="non-whitespace-character" href="#non-whitespace-character" class="definition">non-whitespace character</a> is any character
that is not a <a href="#whitespace-character">whitespace character</a>.</p>
<p>An <a id="ascii-punctuation-character" href="#ascii-punctuation-character" class="definition">ASCII punctuation character</a>
is <code>!</code>, <code>"</code>, <code>#</code>, <code>$</code>, <code>%</code>, <code>&amp;</code>, <code>'</code>, <code>(</code>, <code>)</code>,
<code>*</code>, <code>+</code>, <code>,</code>, <code>-</code>, <code>.</code>, <code>/</code> (U+0021–2F),
<code>:</code>, <code>;</code>, <code>&lt;</code>, <code>=</code>, <code>&gt;</code>, <code>?</code>, <code>@</code> (U+003A–0040),
<code>[</code>, <code>\</code>, <code>]</code>, <code>^</code>, <code>_</code>, <code>`</code> (U+005B–0060),
<code>{</code>, <code>|</code>, <code>}</code>, or <code>~</code> (U+007B–007E).</p>
<p>A <a id="punctuation-character" href="#punctuation-character" class="definition">punctuation character</a> is an <a href="#ascii-punctuation-character">ASCII
punctuation character</a> or anything in
the general Unicode categories  <code>Pc</code>, <code>Pd</code>, <code>Pe</code>, <code>Pf</code>, <code>Pi</code>, <code>Po</code>, or <code>Ps</code>.</p>
<h2 id="tabs" href="#tabs" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">2.2</span>Tabs
</h2>
<p>Tabs in lines are not expanded to <a href="#space">spaces</a>.  However,
in contexts where whitespace helps to define block structure,
tabs behave as if they were replaced by spaces with a tab stop
of 4 characters.</p>
<p>Thus, for example, a tab can be used instead of four spaces
in an indented code block.  (Note, however, that internal
tabs are passed through as literal tabs, not expanded to
spaces.)</p>
<div class="example" id="example-1">
<div class="examplenum">
<a href="#example-1">Example 1</a>
</div>
<div class="column">
<pre><code class="language-markdown">→foo→baz→→bim
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;foo→baz→→bim
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-2">
<div class="examplenum">
<a href="#example-2">Example 2</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>→foo→baz→→bim
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;foo→baz→→bim
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-3">
<div class="examplenum">
<a href="#example-3">Example 3</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>a→a
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>ὐ→a
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;a→a
ὐ→a
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>In the following example, a continuation paragraph of a list
item is indented with a tab; this has exactly the same effect
as indentation with four spaces would:</p>
<div class="example" id="example-4">
<div class="examplenum">
<a href="#example-4">Example 4</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>foo

→bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-5">
<div class="examplenum">
<a href="#example-5">Example 5</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo

→→bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;<span class="space"> </span><span class="space"> </span>bar
&lt;/code&gt;&lt;/pre&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>Normally the <code>&gt;</code> that begins a block quote may be followed
optionally by a space, which is not considered part of the
content.  In the following case <code>&gt;</code> is followed by a tab,
which is treated as if it were expanded into three spaces.
Since one of these spaces is considered part of the
delimiter, <code>foo</code> is considered to be indented six spaces
inside the block quote context, so we get an indented
code block starting with two spaces.</p>
<div class="example" id="example-6">
<div class="examplenum">
<a href="#example-6">Example 6</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;→→foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;pre&gt;&lt;code&gt;<span class="space"> </span><span class="space"> </span>foo
&lt;/code&gt;&lt;/pre&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-7">
<div class="examplenum">
<a href="#example-7">Example 7</a>
</div>
<div class="column">
<pre><code class="language-markdown">-→→foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;pre&gt;&lt;code&gt;<span class="space"> </span><span class="space"> </span>foo
&lt;/code&gt;&lt;/pre&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-8">
<div class="examplenum">
<a href="#example-8">Example 8</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo
→bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;foo
bar
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-9">
<div class="examplenum">
<a href="#example-9">Example 9</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span>-<span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>bar
→<span class="space"> </span>-<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo
&lt;ul&gt;
&lt;li&gt;bar
&lt;ul&gt;
&lt;li&gt;baz&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-10">
<div class="examplenum">
<a href="#example-10">Example 10</a>
</div>
<div class="column">
<pre><code class="language-markdown">#→Foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;Foo&lt;/h1&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-11">
<div class="examplenum">
<a href="#example-11">Example 11</a>
</div>
<div class="column">
<pre><code class="language-markdown">*→*→*→
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<h2 id="insecure-characters" href="#insecure-characters" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">2.3</span>Insecure characters
</h2>
<p>For security reasons, the Unicode character <code>U+0000</code> must be replaced
with the REPLACEMENT CHARACTER (<code>U+FFFD</code>).</p>
<h1 id="blocks-and-inlines" href="#blocks-and-inlines" class="definition">
<span class="number">3</span>Blocks and inlines
</h1>
<p>We can think of a document as a sequence of
<a id="blocks" href="#blocks" class="definition">blocks</a>—structural elements like paragraphs, block
quotations, lists, headings, rules, and code blocks.  Some blocks (like
block quotes and list items) contain other blocks; others (like
headings and paragraphs) contain <a id="inline" href="#inline" class="definition">inline</a> content—text,
links, emphasized text, images, code spans, and so on.</p>
<h2 id="precedence" href="#precedence" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">3.1</span>Precedence
</h2>
<p>Indicators of block structure always take precedence over indicators
of inline structure.  So, for example, the following is a list with
two items, not a list with one item containing a code span:</p>
<div class="example" id="example-12">
<div class="examplenum">
<a href="#example-12">Example 12</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>`one
-<span class="space"> </span>two`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;`one&lt;/li&gt;
&lt;li&gt;two`&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>This means that parsing can proceed in two steps:  first, the block
structure of the document can be discerned; second, text lines inside
paragraphs, headings, and other block constructs can be parsed for inline
structure.  The second step requires information about link reference
definitions that will be available only at the end of the first
step.  Note that the first step requires processing lines in sequence,
but the second can be parallelized, since the inline parsing of
one block element does not affect the inline parsing of any other.</p>
<h2 id="container-blocks-and-leaf-blocks" href="#container-blocks-and-leaf-blocks" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">3.2</span>Container blocks and leaf blocks
</h2>
<p>We can divide blocks into two types:
<a id="container-blocks" href="#container-blocks" class="definition">container blocks</a>,
which can contain other blocks, and <a id="leaf-blocks" href="#leaf-blocks" class="definition">leaf blocks</a>,
which cannot.</p>
<h1 id="leaf-blocks" href="#leaf-blocks" class="definition">
<span class="number">4</span>Leaf blocks
</h1>
<p>This section describes the different kinds of leaf block that make up a
Markdown document.</p>
<h2 id="thematic-breaks" href="#thematic-breaks" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">4.1</span>Thematic breaks
</h2>
<p>A line consisting of 0-3 spaces of indentation, followed by a sequence
of three or more matching <code>-</code>, <code>_</code>, or <code>*</code> characters, each followed
optionally by any number of spaces or tabs, forms a
<a id="thematic-break" href="#thematic-break" class="definition">thematic break</a>.</p>
<div class="example" id="example-13">
<div class="examplenum">
<a href="#example-13">Example 13</a>
</div>
<div class="column">
<pre><code class="language-markdown">***
---
___
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;hr<span class="space"> </span>/&gt;
&lt;hr<span class="space"> </span>/&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<p>Wrong characters:</p>
<div class="example" id="example-14">
<div class="examplenum">
<a href="#example-14">Example 14</a>
</div>
<div class="column">
<pre><code class="language-markdown">+++
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;+++&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-15">
<div class="examplenum">
<a href="#example-15">Example 15</a>
</div>
<div class="column">
<pre><code class="language-markdown">===
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;===&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Not enough characters:</p>
<div class="example" id="example-16">
<div class="examplenum">
<a href="#example-16">Example 16</a>
</div>
<div class="column">
<pre><code class="language-markdown">--
**
__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;--
**
__&lt;/p&gt;
</code></pre>
</div>
</div>
<p>One to three spaces indent are allowed:</p>
<div class="example" id="example-17">
<div class="examplenum">
<a href="#example-17">Example 17</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span>***
<span class="space"> </span><span class="space"> </span>***
<span class="space"> </span><span class="space"> </span><span class="space"> </span>***
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;hr<span class="space"> </span>/&gt;
&lt;hr<span class="space"> </span>/&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<p>Four spaces is too many:</p>
<div class="example" id="example-18">
<div class="examplenum">
<a href="#example-18">Example 18</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>***
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;***
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-19">
<div class="examplenum">
<a href="#example-19">Example 19</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>***
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo
***&lt;/p&gt;
</code></pre>
</div>
</div>
<p>More than three characters may be used:</p>
<div class="example" id="example-20">
<div class="examplenum">
<a href="#example-20">Example 20</a>
</div>
<div class="column">
<pre><code class="language-markdown">_____________________________________
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<p>Spaces are allowed between the characters:</p>
<div class="example" id="example-21">
<div class="examplenum">
<a href="#example-21">Example 21</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span>-<span class="space"> </span>-<span class="space"> </span>-
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-22">
<div class="examplenum">
<a href="#example-22">Example 22</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span>**<span class="space"> </span><span class="space"> </span>*<span class="space"> </span>**<span class="space"> </span>*<span class="space"> </span>**<span class="space"> </span>*<span class="space"> </span>**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-23">
<div class="examplenum">
<a href="#example-23">Example 23</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>-
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<p>Spaces are allowed at the end:</p>
<div class="example" id="example-24">
<div class="examplenum">
<a href="#example-24">Example 24</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>-<span class="space"> </span>-<span class="space"> </span>-<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<p>However, no other characters may occur in the line:</p>
<div class="example" id="example-25">
<div class="examplenum">
<a href="#example-25">Example 25</a>
</div>
<div class="column">
<pre><code class="language-markdown">_<span class="space"> </span>_<span class="space"> </span>_<span class="space"> </span>_<span class="space"> </span>a

a------

---a---
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;_<span class="space"> </span>_<span class="space"> </span>_<span class="space"> </span>_<span class="space"> </span>a&lt;/p&gt;
&lt;p&gt;a------&lt;/p&gt;
&lt;p&gt;---a---&lt;/p&gt;
</code></pre>
</div>
</div>
<p>It is required that all of the <a href="#non-whitespace-character">non-whitespace characters</a> be the same.
So, this is not a thematic break:</p>
<div class="example" id="example-26">
<div class="examplenum">
<a href="#example-26">Example 26</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span>*-*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;-&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Thematic breaks do not need blank lines before or after:</p>
<div class="example" id="example-27">
<div class="examplenum">
<a href="#example-27">Example 27</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo
***
-<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;/ul&gt;
&lt;hr<span class="space"> </span>/&gt;
&lt;ul&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>Thematic breaks can interrupt a paragraph:</p>
<div class="example" id="example-28">
<div class="examplenum">
<a href="#example-28">Example 28</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
***
bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo&lt;/p&gt;
&lt;hr<span class="space"> </span>/&gt;
&lt;p&gt;bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>If a line of dashes that meets the above conditions for being a
thematic break could also be interpreted as the underline of a <a href="#setext-heading">setext
heading</a>, the interpretation as a
<a href="#setext-heading">setext heading</a> takes precedence. Thus, for example,
this is a setext heading, not a paragraph followed by a thematic break:</p>
<div class="example" id="example-29">
<div class="examplenum">
<a href="#example-29">Example 29</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
---
bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;Foo&lt;/h2&gt;
&lt;p&gt;bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>When both a thematic break and a list item are possible
interpretations of a line, the thematic break takes precedence:</p>
<div class="example" id="example-30">
<div class="examplenum">
<a href="#example-30">Example 30</a>
</div>
<div class="column">
<pre><code class="language-markdown">*<span class="space"> </span>Foo
*<span class="space"> </span>*<span class="space"> </span>*
*<span class="space"> </span>Bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;Foo&lt;/li&gt;
&lt;/ul&gt;
&lt;hr<span class="space"> </span>/&gt;
&lt;ul&gt;
&lt;li&gt;Bar&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>If you want a thematic break in a list item, use a different bullet:</p>
<div class="example" id="example-31">
<div class="examplenum">
<a href="#example-31">Example 31</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>Foo
-<span class="space"> </span>*<span class="space"> </span>*<span class="space"> </span>*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;Foo&lt;/li&gt;
&lt;li&gt;
&lt;hr<span class="space"> </span>/&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<h2 id="atx-headings" href="#atx-headings" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">4.2</span>ATX headings
</h2>
<p>An <a id="atx-heading" href="#atx-heading" class="definition">ATX heading</a>
consists of a string of characters, parsed as inline content, between an
opening sequence of 1–6 unescaped <code>#</code> characters and an optional
closing sequence of any number of unescaped <code>#</code> characters.
The opening sequence of <code>#</code> characters must be followed by a
<a href="#space">space</a> or by the end of line. The optional closing sequence of <code>#</code>s must be
preceded by a <a href="#space">space</a> and may be followed by spaces only.  The opening
<code>#</code> character may be indented 0-3 spaces.  The raw contents of the
heading are stripped of leading and trailing spaces before being parsed
as inline content.  The heading level is equal to the number of <code>#</code>
characters in the opening sequence.</p>
<p>Simple headings:</p>
<div class="example" id="example-32">
<div class="examplenum">
<a href="#example-32">Example 32</a>
</div>
<div class="column">
<pre><code class="language-markdown">#<span class="space"> </span>foo
##<span class="space"> </span>foo
###<span class="space"> </span>foo
####<span class="space"> </span>foo
#####<span class="space"> </span>foo
######<span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;foo&lt;/h1&gt;
&lt;h2&gt;foo&lt;/h2&gt;
&lt;h3&gt;foo&lt;/h3&gt;
&lt;h4&gt;foo&lt;/h4&gt;
&lt;h5&gt;foo&lt;/h5&gt;
&lt;h6&gt;foo&lt;/h6&gt;
</code></pre>
</div>
</div>
<p>More than six <code>#</code> characters is not a heading:</p>
<div class="example" id="example-33">
<div class="examplenum">
<a href="#example-33">Example 33</a>
</div>
<div class="column">
<pre><code class="language-markdown">#######<span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;#######<span class="space"> </span>foo&lt;/p&gt;
</code></pre>
</div>
</div>
<p>At least one space is required between the <code>#</code> characters and the
heading’s contents, unless the heading is empty.  Note that many
implementations currently do not require the space.  However, the
space was required by the
<a href="http://www.aaronsw.com/2002/atx/atx.py">original ATX implementation</a>,
and it helps prevent things like the following from being parsed as
headings:</p>
<div class="example" id="example-34">
<div class="examplenum">
<a href="#example-34">Example 34</a>
</div>
<div class="column">
<pre><code class="language-markdown">#5<span class="space"> </span>bolt

#hashtag
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;#5<span class="space"> </span>bolt&lt;/p&gt;
&lt;p&gt;#hashtag&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not a heading, because the first <code>#</code> is escaped:</p>
<div class="example" id="example-35">
<div class="examplenum">
<a href="#example-35">Example 35</a>
</div>
<div class="column">
<pre><code class="language-markdown">\##<span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;##<span class="space"> </span>foo&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Contents are parsed as inlines:</p>
<div class="example" id="example-36">
<div class="examplenum">
<a href="#example-36">Example 36</a>
</div>
<div class="column">
<pre><code class="language-markdown">#<span class="space"> </span>foo<span class="space"> </span>*bar*<span class="space"> </span>\*baz\*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;foo<span class="space"> </span>&lt;em&gt;bar&lt;/em&gt;<span class="space"> </span>*baz*&lt;/h1&gt;
</code></pre>
</div>
</div>
<p>Leading and trailing <a href="#whitespace">whitespace</a> is ignored in parsing inline content:</p>
<div class="example" id="example-37">
<div class="examplenum">
<a href="#example-37">Example 37</a>
</div>
<div class="column">
<pre><code class="language-markdown">#<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;foo&lt;/h1&gt;
</code></pre>
</div>
</div>
<p>One to three spaces indentation are allowed:</p>
<div class="example" id="example-38">
<div class="examplenum">
<a href="#example-38">Example 38</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span>###<span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span>##<span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span>#<span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h3&gt;foo&lt;/h3&gt;
&lt;h2&gt;foo&lt;/h2&gt;
&lt;h1&gt;foo&lt;/h1&gt;
</code></pre>
</div>
</div>
<p>Four spaces are too much:</p>
<div class="example" id="example-39">
<div class="examplenum">
<a href="#example-39">Example 39</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>#<span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;#<span class="space"> </span>foo
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-40">
<div class="examplenum">
<a href="#example-40">Example 40</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>#<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo
#<span class="space"> </span>bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A closing sequence of <code>#</code> characters is optional:</p>
<div class="example" id="example-41">
<div class="examplenum">
<a href="#example-41">Example 41</a>
</div>
<div class="column">
<pre><code class="language-markdown">##<span class="space"> </span>foo<span class="space"> </span>##
<span class="space"> </span><span class="space"> </span>###<span class="space"> </span><span class="space"> </span><span class="space"> </span>bar<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>###
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;foo&lt;/h2&gt;
&lt;h3&gt;bar&lt;/h3&gt;
</code></pre>
</div>
</div>
<p>It need not be the same length as the opening sequence:</p>
<div class="example" id="example-42">
<div class="examplenum">
<a href="#example-42">Example 42</a>
</div>
<div class="column">
<pre><code class="language-markdown">#<span class="space"> </span>foo<span class="space"> </span>##################################
#####<span class="space"> </span>foo<span class="space"> </span>##
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;foo&lt;/h1&gt;
&lt;h5&gt;foo&lt;/h5&gt;
</code></pre>
</div>
</div>
<p>Spaces are allowed after the closing sequence:</p>
<div class="example" id="example-43">
<div class="examplenum">
<a href="#example-43">Example 43</a>
</div>
<div class="column">
<pre><code class="language-markdown">###<span class="space"> </span>foo<span class="space"> </span>###<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h3&gt;foo&lt;/h3&gt;
</code></pre>
</div>
</div>
<p>A sequence of <code>#</code> characters with anything but <a href="#space">spaces</a> following it
is not a closing sequence, but counts as part of the contents of the
heading:</p>
<div class="example" id="example-44">
<div class="examplenum">
<a href="#example-44">Example 44</a>
</div>
<div class="column">
<pre><code class="language-markdown">###<span class="space"> </span>foo<span class="space"> </span>###<span class="space"> </span>b
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h3&gt;foo<span class="space"> </span>###<span class="space"> </span>b&lt;/h3&gt;
</code></pre>
</div>
</div>
<p>The closing sequence must be preceded by a space:</p>
<div class="example" id="example-45">
<div class="examplenum">
<a href="#example-45">Example 45</a>
</div>
<div class="column">
<pre><code class="language-markdown">#<span class="space"> </span>foo#
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;foo#&lt;/h1&gt;
</code></pre>
</div>
</div>
<p>Backslash-escaped <code>#</code> characters do not count as part
of the closing sequence:</p>
<div class="example" id="example-46">
<div class="examplenum">
<a href="#example-46">Example 46</a>
</div>
<div class="column">
<pre><code class="language-markdown">###<span class="space"> </span>foo<span class="space"> </span>\###
##<span class="space"> </span>foo<span class="space"> </span>#\##
#<span class="space"> </span>foo<span class="space"> </span>\#
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h3&gt;foo<span class="space"> </span>###&lt;/h3&gt;
&lt;h2&gt;foo<span class="space"> </span>###&lt;/h2&gt;
&lt;h1&gt;foo<span class="space"> </span>#&lt;/h1&gt;
</code></pre>
</div>
</div>
<p>ATX headings need not be separated from surrounding content by blank
lines, and they can interrupt paragraphs:</p>
<div class="example" id="example-47">
<div class="examplenum">
<a href="#example-47">Example 47</a>
</div>
<div class="column">
<pre><code class="language-markdown">****
##<span class="space"> </span>foo
****
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;hr<span class="space"> </span>/&gt;
&lt;h2&gt;foo&lt;/h2&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-48">
<div class="examplenum">
<a href="#example-48">Example 48</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo<span class="space"> </span>bar
#<span class="space"> </span>baz
Bar<span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo<span class="space"> </span>bar&lt;/p&gt;
&lt;h1&gt;baz&lt;/h1&gt;
&lt;p&gt;Bar<span class="space"> </span>foo&lt;/p&gt;
</code></pre>
</div>
</div>
<p>ATX headings can be empty:</p>
<div class="example" id="example-49">
<div class="examplenum">
<a href="#example-49">Example 49</a>
</div>
<div class="column">
<pre><code class="language-markdown">##<span class="space"> </span>
#
###<span class="space"> </span>###
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;&lt;/h2&gt;
&lt;h1&gt;&lt;/h1&gt;
&lt;h3&gt;&lt;/h3&gt;
</code></pre>
</div>
</div>
<h2 id="setext-headings" href="#setext-headings" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">4.3</span>Setext headings
</h2>
<p>A <a id="setext-heading" href="#setext-heading" class="definition">setext heading</a> consists of one or more
lines of text, each containing at least one <a href="#non-whitespace-character">non-whitespace
character</a>, with no more than 3 spaces indentation, followed by
a <a href="#setext-heading-underline">setext heading underline</a>.  The lines of text must be such
that, were they not followed by the setext heading underline,
they would be interpreted as a paragraph:  they cannot be
interpretable as a <a href="#code-fence">code fence</a>, <a href="#atx-headings">ATX heading</a>,
<a href="#block-quotes">block quote</a>, <a href="#thematic-break">thematic break</a>,
<a href="#list-items">list item</a>, or <a href="#html-blocks">HTML block</a>.</p>
<p>A <a id="setext-heading-underline" href="#setext-heading-underline" class="definition">setext heading underline</a> is a sequence of
<code>=</code> characters or a sequence of <code>-</code> characters, with no more than 3
spaces indentation and any number of trailing spaces.  If a line
containing a single <code>-</code> can be interpreted as an
empty <a href="#list-items">list items</a>, it should be interpreted this way
and not as a <a href="#setext-heading-underline">setext heading underline</a>.</p>
<p>The heading is a level 1 heading if <code>=</code> characters are used in
the <a href="#setext-heading-underline">setext heading underline</a>, and a level 2 heading if <code>-</code>
characters are used.  The contents of the heading are the result
of parsing the preceding lines of text as CommonMark inline
content.</p>
<p>In general, a setext heading need not be preceded or followed by a
blank line.  However, it cannot interrupt a paragraph, so when a
setext heading comes after a paragraph, a blank line is needed between
them.</p>
<p>Simple examples:</p>
<div class="example" id="example-50">
<div class="examplenum">
<a href="#example-50">Example 50</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo<span class="space"> </span>*bar*
=========

Foo<span class="space"> </span>*bar*
---------
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;Foo<span class="space"> </span>&lt;em&gt;bar&lt;/em&gt;&lt;/h1&gt;
&lt;h2&gt;Foo<span class="space"> </span>&lt;em&gt;bar&lt;/em&gt;&lt;/h2&gt;
</code></pre>
</div>
</div>
<p>The content of the header may span more than one line:</p>
<div class="example" id="example-51">
<div class="examplenum">
<a href="#example-51">Example 51</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo<span class="space"> </span>*bar
baz*
====
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;Foo<span class="space"> </span>&lt;em&gt;bar
baz&lt;/em&gt;&lt;/h1&gt;
</code></pre>
</div>
</div>
<p>The contents are the result of parsing the headings’s raw
content as inlines.  The heading’s raw content is formed by
concatenating the lines and removing initial and final
<a href="#whitespace">whitespace</a>.</p>
<div class="example" id="example-52">
<div class="examplenum">
<a href="#example-52">Example 52</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>Foo<span class="space"> </span>*bar
baz*→
====
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;Foo<span class="space"> </span>&lt;em&gt;bar
baz&lt;/em&gt;&lt;/h1&gt;
</code></pre>
</div>
</div>
<p>The underlining can be any length:</p>
<div class="example" id="example-53">
<div class="examplenum">
<a href="#example-53">Example 53</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
-------------------------

Foo
=
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;Foo&lt;/h2&gt;
&lt;h1&gt;Foo&lt;/h1&gt;
</code></pre>
</div>
</div>
<p>The heading content can be indented up to three spaces, and need
not line up with the underlining:</p>
<div class="example" id="example-54">
<div class="examplenum">
<a href="#example-54">Example 54</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span>Foo
---

<span class="space"> </span><span class="space"> </span>Foo
-----

<span class="space"> </span><span class="space"> </span>Foo
<span class="space"> </span><span class="space"> </span>===
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;Foo&lt;/h2&gt;
&lt;h2&gt;Foo&lt;/h2&gt;
&lt;h1&gt;Foo&lt;/h1&gt;
</code></pre>
</div>
</div>
<p>Four spaces indent is too much:</p>
<div class="example" id="example-55">
<div class="examplenum">
<a href="#example-55">Example 55</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>Foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>---

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>Foo
---
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;Foo
---

Foo
&lt;/code&gt;&lt;/pre&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<p>The setext heading underline can be indented up to three spaces, and
may have trailing spaces:</p>
<div class="example" id="example-56">
<div class="examplenum">
<a href="#example-56">Example 56</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span>----<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;Foo&lt;/h2&gt;
</code></pre>
</div>
</div>
<p>Four spaces is too much:</p>
<div class="example" id="example-57">
<div class="examplenum">
<a href="#example-57">Example 57</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>---
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo
---&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The setext heading underline cannot contain internal spaces:</p>
<div class="example" id="example-58">
<div class="examplenum">
<a href="#example-58">Example 58</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
=<span class="space"> </span>=

Foo
---<span class="space"> </span>-
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo
=<span class="space"> </span>=&lt;/p&gt;
&lt;p&gt;Foo&lt;/p&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<p>Trailing spaces in the content line do not cause a line break:</p>
<div class="example" id="example-59">
<div class="examplenum">
<a href="#example-59">Example 59</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo<span class="space"> </span><span class="space"> </span>
-----
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;Foo&lt;/h2&gt;
</code></pre>
</div>
</div>
<p>Nor does a backslash at the end:</p>
<div class="example" id="example-60">
<div class="examplenum">
<a href="#example-60">Example 60</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo\
----
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;Foo\&lt;/h2&gt;
</code></pre>
</div>
</div>
<p>Since indicators of block structure take precedence over
indicators of inline structure, the following are setext headings:</p>
<div class="example" id="example-61">
<div class="examplenum">
<a href="#example-61">Example 61</a>
</div>
<div class="column">
<pre><code class="language-markdown">`Foo
----
`

&lt;a<span class="space"> </span>title="a<span class="space"> </span>lot
---
of<span class="space"> </span>dashes"/&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;`Foo&lt;/h2&gt;
&lt;p&gt;`&lt;/p&gt;
&lt;h2&gt;&amp;lt;a<span class="space"> </span>title=&amp;quot;a<span class="space"> </span>lot&lt;/h2&gt;
&lt;p&gt;of<span class="space"> </span>dashes&amp;quot;/&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The setext heading underline cannot be a <a href="#lazy-continuation-line">lazy continuation
line</a> in a list item or block quote:</p>
<div class="example" id="example-62">
<div class="examplenum">
<a href="#example-62">Example 62</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>Foo
---
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;Foo&lt;/p&gt;
&lt;/blockquote&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-63">
<div class="examplenum">
<a href="#example-63">Example 63</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>foo
bar
===
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;foo
bar
===&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-64">
<div class="examplenum">
<a href="#example-64">Example 64</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>Foo
---
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;Foo&lt;/li&gt;
&lt;/ul&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<p>A blank line is needed between a paragraph and a following
setext heading, since otherwise the paragraph becomes part
of the heading’s content:</p>
<div class="example" id="example-65">
<div class="examplenum">
<a href="#example-65">Example 65</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
Bar
---
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;Foo
Bar&lt;/h2&gt;
</code></pre>
</div>
</div>
<p>But in general a blank line is not required before or after
setext headings:</p>
<div class="example" id="example-66">
<div class="examplenum">
<a href="#example-66">Example 66</a>
</div>
<div class="column">
<pre><code class="language-markdown">---
Foo
---
Bar
---
Baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;hr<span class="space"> </span>/&gt;
&lt;h2&gt;Foo&lt;/h2&gt;
&lt;h2&gt;Bar&lt;/h2&gt;
&lt;p&gt;Baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Setext headings cannot be empty:</p>
<div class="example" id="example-67">
<div class="examplenum">
<a href="#example-67">Example 67</a>
</div>
<div class="column">
<pre><code class="language-markdown">
====
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;====&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Setext heading text lines must not be interpretable as block
constructs other than paragraphs.  So, the line of dashes
in these examples gets interpreted as a thematic break:</p>
<div class="example" id="example-68">
<div class="examplenum">
<a href="#example-68">Example 68</a>
</div>
<div class="column">
<pre><code class="language-markdown">---
---
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;hr<span class="space"> </span>/&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-69">
<div class="examplenum">
<a href="#example-69">Example 69</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo
-----
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;/ul&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-70">
<div class="examplenum">
<a href="#example-70">Example 70</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo
---
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;foo
&lt;/code&gt;&lt;/pre&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-71">
<div class="examplenum">
<a href="#example-71">Example 71</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>foo
-----
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;/blockquote&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<p>If you want a heading with <code>&gt; foo</code> as its literal text, you can
use backslash escapes:</p>
<div class="example" id="example-72">
<div class="examplenum">
<a href="#example-72">Example 72</a>
</div>
<div class="column">
<pre><code class="language-markdown">\&gt;<span class="space"> </span>foo
------
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;&amp;gt;<span class="space"> </span>foo&lt;/h2&gt;
</code></pre>
</div>
</div>
<p><strong>Compatibility note:</strong>  Most existing Markdown implementations
do not allow the text of setext headings to span multiple lines.
But there is no consensus about how to interpret</p>
<pre><code class="language-markdown">Foo
bar
---
baz
</code></pre>
<p>One can find four different interpretations:</p>
<ol>
<li>paragraph “Foo”, heading “bar”, paragraph “baz”</li>
<li>paragraph “Foo bar”, thematic break, paragraph “baz”</li>
<li>paragraph “Foo bar — baz”</li>
<li>heading “Foo bar”, paragraph “baz”</li>
</ol>
<p>We find interpretation 4 most natural, and interpretation 4
increases the expressive power of CommonMark, by allowing
multiline headings.  Authors who want interpretation 1 can
put a blank line after the first paragraph:</p>
<div class="example" id="example-73">
<div class="examplenum">
<a href="#example-73">Example 73</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo

bar
---
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo&lt;/p&gt;
&lt;h2&gt;bar&lt;/h2&gt;
&lt;p&gt;baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Authors who want interpretation 2 can put blank lines around
the thematic break,</p>
<div class="example" id="example-74">
<div class="examplenum">
<a href="#example-74">Example 74</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
bar

---

baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo
bar&lt;/p&gt;
&lt;hr<span class="space"> </span>/&gt;
&lt;p&gt;baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>or use a thematic break that cannot count as a <a href="#setext-heading-underline">setext heading
underline</a>, such as</p>
<div class="example" id="example-75">
<div class="examplenum">
<a href="#example-75">Example 75</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
bar
*<span class="space"> </span>*<span class="space"> </span>*
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo
bar&lt;/p&gt;
&lt;hr<span class="space"> </span>/&gt;
&lt;p&gt;baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Authors who want interpretation 3 can use backslash escapes:</p>
<div class="example" id="example-76">
<div class="examplenum">
<a href="#example-76">Example 76</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
bar
\---
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo
bar
---
baz&lt;/p&gt;
</code></pre>
</div>
</div>
<h2 id="indented-code-blocks" href="#indented-code-blocks" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">4.4</span>Indented code blocks
</h2>
<p>An <a id="indented-code-block" href="#indented-code-block" class="definition">indented code block</a> is composed of one or more
<a href="#indented-chunk">indented chunks</a> separated by blank lines.
An <a id="indented-chunk" href="#indented-chunk" class="definition">indented chunk</a> is a sequence of non-blank lines,
each indented four or more spaces. The contents of the code block are
the literal contents of the lines, including trailing
<a href="#line-ending">line endings</a>, minus four spaces of indentation.
An indented code block has no <a href="#info-string">info string</a>.</p>
<p>An indented code block cannot interrupt a paragraph, so there must be
a blank line between a paragraph and a following indented code block.
(A blank line is not needed, however, between a code block and a following
paragraph.)</p>
<div class="example" id="example-77">
<div class="examplenum">
<a href="#example-77">Example 77</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>a<span class="space"> </span>simple
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code<span class="space"> </span>block
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;a<span class="space"> </span>simple
<span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code<span class="space"> </span>block
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>If there is any ambiguity between an interpretation of indentation
as a code block and as indicating that material belongs to a <a href="#list-items">list
item</a>, the list item interpretation takes precedence:</p>
<div class="example" id="example-78">
<div class="examplenum">
<a href="#example-78">Example 78</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>foo

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-79">
<div class="examplenum">
<a href="#example-79">Example 79</a>
</div>
<div class="column">
<pre><code class="language-markdown">1.<span class="space"> </span><span class="space"> </span>foo

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>The contents of a code block are literal text, and do not get parsed
as Markdown:</p>
<div class="example" id="example-80">
<div class="examplenum">
<a href="#example-80">Example 80</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&lt;a/&gt;
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>*hi*

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>one
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;&amp;lt;a/&amp;gt;
*hi*

-<span class="space"> </span>one
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Here we have three chunks separated by blank lines:</p>
<div class="example" id="example-81">
<div class="examplenum">
<a href="#example-81">Example 81</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>chunk1

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>chunk2
<span class="space"> </span><span class="space"> </span>
<span class="space"> </span>
<span class="space"> </span>
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>chunk3
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;chunk1

chunk2



chunk3
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Any initial spaces beyond four will be included in the content, even
in interior blank lines:</p>
<div class="example" id="example-82">
<div class="examplenum">
<a href="#example-82">Example 82</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>chunk1
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>chunk2
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;chunk1
<span class="space"> </span><span class="space"> </span>
<span class="space"> </span><span class="space"> </span>chunk2
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>An indented code block cannot interrupt a paragraph.  (This
allows hanging indents and the like.)</p>
<div class="example" id="example-83">
<div class="examplenum">
<a href="#example-83">Example 83</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo
bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>However, any non-blank line with fewer than four leading spaces ends
the code block immediately.  So a paragraph may occur immediately
after indented code:</p>
<div class="example" id="example-84">
<div class="examplenum">
<a href="#example-84">Example 84</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo
bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;foo
&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>And indented code can occur immediately before and after other kinds of
blocks:</p>
<div class="example" id="example-85">
<div class="examplenum">
<a href="#example-85">Example 85</a>
</div>
<div class="column">
<pre><code class="language-markdown">#<span class="space"> </span>Heading
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo
Heading
------
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo
----
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;Heading&lt;/h1&gt;
&lt;pre&gt;&lt;code&gt;foo
&lt;/code&gt;&lt;/pre&gt;
&lt;h2&gt;Heading&lt;/h2&gt;
&lt;pre&gt;&lt;code&gt;foo
&lt;/code&gt;&lt;/pre&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<p>The first line can be indented more than four spaces:</p>
<div class="example" id="example-86">
<div class="examplenum">
<a href="#example-86">Example 86</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo
bar
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Blank lines preceding or following an indented code block
are not included in it:</p>
<div class="example" id="example-87">
<div class="examplenum">
<a href="#example-87">Example 87</a>
</div>
<div class="column">
<pre><code class="language-markdown">
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;foo
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Trailing spaces are included in the code block’s content:</p>
<div class="example" id="example-88">
<div class="examplenum">
<a href="#example-88">Example 88</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo<span class="space"> </span><span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;foo<span class="space"> </span><span class="space"> </span>
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<h2 id="fenced-code-blocks" href="#fenced-code-blocks" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">4.5</span>Fenced code blocks
</h2>
<p>A <a id="code-fence" href="#code-fence" class="definition">code fence</a> is a sequence
of at least three consecutive backtick characters (<code>`</code>) or
tildes (<code>~</code>).  (Tildes and backticks cannot be mixed.)
A <a id="fenced-code-block" href="#fenced-code-block" class="definition">fenced code block</a>
begins with a code fence, indented no more than three spaces.</p>
<p>The line with the opening code fence may optionally contain some text
following the code fence; this is trimmed of leading and trailing
whitespace and called the <a id="info-string" href="#info-string" class="definition">info string</a>. If the <a href="#info-string">info string</a> comes
after a backtick fence, it may not contain any backtick
characters.  (The reason for this restriction is that otherwise
some inline code would be incorrectly interpreted as the
beginning of a fenced code block.)</p>
<p>The content of the code block consists of all subsequent lines, until
a closing <a href="#code-fence">code fence</a> of the same type as the code block
began with (backticks or tildes), and with at least as many backticks
or tildes as the opening code fence.  If the leading code fence is
indented N spaces, then up to N spaces of indentation are removed from
each line of the content (if present).  (If a content line is not
indented, it is preserved unchanged.  If it is indented less than N
spaces, all of the indentation is removed.)</p>
<p>The closing code fence may be indented up to three spaces, and may be
followed only by spaces, which are ignored.  If the end of the
containing block (or document) is reached and no closing code fence
has been found, the code block contains all of the lines after the
opening code fence until the end of the containing block (or
document).  (An alternative spec would require backtracking in the
event that a closing code fence is not found.  But this makes parsing
much less efficient, and there seems to be no real down side to the
behavior described here.)</p>
<p>A fenced code block may interrupt a paragraph, and does not require
a blank line either before or after.</p>
<p>The content of a code fence is treated as literal text, not parsed
as inlines.  The first word of the <a href="#info-string">info string</a> is typically used to
specify the language of the code sample, and rendered in the <code>class</code>
attribute of the <code>code</code> tag.  However, this spec does not mandate any
particular treatment of the <a href="#info-string">info string</a>.</p>
<p>Here is a simple example with backticks:</p>
<div class="example" id="example-89">
<div class="examplenum">
<a href="#example-89">Example 89</a>
</div>
<div class="column">
<pre><code class="language-markdown">```
&lt;
<span class="space"> </span>&gt;
```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;&amp;lt;
<span class="space"> </span>&amp;gt;
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>With tildes:</p>
<div class="example" id="example-90">
<div class="examplenum">
<a href="#example-90">Example 90</a>
</div>
<div class="column">
<pre><code class="language-markdown">~~~
&lt;
<span class="space"> </span>&gt;
~~~
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;&amp;lt;
<span class="space"> </span>&amp;gt;
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Fewer than three backticks is not enough:</p>
<div class="example" id="example-91">
<div class="examplenum">
<a href="#example-91">Example 91</a>
</div>
<div class="column">
<pre><code class="language-markdown">``
foo
``
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;foo&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The closing code fence must use the same character as the opening
fence:</p>
<div class="example" id="example-92">
<div class="examplenum">
<a href="#example-92">Example 92</a>
</div>
<div class="column">
<pre><code class="language-markdown">```
aaa
~~~
```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
~~~
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-93">
<div class="examplenum">
<a href="#example-93">Example 93</a>
</div>
<div class="column">
<pre><code class="language-markdown">~~~
aaa
```
~~~
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
```
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>The closing code fence must be at least as long as the opening fence:</p>
<div class="example" id="example-94">
<div class="examplenum">
<a href="#example-94">Example 94</a>
</div>
<div class="column">
<pre><code class="language-markdown">````
aaa
```
``````
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
```
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-95">
<div class="examplenum">
<a href="#example-95">Example 95</a>
</div>
<div class="column">
<pre><code class="language-markdown">~~~~
aaa
~~~
~~~~
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
~~~
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Unclosed code blocks are closed by the end of the document
(or the enclosing <a href="#block-quotes">block quote</a> or <a href="#list-items">list item</a>):</p>
<div class="example" id="example-96">
<div class="examplenum">
<a href="#example-96">Example 96</a>
</div>
<div class="column">
<pre><code class="language-markdown">```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-97">
<div class="examplenum">
<a href="#example-97">Example 97</a>
</div>
<div class="column">
<pre><code class="language-markdown">`````

```
aaa
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;
```
aaa
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-98">
<div class="examplenum">
<a href="#example-98">Example 98</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>```
&gt;<span class="space"> </span>aaa

bbb
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;pre&gt;&lt;code&gt;aaa
&lt;/code&gt;&lt;/pre&gt;
&lt;/blockquote&gt;
&lt;p&gt;bbb&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A code block can have all empty lines as its content:</p>
<div class="example" id="example-99">
<div class="examplenum">
<a href="#example-99">Example 99</a>
</div>
<div class="column">
<pre><code class="language-markdown">```

<span class="space"> </span><span class="space"> </span>
```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;
<span class="space"> </span><span class="space"> </span>
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>A code block can be empty:</p>
<div class="example" id="example-100">
<div class="examplenum">
<a href="#example-100">Example 100</a>
</div>
<div class="column">
<pre><code class="language-markdown">```
```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Fences can be indented.  If the opening fence is indented,
content lines will have equivalent opening indentation removed,
if present:</p>
<div class="example" id="example-101">
<div class="examplenum">
<a href="#example-101">Example 101</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span>```
<span class="space"> </span>aaa
aaa
```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
aaa
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-102">
<div class="examplenum">
<a href="#example-102">Example 102</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>```
aaa
<span class="space"> </span><span class="space"> </span>aaa
aaa
<span class="space"> </span><span class="space"> </span>```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
aaa
aaa
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-103">
<div class="examplenum">
<a href="#example-103">Example 103</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span>```
<span class="space"> </span><span class="space"> </span><span class="space"> </span>aaa
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>aaa
<span class="space"> </span><span class="space"> </span>aaa
<span class="space"> </span><span class="space"> </span><span class="space"> </span>```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
<span class="space"> </span>aaa
aaa
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Four spaces indentation produces an indented code block:</p>
<div class="example" id="example-104">
<div class="examplenum">
<a href="#example-104">Example 104</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>```
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>aaa
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;```
aaa
```
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Closing fences may be indented by 0-3 spaces, and their indentation
need not match that of the opening fence:</p>
<div class="example" id="example-105">
<div class="examplenum">
<a href="#example-105">Example 105</a>
</div>
<div class="column">
<pre><code class="language-markdown">```
aaa
<span class="space"> </span><span class="space"> </span>```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-106">
<div class="examplenum">
<a href="#example-106">Example 106</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span>```
aaa
<span class="space"> </span><span class="space"> </span>```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>This is not a closing fence, because it is indented 4 spaces:</p>
<div class="example" id="example-107">
<div class="examplenum">
<a href="#example-107">Example 107</a>
</div>
<div class="column">
<pre><code class="language-markdown">```
aaa
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>```
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Code fences (opening and closing) cannot contain internal spaces:</p>
<div class="example" id="example-108">
<div class="examplenum">
<a href="#example-108">Example 108</a>
</div>
<div class="column">
<pre><code class="language-markdown">```<span class="space"> </span>```
aaa
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;<span class="space"> </span>&lt;/code&gt;
aaa&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-109">
<div class="examplenum">
<a href="#example-109">Example 109</a>
</div>
<div class="column">
<pre><code class="language-markdown">~~~~~~
aaa
~~~<span class="space"> </span>~~
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
~~~<span class="space"> </span>~~
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Fenced code blocks can interrupt paragraphs, and can be followed
directly by paragraphs, without a blank line between:</p>
<div class="example" id="example-110">
<div class="examplenum">
<a href="#example-110">Example 110</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo
```
bar
```
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;bar
&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Other blocks can also occur before and after fenced code blocks
without an intervening blank line:</p>
<div class="example" id="example-111">
<div class="examplenum">
<a href="#example-111">Example 111</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo
---
~~~
bar
~~~
#<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h2&gt;foo&lt;/h2&gt;
&lt;pre&gt;&lt;code&gt;bar
&lt;/code&gt;&lt;/pre&gt;
&lt;h1&gt;baz&lt;/h1&gt;
</code></pre>
</div>
</div>
<p>An <a href="#info-string">info string</a> can be provided after the opening code fence.
Although this spec doesn’t mandate any particular treatment of
the info string, the first word is typically used to specify
the language of the code block. In HTML output, the language is
normally indicated by adding a class to the <code>code</code> element consisting
of <code>language-</code> followed by the language name.</p>
<div class="example" id="example-112">
<div class="examplenum">
<a href="#example-112">Example 112</a>
</div>
<div class="column">
<pre><code class="language-markdown">```ruby
def<span class="space"> </span>foo(x)
<span class="space"> </span><span class="space"> </span>return<span class="space"> </span>3
end
```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code<span class="space"> </span>class="language-ruby"&gt;def<span class="space"> </span>foo(x)
<span class="space"> </span><span class="space"> </span>return<span class="space"> </span>3
end
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-113">
<div class="examplenum">
<a href="#example-113">Example 113</a>
</div>
<div class="column">
<pre><code class="language-markdown">~~~~<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>ruby<span class="space"> </span>startline=3<span class="space"> </span>$%@#$
def<span class="space"> </span>foo(x)
<span class="space"> </span><span class="space"> </span>return<span class="space"> </span>3
end
~~~~~~~
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code<span class="space"> </span>class="language-ruby"&gt;def<span class="space"> </span>foo(x)
<span class="space"> </span><span class="space"> </span>return<span class="space"> </span>3
end
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-114">
<div class="examplenum">
<a href="#example-114">Example 114</a>
</div>
<div class="column">
<pre><code class="language-markdown">````;
````
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code<span class="space"> </span>class="language-;"&gt;&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p><a href="#info-string">Info strings</a> for backtick code blocks cannot contain backticks:</p>
<div class="example" id="example-115">
<div class="examplenum">
<a href="#example-115">Example 115</a>
</div>
<div class="column">
<pre><code class="language-markdown">```<span class="space"> </span>aa<span class="space"> </span>```
foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;aa&lt;/code&gt;
foo&lt;/p&gt;
</code></pre>
</div>
</div>
<p><a href="#info-string">Info strings</a> for tilde code blocks can contain backticks and tildes:</p>
<div class="example" id="example-116">
<div class="examplenum">
<a href="#example-116">Example 116</a>
</div>
<div class="column">
<pre><code class="language-markdown">~~~<span class="space"> </span>aa<span class="space"> </span>```<span class="space"> </span>~~~
foo
~~~
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code<span class="space"> </span>class="language-aa"&gt;foo
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Closing code fences cannot have <a href="#info-string">info strings</a>:</p>
<div class="example" id="example-117">
<div class="examplenum">
<a href="#example-117">Example 117</a>
</div>
<div class="column">
<pre><code class="language-markdown">```
```<span class="space"> </span>aaa
```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;```<span class="space"> </span>aaa
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<h2 id="html-blocks" href="#html-blocks" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">4.6</span>HTML blocks
</h2>
<p>An <a id="html-block" href="#html-block" class="definition">HTML block</a> is a group of lines that is treated
as raw HTML (and will not be escaped in HTML output).</p>
<p>There are seven kinds of <a href="#html-block">HTML block</a>, which can be defined by their
start and end conditions.  The block begins with a line that meets a
<a id="start-condition" href="#start-condition" class="definition">start condition</a> (after up to three spaces optional indentation).
It ends with the first subsequent line that meets a matching <a id="end-condition" href="#end-condition" class="definition">end
condition</a>, or the last line of the document, or the last line of
the <a href="#container-blocks">container block</a> containing the current HTML
block, if no line is encountered that meets the <a href="#end-condition">end condition</a>.  If
the first line meets both the <a href="#start-condition">start condition</a> and the <a href="#end-condition">end
condition</a>, the block will contain just that line.</p>
<ol>
<li>
<p><strong>Start condition:</strong>  line begins with the string <code>&lt;script</code>,
<code>&lt;pre</code>, or <code>&lt;style</code> (case-insensitive), followed by whitespace,
the string <code>&gt;</code>, or the end of the line.<br>
<strong>End condition:</strong>  line contains an end tag
<code>&lt;/script&gt;</code>, <code>&lt;/pre&gt;</code>, or <code>&lt;/style&gt;</code> (case-insensitive; it
need not match the start tag).</p>
</li>
<li>
<p><strong>Start condition:</strong> line begins with the string <code>&lt;!--</code>.<br>
<strong>End condition:</strong>  line contains the string <code>--&gt;</code>.</p>
</li>
<li>
<p><strong>Start condition:</strong> line begins with the string <code>&lt;?</code>.<br>
<strong>End condition:</strong> line contains the string <code>?&gt;</code>.</p>
</li>
<li>
<p><strong>Start condition:</strong> line begins with the string <code>&lt;!</code>
followed by an uppercase ASCII letter.<br>
<strong>End condition:</strong> line contains the character <code>&gt;</code>.</p>
</li>
<li>
<p><strong>Start condition:</strong>  line begins with the string
<code>&lt;![CDATA[</code>.<br>
<strong>End condition:</strong> line contains the string <code>]]&gt;</code>.</p>
</li>
<li>
<p><strong>Start condition:</strong> line begins the string <code>&lt;</code> or <code>&lt;/</code>
followed by one of the strings (case-insensitive) <code>address</code>,
<code>article</code>, <code>aside</code>, <code>base</code>, <code>basefont</code>, <code>blockquote</code>, <code>body</code>,
<code>caption</code>, <code>center</code>, <code>col</code>, <code>colgroup</code>, <code>dd</code>, <code>details</code>, <code>dialog</code>,
<code>dir</code>, <code>div</code>, <code>dl</code>, <code>dt</code>, <code>fieldset</code>, <code>figcaption</code>, <code>figure</code>,
<code>footer</code>, <code>form</code>, <code>frame</code>, <code>frameset</code>,
<code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>, <code>h6</code>, <code>head</code>, <code>header</code>, <code>hr</code>,
<code>html</code>, <code>iframe</code>, <code>legend</code>, <code>li</code>, <code>link</code>, <code>main</code>, <code>menu</code>, <code>menuitem</code>,
<code>nav</code>, <code>noframes</code>, <code>ol</code>, <code>optgroup</code>, <code>option</code>, <code>p</code>, <code>param</code>,
<code>section</code>, <code>source</code>, <code>summary</code>, <code>table</code>, <code>tbody</code>, <code>td</code>,
<code>tfoot</code>, <code>th</code>, <code>thead</code>, <code>title</code>, <code>tr</code>, <code>track</code>, <code>ul</code>, followed
by <a href="#whitespace">whitespace</a>, the end of the line, the string <code>&gt;</code>, or
the string <code>/&gt;</code>.<br>
<strong>End condition:</strong> line is followed by a <a href="#blank-line">blank line</a>.</p>
</li>
<li>
<p><strong>Start condition:</strong>  line begins with a complete <a href="#open-tag">open tag</a>
(with any <a href="#tag-name">tag name</a> other than <code>script</code>,
<code>style</code>, or <code>pre</code>) or a complete <a href="#closing-tag">closing tag</a>,
followed only by <a href="#whitespace">whitespace</a> or the end of the line.<br>
<strong>End condition:</strong> line is followed by a <a href="#blank-line">blank line</a>.</p>
</li>
</ol>
<p>HTML blocks continue until they are closed by their appropriate
<a href="#end-condition">end condition</a>, or the last line of the document or other <a href="#container-blocks">container
block</a>.  This means any HTML <strong>within an HTML
block</strong> that might otherwise be recognised as a start condition will
be ignored by the parser and passed through as-is, without changing
the parser’s state.</p>
<p>For instance, <code>&lt;pre&gt;</code> within a HTML block started by <code>&lt;table&gt;</code> will not affect
the parser state; as the HTML block was started in by start condition 6, it
will end at any blank line. This can be surprising:</p>
<div class="example" id="example-118">
<div class="examplenum">
<a href="#example-118">Example 118</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;table&gt;&lt;tr&gt;&lt;td&gt;
&lt;pre&gt;
**Hello**,

_world_.
&lt;/pre&gt;
&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;&lt;tr&gt;&lt;td&gt;
&lt;pre&gt;
**Hello**,
&lt;p&gt;&lt;em&gt;world&lt;/em&gt;.
&lt;/pre&gt;&lt;/p&gt;
&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;
</code></pre>
</div>
</div>
<p>In this case, the HTML block is terminated by the newline — the <code>**Hello**</code>
text remains verbatim — and regular parsing resumes, with a paragraph,
emphasised <code>world</code> and inline and block HTML following.</p>
<p>All types of <a href="#html-blocks">HTML blocks</a> except type 7 may interrupt
a paragraph.  Blocks of type 7 may not interrupt a paragraph.
(This restriction is intended to prevent unwanted interpretation
of long tags inside a wrapped paragraph as starting HTML blocks.)</p>
<p>Some simple examples follow.  Here are some basic HTML blocks
of type 6:</p>
<div class="example" id="example-119">
<div class="examplenum">
<a href="#example-119">Example 119</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;table&gt;
<span class="space"> </span><span class="space"> </span>&lt;tr&gt;
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&lt;td&gt;
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>hi
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&lt;/td&gt;
<span class="space"> </span><span class="space"> </span>&lt;/tr&gt;
&lt;/table&gt;

okay.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;
<span class="space"> </span><span class="space"> </span>&lt;tr&gt;
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&lt;td&gt;
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>hi
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&lt;/td&gt;
<span class="space"> </span><span class="space"> </span>&lt;/tr&gt;
&lt;/table&gt;
&lt;p&gt;okay.&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-120">
<div class="examplenum">
<a href="#example-120">Example 120</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span>&lt;div&gt;
<span class="space"> </span><span class="space"> </span>*hello*
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&lt;foo&gt;&lt;a&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html"><span class="space"> </span>&lt;div&gt;
<span class="space"> </span><span class="space"> </span>*hello*
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&lt;foo&gt;&lt;a&gt;
</code></pre>
</div>
</div>
<p>A block can also start with a closing tag:</p>
<div class="example" id="example-121">
<div class="examplenum">
<a href="#example-121">Example 121</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;/div&gt;
*foo*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;/div&gt;
*foo*
</code></pre>
</div>
</div>
<p>Here we have two HTML blocks with a Markdown paragraph between them:</p>
<div class="example" id="example-122">
<div class="examplenum">
<a href="#example-122">Example 122</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;DIV<span class="space"> </span>CLASS="foo"&gt;

*Markdown*

&lt;/DIV&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;DIV<span class="space"> </span>CLASS="foo"&gt;
&lt;p&gt;&lt;em&gt;Markdown&lt;/em&gt;&lt;/p&gt;
&lt;/DIV&gt;
</code></pre>
</div>
</div>
<p>The tag on the first line can be partial, as long
as it is split where there would be whitespace:</p>
<div class="example" id="example-123">
<div class="examplenum">
<a href="#example-123">Example 123</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;div<span class="space"> </span>id="foo"
<span class="space"> </span><span class="space"> </span>class="bar"&gt;
&lt;/div&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;div<span class="space"> </span>id="foo"
<span class="space"> </span><span class="space"> </span>class="bar"&gt;
&lt;/div&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-124">
<div class="examplenum">
<a href="#example-124">Example 124</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;div<span class="space"> </span>id="foo"<span class="space"> </span>class="bar
<span class="space"> </span><span class="space"> </span>baz"&gt;
&lt;/div&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;div<span class="space"> </span>id="foo"<span class="space"> </span>class="bar
<span class="space"> </span><span class="space"> </span>baz"&gt;
&lt;/div&gt;
</code></pre>
</div>
</div>
<p>An open tag need not be closed:</p>
<div class="example" id="example-125">
<div class="examplenum">
<a href="#example-125">Example 125</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;div&gt;
*foo*

*bar*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;div&gt;
*foo*
&lt;p&gt;&lt;em&gt;bar&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A partial tag need not even be completed (garbage
in, garbage out):</p>
<div class="example" id="example-126">
<div class="examplenum">
<a href="#example-126">Example 126</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;div<span class="space"> </span>id="foo"
*hi*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;div<span class="space"> </span>id="foo"
*hi*
</code></pre>
</div>
</div>
<div class="example" id="example-127">
<div class="examplenum">
<a href="#example-127">Example 127</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;div<span class="space"> </span>class
foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;div<span class="space"> </span>class
foo
</code></pre>
</div>
</div>
<p>The initial tag doesn’t even need to be a valid
tag, as long as it starts like one:</p>
<div class="example" id="example-128">
<div class="examplenum">
<a href="#example-128">Example 128</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;div<span class="space"> </span>*???-&amp;&amp;&amp;-&lt;---
*foo*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;div<span class="space"> </span>*???-&amp;&amp;&amp;-&lt;---
*foo*
</code></pre>
</div>
</div>
<p>In type 6 blocks, the initial tag need not be on a line by
itself:</p>
<div class="example" id="example-129">
<div class="examplenum">
<a href="#example-129">Example 129</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;div&gt;&lt;a<span class="space"> </span>href="bar"&gt;*foo*&lt;/a&gt;&lt;/div&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;div&gt;&lt;a<span class="space"> </span>href="bar"&gt;*foo*&lt;/a&gt;&lt;/div&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-130">
<div class="examplenum">
<a href="#example-130">Example 130</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;table&gt;&lt;tr&gt;&lt;td&gt;
foo
&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;&lt;tr&gt;&lt;td&gt;
foo
&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;
</code></pre>
</div>
</div>
<p>Everything until the next blank line or end of document
gets included in the HTML block.  So, in the following
example, what looks like a Markdown code block
is actually part of the HTML block, which continues until a blank
line or the end of the document is reached:</p>
<div class="example" id="example-131">
<div class="examplenum">
<a href="#example-131">Example 131</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;div&gt;&lt;/div&gt;
```<span class="space"> </span>c
int<span class="space"> </span>x<span class="space"> </span>=<span class="space"> </span>33;
```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;div&gt;&lt;/div&gt;
```<span class="space"> </span>c
int<span class="space"> </span>x<span class="space"> </span>=<span class="space"> </span>33;
```
</code></pre>
</div>
</div>
<p>To start an <a href="#html-block">HTML block</a> with a tag that is <em>not</em> in the
list of block-level tags in (6), you must put the tag by
itself on the first line (and it must be complete):</p>
<div class="example" id="example-132">
<div class="examplenum">
<a href="#example-132">Example 132</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span>href="foo"&gt;
*bar*
&lt;/a&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;a<span class="space"> </span>href="foo"&gt;
*bar*
&lt;/a&gt;
</code></pre>
</div>
</div>
<p>In type 7 blocks, the <a href="#tag-name">tag name</a> can be anything:</p>
<div class="example" id="example-133">
<div class="examplenum">
<a href="#example-133">Example 133</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;Warning&gt;
*bar*
&lt;/Warning&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;Warning&gt;
*bar*
&lt;/Warning&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-134">
<div class="examplenum">
<a href="#example-134">Example 134</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;i<span class="space"> </span>class="foo"&gt;
*bar*
&lt;/i&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;i<span class="space"> </span>class="foo"&gt;
*bar*
&lt;/i&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-135">
<div class="examplenum">
<a href="#example-135">Example 135</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;/ins&gt;
*bar*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;/ins&gt;
*bar*
</code></pre>
</div>
</div>
<p>These rules are designed to allow us to work with tags that
can function as either block-level or inline-level tags.
The <code>&lt;del&gt;</code> tag is a nice example.  We can surround content with
<code>&lt;del&gt;</code> tags in three different ways.  In this case, we get a raw
HTML block, because the <code>&lt;del&gt;</code> tag is on a line by itself:</p>
<div class="example" id="example-136">
<div class="examplenum">
<a href="#example-136">Example 136</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;del&gt;
*foo*
&lt;/del&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;del&gt;
*foo*
&lt;/del&gt;
</code></pre>
</div>
</div>
<p>In this case, we get a raw HTML block that just includes
the <code>&lt;del&gt;</code> tag (because it ends with the following blank
line).  So the contents get interpreted as CommonMark:</p>
<div class="example" id="example-137">
<div class="examplenum">
<a href="#example-137">Example 137</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;del&gt;

*foo*

&lt;/del&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;del&gt;
&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;
&lt;/del&gt;
</code></pre>
</div>
</div>
<p>Finally, in this case, the <code>&lt;del&gt;</code> tags are interpreted
as <a href="#raw-html">raw HTML</a> <em>inside</em> the CommonMark paragraph.  (Because
the tag is not on a line by itself, we get inline HTML
rather than an <a href="#html-block">HTML block</a>.)</p>
<div class="example" id="example-138">
<div class="examplenum">
<a href="#example-138">Example 138</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;del&gt;*foo*&lt;/del&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;del&gt;&lt;em&gt;foo&lt;/em&gt;&lt;/del&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>HTML tags designed to contain literal content
(<code>script</code>, <code>style</code>, <code>pre</code>), comments, processing instructions,
and declarations are treated somewhat differently.
Instead of ending at the first blank line, these blocks
end at the first line containing a corresponding end tag.
As a result, these blocks can contain blank lines:</p>
<p>A pre tag (type 1):</p>
<div class="example" id="example-139">
<div class="examplenum">
<a href="#example-139">Example 139</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;pre<span class="space"> </span>language="haskell"&gt;&lt;code&gt;
import<span class="space"> </span>Text.HTML.TagSoup

main<span class="space"> </span>::<span class="space"> </span>IO<span class="space"> </span>()
main<span class="space"> </span>=<span class="space"> </span>print<span class="space"> </span>$<span class="space"> </span>parseTags<span class="space"> </span>tags
&lt;/code&gt;&lt;/pre&gt;
okay
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre<span class="space"> </span>language="haskell"&gt;&lt;code&gt;
import<span class="space"> </span>Text.HTML.TagSoup

main<span class="space"> </span>::<span class="space"> </span>IO<span class="space"> </span>()
main<span class="space"> </span>=<span class="space"> </span>print<span class="space"> </span>$<span class="space"> </span>parseTags<span class="space"> </span>tags
&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;okay&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A script tag (type 1):</p>
<div class="example" id="example-140">
<div class="examplenum">
<a href="#example-140">Example 140</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;script<span class="space"> </span>type="text/javascript"&gt;
//<span class="space"> </span>JavaScript<span class="space"> </span>example

document.getElementById("demo").innerHTML<span class="space"> </span>=<span class="space"> </span>"Hello<span class="space"> </span>JavaScript!";
&lt;/script&gt;
okay
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;script<span class="space"> </span>type="text/javascript"&gt;
//<span class="space"> </span>JavaScript<span class="space"> </span>example

document.getElementById("demo").innerHTML<span class="space"> </span>=<span class="space"> </span>"Hello<span class="space"> </span>JavaScript!";
&lt;/script&gt;
&lt;p&gt;okay&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A style tag (type 1):</p>
<div class="example" id="example-141">
<div class="examplenum">
<a href="#example-141">Example 141</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;style
<span class="space"> </span><span class="space"> </span>type="text/css"&gt;
h1<span class="space"> </span>{color:red;}

p<span class="space"> </span>{color:blue;}
&lt;/style&gt;
okay
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;style
<span class="space"> </span><span class="space"> </span>type="text/css"&gt;
h1<span class="space"> </span>{color:red;}

p<span class="space"> </span>{color:blue;}
&lt;/style&gt;
&lt;p&gt;okay&lt;/p&gt;
</code></pre>
</div>
</div>
<p>If there is no matching end tag, the block will end at the
end of the document (or the enclosing <a href="#block-quotes">block quote</a>
or <a href="#list-items">list item</a>):</p>
<div class="example" id="example-142">
<div class="examplenum">
<a href="#example-142">Example 142</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;style
<span class="space"> </span><span class="space"> </span>type="text/css"&gt;

foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;style
<span class="space"> </span><span class="space"> </span>type="text/css"&gt;

foo
</code></pre>
</div>
</div>
<div class="example" id="example-143">
<div class="examplenum">
<a href="#example-143">Example 143</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>&lt;div&gt;
&gt;<span class="space"> </span>foo

bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;div&gt;
foo
&lt;/blockquote&gt;
&lt;p&gt;bar&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-144">
<div class="examplenum">
<a href="#example-144">Example 144</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>&lt;div&gt;
-<span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;div&gt;
&lt;/li&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>The end tag can occur on the same line as the start tag:</p>
<div class="example" id="example-145">
<div class="examplenum">
<a href="#example-145">Example 145</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;style&gt;p{color:red;}&lt;/style&gt;
*foo*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;style&gt;p{color:red;}&lt;/style&gt;
&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-146">
<div class="examplenum">
<a href="#example-146">Example 146</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;!--<span class="space"> </span>foo<span class="space"> </span>--&gt;*bar*
*baz*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;!--<span class="space"> </span>foo<span class="space"> </span>--&gt;*bar*
&lt;p&gt;&lt;em&gt;baz&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that anything on the last line after the
end tag will be included in the <a href="#html-block">HTML block</a>:</p>
<div class="example" id="example-147">
<div class="examplenum">
<a href="#example-147">Example 147</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;script&gt;
foo
&lt;/script&gt;1.<span class="space"> </span>*bar*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;script&gt;
foo
&lt;/script&gt;1.<span class="space"> </span>*bar*
</code></pre>
</div>
</div>
<p>A comment (type 2):</p>
<div class="example" id="example-148">
<div class="examplenum">
<a href="#example-148">Example 148</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;!--<span class="space"> </span>Foo

bar
<span class="space"> </span><span class="space"> </span><span class="space"> </span>baz<span class="space"> </span>--&gt;
okay
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;!--<span class="space"> </span>Foo

bar
<span class="space"> </span><span class="space"> </span><span class="space"> </span>baz<span class="space"> </span>--&gt;
&lt;p&gt;okay&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A processing instruction (type 3):</p>
<div class="example" id="example-149">
<div class="examplenum">
<a href="#example-149">Example 149</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;?php

<span class="space"> </span><span class="space"> </span>echo<span class="space"> </span>'&gt;';

?&gt;
okay
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;?php

<span class="space"> </span><span class="space"> </span>echo<span class="space"> </span>'&gt;';

?&gt;
&lt;p&gt;okay&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A declaration (type 4):</p>
<div class="example" id="example-150">
<div class="examplenum">
<a href="#example-150">Example 150</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;!DOCTYPE<span class="space"> </span>html&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;!DOCTYPE<span class="space"> </span>html&gt;
</code></pre>
</div>
</div>
<p>CDATA (type 5):</p>
<div class="example" id="example-151">
<div class="examplenum">
<a href="#example-151">Example 151</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;![CDATA[
function<span class="space"> </span>matchwo(a,b)
{
<span class="space"> </span><span class="space"> </span>if<span class="space"> </span>(a<span class="space"> </span>&lt;<span class="space"> </span>b<span class="space"> </span>&amp;&amp;<span class="space"> </span>a<span class="space"> </span>&lt;<span class="space"> </span>0)<span class="space"> </span>then<span class="space"> </span>{
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>return<span class="space"> </span>1;

<span class="space"> </span><span class="space"> </span>}<span class="space"> </span>else<span class="space"> </span>{

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>return<span class="space"> </span>0;
<span class="space"> </span><span class="space"> </span>}
}
]]&gt;
okay
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;![CDATA[
function<span class="space"> </span>matchwo(a,b)
{
<span class="space"> </span><span class="space"> </span>if<span class="space"> </span>(a<span class="space"> </span>&lt;<span class="space"> </span>b<span class="space"> </span>&amp;&amp;<span class="space"> </span>a<span class="space"> </span>&lt;<span class="space"> </span>0)<span class="space"> </span>then<span class="space"> </span>{
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>return<span class="space"> </span>1;

<span class="space"> </span><span class="space"> </span>}<span class="space"> </span>else<span class="space"> </span>{

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>return<span class="space"> </span>0;
<span class="space"> </span><span class="space"> </span>}
}
]]&gt;
&lt;p&gt;okay&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The opening tag can be indented 1-3 spaces, but not 4:</p>
<div class="example" id="example-152">
<div class="examplenum">
<a href="#example-152">Example 152</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>&lt;!--<span class="space"> </span>foo<span class="space"> </span>--&gt;

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&lt;!--<span class="space"> </span>foo<span class="space"> </span>--&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html"><span class="space"> </span><span class="space"> </span>&lt;!--<span class="space"> </span>foo<span class="space"> </span>--&gt;
&lt;pre&gt;&lt;code&gt;&amp;lt;!--<span class="space"> </span>foo<span class="space"> </span>--&amp;gt;
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-153">
<div class="examplenum">
<a href="#example-153">Example 153</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>&lt;div&gt;

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&lt;div&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html"><span class="space"> </span><span class="space"> </span>&lt;div&gt;
&lt;pre&gt;&lt;code&gt;&amp;lt;div&amp;gt;
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>An HTML block of types 1–6 can interrupt a paragraph, and need not be
preceded by a blank line.</p>
<div class="example" id="example-154">
<div class="examplenum">
<a href="#example-154">Example 154</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
&lt;div&gt;
bar
&lt;/div&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo&lt;/p&gt;
&lt;div&gt;
bar
&lt;/div&gt;
</code></pre>
</div>
</div>
<p>However, a following blank line is needed, except at the end of
a document, and except for blocks of types 1–5, <a href="#html-block">above</a>:</p>
<div class="example" id="example-155">
<div class="examplenum">
<a href="#example-155">Example 155</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;div&gt;
bar
&lt;/div&gt;
*foo*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;div&gt;
bar
&lt;/div&gt;
*foo*
</code></pre>
</div>
</div>
<p>HTML blocks of type 7 cannot interrupt a paragraph:</p>
<div class="example" id="example-156">
<div class="examplenum">
<a href="#example-156">Example 156</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
&lt;a<span class="space"> </span>href="bar"&gt;
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo
&lt;a<span class="space"> </span>href="bar"&gt;
baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This rule differs from John Gruber’s original Markdown syntax
specification, which says:</p>
<blockquote>
<p>The only restrictions are that block-level HTML elements —
e.g. <code>&lt;div&gt;</code>, <code>&lt;table&gt;</code>, <code>&lt;pre&gt;</code>, <code>&lt;p&gt;</code>, etc. — must be separated from
surrounding content by blank lines, and the start and end tags of the
block should not be indented with tabs or spaces.</p>
</blockquote>
<p>In some ways Gruber’s rule is more restrictive than the one given
here:</p>
<ul>
<li>It requires that an HTML block be preceded by a blank line.</li>
<li>It does not allow the start tag to be indented.</li>
<li>It requires a matching end tag, which it also does not allow to
be indented.</li>
</ul>
<p>Most Markdown implementations (including some of Gruber’s own) do not
respect all of these restrictions.</p>
<p>There is one respect, however, in which Gruber’s rule is more liberal
than the one given here, since it allows blank lines to occur inside
an HTML block.  There are two reasons for disallowing them here.
First, it removes the need to parse balanced tags, which is
expensive and can require backtracking from the end of the document
if no matching end tag is found. Second, it provides a very simple
and flexible way of including Markdown content inside HTML tags:
simply separate the Markdown from the HTML using blank lines:</p>
<p>Compare:</p>
<div class="example" id="example-157">
<div class="examplenum">
<a href="#example-157">Example 157</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;div&gt;

*Emphasized*<span class="space"> </span>text.

&lt;/div&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;div&gt;
&lt;p&gt;&lt;em&gt;Emphasized&lt;/em&gt;<span class="space"> </span>text.&lt;/p&gt;
&lt;/div&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-158">
<div class="examplenum">
<a href="#example-158">Example 158</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;div&gt;
*Emphasized*<span class="space"> </span>text.
&lt;/div&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;div&gt;
*Emphasized*<span class="space"> </span>text.
&lt;/div&gt;
</code></pre>
</div>
</div>
<p>Some Markdown implementations have adopted a convention of
interpreting content inside tags as text if the open tag has
the attribute <code>markdown=1</code>.  The rule given above seems a simpler and
more elegant way of achieving the same expressive power, which is also
much simpler to parse.</p>
<p>The main potential drawback is that one can no longer paste HTML
blocks into Markdown documents with 100% reliability.  However,
<em>in most cases</em> this will work fine, because the blank lines in
HTML are usually followed by HTML block tags.  For example:</p>
<div class="example" id="example-159">
<div class="examplenum">
<a href="#example-159">Example 159</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;table&gt;

&lt;tr&gt;

&lt;td&gt;
Hi
&lt;/td&gt;

&lt;/tr&gt;

&lt;/table&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;
&lt;tr&gt;
&lt;td&gt;
Hi
&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
</code></pre>
</div>
</div>
<p>There are problems, however, if the inner tags are indented
<em>and</em> separated by spaces, as then they will be interpreted as
an indented code block:</p>
<div class="example" id="example-160">
<div class="examplenum">
<a href="#example-160">Example 160</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;table&gt;

<span class="space"> </span><span class="space"> </span>&lt;tr&gt;

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&lt;td&gt;
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>Hi
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&lt;/td&gt;

<span class="space"> </span><span class="space"> </span>&lt;/tr&gt;

&lt;/table&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;
<span class="space"> </span><span class="space"> </span>&lt;tr&gt;
&lt;pre&gt;&lt;code&gt;&amp;lt;td&amp;gt;
<span class="space"> </span><span class="space"> </span>Hi
&amp;lt;/td&amp;gt;
&lt;/code&gt;&lt;/pre&gt;
<span class="space"> </span><span class="space"> </span>&lt;/tr&gt;
&lt;/table&gt;
</code></pre>
</div>
</div>
<p>Fortunately, blank lines are usually not necessary and can be
deleted.  The exception is inside <code>&lt;pre&gt;</code> tags, but as described
<a href="#html-blocks">above</a>, raw HTML blocks starting with <code>&lt;pre&gt;</code>
<em>can</em> contain blank lines.</p>
<h2 id="link-reference-definitions" href="#link-reference-definitions" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">4.7</span>Link reference definitions
</h2>
<p>A <a id="link-reference-definition" href="#link-reference-definition" class="definition">link reference definition</a>
consists of a <a href="#link-label">link label</a>, indented up to three spaces, followed
by a colon (<code>:</code>), optional <a href="#whitespace">whitespace</a> (including up to one
<a href="#line-ending">line ending</a>), a <a href="#link-destination">link destination</a>,
optional <a href="#whitespace">whitespace</a> (including up to one
<a href="#line-ending">line ending</a>), and an optional <a href="#link-title">link
title</a>, which if it is present must be separated
from the <a href="#link-destination">link destination</a> by <a href="#whitespace">whitespace</a>.
No further <a href="#non-whitespace-character">non-whitespace characters</a> may occur on the line.</p>
<p>A <a href="#link-reference-definition">link reference definition</a>
does not correspond to a structural element of a document.  Instead, it
defines a label which can be used in <a href="#reference-link">reference links</a>
and reference-style <a href="#images">images</a> elsewhere in the document.  <a href="#link-reference-definitions">Link
reference definitions</a> can come either before or after the links that use
them.</p>
<div class="example" id="example-161">
<div class="examplenum">
<a href="#example-161">Example 161</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"

[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-162">
<div class="examplenum">
<a href="#example-162">Example 162</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span>[foo]:<span class="space"> </span>
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>/url<span class="space"> </span><span class="space"> </span>
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>'the<span class="space"> </span>title'<span class="space"> </span><span class="space"> </span>

[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="the<span class="space"> </span>title"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-163">
<div class="examplenum">
<a href="#example-163">Example 163</a>
</div>
<div class="column">
<pre><code class="language-markdown">[Foo*bar\]]:my_(url)<span class="space"> </span>'title<span class="space"> </span>(with<span class="space"> </span>parens)'

[Foo*bar\]]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="my_(url)"<span class="space"> </span>title="title<span class="space"> </span>(with<span class="space"> </span>parens)"&gt;Foo*bar]&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-164">
<div class="examplenum">
<a href="#example-164">Example 164</a>
</div>
<div class="column">
<pre><code class="language-markdown">[Foo<span class="space"> </span>bar]:
&lt;my<span class="space"> </span>url&gt;
'title'

[Foo<span class="space"> </span>bar]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="my%20url"<span class="space"> </span>title="title"&gt;Foo<span class="space"> </span>bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The title may extend over multiple lines:</p>
<div class="example" id="example-165">
<div class="examplenum">
<a href="#example-165">Example 165</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/url<span class="space"> </span>'
title
line1
line2
'

[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="
title
line1
line2
"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>However, it may not contain a <a href="#blank-line">blank line</a>:</p>
<div class="example" id="example-166">
<div class="examplenum">
<a href="#example-166">Example 166</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/url<span class="space"> </span>'title

with<span class="space"> </span>blank<span class="space"> </span>line'

[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo]:<span class="space"> </span>/url<span class="space"> </span>'title&lt;/p&gt;
&lt;p&gt;with<span class="space"> </span>blank<span class="space"> </span>line'&lt;/p&gt;
&lt;p&gt;[foo]&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The title may be omitted:</p>
<div class="example" id="example-167">
<div class="examplenum">
<a href="#example-167">Example 167</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:
/url

[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The link destination may not be omitted:</p>
<div class="example" id="example-168">
<div class="examplenum">
<a href="#example-168">Example 168</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:

[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo]:&lt;/p&gt;
&lt;p&gt;[foo]&lt;/p&gt;
</code></pre>
</div>
</div>
<p>However, an empty link destination may be specified using
angle brackets:</p>
<div class="example" id="example-169">
<div class="examplenum">
<a href="#example-169">Example 169</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>&lt;&gt;

[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href=""&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The title must be separated from the link destination by
whitespace:</p>
<div class="example" id="example-170">
<div class="examplenum">
<a href="#example-170">Example 170</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>&lt;bar&gt;(baz)

[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo]:<span class="space"> </span>&lt;bar&gt;(baz)&lt;/p&gt;
&lt;p&gt;[foo]&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Both title and destination can contain backslash escapes
and literal backslashes:</p>
<div class="example" id="example-171">
<div class="examplenum">
<a href="#example-171">Example 171</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/url\bar\*baz<span class="space"> </span>"foo\"bar\baz"

[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url%5Cbar*baz"<span class="space"> </span>title="foo&amp;quot;bar\baz"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A link can come before its corresponding definition:</p>
<div class="example" id="example-172">
<div class="examplenum">
<a href="#example-172">Example 172</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]

[foo]:<span class="space"> </span>url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="url"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>If there are several matching definitions, the first one takes
precedence:</p>
<div class="example" id="example-173">
<div class="examplenum">
<a href="#example-173">Example 173</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]

[foo]:<span class="space"> </span>first
[foo]:<span class="space"> </span>second
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="first"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>As noted in the section on <a href="#links">Links</a>, matching of labels is
case-insensitive (see <a href="#matches">matches</a>).</p>
<div class="example" id="example-174">
<div class="examplenum">
<a href="#example-174">Example 174</a>
</div>
<div class="column">
<pre><code class="language-markdown">[FOO]:<span class="space"> </span>/url

[Foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"&gt;Foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-175">
<div class="examplenum">
<a href="#example-175">Example 175</a>
</div>
<div class="column">
<pre><code class="language-markdown">[ΑΓΩ]:<span class="space"> </span>/φου

[αγω]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/%CF%86%CE%BF%CF%85"&gt;αγω&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Here is a link reference definition with no corresponding link.
It contributes nothing to the document.</p>
<div class="example" id="example-176">
<div class="examplenum">
<a href="#example-176">Example 176</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html"></code></pre>
</div>
</div>
<p>Here is another one:</p>
<div class="example" id="example-177">
<div class="examplenum">
<a href="#example-177">Example 177</a>
</div>
<div class="column">
<pre><code class="language-markdown">[
foo
]:<span class="space"> </span>/url
bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not a link reference definition, because there are
<a href="#non-whitespace-character">non-whitespace characters</a> after the title:</p>
<div class="example" id="example-178">
<div class="examplenum">
<a href="#example-178">Example 178</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"<span class="space"> </span>ok
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo]:<span class="space"> </span>/url<span class="space"> </span>&amp;quot;title&amp;quot;<span class="space"> </span>ok&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is a link reference definition, but it has no title:</p>
<div class="example" id="example-179">
<div class="examplenum">
<a href="#example-179">Example 179</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/url
"title"<span class="space"> </span>ok
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;quot;title&amp;quot;<span class="space"> </span>ok&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not a link reference definition, because it is indented
four spaces:</p>
<div class="example" id="example-180">
<div class="examplenum">
<a href="#example-180">Example 180</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"

[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;[foo]:<span class="space"> </span>/url<span class="space"> </span>&amp;quot;title&amp;quot;
&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;[foo]&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not a link reference definition, because it occurs inside
a code block:</p>
<div class="example" id="example-181">
<div class="examplenum">
<a href="#example-181">Example 181</a>
</div>
<div class="column">
<pre><code class="language-markdown">```
[foo]:<span class="space"> </span>/url
```

[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;[foo]:<span class="space"> </span>/url
&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;[foo]&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A <a href="#link-reference-definition">link reference definition</a> cannot interrupt a paragraph.</p>
<div class="example" id="example-182">
<div class="examplenum">
<a href="#example-182">Example 182</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
[bar]:<span class="space"> </span>/baz

[bar]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo
[bar]:<span class="space"> </span>/baz&lt;/p&gt;
&lt;p&gt;[bar]&lt;/p&gt;
</code></pre>
</div>
</div>
<p>However, it can directly follow other block elements, such as headings
and thematic breaks, and it need not be followed by a blank line.</p>
<div class="example" id="example-183">
<div class="examplenum">
<a href="#example-183">Example 183</a>
</div>
<div class="column">
<pre><code class="language-markdown">#<span class="space"> </span>[Foo]
[foo]:<span class="space"> </span>/url
&gt;<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;&lt;a<span class="space"> </span>href="/url"&gt;Foo&lt;/a&gt;&lt;/h1&gt;
&lt;blockquote&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-184">
<div class="examplenum">
<a href="#example-184">Example 184</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/url
bar
===
[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h1&gt;bar&lt;/h1&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-185">
<div class="examplenum">
<a href="#example-185">Example 185</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/url
===
[foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;===
&lt;a<span class="space"> </span>href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Several <a href="#link-reference-definitions">link reference definitions</a>
can occur one after another, without intervening blank lines.</p>
<div class="example" id="example-186">
<div class="examplenum">
<a href="#example-186">Example 186</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/foo-url<span class="space"> </span>"foo"
[bar]:<span class="space"> </span>/bar-url
<span class="space"> </span><span class="space"> </span>"bar"
[baz]:<span class="space"> </span>/baz-url

[foo],
[bar],
[baz]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/foo-url"<span class="space"> </span>title="foo"&gt;foo&lt;/a&gt;,
&lt;a<span class="space"> </span>href="/bar-url"<span class="space"> </span>title="bar"&gt;bar&lt;/a&gt;,
&lt;a<span class="space"> </span>href="/baz-url"&gt;baz&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p><a href="#link-reference-definitions">Link reference definitions</a> can occur
inside block containers, like lists and block quotations.  They
affect the entire document, not just the container in which they
are defined:</p>
<div class="example" id="example-187">
<div class="examplenum">
<a href="#example-187">Example 187</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]

&gt;<span class="space"> </span>[foo]:<span class="space"> </span>/url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;
&lt;blockquote&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>Whether something is a <a href="#link-reference-definition">link reference definition</a> is
independent of whether the link reference it defines is
used in the document.  Thus, for example, the following
document contains just a link reference definition, and
no visible content:</p>
<div class="example" id="example-188">
<div class="examplenum">
<a href="#example-188">Example 188</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html"></code></pre>
</div>
</div>
<h2 id="paragraphs" href="#paragraphs" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">4.8</span>Paragraphs
</h2>
<p>A sequence of non-blank lines that cannot be interpreted as other
kinds of blocks forms a <a id="paragraph" href="#paragraph" class="definition">paragraph</a>.
The contents of the paragraph are the result of parsing the
paragraph’s raw content as inlines.  The paragraph’s raw content
is formed by concatenating the lines and removing initial and final
<a href="#whitespace">whitespace</a>.</p>
<p>A simple example with two paragraphs:</p>
<div class="example" id="example-189">
<div class="examplenum">
<a href="#example-189">Example 189</a>
</div>
<div class="column">
<pre><code class="language-markdown">aaa

bbb
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;aaa&lt;/p&gt;
&lt;p&gt;bbb&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Paragraphs can contain multiple lines, but no blank lines:</p>
<div class="example" id="example-190">
<div class="examplenum">
<a href="#example-190">Example 190</a>
</div>
<div class="column">
<pre><code class="language-markdown">aaa
bbb

ccc
ddd
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;aaa
bbb&lt;/p&gt;
&lt;p&gt;ccc
ddd&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Multiple blank lines between paragraph have no effect:</p>
<div class="example" id="example-191">
<div class="examplenum">
<a href="#example-191">Example 191</a>
</div>
<div class="column">
<pre><code class="language-markdown">aaa


bbb
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;aaa&lt;/p&gt;
&lt;p&gt;bbb&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Leading spaces are skipped:</p>
<div class="example" id="example-192">
<div class="examplenum">
<a href="#example-192">Example 192</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>aaa
<span class="space"> </span>bbb
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;aaa
bbb&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Lines after the first may be indented any amount, since indented
code blocks cannot interrupt paragraphs.</p>
<div class="example" id="example-193">
<div class="examplenum">
<a href="#example-193">Example 193</a>
</div>
<div class="column">
<pre><code class="language-markdown">aaa
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bbb
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>ccc
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;aaa
bbb
ccc&lt;/p&gt;
</code></pre>
</div>
</div>
<p>However, the first line may be indented at most three spaces,
or an indented code block will be triggered:</p>
<div class="example" id="example-194">
<div class="examplenum">
<a href="#example-194">Example 194</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span>aaa
bbb
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;aaa
bbb&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-195">
<div class="examplenum">
<a href="#example-195">Example 195</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>aaa
bbb
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;aaa
&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;bbb&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Final spaces are stripped before inline parsing, so a paragraph
that ends with two or more spaces will not end with a <a href="#hard-line-break">hard line
break</a>:</p>
<div class="example" id="example-196">
<div class="examplenum">
<a href="#example-196">Example 196</a>
</div>
<div class="column">
<pre><code class="language-markdown">aaa<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>
bbb<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;aaa&lt;br<span class="space"> </span>/&gt;
bbb&lt;/p&gt;
</code></pre>
</div>
</div>
<h2 id="blank-lines" href="#blank-lines" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">4.9</span>Blank lines
</h2>
<p><a href="#blank-line">Blank lines</a> between block-level elements are ignored,
except for the role they play in determining whether a <a href="#list">list</a>
is <a href="#tight">tight</a> or <a href="#loose">loose</a>.</p>
<p>Blank lines at the beginning and end of the document are also ignored.</p>
<div class="example" id="example-197">
<div class="examplenum">
<a href="#example-197">Example 197</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>

aaa
<span class="space"> </span><span class="space"> </span>

#<span class="space"> </span>aaa

<span class="space"> </span><span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;aaa&lt;/p&gt;
&lt;h1&gt;aaa&lt;/h1&gt;
</code></pre>
</div>
</div>
<div class="extension">
<h2 id="tables-extension-" href="#tables-extension-" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">4.10</span>Tables (extension)
</h2>
<p>GFM enables the <code>table</code> extension, where an additional leaf block type is
available.</p>
<p>A <a id="table" href="#table" class="definition">table</a> is an arrangement of data with rows and columns, consisting of a
single header row, a <a href="#delimiter-row">delimiter row</a> separating the header from the data, and
zero or more data rows.</p>
<p>Each row consists of cells containing arbitrary text, in which <a href="#inlines">inlines</a> are
parsed, separated by pipes (<code>|</code>).  A leading and trailing pipe is also
recommended for clarity of reading, and if there’s otherwise parsing ambiguity.
Spaces between pipes and cell content are trimmed.  Block-level elements cannot
be inserted in a table.</p>
<p>The <a id="delimiter-row" href="#delimiter-row" class="definition">delimiter row</a> consists of cells whose only content are hyphens (<code>-</code>),
and optionally, a leading or trailing colon (<code>:</code>), or both, to indicate left,
right, or center alignment respectively.</p>
<div class="example" id="example-198">
<div class="examplenum">
<a href="#example-198">Example 198</a>
</div>
<div class="column">
<pre><code class="language-markdown">|<span class="space"> </span>foo<span class="space"> </span>|<span class="space"> </span>bar<span class="space"> </span>|
|<span class="space"> </span>---<span class="space"> </span>|<span class="space"> </span>---<span class="space"> </span>|
|<span class="space"> </span>baz<span class="space"> </span>|<span class="space"> </span>bim<span class="space"> </span>|
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;foo&lt;/th&gt;
&lt;th&gt;bar&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;baz&lt;/td&gt;
&lt;td&gt;bim&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;
</code></pre>
</div>
</div>
<p>Cells in one column don’t need to match length, though it’s easier to read if
they are. Likewise, use of leading and trailing pipes may be inconsistent:</p>
<div class="example" id="example-199">
<div class="examplenum">
<a href="#example-199">Example 199</a>
</div>
<div class="column">
<pre><code class="language-markdown">|<span class="space"> </span>abc<span class="space"> </span>|<span class="space"> </span>defghi<span class="space"> </span>|
:-:<span class="space"> </span>|<span class="space"> </span>-----------:
bar<span class="space"> </span>|<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th<span class="space"> </span>align="center"&gt;abc&lt;/th&gt;
&lt;th<span class="space"> </span>align="right"&gt;defghi&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td<span class="space"> </span>align="center"&gt;bar&lt;/td&gt;
&lt;td<span class="space"> </span>align="right"&gt;baz&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;
</code></pre>
</div>
</div>
<p>Include a pipe in a cell’s content by escaping it, including inside other
inline spans:</p>
<div class="example" id="example-200">
<div class="examplenum">
<a href="#example-200">Example 200</a>
</div>
<div class="column">
<pre><code class="language-markdown">|<span class="space"> </span>f\|oo<span class="space"> </span><span class="space"> </span>|
|<span class="space"> </span>------<span class="space"> </span>|
|<span class="space"> </span>b<span class="space"> </span>`\|`<span class="space"> </span>az<span class="space"> </span>|
|<span class="space"> </span>b<span class="space"> </span>**\|**<span class="space"> </span>im<span class="space"> </span>|
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;f|oo&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;b<span class="space"> </span>&lt;code&gt;|&lt;/code&gt;<span class="space"> </span>az&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;b<span class="space"> </span>&lt;strong&gt;|&lt;/strong&gt;<span class="space"> </span>im&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;
</code></pre>
</div>
</div>
<p>The table is broken at the first empty line, or beginning of another
block-level structure:</p>
<div class="example" id="example-201">
<div class="examplenum">
<a href="#example-201">Example 201</a>
</div>
<div class="column">
<pre><code class="language-markdown">|<span class="space"> </span>abc<span class="space"> </span>|<span class="space"> </span>def<span class="space"> </span>|
|<span class="space"> </span>---<span class="space"> </span>|<span class="space"> </span>---<span class="space"> </span>|
|<span class="space"> </span>bar<span class="space"> </span>|<span class="space"> </span>baz<span class="space"> </span>|
&gt;<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;abc&lt;/th&gt;
&lt;th&gt;def&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;bar&lt;/td&gt;
&lt;td&gt;baz&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;
&lt;blockquote&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-202">
<div class="examplenum">
<a href="#example-202">Example 202</a>
</div>
<div class="column">
<pre><code class="language-markdown">|<span class="space"> </span>abc<span class="space"> </span>|<span class="space"> </span>def<span class="space"> </span>|
|<span class="space"> </span>---<span class="space"> </span>|<span class="space"> </span>---<span class="space"> </span>|
|<span class="space"> </span>bar<span class="space"> </span>|<span class="space"> </span>baz<span class="space"> </span>|
bar

bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;abc&lt;/th&gt;
&lt;th&gt;def&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;bar&lt;/td&gt;
&lt;td&gt;baz&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;bar&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;
&lt;p&gt;bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The header row must match the <a href="#delimiter-row">delimiter row</a> in the number of cells.  If not,
a table will not be recognized:</p>
<div class="example" id="example-203">
<div class="examplenum">
<a href="#example-203">Example 203</a>
</div>
<div class="column">
<pre><code class="language-markdown">|<span class="space"> </span>abc<span class="space"> </span>|<span class="space"> </span>def<span class="space"> </span>|
|<span class="space"> </span>---<span class="space"> </span>|
|<span class="space"> </span>bar<span class="space"> </span>|
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;|<span class="space"> </span>abc<span class="space"> </span>|<span class="space"> </span>def<span class="space"> </span>|
|<span class="space"> </span>---<span class="space"> </span>|
|<span class="space"> </span>bar<span class="space"> </span>|&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The remainder of the table’s rows may vary in the number of cells.  If there
are a number of cells fewer than the number of cells in the header row, empty
cells are inserted.  If there are greater, the excess is ignored:</p>
<div class="example" id="example-204">
<div class="examplenum">
<a href="#example-204">Example 204</a>
</div>
<div class="column">
<pre><code class="language-markdown">|<span class="space"> </span>abc<span class="space"> </span>|<span class="space"> </span>def<span class="space"> </span>|
|<span class="space"> </span>---<span class="space"> </span>|<span class="space"> </span>---<span class="space"> </span>|
|<span class="space"> </span>bar<span class="space"> </span>|
|<span class="space"> </span>bar<span class="space"> </span>|<span class="space"> </span>baz<span class="space"> </span>|<span class="space"> </span>boo<span class="space"> </span>|
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;abc&lt;/th&gt;
&lt;th&gt;def&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;bar&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;bar&lt;/td&gt;
&lt;td&gt;baz&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;
</code></pre>
</div>
</div>
<p>If there are no rows in the body, no <code>&lt;tbody&gt;</code> is generated in HTML output:</p>
<div class="example" id="example-205">
<div class="examplenum">
<a href="#example-205">Example 205</a>
</div>
<div class="column">
<pre><code class="language-markdown">|<span class="space"> </span>abc<span class="space"> </span>|<span class="space"> </span>def<span class="space"> </span>|
|<span class="space"> </span>---<span class="space"> </span>|<span class="space"> </span>---<span class="space"> </span>|
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;abc&lt;/th&gt;
&lt;th&gt;def&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;/table&gt;
</code></pre>
</div>
</div>
</div>
<h1 id="container-blocks" href="#container-blocks" class="definition">
<span class="number">5</span>Container blocks
</h1>
<p>A <a href="#container-blocks">container block</a> is a block that has other
blocks as its contents.  There are two basic kinds of container blocks:
<a href="#block-quotes">block quotes</a> and <a href="#list-items">list items</a>.
<a href="#list">Lists</a> are meta-containers for <a href="#list-items">list items</a>.</p>
<p>We define the syntax for container blocks recursively.  The general
form of the definition is:</p>
<blockquote>
<p>If X is a sequence of blocks, then the result of
transforming X in such-and-such a way is a container of type Y
with these blocks as its content.</p>
</blockquote>
<p>So, we explain what counts as a block quote or list item by explaining
how these can be <em>generated</em> from their contents. This should suffice
to define the syntax, although it does not give a recipe for <em>parsing</em>
these constructions.  (A recipe is provided below in the section entitled
<a href="#appendix-a-parsing-strategy">A parsing strategy</a>.)</p>
<h2 id="block-quotes" href="#block-quotes" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">5.1</span>Block quotes
</h2>
<p>A <a id="block-quote-marker" href="#block-quote-marker" class="definition">block quote marker</a>
consists of 0-3 spaces of initial indent, plus (a) the character <code>&gt;</code> together
with a following space, or (b) a single character <code>&gt;</code> not followed by a space.</p>
<p>The following rules define <a href="#block-quotes">block quotes</a>:</p>
<ol>
<li>
<p><strong>Basic case.</strong>  If a string of lines <em>Ls</em> constitute a sequence
of blocks <em>Bs</em>, then the result of prepending a <a href="#block-quote-marker">block quote
marker</a> to the beginning of each line in <em>Ls</em>
is a <a href="#block-quotes">block quote</a> containing <em>Bs</em>.</p>
</li>
<li>
<p><strong>Laziness.</strong>  If a string of lines <em>Ls</em> constitute a <a href="#block-quotes">block
quote</a> with contents <em>Bs</em>, then the result of deleting
the initial <a href="#block-quote-marker">block quote marker</a> from one or
more lines in which the next <a href="#non-whitespace-character">non-whitespace character</a> after the <a href="#block-quote-marker">block
quote marker</a> is <a href="#paragraph-continuation-text">paragraph continuation
text</a> is a block quote with <em>Bs</em> as its content.
<a id="paragraph-continuation-text" href="#paragraph-continuation-text" class="definition">Paragraph continuation text</a> is text
that will be parsed as part of the content of a paragraph, but does
not occur at the beginning of the paragraph.</p>
</li>
<li>
<p><strong>Consecutiveness.</strong>  A document cannot contain two <a href="#block-quotes">block
quotes</a> in a row unless there is a <a href="#blank-line">blank line</a> between them.</p>
</li>
</ol>
<p>Nothing else counts as a <a href="#block-quotes">block quote</a>.</p>
<p>Here is a simple example:</p>
<div class="example" id="example-206">
<div class="examplenum">
<a href="#example-206">Example 206</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>#<span class="space"> </span>Foo
&gt;<span class="space"> </span>bar
&gt;<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;h1&gt;Foo&lt;/h1&gt;
&lt;p&gt;bar
baz&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>The spaces after the <code>&gt;</code> characters can be omitted:</p>
<div class="example" id="example-207">
<div class="examplenum">
<a href="#example-207">Example 207</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;#<span class="space"> </span>Foo
&gt;bar
&gt;<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;h1&gt;Foo&lt;/h1&gt;
&lt;p&gt;bar
baz&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>The <code>&gt;</code> characters can be indented 1-3 spaces:</p>
<div class="example" id="example-208">
<div class="examplenum">
<a href="#example-208">Example 208</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>#<span class="space"> </span>Foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>bar
<span class="space"> </span>&gt;<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;h1&gt;Foo&lt;/h1&gt;
&lt;p&gt;bar
baz&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>Four spaces gives us a code block:</p>
<div class="example" id="example-209">
<div class="examplenum">
<a href="#example-209">Example 209</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>#<span class="space"> </span>Foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>bar
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;&amp;gt;<span class="space"> </span>#<span class="space"> </span>Foo
&amp;gt;<span class="space"> </span>bar
&amp;gt;<span class="space"> </span>baz
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>The Laziness clause allows us to omit the <code>&gt;</code> before
<a href="#paragraph-continuation-text">paragraph continuation text</a>:</p>
<div class="example" id="example-210">
<div class="examplenum">
<a href="#example-210">Example 210</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>#<span class="space"> </span>Foo
&gt;<span class="space"> </span>bar
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;h1&gt;Foo&lt;/h1&gt;
&lt;p&gt;bar
baz&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>A block quote can contain some lazy and some non-lazy
continuation lines:</p>
<div class="example" id="example-211">
<div class="examplenum">
<a href="#example-211">Example 211</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>bar
baz
&gt;<span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;bar
baz
foo&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>Laziness only applies to lines that would have been continuations of
paragraphs had they been prepended with <a href="#block-quote-marker">block quote markers</a>.
For example, the <code>&gt; </code> cannot be omitted in the second line of</p>
<pre><code class="language-markdown">&gt; foo
&gt; ---
</code></pre>
<p>without changing the meaning:</p>
<div class="example" id="example-212">
<div class="examplenum">
<a href="#example-212">Example 212</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>foo
---
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;/blockquote&gt;
&lt;hr<span class="space"> </span>/&gt;
</code></pre>
</div>
</div>
<p>Similarly, if we omit the <code>&gt; </code> in the second line of</p>
<pre><code class="language-markdown">&gt; - foo
&gt; - bar
</code></pre>
<p>then the block quote ends after the first line:</p>
<div class="example" id="example-213">
<div class="examplenum">
<a href="#example-213">Example 213</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>-<span class="space"> </span>foo
-<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;/ul&gt;
&lt;/blockquote&gt;
&lt;ul&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>For the same reason, we can’t omit the <code>&gt; </code> in front of
subsequent lines of an indented or fenced code block:</p>
<div class="example" id="example-214">
<div class="examplenum">
<a href="#example-214">Example 214</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;pre&gt;&lt;code&gt;foo
&lt;/code&gt;&lt;/pre&gt;
&lt;/blockquote&gt;
&lt;pre&gt;&lt;code&gt;bar
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-215">
<div class="examplenum">
<a href="#example-215">Example 215</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>```
foo
```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;
&lt;/blockquote&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Note that in the following case, we have a <a href="#lazy-continuation-line">lazy
continuation line</a>:</p>
<div class="example" id="example-216">
<div class="examplenum">
<a href="#example-216">Example 216</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;foo
-<span class="space"> </span>bar&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>To see why, note that in</p>
<pre><code class="language-markdown">&gt; foo
&gt;     - bar
</code></pre>
<p>the <code>- bar</code> is indented too far to start a list, and can’t
be an indented code block because indented code blocks cannot
interrupt paragraphs, so it is <a href="#paragraph-continuation-text">paragraph continuation text</a>.</p>
<p>A block quote can be empty:</p>
<div class="example" id="example-217">
<div class="examplenum">
<a href="#example-217">Example 217</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-218">
<div class="examplenum">
<a href="#example-218">Example 218</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;
&gt;<span class="space"> </span><span class="space"> </span>
&gt;<span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>A block quote can have initial or final blank lines:</p>
<div class="example" id="example-219">
<div class="examplenum">
<a href="#example-219">Example 219</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;
&gt;<span class="space"> </span>foo
&gt;<span class="space"> </span><span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>A blank line always separates block quotes:</p>
<div class="example" id="example-220">
<div class="examplenum">
<a href="#example-220">Example 220</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>foo

&gt;<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;/blockquote&gt;
&lt;blockquote&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>(Most current Markdown implementations, including John Gruber’s
original <code>Markdown.pl</code>, will parse this example as a single block quote
with two paragraphs.  But it seems better to allow the author to decide
whether two block quotes or one are wanted.)</p>
<p>Consecutiveness means that if we put these block quotes together,
we get a single block quote:</p>
<div class="example" id="example-221">
<div class="examplenum">
<a href="#example-221">Example 221</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>foo
&gt;<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;foo
bar&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>To get a block quote with two paragraphs, use:</p>
<div class="example" id="example-222">
<div class="examplenum">
<a href="#example-222">Example 222</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>foo
&gt;
&gt;<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>Block quotes can interrupt paragraphs:</p>
<div class="example" id="example-223">
<div class="examplenum">
<a href="#example-223">Example 223</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo
&gt;<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;/p&gt;
&lt;blockquote&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>In general, blank lines are not needed before or after block
quotes:</p>
<div class="example" id="example-224">
<div class="examplenum">
<a href="#example-224">Example 224</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>aaa
***
&gt;<span class="space"> </span>bbb
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;aaa&lt;/p&gt;
&lt;/blockquote&gt;
&lt;hr<span class="space"> </span>/&gt;
&lt;blockquote&gt;
&lt;p&gt;bbb&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>However, because of laziness, a blank line is needed between
a block quote and a following paragraph:</p>
<div class="example" id="example-225">
<div class="examplenum">
<a href="#example-225">Example 225</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>bar
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;bar
baz&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-226">
<div class="examplenum">
<a href="#example-226">Example 226</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>bar

baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/blockquote&gt;
&lt;p&gt;baz&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-227">
<div class="examplenum">
<a href="#example-227">Example 227</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>bar
&gt;
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/blockquote&gt;
&lt;p&gt;baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>It is a consequence of the Laziness rule that any number
of initial <code>&gt;</code>s may be omitted on a continuation line of a
nested block quote:</p>
<div class="example" id="example-228">
<div class="examplenum">
<a href="#example-228">Example 228</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>&gt;<span class="space"> </span>&gt;<span class="space"> </span>foo
bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;blockquote&gt;
&lt;blockquote&gt;
&lt;p&gt;foo
bar&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/blockquote&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-229">
<div class="examplenum">
<a href="#example-229">Example 229</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;&gt;&gt;<span class="space"> </span>foo
&gt;<span class="space"> </span>bar
&gt;&gt;baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;blockquote&gt;
&lt;blockquote&gt;
&lt;p&gt;foo
bar
baz&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/blockquote&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>When including an indented code block in a block quote,
remember that the <a href="#block-quote-marker">block quote marker</a> includes
both the <code>&gt;</code> and a following space.  So <em>five spaces</em> are needed after
the <code>&gt;</code>:</p>
<div class="example" id="example-230">
<div class="examplenum">
<a href="#example-230">Example 230</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>code

&gt;<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>not<span class="space"> </span>code
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;pre&gt;&lt;code&gt;code
&lt;/code&gt;&lt;/pre&gt;
&lt;/blockquote&gt;
&lt;blockquote&gt;
&lt;p&gt;not<span class="space"> </span>code&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<h2 id="list-items" href="#list-items" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">5.2</span>List items
</h2>
<p>A <a id="list-marker" href="#list-marker" class="definition">list marker</a> is a
<a href="#bullet-list-marker">bullet list marker</a> or an <a href="#ordered-list-marker">ordered list marker</a>.</p>
<p>A <a id="bullet-list-marker" href="#bullet-list-marker" class="definition">bullet list marker</a>
is a <code>-</code>, <code>+</code>, or <code>*</code> character.</p>
<p>An <a id="ordered-list-marker" href="#ordered-list-marker" class="definition">ordered list marker</a>
is a sequence of 1–9 arabic digits (<code>0-9</code>), followed by either a
<code>.</code> character or a <code>)</code> character.  (The reason for the length
limit is that with 10 digits we start seeing integer overflows
in some browsers.)</p>
<p>The following rules define <a href="#list-items">list items</a>:</p>
<ol>
<li>
<p><strong>Basic case.</strong>  If a sequence of lines <em>Ls</em> constitute a sequence of
blocks <em>Bs</em> starting with a <a href="#non-whitespace-character">non-whitespace character</a>, and <em>M</em> is a
list marker of width <em>W</em> followed by 1 ≤ <em>N</em> ≤ 4 spaces, then the result
of prepending <em>M</em> and the following spaces to the first line of
<em>Ls</em>, and indenting subsequent lines of <em>Ls</em> by <em>W + N</em> spaces, is a
list item with <em>Bs</em> as its contents.  The type of the list item
(bullet or ordered) is determined by the type of its list marker.
If the list item is ordered, then it is also assigned a start
number, based on the ordered list marker.</p>
<p>Exceptions:</p>
<ol>
<li>When the first list item in a <a href="#list">list</a> interrupts
a paragraph—that is, when it starts on a line that would
otherwise count as <a href="#paragraph-continuation-text">paragraph continuation text</a>—then (a)
the lines <em>Ls</em> must not begin with a blank line, and (b) if
the list item is ordered, the start number must be 1.</li>
<li>If any line is a <a href="#thematic-break">thematic break</a> then
that line is not a list item.</li>
</ol>
</li>
</ol>
<p>For example, let <em>Ls</em> be the lines</p>
<div class="example" id="example-231">
<div class="examplenum">
<a href="#example-231">Example 231</a>
</div>
<div class="column">
<pre><code class="language-markdown">A<span class="space"> </span>paragraph
with<span class="space"> </span>two<span class="space"> </span>lines.

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code

&gt;<span class="space"> </span>A<span class="space"> </span>block<span class="space"> </span>quote.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;A<span class="space"> </span>paragraph
with<span class="space"> </span>two<span class="space"> </span>lines.&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;indented<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
&lt;blockquote&gt;
&lt;p&gt;A<span class="space"> </span>block<span class="space"> </span>quote.&lt;/p&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>And let <em>M</em> be the marker <code>1.</code>, and <em>N</em> = 2.  Then rule #1 says
that the following is an ordered list item with start number 1,
and the same contents as <em>Ls</em>:</p>
<div class="example" id="example-232">
<div class="examplenum">
<a href="#example-232">Example 232</a>
</div>
<div class="column">
<pre><code class="language-markdown">1.<span class="space"> </span><span class="space"> </span>A<span class="space"> </span>paragraph
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>with<span class="space"> </span>two<span class="space"> </span>lines.

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>A<span class="space"> </span>block<span class="space"> </span>quote.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;p&gt;A<span class="space"> </span>paragraph
with<span class="space"> </span>two<span class="space"> </span>lines.&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;indented<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
&lt;blockquote&gt;
&lt;p&gt;A<span class="space"> </span>block<span class="space"> </span>quote.&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>The most important thing to notice is that the position of
the text after the list marker determines how much indentation
is needed in subsequent blocks in the list item.  If the list
marker takes up two spaces, and there are three spaces between
the list marker and the next <a href="#non-whitespace-character">non-whitespace character</a>, then blocks
must be indented five spaces in order to fall under the list
item.</p>
<p>Here are some examples showing how far content must be indented to be
put under the list item:</p>
<div class="example" id="example-233">
<div class="examplenum">
<a href="#example-233">Example 233</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>one

<span class="space"> </span>two
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;one&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;two&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-234">
<div class="examplenum">
<a href="#example-234">Example 234</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>one

<span class="space"> </span><span class="space"> </span>two
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;one&lt;/p&gt;
&lt;p&gt;two&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-235">
<div class="examplenum">
<a href="#example-235">Example 235</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span>-<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>one

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>two
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;one&lt;/li&gt;
&lt;/ul&gt;
&lt;pre&gt;&lt;code&gt;<span class="space"> </span>two
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-236">
<div class="examplenum">
<a href="#example-236">Example 236</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span>-<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>one

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>two
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;one&lt;/p&gt;
&lt;p&gt;two&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>It is tempting to think of this in terms of columns:  the continuation
blocks must be indented at least to the column of the first
<a href="#non-whitespace-character">non-whitespace character</a> after the list marker. However, that is not quite right.
The spaces after the list marker determine how much relative indentation
is needed.  Which column this indentation reaches will depend on
how the list item is embedded in other constructions, as shown by
this example:</p>
<div class="example" id="example-237">
<div class="examplenum">
<a href="#example-237">Example 237</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>&gt;<span class="space"> </span>1.<span class="space"> </span><span class="space"> </span>one
&gt;&gt;
&gt;&gt;<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>two
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;blockquote&gt;
&lt;ol&gt;
&lt;li&gt;
&lt;p&gt;one&lt;/p&gt;
&lt;p&gt;two&lt;/p&gt;
&lt;/li&gt;
&lt;/ol&gt;
&lt;/blockquote&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>Here <code>two</code> occurs in the same column as the list marker <code>1.</code>,
but is actually contained in the list item, because there is
sufficient indentation after the last containing blockquote marker.</p>
<p>The converse is also possible.  In the following example, the word <code>two</code>
occurs far to the right of the initial text of the list item, <code>one</code>, but
it is not considered part of the list item, because it is not indented
far enough past the blockquote marker:</p>
<div class="example" id="example-238">
<div class="examplenum">
<a href="#example-238">Example 238</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;&gt;-<span class="space"> </span>one
&gt;&gt;
<span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>two
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;blockquote&gt;
&lt;ul&gt;
&lt;li&gt;one&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;two&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<p>Note that at least one space is needed between the list marker and
any following content, so these are not list items:</p>
<div class="example" id="example-239">
<div class="examplenum">
<a href="#example-239">Example 239</a>
</div>
<div class="column">
<pre><code class="language-markdown">-one

2.two
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;-one&lt;/p&gt;
&lt;p&gt;2.two&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A list item may contain blocks that are separated by more than
one blank line.</p>
<div class="example" id="example-240">
<div class="examplenum">
<a href="#example-240">Example 240</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo


<span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>A list item may contain any kind of block:</p>
<div class="example" id="example-241">
<div class="examplenum">
<a href="#example-241">Example 241</a>
</div>
<div class="column">
<pre><code class="language-markdown">1.<span class="space"> </span><span class="space"> </span>foo

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>```
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bar
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>```

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>baz

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>bam
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;bar
&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;baz&lt;/p&gt;
&lt;blockquote&gt;
&lt;p&gt;bam&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>A list item that contains an indented code block will preserve
empty lines within the code block verbatim.</p>
<div class="example" id="example-242">
<div class="examplenum">
<a href="#example-242">Example 242</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>Foo

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bar


<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;Foo&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;bar


baz
&lt;/code&gt;&lt;/pre&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>Note that ordered list start numbers must be nine digits or less:</p>
<div class="example" id="example-243">
<div class="examplenum">
<a href="#example-243">Example 243</a>
</div>
<div class="column">
<pre><code class="language-markdown">123456789.<span class="space"> </span>ok
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol<span class="space"> </span>start="123456789"&gt;
&lt;li&gt;ok&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-244">
<div class="examplenum">
<a href="#example-244">Example 244</a>
</div>
<div class="column">
<pre><code class="language-markdown">1234567890.<span class="space"> </span>not<span class="space"> </span>ok
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;1234567890.<span class="space"> </span>not<span class="space"> </span>ok&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A start number may begin with 0s:</p>
<div class="example" id="example-245">
<div class="examplenum">
<a href="#example-245">Example 245</a>
</div>
<div class="column">
<pre><code class="language-markdown">0.<span class="space"> </span>ok
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol<span class="space"> </span>start="0"&gt;
&lt;li&gt;ok&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-246">
<div class="examplenum">
<a href="#example-246">Example 246</a>
</div>
<div class="column">
<pre><code class="language-markdown">003.<span class="space"> </span>ok
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol<span class="space"> </span>start="3"&gt;
&lt;li&gt;ok&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>A start number may not be negative:</p>
<div class="example" id="example-247">
<div class="examplenum">
<a href="#example-247">Example 247</a>
</div>
<div class="column">
<pre><code class="language-markdown">-1.<span class="space"> </span>not<span class="space"> </span>ok
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;-1.<span class="space"> </span>not<span class="space"> </span>ok&lt;/p&gt;
</code></pre>
</div>
</div>
<ol start="2">
<li><strong>Item starting with indented code.</strong>  If a sequence of lines <em>Ls</em>
constitute a sequence of blocks <em>Bs</em> starting with an indented code
block, and <em>M</em> is a list marker of width <em>W</em> followed by
one space, then the result of prepending <em>M</em> and the following
space to the first line of <em>Ls</em>, and indenting subsequent lines of
<em>Ls</em> by <em>W + 1</em> spaces, is a list item with <em>Bs</em> as its contents.
If a line is empty, then it need not be indented.  The type of the
list item (bullet or ordered) is determined by the type of its list
marker.  If the list item is ordered, then it is also assigned a
start number, based on the ordered list marker.</li>
</ol>
<p>An indented code block will have to be indented four spaces beyond
the edge of the region where text will be included in the list item.
In the following case that is 6 spaces:</p>
<div class="example" id="example-248">
<div class="examplenum">
<a href="#example-248">Example 248</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;bar
&lt;/code&gt;&lt;/pre&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>And in this case it is 11 spaces:</p>
<div class="example" id="example-249">
<div class="examplenum">
<a href="#example-249">Example 249</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>10.<span class="space"> </span><span class="space"> </span>foo

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol<span class="space"> </span>start="10"&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;bar
&lt;/code&gt;&lt;/pre&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>If the <em>first</em> block in the list item is an indented code block,
then by rule #2, the contents must be indented <em>one</em> space after the
list marker:</p>
<div class="example" id="example-250">
<div class="examplenum">
<a href="#example-250">Example 250</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code

paragraph

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>more<span class="space"> </span>code
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;indented<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;paragraph&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;more<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-251">
<div class="examplenum">
<a href="#example-251">Example 251</a>
</div>
<div class="column">
<pre><code class="language-markdown">1.<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code

<span class="space"> </span><span class="space"> </span><span class="space"> </span>paragraph

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>more<span class="space"> </span>code
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;pre&gt;&lt;code&gt;indented<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;paragraph&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;more<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>Note that an additional space indent is interpreted as space
inside the code block:</p>
<div class="example" id="example-252">
<div class="examplenum">
<a href="#example-252">Example 252</a>
</div>
<div class="column">
<pre><code class="language-markdown">1.<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code

<span class="space"> </span><span class="space"> </span><span class="space"> </span>paragraph

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>more<span class="space"> </span>code
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;pre&gt;&lt;code&gt;<span class="space"> </span>indented<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;paragraph&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;more<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>Note that rules #1 and #2 only apply to two cases:  (a) cases
in which the lines to be included in a list item begin with a
<a href="#non-whitespace-character">non-whitespace character</a>, and (b) cases in which
they begin with an indented code
block.  In a case like the following, where the first block begins with
a three-space indent, the rules do not allow us to form a list item by
indenting the whole thing and prepending a list marker:</p>
<div class="example" id="example-253">
<div class="examplenum">
<a href="#example-253">Example 253</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo

bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;/p&gt;
&lt;p&gt;bar&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-254">
<div class="examplenum">
<a href="#example-254">Example 254</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>foo

<span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not a significant restriction, because when a block begins
with 1-3 spaces indent, the indentation can always be removed without
a change in interpretation, allowing rule #1 to be applied.  So, in
the above case:</p>
<div class="example" id="example-255">
<div class="examplenum">
<a href="#example-255">Example 255</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span><span class="space"> </span>foo

<span class="space"> </span><span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<ol start="3">
<li><strong>Item starting with a blank line.</strong>  If a sequence of lines <em>Ls</em>
starting with a single <a href="#blank-line">blank line</a> constitute a (possibly empty)
sequence of blocks <em>Bs</em>, not separated from each other by more than
one blank line, and <em>M</em> is a list marker of width <em>W</em>,
then the result of prepending <em>M</em> to the first line of <em>Ls</em>, and
indenting subsequent lines of <em>Ls</em> by <em>W + 1</em> spaces, is a list
item with <em>Bs</em> as its contents.
If a line is empty, then it need not be indented.  The type of the
list item (bullet or ordered) is determined by the type of its list
marker.  If the list item is ordered, then it is also assigned a
start number, based on the ordered list marker.</li>
</ol>
<p>Here are some list items that start with a blank line but are not empty:</p>
<div class="example" id="example-256">
<div class="examplenum">
<a href="#example-256">Example 256</a>
</div>
<div class="column">
<pre><code class="language-markdown">-
<span class="space"> </span><span class="space"> </span>foo
-
<span class="space"> </span><span class="space"> </span>```
<span class="space"> </span><span class="space"> </span>bar
<span class="space"> </span><span class="space"> </span>```
-
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;li&gt;
&lt;pre&gt;&lt;code&gt;bar
&lt;/code&gt;&lt;/pre&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;pre&gt;&lt;code&gt;baz
&lt;/code&gt;&lt;/pre&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>When the list item starts with a blank line, the number of spaces
following the list marker doesn’t change the required indentation:</p>
<div class="example" id="example-257">
<div class="examplenum">
<a href="#example-257">Example 257</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span><span class="space"> </span><span class="space"> </span>
<span class="space"> </span><span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>A list item can begin with at most one blank line.
In the following example, <code>foo</code> is not part of the list
item:</p>
<div class="example" id="example-258">
<div class="examplenum">
<a href="#example-258">Example 258</a>
</div>
<div class="column">
<pre><code class="language-markdown">-

<span class="space"> </span><span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;foo&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Here is an empty bullet list item:</p>
<div class="example" id="example-259">
<div class="examplenum">
<a href="#example-259">Example 259</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo
-
-<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;li&gt;&lt;/li&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>It does not matter whether there are spaces following the <a href="#list-marker">list marker</a>:</p>
<div class="example" id="example-260">
<div class="examplenum">
<a href="#example-260">Example 260</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo
-<span class="space"> </span><span class="space"> </span><span class="space"> </span>
-<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;li&gt;&lt;/li&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>Here is an empty ordered list item:</p>
<div class="example" id="example-261">
<div class="examplenum">
<a href="#example-261">Example 261</a>
</div>
<div class="column">
<pre><code class="language-markdown">1.<span class="space"> </span>foo
2.
3.<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;li&gt;&lt;/li&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>A list may start or end with an empty list item:</p>
<div class="example" id="example-262">
<div class="examplenum">
<a href="#example-262">Example 262</a>
</div>
<div class="column">
<pre><code class="language-markdown">*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>However, an empty list item cannot interrupt a paragraph:</p>
<div class="example" id="example-263">
<div class="examplenum">
<a href="#example-263">Example 263</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo
*

foo
1.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo
*&lt;/p&gt;
&lt;p&gt;foo
1.&lt;/p&gt;
</code></pre>
</div>
</div>
<ol start="4">
<li><strong>Indentation.</strong>  If a sequence of lines <em>Ls</em> constitutes a list item
according to rule #1, #2, or #3, then the result of indenting each line
of <em>Ls</em> by 1-3 spaces (the same for each line) also constitutes a
list item with the same contents and attributes.  If a line is
empty, then it need not be indented.</li>
</ol>
<p>Indented one space:</p>
<div class="example" id="example-264">
<div class="examplenum">
<a href="#example-264">Example 264</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span>1.<span class="space"> </span><span class="space"> </span>A<span class="space"> </span>paragraph
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>with<span class="space"> </span>two<span class="space"> </span>lines.

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>A<span class="space"> </span>block<span class="space"> </span>quote.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;p&gt;A<span class="space"> </span>paragraph
with<span class="space"> </span>two<span class="space"> </span>lines.&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;indented<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
&lt;blockquote&gt;
&lt;p&gt;A<span class="space"> </span>block<span class="space"> </span>quote.&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>Indented two spaces:</p>
<div class="example" id="example-265">
<div class="examplenum">
<a href="#example-265">Example 265</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>1.<span class="space"> </span><span class="space"> </span>A<span class="space"> </span>paragraph
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>with<span class="space"> </span>two<span class="space"> </span>lines.

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>A<span class="space"> </span>block<span class="space"> </span>quote.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;p&gt;A<span class="space"> </span>paragraph
with<span class="space"> </span>two<span class="space"> </span>lines.&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;indented<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
&lt;blockquote&gt;
&lt;p&gt;A<span class="space"> </span>block<span class="space"> </span>quote.&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>Indented three spaces:</p>
<div class="example" id="example-266">
<div class="examplenum">
<a href="#example-266">Example 266</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span>1.<span class="space"> </span><span class="space"> </span>A<span class="space"> </span>paragraph
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>with<span class="space"> </span>two<span class="space"> </span>lines.

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>A<span class="space"> </span>block<span class="space"> </span>quote.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;p&gt;A<span class="space"> </span>paragraph
with<span class="space"> </span>two<span class="space"> </span>lines.&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;indented<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
&lt;blockquote&gt;
&lt;p&gt;A<span class="space"> </span>block<span class="space"> </span>quote.&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>Four spaces indent gives a code block:</p>
<div class="example" id="example-267">
<div class="examplenum">
<a href="#example-267">Example 267</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>1.<span class="space"> </span><span class="space"> </span>A<span class="space"> </span>paragraph
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>with<span class="space"> </span>two<span class="space"> </span>lines.

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>A<span class="space"> </span>block<span class="space"> </span>quote.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;1.<span class="space"> </span><span class="space"> </span>A<span class="space"> </span>paragraph
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>with<span class="space"> </span>two<span class="space"> </span>lines.

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&amp;gt;<span class="space"> </span>A<span class="space"> </span>block<span class="space"> </span>quote.
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<ol start="5">
<li><strong>Laziness.</strong>  If a string of lines <em>Ls</em> constitute a <a href="#list-items">list
item</a> with contents <em>Bs</em>, then the result of deleting
some or all of the indentation from one or more lines in which the
next <a href="#non-whitespace-character">non-whitespace character</a> after the indentation is
<a href="#paragraph-continuation-text">paragraph continuation text</a> is a
list item with the same contents and attributes.  The unindented
lines are called
<a id="lazy-continuation-line" href="#lazy-continuation-line" class="definition">lazy continuation line</a>s.</li>
</ol>
<p>Here is an example with <a href="#lazy-continuation-line">lazy continuation lines</a>:</p>
<div class="example" id="example-268">
<div class="examplenum">
<a href="#example-268">Example 268</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>1.<span class="space"> </span><span class="space"> </span>A<span class="space"> </span>paragraph
with<span class="space"> </span>two<span class="space"> </span>lines.

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>indented<span class="space"> </span>code

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>A<span class="space"> </span>block<span class="space"> </span>quote.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;p&gt;A<span class="space"> </span>paragraph
with<span class="space"> </span>two<span class="space"> </span>lines.&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;indented<span class="space"> </span>code
&lt;/code&gt;&lt;/pre&gt;
&lt;blockquote&gt;
&lt;p&gt;A<span class="space"> </span>block<span class="space"> </span>quote.&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>Indentation can be partially deleted:</p>
<div class="example" id="example-269">
<div class="examplenum">
<a href="#example-269">Example 269</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span>1.<span class="space"> </span><span class="space"> </span>A<span class="space"> </span>paragraph
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>with<span class="space"> </span>two<span class="space"> </span>lines.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;A<span class="space"> </span>paragraph
with<span class="space"> </span>two<span class="space"> </span>lines.&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>These examples show how laziness can work in nested structures:</p>
<div class="example" id="example-270">
<div class="examplenum">
<a href="#example-270">Example 270</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>1.<span class="space"> </span>&gt;<span class="space"> </span>Blockquote
continued<span class="space"> </span>here.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;ol&gt;
&lt;li&gt;
&lt;blockquote&gt;
&lt;p&gt;Blockquote
continued<span class="space"> </span>here.&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/li&gt;
&lt;/ol&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-271">
<div class="examplenum">
<a href="#example-271">Example 271</a>
</div>
<div class="column">
<pre><code class="language-markdown">&gt;<span class="space"> </span>1.<span class="space"> </span>&gt;<span class="space"> </span>Blockquote
&gt;<span class="space"> </span>continued<span class="space"> </span>here.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;blockquote&gt;
&lt;ol&gt;
&lt;li&gt;
&lt;blockquote&gt;
&lt;p&gt;Blockquote
continued<span class="space"> </span>here.&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/li&gt;
&lt;/ol&gt;
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
<ol start="6">
<li><strong>That’s all.</strong> Nothing that is not counted as a list item by rules
#1–5 counts as a <a href="#list-items">list item</a>.</li>
</ol>
<p>The rules for sublists follow from the general rules
<a href="#list-items">above</a>.  A sublist must be indented the same number
of spaces a paragraph would need to be in order to be included
in the list item.</p>
<p>So, in this case we need two spaces indent:</p>
<div class="example" id="example-272">
<div class="examplenum">
<a href="#example-272">Example 272</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>bar
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>baz
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>boo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo
&lt;ul&gt;
&lt;li&gt;bar
&lt;ul&gt;
&lt;li&gt;baz
&lt;ul&gt;
&lt;li&gt;boo&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>One is not enough:</p>
<div class="example" id="example-273">
<div class="examplenum">
<a href="#example-273">Example 273</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo
<span class="space"> </span>-<span class="space"> </span>bar
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>baz
<span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>boo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;li&gt;baz&lt;/li&gt;
&lt;li&gt;boo&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>Here we need four, because the list marker is wider:</p>
<div class="example" id="example-274">
<div class="examplenum">
<a href="#example-274">Example 274</a>
</div>
<div class="column">
<pre><code class="language-markdown">10)<span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol<span class="space"> </span>start="10"&gt;
&lt;li&gt;foo
&lt;ul&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>Three is not enough:</p>
<div class="example" id="example-275">
<div class="examplenum">
<a href="#example-275">Example 275</a>
</div>
<div class="column">
<pre><code class="language-markdown">10)<span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol<span class="space"> </span>start="10"&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;/ol&gt;
&lt;ul&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>A list may be the first block in a list item:</p>
<div class="example" id="example-276">
<div class="examplenum">
<a href="#example-276">Example 276</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>-<span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-277">
<div class="examplenum">
<a href="#example-277">Example 277</a>
</div>
<div class="column">
<pre><code class="language-markdown">1.<span class="space"> </span>-<span class="space"> </span>2.<span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;ul&gt;
&lt;li&gt;
&lt;ol<span class="space"> </span>start="2"&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;/ol&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>A list item can contain a heading:</p>
<div class="example" id="example-278">
<div class="examplenum">
<a href="#example-278">Example 278</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>#<span class="space"> </span>Foo
-<span class="space"> </span>Bar
<span class="space"> </span><span class="space"> </span>---
<span class="space"> </span><span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;h1&gt;Foo&lt;/h1&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;h2&gt;Bar&lt;/h2&gt;
baz&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<h3 id="motivation" href="#motivation" class="definition">
<span class="number">5.2.1</span>Motivation
</h3>
<p>John Gruber’s Markdown spec says the following about list items:</p>
<ol>
<li>
<p>“List markers typically start at the left margin, but may be indented
by up to three spaces. List markers must be followed by one or more
spaces or a tab.”</p>
</li>
<li>
<p>“To make lists look nice, you can wrap items with hanging indents….
But if you don’t want to, you don’t have to.”</p>
</li>
<li>
<p>“List items may consist of multiple paragraphs. Each subsequent
paragraph in a list item must be indented by either 4 spaces or one
tab.”</p>
</li>
<li>
<p>“It looks nice if you indent every line of the subsequent paragraphs,
but here again, Markdown will allow you to be lazy.”</p>
</li>
<li>
<p>“To put a blockquote within a list item, the blockquote’s <code>&gt;</code>
delimiters need to be indented.”</p>
</li>
<li>
<p>“To put a code block within a list item, the code block needs to be
indented twice — 8 spaces or two tabs.”</p>
</li>
</ol>
<p>These rules specify that a paragraph under a list item must be indented
four spaces (presumably, from the left margin, rather than the start of
the list marker, but this is not said), and that code under a list item
must be indented eight spaces instead of the usual four.  They also say
that a block quote must be indented, but not by how much; however, the
example given has four spaces indentation.  Although nothing is said
about other kinds of block-level content, it is certainly reasonable to
infer that <em>all</em> block elements under a list item, including other
lists, must be indented four spaces.  This principle has been called the
<em>four-space rule</em>.</p>
<p>The four-space rule is clear and principled, and if the reference
implementation <code>Markdown.pl</code> had followed it, it probably would have
become the standard.  However, <code>Markdown.pl</code> allowed paragraphs and
sublists to start with only two spaces indentation, at least on the
outer level.  Worse, its behavior was inconsistent: a sublist of an
outer-level list needed two spaces indentation, but a sublist of this
sublist needed three spaces.  It is not surprising, then, that different
implementations of Markdown have developed very different rules for
determining what comes under a list item.  (Pandoc and python-Markdown,
for example, stuck with Gruber’s syntax description and the four-space
rule, while discount, redcarpet, marked, PHP Markdown, and others
followed <code>Markdown.pl</code>’s behavior more closely.)</p>
<p>Unfortunately, given the divergences between implementations, there
is no way to give a spec for list items that will be guaranteed not
to break any existing documents.  However, the spec given here should
correctly handle lists formatted with either the four-space rule or
the more forgiving <code>Markdown.pl</code> behavior, provided they are laid out
in a way that is natural for a human to read.</p>
<p>The strategy here is to let the width and indentation of the list marker
determine the indentation necessary for blocks to fall under the list
item, rather than having a fixed and arbitrary number.  The writer can
think of the body of the list item as a unit which gets indented to the
right enough to fit the list marker (and any indentation on the list
marker).  (The laziness rule, #5, then allows continuation lines to be
unindented if needed.)</p>
<p>This rule is superior, we claim, to any rule requiring a fixed level of
indentation from the margin.  The four-space rule is clear but
unnatural. It is quite unintuitive that</p>
<pre><code class="language-markdown">- foo

  bar

  - baz
</code></pre>
<p>should be parsed as two lists with an intervening paragraph,</p>
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;baz&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
<p>as the four-space rule demands, rather than a single list,</p>
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;baz&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
<p>The choice of four spaces is arbitrary.  It can be learned, but it is
not likely to be guessed, and it trips up beginners regularly.</p>
<p>Would it help to adopt a two-space rule?  The problem is that such
a rule, together with the rule allowing 1–3 spaces indentation of the
initial list marker, allows text that is indented <em>less than</em> the
original list marker to be included in the list item. For example,
<code>Markdown.pl</code> parses</p>
<pre><code class="language-markdown">   - one

  two
</code></pre>
<p>as a single list item, with <code>two</code> a continuation paragraph:</p>
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;one&lt;/p&gt;
&lt;p&gt;two&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
<p>and similarly</p>
<pre><code class="language-markdown">&gt;   - one
&gt;
&gt;  two
</code></pre>
<p>as</p>
<pre><code class="language-html">&lt;blockquote&gt;
&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;one&lt;/p&gt;
&lt;p&gt;two&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/blockquote&gt;
</code></pre>
<p>This is extremely unintuitive.</p>
<p>Rather than requiring a fixed indent from the margin, we could require
a fixed indent (say, two spaces, or even one space) from the list marker (which
may itself be indented).  This proposal would remove the last anomaly
discussed.  Unlike the spec presented above, it would count the following
as a list item with a subparagraph, even though the paragraph <code>bar</code>
is not indented as far as the first paragraph <code>foo</code>:</p>
<pre><code class="language-markdown"> 10. foo

   bar  
</code></pre>
<p>Arguably this text does read like a list item with <code>bar</code> as a subparagraph,
which may count in favor of the proposal.  However, on this proposal indented
code would have to be indented six spaces after the list marker.  And this
would break a lot of existing Markdown, which has the pattern:</p>
<pre><code class="language-markdown">1.  foo

        indented code
</code></pre>
<p>where the code is indented eight spaces.  The spec above, by contrast, will
parse this text as expected, since the code block’s indentation is measured
from the beginning of <code>foo</code>.</p>
<p>The one case that needs special treatment is a list item that <em>starts</em>
with indented code.  How much indentation is required in that case, since
we don’t have a “first paragraph” to measure from?  Rule #2 simply stipulates
that in such cases, we require one space indentation from the list marker
(and then the normal four spaces for the indented code).  This will match the
four-space rule in cases where the list marker plus its initial indentation
takes four spaces (a common case), but diverge in other cases.</p>
<div class="extension">
<h2 id="task-list-items-extension-" href="#task-list-items-extension-" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">5.3</span>Task list items (extension)
</h2>
<p>GFM enables the <code>tasklist</code> extension, where an additional processing step is
performed on <a href="#list-items">list items</a>.</p>
<p>A <a id="task-list-item" href="#task-list-item" class="definition">task list item</a> is a <a href="#list-items">list item</a> where the first block in it
is a paragraph which begins with a <a href="#task-list-item-marker">task list item marker</a> and at least one
whitespace character before any other content.</p>
<p>A <a id="task-list-item-marker" href="#task-list-item-marker" class="definition">task list item marker</a> consists of an optional number of spaces, a left
bracket (<code>[</code>), either a whitespace character or the letter <code>x</code> in either
lowercase or uppercase, and then a right bracket (<code>]</code>).</p>
<p>When rendered, the <a href="#task-list-item-marker">task list item marker</a> is replaced with a semantic checkbox element;
in an HTML output, this would be an <code>&lt;input type="checkbox"&gt;</code> element.</p>
<p>If the character between the brackets is a whitespace character, the checkbox
is unchecked.  Otherwise, the checkbox is checked.</p>
<p>This spec does not define how the checkbox elements are interacted with: in practice,
implementors are free to render the checkboxes as disabled or inmutable elements,
or they may dynamically handle dynamic interactions (i.e. checking, unchecking) in
the final rendered document.</p>
<div class="example" id="example-279">
<div class="examplenum">
<a href="#example-279">Example 279</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>[<span class="space"> </span>]<span class="space"> </span>foo
-<span class="space"> </span>[x]<span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;&lt;input<span class="space"> </span>disabled=""<span class="space"> </span>type="checkbox"&gt;<span class="space"> </span>foo&lt;/li&gt;
&lt;li&gt;&lt;input<span class="space"> </span>checked=""<span class="space"> </span>disabled=""<span class="space"> </span>type="checkbox"&gt;<span class="space"> </span>bar&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>Task lists can be arbitrarily nested:</p>
<div class="example" id="example-280">
<div class="examplenum">
<a href="#example-280">Example 280</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>[x]<span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>[<span class="space"> </span>]<span class="space"> </span>bar
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>[x]<span class="space"> </span>baz
-<span class="space"> </span>[<span class="space"> </span>]<span class="space"> </span>bim
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;&lt;input<span class="space"> </span>checked=""<span class="space"> </span>disabled=""<span class="space"> </span>type="checkbox"&gt;<span class="space"> </span>foo
&lt;ul&gt;
&lt;li&gt;&lt;input<span class="space"> </span>disabled=""<span class="space"> </span>type="checkbox"&gt;<span class="space"> </span>bar&lt;/li&gt;
&lt;li&gt;&lt;input<span class="space"> </span>checked=""<span class="space"> </span>disabled=""<span class="space"> </span>type="checkbox"&gt;<span class="space"> </span>baz&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;&lt;input<span class="space"> </span>disabled=""<span class="space"> </span>type="checkbox"&gt;<span class="space"> </span>bim&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
</div>
<h2 id="lists" href="#lists" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">5.4</span>Lists
</h2>
<p>A <a id="list" href="#list" class="definition">list</a> is a sequence of one or more
list items <a href="#of-the-same-type">of the same type</a>.  The list items
may be separated by any number of blank lines.</p>
<p>Two list items are <a id="of-the-same-type" href="#of-the-same-type" class="definition">of the same type</a>
if they begin with a <a href="#list-marker">list marker</a> of the same type.
Two list markers are of the
same type if (a) they are bullet list markers using the same character
(<code>-</code>, <code>+</code>, or <code>*</code>) or (b) they are ordered list numbers with the same
delimiter (either <code>.</code> or <code>)</code>).</p>
<p>A list is an <a id="ordered-list" href="#ordered-list" class="definition">ordered list</a>
if its constituent list items begin with
<a href="#ordered-list-marker">ordered list markers</a>, and a
<a id="bullet-list" href="#bullet-list" class="definition">bullet list</a> if its constituent list
items begin with <a href="#bullet-list-marker">bullet list markers</a>.</p>
<p>The <a id="start-number" href="#start-number" class="definition">start number</a>
of an <a href="#ordered-list">ordered list</a> is determined by the list number of
its initial list item.  The numbers of subsequent list items are
disregarded.</p>
<p>A list is <a id="loose" href="#loose" class="definition">loose</a> if any of its constituent
list items are separated by blank lines, or if any of its constituent
list items directly contain two block-level elements with a blank line
between them.  Otherwise a list is <a id="tight" href="#tight" class="definition">tight</a>.
(The difference in HTML output is that paragraphs in a loose list are
wrapped in <code>&lt;p&gt;</code> tags, while paragraphs in a tight list are not.)</p>
<p>Changing the bullet or ordered list delimiter starts a new list:</p>
<div class="example" id="example-281">
<div class="examplenum">
<a href="#example-281">Example 281</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo
-<span class="space"> </span>bar
+<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ul&gt;
&lt;ul&gt;
&lt;li&gt;baz&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-282">
<div class="examplenum">
<a href="#example-282">Example 282</a>
</div>
<div class="column">
<pre><code class="language-markdown">1.<span class="space"> </span>foo
2.<span class="space"> </span>bar
3)<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ol&gt;
&lt;ol<span class="space"> </span>start="3"&gt;
&lt;li&gt;baz&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>In CommonMark, a list can interrupt a paragraph. That is,
no blank line is needed to separate a paragraph from a following
list:</p>
<div class="example" id="example-283">
<div class="examplenum">
<a href="#example-283">Example 283</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo
-<span class="space"> </span>bar
-<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;li&gt;baz&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p><code>Markdown.pl</code> does not allow this, through fear of triggering a list
via a numeral in a hard-wrapped line:</p>
<pre><code class="language-markdown">The number of windows in my house is
14.  The number of doors is 6.
</code></pre>
<p>Oddly, though, <code>Markdown.pl</code> <em>does</em> allow a blockquote to
interrupt a paragraph, even though the same considerations might
apply.</p>
<p>In CommonMark, we do allow lists to interrupt paragraphs, for
two reasons.  First, it is natural and not uncommon for people
to start lists without blank lines:</p>
<pre><code class="language-markdown">I need to buy
- new shoes
- a coat
- a plane ticket
</code></pre>
<p>Second, we are attracted to a</p>
<blockquote>
<p><a id="principle-of-uniformity" href="#principle-of-uniformity" class="definition">principle of uniformity</a>:
if a chunk of text has a certain
meaning, it will continue to have the same meaning when put into a
container block (such as a list item or blockquote).</p>
</blockquote>
<p>(Indeed, the spec for <a href="#list-items">list items</a> and <a href="#block-quotes">block quotes</a> presupposes
this principle.) This principle implies that if</p>
<pre><code class="language-markdown">  * I need to buy
    - new shoes
    - a coat
    - a plane ticket
</code></pre>
<p>is a list item containing a paragraph followed by a nested sublist,
as all Markdown implementations agree it is (though the paragraph
may be rendered without <code>&lt;p&gt;</code> tags, since the list is “tight”),
then</p>
<pre><code class="language-markdown">I need to buy
- new shoes
- a coat
- a plane ticket
</code></pre>
<p>by itself should be a paragraph followed by a nested sublist.</p>
<p>Since it is well established Markdown practice to allow lists to
interrupt paragraphs inside list items, the <a href="#principle-of-uniformity">principle of
uniformity</a> requires us to allow this outside list items as
well.  (<a href="http://docutils.sourceforge.net/rst.html">reStructuredText</a>
takes a different approach, requiring blank lines before lists
even inside other list items.)</p>
<p>In order to solve of unwanted lists in paragraphs with
hard-wrapped numerals, we allow only lists starting with <code>1</code> to
interrupt paragraphs.  Thus,</p>
<div class="example" id="example-284">
<div class="examplenum">
<a href="#example-284">Example 284</a>
</div>
<div class="column">
<pre><code class="language-markdown">The<span class="space"> </span>number<span class="space"> </span>of<span class="space"> </span>windows<span class="space"> </span>in<span class="space"> </span>my<span class="space"> </span>house<span class="space"> </span>is
14.<span class="space"> </span><span class="space"> </span>The<span class="space"> </span>number<span class="space"> </span>of<span class="space"> </span>doors<span class="space"> </span>is<span class="space"> </span>6.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;The<span class="space"> </span>number<span class="space"> </span>of<span class="space"> </span>windows<span class="space"> </span>in<span class="space"> </span>my<span class="space"> </span>house<span class="space"> </span>is
14.<span class="space"> </span><span class="space"> </span>The<span class="space"> </span>number<span class="space"> </span>of<span class="space"> </span>doors<span class="space"> </span>is<span class="space"> </span>6.&lt;/p&gt;
</code></pre>
</div>
</div>
<p>We may still get an unintended result in cases like</p>
<div class="example" id="example-285">
<div class="examplenum">
<a href="#example-285">Example 285</a>
</div>
<div class="column">
<pre><code class="language-markdown">The<span class="space"> </span>number<span class="space"> </span>of<span class="space"> </span>windows<span class="space"> </span>in<span class="space"> </span>my<span class="space"> </span>house<span class="space"> </span>is
1.<span class="space"> </span><span class="space"> </span>The<span class="space"> </span>number<span class="space"> </span>of<span class="space"> </span>doors<span class="space"> </span>is<span class="space"> </span>6.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;The<span class="space"> </span>number<span class="space"> </span>of<span class="space"> </span>windows<span class="space"> </span>in<span class="space"> </span>my<span class="space"> </span>house<span class="space"> </span>is&lt;/p&gt;
&lt;ol&gt;
&lt;li&gt;The<span class="space"> </span>number<span class="space"> </span>of<span class="space"> </span>doors<span class="space"> </span>is<span class="space"> </span>6.&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>but this rule should prevent most spurious list captures.</p>
<p>There can be any number of blank lines between items:</p>
<div class="example" id="example-286">
<div class="examplenum">
<a href="#example-286">Example 286</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo

-<span class="space"> </span>bar


-<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;baz&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-287">
<div class="examplenum">
<a href="#example-287">Example 287</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>bar
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>baz


<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bim
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo
&lt;ul&gt;
&lt;li&gt;bar
&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;baz&lt;/p&gt;
&lt;p&gt;bim&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>To separate consecutive lists of the same type, or to separate a
list from an indented code block that would otherwise be parsed
as a subparagraph of the final list item, you can insert a blank HTML
comment:</p>
<div class="example" id="example-288">
<div class="examplenum">
<a href="#example-288">Example 288</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>foo
-<span class="space"> </span>bar

&lt;!--<span class="space"> </span>--&gt;

-<span class="space"> </span>baz
-<span class="space"> </span>bim
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ul&gt;
&lt;!--<span class="space"> </span>--&gt;
&lt;ul&gt;
&lt;li&gt;baz&lt;/li&gt;
&lt;li&gt;bim&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-289">
<div class="examplenum">
<a href="#example-289">Example 289</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span><span class="space"> </span><span class="space"> </span>foo

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>notcode

-<span class="space"> </span><span class="space"> </span><span class="space"> </span>foo

&lt;!--<span class="space"> </span>--&gt;

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>code
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;p&gt;notcode&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;!--<span class="space"> </span>--&gt;
&lt;pre&gt;&lt;code&gt;code
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>List items need not be indented to the same level.  The following
list items will be treated as items at the same list level,
since none is indented enough to belong to the previous list
item:</p>
<div class="example" id="example-290">
<div class="examplenum">
<a href="#example-290">Example 290</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>a
<span class="space"> </span>-<span class="space"> </span>b
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>c
<span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>d
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>e
<span class="space"> </span>-<span class="space"> </span>f
-<span class="space"> </span>g
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;a&lt;/li&gt;
&lt;li&gt;b&lt;/li&gt;
&lt;li&gt;c&lt;/li&gt;
&lt;li&gt;d&lt;/li&gt;
&lt;li&gt;e&lt;/li&gt;
&lt;li&gt;f&lt;/li&gt;
&lt;li&gt;g&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-291">
<div class="examplenum">
<a href="#example-291">Example 291</a>
</div>
<div class="column">
<pre><code class="language-markdown">1.<span class="space"> </span>a

<span class="space"> </span><span class="space"> </span>2.<span class="space"> </span>b

<span class="space"> </span><span class="space"> </span><span class="space"> </span>3.<span class="space"> </span>c
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;p&gt;a&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;b&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;c&lt;/p&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>Note, however, that list items may not be indented more than
three spaces.  Here <code>- e</code> is treated as a paragraph continuation
line, because it is indented more than three spaces:</p>
<div class="example" id="example-292">
<div class="examplenum">
<a href="#example-292">Example 292</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>a
<span class="space"> </span>-<span class="space"> </span>b
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>c
<span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>d
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>-<span class="space"> </span>e
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;a&lt;/li&gt;
&lt;li&gt;b&lt;/li&gt;
&lt;li&gt;c&lt;/li&gt;
&lt;li&gt;d
-<span class="space"> </span>e&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>And here, <code>3. c</code> is treated as in indented code block,
because it is indented four spaces and preceded by a
blank line.</p>
<div class="example" id="example-293">
<div class="examplenum">
<a href="#example-293">Example 293</a>
</div>
<div class="column">
<pre><code class="language-markdown">1.<span class="space"> </span>a

<span class="space"> </span><span class="space"> </span>2.<span class="space"> </span>b

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>3.<span class="space"> </span>c
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;p&gt;a&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;b&lt;/p&gt;
&lt;/li&gt;
&lt;/ol&gt;
&lt;pre&gt;&lt;code&gt;3.<span class="space"> </span>c
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>This is a loose list, because there is a blank line between
two of the list items:</p>
<div class="example" id="example-294">
<div class="examplenum">
<a href="#example-294">Example 294</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>a
-<span class="space"> </span>b

-<span class="space"> </span>c
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;a&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;b&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;c&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>So is this, with a empty second item:</p>
<div class="example" id="example-295">
<div class="examplenum">
<a href="#example-295">Example 295</a>
</div>
<div class="column">
<pre><code class="language-markdown">*<span class="space"> </span>a
*

*<span class="space"> </span>c
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;a&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;c&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>These are loose lists, even though there is no space between the items,
because one of the items directly contains two block-level elements
with a blank line between them:</p>
<div class="example" id="example-296">
<div class="examplenum">
<a href="#example-296">Example 296</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>a
-<span class="space"> </span>b

<span class="space"> </span><span class="space"> </span>c
-<span class="space"> </span>d
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;a&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;b&lt;/p&gt;
&lt;p&gt;c&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;d&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-297">
<div class="examplenum">
<a href="#example-297">Example 297</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>a
-<span class="space"> </span>b

<span class="space"> </span><span class="space"> </span>[ref]:<span class="space"> </span>/url
-<span class="space"> </span>d
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;a&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;b&lt;/p&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;d&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>This is a tight list, because the blank lines are in a code block:</p>
<div class="example" id="example-298">
<div class="examplenum">
<a href="#example-298">Example 298</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>a
-<span class="space"> </span>```
<span class="space"> </span><span class="space"> </span>b


<span class="space"> </span><span class="space"> </span>```
-<span class="space"> </span>c
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;a&lt;/li&gt;
&lt;li&gt;
&lt;pre&gt;&lt;code&gt;b


&lt;/code&gt;&lt;/pre&gt;
&lt;/li&gt;
&lt;li&gt;c&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>This is a tight list, because the blank line is between two
paragraphs of a sublist.  So the sublist is loose while
the outer list is tight:</p>
<div class="example" id="example-299">
<div class="examplenum">
<a href="#example-299">Example 299</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>a
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>b

<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>c
-<span class="space"> </span>d
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;a
&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;b&lt;/p&gt;
&lt;p&gt;c&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;d&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>This is a tight list, because the blank line is inside the
block quote:</p>
<div class="example" id="example-300">
<div class="examplenum">
<a href="#example-300">Example 300</a>
</div>
<div class="column">
<pre><code class="language-markdown">*<span class="space"> </span>a
<span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>b
<span class="space"> </span><span class="space"> </span>&gt;
*<span class="space"> </span>c
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;a
&lt;blockquote&gt;
&lt;p&gt;b&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/li&gt;
&lt;li&gt;c&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>This list is tight, because the consecutive block elements
are not separated by blank lines:</p>
<div class="example" id="example-301">
<div class="examplenum">
<a href="#example-301">Example 301</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>a
<span class="space"> </span><span class="space"> </span>&gt;<span class="space"> </span>b
<span class="space"> </span><span class="space"> </span>```
<span class="space"> </span><span class="space"> </span>c
<span class="space"> </span><span class="space"> </span>```
-<span class="space"> </span>d
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;a
&lt;blockquote&gt;
&lt;p&gt;b&lt;/p&gt;
&lt;/blockquote&gt;
&lt;pre&gt;&lt;code&gt;c
&lt;/code&gt;&lt;/pre&gt;
&lt;/li&gt;
&lt;li&gt;d&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>A single-paragraph list is tight:</p>
<div class="example" id="example-302">
<div class="examplenum">
<a href="#example-302">Example 302</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>a
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;a&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-303">
<div class="examplenum">
<a href="#example-303">Example 303</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>a
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>b
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;a
&lt;ul&gt;
&lt;li&gt;b&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<p>This list is loose, because of the blank line between the
two block elements in the list item:</p>
<div class="example" id="example-304">
<div class="examplenum">
<a href="#example-304">Example 304</a>
</div>
<div class="column">
<pre><code class="language-markdown">1.<span class="space"> </span>```
<span class="space"> </span><span class="space"> </span><span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span><span class="space"> </span>```

<span class="space"> </span><span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;
&lt;pre&gt;&lt;code&gt;foo
&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;bar&lt;/p&gt;
&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
</div>
</div>
<p>Here the outer list is loose, the inner list tight:</p>
<div class="example" id="example-305">
<div class="examplenum">
<a href="#example-305">Example 305</a>
</div>
<div class="column">
<pre><code class="language-markdown">*<span class="space"> </span>foo
<span class="space"> </span><span class="space"> </span>*<span class="space"> </span>bar

<span class="space"> </span><span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;foo&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;bar&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;baz&lt;/p&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-306">
<div class="examplenum">
<a href="#example-306">Example 306</a>
</div>
<div class="column">
<pre><code class="language-markdown">-<span class="space"> </span>a
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>b
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>c

-<span class="space"> </span>d
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>e
<span class="space"> </span><span class="space"> </span>-<span class="space"> </span>f
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;p&gt;a&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;b&lt;/li&gt;
&lt;li&gt;c&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;p&gt;d&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;e&lt;/li&gt;
&lt;li&gt;f&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<h1 id="inlines" href="#inlines" class="definition">
<span class="number">6</span>Inlines
</h1>
<p>Inlines are parsed sequentially from the beginning of the character
stream to the end (left to right, in left-to-right languages).
Thus, for example, in</p>
<div class="example" id="example-307">
<div class="examplenum">
<a href="#example-307">Example 307</a>
</div>
<div class="column">
<pre><code class="language-markdown">`hi`lo`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;hi&lt;/code&gt;lo`&lt;/p&gt;
</code></pre>
</div>
</div>
<p><code>hi</code> is parsed as code, leaving the backtick at the end as a literal
backtick.</p>
<h2 id="backslash-escapes" href="#backslash-escapes" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.1</span>Backslash escapes
</h2>
<p>Any ASCII punctuation character may be backslash-escaped:</p>
<div class="example" id="example-308">
<div class="examplenum">
<a href="#example-308">Example 308</a>
</div>
<div class="column">
<pre><code class="language-markdown">\!\"\#\$\%\&amp;\'\(\)\*\+\,\-\.\/\:\;\&lt;\=\&gt;\?\@\[\\\]\^\_\`\{\|\}\~
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;!&amp;quot;#$%&amp;amp;'()*+,-./:;&amp;lt;=&amp;gt;?@[\]^_`{|}~&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Backslashes before other characters are treated as literal
backslashes:</p>
<div class="example" id="example-309">
<div class="examplenum">
<a href="#example-309">Example 309</a>
</div>
<div class="column">
<pre><code class="language-markdown">\→\A\a\<span class="space"> </span>\3\φ\«
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;\→\A\a\<span class="space"> </span>\3\φ\«&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Escaped characters are treated as regular characters and do
not have their usual Markdown meanings:</p>
<div class="example" id="example-310">
<div class="examplenum">
<a href="#example-310">Example 310</a>
</div>
<div class="column">
<pre><code class="language-markdown">\*not<span class="space"> </span>emphasized*
\&lt;br/&gt;<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>tag
\[not<span class="space"> </span>a<span class="space"> </span>link](/foo)
\`not<span class="space"> </span>code`
1\.<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>list
\*<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>list
\#<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>heading
\[foo]:<span class="space"> </span>/url<span class="space"> </span>"not<span class="space"> </span>a<span class="space"> </span>reference"
\&amp;ouml;<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>character<span class="space"> </span>entity
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*not<span class="space"> </span>emphasized*
&amp;lt;br/&amp;gt;<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>tag
[not<span class="space"> </span>a<span class="space"> </span>link](/foo)
`not<span class="space"> </span>code`
1.<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>list
*<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>list
#<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>heading
[foo]:<span class="space"> </span>/url<span class="space"> </span>&amp;quot;not<span class="space"> </span>a<span class="space"> </span>reference&amp;quot;
&amp;amp;ouml;<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>character<span class="space"> </span>entity&lt;/p&gt;
</code></pre>
</div>
</div>
<p>If a backslash is itself escaped, the following character is not:</p>
<div class="example" id="example-311">
<div class="examplenum">
<a href="#example-311">Example 311</a>
</div>
<div class="column">
<pre><code class="language-markdown">\\*emphasis*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;\&lt;em&gt;emphasis&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A backslash at the end of the line is a <a href="#hard-line-break">hard line break</a>:</p>
<div class="example" id="example-312">
<div class="examplenum">
<a href="#example-312">Example 312</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo\
bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;br<span class="space"> </span>/&gt;
bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Backslash escapes do not work in code blocks, code spans, autolinks, or
raw HTML:</p>
<div class="example" id="example-313">
<div class="examplenum">
<a href="#example-313">Example 313</a>
</div>
<div class="column">
<pre><code class="language-markdown">``<span class="space"> </span>\[\`<span class="space"> </span>``
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;\[\`&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-314">
<div class="examplenum">
<a href="#example-314">Example 314</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>\[\]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;\[\]
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-315">
<div class="examplenum">
<a href="#example-315">Example 315</a>
</div>
<div class="column">
<pre><code class="language-markdown">~~~
\[\]
~~~
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;\[\]
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-316">
<div class="examplenum">
<a href="#example-316">Example 316</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;http://example.com?find=\*&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://example.com?find=%5C*"&gt;http://example.com?find=\*&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-317">
<div class="examplenum">
<a href="#example-317">Example 317</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span>href="/bar\/)"&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;a<span class="space"> </span>href="/bar\/)"&gt;
</code></pre>
</div>
</div>
<p>But they work in all other contexts, including URLs and link titles,
link references, and <a href="#info-string">info strings</a> in <a href="#fenced-code-blocks">fenced code blocks</a>:</p>
<div class="example" id="example-318">
<div class="examplenum">
<a href="#example-318">Example 318</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo](/bar\*<span class="space"> </span>"ti\*tle")
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/bar*"<span class="space"> </span>title="ti*tle"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-319">
<div class="examplenum">
<a href="#example-319">Example 319</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]

[foo]:<span class="space"> </span>/bar\*<span class="space"> </span>"ti\*tle"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/bar*"<span class="space"> </span>title="ti*tle"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-320">
<div class="examplenum">
<a href="#example-320">Example 320</a>
</div>
<div class="column">
<pre><code class="language-markdown">```<span class="space"> </span>foo\+bar
foo
```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code<span class="space"> </span>class="language-foo+bar"&gt;foo
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<h2 id="entity-and-numeric-character-references" href="#entity-and-numeric-character-references" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.2</span>Entity and numeric character references
</h2>
<p>Valid HTML entity references and numeric character references
can be used in place of the corresponding Unicode character,
with the following exceptions:</p>
<ul>
<li>
<p>Entity and character references are not recognized in code
blocks and code spans.</p>
</li>
<li>
<p>Entity and character references cannot stand in place of
special characters that define structural elements in
CommonMark.  For example, although <code>&amp;#42;</code> can be used
in place of a literal <code>*</code> character, <code>&amp;#42;</code> cannot replace
<code>*</code> in emphasis delimiters, bullet list markers, or thematic
breaks.</p>
</li>
</ul>
<p>Conforming CommonMark parsers need not store information about
whether a particular character was represented in the source
using a Unicode character or an entity reference.</p>
<p><a id="entity-references" href="#entity-references" class="definition">Entity references</a> consist of <code>&amp;</code> + any of the valid
HTML5 entity names + <code>;</code>. The
document <a href="https://html.spec.whatwg.org/multipage/entities.json">https://html.spec.whatwg.org/multipage/entities.json</a>
is used as an authoritative source for the valid entity
references and their corresponding code points.</p>
<div class="example" id="example-321">
<div class="examplenum">
<a href="#example-321">Example 321</a>
</div>
<div class="column">
<pre><code class="language-markdown">&amp;nbsp;<span class="space"> </span>&amp;amp;<span class="space"> </span>&amp;copy;<span class="space"> </span>&amp;AElig;<span class="space"> </span>&amp;Dcaron;
&amp;frac34;<span class="space"> </span>&amp;HilbertSpace;<span class="space"> </span>&amp;DifferentialD;
&amp;ClockwiseContourIntegral;<span class="space"> </span>&amp;ngE;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&nbsp;<span class="space"> </span>&amp;amp;<span class="space"> </span>©<span class="space"> </span>Æ<span class="space"> </span>Ď
¾<span class="space"> </span>ℋ<span class="space"> </span>ⅆ
∲<span class="space"> </span>≧̸&lt;/p&gt;
</code></pre>
</div>
</div>
<p><a id="decimal-numeric-character-references" href="#decimal-numeric-character-references" class="definition">Decimal numeric character
references</a>
consist of <code>&amp;#</code> + a string of 1–7 arabic digits + <code>;</code>. A
numeric character reference is parsed as the corresponding
Unicode character. Invalid Unicode code points will be replaced by
the REPLACEMENT CHARACTER (<code>U+FFFD</code>).  For security reasons,
the code point <code>U+0000</code> will also be replaced by <code>U+FFFD</code>.</p>
<div class="example" id="example-322">
<div class="examplenum">
<a href="#example-322">Example 322</a>
</div>
<div class="column">
<pre><code class="language-markdown">&amp;#35;<span class="space"> </span>&amp;#1234;<span class="space"> </span>&amp;#992;<span class="space"> </span>&amp;#0;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;#<span class="space"> </span>Ӓ<span class="space"> </span>Ϡ<span class="space"> </span>�&lt;/p&gt;
</code></pre>
</div>
</div>
<p><a id="hexadecimal-numeric-character-references" href="#hexadecimal-numeric-character-references" class="definition">Hexadecimal numeric character
references</a> consist of <code>&amp;#</code> +
either <code>X</code> or <code>x</code> + a string of 1-6 hexadecimal digits + <code>;</code>.
They too are parsed as the corresponding Unicode character (this
time specified with a hexadecimal numeral instead of decimal).</p>
<div class="example" id="example-323">
<div class="examplenum">
<a href="#example-323">Example 323</a>
</div>
<div class="column">
<pre><code class="language-markdown">&amp;#X22;<span class="space"> </span>&amp;#XD06;<span class="space"> </span>&amp;#xcab;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;quot;<span class="space"> </span>ആ<span class="space"> </span>ಫ&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Here are some nonentities:</p>
<div class="example" id="example-324">
<div class="examplenum">
<a href="#example-324">Example 324</a>
</div>
<div class="column">
<pre><code class="language-markdown">&amp;nbsp<span class="space"> </span>&amp;x;<span class="space"> </span>&amp;#;<span class="space"> </span>&amp;#x;
&amp;#87654321;
&amp;#abcdef0;
&amp;ThisIsNotDefined;<span class="space"> </span>&amp;hi?;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;amp;nbsp<span class="space"> </span>&amp;amp;x;<span class="space"> </span>&amp;amp;#;<span class="space"> </span>&amp;amp;#x;
&amp;amp;#87654321;
&amp;amp;#abcdef0;
&amp;amp;ThisIsNotDefined;<span class="space"> </span>&amp;amp;hi?;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Although HTML5 does accept some entity references
without a trailing semicolon (such as <code>&amp;copy</code>), these are not
recognized here, because it makes the grammar too ambiguous:</p>
<div class="example" id="example-325">
<div class="examplenum">
<a href="#example-325">Example 325</a>
</div>
<div class="column">
<pre><code class="language-markdown">&amp;copy
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;amp;copy&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Strings that are not on the list of HTML5 named entities are not
recognized as entity references either:</p>
<div class="example" id="example-326">
<div class="examplenum">
<a href="#example-326">Example 326</a>
</div>
<div class="column">
<pre><code class="language-markdown">&amp;MadeUpEntity;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;amp;MadeUpEntity;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Entity and numeric character references are recognized in any
context besides code spans or code blocks, including
URLs, <a href="#link-title">link titles</a>, and <a href="#fenced-code-block">fenced code block</a> <a href="#info-string">info strings</a>:</p>
<div class="example" id="example-327">
<div class="examplenum">
<a href="#example-327">Example 327</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span>href="&amp;ouml;&amp;ouml;.html"&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;a<span class="space"> </span>href="&amp;ouml;&amp;ouml;.html"&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-328">
<div class="examplenum">
<a href="#example-328">Example 328</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo](/f&amp;ouml;&amp;ouml;<span class="space"> </span>"f&amp;ouml;&amp;ouml;")
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/f%C3%B6%C3%B6"<span class="space"> </span>title="föö"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-329">
<div class="examplenum">
<a href="#example-329">Example 329</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]

[foo]:<span class="space"> </span>/f&amp;ouml;&amp;ouml;<span class="space"> </span>"f&amp;ouml;&amp;ouml;"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/f%C3%B6%C3%B6"<span class="space"> </span>title="föö"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-330">
<div class="examplenum">
<a href="#example-330">Example 330</a>
</div>
<div class="column">
<pre><code class="language-markdown">```<span class="space"> </span>f&amp;ouml;&amp;ouml;
foo
```
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code<span class="space"> </span>class="language-föö"&gt;foo
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Entity and numeric character references are treated as literal
text in code spans and code blocks:</p>
<div class="example" id="example-331">
<div class="examplenum">
<a href="#example-331">Example 331</a>
</div>
<div class="column">
<pre><code class="language-markdown">`f&amp;ouml;&amp;ouml;`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;f&amp;amp;ouml;&amp;amp;ouml;&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-332">
<div class="examplenum">
<a href="#example-332">Example 332</a>
</div>
<div class="column">
<pre><code class="language-markdown"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>f&amp;ouml;f&amp;ouml;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;pre&gt;&lt;code&gt;f&amp;amp;ouml;f&amp;amp;ouml;
&lt;/code&gt;&lt;/pre&gt;
</code></pre>
</div>
</div>
<p>Entity and numeric character references cannot be used
in place of symbols indicating structure in CommonMark
documents.</p>
<div class="example" id="example-333">
<div class="examplenum">
<a href="#example-333">Example 333</a>
</div>
<div class="column">
<pre><code class="language-markdown">&amp;#42;foo&amp;#42;
*foo*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*foo*
&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-334">
<div class="examplenum">
<a href="#example-334">Example 334</a>
</div>
<div class="column">
<pre><code class="language-markdown">&amp;#42;<span class="space"> </span>foo

*<span class="space"> </span>foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*<span class="space"> </span>foo&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;foo&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-335">
<div class="examplenum">
<a href="#example-335">Example 335</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo&amp;#10;&amp;#10;bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo

bar&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-336">
<div class="examplenum">
<a href="#example-336">Example 336</a>
</div>
<div class="column">
<pre><code class="language-markdown">&amp;#9;foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;→foo&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-337">
<div class="examplenum">
<a href="#example-337">Example 337</a>
</div>
<div class="column">
<pre><code class="language-markdown">[a](url<span class="space"> </span>&amp;quot;tit&amp;quot;)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[a](url<span class="space"> </span>&amp;quot;tit&amp;quot;)&lt;/p&gt;
</code></pre>
</div>
</div>
<h2 id="code-spans" href="#code-spans" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.3</span>Code spans
</h2>
<p>A <a id="backtick-string" href="#backtick-string" class="definition">backtick string</a>
is a string of one or more backtick characters (<code>`</code>) that is neither
preceded nor followed by a backtick.</p>
<p>A <a id="code-span" href="#code-span" class="definition">code span</a> begins with a backtick string and ends with
a backtick string of equal length.  The contents of the code span are
the characters between the two backtick strings, normalized in the
following ways:</p>
<ul>
<li>First, <a href="#line-ending">line endings</a> are converted to <a href="#space">spaces</a>.</li>
<li>If the resulting string both begins <em>and</em> ends with a <a href="#space">space</a>
character, but does not consist entirely of <a href="#space">space</a>
characters, a single <a href="#space">space</a> character is removed from the
front and back.  This allows you to include code that begins
or ends with backtick characters, which must be separated by
whitespace from the opening or closing backtick strings.</li>
</ul>
<p>This is a simple code span:</p>
<div class="example" id="example-338">
<div class="examplenum">
<a href="#example-338">Example 338</a>
</div>
<div class="column">
<pre><code class="language-markdown">`foo`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;foo&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Here two backticks are used, because the code contains a backtick.
This example also illustrates stripping of a single leading and
trailing space:</p>
<div class="example" id="example-339">
<div class="examplenum">
<a href="#example-339">Example 339</a>
</div>
<div class="column">
<pre><code class="language-markdown">``<span class="space"> </span>foo<span class="space"> </span>`<span class="space"> </span>bar<span class="space"> </span>``
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;foo<span class="space"> </span>`<span class="space"> </span>bar&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This example shows the motivation for stripping leading and trailing
spaces:</p>
<div class="example" id="example-340">
<div class="examplenum">
<a href="#example-340">Example 340</a>
</div>
<div class="column">
<pre><code class="language-markdown">`<span class="space"> </span>``<span class="space"> </span>`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;``&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that only <em>one</em> space is stripped:</p>
<div class="example" id="example-341">
<div class="examplenum">
<a href="#example-341">Example 341</a>
</div>
<div class="column">
<pre><code class="language-markdown">`<span class="space"> </span><span class="space"> </span>``<span class="space"> </span><span class="space"> </span>`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;<span class="space"> </span>``<span class="space"> </span>&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The stripping only happens if the space is on both
sides of the string:</p>
<div class="example" id="example-342">
<div class="examplenum">
<a href="#example-342">Example 342</a>
</div>
<div class="column">
<pre><code class="language-markdown">`<span class="space"> </span>a`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;<span class="space"> </span>a&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Only <a href="#space">spaces</a>, and not <a href="#unicode-whitespace">unicode whitespace</a> in general, are
stripped in this way:</p>
<div class="example" id="example-343">
<div class="examplenum">
<a href="#example-343">Example 343</a>
</div>
<div class="column">
<pre><code class="language-markdown">`&nbsp;b&nbsp;`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;&nbsp;b&nbsp;&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>No stripping occurs if the code span contains only spaces:</p>
<div class="example" id="example-344">
<div class="examplenum">
<a href="#example-344">Example 344</a>
</div>
<div class="column">
<pre><code class="language-markdown">`&nbsp;`
`<span class="space"> </span><span class="space"> </span>`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;&nbsp;&lt;/code&gt;
&lt;code&gt;<span class="space"> </span><span class="space"> </span>&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p><a href="#line-ending">Line endings</a> are treated like spaces:</p>
<div class="example" id="example-345">
<div class="examplenum">
<a href="#example-345">Example 345</a>
</div>
<div class="column">
<pre><code class="language-markdown">``
foo
bar<span class="space"> </span><span class="space"> </span>
baz
``
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;foo<span class="space"> </span>bar<span class="space"> </span><span class="space"> </span><span class="space"> </span>baz&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-346">
<div class="examplenum">
<a href="#example-346">Example 346</a>
</div>
<div class="column">
<pre><code class="language-markdown">``
foo<span class="space"> </span>
``
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;foo<span class="space"> </span>&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Interior spaces are not collapsed:</p>
<div class="example" id="example-347">
<div class="examplenum">
<a href="#example-347">Example 347</a>
</div>
<div class="column">
<pre><code class="language-markdown">`foo<span class="space"> </span><span class="space"> </span><span class="space"> </span>bar<span class="space"> </span>
baz`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;foo<span class="space"> </span><span class="space"> </span><span class="space"> </span>bar<span class="space"> </span><span class="space"> </span>baz&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that browsers will typically collapse consecutive spaces
when rendering <code>&lt;code&gt;</code> elements, so it is recommended that
the following CSS be used:</p>
<pre><code>code{white-space: pre-wrap;}
</code></pre>
<p>Note that backslash escapes do not work in code spans. All backslashes
are treated literally:</p>
<div class="example" id="example-348">
<div class="examplenum">
<a href="#example-348">Example 348</a>
</div>
<div class="column">
<pre><code class="language-markdown">`foo\`bar`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;foo\&lt;/code&gt;bar`&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Backslash escapes are never needed, because one can always choose a
string of <em>n</em> backtick characters as delimiters, where the code does
not contain any strings of exactly <em>n</em> backtick characters.</p>
<div class="example" id="example-349">
<div class="examplenum">
<a href="#example-349">Example 349</a>
</div>
<div class="column">
<pre><code class="language-markdown">``foo`bar``
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;foo`bar&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-350">
<div class="examplenum">
<a href="#example-350">Example 350</a>
</div>
<div class="column">
<pre><code class="language-markdown">`<span class="space"> </span>foo<span class="space"> </span>``<span class="space"> </span>bar<span class="space"> </span>`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;foo<span class="space"> </span>``<span class="space"> </span>bar&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Code span backticks have higher precedence than any other inline
constructs except HTML tags and autolinks.  Thus, for example, this is
not parsed as emphasized text, since the second <code>*</code> is part of a code
span:</p>
<div class="example" id="example-351">
<div class="examplenum">
<a href="#example-351">Example 351</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo`*`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*foo&lt;code&gt;*&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>And this is not parsed as a link:</p>
<div class="example" id="example-352">
<div class="examplenum">
<a href="#example-352">Example 352</a>
</div>
<div class="column">
<pre><code class="language-markdown">[not<span class="space"> </span>a<span class="space"> </span>`link](/foo`)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[not<span class="space"> </span>a<span class="space"> </span>&lt;code&gt;link](/foo&lt;/code&gt;)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Code spans, HTML tags, and autolinks have the same precedence.
Thus, this is code:</p>
<div class="example" id="example-353">
<div class="examplenum">
<a href="#example-353">Example 353</a>
</div>
<div class="column">
<pre><code class="language-markdown">`&lt;a<span class="space"> </span>href="`"&gt;`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;&amp;lt;a<span class="space"> </span>href=&amp;quot;&lt;/code&gt;&amp;quot;&amp;gt;`&lt;/p&gt;
</code></pre>
</div>
</div>
<p>But this is an HTML tag:</p>
<div class="example" id="example-354">
<div class="examplenum">
<a href="#example-354">Example 354</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span>href="`"&gt;`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="`"&gt;`&lt;/p&gt;
</code></pre>
</div>
</div>
<p>And this is code:</p>
<div class="example" id="example-355">
<div class="examplenum">
<a href="#example-355">Example 355</a>
</div>
<div class="column">
<pre><code class="language-markdown">`&lt;http://foo.bar.`baz&gt;`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;&amp;lt;http://foo.bar.&lt;/code&gt;baz&amp;gt;`&lt;/p&gt;
</code></pre>
</div>
</div>
<p>But this is an autolink:</p>
<div class="example" id="example-356">
<div class="examplenum">
<a href="#example-356">Example 356</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;http://foo.bar.`baz&gt;`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://foo.bar.%60baz"&gt;http://foo.bar.`baz&lt;/a&gt;`&lt;/p&gt;
</code></pre>
</div>
</div>
<p>When a backtick string is not closed by a matching backtick string,
we just have literal backticks:</p>
<div class="example" id="example-357">
<div class="examplenum">
<a href="#example-357">Example 357</a>
</div>
<div class="column">
<pre><code class="language-markdown">```foo``
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;```foo``&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-358">
<div class="examplenum">
<a href="#example-358">Example 358</a>
</div>
<div class="column">
<pre><code class="language-markdown">`foo
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;`foo&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The following case also illustrates the need for opening and
closing backtick strings to be equal in length:</p>
<div class="example" id="example-359">
<div class="examplenum">
<a href="#example-359">Example 359</a>
</div>
<div class="column">
<pre><code class="language-markdown">`foo``bar``
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;`foo&lt;code&gt;bar&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<h2 id="emphasis-and-strong-emphasis" href="#emphasis-and-strong-emphasis" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.4</span>Emphasis and strong emphasis
</h2>
<p>John Gruber’s original <a href="http://daringfireball.net/projects/markdown/syntax#em">Markdown syntax
description</a> says:</p>
<blockquote>
<p>Markdown treats asterisks (<code>*</code>) and underscores (<code>_</code>) as indicators of
emphasis. Text wrapped with one <code>*</code> or <code>_</code> will be wrapped with an HTML
<code>&lt;em&gt;</code> tag; double <code>*</code>’s or <code>_</code>’s will be wrapped with an HTML <code>&lt;strong&gt;</code>
tag.</p>
</blockquote>
<p>This is enough for most users, but these rules leave much undecided,
especially when it comes to nested emphasis.  The original
<code>Markdown.pl</code> test suite makes it clear that triple <code>***</code> and
<code>___</code> delimiters can be used for strong emphasis, and most
implementations have also allowed the following patterns:</p>
<pre><code class="language-markdown">***strong emph***
***strong** in emph*
***emph* in strong**
**in strong *emph***
*in emph **strong***
</code></pre>
<p>The following patterns are less widely supported, but the intent
is clear and they are useful (especially in contexts like bibliography
entries):</p>
<pre><code class="language-markdown">*emph *with emph* in it*
**strong **with strong** in it**
</code></pre>
<p>Many implementations have also restricted intraword emphasis to
the <code>*</code> forms, to avoid unwanted emphasis in words containing
internal underscores.  (It is best practice to put these in code
spans, but users often do not.)</p>
<pre><code class="language-markdown">internal emphasis: foo*bar*baz
no emphasis: foo_bar_baz
</code></pre>
<p>The rules given below capture all of these patterns, while allowing
for efficient parsing strategies that do not backtrack.</p>
<p>First, some definitions.  A <a id="delimiter-run" href="#delimiter-run" class="definition">delimiter run</a> is either
a sequence of one or more <code>*</code> characters that is not preceded or
followed by a non-backslash-escaped <code>*</code> character, or a sequence
of one or more <code>_</code> characters that is not preceded or followed by
a non-backslash-escaped <code>_</code> character.</p>
<p>A <a id="left-flanking-delimiter-run" href="#left-flanking-delimiter-run" class="definition">left-flanking delimiter run</a> is
a <a href="#delimiter-run">delimiter run</a> that is (1) not followed by <a href="#unicode-whitespace">Unicode whitespace</a>,
and either (2a) not followed by a <a href="#punctuation-character">punctuation character</a>, or
(2b) followed by a <a href="#punctuation-character">punctuation character</a> and
preceded by <a href="#unicode-whitespace">Unicode whitespace</a> or a <a href="#punctuation-character">punctuation character</a>.
For purposes of this definition, the beginning and the end of
the line count as Unicode whitespace.</p>
<p>A <a id="right-flanking-delimiter-run" href="#right-flanking-delimiter-run" class="definition">right-flanking delimiter run</a> is
a <a href="#delimiter-run">delimiter run</a> that is (1) not preceded by <a href="#unicode-whitespace">Unicode whitespace</a>,
and either (2a) not preceded by a <a href="#punctuation-character">punctuation character</a>, or
(2b) preceded by a <a href="#punctuation-character">punctuation character</a> and
followed by <a href="#unicode-whitespace">Unicode whitespace</a> or a <a href="#punctuation-character">punctuation character</a>.
For purposes of this definition, the beginning and the end of
the line count as Unicode whitespace.</p>
<p>Here are some examples of delimiter runs.</p>
<ul>
<li>
<p>left-flanking but not right-flanking:</p>
<pre><code>***abc
  _abc
**"abc"
 _"abc"
</code></pre>
</li>
<li>
<p>right-flanking but not left-flanking:</p>
<pre><code> abc***
 abc_
"abc"**
"abc"_
</code></pre>
</li>
<li>
<p>Both left and right-flanking:</p>
<pre><code> abc***def
"abc"_"def"
</code></pre>
</li>
<li>
<p>Neither left nor right-flanking:</p>
<pre><code>abc *** def
a _ b
</code></pre>
</li>
</ul>
<p>(The idea of distinguishing left-flanking and right-flanking
delimiter runs based on the character before and the character
after comes from Roopesh Chander’s
<a href="http://www.vfmd.org/vfmd-spec/specification/#procedure-for-identifying-emphasis-tags">vfmd</a>.
vfmd uses the terminology “emphasis indicator string” instead of “delimiter
run,” and its rules for distinguishing left- and right-flanking runs
are a bit more complex than the ones given here.)</p>
<p>The following rules define emphasis and strong emphasis:</p>
<ol>
<li>
<p>A single <code>*</code> character <a id="can-open-emphasis" href="#can-open-emphasis" class="definition">can open emphasis</a>
iff (if and only if) it is part of a <a href="#left-flanking-delimiter-run">left-flanking delimiter run</a>.</p>
</li>
<li>
<p>A single <code>_</code> character <a href="#can-open-emphasis">can open emphasis</a> iff
it is part of a <a href="#left-flanking-delimiter-run">left-flanking delimiter run</a>
and either (a) not part of a <a href="#right-flanking-delimiter-run">right-flanking delimiter run</a>
or (b) part of a <a href="#right-flanking-delimiter-run">right-flanking delimiter run</a>
preceded by punctuation.</p>
</li>
<li>
<p>A single <code>*</code> character <a id="can-close-emphasis" href="#can-close-emphasis" class="definition">can close emphasis</a>
iff it is part of a <a href="#right-flanking-delimiter-run">right-flanking delimiter run</a>.</p>
</li>
<li>
<p>A single <code>_</code> character <a href="#can-close-emphasis">can close emphasis</a> iff
it is part of a <a href="#right-flanking-delimiter-run">right-flanking delimiter run</a>
and either (a) not part of a <a href="#left-flanking-delimiter-run">left-flanking delimiter run</a>
or (b) part of a <a href="#left-flanking-delimiter-run">left-flanking delimiter run</a>
followed by punctuation.</p>
</li>
<li>
<p>A double <code>**</code> <a id="can-open-strong-emphasis" href="#can-open-strong-emphasis" class="definition">can open strong emphasis</a>
iff it is part of a <a href="#left-flanking-delimiter-run">left-flanking delimiter run</a>.</p>
</li>
<li>
<p>A double <code>__</code> <a href="#can-open-strong-emphasis">can open strong emphasis</a> iff
it is part of a <a href="#left-flanking-delimiter-run">left-flanking delimiter run</a>
and either (a) not part of a <a href="#right-flanking-delimiter-run">right-flanking delimiter run</a>
or (b) part of a <a href="#right-flanking-delimiter-run">right-flanking delimiter run</a>
preceded by punctuation.</p>
</li>
<li>
<p>A double <code>**</code> <a id="can-close-strong-emphasis" href="#can-close-strong-emphasis" class="definition">can close strong emphasis</a>
iff it is part of a <a href="#right-flanking-delimiter-run">right-flanking delimiter run</a>.</p>
</li>
<li>
<p>A double <code>__</code> <a href="#can-close-strong-emphasis">can close strong emphasis</a> iff
it is part of a <a href="#right-flanking-delimiter-run">right-flanking delimiter run</a>
and either (a) not part of a <a href="#left-flanking-delimiter-run">left-flanking delimiter run</a>
or (b) part of a <a href="#left-flanking-delimiter-run">left-flanking delimiter run</a>
followed by punctuation.</p>
</li>
<li>
<p>Emphasis begins with a delimiter that <a href="#can-open-emphasis">can open emphasis</a> and ends
with a delimiter that <a href="#can-close-emphasis">can close emphasis</a>, and that uses the same
character (<code>_</code> or <code>*</code>) as the opening delimiter.  The
opening and closing delimiters must belong to separate
<a href="#delimiter-run">delimiter runs</a>.  If one of the delimiters can both
open and close emphasis, then the sum of the lengths of the
delimiter runs containing the opening and closing delimiters
must not be a multiple of 3 unless both lengths are
multiples of 3.</p>
</li>
<li>
<p>Strong emphasis begins with a delimiter that
<a href="#can-open-strong-emphasis">can open strong emphasis</a> and ends with a delimiter that
<a href="#can-close-strong-emphasis">can close strong emphasis</a>, and that uses the same character
(<code>_</code> or <code>*</code>) as the opening delimiter.  The
opening and closing delimiters must belong to separate
<a href="#delimiter-run">delimiter runs</a>.  If one of the delimiters can both open
and close strong emphasis, then the sum of the lengths of
the delimiter runs containing the opening and closing
delimiters must not be a multiple of 3 unless both lengths
are multiples of 3.</p>
</li>
<li>
<p>A literal <code>*</code> character cannot occur at the beginning or end of
<code>*</code>-delimited emphasis or <code>**</code>-delimited strong emphasis, unless it
is backslash-escaped.</p>
</li>
<li>
<p>A literal <code>_</code> character cannot occur at the beginning or end of
<code>_</code>-delimited emphasis or <code>__</code>-delimited strong emphasis, unless it
is backslash-escaped.</p>
</li>
</ol>
<p>Where rules 1–12 above are compatible with multiple parsings,
the following principles resolve ambiguity:</p>
<ol start="13">
<li>
<p>The number of nestings should be minimized. Thus, for example,
an interpretation <code>&lt;strong&gt;...&lt;/strong&gt;</code> is always preferred to
<code>&lt;em&gt;&lt;em&gt;...&lt;/em&gt;&lt;/em&gt;</code>.</p>
</li>
<li>
<p>An interpretation <code>&lt;em&gt;&lt;strong&gt;...&lt;/strong&gt;&lt;/em&gt;</code> is always
preferred to <code>&lt;strong&gt;&lt;em&gt;...&lt;/em&gt;&lt;/strong&gt;</code>.</p>
</li>
<li>
<p>When two potential emphasis or strong emphasis spans overlap,
so that the second begins before the first ends and ends after
the first ends, the first takes precedence. Thus, for example,
<code>*foo _bar* baz_</code> is parsed as <code>&lt;em&gt;foo _bar&lt;/em&gt; baz_</code> rather
than <code>*foo &lt;em&gt;bar* baz&lt;/em&gt;</code>.</p>
</li>
<li>
<p>When there are two potential emphasis or strong emphasis spans
with the same closing delimiter, the shorter one (the one that
opens later) takes precedence. Thus, for example,
<code>**foo **bar baz**</code> is parsed as <code>**foo &lt;strong&gt;bar baz&lt;/strong&gt;</code>
rather than <code>&lt;strong&gt;foo **bar baz&lt;/strong&gt;</code>.</p>
</li>
<li>
<p>Inline code spans, links, images, and HTML tags group more tightly
than emphasis.  So, when there is a choice between an interpretation
that contains one of these elements and one that does not, the
former always wins.  Thus, for example, <code>*[foo*](bar)</code> is
parsed as <code>*&lt;a href="bar"&gt;foo*&lt;/a&gt;</code> rather than as
<code>&lt;em&gt;[foo&lt;/em&gt;](bar)</code>.</p>
</li>
</ol>
<p>These rules can be illustrated through a series of examples.</p>
<p>Rule 1:</p>
<div class="example" id="example-360">
<div class="examplenum">
<a href="#example-360">Example 360</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>bar*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>bar&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not emphasis, because the opening <code>*</code> is followed by
whitespace, and hence not part of a <a href="#left-flanking-delimiter-run">left-flanking delimiter run</a>:</p>
<div class="example" id="example-361">
<div class="examplenum">
<a href="#example-361">Example 361</a>
</div>
<div class="column">
<pre><code class="language-markdown">a<span class="space"> </span>*<span class="space"> </span>foo<span class="space"> </span>bar*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;a<span class="space"> </span>*<span class="space"> </span>foo<span class="space"> </span>bar*&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not emphasis, because the opening <code>*</code> is preceded
by an alphanumeric and followed by punctuation, and hence
not part of a <a href="#left-flanking-delimiter-run">left-flanking delimiter run</a>:</p>
<div class="example" id="example-362">
<div class="examplenum">
<a href="#example-362">Example 362</a>
</div>
<div class="column">
<pre><code class="language-markdown">a*"foo"*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;a*&amp;quot;foo&amp;quot;*&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Unicode nonbreaking spaces count as whitespace, too:</p>
<div class="example" id="example-363">
<div class="examplenum">
<a href="#example-363">Example 363</a>
</div>
<div class="column">
<pre><code class="language-markdown">*&nbsp;a&nbsp;*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*&nbsp;a&nbsp;*&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Intraword emphasis with <code>*</code> is permitted:</p>
<div class="example" id="example-364">
<div class="examplenum">
<a href="#example-364">Example 364</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo*bar*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;em&gt;bar&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-365">
<div class="examplenum">
<a href="#example-365">Example 365</a>
</div>
<div class="column">
<pre><code class="language-markdown">5*6*78
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;5&lt;em&gt;6&lt;/em&gt;78&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 2:</p>
<div class="example" id="example-366">
<div class="examplenum">
<a href="#example-366">Example 366</a>
</div>
<div class="column">
<pre><code class="language-markdown">_foo<span class="space"> </span>bar_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>bar&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not emphasis, because the opening <code>_</code> is followed by
whitespace:</p>
<div class="example" id="example-367">
<div class="examplenum">
<a href="#example-367">Example 367</a>
</div>
<div class="column">
<pre><code class="language-markdown">_<span class="space"> </span>foo<span class="space"> </span>bar_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;_<span class="space"> </span>foo<span class="space"> </span>bar_&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not emphasis, because the opening <code>_</code> is preceded
by an alphanumeric and followed by punctuation:</p>
<div class="example" id="example-368">
<div class="examplenum">
<a href="#example-368">Example 368</a>
</div>
<div class="column">
<pre><code class="language-markdown">a_"foo"_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;a_&amp;quot;foo&amp;quot;_&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Emphasis with <code>_</code> is not allowed inside words:</p>
<div class="example" id="example-369">
<div class="examplenum">
<a href="#example-369">Example 369</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo_bar_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo_bar_&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-370">
<div class="examplenum">
<a href="#example-370">Example 370</a>
</div>
<div class="column">
<pre><code class="language-markdown">5_6_78
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;5_6_78&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-371">
<div class="examplenum">
<a href="#example-371">Example 371</a>
</div>
<div class="column">
<pre><code class="language-markdown">пристаням_стремятся_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;пристаням_стремятся_&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Here <code>_</code> does not generate emphasis, because the first delimiter run
is right-flanking and the second left-flanking:</p>
<div class="example" id="example-372">
<div class="examplenum">
<a href="#example-372">Example 372</a>
</div>
<div class="column">
<pre><code class="language-markdown">aa_"bb"_cc
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;aa_&amp;quot;bb&amp;quot;_cc&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is emphasis, even though the opening delimiter is
both left- and right-flanking, because it is preceded by
punctuation:</p>
<div class="example" id="example-373">
<div class="examplenum">
<a href="#example-373">Example 373</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo-_(bar)_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo-&lt;em&gt;(bar)&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 3:</p>
<p>This is not emphasis, because the closing delimiter does
not match the opening delimiter:</p>
<div class="example" id="example-374">
<div class="examplenum">
<a href="#example-374">Example 374</a>
</div>
<div class="column">
<pre><code class="language-markdown">_foo*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;_foo*&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not emphasis, because the closing <code>*</code> is preceded by
whitespace:</p>
<div class="example" id="example-375">
<div class="examplenum">
<a href="#example-375">Example 375</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>bar<span class="space"> </span>*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*foo<span class="space"> </span>bar<span class="space"> </span>*&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A newline also counts as whitespace:</p>
<div class="example" id="example-376">
<div class="examplenum">
<a href="#example-376">Example 376</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>bar
*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*foo<span class="space"> </span>bar
*&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not emphasis, because the second <code>*</code> is
preceded by punctuation and followed by an alphanumeric
(hence it is not part of a <a href="#right-flanking-delimiter-run">right-flanking delimiter run</a>:</p>
<div class="example" id="example-377">
<div class="examplenum">
<a href="#example-377">Example 377</a>
</div>
<div class="column">
<pre><code class="language-markdown">*(*foo)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*(*foo)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The point of this restriction is more easily appreciated
with this example:</p>
<div class="example" id="example-378">
<div class="examplenum">
<a href="#example-378">Example 378</a>
</div>
<div class="column">
<pre><code class="language-markdown">*(*foo*)*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;(&lt;em&gt;foo&lt;/em&gt;)&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Intraword emphasis with <code>*</code> is allowed:</p>
<div class="example" id="example-379">
<div class="examplenum">
<a href="#example-379">Example 379</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo*bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 4:</p>
<p>This is not emphasis, because the closing <code>_</code> is preceded by
whitespace:</p>
<div class="example" id="example-380">
<div class="examplenum">
<a href="#example-380">Example 380</a>
</div>
<div class="column">
<pre><code class="language-markdown">_foo<span class="space"> </span>bar<span class="space"> </span>_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;_foo<span class="space"> </span>bar<span class="space"> </span>_&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not emphasis, because the second <code>_</code> is
preceded by punctuation and followed by an alphanumeric:</p>
<div class="example" id="example-381">
<div class="examplenum">
<a href="#example-381">Example 381</a>
</div>
<div class="column">
<pre><code class="language-markdown">_(_foo)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;_(_foo)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is emphasis within emphasis:</p>
<div class="example" id="example-382">
<div class="examplenum">
<a href="#example-382">Example 382</a>
</div>
<div class="column">
<pre><code class="language-markdown">_(_foo_)_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;(&lt;em&gt;foo&lt;/em&gt;)&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Intraword emphasis is disallowed for <code>_</code>:</p>
<div class="example" id="example-383">
<div class="examplenum">
<a href="#example-383">Example 383</a>
</div>
<div class="column">
<pre><code class="language-markdown">_foo_bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;_foo_bar&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-384">
<div class="examplenum">
<a href="#example-384">Example 384</a>
</div>
<div class="column">
<pre><code class="language-markdown">_пристаням_стремятся
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;_пристаням_стремятся&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-385">
<div class="examplenum">
<a href="#example-385">Example 385</a>
</div>
<div class="column">
<pre><code class="language-markdown">_foo_bar_baz_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo_bar_baz&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is emphasis, even though the closing delimiter is
both left- and right-flanking, because it is followed by
punctuation:</p>
<div class="example" id="example-386">
<div class="examplenum">
<a href="#example-386">Example 386</a>
</div>
<div class="column">
<pre><code class="language-markdown">_(bar)_.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;(bar)&lt;/em&gt;.&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 5:</p>
<div class="example" id="example-387">
<div class="examplenum">
<a href="#example-387">Example 387</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo<span class="space"> </span>bar**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo<span class="space"> </span>bar&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not strong emphasis, because the opening delimiter is
followed by whitespace:</p>
<div class="example" id="example-388">
<div class="examplenum">
<a href="#example-388">Example 388</a>
</div>
<div class="column">
<pre><code class="language-markdown">**<span class="space"> </span>foo<span class="space"> </span>bar**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;**<span class="space"> </span>foo<span class="space"> </span>bar**&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not strong emphasis, because the opening <code>**</code> is preceded
by an alphanumeric and followed by punctuation, and hence
not part of a <a href="#left-flanking-delimiter-run">left-flanking delimiter run</a>:</p>
<div class="example" id="example-389">
<div class="examplenum">
<a href="#example-389">Example 389</a>
</div>
<div class="column">
<pre><code class="language-markdown">a**"foo"**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;a**&amp;quot;foo&amp;quot;**&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Intraword strong emphasis with <code>**</code> is permitted:</p>
<div class="example" id="example-390">
<div class="examplenum">
<a href="#example-390">Example 390</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo**bar**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;strong&gt;bar&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 6:</p>
<div class="example" id="example-391">
<div class="examplenum">
<a href="#example-391">Example 391</a>
</div>
<div class="column">
<pre><code class="language-markdown">__foo<span class="space"> </span>bar__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo<span class="space"> </span>bar&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not strong emphasis, because the opening delimiter is
followed by whitespace:</p>
<div class="example" id="example-392">
<div class="examplenum">
<a href="#example-392">Example 392</a>
</div>
<div class="column">
<pre><code class="language-markdown">__<span class="space"> </span>foo<span class="space"> </span>bar__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;__<span class="space"> </span>foo<span class="space"> </span>bar__&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A newline counts as whitespace:</p>
<div class="example" id="example-393">
<div class="examplenum">
<a href="#example-393">Example 393</a>
</div>
<div class="column">
<pre><code class="language-markdown">__
foo<span class="space"> </span>bar__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;__
foo<span class="space"> </span>bar__&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not strong emphasis, because the opening <code>__</code> is preceded
by an alphanumeric and followed by punctuation:</p>
<div class="example" id="example-394">
<div class="examplenum">
<a href="#example-394">Example 394</a>
</div>
<div class="column">
<pre><code class="language-markdown">a__"foo"__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;a__&amp;quot;foo&amp;quot;__&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Intraword strong emphasis is forbidden with <code>__</code>:</p>
<div class="example" id="example-395">
<div class="examplenum">
<a href="#example-395">Example 395</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo__bar__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo__bar__&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-396">
<div class="examplenum">
<a href="#example-396">Example 396</a>
</div>
<div class="column">
<pre><code class="language-markdown">5__6__78
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;5__6__78&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-397">
<div class="examplenum">
<a href="#example-397">Example 397</a>
</div>
<div class="column">
<pre><code class="language-markdown">пристаням__стремятся__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;пристаням__стремятся__&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-398">
<div class="examplenum">
<a href="#example-398">Example 398</a>
</div>
<div class="column">
<pre><code class="language-markdown">__foo,<span class="space"> </span>__bar__,<span class="space"> </span>baz__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo,<span class="space"> </span>&lt;strong&gt;bar&lt;/strong&gt;,<span class="space"> </span>baz&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is strong emphasis, even though the opening delimiter is
both left- and right-flanking, because it is preceded by
punctuation:</p>
<div class="example" id="example-399">
<div class="examplenum">
<a href="#example-399">Example 399</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo-__(bar)__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo-&lt;strong&gt;(bar)&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 7:</p>
<p>This is not strong emphasis, because the closing delimiter is preceded
by whitespace:</p>
<div class="example" id="example-400">
<div class="examplenum">
<a href="#example-400">Example 400</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo<span class="space"> </span>bar<span class="space"> </span>**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;**foo<span class="space"> </span>bar<span class="space"> </span>**&lt;/p&gt;
</code></pre>
</div>
</div>
<p>(Nor can it be interpreted as an emphasized <code>*foo bar *</code>, because of
Rule 11.)</p>
<p>This is not strong emphasis, because the second <code>**</code> is
preceded by punctuation and followed by an alphanumeric:</p>
<div class="example" id="example-401">
<div class="examplenum">
<a href="#example-401">Example 401</a>
</div>
<div class="column">
<pre><code class="language-markdown">**(**foo)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;**(**foo)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The point of this restriction is more easily appreciated
with these examples:</p>
<div class="example" id="example-402">
<div class="examplenum">
<a href="#example-402">Example 402</a>
</div>
<div class="column">
<pre><code class="language-markdown">*(**foo**)*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;(&lt;strong&gt;foo&lt;/strong&gt;)&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-403">
<div class="examplenum">
<a href="#example-403">Example 403</a>
</div>
<div class="column">
<pre><code class="language-markdown">**Gomphocarpus<span class="space"> </span>(*Gomphocarpus<span class="space"> </span>physocarpus*,<span class="space"> </span>syn.
*Asclepias<span class="space"> </span>physocarpa*)**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;Gomphocarpus<span class="space"> </span>(&lt;em&gt;Gomphocarpus<span class="space"> </span>physocarpus&lt;/em&gt;,<span class="space"> </span>syn.
&lt;em&gt;Asclepias<span class="space"> </span>physocarpa&lt;/em&gt;)&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-404">
<div class="examplenum">
<a href="#example-404">Example 404</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo<span class="space"> </span>"*bar*"<span class="space"> </span>foo**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo<span class="space"> </span>&amp;quot;&lt;em&gt;bar&lt;/em&gt;&amp;quot;<span class="space"> </span>foo&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Intraword emphasis:</p>
<div class="example" id="example-405">
<div class="examplenum">
<a href="#example-405">Example 405</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo**bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo&lt;/strong&gt;bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 8:</p>
<p>This is not strong emphasis, because the closing delimiter is
preceded by whitespace:</p>
<div class="example" id="example-406">
<div class="examplenum">
<a href="#example-406">Example 406</a>
</div>
<div class="column">
<pre><code class="language-markdown">__foo<span class="space"> </span>bar<span class="space"> </span>__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;__foo<span class="space"> </span>bar<span class="space"> </span>__&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is not strong emphasis, because the second <code>__</code> is
preceded by punctuation and followed by an alphanumeric:</p>
<div class="example" id="example-407">
<div class="examplenum">
<a href="#example-407">Example 407</a>
</div>
<div class="column">
<pre><code class="language-markdown">__(__foo)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;__(__foo)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The point of this restriction is more easily appreciated
with this example:</p>
<div class="example" id="example-408">
<div class="examplenum">
<a href="#example-408">Example 408</a>
</div>
<div class="column">
<pre><code class="language-markdown">_(__foo__)_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;(&lt;strong&gt;foo&lt;/strong&gt;)&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Intraword strong emphasis is forbidden with <code>__</code>:</p>
<div class="example" id="example-409">
<div class="examplenum">
<a href="#example-409">Example 409</a>
</div>
<div class="column">
<pre><code class="language-markdown">__foo__bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;__foo__bar&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-410">
<div class="examplenum">
<a href="#example-410">Example 410</a>
</div>
<div class="column">
<pre><code class="language-markdown">__пристаням__стремятся
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;__пристаням__стремятся&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-411">
<div class="examplenum">
<a href="#example-411">Example 411</a>
</div>
<div class="column">
<pre><code class="language-markdown">__foo__bar__baz__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo__bar__baz&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is strong emphasis, even though the closing delimiter is
both left- and right-flanking, because it is followed by
punctuation:</p>
<div class="example" id="example-412">
<div class="examplenum">
<a href="#example-412">Example 412</a>
</div>
<div class="column">
<pre><code class="language-markdown">__(bar)__.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;(bar)&lt;/strong&gt;.&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 9:</p>
<p>Any nonempty sequence of inline elements can be the contents of an
emphasized span.</p>
<div class="example" id="example-413">
<div class="examplenum">
<a href="#example-413">Example 413</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>[bar](/url)*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>&lt;a<span class="space"> </span>href="/url"&gt;bar&lt;/a&gt;&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-414">
<div class="examplenum">
<a href="#example-414">Example 414</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo
bar*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo
bar&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>In particular, emphasis and strong emphasis can be nested
inside emphasis:</p>
<div class="example" id="example-415">
<div class="examplenum">
<a href="#example-415">Example 415</a>
</div>
<div class="column">
<pre><code class="language-markdown">_foo<span class="space"> </span>__bar__<span class="space"> </span>baz_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>&lt;strong&gt;bar&lt;/strong&gt;<span class="space"> </span>baz&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-416">
<div class="examplenum">
<a href="#example-416">Example 416</a>
</div>
<div class="column">
<pre><code class="language-markdown">_foo<span class="space"> </span>_bar_<span class="space"> </span>baz_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>&lt;em&gt;bar&lt;/em&gt;<span class="space"> </span>baz&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-417">
<div class="examplenum">
<a href="#example-417">Example 417</a>
</div>
<div class="column">
<pre><code class="language-markdown">__foo_<span class="space"> </span>bar_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;&lt;em&gt;foo&lt;/em&gt;<span class="space"> </span>bar&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-418">
<div class="examplenum">
<a href="#example-418">Example 418</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>*bar**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>&lt;em&gt;bar&lt;/em&gt;&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-419">
<div class="examplenum">
<a href="#example-419">Example 419</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>**bar**<span class="space"> </span>baz*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>&lt;strong&gt;bar&lt;/strong&gt;<span class="space"> </span>baz&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-420">
<div class="examplenum">
<a href="#example-420">Example 420</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo**bar**baz*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo&lt;strong&gt;bar&lt;/strong&gt;baz&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that in the preceding case, the interpretation</p>
<pre><code class="language-markdown">&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;&lt;em&gt;bar&lt;em&gt;&lt;/em&gt;baz&lt;/em&gt;&lt;/p&gt;
</code></pre>
<p>is precluded by the condition that a delimiter that
can both open and close (like the <code>*</code> after <code>foo</code>)
cannot form emphasis if the sum of the lengths of
the delimiter runs containing the opening and
closing delimiters is a multiple of 3 unless
both lengths are multiples of 3.</p>
<p>For the same reason, we don’t get two consecutive
emphasis sections in this example:</p>
<div class="example" id="example-421">
<div class="examplenum">
<a href="#example-421">Example 421</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo**bar*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo**bar&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The same condition ensures that the following
cases are all strong emphasis nested inside
emphasis, even when the interior spaces are
omitted:</p>
<div class="example" id="example-422">
<div class="examplenum">
<a href="#example-422">Example 422</a>
</div>
<div class="column">
<pre><code class="language-markdown">***foo**<span class="space"> </span>bar*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;&lt;strong&gt;foo&lt;/strong&gt;<span class="space"> </span>bar&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-423">
<div class="examplenum">
<a href="#example-423">Example 423</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>**bar***
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>&lt;strong&gt;bar&lt;/strong&gt;&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-424">
<div class="examplenum">
<a href="#example-424">Example 424</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo**bar***
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo&lt;strong&gt;bar&lt;/strong&gt;&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>When the lengths of the interior closing and opening
delimiter runs are <em>both</em> multiples of 3, though,
they can match to create emphasis:</p>
<div class="example" id="example-425">
<div class="examplenum">
<a href="#example-425">Example 425</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo***bar***baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;em&gt;&lt;strong&gt;bar&lt;/strong&gt;&lt;/em&gt;baz&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-426">
<div class="examplenum">
<a href="#example-426">Example 426</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo******bar*********baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;strong&gt;&lt;strong&gt;&lt;strong&gt;bar&lt;/strong&gt;&lt;/strong&gt;&lt;/strong&gt;***baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Indefinite levels of nesting are possible:</p>
<div class="example" id="example-427">
<div class="examplenum">
<a href="#example-427">Example 427</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>**bar<span class="space"> </span>*baz*<span class="space"> </span>bim**<span class="space"> </span>bop*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>&lt;strong&gt;bar<span class="space"> </span>&lt;em&gt;baz&lt;/em&gt;<span class="space"> </span>bim&lt;/strong&gt;<span class="space"> </span>bop&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-428">
<div class="examplenum">
<a href="#example-428">Example 428</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>[*bar*](/url)*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>&lt;a<span class="space"> </span>href="/url"&gt;&lt;em&gt;bar&lt;/em&gt;&lt;/a&gt;&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>There can be no empty emphasis or strong emphasis:</p>
<div class="example" id="example-429">
<div class="examplenum">
<a href="#example-429">Example 429</a>
</div>
<div class="column">
<pre><code class="language-markdown">**<span class="space"> </span>is<span class="space"> </span>not<span class="space"> </span>an<span class="space"> </span>empty<span class="space"> </span>emphasis
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;**<span class="space"> </span>is<span class="space"> </span>not<span class="space"> </span>an<span class="space"> </span>empty<span class="space"> </span>emphasis&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-430">
<div class="examplenum">
<a href="#example-430">Example 430</a>
</div>
<div class="column">
<pre><code class="language-markdown">****<span class="space"> </span>is<span class="space"> </span>not<span class="space"> </span>an<span class="space"> </span>empty<span class="space"> </span>strong<span class="space"> </span>emphasis
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;****<span class="space"> </span>is<span class="space"> </span>not<span class="space"> </span>an<span class="space"> </span>empty<span class="space"> </span>strong<span class="space"> </span>emphasis&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 10:</p>
<p>Any nonempty sequence of inline elements can be the contents of an
strongly emphasized span.</p>
<div class="example" id="example-431">
<div class="examplenum">
<a href="#example-431">Example 431</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo<span class="space"> </span>[bar](/url)**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo<span class="space"> </span>&lt;a<span class="space"> </span>href="/url"&gt;bar&lt;/a&gt;&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-432">
<div class="examplenum">
<a href="#example-432">Example 432</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo
bar**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo
bar&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>In particular, emphasis and strong emphasis can be nested
inside strong emphasis:</p>
<div class="example" id="example-433">
<div class="examplenum">
<a href="#example-433">Example 433</a>
</div>
<div class="column">
<pre><code class="language-markdown">__foo<span class="space"> </span>_bar_<span class="space"> </span>baz__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo<span class="space"> </span>&lt;em&gt;bar&lt;/em&gt;<span class="space"> </span>baz&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-434">
<div class="examplenum">
<a href="#example-434">Example 434</a>
</div>
<div class="column">
<pre><code class="language-markdown">__foo<span class="space"> </span>__bar__<span class="space"> </span>baz__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo<span class="space"> </span>&lt;strong&gt;bar&lt;/strong&gt;<span class="space"> </span>baz&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-435">
<div class="examplenum">
<a href="#example-435">Example 435</a>
</div>
<div class="column">
<pre><code class="language-markdown">____foo__<span class="space"> </span>bar__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;&lt;strong&gt;foo&lt;/strong&gt;<span class="space"> </span>bar&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-436">
<div class="examplenum">
<a href="#example-436">Example 436</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo<span class="space"> </span>**bar****
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo<span class="space"> </span>&lt;strong&gt;bar&lt;/strong&gt;&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-437">
<div class="examplenum">
<a href="#example-437">Example 437</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo<span class="space"> </span>*bar*<span class="space"> </span>baz**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo<span class="space"> </span>&lt;em&gt;bar&lt;/em&gt;<span class="space"> </span>baz&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-438">
<div class="examplenum">
<a href="#example-438">Example 438</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo*bar*baz**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo&lt;em&gt;bar&lt;/em&gt;baz&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-439">
<div class="examplenum">
<a href="#example-439">Example 439</a>
</div>
<div class="column">
<pre><code class="language-markdown">***foo*<span class="space"> </span>bar**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;&lt;em&gt;foo&lt;/em&gt;<span class="space"> </span>bar&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-440">
<div class="examplenum">
<a href="#example-440">Example 440</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo<span class="space"> </span>*bar***
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo<span class="space"> </span>&lt;em&gt;bar&lt;/em&gt;&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Indefinite levels of nesting are possible:</p>
<div class="example" id="example-441">
<div class="examplenum">
<a href="#example-441">Example 441</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo<span class="space"> </span>*bar<span class="space"> </span>**baz**
bim*<span class="space"> </span>bop**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo<span class="space"> </span>&lt;em&gt;bar<span class="space"> </span>&lt;strong&gt;baz&lt;/strong&gt;
bim&lt;/em&gt;<span class="space"> </span>bop&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-442">
<div class="examplenum">
<a href="#example-442">Example 442</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo<span class="space"> </span>[*bar*](/url)**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo<span class="space"> </span>&lt;a<span class="space"> </span>href="/url"&gt;&lt;em&gt;bar&lt;/em&gt;&lt;/a&gt;&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>There can be no empty emphasis or strong emphasis:</p>
<div class="example" id="example-443">
<div class="examplenum">
<a href="#example-443">Example 443</a>
</div>
<div class="column">
<pre><code class="language-markdown">__<span class="space"> </span>is<span class="space"> </span>not<span class="space"> </span>an<span class="space"> </span>empty<span class="space"> </span>emphasis
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;__<span class="space"> </span>is<span class="space"> </span>not<span class="space"> </span>an<span class="space"> </span>empty<span class="space"> </span>emphasis&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-444">
<div class="examplenum">
<a href="#example-444">Example 444</a>
</div>
<div class="column">
<pre><code class="language-markdown">____<span class="space"> </span>is<span class="space"> </span>not<span class="space"> </span>an<span class="space"> </span>empty<span class="space"> </span>strong<span class="space"> </span>emphasis
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;____<span class="space"> </span>is<span class="space"> </span>not<span class="space"> </span>an<span class="space"> </span>empty<span class="space"> </span>strong<span class="space"> </span>emphasis&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 11:</p>
<div class="example" id="example-445">
<div class="examplenum">
<a href="#example-445">Example 445</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>***
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>***&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-446">
<div class="examplenum">
<a href="#example-446">Example 446</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>*\**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;em&gt;*&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-447">
<div class="examplenum">
<a href="#example-447">Example 447</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>*_*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;em&gt;_&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-448">
<div class="examplenum">
<a href="#example-448">Example 448</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>*****
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>*****&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-449">
<div class="examplenum">
<a href="#example-449">Example 449</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>**\***
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;strong&gt;*&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-450">
<div class="examplenum">
<a href="#example-450">Example 450</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>**_**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;strong&gt;_&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that when delimiters do not match evenly, Rule 11 determines
that the excess literal <code>*</code> characters will appear outside of the
emphasis, rather than inside it:</p>
<div class="example" id="example-451">
<div class="examplenum">
<a href="#example-451">Example 451</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-452">
<div class="examplenum">
<a href="#example-452">Example 452</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;*&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-453">
<div class="examplenum">
<a href="#example-453">Example 453</a>
</div>
<div class="column">
<pre><code class="language-markdown">***foo**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*&lt;strong&gt;foo&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-454">
<div class="examplenum">
<a href="#example-454">Example 454</a>
</div>
<div class="column">
<pre><code class="language-markdown">****foo*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;***&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-455">
<div class="examplenum">
<a href="#example-455">Example 455</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo***
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo&lt;/strong&gt;*&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-456">
<div class="examplenum">
<a href="#example-456">Example 456</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo****
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;***&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 12:</p>
<div class="example" id="example-457">
<div class="examplenum">
<a href="#example-457">Example 457</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>___
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>___&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-458">
<div class="examplenum">
<a href="#example-458">Example 458</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>_\__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;em&gt;_&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-459">
<div class="examplenum">
<a href="#example-459">Example 459</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>_*_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;em&gt;*&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-460">
<div class="examplenum">
<a href="#example-460">Example 460</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>_____
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>_____&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-461">
<div class="examplenum">
<a href="#example-461">Example 461</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>__\___
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;strong&gt;_&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-462">
<div class="examplenum">
<a href="#example-462">Example 462</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>__*__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;strong&gt;*&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-463">
<div class="examplenum">
<a href="#example-463">Example 463</a>
</div>
<div class="column">
<pre><code class="language-markdown">__foo_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;_&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that when delimiters do not match evenly, Rule 12 determines
that the excess literal <code>_</code> characters will appear outside of the
emphasis, rather than inside it:</p>
<div class="example" id="example-464">
<div class="examplenum">
<a href="#example-464">Example 464</a>
</div>
<div class="column">
<pre><code class="language-markdown">_foo__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;_&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-465">
<div class="examplenum">
<a href="#example-465">Example 465</a>
</div>
<div class="column">
<pre><code class="language-markdown">___foo__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;_&lt;strong&gt;foo&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-466">
<div class="examplenum">
<a href="#example-466">Example 466</a>
</div>
<div class="column">
<pre><code class="language-markdown">____foo_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;___&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-467">
<div class="examplenum">
<a href="#example-467">Example 467</a>
</div>
<div class="column">
<pre><code class="language-markdown">__foo___
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo&lt;/strong&gt;_&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-468">
<div class="examplenum">
<a href="#example-468">Example 468</a>
</div>
<div class="column">
<pre><code class="language-markdown">_foo____
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;___&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 13 implies that if you want emphasis nested directly inside
emphasis, you must use different delimiters:</p>
<div class="example" id="example-469">
<div class="examplenum">
<a href="#example-469">Example 469</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-470">
<div class="examplenum">
<a href="#example-470">Example 470</a>
</div>
<div class="column">
<pre><code class="language-markdown">*_foo_*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;&lt;em&gt;foo&lt;/em&gt;&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-471">
<div class="examplenum">
<a href="#example-471">Example 471</a>
</div>
<div class="column">
<pre><code class="language-markdown">__foo__
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;foo&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-472">
<div class="examplenum">
<a href="#example-472">Example 472</a>
</div>
<div class="column">
<pre><code class="language-markdown">_*foo*_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;&lt;em&gt;foo&lt;/em&gt;&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>However, strong emphasis within strong emphasis is possible without
switching delimiters:</p>
<div class="example" id="example-473">
<div class="examplenum">
<a href="#example-473">Example 473</a>
</div>
<div class="column">
<pre><code class="language-markdown">****foo****
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;&lt;strong&gt;foo&lt;/strong&gt;&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-474">
<div class="examplenum">
<a href="#example-474">Example 474</a>
</div>
<div class="column">
<pre><code class="language-markdown">____foo____
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;&lt;strong&gt;foo&lt;/strong&gt;&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 13 can be applied to arbitrarily long sequences of
delimiters:</p>
<div class="example" id="example-475">
<div class="examplenum">
<a href="#example-475">Example 475</a>
</div>
<div class="column">
<pre><code class="language-markdown">******foo******
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;&lt;strong&gt;&lt;strong&gt;foo&lt;/strong&gt;&lt;/strong&gt;&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 14:</p>
<div class="example" id="example-476">
<div class="examplenum">
<a href="#example-476">Example 476</a>
</div>
<div class="column">
<pre><code class="language-markdown">***foo***
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;&lt;strong&gt;foo&lt;/strong&gt;&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-477">
<div class="examplenum">
<a href="#example-477">Example 477</a>
</div>
<div class="column">
<pre><code class="language-markdown">_____foo_____
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;&lt;strong&gt;&lt;strong&gt;foo&lt;/strong&gt;&lt;/strong&gt;&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 15:</p>
<div class="example" id="example-478">
<div class="examplenum">
<a href="#example-478">Example 478</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>_bar*<span class="space"> </span>baz_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>_bar&lt;/em&gt;<span class="space"> </span>baz_&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-479">
<div class="examplenum">
<a href="#example-479">Example 479</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>__bar<span class="space"> </span>*baz<span class="space"> </span>bim__<span class="space"> </span>bam*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>&lt;strong&gt;bar<span class="space"> </span>*baz<span class="space"> </span>bim&lt;/strong&gt;<span class="space"> </span>bam&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 16:</p>
<div class="example" id="example-480">
<div class="examplenum">
<a href="#example-480">Example 480</a>
</div>
<div class="column">
<pre><code class="language-markdown">**foo<span class="space"> </span>**bar<span class="space"> </span>baz**
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;**foo<span class="space"> </span>&lt;strong&gt;bar<span class="space"> </span>baz&lt;/strong&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-481">
<div class="examplenum">
<a href="#example-481">Example 481</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>*bar<span class="space"> </span>baz*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*foo<span class="space"> </span>&lt;em&gt;bar<span class="space"> </span>baz&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Rule 17:</p>
<div class="example" id="example-482">
<div class="examplenum">
<a href="#example-482">Example 482</a>
</div>
<div class="column">
<pre><code class="language-markdown">*[bar*](/url)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*&lt;a<span class="space"> </span>href="/url"&gt;bar*&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-483">
<div class="examplenum">
<a href="#example-483">Example 483</a>
</div>
<div class="column">
<pre><code class="language-markdown">_foo<span class="space"> </span>[bar_](/url)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;_foo<span class="space"> </span>&lt;a<span class="space"> </span>href="/url"&gt;bar_&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-484">
<div class="examplenum">
<a href="#example-484">Example 484</a>
</div>
<div class="column">
<pre><code class="language-markdown">*&lt;img<span class="space"> </span>src="foo"<span class="space"> </span>title="*"/&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*&lt;img<span class="space"> </span>src="foo"<span class="space"> </span>title="*"/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-485">
<div class="examplenum">
<a href="#example-485">Example 485</a>
</div>
<div class="column">
<pre><code class="language-markdown">**&lt;a<span class="space"> </span>href="**"&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;**&lt;a<span class="space"> </span>href="**"&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-486">
<div class="examplenum">
<a href="#example-486">Example 486</a>
</div>
<div class="column">
<pre><code class="language-markdown">__&lt;a<span class="space"> </span>href="__"&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;__&lt;a<span class="space"> </span>href="__"&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-487">
<div class="examplenum">
<a href="#example-487">Example 487</a>
</div>
<div class="column">
<pre><code class="language-markdown">*a<span class="space"> </span>`*`*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;a<span class="space"> </span>&lt;code&gt;*&lt;/code&gt;&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-488">
<div class="examplenum">
<a href="#example-488">Example 488</a>
</div>
<div class="column">
<pre><code class="language-markdown">_a<span class="space"> </span>`_`_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;a<span class="space"> </span>&lt;code&gt;_&lt;/code&gt;&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-489">
<div class="examplenum">
<a href="#example-489">Example 489</a>
</div>
<div class="column">
<pre><code class="language-markdown">**a&lt;http://foo.bar/?q=**&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;**a&lt;a<span class="space"> </span>href="http://foo.bar/?q=**"&gt;http://foo.bar/?q=**&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-490">
<div class="examplenum">
<a href="#example-490">Example 490</a>
</div>
<div class="column">
<pre><code class="language-markdown">__a&lt;http://foo.bar/?q=__&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;__a&lt;a<span class="space"> </span>href="http://foo.bar/?q=__"&gt;http://foo.bar/?q=__&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="extension">
<h2 id="strikethrough-extension-" href="#strikethrough-extension-" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.5</span>Strikethrough (extension)
</h2>
<p>GFM enables the <code>strikethrough</code> extension, where an additional emphasis type is
available.</p>
<p>Strikethrough text is any text wrapped in a matching pair of one or two tildes
(<code>~</code>).</p>
<div class="example" id="example-491">
<div class="examplenum">
<a href="#example-491">Example 491</a>
</div>
<div class="column">
<pre><code class="language-markdown">~~Hi~~<span class="space"> </span>Hello,<span class="space"> </span>~there~<span class="space"> </span>world!
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;del&gt;Hi&lt;/del&gt;<span class="space"> </span>Hello,<span class="space"> </span>&lt;del&gt;there&lt;/del&gt;<span class="space"> </span>world!&lt;/p&gt;
</code></pre>
</div>
</div>
<p>As with regular emphasis delimiters, a new paragraph will cause strikethrough
parsing to cease:</p>
<div class="example" id="example-492">
<div class="examplenum">
<a href="#example-492">Example 492</a>
</div>
<div class="column">
<pre><code class="language-markdown">This<span class="space"> </span>~~has<span class="space"> </span>a

new<span class="space"> </span>paragraph~~.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;This<span class="space"> </span>~~has<span class="space"> </span>a&lt;/p&gt;
&lt;p&gt;new<span class="space"> </span>paragraph~~.&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Three or more tildes do not create a strikethrough:</p>
<div class="example" id="example-493">
<div class="examplenum">
<a href="#example-493">Example 493</a>
</div>
<div class="column">
<pre><code class="language-markdown">This<span class="space"> </span>will<span class="space"> </span>~~~not~~~<span class="space"> </span>strike.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;This<span class="space"> </span>will<span class="space"> </span>~~~not~~~<span class="space"> </span>strike.&lt;/p&gt;
</code></pre>
</div>
</div>
</div>
<h2 id="links" href="#links" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.6</span>Links
</h2>
<p>A link contains <a href="#link-text">link text</a> (the visible text), a <a href="#link-destination">link destination</a>
(the URI that is the link destination), and optionally a <a href="#link-title">link title</a>.
There are two basic kinds of links in Markdown.  In <a href="#inline-link">inline links</a> the
destination and title are given immediately after the link text.  In
<a href="#reference-link">reference links</a> the destination and title are defined elsewhere in
the document.</p>
<p>A <a id="link-text" href="#link-text" class="definition">link text</a> consists of a sequence of zero or more
inline elements enclosed by square brackets (<code>[</code> and <code>]</code>).  The
following rules apply:</p>
<ul>
<li>
<p>Links may not contain other links, at any level of nesting. If
multiple otherwise valid link definitions appear nested inside each
other, the inner-most definition is used.</p>
</li>
<li>
<p>Brackets are allowed in the <a href="#link-text">link text</a> only if (a) they
are backslash-escaped or (b) they appear as a matched pair of brackets,
with an open bracket <code>[</code>, a sequence of zero or more inlines, and
a close bracket <code>]</code>.</p>
</li>
<li>
<p>Backtick <a href="#code-spans">code spans</a>, <a href="#autolinks">autolinks</a>, and raw <a href="#html-tag">HTML tags</a> bind more tightly
than the brackets in link text.  Thus, for example,
<code>[foo`]`</code> could not be a link text, since the second <code>]</code>
is part of a code span.</p>
</li>
<li>
<p>The brackets in link text bind more tightly than markers for
<a href="#emphasis-and-strong-emphasis">emphasis and strong emphasis</a>. Thus, for example, <code>*[foo*](url)</code> is a link.</p>
</li>
</ul>
<p>A <a id="link-destination" href="#link-destination" class="definition">link destination</a> consists of either</p>
<ul>
<li>
<p>a sequence of zero or more characters between an opening <code>&lt;</code> and a
closing <code>&gt;</code> that contains no line breaks or unescaped
<code>&lt;</code> or <code>&gt;</code> characters, or</p>
</li>
<li>
<p>a nonempty sequence of characters that does not start with
<code>&lt;</code>, does not include ASCII space or control characters, and
includes parentheses only if (a) they are backslash-escaped or
(b) they are part of a balanced pair of unescaped parentheses.
(Implementations may impose limits on parentheses nesting to
avoid performance issues, but at least three levels of nesting
should be supported.)</p>
</li>
</ul>
<p>A <a id="link-title" href="#link-title" class="definition">link title</a>  consists of either</p>
<ul>
<li>
<p>a sequence of zero or more characters between straight double-quote
characters (<code>"</code>), including a <code>"</code> character only if it is
backslash-escaped, or</p>
</li>
<li>
<p>a sequence of zero or more characters between straight single-quote
characters (<code>'</code>), including a <code>'</code> character only if it is
backslash-escaped, or</p>
</li>
<li>
<p>a sequence of zero or more characters between matching parentheses
(<code>(...)</code>), including a <code>(</code> or <code>)</code> character only if it is
backslash-escaped.</p>
</li>
</ul>
<p>Although <a href="#link-title">link titles</a> may span multiple lines, they may not contain
a <a href="#blank-line">blank line</a>.</p>
<p>An <a id="inline-link" href="#inline-link" class="definition">inline link</a> consists of a <a href="#link-text">link text</a> followed immediately
by a left parenthesis <code>(</code>, optional <a href="#whitespace">whitespace</a>, an optional
<a href="#link-destination">link destination</a>, an optional <a href="#link-title">link title</a> separated from the link
destination by <a href="#whitespace">whitespace</a>, optional <a href="#whitespace">whitespace</a>, and a right
parenthesis <code>)</code>. The link’s text consists of the inlines contained
in the <a href="#link-text">link text</a> (excluding the enclosing square brackets).
The link’s URI consists of the link destination, excluding enclosing
<code>&lt;...&gt;</code> if present, with backslash-escapes in effect as described
above.  The link’s title consists of the link title, excluding its
enclosing delimiters, with backslash-escapes in effect as described
above.</p>
<p>Here is a simple inline link:</p>
<div class="example" id="example-494">
<div class="examplenum">
<a href="#example-494">Example 494</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](/uri<span class="space"> </span>"title")
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"<span class="space"> </span>title="title"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The title may be omitted:</p>
<div class="example" id="example-495">
<div class="examplenum">
<a href="#example-495">Example 495</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](/uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Both the title and the destination may be omitted:</p>
<div class="example" id="example-496">
<div class="examplenum">
<a href="#example-496">Example 496</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link]()
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href=""&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-497">
<div class="examplenum">
<a href="#example-497">Example 497</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](&lt;&gt;)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href=""&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The destination can only contain spaces if it is
enclosed in pointy brackets:</p>
<div class="example" id="example-498">
<div class="examplenum">
<a href="#example-498">Example 498</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](/my<span class="space"> </span>uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[link](/my<span class="space"> </span>uri)&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-499">
<div class="examplenum">
<a href="#example-499">Example 499</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](&lt;/my<span class="space"> </span>uri&gt;)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/my%20uri"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The destination cannot contain line breaks,
even if enclosed in pointy brackets:</p>
<div class="example" id="example-500">
<div class="examplenum">
<a href="#example-500">Example 500</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](foo
bar)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[link](foo
bar)&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-501">
<div class="examplenum">
<a href="#example-501">Example 501</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](&lt;foo
bar&gt;)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[link](&lt;foo
bar&gt;)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The destination can contain <code>)</code> if it is enclosed
in pointy brackets:</p>
<div class="example" id="example-502">
<div class="examplenum">
<a href="#example-502">Example 502</a>
</div>
<div class="column">
<pre><code class="language-markdown">[a](&lt;b)c&gt;)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="b)c"&gt;a&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Pointy brackets that enclose links must be unescaped:</p>
<div class="example" id="example-503">
<div class="examplenum">
<a href="#example-503">Example 503</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](&lt;foo\&gt;)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[link](&amp;lt;foo&amp;gt;)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>These are not links, because the opening pointy bracket
is not matched properly:</p>
<div class="example" id="example-504">
<div class="examplenum">
<a href="#example-504">Example 504</a>
</div>
<div class="column">
<pre><code class="language-markdown">[a](&lt;b)c
[a](&lt;b)c&gt;
[a](&lt;b&gt;c)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[a](&amp;lt;b)c
[a](&amp;lt;b)c&amp;gt;
[a](&lt;b&gt;c)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Parentheses inside the link destination may be escaped:</p>
<div class="example" id="example-505">
<div class="examplenum">
<a href="#example-505">Example 505</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](\(foo\))
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="(foo)"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Any number of parentheses are allowed without escaping, as long as they are
balanced:</p>
<div class="example" id="example-506">
<div class="examplenum">
<a href="#example-506">Example 506</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](foo(and(bar)))
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="foo(and(bar))"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>However, if you have unbalanced parentheses, you need to escape or use the
<code>&lt;...&gt;</code> form:</p>
<div class="example" id="example-507">
<div class="examplenum">
<a href="#example-507">Example 507</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](foo\(and\(bar\))
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="foo(and(bar)"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-508">
<div class="examplenum">
<a href="#example-508">Example 508</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](&lt;foo(and(bar)&gt;)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="foo(and(bar)"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Parentheses and other symbols can also be escaped, as usual
in Markdown:</p>
<div class="example" id="example-509">
<div class="examplenum">
<a href="#example-509">Example 509</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](foo\)\:)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="foo):"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A link can contain fragment identifiers and queries:</p>
<div class="example" id="example-510">
<div class="examplenum">
<a href="#example-510">Example 510</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](#fragment)

[link](http://example.com#fragment)

[link](http://example.com?foo=3#frag)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="#fragment"&gt;link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="http://example.com#fragment"&gt;link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="http://example.com?foo=3#frag"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that a backslash before a non-escapable character is
just a backslash:</p>
<div class="example" id="example-511">
<div class="examplenum">
<a href="#example-511">Example 511</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](foo\bar)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="foo%5Cbar"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>URL-escaping should be left alone inside the destination, as all
URL-escaped characters are also valid URL characters. Entity and
numerical character references in the destination will be parsed
into the corresponding Unicode code points, as usual.  These may
be optionally URL-escaped when written as HTML, but this spec
does not enforce any particular policy for rendering URLs in
HTML or other formats.  Renderers may make different decisions
about how to escape or normalize URLs in the output.</p>
<div class="example" id="example-512">
<div class="examplenum">
<a href="#example-512">Example 512</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](foo%20b&amp;auml;)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="foo%20b%C3%A4"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that, because titles can often be parsed as destinations,
if you try to omit the destination and keep the title, you’ll
get unexpected results:</p>
<div class="example" id="example-513">
<div class="examplenum">
<a href="#example-513">Example 513</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link]("title")
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="%22title%22"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Titles may be in single quotes, double quotes, or parentheses:</p>
<div class="example" id="example-514">
<div class="examplenum">
<a href="#example-514">Example 514</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](/url<span class="space"> </span>"title")
[link](/url<span class="space"> </span>'title')
[link](/url<span class="space"> </span>(title))
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;link&lt;/a&gt;
&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;link&lt;/a&gt;
&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Backslash escapes and entity and numeric character references
may be used in titles:</p>
<div class="example" id="example-515">
<div class="examplenum">
<a href="#example-515">Example 515</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](/url<span class="space"> </span>"title<span class="space"> </span>\"&amp;quot;")
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title<span class="space"> </span>&amp;quot;&amp;quot;"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Titles must be separated from the link using a <a href="#whitespace">whitespace</a>.
Other <a href="#unicode-whitespace">Unicode whitespace</a> like non-breaking space doesn’t work.</p>
<div class="example" id="example-516">
<div class="examplenum">
<a href="#example-516">Example 516</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](/url&nbsp;"title")
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url%C2%A0%22title%22"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Nested balanced quotes are not allowed without escaping:</p>
<div class="example" id="example-517">
<div class="examplenum">
<a href="#example-517">Example 517</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](/url<span class="space"> </span>"title<span class="space"> </span>"and"<span class="space"> </span>title")
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[link](/url<span class="space"> </span>&amp;quot;title<span class="space"> </span>&amp;quot;and&amp;quot;<span class="space"> </span>title&amp;quot;)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>But it is easy to work around this by using a different quote type:</p>
<div class="example" id="example-518">
<div class="examplenum">
<a href="#example-518">Example 518</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](/url<span class="space"> </span>'title<span class="space"> </span>"and"<span class="space"> </span>title')
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title<span class="space"> </span>&amp;quot;and&amp;quot;<span class="space"> </span>title"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>(Note:  <code>Markdown.pl</code> did allow double quotes inside a double-quoted
title, and its test suite included a test demonstrating this.
But it is hard to see a good rationale for the extra complexity this
brings, since there are already many ways—backslash escaping,
entity and numeric character references, or using a different
quote type for the enclosing title—to write titles containing
double quotes.  <code>Markdown.pl</code>’s handling of titles has a number
of other strange features.  For example, it allows single-quoted
titles in inline links, but not reference links.  And, in
reference links but not inline links, it allows a title to begin
with <code>"</code> and end with <code>)</code>.  <code>Markdown.pl</code> 1.0.1 even allows
titles with no closing quotation mark, though 1.0.2b8 does not.
It seems preferable to adopt a simple, rational rule that works
the same way in inline links and link reference definitions.)</p>
<p><a href="#whitespace">Whitespace</a> is allowed around the destination and title:</p>
<div class="example" id="example-519">
<div class="examplenum">
<a href="#example-519">Example 519</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link](<span class="space"> </span><span class="space"> </span><span class="space"> </span>/uri
<span class="space"> </span><span class="space"> </span>"title"<span class="space"> </span><span class="space"> </span>)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"<span class="space"> </span>title="title"&gt;link&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>But it is not allowed between the link text and the
following parenthesis:</p>
<div class="example" id="example-520">
<div class="examplenum">
<a href="#example-520">Example 520</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link]<span class="space"> </span>(/uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[link]<span class="space"> </span>(/uri)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The link text may contain balanced brackets, but not unbalanced ones,
unless they are escaped:</p>
<div class="example" id="example-521">
<div class="examplenum">
<a href="#example-521">Example 521</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link<span class="space"> </span>[foo<span class="space"> </span>[bar]]](/uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;link<span class="space"> </span>[foo<span class="space"> </span>[bar]]&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-522">
<div class="examplenum">
<a href="#example-522">Example 522</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link]<span class="space"> </span>bar](/uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[link]<span class="space"> </span>bar](/uri)&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-523">
<div class="examplenum">
<a href="#example-523">Example 523</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link<span class="space"> </span>[bar](/uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[link<span class="space"> </span>&lt;a<span class="space"> </span>href="/uri"&gt;bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-524">
<div class="examplenum">
<a href="#example-524">Example 524</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link<span class="space"> </span>\[bar](/uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;link<span class="space"> </span>[bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The link text may contain inline content:</p>
<div class="example" id="example-525">
<div class="examplenum">
<a href="#example-525">Example 525</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link<span class="space"> </span>*foo<span class="space"> </span>**bar**<span class="space"> </span>`#`*](/uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;link<span class="space"> </span>&lt;em&gt;foo<span class="space"> </span>&lt;strong&gt;bar&lt;/strong&gt;<span class="space"> </span>&lt;code&gt;#&lt;/code&gt;&lt;/em&gt;&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-526">
<div class="examplenum">
<a href="#example-526">Example 526</a>
</div>
<div class="column">
<pre><code class="language-markdown">[![moon](moon.jpg)](/uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;&lt;img<span class="space"> </span>src="moon.jpg"<span class="space"> </span>alt="moon"<span class="space"> </span>/&gt;&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>However, links may not contain other links, at any level of nesting.</p>
<div class="example" id="example-527">
<div class="examplenum">
<a href="#example-527">Example 527</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo<span class="space"> </span>[bar](/uri)](/uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo<span class="space"> </span>&lt;a<span class="space"> </span>href="/uri"&gt;bar&lt;/a&gt;](/uri)&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-528">
<div class="examplenum">
<a href="#example-528">Example 528</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo<span class="space"> </span>*[bar<span class="space"> </span>[baz](/uri)](/uri)*](/uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo<span class="space"> </span>&lt;em&gt;[bar<span class="space"> </span>&lt;a<span class="space"> </span>href="/uri"&gt;baz&lt;/a&gt;](/uri)&lt;/em&gt;](/uri)&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-529">
<div class="examplenum">
<a href="#example-529">Example 529</a>
</div>
<div class="column">
<pre><code class="language-markdown">![[[foo](uri1)](uri2)](uri3)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="uri3"<span class="space"> </span>alt="[foo](uri2)"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>These cases illustrate the precedence of link text grouping over
emphasis grouping:</p>
<div class="example" id="example-530">
<div class="examplenum">
<a href="#example-530">Example 530</a>
</div>
<div class="column">
<pre><code class="language-markdown">*[foo*](/uri)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*&lt;a<span class="space"> </span>href="/uri"&gt;foo*&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-531">
<div class="examplenum">
<a href="#example-531">Example 531</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo<span class="space"> </span>*bar](baz*)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="baz*"&gt;foo<span class="space"> </span>*bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that brackets that <em>aren’t</em> part of links do not take
precedence:</p>
<div class="example" id="example-532">
<div class="examplenum">
<a href="#example-532">Example 532</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span>[bar*<span class="space"> </span>baz]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo<span class="space"> </span>[bar&lt;/em&gt;<span class="space"> </span>baz]&lt;/p&gt;
</code></pre>
</div>
</div>
<p>These cases illustrate the precedence of HTML tags, code spans,
and autolinks over link grouping:</p>
<div class="example" id="example-533">
<div class="examplenum">
<a href="#example-533">Example 533</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo<span class="space"> </span>&lt;bar<span class="space"> </span>attr="](baz)"&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo<span class="space"> </span>&lt;bar<span class="space"> </span>attr="](baz)"&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-534">
<div class="examplenum">
<a href="#example-534">Example 534</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo`](/uri)`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo&lt;code&gt;](/uri)&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-535">
<div class="examplenum">
<a href="#example-535">Example 535</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo&lt;http://example.com/?search=](uri)&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo&lt;a<span class="space"> </span>href="http://example.com/?search=%5D(uri)"&gt;http://example.com/?search=](uri)&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>There are three kinds of <a id="reference-link" href="#reference-link" class="definition">reference link</a>s:
<a href="#full-reference-link">full</a>, <a href="#collapsed-reference-link">collapsed</a>,
and <a href="#shortcut-reference-link">shortcut</a>.</p>
<p>A <a id="full-reference-link" href="#full-reference-link" class="definition">full reference link</a>
consists of a <a href="#link-text">link text</a> immediately followed by a <a href="#link-label">link label</a>
that <a href="#matches">matches</a> a <a href="#link-reference-definition">link reference definition</a> elsewhere in the document.</p>
<p>A <a id="link-label" href="#link-label" class="definition">link label</a>  begins with a left bracket (<code>[</code>) and ends
with the first right bracket (<code>]</code>) that is not backslash-escaped.
Between these brackets there must be at least one <a href="#non-whitespace-character">non-whitespace character</a>.
Unescaped square bracket characters are not allowed inside the
opening and closing square brackets of <a href="#link-label">link labels</a>.  A link
label can have at most 999 characters inside the square
brackets.</p>
<p>One label <a id="matches" href="#matches" class="definition">matches</a>
another just in case their normalized forms are equal.  To normalize a
label, strip off the opening and closing brackets,
perform the <em>Unicode case fold</em>, strip leading and trailing
<a href="#whitespace">whitespace</a> and collapse consecutive internal
<a href="#whitespace">whitespace</a> to a single space.  If there are multiple
matching reference link definitions, the one that comes first in the
document is used.  (It is desirable in such cases to emit a warning.)</p>
<p>The link’s URI and title are provided by the matching <a href="#link-reference-definition">link
reference definition</a>.</p>
<p>Here is a simple example:</p>
<div class="example" id="example-536">
<div class="examplenum">
<a href="#example-536">Example 536</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo][bar]

[bar]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The rules for the <a href="#link-text">link text</a> are the same as with
<a href="#inline-link">inline links</a>.  Thus:</p>
<p>The link text may contain balanced brackets, but not unbalanced ones,
unless they are escaped:</p>
<div class="example" id="example-537">
<div class="examplenum">
<a href="#example-537">Example 537</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link<span class="space"> </span>[foo<span class="space"> </span>[bar]]][ref]

[ref]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;link<span class="space"> </span>[foo<span class="space"> </span>[bar]]&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-538">
<div class="examplenum">
<a href="#example-538">Example 538</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link<span class="space"> </span>\[bar][ref]

[ref]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;link<span class="space"> </span>[bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The link text may contain inline content:</p>
<div class="example" id="example-539">
<div class="examplenum">
<a href="#example-539">Example 539</a>
</div>
<div class="column">
<pre><code class="language-markdown">[link<span class="space"> </span>*foo<span class="space"> </span>**bar**<span class="space"> </span>`#`*][ref]

[ref]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;link<span class="space"> </span>&lt;em&gt;foo<span class="space"> </span>&lt;strong&gt;bar&lt;/strong&gt;<span class="space"> </span>&lt;code&gt;#&lt;/code&gt;&lt;/em&gt;&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-540">
<div class="examplenum">
<a href="#example-540">Example 540</a>
</div>
<div class="column">
<pre><code class="language-markdown">[![moon](moon.jpg)][ref]

[ref]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;&lt;img<span class="space"> </span>src="moon.jpg"<span class="space"> </span>alt="moon"<span class="space"> </span>/&gt;&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>However, links may not contain other links, at any level of nesting.</p>
<div class="example" id="example-541">
<div class="examplenum">
<a href="#example-541">Example 541</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo<span class="space"> </span>[bar](/uri)][ref]

[ref]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo<span class="space"> </span>&lt;a<span class="space"> </span>href="/uri"&gt;bar&lt;/a&gt;]&lt;a<span class="space"> </span>href="/uri"&gt;ref&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-542">
<div class="examplenum">
<a href="#example-542">Example 542</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo<span class="space"> </span>*bar<span class="space"> </span>[baz][ref]*][ref]

[ref]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo<span class="space"> </span>&lt;em&gt;bar<span class="space"> </span>&lt;a<span class="space"> </span>href="/uri"&gt;baz&lt;/a&gt;&lt;/em&gt;]&lt;a<span class="space"> </span>href="/uri"&gt;ref&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>(In the examples above, we have two <a href="#shortcut-reference-link">shortcut reference links</a>
instead of one <a href="#full-reference-link">full reference link</a>.)</p>
<p>The following cases illustrate the precedence of link text grouping over
emphasis grouping:</p>
<div class="example" id="example-543">
<div class="examplenum">
<a href="#example-543">Example 543</a>
</div>
<div class="column">
<pre><code class="language-markdown">*[foo*][ref]

[ref]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*&lt;a<span class="space"> </span>href="/uri"&gt;foo*&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-544">
<div class="examplenum">
<a href="#example-544">Example 544</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo<span class="space"> </span>*bar][ref]*

[ref]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;foo<span class="space"> </span>*bar&lt;/a&gt;*&lt;/p&gt;
</code></pre>
</div>
</div>
<p>These cases illustrate the precedence of HTML tags, code spans,
and autolinks over link grouping:</p>
<div class="example" id="example-545">
<div class="examplenum">
<a href="#example-545">Example 545</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo<span class="space"> </span>&lt;bar<span class="space"> </span>attr="][ref]"&gt;

[ref]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo<span class="space"> </span>&lt;bar<span class="space"> </span>attr="][ref]"&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-546">
<div class="examplenum">
<a href="#example-546">Example 546</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo`][ref]`

[ref]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo&lt;code&gt;][ref]&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-547">
<div class="examplenum">
<a href="#example-547">Example 547</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo&lt;http://example.com/?search=][ref]&gt;

[ref]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo&lt;a<span class="space"> </span>href="http://example.com/?search=%5D%5Bref%5D"&gt;http://example.com/?search=][ref]&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Matching is case-insensitive:</p>
<div class="example" id="example-548">
<div class="examplenum">
<a href="#example-548">Example 548</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo][BaR]

[bar]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Unicode case fold is used:</p>
<div class="example" id="example-549">
<div class="examplenum">
<a href="#example-549">Example 549</a>
</div>
<div class="column">
<pre><code class="language-markdown">[ẞ]

[SS]:<span class="space"> </span>/url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"&gt;ẞ&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Consecutive internal <a href="#whitespace">whitespace</a> is treated as one space for
purposes of determining matching:</p>
<div class="example" id="example-550">
<div class="examplenum">
<a href="#example-550">Example 550</a>
</div>
<div class="column">
<pre><code class="language-markdown">[Foo
<span class="space"> </span><span class="space"> </span>bar]:<span class="space"> </span>/url

[Baz][Foo<span class="space"> </span>bar]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"&gt;Baz&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>No <a href="#whitespace">whitespace</a> is allowed between the <a href="#link-text">link text</a> and the
<a href="#link-label">link label</a>:</p>
<div class="example" id="example-551">
<div class="examplenum">
<a href="#example-551">Example 551</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]<span class="space"> </span>[bar]

[bar]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo]<span class="space"> </span>&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-552">
<div class="examplenum">
<a href="#example-552">Example 552</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]
[bar]

[bar]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo]
&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This is a departure from John Gruber’s original Markdown syntax
description, which explicitly allows whitespace between the link
text and the link label.  It brings reference links in line with
<a href="#inline-link">inline links</a>, which (according to both original Markdown and
this spec) cannot have whitespace after the link text.  More
importantly, it prevents inadvertent capture of consecutive
<a href="#shortcut-reference-link">shortcut reference links</a>. If whitespace is allowed between the
link text and the link label, then in the following we will have
a single reference link, not two shortcut reference links, as
intended:</p>
<pre><code class="language-markdown">[foo]
[bar]

[foo]: /url1
[bar]: /url2
</code></pre>
<p>(Note that <a href="#shortcut-reference-link">shortcut reference links</a> were introduced by Gruber
himself in a beta version of <code>Markdown.pl</code>, but never included
in the official syntax description.  Without shortcut reference
links, it is harmless to allow space between the link text and
link label; but once shortcut references are introduced, it is
too dangerous to allow this, as it frequently leads to
unintended results.)</p>
<p>When there are multiple matching <a href="#link-reference-definitions">link reference definitions</a>,
the first is used:</p>
<div class="example" id="example-553">
<div class="examplenum">
<a href="#example-553">Example 553</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]:<span class="space"> </span>/url1

[foo]:<span class="space"> </span>/url2

[bar][foo]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url1"&gt;bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that matching is performed on normalized strings, not parsed
inline content.  So the following does not match, even though the
labels define equivalent inline content:</p>
<div class="example" id="example-554">
<div class="examplenum">
<a href="#example-554">Example 554</a>
</div>
<div class="column">
<pre><code class="language-markdown">[bar][foo\!]

[foo!]:<span class="space"> </span>/url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[bar][foo!]&lt;/p&gt;
</code></pre>
</div>
</div>
<p><a href="#link-label">Link labels</a> cannot contain brackets, unless they are
backslash-escaped:</p>
<div class="example" id="example-555">
<div class="examplenum">
<a href="#example-555">Example 555</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo][ref[]

[ref[]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo][ref[]&lt;/p&gt;
&lt;p&gt;[ref[]:<span class="space"> </span>/uri&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-556">
<div class="examplenum">
<a href="#example-556">Example 556</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo][ref[bar]]

[ref[bar]]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo][ref[bar]]&lt;/p&gt;
&lt;p&gt;[ref[bar]]:<span class="space"> </span>/uri&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-557">
<div class="examplenum">
<a href="#example-557">Example 557</a>
</div>
<div class="column">
<pre><code class="language-markdown">[[[foo]]]

[[[foo]]]:<span class="space"> </span>/url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[[[foo]]]&lt;/p&gt;
&lt;p&gt;[[[foo]]]:<span class="space"> </span>/url&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-558">
<div class="examplenum">
<a href="#example-558">Example 558</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo][ref\[]

[ref\[]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that in this example <code>]</code> is not backslash-escaped:</p>
<div class="example" id="example-559">
<div class="examplenum">
<a href="#example-559">Example 559</a>
</div>
<div class="column">
<pre><code class="language-markdown">[bar\\]:<span class="space"> </span>/uri

[bar\\]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/uri"&gt;bar\&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A <a href="#link-label">link label</a> must contain at least one <a href="#non-whitespace-character">non-whitespace character</a>:</p>
<div class="example" id="example-560">
<div class="examplenum">
<a href="#example-560">Example 560</a>
</div>
<div class="column">
<pre><code class="language-markdown">[]

[]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[]&lt;/p&gt;
&lt;p&gt;[]:<span class="space"> </span>/uri&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-561">
<div class="examplenum">
<a href="#example-561">Example 561</a>
</div>
<div class="column">
<pre><code class="language-markdown">[
<span class="space"> </span>]

[
<span class="space"> </span>]:<span class="space"> </span>/uri
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[
]&lt;/p&gt;
&lt;p&gt;[
]:<span class="space"> </span>/uri&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A <a id="collapsed-reference-link" href="#collapsed-reference-link" class="definition">collapsed reference link</a>
consists of a <a href="#link-label">link label</a> that <a href="#matches">matches</a> a
<a href="#link-reference-definition">link reference definition</a> elsewhere in the
document, followed by the string <code>[]</code>.
The contents of the first link label are parsed as inlines,
which are used as the link’s text.  The link’s URI and title are
provided by the matching reference link definition.  Thus,
<code>[foo][]</code> is equivalent to <code>[foo][foo]</code>.</p>
<div class="example" id="example-562">
<div class="examplenum">
<a href="#example-562">Example 562</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo][]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-563">
<div class="examplenum">
<a href="#example-563">Example 563</a>
</div>
<div class="column">
<pre><code class="language-markdown">[*foo*<span class="space"> </span>bar][]

[*foo*<span class="space"> </span>bar]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;&lt;em&gt;foo&lt;/em&gt;<span class="space"> </span>bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The link labels are case-insensitive:</p>
<div class="example" id="example-564">
<div class="examplenum">
<a href="#example-564">Example 564</a>
</div>
<div class="column">
<pre><code class="language-markdown">[Foo][]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;Foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>As with full reference links, <a href="#whitespace">whitespace</a> is not
allowed between the two sets of brackets:</p>
<div class="example" id="example-565">
<div class="examplenum">
<a href="#example-565">Example 565</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]<span class="space"> </span>
[]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;foo&lt;/a&gt;
[]&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A <a id="shortcut-reference-link" href="#shortcut-reference-link" class="definition">shortcut reference link</a>
consists of a <a href="#link-label">link label</a> that <a href="#matches">matches</a> a
<a href="#link-reference-definition">link reference definition</a> elsewhere in the
document and is not followed by <code>[]</code> or a link label.
The contents of the first link label are parsed as inlines,
which are used as the link’s text.  The link’s URI and title
are provided by the matching link reference definition.
Thus, <code>[foo]</code> is equivalent to <code>[foo][]</code>.</p>
<div class="example" id="example-566">
<div class="examplenum">
<a href="#example-566">Example 566</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-567">
<div class="examplenum">
<a href="#example-567">Example 567</a>
</div>
<div class="column">
<pre><code class="language-markdown">[*foo*<span class="space"> </span>bar]

[*foo*<span class="space"> </span>bar]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;&lt;em&gt;foo&lt;/em&gt;<span class="space"> </span>bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-568">
<div class="examplenum">
<a href="#example-568">Example 568</a>
</div>
<div class="column">
<pre><code class="language-markdown">[[*foo*<span class="space"> </span>bar]]

[*foo*<span class="space"> </span>bar]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;&lt;em&gt;foo&lt;/em&gt;<span class="space"> </span>bar&lt;/a&gt;]&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-569">
<div class="examplenum">
<a href="#example-569">Example 569</a>
</div>
<div class="column">
<pre><code class="language-markdown">[[bar<span class="space"> </span>[foo]

[foo]:<span class="space"> </span>/url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[[bar<span class="space"> </span>&lt;a<span class="space"> </span>href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The link labels are case-insensitive:</p>
<div class="example" id="example-570">
<div class="examplenum">
<a href="#example-570">Example 570</a>
</div>
<div class="column">
<pre><code class="language-markdown">[Foo]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;Foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A space after the link text should be preserved:</p>
<div class="example" id="example-571">
<div class="examplenum">
<a href="#example-571">Example 571</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]<span class="space"> </span>bar

[foo]:<span class="space"> </span>/url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url"&gt;foo&lt;/a&gt;<span class="space"> </span>bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>If you just want bracketed text, you can backslash-escape the
opening bracket to avoid links:</p>
<div class="example" id="example-572">
<div class="examplenum">
<a href="#example-572">Example 572</a>
</div>
<div class="column">
<pre><code class="language-markdown">\[foo]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo]&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that this is a link, because a link label ends with the first
following closing bracket:</p>
<div class="example" id="example-573">
<div class="examplenum">
<a href="#example-573">Example 573</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo*]:<span class="space"> </span>/url

*[foo*]
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;*&lt;a<span class="space"> </span>href="/url"&gt;foo*&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Full and compact references take precedence over shortcut
references:</p>
<div class="example" id="example-574">
<div class="examplenum">
<a href="#example-574">Example 574</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo][bar]

[foo]:<span class="space"> </span>/url1
[bar]:<span class="space"> </span>/url2
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url2"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-575">
<div class="examplenum">
<a href="#example-575">Example 575</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo][]

[foo]:<span class="space"> </span>/url1
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url1"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Inline links also take precedence:</p>
<div class="example" id="example-576">
<div class="examplenum">
<a href="#example-576">Example 576</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo]()

[foo]:<span class="space"> </span>/url1
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href=""&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-577">
<div class="examplenum">
<a href="#example-577">Example 577</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo](not<span class="space"> </span>a<span class="space"> </span>link)

[foo]:<span class="space"> </span>/url1
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url1"&gt;foo&lt;/a&gt;(not<span class="space"> </span>a<span class="space"> </span>link)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>In the following case <code>[bar][baz]</code> is parsed as a reference,
<code>[foo]</code> as normal text:</p>
<div class="example" id="example-578">
<div class="examplenum">
<a href="#example-578">Example 578</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo][bar][baz]

[baz]:<span class="space"> </span>/url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo]&lt;a<span class="space"> </span>href="/url"&gt;bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Here, though, <code>[foo][bar]</code> is parsed as a reference, since
<code>[bar]</code> is defined:</p>
<div class="example" id="example-579">
<div class="examplenum">
<a href="#example-579">Example 579</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo][bar][baz]

[baz]:<span class="space"> </span>/url1
[bar]:<span class="space"> </span>/url2
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="/url2"&gt;foo&lt;/a&gt;&lt;a<span class="space"> </span>href="/url1"&gt;baz&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Here <code>[foo]</code> is not parsed as a shortcut reference, because it
is followed by a link label (even though <code>[bar]</code> is not defined):</p>
<div class="example" id="example-580">
<div class="examplenum">
<a href="#example-580">Example 580</a>
</div>
<div class="column">
<pre><code class="language-markdown">[foo][bar][baz]

[baz]:<span class="space"> </span>/url1
[foo]:<span class="space"> </span>/url2
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;[foo]&lt;a<span class="space"> </span>href="/url1"&gt;bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<h2 id="images" href="#images" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.7</span>Images
</h2>
<p>Syntax for images is like the syntax for links, with one
difference. Instead of <a href="#link-text">link text</a>, we have an
<a id="image-description" href="#image-description" class="definition">image description</a>.  The rules for this are the
same as for <a href="#link-text">link text</a>, except that (a) an
image description starts with <code>![</code> rather than <code>[</code>, and
(b) an image description may contain links.
An image description has inline elements
as its contents.  When an image is rendered to HTML,
this is standardly used as the image’s <code>alt</code> attribute.</p>
<div class="example" id="example-581">
<div class="examplenum">
<a href="#example-581">Example 581</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo](/url<span class="space"> </span>"title")
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url"<span class="space"> </span>alt="foo"<span class="space"> </span>title="title"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-582">
<div class="examplenum">
<a href="#example-582">Example 582</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo<span class="space"> </span>*bar*]

[foo<span class="space"> </span>*bar*]:<span class="space"> </span>train.jpg<span class="space"> </span>"train<span class="space"> </span>&amp;<span class="space"> </span>tracks"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="train.jpg"<span class="space"> </span>alt="foo<span class="space"> </span>bar"<span class="space"> </span>title="train<span class="space"> </span>&amp;amp;<span class="space"> </span>tracks"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-583">
<div class="examplenum">
<a href="#example-583">Example 583</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo<span class="space"> </span>![bar](/url)](/url2)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url2"<span class="space"> </span>alt="foo<span class="space"> </span>bar"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-584">
<div class="examplenum">
<a href="#example-584">Example 584</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo<span class="space"> </span>[bar](/url)](/url2)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url2"<span class="space"> </span>alt="foo<span class="space"> </span>bar"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Though this spec is concerned with parsing, not rendering, it is
recommended that in rendering to HTML, only the plain string content
of the <a href="#image-description">image description</a> be used.  Note that in
the above example, the alt attribute’s value is <code>foo bar</code>, not <code>foo [bar](/url)</code> or <code>foo &lt;a href="/url"&gt;bar&lt;/a&gt;</code>.  Only the plain string
content is rendered, without formatting.</p>
<div class="example" id="example-585">
<div class="examplenum">
<a href="#example-585">Example 585</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo<span class="space"> </span>*bar*][]

[foo<span class="space"> </span>*bar*]:<span class="space"> </span>train.jpg<span class="space"> </span>"train<span class="space"> </span>&amp;<span class="space"> </span>tracks"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="train.jpg"<span class="space"> </span>alt="foo<span class="space"> </span>bar"<span class="space"> </span>title="train<span class="space"> </span>&amp;amp;<span class="space"> </span>tracks"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-586">
<div class="examplenum">
<a href="#example-586">Example 586</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo<span class="space"> </span>*bar*][foobar]

[FOOBAR]:<span class="space"> </span>train.jpg<span class="space"> </span>"train<span class="space"> </span>&amp;<span class="space"> </span>tracks"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="train.jpg"<span class="space"> </span>alt="foo<span class="space"> </span>bar"<span class="space"> </span>title="train<span class="space"> </span>&amp;amp;<span class="space"> </span>tracks"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-587">
<div class="examplenum">
<a href="#example-587">Example 587</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo](train.jpg)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="train.jpg"<span class="space"> </span>alt="foo"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-588">
<div class="examplenum">
<a href="#example-588">Example 588</a>
</div>
<div class="column">
<pre><code class="language-markdown">My<span class="space"> </span>![foo<span class="space"> </span>bar](/path/to/train.jpg<span class="space"> </span><span class="space"> </span>"title"<span class="space"> </span><span class="space"> </span><span class="space"> </span>)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;My<span class="space"> </span>&lt;img<span class="space"> </span>src="/path/to/train.jpg"<span class="space"> </span>alt="foo<span class="space"> </span>bar"<span class="space"> </span>title="title"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-589">
<div class="examplenum">
<a href="#example-589">Example 589</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo](&lt;url&gt;)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="url"<span class="space"> </span>alt="foo"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-590">
<div class="examplenum">
<a href="#example-590">Example 590</a>
</div>
<div class="column">
<pre><code class="language-markdown">![](/url)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url"<span class="space"> </span>alt=""<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Reference-style:</p>
<div class="example" id="example-591">
<div class="examplenum">
<a href="#example-591">Example 591</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo][bar]

[bar]:<span class="space"> </span>/url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url"<span class="space"> </span>alt="foo"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-592">
<div class="examplenum">
<a href="#example-592">Example 592</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo][bar]

[BAR]:<span class="space"> </span>/url
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url"<span class="space"> </span>alt="foo"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Collapsed:</p>
<div class="example" id="example-593">
<div class="examplenum">
<a href="#example-593">Example 593</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo][]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url"<span class="space"> </span>alt="foo"<span class="space"> </span>title="title"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-594">
<div class="examplenum">
<a href="#example-594">Example 594</a>
</div>
<div class="column">
<pre><code class="language-markdown">![*foo*<span class="space"> </span>bar][]

[*foo*<span class="space"> </span>bar]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url"<span class="space"> </span>alt="foo<span class="space"> </span>bar"<span class="space"> </span>title="title"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The labels are case-insensitive:</p>
<div class="example" id="example-595">
<div class="examplenum">
<a href="#example-595">Example 595</a>
</div>
<div class="column">
<pre><code class="language-markdown">![Foo][]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url"<span class="space"> </span>alt="Foo"<span class="space"> </span>title="title"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>As with reference links, <a href="#whitespace">whitespace</a> is not allowed
between the two sets of brackets:</p>
<div class="example" id="example-596">
<div class="examplenum">
<a href="#example-596">Example 596</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo]<span class="space"> </span>
[]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url"<span class="space"> </span>alt="foo"<span class="space"> </span>title="title"<span class="space"> </span>/&gt;
[]&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Shortcut:</p>
<div class="example" id="example-597">
<div class="examplenum">
<a href="#example-597">Example 597</a>
</div>
<div class="column">
<pre><code class="language-markdown">![foo]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url"<span class="space"> </span>alt="foo"<span class="space"> </span>title="title"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-598">
<div class="examplenum">
<a href="#example-598">Example 598</a>
</div>
<div class="column">
<pre><code class="language-markdown">![*foo*<span class="space"> </span>bar]

[*foo*<span class="space"> </span>bar]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url"<span class="space"> </span>alt="foo<span class="space"> </span>bar"<span class="space"> </span>title="title"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that link labels cannot contain unescaped brackets:</p>
<div class="example" id="example-599">
<div class="examplenum">
<a href="#example-599">Example 599</a>
</div>
<div class="column">
<pre><code class="language-markdown">![[foo]]

[[foo]]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;![[foo]]&lt;/p&gt;
&lt;p&gt;[[foo]]:<span class="space"> </span>/url<span class="space"> </span>&amp;quot;title&amp;quot;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>The link labels are case-insensitive:</p>
<div class="example" id="example-600">
<div class="examplenum">
<a href="#example-600">Example 600</a>
</div>
<div class="column">
<pre><code class="language-markdown">![Foo]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;img<span class="space"> </span>src="/url"<span class="space"> </span>alt="Foo"<span class="space"> </span>title="title"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>If you just want a literal <code>!</code> followed by bracketed text, you can
backslash-escape the opening <code>[</code>:</p>
<div class="example" id="example-601">
<div class="examplenum">
<a href="#example-601">Example 601</a>
</div>
<div class="column">
<pre><code class="language-markdown">!\[foo]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;![foo]&lt;/p&gt;
</code></pre>
</div>
</div>
<p>If you want a link after a literal <code>!</code>, backslash-escape the
<code>!</code>:</p>
<div class="example" id="example-602">
<div class="examplenum">
<a href="#example-602">Example 602</a>
</div>
<div class="column">
<pre><code class="language-markdown">\![foo]

[foo]:<span class="space"> </span>/url<span class="space"> </span>"title"
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;!&lt;a<span class="space"> </span>href="/url"<span class="space"> </span>title="title"&gt;foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<h2 id="autolinks" href="#autolinks" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.8</span>Autolinks
</h2>
<p><a id="autolink" href="#autolink" class="definition">Autolink</a>s are absolute URIs and email addresses inside
<code>&lt;</code> and <code>&gt;</code>. They are parsed as links, with the URL or email address
as the link label.</p>
<p>A <a id="uri-autolink" href="#uri-autolink" class="definition">URI autolink</a> consists of <code>&lt;</code>, followed by an
<a href="#absolute-uri">absolute URI</a> followed by <code>&gt;</code>.  It is parsed as
a link to the URI, with the URI as the link’s label.</p>
<p>An <a id="absolute-uri" href="#absolute-uri" class="definition">absolute URI</a>,
for these purposes, consists of a <a href="#scheme">scheme</a> followed by a colon (<code>:</code>)
followed by zero or more characters other than ASCII
<a href="#whitespace">whitespace</a> and control characters, <code>&lt;</code>, and <code>&gt;</code>.  If
the URI includes these characters, they must be percent-encoded
(e.g. <code>%20</code> for a space).</p>
<p>For purposes of this spec, a <a id="scheme" href="#scheme" class="definition">scheme</a> is any sequence
of 2–32 characters beginning with an ASCII letter and followed
by any combination of ASCII letters, digits, or the symbols plus
(“+”), period (“.”), or hyphen (“-”).</p>
<p>Here are some valid autolinks:</p>
<div class="example" id="example-603">
<div class="examplenum">
<a href="#example-603">Example 603</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;http://foo.bar.baz&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://foo.bar.baz"&gt;http://foo.bar.baz&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-604">
<div class="examplenum">
<a href="#example-604">Example 604</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://foo.bar.baz/test?q=hello&amp;amp;id=22&amp;amp;boolean"&gt;http://foo.bar.baz/test?q=hello&amp;amp;id=22&amp;amp;boolean&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-605">
<div class="examplenum">
<a href="#example-605">Example 605</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;irc://foo.bar:2233/baz&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="irc://foo.bar:2233/baz"&gt;irc://foo.bar:2233/baz&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Uppercase is also fine:</p>
<div class="example" id="example-606">
<div class="examplenum">
<a href="#example-606">Example 606</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;MAILTO:FOO@BAR.BAZ&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="MAILTO:FOO@BAR.BAZ"&gt;MAILTO:FOO@BAR.BAZ&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Note that many strings that count as <a href="#absolute-uri">absolute URIs</a> for
purposes of this spec are not valid URIs, because their
schemes are not registered or because of other problems
with their syntax:</p>
<div class="example" id="example-607">
<div class="examplenum">
<a href="#example-607">Example 607</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a+b+c:d&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="a+b+c:d"&gt;a+b+c:d&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-608">
<div class="examplenum">
<a href="#example-608">Example 608</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;made-up-scheme://foo,bar&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="made-up-scheme://foo,bar"&gt;made-up-scheme://foo,bar&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-609">
<div class="examplenum">
<a href="#example-609">Example 609</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;http://../&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://../"&gt;http://../&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-610">
<div class="examplenum">
<a href="#example-610">Example 610</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;localhost:5001/foo&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="localhost:5001/foo"&gt;localhost:5001/foo&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Spaces are not allowed in autolinks:</p>
<div class="example" id="example-611">
<div class="examplenum">
<a href="#example-611">Example 611</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;http://foo.bar/baz<span class="space"> </span>bim&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;http://foo.bar/baz<span class="space"> </span>bim&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Backslash-escapes do not work inside autolinks:</p>
<div class="example" id="example-612">
<div class="examplenum">
<a href="#example-612">Example 612</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;http://example.com/\[\&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://example.com/%5C%5B%5C"&gt;http://example.com/\[\&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>An <a id="email-autolink" href="#email-autolink" class="definition">email autolink</a>
consists of <code>&lt;</code>, followed by an <a href="#email-address">email address</a>,
followed by <code>&gt;</code>.  The link’s label is the email address,
and the URL is <code>mailto:</code> followed by the email address.</p>
<p>An <a id="email-address" href="#email-address" class="definition">email address</a>,
for these purposes, is anything that matches
the <a href="https://html.spec.whatwg.org/multipage/forms.html#e-mail-state-(type=email)">non-normative regex from the HTML5
spec</a>:</p>
<pre><code>/^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?
(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
</code></pre>
<p>Examples of email autolinks:</p>
<div class="example" id="example-613">
<div class="examplenum">
<a href="#example-613">Example 613</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;foo@bar.example.com&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="mailto:foo@bar.example.com"&gt;foo@bar.example.com&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-614">
<div class="examplenum">
<a href="#example-614">Example 614</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;foo+special@Bar.baz-bar0.com&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="mailto:foo+special@Bar.baz-bar0.com"&gt;foo+special@Bar.baz-bar0.com&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Backslash-escapes do not work inside email autolinks:</p>
<div class="example" id="example-615">
<div class="examplenum">
<a href="#example-615">Example 615</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;foo\+@bar.example.com&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;foo+@bar.example.com&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>These are not autolinks:</p>
<div class="example" id="example-616">
<div class="examplenum">
<a href="#example-616">Example 616</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-617">
<div class="examplenum">
<a href="#example-617">Example 617</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;<span class="space"> </span>http://foo.bar<span class="space"> </span>&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;<span class="space"> </span>http://foo.bar<span class="space"> </span>&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-618">
<div class="examplenum">
<a href="#example-618">Example 618</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;m:abc&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;m:abc&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-619">
<div class="examplenum">
<a href="#example-619">Example 619</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;foo.bar.baz&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;foo.bar.baz&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-620">
<div class="examplenum">
<a href="#example-620">Example 620</a>
</div>
<div class="column">
<pre><code class="language-markdown">http://example.com
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;http://example.com&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-621">
<div class="examplenum">
<a href="#example-621">Example 621</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo@bar.example.com
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo@bar.example.com&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="extension">
<h2 id="autolinks-extension-" href="#autolinks-extension-" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.9</span>Autolinks (extension)
</h2>
<p>GFM enables the <code>autolink</code> extension, where autolinks will be recognised in a
greater number of conditions.</p>
<p><a href="#autolink">Autolink</a>s can also be constructed without requiring the use of <code>&lt;</code> and to <code>&gt;</code>
to delimit them, although they will be recognized under a smaller set of
circumstances.  All such recognized autolinks can only come at the beginning of
a line, after whitespace, or any of the delimiting characters <code>*</code>, <code>_</code>, <code>~</code>,
and <code>(</code>.</p>
<p>An <a id="extended-www-autolink" href="#extended-www-autolink" class="definition">extended www autolink</a> will be recognized
when the text <code>www.</code> is found followed by a <a href="#valid-domain">valid domain</a>.
A <a id="valid-domain" href="#valid-domain" class="definition">valid domain</a> consists of segments
of alphanumeric characters, underscores (<code>_</code>) and hyphens (<code>-</code>)
separated by periods (<code>.</code>).
There must be at least one period,
and no underscores may be present in the last two segments of the domain.</p>
<p>The scheme <code>http</code> will be inserted automatically:</p>
<div class="example" id="example-622">
<div class="examplenum">
<a href="#example-622">Example 622</a>
</div>
<div class="column">
<pre><code class="language-markdown">www.commonmark.org
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://www.commonmark.org"&gt;www.commonmark.org&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>After a <a href="#valid-domain">valid domain</a>, zero or more non-space non-<code>&lt;</code> characters may follow:</p>
<div class="example" id="example-623">
<div class="examplenum">
<a href="#example-623">Example 623</a>
</div>
<div class="column">
<pre><code class="language-markdown">Visit<span class="space"> </span>www.commonmark.org/help<span class="space"> </span>for<span class="space"> </span>more<span class="space"> </span>information.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Visit<span class="space"> </span>&lt;a<span class="space"> </span>href="http://www.commonmark.org/help"&gt;www.commonmark.org/help&lt;/a&gt;<span class="space"> </span>for<span class="space"> </span>more<span class="space"> </span>information.&lt;/p&gt;
</code></pre>
</div>
</div>
<p>We then apply <a id="extended-autolink-path-validation" href="#extended-autolink-path-validation" class="definition">extended autolink path validation</a> as follows:</p>
<p>Trailing punctuation (specifically, <code>?</code>, <code>!</code>, <code>.</code>, <code>,</code>, <code>:</code>, <code>*</code>, <code>_</code>, and <code>~</code>)
will not be considered part of the autolink, though they may be included in the
interior of the link:</p>
<div class="example" id="example-624">
<div class="examplenum">
<a href="#example-624">Example 624</a>
</div>
<div class="column">
<pre><code class="language-markdown">Visit<span class="space"> </span>www.commonmark.org.

Visit<span class="space"> </span>www.commonmark.org/a.b.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Visit<span class="space"> </span>&lt;a<span class="space"> </span>href="http://www.commonmark.org"&gt;www.commonmark.org&lt;/a&gt;.&lt;/p&gt;
&lt;p&gt;Visit<span class="space"> </span>&lt;a<span class="space"> </span>href="http://www.commonmark.org/a.b"&gt;www.commonmark.org/a.b&lt;/a&gt;.&lt;/p&gt;
</code></pre>
</div>
</div>
<p>When an autolink ends in <code>)</code>, we scan the entire autolink for the total number
of parentheses.  If there is a greater number of closing parentheses than
opening ones, we don’t consider the unmatched trailing parentheses part of the
autolink, in order to facilitate including an autolink inside a parenthesis:</p>
<div class="example" id="example-625">
<div class="examplenum">
<a href="#example-625">Example 625</a>
</div>
<div class="column">
<pre><code class="language-markdown">www.google.com/search?q=Markup+(business)

www.google.com/search?q=Markup+(business)))

(www.google.com/search?q=Markup+(business))

(www.google.com/search?q=Markup+(business)
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://www.google.com/search?q=Markup+(business)"&gt;www.google.com/search?q=Markup+(business)&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="http://www.google.com/search?q=Markup+(business)"&gt;www.google.com/search?q=Markup+(business)&lt;/a&gt;))&lt;/p&gt;
&lt;p&gt;(&lt;a<span class="space"> </span>href="http://www.google.com/search?q=Markup+(business)"&gt;www.google.com/search?q=Markup+(business)&lt;/a&gt;)&lt;/p&gt;
&lt;p&gt;(&lt;a<span class="space"> </span>href="http://www.google.com/search?q=Markup+(business)"&gt;www.google.com/search?q=Markup+(business)&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>This check is only done when the link ends in a closing parentheses <code>)</code>, so if
the only parentheses are in the interior of the autolink, no special rules are
applied:</p>
<div class="example" id="example-626">
<div class="examplenum">
<a href="#example-626">Example 626</a>
</div>
<div class="column">
<pre><code class="language-markdown">www.google.com/search?q=(business))+ok
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://www.google.com/search?q=(business))+ok"&gt;www.google.com/search?q=(business))+ok&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>If an autolink ends in a semicolon (<code>;</code>), we check to see if it appears to
resemble an <a href="#entity-references">entity reference</a>; if the preceding text is <code>&amp;</code>
followed by one or more alphanumeric characters.  If so, it is excluded from
the autolink:</p>
<div class="example" id="example-627">
<div class="examplenum">
<a href="#example-627">Example 627</a>
</div>
<div class="column">
<pre><code class="language-markdown">www.google.com/search?q=commonmark&amp;hl=en

www.google.com/search?q=commonmark&amp;hl;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://www.google.com/search?q=commonmark&amp;amp;hl=en"&gt;www.google.com/search?q=commonmark&amp;amp;hl=en&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="http://www.google.com/search?q=commonmark"&gt;www.google.com/search?q=commonmark&lt;/a&gt;&amp;amp;hl;&lt;/p&gt;
</code></pre>
</div>
</div>
<p><code>&lt;</code> immediately ends an autolink.</p>
<div class="example" id="example-628">
<div class="examplenum">
<a href="#example-628">Example 628</a>
</div>
<div class="column">
<pre><code class="language-markdown">www.commonmark.org/he&lt;lp
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://www.commonmark.org/he"&gt;www.commonmark.org/he&lt;/a&gt;&amp;lt;lp&lt;/p&gt;
</code></pre>
</div>
</div>
<p>An <a id="extended-url-autolink" href="#extended-url-autolink" class="definition">extended url autolink</a> will be recognised when one of the schemes
<code>http://</code>, or <code>https://</code>, followed by a <a href="#valid-domain">valid domain</a>, then zero or
more non-space non-<code>&lt;</code> characters according to
<a href="#extended-autolink-path-validation">extended autolink path validation</a>:</p>
<div class="example" id="example-629">
<div class="examplenum">
<a href="#example-629">Example 629</a>
</div>
<div class="column">
<pre><code class="language-markdown">http://commonmark.org

(Visit<span class="space"> </span>https://encrypted.google.com/search?q=Markup+(business))
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="http://commonmark.org"&gt;http://commonmark.org&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;(Visit<span class="space"> </span>&lt;a<span class="space"> </span>href="https://encrypted.google.com/search?q=Markup+(business)"&gt;https://encrypted.google.com/search?q=Markup+(business)&lt;/a&gt;)&lt;/p&gt;
</code></pre>
</div>
</div>
<p>An <a id="extended-email-autolink" href="#extended-email-autolink" class="definition">extended email autolink</a> will be recognised when an email address is
recognised within any text node.  Email addresses are recognised according to
the following rules:</p>
<ul>
<li>One ore more characters which are alphanumeric, or <code>.</code>, <code>-</code>, <code>_</code>, or <code>+</code>.</li>
<li>An <code>@</code> symbol.</li>
<li>One or more characters which are alphanumeric, or <code>-</code> or <code>_</code>,
separated by periods (<code>.</code>).
There must be at least one period.
The last character must not be one of <code>-</code> or <code>_</code>.</li>
</ul>
<p>The scheme <code>mailto:</code> will automatically be added to the generated link:</p>
<div class="example" id="example-630">
<div class="examplenum">
<a href="#example-630">Example 630</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo@bar.baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="mailto:foo@bar.baz"&gt;foo@bar.baz&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p><code>+</code> can occur before the <code>@</code>, but not after.</p>
<div class="example" id="example-631">
<div class="examplenum">
<a href="#example-631">Example 631</a>
</div>
<div class="column">
<pre><code class="language-markdown">hello@mail+xyz.example<span class="space"> </span>isn't<span class="space"> </span>valid,<span class="space"> </span>but<span class="space"> </span>hello+xyz@mail.example<span class="space"> </span>is.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;hello@mail+xyz.example<span class="space"> </span>isn't<span class="space"> </span>valid,<span class="space"> </span>but<span class="space"> </span>&lt;a<span class="space"> </span>href="mailto:hello+xyz@mail.example"&gt;hello+xyz@mail.example&lt;/a&gt;<span class="space"> </span>is.&lt;/p&gt;
</code></pre>
</div>
</div>
<p><code>.</code>, <code>-</code>, and <code>_</code> can occur on both sides of the <code>@</code>, but only <code>.</code> may occur at
the end of the email address, in which case it will not be considered part of
the address:</p>
<div class="example" id="example-632">
<div class="examplenum">
<a href="#example-632">Example 632</a>
</div>
<div class="column">
<pre><code class="language-markdown">a.b-c_d@a.b

a.b-c_d@a.b.

a.b-c_d@a.b-

a.b-c_d@a.b_
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="mailto:a.b-c_d@a.b"&gt;a.b-c_d@a.b&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="mailto:a.b-c_d@a.b"&gt;a.b-c_d@a.b&lt;/a&gt;.&lt;/p&gt;
&lt;p&gt;a.b-c_d@a.b-&lt;/p&gt;
&lt;p&gt;a.b-c_d@a.b_&lt;/p&gt;
</code></pre>
</div>
</div>
<p>An <a id="extended-protocol-autolink" href="#extended-protocol-autolink" class="definition">extended protocol autolink</a> will be recognised when a protocol is
recognised within any text node.  Valid protocols are:</p>
<ul>
<li><code>mailto:</code></li>
<li><code>xmpp:</code></li>
</ul>
<p>The scheme of the protocol will automatically be added to the generated link.
All the rules of email address autolinking apply.</p>
<div class="example" id="example-633">
<div class="examplenum">
<a href="#example-633">Example 633</a>
</div>
<div class="column">
<pre><code class="language-markdown">mailto:foo@bar.baz

mailto:a.b-c_d@a.b

mailto:a.b-c_d@a.b.

mailto:a.b-c_d@a.b/

mailto:a.b-c_d@a.b-

mailto:a.b-c_d@a.b_

xmpp:foo@bar.baz

xmpp:foo@bar.baz.
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="mailto:foo@bar.baz"&gt;mailto:foo@bar.baz&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="mailto:a.b-c_d@a.b"&gt;mailto:a.b-c_d@a.b&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="mailto:a.b-c_d@a.b"&gt;mailto:a.b-c_d@a.b&lt;/a&gt;.&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="mailto:a.b-c_d@a.b"&gt;mailto:a.b-c_d@a.b&lt;/a&gt;/&lt;/p&gt;
&lt;p&gt;mailto:a.b-c_d@a.b-&lt;/p&gt;
&lt;p&gt;mailto:a.b-c_d@a.b_&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="xmpp:foo@bar.baz"&gt;xmpp:foo@bar.baz&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="xmpp:foo@bar.baz"&gt;xmpp:foo@bar.baz&lt;/a&gt;.&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A described in the <a href="https://datatracker.ietf.org/doc/rfc7622/">specification</a>
<code>xmpp</code> offers an optional <code>/</code> followed by a resource. The resource can contain
all alphanumeric characters, as well as <code>@</code> and <code>.</code>.</p>
<div class="example" id="example-634">
<div class="examplenum">
<a href="#example-634">Example 634</a>
</div>
<div class="column">
<pre><code class="language-markdown">xmpp:foo@bar.baz/txt

xmpp:foo@bar.baz/txt@bin

xmpp:foo@bar.baz/txt@bin.com
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="xmpp:foo@bar.baz/txt"&gt;xmpp:foo@bar.baz/txt&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="xmpp:foo@bar.baz/txt@bin"&gt;xmpp:foo@bar.baz/txt@bin&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a<span class="space"> </span>href="xmpp:foo@bar.baz/txt@bin.com"&gt;xmpp:foo@bar.baz/txt@bin.com&lt;/a&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Further <code>/</code> characters are not considered part of the domain:</p>
<div class="example" id="example-635">
<div class="examplenum">
<a href="#example-635">Example 635</a>
</div>
<div class="column">
<pre><code class="language-markdown">xmpp:foo@bar.baz/txt/bin
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="xmpp:foo@bar.baz/txt"&gt;xmpp:foo@bar.baz/txt&lt;/a&gt;/bin&lt;/p&gt;
</code></pre>
</div>
</div>
</div>
<h2 id="raw-html" href="#raw-html" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.10</span>Raw HTML
</h2>
<p>Text between <code>&lt;</code> and <code>&gt;</code> that looks like an HTML tag is parsed as a
raw HTML tag and will be rendered in HTML without escaping.
Tag and attribute names are not limited to current HTML tags,
so custom tags (and even, say, DocBook tags) may be used.</p>
<p>Here is the grammar for tags:</p>
<p>A <a id="tag-name" href="#tag-name" class="definition">tag name</a> consists of an ASCII letter
followed by zero or more ASCII letters, digits, or
hyphens (<code>-</code>).</p>
<p>An <a id="attribute" href="#attribute" class="definition">attribute</a> consists of <a href="#whitespace">whitespace</a>,
an <a href="#attribute-name">attribute name</a>, and an optional
<a href="#attribute-value-specification">attribute value specification</a>.</p>
<p>An <a id="attribute-name" href="#attribute-name" class="definition">attribute name</a>
consists of an ASCII letter, <code>_</code>, or <code>:</code>, followed by zero or more ASCII
letters, digits, <code>_</code>, <code>.</code>, <code>:</code>, or <code>-</code>.  (Note:  This is the XML
specification restricted to ASCII.  HTML5 is laxer.)</p>
<p>An <a id="attribute-value-specification" href="#attribute-value-specification" class="definition">attribute value specification</a>
consists of optional <a href="#whitespace">whitespace</a>,
a <code>=</code> character, optional <a href="#whitespace">whitespace</a>, and an <a href="#attribute-value">attribute
value</a>.</p>
<p>An <a id="attribute-value" href="#attribute-value" class="definition">attribute value</a>
consists of an <a href="#unquoted-attribute-value">unquoted attribute value</a>,
a <a href="#single-quoted-attribute-value">single-quoted attribute value</a>, or a <a href="#double-quoted-attribute-value">double-quoted attribute value</a>.</p>
<p>An <a id="unquoted-attribute-value" href="#unquoted-attribute-value" class="definition">unquoted attribute value</a>
is a nonempty string of characters not
including <a href="#whitespace">whitespace</a>, <code>"</code>, <code>'</code>, <code>=</code>, <code>&lt;</code>, <code>&gt;</code>, or <code>`</code>.</p>
<p>A <a id="single-quoted-attribute-value" href="#single-quoted-attribute-value" class="definition">single-quoted attribute value</a>
consists of <code>'</code>, zero or more
characters not including <code>'</code>, and a final <code>'</code>.</p>
<p>A <a id="double-quoted-attribute-value" href="#double-quoted-attribute-value" class="definition">double-quoted attribute value</a>
consists of <code>"</code>, zero or more
characters not including <code>"</code>, and a final <code>"</code>.</p>
<p>An <a id="open-tag" href="#open-tag" class="definition">open tag</a> consists of a <code>&lt;</code> character, a <a href="#tag-name">tag name</a>,
zero or more <a href="#attribute">attributes</a>, optional <a href="#whitespace">whitespace</a>, an optional <code>/</code>
character, and a <code>&gt;</code> character.</p>
<p>A <a id="closing-tag" href="#closing-tag" class="definition">closing tag</a> consists of the string <code>&lt;/</code>, a
<a href="#tag-name">tag name</a>, optional <a href="#whitespace">whitespace</a>, and the character <code>&gt;</code>.</p>
<p>An <a id="html-comment" href="#html-comment" class="definition">HTML comment</a> consists of <code>&lt;!--</code> + <em>text</em> + <code>--&gt;</code>,
where <em>text</em> does not start with <code>&gt;</code> or <code>-&gt;</code>, does not end with <code>-</code>,
and does not contain <code>--</code>.  (See the
<a href="http://www.w3.org/TR/html5/syntax.html#comments">HTML5 spec</a>.)</p>
<p>A <a id="processing-instruction" href="#processing-instruction" class="definition">processing instruction</a>
consists of the string <code>&lt;?</code>, a string
of characters not including the string <code>?&gt;</code>, and the string
<code>?&gt;</code>.</p>
<p>A <a id="declaration" href="#declaration" class="definition">declaration</a> consists of the
string <code>&lt;!</code>, a name consisting of one or more uppercase ASCII letters,
<a href="#whitespace">whitespace</a>, a string of characters not including the
character <code>&gt;</code>, and the character <code>&gt;</code>.</p>
<p>A <a id="cdata-section" href="#cdata-section" class="definition">CDATA section</a> consists of
the string <code>&lt;![CDATA[</code>, a string of characters not including the string
<code>]]&gt;</code>, and the string <code>]]&gt;</code>.</p>
<p>An <a id="html-tag" href="#html-tag" class="definition">HTML tag</a> consists of an <a href="#open-tag">open tag</a>, a <a href="#closing-tag">closing tag</a>,
an <a href="#html-comment">HTML comment</a>, a <a href="#processing-instruction">processing instruction</a>, a <a href="#declaration">declaration</a>,
or a <a href="#cdata-section">CDATA section</a>.</p>
<p>Here are some simple open tags:</p>
<div class="example" id="example-636">
<div class="examplenum">
<a href="#example-636">Example 636</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a&gt;&lt;bab&gt;&lt;c2c&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a&gt;&lt;bab&gt;&lt;c2c&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Empty elements:</p>
<div class="example" id="example-637">
<div class="examplenum">
<a href="#example-637">Example 637</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a/&gt;&lt;b2/&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a/&gt;&lt;b2/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p><a href="#whitespace">Whitespace</a> is allowed:</p>
<div class="example" id="example-638">
<div class="examplenum">
<a href="#example-638">Example 638</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span><span class="space"> </span>/&gt;&lt;b2
data="foo"<span class="space"> </span>&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span><span class="space"> </span>/&gt;&lt;b2
data="foo"<span class="space"> </span>&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>With attributes:</p>
<div class="example" id="example-639">
<div class="examplenum">
<a href="#example-639">Example 639</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span>foo="bar"<span class="space"> </span>bam<span class="space"> </span>=<span class="space"> </span>'baz<span class="space"> </span>&lt;em&gt;"&lt;/em&gt;'
_boolean<span class="space"> </span>zoop:33=zoop:33<span class="space"> </span>/&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>foo="bar"<span class="space"> </span>bam<span class="space"> </span>=<span class="space"> </span>'baz<span class="space"> </span>&lt;em&gt;"&lt;/em&gt;'
_boolean<span class="space"> </span>zoop:33=zoop:33<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Custom tag names can be used:</p>
<div class="example" id="example-640">
<div class="examplenum">
<a href="#example-640">Example 640</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo<span class="space"> </span>&lt;responsive-image<span class="space"> </span>src="foo.jpg"<span class="space"> </span>/&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo<span class="space"> </span>&lt;responsive-image<span class="space"> </span>src="foo.jpg"<span class="space"> </span>/&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Illegal tag names, not parsed as HTML:</p>
<div class="example" id="example-641">
<div class="examplenum">
<a href="#example-641">Example 641</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;33&gt;<span class="space"> </span>&lt;__&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;33&amp;gt;<span class="space"> </span>&amp;lt;__&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Illegal attribute names:</p>
<div class="example" id="example-642">
<div class="examplenum">
<a href="#example-642">Example 642</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span>h*#ref="hi"&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;a<span class="space"> </span>h*#ref=&amp;quot;hi&amp;quot;&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Illegal attribute values:</p>
<div class="example" id="example-643">
<div class="examplenum">
<a href="#example-643">Example 643</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span>href="hi'&gt;<span class="space"> </span>&lt;a<span class="space"> </span>href=hi'&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;a<span class="space"> </span>href=&amp;quot;hi'&amp;gt;<span class="space"> </span>&amp;lt;a<span class="space"> </span>href=hi'&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Illegal <a href="#whitespace">whitespace</a>:</p>
<div class="example" id="example-644">
<div class="examplenum">
<a href="#example-644">Example 644</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;<span class="space"> </span>a&gt;&lt;
foo&gt;&lt;bar/<span class="space"> </span>&gt;
&lt;foo<span class="space"> </span>bar=baz
bim!bop<span class="space"> </span>/&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;<span class="space"> </span>a&amp;gt;&amp;lt;
foo&amp;gt;&amp;lt;bar/<span class="space"> </span>&amp;gt;
&amp;lt;foo<span class="space"> </span>bar=baz
bim!bop<span class="space"> </span>/&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Missing <a href="#whitespace">whitespace</a>:</p>
<div class="example" id="example-645">
<div class="examplenum">
<a href="#example-645">Example 645</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span>href='bar'title=title&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;a<span class="space"> </span>href='bar'title=title&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Closing tags:</p>
<div class="example" id="example-646">
<div class="examplenum">
<a href="#example-646">Example 646</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;/a&gt;&lt;/foo<span class="space"> </span>&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;/a&gt;&lt;/foo<span class="space"> </span>&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Illegal attributes in closing tag:</p>
<div class="example" id="example-647">
<div class="examplenum">
<a href="#example-647">Example 647</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;/a<span class="space"> </span>href="foo"&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;/a<span class="space"> </span>href=&amp;quot;foo&amp;quot;&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Comments:</p>
<div class="example" id="example-648">
<div class="examplenum">
<a href="#example-648">Example 648</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>&lt;!--<span class="space"> </span>this<span class="space"> </span>is<span class="space"> </span>a
comment<span class="space"> </span>-<span class="space"> </span>with<span class="space"> </span>hyphen<span class="space"> </span>--&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;!--<span class="space"> </span>this<span class="space"> </span>is<span class="space"> </span>a
comment<span class="space"> </span>-<span class="space"> </span>with<span class="space"> </span>hyphen<span class="space"> </span>--&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-649">
<div class="examplenum">
<a href="#example-649">Example 649</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>&lt;!--<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>comment<span class="space"> </span>--<span class="space"> </span>two<span class="space"> </span>hyphens<span class="space"> </span>--&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&amp;lt;!--<span class="space"> </span>not<span class="space"> </span>a<span class="space"> </span>comment<span class="space"> </span>--<span class="space"> </span>two<span class="space"> </span>hyphens<span class="space"> </span>--&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Not comments:</p>
<div class="example" id="example-650">
<div class="examplenum">
<a href="#example-650">Example 650</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>&lt;!--&gt;<span class="space"> </span>foo<span class="space"> </span>--&gt;

foo<span class="space"> </span>&lt;!--<span class="space"> </span>foo---&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&amp;lt;!--&amp;gt;<span class="space"> </span>foo<span class="space"> </span>--&amp;gt;&lt;/p&gt;
&lt;p&gt;foo<span class="space"> </span>&amp;lt;!--<span class="space"> </span>foo---&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Processing instructions:</p>
<div class="example" id="example-651">
<div class="examplenum">
<a href="#example-651">Example 651</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>&lt;?php<span class="space"> </span>echo<span class="space"> </span>$a;<span class="space"> </span>?&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;?php<span class="space"> </span>echo<span class="space"> </span>$a;<span class="space"> </span>?&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Declarations:</p>
<div class="example" id="example-652">
<div class="examplenum">
<a href="#example-652">Example 652</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>&lt;!ELEMENT<span class="space"> </span>br<span class="space"> </span>EMPTY&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;!ELEMENT<span class="space"> </span>br<span class="space"> </span>EMPTY&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>CDATA sections:</p>
<div class="example" id="example-653">
<div class="examplenum">
<a href="#example-653">Example 653</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>&lt;![CDATA[&gt;&amp;&lt;]]&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;![CDATA[&gt;&amp;&lt;]]&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Entity and numeric character references are preserved in HTML
attributes:</p>
<div class="example" id="example-654">
<div class="examplenum">
<a href="#example-654">Example 654</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>&lt;a<span class="space"> </span>href="&amp;ouml;"&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;a<span class="space"> </span>href="&amp;ouml;"&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Backslash escapes do not work in HTML attributes:</p>
<div class="example" id="example-655">
<div class="examplenum">
<a href="#example-655">Example 655</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>&lt;a<span class="space"> </span>href="\*"&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo<span class="space"> </span>&lt;a<span class="space"> </span>href="\*"&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-656">
<div class="examplenum">
<a href="#example-656">Example 656</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span>href="\""&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&amp;lt;a<span class="space"> </span>href=&amp;quot;&amp;quot;&amp;quot;&amp;gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="extension">
<h2 id="disallowed-raw-html-extension-" href="#disallowed-raw-html-extension-" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.11</span>Disallowed Raw HTML (extension)
</h2>
<p>GFM enables the <code>tagfilter</code> extension, where the following HTML tags will be
filtered when rendering HTML output:</p>
<ul>
<li><code>&lt;title&gt;</code></li>
<li><code>&lt;textarea&gt;</code></li>
<li><code>&lt;style&gt;</code></li>
<li><code>&lt;xmp&gt;</code></li>
<li><code>&lt;iframe&gt;</code></li>
<li><code>&lt;noembed&gt;</code></li>
<li><code>&lt;noframes&gt;</code></li>
<li><code>&lt;script&gt;</code></li>
<li><code>&lt;plaintext&gt;</code></li>
</ul>
<p>Filtering is done by replacing the leading <code>&lt;</code> with the entity <code>&amp;lt;</code>.  These
tags are chosen in particular as they change how HTML is interpreted in a way
unique to them (i.e. nested HTML is interpreted differently), and this is
usually undesireable in the context of other rendered Markdown content.</p>
<p>All other HTML tags are left untouched.</p>
<div class="example" id="example-657">
<div class="examplenum">
<a href="#example-657">Example 657</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;strong&gt;<span class="space"> </span>&lt;title&gt;<span class="space"> </span>&lt;style&gt;<span class="space"> </span>&lt;em&gt;

&lt;blockquote&gt;
<span class="space"> </span><span class="space"> </span>&lt;xmp&gt;<span class="space"> </span>is<span class="space"> </span>disallowed.<span class="space"> </span><span class="space"> </span>&lt;XMP&gt;<span class="space"> </span>is<span class="space"> </span>also<span class="space"> </span>disallowed.
&lt;/blockquote&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;strong&gt;<span class="space"> </span>&amp;lt;title&gt;<span class="space"> </span>&amp;lt;style&gt;<span class="space"> </span>&lt;em&gt;&lt;/p&gt;
&lt;blockquote&gt;
<span class="space"> </span><span class="space"> </span>&amp;lt;xmp&gt;<span class="space"> </span>is<span class="space"> </span>disallowed.<span class="space"> </span><span class="space"> </span>&amp;lt;XMP&gt;<span class="space"> </span>is<span class="space"> </span>also<span class="space"> </span>disallowed.
&lt;/blockquote&gt;
</code></pre>
</div>
</div>
</div>
<h2 id="hard-line-breaks" href="#hard-line-breaks" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.12</span>Hard line breaks
</h2>
<p>A line break (not in a code span or HTML tag) that is preceded
by two or more spaces and does not occur at the end of a block
is parsed as a <a id="hard-line-break" href="#hard-line-break" class="definition">hard line break</a> (rendered
in HTML as a <code>&lt;br /&gt;</code> tag):</p>
<div class="example" id="example-658">
<div class="examplenum">
<a href="#example-658">Example 658</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span><span class="space"> </span>
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;br<span class="space"> </span>/&gt;
baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>For a more visible alternative, a backslash before the
<a href="#line-ending">line ending</a> may be used instead of two spaces:</p>
<div class="example" id="example-659">
<div class="examplenum">
<a href="#example-659">Example 659</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo\
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;br<span class="space"> </span>/&gt;
baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>More than two spaces can be used:</p>
<div class="example" id="example-660">
<div class="examplenum">
<a href="#example-660">Example 660</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;br<span class="space"> </span>/&gt;
baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Leading spaces at the beginning of the next line are ignored:</p>
<div class="example" id="example-661">
<div class="examplenum">
<a href="#example-661">Example 661</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span><span class="space"> </span>
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;br<span class="space"> </span>/&gt;
bar&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-662">
<div class="examplenum">
<a href="#example-662">Example 662</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo\
<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>bar
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;br<span class="space"> </span>/&gt;
bar&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Line breaks can occur inside emphasis, links, and other constructs
that allow inline content:</p>
<div class="example" id="example-663">
<div class="examplenum">
<a href="#example-663">Example 663</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo<span class="space"> </span><span class="space"> </span>
bar*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo&lt;br<span class="space"> </span>/&gt;
bar&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-664">
<div class="examplenum">
<a href="#example-664">Example 664</a>
</div>
<div class="column">
<pre><code class="language-markdown">*foo\
bar*
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;em&gt;foo&lt;br<span class="space"> </span>/&gt;
bar&lt;/em&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Line breaks do not occur inside code spans</p>
<div class="example" id="example-665">
<div class="examplenum">
<a href="#example-665">Example 665</a>
</div>
<div class="column">
<pre><code class="language-markdown">`code<span class="space"> </span><span class="space"> </span>
span`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;code<span class="space"> </span><span class="space"> </span><span class="space"> </span>span&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-666">
<div class="examplenum">
<a href="#example-666">Example 666</a>
</div>
<div class="column">
<pre><code class="language-markdown">`code\
span`
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;code&gt;code\<span class="space"> </span>span&lt;/code&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>or HTML tags:</p>
<div class="example" id="example-667">
<div class="examplenum">
<a href="#example-667">Example 667</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span>href="foo<span class="space"> </span><span class="space"> </span>
bar"&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="foo<span class="space"> </span><span class="space"> </span>
bar"&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-668">
<div class="examplenum">
<a href="#example-668">Example 668</a>
</div>
<div class="column">
<pre><code class="language-markdown">&lt;a<span class="space"> </span>href="foo\
bar"&gt;
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;&lt;a<span class="space"> </span>href="foo\
bar"&gt;&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Hard line breaks are for separating inline content within a block.
Neither syntax for hard line breaks works at the end of a paragraph or
other block element:</p>
<div class="example" id="example-669">
<div class="examplenum">
<a href="#example-669">Example 669</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo\
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo\&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-670">
<div class="examplenum">
<a href="#example-670">Example 670</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span><span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-671">
<div class="examplenum">
<a href="#example-671">Example 671</a>
</div>
<div class="column">
<pre><code class="language-markdown">###<span class="space"> </span>foo\
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h3&gt;foo\&lt;/h3&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-672">
<div class="examplenum">
<a href="#example-672">Example 672</a>
</div>
<div class="column">
<pre><code class="language-markdown">###<span class="space"> </span>foo<span class="space"> </span><span class="space"> </span>
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;h3&gt;foo&lt;/h3&gt;
</code></pre>
</div>
</div>
<h2 id="soft-line-breaks" href="#soft-line-breaks" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.13</span>Soft line breaks
</h2>
<p>A regular line break (not in a code span or HTML tag) that is not
preceded by two or more spaces or a backslash is parsed as a
<a id="softbreak" href="#softbreak" class="definition">softbreak</a>.  (A softbreak may be rendered in HTML either as a
<a href="#line-ending">line ending</a> or as a space. The result will be the same in
browsers. In the examples here, a <a href="#line-ending">line ending</a> will be used.)</p>
<div class="example" id="example-673">
<div class="examplenum">
<a href="#example-673">Example 673</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo
baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo
baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Spaces at the end of the line and beginning of the next line are
removed:</p>
<div class="example" id="example-674">
<div class="examplenum">
<a href="#example-674">Example 674</a>
</div>
<div class="column">
<pre><code class="language-markdown">foo<span class="space"> </span>
<span class="space"> </span>baz
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;foo
baz&lt;/p&gt;
</code></pre>
</div>
</div>
<p>A conforming parser may render a soft line break in HTML either as a
line break or as a space.</p>
<p>A renderer may also provide an option to render soft line breaks
as hard line breaks.</p>
<h2 id="textual-content" href="#textual-content" class="definition">
<a href="#TOC" class="toc-link"></a><span class="number">6.14</span>Textual content
</h2>
<p>Any characters not given an interpretation by the above rules will
be parsed as plain textual content.</p>
<div class="example" id="example-675">
<div class="examplenum">
<a href="#example-675">Example 675</a>
</div>
<div class="column">
<pre><code class="language-markdown">hello<span class="space"> </span>$.;'there
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;hello<span class="space"> </span>$.;'there&lt;/p&gt;
</code></pre>
</div>
</div>
<div class="example" id="example-676">
<div class="examplenum">
<a href="#example-676">Example 676</a>
</div>
<div class="column">
<pre><code class="language-markdown">Foo<span class="space"> </span>χρῆν
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Foo<span class="space"> </span>χρῆν&lt;/p&gt;
</code></pre>
</div>
</div>
<p>Internal spaces are preserved verbatim:</p>
<div class="example" id="example-677">
<div class="examplenum">
<a href="#example-677">Example 677</a>
</div>
<div class="column">
<pre><code class="language-markdown">Multiple<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>spaces
</code></pre>
</div>
<div class="column">
<pre><code class="language-html">&lt;p&gt;Multiple<span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span>spaces&lt;/p&gt;
</code></pre>
</div>
</div>
<!-- END TESTS -->
<div class="appendices">
<h1 id="appendix-a-parsing-strategy" href="#appendix-a-parsing-strategy" class="definition">
Appendix: A parsing strategy
</h1>
</div>
<p>In this appendix we describe some features of the parsing strategy
used in the CommonMark reference implementations.</p>
<h2 id="overview" href="#overview" class="definition">
Overview
</h2>
<p>Parsing has two phases:</p>
<ol>
<li>
<p>In the first phase, lines of input are consumed and the block
structure of the document—its division into paragraphs, block quotes,
list items, and so on—is constructed.  Text is assigned to these
blocks but not parsed. Link reference definitions are parsed and a
map of links is constructed.</p>
</li>
<li>
<p>In the second phase, the raw text contents of paragraphs and headings
are parsed into sequences of Markdown inline elements (strings,
code spans, links, emphasis, and so on), using the map of link
references constructed in phase 1.</p>
</li>
</ol>
<p>At each point in processing, the document is represented as a tree of
<strong>blocks</strong>.  The root of the tree is a <code>document</code> block.  The <code>document</code>
may have any number of other blocks as <strong>children</strong>.  These children
may, in turn, have other blocks as children.  The last child of a block
is normally considered <strong>open</strong>, meaning that subsequent lines of input
can alter its contents.  (Blocks that are not open are <strong>closed</strong>.)
Here, for example, is a possible document tree, with the open blocks
marked by arrows:</p>
<pre><code class="language-tree">-&gt; document
  -&gt; block_quote
       paragraph
         "Lorem ipsum dolor\nsit amet."
    -&gt; list (type=bullet tight=true bullet_char=-)
         list_item
           paragraph
             "Qui *quodsi iracundia*"
      -&gt; list_item
        -&gt; paragraph
             "aliquando id"
</code></pre>
<h2 id="phase-1-block-structure" href="#phase-1-block-structure" class="definition">
Phase 1: block structure
</h2>
<p>Each line that is processed has an effect on this tree.  The line is
analyzed and, depending on its contents, the document may be altered
in one or more of the following ways:</p>
<ol>
<li>One or more open blocks may be closed.</li>
<li>One or more new blocks may be created as children of the
last open block.</li>
<li>Text may be added to the last (deepest) open block remaining
on the tree.</li>
</ol>
<p>Once a line has been incorporated into the tree in this way,
it can be discarded, so input can be read in a stream.</p>
<p>For each line, we follow this procedure:</p>
<ol>
<li>
<p>First we iterate through the open blocks, starting with the
root document, and descending through last children down to the last
open block.  Each block imposes a condition that the line must satisfy
if the block is to remain open.  For example, a block quote requires a
<code>&gt;</code> character.  A paragraph requires a non-blank line.
In this phase we may match all or just some of the open
blocks.  But we cannot close unmatched blocks yet, because we may have a
<a href="#lazy-continuation-line">lazy continuation line</a>.</p>
</li>
<li>
<p>Next, after consuming the continuation markers for existing
blocks, we look for new block starts (e.g. <code>&gt;</code> for a block quote).
If we encounter a new block start, we close any blocks unmatched
in step 1 before creating the new block as a child of the last
matched block.</p>
</li>
<li>
<p>Finally, we look at the remainder of the line (after block
markers like <code>&gt;</code>, list markers, and indentation have been consumed).
This is text that can be incorporated into the last open
block (a paragraph, code block, heading, or raw HTML).</p>
</li>
</ol>
<p>Setext headings are formed when we see a line of a paragraph
that is a <a href="#setext-heading-underline">setext heading underline</a>.</p>
<p>Reference link definitions are detected when a paragraph is closed;
the accumulated text lines are parsed to see if they begin with
one or more reference link definitions.  Any remainder becomes a
normal paragraph.</p>
<p>We can see how this works by considering how the tree above is
generated by four lines of Markdown:</p>
<pre><code class="language-markdown">&gt; Lorem ipsum dolor
sit amet.
&gt; - Qui *quodsi iracundia*
&gt; - aliquando id
</code></pre>
<p>At the outset, our document model is just</p>
<pre><code class="language-tree">-&gt; document
</code></pre>
<p>The first line of our text,</p>
<pre><code class="language-markdown">&gt; Lorem ipsum dolor
</code></pre>
<p>causes a <code>block_quote</code> block to be created as a child of our
open <code>document</code> block, and a <code>paragraph</code> block as a child of
the <code>block_quote</code>.  Then the text is added to the last open
block, the <code>paragraph</code>:</p>
<pre><code class="language-tree">-&gt; document
  -&gt; block_quote
    -&gt; paragraph
         "Lorem ipsum dolor"
</code></pre>
<p>The next line,</p>
<pre><code class="language-markdown">sit amet.
</code></pre>
<p>is a “lazy continuation” of the open <code>paragraph</code>, so it gets added
to the paragraph’s text:</p>
<pre><code class="language-tree">-&gt; document
  -&gt; block_quote
    -&gt; paragraph
         "Lorem ipsum dolor\nsit amet."
</code></pre>
<p>The third line,</p>
<pre><code class="language-markdown">&gt; - Qui *quodsi iracundia*
</code></pre>
<p>causes the <code>paragraph</code> block to be closed, and a new <code>list</code> block
opened as a child of the <code>block_quote</code>.  A <code>list_item</code> is also
added as a child of the <code>list</code>, and a <code>paragraph</code> as a child of
the <code>list_item</code>.  The text is then added to the new <code>paragraph</code>:</p>
<pre><code class="language-tree">-&gt; document
  -&gt; block_quote
       paragraph
         "Lorem ipsum dolor\nsit amet."
    -&gt; list (type=bullet tight=true bullet_char=-)
      -&gt; list_item
        -&gt; paragraph
             "Qui *quodsi iracundia*"
</code></pre>
<p>The fourth line,</p>
<pre><code class="language-markdown">&gt; - aliquando id
</code></pre>
<p>causes the <code>list_item</code> (and its child the <code>paragraph</code>) to be closed,
and a new <code>list_item</code> opened up as child of the <code>list</code>.  A <code>paragraph</code>
is added as a child of the new <code>list_item</code>, to contain the text.
We thus obtain the final tree:</p>
<pre><code class="language-tree">-&gt; document
  -&gt; block_quote
       paragraph
         "Lorem ipsum dolor\nsit amet."
    -&gt; list (type=bullet tight=true bullet_char=-)
         list_item
           paragraph
             "Qui *quodsi iracundia*"
      -&gt; list_item
        -&gt; paragraph
             "aliquando id"
</code></pre>
<h2 id="phase-2-inline-structure" href="#phase-2-inline-structure" class="definition">
Phase 2: inline structure
</h2>
<p>Once all of the input has been parsed, all open blocks are closed.</p>
<p>We then “walk the tree,” visiting every node, and parse raw
string contents of paragraphs and headings as inlines.  At this
point we have seen all the link reference definitions, so we can
resolve reference links as we go.</p>
<pre><code class="language-tree">document
  block_quote
    paragraph
      str "Lorem ipsum dolor"
      softbreak
      str "sit amet."
    list (type=bullet tight=true bullet_char=-)
      list_item
        paragraph
          str "Qui "
          emph
            str "quodsi iracundia"
      list_item
        paragraph
          str "aliquando id"
</code></pre>
<p>Notice how the <a href="#line-ending">line ending</a> in the first paragraph has
been parsed as a <code>softbreak</code>, and the asterisks in the first list item
have become an <code>emph</code>.</p>
<h3 id="an-algorithm-for-parsing-nested-emphasis-and-links" href="#an-algorithm-for-parsing-nested-emphasis-and-links" class="definition">
An algorithm for parsing nested emphasis and links
</h3>
<p>By far the trickiest part of inline parsing is handling emphasis,
strong emphasis, links, and images.  This is done using the following
algorithm.</p>
<p>When we’re parsing inlines and we hit either</p>
<ul>
<li>a run of <code>*</code> or <code>_</code> characters, or</li>
<li>a <code>[</code> or <code>![</code></li>
</ul>
<p>we insert a text node with these symbols as its literal content, and we
add a pointer to this text node to the <a id="delimiter-stack" href="#delimiter-stack" class="definition">delimiter stack</a>.</p>
<p>The <a href="#delimiter-stack">delimiter stack</a> is a doubly linked list.  Each
element contains a pointer to a text node, plus information about</p>
<ul>
<li>the type of delimiter (<code>[</code>, <code>![</code>, <code>*</code>, <code>_</code>)</li>
<li>the number of delimiters,</li>
<li>whether the delimiter is “active” (all are active to start), and</li>
<li>whether the delimiter is a potential opener, a potential closer,
or both (which depends on what sort of characters precede
and follow the delimiters).</li>
</ul>
<p>When we hit a <code>]</code> character, we call the <em>look for link or image</em>
procedure (see below).</p>
<p>When we hit the end of the input, we call the <em>process emphasis</em>
procedure (see below), with <code>stack_bottom</code> = NULL.</p>
<h4 id="look-for-link-or-image" href="#look-for-link-or-image" class="definition">
<em>look for link or image</em>
</h4>
<p>Starting at the top of the delimiter stack, we look backwards
through the stack for an opening <code>[</code> or <code>![</code> delimiter.</p>
<ul>
<li>
<p>If we don’t find one, we return a literal text node <code>]</code>.</p>
</li>
<li>
<p>If we do find one, but it’s not <em>active</em>, we remove the inactive
delimiter from the stack, and return a literal text node <code>]</code>.</p>
</li>
<li>
<p>If we find one and it’s active, then we parse ahead to see if
we have an inline link/image, reference link/image, compact reference
link/image, or shortcut reference link/image.</p>
<ul>
<li>
<p>If we don’t, then we remove the opening delimiter from the
delimiter stack and return a literal text node <code>]</code>.</p>
</li>
<li>
<p>If we do, then</p>
<ul>
<li>
<p>We return a link or image node whose children are the inlines
after the text node pointed to by the opening delimiter.</p>
</li>
<li>
<p>We run <em>process emphasis</em> on these inlines, with the <code>[</code> opener
as <code>stack_bottom</code>.</p>
</li>
<li>
<p>We remove the opening delimiter.</p>
</li>
<li>
<p>If we have a link (and not an image), we also set all
<code>[</code> delimiters before the opening delimiter to <em>inactive</em>.  (This
will prevent us from getting links within links.)</p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="process-emphasis" href="#process-emphasis" class="definition">
<em>process emphasis</em>
</h4>
<p>Parameter <code>stack_bottom</code> sets a lower bound to how far we
descend in the <a href="#delimiter-stack">delimiter stack</a>.  If it is NULL, we can
go all the way to the bottom.  Otherwise, we stop before
visiting <code>stack_bottom</code>.</p>
<p>Let <code>current_position</code> point to the element on the <a href="#delimiter-stack">delimiter stack</a>
just above <code>stack_bottom</code> (or the first element if <code>stack_bottom</code>
is NULL).</p>
<p>We keep track of the <code>openers_bottom</code> for each delimiter
type (<code>*</code>, <code>_</code>) and each length of the closing delimiter run
(modulo 3).  Initialize this to <code>stack_bottom</code>.</p>
<p>Then we repeat the following until we run out of potential
closers:</p>
<ul>
<li>
<p>Move <code>current_position</code> forward in the delimiter stack (if needed)
until we find the first potential closer with delimiter <code>*</code> or <code>_</code>.
(This will be the potential closer closest
to the beginning of the input – the first one in parse order.)</p>
</li>
<li>
<p>Now, look back in the stack (staying above <code>stack_bottom</code> and
the <code>openers_bottom</code> for this delimiter type) for the
first matching potential opener (“matching” means same delimiter).</p>
</li>
<li>
<p>If one is found:</p>
<ul>
<li>
<p>Figure out whether we have emphasis or strong emphasis:
if both closer and opener spans have length &gt;= 2, we have
strong, otherwise regular.</p>
</li>
<li>
<p>Insert an emph or strong emph node accordingly, after
the text node corresponding to the opener.</p>
</li>
<li>
<p>Remove any delimiters between the opener and closer from
the delimiter stack.</p>
</li>
<li>
<p>Remove 1 (for regular emph) or 2 (for strong emph) delimiters
from the opening and closing text nodes.  If they become empty
as a result, remove them and remove the corresponding element
of the delimiter stack.  If the closing node is removed, reset
<code>current_position</code> to the next element in the stack.</p>
</li>
</ul>
</li>
<li>
<p>If none is found:</p>
<ul>
<li>
<p>Set <code>openers_bottom</code> to the element before <code>current_position</code>.
(We know that there are no openers for this kind of closer up to and
including this point, so this puts a lower bound on future searches.)</p>
</li>
<li>
<p>If the closer at <code>current_position</code> is not a potential opener,
remove it from the delimiter stack (since we know it can’t
be a closer either).</p>
</li>
<li>
<p>Advance <code>current_position</code> to the next element in the stack.</p>
</li>
</ul>
</li>
</ul>
<p>After we’re done, we remove all delimiters above <code>stack_bottom</code> from the
delimiter stack.</p>




</body><div id="mdt-iov"></div><div id="mdt-ihl"></div><div id="mdt-itip"></div><div id="mdt-pick-cursor"><div class="mdt-pick-ring"></div><div class="mdt-pick-dot"></div><div class="mdt-pick-cross-h"></div><div class="mdt-pick-cross-v"></div></div><button id="mdt-fab" title="MobiDevTools" style="display: flex;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path></svg></button><div id="mdt-root" class="open"><div id="mdt-handle"></div><div id="mdt-topbar"><button class="mdt-tab" data-tab="elements"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 0-2-2z"></path><path d="M9 22V12h6v10"></path></svg> Elements</button><button class="mdt-tab" data-tab="console"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17L10 11 4 5"></path><path d="M12 19H20"></path></svg> Console<span class="mdt-badge" style="display: none;"></span></button><button class="mdt-tab on" data-tab="sources"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path><path d="M14 3v5h5"></path></svg> Sources</button><button class="mdt-tab" data-tab="network"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="21" r="1"></circle></svg> Network<span class="mdt-badge" style="display: none;"></span></button><button class="mdt-tab" data-tab="perf"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg> Performance</button><button class="mdt-tab" data-tab="storage"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><path d="M6 6h.01M6 18h.01"></path></svg> Application</button><button class="mdt-tab" data-tab="ua"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"></rect><path d="M12 18h.01"></path></svg> Device</button><button class="mdt-tab" data-tab="guide" style="margin-left: auto; color: var(--org);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> Guide</button><button id="mdt-closebtn">✕</button></div><div id="mdt-panels"><div class="mdt-panel" id="p-elements"><div id="mdt-dom-outer"><div class="mdt-toolbar"><input class="mdt-tbinput" type="text" placeholder="CSS selector or search…"><button class="mdt-tbtn mdt-pick-btn" title="Select element in page to inspect (⌘)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l6 18 3-7 7-3z"></path></svg></button><button class="mdt-tbtn" title="Refresh DOM"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></button></div><div id="mdt-dom-split"><div id="mdt-dom-tree"></div><div id="mdt-dom-side"><div id="mdt-styles-tabs"><button class="mdt-stab on" data-st="styles">Styles</button><button class="mdt-stab" data-st="computed">Computed</button><button class="mdt-stab" data-st="layout">Layout</button><button class="mdt-stab" data-st="listeners">Event Listeners</button></div><div id="mdt-styles-filter"><input placeholder="Filter"><button class="mdt-sf-btn" title="Toggle :hover state">:hov</button><button class="mdt-sf-btn" title="Toggle class editor">.cls</button></div><div id="mdt-styles-body"></div><div id="mdt-computed-body" style="display: none;"></div><div id="mdt-listeners-body" style="flex: 1 1 0%; overflow-y: auto; display: none; scrollbar-width: thin;"></div></div></div><div id="mdt-dom-breadcrumb"></div></div></div><div class="mdt-panel" id="p-console"><div id="mdt-con-outer"><div id="mdt-con-settings"><label class="mdt-con-ck"><input type="checkbox"> Hide network</label><label class="mdt-con-ck"><input type="checkbox"> Log XMLHttpRequests</label><label class="mdt-con-ck"><input type="checkbox"> Preserve log</label><label class="mdt-con-ck"><input type="checkbox"> Eager evaluation</label><label class="mdt-con-ck"><input type="checkbox"> Selected context only</label><label class="mdt-con-ck"><input type="checkbox"> Autocomplete from history</label><label class="mdt-con-ck"><input type="checkbox"> Group similar messages</label><label class="mdt-con-ck"><input type="checkbox"> Treat eval as user action</label><label class="mdt-con-ck"><input type="checkbox"> Show CORS errors</label><label class="mdt-con-ck"><input type="checkbox"> Show assistant</label></div><div id="mdt-con-toolbar"><button class="mdt-con-tbtn" title="Clear console (Ctrl+L)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button><button class="mdt-con-tbtn" title="Pause log"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h4v16H6z"></path><path d="M14 4h4v16h-4z"></path></svg></button><div class="mdt-con-sep"></div><input id="mdt-con-filter" type="text" placeholder="Filter" autocorrect="off" autocapitalize="off" spellcheck="false"><select id="mdt-con-levels" title="Log levels"><option value="all">Default levels</option><option value="verbose">Verbose</option><option value="info">Info</option><option value="warn">Warnings</option><option value="error">Errors</option></select><div class="mdt-con-sep"></div><button class="mdt-con-tbtn" title="Console settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></button><button class="mdt-con-tbtn" title="Export log"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg></button></div><div id="mdt-logwrap"><div class="mdt-logentry info"><span class="mdt-le-ic" style="color: var(--info);">ℹ</span><div style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column;"><div class="mdt-le-msg">MobiDevTools v3.7 — GitHub Flavored Markdown Spec</div></div></div><div class="mdt-logentry info"><span class="mdt-le-ic" style="color: var(--info);">ℹ</span><div style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column;"><div class="mdt-le-msg">↳ https://github.github.com/gfm/#introduction</div></div></div><div class="mdt-logentry info"><span class="mdt-le-ic" style="color: var(--info);">ℹ</span><div style="flex: 1 1 0%; min-width: 0px; display: flex; flex-direction: column;"><div class="mdt-le-msg">🦊 Firefox Mobile detected — touch-optimized UI active</div></div></div></div><div id="mdt-replwrap"><div id="mdt-ac"></div><div id="mdt-replpfx">&gt;</div><textarea id="mdt-repl" rows="1" placeholder="" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea><button id="mdt-replrun">Run</button></div></div></div><div class="mdt-panel on" id="p-sources"><div id="mdt-src-outer"><div id="mdt-src-subtabs"><button class="mdt-src-stab on">Page</button><button class="mdt-src-stab">Snippets</button><button class="mdt-src-stab">Workspace</button><button id="mdt-src-stab-more">»</button></div><div id="mdt-src-mobile-bar"><button class="mdt-src-mob-btn">📁 Files</button><button class="mdt-src-mob-btn">📝 Snippets</button><button class="mdt-src-mob-btn">🐛 Debugger</button><button class="mdt-src-mob-btn">{ } Beautify</button></div><div id="mdt-src-split"><div id="mdt-src-nav" class="collapsed"><div class="mdt-tree-node" style="padding-left: 4px;"><div class="mdt-tree-arrow open">▶</div><div class="mdt-tree-icon" style="display: none;">▼</div><div class="mdt-tree-label">top</div></div><div class="mdt-tree-children open"><div class="mdt-tree-node" style="padding-left: 18px;"><div class="mdt-tree-arrow open">▶</div><div class="mdt-tree-icon" style="font-size: 11px;">☁</div><div class="mdt-tree-label">github.github.com</div></div><div class="mdt-tree-children open"><div class="mdt-tree-node" style="padding-left: 46px;"><div class="mdt-tree-icon" style="font-size: 11px;">🌐</div><div class="mdt-tree-label" title="https://github.github.com/gfm/#introduction">gfm</div></div></div></div></div><div id="mdt-src-editor-wrap"><div id="mdt-src-filetabs"><div class="mdt-filetab active"><div class="mdt-filetab-icon">🌐</div><div class="mdt-filetab-name" title="https://github.github.com/gfm/#introduction">gfm</div><div class="mdt-filetab-close">✕</div></div></div><div id="mdt-src-editor"><div id="mdt-src-code" style=""><div id="mdt-src-code-empty"><div><div style="font-size: 28px; margin-bottom: 12px;">📄</div><div style="color: var(--wht); margin-bottom: 6px;">Select a file to view its source</div><div style="font-size: 12px;">Scripts and stylesheets from this page appear in the file tree</div></div></div></div></div><div id="mdt-src-statusbar"><div class="sb-left"><button id="mdt-src-prettybtn">{ }</button></div><div class="sb-right"><span style="opacity: 0.7;">▶ Ctrl+Enter</span><span>Coverage: n/a</span></div></div></div><div id="mdt-src-dbg" class="collapsed"><div id="mdt-dbg-controls"><button class="mdt-dbg-ctrl" title="Pause/Resume"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h4v16H6z"></path><path d="M14 4h4v16h-4z"></path></svg></button><button class="mdt-dbg-ctrl" title="Step over"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M15 17l5-5-5-5"></path></svg></button><button class="mdt-dbg-ctrl" title="Step into"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"></path><path d="M7 10l5-5 5 5"></path></svg></button><button class="mdt-dbg-ctrl" title="Step out"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"></path><path d="M7 14l5 5 5-5"></path></svg></button><button class="mdt-dbg-ctrl" title="Deactivate breakpoints"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle></svg></button></div><div id="mdt-dbg-status">Not paused</div><div class="mdt-dbg-sec"><div class="mdt-dbg-sec-hdr"><div class="mdt-dbg-arrow open">▶</div><div class="mdt-dbg-sec-title">Watch</div></div><div class="mdt-dbg-sec-body open"><div class="mdt-dbg-watch-add"><span style="font-size: 14px; color: var(--acc); line-height: 1;">+</span><span> Add watch expression</span></div></div></div><div class="mdt-dbg-sec"><div class="mdt-dbg-sec-hdr"><div class="mdt-dbg-arrow open">▶</div><div class="mdt-dbg-sec-title">Breakpoints</div></div><div class="mdt-dbg-sec-body open"><div class="mdt-dbg-empty">No breakpoints</div></div></div><div class="mdt-dbg-sec"><div class="mdt-dbg-sec-hdr"><div class="mdt-dbg-arrow open">▶</div><div class="mdt-dbg-sec-title">Scope</div></div><div class="mdt-dbg-sec-body open"><div class="mdt-dbg-empty">Not paused</div></div></div><div class="mdt-dbg-sec"><div class="mdt-dbg-sec-hdr"><div class="mdt-dbg-arrow open">▶</div><div class="mdt-dbg-sec-title">Call Stack</div></div><div class="mdt-dbg-sec-body open"><div class="mdt-dbg-empty">Not paused</div></div></div><div class="mdt-dbg-sec"><div class="mdt-dbg-sec-hdr"><div class="mdt-dbg-arrow open">▶</div><div class="mdt-dbg-sec-title">XHR/fetch Breakpoints</div></div><div class="mdt-dbg-sec-body open"><div class="mdt-dbg-watch-add"><span style="font-size: 14px; color: var(--acc);">+</span><span> Add XHR breakpoint</span></div></div></div><div class="mdt-dbg-sec"><div class="mdt-dbg-sec-hdr"><div class="mdt-dbg-arrow open">▶</div><div class="mdt-dbg-sec-title">DOM Breakpoints</div></div><div class="mdt-dbg-sec-body open"><div class="mdt-dbg-empty">No breakpoints</div></div></div><div class="mdt-dbg-sec"><div class="mdt-dbg-sec-hdr"><div class="mdt-dbg-arrow open">▶</div><div class="mdt-dbg-sec-title">Global Listeners</div></div><div class="mdt-dbg-sec-body open"><div class="mdt-dbg-empty">—</div></div></div><div class="mdt-dbg-sec"><div class="mdt-dbg-sec-hdr"><div class="mdt-dbg-arrow open">▶</div><div class="mdt-dbg-sec-title">Event Listener Breakpoints</div></div><div class="mdt-dbg-sec-body open"><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Animation</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Canvas</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Clipboard</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Control</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">DOM Mutation</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Device</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Drag</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Geolocation</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Keyboard</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Load</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Media</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Mouse</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Pointer</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Script</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Storage</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Timer</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Touch</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">WebGL</div></div><div class="mdt-dbg-bp-item"><div class="mdt-dbg-bp-cb"></div><div class="mdt-dbg-bp-label">Worker</div></div></div></div><div class="mdt-dbg-sec"><div class="mdt-dbg-sec-hdr"><div class="mdt-dbg-arrow open">▶</div><div class="mdt-dbg-sec-title">CSP Violation Breakpoints</div></div><div class="mdt-dbg-sec-body open"><div class="mdt-dbg-empty">No CSP violations tracked</div></div></div></div></div></div></div><div class="mdt-panel" id="p-network"><div class="mdt-toolbar"><input class="mdt-tbinput" type="text" placeholder="Filter"><button class="mdt-chip on" data-t="all">All</button><button class="mdt-chip" data-t="xhr">XHR</button><button class="mdt-chip" data-t="fetch">Fetch</button><button class="mdt-chip" data-t="script">JS</button><button class="mdt-chip" data-t="css">CSS</button><button class="mdt-chip" data-t="img">Img</button><button class="mdt-chip" data-t="doc">Doc</button><button class="mdt-chip" data-t="other">Other</button><button class="mdt-tbtn" title="Clear"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button><button class="mdt-tbtn" title="Export HAR"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg></button></div><div class="mdt-net-hdr"><span></span><span>Method</span><span>Status</span><span>Name</span><span>Type</span><span>Size</span><span>Time</span></div><div id="mdt-net-list"></div><div id="mdt-net-detail"><div id="mdt-net-detail-tabs"><button class="mdt-ndt on" data-t="headers">Headers</button><button class="mdt-ndt" data-t="payload">Payload</button><button class="mdt-ndt" data-t="response">Response</button><button class="mdt-ndt" data-t="timing">Timing</button></div><div id="mdt-net-detail-body"></div></div></div><div class="mdt-panel" id="p-perf"><div id="mdt-perf-scroll"></div></div><div class="mdt-panel" id="p-storage"><div id="mdt-stor-scroll" style="display: none;"></div><div id="mdt-app-outer"><div id="mdt-app-mob-toggle"><span>☰</span><span> Storage</span></div><div id="mdt-app-nav"></div><div id="mdt-app-detail"><div id="mdt-app-toolbar"><input id="mdt-app-filter" placeholder="Filter"><button class="mdt-app-tbtn" title="Refresh">↻</button><button class="mdt-app-tbtn danger" title="Clear selected">🗑 Clear</button></div><div id="mdt-app-table-wrap"></div><div id="mdt-app-preview" class="hidden"></div></div></div></div><div class="mdt-panel" id="p-ua"><div id="mdt-ua-scroll"></div></div><div class="mdt-panel" id="p-guide"><div id="mdt-guide-scroll"></div></div></div><div id="mdt-assistant" title="Tap for a tip" class="idle"><svg viewBox="0 0 44 52"><path class="body" d="M 22 8 C 11 8 6 16 6 26 C 6 36 11 46 22 46 C 33 46 38 36 38 26 C 38 16 33 8 22 8 Z"></path><line class="antenna" x1="22" y1="8" x2="22" y2="2"></line><circle class="antenna-dot" cx="22" cy="2" r="2"></circle><circle class="eye-w" cx="16" cy="24" r="3.5"></circle><circle class="eye-p" cx="17" cy="24.5" r="1.5"></circle><circle class="eye-w" cx="28" cy="24" r="3.5"></circle><circle class="eye-p" cx="29" cy="24.5" r="1.5"></circle><path class="smile" d="M 15 33 Q 22 39 29 33"></path></svg></div><div id="mdt-assistant-bubble" class="shown"><div class="name">MobiDevTools assistant</div><div>Hi! I'm your assistant. You can hide me anytime with the button in the top-right. Happy debugging!</div><div class="row"><button class="danger">Don't show again</button><button>OK</button></div></div></div></html>