(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4875:function(n,t){var e;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var n=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var o=typeof e;if("string"===o||"number"===o)n.push(e);else if(Array.isArray(e)){if(e.length){var u=i.apply(null,e);u&&n.push(u)}}else if("object"===o){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){n.push(e.toString());continue}for(var c in e)r.call(e,c)&&e[c]&&n.push(c)}}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0!==(e=(function(){return i}).apply(t,[]))&&(n.exports=e)}()},5685:function(n,t,e){"use strict";var r,i;n.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(i=e.g.process)?void 0:i.env)?e.g.process:e(2605)},6069:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(621)}])},9270:function(n,t,e){"use strict";e.d(t,{dD:function(){return u},uo:function(){return c}});var r=e(1527),i=e(959);let o=(0,i.createContext)(!1);function u(){return(0,i.useContext)(o)}function c(n){let[t,e]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let n=()=>e(window.innerWidth<=900?1:-1);return window.addEventListener("resize",n),n(),()=>{window.removeEventListener("resize",n)}},[]),(0,r.jsx)(o.Provider,{value:t>0,children:0!==t&&n.children})}},621:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return h}});var r=e(1527),i=e(4813),o=e.n(i),u=e(5377),c=e.n(u);e(4226);var s=e(5685);let a=s.env.NEXT_PUBLIC_API_BASE;console.info("API_BASE:",a);var l=e(9270),f=e(4875),p=e.n(f);let d=[o()].map(n=>n.variable).join(" ");function h(n){let{Component:t,pageProps:e}=n;return(0,r.jsxs)("div",{suppressHydrationWarning:!0,id:"__app",className:p()("App font-OpenSans relative",d),children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"AICD"}),(0,r.jsx)("meta",{name:"description",content:"AICD Home"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(l.uo,{children:(0,r.jsx)(t,{...e})})]})}},4226:function(){},4813:function(n){n.exports={style:{fontFamily:"'__Open_Sans_db4d9b', '__Open_Sans_Fallback_db4d9b'",fontStyle:"normal"},className:"__className_db4d9b",variable:"__variable_db4d9b"}},2605:function(n){!function(){var t={229:function(n){var t,e,r,i=n.exports={};function o(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(n){if(t===setTimeout)return setTimeout(n,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(r){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(n){t=o}try{e="function"==typeof clearTimeout?clearTimeout:u}catch(r){e=u}}();var s=[],a=!1,l=-1;function f(){a&&r&&(a=!1,r.length?s=r.concat(s):l=-1,s.length&&p())}function p(){if(!a){var n=c(f);a=!0;for(var t=s.length;t;){for(r=s,s=[];++l<t;)r&&r[l].run();l=-1,t=s.length}r=null,a=!1,function(n){if(e===clearTimeout)return clearTimeout(n);if((e===u||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(n);try{e(n)}catch(r){try{return e.call(null,n)}catch(t){return e.call(this,n)}}}(n)}}function d(n,t){this.fun=n,this.array=t}function h(){}i.nextTick=function(n){var t=Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];s.push(new d(n,t)),1!==s.length||a||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(n){return[]},i.binding=function(n){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}},u=!0;try{t[n](o,o.exports,r),u=!1}finally{u&&delete e[n]}return o.exports}r.ab="//";var i=r(229);n.exports=i}()},5377:function(n,t,e){n.exports=e(8363)}},function(n){var t=function(t){return n(n.s=t)};n.O(0,[774,179],function(){return t(6069),t(5516)}),_N_E=n.O()}]);