(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[927],{9534:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oldTools/activities",function(){return n(7677)}])},9299:function(e,t,n){"use strict";n.d(t,{Wc:function(){return l},cM:function(){return i},vz:function(){return a}});var s=n(1527),r=n(959);const i=(0,r.createContext)({activity:null,sourcing:0,update:()=>{}});function a(){return(0,r.useContext)(i)}function l(e){const[t,n]=(0,r.useState)({activity:null,sourcing:0,...e.init});(0,r.useEffect)((()=>{n((t=>({...t,...e.init})))}),[e.init]);const a=(0,r.useCallback)((e=>{n((t=>({...t,...e})))}),[]);return(0,s.jsx)(i.Provider,{value:{...t,update:a},children:e.children})}},3702:function(e,t,n){"use strict";n.d(t,{f:function(){return h}});var s=n(1527),r=n(3046),i=n(3273),a=n(4875),l=n.n(a),c=n(959),o=n(8633),d=n(7067),u=n(9592),x=n(1004);function m(e){const{t:t}=(0,o.$G)(),{data:n,onBack:a}=e,l=n;return(0,s.jsxs)(r.u_,{children:[(0,s.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,s.jsx)("button",{className:"text-2xl",onClick:a,children:(0,s.jsx)(d.$Ku,{})}),(0,s.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:n.name}),(0,s.jsx)("div",{className:"w-6"})]}),(0,s.jsxs)("div",{className:"p-5 w-full",children:[(0,s.jsx)("div",{className:"bg-white leading-normal text-black text-base font-semibold w-full whitespace-normal",children:n.name}),void 0!==l.carbon_emission&&(0,s.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat(t("Total"),": ").concat((0,i.HN)(l.carbon_emission)," / ").concat(l.activityTypes.length," ").concat(t("items"))}),(0,s.jsx)("div",{className:"w-full mt-5",children:l.activityTypes.map(((e,t)=>(0,s.jsx)(x.Zx,{title:"#".concat(t+1," ").concat(e.displayName),tit_r:void 0===e.carbon_emission?void 0:"".concat((0,i.HN)(e.carbon_emission)),sub:e.description},"attrs_source_".concat(t))))})]})]})}function f(e){const{data:t,index:n}=e,[r,a]=(0,u.Z)(!1),c=t,{t:x}=(0,o.$G)();return(0,s.jsxs)("div",{className:"w-full min-h-[4.5rem] cursor-pointer p-3 flex flex-col justify-center border border-solid border-black rounded-lg",style:{marginTop:n>0?"1.25rem":"0px"},onClick:()=>a(!0),children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)("div",{className:"w-0 flex-1",children:[(0,s.jsx)("div",{style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},className:l()("grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis"),children:t.name}),void 0!==c.carbon_emission&&(0,s.jsx)("div",{className:"text-sm mt-[.625rem] text-gray-6",children:"".concat((0,i.HN)(c.carbon_emission)," / ").concat(c.activityTypes.length," ").concat(x("items"))})]}),(0,s.jsx)(d.mzm,{className:"text-2xl"})]}),r&&(0,s.jsx)(m,{data:t,onBack:e=>{a(!1),e.stopPropagation()}})]})}function h(e){const{data:t,onBack:n}=e,{t:i}=(0,o.$G)();return(0,s.jsxs)(r.u_,{children:[(0,s.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,s.jsx)("button",{className:"text-2xl",onClick:n,children:(0,s.jsx)(d.$Ku,{})}),(0,s.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:i(t.name)}),(0,s.jsx)("div",{className:"w-6"})]}),(0,s.jsx)("div",{className:"p-5 w-full",children:t.processList.map(((e,t)=>(0,s.jsx)(c.Fragment,{children:(0,s.jsx)(f,{data:e,index:t})},"sourcing_item_".concat(t))))})]})}},8503:function(e,t,n){"use strict";n.d(t,{P:function(){return x},d:function(){return u}});var s=n(1527),r=n(2132),i=n(4875),a=n.n(i),l=n(959),c=n(7067),o=n(9592),d=n(8723);function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const[n,s]=(0,l.useState)(t);return(0,l.useEffect)((()=>{s(t)}),[e,t]),{onChange:s,items:e,current:n}}function x(e){const{items:t,current:n,onChange:i,className:u}=e,x=t[n]?t[n].text:"",[m,f]=(0,o.Z)(!1),h=(0,l.useCallback)((e=>{n!==e&&i(e)}),[n]),p=(0,r.E)("t-side");return(0,d.Z)(p,(()=>m&&f(!1))),0===t.length?null:(0,s.jsxs)("div",{ref:p,className:a()("bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",u),onClick:()=>f(),children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("span",{className:"truncate",children:x}),m?(0,s.jsx)(c.pzk,{}):(0,s.jsx)(c._i7,{})]}),m&&(0,s.jsx)("div",{className:"max-h-[18rem] absolute left-0 w-full bg-white rounded-lg py-3 overflow-x-hidden overflow-y-auto",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,s.jsx)("div",{className:"",children:t.map(((e,t)=>(0,s.jsx)("div",{style:{},className:a()("w-full px-5 py-2 text-sm",{"text-green-2":t===n}),onClick:()=>h(t),children:e.text},"select_item_".concat(t))))})})]})}},8416:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var s=n(8503),r=n(7361),i=n(4726),a=n(3190),l=n(959);function c(){const{value:e,loading:t}=(0,r.k)(i.jw),n=(0,l.useMemo)((()=>(e||[]).map((e=>({...e,text:e.displayName})))),[e]),{query:c}=(0,a.useRouter)(),o=(0,l.useMemo)((()=>{const e=c.product_id;if(e){const t=n.findIndex((t=>"".concat(t.id)==e));if(t>=0)return t}return 0}),[c,n]),{current:d,items:u,onChange:x}=(0,s.d)(n,o),m=n[d];return{products:e,current:d,items:u,onChange:x,current_product:m,loading:t}}},7677:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var s,r=n(1527),i=n(9299),a=n(3702),l=n(9270),c=n(959);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},o.apply(this,arguments)}var d=function(e){return c.createElement("svg",o({width:"1em",viewBox:"0 0 18 32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=c.createElement("path",{d:"M10.5 2a1.5 1.5 0 1 0-3 0h3ZM9 32l8.66-15H.34L9 32ZM7.5 2v16.5h3V2h-3Z"})))},u=n(4875),x=n.n(u),m=n(8633),f=n(9592);function h(e){const{data:t}=e,{activity:n,update:s}=(0,i.vz)(),a=n===t,{t:l}=(0,m.$G)();return(0,r.jsxs)("div",{className:"w-full h-[6.875rem] pr-[.625rem] relative cursor-pointer ",onClick:()=>s({activity:t,sourcing:0}),children:[(0,r.jsx)("div",{style:{border:a?"1px solid #29953A":"1px solid transparent"},className:x()("bg-white w-full h-full px-5 rounded-lg flex items-center justify-center"),children:(0,r.jsx)("div",{className:x()("font-bold grow-0 text-xl w-full whitespace-normal text-center break-words overflow-hidden",{"text-green-2":a}),children:l(t.name)})}),(0,r.jsx)("div",{style:{borderTop:"1px solid #29953A",borderRight:"1px solid #29953A",display:a?"block":"none"},className:"w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[2.99555rem] rotate-45"})]})}function p(e){const{data:t}=e,{t:n}=(0,m.$G)(),[s,i]=(0,f.Z)(!1);return(0,r.jsxs)("div",{className:"bg-white grow-0 w-full h-[6.875rem] cursor-pointer px-5 rounded-lg flex items-center justify-center",onClick:()=>i(!0),children:[(0,r.jsx)("div",{className:x()("font-bold grow-0 text-xl whitespace-normal text-center break-words overflow-hidden"),children:n(t.name)}),s&&(0,r.jsx)(a.f,{data:t,onBack:e=>{i(!1),e.stopPropagation()}})]})}function v(e){const{data:t}=e,n=(0,l.dD)();return(0,r.jsx)(r.Fragment,{children:t.map(((e,s)=>(0,r.jsxs)(c.Fragment,{children:[n?(0,r.jsx)(p,{data:e}):(0,r.jsx)(h,{data:e}),s<t.length-1&&(0,r.jsx)(d,{className:"text-green-2 text-lg my-[.625rem]"})]},"activites_root_".concat(s))))})}function w(e){const{data:t}=e;return(0,r.jsx)("div",{className:"w-full flex flex-col items-center",children:(0,r.jsx)(v,{data:t})})}var g=n(1004);function b(e){const{data:t,index:n}=e,{sourcing:s,update:a}=(0,i.vz)(),l=s===n;return(0,r.jsxs)("div",{className:"w-full h-[4.5rem] pr-[.625rem] relative cursor-pointer",style:{marginTop:n>0?"1.25rem":"0px"},onClick:()=>a({sourcing:n}),children:[(0,r.jsx)("div",{className:x()("bg-white w-full h-full px-3 rounded-lg flex items-center border border-solid border-black",{"border-green-2":l}),children:(0,r.jsx)("div",{style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},className:x()(" grow-0 text-base w-full whitespace-normal break-words overflow-hidden text-ellipsis",{"text-green-2":l}),children:t.name})}),l&&(0,r.jsx)("div",{style:{borderTop:"1px solid #29953A",borderRight:"1px solid #29953A"},className:"w-[.8839rem] h-[.8839rem] bg-white absolute right-[.1875rem] top-[1.81rem] rotate-45"})]})}function j(e){const{data:t}=e;return(0,r.jsx)("div",{className:"flex-1 w-0 h-full overflow-y-auto ml-[.625rem] bg-white p-5 rounded-lg",children:t.map(((e,t)=>(0,r.jsx)(c.Fragment,{children:(0,r.jsx)(b,{data:e,index:t})},"sourcing_item_".concat(t))))})}function N(e){const{data:t}=e;return(0,r.jsxs)("div",{className:"flex-1 w-0 h-full ml-[.625rem] flex flex-col bg-white p-5 rounded-lg overflow-y-auto",children:[(0,r.jsx)("div",{className:"bg-white shrink-0 leading-normal text-black text-base font-semibold w-full whitespace-normal pb-5",children:(null===t||void 0===t?void 0:t.name)||""}),(0,r.jsx)("div",{className:"w-full h-0 flex-1 overflow-y-auto",children:null===t||void 0===t?void 0:t.activityTypes.map(((e,t)=>(0,r.jsx)(g.Zx,{title:"#".concat(t+1," ").concat(e.displayName),sub:e.description},"attrs_source_".concat(t))))})]})}function y(e){const{data:t}=e;return(0,r.jsx)(i.Wc,{init:{activity:t[0]},children:(0,r.jsx)(i.cM.Consumer,{children:e=>{let{activity:n,sourcing:s}=e;return(0,r.jsxs)("div",{className:"flex w-full h-full max-h-[36.9375rem]",children:[(0,r.jsx)("div",{className:"w-[15rem] shrink-0 flex flex-col items-center",children:(0,r.jsx)(v,{data:t})}),(0,r.jsx)(j,{data:n.processList}),(0,r.jsx)(N,{data:n.processList[s]})]})}})})}var k=n(8503),_=n(9080),C=n(7361),T=n(8416),E=n(4726),P=n(818),Z=n(7944);var A=function(){const{t:e}=(0,m.$G)(),{current:t,items:n,onChange:s,current_product:i,loading:a}=(0,T.a)(),o=(0,l.dD)(),{value:d,loading:u}=(0,C.k)((()=>i?(0,E.Vd)(i.id):Promise.resolve(void 0)),[i]),x=(0,c.useMemo)((()=>{if(!d)return;const e=(0,_.AR)(),t={};return e.forEach((e=>t[e.name]=e)),d.forEach((e=>{var n,s;return null===(n=t[e.phase])||void 0===n||null===(s=n.processList)||void 0===s?void 0:s.push(e)})),e}),[d]),f=a||u||void 0==d;return(0,r.jsx)(Z.m,{className:"text-black",children:f?(0,r.jsx)(P.g,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-lg font-medium text-gray-6 mb-5 mo:leading-5 mo:text-[.9375rem]",children:e("Carbon Activities are subordinate to Products. Select a Product to view its Carbon Activites accountable for the PCF Inventory.")}),(0,r.jsx)(k.P,{current:t,onChange:s,items:n}),(0,r.jsx)("div",{className:"text-2xl font-bold mb-5 mt-8 mo:text-lg mo:my-5",children:e("ACTIVITY DEFINITION")}),x&&(0,r.jsx)(r.Fragment,{children:o?(0,r.jsx)(w,{data:x}):(0,r.jsx)(y,{data:x})})]})})}},9592:function(e,t,n){"use strict";var s=n(959),r=function(e,t){return"boolean"===typeof t?t:!e};t.Z=function(e){return(0,s.useReducer)(r,e)}}},function(e){e.O(0,[713,769,307,574,570,18,774,888,179],(function(){return t=9534,e(e.s=t);var t}));var t=e.O();_N_E=t}]);