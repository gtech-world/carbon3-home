(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{1643:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pcf",function(){return s(4910)}])},4186:function(e,t,s){"use strict";s.d(t,{C6:function(){return p},TU:function(){return j},xt:function(){return v}});var n=s(1527),l=s(1004),i=s(7361),r=s(4726),a=s(4875),c=s.n(a),o=s(959),d=s(8334),m=s(8370),x=s(9550);let u=(0,o.createContext)(void 0),f=(e,t)=>({data:{id:e.id.toString(),isLeaf:0===e.children.length,isOpenByDefault:0===t,name:e.partDisplayName,nestingLevel:t,node:e},nestingLevel:t,node:e});function h(e){let{style:t,data:{name:s,nestingLevel:l,isLeaf:i,node:r},isOpen:a,setOpen:m}=e,[x,f]=(0,o.useContext)(u);return(0,n.jsxs)("div",{style:{...t,width:"max-content",marginLeft:"".concat(2.25*l+(i?2.25:0),"rem"),background:r===x?"rgba(34, 122, 48, 0.1)":"none"},className:c()("flex items-center px-5 py-3 rounded-lg",{"text-green-2":r===x}),children:[!i&&(0,n.jsx)("button",{onClick:()=>m(!a),className:"text-2xl mr-3",children:a?(0,n.jsx)(d.qT8,{}):(0,n.jsx)(d.Dwu,{})}),(0,n.jsx)("span",{className:c()("whitespace-nowrap cursor-pointer",{"font-bold":0===l}),onClick:()=>0!==l&&f(r),children:s})]})}function p(e){return(0,n.jsxs)("div",{className:"text-gray-6 text-lg whitespace-nowrap text-ellipsis overflow-hidden [&:nth-child(n+2)]:mt-4 mo:text-[.9375rem] mo:!mt-0",children:[(0,n.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]})}function v(e){var t;let{node:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{label:"Part Name",text:s.partDisplayName}),(0,n.jsx)(p,{label:"Part Type",text:s.children.length>0?"Sub-system":"Bom"}),(0,n.jsx)(p,{label:"BOM Genealogy Level",text:"".concat(s.deep+1)}),(0,n.jsx)(p,{label:"Parent",text:(null===(t=s.parent)||void 0===t?void 0:t.partDisplayName)||"-"}),(0,n.jsx)(p,{label:"Children",text:"".concat(s.children.length||"No"," Child")}),(0,n.jsx)(p,{label:"From Supplier",text:s.supplierName||"-"}),(0,n.jsx)(p,{label:"Last Update",text:s.updateTime})]})}function j(e){let{node:t}=e,[s,a]=(0,o.useState)(t.children[0]),c=(0,o.useCallback)(function*(){for(yield f(t,0);;){let e=yield;for(let s=0;s<e.node.children.length;s++)yield f(e.node.children[s],e.nestingLevel+1)}},[t]),{value:d}=(0,i.k)(()=>(0,r.RN)(s.id),[s]),p=(0,o.useMemo)(()=>d?d.map(e=>({title:e.displayName,sub:e.name})):[],[d]);return(0,n.jsxs)("div",{className:"w-full flex",children:[(0,n.jsx)("div",{className:"p-5 bg-white rounded-l-lg mr-1 w-[20rem] h-[27rem] text-lg text-black",children:(0,n.jsx)(u.Provider,{value:[s,a],children:(0,n.jsx)(m.Z,{disableWidth:!0,children:e=>{let{height:t}=e;return(0,n.jsx)(x.NC,{width:"100%",height:t,itemSize:50,treeWalker:c,children:h})}})})}),(0,n.jsxs)("div",{className:"px-8 pt-[2.125rem] pb-8 flex-1 bg-white rounded-r-lg h-[27rem] flex justify-between",children:[(0,n.jsx)("div",{className:"flex-1 w-0",children:(0,n.jsx)(v,{node:s})}),(0,n.jsx)("div",{className:"w-[3.5rem]"}),(0,n.jsxs)("div",{className:"w-0 flex-1 flex flex-col",children:[(0,n.jsx)("div",{className:"text-lg font-bold mb-5",children:"Attributable to Carbon Activities:"}),(0,n.jsx)("div",{className:"flex-1 w-full overflow-y-auto",children:p.map((e,t)=>(0,n.jsx)(l.L6,{...e},"attrs_".concat(t)))})]})]})]})}},9299:function(e,t,s){"use strict";s.d(t,{Wc:function(){return a},cM:function(){return i},vz:function(){return r}});var n=s(1527),l=s(959);let i=(0,l.createContext)({activity:null,sourcing:0,update:()=>{}});function r(){return(0,l.useContext)(i)}function a(e){let[t,s]=(0,l.useState)({activity:null,sourcing:0,...e.init});(0,l.useEffect)(()=>{s(t=>({...t,...e.init}))},[e.init]);let r=(0,l.useCallback)(e=>{s(t=>({...t,...e}))},[]);return(0,n.jsx)(i.Provider,{value:{...t,update:r},children:e.children})}},3702:function(e,t,s){"use strict";s.d(t,{f:function(){return f}});var n=s(1527),l=s(3046),i=s(3273),r=s(4875),a=s.n(r),c=s(959),o=s(7994),d=s(9592),m=s(1004);function x(e){let{data:t,onBack:s}=e;return(0,n.jsxs)(l.u,{children:[(0,n.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,n.jsx)("button",{className:"text-2xl",onClick:s,children:(0,n.jsx)(o.$Ku,{})}),(0,n.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:t.name}),(0,n.jsx)("div",{className:"w-6"})]}),(0,n.jsxs)("div",{className:"p-5 w-full",children:[(0,n.jsx)("div",{className:"bg-white leading-normal text-black text-base font-semibold w-full whitespace-normal",children:t.name}),void 0!==t.carbon_emission&&(0,n.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"Total: ".concat((0,i.HN)(t.carbon_emission)," / ").concat(t.activityTypes.length," items")}),(0,n.jsx)("div",{className:"w-full mt-5",children:t.activityTypes.map((e,t)=>(0,n.jsx)(m.Zx,{title:"#".concat(t+1," ").concat(e.displayName),tit_r:void 0===e.carbon_emission?void 0:"".concat((0,i.HN)(e.carbon_emission)),sub:e.description},"attrs_source_".concat(t)))})]})]})}function u(e){let{data:t,index:s}=e,[l,r]=(0,d.Z)(!1);return(0,n.jsxs)("div",{className:"w-full min-h-[4.5rem] cursor-pointer p-3 flex flex-col justify-center border border-solid border-black rounded-lg",style:{marginTop:s>0?"1.25rem":"0px"},onClick:()=>r(!0),children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsxs)("div",{className:"w-0 flex-1",children:[(0,n.jsx)("div",{style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},className:a()("grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis"),children:t.name}),void 0!==t.carbon_emission&&(0,n.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat((0,i.HN)(t.carbon_emission)," / ").concat(t.activityTypes.length," items")})]}),(0,n.jsx)(o.mzm,{className:"text-2xl"})]}),l&&(0,n.jsx)(x,{data:t,onBack:e=>{r(!1),e.stopPropagation()}})]})}function f(e){let{data:t,onBack:s}=e;return(0,n.jsxs)(l.u,{children:[(0,n.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,n.jsx)("button",{className:"text-2xl",onClick:s,children:(0,n.jsx)(o.$Ku,{})}),(0,n.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:t.name}),(0,n.jsx)("div",{className:"w-6"})]}),(0,n.jsx)("div",{className:"p-5 w-full",children:t.processList.map((e,t)=>(0,n.jsx)(c.Fragment,{children:(0,n.jsx)(u,{data:e,index:t})},"sourcing_item_".concat(t)))})]})}},5462:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var n=s(1527),l=s(7008),i=s(4875),r=s.n(i),a=s(3190),c=s(3550),o=s(7994),d=s(6349),m=s(168);let x=[{icon:c.nf1,txt:"User Dashboard",to:"/dashboard"},{icon:o.Sx5,txt:"Product Definition",to:"/product"},{icon:l.Z,txt:"Carbon Activities",to:"/activities"},{icon:d.C4h,txt:"PCF Inventories",to:"/pcf"}];function u(e){let{className:t,children:s,...l}=e,{push:i,pathname:c}=(0,a.useRouter)();return(0,n.jsxs)(m.se,{className:"flex text-black !p-0 bg-white",children:[(0,n.jsx)("div",{className:"sticky self-start top-[4.25rem] w-[16.25rem] p-5 min-h-full mo:hidden",children:x.map((e,t)=>(0,n.jsxs)("div",{onClick:t=>{t.preventDefault(),i(e.to)},className:r()("cursor-pointer w-full py-3 pl-4 flex items-center flex-nowrap text-black rounded-lg",{"!text-green-2 bg-green-2/10":e.to===c}),children:[(0,n.jsx)(e.icon,{className:"mr-3 text-2xl"}),(0,n.jsx)("span",{className:"whitespace-nowrap text-lg font-medium",children:e.txt})]},"menus-".concat(t)))}),(0,n.jsx)("div",{className:r()("flex-1 p-5 min-h-full bg-gray-16 mo:w-full",t),...l,children:s})]})}},3046:function(e,t,s){"use strict";s.d(t,{u:function(){return c}});var n=s(1527),l=s(4875),i=s.n(l),r=s(959),a=s(422);function c(e){let{className:t,children:s,...l}=e,[c,o]=(0,r.useState)();return((0,r.useEffect)(()=>{let e=document.getElementById("__app");e&&o(e)},[]),c)?(0,a.createPortal)((0,n.jsx)("div",{...l,className:i()("fixed left-0 top-0 w-full h-full overflow-auto z-50 bg-white",t),children:s}),c):null}},4304:function(e,t,s){"use strict";s.d(t,{K:function(){return r}});var n=s(1527),l=s(4875),i=s.n(l);function r(e){let{index:t,full:s,bg:l="#dddddd",color:r="#227A30",className:a}=e;return(0,n.jsx)("div",{className:i()(a,"w-full h-[.625rem]"),style:{background:l},children:(0,n.jsx)("div",{style:{marginLeft:s?"0":"".concat(25*t,"%"),width:s?"100%":"25%",background:r},className:"h-full"})})}},8503:function(e,t,s){"use strict";s.d(t,{P:function(){return m},d:function(){return d}});var n=s(1527),l=s(4875),i=s.n(l),r=s(959),a=s(7994),c=s(9592),o=s(8723);function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[s,n]=(0,r.useState)(t);return(0,r.useEffect)(()=>{n(t)},[e,t]),{onChange:n,items:e,current:s}}function m(e){let{items:t,current:s,onChange:l,className:d}=e,m=t[s]?t[s].text:"",[x,u]=(0,c.Z)(!1),f=(0,r.useCallback)(e=>{s!==e&&l(e)},[s]),h=(0,r.useRef)(null);return((0,o.Z)(h,()=>x&&u(!1)),0===t.length)?null:(0,n.jsxs)("div",{ref:h,className:i()("bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",d),onClick:()=>u(),children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("span",{children:m}),x?(0,n.jsx)(a.pzk,{}):(0,n.jsx)(a._i7,{})]}),x&&(0,n.jsx)("div",{className:"absolute left-0 top-full w-full bg-white rounded-lg overflow-hidden",style:{border:"1px solid #DDDDDD"},children:t.map((e,t)=>(0,n.jsx)("div",{style:{borderTop:t>0?"1px solid #DDDDDD":void 0,backgroundColor:t===s?"rgba(0,0,0,0.1)":"transparent"},className:i()("w-full px-[20px] py-[8px] text-[16px] mo:text-xs"),onClick:()=>f(t),children:e.text},"select_item_".concat(t)))})]})}},9080:function(e,t,s){"use strict";s.d(t,{AR:function(){return i},ES:function(){return a},GF:function(){return r},RG:function(){return n},hm:function(){return c},z5:function(){return l}});let n=["Sourcing & Pre-treatment","Production","Distribution","Use & Disposal"];function l(){return n.map(e=>({name:e,processList:[],progress:0,carbon_emission:0}))}function i(){return n.map(e=>({name:e,processList:[]}))}function r(){return n.map(e=>({name:e,progress:0,carbon_emission:0,verified:!1}))}let a="/car.png",c="/org.png"},1004:function(e,t,s){"use strict";s.d(t,{L6:function(){return a},Zx:function(){return c}});var n=s(1527),l=s(4875),i=s.n(l);function r(e){let{txt:t,type:s,className:l,...r}=e;return(0,n.jsx)("div",{...r,className:i()(l,"px-[5px] py-[2px] rounded text-xs text-white",{"bg-blue-0":"blue"===s,"bg-orange-16":"orange"===s}),children:t})}function a(e){let{title:t,sub:s,badge:l=[]}=e;return(0,n.jsxs)("div",{style:{border:"1px solid #000000"},className:i()("rounded-lg py-3 pl-3 pr-4 w-full overflow-hidden [&:nth-child(n+2)]:mt-5"),children:[(0,n.jsx)("div",{className:"text-black text-base w-full overflow-hidden whitespace-nowrap text-ellipsis",children:t}),(0,n.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,n.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:s}),l.map((e,t)=>(0,n.jsx)(r,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}function c(e){let{title:t,sub:s,badge:l=[],tit_r:a}=e;return(0,n.jsxs)("div",{className:i()("rounded-lg py-3 pl-3 pr-[.4375rem] w-full overflow-hidden [&:nth-child(2n+1)]:bg-gray-16"),children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"text-black text-base overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:t}),(0,n.jsx)("div",{className:"flex-1"}),void 0!==a&&(0,n.jsx)("div",{className:"shrink-0 whitespace-nowrap text-sm font-semibold text-green-2",children:a})]}),(0,n.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,n.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:s}),(0,n.jsx)("div",{className:"flex-1"}),l.map((e,t)=>(0,n.jsx)(r,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}},7361:function(e,t,s){"use strict";s.d(t,{k:function(){return l}});var n=s(4e3);function l(e,t){let s=(0,n.Z)(e,t);return(s.error||s.loading)&&(s.value=void 0),s}},4910:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return U}});var n,l,i,r,a,c,o=s(1527),d=s(4186),m=s(9270),x=s(5462),u=s(8503),f=s(9080),h=s(3702),p=s(4304),v=s(3273),j=s(4875),b=s.n(j),w=s(8334),g=s(7994),N=s(9592);function y(e){let{data:t,index:s}=e,[n,l]=(0,N.Z)(!1);return(0,o.jsxs)("div",{className:b()("w-full p-5 bg-white rounded-lg text-black cursor-pointer [&:nth-child(n+2)]:mt-5"),onClick:()=>l(!0),children:[(0,o.jsx)(p.K,{index:s,className:"my-5"}),(0,o.jsx)("div",{className:"w-full whitespace-normal font-bold text-base",children:t.name}),(0,o.jsx)("div",{className:"w-full whitespace-nowrap text-sm mt-[.625rem]",children:"".concat((0,v.HN)(t.carbon_emission)," / ").concat(t.progress,"%")}),(0,o.jsxs)("div",{className:"flex justify-between items-center mt-3",children:[t.carbon_emission>0&&t.name!==f.RG.at(f.RG.length-1)?(0,o.jsx)(g.GcF,{className:"text-2xl "}):(0,o.jsx)(g.qCw,{className:"text-2xl"}),(0,o.jsx)(w.UE1,{className:"text-2xl text-green-2"})]}),n&&(0,o.jsx)(h.f,{data:t,onBack:e=>{l(),e.stopPropagation()}})]})}function _(e){let{data:t}=e;return(0,o.jsx)("div",{className:"rounded-lg w-full flex flex-col",children:t.map((e,t)=>(0,o.jsx)(y,{index:t,data:e},"mo_inventory_item_".concat(t)))})}var k=s(9299);function C(e){let{data:t,index:s}=e,{activity:n,update:l}=(0,k.vz)(),i=n===t;return(0,o.jsxs)("div",{className:b()("w-0 flex-1 text-black cursor-pointer [&:nth-child(n+2)]:ml-5",{"text-gray-9":!i}),onClick:()=>l({activity:t,sourcing:0}),children:[(0,o.jsx)(p.K,{full:!0,color:i?"#227A30":"transparent",index:s,className:"my-5"}),(0,o.jsx)("div",{className:"w-full whitespace-normal font-bold text-xl",children:t.name}),(0,o.jsx)("div",{className:"w-full whitespace-nowrap text-base mt-[.625rem]",children:"".concat((0,v.HN)(t.carbon_emission)," / ").concat(t.progress,"%")}),t.carbon_emission>0&&t.name!==f.RG.at(f.RG.length-1)?(0,o.jsx)(g.GcF,{className:"text-2xl mt-3"}):(0,o.jsx)(g.qCw,{className:"text-2xl mt-3"})]})}function Z(e){let{data:t}=e;return(0,o.jsx)("div",{className:"bg-white p-5 rounded-lg w-full flex",children:t.map((e,t)=>(0,o.jsx)(C,{index:t,data:e},"pc_inventory_item_".concat(t)))})}function E(e){let{data:t,index:s}=e,{sourcing:n,update:l}=(0,k.vz)(),i=n===s;return(0,o.jsxs)("div",{className:b()("relative w-full pr-[.625rem] cursor-pointer [&:nth-child(n+2)]:mt-5"),onClick:()=>l({sourcing:s}),children:[(0,o.jsxs)("div",{className:"w-full p-3 rounded-lg",style:{border:i?"1px solid #227A30":"1px solid #000000"},children:[(0,o.jsx)("div",{className:b()({"text-green-2":i},"text-base leading-normal w-full text-ellipsis whitespace-nowrap overflow-hidden"),children:t.name}),(0,o.jsx)("div",{className:b()(i?"text-green-2":"text-gray-6","text-sm mt-[.625rem]"),children:"".concat((0,v.HN)(t.carbon_emission)," / ").concat(t.activityTypes.length," items")})]}),i&&(0,o.jsx)("div",{style:{borderTop:"1px solid #227A30",borderRight:"1px solid #227A30"},className:"w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[calc(50%_-_.4419rem)] rotate-45"})]})}function P(e){let{data:t}=e;return(0,o.jsx)("div",{className:"bg-white p-5 rounded-lg w-0 flex-1",children:t.map((e,t)=>(0,o.jsx)(E,{data:e,index:t},"pc_inventory_item_".concat(t)))})}var D=s(1004);function M(e){let{data:t}=e;return(0,o.jsxs)("div",{className:"bg-white p-5 rounded-lg w-0 flex-1 ml-5",children:[(0,o.jsx)("div",{className:"text-base font-semibold leading-normal whitespace-normal",children:null==t?void 0:t.name}),(0,o.jsx)("div",{className:"mt-[.625rem] mb-4 text-sm text-gray-6",children:"Total: ".concat((null==t?void 0:t.carbon_emission)?(0,v.HN)(t.carbon_emission):"-"," / ").concat((null==t?void 0:t.activityTypes.length)||"-"," items")}),null==t?void 0:t.activityTypes.map((e,t)=>(0,o.jsx)(D.Zx,{title:"#".concat(t+1," ").concat(e.displayName),tit_r:"".concat((0,v.HN)(e.carbon_emission)),sub:e.description},"attrs_source_".concat(t)))]})}function O(e){let{data:t}=e;return(0,o.jsx)(k.Wc,{init:{activity:t[0]},children:(0,o.jsx)(k.cM.Consumer,{children:e=>{let{activity:s,sourcing:n}=e;return(0,o.jsxs)("div",{className:"w-full",children:[(0,o.jsx)(Z,{data:t}),(0,o.jsxs)("div",{className:"w-full flex mt-5",children:[(0,o.jsx)(P,{data:s.processList}),(0,o.jsx)(M,{data:s.processList[n]})]})]})}})})}var T=s(7361),L=s(4726),R=s(3190),S=s(959);function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}var H=function(e){return S.createElement("svg",A({width:"1em",viewBox:"0 0 50 51",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=S.createElement("g",{clipPath:"url(#co2e_svg__a)"},S.createElement("path",{d:"M3.39 18.836a2.542 2.542 0 1 0 5.084 0 2.542 2.542 0 0 0-5.084 0ZM22.458 10.362a2.542 2.542 0 1 0 5.084 0 2.542 2.542 0 0 0-5.084 0ZM11.44 10.362a2.117 2.117 0 0 0 2.93 1.957 2.12 2.12 0 1 0-2.93-1.957ZM34.322 10.786a2.118 2.118 0 1 0 4.236 0 2.118 2.118 0 0 0-4.236 0ZM42.797 9.514a1.695 1.695 0 1 0 3.389 0 1.695 1.695 0 0 0-3.39 0ZM3.39 9.938a1.695 1.695 0 1 0 3.39 0 1.695 1.695 0 0 0-3.39 0ZM23.305 1.887a1.695 1.695 0 1 0 3.39 0 1.695 1.695 0 0 0-3.39 0ZM14.83 3.158a1.27 1.27 0 1 0 2.542 0 1.27 1.27 0 0 0-2.541 0ZM31.78 4.43a1.271 1.271 0 1 0 2.542 0 1.271 1.271 0 0 0-2.542 0ZM41.95 18.412a2.544 2.544 0 0 0 3.514 2.35 2.543 2.543 0 1 0-3.515-2.35ZM28.161 27.993a3.268 3.268 0 0 0-2.542 1.093c-.647.726-.972 1.822-.975 3.288-.003 1.466.33 2.56 1 3.28a3.439 3.439 0 0 0 5.085 0c.627-.716.94-1.839.94-3.314 0-1.474-.317-2.542-.957-3.27a3.258 3.258 0 0 0-2.551-1.077Z"}),S.createElement("path",{d:"M41.525 24.2a10.169 10.169 0 0 0-16.101-7.69A10.169 10.169 0 0 0 9.36 23.92a10.593 10.593 0 0 0 2.928 20.764c.44 0 .88-.029 1.318-.085a14.406 14.406 0 0 0 22.788 0A10.593 10.593 0 0 0 41.525 24.2ZM19.271 37.956a5.432 5.432 0 0 1-3.39 1.013 5.484 5.484 0 0 1-4.173-1.734c-1.09-1.158-1.635-2.738-1.632-4.741 0-2.119.548-3.764 1.644-4.937a5.627 5.627 0 0 1 4.318-1.762 5.305 5.305 0 0 1 3.814 1.381c.639.65 1.09 1.462 1.305 2.348l-2.543.61a2.631 2.631 0 0 0-2.686-2.119 2.89 2.89 0 0 0-2.314.992c-.601.68-.902 1.78-.902 3.296 0 1.61.292 2.759.869 3.44a2.82 2.82 0 0 0 2.262 1.026 2.58 2.58 0 0 0 1.763-.648 3.784 3.784 0 0 0 1.076-2.03l2.504.767a5.606 5.606 0 0 1-1.915 3.098Zm13.382-.729c-1.13 1.161-2.625 1.742-4.483 1.742-1.86 0-3.366-.578-4.522-1.734-1.116-1.158-1.68-2.75-1.695-4.775a8.08 8.08 0 0 1 .58-3.267 6.01 6.01 0 0 1 1.196-1.746 4.946 4.946 0 0 1 1.648-1.148 7.008 7.008 0 0 1 2.746-.504 5.991 5.991 0 0 1 4.504 1.746c1.13 1.166 1.695 2.785 1.695 4.855 0 2.071-.556 3.681-1.67 4.831Zm8.398 2.797h-5.31c.065-.53.255-1.038.556-1.48a7.402 7.402 0 0 1 1.737-1.635c.367-.25.701-.545.996-.877a.988.988 0 0 0 .216-.572.661.661 0 0 0-.216-.496.741.741 0 0 0-.543-.207.758.758 0 0 0-.55.212 1.322 1.322 0 0 0-.293.754l-1.771-.144c.042-.412.172-.809.381-1.166.194-.285.466-.51.784-.644a3.572 3.572 0 0 1 1.403-.224c.493-.02.986.052 1.453.212.333.131.618.36.818.656.199.29.302.636.296.988a2.03 2.03 0 0 1-.339 1.11c-.34.46-.76.855-1.241 1.165-.356.246-.593.424-.716.517-.123.093-.259.229-.424.39h2.763v1.44Z"}))),l||(l=S.createElement("defs",null,S.createElement("clipPath",{id:"co2e_svg__a"},S.createElement("path",{fill:"#fff",transform:"translate(0 .192)",d:"M0 0h50v50H0z"})))))};function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}var F=function(e){return S.createElement("svg",B({width:"1em",viewBox:"0 0 60 58",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=S.createElement("path",{d:"M7.879 30.614c-.284-.284-.426-.568-.426-.994l-.071-.923c0-6.96 3.905-13.28 10.013-16.404.71-.427 1.633-.213 2.059.497.426.71.213 1.633-.497 2.059-.071.071-.071.071-.213.071-5.184 2.628-8.38 7.954-8.38 13.777 0 .284.071.497.071.781 0 .852-.568 1.562-1.42 1.562-.355.071-.781-.07-1.136-.426Zm9.418 15.1c-.64-.497-.781-1.492-.284-2.13.497-.64 1.491-.782 2.13-.285 5.113 3.267 11.718 3.338 16.76 0 .71-.426 1.633-.213 2.06.497.354.64.212 1.492-.427 1.989-6.107 3.977-13.919 3.977-20.097.07l-.142-.141Zm27.811-15.029c-.284-.284-.426-.71-.426-1.136 0-.284.071-.497.071-.781 0-5.823-3.196-11.15-8.45-13.848-.782-.355-.995-1.278-.64-2.06.355-.78 1.279-.994 2.06-.638 6.178 3.195 10.084 9.515 10.013 16.404v.852c0 .852-.781 1.491-1.563 1.42-.497.213-.852 0-1.065-.213Z"})),r||(r=S.createElement("path",{d:"M34.953 18.968c-.142-.142-.284-.284-.355-.497l-1.633-4.332c-.498-1.35.213-2.77 1.49-3.196l4.333-1.633c.78-.355 1.633.07 1.917.923.355.781-.07 1.633-.923 1.917l-3.906 1.492 1.492 3.905c.355.782-.072 1.634-.924 1.918a1.757 1.757 0 0 1-1.491-.497ZM3.547 29.69c-.568-.568-.568-1.563 0-2.13.568-.569 1.562-.569 2.13 0L8.66 30.4l2.84-2.983c.568-.568 1.563-.568 2.13 0 .569.569.569 1.563 0 2.13l-3.195 3.338c-.994.995-2.557.995-3.48.072L3.547 29.69ZM37.18 49.264c-.355-.355-.497-.923-.355-1.349l.781-4.048-4.048-.78c-.852-.143-1.35-.924-1.207-1.776.142-.852.923-1.35 1.775-1.208l4.616.924c1.42.284 2.202 1.633 1.989 2.982l-.995 4.545c-.142.852-.923 1.35-1.775 1.207-.284-.142-.568-.284-.781-.497Z"})))};function G(){return(G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}var I=function(e){return S.createElement("svg",G({width:"1em",viewBox:"0 0 50 51",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=S.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.144 32.192H40a8 8 0 0 1 0 16H28.144a9.985 9.985 0 0 0 3.999-8 9.985 9.985 0 0 0-4-8Zm-6.001-2H40c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-.69 0-1.364-.07-2.015-.203C3.428 49.057 0 45.025 0 40.192c0-5.523 4.477-10 10-10h12.143Z"})),c||(c=S.createElement("path",{d:"M29.808 23.008c.784 0 1.176-.536 1.176-1.608s-.392-1.608-1.176-1.608c-.768 0-1.152.536-1.152 1.608s.384 1.608 1.152 1.608Zm-2.88 1.368c-.736-.704-1.104-1.696-1.104-2.976s.368-2.272 1.104-2.976c.752-.704 1.72-1.056 2.904-1.056s2.144.352 2.88 1.056c.736.704 1.104 1.696 1.104 2.976s-.368 2.272-1.104 2.976c-.736.704-1.696 1.056-2.88 1.056s-2.152-.352-2.904-1.056Zm-8.76.816 9.24-16.896h3.96l-9.24 16.896h-3.96Zm1.536-11.496c.784 0 1.176-.536 1.176-1.608s-.392-1.608-1.176-1.608c-.768 0-1.152.536-1.152 1.608s.384 1.608 1.152 1.608Zm-2.88 1.368c-.736-.704-1.104-1.696-1.104-2.976s.368-2.272 1.104-2.976c.752-.704 1.72-1.056 2.904-1.056s2.144.352 2.88 1.056c.736.704 1.104 1.696 1.104 2.976s-.368 2.272-1.104 2.976c-.736.704-1.696 1.056-2.88 1.056s-2.152-.352-2.904-1.056Z"})))};function z(e){let{icon:t,tit:s,txt:n}=e;return(0,o.jsxs)("div",{className:"flex items-center w-full",children:[t,(0,o.jsxs)("div",{className:"ml-5 w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap mo:ml-6",children:[(0,o.jsx)("div",{className:"font-bold text-lg text-black mo:text-base",children:s}),(0,o.jsx)("div",{className:"text-gray-6 text-lg mo:text-base",children:n})]})]})}var U=function(){let{current:e,onChange:t,items:s,current_vin:n}=function(){var e;let{value:t}=(0,T.k)(L.mP),s=(0,S.useMemo)(()=>(t||[]).map(e=>({text:e})),[t]),{query:n}=(0,R.useRouter)(),l=(0,S.useMemo)(()=>{let e=n.vin;if(e){let t=s.findIndex(t=>t.text==e);if(t>=0)return t}return 0},[n,s]),{current:i,items:r,onChange:a}=(0,u.d)(s,l),c=(null===(e=s[i])||void 0===e?void 0:e.text)||"";return{vins:t,current:i,items:r,onChange:a,current_vin:c}}(),{value:l}=(0,T.k)(()=>n?(0,L.Ii)(n):Promise.resolve(void 0),[n]),{value:i}=(0,T.k)(()=>n?(0,L.ep)(n):Promise.resolve(void 0),[n]),r=(0,S.useMemo)(()=>{if(!l)return;let e=(0,f.z5)(),t={};e.forEach(e=>t[e.name]=e);let s=0;return l.forEach(e=>{var n,l;e.carbon_emission=0,e.activityTypes.forEach(t=>{t.carbon_emission=0,t.inventoryActivityList.forEach(e=>{t.carbon_emission+=e.ghgEmission,s+=e.ghgEmission}),e.carbon_emission+=t.carbon_emission}),null===(n=t[e.phase])||void 0===n||null===(l=n.processList)||void 0===l||l.push(e)}),e.forEach(e=>{e.processList.forEach(t=>{e.carbon_emission+=t.carbon_emission}),e.progress=s>0?Math.round(e.carbon_emission/s*100):0}),e},[l]),a=(0,S.useMemo)(()=>{if(!r)return"-";let e=0;return r.forEach(t=>{e+=t.carbon_emission}),e},[r]),c=(0,m.dD)();return(0,o.jsxs)(x.Z,{className:"text-black",children:[(0,o.jsx)("div",{className:"text-lg font-medium text-gray-6 mb-5 mo:text-[.9375rem]",children:"Query PCF Data with Vehicle’s VIN Code:"}),i&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.P,{current:e,onChange:t,items:s}),(0,o.jsxs)("div",{className:"w-full flex mo:flex-col",children:[(0,o.jsxs)("div",{className:"w-0 flex-[2] mr-5 mo:w-full",children:[(0,o.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg mo:my-5",children:"PRODUCT INFO"}),(0,o.jsxs)("div",{className:"bg-white rounded-lg p-5 h-[14.875rem] flex mo:flex-col mo:h-auto",children:[(0,o.jsx)("img",{className:"object-contain w-[16.25rem] h-full rounded-lg border border-solid border-black mo:w-full mo:aspect-[3/2]",src:(null==i?void 0:i.imageUrl)||f.ES}),(0,o.jsxs)("div",{className:"w-0 flex-1 ml-8 mo:mt-5 mo:ml-0 mo:w-full",children:[(0,o.jsx)(d.C6,{label:"Product Name",text:(null==i?void 0:i.displayName)||"-"}),(0,o.jsx)(d.C6,{label:"Product UID",text:(null==i?void 0:i.uuid)||"-"}),(0,o.jsx)(d.C6,{label:"Product Type",text:(null==i?void 0:i.type)||"-"}),(0,o.jsx)(d.C6,{label:"VIN Code",text:n||"-"}),(0,o.jsx)(d.C6,{label:"Status",text:"In Use/Ship-out on 2022-01-18"})]})]})]}),(0,o.jsxs)("div",{className:"w-0 flex-1 mo:w-full",children:[(0,o.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg mo:my-5",children:"INVENTORY STATS"}),(0,o.jsxs)("div",{className:"bg-white rounded-lg p-5 pl-8 h-[14.875rem] w-full flex flex-col justify-between mo:pl-6",children:[(0,o.jsx)(z,{icon:(0,o.jsx)(H,{className:"text-[3.125rem] text-green-2 mr-[.625rem]"}),tit:"Product CO2e Emission",txt:"".concat((0,v.HN)(a))}),(0,o.jsx)(z,{icon:(0,o.jsx)(F,{className:"text-[3.75rem] text-green-2"}),tit:"Emission Scope",txt:"Gradle-to-Grave"}),(0,o.jsx)(z,{icon:(0,o.jsx)(I,{className:"text-[3.125rem] text-green-2 mr-[.625rem]"}),tit:"Overall Data Quality",txt:"Primary Data=38.5%"})]})]})]}),(0,o.jsx)("div",{className:"text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5",children:"INVENTORY BREAKDOWN"}),r&&(0,o.jsx)(o.Fragment,{children:c?(0,o.jsx)(_,{data:r}):(0,o.jsx)(O,{data:r})})]})]})}}},function(e){e.O(0,[492,455,439,930,13,222,489,105,950,294,774,888,179],function(){return e(e.s=1643)}),_N_E=e.O()}]);