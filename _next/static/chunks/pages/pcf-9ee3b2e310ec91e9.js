(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{7837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pcf",function(){return n(6193)}])},2458:function(e,t,n){"use strict";n.d(t,{C6:function(){return g},TU:function(){return w},xt:function(){return j}});var s=n(1527),l=n(6131),a=n(5912),i=n(5666),r=n(4875),c=n.n(r),o=n(959),d=n(8501),m=n(7223),x=n(1290),u=n(7162),f=n(2722);let h=(0,o.createContext)(void 0),p=(e,t)=>({data:{id:e.id.toString(),isLeaf:0===e.children.length,isOpenByDefault:0===t,name:e.partDisplayName,nestingLevel:t,node:e},nestingLevel:t,node:e});function v(e){let{style:t,data:{name:n,nestingLevel:l,isLeaf:a,node:i},isOpen:r,setOpen:m}=e,[x,u]=(0,o.useContext)(h);return(0,s.jsxs)("div",{style:{...t,width:"max-content",marginLeft:"".concat(2.25*l+(a?2.25:0),"rem"),background:i===x?"rgba(34, 122, 48, 0.1)":"none"},className:c()("flex items-center px-5 py-3 rounded-lg",{"text-green-2":i===x}),children:[!a&&(0,s.jsx)("button",{onClick:()=>m(!r),className:"text-2xl mr-3",children:r?(0,s.jsx)(d.qT8,{}):(0,s.jsx)(d.Dwu,{})}),(0,s.jsx)("span",{className:c()("whitespace-nowrap cursor-pointer",{"font-bold":0===l}),onClick:()=>0!==l&&u(i),children:n})]})}function g(e){return(0,s.jsxs)("div",{className:"text-gray-6 text-lg whitespace-nowrap text-ellipsis overflow-hidden [&:nth-child(n+2)]:mt-4 mo:text-[.9375rem] mo:!mt-0",children:[(0,s.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]})}function j(e){var t;let{node:n}=e,{t:l}=(0,f.$G)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{label:l("Part Name"),text:n.partDisplayName}),(0,s.jsx)(g,{label:l("Part Type"),text:n.children.length>0?"Sub-system":"Bom"}),(0,s.jsx)(g,{label:l("BOM Genealogy Level"),text:"".concat(n.deep+1)}),(0,s.jsx)(g,{label:l("Parent"),text:(null===(t=n.parent)||void 0===t?void 0:t.partDisplayName)||"-"}),(0,s.jsx)(g,{label:l("Children"),text:"".concat(n.children.length||"No"," Child")}),(0,s.jsx)(g,{label:l("From Supplier"),text:n.supplierName||"-"}),(0,s.jsx)(g,{label:l("Last Update"),text:n.updateTime})]})}function w(e){let{node:t}=e,{t:n}=(0,f.$G)(),[r,c]=(0,o.useState)(t.children[0]),d=(0,o.useCallback)(function*(){for(yield p(t,0);;){let e=yield;for(let n=0;n<e.node.children.length;n++)yield p(e.node.children[n],e.nestingLevel+1)}},[t]),{value:g,loading:w}=(0,a.k)(()=>(0,i.RN)(r.id),[r]),b=(0,o.useMemo)(()=>g?g.map(e=>({title:e.displayName,sub:e.name})):[],[g]);return(0,s.jsxs)("div",{className:"w-full flex",children:[(0,s.jsx)("div",{className:"p-5 bg-white rounded-l-lg mr-1 w-[20rem] h-[27rem] text-lg text-black",children:(0,s.jsx)(h.Provider,{value:[r,c],children:(0,s.jsx)(m.Z,{disableWidth:!0,children:e=>{let{height:t}=e;return(0,s.jsx)(x.NC,{width:"100%",height:t,itemSize:50,treeWalker:d,children:v})}})})}),(0,s.jsxs)("div",{className:"px-8 pt-[2.125rem] pb-8 flex-1 bg-white rounded-r-lg h-[27rem] flex justify-between",children:[(0,s.jsx)("div",{className:"flex-1 w-0",children:(0,s.jsx)(j,{node:r})}),(0,s.jsx)("div",{className:"w-[3.5rem]"}),(0,s.jsxs)("div",{className:"w-0 flex-1 flex flex-col",children:[(0,s.jsxs)("div",{className:"text-lg font-bold mb-5",children:[n("Attributable to Carbon Activities"),":"]}),w?(0,s.jsx)(u.g,{}):(0,s.jsx)("div",{className:"flex-1 w-full overflow-y-auto",children:b.map((e,t)=>(0,s.jsx)(l.L6,{...e},"attrs_".concat(t)))})]})]})]})}},7564:function(e,t,n){"use strict";n.d(t,{Wc:function(){return r},cM:function(){return a},vz:function(){return i}});var s=n(1527),l=n(959);let a=(0,l.createContext)({activity:null,sourcing:0,update:()=>{}});function i(){return(0,l.useContext)(a)}function r(e){let[t,n]=(0,l.useState)({activity:null,sourcing:0,...e.init});(0,l.useEffect)(()=>{n(t=>({...t,...e.init}))},[e.init]);let i=(0,l.useCallback)(e=>{n(t=>({...t,...e}))},[]);return(0,s.jsx)(a.Provider,{value:{...t,update:i},children:e.children})}},4301:function(e,t,n){"use strict";n.d(t,{f:function(){return h}});var s=n(1527),l=n(4631),a=n(4393),i=n(4875),r=n.n(i),c=n(959),o=n(2722),d=n(1917),m=n(5309),x=n(6131);function u(e){let{t}=(0,o.$G)(),{data:n,onBack:i}=e;return(0,s.jsxs)(l.u,{children:[(0,s.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,s.jsx)("button",{className:"text-2xl",onClick:i,children:(0,s.jsx)(d.$Ku,{})}),(0,s.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:n.name}),(0,s.jsx)("div",{className:"w-6"})]}),(0,s.jsxs)("div",{className:"p-5 w-full",children:[(0,s.jsx)("div",{className:"bg-white leading-normal text-black text-base font-semibold w-full whitespace-normal",children:n.name}),void 0!==n.carbon_emission&&(0,s.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat(t("Total"),": ").concat((0,a.HN)(n.carbon_emission)," / ").concat(n.activityTypes.length," ").concat(t("items"))}),(0,s.jsx)("div",{className:"w-full mt-5",children:n.activityTypes.map((e,t)=>(0,s.jsx)(x.Zx,{title:"#".concat(t+1," ").concat(e.displayName),tit_r:void 0===e.carbon_emission?void 0:"".concat((0,a.HN)(e.carbon_emission)),sub:e.description},"attrs_source_".concat(t)))})]})]})}function f(e){let{data:t,index:n}=e,[l,i]=(0,m.Z)(!1),{t:c}=(0,o.$G)();return(0,s.jsxs)("div",{className:"w-full min-h-[4.5rem] cursor-pointer p-3 flex flex-col justify-center border border-solid border-black rounded-lg",style:{marginTop:n>0?"1.25rem":"0px"},onClick:()=>i(!0),children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)("div",{className:"w-0 flex-1",children:[(0,s.jsx)("div",{style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},className:r()("grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis"),children:t.name}),void 0!==t.carbon_emission&&(0,s.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat((0,a.HN)(t.carbon_emission)," / ").concat(t.activityTypes.length," ").concat(c("items"))})]}),(0,s.jsx)(d.mzm,{className:"text-2xl"})]}),l&&(0,s.jsx)(u,{data:t,onBack:e=>{i(!1),e.stopPropagation()}})]})}function h(e){let{data:t,onBack:n}=e,{t:a}=(0,o.$G)();return(0,s.jsxs)(l.u,{children:[(0,s.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,s.jsx)("button",{className:"text-2xl",onClick:n,children:(0,s.jsx)(d.$Ku,{})}),(0,s.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:a(t.name)}),(0,s.jsx)("div",{className:"w-6"})]}),(0,s.jsx)("div",{className:"p-5 w-full",children:t.processList.map((e,t)=>(0,s.jsx)(c.Fragment,{children:(0,s.jsx)(f,{data:e,index:t})},"sourcing_item_".concat(t)))})]})}},6500:function(e,t,n){"use strict";n.d(t,{H:function(){return r}});var s=n(1527),l=n(3737),a=n(4875),i=n.n(a);function r(e){let{className:t,children:n="Data not available for this input.",...a}=e,{t:r}=(0,l.N)(),c="string"==typeof n?r(n):n;return(0,s.jsxs)("div",{...a,className:i()(t,"w-full text-center text-lg text-black flex flex-col items-center"),children:[(0,s.jsx)("div",{className:"flex-1"}),c,(0,s.jsx)("div",{className:"flex-[2]"})]})}},5726:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var s=n(1527),l=n(8151),a=n(7008),i=n(4875),r=n.n(i),c=n(4166),o=n(959),d=n(2722),m=n(3341),x=n(1917),u=n(6274),f=n(6261);function h(e){let{className:t,children:n,...i}=e,{push:h,pathname:p}=(0,c.useRouter)(),v=(0,l.E)(),g=function(){let{t:e}=(0,d.$G)();return(0,o.useMemo)(()=>[{icon:m.nf1,txt:e("User Dashboard"),to:"/dashboard"},{icon:x.Sx5,txt:e("Product Definition"),to:"/product"},{icon:a.Z,txt:e("Carbon Activities"),to:"/activities"},{icon:u.C4h,txt:e("PCF Inventories"),to:"/pcf"}],[e])}();return(0,s.jsxs)(f.se,{className:"flex text-black !p-0 bg-white",children:[(0,s.jsx)("div",{className:"sticky self-start top-[4.25rem] w-[16.25rem] p-5 min-h-full mo:hidden",children:g.map((e,t)=>(0,s.jsxs)("div",{onClick:t=>{t.preventDefault(),h(e.to)},className:r()("cursor-pointer w-full py-3 pl-4 flex items-center flex-nowrap text-black rounded-lg",{"!text-green-2 bg-green-2/10":e.to===p}),children:[(0,s.jsx)(e.icon,{className:"mr-3 text-2xl"}),(0,s.jsx)("span",{className:"whitespace-nowrap text-lg font-medium",children:e.txt})]},"menus-".concat(t)))}),(0,s.jsx)("div",{ref:v,className:r()("flex-1 p-5 min-h-full bg-gray-16 mo:w-full",t),...i,children:n})]})}},5363:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var s=n(1527),l=n(4875),a=n.n(l);function i(e){let{index:t,full:n,bg:l="#dddddd",color:i="#227A30",className:r}=e;return(0,s.jsx)("div",{className:a()(r,"w-full h-[.625rem]"),style:{background:l},children:(0,s.jsx)("div",{style:{marginLeft:n?"0":"".concat(25*t,"%"),width:n?"100%":"25%",background:i},className:"h-full"})})}},6131:function(e,t,n){"use strict";n.d(t,{L6:function(){return r},Zx:function(){return c}});var s=n(1527),l=n(4875),a=n.n(l);function i(e){let{txt:t,type:n,className:l,...i}=e;return(0,s.jsx)("div",{...i,className:a()(l,"px-[5px] py-[2px] rounded text-xs text-white",{"bg-blue-0":"blue"===n,"bg-orange-16":"orange"===n}),children:t})}function r(e){let{title:t,sub:n,badge:l=[]}=e;return(0,s.jsxs)("div",{style:{border:"1px solid #000000"},className:a()("rounded-lg py-3 pl-3 pr-4 w-full overflow-hidden [&:nth-child(n+2)]:mt-5"),children:[(0,s.jsx)("div",{className:"text-black text-base w-full overflow-hidden whitespace-nowrap text-ellipsis",children:t}),(0,s.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,s.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:n}),l.map((e,t)=>(0,s.jsx)(i,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}function c(e){let{title:t,sub:n,badge:l=[],tit_r:r}=e;return(0,s.jsxs)("div",{className:a()("rounded-lg py-3 pl-3 pr-[.4375rem] w-full overflow-hidden [&:nth-child(2n+1)]:bg-gray-16"),children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"text-black text-base overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:t}),(0,s.jsx)("div",{className:"flex-1"}),void 0!==r&&(0,s.jsx)("div",{className:"shrink-0 whitespace-nowrap text-sm font-semibold text-green-2",children:r})]}),(0,s.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,s.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:n}),(0,s.jsx)("div",{className:"flex-1"}),l.map((e,t)=>(0,s.jsx)(i,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}},5912:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var s=n(1851);function l(e,t){let n=(0,s.Z)(e,t);return(n.error||n.loading)&&(n.value=void 0),n}},3737:function(e,t,n){"use strict";n.d(t,{N:function(){return l}});var s=n(2722);function l(e,t){return(0,s.$G)(e,t)}},5666:function(e,t,n){"use strict";n.d(t,{Ii:function(){return p},RN:function(){return u},RS:function(){return m},Vd:function(){return f},Xg:function(){return v},aA:function(){return g},eO:function(){return x},ep:function(){return h},jw:function(){return d},x4:function(){return c}});var s=n(5032),l=n(8422),a=n(8622);function i(e){return"".concat(a.Sg).concat(e)}function r(e){let t=e.data;if(t){if(t.code&&200!==t.code)throw t.msg;return e.data}}async function c(e,t){let n=await l.Z.post(i("/api/v1/base/login"),{name:e,password:t});return r(n)}function o(){let e=(0,s.is)();return e?{headers:{Authorization:"Bearer ".concat(e.loginToken)}}:{}}async function d(){let e=await l.Z.get(i("/api/v1/npi/product/list"),o());return r(e)}async function m(e){let t=await l.Z.get(i("/api/v1/npi/product/".concat(e,"/pcf_accountable")),o());return r(t)}async function x(e){let t=await l.Z.get(i("/api/v1/npi/product/".concat(e,"/bom/list")),o());return r(t)}async function u(e){let t=await l.Z.get(i("/api/v1/npi/product_bom/".concat(e,"/activity_types")),o());return r(t)}async function f(e){let t=await l.Z.get(i("/api/v1/npi/product_process/query"),{...o(),params:{product_id:e,include_activity_types:!0}});return r(t)}async function h(e){let t=await l.Z.get(i("/api/v1/npi/product/serial_number/".concat(e,"/info")),o());return r(t)}async function p(e){let t=await l.Z.get(i("/api/v1/inventory/product/".concat(e,"/inventory")),o());return r(t)}async function v(e){let t=await l.Z.get(i("/api/v1/sbt/".concat(e,"/info")));return r(t)}async function g(e){let t=await l.Z.get(i("/api/v1/sbt/".concat(e,"/emission/inventory")));return r(t)}},6193:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var s,l,a,i,r,c,o=n(1527),d=n(2458),m=n(5032),x=n(6500),u=n(7162),f=n(5726),h=n(6558),p=n(4301),v=n(5363),g=n(4393),j=n(4875),w=n.n(j),b=n(2722),N=n(8501),y=n(1917),_=n(5309);function k(e){let{data:t,index:n}=e,{t:s}=(0,b.$G)(),[l,a]=(0,_.Z)(!1);return(0,o.jsxs)("div",{className:w()("w-full p-5 bg-white rounded-lg text-black cursor-pointer [&:nth-child(n+2)]:mt-5"),onClick:()=>a(!0),children:[(0,o.jsx)(v.K,{index:n,className:"my-5"}),(0,o.jsx)("div",{className:"w-full whitespace-normal font-bold text-base",children:s(t.name)}),(0,o.jsx)("div",{className:"w-full whitespace-nowrap text-sm mt-[.625rem]",children:"".concat((0,g.HN)(t.carbon_emission)," / ").concat(t.progress,"%")}),(0,o.jsxs)("div",{className:"flex justify-between items-center mt-3",children:[t.carbon_emission>0&&t.name!==h.RG.at(h.RG.length-1)?(0,o.jsx)(y.GcF,{className:"text-2xl "}):(0,o.jsx)(y.qCw,{className:"text-2xl"}),(0,o.jsx)(N.UE1,{className:"text-2xl text-green-2"})]}),l&&(0,o.jsx)(p.f,{data:t,onBack:e=>{a(),e.stopPropagation()}})]})}function Z(e){let{data:t}=e;return(0,o.jsx)("div",{className:"rounded-lg w-full flex flex-col",children:t.map((e,t)=>(0,o.jsx)(k,{index:t,data:e},"mo_inventory_item_".concat(t)))})}var C=n(7564);function E(e){let{data:t,index:n}=e,{t:s}=(0,b.$G)(),{activity:l,update:a}=(0,C.vz)(),i=l===t;return(0,o.jsxs)("div",{className:w()("w-0 flex-1 text-black cursor-pointer [&:nth-child(n+2)]:ml-5",{"text-gray-9":!i}),onClick:()=>a({activity:t,sourcing:0}),children:[(0,o.jsx)(v.K,{full:!0,color:i?"#227A30":"transparent",index:n,className:"my-5"}),(0,o.jsx)("div",{className:"w-full whitespace-normal font-bold text-xl",children:s(t.name)}),(0,o.jsx)("div",{className:"w-full whitespace-nowrap text-base mt-[.625rem]",children:"".concat((0,g.HN)(t.carbon_emission)," / ").concat(t.progress,"%")}),t.carbon_emission>0&&t.name!==h.RG.at(h.RG.length-1)?(0,o.jsx)(y.GcF,{className:"text-2xl mt-3"}):(0,o.jsx)(y.qCw,{className:"text-2xl mt-3"})]})}function M(e){let{data:t}=e;return(0,o.jsx)("div",{className:"bg-white p-5 rounded-lg w-full flex",children:t.map((e,t)=>(0,o.jsx)(E,{index:t,data:e},"pc_inventory_item_".concat(t)))})}function O(e){let{data:t,index:n}=e,{sourcing:s,update:l}=(0,C.vz)(),a=s===n,{t:i}=(0,b.$G)();return(0,o.jsxs)("div",{className:w()("relative w-full pr-[.625rem] cursor-pointer [&:nth-child(n+2)]:mt-5"),onClick:()=>l({sourcing:n}),children:[(0,o.jsxs)("div",{className:"w-full p-3 rounded-lg",style:{border:a?"1px solid #227A30":"1px solid #000000"},children:[(0,o.jsx)("div",{className:w()({"text-green-2":a},"text-base leading-normal w-full text-ellipsis whitespace-nowrap overflow-hidden"),children:t.name}),(0,o.jsx)("div",{className:w()(a?"text-green-2":"text-gray-6","text-sm mt-[.625rem]"),children:"".concat((0,g.HN)(t.carbon_emission)," / ").concat(t.activityTypes.length," ").concat(i("items"))})]}),a&&(0,o.jsx)("div",{style:{borderTop:"1px solid #227A30",borderRight:"1px solid #227A30"},className:"w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[calc(50%_-_.4419rem)] rotate-45"})]})}function P(e){let{data:t}=e;return(0,o.jsx)("div",{className:"bg-white p-5 rounded-lg w-0 flex-1",children:t.map((e,t)=>(0,o.jsx)(O,{data:e,index:t},"pc_inventory_item_".concat(t)))})}var T=n(6131);function G(e){let{data:t}=e,{t:n}=(0,b.$G)();return(0,o.jsxs)("div",{className:"bg-white p-5 rounded-lg w-0 flex-1 ml-5",children:[(0,o.jsx)("div",{className:"text-base font-semibold leading-normal whitespace-normal",children:null==t?void 0:t.name}),(0,o.jsx)("div",{className:"mt-[.625rem] mb-4 text-sm text-gray-6",children:"".concat(n("Total"),": ").concat((null==t?void 0:t.carbon_emission)?(0,g.HN)(t.carbon_emission):"-"," / ").concat((null==t?void 0:t.activityTypes.length)||"-"," ").concat(n("items"))}),null==t?void 0:t.activityTypes.map((e,t)=>(0,o.jsx)(T.Zx,{title:"#".concat(t+1," ").concat(e.displayName),tit_r:"".concat((0,g.HN)(e.carbon_emission)),sub:e.description},"attrs_source_".concat(t)))]})}function L(e){let{data:t}=e;return(0,o.jsx)(C.Wc,{init:{activity:t[0]},children:(0,o.jsx)(C.cM.Consumer,{children:e=>{let{activity:n,sourcing:s}=e;return(0,o.jsxs)("div",{className:"w-full",children:[(0,o.jsx)(M,{data:t}),(0,o.jsxs)("div",{className:"w-full flex mt-5",children:[(0,o.jsx)(P,{data:n.processList}),(0,o.jsx)(G,{data:n.processList[s]})]})]})}})})}var R=n(3006),S=n(5666),D=n(959);function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var A=function(e){return D.createElement("svg",H({width:"1em",viewBox:"0 0 50 51",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=D.createElement("g",{clipPath:"url(#co2e_svg__a)"},D.createElement("path",{d:"M3.39 18.836a2.542 2.542 0 1 0 5.084 0 2.542 2.542 0 0 0-5.084 0ZM22.458 10.362a2.542 2.542 0 1 0 5.084 0 2.542 2.542 0 0 0-5.084 0ZM11.44 10.362a2.117 2.117 0 0 0 2.93 1.957 2.12 2.12 0 1 0-2.93-1.957ZM34.322 10.786a2.118 2.118 0 1 0 4.236 0 2.118 2.118 0 0 0-4.236 0ZM42.797 9.514a1.695 1.695 0 1 0 3.389 0 1.695 1.695 0 0 0-3.39 0ZM3.39 9.938a1.695 1.695 0 1 0 3.39 0 1.695 1.695 0 0 0-3.39 0ZM23.305 1.887a1.695 1.695 0 1 0 3.39 0 1.695 1.695 0 0 0-3.39 0ZM14.83 3.158a1.27 1.27 0 1 0 2.542 0 1.27 1.27 0 0 0-2.541 0ZM31.78 4.43a1.271 1.271 0 1 0 2.542 0 1.271 1.271 0 0 0-2.542 0ZM41.95 18.412a2.544 2.544 0 0 0 3.514 2.35 2.543 2.543 0 1 0-3.515-2.35ZM28.161 27.993a3.268 3.268 0 0 0-2.542 1.093c-.647.726-.972 1.822-.975 3.288-.003 1.466.33 2.56 1 3.28a3.439 3.439 0 0 0 5.085 0c.627-.716.94-1.839.94-3.314 0-1.474-.317-2.542-.957-3.27a3.258 3.258 0 0 0-2.551-1.077Z"}),D.createElement("path",{d:"M41.525 24.2a10.169 10.169 0 0 0-16.101-7.69A10.169 10.169 0 0 0 9.36 23.92a10.593 10.593 0 0 0 2.928 20.764c.44 0 .88-.029 1.318-.085a14.406 14.406 0 0 0 22.788 0A10.593 10.593 0 0 0 41.525 24.2ZM19.271 37.956a5.432 5.432 0 0 1-3.39 1.013 5.484 5.484 0 0 1-4.173-1.734c-1.09-1.158-1.635-2.738-1.632-4.741 0-2.119.548-3.764 1.644-4.937a5.627 5.627 0 0 1 4.318-1.762 5.305 5.305 0 0 1 3.814 1.381c.639.65 1.09 1.462 1.305 2.348l-2.543.61a2.631 2.631 0 0 0-2.686-2.119 2.89 2.89 0 0 0-2.314.992c-.601.68-.902 1.78-.902 3.296 0 1.61.292 2.759.869 3.44a2.82 2.82 0 0 0 2.262 1.026 2.58 2.58 0 0 0 1.763-.648 3.784 3.784 0 0 0 1.076-2.03l2.504.767a5.606 5.606 0 0 1-1.915 3.098Zm13.382-.729c-1.13 1.161-2.625 1.742-4.483 1.742-1.86 0-3.366-.578-4.522-1.734-1.116-1.158-1.68-2.75-1.695-4.775a8.08 8.08 0 0 1 .58-3.267 6.01 6.01 0 0 1 1.196-1.746 4.946 4.946 0 0 1 1.648-1.148 7.008 7.008 0 0 1 2.746-.504 5.991 5.991 0 0 1 4.504 1.746c1.13 1.166 1.695 2.785 1.695 4.855 0 2.071-.556 3.681-1.67 4.831Zm8.398 2.797h-5.31c.065-.53.255-1.038.556-1.48a7.402 7.402 0 0 1 1.737-1.635c.367-.25.701-.545.996-.877a.988.988 0 0 0 .216-.572.661.661 0 0 0-.216-.496.741.741 0 0 0-.543-.207.758.758 0 0 0-.55.212 1.322 1.322 0 0 0-.293.754l-1.771-.144c.042-.412.172-.809.381-1.166.194-.285.466-.51.784-.644a3.572 3.572 0 0 1 1.403-.224c.493-.02.986.052 1.453.212.333.131.618.36.818.656.199.29.302.636.296.988a2.03 2.03 0 0 1-.339 1.11c-.34.46-.76.855-1.241 1.165-.356.246-.593.424-.716.517-.123.093-.259.229-.424.39h2.763v1.44Z"}))),l||(l=D.createElement("defs",null,D.createElement("clipPath",{id:"co2e_svg__a"},D.createElement("path",{fill:"#fff",transform:"translate(0 .192)",d:"M0 0h50v50H0z"})))))};function $(){return($=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var I=function(e){return D.createElement("svg",$({width:"1em",viewBox:"0 0 60 58",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=D.createElement("path",{d:"M7.879 30.614c-.284-.284-.426-.568-.426-.994l-.071-.923c0-6.96 3.905-13.28 10.013-16.404.71-.427 1.633-.213 2.059.497.426.71.213 1.633-.497 2.059-.071.071-.071.071-.213.071-5.184 2.628-8.38 7.954-8.38 13.777 0 .284.071.497.071.781 0 .852-.568 1.562-1.42 1.562-.355.071-.781-.07-1.136-.426Zm9.418 15.1c-.64-.497-.781-1.492-.284-2.13.497-.64 1.491-.782 2.13-.285 5.113 3.267 11.718 3.338 16.76 0 .71-.426 1.633-.213 2.06.497.354.64.212 1.492-.427 1.989-6.107 3.977-13.919 3.977-20.097.07l-.142-.141Zm27.811-15.029c-.284-.284-.426-.71-.426-1.136 0-.284.071-.497.071-.781 0-5.823-3.196-11.15-8.45-13.848-.782-.355-.995-1.278-.64-2.06.355-.78 1.279-.994 2.06-.638 6.178 3.195 10.084 9.515 10.013 16.404v.852c0 .852-.781 1.491-1.563 1.42-.497.213-.852 0-1.065-.213Z"})),i||(i=D.createElement("path",{d:"M34.953 18.968c-.142-.142-.284-.284-.355-.497l-1.633-4.332c-.498-1.35.213-2.77 1.49-3.196l4.333-1.633c.78-.355 1.633.07 1.917.923.355.781-.07 1.633-.923 1.917l-3.906 1.492 1.492 3.905c.355.782-.072 1.634-.924 1.918a1.757 1.757 0 0 1-1.491-.497ZM3.547 29.69c-.568-.568-.568-1.563 0-2.13.568-.569 1.562-.569 2.13 0L8.66 30.4l2.84-2.983c.568-.568 1.563-.568 2.13 0 .569.569.569 1.563 0 2.13l-3.195 3.338c-.994.995-2.557.995-3.48.072L3.547 29.69ZM37.18 49.264c-.355-.355-.497-.923-.355-1.349l.781-4.048-4.048-.78c-.852-.143-1.35-.924-1.207-1.776.142-.852.923-1.35 1.775-1.208l4.616.924c1.42.284 2.202 1.633 1.989 2.982l-.995 4.545c-.142.852-.923 1.35-1.775 1.207-.284-.142-.568-.284-.781-.497Z"})))};function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var F=function(e){return D.createElement("svg",B({width:"1em",viewBox:"0 0 50 51",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=D.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.144 32.192H40a8 8 0 0 1 0 16H28.144a9.985 9.985 0 0 0 3.999-8 9.985 9.985 0 0 0-4-8Zm-6.001-2H40c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-.69 0-1.364-.07-2.015-.203C3.428 49.057 0 45.025 0 40.192c0-5.523 4.477-10 10-10h12.143Z"})),c||(c=D.createElement("path",{d:"M29.808 23.008c.784 0 1.176-.536 1.176-1.608s-.392-1.608-1.176-1.608c-.768 0-1.152.536-1.152 1.608s.384 1.608 1.152 1.608Zm-2.88 1.368c-.736-.704-1.104-1.696-1.104-2.976s.368-2.272 1.104-2.976c.752-.704 1.72-1.056 2.904-1.056s2.144.352 2.88 1.056c.736.704 1.104 1.696 1.104 2.976s-.368 2.272-1.104 2.976c-.736.704-1.696 1.056-2.88 1.056s-2.152-.352-2.904-1.056Zm-8.76.816 9.24-16.896h3.96l-9.24 16.896h-3.96Zm1.536-11.496c.784 0 1.176-.536 1.176-1.608s-.392-1.608-1.176-1.608c-.768 0-1.152.536-1.152 1.608s.384 1.608 1.152 1.608Zm-2.88 1.368c-.736-.704-1.104-1.696-1.104-2.976s.368-2.272 1.104-2.976c.752-.704 1.72-1.056 2.904-1.056s2.144.352 2.88 1.056c.736.704 1.104 1.696 1.104 2.976s-.368 2.272-1.104 2.976c-.736.704-1.696 1.056-2.88 1.056s-2.152-.352-2.904-1.056Z"})))},z=n(4166),U=n(1067),K=n(7965);function V(e){let{icon:t,tit:n,txt:s}=e;return(0,o.jsxs)("div",{className:"flex items-center w-full",children:[t,(0,o.jsxs)("div",{className:"ml-5 w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap mo:ml-6",children:[(0,o.jsx)("div",{className:"font-bold text-lg text-black mo:text-base",children:n}),(0,o.jsx)("div",{className:"text-gray-6 text-lg mo:text-base",children:s})]})]})}var W=function(){let{t:e}=(0,b.$G)(),{query:t}=(0,z.useRouter)(),n=t.vin,[s,l]=(0,_.Z)(!1),[a,i]=(0,D.useState)(n||""),r=(0,m.h3)(),[{value:[c,p]=[void 0,void 0],loading:v},j]=(0,K.Z)(e=>Promise.all([(0,S.Ii)(e),(0,S.ep)(e)]),[]),w=(0,D.useCallback)(e=>{i(e.target.value||""),l(!1)},[]),N=(0,R.R)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a||"";if(!v){if(!e)return r("Please input VIN Code");j(e).then(t=>{t[0]&&localStorage.setItem("last_vin",e)}).catch(r).then(()=>{l(!0)})}});(0,D.useEffect)(()=>{let e=localStorage.getItem("last_vin")||"",t=n||e;t&&(i(t),N(t))},[n]);let y=(0,D.useMemo)(()=>{if(!c)return;let e=(0,h.z5)(),t={};e.forEach(e=>t[e.name]=e);let n=0;return c.forEach(e=>{var s,l;e.carbon_emission=0,e.activityTypes.forEach(t=>{t.carbon_emission=0,t.inventoryActivityList.forEach(e=>{t.carbon_emission+=e.ghgEmission,n+=e.ghgEmission}),e.carbon_emission+=t.carbon_emission}),null===(s=t[e.phase])||void 0===s||null===(l=s.processList)||void 0===l||l.push(e)}),e.forEach(e=>{e.processList.forEach(t=>{e.carbon_emission+=t.carbon_emission}),e.progress=n>0?Math.round(e.carbon_emission/n*100):0}),e},[c]),k=(0,D.useMemo)(()=>{if(!y)return"-";let e=0;return y.forEach(t=>{e+=t.carbon_emission}),e},[y]),C=(0,m.dD)();return(0,o.jsxs)(f.Z,{className:"text-black flex flex-col",children:[(0,o.jsxs)("div",{className:"text-lg font-medium text-gray-6 mb-5 mo:text-[.9375rem]",children:[e("Query PCF Data with Vehicle’s VIN Code"),":"]}),(0,o.jsxs)("div",{className:"relative w-[31.25rem] mo:w-auto rounded-lg overflow-hidden bg-white",children:[(0,o.jsx)("input",{className:"h-full w-full py-3 pl-5 pr-14 text-lg outline-none",maxLength:32,type:"text",onKeyDown:e=>"Enter"===e.code&&N(),value:a,onChange:w}),(0,o.jsx)(U.jRj,{className:"absolute text-lg top-[1.0625rem] right-5 cursor-pointer",onClick:()=>N()})]}),v?(0,o.jsx)(u.g,{className:"flex-1"}):(0,o.jsx)(o.Fragment,{children:p?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex mo:flex-col",children:[(0,o.jsxs)("div",{className:"w-0 flex-[5] mr-5 mo:w-full",children:[(0,o.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg mo:my-5",children:e("PRODUCT INFO")}),(0,o.jsxs)("div",{className:"bg-white rounded-lg p-5 h-[14.875rem] flex mo:flex-col mo:h-auto",children:[(0,o.jsx)("img",{className:"object-contain w-[16.25rem] h-full rounded-lg border border-solid border-black mo:w-full mo:aspect-[3/2]",src:(null==p?void 0:p.imageUrl)||h.ES}),(0,o.jsxs)("div",{className:"w-0 flex-1 ml-8 mo:mt-5 mo:ml-0 mo:w-full",children:[(0,o.jsx)(d.C6,{label:e("Product Name"),text:(null==p?void 0:p.displayName)||"-"}),(0,o.jsx)(d.C6,{label:e("Product UID"),text:(null==p?void 0:p.uuid)||"-"}),(0,o.jsx)(d.C6,{label:e("Product Type"),text:(null==p?void 0:p.type)||"-"}),(0,o.jsx)(d.C6,{label:e("VIN Code"),text:a||"-"}),(0,o.jsx)(d.C6,{label:e("Status"),text:"In Use/Ship-out on 2022-01-18"})]})]})]}),(0,o.jsxs)("div",{className:"w-0 flex-[3] mo:w-full",children:[(0,o.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg mo:my-5",children:e("INVENTORY STATS")}),(0,o.jsxs)("div",{className:"bg-white rounded-lg p-5 pl-8 h-[14.875rem] w-full flex flex-col justify-between mo:pl-6",children:[(0,o.jsx)(V,{icon:(0,o.jsx)(A,{className:"text-[3.125rem] text-green-2 mr-[.625rem]"}),tit:e("Product CO2e Emission"),txt:"".concat((0,g.HN)(k))}),(0,o.jsx)(V,{icon:(0,o.jsx)(I,{className:"text-[3.75rem] text-green-2"}),tit:e("Emission Scope"),txt:"Gradle-to-Grave"}),(0,o.jsx)(V,{icon:(0,o.jsx)(F,{className:"text-[3.125rem] text-green-2 mr-[.625rem]"}),tit:e("Overall Data Quality"),txt:"Primary Data=38.5%"})]})]})]}),(0,o.jsx)("div",{className:"text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5",children:e("INVENTORY BREAKDOWN")}),y&&(0,o.jsx)(o.Fragment,{children:C?(0,o.jsx)(Z,{data:y}):(0,o.jsx)(L,{data:y})})]}):a&&s?(0,o.jsx)(x.H,{className:"flex-1"}):null})]})}}},function(e){e.O(0,[893,439,54,57,507,845,471,901,261,774,888,179],function(){return e(e.s=7837)}),_N_E=e.O()}]);