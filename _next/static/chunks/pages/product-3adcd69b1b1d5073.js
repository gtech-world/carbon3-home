(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{7394:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return l(4448)}])},4186:function(e,t,l){"use strict";l.d(t,{C6:function(){return h},TU:function(){return j},xt:function(){return b}});var n=l(1527),s=l(1004),r=l(7361),a=l(4726),i=l(4875),o=l.n(i),c=l(959),d=l(8334),x=l(8370),m=l(9550);let u=(0,c.createContext)(void 0),p=(e,t)=>({data:{id:e.id.toString(),isLeaf:0===e.children.length,isOpenByDefault:0===t,name:e.partDisplayName,nestingLevel:t,node:e},nestingLevel:t,node:e});function f(e){let{style:t,data:{name:l,nestingLevel:s,isLeaf:r,node:a},isOpen:i,setOpen:x}=e,[m,p]=(0,c.useContext)(u);return(0,n.jsxs)("div",{style:{...t,width:"max-content",marginLeft:"".concat(2.25*s+(r?2.25:0),"rem"),background:a===m?"rgba(34, 122, 48, 0.1)":"none"},className:o()("flex items-center px-5 py-3 rounded-lg",{"text-green-2":a===m}),children:[!r&&(0,n.jsx)("button",{onClick:()=>x(!i),className:"text-2xl mr-3",children:i?(0,n.jsx)(d.qT8,{}):(0,n.jsx)(d.Dwu,{})}),(0,n.jsx)("span",{className:o()("whitespace-nowrap cursor-pointer",{"font-bold":0===s}),onClick:()=>0!==s&&p(a),children:l})]})}function h(e){return(0,n.jsxs)("div",{className:"text-gray-6 text-lg whitespace-nowrap text-ellipsis overflow-hidden [&:nth-child(n+2)]:mt-4 mo:text-[.9375rem] mo:!mt-0",children:[(0,n.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]})}function b(e){var t;let{node:l}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{label:"Part Name",text:l.partDisplayName}),(0,n.jsx)(h,{label:"Part Type",text:l.children.length>0?"Sub-system":"Bom"}),(0,n.jsx)(h,{label:"BOM Genealogy Level",text:"".concat(l.deep+1)}),(0,n.jsx)(h,{label:"Parent",text:(null===(t=l.parent)||void 0===t?void 0:t.partDisplayName)||"-"}),(0,n.jsx)(h,{label:"Children",text:"".concat(l.children.length||"No"," Child")}),(0,n.jsx)(h,{label:"From Supplier",text:l.supplierName||"-"}),(0,n.jsx)(h,{label:"Last Update",text:l.updateTime})]})}function j(e){let{node:t}=e,[l,i]=(0,c.useState)(t.children[0]),o=(0,c.useCallback)(function*(){for(yield p(t,0);;){let e=yield;for(let l=0;l<e.node.children.length;l++)yield p(e.node.children[l],e.nestingLevel+1)}},[t]),{value:d}=(0,r.k)(()=>(0,a.RN)(l.id),[l]),h=(0,c.useMemo)(()=>d?d.map(e=>({title:e.displayName,sub:e.name})):[],[d]);return(0,n.jsxs)("div",{className:"w-full flex",children:[(0,n.jsx)("div",{className:"p-5 bg-white rounded-l-lg mr-1 w-[20rem] h-[27rem] text-lg text-black",children:(0,n.jsx)(u.Provider,{value:[l,i],children:(0,n.jsx)(x.Z,{disableWidth:!0,children:e=>{let{height:t}=e;return(0,n.jsx)(m.NC,{width:"100%",height:t,itemSize:50,treeWalker:o,children:f})}})})}),(0,n.jsxs)("div",{className:"px-8 pt-[2.125rem] pb-8 flex-1 bg-white rounded-r-lg h-[27rem] flex justify-between",children:[(0,n.jsx)("div",{className:"flex-1 w-0",children:(0,n.jsx)(b,{node:l})}),(0,n.jsx)("div",{className:"w-[3.5rem]"}),(0,n.jsxs)("div",{className:"w-0 flex-1 flex flex-col",children:[(0,n.jsx)("div",{className:"text-lg font-bold mb-5",children:"Attributable to Carbon Activities:"}),(0,n.jsx)("div",{className:"flex-1 w-full overflow-y-auto",children:h.map((e,t)=>(0,n.jsx)(s.L6,{...e},"attrs_".concat(t)))})]})]})]})}},5462:function(e,t,l){"use strict";l.d(t,{Z:function(){return u}});var n=l(1527),s=l(7008),r=l(4875),a=l.n(r),i=l(3190),o=l(3550),c=l(7994),d=l(6349),x=l(168);let m=[{icon:o.nf1,txt:"User Dashboard",to:"/dashboard"},{icon:c.Sx5,txt:"Product Definition",to:"/product"},{icon:s.Z,txt:"Carbon Activities",to:"/activities"},{icon:d.C4h,txt:"PCF Inventories",to:"/pcf"}];function u(e){let{className:t,children:l,...s}=e,{push:r,pathname:o}=(0,i.useRouter)();return(0,n.jsxs)(x.se,{className:"flex text-black !p-0 bg-white",children:[(0,n.jsx)("div",{className:"sticky self-start top-[4.25rem] w-[16.25rem] p-5 min-h-full mo:hidden",children:m.map((e,t)=>(0,n.jsxs)("div",{onClick:t=>{t.preventDefault(),r(e.to)},className:a()("cursor-pointer w-full py-3 pl-4 flex items-center flex-nowrap text-black rounded-lg",{"!text-green-2 bg-green-2/10":e.to===o}),children:[(0,n.jsx)(e.icon,{className:"mr-3 text-2xl"}),(0,n.jsx)("span",{className:"whitespace-nowrap text-lg font-medium",children:e.txt})]},"menus-".concat(t)))}),(0,n.jsx)("div",{className:a()("flex-1 p-5 min-h-full bg-gray-16",t),...s,children:l})]})}},3046:function(e,t,l){"use strict";l.d(t,{u:function(){return o}});var n=l(1527),s=l(4875),r=l.n(s),a=l(959),i=l(422);function o(e){let{className:t,children:l,...s}=e,[o,c]=(0,a.useState)();return((0,a.useEffect)(()=>{let e=document.getElementById("__app");e&&c(e)},[]),o)?(0,i.createPortal)((0,n.jsx)("div",{...s,className:r()("fixed left-0 top-0 w-full h-full overflow-auto z-50 bg-white",t),children:l}),o):null}},8503:function(e,t,l){"use strict";l.d(t,{P:function(){return x},d:function(){return d}});var n=l(1527),s=l(4875),r=l.n(s),a=l(959),i=l(7994),o=l(9592),c=l(8723);function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[l,n]=(0,a.useState)(t);return(0,a.useEffect)(()=>{n(t)},[e,t]),{onChange:n,items:e,current:l}}function x(e){let{items:t,current:l,onChange:s,className:d}=e,x=t[l]?t[l].text:"",[m,u]=(0,o.Z)(!1),p=(0,a.useCallback)(e=>{l!==e&&s(e)},[l]),f=(0,a.useRef)(null);return((0,c.Z)(f,()=>m&&u(!1)),0===t.length)?null:(0,n.jsxs)("div",{ref:f,className:r()("bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",d),onClick:()=>u(),children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("span",{children:x}),m?(0,n.jsx)(i.pzk,{}):(0,n.jsx)(i._i7,{})]}),m&&(0,n.jsx)("div",{className:"absolute left-0 top-full w-full bg-white rounded-lg overflow-hidden",style:{border:"1px solid #DDDDDD"},children:t.map((e,t)=>(0,n.jsx)("div",{style:{borderTop:t>0?"1px solid #DDDDDD":"none",backgroundColor:t===l?"rgba(0,0,0,0.1)":"transparent"},className:r()("px-5 py-2 text-base mo:text-xs"),onClick:()=>p(t),children:e.text},"select_item_".concat(t)))})]})}},9080:function(e,t,l){"use strict";l.d(t,{AR:function(){return r},ES:function(){return i},GF:function(){return a},RG:function(){return n},hm:function(){return o},z5:function(){return s}});let n=["Sourcing & Pre-treatment","Production","Distribution","Use & Disposal"];function s(){return n.map(e=>({name:e,processList:[],progress:0,carbon_emission:0}))}function r(){return n.map(e=>({name:e,processList:[]}))}function a(){return n.map(e=>({name:e,progress:0,carbon_emission:0,verified:!1}))}let i="/car.png",o="/org.png"},1004:function(e,t,l){"use strict";l.d(t,{L6:function(){return i},Zx:function(){return o}});var n=l(1527),s=l(4875),r=l.n(s);function a(e){let{txt:t,type:l,className:s,...a}=e;return(0,n.jsx)("div",{...a,className:r()(s,"px-[5px] py-[2px] rounded text-xs text-white",{"bg-blue-0":"blue"===l,"bg-orange-16":"orange"===l}),children:t})}function i(e){let{title:t,sub:l,badge:s=[]}=e;return(0,n.jsxs)("div",{style:{border:"1px solid #000000"},className:r()("rounded-lg py-3 pl-3 pr-4 w-full overflow-hidden [&:nth-child(n+2)]:mt-5"),children:[(0,n.jsx)("div",{className:"text-black text-base w-full overflow-hidden whitespace-nowrap text-ellipsis",children:t}),(0,n.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,n.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:l}),s.map((e,t)=>(0,n.jsx)(a,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}function o(e){let{title:t,sub:l,badge:s=[],tit_r:i}=e;return(0,n.jsxs)("div",{className:r()("rounded-lg py-3 pl-3 pr-[.4375rem] w-full overflow-hidden [&:nth-child(2n+1)]:bg-gray-16"),children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"text-black text-base overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:t}),(0,n.jsx)("div",{className:"flex-1"}),void 0!==i&&(0,n.jsx)("div",{className:"shrink-0 whitespace-nowrap text-sm font-semibold text-green-2",children:i})]}),(0,n.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,n.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:l}),(0,n.jsx)("div",{className:"flex-1"}),s.map((e,t)=>(0,n.jsx)(a,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}},2632:function(e,t,l){"use strict";l.d(t,{OZ:function(){return c}});var n=l(1527),s=l(9270),r=l(5462),a=l(7361),i=l(4726),o=l(9080);function c(e){let t=(0,s.dD)();return(0,n.jsx)("div",{className:"text-lg whitespace-nowrap [&:nth-child(n+2)]:mt-6 mo:!mt-0 mo:text-[.9375rem] mo:whitespace-pre",children:t?(0,n.jsxs)("div",{className:"hidden whitespace-normal mo:block text-gray-6",children:[(0,n.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"text-black font-bold",children:e.label}),(0,n.jsx)("div",{className:"text-gray-6",children:e.text})]})})}function d(e){return(0,n.jsx)("a",{href:e.to,className:"inline-block underline whitespace-nowrap mr-5 leading-normal text-sm text-blue-0 mt-[.375rem] mo:mt-[.875rem]",children:e.text})}function x(e){let{data:t}=e;return(0,n.jsxs)("div",{className:"bg-white rounded-lg overflow-hidden p-5 pb-8 mo:pb-5",children:[(0,n.jsx)("img",{className:"bg-transparent outline-none border-none w-full aspect-[2/1] object-contain",src:t.imageUrl||o.ES}),(0,n.jsx)("div",{className:"font-semibold text-lg text-black mo:text-base",children:t.displayName}),(0,n.jsxs)("div",{className:"w-full flex flex-wrap",children:[(0,n.jsx)(d,{to:"/product?product_id=".concat(t.id),text:"View Product Definition"}),(0,n.jsx)(d,{to:"/activities?product_id=".concat(t.id),text:"View PCF Template"}),(0,n.jsx)(d,{to:"/pcf",text:"Query PCF Data"})]})]})}t.ZP=function(){var e;let{user:t}=(0,s.aF)(),{value:l}=(0,a.k)(i.jw);return t?(0,n.jsxs)(r.Z,{className:"text-black mo:w-full",children:[(0,n.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:"PROFILE"}),(0,n.jsxs)("div",{className:"mt-5 mb-8 w-full bg-white h-[21.5625rem] rounded-lg p-5 flex mo:flex-col mo:h-auto mo:p-[.9375rem] mo:mb-5",children:[(0,n.jsx)("img",{className:"object-scale-down h-full aspect-square bg-transparent rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:t.organization.imageUrl||o.hm}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,n.jsx)(c,{label:"Organization",text:t.organization.displayName}),(0,n.jsx)(c,{label:"Orgnization Type",text:t.organization.type}),(0,n.jsx)(c,{label:"Site",text:(null===(e=t.organization.sitList[0])||void 0===e?void 0:e.displayName)||"-"}),(0,n.jsx)(c,{label:"Account Owner",text:t.name})]}),(0,n.jsxs)("div",{className:"py-1 ml-[5rem] mo:ml-0 mo:py-0",children:[(0,n.jsx)(c,{label:"Account Role",text:t.role}),(0,n.jsx)(c,{label:"Authorization Level",text:0===t.authLevel?"Read-Only":"Read-Only / Specified Products"}),(0,n.jsx)(c,{label:"Last Login",text:t.lastLoginTime})]})]}),(0,n.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:"TARGET INVENTORIES"}),l&&(0,n.jsx)("div",{className:"mt-5 w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))]",children:l.map((e,t)=>(0,n.jsx)(x,{data:e},"product_item_".concat(t)))})]}):null}},7361:function(e,t,l){"use strict";l.d(t,{k:function(){return s}});var n=l(4e3);function s(e,t){let l=(0,n.Z)(e,t);return(l.error||l.loading)&&(l.value=void 0),l}},8416:function(e,t,l){"use strict";l.d(t,{a:function(){return o}});var n=l(8503),s=l(7361),r=l(4726),a=l(3190),i=l(959);function o(){let{value:e}=(0,s.k)(r.jw),t=(0,i.useMemo)(()=>(e||[]).map(e=>({...e,text:e.displayName})),[e]),{query:l}=(0,a.useRouter)(),o=(0,i.useMemo)(()=>{let e=l.product_id;if(e){let n=t.findIndex(t=>"".concat(t.id)==e);if(n>=0)return n}return 0},[l,t]),{current:c,items:d,onChange:x}=(0,n.d)(t,o),m=t[c];return{products:e,current:c,items:d,onChange:x,current_product:m}}},4448:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return N}});var n=l(1527),s=l(3046),r=l(1004),a=l(7361),i=l(4726),o=l(959),c=l(7994),d=l(9592),x=l(4186);function m(e){let{node:t,onBack:l}=e,{value:d}=(0,a.k)(()=>(0,i.RN)(t.id),[t.id]),m=(0,o.useMemo)(()=>d?d.map(e=>({title:e.displayName,sub:e.name})):[],[d]);return(0,n.jsxs)(s.u,{children:[(0,n.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,n.jsx)("button",{className:"text-2xl",onClick:l,children:(0,n.jsx)(c.$Ku,{})}),(0,n.jsx)("span",{className:"flex-grow-0 overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:t.partDisplayName}),(0,n.jsx)("div",{className:"w-6"})]}),(0,n.jsxs)("div",{className:"p-5",children:[t.children.map((e,t)=>(0,n.jsx)(u,{node:e},"bomItem_".concat(t))),t.children.length>0&&(0,n.jsx)("div",{className:"h-5"}),(0,n.jsx)(x.xt,{node:t}),(0,n.jsx)("div",{className:"text-[.9375rem] font-bold mt-5 mb-[.875rem]",children:"Attributable to Carbon Activities:"}),m.map((e,t)=>(0,n.jsx)(r.L6,{...e},"attrs_".concat(t)))]})]})}function u(e){let{node:t}=e,[l,s]=(0,d.Z)(!1);return(0,n.jsxs)("div",{onClick:()=>{s(!0),console.info("open bom modal")},className:"cursor-pointer flex justify-between items-end w-full px-5 py-3 border border-solid border-black rounded-lg [&:nth-child(n+2)]:mt-5",children:[(0,n.jsx)("div",{className:"text-lg flex-grow-0 whitespace-nowrap overflow-hidden text-ellipsis",children:t.partDisplayName}),(0,n.jsx)(c.nQU,{className:"text-2xl flex-shrink-0"}),l&&(0,n.jsx)(m,{node:t,onBack:e=>{s(!1),console.info("close bom modal"),e.stopPropagation()}})]})}function p(e){let{node:t}=e;return(0,n.jsxs)("div",{className:"w-full bg-white rounded-lg p-5 text-black",children:[(0,n.jsx)("div",{className:"text-base font-bold",children:t.partDisplayName}),t.children.map((e,t)=>(0,n.jsx)(u,{node:e},"bomItem_".concat(t)))]})}var f=l(9270),h=l(5462),b=l(8503),j=l(8416),g=l(2632),v=l(9080),N=function(){let{current:e,items:t,onChange:l,current_product:s}=(0,j.a)(),{value:r}=(0,a.k)(()=>s?(0,i.RS)(s.id):Promise.resolve(void 0),[s]),{value:c}=(0,a.k)(()=>s?(0,i.eO)(s.id):Promise.resolve(void 0),[s]),d=(0,o.useMemo)(()=>{if(!c||0===c.length)return;let e={},t="";c.forEach(l=>{null===l.parentPartNumberId&&(t=l.id+""),l.children=[],e[l.id]||(e[l.id]=[]),e[l.id].push(l)}),c.forEach(t=>{let l=e[t.parentPartNumberId];l&&l.forEach((e,l)=>{e.children.push(l>0?{...t}:t)})});let l=e[t];if(l&&l[0]&&l[0].children.length>0){let n=l[0];n.deep=0;let s=e=>{for(let t of e.children)t.deep=e.deep+1,t.parent=e,s(t)};return s(n),n}},[c]),m=(0,f.dD)(),u=m?p:x.TU;return(0,n.jsx)(h.Z,{className:"text-black",children:s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.P,{current:e,items:t,onChange:l}),(0,n.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg",children:"PRODUCT INFO"}),(0,n.jsxs)("div",{className:"w-full bg-white rounded-lg p-5 flex items-center justify-between mo:flex-col mo:items-start",children:[(0,n.jsx)("img",{className:"object-contain w-[15.625rem] aspect-square rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:s.imageUrl||v.ES}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,n.jsx)(g.OZ,{label:"Product Name",text:s.name||"-"}),(0,n.jsx)(g.OZ,{label:"Display Name",text:s.displayName}),(0,n.jsx)(g.OZ,{label:"Product UID",text:s.id+""})]}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,n.jsx)(g.OZ,{label:"From Organization",text:s.organization.displayName+""}),(0,n.jsx)(g.OZ,{label:"Product Type",text:s.type}),(0,n.jsx)(g.OZ,{label:"PCF Accountable",text:void 0===r?"-":r?"YES":"NO"})]}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,n.jsx)(g.OZ,{label:"Manufacturing Status",text:1===s.manufacturingStatus?"Active":"Inactive"}),(0,n.jsx)(g.OZ,{label:"Created At",text:s.createTime}),(0,n.jsx)(g.OZ,{label:"Last Update",text:s.updateTime})]})]}),(0,n.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg",children:"PRODUCT BOM"}),d&&(0,n.jsx)(u,{node:d})]})})}}},function(e){e.O(0,[492,455,439,930,13,222,489,105,422,950,294,774,888,179],function(){return e(e.s=7394)}),_N_E=e.O()}]);