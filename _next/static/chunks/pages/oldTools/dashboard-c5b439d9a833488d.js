(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6156],{844:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oldTools/dashboard",function(){return l(215)}])},5858:function(e,t,l){"use strict";l.d(t,{I:function(){return o},g:function(){return i}});var s=l(1527),n=l(4875),r=l.n(n),a=l(1671);function i(e){let{className:t,color:l,size:n="",...i}=e;return(0,s.jsx)("div",{...i,className:r()("text-black w-full h-full flex items-center justify-center",t),children:(0,s.jsx)(a.uur,{color:l,style:n?{fontSize:n}:{},className:"text-[3.125rem] animate-spin"})})}function o(){return(0,s.jsx)(i,{className:"fixed z-50 left-0 top-0 w-full !h-full bg-black/25"})}},1600:function(e,t,l){"use strict";l.d(t,{m:function(){return p}});var s=l(1527),n=l(8948),r=l(7265),a=l(1875),i=l(834),o=l(4875),c=l.n(o),m=l(7478),u=l(2810),x=l(8189),d=l(5487),f=l(5283);function h(e){let{children:t,className:l,tits:r,showQuery:a,isManager:o,...h}=e,{push:p}=(0,n.useRouter)(),j=(0,f.fo)();return(0,i.dD)(),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:c()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem] justify-between",l),...h,children:[(0,s.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>p("/"),children:[(0,s.jsx)(m.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,s.jsx)(u.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,s.jsx)(x.R,{menus:j,children:(0,s.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,s.jsx)(d.otZ,{})})})]})})}function p(e){let{className:t,canBack:l,children:i,isNew:o,...m}=e,{push:u,pathname:x}=(0,n.useRouter)(),d=(0,r.R)();return(0,s.jsxs)("div",{className:"relative flex flex-col flex-1 w-full h-full min-h-fit bg-gray-16",children:[(0,s.jsx)(h,{showQuery:!0,style:{top:"".concat(d,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,s.jsxs)("div",{className:c()("w-full h-full mx-auto px-[60px] flex flex-col flex-1",{" max-w-[90rem]":!o}),children:[l&&(0,s.jsxs)("div",{className:"flex items-center my-5 text-sm cursor-pointer",onClick:()=>u("/carbon/service"),children:[(0,s.jsx)(a.YFh,{className:"text-lg"}),"返回"]}),(0,s.jsx)("div",{className:c()("flex flex-col ",t),children:i})]})]})}},2284:function(e,t,l){"use strict";l.d(t,{OZ:function(){return u}});var s=l(1527),n=l(834),r=l(5858),a=l(1600),i=l(9401),o=l(5913),c=l(6529),m=l(6699);function u(e){let t=(0,n.dD)();return(0,s.jsx)("div",{className:"text-lg whitespace-nowrap [&:nth-child(n+2)]:mt-6 mo:!mt-0 mo:text-[.9375rem] mo:whitespace-pre",children:t?(0,s.jsxs)("div",{className:"hidden whitespace-normal mo:block text-gray-6",children:[(0,s.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"text-black font-bold",children:e.label}),(0,s.jsx)("div",{className:"text-gray-6",children:e.text})]})})}function x(e){return(0,s.jsx)("a",{href:e.to,className:"inline-block underline whitespace-nowrap mr-5 leading-normal text-sm text-blue-0 mt-[.375rem] mo:mt-[.875rem]",children:e.text})}function d(e){let{data:t}=e,{t:l}=(0,c.NT)();return(0,s.jsxs)("div",{className:"bg-white rounded-lg overflow-hidden p-5 pb-8 mo:pb-5",children:[(0,s.jsx)("img",{className:"bg-transparent outline-none border-none w-full aspect-[2/1] object-contain",src:t.imageUrl||i.ES}),(0,s.jsx)("div",{className:"font-semibold text-lg text-black mo:text-base",children:t.displayName}),(0,s.jsxs)("div",{className:"w-full flex flex-wrap",children:[(0,s.jsx)(x,{to:"/tools/product?product_id=".concat(t.id),text:l("View Product Definition")}),(0,s.jsx)(x,{to:"/tools/activities?product_id=".concat(t.id),text:l("View PCF Template")}),(0,s.jsx)(x,{to:"/tools/pcf",text:l("Query PCF Data")})]})]})}t.ZP=function(){var e;let{user:t}=(0,n.aF)(),{value:l,loading:x}=(0,o.k)(m.jw),{t:f}=(0,c.NT)();return t?(0,s.jsx)(a.m,{className:"text-black",children:x?(0,s.jsx)(r.g,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:f("PROFILE")}),(0,s.jsxs)("div",{className:"mt-5 mb-8 w-full bg-white h-[21.5625rem] rounded-lg p-5 flex mo:flex-col mo:h-auto mo:p-[.9375rem] mo:mb-5",children:[(0,s.jsx)("img",{className:"object-scale-down h-full aspect-square bg-transparent rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:t.organization.imageUrl||i.hm}),(0,s.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:mt-5 mo:ml-0 mo:py-0",children:[(0,s.jsx)(u,{label:f("Organization"),text:t.organization.displayName}),(0,s.jsx)(u,{label:f("Orgnization Type"),text:t.organization.type}),(0,s.jsx)(u,{label:f("Site"),text:(null===(e=t.organization.sitList[0])||void 0===e?void 0:e.displayName)||"-"}),(0,s.jsx)(u,{label:f("Account Owner"),text:t.name})]}),(0,s.jsxs)("div",{className:"py-1 ml-[5rem] mo:ml-0 mo:py-0",children:[(0,s.jsx)(u,{label:f("Account Role"),text:t.role}),(0,s.jsx)(u,{label:f("Authorization Level"),text:0===t.authLevel?"Read-Only":"Read-Only / Specified Products"}),(0,s.jsx)(u,{label:f("Last Login"),text:t.lastLoginTime})]})]}),(0,s.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:f("TARGET INVENTORIES")}),l&&(0,s.jsx)("div",{className:"mt-5 w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))] mo:grid-cols-1",children:l.map((e,t)=>(0,s.jsx)(d,{data:e},"product_item_".concat(t)))})]})}):null}},5913:function(e,t,l){"use strict";l.d(t,{k:function(){return r}});var s=l(959),n=l(6171);function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l=(0,s.useRef)(!0),r=(0,s.useRef)(0),[,a]=(0,s.useState)(1),i=(0,s.useCallback)(e=>{l.current=e,a(e=>1-e)},[]),[o,c]=(0,n.Z)(e,t),m=()=>{l.current||i(!0);let e=r.current+1>1e5?0:r.current+1;r.current=e,c().finally(()=>r.current==e&&i(!1))};return(0,s.useEffect)(()=>{m()},t),(0,s.useMemo)(()=>({...o,value:l.current||o.error?void 0:o.value,loading:l.current,req:m}),[o,l.current])}},215:function(e,t,l){"use strict";l.r(t);var s=l(2284);t.default=s.ZP}},function(e){e.O(0,[713,769,7307,6574,7971,2351,9774,2888,179],function(){return e(e.s=844)}),_N_E=e.O()}]);