(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{7251:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(5659)}])},5462:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(1527),a=n(9080),l=n(2132),o=n(4875),c=n.n(o),s=n(3190),i=n(959),u=n(8633),d=n(7053),m=n(7007);function f(e){let{className:t,children:n,...o}=e,{push:f,pathname:x}=(0,s.useRouter)(),p=function(){let{t:e}=(0,u.$G)();return(0,i.useMemo)(()=>a.aj.map(t=>({...t,txt:e(t.txt)})),[e])}(),h=(0,l.E)(),v=(0,m.R)();return(0,r.jsxs)(d.se,{className:"flex text-black bg-white",children:[(0,r.jsx)("div",{className:"self-start relative w-[16.25rem] p-5 min-h-full mo:hidden",children:(0,r.jsx)("div",{style:{top:"calc(5.5rem + ".concat(v,"px)")},className:"w-full sticky top-[5.5rem]",children:p.map((e,t)=>(0,r.jsxs)("div",{onClick:t=>{t.preventDefault(),f(e.to)},className:c()("cursor-pointer w-full py-3 pl-4 flex items-center flex-nowrap text-black rounded-lg",{"!text-green-2 bg-green-2/10":e.to===x}),children:[(0,r.jsx)(e.icon,{className:"mr-3 text-2xl"}),(0,r.jsx)("span",{className:"whitespace-nowrap text-lg font-medium",children:e.txt})]},"menus-".concat(t)))})}),(0,r.jsx)("div",{ref:h,className:c()("flex-1 p-5 bg-gray-16 mo:w-full",t),...o,children:n})]})}},2632:function(e,t,n){"use strict";n.d(t,{OZ:function(){return d}});var r=n(1527),a=n(9270),l=n(5462),o=n(7361),c=n(4726),s=n(9080),i=n(818),u=n(8633);function d(e){let t=(0,a.dD)();return(0,r.jsx)("div",{className:"text-lg whitespace-nowrap [&:nth-child(n+2)]:mt-6 mo:!mt-0 mo:text-[.9375rem] mo:whitespace-pre",children:t?(0,r.jsxs)("div",{className:"hidden whitespace-normal mo:block text-gray-6",children:[(0,r.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-black font-bold",children:e.label}),(0,r.jsx)("div",{className:"text-gray-6",children:e.text})]})})}function m(e){return(0,r.jsx)("a",{href:e.to,className:"inline-block underline whitespace-nowrap mr-5 leading-normal text-sm text-blue-0 mt-[.375rem] mo:mt-[.875rem]",children:e.text})}function f(e){let{data:t}=e,{t:n}=(0,u.$G)();return(0,r.jsxs)("div",{className:"bg-white rounded-lg overflow-hidden p-5 pb-8 mo:pb-5",children:[(0,r.jsx)("img",{className:"bg-transparent outline-none border-none w-full aspect-[2/1] object-contain",src:t.imageUrl||s.ES}),(0,r.jsx)("div",{className:"font-semibold text-lg text-black mo:text-base",children:t.displayName}),(0,r.jsxs)("div",{className:"w-full flex flex-wrap",children:[(0,r.jsx)(m,{to:"/product?product_id=".concat(t.id),text:n("View Product Definition")}),(0,r.jsx)(m,{to:"/activities?product_id=".concat(t.id),text:n("View PCF Template")}),(0,r.jsx)(m,{to:"/pcf",text:n("Query PCF Data")})]})]})}t.ZP=function(){var e;let{user:t}=(0,a.aF)(),{value:n,loading:m}=(0,o.k)(c.jw),{t:x}=(0,u.$G)();return t?(0,r.jsx)(l.Z,{className:"text-black",children:m?(0,r.jsx)(i.g,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:x("PROFILE")}),(0,r.jsxs)("div",{className:"mt-5 mb-8 w-full bg-white h-[21.5625rem] rounded-lg p-5 flex mo:flex-col mo:h-auto mo:p-[.9375rem] mo:mb-5",children:[(0,r.jsx)("img",{className:"object-scale-down h-full aspect-square bg-transparent rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:t.organization.imageUrl||s.hm}),(0,r.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:mt-5 mo:ml-0 mo:py-0",children:[(0,r.jsx)(d,{label:x("Organization"),text:t.organization.displayName}),(0,r.jsx)(d,{label:x("Orgnization Type"),text:t.organization.type}),(0,r.jsx)(d,{label:x("Site"),text:(null===(e=t.organization.sitList[0])||void 0===e?void 0:e.displayName)||"-"}),(0,r.jsx)(d,{label:x("Account Owner"),text:t.name})]}),(0,r.jsxs)("div",{className:"py-1 ml-[5rem] mo:ml-0 mo:py-0",children:[(0,r.jsx)(d,{label:x("Account Role"),text:t.role}),(0,r.jsx)(d,{label:x("Authorization Level"),text:0===t.authLevel?"Read-Only":"Read-Only / Specified Products"}),(0,r.jsx)(d,{label:x("Last Login"),text:t.lastLoginTime})]})]}),(0,r.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:x("TARGET INVENTORIES")}),n&&(0,r.jsx)("div",{className:"mt-5 w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))] mo:grid-cols-1",children:n.map((e,t)=>(0,r.jsx)(f,{data:e},"product_item_".concat(t)))})]})}):null}},7361:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var r=n(959),a=n(7077);function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(0,r.useRef)(!0),l=(0,r.useRef)(0),[,o]=(0,r.useState)(1),c=(0,r.useCallback)(e=>{n.current=e,o(e=>1-e)},[]),[s,i]=(0,a.Z)(e,t),u=()=>{n.current||c(!0);let e=l.current+1>1e5?0:l.current+1;l.current=e,i().finally(()=>l.current==e&&c(!1))};return(0,r.useEffect)(()=>{u()},t),(0,r.useMemo)(()=>({...s,value:n.current||s.error?void 0:s.value,loading:n.current,req:u}),[s,n.current])}},5659:function(e,t,n){"use strict";n.r(t);var r=n(2632);t.default=r.ZP},7077:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=n(959);function l(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var l,o,c=(0,a.useRef)(0),s=(l=(0,a.useRef)(!1),o=(0,a.useCallback)(function(){return l.current},[]),(0,a.useEffect)(function(){return l.current=!0,function(){l.current=!1}},[]),o),i=(0,a.useState)(n),u=i[0],d=i[1],m=(0,a.useCallback)(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var a=++c.current;return u.loading||d(function(e){return r(r({},e),{loading:!0})}),e.apply(void 0,t).then(function(e){return s()&&a===c.current&&d({value:e,loading:!1}),e},function(e){return s()&&a===c.current&&d({error:e,loading:!1}),e})},t);return[u,m]}},8723:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(959),a=["mousedown","touchstart"],l=function(e,t,n){void 0===n&&(n=a);var l=(0,r.useRef)(t);(0,r.useEffect)(function(){l.current=t},[t]),(0,r.useEffect)(function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&l.current(t)},r=0,a=n;r<a.length;r++){var o=a[r];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,o,t)}return function(){for(var e=0,r=n;e<r.length;e++){var a=r[e];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,a,t)}}},[n,e])}},9592:function(e,t,n){"use strict";var r=n(959),a=function(e,t){return"boolean"==typeof t?t:!e};t.Z=function(e){return(0,r.useReducer)(a,e)}}},function(e){e.O(0,[439,930,13,222,127,774,888,179],function(){return e(e.s=7251)}),_N_E=e.O()}]);