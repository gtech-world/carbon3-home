(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6050:function(t,n,e){"use strict";var r,a,o,c=e(959);function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}n.Z=function(t){return c.createElement("svg",i({viewBox:"0 0 93 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r||(r=c.createElement("path",{d:"M17 23.5v-.004C16.956 11.082 27.05 1 39.5 1 51.946 1 62 11.08 62 23.5S51.901 46 39.5 46C27.054 46 17 35.92 17 23.5ZM30.62 56h19.76C66.76 56 80 69.08 80 85.209v1.964c0 1.215-.595 2.179-1.928 2.995-1.38.846-3.466 1.468-6.195 1.903-5.446.868-13.013.929-21.497.929H30.62c-8.491 0-16.055-.003-21.502-.842-2.73-.42-4.81-1.035-6.186-1.888C1.61 89.45 1 88.46 1 87.173v-1.964C1 69.079 14.241 56 30.62 56Z",stroke:"#000",strokeWidth:2})),a||(a=c.createElement("path",{d:"M55 62.957 73.48 55l18.48 7.957v14.98C90.112 84.488 87.802 91.978 73.48 99 59.066 91.885 55.154 81.993 55 77.936V62.957Z",fill:"#227A30",stroke:"#000",strokeWidth:2,strokeLinecap:"round"})),o||(o=c.createElement("path",{d:"M81.573 69.787a1 1 0 0 1 1.414 0l1.075 1.075a1 1 0 0 1 0 1.414L73.329 83.009a1.76 1.76 0 0 1-2.489 0l-6.333-6.333a1 1 0 0 1 0-1.415l1.075-1.074a1 1 0 0 1 1.414 0l4.381 4.38a1 1 0 0 0 1.414 0l8.782-8.78Z",fill:"#fff"})))}},9536:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return e(5155)}])},3152:function(t,n,e){"use strict";e.d(n,{z:function(){return c}});var r=e(1527),a=e(4875),o=e.n(a);function c(t){let{children:n,className:e,...a}=t;return(0,r.jsx)("button",{...a,className:o()(e,"hover:bg-green-28"),children:t.children})}},5666:function(t,n,e){"use strict";e.d(n,{Ii:function(){return w},RN:function(){return d},RS:function(){return p},Vd:function(){return m},Xg:function(){return x},aA:function(){return g},eO:function(){return f},ep:function(){return h},jw:function(){return l},x4:function(){return u}});var r=e(5032),a=e(8422),o=e(8622);function c(t){return"".concat(o.Sg).concat(t)}function i(t){let n=t.data;if(n){if(n.code&&200!==n.code)throw n.msg;return t.data}}async function u(t,n){let e=await a.Z.post(c("/api/v1/base/login"),{name:t,password:n});return i(e)}function s(){let t=(0,r.is)();return t?{headers:{Authorization:"Bearer ".concat(t.loginToken)}}:{}}async function l(){let t=await a.Z.get(c("/api/v1/npi/product/list"),s());return i(t)}async function p(t){let n=await a.Z.get(c("/api/v1/npi/product/".concat(t,"/pcf_accountable")),s());return i(n)}async function f(t){let n=await a.Z.get(c("/api/v1/npi/product/".concat(t,"/bom/list")),s());return i(n)}async function d(t){let n=await a.Z.get(c("/api/v1/npi/product_bom/".concat(t,"/activity_types")),s());return i(n)}async function m(t){let n=await a.Z.get(c("/api/v1/npi/product_process/query"),{...s(),params:{product_id:t,include_activity_types:!0}});return i(n)}async function h(t){let n=await a.Z.get(c("/api/v1/npi/product/serial_number/".concat(t,"/info")),s());return i(n)}async function w(t){let n=await a.Z.get(c("/api/v1/inventory/product/".concat(t,"/inventory")),s());return i(n)}async function x(t){let n=await a.Z.get(c("/api/v1/sbt/".concat(t,"/info")));return i(n)}async function g(t){let n=await a.Z.get(c("/api/v1/sbt/".concat(t,"/emission/inventory")));return i(n)}},5155:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return h}});var r=e(1527),a=e(3152),o=e(5032),c=e(6261),i=e(7162),u=e(2170),s=e(5666),l=e(6050),p=e(4166),f=e(959),d=e(2722),m=e(5309),h=function(){let{t}=(0,d.$G)(),n=(0,u.U)(),[e,h]=(0,f.useState)(""),w=(0,f.useCallback)(t=>{h(t.target.value||"")},[]),[x,g]=(0,f.useState)(""),v=(0,f.useCallback)(t=>{g(t.target.value||"")},[]),{push:b}=(0,p.useRouter)(),y=(0,o.h3)(),{setUser:_}=(0,o.aF)(),[k,Z]=(0,m.Z)(!1),C=()=>{if(!e||!x)return y("Please input account and password");Z(!0),(0,s.x4)(e,x).then(t=>{_(t),b("/dashboard").then(()=>Z(!1))}).catch(y).then(()=>Z(!1))};return(0,r.jsxs)(c.T$,{className:"flex flex-col items-center text-black",children:[(0,r.jsx)("button",{onClick:n,className:"self-start mb-[5.625rem] mo:hidden",children:"< ".concat(t("Back"))}),(0,r.jsx)(l.Z,{className:"h-[6.125rem] mo:mt-[5.125rem] mo:h-[5rem]"}),(0,r.jsx)("input",{value:e,type:"text",maxLength:24,onChange:w,onKeyDown:t=>"Enter"===t.code&&C(),placeholder:t("Account")||"",className:"outline-none w-full mt-[5.75rem] mb-5 max-w-[420px] min-h-[40px] h-[3.125rem] px-4 whitespace-nowrap rounded-lg mo:text-sm mo:px-5 mo:py-4",style:{border:"1px solid #DDDDDD",background:"#F8F8F8"}}),(0,r.jsx)("input",{value:x,type:"password",maxLength:32,onChange:v,onKeyDown:t=>"Enter"===t.code&&C(),placeholder:t("Password")||"",className:"outline-none w-full mb-5 max-w-[420px] min-h-[40px] h-[3.125rem] px-4 whitespace-nowrap rounded-lg mo:text-sm mo:px-5 mo:py-4",style:{border:"1px solid #DDDDDD",background:"#F8F8F8"}}),(0,r.jsx)(a.z,{onClick:C,className:"w-full max-w-[420px] min-h-[40px] h-[3.125rem] mb-40 text-center text-2xl text-white bg-green-2 rounded-lg mo:text-lg",children:t("Sign in")}),k&&(0,r.jsx)(i.I,{})]})}}},function(t){t.O(0,[893,439,54,57,507,23,261,774,888,179],function(){return t(t.s=9536)}),_N_E=t.O()}]);