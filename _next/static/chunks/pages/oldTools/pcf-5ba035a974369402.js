(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2578],{9648:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oldTools/pcf",function(){return s(5153)}])},9572:function(e,t,s){"use strict";s.d(t,{C6:function(){return j},TU:function(){return w},xt:function(){return N}});var l=s(3342),n=s(3575),a=s(8384),r=s(1844),i=s(8591),c=s.n(i),o=s(9685),m=s(3155),d=s(7266),x=s(3782),u=s(3556),h=s(5616);let f=(0,o.createContext)(void 0),p=(e,t)=>({data:{id:e.id.toString(),isLeaf:0===e.children.length,isOpenByDefault:0===t,name:e.partDisplayName,nestingLevel:t,node:e},nestingLevel:t,node:e});function v(e){let{style:t,data:{name:s,nestingLevel:n,isLeaf:a,node:r},isOpen:i,setOpen:d}=e,[x,u]=(0,o.useContext)(f);return(0,l.jsxs)("div",{style:{...t,width:"max-content",marginLeft:"".concat(2.25*n+(a?2.25:0),"rem"),background:r===x?"rgba(34, 122, 48, 0.1)":"none"},className:c()("flex items-center px-5 py-3 rounded-lg",{"text-green-2":r===x}),children:[!a&&(0,l.jsx)("button",{onClick:()=>d(!i),className:"text-2xl mr-3",children:i?(0,l.jsx)(m.qT8,{}):(0,l.jsx)(m.Dwu,{})}),(0,l.jsx)("span",{className:c()("whitespace-nowrap cursor-pointer",{"font-bold":0===n}),onClick:()=>0!==n&&u(r),children:s})]})}function j(e){return(0,l.jsxs)("div",{className:"text-gray-6 text-lg whitespace-nowrap text-ellipsis overflow-hidden [&:nth-child(n+2)]:mt-4 mo:text-[.9375rem] mo:!mt-0",children:[(0,l.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]})}function N(e){var t;let{node:s}=e,{t:n}=(0,x.NT)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j,{label:n("Part Name"),text:s.partDisplayName}),(0,l.jsx)(j,{label:n("Part Type"),text:s.children.length>0?"Sub-system":"Bom"}),(0,l.jsx)(j,{label:n("BOM Genealogy Level"),text:"".concat(s.deep+1)}),(0,l.jsx)(j,{label:n("Parent"),text:(null===(t=s.parent)||void 0===t?void 0:t.partDisplayName)||"-"}),(0,l.jsx)(j,{label:n("Children"),text:"".concat(s.children.length||"No"," Child")}),(0,l.jsx)(j,{label:n("From Supplier"),text:s.supplierName||"-"}),(0,l.jsx)(j,{label:n("Last Update"),text:s.updateTime})]})}function w(e){let{node:t}=e,{t:s}=(0,x.NT)(),[i,c]=(0,o.useState)(t.children[0]),m=(0,o.useCallback)(function*(){for(yield p(t,0);;){let e=yield;for(let t=0;t<e.node.children.length;t++)yield p(e.node.children[t],e.nestingLevel+1)}},[t]),{value:j,loading:w}=(0,a.k)(()=>(0,r.RN)(i.id),[i]),g=(0,o.useMemo)(()=>j?j.map(e=>({title:e.displayName,sub:e.name})):[],[j]);return(0,l.jsxs)("div",{className:"w-full flex",children:[(0,l.jsx)("div",{className:"p-5 bg-white rounded-l-lg mr-1 w-[20rem] h-[27rem] text-lg text-black",children:(0,l.jsx)(f.Provider,{value:[i,c],children:(0,l.jsx)(u.ZP,{disableWidth:!0,children:e=>{let{height:t}=e;return(0,l.jsx)(h.NC,{width:"100%",height:t,itemSize:50,treeWalker:m,children:v})}})})}),(0,l.jsxs)("div",{className:"px-8 pt-[2.125rem] pb-8 flex-1 bg-white rounded-r-lg h-[27rem] flex justify-between",children:[(0,l.jsx)("div",{className:"flex-1 w-0",children:(0,l.jsx)(N,{node:i})}),(0,l.jsx)("div",{className:"w-[3.5rem]"}),(0,l.jsxs)("div",{className:"w-0 flex-1 flex flex-col",children:[(0,l.jsxs)("div",{className:"text-lg font-bold mb-5",children:[s("Attributable to Carbon Activities"),":"]}),w?(0,l.jsx)(d.g,{}):(0,l.jsx)("div",{className:"flex-1 w-full overflow-y-auto",children:g.map((e,t)=>(0,l.jsx)(n.L6,{...e},"attrs_".concat(t)))})]})]})]})}},1991:function(e,t,s){"use strict";s.d(t,{Wc:function(){return i},cM:function(){return a},vz:function(){return r}});var l=s(3342),n=s(9685);let a=(0,n.createContext)({activity:null,sourcing:0,update:()=>{}});function r(){return(0,n.useContext)(a)}function i(e){let[t,s]=(0,n.useState)({activity:null,sourcing:0,...e.init});(0,n.useEffect)(()=>{s(t=>({...t,...e.init}))},[e.init]);let r=(0,n.useCallback)(e=>{s(t=>({...t,...e}))},[]);return(0,l.jsx)(a.Provider,{value:{...t,update:r},children:e.children})}},5226:function(e,t,s){"use strict";s.d(t,{f:function(){return f}});var l=s(3342),n=s(9455),a=s(3782),r=s(5819),i=s(8591),c=s.n(i),o=s(9685),m=s(5295),d=s(2239),x=s(3575);function u(e){let{t}=(0,a.NT)(),{data:s,onBack:i}=e;return(0,l.jsxs)(n.u_,{children:[(0,l.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,l.jsx)("button",{className:"text-2xl",onClick:i,children:(0,l.jsx)(m.$Ku,{})}),(0,l.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:s.name}),(0,l.jsx)("div",{className:"w-6"})]}),(0,l.jsxs)("div",{className:"p-5 w-full",children:[(0,l.jsx)("div",{className:"bg-white leading-normal text-black text-base font-semibold w-full whitespace-normal",children:s.name}),void 0!==s.carbon_emission&&(0,l.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat(t("Total"),": ").concat((0,r.HN)(s.carbon_emission)," / ").concat(s.activityTypes.length," ").concat(t("items"))}),(0,l.jsx)("div",{className:"w-full mt-5",children:s.activityTypes.map((e,t)=>(0,l.jsx)(x.Zx,{title:"#".concat(t+1," ").concat(e.displayName),tit_r:void 0===e.carbon_emission?void 0:"".concat((0,r.HN)(e.carbon_emission)),sub:e.description},"attrs_source_".concat(t)))})]})]})}function h(e){let{data:t,index:s}=e,[n,i]=(0,d.Z)(!1),{t:o}=(0,a.NT)();return(0,l.jsxs)("div",{className:"w-full min-h-[4.5rem] cursor-pointer p-3 flex flex-col justify-center border border-solid border-black rounded-lg",style:{marginTop:s>0?"1.25rem":"0px"},onClick:()=>i(!0),children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsxs)("div",{className:"w-0 flex-1",children:[(0,l.jsx)("div",{style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},className:c()("grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis"),children:t.name}),void 0!==t.carbon_emission&&(0,l.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat((0,r.HN)(t.carbon_emission)," / ").concat(t.activityTypes.length," ").concat(o("items"))})]}),(0,l.jsx)(m.mzm,{className:"text-2xl"})]}),n&&(0,l.jsx)(u,{data:t,onBack:e=>{i(!1),e.stopPropagation()}})]})}function f(e){let{data:t,onBack:s}=e,{t:r}=(0,a.NT)();return(0,l.jsxs)(n.u_,{children:[(0,l.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,l.jsx)("button",{className:"text-2xl",onClick:s,children:(0,l.jsx)(m.$Ku,{})}),(0,l.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:r(t.name)}),(0,l.jsx)("div",{className:"w-6"})]}),(0,l.jsx)("div",{className:"p-5 w-full",children:t.processList.map((e,t)=>(0,l.jsx)(o.Fragment,{children:(0,l.jsx)(h,{data:e,index:t})},"sourcing_item_".concat(t)))})]})}},4822:function(e,t,s){"use strict";s.d(t,{H:function(){return i}});var l=s(3342),n=s(3782),a=s(8591),r=s.n(a);function i(e){let{className:t,children:s="Data not available for this input.",...a}=e,{t:i}=(0,n.NT)(),c="string"==typeof s?i(s):s;return(0,l.jsxs)("div",{...a,className:r()(t,"w-full h-full text-center text-lg text-black flex flex-col items-center"),children:[(0,l.jsx)("div",{className:"flex-1"}),c,(0,l.jsx)("div",{className:"flex-[2]"})]})}},7266:function(e,t,s){"use strict";s.d(t,{I:function(){return c},g:function(){return i}});var l=s(3342),n=s(8591),a=s.n(n),r=s(2138);function i(e){let{className:t,color:s,size:n="",...i}=e;return(0,l.jsx)("div",{...i,className:a()("text-black w-full h-full flex items-center justify-center",t),children:(0,l.jsx)(r.uur,{color:s,style:n?{fontSize:n}:{},className:"text-[3.125rem] animate-spin"})})}function c(){return(0,l.jsx)(i,{className:"fixed z-50 left-0 top-0 w-full !h-full bg-black/25"})}},4956:function(e,t,s){"use strict";s.d(t,{E:function(){return r},K:function(){return i}});var l=s(3342),n=s(8591),a=s.n(n);function r(e){let{value:t,bg:s="#dddddd",color:n="#29953A",className:r}=e;return(0,l.jsx)("div",{className:a()(r,"w-full h-[10px]"),style:{background:s},children:(0,l.jsx)("div",{style:{width:"".concat(t,"%"),transition:"width 200ms ease",background:n},className:"h-full"})})}function i(e){let{index:t,full:s,bg:n="#dddddd",color:r="#29953A",className:i}=e;return(0,l.jsx)("div",{className:a()(i,"w-full h-[10px]"),style:{background:n},children:(0,l.jsx)("div",{style:{marginLeft:s?"0":"".concat(25*t,"%"),width:s?"100%":"25%",background:r},className:"h-full"})})}},124:function(e,t,s){"use strict";s.d(t,{m:function(){return p}});var l=s(3342),n=s(107),a=s(8996),r=s(1882),i=s(3958),c=s(8591),o=s.n(c),m=s(2577),d=s(3917),x=s(5390),u=s(1608),h=s(8761);function f(e){let{children:t,className:s,tits:a,showQuery:r,isManager:c,...f}=e,{push:p}=(0,n.useRouter)(),v=(0,h.fo)();return(0,i.dD)(),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:o()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem] justify-between",s),...f,children:[(0,l.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>p("/"),children:[(0,l.jsx)(m.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,l.jsx)(d.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,l.jsx)(x.R,{menus:v,children:(0,l.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,l.jsx)(u.otZ,{})})})]})})}function p(e){let{className:t,canBack:s,children:i,link:c,isNew:m,containerClassName:d,...x}=e,{push:u}=(0,n.useRouter)(),h=(0,a.R)();return(0,l.jsxs)("div",{className:"relative flex flex-col flex-1 w-full h-full min-h-fit bg-gray-16",children:[(0,l.jsx)(f,{showQuery:!0,style:{top:"".concat(h,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,l.jsxs)("div",{className:o()("w-full h-full mx-auto px-[60px] flex flex-col flex-1",d,{" max-w-[90rem]":!m}),children:[s&&(0,l.jsxs)("div",{className:"flex items-center my-5 text-sm ".concat((null==c?void 0:c.pathName)?"cursor-default":"cursor-pointer"),onClick:()=>(null==c?void 0:c.pathName)?void 0:u("/carbon/service"),children:[!c&&(0,l.jsx)(r.YFh,{className:"text-lg"}),c&&"{}"!==JSON.stringify(c)?(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("span",{className:"text-[#000000] cursor-pointer font-bold  text-[14px]",onClick:()=>u(null==c?void 0:c.pathName),children:c.homeTitle}),(0,l.jsx)("div",{className:"mx-1 ",children:" / "}),(0,l.jsxs)("span",{className:"cu text-[#999999] font-normal text-[14px]",children:[" ",c.currentTitle]})]}):"返回"]}),(0,l.jsx)("div",{className:o()("flex flex-col ",t),children:i})]})]})}},3575:function(e,t,s){"use strict";s.d(t,{L6:function(){return i},Zx:function(){return c}});var l=s(3342),n=s(8591),a=s.n(n);function r(e){let{txt:t,type:s,className:n,...r}=e;return(0,l.jsx)("div",{...r,className:a()(n,"px-[5px] py-[2px] rounded text-xs text-white",{"bg-blue-0":"blue"===s,"bg-orange-16":"orange"===s}),children:t})}function i(e){let{title:t,sub:s,badge:n=[]}=e;return(0,l.jsxs)("div",{style:{border:"1px solid #000000"},className:a()("rounded-lg py-3 pl-3 pr-4 w-full overflow-hidden [&:nth-child(n+2)]:mt-5"),children:[(0,l.jsx)("div",{className:"text-black text-base w-full overflow-hidden whitespace-nowrap text-ellipsis",children:t}),(0,l.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,l.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:s}),n.map((e,t)=>(0,l.jsx)(r,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}function c(e){let{title:t,sub:s,badge:n=[],tit_r:i}=e;return(0,l.jsxs)("div",{className:a()("rounded-lg py-3 pl-3 pr-[.4375rem] w-full overflow-hidden [&:nth-child(2n+1)]:bg-gray-16"),children:[(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{className:"text-black text-base overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:t}),(0,l.jsx)("div",{className:"flex-1"}),void 0!==i&&(0,l.jsx)("div",{className:"shrink-0 whitespace-nowrap text-sm font-semibold text-green-2",children:i})]}),(0,l.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,l.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:s}),(0,l.jsx)("div",{className:"flex-1"}),n.map((e,t)=>(0,l.jsx)(r,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}},8384:function(e,t,s){"use strict";s.d(t,{k:function(){return a}});var l=s(9685),n=s(9251);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=(0,l.useRef)(!0),a=(0,l.useRef)(0),[,r]=(0,l.useState)(1),i=(0,l.useCallback)(e=>{s.current=e,r(e=>1-e)},[]),[c,o]=(0,n.Z)(e,t),m=()=>{s.current||i(!0);let e=a.current+1>1e5?0:a.current+1;a.current=e,o().finally(()=>a.current==e&&i(!1))};return(0,l.useEffect)(()=>{m()},t),(0,l.useMemo)(()=>({...c,value:s.current||c.error?void 0:c.value,loading:s.current,req:m}),[c,s.current])}},5153:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return q}});var l,n,a,r,i,c,o=s(3342),m=s(9572),d=s(3958),x=s(4822),u=s(7266),h=s(124),f=s(1768),p=s(5226),v=s(4956),j=s(3782),N=s(5819),w=s(8591),g=s.n(w),b=s(3155),y=s(5295),_=s(2239);function k(e){let{data:t,index:s}=e,{t:l}=(0,j.NT)(),[n,a]=(0,_.Z)(!1);return(0,o.jsxs)("div",{className:g()("w-full p-5 bg-white rounded-lg text-black cursor-pointer [&:nth-child(n+2)]:mt-5"),onClick:()=>a(!0),children:[(0,o.jsx)(v.K,{index:s,className:"my-5"}),(0,o.jsx)("div",{className:"w-full whitespace-normal font-bold text-base",children:l(t.name)}),(0,o.jsx)("div",{className:"w-full whitespace-nowrap text-sm mt-[.625rem]",children:"".concat((0,N.HN)(t.carbon_emission)," / ").concat(t.progress,"%")}),(0,o.jsxs)("div",{className:"flex justify-between items-center mt-3",children:[t.carbon_emission>0&&t.name!==f.RG[f.RG.length-1]?(0,o.jsx)(y.GcF,{className:"text-2xl "}):(0,o.jsx)(y.qCw,{className:"text-2xl"}),(0,o.jsx)(b.UE1,{className:"text-2xl text-green-2"})]}),n&&(0,o.jsx)(p.f,{data:t,onBack:e=>{a(),e.stopPropagation()}})]})}function C(e){let{data:t}=e;return(0,o.jsx)("div",{className:"rounded-lg w-full flex flex-col",children:t.map((e,t)=>(0,o.jsx)(k,{index:t,data:e},"mo_inventory_item_".concat(t)))})}var Z=s(1991);function E(e){let{data:t,index:s}=e,{t:l}=(0,j.NT)(),{activity:n,update:a}=(0,Z.vz)(),r=n===t;return(0,o.jsxs)("div",{className:g()("w-0 flex-1 text-black cursor-pointer [&:nth-child(n+2)]:ml-5",{"text-gray-9":!r}),onClick:()=>a({activity:t,sourcing:0}),children:[(0,o.jsx)(v.K,{full:!0,color:r?"#29953A":"transparent",index:s,className:"my-5"}),(0,o.jsx)("div",{className:"w-full whitespace-normal font-bold text-xl",children:l(t.name)}),(0,o.jsx)("div",{className:"w-full whitespace-nowrap text-base mt-[.625rem]",children:"".concat((0,N.HN)(t.carbon_emission)," / ").concat(t.progress,"%")}),t.carbon_emission>0&&t.name!==f.RG[f.RG.length-1]?(0,o.jsx)(y.GcF,{className:"text-2xl mt-3"}):(0,o.jsx)(y.qCw,{className:"text-2xl mt-3"})]})}function T(e){let{data:t}=e;return(0,o.jsx)("div",{className:"bg-white p-5 rounded-lg w-full flex",children:t.map((e,t)=>(0,o.jsx)(E,{index:t,data:e},"pc_inventory_item_".concat(t)))})}function M(e){let{data:t,index:s}=e,{sourcing:l,update:n}=(0,Z.vz)(),a=l===s,{t:r}=(0,j.NT)();return(0,o.jsxs)("div",{className:g()("relative w-full pr-[.625rem] cursor-pointer [&:nth-child(n+2)]:mt-5"),onClick:()=>n({sourcing:s}),children:[(0,o.jsxs)("div",{className:"w-full p-3 rounded-lg",style:{border:a?"1px solid #29953A":"1px solid #000000"},children:[(0,o.jsx)("div",{className:g()({"text-green-2":a},"text-base leading-normal w-full text-ellipsis whitespace-nowrap overflow-hidden"),children:t.name}),(0,o.jsx)("div",{className:g()(a?"text-green-2":"text-gray-6","text-sm mt-[.625rem]"),children:"".concat((0,N.HN)(t.carbon_emission)," / ").concat(t.activityTypes.length," ").concat(r("items"))})]}),a&&(0,o.jsx)("div",{style:{borderTop:"1px solid #29953A",borderRight:"1px solid #29953A"},className:"w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[calc(50%_-_.4419rem)] rotate-45"})]})}function O(e){let{data:t}=e;return(0,o.jsx)("div",{className:"bg-white p-5 rounded-lg w-0 flex-1",children:t.map((e,t)=>(0,o.jsx)(M,{data:e,index:t},"pc_inventory_item_".concat(t)))})}var P=s(3575);function R(e){let{data:t}=e,{t:s}=(0,j.NT)();return(0,o.jsxs)("div",{className:"bg-white p-5 rounded-lg w-0 flex-1 ml-5",children:[(0,o.jsx)("div",{className:"text-base font-semibold leading-normal whitespace-normal",children:null==t?void 0:t.name}),(0,o.jsx)("div",{className:"mt-[.625rem] mb-4 text-sm text-gray-6",children:"".concat(s("Total"),": ").concat((null==t?void 0:t.carbon_emission)?(0,N.HN)(t.carbon_emission):"-"," / ").concat((null==t?void 0:t.activityTypes.length)||"-"," ").concat(s("items"))}),null==t?void 0:t.activityTypes.map((e,t)=>(0,o.jsx)(P.Zx,{title:"#".concat(t+1," ").concat(e.displayName),tit_r:"".concat((0,N.HN)(e.carbon_emission)),sub:e.description},"attrs_source_".concat(t)))]})}function S(e){let{data:t}=e;return(0,o.jsx)(Z.Wc,{init:{activity:t[0]},children:(0,o.jsx)(Z.cM.Consumer,{children:e=>{let{activity:s,sourcing:l}=e;return(0,o.jsxs)("div",{className:"w-full",children:[(0,o.jsx)(T,{data:t}),(0,o.jsxs)("div",{className:"w-full flex mt-5",children:[(0,o.jsx)(O,{data:s.processList}),(0,o.jsx)(R,{data:s.processList[l]})]})]})}})})}var L=s(5631),H=s(1844),D=s(9685);function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e}).apply(this,arguments)}var A=function(e){return D.createElement("svg",I({width:"1em",viewBox:"0 0 50 51",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),l||(l=D.createElement("g",{clipPath:"url(#co2e_svg__a)"},D.createElement("path",{d:"M3.39 18.836a2.542 2.542 0 1 0 5.084 0 2.542 2.542 0 0 0-5.084 0ZM22.458 10.362a2.542 2.542 0 1 0 5.084 0 2.542 2.542 0 0 0-5.084 0ZM11.44 10.362a2.117 2.117 0 0 0 2.93 1.957 2.12 2.12 0 1 0-2.93-1.957ZM34.322 10.786a2.118 2.118 0 1 0 4.236 0 2.118 2.118 0 0 0-4.236 0ZM42.797 9.514a1.695 1.695 0 1 0 3.389 0 1.695 1.695 0 0 0-3.39 0ZM3.39 9.938a1.695 1.695 0 1 0 3.39 0 1.695 1.695 0 0 0-3.39 0ZM23.305 1.887a1.695 1.695 0 1 0 3.39 0 1.695 1.695 0 0 0-3.39 0ZM14.83 3.158a1.27 1.27 0 1 0 2.542 0 1.27 1.27 0 0 0-2.541 0ZM31.78 4.43a1.271 1.271 0 1 0 2.542 0 1.271 1.271 0 0 0-2.542 0ZM41.95 18.412a2.544 2.544 0 0 0 3.514 2.35 2.543 2.543 0 1 0-3.515-2.35ZM28.161 27.993a3.268 3.268 0 0 0-2.542 1.093c-.647.726-.972 1.822-.975 3.288-.003 1.466.33 2.56 1 3.28a3.439 3.439 0 0 0 5.085 0c.627-.716.94-1.839.94-3.314 0-1.474-.317-2.542-.957-3.27a3.258 3.258 0 0 0-2.551-1.077Z"}),D.createElement("path",{d:"M41.525 24.2a10.169 10.169 0 0 0-16.101-7.69A10.169 10.169 0 0 0 9.36 23.92a10.593 10.593 0 0 0 2.928 20.764c.44 0 .88-.029 1.318-.085a14.406 14.406 0 0 0 22.788 0A10.593 10.593 0 0 0 41.525 24.2ZM19.271 37.956a5.432 5.432 0 0 1-3.39 1.013 5.484 5.484 0 0 1-4.173-1.734c-1.09-1.158-1.635-2.738-1.632-4.741 0-2.119.548-3.764 1.644-4.937a5.627 5.627 0 0 1 4.318-1.762 5.305 5.305 0 0 1 3.814 1.381c.639.65 1.09 1.462 1.305 2.348l-2.543.61a2.631 2.631 0 0 0-2.686-2.119 2.89 2.89 0 0 0-2.314.992c-.601.68-.902 1.78-.902 3.296 0 1.61.292 2.759.869 3.44a2.82 2.82 0 0 0 2.262 1.026 2.58 2.58 0 0 0 1.763-.648 3.784 3.784 0 0 0 1.076-2.03l2.504.767a5.606 5.606 0 0 1-1.915 3.098Zm13.382-.729c-1.13 1.161-2.625 1.742-4.483 1.742-1.86 0-3.366-.578-4.522-1.734-1.116-1.158-1.68-2.75-1.695-4.775a8.08 8.08 0 0 1 .58-3.267 6.01 6.01 0 0 1 1.196-1.746 4.946 4.946 0 0 1 1.648-1.148 7.008 7.008 0 0 1 2.746-.504 5.991 5.991 0 0 1 4.504 1.746c1.13 1.166 1.695 2.785 1.695 4.855 0 2.071-.556 3.681-1.67 4.831Zm8.398 2.797h-5.31c.065-.53.255-1.038.556-1.48a7.402 7.402 0 0 1 1.737-1.635c.367-.25.701-.545.996-.877a.988.988 0 0 0 .216-.572.661.661 0 0 0-.216-.496.741.741 0 0 0-.543-.207.758.758 0 0 0-.55.212 1.322 1.322 0 0 0-.293.754l-1.771-.144c.042-.412.172-.809.381-1.166.194-.285.466-.51.784-.644a3.572 3.572 0 0 1 1.403-.224c.493-.02.986.052 1.453.212.333.131.618.36.818.656.199.29.302.636.296.988a2.03 2.03 0 0 1-.339 1.11c-.34.46-.76.855-1.241 1.165-.356.246-.593.424-.716.517-.123.093-.259.229-.424.39h2.763v1.44Z"}))),n||(n=D.createElement("defs",null,D.createElement("clipPath",{id:"co2e_svg__a"},D.createElement("path",{fill:"#fff",transform:"translate(0 .192)",d:"M0 0h50v50H0z"})))))};function F(){return(F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e}).apply(this,arguments)}var z=function(e){return D.createElement("svg",F({width:"1em",viewBox:"0 0 60 58",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=D.createElement("path",{d:"M7.879 30.614c-.284-.284-.426-.568-.426-.994l-.071-.923c0-6.96 3.905-13.28 10.013-16.404.71-.427 1.633-.213 2.059.497.426.71.213 1.633-.497 2.059-.071.071-.071.071-.213.071-5.184 2.628-8.38 7.954-8.38 13.777 0 .284.071.497.071.781 0 .852-.568 1.562-1.42 1.562-.355.071-.781-.07-1.136-.426Zm9.418 15.1c-.64-.497-.781-1.492-.284-2.13.497-.64 1.491-.782 2.13-.285 5.113 3.267 11.718 3.338 16.76 0 .71-.426 1.633-.213 2.06.497.354.64.212 1.492-.427 1.989-6.107 3.977-13.919 3.977-20.097.07l-.142-.141Zm27.811-15.029c-.284-.284-.426-.71-.426-1.136 0-.284.071-.497.071-.781 0-5.823-3.196-11.15-8.45-13.848-.782-.355-.995-1.278-.64-2.06.355-.78 1.279-.994 2.06-.638 6.178 3.195 10.084 9.515 10.013 16.404v.852c0 .852-.781 1.491-1.563 1.42-.497.213-.852 0-1.065-.213Z"})),r||(r=D.createElement("path",{d:"M34.953 18.968c-.142-.142-.284-.284-.355-.497l-1.633-4.332c-.498-1.35.213-2.77 1.49-3.196l4.333-1.633c.78-.355 1.633.07 1.917.923.355.781-.07 1.633-.923 1.917l-3.906 1.492 1.492 3.905c.355.782-.072 1.634-.924 1.918a1.757 1.757 0 0 1-1.491-.497ZM3.547 29.69c-.568-.568-.568-1.563 0-2.13.568-.569 1.562-.569 2.13 0L8.66 30.4l2.84-2.983c.568-.568 1.563-.568 2.13 0 .569.569.569 1.563 0 2.13l-3.195 3.338c-.994.995-2.557.995-3.48.072L3.547 29.69ZM37.18 49.264c-.355-.355-.497-.923-.355-1.349l.781-4.048-4.048-.78c-.852-.143-1.35-.924-1.207-1.776.142-.852.923-1.35 1.775-1.208l4.616.924c1.42.284 2.202 1.633 1.989 2.982l-.995 4.545c-.142.852-.923 1.35-1.775 1.207-.284-.142-.568-.284-.781-.497Z"})))};function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e}).apply(this,arguments)}var G=function(e){return D.createElement("svg",B({width:"1em",viewBox:"0 0 50 51",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=D.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.144 32.192H40a8 8 0 0 1 0 16H28.144a9.985 9.985 0 0 0 3.999-8 9.985 9.985 0 0 0-4-8Zm-6.001-2H40c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-.69 0-1.364-.07-2.015-.203C3.428 49.057 0 45.025 0 40.192c0-5.523 4.477-10 10-10h12.143Z"})),c||(c=D.createElement("path",{d:"M29.808 23.008c.784 0 1.176-.536 1.176-1.608s-.392-1.608-1.176-1.608c-.768 0-1.152.536-1.152 1.608s.384 1.608 1.152 1.608Zm-2.88 1.368c-.736-.704-1.104-1.696-1.104-2.976s.368-2.272 1.104-2.976c.752-.704 1.72-1.056 2.904-1.056s2.144.352 2.88 1.056c.736.704 1.104 1.696 1.104 2.976s-.368 2.272-1.104 2.976c-.736.704-1.696 1.056-2.88 1.056s-2.152-.352-2.904-1.056Zm-8.76.816 9.24-16.896h3.96l-9.24 16.896h-3.96Zm1.536-11.496c.784 0 1.176-.536 1.176-1.608s-.392-1.608-1.176-1.608c-.768 0-1.152.536-1.152 1.608s.384 1.608 1.152 1.608Zm-2.88 1.368c-.736-.704-1.104-1.696-1.104-2.976s.368-2.272 1.104-2.976c.752-.704 1.72-1.056 2.904-1.056s2.144.352 2.88 1.056c.736.704 1.104 1.696 1.104 2.976s-.368 2.272-1.104 2.976c-.736.704-1.696 1.056-2.88 1.056s-2.152-.352-2.904-1.056Z"})))},K=s(107),U=s(1882),W=s(9251);function V(e){let{icon:t,tit:s,txt:l}=e;return(0,o.jsxs)("div",{className:"flex items-center w-full",children:[t,(0,o.jsxs)("div",{className:"ml-5 w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap mo:ml-2",children:[(0,o.jsx)("div",{className:"font-bold text-lg text-black mo:text-base",children:s}),(0,o.jsx)("div",{className:"text-gray-6 text-lg mo:text-base",children:l})]})]})}var q=function(){let{t:e}=(0,j.NT)(),{query:t}=(0,K.useRouter)(),s=t.vin,[l,n]=(0,_.Z)(!1),[a,r]=(0,D.useState)(s||""),[i,c]=(0,D.useState)(""),p=(0,d.h3)(),[{value:[v,w]=[void 0,void 0],loading:g},b]=(0,W.Z)(e=>Promise.all([(0,H.Ii)(e),(0,H.ep)(e)]),[]),y=(0,D.useCallback)(e=>{r(e.target.value||""),n(!1)},[]),k=(0,L.R)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a||"";if(!g){if(!e)return p("Please input VIN Code");b(e).then(t=>{t[0]?(c(e),sessionStorage.setItem("last_vin",e)):sessionStorage.removeItem("last_vin")}).catch(p).then(()=>{n(!0)})}});(0,D.useEffect)(()=>{let e=sessionStorage.getItem("last_vin")||"",t=s||e;t&&(r(t),k(t))},[s]);let Z=(0,D.useMemo)(()=>{if(!v)return;let e=(0,f.z5)(),t={};e.forEach(e=>t[e.name]=e);let s=0;return v.forEach(e=>{var l,n;e.carbon_emission=0,e.activityTypes.forEach(t=>{t.carbon_emission=0,t.inventoryActivityList.forEach(e=>{t.carbon_emission+=e.ghgEmission,s+=e.ghgEmission}),e.carbon_emission+=t.carbon_emission}),null===(n=t[e.phase])||void 0===n||null===(l=n.processList)||void 0===l||l.push(e)}),e.forEach(e=>{e.processList.forEach(t=>{e.carbon_emission+=t.carbon_emission}),e.progress=s>0?Math.round(e.carbon_emission/s*100):0}),e},[v]),E=(0,D.useMemo)(()=>{if(!Z)return"-";let e=0;return Z.forEach(t=>{e+=t.carbon_emission}),e},[Z]),T=(0,d.dD)();return(0,o.jsxs)(h.m,{children:[(0,o.jsxs)("div",{className:"text-lg font-medium text-gray-6 mb-5 mo:text-[.9375rem]",children:[e("Query PCF Data with Vehicle’s VIN Code"),":"]}),(0,o.jsxs)("div",{className:"relative flex-shrink-0 w-[31.25rem] mo:w-auto rounded-lg overflow-hidden bg-white",children:[(0,o.jsx)("input",{className:"h-full w-full py-3 pl-5 pr-14 text-lg outline-none",maxLength:32,type:"text",onKeyDown:e=>"Enter"===e.code&&k(),value:a,placeholder:"点击填充示例车辆编码",onChange:y,onFocus:()=>{if(a)return!1;let e=sessionStorage.getItem("last_vin")||"1500101202311001";e&&r(e)}}),(0,o.jsx)(U.jRj,{className:"absolute text-lg top-[1.0625rem] right-5 cursor-pointer",onClick:()=>k()})]}),g?(0,o.jsx)(u.g,{className:"flex-1"}):(0,o.jsx)(o.Fragment,{children:w?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex mo:flex-col",children:[(0,o.jsxs)("div",{className:"w-0 flex-[5] mr-5 mo:w-full",children:[(0,o.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg mo:my-5",children:e("PRODUCT INFO")}),(0,o.jsxs)("div",{className:"bg-white rounded-lg p-5 h-[14.875rem] flex mo:flex-col mo:h-auto",children:[(0,o.jsx)("img",{className:"object-contain w-[16.25rem] h-full rounded-lg border border-solid border-black mo:w-full mo:aspect-[3/2]",src:(null==w?void 0:w.imageUrl)||f.ES}),(0,o.jsxs)("div",{className:"w-0 flex-1 ml-8 mo:mt-5 mo:ml-0 mo:w-full",children:[(0,o.jsx)(m.C6,{label:e("Product Name"),text:(null==w?void 0:w.displayName)||"-"}),(0,o.jsx)(m.C6,{label:e("Product UID"),text:(null==w?void 0:w.uuid)||"-"}),(0,o.jsx)(m.C6,{label:e("Product Type"),text:(null==w?void 0:w.type)||"-"}),(0,o.jsx)(m.C6,{label:e("VIN Code"),text:i||"-"}),(0,o.jsx)(m.C6,{label:e("Status"),text:"In Use/Ship-out on 2022-01-18"})]})]})]}),(0,o.jsxs)("div",{className:"w-0 flex-[3] mo:w-full",children:[(0,o.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg mo:my-5",children:e("INVENTORY STATS")}),(0,o.jsxs)("div",{className:"bg-white rounded-lg p-5 pl-8 h-[14.875rem] w-full flex flex-col justify-between mo:pl-5",children:[(0,o.jsx)(V,{icon:(0,o.jsx)(A,{className:"text-[3.125rem] mo:text-[2.5rem] text-green-2 mr-[.625rem]"}),tit:e("Product CO2e Emission"),txt:"".concat((0,N.HN)(E))}),(0,o.jsx)(V,{icon:(0,o.jsx)(z,{className:"text-[3.75rem] mo:text-[3rem] text-green-2"}),tit:e("Emission Scope"),txt:"Gradle-to-Grave"}),(0,o.jsx)(V,{icon:(0,o.jsx)(G,{className:"text-[3.125rem] mo:text-[2.5rem] text-green-2 mr-[.625rem]"}),tit:e("Overall Data Quality"),txt:"Primary Data=38.5%"})]})]})]}),(0,o.jsx)("div",{className:"text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5",children:e("INVENTORY BREAKDOWN")}),Z&&(0,o.jsx)(o.Fragment,{children:T?(0,o.jsx)(C,{data:Z}):(0,o.jsx)(S,{data:Z})})]}):a&&l?(0,o.jsx)(x.H,{className:"flex-1"}):null})]})}}},function(e){e.O(0,[3268,1271,7588,7038,976,8967,8761,9774,2888,179],function(){return e(e.s=9648)}),_N_E=e.O()}]);