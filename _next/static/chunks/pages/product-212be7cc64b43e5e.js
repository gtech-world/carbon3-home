(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{871:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return l(165)}])},2458:function(e,t,l){"use strict";l.d(t,{C6:function(){return b},TU:function(){return v},xt:function(){return g}});var s=l(1527),n=l(6131),a=l(5912),i=l(5666),r=l(4875),c=l.n(r),o=l(959),d=l(8501),x=l(7223),m=l(1290),u=l(7162),p=l(2722);let h=(0,o.createContext)(void 0),f=(e,t)=>({data:{id:e.id.toString(),isLeaf:0===e.children.length,isOpenByDefault:0===t,name:e.partDisplayName,nestingLevel:t,node:e},nestingLevel:t,node:e});function j(e){let{style:t,data:{name:l,nestingLevel:n,isLeaf:a,node:i},isOpen:r,setOpen:x}=e,[m,u]=(0,o.useContext)(h);return(0,s.jsxs)("div",{style:{...t,width:"max-content",marginLeft:"".concat(2.25*n+(a?2.25:0),"rem"),background:i===m?"rgba(34, 122, 48, 0.1)":"none"},className:c()("flex items-center px-5 py-3 rounded-lg",{"text-green-2":i===m}),children:[!a&&(0,s.jsx)("button",{onClick:()=>x(!r),className:"text-2xl mr-3",children:r?(0,s.jsx)(d.qT8,{}):(0,s.jsx)(d.Dwu,{})}),(0,s.jsx)("span",{className:c()("whitespace-nowrap cursor-pointer",{"font-bold":0===n}),onClick:()=>0!==n&&u(i),children:l})]})}function b(e){return(0,s.jsxs)("div",{className:"text-gray-6 text-lg whitespace-nowrap text-ellipsis overflow-hidden [&:nth-child(n+2)]:mt-4 mo:text-[.9375rem] mo:!mt-0",children:[(0,s.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]})}function g(e){var t;let{node:l}=e,{t:n}=(0,p.$G)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{label:n("Part Name"),text:l.partDisplayName}),(0,s.jsx)(b,{label:n("Part Type"),text:l.children.length>0?"Sub-system":"Bom"}),(0,s.jsx)(b,{label:n("BOM Genealogy Level"),text:"".concat(l.deep+1)}),(0,s.jsx)(b,{label:n("Parent"),text:(null===(t=l.parent)||void 0===t?void 0:t.partDisplayName)||"-"}),(0,s.jsx)(b,{label:n("Children"),text:"".concat(l.children.length||"No"," Child")}),(0,s.jsx)(b,{label:n("From Supplier"),text:l.supplierName||"-"}),(0,s.jsx)(b,{label:n("Last Update"),text:l.updateTime})]})}function v(e){let{node:t}=e,{t:l}=(0,p.$G)(),[r,c]=(0,o.useState)(t.children[0]),d=(0,o.useCallback)(function*(){for(yield f(t,0);;){let e=yield;for(let l=0;l<e.node.children.length;l++)yield f(e.node.children[l],e.nestingLevel+1)}},[t]),{value:b,loading:v}=(0,a.k)(()=>(0,i.RN)(r.id),[r]),N=(0,o.useMemo)(()=>b?b.map(e=>({title:e.displayName,sub:e.name})):[],[b]);return(0,s.jsxs)("div",{className:"w-full flex",children:[(0,s.jsx)("div",{className:"p-5 bg-white rounded-l-lg mr-1 w-[20rem] h-[27rem] text-lg text-black",children:(0,s.jsx)(h.Provider,{value:[r,c],children:(0,s.jsx)(x.Z,{disableWidth:!0,children:e=>{let{height:t}=e;return(0,s.jsx)(m.NC,{width:"100%",height:t,itemSize:50,treeWalker:d,children:j})}})})}),(0,s.jsxs)("div",{className:"px-8 pt-[2.125rem] pb-8 flex-1 bg-white rounded-r-lg h-[27rem] flex justify-between",children:[(0,s.jsx)("div",{className:"flex-1 w-0",children:(0,s.jsx)(g,{node:r})}),(0,s.jsx)("div",{className:"w-[3.5rem]"}),(0,s.jsxs)("div",{className:"w-0 flex-1 flex flex-col",children:[(0,s.jsxs)("div",{className:"text-lg font-bold mb-5",children:[l("Attributable to Carbon Activities"),":"]}),v?(0,s.jsx)(u.g,{}):(0,s.jsx)("div",{className:"flex-1 w-full overflow-y-auto",children:N.map((e,t)=>(0,s.jsx)(n.L6,{...e},"attrs_".concat(t)))})]})]})]})}},5726:function(e,t,l){"use strict";l.d(t,{Z:function(){return u}});var s=l(1527),n=l(6558),a=l(8151),i=l(4875),r=l.n(i),c=l(4166),o=l(959),d=l(2722),x=l(6261),m=l(701);function u(e){let{className:t,children:l,...i}=e,{push:u,pathname:p}=(0,c.useRouter)(),h=function(){let{t:e}=(0,d.$G)();return(0,o.useMemo)(()=>n.aj.map(t=>({...t,txt:e(t.txt)})),[e])}(),f=(0,a.E)(),j=(0,m.R)();return(0,s.jsxs)(x.se,{className:"flex text-black bg-white",children:[(0,s.jsx)("div",{className:"self-start relative w-[16.25rem] p-5 min-h-full mo:hidden",children:(0,s.jsx)("div",{style:{top:"calc(5.5rem + ".concat(j,"px)")},className:"w-full sticky top-[5.5rem]",children:h.map((e,t)=>(0,s.jsxs)("div",{onClick:t=>{t.preventDefault(),u(e.to)},className:r()("cursor-pointer w-full py-3 pl-4 flex items-center flex-nowrap text-black rounded-lg",{"!text-green-2 bg-green-2/10":e.to===p}),children:[(0,s.jsx)(e.icon,{className:"mr-3 text-2xl"}),(0,s.jsx)("span",{className:"whitespace-nowrap text-lg font-medium",children:e.txt})]},"menus-".concat(t)))})}),(0,s.jsx)("div",{ref:f,className:r()("flex-1 p-5 min-h-full h-fit bg-gray-16 mo:w-full",t),...i,children:l})]})}},6816:function(e,t,l){"use strict";l.d(t,{P:function(){return m},d:function(){return x}});var s=l(1527),n=l(8151),a=l(4875),i=l.n(a),r=l(959),c=l(1917),o=l(5309),d=l(2053);function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[l,s]=(0,r.useState)(t);return(0,r.useEffect)(()=>{s(t)},[e,t]),{onChange:s,items:e,current:l}}function m(e){let{items:t,current:l,onChange:a,className:x}=e,m=t[l]?t[l].text:"",[u,p]=(0,o.Z)(!1),h=(0,r.useCallback)(e=>{l!==e&&a(e)},[l]),f=(0,n.E)("t-side");return((0,d.Z)(f,()=>u&&p(!1)),0===t.length)?null:(0,s.jsxs)("div",{ref:f,className:i()("bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",x),onClick:()=>p(),children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("span",{children:m}),u?(0,s.jsx)(c.pzk,{}):(0,s.jsx)(c._i7,{})]}),u&&(0,s.jsx)("div",{className:"absolute left-0 w-full bg-white rounded-lg overflow-hidden py-3",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:t.map((e,t)=>(0,s.jsx)("div",{style:{},className:i()("w-full px-5 py-2 text-sm",{"text-green-2":t===l}),onClick:()=>h(t),children:e.text},"select_item_".concat(t)))})]})}},6131:function(e,t,l){"use strict";l.d(t,{L6:function(){return r},Zx:function(){return c}});var s=l(1527),n=l(4875),a=l.n(n);function i(e){let{txt:t,type:l,className:n,...i}=e;return(0,s.jsx)("div",{...i,className:a()(n,"px-[5px] py-[2px] rounded text-xs text-white",{"bg-blue-0":"blue"===l,"bg-orange-16":"orange"===l}),children:t})}function r(e){let{title:t,sub:l,badge:n=[]}=e;return(0,s.jsxs)("div",{style:{border:"1px solid #000000"},className:a()("rounded-lg py-3 pl-3 pr-4 w-full overflow-hidden [&:nth-child(n+2)]:mt-5"),children:[(0,s.jsx)("div",{className:"text-black text-base w-full overflow-hidden whitespace-nowrap text-ellipsis",children:t}),(0,s.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,s.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:l}),n.map((e,t)=>(0,s.jsx)(i,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}function c(e){let{title:t,sub:l,badge:n=[],tit_r:r}=e;return(0,s.jsxs)("div",{className:a()("rounded-lg py-3 pl-3 pr-[.4375rem] w-full overflow-hidden [&:nth-child(2n+1)]:bg-gray-16"),children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"text-black text-base overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:t}),(0,s.jsx)("div",{className:"flex-1"}),void 0!==r&&(0,s.jsx)("div",{className:"shrink-0 whitespace-nowrap text-sm font-semibold text-green-2",children:r})]}),(0,s.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,s.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:l}),(0,s.jsx)("div",{className:"flex-1"}),n.map((e,t)=>(0,s.jsx)(i,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t)))]})]})}},9218:function(e,t,l){"use strict";l.d(t,{OZ:function(){return x}});var s=l(1527),n=l(5032),a=l(5726),i=l(5912),r=l(5666),c=l(6558),o=l(7162),d=l(2722);function x(e){let t=(0,n.dD)();return(0,s.jsx)("div",{className:"text-lg whitespace-nowrap [&:nth-child(n+2)]:mt-6 mo:!mt-0 mo:text-[.9375rem] mo:whitespace-pre",children:t?(0,s.jsxs)("div",{className:"hidden whitespace-normal mo:block text-gray-6",children:[(0,s.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-black font-bold",children:e.label}),(0,s.jsx)("div",{className:"text-gray-6",children:e.text})]})})}function m(e){return(0,s.jsx)("a",{href:e.to,className:"inline-block underline whitespace-nowrap mr-5 leading-normal text-sm text-blue-0 mt-[.375rem] mo:mt-[.875rem]",children:e.text})}function u(e){let{data:t}=e,{t:l}=(0,d.$G)();return(0,s.jsxs)("div",{className:"bg-white rounded-lg overflow-hidden p-5 pb-8 mo:pb-5",children:[(0,s.jsx)("img",{className:"bg-transparent outline-none border-none w-full aspect-[2/1] object-contain",src:t.imageUrl||c.ES}),(0,s.jsx)("div",{className:"font-semibold text-lg text-black mo:text-base",children:t.displayName}),(0,s.jsxs)("div",{className:"w-full flex flex-wrap",children:[(0,s.jsx)(m,{to:"/product?product_id=".concat(t.id),text:l("View Product Definition")}),(0,s.jsx)(m,{to:"/activities?product_id=".concat(t.id),text:l("View PCF Template")}),(0,s.jsx)(m,{to:"/pcf",text:l("Query PCF Data")})]})]})}t.ZP=function(){var e;let{user:t}=(0,n.aF)(),{value:l,loading:m}=(0,i.k)(r.jw),{t:p}=(0,d.$G)();return t?(0,s.jsx)(a.Z,{className:"text-black",children:m?(0,s.jsx)(o.g,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:p("PROFILE")}),(0,s.jsxs)("div",{className:"mt-5 mb-8 w-full bg-white h-[21.5625rem] rounded-lg p-5 flex mo:flex-col mo:h-auto mo:p-[.9375rem] mo:mb-5",children:[(0,s.jsx)("img",{className:"object-scale-down h-full aspect-square bg-transparent rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:t.organization.imageUrl||c.hm}),(0,s.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:mt-5 mo:ml-0 mo:py-0",children:[(0,s.jsx)(x,{label:p("Organization"),text:t.organization.displayName}),(0,s.jsx)(x,{label:p("Orgnization Type"),text:t.organization.type}),(0,s.jsx)(x,{label:p("Site"),text:(null===(e=t.organization.sitList[0])||void 0===e?void 0:e.displayName)||"-"}),(0,s.jsx)(x,{label:p("Account Owner"),text:t.name})]}),(0,s.jsxs)("div",{className:"py-1 ml-[5rem] mo:ml-0 mo:py-0",children:[(0,s.jsx)(x,{label:p("Account Role"),text:t.role}),(0,s.jsx)(x,{label:p("Authorization Level"),text:0===t.authLevel?"Read-Only":"Read-Only / Specified Products"}),(0,s.jsx)(x,{label:p("Last Login"),text:t.lastLoginTime})]})]}),(0,s.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:p("TARGET INVENTORIES")}),l&&(0,s.jsx)("div",{className:"mt-5 w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))] mo:grid-cols-1",children:l.map((e,t)=>(0,s.jsx)(u,{data:e},"product_item_".concat(t)))})]})}):null}},5912:function(e,t,l){"use strict";l.d(t,{k:function(){return n}});var s=l(1851);function n(e,t){let l=(0,s.Z)(e,t);return(l.error||l.loading)&&(l.value=void 0),l}},561:function(e,t,l){"use strict";l.d(t,{a:function(){return c}});var s=l(6816),n=l(5912),a=l(5666),i=l(4166),r=l(959);function c(){let{value:e,loading:t}=(0,n.k)(a.jw),l=(0,r.useMemo)(()=>(e||[]).map(e=>({...e,text:e.displayName})),[e]),{query:c}=(0,i.useRouter)(),o=(0,r.useMemo)(()=>{let e=c.product_id;if(e){let t=l.findIndex(t=>"".concat(t.id)==e);if(t>=0)return t}return 0},[c,l]),{current:d,items:x,onChange:m}=(0,s.d)(l,o),u=l[d];return{products:e,current:d,items:x,onChange:m,current_product:u,loading:t}}},165:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return y}});var s=l(1527),n=l(7162),a=l(4631),i=l(6131),r=l(5912),c=l(5666),o=l(959),d=l(2722),x=l(1917),m=l(5309),u=l(2458);function p(e){let{node:t,onBack:l}=e,{t:m}=(0,d.$G)(),{value:p,loading:f}=(0,r.k)(()=>(0,c.RN)(t.id),[t.id]),j=(0,o.useMemo)(()=>p?p.map(e=>({title:e.displayName,sub:e.name})):[],[p]);return(0,s.jsxs)(a.u,{className:"",children:[(0,s.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,s.jsx)("button",{className:"text-2xl",onClick:l,children:(0,s.jsx)(x.$Ku,{})}),(0,s.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:t.partDisplayName}),(0,s.jsx)("div",{className:"w-6"})]}),(0,s.jsxs)("div",{className:"p-5",children:[t.children.map((e,t)=>(0,s.jsx)(h,{node:e},"bomItem_".concat(t))),t.children.length>0&&(0,s.jsx)("div",{className:"h-5"}),(0,s.jsx)(u.xt,{node:t}),(0,s.jsxs)("div",{className:"text-[.9375rem] font-bold mt-5 mb-[.875rem]",children:[m("Attributable to Carbon Activities"),":"]}),f&&(0,s.jsx)(n.g,{}),j.map((e,t)=>(0,s.jsx)(i.L6,{...e},"attrs_".concat(t)))]})]})}function h(e){let{node:t}=e,[l,n]=(0,m.Z)(!1);return(0,s.jsxs)("div",{onClick:()=>{n(!0),console.info("open bom modal")},className:"cursor-pointer flex justify-between items-end w-full px-5 py-3 border border-solid border-black rounded-lg [&:nth-child(n+2)]:mt-5",children:[(0,s.jsx)("div",{className:"text-lg flex-grow-0 whitespace-nowrap overflow-hidden text-ellipsis",children:t.partDisplayName}),(0,s.jsx)(x.nQU,{className:"text-2xl flex-shrink-0"}),l&&(0,s.jsx)(p,{node:t,onBack:e=>{n(!1),console.info("close bom modal"),e.stopPropagation()}})]})}function f(e){let{node:t}=e;return(0,s.jsxs)("div",{className:"w-full bg-white rounded-lg p-5 text-black",children:[(0,s.jsx)("div",{className:"text-base font-bold",children:t.partDisplayName}),t.children.map((e,t)=>(0,s.jsx)(h,{node:e},"bomItem_".concat(t)))]})}var j=l(5032),b=l(5726),g=l(6816),v=l(561),N=l(9218),w=l(6558),y=function(){let{t:e}=(0,d.$G)(),{current:t,items:l,onChange:a,current_product:i,loading:x}=(0,v.a)(),{value:m,loading:p}=(0,r.k)(()=>i?(0,c.RS)(i.id):Promise.resolve(void 0),[i]),{value:h,loading:y}=(0,r.k)(()=>i?(0,c.eO)(i.id):Promise.resolve(void 0),[i]),k=(0,o.useMemo)(()=>{if(!h||0===h.length)return;let e={},t="";h.forEach(l=>{null===l.parentPartNumberId&&(t=l.id+""),l.children=[],e[l.id]||(e[l.id]=[]),e[l.id].push(l)}),h.forEach(t=>{let l=e[t.parentPartNumberId];l&&l.forEach((e,l)=>{e.children.push(l>0?{...t}:t)})});let l=e[t];if(l&&l[0]&&l[0].children.length>0){let s=l[0];s.deep=0;let n=e=>{for(let t of e.children)t.deep=e.deep+1,t.parent=e,n(t)};return n(s),s}},[h]),O=(0,j.dD)(),_=O?f:u.TU;return(0,s.jsx)(b.Z,{className:"text-black",children:x||p||void 0==m||y||void 0==h?(0,s.jsx)(n.g,{}):(0,s.jsx)(s.Fragment,{children:i&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.P,{current:t,items:l,onChange:a}),(0,s.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg",children:e("PRODUCT INFO")}),(0,s.jsxs)("div",{className:"w-full bg-white rounded-lg p-5 flex items-center justify-between mo:flex-col mo:items-start",children:[(0,s.jsx)("img",{className:"object-contain w-[15.625rem] aspect-square rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:i.imageUrl||w.ES}),(0,s.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:mt-5 mo:ml-0 mo:py-0",children:[(0,s.jsx)(N.OZ,{label:e("Product Name"),text:i.name||"-"}),(0,s.jsx)(N.OZ,{label:e("Display Name"),text:i.displayName}),(0,s.jsx)(N.OZ,{label:e("Product UID"),text:i.id+""})]}),(0,s.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,s.jsx)(N.OZ,{label:e("From Organization"),text:i.organization.displayName+""}),(0,s.jsx)(N.OZ,{label:e("Product Type"),text:i.type}),(0,s.jsx)(N.OZ,{label:e("PCF Accountable"),text:void 0===m?"-":m?"YES":"NO"})]}),(0,s.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,s.jsx)(N.OZ,{label:e("Manufacturing Status"),text:1===i.manufacturingStatus?"Active":"Inactive"}),(0,s.jsx)(N.OZ,{label:e("Created At"),text:i.createTime}),(0,s.jsx)(N.OZ,{label:e("Last Update"),text:i.updateTime})]})]}),(0,s.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg",children:e("PRODUCT BOM")}),k&&(0,s.jsx)(_,{node:k})]})})})}}},function(e){e.O(0,[439,54,57,507,845,433,128,774,888,179],function(){return e(e.s=871)}),_N_E=e.O()}]);