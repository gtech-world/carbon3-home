(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{7394:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return s(4448)}])},4186:function(e,t,s){"use strict";s.d(t,{C6:function(){return b},TU:function(){return v},xt:function(){return g}});var n=s(1527),l=s(1004),a=s(7361),r=s(4726),i=s(4875),c=s.n(i),o=s(959),d=s(8334),m=s(8370),x=s(9077),u=s(818),p=s(8633);const h=(0,o.createContext)(void 0),f=(e,t)=>({data:{id:e.id.toString(),isLeaf:0===e.children.length,isOpenByDefault:0===t,name:e.partDisplayName,nestingLevel:t,node:e},nestingLevel:t,node:e});function j(e){const{style:t,data:{name:s,nestingLevel:l,isLeaf:a,node:r},isOpen:i,setOpen:m}=e,[x,u]=(0,o.useContext)(h);return(0,n.jsxs)("div",{style:{...t,width:"max-content",marginLeft:"".concat(2.25*l+(a?2.25:0),"rem"),background:r===x?"rgba(34, 122, 48, 0.1)":"none"},className:c()("flex items-center px-5 py-3 rounded-lg",{"text-green-2":r===x}),children:[!a&&(0,n.jsx)("button",{onClick:()=>m(!i),className:"text-2xl mr-3",children:i?(0,n.jsx)(d.qT8,{}):(0,n.jsx)(d.Dwu,{})}),(0,n.jsx)("span",{className:c()("whitespace-nowrap cursor-pointer",{"font-bold":0===l}),onClick:()=>0!==l&&u(r),children:s})]})}function b(e){return(0,n.jsxs)("div",{className:"text-gray-6 text-lg whitespace-nowrap text-ellipsis overflow-hidden [&:nth-child(n+2)]:mt-4 mo:text-[.9375rem] mo:!mt-0",children:[(0,n.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]})}function g(e){var t;const{node:s}=e,{t:l}=(0,p.$G)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{label:l("Part Name"),text:s.partDisplayName}),(0,n.jsx)(b,{label:l("Part Type"),text:s.children.length>0?"Sub-system":"Bom"}),(0,n.jsx)(b,{label:l("BOM Genealogy Level"),text:"".concat(s.deep+1)}),(0,n.jsx)(b,{label:l("Parent"),text:(null===(t=s.parent)||void 0===t?void 0:t.partDisplayName)||"-"}),(0,n.jsx)(b,{label:l("Children"),text:"".concat(s.children.length||"No"," Child")}),(0,n.jsx)(b,{label:l("From Supplier"),text:s.supplierName||"-"}),(0,n.jsx)(b,{label:l("Last Update"),text:s.updateTime})]})}function v(e){const{node:t}=e,{t:s}=(0,p.$G)(),[i,c]=(0,o.useState)(t.children[0]),d=(0,o.useCallback)((function*(){for(yield f(t,0);;){const e=yield;for(let t=0;t<e.node.children.length;t++)yield f(e.node.children[t],e.nestingLevel+1)}}),[t]),{value:b,loading:v}=(0,a.k)((()=>(0,r.RN)(i.id)),[i]),N=(0,o.useMemo)((()=>b?b.map((e=>({title:e.displayName,sub:e.name}))):[]),[b]);return(0,n.jsxs)("div",{className:"w-full flex",children:[(0,n.jsx)("div",{className:"p-5 bg-white rounded-l-lg mr-1 w-[20rem] h-[27rem] text-lg text-black",children:(0,n.jsx)(h.Provider,{value:[i,c],children:(0,n.jsx)(m.Z,{disableWidth:!0,children:e=>{let{height:t}=e;return(0,n.jsx)(x.NC,{width:"100%",height:t,itemSize:50,treeWalker:d,children:j})}})})}),(0,n.jsxs)("div",{className:"px-8 pt-[2.125rem] pb-8 flex-1 bg-white rounded-r-lg h-[27rem] flex justify-between",children:[(0,n.jsx)("div",{className:"flex-1 w-0",children:(0,n.jsx)(g,{node:i})}),(0,n.jsx)("div",{className:"w-[3.5rem]"}),(0,n.jsxs)("div",{className:"w-0 flex-1 flex flex-col",children:[(0,n.jsxs)("div",{className:"text-lg font-bold mb-5",children:[s("Attributable to Carbon Activities"),":"]}),v?(0,n.jsx)(u.g,{}):(0,n.jsx)("div",{className:"flex-1 w-full overflow-y-auto",children:N.map(((e,t)=>(0,n.jsx)(l.L6,{...e},"attrs_".concat(t))))})]})]})]})}},5462:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var n=s(1527),l=s(9080),a=s(2132),r=s(4875),i=s.n(r),c=s(3190),o=s(959),d=s(8633),m=s(7053),x=s(7007);function u(e){const{className:t,children:s,...r}=e,{push:u,pathname:p}=(0,c.useRouter)(),h=function(){const{t:e}=(0,d.$G)();return(0,o.useMemo)((()=>l.aj.map((t=>({...t,txt:e(t.txt)})))),[e])}(),f=(0,a.E)(),j=(0,x.R)();return(0,n.jsxs)(m.se,{className:"flex text-black bg-white",children:[(0,n.jsx)("div",{className:"self-start relative w-[16.25rem] p-5 min-h-full mo:hidden",children:(0,n.jsx)("div",{style:{top:"calc(5.5rem + ".concat(j,"px)")},className:"w-full sticky top-[5.5rem]",children:h.map(((e,t)=>(0,n.jsxs)("div",{onClick:t=>{t.preventDefault(),u(e.to)},className:i()("cursor-pointer w-full py-3 pl-4 flex items-center flex-nowrap text-black rounded-lg",{"!text-green-2 bg-green-2/10":e.to===p}),children:[(0,n.jsx)(e.icon,{className:"mr-3 text-2xl"}),(0,n.jsx)("span",{className:"whitespace-nowrap text-lg font-medium",children:e.txt})]},"menus-".concat(t))))})}),(0,n.jsx)("div",{ref:f,className:i()("flex-1 p-5 bg-gray-16 mo:w-full",t),...r,children:s})]})}},8503:function(e,t,s){"use strict";s.d(t,{P:function(){return x},d:function(){return m}});var n=s(1527),l=s(2132),a=s(4875),r=s.n(a),i=s(959),c=s(7994),o=s(9592),d=s(8723);function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const[s,n]=(0,i.useState)(t);return(0,i.useEffect)((()=>{n(t)}),[e,t]),{onChange:n,items:e,current:s}}function x(e){const{items:t,current:s,onChange:a,className:m}=e,x=t[s]?t[s].text:"",[u,p]=(0,o.Z)(!1),h=(0,i.useCallback)((e=>{s!==e&&a(e)}),[s]),f=(0,l.E)("t-side");return(0,d.Z)(f,(()=>u&&p(!1))),0===t.length?null:(0,n.jsxs)("div",{ref:f,className:r()("bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",m),onClick:()=>p(),children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("span",{children:x}),u?(0,n.jsx)(c.pzk,{}):(0,n.jsx)(c._i7,{})]}),u&&(0,n.jsx)("div",{className:"absolute left-0 w-full bg-white rounded-lg overflow-hidden py-3",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:t.map(((e,t)=>(0,n.jsx)("div",{style:{},className:r()("w-full px-5 py-2 text-sm",{"text-green-2":t===s}),onClick:()=>h(t),children:e.text},"select_item_".concat(t))))})]})}},1004:function(e,t,s){"use strict";s.d(t,{L6:function(){return i},Zx:function(){return c}});var n=s(1527),l=s(4875),a=s.n(l);function r(e){const{txt:t,type:s,className:l,...r}=e;return(0,n.jsx)("div",{...r,className:a()(l,"px-[5px] py-[2px] rounded text-xs text-white",{"bg-blue-0":"blue"===s,"bg-orange-16":"orange"===s}),children:t})}function i(e){const{title:t,sub:s,badge:l=[]}=e;return(0,n.jsxs)("div",{style:{border:"1px solid #000000"},className:a()("rounded-lg py-3 pl-3 pr-4 w-full overflow-hidden [&:nth-child(n+2)]:mt-5"),children:[(0,n.jsx)("div",{className:"text-black text-base w-full overflow-hidden whitespace-nowrap text-ellipsis",children:t}),(0,n.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,n.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:s}),l.map(((e,t)=>(0,n.jsx)(r,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t))))]})]})}function c(e){const{title:t,sub:s,badge:l=[],tit_r:i}=e;return(0,n.jsxs)("div",{className:a()("rounded-lg py-3 pl-3 pr-[.4375rem] w-full overflow-hidden [&:nth-child(2n+1)]:bg-gray-16"),children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"text-black text-base overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:t}),(0,n.jsx)("div",{className:"flex-1"}),void 0!==i&&(0,n.jsx)("div",{className:"shrink-0 whitespace-nowrap text-sm font-semibold text-green-2",children:i})]}),(0,n.jsxs)("div",{className:"flex mt-[.625rem]",children:[(0,n.jsx)("div",{className:"text-gray-9 text-sm overflow-hidden whitespace-nowrap text-ellipsis mr-2",children:s}),(0,n.jsx)("div",{className:"flex-1"}),l.map(((e,t)=>(0,n.jsx)(r,{style:{marginLeft:6},className:"shrink-0",...e},"attrs1_badge_".concat(t))))]})]})}},2632:function(e,t,s){"use strict";s.d(t,{OZ:function(){return m}});var n=s(1527),l=s(9270),a=s(5462),r=s(7361),i=s(4726),c=s(9080),o=s(818),d=s(8633);function m(e){const t=(0,l.dD)();return(0,n.jsx)("div",{className:"text-lg whitespace-nowrap [&:nth-child(n+2)]:mt-6 mo:!mt-0 mo:text-[.9375rem] mo:whitespace-pre",children:t?(0,n.jsxs)("div",{className:"hidden whitespace-normal mo:block text-gray-6",children:[(0,n.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"text-black font-bold",children:e.label}),(0,n.jsx)("div",{className:"text-gray-6",children:e.text})]})})}function x(e){return(0,n.jsx)("a",{href:e.to,className:"inline-block underline whitespace-nowrap mr-5 leading-normal text-sm text-blue-0 mt-[.375rem] mo:mt-[.875rem]",children:e.text})}function u(e){const{data:t}=e,{t:s}=(0,d.$G)();return(0,n.jsxs)("div",{className:"bg-white rounded-lg overflow-hidden p-5 pb-8 mo:pb-5",children:[(0,n.jsx)("img",{className:"bg-transparent outline-none border-none w-full aspect-[2/1] object-contain",src:t.imageUrl||c.ES}),(0,n.jsx)("div",{className:"font-semibold text-lg text-black mo:text-base",children:t.displayName}),(0,n.jsxs)("div",{className:"w-full flex flex-wrap",children:[(0,n.jsx)(x,{to:"/product?product_id=".concat(t.id),text:s("View Product Definition")}),(0,n.jsx)(x,{to:"/activities?product_id=".concat(t.id),text:s("View PCF Template")}),(0,n.jsx)(x,{to:"/pcf",text:s("Query PCF Data")})]})]})}t.ZP=function(){var e;const{user:t}=(0,l.aF)(),{value:s,loading:x}=(0,r.k)(i.jw),{t:p}=(0,d.$G)();return t?(0,n.jsx)(a.Z,{className:"text-black",children:x?(0,n.jsx)(o.g,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:p("PROFILE")}),(0,n.jsxs)("div",{className:"mt-5 mb-8 w-full bg-white h-[21.5625rem] rounded-lg p-5 flex mo:flex-col mo:h-auto mo:p-[.9375rem] mo:mb-5",children:[(0,n.jsx)("img",{className:"object-scale-down h-full aspect-square bg-transparent rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:t.organization.imageUrl||c.hm}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:mt-5 mo:ml-0 mo:py-0",children:[(0,n.jsx)(m,{label:p("Organization"),text:t.organization.displayName}),(0,n.jsx)(m,{label:p("Orgnization Type"),text:t.organization.type}),(0,n.jsx)(m,{label:p("Site"),text:(null===(e=t.organization.sitList[0])||void 0===e?void 0:e.displayName)||"-"}),(0,n.jsx)(m,{label:p("Account Owner"),text:t.name})]}),(0,n.jsxs)("div",{className:"py-1 ml-[5rem] mo:ml-0 mo:py-0",children:[(0,n.jsx)(m,{label:p("Account Role"),text:t.role}),(0,n.jsx)(m,{label:p("Authorization Level"),text:0===t.authLevel?"Read-Only":"Read-Only / Specified Products"}),(0,n.jsx)(m,{label:p("Last Login"),text:t.lastLoginTime})]})]}),(0,n.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:p("TARGET INVENTORIES")}),s&&(0,n.jsx)("div",{className:"mt-5 w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))] mo:grid-cols-1",children:s.map(((e,t)=>(0,n.jsx)(u,{data:e},"product_item_".concat(t))))})]})}):null}},7361:function(e,t,s){"use strict";s.d(t,{k:function(){return a}});var n=s(959),l=s(7077);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const s=(0,n.useRef)(!0),a=(0,n.useRef)(0),[,r]=(0,n.useState)(1),i=(0,n.useCallback)((e=>{s.current=e,r((e=>1-e))}),[]),[c,o]=(0,l.Z)(e,t),d=()=>{s.current||i(!0);const e=a.current+1>1e5?0:a.current+1;a.current=e,o().finally((()=>a.current==e&&i(!1)))};return(0,n.useEffect)((()=>{d()}),t),(0,n.useMemo)((()=>({...c,value:s.current||c.error?void 0:c.value,loading:s.current,req:d})),[c,s.current])}},8416:function(e,t,s){"use strict";s.d(t,{a:function(){return c}});var n=s(8503),l=s(7361),a=s(4726),r=s(3190),i=s(959);function c(){const{value:e,loading:t}=(0,l.k)(a.jw),s=(0,i.useMemo)((()=>(e||[]).map((e=>({...e,text:e.displayName})))),[e]),{query:c}=(0,r.useRouter)(),o=(0,i.useMemo)((()=>{const e=c.product_id;if(e){const t=s.findIndex((t=>"".concat(t.id)==e));if(t>=0)return t}return 0}),[c,s]),{current:d,items:m,onChange:x}=(0,n.d)(s,o),u=s[d];return{products:e,current:d,items:m,onChange:x,current_product:u,loading:t}}},4448:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return y}});var n=s(1527),l=s(818),a=s(3046),r=s(1004),i=s(7361),c=s(4726),o=s(959),d=s(8633),m=s(7994),x=s(9592),u=s(4186);function p(e){const{node:t,onBack:s}=e,{t:x}=(0,d.$G)(),{value:p,loading:f}=(0,i.k)((()=>(0,c.RN)(t.id)),[t.id]),j=(0,o.useMemo)((()=>p?p.map((e=>({title:e.displayName,sub:e.name}))):[]),[p]);return(0,n.jsxs)(a.u,{className:"",children:[(0,n.jsxs)("div",{className:"sticky top-0 w-full bg-green-2 flex justify-between items-center h-[4.25rem] px-4 text-white",children:[(0,n.jsx)("button",{className:"text-2xl",onClick:s,children:(0,n.jsx)(m.$Ku,{})}),(0,n.jsx)("span",{className:"flex-grow-0 font-medium overflow-hidden text-ellipsis whitespace-nowrap mx-4",children:t.partDisplayName}),(0,n.jsx)("div",{className:"w-6"})]}),(0,n.jsxs)("div",{className:"p-5",children:[t.children.map(((e,t)=>(0,n.jsx)(h,{node:e},"bomItem_".concat(t)))),t.children.length>0&&(0,n.jsx)("div",{className:"h-5"}),(0,n.jsx)(u.xt,{node:t}),(0,n.jsxs)("div",{className:"text-[.9375rem] font-bold mt-5 mb-[.875rem]",children:[x("Attributable to Carbon Activities"),":"]}),f&&(0,n.jsx)(l.g,{}),j.map(((e,t)=>(0,n.jsx)(r.L6,{...e},"attrs_".concat(t))))]})]})}function h(e){const{node:t}=e,[s,l]=(0,x.Z)(!1);return(0,n.jsxs)("div",{onClick:()=>{l(!0),console.info("open bom modal")},className:"cursor-pointer flex justify-between items-end w-full px-5 py-3 border border-solid border-black rounded-lg [&:nth-child(n+2)]:mt-5",children:[(0,n.jsx)("div",{className:"text-lg flex-grow-0 whitespace-nowrap overflow-hidden text-ellipsis",children:t.partDisplayName}),(0,n.jsx)(m.nQU,{className:"text-2xl flex-shrink-0"}),s&&(0,n.jsx)(p,{node:t,onBack:e=>{l(!1),console.info("close bom modal"),e.stopPropagation()}})]})}function f(e){const{node:t}=e;return(0,n.jsxs)("div",{className:"w-full bg-white rounded-lg p-5 text-black",children:[(0,n.jsx)("div",{className:"text-base font-bold",children:t.partDisplayName}),t.children.map(((e,t)=>(0,n.jsx)(h,{node:e},"bomItem_".concat(t))))]})}var j=s(9270),b=s(5462),g=s(8503),v=s(8416),N=s(2632),w=s(9080);var y=function(){const{t:e}=(0,d.$G)(),{current:t,items:s,onChange:a,current_product:r,loading:m}=(0,v.a)(),{value:x,loading:p}=(0,i.k)((()=>r?(0,c.RS)(r.id):Promise.resolve(void 0)),[r]),{value:h,loading:y}=(0,i.k)((()=>r?(0,c.eO)(r.id):Promise.resolve(void 0)),[r]),k=(0,o.useMemo)((()=>{if(!h||0===h.length)return;const e={};let t="";h.forEach((s=>{null===s.parentPartNumberId&&(t=s.id+""),s.children=[],e[s.id]||(e[s.id]=[]),e[s.id].push(s)})),h.forEach((t=>{const s=e[t.parentPartNumberId];s&&s.forEach(((e,s)=>{e.children.push(s>0?{...t}:t)}))}));const s=e[t];if(s&&s[0]&&s[0].children.length>0){const e=s[0];e.deep=0;const t=e=>{for(const s of e.children)s.deep=e.deep+1,s.parent=e,t(s)};return t(e),e}}),[h]),C=(0,j.dD)(),_=m||p||void 0==x||y||void 0==h,O=C?f:u.TU;return(0,n.jsx)(b.Z,{className:"text-black",children:_?(0,n.jsx)(l.g,{}):(0,n.jsx)(n.Fragment,{children:r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.P,{current:t,items:s,onChange:a}),(0,n.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg",children:e("PRODUCT INFO")}),(0,n.jsxs)("div",{className:"w-full bg-white rounded-lg p-5 flex items-center justify-between mo:flex-col mo:items-start",children:[(0,n.jsx)("img",{className:"object-contain w-[15.625rem] aspect-square rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:r.imageUrl||w.ES}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:mt-5 mo:ml-0 mo:py-0",children:[(0,n.jsx)(N.OZ,{label:e("Product Name"),text:r.name||"-"}),(0,n.jsx)(N.OZ,{label:e("Display Name"),text:r.displayName}),(0,n.jsx)(N.OZ,{label:e("Product UID"),text:r.id+""})]}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,n.jsx)(N.OZ,{label:e("From Organization"),text:r.organization.displayName+""}),(0,n.jsx)(N.OZ,{label:e("Product Type"),text:r.type}),(0,n.jsx)(N.OZ,{label:e("PCF Accountable"),text:void 0===x?"-":x?"YES":"NO"})]}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,n.jsx)(N.OZ,{label:e("Manufacturing Status"),text:1===r.manufacturingStatus?"Active":"Inactive"}),(0,n.jsx)(N.OZ,{label:e("Created At"),text:r.createTime}),(0,n.jsx)(N.OZ,{label:e("Last Update"),text:r.updateTime})]})]}),(0,n.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg",children:e("PRODUCT BOM")}),k&&(0,n.jsx)(O,{node:k})]})})})}}},function(e){e.O(0,[439,930,13,222,489,535,127,774,888,179],(function(){return t=7394,e(e.s=t);var t}));var t=e.O();_N_E=t}]);