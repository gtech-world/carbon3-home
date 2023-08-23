"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6631],{4701:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(9685),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,a=n.useEffect,s=n.useLayoutEffect,o=n.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!u(e,r)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),u=n[0].inst,d=n[1];return s(function(){u.value=r,u.getSnapshot=t,l(u)&&d({inst:u})},[e,r,t]),a(function(){return l(u)&&d({inst:u}),e(function(){l(u)&&d({inst:u})})},[e]),o(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:d},5834:function(e,t,r){e.exports=r(4701)},6631:function(e,t,r){r.d(t,{ZP:function(){return o}});var n=r(9685),u=r(5834),i=r(2969);let a=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),s={dedupe:!0};i.$l.defineProperty(i.J$,"defaultValue",{value:i.u_});let o=(0,i.s6)((e,t,r)=>{let{cache:o,compare:l,suspense:d,fallbackData:c,revalidateOnMount:f,revalidateIfStale:g,refreshInterval:E,refreshWhenHidden:V,refreshWhenOffline:v,keepPreviousData:w}=r,[R,h,p,S]=i.DY.get(o),[T,L]=(0,i.qC)(e),_=(0,n.useRef)(!1),b=(0,n.useRef)(!1),y=(0,n.useRef)(T),k=(0,n.useRef)(t),m=(0,n.useRef)(r),C=()=>m.current,N=()=>C().isVisible()&&C().isOnline(),[O,j,D,I]=(0,i.JN)(o,T),P=(0,n.useRef)({}).current,x=(0,i.o8)(c)?r.fallback[T]:c,A=(e,t)=>{for(let r in P)if("data"===r){if(!l(e[r],t[r])&&(!(0,i.o8)(e[r])||!l(Y,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},F=(0,n.useMemo)(()=>{let e=!!T&&!!t&&((0,i.o8)(f)?!C().isPaused()&&!d&&(!!(0,i.o8)(g)||g):f),r=t=>{let r=(0,i.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=O(),u=I(),a=r(n),s=n===u?a:r(u),o=a;return[()=>{let e=r(O()),t=A(e,o);return t?(o.data=e.data,o.isLoading=e.isLoading,o.isValidating=e.isValidating,o.error=e.error,o):(o=e,e)},()=>s]},[o,T]),M=(0,u.useSyncExternalStore)((0,n.useCallback)(e=>D(T,(t,r)=>{A(r,t)||e()}),[o,T]),F[0],F[1]),q=!_.current,J=R[T]&&R[T].length>0,U=M.data,W=(0,i.o8)(U)?x:U,$=M.error,B=(0,n.useRef)(W),Y=w?(0,i.o8)(U)?B.current:U:W,Z=(!J||!!(0,i.o8)($))&&(q&&!(0,i.o8)(f)?f:!C().isPaused()&&(d?!(0,i.o8)(W)&&g:(0,i.o8)(W)||g)),z=!!(T&&t&&q&&Z),G=(0,i.o8)(M.isValidating)?z:M.isValidating,H=(0,i.o8)(M.isLoading)?z:M.isLoading,K=(0,n.useCallback)(async e=>{let t,n;let u=k.current;if(!T||!u||b.current||C().isPaused())return!1;let a=!0,s=e||{},o=!p[T]||!s.dedupe,d=()=>i.w6?!b.current&&T===y.current&&_.current:T===y.current,c={isValidating:!1,isLoading:!1},f=()=>{j(c)},g=()=>{let e=p[T];e&&e[1]===n&&delete p[T]},E={isValidating:!0};(0,i.o8)(O().data)&&(E.isLoading=!0);try{if(o&&(j(E),r.loadingTimeout&&(0,i.o8)(O().data)&&setTimeout(()=>{a&&d()&&C().onLoadingSlow(T,r)},r.loadingTimeout),p[T]=[u(L),(0,i.u3)()]),[t,n]=p[T],t=await t,o&&setTimeout(g,r.dedupingInterval),!p[T]||p[T][1]!==n)return o&&d()&&C().onDiscarded(T),!1;c.error=i.i_;let e=h[T];if(!(0,i.o8)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return f(),o&&d()&&C().onDiscarded(T),!1;let s=O().data;c.data=l(s,t)?s:t,o&&d()&&C().onSuccess(t,T,r)}catch(r){g();let e=C(),{shouldRetryOnError:t}=e;!e.isPaused()&&(c.error=r,o&&d()&&(e.onError(r,T,e),(!0===t||(0,i.mf)(t)&&t(r))&&N()&&e.onErrorRetry(r,T,e,e=>{let t=R[T];t&&t[0]&&t[0](i.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(s.retryCount||0)+1,dedupe:!0})))}return a=!1,f(),!0},[T,o]),Q=(0,n.useCallback)((...e)=>(0,i.BN)(o,y.current,...e),[]);if((0,i.LI)(()=>{k.current=t,m.current=r,(0,i.o8)(U)||(B.current=U)}),(0,i.LI)(()=>{if(!T)return;let e=K.bind(i.i_,s),t=0,r=(0,i.ko)(T,R,(r,n={})=>{if(r==i.sj.FOCUS_EVENT){let r=Date.now();C().revalidateOnFocus&&r>t&&N()&&(t=r+C().focusThrottleInterval,e())}else if(r==i.sj.RECONNECT_EVENT)C().revalidateOnReconnect&&N()&&e();else if(r==i.sj.MUTATE_EVENT)return K();else if(r==i.sj.ERROR_REVALIDATE_EVENT)return K(n)});return b.current=!1,y.current=T,_.current=!0,j({_k:L}),Z&&((0,i.o8)(W)||i.W6?e():(0,i.kw)(e)),()=>{b.current=!0,r()}},[T]),(0,i.LI)(()=>{let e;function t(){let t=(0,i.mf)(E)?E(O().data):E;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!O().error&&(V||C().isVisible())&&(v||C().isOnline())?K(s).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[E,V,v,T]),(0,n.useDebugValue)(Y),d&&(0,i.o8)(W)&&T){if(!i.w6&&i.W6)throw Error("Fallback data is required when using suspense in SSR.");k.current=t,m.current=r,b.current=!1;let e=S[T];if(!(0,i.o8)(e)){let t=Q(e);a(t)}if((0,i.o8)($)){let e=K(s);(0,i.o8)(Y)||(e.status="fulfilled",e.value=!0),a(e)}else throw $}return{mutate:Q,get data(){return P.data=!0,Y},get error(){return P.error=!0,$},get isValidating(){return P.isValidating=!0,G},get isLoading(){return P.isLoading=!0,H}}})}}]);