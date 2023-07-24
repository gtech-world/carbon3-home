"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1015,4802,382,9809,3596],{6171:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(677),o=n(959);function i(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var i,a,u=(0,o.useRef)(0),l=(i=(0,o.useRef)(!1),a=(0,o.useCallback)(function(){return i.current},[]),(0,o.useEffect)(function(){return i.current=!0,function(){i.current=!1}},[]),a),d=(0,o.useState)(n),c=d[0],s=d[1],f=(0,o.useCallback)(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o=++u.current;return c.loading||s(function(e){return(0,r.pi)((0,r.pi)({},e),{loading:!0})}),e.apply(void 0,t).then(function(e){return l()&&o===u.current&&s({value:e,loading:!1}),e},function(e){return l()&&o===u.current&&s({error:e,loading:!1}),e})},t);return[c,f]}},9592:function(e,t,n){var r=n(959),o=function(e,t){return"boolean"==typeof t?t:!e};t.Z=function(e){return(0,r.useReducer)(o,e)}},677:function(e,t,n){n.d(t,{ZT:function(){return o},pi:function(){return i}});var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)}},732:function(e,t,n){let r,o,i;n.d(t,{ZP:function(){return N}});let a=new Set,u=new WeakMap,l=new WeakMap,d=new WeakMap,c=new WeakMap,s=new WeakMap,f=new WeakMap,p=new WeakMap,h=new WeakSet,g="__aa_tgt",m="__aa_del";function v(e){clearTimeout(p.get(e));let t=M(e),n="function"==typeof t?500:t.duration;p.set(e,setTimeout(async()=>{let t=d.get(e);try{await (null==t?void 0:t.finished),u.set(e,O(e)),function(e){let t=c.get(e);null==t||t.disconnect();let n=u.get(e),o=0;n||(n=O(e),u.set(e,n));let{offsetWidth:i,offsetHeight:a}=r,l=[n.top-5,i-(n.left+5+n.width),a-(n.top+5+n.height),n.left-5],d=l.map(e=>`${-1*Math.floor(e)}px`).join(" "),s=new IntersectionObserver(()=>{++o>1&&v(e)},{root:r,threshold:1,rootMargin:d});s.observe(e),c.set(e,s)}(e)}catch{}},n))}function y(e){setTimeout(()=>{s.set(e,setInterval(()=>b(v.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function b(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function w(e,t){t||g in e?!t||g in t||Object.defineProperty(t,g,{value:e}):Object.defineProperty(e,g,{value:e})}function E(e){return Number(e.replace(/[^0-9.\-]/g,""))}function O(e){let t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function _(e,t,n){let r=t.width,o=t.height,i=n.width,a=n.height,u=getComputedStyle(e),l=u.getPropertyValue("box-sizing");if("content-box"===l){let e=E(u.paddingTop)+E(u.paddingBottom)+E(u.borderTopWidth)+E(u.borderBottomWidth),t=E(u.paddingLeft)+E(u.paddingRight)+E(u.borderRightWidth)+E(u.borderLeftWidth);r-=t,i-=t,o-=e,a-=e}return[r,i,o,a].map(Math.round)}function M(e){return g in e&&f.has(e[g])?f.get(e[g]):{duration:250,easing:"ease-in-out"}}function k(e){if(g in e)return e[g]}function x(e){let t=k(e);return!!t&&h.has(t)}function C(e,...t){t.forEach(t=>t(e,f.has(e)));for(let n=0;n<e.children.length;n++){let r=e.children.item(n);r&&t.forEach(e=>e(r,f.has(r)))}}function N(e,t={}){if(o&&i){let n=window.matchMedia("(prefers-reduced-motion: reduce)"),r=n.matches&&"function"!=typeof t&&!t.disrespectUserMotionPreference;r||(h.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),C(e,v,y,e=>null==i?void 0:i.observe(e)),"function"==typeof t?f.set(e,t):f.set(e,{duration:250,easing:"ease-in-out",...t}),o.observe(e,{childList:!0}),a.add(e))}return Object.freeze({parent:e,enable:()=>{h.add(e)},disable:()=>{h.delete(e)},isEnabled:()=>h.has(e)})}"undefined"!=typeof window&&(r=document.documentElement,o=new MutationObserver(e=>{let t=function(e){let t=e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]),n=t.every(e=>"#comment"===e.nodeName);return!n&&e.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(w(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let r=t.target.children.item(n);if(r){if(m in r)return!1;w(t.target,r),e.add(r)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let r=t.removedNodes[n];if(m in r)return!1;r instanceof Element&&(e.add(r),w(t.target,r),l.set(r,[t.previousSibling,t.nextSibling]))}}return e},new Set)}(e);t&&t.forEach(e=>(function(e){var t;let n=e.isConnected,r=u.has(e);n&&l.has(e)&&l.delete(e),d.has(e)&&(null===(t=d.get(e))||void 0===t||t.cancel()),r&&n?function(e){let t;let n=u.get(e),r=O(e);if(!x(e))return u.set(e,r);if(!n)return;let o=M(e);if("function"!=typeof o){let i=n.left-r.left,a=n.top-r.top,[u,l,d,c]=_(e,n,r),s={transform:`translate(${i}px, ${a}px)`},f={transform:"translate(0, 0)"};u!==l&&(s.width=`${u}px`,f.width=`${l}px`),d!==c&&(s.height=`${d}px`,f.height=`${c}px`),t=e.animate([s,f],{duration:o.duration,easing:o.easing})}else(t=new Animation(o(e,"remain",n,r))).play();d.set(e,t),u.set(e,r),t.addEventListener("finish",v.bind(null,e))}(e):r&&!n?function(e){var t;let n;if(!l.has(e)||!u.has(e))return;let[r,o]=l.get(e);function i(){var t;e.remove(),u.delete(e),l.delete(e),d.delete(e),null===(t=c.get(e))||void 0===t||t.disconnect()}if(Object.defineProperty(e,m,{value:!0}),o&&o.parentNode&&o.parentNode instanceof Element?o.parentNode.insertBefore(e,o):r&&r.parentNode?r.parentNode.appendChild(e):null===(t=k(e))||void 0===t||t.appendChild(e),!x(e))return i();let[a,s,f,p]=function(e){let t=u.get(e),[n,,r]=_(e,t,O(e)),o=e.parentElement;for(;o&&("static"===getComputedStyle(o).position||o instanceof HTMLBodyElement);)o=o.parentElement;o||(o=document.body);let i=getComputedStyle(o),a=u.get(o)||O(o),l=Math.round(t.top-a.top)-E(i.borderTopWidth),d=Math.round(t.left-a.left)-E(i.borderLeftWidth);return[l,d,n,r]}(e),h=M(e),g=u.get(e);Object.assign(e.style,{position:"absolute",top:`${a}px`,left:`${s}px`,width:`${f}px`,height:`${p}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!=typeof h?n=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:h.duration,easing:"ease-out"}):(n=new Animation(h(e,"remove",g))).play(),d.set(e,n),n.addEventListener("finish",i)}(e):function(e){let t;let n=O(e);u.set(e,n);let r=M(e);x(e)&&("function"!=typeof r?t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*r.duration,easing:"ease-in"}):(t=new Animation(r(e,"add",n))).play(),d.set(e,t),t.addEventListener("finish",v.bind(null,e)))}(e)})(e))}),(i=new ResizeObserver(e=>{e.forEach(e=>{e.target===r&&(clearTimeout(p.get(r)),p.set(r,setTimeout(()=>{a.forEach(e=>C(e,e=>b(()=>v(e))))},100))),u.has(e.target)&&v(e.target)})})).observe(r))}}]);