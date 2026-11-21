/*__ap_globals_fallback__*/(function(){var g=typeof globalThis!=="undefined"?globalThis:(typeof self!=="undefined"?self:(typeof window!=="undefined"?window:null));if(!g)return;var loc=g.location||{href:"",hostname:"",origin:""};function def(n,v){if(n in g)return;try{Object.defineProperty(g,n,{configurable:true,enumerable:false,value:v,writable:true});}catch(_){try{g[n]=v;}catch(_){}}}def("__ap$loc",loc);def("__ap$locOf",function(o){try{var v=o&&o.__ap$loc;if(!v&&o&&o.nodeType===9&&o.defaultView)v=o.defaultView.__ap$loc;if(v)return v;}catch(_){}return o?o.location:undefined;});def("__ap$pm",function(t){return t==null?void 0:t.postMessage.apply(t,Array.prototype.slice.call(arguments,1));});def("__ap$get",function(o,k){return o[k];});def("__ap$dw",function(o){return o;});def("__ap$call",function(o,k){return o[k].apply(o,Array.prototype.slice.call(arguments,2));});def("__ap$mo",void 0);def("__ap$mf",function(o,k){g.__ap$mo=o;return o[k];});def("__ap$doc$URL",loc.href||"");def("__ap$doc$domain",loc.hostname||"");def("__ap$doc$referrer","");def("__ap$importMetaUrl",loc.href||"");def("__ap$rewriteJs",function(s){return s;});def("__ap$eval",function(s){return (0,eval)(s);});def("__ap$Function",typeof Function!=="undefined"?Function:function(){});def("__ap$import",function(spec){return typeof g["import"]==="function"?g["import"](spec):Promise.reject(new Error("no import"));});def("__ap$win",g);def("__ap$top",g.top||g);def("__ap$parent",g.parent||g);def("__ap$self",g);def("__ap$frames",g.frames||g);def("__ap$doc",typeof g.document!=="undefined"?g.document:{URL:loc.href,domain:loc.hostname,referrer:""});var __ap$b64=function(s){try{return btoa(unescape(encodeURIComponent(s))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");}catch(_){return "";}};var __ap$abs=function(u){if(!u||typeof u!=="string")return null;if(u.indexOf("http://")!==0&&u.indexOf("https://")!==0)return null;var boot=g.__ap$bootstrap;if(!boot||!boot.proxyOrigin||!boot.sid)return null;try{var uu=new URL(u);var pu=new URL(boot.proxyOrigin);if(uu.host===pu.host)return null;var b64=__ap$b64(uu.origin);if(!b64)return null;var sep=uu.search?"&":"?";return boot.proxyOrigin+"/_o/"+b64+uu.pathname+uu.search+sep+"sid="+encodeURIComponent(boot.sid);}catch(_){return null;}};if(typeof g.fetch==="function"&&!g.__ap$_fetchAbsPatched){g.__ap$_fetchAbsPatched=true;var _oFetch=g.fetch;g.fetch=({fetch(input,init){try{var u=typeof input==="string"?input:(input&&typeof input.url==="string"?input.url:null);var newAbs=null;if(u&&u.charAt(0)==="/"&&(u.indexOf("/_o/")===0||u.indexOf("/r/")===0||u.indexOf("/rt/")===0)){var o=g.location&&g.location.origin;if(o&&o!=="null")newAbs=o+u;}else{newAbs=__ap$abs(u);}if(newAbs){if(typeof input==="string"){input=newAbs;}else if(typeof Request==="function"){try{input=new Request(newAbs,input);}catch(_){}}}}catch(_){}return _oFetch.call(this,input,init);}}).fetch;if(typeof g.__ap$markNative==="function")g.__ap$markNative(g.fetch,"fetch");}if(typeof g.XMLHttpRequest==="function"&&g.XMLHttpRequest.prototype&&!g.__ap$_xhrAbsPatched){g.__ap$_xhrAbsPatched=true;var _oOpen=g.XMLHttpRequest.prototype.open;g.XMLHttpRequest.prototype.open=({open(m,u){try{var newAbs=null;if(typeof u==="string"&&u.charAt(0)==="/"&&(u.indexOf("/_o/")===0||u.indexOf("/r/")===0||u.indexOf("/rt/")===0)){var o=g.location&&g.location.origin;if(o&&o!=="null")newAbs=o+u;}else if(typeof u==="string"){newAbs=__ap$abs(u);}if(newAbs){arguments[1]=newAbs;u=newAbs;}}catch(_){}return _oOpen.apply(this,arguments);}}).open;if(typeof g.__ap$markNative==="function")g.__ap$markNative(g.XMLHttpRequest.prototype.open,"open");}})();
(function(){'use strict';var f,aa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},g=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;
a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function h(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=__ap$get(a, a.length - 1);d=c[a];b=b(d);b!=d&&b!=null&&g(c,a,{configurable:!0,writable:!0,value:b})}}
var l;if(typeof Object.setPrototypeOf=="function")l=Object.setPrototypeOf;else{var m;a:{var da={a:!0},n={};try{n.__proto__=da;m=n.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=l;
function ea(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function r(){var a=fa,b=typeof Symbol!="undefined"&&Symbol.iterator&&__ap$get(a, Symbol.iterator);if(b)return b.call(a);if(typeof a.length=="number")return{next:ea(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function t(a,b){var c;b&&!b.done&&(c=a["return"])&&c.call(a)}
h("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(k||"")+"_"+e++,k)}
function c(k,q){this.h=k;g(this,"description",{configurable:!0,writable:!0,value:q})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
h("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var u=this||self;function v(a){a=a.split(".");for(var b=u,c=0;c<a.length;c++)if(b=__ap$get(b, a[c]),b==null)return null;return b}
function w(a,b){a=a.split(".");for(var c=u,d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
;function x(){this.B=this.B;this.D=this.D}
x.prototype.B=!1;x.prototype.dispose=function(){this.B||(this.B=!0,this.G())};
x.prototype[Symbol.dispose]=function(){this.dispose()};
x.prototype.G=function(){if(this.D)for(;this.D.length;)this.D.shift()()};var y=u.window,z,A,B=(y==null?void 0:(z=y.yt)==null?void 0:z.config_)||(y==null?void 0:(A=y.ytcfg)==null?void 0:A.data_)||{};w("yt.config_",B);function C(a){a=D(a);return typeof a==="string"&&a==="false"?!1:!!a}
function D(a,b){var c={};a=("EXPERIMENT_FLAGS"in B?B.EXPERIMENT_FLAGS:c)[a];return a!==void 0?a:b}
;var E=1E3/60,ha=Number(D("web_emulated_idle_callback_delay",300)||0),F=E-3,fa=[8,5,4,3,2,1,0];function G(a){a=a===void 0?{}:a;x.call(this);var b=this;this.j=[];this.i={};this.H=this.h=0;this.F=this.m=!1;this.A=[];this.C=this.I=!1;var c=r(),d=c.next();try{for(;!d.done;d=c.next())this.j[d.value]=[]}finally{t(c,d)}this.l=0;this.T=a.timeout||1;this.v=F;this.o=0;this.J=this.V.bind(this);this.S=this.W.bind(this);this.N=this.M.bind(this);this.O=this.U.bind(this);this.P=this.K.bind(this);this.R=function(){b.K(performance.now())};
this.L=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!C("disable_scheduler_requestIdleCallback");((this.u=a.useRaf!==!1&&!!window.requestAnimationFrame)||C("enable_scheduler_simulate_raf"))&&document.addEventListener("visibilitychange",this.J)}
G.prototype=aa(x.prototype);G.prototype.constructor=G;if(p)p(G,x);else for(var H in x)if(H!="prototype")if(Object.defineProperties){var I=Object.getOwnPropertyDescriptor(x,H);I&&Object.defineProperty(G,H,I)}else G[H]=x[H];function J(a,b){var c=Date.now();K(b);b=Date.now()-c;a.m||(a.v-=b)}
function L(a,b,c,d){++a.H;if(c===10)return J(a,b),a.H;var e=a.H;a.i[e]=b;a.m&&!d?a.A.push({id:e,priority:c}):(a.j[c].push(e),a.F||a.m||(a.h!==0&&M(a)!==a.o&&N(a),a.start()));return e}
function O(a){a.A.length=0;for(var b=5;b>=0;b--)a.j[b].length=0;a.j[8].length=0;a.i={};N(a)}
function M(a){var b=C("enable_scheduler_simulate_raf");if(a.j[8].length){if(a.C)return 4;if(b){if(!document.hidden)return a.u?3:5}else if(!document.hidden&&a.u)return 3}for(var c=5;c>=a.l;c--)if(a.j[c].length>0)return c>0?b?document.hidden?2:a.u?3:5:!document.hidden&&a.u?3:2:1;return 0}
function P(a){var b=v("yt.logging.errors.log");b&&b(a)}
function K(a){try{a()}catch(b){P(b)}}
function Q(a){var b=r(),c=b.next();try{for(;!c.done;c=b.next())if((__ap$get(a.j, c.value)).length)return!0}finally{t(b,c)}return!1}
f=G.prototype;f.U=function(a){var b=void 0;a&&(b=a.timeRemaining());this.I=!0;R(this,b);this.I=!1};
f.W=function(){R(this)};
f.M=function(){S(this)};
f.K=function(a){this.C=!0;var b=M(this);b===4&&b!==this.o&&(N(this),this.start());R(this,void 0,a);this.C=!1};
f.V=function(){document.hidden||S(this);this.h&&(N(this),this.start())};
function S(a){N(a);a.m=!0;for(var b=Date.now(),c=a.j[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&K(e)}T(a);a.m=!1;Q(a)&&a.start();a.v-=Date.now()-b}
function T(a){for(var b=0,c=a.A.length;b<c;b++){var d=a.A[b];(__ap$get(a.j, d.priority)).push(d.id)}a.A.length=0}
function R(a,b,c){a.C&&a.o===4&&a.h||N(a);a.m=!0;b=Date.now()+(b||a.v);for(var d=a.j[5];d.length;){var e=d.shift(),k=a.i[e];delete a.i[e];if(k)try{k(c)}catch(na){P(na)}}for(d=a.j[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&K(e);d=a.I?0:1;d=a.l>d?a.l:d;if(!(Date.now()>=b)){do{a:{e=a;k=d;for(var q=3;q>=k;q--)for(c=e.j[q];c.length;){var Y=c.shift(),Z=e.i[Y];delete e.i[Y];if(Z){c=Z;break a}}c=null}c&&K(c)}while(c&&Date.now()<b)}a.m=!1;T(a);a.v=F;Q(a)&&a.start()}
f.start=function(){this.F=!1;if(this.h===0)switch(this.o=M(this),this.o){case 1:var a=this.O;this.h=this.L?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,ha);break;case 2:this.h=window.setTimeout(this.S,this.T);break;case 3:this.h=window.requestAnimationFrame(this.P);break;case 4:this.h=window.setTimeout(this.N,0);break;case 5:this.h=window.setTimeout(this.R,E)}};
function N(a){if(a.h){switch(a.o){case 1:var b=a.h;a.L?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 5:case 2:case 4:window.clearTimeout(a.h);break;case 3:window.cancelAnimationFrame(a.h)}a.h=0}}
f.G=function(){O(this);N(this);(this.u||C("enable_scheduler_simulate_raf"))&&document.removeEventListener("visibilitychange",this.J);x.prototype.G.call(this)};var U=v("yt.scheduler.instance.timerIdMap_")||{},ia=Number(D("kevlar_tuner_scheduler_soft_state_timer_ms",800)||0),V=0,W=0;function X(){var a=v("ytglobal.schedulerInstanceInstance_");if(!a||a.B)a=new G(("scheduler"in B?B.scheduler:void 0)||{}),w("ytglobal.schedulerInstanceInstance_",a);return a}
function ja(){ka();var a=v("ytglobal.schedulerInstanceInstance_");a&&(a&&typeof a.dispose=="function"&&a.dispose(),w("ytglobal.schedulerInstanceInstance_",null))}
function ka(){O(X());for(var a in U)U.hasOwnProperty(a)&&delete U[Number(a)]}
function la(a,b,c){if(!c)return c=c===void 0,-L(X(),a,b,c);var d=window.setTimeout(function(){var e=L(X(),a,b);U[d]=e},c);
return d}
function ma(a){var b=X();J(b,a)}
function oa(a){var b=X();if(a<0)delete b.i[-a];else{var c=U[a];c?(delete b.i[c],delete U[a]):window.clearTimeout(a)}}
function pa(){qa()}
function qa(){window.clearTimeout(V);X().start()}
function ra(){var a=X();N(a);a.F=!0;window.clearTimeout(V);V=window.setTimeout(pa,ia)}
function sa(){window.clearTimeout(W);W=window.setTimeout(function(){ta(0)},ia)}
function ta(a){sa();var b=X();b.l=a;b.start()}
function ua(a){sa();var b=X();b.l>a&&(b.l=a,b.start())}
function va(){window.clearTimeout(W);var a=X();a.l=0;a.start()}
;v("yt.scheduler.initialized")||(w("yt.scheduler.instance.dispose",ja),w("yt.scheduler.instance.addJob",la),w("yt.scheduler.instance.addImmediateJob",ma),w("yt.scheduler.instance.cancelJob",oa),w("yt.scheduler.instance.cancelAllJobs",ka),w("yt.scheduler.instance.start",qa),w("yt.scheduler.instance.pause",ra),w("yt.scheduler.instance.setPriorityThreshold",ta),w("yt.scheduler.instance.enablePriorityThreshold",ua),w("yt.scheduler.instance.clearPriorityThreshold",va),w("yt.scheduler.initialized",!0));}).call(this);
