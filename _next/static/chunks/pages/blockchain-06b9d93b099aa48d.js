(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{8626:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blockchain",function(){return r(5916)}])},7361:function(n,e,r){"use strict";r.d(e,{k:function(){return c}});var t=r(959),u=r(7077);function c(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=(0,t.useRef)(!0),c=(0,t.useRef)(0),[,o]=(0,t.useState)(1),i=(0,t.useCallback)(n=>{r.current=n,o(n=>1-n)},[]),[f,a]=(0,u.Z)(n,e),s=()=>{r.current||i(!0);let n=c.current+1>1e5?0:c.current+1;c.current=n,a().finally(()=>c.current==n&&i(!1))};return(0,t.useEffect)(()=>{s()},e),(0,t.useMemo)(()=>({...f,value:r.current||f.error?void 0:f.value,loading:r.current,req:s}),[f,r.current])}},5916:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return a}});var t=r(1527),u=r(7361),c=r(4726);r(959);var o=r(818),i=r(168),f=r(3190),a=function(){let{query:n}=(0,f.useRouter)(),e=n.tokenId,{value:r,loading:a}=(0,u.k)((0,c.Pf)(()=>(0,c.Cd)(e),[e]),[e]);return(0,t.jsx)("div",{className:"bg-gray-16 flex-1 flex flex-col w-full min-h-fit text-black",children:(0,t.jsx)(i.T$,{className:"",children:a?(0,t.jsx)(o.g,{}):(0,t.jsx)("div",{className:"w-full p-5 max-w-[1480px] mx-auto mo:p-0"})})})}},7077:function(n,e,r){"use strict";r.d(e,{Z:function(){return c}});var t=function(){return(t=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var u in e=arguments[r])Object.prototype.hasOwnProperty.call(e,u)&&(n[u]=e[u]);return n}).apply(this,arguments)},u=r(959);function c(n,e,r){void 0===e&&(e=[]),void 0===r&&(r={loading:!1});var c,o,i=(0,u.useRef)(0),f=(c=(0,u.useRef)(!1),o=(0,u.useCallback)(function(){return c.current},[]),(0,u.useEffect)(function(){return c.current=!0,function(){c.current=!1}},[]),o),a=(0,u.useState)(r),s=a[0],l=a[1],v=(0,u.useCallback)(function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var u=++i.current;return s.loading||l(function(n){return t(t({},n),{loading:!0})}),n.apply(void 0,e).then(function(n){return f()&&u===i.current&&l({value:n,loading:!1}),n},function(n){return f()&&u===i.current&&l({error:n,loading:!1}),n})},e);return[s,v]}},8723:function(n,e,r){"use strict";r.d(e,{Z:function(){return c}});var t=r(959),u=["mousedown","touchstart"],c=function(n,e,r){void 0===r&&(r=u);var c=(0,t.useRef)(e);(0,t.useEffect)(function(){c.current=e},[e]),(0,t.useEffect)(function(){for(var e=function(e){var r=n.current;r&&!r.contains(e.target)&&c.current(e)},t=0,u=r;t<u.length;t++){var o=u[t];!function(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];n&&n.addEventListener&&n.addEventListener.apply(n,e)}(document,o,e)}return function(){for(var n=0,t=r;n<t.length;n++){var u=t[n];!function(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];n&&n.removeEventListener&&n.removeEventListener.apply(n,e)}(document,u,e)}}},[r,n])}},9592:function(n,e,r){"use strict";var t=r(959),u=function(n,e){return"boolean"==typeof e?e:!n};e.Z=function(n){return(0,t.useReducer)(u,n)}}},function(n){n.O(0,[439,930,13,222,294,774,888,179],function(){return n(n.s=8626)}),_N_E=n.O()}]);