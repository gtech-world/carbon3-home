(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1126],{6436:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/inventoryResult",function(){return l(4220)}])},1201:function(e,t,l){"use strict";l.d(t,{u:function(){return d},z:function(){return r}});var s=l(3342),a=l(8591),n=l.n(a),i=l(4209);function r(e){let{children:t,className:l,...a}=e;return(0,s.jsx)("button",{...a,className:n()(l),children:e.children})}function d(e){let{busy:t,disabled:l,className:a,defStyle:r="btn-primary",children:d,...c}=e;return(0,s.jsx)("button",{className:n()(a,{[r]:!l,"btn-disable":l}),...c,children:t?(0,s.jsx)(i.fCD,{className:"animate-spin"}):d})}},7266:function(e,t,l){"use strict";l.d(t,{I:function(){return d},g:function(){return r}});var s=l(3342),a=l(8591),n=l.n(a),i=l(2138);function r(e){let{className:t,color:l,size:a="",...r}=e;return(0,s.jsx)("div",{...r,className:n()("text-black w-full h-full flex items-center justify-center",t),children:(0,s.jsx)(i.uur,{color:l,style:a?{fontSize:a}:{},className:"text-[3.125rem] animate-spin"})})}function d(){return(0,s.jsx)(r,{className:"fixed z-50 left-0 top-0 w-full !h-full bg-black/25"})}},3956:function(e,t,l){"use strict";l.d(t,{i:function(){return x}});var s=l(3342),a=l(8591),n=l.n(a),i=l(6786),r=l(1882),d=l(9685),c=l(7266),o=l(367),m=l(1768);let x=e=>{let{columns:t,data:l,className:a,cellClassName:x,headerClassName:u,size:h="",maxHeight:f,loading:p=!1,hiddenHeader:v=!1,mouseHoverKey:j="",columnsHeight:N="",isSetBorder:g=!1,tableId:b,columnsClassName:w,onChangeColumn:y=e=>e}=e,[I,k]=(0,d.useState)(l||[]),[C,F]=(0,d.useState)({}),[S,O]=(0,d.useState)({}),A=(0,d.useRef)(null);(0,o.Z)(A,()=>{for(let e in C)C[e]&&(C[e].isFilterOpen=!1,F({...C}))}),(0,d.useEffect)(()=>{k(l)},[l]),(0,d.useEffect)(()=>{t.map(e=>{if(e.filterOptions){var t;C[e.dataIndex]={isFilterOpen:!1,filterValueIndex:(null===(t=C[e.dataIndex])||void 0===t?void 0:t.filterValueIndex)>-1?C[e.dataIndex].filterValueIndex:-1}}}),F(C)},[t]);let _=e=>{if(void 0===I[e].level&&(I[e].level=0),I[e].children.map(t=>{t.level=I[e].level+1}),I[e].open=!I[e].open,I[e].open)k(I.slice(0,e+1).concat(I[e].children).concat(I.slice(e+1)));else{let t=I[e].children.length;I[e].children.map(e=>{e.open&&(e.open=!1,t+=e.children.length)}),I.splice(e+1,t),k([...I])}},E=(e,t)=>{Object.assign(C,{[e.dataIndex]:{filterValueIndex:t,isFilterOpen:!1}}),e.onFilterChange&&e.onFilterChange(t>-1?e.filterOptions[t]:null),F(C)},R=e=>{C[e.dataIndex].isFilterOpen=!C[e.dataIndex].isFilterOpen,F({...C})};return(0,s.jsxs)("div",{className:n()("w-full",a,"small"===h&&"text-xs","big"===h&&"text-lg mo:text-[.9375rem] "),children:[(0,s.jsxs)("table",{border:1,cellSpacing:0,className:"w-full text-left ",id:b,children:[!v&&(0,s.jsx)("thead",{className:n()("bg-gray-14 ",{"border bg-[#E5E5E5]":g},a,"small"===h&&"text-sm"),style:u,children:(0,s.jsx)("tr",{className:"px-3",children:t&&t.map((e,l)=>{var a;return(0,s.jsxs)("th",{style:{width:e.width?e.width:"auto"},className:n()("px-3 relative break-keep",0===l&&" ".concat(!g&&"rounded-l"||""," overflow-hidden"),l===t.length-1&&"".concat(!g&&"rounded-r"||""," overflow-hidden"),m.NO[h]||"py-2"),children:[!!e.tip&&(0,s.jsx)(i.gL9,{"data-tooltip-id":"tooltip","data-tooltip-content":e.tip,className:"inline-block text-xl mt-[-0.15rem] mr-1"}),(0,s.jsx)("span",{children:e.title}),!!C[e.dataIndex]&&(0,s.jsxs)("div",{className:"inline-block",ref:A,children:[(0,s.jsx)(r.Ihx,{color:(null===(a=C[e.dataIndex])||void 0===a?void 0:a.filterValueIndex)>-1?"#29953A":"",onClick:()=>{R(e)},className:"inline-block text-xl mt-[-0.15rem] ml-1 cursor-pointer"}),C[e.dataIndex].isFilterOpen&&(0,s.jsx)("div",{className:"absolute left-0 font-normal top-10",children:(0,s.jsxs)("ul",{className:"bg-white w-[12.375rem] max-h-[14.875rem] overflow-auto text-sm rounded-lg py-3",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)"},children:[(0,s.jsx)("li",{className:n()("py-2.5 px-5 hover:bg-[#F3F3F3] cursor-pointer",-1===C[e.dataIndex].filterValueIndex&&"text-green-2"),onClick:()=>{E(e,-1)},children:"All"}),e.filterOptions.map((t,l)=>(0,s.jsx)("li",{onClick:()=>{E(e,l)},className:n()("py-1.5 hover:bg-[#F3F3F3] px-5 break-all cursor-pointer",C[e.dataIndex].filterValueIndex===l?"text-green-2":""),children:t.text},"productList".concat(l)))]})})]})]},"columns".concat(l))})})}),!p&&(0,s.jsx)("tbody",{style:{maxHeight:f},className:"w-full overflow-y-auto ",children:I.map((e,l)=>(0,s.jsx)("tr",{className:" column-level-".concat(e.level?e.level:0," ").concat(N," "),children:t.map((t,a)=>(0,s.jsx)("td",{className:n()(w,"px-3  ",{"bg-[#F3F3F3]":S[j]===e[j]&&j,border:g},m.NO[h]||"py-2",!!t.tip&&"pl-9",x&&x(t,a,l)),style:{width:t.width?t.width:"auto"},children:(0,s.jsxs)("div",{onMouseOver:()=>O(e),onClick:()=>"function"==typeof y?y(e):void 0,className:"flex items-center ",style:{marginLeft:(e.level&&0===a?e.level:0)*1.25+"rem"},children:[!!(null==e?void 0:e.children)&&(null==e?void 0:e.children.length)>0&&0===a&&(0,s.jsx)(r.Tfp,{onClick:()=>_(l),className:n()("mr-2 cursor-pointer text-gray-9",e.open&&"rotate-[90deg]")}),t.render?t.render(e[t.dataIndex],e):t.emptyText&&!e[t.dataIndex]?"-":e[t.dataIndex]]})},"data_column_".concat(a)))},"table_data_".concat(l)))})]}),p?(0,s.jsx)(c.g,{className:"pt-8"}):!(I&&I.length>0)&&(0,s.jsx)("div",{className:"flex justify-center w-full py-20",children:"无数据"})]})}},124:function(e,t,l){"use strict";l.d(t,{m:function(){return p}});var s=l(3342),a=l(107),n=l(8996),i=l(1882),r=l(3958),d=l(8591),c=l.n(d),o=l(2577),m=l(3917),x=l(5390),u=l(1608),h=l(8761);function f(e){let{children:t,className:l,tits:n,showQuery:i,isManager:d,...f}=e,{push:p}=(0,a.useRouter)(),v=(0,h.fo)();return(0,r.dD)(),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:c()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0  h-[4.25rem] justify-between",l),...f,children:[(0,s.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>p("/"),children:[(0,s.jsx)(o.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,s.jsx)(m.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,s.jsx)(x.R,{menus:v,children:(0,s.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,s.jsx)(u.otZ,{})})})]})})}function p(e){let{className:t,canBack:l,children:r,link:d,isNew:o,containerClassName:m,...x}=e,{push:u}=(0,a.useRouter)(),h=(0,n.R)();return(0,s.jsxs)("div",{className:"relative flex flex-col flex-1 w-full h-full min-h-fit bg-gray-16",children:[(0,s.jsx)(f,{showQuery:!0,style:{top:"".concat(h,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,s.jsxs)("div",{className:c()("w-full h-full mx-auto px-[60px] flex flex-col flex-1",m,{" max-w-[90rem]":!o}),children:[l&&(0,s.jsxs)("div",{className:"flex items-center my-5 text-sm ".concat((null==d?void 0:d.pathName)?"cursor-default":"cursor-pointer"),onClick:()=>(null==d?void 0:d.pathName)?void 0:u("/carbon/service"),children:[!d&&(0,s.jsx)(i.YFh,{className:"text-lg"}),d&&"{}"!==JSON.stringify(d)?(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsx)("span",{className:"text-[#000000] cursor-pointer font-bold  text-[14px]",onClick:()=>u(null==d?void 0:d.pathName),children:d.homeTitle}),(0,s.jsx)("div",{className:"mx-1 ",children:" / "}),(0,s.jsxs)("span",{className:"cu text-[#999999] font-normal text-[14px]",children:[" ",d.currentTitle]})]}):"返回"]}),(0,s.jsx)("div",{className:c()("flex flex-col ",t),children:r})]})]})}},4220:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return F}});var s=l(3342),a=l(2586);function n(e){return(0,s.jsx)(a.Z,{opts:{locale:"en"},notMerge:!0,lazyUpdate:!0,...e})}var i=l(1201),r=l(7266),d=l(3956),c=l(124),o=l(1844),m=l(5819),x=l(8591),u=l.n(x),h=l(107),f=l(9685),p=l(3155),v=l(4209),j=l(1882),N=l(2601),g=l(2138);function b(e){let[t,l]=(0,f.useState)(!0),{text:a,onChange:n}=e;return(0,f.useMemo)(()=>{n&&n(t)},[t]),(0,s.jsx)("div",{className:"inline-block font-bold",onClick:()=>l(!t),children:(0,s.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,s.jsx)("span",{children:a}),(0,s.jsx)(p.Tgc,{height:"7px",className:u()("ml-1",!t&&"rotate-180")})]})})}function w(e){let[t,l]=(0,f.useState)(!0),{data:a}=e,n=[{label:"产品系统",text:a.productSystemName},{label:"分配方法",text:"As defined in processes"},{label:"目标数量",text:a.targetAmount},{label:"影响评价方法",text:a.methodName},{label:"影响类别",text:"IPCC 2021 GWP 100"}];return(0,s.jsxs)("div",{children:[(0,s.jsx)(b,{text:"一般信息",onChange:e=>l(e)}),t&&(0,s.jsx)("div",{className:"mt-4",children:n.map((e,t)=>(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsxs)("label",{className:"",children:[e.label," :"]}),(0,s.jsx)("span",{className:"ml-1 text-gray-6",children:e.text})]},"data-".concat(t)))})]})}function y(e){let[t,l]=(0,f.useState)(!0),{data:a}=e;return(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)(b,{text:"碳足迹结果",onChange:e=>l(e)}),t&&(0,s.jsx)("div",{className:"text-[1.75rem] font-semibold mt-4",children:a})]})}function I(e){let[t,l]=(0,f.useState)(!0),{data:a,referenceUnit:i}=e,r=[{title:"贡献",dataIndex:"contribution",width:"100px"},{title:"过程",dataIndex:"process",render:e=>(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(N.G3d,{className:"svg-purple"}),(0,s.jsx)("span",{className:"ml-1",children:e})]})},{title:"所需数量",dataIndex:"requiredAmount"},{title:"结果",dataIndex:"result",render:e=>(0,s.jsxs)("span",{children:[e,"m3"===i?(0,s.jsxs)("span",{children:["m",(0,s.jsx)("sup",{children:"3"})]}):i]})}],c=(0,f.useMemo)(()=>{var e;let t=(null===(e=a[0])||void 0===e?void 0:e.children)||[],l=["#EB505B","#4780C6","#FFCE5D","#3F9F4A","#7B41A0","#757475"],s=[],n=[],r=0;t.map((e,t)=>{if(t<5){let a=e.result+" "+i+": "+e.process;s.push(a);let r=[0];for(let l=0;l<=t;l++)l<t?r.push(0):r.push(e.result);n.push({name:a,color:l[t],type:"bar",barWidth:40,data:r,barGap:"-100%"})}else r+=e.result||0});let d=r+" "+i+": other";return s.push(d),n.push({name:d,color:"#757475",type:"bar",barWidth:40,barGap:"-100%",data:[0,0,0,0,0,0,r]}),{grid:{top:20,left:50,right:790,bottom:20},xAxis:{type:"category",axisLine:{show:!0,lineStyle:{color:"#999999"}},axisTick:{show:!1},axisLabel:{show:!1}},legend:{orient:"vertical",right:0,y:"center",data:s,itemHeight:6,itemWidth:40,itemGap:20,textStyle:{padding:6}},yAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"#999999"}},splitLine:{show:!1},axisTick:{show:!0,length:5}},series:n}},[a]);return(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)(b,{text:"贡献树",onChange:e=>l(e)}),t&&(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(d.i,{size:"small",columns:r,data:a,cellClassName:(e,t,l)=>l%2==0?"bg-gray-16 ".concat(0===t&&"rounded-l-md"," ").concat(t===r.length-1&&"rounded-r-md"):"",headerClassName:{background:"#fff"}})}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("h4",{children:"对影响类别结果的前5个贡献 - 概述"}),(0,s.jsx)("div",{className:"w-full overflow-x-auto",children:(0,s.jsx)("div",{style:{minWidth:"1200px"},children:(0,s.jsx)(n,{style:{width:"100%"},option:c})})})]})]})]})}function k(e){let[t,l]=(0,f.useState)(!0),{data:a}=e,n=[{title:"名称",dataIndex:"name",render:e=>(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(g.J9I,{fill:"#29953A",className:"text-sm"}),(0,s.jsx)("span",{className:"ml-1",children:e})]}),width:"40%"},{title:"种类",dataIndex:"category",width:"30%"},{title:"数量",dataIndex:"amount",width:"20%"},{title:"单位",dataIndex:"unit",width:"10%"}];return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)(b,{text:"清单列表",onChange:e=>l(e)}),t&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"mt-4 mb-3",children:"输入"}),(0,s.jsx)("ul",{className:"flex mb-1",children:n.map((e,t)=>(0,s.jsx)("li",{className:"px-3 text-sm font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,s.jsx)("div",{className:"max-h-[15rem] overflow-y-auto",children:(0,s.jsx)(d.i,{size:"small",hiddenHeader:!0,columns:n,data:a.inputData,cellClassName:(e,t,l)=>l%2==0?"bg-gray-16 ".concat(0===t&&"rounded-l"," ").concat(t===n.length-1&&"rounded-r"):"",headerClassName:{background:"#fff"},maxHeight:"300px"})}),(0,s.jsx)("h4",{className:"mt-4 mb-3",children:"输出"}),(0,s.jsxs)("div",{className:"max-h-[20rem] overflow-y-auto",children:[(0,s.jsx)("ul",{className:"flex mb-1",children:n.map((e,t)=>(0,s.jsx)("li",{className:"px-3 text-sm font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,s.jsx)("div",{className:"max-h-[15rem] overflow-y-auto",children:(0,s.jsx)(d.i,{size:"small",hiddenHeader:!0,columns:n,data:a.outputData,cellClassName:(e,t,l)=>l%2==0?"bg-gray-16 ".concat(0===t&&"rounded-l"," ").concat(t===n.length-1&&"rounded-r"):"",headerClassName:{background:"#fff"}})})]})]})]})})}function C(e){let[t,l]=(0,f.useState)(!0),{data:a}=e,n=[{title:"过程",dataIndex:"process",render:(e,t)=>(0,s.jsxs)("div",{className:"flex items-center",children:[t.children?(0,s.jsx)(v.$nz,{fill:"#9C27B0",className:"text-sm"}):(0,s.jsx)(N.G3d,{className:"svg-purple"}),(0,s.jsx)("span",{className:"ml-1",children:e})]}),width:"40%"},{title:"产品",dataIndex:"product",render:e=>e?(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(j.nbt,{stroke:"#0084FF",className:"text-sm svg-blue"}),(0,s.jsx)("span",{className:"ml-1",children:e})]}):"",width:"30%"},{title:"数量",dataIndex:"amount",width:"20%"},{title:"单位",dataIndex:"unit",width:"10%"}];return(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)(b,{text:"总需求",onChange:e=>l(e)}),t&&(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("ul",{className:"flex mb-1",children:n.map((e,t)=>(0,s.jsx)("li",{className:"px-3 text-sm font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,s.jsx)("div",{className:"max-h-[15rem] overflow-y-auto",children:(0,s.jsx)(d.i,{hiddenHeader:!0,size:"small",columns:n,data:a,cellClassName:(e,t,l)=>l%2==0?"bg-gray-16 ".concat(0===t&&"rounded-l"," ").concat(t===n.length-1&&"rounded-r"):"",headerClassName:{background:"#fff"}})})]})]})}var F=function(){let{query:e}=(0,h.useRouter)(),[t,l]=(0,f.useState)(!1),[a,n]=(0,f.useState)({}),[d,x]=(0,f.useState)(!0),u=async()=>{let t=await (0,o.fF)(e.id);t&&(n(t&&t),x(!1))};(0,f.useEffect)(()=>{u()},[e.id]);let p=(e,t)=>0===e||0===t?0:t<0&&e>0?-(e/t):e/t,{generalInfo:v,carbonResult:j,contributeTreeData:N,referenceUnit:g,listData:b,totalRequire:F}=(0,f.useMemo)(()=>{let e=[],t=[],l=[],n="",i="",r={inputData:[],outputData:[]};if(a&&a.lcaResult){var d,c,o,x,u,h,f,v,j,N,g,b,w;let y=(0,m.tV)(JSON.parse(a.lcaResult));console.info("val::",y),t={productSystemName:null===(d=y.extra)||void 0===d?void 0:d.productSystemName,methodName:null===(c=y.extra)||void 0===c?void 0:c.methodName,targetAmount:null===(o=y.extra)||void 0===o?void 0:o.targetAmount},n=y.totalImpacts&&(null===(x=y.totalImpacts[0])||void 0===x?void 0:x.impact.referenceUnit)||"";let I=y.totalResult||(null===(u=y.treeNode)||void 0===u?void 0:u.result)||0;y.treeNode&&(e=[{contribution:(100*p(I,I)).toFixed(2)+"%",process:null===(v=y.treeNode)||void 0===v?void 0:v.provider.name,requiredAmount:(null===(j=y.treeNode)||void 0===j?void 0:j.requiredAmount)+" "+(null===(N=y.treeNode)||void 0===N?void 0:N.refUnit),result:null===(g=y.treeNode)||void 0===g?void 0:g.result}]),i=(0,s.jsxs)("span",{children:[I||0,"m3"===n?(0,s.jsxs)("span",{children:["m",(0,s.jsx)("sup",{children:"3"})]}):n]});let k=e=>{e&&e.map(e=>{e.contribution=(100*p(e.result,I)).toFixed(2)+"%",e.process=e.provider.name,e.requiredAmount=e.requiredAmount+" "+e.refUnit,e.children&&e.children.length>0&&k(e.children)})};y.treeNode&&(k(null===(b=y.treeNode)||void 0===b?void 0:b.children.sort((e,t)=>t.result-e.result)),e[0].children=null===(w=y.treeNode)||void 0===w?void 0:w.children),null===(h=y.totalFlows)||void 0===h||h.map(e=>{let t={name:e.flow.name,category:e.flowPropertyPath,amount:e.value,unit:e.refUnit};e.isInput?r.inputData.push(t):r.outputData.push(t)}),null===(f=y.totalRequirements)||void 0===f||f.map(e=>{l.push({process:e.provider.name,product:e.flow.name,amount:e.value,unit:e.refUnit})})}return{generalInfo:t,carbonResult:i,contributeTreeData:e,referenceUnit:n,listData:r,totalRequire:l}},[a]),S=async()=>{if(!e.id)return!1;l(!0);let t=await (0,o.LW)(e.id);if(t.headers){let e=t.headers.get("content-disposition");if(e){let s=e.match(/filename=(.+)/);if(s){l(!1);let e=new Blob([t.data]),a=document.createElement("a");a.download=s[1],a.style.display="none",a.href=URL.createObjectURL(e),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href),document.body.removeChild(a)}}}};return(0,s.jsx)(c.m,{className:"text-lg text-black",children:d?(0,s.jsx)("div",{className:"h-[100vh] w-full items-center",children:(0,s.jsx)(r.g,{})}):(0,s.jsxs)("div",{className:"mo:break-all",children:[(0,s.jsx)("h3",{className:"my-5 text-2xl font-semibold",children:"碳足迹结果"}),(0,s.jsxs)("div",{className:"p-5 bg-white rounded-2xl",children:[(0,s.jsx)(w,{data:v}),(0,s.jsx)(y,{data:j}),N&&N.length>0&&(0,s.jsx)(I,{data:N,referenceUnit:g}),b.inputData.length>0&&b.outputData.length>0&&(0,s.jsx)(k,{data:b}),F.length>0&&(0,s.jsx)(C,{data:F})]}),(0,s.jsx)("div",{className:"flex justify-center w-full mt-5 mb-10",children:(0,s.jsx)(i.z,{onClick:()=>!t&&S(),className:"mt-5 text-lg bg-green-2 w-[26.875rem] text-white rounded-lg  h-14 flex items-center justify-center hover:bg-green-28",children:t?(0,s.jsx)("div",{children:(0,s.jsx)(r.g,{size:"2rem",color:"#fff"})}):(0,s.jsx)("span",{children:"导出Excel"})})})]})})}}},function(e){e.O(0,[3268,1271,7588,7038,8635,976,7228,9259,8761,9774,2888,179],function(){return e(e.s=6436)}),_N_E=e.O()}]);