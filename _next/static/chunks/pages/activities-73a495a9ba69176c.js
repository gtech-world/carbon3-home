(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{608:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/activities",function(){return n(227)}])},9299:function(e,t,n){"use strict";n.d(t,{Wc:function(){return a},cM:function(){return i},vz:function(){return l}});var r=n(1527),s=n(959);let i=(0,s.createContext)({activity:null,sourcing:0,update:()=>{}});function l(){return(0,s.useContext)(i)}function a(e){let[t,n]=(0,s.useState)({activity:null,sourcing:0,...e.init});(0,s.useEffect)(()=>{n(t=>({...t,...e.init}))},[e.init]);let l=(0,s.useCallback)(e=>{n(t=>({...t,...e}))},[]);return(0,r.jsx)(i.Provider,{value:{...t,update:l},children:e.children})}},3702:function(e,t,n){"use strict";n.d(t,{f:function(){return f}});var r=n(1527),s=n(3046),i=n(3273),l=n(4875),a=n.n(l),c=n(959),o=n(7994),d=n(9592),u=n(1004);function x(e){let{data:t,onBack:n}=e;return(0,r.jsxs)(s.u,{children:[(0,r.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,r.jsx)("button",{className:"text-2xl",onClick:n,children:(0,r.jsx)(o.$Ku,{})}),(0,r.jsx)("span",{className:"flex-grow-0 overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:t.name}),(0,r.jsx)("div",{className:"w-6"})]}),(0,r.jsxs)("div",{className:"p-5 w-full",children:[(0,r.jsx)("div",{className:"bg-white leading-normal text-black text-base font-semibold w-full whitespace-normal",children:t.name}),void 0!==t.carbon_emission&&(0,r.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"Total: ".concat((0,i.HN)(t.carbon_emission)," / ").concat(t.activityTypes.length," items")}),(0,r.jsx)("div",{className:"w-full mt-5",children:t.activityTypes.map((e,t)=>(0,r.jsx)(u.Zx,{title:"#".concat(t+1," ").concat(e.displayName),tit_r:void 0===e.carbon_emission?void 0:"".concat((0,i.HN)(e.carbon_emission)),sub:e.description},"attrs_source_".concat(t)))})]})]})}function m(e){let{data:t,index:n}=e,[s,l]=(0,d.Z)(!1);return(0,r.jsxs)("div",{className:"w-full min-h-[4.5rem] cursor-pointer p-3 flex flex-col justify-center border border-solid border-black rounded-lg",style:{marginTop:n>0?"1.25rem":"0px"},onClick:()=>l(!0),children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsxs)("div",{className:"w-0 flex-1",children:[(0,r.jsx)("div",{style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},className:a()("grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis"),children:t.name}),void 0!==t.carbon_emission&&(0,r.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat((0,i.HN)(t.carbon_emission)," / ").concat(t.activityTypes.length," items")})]}),(0,r.jsx)(o.mzm,{className:"text-2xl"})]}),s&&(0,r.jsx)(x,{data:t,onBack:e=>{l(!1),e.stopPropagation()}})]})}function f(e){let{data:t,onBack:n}=e;return(0,r.jsxs)(s.u,{children:[(0,r.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,r.jsx)("button",{className:"text-2xl",onClick:n,children:(0,r.jsx)(o.$Ku,{})}),(0,r.jsx)("span",{className:"flex-grow-0 overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:t.name}),(0,r.jsx)("div",{className:"w-6"})]}),(0,r.jsx)("div",{className:"p-5 w-full",children:t.processList.map((e,t)=>(0,r.jsx)(c.Fragment,{children:(0,r.jsx)(m,{data:e,index:t})},"sourcing_item_".concat(t)))})]})}},5462:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(1527),s=n(7008),i=n(4875),l=n.n(i),a=n(3190),c=n(3550),o=n(7994),d=n(6349),u=n(168);let x=[{icon:c.nf1,txt:"User Dashboard",to:"/dashboard"},{icon:o.Sx5,txt:"Product Definition",to:"/product"},{icon:s.Z,txt:"Carbon Activities",to:"/activities"},{icon:d.C4h,txt:"PCF Inventories",to:"/pcf"}];function m(e){let{className:t,children:n,...s}=e,{push:i,pathname:c}=(0,a.useRouter)();return(0,r.jsxs)(u.se,{className:"flex text-black !p-0 bg-white",children:[(0,r.jsx)("div",{className:"sticky self-start top-[4.25rem] w-[16.25rem] p-5 min-h-full mo:hidden",children:x.map((e,t)=>(0,r.jsxs)("div",{onClick:t=>{t.preventDefault(),i(e.to)},className:l()("cursor-pointer w-full py-3 pl-4 flex items-center flex-nowrap text-black rounded-lg",{"!text-green-2 bg-green-2/10":e.to===c}),children:[(0,r.jsx)(e.icon,{className:"mr-3 text-2xl"}),(0,r.jsx)("span",{className:"whitespace-nowrap text-lg font-medium",children:e.txt})]},"menus-".concat(t)))}),(0,r.jsx)("div",{className:l()("flex-1 p-5 min-h-full bg-gray-16 mo:w-full",t),...s,children:n})]})}},3046:function(e,t,n){"use strict";n.d(t,{u:function(){return c}});var r=n(1527),s=n(4875),i=n.n(s),l=n(959),a=n(422);function c(e){let{className:t,children:n,...s}=e,[c,o]=(0,l.useState)();return((0,l.useEffect)(()=>{let e=document.getElementById("__app");e&&o(e)},[]),c)?(0,a.createPortal)((0,r.jsx)("div",{...s,className:i()("fixed left-0 top-0 w-full h-full overflow-auto z-50 bg-white",t),children:n}),c):null}},8503:function(e,t,n){"use strict";n.d(t,{P:function(){return u},d:function(){return d}});var r=n(1527),s=n(4875),i=n.n(s),l=n(959),a=n(7994),c=n(9592),o=n(8723);function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[n,r]=(0,l.useState)(t);return(0,l.useEffect)(()=>{r(t)},[e,t]),{onChange:r,items:e,current:n}}function u(e){let{items:t,current:n,onChange:s,className:d}=e,u=t[n]?t[n].text:"",[x,m]=(0,c.Z)(!1),f=(0,l.useCallback)(e=>{n!==e&&s(e)},[n]),h=(0,l.useRef)(null);return((0,o.Z)(h,()=>x&&m(!1)),0===t.length)?null:(0,r.jsxs)("div",{ref:h,className:i()("bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",d),onClick:()=>m(),children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("span",{children:u}),x?(0,r.jsx)(a.pzk,{}):(0,r.jsx)(a._i7,{})]}),x&&(0,r.jsx)("div",{className:"absolute left-0 top-full w-full bg-white rounded-lg overflow-hidden",style:{border:"1px solid #DDDDDD"},children:t.map((e,t)=>(0,r.jsx)("div",{style:{borderTop:t>0?"1px solid #DDDDDD":void 0,backgroundColor:t===n?"rgba(0,0,0,0.1)":"transparent"},className:i()("w-full px-[20px] py-[8px] text-[16px] mo:text-xs"),onClick:()=>f(t),children:e.text},"select_item_".concat(t)))})]})}},9080:function(e,t,n){"use strict";n.d(t,{AR:function(){return i},ES:function(){return a},GF:function(){return l},RG:function(){return r},hm:function(){return c},z5:function(){return s}});let r=["Sourcing & Pre-treatment","Production","Distribution","Use & Disposal"];function s(){return r.map(e=>({name:e,processList:[],progress:0,carbon_emission:0}))}function i(){return r.map(e=>({name:e,processList:[]}))}function l(){return r.map(e=>({name:e,progress:0,carbon_emission:0,verified:!1}))}let a="/car.png",c="/org.png"},1004:function(e,t,n){"use strict";n.d(t,{L6:function(){return a},Zx:function(){return c}});var r=n(1527),s=n(4875),i=n.n(s);function l(e){let{txt:t,type:n,className:s,...l}=e;return(0,r.jsx)("div",{...l,className:i()(s,"px-[5px] py-[2px] rounded text-xs text-white",{"bg-blue-0":"blue"===n,"bg-orange-16":"orange"===n}),children:t})}function a(e){let{title:t,sub:n,badge:s=[]}=e;return(0,r.jsxs)("div",{style:{border:"1px solid #000000"},className:i()("rounded-lg py-3 pl-3 pr-4 w-full overflow-hidden [&:nth-child(n+2)]:mt-5"),children:[(0,r.jsx)("div",{className:"text-black text-base w-full overflow-hidden whitespace-nowrap text-ellipsis",children:t}),(0,r.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,r.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:n}),s.map((e,t)=>(0,r.jsx)(l,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}function c(e){let{title:t,sub:n,badge:s=[],tit_r:a}=e;return(0,r.jsxs)("div",{className:i()("rounded-lg py-3 pl-3 pr-[.4375rem] w-full overflow-hidden [&:nth-child(2n+1)]:bg-gray-16"),children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"text-black text-base overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:t}),(0,r.jsx)("div",{className:"flex-1"}),void 0!==a&&(0,r.jsx)("div",{className:"shrink-0 whitespace-nowrap text-sm font-semibold text-green-2",children:a})]}),(0,r.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,r.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:n}),(0,r.jsx)("div",{className:"flex-1"}),s.map((e,t)=>(0,r.jsx)(l,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}},7361:function(e,t,n){"use strict";n.d(t,{k:function(){return s}});var r=n(4e3);function s(e,t){let n=(0,r.Z)(e,t);return(n.error||n.loading)&&(n.value=void 0),n}},8416:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var r=n(8503),s=n(7361),i=n(4726),l=n(3190),a=n(959);function c(){let{value:e}=(0,s.k)(i.jw),t=(0,a.useMemo)(()=>(e||[]).map(e=>({...e,text:e.displayName})),[e]),{query:n}=(0,l.useRouter)(),c=(0,a.useMemo)(()=>{let e=n.product_id;if(e){let r=t.findIndex(t=>"".concat(t.id)==e);if(r>=0)return r}return 0},[n,t]),{current:o,items:d,onChange:u}=(0,r.d)(t,c),x=t[o];return{products:e,current:o,items:d,onChange:u,current_product:x}}},227:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r,s=n(1527),i=n(9299),l=n(3702),a=n(9270),c=n(959);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=function(e){return c.createElement("svg",o({width:"1em",viewBox:"0 0 18 32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=c.createElement("path",{d:"M10.5 2a1.5 1.5 0 1 0-3 0h3ZM9 32l8.66-15H.34L9 32ZM7.5 2v16.5h3V2h-3Z"})))},u=n(4875),x=n.n(u),m=n(9592);function f(e){let{data:t}=e,{activity:n,update:r}=(0,i.vz)(),l=n===t;return(0,s.jsxs)("div",{className:"w-full h-[6.875rem] pr-[.625rem] relative cursor-pointer ",onClick:()=>r({activity:t,sourcing:0}),children:[(0,s.jsx)("div",{style:{border:l?"1px solid #227A30":"1px solid transparent"},className:x()("bg-white w-full h-full px-5 rounded-lg flex items-center justify-center"),children:(0,s.jsx)("div",{className:x()("font-bold grow-0 text-xl w-full whitespace-normal text-center break-words overflow-hidden",{"text-green-2":l}),children:t.name})}),(0,s.jsx)("div",{style:{borderTop:"1px solid #227A30",borderRight:"1px solid #227A30",display:l?"block":"none"},className:"w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[2.99555rem] rotate-45"})]})}function h(e){let{data:t}=e,[n,r]=(0,m.Z)(!1);return(0,s.jsxs)("div",{className:"bg-white grow-0 w-full h-[6.875rem] cursor-pointer px-5 rounded-lg flex items-center justify-center",onClick:()=>r(!0),children:[(0,s.jsx)("div",{className:x()("font-bold grow-0 text-xl whitespace-normal text-center break-words overflow-hidden"),children:t.name}),n&&(0,s.jsx)(l.f,{data:t,onBack:e=>{r(!1),e.stopPropagation()}})]})}function p(e){let{data:t}=e,n=(0,a.dD)();return(0,s.jsx)(s.Fragment,{children:t.map((e,r)=>(0,s.jsxs)(c.Fragment,{children:[n?(0,s.jsx)(h,{data:e}):(0,s.jsx)(f,{data:e}),r<t.length-1&&(0,s.jsx)(d,{className:"text-green-2 text-lg my-[.625rem]"})]},"activites_root_".concat(r)))})}function v(e){let{data:t}=e;return(0,s.jsx)("div",{className:"w-full flex flex-col items-center",children:(0,s.jsx)(p,{data:t})})}var w=n(1004);function g(e){let{data:t,index:n}=e,{sourcing:r,update:l}=(0,i.vz)(),a=r===n;return(0,s.jsxs)("div",{className:"w-full h-[4.5rem] pr-[.625rem] relative cursor-pointer",style:{marginTop:n>0?"1.25rem":"0px"},onClick:()=>l({sourcing:n}),children:[(0,s.jsx)("div",{className:x()("bg-white w-full h-full px-3 rounded-lg flex items-center border border-solid border-black",{"border-green-2":a}),children:(0,s.jsx)("div",{style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},className:x()(" grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis",{"text-green-2":a}),children:t.name})}),a&&(0,s.jsx)("div",{style:{borderTop:"1px solid #227A30",borderRight:"1px solid #227A30"},className:"w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[1.81rem] rotate-45"})]})}function b(e){let{data:t}=e;return(0,s.jsx)("div",{className:"flex-1 w-0 h-full overflow-y-auto ml-[.625rem] bg-white p-5 rounded-lg",children:t.map((e,t)=>(0,s.jsx)(c.Fragment,{children:(0,s.jsx)(g,{data:e,index:t})},"sourcing_item_".concat(t)))})}function j(e){let{data:t}=e;return(0,s.jsxs)("div",{className:"flex-1 w-0 h-full ml-[.625rem] flex flex-col bg-white p-5 rounded-lg overflow-y-auto",children:[(0,s.jsx)("div",{className:"bg-white shrink-0 leading-normal text-black text-base font-semibold w-full whitespace-normal pb-5",children:(null==t?void 0:t.name)||""}),(0,s.jsx)("div",{className:"w-full h-0 flex-1 overflow-y-auto",children:null==t?void 0:t.activityTypes.map((e,t)=>(0,s.jsx)(w.Zx,{title:"#".concat(t+1," ").concat(e.displayName),sub:e.description},"attrs_source_".concat(t)))})]})}function N(e){let{data:t}=e;return(0,s.jsx)(i.Wc,{init:{activity:t[0]},children:(0,s.jsx)(i.cM.Consumer,{children:e=>{let{activity:n,sourcing:r}=e;return(0,s.jsxs)("div",{className:"flex w-full h-full max-h-[36.9375rem]",children:[(0,s.jsx)("div",{className:"w-[15rem] shrink-0 flex flex-col items-center",children:(0,s.jsx)(p,{data:t})}),(0,s.jsx)(b,{data:n.processList}),(0,s.jsx)(j,{data:n.processList[r]})]})}})})}var y=n(5462),k=n(8503),_=n(9080),C=n(7361),D=n(8416),P=n(4726),E=function(){let{current:e,items:t,onChange:n,current_product:r}=(0,D.a)(),i=(0,a.dD)(),{value:l}=(0,C.k)(()=>r?(0,P.Vd)(r.id):Promise.resolve(void 0),[r]),o=(0,c.useMemo)(()=>{if(!l)return;let e=(0,_.AR)(),t={};return e.forEach(e=>t[e.name]=e),l.forEach(e=>{var n,r;return null===(n=t[e.phase])||void 0===n?void 0:null===(r=n.processList)||void 0===r?void 0:r.push(e)}),e},[l]);return(0,s.jsxs)(y.Z,{className:"text-black",children:[(0,s.jsx)("div",{className:"text-lg font-medium text-gray-6 mb-5 mo:leading-5 mo:text-[.9375rem]",children:"Carbon Activities are subordinate to Products. Select a Product to view its Carbon Activites accountable for the PCF Inventory."}),(0,s.jsx)(k.P,{current:e,onChange:n,items:t}),(0,s.jsx)("div",{className:"text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5",children:"ACTIVITY DEFINITION"}),o&&(0,s.jsx)(s.Fragment,{children:i?(0,s.jsx)(v,{data:o}):(0,s.jsx)(N,{data:o})})]})}},4e3:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(959),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function i(e,t){void 0===t&&(t=[]);var n,i,l,a,c,o,d,u,x,m=(i={loading:!0},void 0===(n=t)&&(n=[]),void 0===i&&(i={loading:!1}),l=(0,r.useRef)(0),a=(0,r.useRef)(!1),c=(0,r.useCallback)(function(){return a.current},[]),(0,r.useEffect)(function(){return a.current=!0,function(){a.current=!1}},[]),d=(o=(0,r.useState)(i))[0],u=o[1],x=(0,r.useCallback)(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=++l.current;return d.loading||u(function(e){return s(s({},e),{loading:!0})}),e.apply(void 0,t).then(function(e){return c()&&r===l.current&&u({value:e,loading:!1}),e},function(e){return c()&&r===l.current&&u({error:e,loading:!1}),e})},n),[d,x]),f=m[0],h=m[1];return(0,r.useEffect)(function(){h()},[h]),f}}},function(e){e.O(0,[492,455,439,930,13,222,105,294,774,888,179],function(){return e(e.s=608)}),_N_E=e.O()}]);