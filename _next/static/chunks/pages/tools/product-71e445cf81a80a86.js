(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{7455:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/product",function(){return a(4128)}])},8503:function(e,t,a){"use strict";a.d(t,{P:function(){return u},d:function(){return m}});var n=a(1527),l=a(2132),s=a(4875),r=a.n(s),i=a(959),o=a(7994),c=a(9592),d=a(8723);function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const[a,n]=(0,i.useState)(t);return(0,i.useEffect)((()=>{n(t)}),[e,t]),{onChange:n,items:e,current:a}}function u(e){const{items:t,current:a,onChange:s,className:m}=e,u=t[a]?t[a].text:"",[x,p]=(0,c.Z)(!1),h=(0,i.useCallback)((e=>{a!==e&&s(e)}),[a]),f=(0,l.E)("t-side");return(0,d.Z)(f,(()=>x&&p(!1))),0===t.length?null:(0,n.jsxs)("div",{ref:f,className:r()("bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",m),onClick:()=>p(),children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("span",{children:u}),x?(0,n.jsx)(o.pzk,{}):(0,n.jsx)(o._i7,{})]}),x&&(0,n.jsx)("div",{className:"absolute left-0 w-full bg-white rounded-lg overflow-hidden py-3",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:t.map(((e,t)=>(0,n.jsx)("div",{style:{},className:r()("w-full px-5 py-2 text-sm",{"text-green-2":t===a}),onClick:()=>h(t),children:e.text},"select_item_".concat(t))))})]})}},8288:function(e,t,a){"use strict";a.d(t,{i:function(){return i}});var n=a(1527),l=a(4875),s=a.n(l),r=a(2490);function i(e){const{columns:t,data:a,className:l,headerStyle:i,rowClassName:o,stripe:c=!1}=e;return(0,n.jsx)("div",{className:s()("w-full mo:text-[.9375rem] mo:overflow-x-auto mo:pb-5",l),children:(0,n.jsxs)("table",{className:"w-full text-left",children:[(0,n.jsx)("thead",{className:"bg-gray-14",style:i,children:(0,n.jsx)("tr",{className:"px-3",children:t.map(((e,a)=>(0,n.jsxs)("th",{className:s()("px-3 py-2 relative whitespace-nowrap",0===a&&"rounded-l overflow-hidden",a===t.length-1&&"rounded-r overflow-hidden"),children:[!!e.tip&&(0,n.jsx)(r.gL9,{"data-tooltip-id":"tooltip","data-tooltip-content":e.tip,className:"inline-block text-xl mt-[-0.15rem] mr-1"}),(0,n.jsx)("span",{children:e.title})]},"columns".concat(a))))})}),(0,n.jsx)("tbody",{children:a.map(((e,a)=>(0,n.jsx)("tr",{className:s()(c&&a%2===0&&"bg-gray-16",o&&o(e,a)),children:t.map(((a,l)=>(0,n.jsx)("td",{className:s()("px-3 py-2",!!a.tip&&"pl-9",c&&0===l&&"rounded-l-lg",c&&l===t.length-1&&"rounded-r-lg"),children:a.render?a.render(e[a.dataIndex]):e[a.dataIndex]},"data_column_".concat(l))))},"table_data_".concat(a))))})]})})}},7851:function(e,t,a){"use strict";a.d(t,{OZ:function(){return m}});var n=a(1527),l=a(9270),s=a(7361),r=a(4726),i=a(9080),o=a(818),c=a(8633),d=a(7944);function m(e){const t=(0,l.dD)();return(0,n.jsx)("div",{className:"text-lg whitespace-nowrap [&:nth-child(n+2)]:mt-6 mo:!mt-0 mo:text-[.9375rem] mo:whitespace-pre",children:t?(0,n.jsxs)("div",{className:"hidden whitespace-normal mo:block text-gray-6",children:[(0,n.jsxs)("span",{className:"text-black font-bold",children:[e.label,":"]})," ",e.text]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"text-black font-bold",children:e.label}),(0,n.jsx)("div",{className:"text-gray-6",children:e.text})]})})}function u(e){return(0,n.jsx)("a",{href:e.to,className:"inline-block underline whitespace-nowrap mr-5 leading-normal text-sm text-blue-0 mt-[.375rem] mo:mt-[.875rem]",children:e.text})}function x(e){const{data:t}=e,{t:a}=(0,c.$G)();return(0,n.jsxs)("div",{className:"bg-white rounded-lg overflow-hidden p-5 pb-8 mo:pb-5",children:[(0,n.jsx)("img",{className:"bg-transparent outline-none border-none w-full aspect-[2/1] object-contain",src:t.imageUrl||i.ES}),(0,n.jsx)("div",{className:"font-semibold text-lg text-black mo:text-base",children:t.displayName}),(0,n.jsxs)("div",{className:"w-full flex flex-wrap",children:[(0,n.jsx)(u,{to:"/tools/product?product_id=".concat(t.id),text:a("View Product Definition")}),(0,n.jsx)(u,{to:"/tools/activities?product_id=".concat(t.id),text:a("View PCF Template")}),(0,n.jsx)(u,{to:"/tools/pcf",text:a("Query PCF Data")})]})]})}t.ZP=function(){var e;const{user:t}=(0,l.aF)(),{value:a,loading:u}=(0,s.k)(r.jw),{t:p}=(0,c.$G)();return t?(0,n.jsx)(d.m,{className:"text-black",children:u?(0,n.jsx)(o.g,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:p("PROFILE")}),(0,n.jsxs)("div",{className:"mt-5 mb-8 w-full bg-white h-[21.5625rem] rounded-lg p-5 flex mo:flex-col mo:h-auto mo:p-[.9375rem] mo:mb-5",children:[(0,n.jsx)("img",{className:"object-scale-down h-full aspect-square bg-transparent rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:t.organization.imageUrl||i.hm}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:mt-5 mo:ml-0 mo:py-0",children:[(0,n.jsx)(m,{label:p("Organization"),text:t.organization.displayName}),(0,n.jsx)(m,{label:p("Orgnization Type"),text:t.organization.type}),(0,n.jsx)(m,{label:p("Site"),text:(null===(e=t.organization.sitList[0])||void 0===e?void 0:e.displayName)||"-"}),(0,n.jsx)(m,{label:p("Account Owner"),text:t.name})]}),(0,n.jsxs)("div",{className:"py-1 ml-[5rem] mo:ml-0 mo:py-0",children:[(0,n.jsx)(m,{label:p("Account Role"),text:t.role}),(0,n.jsx)(m,{label:p("Authorization Level"),text:0===t.authLevel?"Read-Only":"Read-Only / Specified Products"}),(0,n.jsx)(m,{label:p("Last Login"),text:t.lastLoginTime})]})]}),(0,n.jsx)("span",{className:"text-2xl font-bold mo:text-lg",children:p("TARGET INVENTORIES")}),a&&(0,n.jsx)("div",{className:"mt-5 w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))] mo:grid-cols-1",children:a.map(((e,t)=>(0,n.jsx)(x,{data:e},"product_item_".concat(t))))})]})}):null}},7361:function(e,t,a){"use strict";a.d(t,{k:function(){return s}});var n=a(959),l=a(7077);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const a=(0,n.useRef)(!0),s=(0,n.useRef)(0),[,r]=(0,n.useState)(1),i=(0,n.useCallback)((e=>{a.current=e,r((e=>1-e))}),[]),[o,c]=(0,l.Z)(e,t),d=()=>{a.current||i(!0);const e=s.current+1>1e5?0:s.current+1;s.current=e,c().finally((()=>s.current==e&&i(!1)))};return(0,n.useEffect)((()=>{d()}),t),(0,n.useMemo)((()=>({...o,value:a.current||o.error?void 0:o.value,loading:a.current,req:d})),[o,a.current])}},8416:function(e,t,a){"use strict";a.d(t,{a:function(){return o}});var n=a(8503),l=a(7361),s=a(4726),r=a(3190),i=a(959);function o(){const{value:e,loading:t}=(0,l.k)(s.jw),a=(0,i.useMemo)((()=>(e||[]).map((e=>({...e,text:e.displayName})))),[e]),{query:o}=(0,r.useRouter)(),c=(0,i.useMemo)((()=>{const e=o.product_id;if(e){const t=a.findIndex((t=>"".concat(t.id)==e));if(t>=0)return t}return 0}),[o,a]),{current:d,items:m,onChange:u}=(0,n.d)(a,c),x=a[d];return{products:e,current:d,items:m,onChange:u,current_product:x,loading:t}}},4128:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(1527),l=a(8503),s=a(7361),r=a(8416),i=a(4726),o=a(959),c=a(7851),d=a(9080),m=a(818),u=a(8633),x=a(7944),p=a(8288),h=a(3517),f=a.n(h),g=a(9270);var b=function(){const{t:e}=(0,u.$G)(),{current:t,items:a,onChange:h,current_product:b,loading:j}=(0,r.a)(),{value:N,loading:v}=(0,s.k)((()=>b?(0,i.RS)(b.id):Promise.resolve(void 0)),[b]),{value:w,loading:y}=(0,s.k)((()=>b?(0,i.eO)(b.id):Promise.resolve(void 0)),[b]),k=((0,o.useMemo)((()=>{if(!w||0===w.length)return;const e={};let t="";w.forEach((a=>{null===a.parentPartNumberId&&(t=a.id+""),a.children=[],e[a.id]||(e[a.id]=[]),e[a.id].push(a)})),w.forEach((t=>{const a=e[t.parentPartNumberId];a&&a.forEach(((e,a)=>{e.children.push(a>0?{...t}:t)}))}));const a=e[t];if(a&&a[0]&&a[0].children.length>0){const e=a[0];e.deep=0;const t=e=>{for(const a of e.children)a.deep=e.deep+1,a.parent=e,t(a)};return t(e),e}}),[w]),(0,g.dD)(),j||v||void 0==N||y||void 0==w),_=[{title:e("Template Name"),dataIndex:"TemplateName"},{title:e("Version"),dataIndex:"Version"},{title:e("Template Name"),dataIndex:"TemplateName"},{title:e("Description"),dataIndex:"Description"},{title:e("Status"),dataIndex:"Status"},{title:e("LastUpdate"),dataIndex:"LastUpdate"},{title:"",dataIndex:"LastUpdate",render:()=>(0,n.jsx)(f(),{className:"text-blue-0 whitespace-nowrap",href:"/tools/template",children:"View Template"})}];return(0,n.jsx)(x.m,{className:"text-black",children:k?(0,n.jsx)(m.g,{}):(0,n.jsx)(n.Fragment,{children:b&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.P,{current:t,items:a,onChange:h}),(0,n.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg",children:e("PRODUCT INFO")}),(0,n.jsxs)("div",{className:"w-full bg-white rounded-lg p-5 flex items-center justify-between mo:flex-col mo:items-start",children:[(0,n.jsx)("img",{className:"object-contain w-[15.625rem] aspect-square rounded-lg border border-black border-solid mo:w-full mo:aspect-[3/2]",src:b.imageUrl||d.ES}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:mt-5 mo:ml-0 mo:py-0",children:[(0,n.jsx)(c.OZ,{label:e("Product Name"),text:b.name||"-"}),(0,n.jsx)(c.OZ,{label:e("Display Name"),text:b.displayName}),(0,n.jsx)(c.OZ,{label:e("Product UID"),text:b.id+""})]}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,n.jsx)(c.OZ,{label:e("From Organization"),text:b.organization.displayName+""}),(0,n.jsx)(c.OZ,{label:e("Product Type"),text:b.type}),(0,n.jsx)(c.OZ,{label:e("PCF Accountable"),text:void 0===N?"-":N?"YES":"NO"})]}),(0,n.jsxs)("div",{className:"py-1 ml-[3.75rem] mo:ml-0 mo:py-0",children:[(0,n.jsx)(c.OZ,{label:e("Manufacturing Status"),text:1===b.manufacturingStatus?"Active":"Inactive"}),(0,n.jsx)(c.OZ,{label:e("Created At"),text:b.createTime}),(0,n.jsx)(c.OZ,{label:e("Last Update"),text:b.updateTime})]})]}),(0,n.jsx)("div",{className:"text-2xl font-bold my-5 mo:text-lg",children:e("PCF TEMPLATE MANAGEMENT")}),(0,n.jsx)("div",{className:"bg-white p-5",children:(0,n.jsx)(p.i,{stripe:!0,headerStyle:{background:"#fff"},columns:_,data:[{Version:"czcz",Description:"xxxx"},{Version:"czcz",Description:"xxxx"}]})})]})})})}}},function(e){e.O(0,[13,930,222,439,517,972,743,774,888,179],(function(){return t=7455,e(e.s=t);var t}));var t=e.O();_N_E=t}]);