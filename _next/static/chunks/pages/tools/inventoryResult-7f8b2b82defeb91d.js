(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1126],{6436:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/inventoryResult",function(){return l(4220)}])},1201:function(e,t,l){"use strict";l.d(t,{u:function(){return i},z:function(){return r}});var a=l(3342),n=l(8591),s=l.n(n),c=l(4209);function r(e){let{children:t,className:l,...n}=e;return(0,a.jsx)("button",{...n,className:s()(l),children:e.children})}function i(e){let{busy:t,disabled:l,className:n,defStyle:r="btn-primary",children:i,...o}=e;return(0,a.jsx)("button",{className:s()(n,{[r]:!l,"btn-disable":l}),...o,children:t?(0,a.jsx)(c.fCD,{className:"animate-spin"}):i})}},7266:function(e,t,l){"use strict";l.d(t,{I:function(){return i},g:function(){return r}});var a=l(3342),n=l(8591),s=l.n(n),c=l(2138);function r(e){let{className:t,color:l,size:n="",...r}=e;return(0,a.jsx)("div",{...r,className:s()("text-black w-full h-full flex items-center justify-center",t),children:(0,a.jsx)(c.uur,{color:l,style:n?{fontSize:n}:{},className:"text-[3.125rem] animate-spin"})})}function i(){return(0,a.jsx)(r,{className:"fixed z-50 left-0 top-0 w-full !h-full bg-black/25"})}},124:function(e,t,l){"use strict";l.d(t,{m:function(){return p}});var a=l(3342),n=l(107),s=l(8996),c=l(1882),r=l(3958),i=l(8591),o=l.n(i),d=l(2577),m=l(3917),u=l(5390),x=l(1608),f=l(8881);function h(e){let{children:t,className:l,tits:s,showQuery:c,isManager:i,...h}=e,{push:p}=(0,n.useRouter)(),N=(0,f.fo)();return(0,r.dD)(),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:o()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0  h-[4.25rem] justify-between",l),...h,children:[(0,a.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>p("/"),children:[(0,a.jsx)(d.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,a.jsx)(m.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,a.jsx)(u.R,{menus:N,children:(0,a.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,a.jsx)(x.otZ,{})})})]})})}function p(e){let{className:t,canBack:l,children:r,link:i,isNew:d,containerClassName:m,...u}=e,{push:x}=(0,n.useRouter)(),f=(0,s.R)();return(0,a.jsxs)("div",{className:"relative flex flex-col flex-1 w-full h-full min-h-fit bg-gray-16",children:[(0,a.jsx)(h,{showQuery:!0,style:{top:"".concat(f,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,a.jsxs)("div",{className:o()("w-full h-full mx-auto px-[60px] flex flex-col flex-1",m,{" max-w-[90rem]":!d}),children:[l&&(0,a.jsxs)("div",{className:"flex items-center my-5 text-sm ".concat((null==i?void 0:i.pathName)?"cursor-default":"cursor-pointer"),onClick:()=>(null==i?void 0:i.pathName)?void 0:x("/carbon/service"),children:[!i&&(0,a.jsx)(c.YFh,{className:"text-lg"}),i&&"{}"!==JSON.stringify(i)?(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("span",{className:"text-[#000000] cursor-pointer font-bold  text-[14px]",onClick:()=>x(null==i?void 0:i.pathName),children:i.homeTitle}),(0,a.jsx)("div",{className:"mx-1 ",children:" / "}),(0,a.jsxs)("span",{className:"cu text-[#999999] font-normal text-[14px]",children:[" ",i.currentTitle]})]}):"返回"]}),(0,a.jsx)("div",{className:o()("flex flex-col ",t),children:r})]})]})}},5109:function(e,t,l){"use strict";l.d(t,{b:function(){return s}});var a=l(1083),n=l.n(a);let s=n()(()=>Promise.all([l.e(6257),l.e(8407),l.e(9253)]).then(l.bind(l,9367)),{loadableGenerated:{webpack:()=>[9367]},ssr:!1})},4220:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return y}});var a=l(3342),n=l(2586);function s(e){return(0,a.jsx)(n.Z,{opts:{locale:"en"},notMerge:!0,lazyUpdate:!0,...e})}var c=l(1201),r=l(7266),i=l(124),o=l(5109),d=l(1844),m=l(5819),u=l(8591),x=l.n(u),f=l(7207),h=l.n(f),p=l(107),N=l(9685),v=l(3155),j=l(2239);function g(e){let[t,l]=(0,N.useState)(!0),{text:n,onChange:s}=e;return(0,N.useMemo)(()=>{s&&s(t)},[t]),(0,a.jsx)("div",{className:"inline-block font-bold",onClick:()=>l(!t),children:(0,a.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,a.jsx)("span",{children:n}),(0,a.jsx)(v.Tgc,{height:"7px",className:x()("ml-1",!t&&"rotate-180")})]})})}function b(e){let[t,l]=(0,N.useState)(!0),{data:n}=e,s=[{label:"碳足迹批次",text:n.loadName},{label:"产品系统",text:n.productSystemName},{label:"目标产品",text:n.targetName},{label:"目标产品数量",text:n.targetAmount},{label:"Impact Method(环境影响评价方法)",text:"IPCC 2021"},{label:"Allocation Method(分摊方法)",text:"Process Defaults"},{label:"Cutoff",text:"None"},{label:"计算结果生成时间",text:n.calculateSuccessTime}];return(0,a.jsxs)("div",{children:[(0,a.jsx)(g,{text:"一般信息",onChange:e=>l(e)}),t&&(0,a.jsx)("div",{className:"mt-4",children:s.map((e,t)=>(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsxs)("label",{className:"",children:[e.label," :"]}),(0,a.jsx)("span",{className:"ml-1 text-gray-6",children:e.text})]},"data-".concat(t)))})]})}function w(e){let[t,l]=(0,N.useState)(!0),{data:n}=e;return(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(g,{text:"碳足迹结果",onChange:e=>l(e)}),t&&(0,a.jsx)("div",{className:"text-[1.75rem] font-semibold mt-4",children:n})]})}var y=function(){let{query:e}=(0,p.useRouter)(),[t,l]=(0,N.useState)(!1),[n,u]=(0,N.useState)(),[x,f]=(0,N.useState)(!0),v=async()=>{let t=await (0,d.fF)(e.id);if(!t)return;let{modelBomInfo:l}=await (0,d.Yp)(t.modelId);u({lca:t,bominfo:l}),f(!1)};(0,N.useEffect)(()=>{v()},[e.id]);let{generalInfo:y,carbonResult:E,graphData:C,pieData:I}=(0,N.useMemo)(()=>{let e=[],t="",l="",a="",s={};if(n){let{lca:u,bominfo:x}=n,f=(0,m.OA)(u.lcaResult);if(f){var c,r,i,o,d;e={productSystemName:null===(c=f.extra)||void 0===c?void 0:c.productSystemName,methodName:null===(r=f.extra)||void 0===r?void 0:r.methodName,targetAmount:null===(i=f.extra)||void 0===i?void 0:i.targetAmount,calculateSuccessTime:u.calculateSuccessTime,loadNumber:u.loadNumber,loadName:u.loadName},t=f.totalImpacts&&(null===(o=f.totalImpacts[0])||void 0===o?void 0:o.impact.referenceUnit)||"";let a=h().round(f.totalResult||(null===(d=f.treeNode)||void 0===d?void 0:d.result)||0,2);l="".concat(a||0," ").concat(t)}let p=(0,m.OA)(x),N=(0,m.OA)(u.lcaTagResult);if(p&&N){a="classDiagram";let l=h().groupBy(N,"flowId"),n=h().groupBy(p,"flowId"),c={bomIndex:1,stageIndex:1},r=e=>(c[e.flowId]||(c[e.flowId]="STAGE"===e.tagType?c.stageIndex++:c.bomIndex++),c[e.flowId]),i=e=>"REFERENCE"===e.tagType?"目标产品":e.tagType+r(e),o=h().sortBy(p,e=>"BOM"===e.tagType?2:"STAGE"===e.tagType?1:0);o.forEach(e=>{e.childFlowIds&&e.childFlowIds.length&&e.childFlowIds.forEach(t=>{let s=h().first(l[t]),c=h().first(n[t]);if(c&&s){let t=i(e),l=i(c);a+="\n ".concat(t," <|-- ").concat(l)}})}),s={padding:20,legend:{top:30,padding:10,right:0,orient:"vertical",align:"right"},tooltip:{trigger:"item",formatter:e=>"<div>\n            ".concat(e.marker,"\n            <span>").concat(e.name," (").concat(e.percent,'%)</span>\n            <div style="margin-left: 18px">').concat(e.value,"</div>\n          </div>")},series:{type:"pie",radius:"60%",data:[],label:{formatter:e=>"".concat(e.name,"\n(").concat(e.percent,"%)")}}},o.forEach(n=>{var c;let r=i(n),o=h().first(l[n.flowId]),d="REFERENCE"===n.tagType?(null==o?void 0:o.result)||0:((null==o?void 0:o.result)||0)-h().sumBy(n.childFlowIds,e=>{var t;return(null===(t=h().first(l[e]))||void 0===t?void 0:t.result)||0}),m=h().round(d,2),u="".concat(r," : ").concat(n.flowName.replaceAll("(","（").replaceAll(")","）"),"\n          ").concat(r," : +PCF(").concat(m," ").concat(t,")");("REFERENCE"!==n.tagType||n.childFlowIds.length>0)&&(a+="\n".concat(u)),"REFERENCE"===n.tagType?(s.title={text:n.flowName,left:"center",top:10},e.targetName=n.flowName):null===(c=s.series.data)||void 0===c||c.push({name:n.flowName,value:m})})}}return{generalInfo:e,carbonResult:l,graphData:a,pieData:s}},[n]),R=async()=>{if(!e.id)return!1;l(!0);let t=await (0,d.LW)(e.id);if(t.headers){let e=t.headers.get("content-disposition");if(e){let a=e.match(/filename=(.+)/);if(a){l(!1);let e=new Blob([t.data]),n=document.createElement("a");n.download=a[1],n.style.display="none",n.href=URL.createObjectURL(e),document.body.appendChild(n),n.click(),URL.revokeObjectURL(n.href),document.body.removeChild(n)}}}},[F,T]=(0,j.Z)(!0);return(0,a.jsx)(i.m,{className:"text-lg text-black",children:x?(0,a.jsx)("div",{className:"h-[100vh] w-full items-center",children:(0,a.jsx)(r.g,{})}):(0,a.jsxs)("div",{className:"mo:break-all",children:[(0,a.jsx)("h3",{className:"my-5 text-2xl font-semibold",children:"碳足迹结果"}),(0,a.jsxs)("div",{className:"p-5 bg-white rounded-2xl",children:[(0,a.jsx)(b,{data:y}),(0,a.jsx)(w,{data:E}),!h().isEmpty(C)&&!h().isEmpty(I)&&(0,a.jsxs)("div",{className:"w-full mt-4",children:[(0,a.jsx)(g,{text:"BOM/STAGE的明细结果",onChange:e=>T(e)}),F&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.b,{className:"w-full h-[360px] bg-[#F1F1F1] mt-4",data:C}),(0,a.jsx)(s,{className:"w-full h-[320px] bg-[#F1F1F1] mt-4",option:I})]})]})]}),(0,a.jsx)("div",{className:"flex justify-center w-full mt-5 mb-10",children:(0,a.jsx)(c.z,{onClick:()=>!t&&R(),className:"mt-5 text-lg bg-green-2 w-[26.875rem] text-white rounded-lg  h-14 flex items-center justify-center hover:bg-green-28",children:t?(0,a.jsx)("div",{children:(0,a.jsx)(r.g,{size:"2rem",color:"#fff"})}):(0,a.jsx)("span",{children:"导出Excel"})})})]})})}}},function(e){e.O(0,[3268,1271,7588,7038,8635,976,6110,8881,9774,2888,179],function(){return e(e.s=6436)}),_N_E=e.O()}]);