(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{2046:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/carbon/document",function(){return n(365)}])},1191:function(e,t,n){"use strict";n.d(t,{u:function(){return s},z:function(){return l}});var r=n(1527),i=n(4875),a=n.n(i),o=n(5591);function l(e){let{children:t,className:n,...i}=e;return(0,r.jsx)("button",{...i,className:a()(n,"hover:bg-green-28"),children:e.children})}function s(e){let{busy:t,disabled:n,className:i,defStyle:l="btn-primary",children:s,...d}=e;return(0,r.jsx)("button",{className:a()(i,{[l]:!n,"btn-disable":n}),...d,children:t?(0,r.jsx)(o.fCD,{className:"animate-spin"}):s})}},365:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(1527),i=n(959),a=n(1191),o=n(7819);function l(e){let{title:t,updatedDate:n,total:i,btn:o}=e.data;return(0,r.jsxs)("div",{className:"bg-white mr-5 box-layout p-5 rounded-lg mt-5 text-base flex flex-col justify-between mo:w-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-semibold",children:t}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsxs)("div",{children:["文档摘要 ：",(0,r.jsx)("span",{className:"text-green-2",children:i.folder}),"子项文件夹；",(0,r.jsx)("span",{className:"text-green-2",children:i.file}),"文件；",(0,r.jsx)("span",{className:"text-green-2",children:i.collaborate}),"用户协作；",(0,r.jsx)("span",{className:"text-green-2",children:i.auth}),"项活跃开放授权； 公开非公开混合权限；"]}),(0,r.jsx)("div",{children:"最后更新 : 2023年5月1日"})]})]}),(0,r.jsx)(a.z,{className:"mt-5 text-lg bg-green-2 w-full text-white rounded-lg flex-1 min-h-[2.865rem] max-h-[2.865rem]",children:o.text})]})}var s=function(){let e=(0,i.useMemo)(()=>[{title:"PCF-Model Sample [AI09] 协作隐私文档",updatedDate:"2023年5月1日",total:{folder:4,file:26,collaborate:5,auth:0},btn:{text:"验证并进入隐私文档",onClick:()=>{}}},{title:"PCF-低碳车身车壳认证项目 [AI10] 协作隐私文档",updatedDate:"2023年5月1日",total:{folder:3,file:10,collaborate:3,auth:1},btn:{text:"验证并进入隐私文档",onClick:()=>{}}}],[]);return(0,r.jsxs)(o.N,{className:"bg-gray-16 h-full",children:[(0,r.jsx)("h3",{className:"text-lg font-bold",children:"项目文档管理"}),(0,r.jsx)("div",{className:"flex flex-wrap mr-[-20px] mo:mr-0 mo:flex-col",children:e.map((e,t)=>(0,r.jsx)(l,{data:e},"tagData".concat(t)))})]})}},8723:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(959),i=["mousedown","touchstart"],a=function(e,t,n){void 0===n&&(n=i);var a=(0,r.useRef)(t);(0,r.useEffect)(function(){a.current=t},[t]),(0,r.useEffect)(function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&a.current(t)},r=0,i=n;r<i.length;r++){var o=i[r];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,o,t)}return function(){for(var e=0,r=n;e<r.length;e++){var i=r[e];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,i,t)}}},[n,e])}},9592:function(e,t,n){"use strict";var r=n(959),i=function(e,t){return"boolean"==typeof t?t:!e};t.Z=function(e){return(0,r.useReducer)(i,e)}},732:function(e,t,n){"use strict";let r,i,a;n.d(t,{ZP:function(){return k}});let o=new Set,l=new WeakMap,s=new WeakMap,d=new WeakMap,c=new WeakMap,u=new WeakMap,f=new WeakMap,h=new WeakMap,p=new WeakSet,m="__aa_tgt",g="__aa_del";function v(e){clearTimeout(h.get(e));let t=j(e),n="function"==typeof t?500:t.duration;h.set(e,setTimeout(async()=>{let t=d.get(e);try{await (null==t?void 0:t.finished),l.set(e,N(e)),function(e){let t=c.get(e);null==t||t.disconnect();let n=l.get(e),i=0;n||(n=N(e),l.set(e,n));let{offsetWidth:a,offsetHeight:o}=r,s=[n.top-5,a-(n.left+5+n.width),o-(n.top+5+n.height),n.left-5],d=s.map(e=>`${-1*Math.floor(e)}px`).join(" "),u=new IntersectionObserver(()=>{++i>1&&v(e)},{root:r,threshold:1,rootMargin:d});u.observe(e),c.set(e,u)}(e)}catch{}},n))}function b(e){setTimeout(()=>{u.set(e,setInterval(()=>x(v.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function x(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function w(e,t){t||m in e?!t||m in t||Object.defineProperty(t,m,{value:e}):Object.defineProperty(e,m,{value:e})}function y(e){return Number(e.replace(/[^0-9.\-]/g,""))}function N(e){let t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function E(e,t,n){let r=t.width,i=t.height,a=n.width,o=n.height,l=getComputedStyle(e),s=l.getPropertyValue("box-sizing");if("content-box"===s){let e=y(l.paddingTop)+y(l.paddingBottom)+y(l.borderTopWidth)+y(l.borderBottomWidth),t=y(l.paddingLeft)+y(l.paddingRight)+y(l.borderRightWidth)+y(l.borderLeftWidth);r-=t,a-=t,i-=e,o-=e}return[r,a,i,o].map(Math.round)}function j(e){return m in e&&f.has(e[m])?f.get(e[m]):{duration:250,easing:"ease-in-out"}}function M(e){if(m in e)return e[m]}function _(e){let t=M(e);return!!t&&p.has(t)}function C(e,...t){t.forEach(t=>t(e,f.has(e)));for(let n=0;n<e.children.length;n++){let r=e.children.item(n);r&&t.forEach(e=>e(r,f.has(r)))}}function k(e,t={}){if(i&&a){let n=window.matchMedia("(prefers-reduced-motion: reduce)"),r=n.matches&&"function"!=typeof t&&!t.disrespectUserMotionPreference;r||(p.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),C(e,v,b,e=>null==a?void 0:a.observe(e)),"function"==typeof t?f.set(e,t):f.set(e,{duration:250,easing:"ease-in-out",...t}),i.observe(e,{childList:!0}),o.add(e))}return Object.freeze({parent:e,enable:()=>{p.add(e)},disable:()=>{p.delete(e)},isEnabled:()=>p.has(e)})}"undefined"!=typeof window&&(r=document.documentElement,i=new MutationObserver(e=>{let t=function(e){let t=e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]),n=t.every(e=>"#comment"===e.nodeName);return!n&&e.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(w(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let r=t.target.children.item(n);if(r){if(g in r)return!1;w(t.target,r),e.add(r)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let r=t.removedNodes[n];if(g in r)return!1;r instanceof Element&&(e.add(r),w(t.target,r),s.set(r,[t.previousSibling,t.nextSibling]))}}return e},new Set)}(e);t&&t.forEach(e=>(function(e){var t;let n=e.isConnected,r=l.has(e);n&&s.has(e)&&s.delete(e),d.has(e)&&(null===(t=d.get(e))||void 0===t||t.cancel()),r&&n?function(e){let t;let n=l.get(e),r=N(e);if(!_(e))return l.set(e,r);if(!n)return;let i=j(e);if("function"!=typeof i){let a=n.left-r.left,o=n.top-r.top,[l,s,d,c]=E(e,n,r),u={transform:`translate(${a}px, ${o}px)`},f={transform:"translate(0, 0)"};l!==s&&(u.width=`${l}px`,f.width=`${s}px`),d!==c&&(u.height=`${d}px`,f.height=`${c}px`),t=e.animate([u,f],{duration:i.duration,easing:i.easing})}else(t=new Animation(i(e,"remain",n,r))).play();d.set(e,t),l.set(e,r),t.addEventListener("finish",v.bind(null,e))}(e):r&&!n?function(e){var t;let n;if(!s.has(e)||!l.has(e))return;let[r,i]=s.get(e);function a(){var t;e.remove(),l.delete(e),s.delete(e),d.delete(e),null===(t=c.get(e))||void 0===t||t.disconnect()}if(Object.defineProperty(e,g,{value:!0}),i&&i.parentNode&&i.parentNode instanceof Element?i.parentNode.insertBefore(e,i):r&&r.parentNode?r.parentNode.appendChild(e):null===(t=M(e))||void 0===t||t.appendChild(e),!_(e))return a();let[o,u,f,h]=function(e){let t=l.get(e),[n,,r]=E(e,t,N(e)),i=e.parentElement;for(;i&&("static"===getComputedStyle(i).position||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);let a=getComputedStyle(i),o=l.get(i)||N(i),s=Math.round(t.top-o.top)-y(a.borderTopWidth),d=Math.round(t.left-o.left)-y(a.borderLeftWidth);return[s,d,n,r]}(e),p=j(e),m=l.get(e);Object.assign(e.style,{position:"absolute",top:`${o}px`,left:`${u}px`,width:`${f}px`,height:`${h}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!=typeof p?n=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:p.duration,easing:"ease-out"}):(n=new Animation(p(e,"remove",m))).play(),d.set(e,n),n.addEventListener("finish",a)}(e):function(e){let t;let n=N(e);l.set(e,n);let r=j(e);_(e)&&("function"!=typeof r?t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*r.duration,easing:"ease-in"}):(t=new Animation(r(e,"add",n))).play(),d.set(e,t),t.addEventListener("finish",v.bind(null,e)))}(e)})(e))}),(a=new ResizeObserver(e=>{e.forEach(e=>{e.target===r&&(clearTimeout(h.get(r)),h.set(r,setTimeout(()=>{o.forEach(e=>C(e,e=>x(()=>v(e))))},100))),l.has(e.target)&&v(e.target)})})).observe(r))}},function(e){e.O(0,[713,769,307,740,819,774,888,179],function(){return e(e.s=2046)}),_N_E=e.O()}]);