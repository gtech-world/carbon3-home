(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6156],{9877:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oldTools/dashboard",function(){return n(1618)}])},7944:function(t,e,n){"use strict";n.d(e,{m:function(){return g}});var a=n(1527),r=n(3190),c=n(7007),o=n(1875),i=n(9270),s=n(4875),l=n.n(s),u=n(5688),d=n(9713),m=n(7202),p=n(5487),f=n(570);function x(t){const{children:e,className:n,tits:c,showQuery:o,isManager:s,...x}=t,{push:g}=(0,r.useRouter)(),h=(0,f.fo)();(0,i.dD)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:l()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem] justify-between",n),...x,children:[(0,a.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>g("/"),children:[(0,a.jsx)(u.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,a.jsx)(d.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,a.jsx)(m.R,{menus:h,children:(0,a.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,a.jsx)(p.otZ,{})})})]})})}function g(t){const{className:e,canBack:n,children:i,...s}=t,{push:u,pathname:d}=(0,r.useRouter)(),m=(0,c.R)();return(0,a.jsxs)("div",{className:"flex-1 w-full flex h-full flex-col min-h-fit bg-gray-16 relative",children:[(0,a.jsx)(x,{showQuery:!0,style:{top:"".concat(m,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,a.jsxs)("div",{className:"w-full max-w-[90rem] h-full mx-auto px-[60px] flex flex-col flex-1",children:[n&&(0,a.jsxs)("div",{className:"flex items-center my-5 text-sm cursor-pointer",onClick:()=>u("/carbon/service"),children:[(0,a.jsx)(o.YFh,{className:"text-lg"}),"\u8fd4\u56de"]}),(0,a.jsx)("div",{className:l()("flex flex-col",e),children:i})]})]})}},352:function(t,e,n){"use strict";n.d(e,{OZ:function(){return d}});var a=n(1527),r=n(9270),c=n(7361),o=n(4726),i=n(9080),s=n(818),l=n(8633),u=n(7944);function d(t){const e=(0,r.dD)();return(0,a.jsx)("div",{className:"text-lg whitespace-nowrap [&:nth-child(n+2)]:mt-6 mo:!mt-0 mo:text-[.9375rem] mo:whitespace-pre",children:e?(0,a.jsxs)("div",{className:"hidden whitespace-normal mo:block text-gray-6",children:[(0,a.jsxs)("span",{className:"text-black font-bold",children:[t.label,":"]})," ",t.text]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"text-black font-bold",children:t.label}),(0,a.jsx)("div",{className:"text-gray-6",children:t.text})]})})}function m(t){return(0,a.jsx)("a",{href:t.to,className:"inline-block underline whitespace-nowrap mr-5 leading-normal text-sm text-blue-0 mt-[.375rem] mo:mt-[.875rem]",children:t.text})}function p(t){const{data:e}=t,{t:n}=(0,l.$G)();return(0,a.jsxs)("div",{className:"bg-white rounded-lg overflow-hidden p-5 pb-8 mo:pb-5",children:[(0,a.jsx)("img",{className:"bg-transparent outline-none border-none w-full aspect-[2/1] object-contain",src:e.imageUrl||i.ES}),(0,a.jsx)("div",{className:"font-semibold text-lg text-black mo:text-base",children:e.displayName}),(0,a.jsxs)("div",{className:"w-full flex flex-wrap",children:[(0,a.jsx)(m,{to:"/tools/product?product_id=".concat(e.id),text:n("View Product Definition")}),(0,a.jsx)(m,{to:"/tools/activities?product_id=".concat(e.id),text:n("View PCF Template")}),(0,a.jsx)(m,{to:"/tools/pcf",text:n("Query PCF Data")})]})]})}e.ZP=function(){var t;const{user:e}=(0,r.aF)(),{value:n,loading:m}=(0,c.k)(o.jw),{t:f}=(0,l.$G)();return e?(0,a.jsx)(u.m,{className:"text-black",children:m?(0,a.jsx)(s.g,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:f("PROFILE")}),(0,a.jsxs)("div",{className:"mt-5 mb-8 w-full bg-white h-[21.5625rem] rounded-lg p-5 flex mo:flex-col mo:h-auto mo:p-[.9375rem] mo:mb-5",children:[(0,a.jsx)("img",{className:"object-scale-down h-full aspect-square bg-transparent rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:e.organization.imageUrl||i.hm}),(0,a.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:mt-5 mo:ml-0 mo:py-0",children:[(0,a.jsx)(d,{label:f("Organization"),text:e.organization.displayName}),(0,a.jsx)(d,{label:f("Orgnization Type"),text:e.organization.type}),(0,a.jsx)(d,{label:f("Site"),text:(null===(t=e.organization.sitList[0])||void 0===t?void 0:t.displayName)||"-"}),(0,a.jsx)(d,{label:f("Account Owner"),text:e.name})]}),(0,a.jsxs)("div",{className:"py-1 ml-[5rem] mo:ml-0 mo:py-0",children:[(0,a.jsx)(d,{label:f("Account Role"),text:e.role}),(0,a.jsx)(d,{label:f("Authorization Level"),text:0===e.authLevel?"Read-Only":"Read-Only / Specified Products"}),(0,a.jsx)(d,{label:f("Last Login"),text:e.lastLoginTime})]})]}),(0,a.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:f("TARGET INVENTORIES")}),n&&(0,a.jsx)("div",{className:"mt-5 w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))] mo:grid-cols-1",children:n.map(((t,e)=>(0,a.jsx)(p,{data:t},"product_item_".concat(e))))})]})}):null}},7361:function(t,e,n){"use strict";n.d(e,{k:function(){return c}});var a=n(959),r=n(6171);function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=(0,a.useRef)(!0),c=(0,a.useRef)(0),[,o]=(0,a.useState)(1),i=(0,a.useCallback)((t=>{n.current=t,o((t=>1-t))}),[]),[s,l]=(0,r.Z)(t,e),u=()=>{n.current||i(!0);const t=c.current+1>1e5?0:c.current+1;c.current=t,l().finally((()=>c.current==t&&i(!1)))};return(0,a.useEffect)((()=>{u()}),e),(0,a.useMemo)((()=>({...s,value:n.current||s.error?void 0:s.value,loading:n.current,req:u})),[s,n.current])}},4726:function(t,e,n){"use strict";n.d(e,{AC:function(){return R},BI:function(){return y},Ii:function(){return w},Iv:function(){return O},LW:function(){return S},Mt:function(){return _},Pf:function(){return l},Ps:function(){return Z},RN:function(){return x},RS:function(){return p},SO:function(){return b},Vd:function(){return g},av:function(){return N},eO:function(){return f},ep:function(){return h},fF:function(){return j},jw:function(){return m},pF:function(){return v},vz:function(){return k},x4:function(){return u}});var a=n(9270),r=n(8422),c=n(3993),o=n(3273);function i(t){return"".concat(c.Sg).concat(t)}function s(t){var e;const n=t.data;if(n){if(n.code&&1e5!==n.code)throw n.message;return null===(e=t.data)||void 0===e?void 0:e.data}}function l(t,e){return()=>e.some((t=>!t))?(0,o._v)():t()}async function u(t,e){return s(await r.Z.post(i("/api/base/login"),{name:t,password:e}))}function d(){const t=(0,a.is)();return t?{headers:{Authorization:"Bearer ".concat(t.loginToken)}}:{}}async function m(){return s(await r.Z.get(i("/api/npi/product/list"),d()))}async function p(t){return s(await r.Z.get(i("/api/npi/product/".concat(t,"/pcf_accountable")),d()))}async function f(t){return s(await r.Z.get(i("/api/npi/product/".concat(t,"/bom/list")),d()))}async function x(t){return s(await r.Z.get(i("/api/npi/product_bom/".concat(t,"/activity_types")),d()))}async function g(t){return s(await r.Z.get(i("/api/npi/product_process/query"),{...d(),params:{product_id:t,include_activity_types:!0}}))}async function h(t){return s(await r.Z.get(i("/api/npi/product/serial_number/".concat(t,"/info")),d()))}async function w(t){return s(await r.Z.get(i("/api/inventory/product/".concat(t,"/inventory")),d()))}async function y(t){let{pgNum:e,productId:n}=t;return s(await r.Z.get(i("/api/product-lca/model/query?pageNum=".concat(e,"&pageSize=10&productId=").concat(n>-1?n:"")),d()))}async function b(t){let{pgNum:e}=t;return s(await r.Z.get(i("/api/product-lca/result/query?pageNum=".concat(e,"&pageSize=10")),d()))}async function j(t){return s(await r.Z.get(i("/api/product-lca/result/detail/".concat(t)),d()))}async function v(t,e){return s(await r.Z.post(i("/api/product-lca/model/state/".concat(t,"/update/").concat(e)),null,d()))}async function N(t){let e=d();e.headers&&(e.headers["Content-Type"]="multipart/form-data");try{return await r.Z.post(i("/api/product-lca/model/upload"),t,e)}catch(n){console.log(n)}}async function Z(){return s(await r.Z.get(i("/api/product/category/query"),d()))}async function _(t){let{name:e,categoryId:n,orgId:a,description:c}=t;return s(await r.Z.post(i("/api/product/upsert"),{name:e,categoryId:n,orgId:a,partNumber:"1",imageUrl:"",description:c},d()))}async function k(){return s(await r.Z.get(i("/api/product/list?pageSize=500"),d()))}async function O(t){const e=await async function(t){const e=await r.Z.get(i("/api/product-lca/model/".concat(t,"/categories")),d());return JSON.parse(s(e))}(t),n=await async function(t){const e=await r.Z.get(i("/api/product-lca/model/".concat(t,"/descriptors")),d());return JSON.parse(s(e))}(t);return[e,n]}async function R(t,e,n){const a=await r.Z.get(i("/api/product-lca/model/".concat(t,"/item/").concat(e,"/").concat(n,"/info")),d());return JSON.parse(s(a))}async function S(t){let e=d();return await r.Z.get(i("/api/product-lca/result/".concat(t,"/export")),Object.assign(e,{responseType:"blob"}))}},1618:function(t,e,n){"use strict";n.r(e);var a=n(352);e.default=a.ZP}},function(t){t.O(0,[713,769,7307,6574,1015,570,9774,2888,179],(function(){return e=9877,t(t.s=e);var e}));var e=t.O();_N_E=e}]);