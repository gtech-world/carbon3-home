(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{7394:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return l(4448)}])},4186:function(e,t,l){"use strict";l.d(t,{C6:function(){return b},TU:function(){return j},xt:function(){return f}});var a=l(1527),s=l(1004),n=l(7361),r=l(4726),i=l(4875),o=l.n(i),c=l(959),d=l(8334),m=l(8370),x=l(9550);let u=(0,c.createContext)(void 0),p=(e,t)=>({data:{id:e.id.toString(),isLeaf:0===e.children.length,isOpenByDefault:0===t,name:e.partDisplayName,nestingLevel:t,node:e},nestingLevel:t,node:e});function h(e){let{style:t,data:{name:l,nestingLevel:s,isLeaf:n,node:r},isOpen:i,setOpen:m}=e,[x,p]=(0,c.useContext)(u);return(0,a.jsxs)("div",{style:{...t,width:"max-content",marginLeft:"".concat(2.25*s+(n?2.25:0),"rem"),background:r===x?"rgba(34, 122, 48, 0.1)":"none"},className:"flex items-center px-5 py-3 rounded-lg",children:[!n&&(0,a.jsx)("button",{onClick:()=>m(!i),className:"text-2xl mr-3",children:i?(0,a.jsx)(d.qT8,{}):(0,a.jsx)(d.Dwu,{})}),(0,a.jsx)("span",{className:o()("whitespace-nowrap cursor-pointer",{"font-bold":0===s}),onClick:()=>0!==s&&p(r),children:l})]})}function b(e){return(0,a.jsxs)("div",{className:"text-gray-6 text-lg whitespace-nowrap text-ellipsis overflow-hidden [&:nth-child(n+2)]:mt-4 mo:text-[.9375rem] mo:!mt-0",children:[(0,a.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]})}function f(e){var t;let{node:l}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{label:"Part Name",text:l.partDisplayName}),(0,a.jsx)(b,{label:"Part Type",text:0==l.children.length?"Sub-system":"Bom"}),(0,a.jsx)(b,{label:"BOM Genealogy Level",text:"".concat(l.deep+1)}),(0,a.jsx)(b,{label:"Parent",text:(null===(t=l.parent)||void 0===t?void 0:t.partDisplayName)||"-"}),(0,a.jsx)(b,{label:"Children",text:"No child"}),(0,a.jsx)(b,{label:"From Supplier",text:l.supplierName}),(0,a.jsx)(b,{label:"Last Update",text:l.updateTime})]})}function j(e){let{node:t}=e,[l,i]=(0,c.useState)(t.children[0]),o=(0,c.useCallback)(function*(){for(yield p(t,0);;){let e=yield;for(let l=0;l<e.node.children.length;l++)yield p(e.node.children[l],e.nestingLevel+1)}},[t]),{value:d}=(0,n.k)(()=>(0,r.RN)(l.id),[l]),b=(0,c.useMemo)(()=>d?d.map(e=>({title:e.displayName,sub:e.name})):[],[d]);return(0,a.jsxs)("div",{className:"w-full flex",children:[(0,a.jsx)("div",{className:"p-5 bg-white rounded-l-lg mr-1 w-[20rem] h-[27rem] text-lg text-black",children:(0,a.jsx)(u.Provider,{value:[l,i],children:(0,a.jsx)(m.Z,{disableWidth:!0,children:e=>{let{height:t}=e;return(0,a.jsx)(x.NC,{width:"100%",height:t,itemSize:50,treeWalker:o,children:h})}})})}),(0,a.jsxs)("div",{className:"px-8 pt-[2.125rem] pb-8 flex-1 bg-white rounded-r-lg h-[27rem] flex justify-between",children:[(0,a.jsx)("div",{className:"flex-1 w-0",children:(0,a.jsx)(f,{node:t})}),(0,a.jsx)("div",{className:"w-[3.5rem]"}),(0,a.jsxs)("div",{className:"w-0 flex-1 flex flex-col",children:[(0,a.jsx)("div",{className:"text-lg font-bold mb-5",children:"Attributable to Carbon Activities:"}),(0,a.jsx)("div",{className:"flex-1 w-full overflow-y-auto",children:b.map((e,t)=>(0,a.jsx)(s.L6,{...e},"attrs_".concat(t)))})]})]})]})}},2632:function(e,t,l){"use strict";l.d(t,{OZ:function(){return o}});var a=l(1527),s=l(9270),n=l(5462),r=l(7361),i=l(4726);function o(e){let t=(0,s.dD)();return(0,a.jsx)("div",{className:"text-lg whitespace-nowrap [&:nth-child(n+2)]:mt-6 mo:!mt-0 mo:text-[.9375rem] mo:whitespace-pre",children:t?(0,a.jsxs)("div",{className:"hidden whitespace-normal mo:block text-gray-6",children:[(0,a.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"text-black font-bold",children:e.label}),(0,a.jsx)("div",{className:"text-gray-6",children:e.text})]})})}function c(e){return(0,a.jsx)("a",{href:e.to,className:"inline-block whitespace-nowrap mr-5 leading-normal text-sm text-blue-0 mt-[.375rem] mo:mt-[.875rem]",children:e.text})}function d(e){let{data:t}=e;return(0,a.jsxs)("div",{className:"bg-white rounded-lg overflow-hidden p-5 pb-8 mo:pb-5",children:[(0,a.jsx)("img",{className:"bg-transparent outline-none border-none w-full aspect-[2/1] object-contain"}),(0,a.jsx)("div",{className:"font-semibold text-lg text-black mo:text-base",children:t.displayName}),(0,a.jsxs)("div",{className:"w-full flex flex-wrap",children:[(0,a.jsx)(c,{to:"/product?product_id=".concat(t.id),text:"View Product Definition"}),(0,a.jsx)(c,{to:"/activities?product_id=".concat(t.id),text:"View PCF Template"}),(0,a.jsx)(c,{to:"/pcf",text:"Query PCF Data"})]})]})}t.ZP=function(){var e;let{user:t}=(0,s.aF)(),{value:l}=(0,r.k)(i.jw);return t?(0,a.jsxs)(n.Z,{className:"text-black mo:w-full",children:[(0,a.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:"PROFILE"}),(0,a.jsxs)("div",{className:"mt-5 mb-8 w-full bg-white h-[21.5625rem] rounded-lg p-5 flex mo:flex-col mo:h-auto mo:p-[.9375rem] mo:mb-5",children:[(0,a.jsx)("img",{className:"h-full aspect-square bg-transparent rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]"}),(0,a.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,a.jsx)(o,{label:"Organization",text:t.organization.displayName}),(0,a.jsx)(o,{label:"Orgnization Type",text:"1"==t.organization.type?"Auto - Site":"Auto - OEM"}),(0,a.jsx)(o,{label:"Site",text:(null===(e=t.organization.sitList[0])||void 0===e?void 0:e.displayName)||"-"}),(0,a.jsx)(o,{label:"Account Owner",text:t.name})]}),(0,a.jsxs)("div",{className:"py-1 ml-[5rem] mo:ml-0 mo:py-0",children:[(0,a.jsx)(o,{label:"Account Role",text:"common"===t.role?"Regular User":"Admin User"}),(0,a.jsx)(o,{label:"Authorization Level",text:0===t.authLevel?"Read-Only / Specified Products":"Read-Only"}),(0,a.jsx)(o,{label:"Last Login",text:t.lastLoginTime})]})]}),(0,a.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:"TARGET INVENTORIES"}),l&&(0,a.jsx)("div",{className:"mt-5 w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))]",children:l.map((e,t)=>(0,a.jsx)(d,{data:e},"product_item_".concat(t)))})]}):null}},8416:function(e,t,l){"use strict";l.d(t,{a:function(){return o}});var a=l(8503),s=l(7361),n=l(4726),r=l(3190),i=l(959);function o(){let{value:e}=(0,s.k)(n.jw),t=(0,i.useMemo)(()=>(e||[]).map(e=>({...e,text:e.displayName})),[e]),{query:l}=(0,r.useRouter)(),o=(0,i.useMemo)(()=>{let e=l.product_id;if(e){let a=t.findIndex(t=>"".concat(t.id)==e);if(a>=0)return a}return 0},[l,t]),{current:c,items:d,onChange:m}=(0,a.d)(t,o),x=t[c];return{products:e,current:c,items:d,onChange:m,current_product:x}}},4448:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return v}});var a=l(1527),s=l(3046),n=l(1004),r=l(7361),i=l(4726),o=l(959),c=l(7994),d=l(9592),m=l(4186);function x(e){let{node:t,onBack:l}=e,{value:d}=(0,r.k)(()=>(0,i.RN)(t.id),[t.id]),x=(0,o.useMemo)(()=>d?d.map(e=>({title:e.displayName,sub:e.name})):[],[d]);return(0,a.jsxs)(s.u,{children:[(0,a.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,a.jsx)("button",{className:"text-2xl",onClick:l,children:(0,a.jsx)(c.$Ku,{})}),(0,a.jsx)("span",{className:"flex-grow-0 overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:t.partDisplayName}),(0,a.jsx)("div",{className:"w-6"})]}),(0,a.jsxs)("div",{className:"p-5",children:[t.children.map((e,t)=>(0,a.jsx)(u,{node:e},"bomItem_".concat(t))),t.children.length>0&&(0,a.jsx)("div",{className:"h-5"}),(0,a.jsx)(m.xt,{node:t}),(0,a.jsx)("div",{className:"text-[.9375rem] font-bold mt-5 mb-[.875rem]",children:"Attributable to Carbon Activities:"}),x.map((e,t)=>(0,a.jsx)(n.L6,{...e},"attrs_".concat(t)))]})]})}function u(e){let{node:t}=e,[l,s]=(0,d.Z)(!1);return(0,a.jsxs)("div",{onClick:()=>{s(!0),console.info("open bom modal")},className:"cursor-pointer flex justify-between items-end w-full px-5 py-3 border border-solid border-black rounded-lg [&:nth-child(n+2)]:mt-5",children:[(0,a.jsx)("div",{className:"text-lg flex-grow-0 whitespace-nowrap overflow-hidden text-ellipsis",children:t.partDisplayName}),(0,a.jsx)(c.nQU,{className:"text-2xl flex-shrink-0"}),l&&(0,a.jsx)(x,{node:t,onBack:e=>{s(!1),console.info("close bom modal"),e.stopPropagation()}})]})}function p(e){let{node:t}=e;return(0,a.jsxs)("div",{className:"w-full bg-white rounded-lg p-5 text-black",children:[(0,a.jsx)("div",{className:"text-base font-bold",children:t.partDisplayName}),t.children.map((e,t)=>(0,a.jsx)(u,{node:e},"bomItem_".concat(t)))]})}var h=l(9270),b=l(5462),f=l(8503),j=l(8416),N=l(2632),v=function(){let{current:e,items:t,onChange:l,current_product:s}=(0,j.a)(),{value:n}=(0,r.k)(()=>s?(0,i.RS)(s.id):Promise.resolve(void 0),[s]),{value:c}=(0,r.k)(()=>s?(0,i.eO)(s.id):Promise.resolve(void 0),[s]),d=(0,o.useMemo)(()=>{if(!c||0===c.length)return;let e={},t="";c.forEach(l=>{null===l.parentPartNumberId&&(t=l.partNumber),l.children=[],e[l.partNumber]||(e[l.partNumber]=[]),e[l.partNumber].push(l)}),c.forEach(t=>{let l=e[t.parentPartNumberId];l&&l.forEach((e,l)=>{e.children.push(l>0?{...t}:t)})});let l=e[t];if(l&&l[0]&&l[0].children.length>0){let a=l[0];a.deep=0;let s=e=>{for(let t of e.children)t.deep=e.deep+1,t.parent=e,s(t)};return s(a),a}},[c]),x=(0,h.dD)(),u=x?p:m.TU;return(0,a.jsx)(b.Z,{className:"text-black",children:s&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.P,{current:e,items:t,onChange:l}),(0,a.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg",children:"PRODUCT INFO"}),(0,a.jsxs)("div",{className:"w-full bg-white rounded-lg p-5 flex items-center justify-between mo:flex-col mo:items-start",children:[(0,a.jsx)("img",{className:"w-[15.625rem] aspect-square rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]"}),(0,a.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,a.jsx)(N.OZ,{label:"Product Name",text:s.name||"-"}),(0,a.jsx)(N.OZ,{label:"Display Name",text:s.displayName}),(0,a.jsx)(N.OZ,{label:"Product UID",text:s.id+""})]}),(0,a.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,a.jsx)(N.OZ,{label:"From Organization",text:s.orgId+""}),(0,a.jsx)(N.OZ,{label:"Product Type",text:s.type}),(0,a.jsx)(N.OZ,{label:"PCF Accountable",text:void 0===n?"-":n?"YES":"NO"})]}),(0,a.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,a.jsx)(N.OZ,{label:"Manufacturing Status",text:1===s.manufacturingStatus?"Active":"Inactive"}),(0,a.jsx)(N.OZ,{label:"Created At",text:s.createTime}),(0,a.jsx)(N.OZ,{label:"Last Update",text:s.updateTime})]})]}),(0,a.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg",children:"PRODUCT BOM"}),d&&(0,a.jsx)(u,{node:d})]})})}}},function(e){e.O(0,[439,222,455,492,489,422,265,966,774,888,179],function(){return e(e.s=7394)}),_N_E=e.O()}]);