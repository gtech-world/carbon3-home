(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4875:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&t.push(c)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&t.push(u)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0!==(n=(function(){return o}).apply(e,[]))&&(t.exports=n)}()},5685:function(t,e,n){"use strict";var r,o;t.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(2605)},6069:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5981)}])},9270:function(t,e,n){"use strict";n.d(e,{VW:function(){return p},aF:function(){return m},dD:function(){return a},dr:function(){return g},h3:function(){return d},is:function(){return h},pm:function(){return f},uo:function(){return s}});var r=n(1527),o=n(8778),i=n(3190),c=n(959);let u=(0,c.createContext)(!1);function a(){return(0,c.useContext)(u)}function s(t){let[e,n]=(0,c.useState)(0);return(0,c.useEffect)(()=>{let t=()=>n(window.innerWidth<=900?1:-1);return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[]),(0,r.jsx)(u.Provider,{value:e>0,children:0!==e&&t.children})}let l=(0,c.createContext)({toast:()=>{}});function f(){return(0,c.useContext)(l)}function d(){let{toast:t}=f();return e=>{t({type:"error",msg:(0,o.az)(e)})}}function p(t){let[e,n]=(0,c.useState)(),o=(0,c.useCallback)(t=>{n(t)},[]);return(0,r.jsx)(l.Provider,{value:{current:e,toast:o},children:t.children})}function h(){let t=localStorage.getItem("user-data");if(t)try{return JSON.parse(t)}catch(e){return}}let v=(0,c.createContext)({setUser:()=>{}});function m(){return(0,c.useContext)(v)}function g(t){let[e,n]=(0,c.useState)(),[o,u]=(0,c.useState)(!1),a=(0,c.useCallback)(t=>{t&&(t.loginTime=new Date().getTime()),n(t),localStorage.setItem("user-data",t?JSON.stringify(t):"")},[]);(0,c.useEffect)(()=>{n(h()),u(!0)},[]);let{push:s,pathname:l}=(0,i.useRouter)();return((0,c.useEffect)(()=>{o&&l&&["/dashboard","/product","/activities","/pcf"].includes(l)&&(!e||new Date().getTime()-e.loginTime>36e5)&&s("/login")},[l,o,e]),o)?(0,r.jsx)(v.Provider,{value:{user:e,setUser:a},children:t.children}):null}},3993:function(t,e,n){"use strict";n.d(e,{IW:function(){return u},Sg:function(){return o},cy:function(){return c},eY:function(){return i}});var r=n(5685);let o=r.env.NEXT_PUBLIC_API_BASE||"https://beta-api.gtech.world",i=r.env.NEXT_PUBLIC_SCAN_BASE||"https://mumbai.polygonscan.com",c=r.env.NEXT_PUBLIC_AICD_SOLUTIONS||"https://beta.gtech.world/solutions/automotive",u=r.env.NEXT_PUBLIC_LABEL_CONTRACT||"0xB0C47C03a689a070387294E27105488dE5A57da8"},8778:function(t,e,n){"use strict";n.d(e,{HE:function(){return i},az:function(){return o},vu:function(){return c}});var r=n(3993);function o(t){return t?"string"==typeof t?t:t.message||"Unkown Error":"Unkown Error"}function i(t){return new Date(t).toLocaleString().replaceAll("/","-")}function c(t){return"".concat(r.eY,"/token/").concat(r.IW,"?a=").concat(t)}},5981:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var r=n(1527),o=n(4813),i=n.n(o),c=n(9270),u=n(4875),a=n.n(u),s=n(959),l=n(3550);function f(){let{current:t,toast:e}=(0,c.pm)();if((0,s.useEffect)(()=>{if(!t)return()=>{};let n=setTimeout(()=>{e()},5e3);return()=>{clearTimeout(n)}},[t]),!t)return null;let n="info"===t.type?l.mny:l.LHV;return(0,r.jsx)("div",{className:a()("fixed right-5 top-20 z-[60] "),children:(0,r.jsxs)("div",{className:a()("flex items-center text-sm text-black rounded-lg border-1 py-4 w-full px-5 mo:mx-auto","info"===t.type?"border-[#32CB9D] bg-green-50":"border-[#EF4C56] bg-rose-50"),children:[(0,r.jsx)(n,{className:a()("text-xl mr-3","info"===t.type?"text-[#32CB9D]":"text-[#EF4C56]")}),(0,r.jsx)("span",{children:t.msg})]})})}n(3993);var d=n(5377),p=n.n(d);n(4226);let h=[i()].map(t=>t.variable).join(" ");function v(t){let{Component:e,pageProps:n}=t;return(0,r.jsxs)("div",{suppressHydrationWarning:!0,id:"__app",className:a()("App font-OpenSans relative",h),children:[(0,r.jsxs)(p(),{children:[(0,r.jsx)("title",{children:"AICD"}),(0,r.jsx)("meta",{name:"description",content:"AICD Home"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)(c.VW,{children:[(0,r.jsx)(c.uo,{children:(0,r.jsx)(c.dr,{children:(0,r.jsx)(e,{...n})})}),(0,r.jsx)(f,{})]})]})}},4226:function(){},4813:function(t){t.exports={style:{fontFamily:"'__Open_Sans_db4d9b', '__Open_Sans_Fallback_db4d9b'",fontStyle:"normal"},className:"__className_db4d9b",variable:"__variable_db4d9b"}},2605:function(t){!function(){var e={229:function(t){var e,n,r,o=t.exports={};function i(){throw Error("setTimeout has not been defined")}function c(){throw Error("clearTimeout has not been defined")}function u(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{n="function"==typeof clearTimeout?clearTimeout:c}catch(r){n=c}}();var a=[],s=!1,l=-1;function f(){s&&r&&(s=!1,r.length?a=r.concat(a):l=-1,a.length&&d())}function d(){if(!s){var t=u(f);s=!0;for(var e=a.length;e;){for(r=a,a=[];++l<e;)r&&r[l].run();l=-1,e=a.length}r=null,s=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(r){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new p(t,e)),1!==a.length||s||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}},c=!0;try{e[t](i,i.exports,r),c=!1}finally{c&&delete n[t]}return i.exports}r.ab="//";var o=r(229);t.exports=o}()},5377:function(t,e,n){t.exports=n(8363)},3190:function(t,e,n){t.exports=n(5516)},3550:function(t,e,n){"use strict";n.d(e,{LHV:function(){return i},mny:function(){return o},nf1:function(){return c}});var r=n(7833);function o(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]})(t)}function i(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]})(t)}function c(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]})(t)}},7833:function(t,e,n){"use strict";n.d(e,{w_:function(){return a}});var r=n(959),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n};function a(t){return function(e){return r.createElement(s,c({attr:c({},t.attr)},e),function t(e){return e&&e.map(function(e,n){return r.createElement(e.tag,c({key:n},e.attr),t(e.child))})}(t.child))}}function s(t){var e=function(e){var n,o=t.attr,i=t.size,a=t.title,s=u(t,["attr","size","title"]),l=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,s,{className:n,style:c(c({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),t.children)};return void 0!==i?r.createElement(i.Consumer,null,function(t){return e(t)}):e(o)}}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(6069),e(5516)}),_N_E=t.O()}]);