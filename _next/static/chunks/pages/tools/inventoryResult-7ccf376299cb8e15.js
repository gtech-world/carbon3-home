(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[126],{4053:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/inventoryResult",function(){return a(2417)}])},7921:function(e,t,a){"use strict";a.d(t,{z:function(){return r}});var n=a(1527),l=a(4875),s=a.n(l);function r(e){const{children:t,className:a,...l}=e;return(0,n.jsx)("button",{...l,className:s()(a,"hover:bg-green-28"),children:e.children})}},8288:function(e,t,a){"use strict";a.d(t,{i:function(){return u}});var n=a(1527),l=a(4875),s=a.n(l),r=a(4323),i=a(1875),c=a(959),o=a(818),d=a(8723);function u(e){const{columns:t,data:a,className:l,cellClassName:u,headerStyle:m,size:x,maxHeight:p,loading:h=!1,hiddenHeader:f=!1}=e,[v,g]=(0,c.useState)(a||[]),[N,j]=(0,c.useState)({}),y=(0,c.useRef)(null);(0,d.Z)(y,(()=>{for(let e in N)N[e]&&(N[e].isFilterOpen=!1,j({...N}))})),(0,c.useEffect)((()=>{g(a)}),[a]),(0,c.useEffect)((()=>{t.map((e=>{var t;e.filterOptions&&(N[e.dataIndex]={isFilterOpen:!1,filterValueIndex:(null===(t=N[e.dataIndex])||void 0===t?void 0:t.filterValueIndex)>-1?N[e.dataIndex].filterValueIndex:-1})})),j(N)}),[t]);const b=(e,t)=>{Object.assign(N,{[e.dataIndex]:{filterValueIndex:t,isFilterOpen:!1}}),e.onFilterChange&&e.onFilterChange(t>-1?e.filterOptions[t]:null),j(N)};return(0,n.jsxs)("div",{className:s()("w-full",l,"small"===x&&"text-xs","big"===x&&"text-lg mo:text-[.9375rem]"),children:[(0,n.jsxs)("table",{className:"w-full text-left",children:[!f&&(0,n.jsx)("thead",{className:s()("bg-gray-14 ",l,"small"===x&&"text-sm"),style:m,children:(0,n.jsx)("tr",{className:"px-3",children:t&&t.map(((e,a)=>{var l;return(0,n.jsxs)("th",{style:{width:e.width?e.width:"auto"},className:s()("px-3 relative break-keep",0===a&&"rounded-l overflow-hidden",a===t.length-1&&"rounded-r overflow-hidden","small"===x?"py-1":"big"===x?"py-3":"py-2"),children:[!!e.tip&&(0,n.jsx)(r.gL9,{"data-tooltip-id":"tooltip","data-tooltip-content":e.tip,className:"inline-block text-xl mt-[-0.15rem] mr-1"}),(0,n.jsx)("span",{children:e.title}),!!N[e.dataIndex]&&(0,n.jsxs)("div",{className:"inline-block",ref:y,children:[(0,n.jsx)(i.Ihx,{color:(null===(l=N[e.dataIndex])||void 0===l?void 0:l.filterValueIndex)>-1?"#29953A":"",onClick:()=>{var t;N[(t=e).dataIndex].isFilterOpen=!N[t.dataIndex].isFilterOpen,j({...N})},className:"inline-block text-xl mt-[-0.15rem] ml-1 cursor-pointer"}),N[e.dataIndex].isFilterOpen&&(0,n.jsx)("div",{className:"absolute left-0 top-10 font-normal",children:(0,n.jsxs)("ul",{className:"bg-white w-[12.375rem] max-h-[14.875rem] overflow-auto text-sm rounded-lg py-3",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)"},children:[(0,n.jsx)("li",{className:s()("py-2.5 px-5 hover:bg-[#F3F3F3] cursor-pointer",-1===N[e.dataIndex].filterValueIndex&&"text-green-2"),onClick:()=>{b(e,-1)},children:"All"}),e.filterOptions.map(((t,a)=>(0,n.jsx)("li",{onClick:()=>{b(e,a)},className:s()("py-1.5 hover:bg-[#F3F3F3] px-5 break-all cursor-pointer",N[e.dataIndex].filterValueIndex===a?"text-green-2":""),children:t.text},"productList".concat(a))))]})})]})]},"columns".concat(a))}))})}),!h&&(0,n.jsx)("tbody",{style:{maxHeight:p},className:"overflow-y-auto w-full",children:v.map(((e,a)=>(0,n.jsx)("tr",{className:"column-level-".concat(e.level?e.level:0),children:t.map(((t,l)=>(0,n.jsx)("td",{className:s()("px-3","small"===x?"py-1":"big"===x?"py-3":"py-2",!!t.tip&&"pl-9",u&&u(t,l,a)),style:{width:t.width?t.width:"auto"},children:(0,n.jsxs)("div",{className:"flex items-center",style:{marginLeft:1.25*(e.level&&0===l?e.level:0)+"rem"},children:[!!(null===e||void 0===e?void 0:e.children)&&(null===e||void 0===e?void 0:e.children.length)>0&&0===l&&(0,n.jsx)(i.Tfp,{onClick:()=>(e=>{if(void 0===v[e].level&&(v[e].level=0),v[e].children.map((t=>{t.level=v[e].level+1})),v[e].open=!v[e].open,v[e].open)g(v.slice(0,e+1).concat(v[e].children).concat(v.slice(e+1)));else{let t=v[e].children.length;v[e].children.map((e=>{e.open&&(e.open=!1,t+=e.children.length)})),v.splice(e+1,t),g([...v])}})(a),className:s()("mr-2 cursor-pointer text-gray-9",e.open&&"rotate-[90deg]")}),t.render?t.render(e[t.dataIndex],e):t.emptyText&&!e[t.dataIndex]?"-":e[t.dataIndex]]})},"data_column_".concat(l))))},"table_data_".concat(a))))})]}),h?(0,n.jsx)(o.g,{className:"pt-8"}):!(v&&v.length>0)&&(0,n.jsx)("div",{className:"w-full flex justify-center py-20",children:"\u65e0\u6570\u636e"})]})}},7944:function(e,t,a){"use strict";a.d(t,{m:function(){return f}});var n=a(1527),l=a(3190),s=a(7007),r=a(1875),i=a(9270),c=a(4875),o=a.n(c),d=a(5688),u=a(9713),m=a(7202),x=a(5487),p=a(570);function h(e){const{children:t,className:a,tits:s,showQuery:r,isManager:c,...h}=e,{push:f}=(0,l.useRouter)(),v=(0,p.fo)();(0,i.dD)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:o()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem] justify-between",a),...h,children:[(0,n.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>f("/"),children:[(0,n.jsx)(d.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,n.jsx)(u.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,n.jsx)(m.R,{menus:v,children:(0,n.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,n.jsx)(x.otZ,{})})})]})})}function f(e){const{className:t,canBack:a,children:i,...c}=e,{push:d,pathname:u}=(0,l.useRouter)(),m=(0,s.R)();return(0,n.jsxs)("div",{className:"flex-1 w-full flex h-full flex-col min-h-fit bg-gray-16 relative",children:[(0,n.jsx)(h,{showQuery:!0,style:{top:"".concat(m,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,n.jsxs)("div",{className:"w-full max-w-[90rem] h-full mx-auto px-[60px] flex flex-col flex-1",children:[a&&(0,n.jsxs)("div",{className:"flex items-center my-5 text-sm cursor-pointer",onClick:()=>d("/carbon/service"),children:[(0,n.jsx)(r.YFh,{className:"text-lg"}),"\u8fd4\u56de"]}),(0,n.jsx)("div",{className:o()("flex flex-col",t),children:i})]})]})}},7361:function(e,t,a){"use strict";a.d(t,{k:function(){return s}});var n=a(959),l=a(6171);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const a=(0,n.useRef)(!0),s=(0,n.useRef)(0),[,r]=(0,n.useState)(1),i=(0,n.useCallback)((e=>{a.current=e,r((e=>1-e))}),[]),[c,o]=(0,l.Z)(e,t),d=()=>{a.current||i(!0);const e=s.current+1>1e5?0:s.current+1;s.current=e,o().finally((()=>s.current==e&&i(!1)))};return(0,n.useEffect)((()=>{d()}),t),(0,n.useMemo)((()=>({...c,value:a.current||c.error?void 0:c.value,loading:a.current,req:d})),[c,a.current])}},4726:function(e,t,a){"use strict";a.d(t,{AC:function(){return F},BI:function(){return N},Ii:function(){return g},Iv:function(){return S},LW:function(){return Z},Mt:function(){return C},Pf:function(){return o},Ps:function(){return I},RN:function(){return h},RS:function(){return x},SO:function(){return j},Vd:function(){return f},av:function(){return w},eO:function(){return p},ep:function(){return v},fF:function(){return y},jw:function(){return m},pF:function(){return b},vz:function(){return k},x4:function(){return d}});var n=a(9270),l=a(8422),s=a(3993),r=a(3273);function i(e){return"".concat(s.Sg).concat(e)}function c(e){var t;const a=e.data;if(a){if(a.code&&1e5!==a.code)throw a.message;return null===(t=e.data)||void 0===t?void 0:t.data}}function o(e,t){return()=>t.some((e=>!e))?(0,r._v)():e()}async function d(e,t){return c(await l.Z.post(i("/api/base/login"),{name:e,password:t}))}function u(){const e=(0,n.is)();return e?{headers:{Authorization:"Bearer ".concat(e.loginToken)}}:{}}async function m(){return c(await l.Z.get(i("/api/npi/product/list"),u()))}async function x(e){return c(await l.Z.get(i("/api/npi/product/".concat(e,"/pcf_accountable")),u()))}async function p(e){return c(await l.Z.get(i("/api/npi/product/".concat(e,"/bom/list")),u()))}async function h(e){return c(await l.Z.get(i("/api/npi/product_bom/".concat(e,"/activity_types")),u()))}async function f(e){return c(await l.Z.get(i("/api/npi/product_process/query"),{...u(),params:{product_id:e,include_activity_types:!0}}))}async function v(e){return c(await l.Z.get(i("/api/npi/product/serial_number/".concat(e,"/info")),u()))}async function g(e){return c(await l.Z.get(i("/api/inventory/product/".concat(e,"/inventory")),u()))}async function N(e){let{pgNum:t,productId:a}=e;return c(await l.Z.get(i("/api/product-lca/model/query?pageNum=".concat(t,"&pageSize=10&productId=").concat(a>-1?a:"")),u()))}async function j(e){let{pgNum:t}=e;return c(await l.Z.get(i("/api/product-lca/result/query?pageNum=".concat(t,"&pageSize=10")),u()))}async function y(e){return c(await l.Z.get(i("/api/product-lca/result/detail/".concat(e)),u()))}async function b(e,t){return c(await l.Z.post(i("/api/product-lca/model/state/".concat(e,"/update/").concat(t)),null,u()))}async function w(e){let t=u();t.headers&&(t.headers["Content-Type"]="multipart/form-data");try{return await l.Z.post(i("/api/product-lca/model/upload"),e,t)}catch(a){console.log(a)}}async function I(){return c(await l.Z.get(i("/api/product/category/query"),u()))}async function C(e){let{name:t,categoryId:a,orgId:n,description:s}=e;return c(await l.Z.post(i("/api/product/upsert"),{name:t,categoryId:a,orgId:n,partNumber:"1",imageUrl:"",description:s},u()))}async function k(){return c(await l.Z.get(i("/api/product/list?pageSize=500"),u()))}async function S(e){const t=await async function(e){const t=await l.Z.get(i("/api/product-lca/model/".concat(e,"/categories")),u());return JSON.parse(c(t))}(e),a=await async function(e){const t=await l.Z.get(i("/api/product-lca/model/".concat(e,"/descriptors")),u());return JSON.parse(c(t))}(e);return[t,a]}async function F(e,t,a){const n=await l.Z.get(i("/api/product-lca/model/".concat(e,"/item/").concat(t,"/").concat(a,"/info")),u());return JSON.parse(c(n))}async function Z(e){let t=u();return await l.Z.get(i("/api/product-lca/result/".concat(e,"/export")),Object.assign(t,{responseType:"blob"}))}},2417:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Z}});var n=a(1527),l=a(7944),s=a(959),r=a(7921),i=a(2702),c=a(4875),o=a.n(c),d=a(3378);function u(e){return(0,n.jsx)(d.Z,{opts:{locale:"en"},notMerge:!0,lazyUpdate:!0,...e})}var m=a(8288),x=a(7661),p=a(1875),h=a(1671),f=a(5591),v=a(7361),g=a(4726),N=a(3273),j=a(3190),y=a(818);function b(e){const[t,a]=(0,s.useState)(!0),{text:l,onChange:r}=e;return(0,s.useMemo)((()=>{r&&r(t)}),[t]),(0,n.jsx)("div",{className:"font-bold inline-block",onClick:()=>a(!t),children:(0,n.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,n.jsx)("span",{children:l}),(0,n.jsx)(i.Tgc,{height:"7px",className:o()("ml-1",!t&&"rotate-180")})]})})}function w(e){const{data:t}=e,a=[{label:"\u4ea7\u54c1\u6279\u6b21\u53f7",text:t.loadNumber},{label:"\u4ea7\u54c1\u540d\u79f0",text:t.productName},{label:"\u6a21\u578b\u540d\u79f0",text:t.modelName},{label:"\u7c7b\u522b",text:t.productCategory},{label:"\u6700\u540e\u66f4\u6539\u65f6\u95f4",text:t.lastUpdatedTime},{label:"UUID",text:t.uuid}];return(0,n.jsx)("div",{className:"bg-white p-5 rounded-2xl mt-8",children:a.map(((e,t)=>(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsxs)("label",{className:"font-medium whitespace-nowrap",children:[e.label," :"]}),(0,n.jsx)("span",{className:"ml-1 text-gray-6",children:e.text})]},"data-".concat(t))))})}function I(e){const[t,a]=(0,s.useState)(!0),{data:l}=e,r=[{label:"\u4ea7\u54c1\u7cfb\u7edf",text:l.productSystemName},{label:"\u5206\u914d\u65b9\u6cd5",text:"As defined in processes"},{label:"\u76ee\u6807\u6570\u91cf",text:l.targetAmount},{label:"\u5f71\u54cd\u8bc4\u4ef7\u65b9\u6cd5",text:l.methodName},{label:"\u5f71\u54cd\u7c7b\u522b",text:"IPCC 2021 GWP 100"}];return(0,n.jsxs)("div",{children:[(0,n.jsx)(b,{text:"\u4e00\u822c\u4fe1\u606f",onChange:e=>a(e)}),t&&(0,n.jsx)("div",{className:"mt-4",children:r.map(((e,t)=>(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsxs)("label",{className:"",children:[e.label," :"]}),(0,n.jsx)("span",{className:"ml-1 text-gray-6",children:e.text})]},"data-".concat(t))))})]})}function C(e){const[t,a]=(0,s.useState)(!0),{data:l}=e;return(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)(b,{text:"\u78b3\u8db3\u8ff9\u7ed3\u679c",onChange:e=>a(e)}),t&&(0,n.jsx)("div",{className:"text-[1.75rem] font-semibold mt-4",children:l})]})}function k(e){const[t,a]=(0,s.useState)(!0),{data:l,referenceUnit:r}=e,i=[{title:"\u8d21\u732e",dataIndex:"contribution",width:"100px"},{title:"\u8fc7\u7a0b",dataIndex:"process",render:e=>(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(x.G3d,{className:"svg-purple"}),(0,n.jsx)("span",{className:"ml-1",children:e})]})},{title:"\u6240\u9700\u6570\u91cf",dataIndex:"requiredAmount"},{title:"\u7ed3\u679c",dataIndex:"result",render:e=>(0,n.jsxs)("span",{children:[e,"m3"===r?(0,n.jsxs)("span",{children:["m",(0,n.jsx)("sup",{children:"3"})]}):r]})}],c=(0,s.useMemo)((()=>{var e;const t=(null===(e=l[0])||void 0===e?void 0:e.children)||[],a=["#EB505B","#4780C6","#FFCE5D","#3F9F4A","#7B41A0","#757475"],n=[],s=[];let i=0;t.map(((e,t)=>{if(t<5){const l=e.result+" "+r+": "+e.process;n.push(l);const i=[0];for(let a=0;a<=t;a++)a<t?i.push(0):i.push(e.result);s.push({name:l,color:a[t],type:"bar",barWidth:40,data:i,barGap:"-50%"})}else i+=e.result||0}));const c=i+" "+r+" :other";return n.push(c),s.push({name:c,color:a[5],type:"bar",barWidth:40,barGap:"-50%",data:[0,0,0,0,0,i]}),{grid:{top:20,left:50,right:750,bottom:20},xAxis:{type:"category",axisLine:{show:!0,lineStyle:{color:"#999999"}},axisTick:{show:!1},axisLabel:{show:!1}},legend:{orient:"vertical",right:0,y:"center",data:n,itemHeight:6,itemWidth:40,itemGap:20,textStyle:{padding:6}},yAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"#999999"}},splitLine:{show:!1},axisTick:{show:!0,length:5}},series:s}}),[l]);return(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)(b,{text:"\u8d21\u732e\u6811",onChange:e=>a(e)}),t&&(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsx)(m.i,{size:"small",columns:i,data:l,cellClassName:(e,t,a)=>a%2===0?"bg-gray-16 ".concat(0===t&&"rounded-l-md"," ").concat(t===i.length-1&&"rounded-r-md"):"",headerStyle:{background:"#fff"}})}),(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("h4",{children:"\u5bf9\u5f71\u54cd\u7c7b\u522b\u7ed3\u679c\u7684\u524d5\u4e2a\u8d21\u732e - \u6982\u8ff0"}),(0,n.jsx)("div",{className:"w-full overflow-x-auto",children:(0,n.jsx)("div",{className:"min-w-[80rem]",children:(0,n.jsx)(u,{option:c})})})]})]})]})}function S(e){const[t,a]=(0,s.useState)(!0),{data:l}=e,r=[{title:"\u540d\u79f0",dataIndex:"name",render:e=>(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(h.J9I,{fill:"#29953A",className:"text-sm"}),(0,n.jsx)("span",{className:"ml-1",children:e})]}),width:"40%"},{title:"\u79cd\u7c7b",dataIndex:"category",width:"30%"},{title:"\u6570\u91cf",dataIndex:"amount",width:"20%"},{title:"\u5355\u4f4d",dataIndex:"unit",width:"10%"}];return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)(b,{text:"\u6e05\u5355\u5217\u8868",onChange:e=>a(e)}),t&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{className:"mt-4 mb-3",children:"\u8f93\u5165"}),(0,n.jsx)("ul",{className:"flex mb-1",children:r.map(((e,t)=>(0,n.jsx)("li",{className:"px-3 text-sm font-bold",style:{width:e.width},children:e.title},"columns".concat(t))))}),(0,n.jsx)("div",{className:"max-h-[15rem] overflow-y-auto",children:(0,n.jsx)(m.i,{size:"small",hiddenHeader:!0,columns:r,data:l.inputData,cellClassName:(e,t,a)=>a%2===0?"bg-gray-16 ".concat(0===t&&"rounded-l"," ").concat(t===r.length-1&&"rounded-r"):"",headerStyle:{background:"#fff"},maxHeight:"300px"})}),(0,n.jsx)("h4",{className:"mt-4 mb-3",children:"\u8f93\u51fa"}),(0,n.jsxs)("div",{className:"max-h-[20rem] overflow-y-auto",children:[(0,n.jsx)("ul",{className:"flex mb-1",children:r.map(((e,t)=>(0,n.jsx)("li",{className:"px-3 text-sm font-bold",style:{width:e.width},children:e.title},"columns".concat(t))))}),(0,n.jsx)("div",{className:"max-h-[15rem] overflow-y-auto",children:(0,n.jsx)(m.i,{size:"small",hiddenHeader:!0,columns:r,data:l.outputData,cellClassName:(e,t,a)=>a%2===0?"bg-gray-16 ".concat(0===t&&"rounded-l"," ").concat(t===r.length-1&&"rounded-r"):"",headerStyle:{background:"#fff"}})})]})]})]})})}function F(e){const[t,a]=(0,s.useState)(!0),{data:l}=e,r=[{title:"\u8fc7\u7a0b",dataIndex:"process",render:(e,t)=>(0,n.jsxs)("div",{className:"flex items-center",children:[t.children?(0,n.jsx)(f.$nz,{fill:"#9C27B0",className:"text-sm"}):(0,n.jsx)(x.G3d,{className:"svg-purple"}),(0,n.jsx)("span",{className:"ml-1",children:e})]}),width:"40%"},{title:"\u4ea7\u54c1",dataIndex:"product",render:e=>e?(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(p.nbt,{stroke:"#0084FF",className:"svg-blue text-sm"}),(0,n.jsx)("span",{className:"ml-1",children:e})]}):"",width:"30%"},{title:"\u6570\u91cf",dataIndex:"amount",width:"20%"},{title:"\u5355\u4f4d",dataIndex:"unit",width:"10%"}];return(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)(b,{text:"\u603b\u9700\u6c42",onChange:e=>a(e)}),t&&(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("ul",{className:"flex mb-1",children:r.map(((e,t)=>(0,n.jsx)("li",{className:"px-3 text-sm font-bold",style:{width:e.width},children:e.title},"columns".concat(t))))}),(0,n.jsx)("div",{className:"max-h-[15rem] overflow-y-auto",children:(0,n.jsx)(m.i,{hiddenHeader:!0,size:"small",columns:r,data:l,cellClassName:(e,t,a)=>a%2===0?"bg-gray-16 ".concat(0===t&&"rounded-l"," ").concat(t===r.length-1&&"rounded-r"):"",headerStyle:{background:"#fff"}})})]})]})}var Z=function(){const{query:e}=(0,j.useRouter)(),[t,a]=(0,s.useState)(!1),{value:i,loading:c}=(0,v.k)((0,g.Pf)((()=>(0,g.fF)(e.id)),[]),[]),o=(e,t)=>0===e||0===t?0:t<0&&e>0?-e/t:e/t,{baseInfo:d,generalInfo:u,carbonResult:m,contributeTreeData:x,referenceUnit:p,listData:h,totalRequire:f}=(0,s.useMemo)((()=>{let e=[],t=[],a=[],l="",s={loadNumber:"",productName:"",modelName:"",lastUpdatedTime:"",productCategory:"",desc:"",uuid:""},r="",c={inputData:[],outputData:[]};if(i){var d,u,m,x,p,h,f,v,g,j;s={loadNumber:i.loadNumber,productName:i.product.name,modelName:i.model.modelName,lastUpdatedTime:i.model.updateTime,productCategory:i.productCategory.name,desc:i.model.description,uuid:i.model.productSystemUuid};const y=(0,N.tV)(JSON.parse(i.lcaResult));t={productSystemName:null===(d=y.extra)||void 0===d?void 0:d.productSystemName,methodName:null===(u=y.extra)||void 0===u?void 0:u.methodName,targetAmount:null===(m=y.extra)||void 0===m?void 0:m.targetAmount},l=y.totalImpacts[0].impact.referenceUnit||"";const b=null===(x=y.treeNode)||void 0===x?void 0:x.result;e=[{contribution:(100*o(b,b)).toFixed(2)+"%",process:null===(p=y.treeNode)||void 0===p?void 0:p.provider.name,requiredAmount:(null===(h=y.treeNode)||void 0===h?void 0:h.requiredAmount)+" "+(null===(f=y.treeNode)||void 0===f?void 0:f.refUnit),result:null===(v=y.treeNode)||void 0===v?void 0:v.result}],r=(0,n.jsxs)("span",{children:[b||0,"m3"===l?(0,n.jsxs)("span",{children:["m",(0,n.jsx)("sup",{children:"3"})]}):l]});const w=e=>{e&&e.map((e=>{e.contribution=(100*o(e.result,b)).toFixed(2)+"%",e.process=e.provider.name,e.requiredAmount=e.requiredAmount+" "+e.refUnit,e.children&&e.children.length>0&&w(e.children)}))};w(null===(g=y.treeNode)||void 0===g?void 0:g.children.sort(((e,t)=>t.result-e.result))),e[0].children=null===(j=y.treeNode)||void 0===j?void 0:j.children,y.totalFlows.map((e=>{let t={name:e.flow.name,category:e.flowPropertyPath,amount:e.value,unit:e.refUnit};e.isInput?c.inputData.push(t):c.outputData.push(t)})),y.totalRequirements.map((e=>{a.push({process:e.provider.name,product:e.flow.name,amount:e.value,unit:e.refUnit})}))}return{baseInfo:s,generalInfo:t,carbonResult:r,contributeTreeData:e,referenceUnit:l,listData:c,totalRequire:a}}),[i]);return(0,n.jsx)(l.m,{className:"text-black text-lg",children:c?(0,n.jsx)("div",{className:"h-[100vh] w-full items-center",children:(0,n.jsx)(y.g,{})}):(0,n.jsxs)("div",{className:"mo:break-all",children:[(0,n.jsx)(w,{data:d}),(0,n.jsx)("h3",{className:"text-2xl font-semibold my-5",children:"\u78b3\u8db3\u8ff9\u7ed3\u679c"}),(0,n.jsxs)("div",{className:"bg-white p-5 rounded-2xl",children:[(0,n.jsx)(I,{data:u}),(0,n.jsx)(C,{data:m}),(0,n.jsx)(k,{data:x,referenceUnit:p}),(0,n.jsx)(S,{data:h}),(0,n.jsx)(F,{data:f})]}),(0,n.jsx)("div",{className:"w-full flex justify-center mt-5 mb-10",children:(0,n.jsx)(r.z,{onClick:()=>!t&&(async()=>{if(!e.id)return!1;a(!0);const t=await(0,g.LW)(e.id);a(!1);const n=new Blob([t.data]),l="".concat(u.productSystemName,".xlsx"),s=document.createElement("a");s.download=l,s.style.display="none",s.href=URL.createObjectURL(n),document.body.appendChild(s),s.click(),URL.revokeObjectURL(s.href),document.body.removeChild(s)})(),className:"mt-5 text-lg bg-green-2 w-[26.875rem] text-white rounded-lg h-14 flex items-center justify-center",children:t?(0,n.jsx)("div",{children:(0,n.jsx)(y.g,{size:"2rem",color:"#fff"})}):(0,n.jsx)("span",{children:"\u5bfc\u51faExcel"})})})]})})}}},function(e){e.O(0,[713,769,307,574,740,798,420,575,570,774,888,179],(function(){return t=4053,e(e.s=t);var t}));var t=e.O();_N_E=t}]);