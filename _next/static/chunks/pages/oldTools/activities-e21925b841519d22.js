(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[927],{9534:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oldTools/activities",function(){return n(7677)}])},9299:function(e,t,n){"use strict";n.d(t,{Wc:function(){return a},cM:function(){return c},vz:function(){return i}});var r=n(1527),s=n(959);const c=(0,s.createContext)({activity:null,sourcing:0,update:()=>{}});function i(){return(0,s.useContext)(c)}function a(e){const[t,n]=(0,s.useState)({activity:null,sourcing:0,...e.init});(0,s.useEffect)((()=>{n((t=>({...t,...e.init})))}),[e.init]);const i=(0,s.useCallback)((e=>{n((t=>({...t,...e})))}),[]);return(0,r.jsx)(c.Provider,{value:{...t,update:i},children:e.children})}},3702:function(e,t,n){"use strict";n.d(t,{f:function(){return p}});var r=n(1527),s=n(3046),c=n(3273),i=n(4875),a=n.n(i),o=n(959),l=n(8633),u=n(7067),d=n(9592),m=n(1004);function x(e){const{t:t}=(0,l.$G)(),{data:n,onBack:i}=e,a=n;return(0,r.jsxs)(s.u_,{children:[(0,r.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,r.jsx)("button",{className:"text-2xl",onClick:i,children:(0,r.jsx)(u.$Ku,{})}),(0,r.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:n.name}),(0,r.jsx)("div",{className:"w-6"})]}),(0,r.jsxs)("div",{className:"p-5 w-full",children:[(0,r.jsx)("div",{className:"bg-white leading-normal text-black text-base font-semibold w-full whitespace-normal",children:n.name}),void 0!==a.carbon_emission&&(0,r.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat(t("Total"),": ").concat((0,c.HN)(a.carbon_emission)," / ").concat(a.activityTypes.length," ").concat(t("items"))}),(0,r.jsx)("div",{className:"w-full mt-5",children:a.activityTypes.map(((e,t)=>(0,r.jsx)(m.Zx,{title:"#".concat(t+1," ").concat(e.displayName),tit_r:void 0===e.carbon_emission?void 0:"".concat((0,c.HN)(e.carbon_emission)),sub:e.description},"attrs_source_".concat(t))))})]})]})}function f(e){const{data:t,index:n}=e,[s,i]=(0,d.Z)(!1),o=t,{t:m}=(0,l.$G)();return(0,r.jsxs)("div",{className:"w-full min-h-[4.5rem] cursor-pointer p-3 flex flex-col justify-center border border-solid border-black rounded-lg",style:{marginTop:n>0?"1.25rem":"0px"},onClick:()=>i(!0),children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsxs)("div",{className:"w-0 flex-1",children:[(0,r.jsx)("div",{style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},className:a()("grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis"),children:t.name}),void 0!==o.carbon_emission&&(0,r.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat((0,c.HN)(o.carbon_emission)," / ").concat(o.activityTypes.length," ").concat(m("items"))})]}),(0,r.jsx)(u.mzm,{className:"text-2xl"})]}),s&&(0,r.jsx)(x,{data:t,onBack:e=>{i(!1),e.stopPropagation()}})]})}function p(e){const{data:t,onBack:n}=e,{t:c}=(0,l.$G)();return(0,r.jsxs)(s.u_,{children:[(0,r.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,r.jsx)("button",{className:"text-2xl",onClick:n,children:(0,r.jsx)(u.$Ku,{})}),(0,r.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:c(t.name)}),(0,r.jsx)("div",{className:"w-6"})]}),(0,r.jsx)("div",{className:"p-5 w-full",children:t.processList.map(((e,t)=>(0,r.jsx)(o.Fragment,{children:(0,r.jsx)(f,{data:e,index:t})},"sourcing_item_".concat(t))))})]})}},8503:function(e,t,n){"use strict";n.d(t,{P:function(){return m},d:function(){return d}});var r=n(1527),s=n(2132),c=n(4875),i=n.n(c),a=n(959),o=n(7067),l=n(9592),u=n(8723);function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const[n,r]=(0,a.useState)(t);return(0,a.useEffect)((()=>{r(t)}),[e,t]),{onChange:r,items:e,current:n}}function m(e){const{items:t,current:n,onChange:c,className:d}=e,m=t[n]?t[n].text:"",[x,f]=(0,l.Z)(!1),p=(0,a.useCallback)((e=>{n!==e&&c(e)}),[n]),h=(0,s.E)("t-side");return(0,u.Z)(h,(()=>x&&f(!1))),0===t.length?null:(0,r.jsxs)("div",{ref:h,className:i()("bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",d),onClick:()=>f(),children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("span",{children:m}),x?(0,r.jsx)(o.pzk,{}):(0,r.jsx)(o._i7,{})]}),x&&(0,r.jsx)("div",{className:"absolute left-0 w-full bg-white rounded-lg overflow-hidden py-3",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:t.map(((e,t)=>(0,r.jsx)("div",{style:{},className:i()("w-full px-5 py-2 text-sm",{"text-green-2":t===n}),onClick:()=>p(t),children:e.text},"select_item_".concat(t))))})]})}},7944:function(e,t,n){"use strict";n.d(t,{m:function(){return v}});var r=n(1527),s=n(3190),c=n(7007),i=n(1875),a=n(9270),o=n(4875),l=n.n(o),u=n(5688),d=n(9713),m=n(9441),x=n(7202),f=n(5487),p=n(570);function h(e){const{children:t,className:n,tits:c,showQuery:i,isManager:o,...h}=e,{push:v}=(0,s.useRouter)(),g=(0,p.fo)(),w=(0,a.dD)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:l()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem] justify-between",n),...h,children:[w?(0,r.jsx)("div",{children:(0,r.jsxs)("button",{className:"flex items-center",onClick:()=>{v("/carbon/service")},children:[(0,r.jsx)(m.u1R,{className:"text-2xl"}),(0,r.jsx)("span",{className:"text-lg",children:"\u6211\u7684\u78b3\u670d\u52a1"})]})}):(0,r.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>v("/"),children:[(0,r.jsx)(u.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,r.jsx)(d.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,r.jsx)(x.R,{menus:g,children:(0,r.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,r.jsx)(f.otZ,{})})})]})})}function v(e){const{className:t,canBack:n,children:a,...o}=e,{push:u,pathname:d}=(0,s.useRouter)(),m=(0,c.R)();return(0,r.jsxs)("div",{className:"flex-1 w-full flex h-full flex-col min-h-fit bg-gray-16 relative",children:[(0,r.jsx)(h,{showQuery:!0,style:{top:"".concat(m,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,r.jsxs)("div",{className:"w-full max-w-[90rem] h-full mx-auto px-[60px] flex flex-col flex-1",children:[n&&(0,r.jsxs)("div",{className:"flex items-center my-5 text-sm cursor-pointer",onClick:()=>u("/carbon/service"),children:[(0,r.jsx)(i.YFh,{className:"text-lg"}),"\u8fd4\u56de"]}),(0,r.jsx)("div",{className:l()("flex flex-col",t),children:a})]})]})}},1004:function(e,t,n){"use strict";n.d(t,{L6:function(){return a},Zx:function(){return o}});var r=n(1527),s=n(4875),c=n.n(s);function i(e){const{txt:t,type:n,className:s,...i}=e;return(0,r.jsx)("div",{...i,className:c()(s,"px-[5px] py-[2px] rounded text-xs text-white",{"bg-blue-0":"blue"===n,"bg-orange-16":"orange"===n}),children:t})}function a(e){const{title:t,sub:n,badge:s=[]}=e;return(0,r.jsxs)("div",{style:{border:"1px solid #000000"},className:c()("rounded-lg py-3 pl-3 pr-4 w-full overflow-hidden [&:nth-child(n+2)]:mt-5"),children:[(0,r.jsx)("div",{className:"text-black text-base w-full overflow-hidden whitespace-nowrap text-ellipsis",children:t}),(0,r.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,r.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:n}),s.map(((e,t)=>(0,r.jsx)(i,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t))))]})]})}function o(e){const{title:t,sub:n,badge:s=[],tit_r:a}=e;return(0,r.jsxs)("div",{className:c()("rounded-lg py-3 pl-3 pr-[.4375rem] w-full overflow-hidden [&:nth-child(2n+1)]:bg-gray-16"),children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"text-black text-base overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:t}),(0,r.jsx)("div",{className:"flex-1"}),void 0!==a&&(0,r.jsx)("div",{className:"shrink-0 whitespace-nowrap text-sm font-semibold text-green-2",children:a})]}),(0,r.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,r.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:n}),(0,r.jsx)("div",{className:"flex-1"}),s.map(((e,t)=>(0,r.jsx)(i,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t))))]})]})}},7361:function(e,t,n){"use strict";n.d(t,{k:function(){return c}});var r=n(959),s=n(6171);function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=(0,r.useRef)(!0),c=(0,r.useRef)(0),[,i]=(0,r.useState)(1),a=(0,r.useCallback)((e=>{n.current=e,i((e=>1-e))}),[]),[o,l]=(0,s.Z)(e,t),u=()=>{n.current||a(!0);const e=c.current+1>1e5?0:c.current+1;c.current=e,l().finally((()=>c.current==e&&a(!1)))};return(0,r.useEffect)((()=>{u()}),t),(0,r.useMemo)((()=>({...o,value:n.current||o.error?void 0:o.value,loading:n.current,req:u})),[o,n.current])}},8416:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var r=n(8503),s=n(7361),c=n(4726),i=n(3190),a=n(959);function o(){const{value:e,loading:t}=(0,s.k)(c.jw),n=(0,a.useMemo)((()=>(e||[]).map((e=>({...e,text:e.displayName})))),[e]),{query:o}=(0,i.useRouter)(),l=(0,a.useMemo)((()=>{const e=o.product_id;if(e){const t=n.findIndex((t=>"".concat(t.id)==e));if(t>=0)return t}return 0}),[o,n]),{current:u,items:d,onChange:m}=(0,r.d)(n,l),x=n[u];return{products:e,current:u,items:d,onChange:m,current_product:x,loading:t}}},4726:function(e,t,n){"use strict";n.d(t,{AC:function(){return O},BI:function(){return w},Ii:function(){return g},Iv:function(){return Z},Mt:function(){return k},Pf:function(){return l},Ps:function(){return _},RN:function(){return p},RS:function(){return x},SO:function(){return j},Vd:function(){return h},av:function(){return N},eO:function(){return f},ep:function(){return v},fF:function(){return b},jw:function(){return m},pF:function(){return y},vz:function(){return C},x4:function(){return u}});var r=n(9270),s=n(8422),c=n(3993),i=n(3273);function a(e){return"".concat(c.Sg).concat(e)}function o(e){var t;const n=e.data;if(n){if(n.code&&1e5!==n.code)throw n.message;return null===(t=e.data)||void 0===t?void 0:t.data}}function l(e,t){return()=>t.some((e=>!e))?(0,i._v)():e()}async function u(e,t){return o(await s.Z.post(a("/api/base/login"),{name:e,password:t}))}function d(){const e=(0,r.is)();return e?{headers:{Authorization:"Bearer ".concat(e.loginToken)}}:{}}async function m(){return o(await s.Z.get(a("/api/npi/product/list"),d()))}async function x(e){return o(await s.Z.get(a("/api/npi/product/".concat(e,"/pcf_accountable")),d()))}async function f(e){return o(await s.Z.get(a("/api/npi/product/".concat(e,"/bom/list")),d()))}async function p(e){return o(await s.Z.get(a("/api/npi/product_bom/".concat(e,"/activity_types")),d()))}async function h(e){return o(await s.Z.get(a("/api/npi/product_process/query"),{...d(),params:{product_id:e,include_activity_types:!0}}))}async function v(e){return o(await s.Z.get(a("/api/npi/product/serial_number/".concat(e,"/info")),d()))}async function g(e){return o(await s.Z.get(a("/api/inventory/product/".concat(e,"/inventory")),d()))}async function w(e){let{pgNum:t,productId:n}=e;return o(await s.Z.get(a("/api/product-lca/model/query?pageNum=".concat(t,"&pageSize=10&productId=").concat(n>-1?n:"")),d()))}async function j(e){let{pgNum:t}=e;return o(await s.Z.get(a("/api/product-lca/result/query?pageNum=".concat(t,"&pageSize=10")),d()))}async function b(e){return o(await s.Z.get(a("/api/product-lca/result/detail/".concat(e)),d()))}async function y(e,t){return o(await s.Z.post(a("/api/product-lca/model/state/".concat(e,"/update/").concat(t)),null,d()))}async function N(e){let t=d();t.headers&&(t.headers["Content-Type"]="multipart/form-data");try{return await s.Z.post(a("/api/product-lca/model/upload"),e,t)}catch(n){console.log(n)}}async function _(){return o(await s.Z.get(a("/api/product/category/query"),d()))}async function k(e){let{name:t,categoryId:n,orgId:r,description:c}=e;return o(await s.Z.post(a("/api/product/upsert"),{name:t,categoryId:n,orgId:r,partNumber:"1",imageUrl:"",description:c},d()))}async function C(){return o(await s.Z.get(a("/api/product/list"),d()))}async function Z(e){const t=await async function(e){const t=await s.Z.get(a("/api/product-lca/model/".concat(e,"/categories")),d());return JSON.parse(o(t))}(e),n=await async function(e){const t=await s.Z.get(a("/api/product-lca/model/".concat(e,"/descriptors")),d());return JSON.parse(o(t))}(e);return[t,n]}async function O(e,t,n){const r=await s.Z.get(a("/api/product-lca/model/".concat(e,"/item/").concat(t,"/").concat(n,"/info")),d());return JSON.parse(o(r))}},7677:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r,s=n(1527),c=n(9299),i=n(3702),a=n(9270),o=n(959);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var u=function(e){return o.createElement("svg",l({width:"1em",viewBox:"0 0 18 32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=o.createElement("path",{d:"M10.5 2a1.5 1.5 0 1 0-3 0h3ZM9 32l8.66-15H.34L9 32ZM7.5 2v16.5h3V2h-3Z"})))},d=n(4875),m=n.n(d),x=n(8633),f=n(9592);function p(e){const{data:t}=e,{activity:n,update:r}=(0,c.vz)(),i=n===t,{t:a}=(0,x.$G)();return(0,s.jsxs)("div",{className:"w-full h-[6.875rem] pr-[.625rem] relative cursor-pointer ",onClick:()=>r({activity:t,sourcing:0}),children:[(0,s.jsx)("div",{style:{border:i?"1px solid #29953A":"1px solid transparent"},className:m()("bg-white w-full h-full px-5 rounded-lg flex items-center justify-center"),children:(0,s.jsx)("div",{className:m()("font-bold grow-0 text-xl w-full whitespace-normal text-center break-words overflow-hidden",{"text-green-2":i}),children:a(t.name)})}),(0,s.jsx)("div",{style:{borderTop:"1px solid #29953A",borderRight:"1px solid #29953A",display:i?"block":"none"},className:"w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[2.99555rem] rotate-45"})]})}function h(e){const{data:t}=e,{t:n}=(0,x.$G)(),[r,c]=(0,f.Z)(!1);return(0,s.jsxs)("div",{className:"bg-white grow-0 w-full h-[6.875rem] cursor-pointer px-5 rounded-lg flex items-center justify-center",onClick:()=>c(!0),children:[(0,s.jsx)("div",{className:m()("font-bold grow-0 text-xl whitespace-normal text-center break-words overflow-hidden"),children:n(t.name)}),r&&(0,s.jsx)(i.f,{data:t,onBack:e=>{c(!1),e.stopPropagation()}})]})}function v(e){const{data:t}=e,n=(0,a.dD)();return(0,s.jsx)(s.Fragment,{children:t.map(((e,r)=>(0,s.jsxs)(o.Fragment,{children:[n?(0,s.jsx)(h,{data:e}):(0,s.jsx)(p,{data:e}),r<t.length-1&&(0,s.jsx)(u,{className:"text-green-2 text-lg my-[.625rem]"})]},"activites_root_".concat(r))))})}function g(e){const{data:t}=e;return(0,s.jsx)("div",{className:"w-full flex flex-col items-center",children:(0,s.jsx)(v,{data:t})})}var w=n(1004);function j(e){const{data:t,index:n}=e,{sourcing:r,update:i}=(0,c.vz)(),a=r===n;return(0,s.jsxs)("div",{className:"w-full h-[4.5rem] pr-[.625rem] relative cursor-pointer",style:{marginTop:n>0?"1.25rem":"0px"},onClick:()=>i({sourcing:n}),children:[(0,s.jsx)("div",{className:m()("bg-white w-full h-full px-3 rounded-lg flex items-center border border-solid border-black",{"border-green-2":a}),children:(0,s.jsx)("div",{style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},className:m()(" grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis",{"text-green-2":a}),children:t.name})}),a&&(0,s.jsx)("div",{style:{borderTop:"1px solid #29953A",borderRight:"1px solid #29953A"},className:"w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[1.81rem] rotate-45"})]})}function b(e){const{data:t}=e;return(0,s.jsx)("div",{className:"flex-1 w-0 h-full overflow-y-auto ml-[.625rem] bg-white p-5 rounded-lg",children:t.map(((e,t)=>(0,s.jsx)(o.Fragment,{children:(0,s.jsx)(j,{data:e,index:t})},"sourcing_item_".concat(t))))})}function y(e){const{data:t}=e;return(0,s.jsxs)("div",{className:"flex-1 w-0 h-full ml-[.625rem] flex flex-col bg-white p-5 rounded-lg overflow-y-auto",children:[(0,s.jsx)("div",{className:"bg-white shrink-0 leading-normal text-black text-base font-semibold w-full whitespace-normal pb-5",children:(null===t||void 0===t?void 0:t.name)||""}),(0,s.jsx)("div",{className:"w-full h-0 flex-1 overflow-y-auto",children:null===t||void 0===t?void 0:t.activityTypes.map(((e,t)=>(0,s.jsx)(w.Zx,{title:"#".concat(t+1," ").concat(e.displayName),sub:e.description},"attrs_source_".concat(t))))})]})}function N(e){const{data:t}=e;return(0,s.jsx)(c.Wc,{init:{activity:t[0]},children:(0,s.jsx)(c.cM.Consumer,{children:e=>{let{activity:n,sourcing:r}=e;return(0,s.jsxs)("div",{className:"flex w-full h-full max-h-[36.9375rem]",children:[(0,s.jsx)("div",{className:"w-[15rem] shrink-0 flex flex-col items-center",children:(0,s.jsx)(v,{data:t})}),(0,s.jsx)(b,{data:n.processList}),(0,s.jsx)(y,{data:n.processList[r]})]})}})})}var _=n(8503),k=n(9080),C=n(7361),Z=n(8416),O=n(4726),T=n(818),P=n(7944);var E=function(){const{t:e}=(0,x.$G)(),{current:t,items:n,onChange:r,current_product:c,loading:i}=(0,Z.a)(),l=(0,a.dD)(),{value:u,loading:d}=(0,C.k)((()=>c?(0,O.Vd)(c.id):Promise.resolve(void 0)),[c]),m=(0,o.useMemo)((()=>{if(!u)return;const e=(0,k.AR)(),t={};return e.forEach((e=>t[e.name]=e)),u.forEach((e=>{var n,r;return null===(n=t[e.phase])||void 0===n||null===(r=n.processList)||void 0===r?void 0:r.push(e)})),e}),[u]),f=i||d||void 0==u;return(0,s.jsx)(P.m,{className:"text-black",children:f?(0,s.jsx)(T.g,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-lg font-medium text-gray-6 mb-5 mo:leading-5 mo:text-[.9375rem]",children:e("Carbon Activities are subordinate to Products. Select a Product to view its Carbon Activites accountable for the PCF Inventory.")}),(0,s.jsx)(_.P,{current:t,onChange:r,items:n}),(0,s.jsx)("div",{className:"text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5",children:e("ACTIVITY DEFINITION")}),m&&(0,s.jsx)(s.Fragment,{children:l?(0,s.jsx)(g,{data:m}):(0,s.jsx)(N,{data:m})})]})})}},6171:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(677),s=n(959);function c(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var c=(0,s.useRef)(0),i=function(){var e=(0,s.useRef)(!1),t=(0,s.useCallback)((function(){return e.current}),[]);return(0,s.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t}(),a=(0,s.useState)(n),o=a[0],l=a[1],u=(0,s.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var s=++c.current;return o.loading||l((function(e){return(0,r.pi)((0,r.pi)({},e),{loading:!0})})),e.apply(void 0,t).then((function(e){return i()&&s===c.current&&l({value:e,loading:!1}),e}),(function(e){return i()&&s===c.current&&l({error:e,loading:!1}),e}))}),t);return[o,u]}},9592:function(e,t,n){"use strict";var r=n(959),s=function(e,t){return"boolean"===typeof t?t:!e};t.Z=function(e){return(0,r.useReducer)(s,e)}},677:function(e,t,n){"use strict";n.d(t,{ZT:function(){return s},pi:function(){return c}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},c.apply(this,arguments)};Object.create;Object.create}},function(e){e.O(0,[713,769,307,574,570,774,888,179],(function(){return t=9534,e(e.s=t);var t}));var t=e.O();_N_E=t}]);