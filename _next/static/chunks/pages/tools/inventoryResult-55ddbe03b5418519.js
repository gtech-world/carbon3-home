(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1126],{6436:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/inventoryResult",function(){return s(4220)}])},1201:function(e,t,s){"use strict";s.d(t,{u:function(){return d},z:function(){return r}});var l=s(3342),a=s(8591),n=s.n(a),i=s(4209);function r(e){let{children:t,className:s,...a}=e;return(0,l.jsx)("button",{...a,className:n()(s,"hover:bg-green-28"),children:e.children})}function d(e){let{busy:t,disabled:s,className:a,defStyle:r="btn-primary",children:d,...c}=e;return(0,l.jsx)("button",{className:n()(a,{[r]:!s,"btn-disable":s}),...c,children:t?(0,l.jsx)(i.fCD,{className:"animate-spin"}):d})}},124:function(e,t,s){"use strict";s.d(t,{m:function(){return p}});var l=s(3342),a=s(107),n=s(8996),i=s(1882),r=s(3958),d=s(8591),c=s.n(d),o=s(2577),m=s(3917),u=s(5390),x=s(1608),h=s(8761);function f(e){let{children:t,className:s,tits:n,showQuery:i,isManager:d,...f}=e,{push:p}=(0,a.useRouter)(),j=(0,h.fo)();return(0,r.dD)(),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:c()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem] justify-between",s),...f,children:[(0,l.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>p("/"),children:[(0,l.jsx)(o.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,l.jsx)(m.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,l.jsx)(u.R,{menus:j,children:(0,l.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,l.jsx)(x.otZ,{})})})]})})}function p(e){let{className:t,canBack:s,children:r,link:d,isNew:o,containerClassName:m,...u}=e,{push:x}=(0,a.useRouter)(),h=(0,n.R)();return(0,l.jsxs)("div",{className:"relative flex flex-col flex-1 w-full h-full min-h-fit bg-gray-16",children:[(0,l.jsx)(f,{showQuery:!0,style:{top:"".concat(h,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,l.jsxs)("div",{className:c()("w-full h-full mx-auto px-[60px] flex flex-col flex-1",m,{" max-w-[90rem]":!o}),children:[s&&(0,l.jsxs)("div",{className:"flex items-center my-5 text-sm ".concat((null==d?void 0:d.pathName)?"cursor-default":"cursor-pointer"),onClick:()=>(null==d?void 0:d.pathName)?void 0:x("/carbon/service"),children:[!d&&(0,l.jsx)(i.YFh,{className:"text-lg"}),d&&"{}"!==JSON.stringify(d)?(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("span",{className:"text-[#000000] cursor-pointer font-bold  text-[14px]",onClick:()=>x(null==d?void 0:d.pathName),children:d.homeTitle}),(0,l.jsx)("div",{className:"mx-1 ",children:" / "}),(0,l.jsxs)("span",{className:"cu text-[#999999] font-normal text-[14px]",children:[" ",d.currentTitle]})]}):"返回"]}),(0,l.jsx)("div",{className:c()("flex flex-col ",t),children:r})]})]})}},4220:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return S}});var l=s(3342),a=s(2586);function n(e){return(0,l.jsx)(a.Z,{opts:{locale:"en"},notMerge:!0,lazyUpdate:!0,...e})}var i=s(1201),r=s(7266),d=s(3187),c=s(124),o=s(1844),m=s(5819),u=s(8591),x=s.n(u),h=s(107),f=s(9685),p=s(3155),j=s(4209),v=s(1882),N=s(2601),g=s(2138);function b(e){let[t,s]=(0,f.useState)(!0),{text:a,onChange:n}=e;return(0,f.useMemo)(()=>{n&&n(t)},[t]),(0,l.jsx)("div",{className:"inline-block font-bold",onClick:()=>s(!t),children:(0,l.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,l.jsx)("span",{children:a}),(0,l.jsx)(p.Tgc,{height:"7px",className:x()("ml-1",!t&&"rotate-180")})]})})}function w(e){let[t,s]=(0,f.useState)(!0),{data:a}=e,n=[{label:"产品系统",text:a.productSystemName},{label:"分配方法",text:"As defined in processes"},{label:"目标数量",text:a.targetAmount},{label:"影响评价方法",text:a.methodName},{label:"影响类别",text:"IPCC 2021 GWP 100"}];return(0,l.jsxs)("div",{children:[(0,l.jsx)(b,{text:"一般信息",onChange:e=>s(e)}),t&&(0,l.jsx)("div",{className:"mt-4",children:n.map((e,t)=>(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsxs)("label",{className:"",children:[e.label," :"]}),(0,l.jsx)("span",{className:"ml-1 text-gray-6",children:e.text})]},"data-".concat(t)))})]})}function y(e){let[t,s]=(0,f.useState)(!0),{data:a}=e;return(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(b,{text:"碳足迹结果",onChange:e=>s(e)}),t&&(0,l.jsx)("div",{className:"text-[1.75rem] font-semibold mt-4",children:a})]})}function C(e){let[t,s]=(0,f.useState)(!0),{data:a,referenceUnit:i}=e,r=[{title:"贡献",dataIndex:"contribution",width:"100px"},{title:"过程",dataIndex:"process",render:e=>(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(N.G3d,{className:"svg-purple"}),(0,l.jsx)("span",{className:"ml-1",children:e})]})},{title:"所需数量",dataIndex:"requiredAmount"},{title:"结果",dataIndex:"result",render:e=>(0,l.jsxs)("span",{children:[e,"m3"===i?(0,l.jsxs)("span",{children:["m",(0,l.jsx)("sup",{children:"3"})]}):i]})}],c=(0,f.useMemo)(()=>{var e;let t=(null===(e=a[0])||void 0===e?void 0:e.children)||[],s=["#EB505B","#4780C6","#FFCE5D","#3F9F4A","#7B41A0","#757475"],l=[],n=[],r=0;t.map((e,t)=>{if(t<5){let a=e.result+" "+i+": "+e.process;l.push(a);let r=[0];for(let s=0;s<=t;s++)s<t?r.push(0):r.push(e.result);n.push({name:a,color:s[t],type:"bar",barWidth:40,data:r,barGap:"-100%"})}else r+=e.result||0});let d=r+" "+i+": other";return l.push(d),n.push({name:d,color:"#757475",type:"bar",barWidth:40,barGap:"-100%",data:[0,0,0,0,0,0,r]}),{grid:{top:20,left:50,right:790,bottom:20},xAxis:{type:"category",axisLine:{show:!0,lineStyle:{color:"#999999"}},axisTick:{show:!1},axisLabel:{show:!1}},legend:{orient:"vertical",right:0,y:"center",data:l,itemHeight:6,itemWidth:40,itemGap:20,textStyle:{padding:6}},yAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"#999999"}},splitLine:{show:!1},axisTick:{show:!0,length:5}},series:n}},[a]);return(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(b,{text:"贡献树",onChange:e=>s(e)}),t&&(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsx)(d.i,{size:"small",columns:r,data:a,cellClassName:(e,t,s)=>s%2==0?"bg-gray-16 ".concat(0===t&&"rounded-l-md"," ").concat(t===r.length-1&&"rounded-r-md"):"",headerClassName:{background:"#fff"}})}),(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)("h4",{children:"对影响类别结果的前5个贡献 - 概述"}),(0,l.jsx)("div",{className:"w-full overflow-x-auto",children:(0,l.jsx)("div",{style:{minWidth:"1200px"},children:(0,l.jsx)(n,{style:{width:"100%"},option:c})})})]})]})]})}function k(e){let[t,s]=(0,f.useState)(!0),{data:a}=e,n=[{title:"名称",dataIndex:"name",render:e=>(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(g.J9I,{fill:"#29953A",className:"text-sm"}),(0,l.jsx)("span",{className:"ml-1",children:e})]}),width:"40%"},{title:"种类",dataIndex:"category",width:"30%"},{title:"数量",dataIndex:"amount",width:"20%"},{title:"单位",dataIndex:"unit",width:"10%"}];return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(b,{text:"清单列表",onChange:e=>s(e)}),t&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:"mt-4 mb-3",children:"输入"}),(0,l.jsx)("ul",{className:"flex mb-1",children:n.map((e,t)=>(0,l.jsx)("li",{className:"px-3 text-sm font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,l.jsx)("div",{className:"max-h-[15rem] overflow-y-auto",children:(0,l.jsx)(d.i,{size:"small",hiddenHeader:!0,columns:n,data:a.inputData,cellClassName:(e,t,s)=>s%2==0?"bg-gray-16 ".concat(0===t&&"rounded-l"," ").concat(t===n.length-1&&"rounded-r"):"",headerClassName:{background:"#fff"},maxHeight:"300px"})}),(0,l.jsx)("h4",{className:"mt-4 mb-3",children:"输出"}),(0,l.jsxs)("div",{className:"max-h-[20rem] overflow-y-auto",children:[(0,l.jsx)("ul",{className:"flex mb-1",children:n.map((e,t)=>(0,l.jsx)("li",{className:"px-3 text-sm font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,l.jsx)("div",{className:"max-h-[15rem] overflow-y-auto",children:(0,l.jsx)(d.i,{size:"small",hiddenHeader:!0,columns:n,data:a.outputData,cellClassName:(e,t,s)=>s%2==0?"bg-gray-16 ".concat(0===t&&"rounded-l"," ").concat(t===n.length-1&&"rounded-r"):"",headerClassName:{background:"#fff"}})})]})]})]})})}function I(e){let[t,s]=(0,f.useState)(!0),{data:a}=e,n=[{title:"过程",dataIndex:"process",render:(e,t)=>(0,l.jsxs)("div",{className:"flex items-center",children:[t.children?(0,l.jsx)(j.$nz,{fill:"#9C27B0",className:"text-sm"}):(0,l.jsx)(N.G3d,{className:"svg-purple"}),(0,l.jsx)("span",{className:"ml-1",children:e})]}),width:"40%"},{title:"产品",dataIndex:"product",render:e=>e?(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(v.nbt,{stroke:"#0084FF",className:"text-sm svg-blue"}),(0,l.jsx)("span",{className:"ml-1",children:e})]}):"",width:"30%"},{title:"数量",dataIndex:"amount",width:"20%"},{title:"单位",dataIndex:"unit",width:"10%"}];return(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(b,{text:"总需求",onChange:e=>s(e)}),t&&(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)("ul",{className:"flex mb-1",children:n.map((e,t)=>(0,l.jsx)("li",{className:"px-3 text-sm font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,l.jsx)("div",{className:"max-h-[15rem] overflow-y-auto",children:(0,l.jsx)(d.i,{hiddenHeader:!0,size:"small",columns:n,data:a,cellClassName:(e,t,s)=>s%2==0?"bg-gray-16 ".concat(0===t&&"rounded-l"," ").concat(t===n.length-1&&"rounded-r"):"",headerClassName:{background:"#fff"}})})]})]})}var S=function(){let{query:e}=(0,h.useRouter)(),[t,s]=(0,f.useState)(!1),[a,n]=(0,f.useState)({}),[d,u]=(0,f.useState)(!0),x=async()=>{let t=await (0,o.fF)(e.id);t&&(n(t&&t),u(!1))};(0,f.useEffect)(()=>{x()},[e.id]);let p=(e,t)=>0===e||0===t?0:t<0&&e>0?-(e/t):e/t,{generalInfo:j,carbonResult:v,contributeTreeData:N,referenceUnit:g,listData:b,totalRequire:S}=(0,f.useMemo)(()=>{let e=[],t=[],s=[],n="",i="",r={inputData:[],outputData:[]};if(a&&a.lcaResult){var d,c,o,u,x,h,f,j,v,N,g,b,w;let y=(0,m.tV)(JSON.parse(a.lcaResult));console.info("val::",y),t={productSystemName:null===(d=y.extra)||void 0===d?void 0:d.productSystemName,methodName:null===(c=y.extra)||void 0===c?void 0:c.methodName,targetAmount:null===(o=y.extra)||void 0===o?void 0:o.targetAmount},n=y.totalImpacts&&(null===(u=y.totalImpacts[0])||void 0===u?void 0:u.impact.referenceUnit)||"";let C=y.totalResult||(null===(x=y.treeNode)||void 0===x?void 0:x.result)||0;y.treeNode&&(e=[{contribution:(100*p(C,C)).toFixed(2)+"%",process:null===(j=y.treeNode)||void 0===j?void 0:j.provider.name,requiredAmount:(null===(v=y.treeNode)||void 0===v?void 0:v.requiredAmount)+" "+(null===(N=y.treeNode)||void 0===N?void 0:N.refUnit),result:null===(g=y.treeNode)||void 0===g?void 0:g.result}]),i=(0,l.jsxs)("span",{children:[C||0,"m3"===n?(0,l.jsxs)("span",{children:["m",(0,l.jsx)("sup",{children:"3"})]}):n]});let k=e=>{e&&e.map(e=>{e.contribution=(100*p(e.result,C)).toFixed(2)+"%",e.process=e.provider.name,e.requiredAmount=e.requiredAmount+" "+e.refUnit,e.children&&e.children.length>0&&k(e.children)})};y.treeNode&&(k(null===(b=y.treeNode)||void 0===b?void 0:b.children.sort((e,t)=>t.result-e.result)),e[0].children=null===(w=y.treeNode)||void 0===w?void 0:w.children),null===(h=y.totalFlows)||void 0===h||h.map(e=>{let t={name:e.flow.name,category:e.flowPropertyPath,amount:e.value,unit:e.refUnit};e.isInput?r.inputData.push(t):r.outputData.push(t)}),null===(f=y.totalRequirements)||void 0===f||f.map(e=>{s.push({process:e.provider.name,product:e.flow.name,amount:e.value,unit:e.refUnit})})}return{generalInfo:t,carbonResult:i,contributeTreeData:e,referenceUnit:n,listData:r,totalRequire:s}},[a]),A=async()=>{if(!e.id)return!1;s(!0);let t=await (0,o.LW)(e.id);if(t.headers){let e=t.headers.get("content-disposition");if(e){let l=e.match(/filename=(.+)/);if(l){s(!1);let e=new Blob([t.data]),a=document.createElement("a");a.download=l[1],a.style.display="none",a.href=URL.createObjectURL(e),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href),document.body.removeChild(a)}}}};return(0,l.jsx)(c.m,{className:"text-lg text-black",children:d?(0,l.jsx)("div",{className:"h-[100vh] w-full items-center",children:(0,l.jsx)(r.g,{})}):(0,l.jsxs)("div",{className:"mo:break-all",children:[(0,l.jsx)("h3",{className:"my-5 text-2xl font-semibold",children:"碳足迹结果"}),(0,l.jsxs)("div",{className:"p-5 bg-white rounded-2xl",children:[(0,l.jsx)(w,{data:j}),(0,l.jsx)(y,{data:v}),N&&N.length>0&&(0,l.jsx)(C,{data:N,referenceUnit:g}),b.inputData.length>0&&b.outputData.length>0&&(0,l.jsx)(k,{data:b}),S.length>0&&(0,l.jsx)(I,{data:S})]}),(0,l.jsx)("div",{className:"flex justify-center w-full mt-5 mb-10",children:(0,l.jsx)(i.z,{onClick:()=>!t&&A(),className:"mt-5 text-lg bg-green-2 w-[26.875rem] text-white rounded-lg  h-14 flex items-center justify-center",children:t?(0,l.jsx)("div",{children:(0,l.jsx)(r.g,{size:"2rem",color:"#fff"})}):(0,l.jsx)("span",{children:"导出Excel"})})})]})})}}},function(e){e.O(0,[3268,1271,7588,7038,8635,976,7228,9259,8761,3187,9774,2888,179],function(){return e(e.s=6436)}),_N_E=e.O()}]);