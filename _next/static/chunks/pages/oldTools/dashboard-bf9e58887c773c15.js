(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[156],{9877:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oldTools/dashboard",function(){return n(1618)}])},7944:function(t,e,n){"use strict";n.d(e,{m:function(){return g}});var r=n(1527),a=n(3190),c=n(7007),o=n(1875),i=n(9270),u=n(4875),s=n.n(u),l=n(5688),d=n(9713),p=n(7202),m=n(5487),f=n(570);function x(t){const{children:e,className:n,tits:c,showQuery:o,isManager:u,...x}=t,{push:g}=(0,a.useRouter)(),h=(0,f.fo)();(0,i.dD)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:s()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem] justify-between",n),...x,children:[(0,r.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>g("/"),children:[(0,r.jsx)(l.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,r.jsx)(d.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,r.jsx)(p.R,{menus:h,children:(0,r.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,r.jsx)(m.otZ,{})})})]})})}function g(t){const{className:e,canBack:n,children:i,...u}=t,{push:l,pathname:d}=(0,a.useRouter)(),p=(0,c.R)();return(0,r.jsxs)("div",{className:"flex-1 w-full flex h-full flex-col min-h-fit bg-gray-16 relative",children:[(0,r.jsx)(x,{showQuery:!0,style:{top:"".concat(p,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,r.jsxs)("div",{className:"w-full max-w-[90rem] h-full mx-auto px-[60px] flex flex-col flex-1",children:[n&&(0,r.jsxs)("div",{className:"flex items-center my-5 text-sm cursor-pointer",onClick:()=>l("/carbon/service"),children:[(0,r.jsx)(o.YFh,{className:"text-lg"}),"\u8fd4\u56de"]}),(0,r.jsx)("div",{className:s()("flex flex-col",e),children:i})]})]})}},352:function(t,e,n){"use strict";n.d(e,{OZ:function(){return d}});var r=n(1527),a=n(9270),c=n(7361),o=n(4726),i=n(9080),u=n(818),s=n(8633),l=n(7944);function d(t){const e=(0,a.dD)();return(0,r.jsx)("div",{className:"text-lg whitespace-nowrap [&:nth-child(n+2)]:mt-6 mo:!mt-0 mo:text-[.9375rem] mo:whitespace-pre",children:e?(0,r.jsxs)("div",{className:"hidden whitespace-normal mo:block text-gray-6",children:[(0,r.jsxs)("span",{className:"text-black font-bold",children:[t.label,":"]})," ",t.text]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-black font-bold",children:t.label}),(0,r.jsx)("div",{className:"text-gray-6",children:t.text})]})})}function p(t){return(0,r.jsx)("a",{href:t.to,className:"inline-block underline whitespace-nowrap mr-5 leading-normal text-sm text-blue-0 mt-[.375rem] mo:mt-[.875rem]",children:t.text})}function m(t){const{data:e}=t,{t:n}=(0,s.$G)();return(0,r.jsxs)("div",{className:"bg-white rounded-lg overflow-hidden p-5 pb-8 mo:pb-5",children:[(0,r.jsx)("img",{className:"bg-transparent outline-none border-none w-full aspect-[2/1] object-contain",src:e.imageUrl||i.ES}),(0,r.jsx)("div",{className:"font-semibold text-lg text-black mo:text-base",children:e.displayName}),(0,r.jsxs)("div",{className:"w-full flex flex-wrap",children:[(0,r.jsx)(p,{to:"/tools/product?product_id=".concat(e.id),text:n("View Product Definition")}),(0,r.jsx)(p,{to:"/tools/activities?product_id=".concat(e.id),text:n("View PCF Template")}),(0,r.jsx)(p,{to:"/tools/pcf",text:n("Query PCF Data")})]})]})}e.ZP=function(){var t;const{user:e}=(0,a.aF)(),{value:n,loading:p}=(0,c.k)(o.jw),{t:f}=(0,s.$G)();return e?(0,r.jsx)(l.m,{className:"text-black",children:p?(0,r.jsx)(u.g,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:f("PROFILE")}),(0,r.jsxs)("div",{className:"mt-5 mb-8 w-full bg-white h-[21.5625rem] rounded-lg p-5 flex mo:flex-col mo:h-auto mo:p-[.9375rem] mo:mb-5",children:[(0,r.jsx)("img",{className:"object-scale-down h-full aspect-square bg-transparent rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:e.organization.imageUrl||i.hm}),(0,r.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:mt-5 mo:ml-0 mo:py-0",children:[(0,r.jsx)(d,{label:f("Organization"),text:e.organization.displayName}),(0,r.jsx)(d,{label:f("Orgnization Type"),text:e.organization.type}),(0,r.jsx)(d,{label:f("Site"),text:(null===(t=e.organization.sitList[0])||void 0===t?void 0:t.displayName)||"-"}),(0,r.jsx)(d,{label:f("Account Owner"),text:e.name})]}),(0,r.jsxs)("div",{className:"py-1 ml-[5rem] mo:ml-0 mo:py-0",children:[(0,r.jsx)(d,{label:f("Account Role"),text:e.role}),(0,r.jsx)(d,{label:f("Authorization Level"),text:0===e.authLevel?"Read-Only":"Read-Only / Specified Products"}),(0,r.jsx)(d,{label:f("Last Login"),text:e.lastLoginTime})]})]}),(0,r.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:f("TARGET INVENTORIES")}),n&&(0,r.jsx)("div",{className:"mt-5 w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))] mo:grid-cols-1",children:n.map(((t,e)=>(0,r.jsx)(m,{data:t},"product_item_".concat(e))))})]})}):null}},7361:function(t,e,n){"use strict";n.d(e,{k:function(){return c}});var r=n(959),a=n(6171);function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=(0,r.useRef)(!0),c=(0,r.useRef)(0),[,o]=(0,r.useState)(1),i=(0,r.useCallback)((t=>{n.current=t,o((t=>1-t))}),[]),[u,s]=(0,a.Z)(t,e),l=()=>{n.current||i(!0);const t=c.current+1>1e5?0:c.current+1;c.current=t,s().finally((()=>c.current==t&&i(!1)))};return(0,r.useEffect)((()=>{l()}),e),(0,r.useMemo)((()=>({...u,value:n.current||u.error?void 0:u.value,loading:n.current,req:l})),[u,n.current])}},4726:function(t,e,n){"use strict";n.d(e,{AC:function(){return R},BI:function(){return v},Ii:function(){return y},Iv:function(){return k},LW:function(){return S},Mt:function(){return Z},Pf:function(){return s},Ps:function(){return _},RN:function(){return x},RS:function(){return m},SO:function(){return w},Vd:function(){return g},av:function(){return N},eO:function(){return f},ep:function(){return h},fF:function(){return b},jw:function(){return p},pF:function(){return j},vz:function(){return O},x4:function(){return l}});var r=n(9270),a=n(8422),c=n(3993),o=n(3273);function i(t){return"".concat(c.Sg).concat(t)}function u(t){var e;const n=t.data;if(n){if(n.code&&1e5!==n.code)throw n.message;return null===(e=t.data)||void 0===e?void 0:e.data}}function s(t,e){return()=>e.some((t=>!t))?(0,o._v)():t()}async function l(t,e){return u(await a.Z.post(i("/api/base/login"),{name:t,password:e}))}function d(){const t=(0,r.is)();return t?{headers:{Authorization:"Bearer ".concat(t.loginToken)}}:{}}async function p(){return u(await a.Z.get(i("/api/npi/product/list"),d()))}async function m(t){return u(await a.Z.get(i("/api/npi/product/".concat(t,"/pcf_accountable")),d()))}async function f(t){return u(await a.Z.get(i("/api/npi/product/".concat(t,"/bom/list")),d()))}async function x(t){return u(await a.Z.get(i("/api/npi/product_bom/".concat(t,"/activity_types")),d()))}async function g(t){return u(await a.Z.get(i("/api/npi/product_process/query"),{...d(),params:{product_id:t,include_activity_types:!0}}))}async function h(t){return u(await a.Z.get(i("/api/npi/product/serial_number/".concat(t,"/info")),d()))}async function y(t){return u(await a.Z.get(i("/api/inventory/product/".concat(t,"/inventory")),d()))}async function v(t){let{pgNum:e,productId:n}=t;return u(await a.Z.get(i("/api/product-lca/model/query?pageNum=".concat(e,"&pageSize=10&productId=").concat(n>-1?n:"")),d()))}async function w(t){let{pgNum:e}=t;return u(await a.Z.get(i("/api/product-lca/result/query?pageNum=".concat(e,"&pageSize=10")),d()))}async function b(t){return u(await a.Z.get(i("/api/product-lca/result/detail/".concat(t)),d()))}async function j(t,e){return u(await a.Z.post(i("/api/product-lca/model/state/".concat(t,"/update/").concat(e)),null,d()))}async function N(t){let e=d();e.headers&&(e.headers["Content-Type"]="multipart/form-data");try{return await a.Z.post(i("/api/product-lca/model/upload"),t,e)}catch(n){console.log(n)}}async function _(){return u(await a.Z.get(i("/api/product/category/query"),d()))}async function Z(t){let{name:e,categoryId:n,orgId:r,description:c}=t;return u(await a.Z.post(i("/api/product/upsert"),{name:e,categoryId:n,orgId:r,partNumber:"1",imageUrl:"",description:c},d()))}async function O(){return u(await a.Z.get(i("/api/product/list?pageSize=500"),d()))}async function k(t){const e=await async function(t){const e=await a.Z.get(i("/api/product-lca/model/".concat(t,"/categories")),d());return JSON.parse(u(e))}(t),n=await async function(t){const e=await a.Z.get(i("/api/product-lca/model/".concat(t,"/descriptors")),d());return JSON.parse(u(e))}(t);return[e,n]}async function R(t,e,n){const r=await a.Z.get(i("/api/product-lca/model/".concat(t,"/item/").concat(e,"/").concat(n,"/info")),d());return JSON.parse(u(r))}async function S(t){let e=d();return await a.Z.get(i("/api/product-lca/result/".concat(t,"/export")),Object.assign(e,{responseType:"blob"}))}},1618:function(t,e,n){"use strict";n.r(e);var r=n(352);e.default=r.ZP},6171:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(677),a=n(959);function c(t,e,n){void 0===e&&(e=[]),void 0===n&&(n={loading:!1});var c=(0,a.useRef)(0),o=function(){var t=(0,a.useRef)(!1),e=(0,a.useCallback)((function(){return t.current}),[]);return(0,a.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]),e}(),i=(0,a.useState)(n),u=i[0],s=i[1],l=(0,a.useCallback)((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var a=++c.current;return u.loading||s((function(t){return(0,r.pi)((0,r.pi)({},t),{loading:!0})})),t.apply(void 0,e).then((function(t){return o()&&a===c.current&&s({value:t,loading:!1}),t}),(function(t){return o()&&a===c.current&&s({error:t,loading:!1}),t}))}),e);return[u,l]}},9592:function(t,e,n){"use strict";var r=n(959),a=function(t,e){return"boolean"===typeof e?e:!t};e.Z=function(t){return(0,r.useReducer)(a,t)}},677:function(t,e,n){"use strict";n.d(e,{ZT:function(){return a},pi:function(){return c}});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var c=function(){return c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},c.apply(this,arguments)};Object.create;Object.create}},function(t){t.O(0,[713,769,307,574,570,774,888,179],(function(){return e=9877,t(t.s=e);var e}));var e=t.O();_N_E=e}]);