"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[960],{9601:function(e,t,n){n.d(t,{t:function(){return o}});var a=n(1527),r=n(959),c=n(4875),i=n.n(c),l=n(1875);const s="...";function o(e){const t=(e,t)=>{const n=[];if(t){for(let a=e;a<t;a++)n.push(a);return n}for(let a=0;a<e;a++)n.push(a);return n},{total:n,pgSize:c,pgNum:o,onChange:u,className:d}=e,m=Math.ceil(n/c),p=(0,r.useMemo)((()=>m<=1?[]:m<=6?t(m).map((e=>({name:"".concat(e+1)}))):o<=3?t(o+1).map((e=>({name:"".concat(e+1)}))).concat([{name:s},{name:""+m}]):o>=m-2?[{name:"1"},{name:s}].concat(t(o-2,m).map((e=>({name:"".concat(e+1)})))):[{name:"1"},{name:s},{name:o-1+""},{name:o+""},{name:o+1+""},{name:s},{name:m+""}]),[m,o]);return n<=c?null:(0,a.jsx)("div",{className:i()("flex justify-center text-[0.8125rem] text-center leading-8 font-semibold",d),children:(0,a.jsxs)("div",{className:"flex",children:[m>1&&(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{onClick:()=>{u&&u(1)},className:"mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,a.jsx)(l.JHF,{})}),(0,a.jsx)("span",{onClick:()=>{u&&o>1&&u(o-1)},className:"mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,a.jsx)(l.YFh,{})})]}),p.map(((e,t)=>(0,a.jsx)("div",{className:i()(e.name===""+o?"text-white bg-green-2":"bg-white",{omit:e.name===s},"mx-[0.185rem] flex items-center justify-center min-w-[32px] h-[32px] px-1.5 rounded-lg",e.name!=s&&"border cursor-pointer"),onClick:()=>{u&&e.name!==s&&u(+e.name)},children:e.name},"key_page_".concat(t)))),m>1&&(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{onClick:()=>{u&&o<m&&u(o+1)},className:"mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,a.jsx)(l.Tfp,{})}),(0,a.jsx)("span",{onClick:()=>{u&&u(m)},className:" mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,a.jsx)(l.qhs,{})})]})]})})}},8288:function(e,t,n){n.d(t,{i:function(){return d}});var a=n(1527),r=n(4875),c=n.n(r),i=n(4323),l=n(1875),s=n(959),o=n(818),u=n(8723);function d(e){const{columns:t,data:n,className:r,cellClassName:d,headerStyle:m,size:p,loading:x=!1}=e,[f,h]=(0,s.useState)(n||[]),[g,y]=(0,s.useState)({}),v=(0,s.useRef)(null);(0,u.Z)(v,(()=>{for(let e in g)g[e]&&(g[e].isFilterOpen=!1,y({...g}))})),(0,s.useEffect)((()=>{h(n)}),[n]),(0,s.useEffect)((()=>{t.map((e=>{var t;e.filterOptions&&(g[e.dataIndex]={isFilterOpen:!1,filterValueIndex:(null===(t=g[e.dataIndex])||void 0===t?void 0:t.filterValueIndex)>-1?g[e.dataIndex].filterValueIndex:-1})})),y(g)}),[t]);const j=(e,t)=>{Object.assign(g,{[e.dataIndex]:{filterValueIndex:t,isFilterOpen:!1}}),e.onFilterChange&&e.onFilterChange(t>-1?e.filterOptions[t]:null),y(g)};return(0,a.jsxs)("div",{className:c()("w-full mo:text-[.9375rem]",r,"small"===p&&"text-xs","big"===p&&"text-lg"),children:[(0,a.jsxs)("table",{className:"w-full text-left",children:[(0,a.jsx)("thead",{className:c()("bg-gray-14 ",r,"small"===p&&"text-sm"),style:m,children:(0,a.jsx)("tr",{className:"px-3",children:t&&t.map(((e,n)=>{var r;return(0,a.jsxs)("th",{className:c()("px-3 relative break-keep",0===n&&"rounded-l overflow-hidden",n===t.length-1&&"rounded-r overflow-hidden","small"===p?"py-1":"big"===p?"py-3":"py-2"),children:[!!e.tip&&(0,a.jsx)(i.gL9,{"data-tooltip-id":"tooltip","data-tooltip-content":e.tip,className:"inline-block text-xl mt-[-0.15rem] mr-1"}),(0,a.jsx)("span",{children:e.title}),!!g[e.dataIndex]&&(0,a.jsxs)("div",{className:"inline-block",ref:v,children:[(0,a.jsx)(l.Ihx,{color:(null===(r=g[e.dataIndex])||void 0===r?void 0:r.filterValueIndex)>-1?"#29953A":"",onClick:()=>{var t;g[(t=e).dataIndex].isFilterOpen=!g[t.dataIndex].isFilterOpen,y({...g})},className:"inline-block text-xl mt-[-0.15rem] ml-1 cursor-pointer"}),g[e.dataIndex].isFilterOpen&&(0,a.jsx)("div",{className:"absolute left-0 top-10 font-normal",children:(0,a.jsxs)("ul",{className:"bg-white w-[12.375rem] max-h-[15.875rem] overflow-auto text-sm rounded-lg py-3",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)"},children:[(0,a.jsx)("li",{className:c()("py-2.5 px-5 hover:bg-[#F3F3F3] cursor-pointer",-1===g[e.dataIndex].filterValueIndex&&"text-green-2"),onClick:()=>{j(e,-1)},children:"All"}),e.filterOptions.map(((t,n)=>(0,a.jsx)("li",{onClick:()=>{j(e,n)},className:c()("py-1.5 hover:bg-[#F3F3F3] px-5 break-all cursor-pointer",g[e.dataIndex].filterValueIndex===n?"text-green-2":""),children:t.text},"productList".concat(n))))]})})]})]},"columns".concat(n))}))})}),(0,a.jsx)("tbody",{children:f.map(((e,n)=>(0,a.jsx)("tr",{className:"column-level-".concat(e.level?e.level:0),children:t.map(((t,r)=>(0,a.jsx)("td",{className:c()("px-3","small"===p?"py-1":"big"===p?"py-3":"py-2",!!t.tip&&"pl-9",d&&d(t,r,n)),style:{width:t.width?t.width:"auto"},children:(0,a.jsxs)("div",{className:"flex items-center",style:{marginLeft:1.25*(e.level&&0===r?e.level:0)+"rem"},children:[!!(null===e||void 0===e?void 0:e.children)&&0===r&&(0,a.jsx)(l.Tfp,{onClick:()=>(e=>{if(void 0===f[e].level&&(f[e].level=0),f[e].children.map((t=>{t.level=f[e].level+1})),f[e].open=!f[e].open,f[e].open)h(f.slice(0,e+1).concat(f[e].children).concat(f.slice(e+1)));else{let t=f[e].children.length;f[e].children.map((e=>{e.open&&(e.open=!1,t+=e.children.length)})),f.splice(e+1,t),h([...f])}})(n),className:c()("mr-2 cursor-pointer text-gray-9",e.open&&"rotate-[90deg]")}),t.render?t.render(e[t.dataIndex],e):t.emptyText&&!e[t.dataIndex]?"-":e[t.dataIndex]]})},"data_column_".concat(r))))},"table_data_".concat(n))))})]}),x&&(0,a.jsx)(o.g,{className:"pt-8"})]})}},7944:function(e,t,n){n.d(t,{m:function(){return g}});var a=n(1527),r=n(3190),c=n(7007),i=n(1875),l=n(9270),s=n(4875),o=n.n(s),u=n(5688),d=n(9713),m=n(9441),p=n(7202),x=n(5487),f=n(570);function h(e){const{children:t,className:n,tits:c,showQuery:i,isManager:s,...h}=e,{push:g}=(0,r.useRouter)(),y=(0,f.fo)(),v=(0,l.dD)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:o()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem] justify-between",n),...h,children:[v?(0,a.jsx)("div",{children:(0,a.jsxs)("button",{className:"flex items-center",onClick:()=>{g("/carbon/service")},children:[(0,a.jsx)(m.u1R,{className:"text-2xl"}),(0,a.jsx)("span",{className:"text-lg",children:"\u6211\u7684\u78b3\u670d\u52a1"})]})}):(0,a.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>g("/"),children:[(0,a.jsx)(u.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,a.jsx)(d.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,a.jsx)(p.R,{menus:y,children:(0,a.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,a.jsx)(x.otZ,{})})})]})})}function g(e){const{className:t,canBack:n,children:l,...s}=e,{push:u,pathname:d}=(0,r.useRouter)(),m=(0,c.R)();return(0,a.jsxs)("div",{className:"flex-1 w-full flex h-full flex-col min-h-fit bg-gray-16 relative",children:[(0,a.jsx)(h,{showQuery:!0,style:{top:"".concat(m,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,a.jsxs)("div",{className:"w-full max-w-[90rem] h-full mx-auto px-[60px] flex flex-col flex-1",children:[n&&(0,a.jsxs)("div",{className:"flex items-center my-5 text-sm cursor-pointer",onClick:()=>u("/carbon/service"),children:[(0,a.jsx)(i.YFh,{className:"text-lg"}),"\u8fd4\u56de"]}),(0,a.jsx)("div",{className:o()("flex flex-col",t),children:l})]})]})}},4726:function(e,t,n){n.d(t,{AC:function(){return F},BI:function(){return v},Ii:function(){return y},Iv:function(){return C},Mt:function(){return k},Pf:function(){return o},Ps:function(){return I},RN:function(){return f},RS:function(){return p},SO:function(){return j},Vd:function(){return h},av:function(){return b},eO:function(){return x},ep:function(){return g},fF:function(){return w},jw:function(){return m},pF:function(){return N},vz:function(){return Z},x4:function(){return u}});var a=n(9270),r=n(8422),c=n(3993),i=n(3273);function l(e){return"".concat(c.Sg).concat(e)}function s(e){var t;const n=e.data;if(n){if(n.code&&1e5!==n.code)throw n.message;return null===(t=e.data)||void 0===t?void 0:t.data}}function o(e,t){return()=>t.some((e=>!e))?(0,i._v)():e()}async function u(e,t){return s(await r.Z.post(l("/api/base/login"),{name:e,password:t}))}function d(){const e=(0,a.is)();return e?{headers:{Authorization:"Bearer ".concat(e.loginToken)}}:{}}async function m(){return s(await r.Z.get(l("/api/npi/product/list"),d()))}async function p(e){return s(await r.Z.get(l("/api/npi/product/".concat(e,"/pcf_accountable")),d()))}async function x(e){return s(await r.Z.get(l("/api/npi/product/".concat(e,"/bom/list")),d()))}async function f(e){return s(await r.Z.get(l("/api/npi/product_bom/".concat(e,"/activity_types")),d()))}async function h(e){return s(await r.Z.get(l("/api/npi/product_process/query"),{...d(),params:{product_id:e,include_activity_types:!0}}))}async function g(e){return s(await r.Z.get(l("/api/npi/product/serial_number/".concat(e,"/info")),d()))}async function y(e){return s(await r.Z.get(l("/api/inventory/product/".concat(e,"/inventory")),d()))}async function v(e){let{pgNum:t,productId:n}=e;return s(await r.Z.get(l("/api/product-lca/model/query?pageNum=".concat(t,"&pageSize=10&productId=").concat(n>-1?n:"")),d()))}async function j(e){let{pgNum:t}=e;return s(await r.Z.get(l("/api/product-lca/result/query?pageNum=".concat(t,"&pageSize=10")),d()))}async function w(e){return s(await r.Z.get(l("/api/product-lca/result/detail/".concat(e)),d()))}async function N(e,t){return s(await r.Z.post(l("/api/product-lca/model/state/".concat(e,"/update/").concat(t)),null,d()))}async function b(e){let t=d();t.headers&&(t.headers["Content-Type"]="multipart/form-data");try{return await r.Z.post(l("/api/product-lca/model/upload"),e,t)}catch(n){console.log(n)}}async function I(){return s(await r.Z.get(l("/api/product/category/query"),d()))}async function k(e){let{name:t,categoryId:n,orgId:a,description:c}=e;return s(await r.Z.post(l("/api/product/upsert"),{name:t,categoryId:n,orgId:a,partNumber:"1",imageUrl:"",description:c},d()))}async function Z(){return s(await r.Z.get(l("/api/product/list?pageSize=500"),d()))}async function C(e){const t=await async function(e){const t=await r.Z.get(l("/api/product-lca/model/".concat(e,"/categories")),d());return JSON.parse(s(t))}(e),n=await async function(e){const t=await r.Z.get(l("/api/product-lca/model/".concat(e,"/descriptors")),d());return JSON.parse(s(t))}(e);return[t,n]}async function F(e,t,n){const a=await r.Z.get(l("/api/product-lca/model/".concat(e,"/item/").concat(t,"/").concat(n,"/info")),d());return JSON.parse(s(a))}}}]);