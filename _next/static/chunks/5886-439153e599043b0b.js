"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5886],{8723:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(959),i=["mousedown","touchstart"],o=function(e,t,n){void 0===n&&(n=i);var o=(0,r.useRef)(t);(0,r.useEffect)(function(){o.current=t},[t]),(0,r.useEffect)(function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&o.current(t)},r=0,i=n;r<i.length;r++){var a=i[r];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,a,t)}return function(){for(var e=0,r=n;e<r.length;e++){var i=r[e];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,i,t)}}},[n,e])}},9592:function(e,t,n){var r=n(959),i=function(e,t){return"boolean"==typeof t?t:!e};t.Z=function(e){return(0,r.useReducer)(i,e)}},2415:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(959),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,u=r.useLayoutEffect,s=r.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,d=r[1];return u(function(){i.value=n,i.getSnapshot=t,l(i)&&d({inst:i})},[e,n,t]),a(function(){return l(i)&&d({inst:i}),e(function(){l(i)&&d({inst:i})})},[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},4322:function(e,t,n){e.exports=n(2415)},732:function(e,t,n){let r,i,o;n.d(t,{ZP:function(){return V}});let a=new Set,u=new WeakMap,s=new WeakMap,l=new WeakMap,d=new WeakMap,c=new WeakMap,f=new WeakMap,g=new WeakMap,p=new WeakSet,h="__aa_tgt",m="__aa_del";function v(e){clearTimeout(g.get(e));let t=T(e),n="function"==typeof t?500:t.duration;g.set(e,setTimeout(async()=>{let t=l.get(e);try{await (null==t?void 0:t.finished),u.set(e,L(e)),function(e){let t=d.get(e);null==t||t.disconnect();let n=u.get(e),i=0;n||(n=L(e),u.set(e,n));let{offsetWidth:o,offsetHeight:a}=r,s=[n.top-5,o-(n.left+5+n.width),a-(n.top+5+n.height),n.left-5],l=s.map(e=>`${-1*Math.floor(e)}px`).join(" "),c=new IntersectionObserver(()=>{++i>1&&v(e)},{root:r,threshold:1,rootMargin:l});c.observe(e),d.set(e,c)}(e)}catch{}},n))}function w(e){setTimeout(()=>{c.set(e,setInterval(()=>E(v.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function E(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function y(e,t){t||h in e?!t||h in t||Object.defineProperty(t,h,{value:e}):Object.defineProperty(e,h,{value:e})}function b(e){return Number(e.replace(/[^0-9.\-]/g,""))}function L(e){let t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function S(e,t,n){let r=t.width,i=t.height,o=n.width,a=n.height,u=getComputedStyle(e),s=u.getPropertyValue("box-sizing");if("content-box"===s){let e=b(u.paddingTop)+b(u.paddingBottom)+b(u.borderTopWidth)+b(u.borderBottomWidth),t=b(u.paddingLeft)+b(u.paddingRight)+b(u.borderRightWidth)+b(u.borderLeftWidth);r-=t,o-=t,i-=e,a-=e}return[r,o,i,a].map(Math.round)}function T(e){return h in e&&f.has(e[h])?f.get(e[h]):{duration:250,easing:"ease-in-out"}}function R(e){if(h in e)return e[h]}function k(e){let t=R(e);return!!t&&p.has(t)}function N(e,...t){t.forEach(t=>t(e,f.has(e)));for(let n=0;n<e.children.length;n++){let r=e.children.item(n);r&&t.forEach(e=>e(r,f.has(r)))}}function V(e,t={}){if(i&&o){let n=window.matchMedia("(prefers-reduced-motion: reduce)"),r=n.matches&&"function"!=typeof t&&!t.disrespectUserMotionPreference;r||(p.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),N(e,v,w,e=>null==o?void 0:o.observe(e)),"function"==typeof t?f.set(e,t):f.set(e,{duration:250,easing:"ease-in-out",...t}),i.observe(e,{childList:!0}),a.add(e))}return Object.freeze({parent:e,enable:()=>{p.add(e)},disable:()=>{p.delete(e)},isEnabled:()=>p.has(e)})}"undefined"!=typeof window&&(r=document.documentElement,i=new MutationObserver(e=>{let t=function(e){let t=e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]),n=t.every(e=>"#comment"===e.nodeName);return!n&&e.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(y(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let r=t.target.children.item(n);if(r){if(m in r)return!1;y(t.target,r),e.add(r)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let r=t.removedNodes[n];if(m in r)return!1;r instanceof Element&&(e.add(r),y(t.target,r),s.set(r,[t.previousSibling,t.nextSibling]))}}return e},new Set)}(e);t&&t.forEach(e=>(function(e){var t;let n=e.isConnected,r=u.has(e);n&&s.has(e)&&s.delete(e),l.has(e)&&(null===(t=l.get(e))||void 0===t||t.cancel()),r&&n?function(e){let t;let n=u.get(e),r=L(e);if(!k(e))return u.set(e,r);if(!n)return;let i=T(e);if("function"!=typeof i){let o=n.left-r.left,a=n.top-r.top,[u,s,l,d]=S(e,n,r),c={transform:`translate(${o}px, ${a}px)`},f={transform:"translate(0, 0)"};u!==s&&(c.width=`${u}px`,f.width=`${s}px`),l!==d&&(c.height=`${l}px`,f.height=`${d}px`),t=e.animate([c,f],{duration:i.duration,easing:i.easing})}else(t=new Animation(i(e,"remain",n,r))).play();l.set(e,t),u.set(e,r),t.addEventListener("finish",v.bind(null,e))}(e):r&&!n?function(e){var t;let n;if(!s.has(e)||!u.has(e))return;let[r,i]=s.get(e);function o(){var t;e.remove(),u.delete(e),s.delete(e),l.delete(e),null===(t=d.get(e))||void 0===t||t.disconnect()}if(Object.defineProperty(e,m,{value:!0}),i&&i.parentNode&&i.parentNode instanceof Element?i.parentNode.insertBefore(e,i):r&&r.parentNode?r.parentNode.appendChild(e):null===(t=R(e))||void 0===t||t.appendChild(e),!k(e))return o();let[a,c,f,g]=function(e){let t=u.get(e),[n,,r]=S(e,t,L(e)),i=e.parentElement;for(;i&&("static"===getComputedStyle(i).position||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);let o=getComputedStyle(i),a=u.get(i)||L(i),s=Math.round(t.top-a.top)-b(o.borderTopWidth),l=Math.round(t.left-a.left)-b(o.borderLeftWidth);return[s,l,n,r]}(e),p=T(e),h=u.get(e);Object.assign(e.style,{position:"absolute",top:`${a}px`,left:`${c}px`,width:`${f}px`,height:`${g}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!=typeof p?n=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:p.duration,easing:"ease-out"}):(n=new Animation(p(e,"remove",h))).play(),l.set(e,n),n.addEventListener("finish",o)}(e):function(e){let t;let n=L(e);u.set(e,n);let r=T(e);k(e)&&("function"!=typeof r?t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*r.duration,easing:"ease-in"}):(t=new Animation(r(e,"add",n))).play(),l.set(e,t),t.addEventListener("finish",v.bind(null,e)))}(e)})(e))}),(o=new ResizeObserver(e=>{e.forEach(e=>{e.target===r&&(clearTimeout(g.get(r)),g.set(r,setTimeout(()=>{a.forEach(e=>N(e,e=>E(()=>v(e))))},100))),u.has(e.target)&&v(e.target)})})).observe(r))},1256:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(959),i=n(4322),o=n(5970);let a=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),u={dedupe:!0};o.$l.defineProperty(o.J$,"defaultValue",{value:o.u_});let s=(0,o.s6)((e,t,n)=>{let{cache:s,compare:l,suspense:d,fallbackData:c,revalidateOnMount:f,revalidateIfStale:g,refreshInterval:p,refreshWhenHidden:h,refreshWhenOffline:m,keepPreviousData:v}=n,[w,E,y,b]=o.DY.get(s),[L,S]=(0,o.qC)(e),T=(0,r.useRef)(!1),R=(0,r.useRef)(!1),k=(0,r.useRef)(L),N=(0,r.useRef)(t),V=(0,r.useRef)(n),_=()=>V.current,C=()=>_().isVisible()&&_().isOnline(),[x,M,O,j]=(0,o.JN)(s,L),W=(0,r.useRef)({}).current,P=(0,o.o8)(c)?n.fallback[L]:c,$=(e,t)=>{for(let n in W)if("data"===n){if(!l(e[n],t[n])&&(!(0,o.o8)(e[n])||!l(U,t[n])))return!1}else if(t[n]!==e[n])return!1;return!0},I=(0,r.useMemo)(()=>{let e=!!L&&!!t&&((0,o.o8)(f)?!_().isPaused()&&!d&&(!!(0,o.o8)(g)||g):f),n=t=>{let n=(0,o.PM)(t);return(delete n._k,e)?{isValidating:!0,isLoading:!0,...n}:n},r=x(),i=j(),a=n(r),u=r===i?a:n(i),s=a;return[()=>{let e=n(x()),t=$(e,s);return t?(s.data=e.data,s.isLoading=e.isLoading,s.isValidating=e.isValidating,s.error=e.error,s):(s=e,e)},()=>u]},[s,L]),A=(0,i.useSyncExternalStore)((0,r.useCallback)(e=>O(L,(t,n)=>{$(n,t)||e()}),[s,L]),I[0],I[1]),D=!T.current,B=w[L]&&w[L].length>0,q=A.data,z=(0,o.o8)(q)?P:q,F=A.error,Z=(0,r.useRef)(z),U=v?(0,o.o8)(q)?Z.current:q:z,J=(!B||!!(0,o.o8)(F))&&(D&&!(0,o.o8)(f)?f:!_().isPaused()&&(d?!(0,o.o8)(z)&&g:(0,o.o8)(z)||g)),Y=!!(L&&t&&D&&J),H=(0,o.o8)(A.isValidating)?Y:A.isValidating,X=(0,o.o8)(A.isLoading)?Y:A.isLoading,G=(0,r.useCallback)(async e=>{let t,r;let i=N.current;if(!L||!i||R.current||_().isPaused())return!1;let a=!0,u=e||{},s=!y[L]||!u.dedupe,d=()=>o.w6?!R.current&&L===k.current&&T.current:L===k.current,c={isValidating:!1,isLoading:!1},f=()=>{M(c)},g=()=>{let e=y[L];e&&e[1]===r&&delete y[L]},p={isValidating:!0};(0,o.o8)(x().data)&&(p.isLoading=!0);try{if(s&&(M(p),n.loadingTimeout&&(0,o.o8)(x().data)&&setTimeout(()=>{a&&d()&&_().onLoadingSlow(L,n)},n.loadingTimeout),y[L]=[i(S),(0,o.u3)()]),[t,r]=y[L],t=await t,s&&setTimeout(g,n.dedupingInterval),!y[L]||y[L][1]!==r)return s&&d()&&_().onDiscarded(L),!1;c.error=o.i_;let e=E[L];if(!(0,o.o8)(e)&&(r<=e[0]||r<=e[1]||0===e[1]))return f(),s&&d()&&_().onDiscarded(L),!1;let u=x().data;c.data=l(u,t)?u:t,s&&d()&&_().onSuccess(t,L,n)}catch(n){g();let e=_(),{shouldRetryOnError:t}=e;!e.isPaused()&&(c.error=n,s&&d()&&(e.onError(n,L,e),(!0===t||(0,o.mf)(t)&&t(n))&&C()&&e.onErrorRetry(n,L,e,e=>{let t=w[L];t&&t[0]&&t[0](o.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return a=!1,f(),!0},[L,s]),K=(0,r.useCallback)((...e)=>(0,o.BN)(s,k.current,...e),[]);if((0,o.LI)(()=>{N.current=t,V.current=n,(0,o.o8)(q)||(Z.current=q)}),(0,o.LI)(()=>{if(!L)return;let e=G.bind(o.i_,u),t=0,n=(0,o.ko)(L,w,(n,r={})=>{if(n==o.sj.FOCUS_EVENT){let n=Date.now();_().revalidateOnFocus&&n>t&&C()&&(t=n+_().focusThrottleInterval,e())}else if(n==o.sj.RECONNECT_EVENT)_().revalidateOnReconnect&&C()&&e();else if(n==o.sj.MUTATE_EVENT)return G();else if(n==o.sj.ERROR_REVALIDATE_EVENT)return G(r)});return R.current=!1,k.current=L,T.current=!0,M({_k:S}),J&&((0,o.o8)(z)||o.W6?e():(0,o.kw)(e)),()=>{R.current=!0,n()}},[L]),(0,o.LI)(()=>{let e;function t(){let t=(0,o.mf)(p)?p(x().data):p;t&&-1!==e&&(e=setTimeout(n,t))}function n(){!x().error&&(h||_().isVisible())&&(m||_().isOnline())?G(u).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[p,h,m,L]),(0,r.useDebugValue)(U),d&&(0,o.o8)(z)&&L){if(!o.w6&&o.W6)throw Error("Fallback data is required when using suspense in SSR.");N.current=t,V.current=n,R.current=!1;let e=b[L];if(!(0,o.o8)(e)){let t=K(e);a(t)}if((0,o.o8)(F)){let e=G(u);(0,o.o8)(U)||(e.status="fulfilled",e.value=!0),a(e)}else throw F}return{mutate:K,get data(){return W.data=!0,U},get error(){return W.error=!0,F},get isValidating(){return W.isValidating=!0,H},get isLoading(){return W.isLoading=!0,X}}})}}]);