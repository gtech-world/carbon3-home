"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18],{7944:function(t,e,n){n.d(e,{m:function(){return g}});var r=n(1527),c=n(3190),a=n(7007),i=n(1875),o=n(9270),s=n(4875),u=n.n(s),l=n(5688),p=n(9713),d=n(9441),f=n(7202),m=n(5487),x=n(570);function h(t){const{children:e,className:n,tits:a,showQuery:i,isManager:s,...h}=t,{push:g}=(0,c.useRouter)(),y=(0,x.fo)(),v=(0,o.dD)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:u()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem] justify-between",n),...h,children:[v?(0,r.jsx)("div",{children:(0,r.jsxs)("button",{className:"flex items-center",onClick:()=>{g("/carbon/service")},children:[(0,r.jsx)(d.u1R,{className:"text-2xl"}),(0,r.jsx)("span",{className:"text-lg",children:"\u6211\u7684\u78b3\u670d\u52a1"})]})}):(0,r.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>g("/"),children:[(0,r.jsx)(l.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,r.jsx)(p.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,r.jsx)(f.R,{menus:y,children:(0,r.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,r.jsx)(m.otZ,{})})})]})})}function g(t){const{className:e,canBack:n,children:o,...s}=t,{push:l,pathname:p}=(0,c.useRouter)(),d=(0,a.R)();return(0,r.jsxs)("div",{className:"flex-1 w-full flex h-full flex-col min-h-fit bg-gray-16 relative",children:[(0,r.jsx)(h,{showQuery:!0,style:{top:"".concat(d,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,r.jsxs)("div",{className:"w-full max-w-[90rem] h-full mx-auto px-[60px] flex flex-col flex-1",children:[n&&(0,r.jsxs)("div",{className:"flex items-center my-5 text-sm cursor-pointer",onClick:()=>l("/carbon/service"),children:[(0,r.jsx)(i.YFh,{className:"text-lg"}),"\u8fd4\u56de"]}),(0,r.jsx)("div",{className:u()("flex flex-col",e),children:o})]})]})}},1004:function(t,e,n){n.d(e,{L6:function(){return o},Zx:function(){return s}});var r=n(1527),c=n(4875),a=n.n(c);function i(t){const{txt:e,type:n,className:c,...i}=t;return(0,r.jsx)("div",{...i,className:a()(c,"px-[5px] py-[2px] rounded text-xs text-white",{"bg-blue-0":"blue"===n,"bg-orange-16":"orange"===n}),children:e})}function o(t){const{title:e,sub:n,badge:c=[]}=t;return(0,r.jsxs)("div",{style:{border:"1px solid #000000"},className:a()("rounded-lg py-3 pl-3 pr-4 w-full overflow-hidden [&:nth-child(n+2)]:mt-5"),children:[(0,r.jsx)("div",{className:"text-black text-base w-full overflow-hidden whitespace-nowrap text-ellipsis",children:e}),(0,r.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,r.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:n}),c.map(((t,e)=>(0,r.jsx)(i,{style:{marginLeft:6},className:"shrink-0",...t},"attrs1_badge_".concat(e))))]})]})}function s(t){const{title:e,sub:n,badge:c=[],tit_r:o}=t;return(0,r.jsxs)("div",{className:a()("rounded-lg py-3 pl-3 pr-[.4375rem] w-full overflow-hidden [&:nth-child(2n+1)]:bg-gray-16"),children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"text-black text-base overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:e}),(0,r.jsx)("div",{className:"flex-1"}),void 0!==o&&(0,r.jsx)("div",{className:"shrink-0 whitespace-nowrap text-sm font-semibold text-green-2",children:o})]}),(0,r.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,r.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:n}),(0,r.jsx)("div",{className:"flex-1"}),c.map(((t,e)=>(0,r.jsx)(i,{style:{marginLeft:6},className:"shrink-0",...t},"attrs1_badge_".concat(e))))]})]})}},7361:function(t,e,n){n.d(e,{k:function(){return a}});var r=n(959),c=n(6171);function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=(0,r.useRef)(!0),a=(0,r.useRef)(0),[,i]=(0,r.useState)(1),o=(0,r.useCallback)((t=>{n.current=t,i((t=>1-t))}),[]),[s,u]=(0,c.Z)(t,e),l=()=>{n.current||o(!0);const t=a.current+1>1e5?0:a.current+1;a.current=t,u().finally((()=>a.current==t&&o(!1)))};return(0,r.useEffect)((()=>{l()}),e),(0,r.useMemo)((()=>({...s,value:n.current||s.error?void 0:s.value,loading:n.current,req:l})),[s,n.current])}},4726:function(t,e,n){n.d(e,{AC:function(){return S},BI:function(){return v},Ii:function(){return y},Iv:function(){return O},Mt:function(){return _},Pf:function(){return u},Ps:function(){return Z},RN:function(){return x},RS:function(){return f},SO:function(){return w},Vd:function(){return h},av:function(){return j},eO:function(){return m},ep:function(){return g},fF:function(){return N},jw:function(){return d},pF:function(){return b},vz:function(){return k},x4:function(){return l}});var r=n(9270),c=n(8422),a=n(3993),i=n(3273);function o(t){return"".concat(a.Sg).concat(t)}function s(t){var e;const n=t.data;if(n){if(n.code&&1e5!==n.code)throw n.message;return null===(e=t.data)||void 0===e?void 0:e.data}}function u(t,e){return()=>e.some((t=>!t))?(0,i._v)():t()}async function l(t,e){return s(await c.Z.post(o("/api/base/login"),{name:t,password:e}))}function p(){const t=(0,r.is)();return t?{headers:{Authorization:"Bearer ".concat(t.loginToken)}}:{}}async function d(){return s(await c.Z.get(o("/api/npi/product/list"),p()))}async function f(t){return s(await c.Z.get(o("/api/npi/product/".concat(t,"/pcf_accountable")),p()))}async function m(t){return s(await c.Z.get(o("/api/npi/product/".concat(t,"/bom/list")),p()))}async function x(t){return s(await c.Z.get(o("/api/npi/product_bom/".concat(t,"/activity_types")),p()))}async function h(t){return s(await c.Z.get(o("/api/npi/product_process/query"),{...p(),params:{product_id:t,include_activity_types:!0}}))}async function g(t){return s(await c.Z.get(o("/api/npi/product/serial_number/".concat(t,"/info")),p()))}async function y(t){return s(await c.Z.get(o("/api/inventory/product/".concat(t,"/inventory")),p()))}async function v(t){let{pgNum:e,productId:n}=t;return s(await c.Z.get(o("/api/product-lca/model/query?pageNum=".concat(e,"&pageSize=10&productId=").concat(n>-1?n:"")),p()))}async function w(t){let{pgNum:e}=t;return s(await c.Z.get(o("/api/product-lca/result/query?pageNum=".concat(e,"&pageSize=10")),p()))}async function N(t){return s(await c.Z.get(o("/api/product-lca/result/detail/".concat(t)),p()))}async function b(t,e){return s(await c.Z.post(o("/api/product-lca/model/state/".concat(t,"/update/").concat(e)),null,p()))}async function j(t){let e=p();e.headers&&(e.headers["Content-Type"]="multipart/form-data");try{return await c.Z.post(o("/api/product-lca/model/upload"),t,e)}catch(n){console.log(n)}}async function Z(){return s(await c.Z.get(o("/api/product/category/query"),p()))}async function _(t){let{name:e,categoryId:n,orgId:r,description:a}=t;return s(await c.Z.post(o("/api/product/upsert"),{name:e,categoryId:n,orgId:r,partNumber:"1",imageUrl:"",description:a},p()))}async function k(){return s(await c.Z.get(o("/api/product/list?pageSize=500"),p()))}async function O(t){const e=await async function(t){const e=await c.Z.get(o("/api/product-lca/model/".concat(t,"/categories")),p());return JSON.parse(s(e))}(t),n=await async function(t){const e=await c.Z.get(o("/api/product-lca/model/".concat(t,"/descriptors")),p());return JSON.parse(s(e))}(t);return[e,n]}async function S(t,e,n){const r=await c.Z.get(o("/api/product-lca/model/".concat(t,"/item/").concat(e,"/").concat(n,"/info")),p());return JSON.parse(s(r))}},6171:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(677),c=n(959);function a(t,e,n){void 0===e&&(e=[]),void 0===n&&(n={loading:!1});var a=(0,c.useRef)(0),i=function(){var t=(0,c.useRef)(!1),e=(0,c.useCallback)((function(){return t.current}),[]);return(0,c.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]),e}(),o=(0,c.useState)(n),s=o[0],u=o[1],l=(0,c.useCallback)((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var c=++a.current;return s.loading||u((function(t){return(0,r.pi)((0,r.pi)({},t),{loading:!0})})),t.apply(void 0,e).then((function(t){return i()&&c===a.current&&u({value:t,loading:!1}),t}),(function(t){return i()&&c===a.current&&u({error:t,loading:!1}),t}))}),e);return[s,l]}},677:function(t,e,n){n.d(e,{ZT:function(){return c},pi:function(){return a}});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var c in e=arguments[n])Object.prototype.hasOwnProperty.call(e,c)&&(t[c]=e[c]);return t},a.apply(this,arguments)};Object.create;Object.create}}]);