(function(e){function n(n){for(var r,u,a=n[0],i=n[1],f=n[2],d=0,s=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(s.length)s.shift()();return c.push.apply(c,f||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},u={app:0},o={app:0},c=[];function a(e){return i.p+"js/"+({"Home-vue":"Home-vue","LuckySpin-vue":"LuckySpin-vue"}[e]||e)+"."+{"Home-vue":"7aa5f851","LuckySpin-vue":"795e7b42","chunk-bbcad3cc":"05f1527e","chunk-0634be10":"7def6cae","chunk-77d35335":"55f3d15a","chunk-c916e79a":"5564515f"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-bbcad3cc":1,"chunk-0634be10":1,"chunk-77d35335":1,"chunk-c916e79a":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({"Home-vue":"Home-vue","LuckySpin-vue":"LuckySpin-vue"}[e]||e)+"."+{"Home-vue":"31d6cfe0","LuckySpin-vue":"31d6cfe0","chunk-bbcad3cc":"1988c863","chunk-0634be10":"748eaaf6","chunk-77d35335":"c70d8bcb","chunk-c916e79a":"0cc93d35"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var f=c[a],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===o))return n()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){f=s[a],d=f.getAttribute("data-href");if(d===r||d===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete u[e],l.parentNode.removeChild(l),t(c)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){u[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(e);var s=new Error;f=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",s.name="ChunkLoadError",s.type=r,s.request=u,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=n,f=f.slice();for(var s=0;s<f.length;s++)n(f[s]);var l=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0d68":function(e,n,t){},"1a5d":function(e,n,t){var r={"./Home.vue":["bb51","Home-vue"],"./LuckySpin.vue":["339a","LuckySpin-vue"]};function u(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],u=n[0];return t.e(n[1]).then((function(){return t(u)}))}u.keys=function(){return Object.keys(r)},u.id="1a5d",e.exports=u},"1fce":function(e,n,t){"use strict";var r=t("0d68"),u=t.n(r);u.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("VWSHeader"),t("main",[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)],1)},o=[],c=(t("d3b7"),{components:{VWSHeader:function(){return t.e("chunk-bbcad3cc").then(t.bind(null,"0418"))}}}),a=c,i=(t("1fce"),t("2877")),f=Object(i["a"])(a,u,o,!1,null,"259b1032",null),d=f.exports,s=t("8c4f");r["default"].use(s["a"]);var l=function(e){return function(){return t("1a5d")("./".concat(e,".vue"))}},p=[{path:"/",name:"home",component:l("Home")},{path:"/lucky-spin",name:"lucky-spin",component:l("LuckySpin")}],h=new s["a"]({mode:"history",base:"/",routes:p}),v=h,m=t("2f62");r["default"].use(m["a"]);var b=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),y=t("5f5b"),k=(t("f9e3"),t("2dd8"),t("c1c3"),t("1dce")),g=t.n(k);r["default"].config.productionTip=!1,r["default"].use(y["a"]),r["default"].use(g.a),new r["default"]({router:v,store:b,render:function(e){return e(d)}}).$mount("#app")},c1c3:function(e,n,t){}});
//# sourceMappingURL=app.6ea69225.js.map