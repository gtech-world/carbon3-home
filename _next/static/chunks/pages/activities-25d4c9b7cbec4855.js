(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{608:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/activities",function(){return n(7514)}])},9299:function(e,t,n){"use strict";n.d(t,{Wc:function(){return o},cM:function(){return s},vz:function(){return a}});var r=n(1527),i=n(959);let s=(0,i.createContext)({activity:null,sourcing:0,update:()=>{}});function a(){return(0,i.useContext)(s)}function o(e){let[t,n]=(0,i.useState)({activity:null,sourcing:0,...e.init}),a=(0,i.useCallback)(e=>{n(t=>({...t,...e}))},[]);return(0,r.jsx)(s.Provider,{value:{...t,update:a},children:e.children})}},3702:function(e,t,n){"use strict";n.d(t,{f:function(){return f}});var r=n(1527),i=n(3046),s=n(4875),a=n.n(s),o=n(959),c=n(7994),l=n(9592),u=n(1004);function d(e){let{data:t,onBack:n}=e;return(0,r.jsxs)(i.u,{children:[(0,r.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,r.jsx)("button",{className:"text-2xl",onClick:n,children:(0,r.jsx)(c.$Ku,{})}),(0,r.jsx)("span",{className:"flex-grow-0 overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:t.name}),(0,r.jsx)("div",{className:"w-6"})]}),(0,r.jsxs)("div",{className:"p-5 w-full",children:[(0,r.jsx)("div",{className:"bg-white leading-normal text-black text-base font-semibold w-full whitespace-normal",children:t.name}),void 0!==t.carbon_emission&&(0,r.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat(t.carbon_emission,"kg / ").concat(t.boms.length," items")}),(0,r.jsx)("div",{className:"w-full mt-5",children:t.boms.map((e,t)=>(0,r.jsx)(u.Zx,{title:"#".concat(t+1," ").concat(e.name,"*").concat(e.count),tit_r:void 0===e.carbon_emission?void 0:"".concat(e.carbon_emission,"kg"),sub:e.calc,badge:[{type:"blue",txt:"".concat(e.count)},{type:"orange",txt:e.refData?"RefData":"Supplier"}]},"attrs_source_".concat(t)))})]})]})}function m(e){let{data:t,index:n}=e,[i,s]=(0,l.Z)(!1);return(0,r.jsxs)("div",{className:"w-full min-h-[4.5rem] cursor-pointer p-3 flex flex-col justify-center border border-solid border-black rounded-lg",style:{marginTop:n>0?"1.25rem":"0px"},onClick:()=>s(!0),children:[(0,r.jsx)("div",{style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},className:a()("grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis"),children:t.name}),void 0!==t.carbon_emission&&(0,r.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat(t.carbon_emission,"kg / ").concat(t.items," items")}),i&&(0,r.jsx)(d,{data:t,onBack:e=>{s(!1),e.stopPropagation()}})]})}function f(e){let{data:t,onBack:n}=e;return console.info("mobact2:",t),(0,r.jsxs)(i.u,{children:[(0,r.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,r.jsx)("button",{className:"text-2xl",onClick:n,children:(0,r.jsx)(c.$Ku,{})}),(0,r.jsx)("span",{className:"flex-grow-0 overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:t.name}),(0,r.jsx)("div",{className:"w-6"})]}),(0,r.jsx)("div",{className:"p-5 w-full",children:t.activityTypes.map((e,t)=>(0,r.jsx)(o.Fragment,{children:(0,r.jsx)(m,{data:e,index:t})},"sourcing_item_".concat(t)))})]})}},8416:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var r=n(8503),i=n(7361),s=n(4726),a=n(3190),o=n(959);function c(){let{value:e}=(0,i.k)(s.jw),t=(0,o.useMemo)(()=>(e||[]).map(e=>({...e,text:e.displayName})),e),{query:n}=(0,a.useRouter)(),c=(0,o.useMemo)(()=>{let e=n.product_id;if(e){let r=t.findIndex(t=>"".concat(t.id)==e);if(r>=0)return r}return 0},[n,t]),{current:l,items:u,onChange:d}=(0,r.d)(t,c),m=t[l];return{products:e,current:l,items:u,onChange:d,current_product:m}}},7514:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r,i=n(1527),s=n(9299),a=n(3702),o=n(3335),c=n(959);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){return c.createElement("svg",l({width:"1em",viewBox:"0 0 18 32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=c.createElement("path",{d:"M10.5 2a1.5 1.5 0 1 0-3 0h3ZM9 32l8.66-15H.34L9 32ZM7.5 2v16.5h3V2h-3Z"})))},d=n(4875),m=n.n(d),f=n(9592);function x(e){let{data:t}=e,{activity:n,update:r}=(0,s.vz)(),a=n===t;return(0,i.jsxs)("div",{className:"w-full h-[6.875rem] pr-[.625rem] relative cursor-pointer ",onClick:()=>r({activity:t,sourcing:0}),children:[(0,i.jsx)("div",{style:{border:a?"1px solid #227A30":"1px solid transparent"},className:m()("bg-white w-full h-full px-5 rounded-lg flex items-center justify-center"),children:(0,i.jsx)("div",{className:m()("font-bold grow-0 text-xl w-full whitespace-normal text-center break-words overflow-hidden",{"text-green-2":a}),children:t.name})}),(0,i.jsx)("div",{style:{borderTop:"1px solid #227A30",borderRight:"1px solid #227A30",display:a?"block":"none"},className:"w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[2.99555rem] rotate-45"})]})}function h(e){let{data:t}=e,[n,r]=(0,f.Z)(!1);return(0,i.jsxs)("div",{className:"bg-white grow-0 w-full h-[6.875rem] cursor-pointer px-5 rounded-lg flex items-center justify-center",onClick:()=>r(!0),children:[(0,i.jsx)("div",{className:m()("font-bold grow-0 text-xl whitespace-normal text-center break-words overflow-hidden"),children:t.name}),n&&(0,i.jsx)(a.f,{data:t,onBack:e=>{r(!1),e.stopPropagation()}})]})}function p(e){let{data:t}=e,n=(0,o.dD)();return(0,i.jsx)(i.Fragment,{children:t.map((e,r)=>(0,i.jsxs)(c.Fragment,{children:[n?(0,i.jsx)(h,{data:e}):(0,i.jsx)(x,{data:e}),r<t.length-1&&(0,i.jsx)(u,{className:"text-green-2 text-lg my-[.625rem]"})]},"activites_root_".concat(r)))})}function g(e){let{data:t}=e;return(0,i.jsx)("div",{className:"w-full flex flex-col items-center",children:(0,i.jsx)(p,{data:t})})}var v=n(1004);function b(e){let{data:t,index:n}=e,{sourcing:r,update:a}=(0,s.vz)(),o=r===n;return(0,i.jsxs)("div",{className:"w-full h-[4.5rem] pr-[.625rem] relative cursor-pointer",style:{marginTop:n>0?"1.25rem":"0px"},onClick:()=>a({sourcing:n}),children:[(0,i.jsx)("div",{className:m()("bg-white w-full h-full px-3 rounded-lg flex items-center border border-solid border-black",{"border-green-2":o}),children:(0,i.jsx)("div",{style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},className:m()(" grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis",{"text-green-2":o}),children:t.name})}),o&&(0,i.jsx)("div",{style:{borderTop:"1px solid #227A30",borderRight:"1px solid #227A30"},className:"w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[1.81rem] rotate-45"})]})}function w(e){let{data:t}=e;return(0,i.jsx)("div",{className:"flex-1 w-0 h-full overflow-y-auto ml-[.625rem] bg-white p-5 rounded-lg",children:t.map((e,t)=>(0,i.jsx)(c.Fragment,{children:(0,i.jsx)(b,{data:e,index:t})},"sourcing_item_".concat(t)))})}function j(e){let{data:t}=e;return(0,i.jsxs)("div",{className:"flex-1 w-0 h-full ml-[.625rem] flex flex-col bg-white p-5 rounded-lg overflow-y-auto",children:[(0,i.jsx)("div",{className:"bg-white shrink-0 leading-normal text-black text-base font-semibold w-full whitespace-normal pb-5",children:t.name}),(0,i.jsx)("div",{className:"w-full h-0 flex-1 overflow-y-auto",children:t.boms.map((e,t)=>(0,i.jsx)(v.Zx,{title:"#".concat(t+1," ").concat(e.name,"*").concat(e.count),sub:e.calc,badge:[{type:"blue",txt:"".concat(e.count)},{type:"orange",txt:e.refData?"RefData":"Supplier"}]},"attrs_source_".concat(t)))})]})}function y(e){let{data:t}=e;return(0,i.jsx)(s.Wc,{init:{activity:t[0]},children:(0,i.jsx)(s.cM.Consumer,{children:e=>{let{activity:n,sourcing:r}=e;return(0,i.jsxs)("div",{className:"flex w-full h-full max-h-[36.9375rem]",children:[(0,i.jsx)("div",{className:"w-[15rem] shrink-0 flex flex-col items-center",children:(0,i.jsx)(p,{data:t})}),(0,i.jsx)(w,{data:n.sourcings}),(0,i.jsx)(j,{data:n.sourcings[r]})]})}})})}var N=n(6890),k=n(8503),_=n(7361),P=n(8416),E=n(4726),C=function(){let{current:e,items:t,onChange:n,current_product:r}=(0,P.a)(),s=(0,o.dD)(),{value:a}=(0,_.k)(()=>r?(0,E.Vd)(r.id):Promise.resolve(void 0),[r]);(0,c.useMemo)(()=>{if(a&&0!==a.length)return a},[a]);let l=(0,c.useMemo)(()=>{let e=[{name:"Front Glass",count:1,calc:"Weight*Ref_Factor",refData:!0},{name:"Front Glass",count:2,calc:"RefData from Supplier YYY",refData:!0},{name:"Front Glass",count:1,calc:"RefData from Supplier YYY",refData:!0},{name:"Front Glass",count:3,calc:"RefData from Supplier YYY",refData:!0},{name:"Front Glass",count:1,calc:"Item #2: Climate System",refData:!0},{name:"Front Glass",count:4,calc:"Weight*Ref_Factor",refData:!0},{name:"Front Glass",count:1,calc:"Weight*Ref_Factor",refData:!0},{name:"Front Glass",count:3,calc:"Weight*Ref_Factor",refData:!0},{name:"Front Glass",count:1,calc:"Weight*Ref_Factor",refData:!0}],t=[{name:"Sourcing - Emission from Purchased Materials and Products,Sourcing - Emission from Purchased Materials and Products",boms:e},{name:"Sourcing - Emission from Purchasing Activities",boms:e},{name:"Pre-Processing - Direct Emission from Physical and Chemical Processes",boms:e},{name:"Pre-Processing - Indirect Emission from Electricity Consumption",boms:e},{name:"Pre-Processing - Indirect Emission from Electricity Consumption",boms:e},{name:"Pre-Processing - Indirect Emission from Electricity Consumption",boms:e},{name:"Pre-Processing - Indirect Emission from Electricity Consumption",boms:e},{name:"Pre-Processing - Indirect Emission from Electricity Consumption",boms:e},{name:"Pre-Processing - Indirect Emission from Electricity Consumption",boms:e}],n=[{name:"mater acquisition & pre-processing",sourcings:t},{name:"production",sourcings:JSON.parse(JSON.stringify(t))},{name:"distribution & storage",sourcings:JSON.parse(JSON.stringify(t))},{name:"use",sourcings:JSON.parse(JSON.stringify(t))}];return n},[]);return(0,i.jsxs)(N.Z,{className:"text-black",children:[(0,i.jsx)("div",{className:"text-lg font-medium text-gray-6 mb-5 mo:text-[.9375rem]",children:"Carbon Activities are subordinate to Products. Select a Product to view its Carbon Activites accountable for the PCF Inventory."}),(0,i.jsx)(k.P,{current:e,onChange:n,items:t}),(0,i.jsx)("div",{className:"text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5",children:"ACTIVITY DEFINITION"}),s?(0,i.jsx)(g,{data:l}):(0,i.jsx)(y,{data:l})]})}},4e3:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(959),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function s(e,t){void 0===t&&(t=[]);var n,s,a,o,c,l,u,d,m,f=(s={loading:!0},void 0===(n=t)&&(n=[]),void 0===s&&(s={loading:!1}),a=(0,r.useRef)(0),o=(0,r.useRef)(!1),c=(0,r.useCallback)(function(){return o.current},[]),(0,r.useEffect)(function(){return o.current=!0,function(){o.current=!1}},[]),u=(l=(0,r.useState)(s))[0],d=l[1],m=(0,r.useCallback)(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=++a.current;return u.loading||d(function(e){return i(i({},e),{loading:!0})}),e.apply(void 0,t).then(function(e){return c()&&r===a.current&&d({value:e,loading:!1}),e},function(e){return c()&&r===a.current&&d({error:e,loading:!1}),e})},n),[u,m]),x=f[0],h=f[1];return(0,r.useEffect)(function(){h()},[h]),x}},8723:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(959),i=["mousedown","touchstart"],s=function(e,t,n){void 0===n&&(n=i);var s=(0,r.useRef)(t);(0,r.useEffect)(function(){s.current=t},[t]),(0,r.useEffect)(function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&s.current(t)},r=0,i=n;r<i.length;r++){var a=i[r];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,a,t)}return function(){for(var e=0,r=n;e<r.length;e++){var i=r[e];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,i,t)}}},[n,e])}},9592:function(e,t,n){"use strict";var r=n(959),i=function(e,t){return"boolean"==typeof t?t:!e};t.Z=function(e){return(0,r.useReducer)(i,e)}}},function(e){e.O(0,[439,222,492,455,422,506,774,888,179],function(){return e(e.s=608)}),_N_E=e.O()}]);