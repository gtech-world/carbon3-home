(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8200],{6220:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/model",function(){return l(1186)}])},4956:function(e,t,l){"use strict";l.d(t,{E:function(){return i},K:function(){return r}});var n=l(3342),a=l(8591),s=l.n(a);function i(e){let{value:t,bg:l="#dddddd",color:a="#29953A",className:i}=e;return(0,n.jsx)("div",{className:s()(i,"w-full h-[10px]"),style:{background:l},children:(0,n.jsx)("div",{style:{width:"".concat(t,"%"),transition:"width 200ms ease",background:a},className:"h-full"})})}function r(e){let{index:t,full:l,bg:a="#dddddd",color:i="#29953A",className:r}=e;return(0,n.jsx)("div",{className:s()(r,"w-full h-[10px]"),style:{background:a},children:(0,n.jsx)("div",{style:{marginLeft:l?"0":"".concat(25*t,"%"),width:l?"100%":"25%",background:i},className:"h-full"})})}},8469:function(e,t,l){"use strict";l.d(t,{d:function(){return u}});var n=l(3342),a=l(9455),s=l(9685);function i(){return(0,n.jsx)("tr",{className:" text-black text-center text-lg font-normal ",children:(0,n.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top",children:"无数据"})})}var r=e=>{let{header:t,data:l,empty:a=(0,n.jsx)(i,{}),className:s="min-w-full relative",headerClassName:r="bg-neutral-200 sticky top-0 text-left text-black text-lg font-bold leading-[27px]",headerItemClassName:o="p-3",tbodyClassName:d="bg-white ",rowClassName:c="text-black text-sm font-normal whitespace-nowrap",cellClassName:u="p-3"}=e;return(0,n.jsxs)("table",{className:s,children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{className:r,children:t.map((e,t)=>(0,n.jsx)("th",{scope:"col",className:o,children:e},t))})}),(0,n.jsxs)("tbody",{className:d,children:[l.map((e,t)=>(0,n.jsx)("tr",{className:c,children:e.map((e,t)=>(0,n.jsx)("td",{className:u,children:e},t))},t)),0===l.length&&a]})]})},o=l(5819),d=l(7207),c=l.n(d);function u(e){let{data:t,inputData:l,...i}=e,d=(0,s.useMemo)(()=>{var e;if(!t)return[];let n=l?c().mapKeys("string"==typeof l?(0,o.OA)(l)||[]:l,e=>e.paramName):{},a=(0,o.OA)(t)||[],s=(null===(e=a[0])||void 0===e?void 0:e.parameters)||[];return s.map(e=>{var t;return[e.name,e.context.name,e.value,(null===(t=n[e.name])||void 0===t?void 0:t.paramValue)||""]})},[t,l]);return(0,n.jsx)(a.u_,{title:"实景数据",...i,children:(0,n.jsx)("div",{className:"w-[40rem] px-5 max-h-mc overflow-y-auto",children:(0,n.jsx)(r,{data:d,header:["参数名","过程名称","参考值","输入值"]})})})}},9749:function(e,t,l){"use strict";l.d(t,{H4:function(){return r},Kv:function(){return i},Tz:function(){return d},We:function(){return o}});var n=l(7207),a=l.n(n),s=l(6631);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,s.ZP)("/api/product-system/".concat(e,"/detail"),{refreshInterval:t})}function r(e){return(0,s.ZP)(a().isNil(e)?null:"/api/verifyRecord/".concat(e,"/detail"))}function o(e){return(0,s.ZP)(e?"/api/inventory/all":null)}function d(e){return(0,s.ZP)(e?"/api/verifyRecord/verifiers":null)}},9976:function(e,t,l){"use strict";l.d(t,{b:function(){return s},n:function(){return a}});var n=l(3958);function a(){let{userData:e,inited:t}=(0,n.oR)();return t&&(null==e?void 0:e.role)==="verify"}function s(){let{userData:e,inited:t}=(0,n.oR)();return t&&(null==e?void 0:e.role)!=="verify"}},1186:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return B}});var n=l(3342),a=l(1201),s=l(9455),i=l(7921),r=l(3956),o=l(124),d=l(9685),c=l(3958),u=l(7266),x=l(9749),m=l(9976),f=l(5819),h=l(8591),v=l.n(h),p=l(7207),j=l.n(p),g=l(2239),N=l(8469);function b(e){var t,l,a,i;let{ps:r,...o}=e,[d,c]=(0,g.Z)(!1);return(0,n.jsxs)(s.u_,{title:r.name,...o,children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] px-5 py-[1px] max-h-mc overflow-y-auto",children:[(0,n.jsx)(C,{tit:"UID",value:r.uuid||"-"}),(0,n.jsx)(C,{tit:"版本",value:r.version||"-"}),(0,n.jsx)(C,{tit:"描述",value:r.description||"-"}),(0,n.jsx)(C,{tit:"状态",value:(0,n.jsx)(w,{status:r.state})}),(0,n.jsx)(C,{tit:"变更人",value:(null===(t=r.updateUser)||void 0===t?void 0:t.name)||"-"}),(0,n.jsx)(C,{tit:"产品系统LCA文件",value:(0,n.jsx)(k,{modelId:null===(l=r.model)||void 0===l?void 0:l.id,modelStatus:null===(a=r.model)||void 0===a?void 0:a.state,isRead:!0})}),(0,n.jsx)(C,{tit:"实景参数列表",value:(0,n.jsx)(y,{action:"查看",onClick:()=>c(!0)})}),(0,n.jsx)(P,{organization:r.org})]}),d&&(0,n.jsx)(N.d,{data:null===(i=r.model)||void 0===i?void 0:i.paramDetail,onClose:()=>c(!1)})]})}function w(e){let{status:t}=e;return j().isNil(t)?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-neutral-400",children:"草稿"}):(0,n.jsx)("div",{className:v()("w-min whitespace-nowrap h-6 px-2.5 py-1 bg-opacity-10 rounded justify-start items-center gap-2.5 inline-flex",{"bg-rose-500":1!==t,"bg-green-600":1===t}),children:(0,n.jsx)("div",{className:v()("text-green-600 text-base font-normal leading-none",{"text-rose-500":1!==t,"text-green-600":1===t}),children:1===t?"当前使用":"过去版本"})})}function y(e){let{action:t,onClick:l,to:a}=e;return a?(0,n.jsx)("a",{href:a,className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded text-black text-base font-normal leading-none",children:t}):(0,n.jsx)("div",{className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded justify-start items-center gap-2.5 inline-flex cursor-pointer",onClick:l,children:(0,n.jsx)("div",{className:"text-base font-normal leading-none text-black",children:t})})}function k(e){let{psId:t,disableSelectFile:l=!1,hiddenUpdate:a,modelId:s,isNew:i,isRead:r,modelStatus:o,file:c,onFileChange:u}=e,x=(0,d.useRef)(null),m=()=>1!==o?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-amber-500",children:"等待解析"}):(0,n.jsx)(y,{to:"/model?id=".concat(s),action:"在线查看"}),h=e=>{var t;l||null===(t=x.current)||void 0===t||t.click()};return(0,n.jsxs)("div",{className:"text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5",children:[(0,n.jsx)("input",{ref:x,type:"file",hidden:!0,accept:".zip",onChange:u}),!r&&(0,f.lS)(null==c?void 0:c.name,10,10),r?m():i?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(y,{action:"上传模型",onClick:h})}):(0,n.jsxs)(n.Fragment,{children:[!c&&m(),1===o&&!a&&(0,n.jsx)(y,{action:"更新模型",onClick:h})]})]})}function C(e){let t="string"==typeof e.value||"number"==typeof e.value;return(0,n.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,n.jsxs)("div",{className:"text-base font-normal leading-normal text-black",children:[e.tit,": "]}),t?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-neutral-400",children:e.value}):e.value]})}function S(e){let{defaultValue:t,...l}=e;return(0,n.jsx)("input",{type:"text",className:"w-full px-5 py-[15px] bg-gray-28 rounded-lg border border-neutral-200 justify-start items-start gap-2.5 inline-flex text-black text-base font-normal leading-none",...l})}function P(e){let{userData:t}=(0,c.oR)(),l=e.organization||(null==t?void 0:t.organization);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C,{tit:"组织名称",value:(null==l?void 0:l.name)||"-"}),(0,n.jsx)(C,{tit:"组织编号",value:(null==l?void 0:l.serialNumber)||"-"})]})}function F(e){var t,l,a;let{psId:i,onSuccess:r,...o}=e,{data:c,isLoading:f,error:h}=(0,x.Kv)(i,6e4),[v,p]=(0,d.useState)(""),w=(0,d.useRef)(!0);(0,d.useEffect)(()=>{c&&w.current&&(p(c.description||""),w.current=!1)},[c]),(0,d.useEffect)(()=>{h&&o.onClose&&o.onClose()},[h]);let[S,F]=(0,d.useState)(!1),[M,_]=(0,d.useState)(null),[I,z]=(0,d.useState)(0),[O,L]=(0,d.useState)(""),T=(0,d.useCallback)(e=>{var t;_(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},[]),[A,E]=(0,g.Z)(!1),[R,D]=(0,d.useState)();(0,d.useMemo)(()=>j().orderBy(((null==c?void 0:c.historyList)||[]).map(e=>({...e,text:"版本".concat(e.version)})),e=>j().toNumber(e.version),"desc"),[c]);let B=(0,m.n)();return(0,n.jsxs)(s.u_,{...o,children:[f&&!c&&(0,n.jsx)(u.g,{className:"min-h-[100px]"}),c&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex flex-col gap-5  w-full min-w-[40rem] px-5 py-[1px] max-h-mc overflow-y-auto",children:[(0,n.jsx)(C,{tit:"产品系统ID",value:c.uuid||"-"}),(0,n.jsx)(C,{tit:"描述",value:v}),(0,n.jsx)(C,{tit:"操作人",value:v}),(0,n.jsx)(C,{tit:"BOM信息",value:(0,n.jsx)(y,{action:"查看",onClick:()=>L("1")})}),(0,n.jsx)(C,{tit:"实景参数列表",value:(0,n.jsx)(y,{action:"查看",onClick:()=>E(!0)})}),(0,n.jsx)(C,{tit:"产品系统LCA文件",value:(0,n.jsx)(k,{modelId:null===(t=c.model)||void 0===t?void 0:t.id,disableSelectFile:S,modelStatus:null===(l=c.model)||void 0===l?void 0:l.state,hiddenUpdate:B,file:M,onFileChange:T})}),(0,n.jsx)(P,{organization:null==c?void 0:c.org})]})}),A&&(0,n.jsx)(N.d,{data:null==c?void 0:null===(a=c.model)||void 0===a?void 0:a.paramDetail,onClose:()=>E(!1)}),R&&(0,n.jsx)(b,{onClose:()=>D(void 0),ps:R})]})}var M=l(5631),_=l(1844),I=l(4956),z=l(9252);let O={startOnLoad:!0,theme:"forest",logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,flowchart:{htmlLabels:!0},themeVariables:{primaryColor:"#00ff00",primaryTextColor:"#fff",primaryBorderColor:"#7C0000",lineColor:"black",secondaryColor:"#006100",tertiaryColor:"#fff"},sequence:{diagramMarginX:50,diagramMarginY:10,actorMargin:50,width:120,height:30,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,mirrorActors:!0,bottomMarginAdj:1,useMaxWidth:!0,rightAngles:!1,showSequenceNumbers:!1},gantt:{titleTopMargin:25,barHeight:16,barGap:4,topPadding:50,leftPadding:75,gridLineStartPadding:35,fontSize:11,numberSectionStyles:4,axisFormat:"%Y-%m-%d"}};function L(e){let{className:t,data:l=""}=e;return z.L.initialize(O),(0,d.useEffect)(()=>{z.L.contentLoaded()},[l]),(0,n.jsx)("pre",{className:v()("mermaid",t),children:l})}let T=[{name:"目标产品",valueObj:["PN:aaa","PN:bbb","PN:ccc","PN:ddd"]},{name:"子系统1",valueObj:["PN:eee","PN:fff","PN:ggg","PN:hhh"]},{name:"子系统2",valueObj:["PN:jjj","PN:kkk","PN:lll","PN:mmm"]},{name:"子系统3",valueObj:["PN:nnn","PN:ooo","PN:ppp","PN:qqq"]},{name:"子系统4",valueObj:["PN:rrr","PN:sss","PN:ttt","PN:uuu"]},{name:"子系统5",valueObj:["PN:vvv","PN:www","PN:xxx","PN:yyy"]}],A=()=>{let e="graph TD\n";for(let t of T)t.name&&t.name!==T[0].name&&(e+="".concat(t.name," --> ").concat(T[0].name,"\n")),e+="style ".concat(t.name," color:black,fill:#F1F1F1,stroke:black\n");return e};var E=e=>{let{onClose:t,...l}=e;return(0,n.jsx)(s.u_,{...l,title:"查看BOM信息",onClose:t,children:(0,n.jsx)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] overflow-hidden",children:(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full flex-1 max-h-mc px-5 py-[1px] overflow-y-auto",children:[(0,n.jsx)(C,{tit:"BOM结构",value:(0,n.jsx)(L,{data:A(),className:"flex justify-center  bg-[#F1F1F1]"})}),(0,n.jsx)(C,{tit:"Part Number信息",value:null}),T.map((e,t)=>(0,n.jsxs)("div",{className:"flex flex-row gap-10",children:[(0,n.jsx)("div",{className:"w-20 ",children:e.name}),(0,n.jsx)("div",{className:"flex flex-row ",children:e.valueObj.map((e,t)=>(0,n.jsx)("div",{className:"w-20 ",children:(0,n.jsx)("div",{className:"h-6 mx-[5px] bg-[#F1F1F1] flex justify-center  rounded",children:e})},"value_".concat(t)))})]},"info_".concat(t)))]})})})};function R(e){let{onSuccess:t,onClose:l,...i}=e,[r,o]=(0,d.useState)(""),[c,u]=(0,d.useState)(""),[x,m]=(0,d.useState)(!1),[f,h]=(0,d.useState)(0),[v,p]=(0,d.useState)(null),[j,g]=(0,d.useState)("upload"),N=!v,b=(0,d.useRef)(),[w,P]=(0,d.useState)(""),F=(0,d.useCallback)(e=>{var t;p(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},[]),z=(0,d.useRef)(),O=(0,d.useCallback)(()=>{var e;null===(e=z.current)||void 0===e||e.abort(),l&&l()},[l]),L=(0,M.R)(()=>{if(N)return;let e=new FormData;e.append("file",v),z.current=new AbortController,"upload"===j?(m(!0),(0,_.av)(e,{signal:z.current.signal,onUploadProgress:e=>{h(Math.min(Math.round(100*(e.rate||0)),100))}}).then(e=>{b.current=e,g("add")}).catch(()=>{}).finally(()=>{m(!1),h(0)})):(0,_.bc)({name:r,description:c,modelId:b.current}).then(()=>{t&&t(),O()}).catch(e=>{console.log("err",e)})});return console.log("progress",f),(0,n.jsxs)(d.Fragment,{children:[(0,n.jsx)(s.u_,{...i,title:"新建产品系统",onClose:O,children:(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] overflow-hidden",children:[(0,n.jsx)("div",{className:"flex flex-col gap-5 w-full flex-1 max-h-mc px-5 py-[1px] overflow-y-auto",children:x?(0,n.jsx)(I.E,{value:f,className:"my-5 overflow-hidden rounded-lg"}):"upload"===j?(0,n.jsx)(C,{tit:"产品系统LCA文件",value:(0,n.jsx)(k,{isNew:!0,disableSelectFile:x,file:v,onFileChange:F})}):(0,n.jsxs)(d.Fragment,{children:[(0,n.jsx)(C,{tit:"产品系统名称",value:123}),(0,n.jsx)(C,{tit:"BOM信息",value:(0,n.jsx)(y,{action:"查看",onClick:()=>P("1")})}),(0,n.jsx)(C,{tit:"实景参数列表",value:(0,n.jsx)(y,{action:"查看",onClick:()=>null})}),(0,n.jsx)(C,{tit:"产品系统LCA文件",value:(0,n.jsx)(k,{file:v,onFileChange:F})}),(0,n.jsx)(C,{tit:"描述",value:(0,n.jsx)(S,{maxLength:100,value:c,onChange:e=>u(e.target.value)})})]})}),(0,n.jsx)("div",{className:"flex flex-shrink-0 w-full gap-5 px-5",children:!x&&(0,n.jsxs)(d.Fragment,{children:[(0,n.jsx)(a.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:O,children:"取消"}),(0,n.jsx)(a.u,{className:"flex-1",onClick:L,disabled:N,children:"upload"===j?"上传":"确定"})]})})]})}),w&&(0,n.jsx)(E,{onClose:()=>P("")})]})}var D=l(8005),B=function(){var e,t,l,x;let[h,p]=(0,d.useState)(null),[j,g]=(0,d.useState)(null),[N,b]=(0,d.useState)(),[w,y]=(0,d.useState)(null),[k,C]=(0,d.useState)(!1),[S,P]=(0,d.useState)(1),[M,I]=(0,d.useState)(""),[z,O]=(0,d.useState)(null),[L,T]=(0,d.useState)(""),[A,E]=(0,d.useState)(null),[B,H]=(0,d.useState)(null),[Z,q]=(0,d.useState)(""),[K,U]=(0,d.useState)(-1),[W,X]=(0,d.useState)(-1),[V,Y]=(0,d.useState)(0),[G,J]=(0,d.useState)(0),[Q,$]=(0,d.useState)({}),[ee,et]=(0,d.useState)(0),[el,en]=(0,d.useState)([]),[ea,es]=(0,d.useState)([]);(0,d.useRef)(null);let{user:ei}=(0,c.aF)(),[er,eo]=(0,d.useState)(!1),ed=async()=>{let e=await (0,_.Ps)();en(e?function e(t,l){return t.filter(e=>void 0===l?0===e.parentId:e.parentId===l).map(l=>(l.children=e(t,l.id),l))}(null==e?void 0:e.records,0):[])},ec=(0,d.useCallback)(async()=>{try{eo(!0);let e=await (0,_.vz)(S);$(e),eo(!1)}catch(e){console.log("eee",e)}},[S]);(0,d.useEffect)(()=>{ec()},[ec]),(0,d.useEffect)(()=>{ed()},[]);let eu=(0,d.useMemo)(()=>[{title:"产品系统",dataIndex:"name",width:"200px",render:e=>(0,n.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-place":"top-start","data-tooltip-content":(0,D.iT)(e,20),className:"w-[200px] font-normal  text-lg leading-[27px] truncate inline-block",children:e})},{title:"产品系统ID",dataIndex:"uuid",width:"20rem",render:e=>(0,n.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-content":e,className:"text-lg w-[13rem] truncate inline-block font-normal leading-[27px]",children:(0,f.lS)(e,8,8)})},{title:"变更人",dataIndex:"name",width:"12.5rem",render:(e,t)=>(0,n.jsx)("span",{className:"w-[13rem] text-lg truncate inline-block font-normal leading-[27px]",children:t.updateUser.name})},{title:"变更时间",dataIndex:"updateTime",width:"12.5rem",render:e=>(0,n.jsx)("div",{className:"text-lg  w-[13rem]  font-normal leading-[27px] break-keep whitespace-nowrap",children:e})},{title:"版本",dataIndex:"version",width:"9.375rem",render:e=>(0,n.jsx)("span",{className:"text-lg  font-normal leading-[27px]",children:e})},{title:"",width:"20rem",render:(e,t)=>(0,n.jsx)("div",{className:"flex justify-between flex-1 ml-10 text-green-2 break-keep",children:(0,n.jsx)("div",{className:"flex items-center font-normal justify-center cursor-pointer text-lg leading-[27px]",onClick:()=>b(t),children:"查看"})})}],[]),ex=(0,d.useMemo)(()=>[{title:"实景输入项",dataIndex:"context",width:"20%"},{title:"过程名称",dataIndex:"parameter",width:"30%"},{title:"参考值",dataIndex:"amount",width:"20%"},{title:"不确定性",dataIndex:"uncertainty",emptyText:"-",width:"30%"}],[]),em=async e=>{let t="更改状态";y({title:t,loading:!0}),await (0,_.pF)(h.id,e),Y(V+1),y({title:t,loading:!1,resultText:"操作成功"}),p(null)};(0,d.useMemo)(()=>!!B&&!!Z&&A>-1,[B,Z,A]),(0,d.useMemo)(()=>!!M&&!!z,[M,z]),(0,d.useCallback)(e=>{I(e.target.value)},[]);let ef=(0,m.b)(),eh=()=>{P(1),1===S&&ec()};return(0,n.jsxs)(o.m,{isNew:!0,canBack:!0,link:{pathName:"/tools/tools",homeTitle:"产品碳足迹工具集",currentTitle:"产品碳足迹模型管理工具"},className:"flex flex-col justify-between flex-1 pb-12 text-black ",children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("h3",{className:"flex items-center justify-between text-2xl font-semibold",children:[(0,n.jsx)("span",{children:"我的产品系统"}),ef&&(0,n.jsx)(a.z,{onClick:()=>C(!0),className:v()("w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11 hover:bg-green-28"),children:"新建产品系统"})]}),(0,n.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,n.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,n.jsx)("div",{className:"min-h-[20.25rem] text-base leading-[1.625rem] min-w-[68.25rem]",children:(0,n.jsx)(r.i,{loading:er,columns:eu,columnsHeight:"h-[3.125rem]",mouseHoverKey:"id",data:(null==Q?void 0:Q.records)||[],columnsClassName:" cursor-pointer ",headerClassName:{background:"#fff",fontWeight:"700",fontSize:"18px",lineHeight:"27px"}})})})})]}),(0,n.jsx)(i.t,{onChange:e=>{P(e),(0,D.k3)()},className:"my-8",total:(null==Q?void 0:Q.total)||0,pgSize:10,pgNum:S}),null!==h&&(0,n.jsx)(s.u_,{title:"更改状态",onClose:()=>p(null),children:(0,n.jsx)("div",{className:"flex",children:(null==w?void 0:w.loading)?(0,n.jsx)(u.g,{}):(0,n.jsxs)("div",{className:"flex flex-1",children:[h.state>-2&&(0,n.jsx)(a.z,{onClick:()=>em(1===h.state?0:1),className:"flex-1 w-full text-lg text-white rounded-lg bg-green-2 h-11",children:1===h.state?"弃用":"激活"}),-1===h.state&&(0,n.jsx)(a.z,{onClick:()=>em(-2),className:"flex-1 w-full ml-5 text-lg border-2 rounded-lg border-green-2 bg-green-2/10 text-green-2 hover:bg-green-2/20 h-11",children:"删除"})]})})}),!!j&&(0,n.jsx)(s.u_,{title:j.modelName+"模型中的实景输入项",onClose:()=>g(null),children:(0,n.jsxs)("div",{className:"flex w-[60rem] min-h-[16rem] flex-col pb-2",children:[(0,n.jsx)("ul",{className:"flex mb-1",children:ex.map((e,t)=>(0,n.jsx)("li",{className:"px-3 text-lg font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,n.jsx)("div",{className:"max-h-[15rem] min-h-[5rem] overflow-y-auto",children:(0,n.jsx)(r.i,{size:"big",hiddenHeader:!0,columns:ex,data:j.paramDetail})})]})}),w&&(0,n.jsx)(s.u_,{title:(null==w?void 0:w.title)||"操作",onClose:()=>y(null),children:(0,n.jsx)("div",{className:"pb-2 text-center",children:w.loading?(0,n.jsx)(u.g,{}):(0,n.jsx)("span",{children:w.resultText})})}),k&&(0,n.jsx)(R,{onClose:()=>C(!1),onSuccess:()=>eh()}),N&&(0,n.jsx)(F,{psId:N.id,title:N.name,onClose:()=>b(void 0),onSuccess:()=>eh()}),K>-1&&(0,n.jsx)(s.u_,{title:"查看产品",onClose:()=>U(-1),children:(0,n.jsxs)("ul",{className:"text-lg max-w-[32rem]",children:[(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"产品名称 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:null===(e=ea[K])||void 0===e?void 0:e.text})]}),(0,n.jsxs)("li",{className:"my-5",children:[(0,n.jsx)("label",{className:"inline-block w-[5.625rem]",children:"产品类型 :"}),(0,n.jsx)("span",{className:"text-gray-6",children:null===(t=ea[K])||void 0===t?void 0:t.type})]}),(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"描述 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:(null===(l=ea[K])||void 0===l?void 0:l.desc)?null===(x=ea[K])||void 0===x?void 0:x.desc:"-"})]})]})})]})}}},function(e){e.O(0,[3268,1271,7588,7038,8635,6257,701,7823,8881,8149,9774,2888,179],function(){return e(e.s=6220)}),_N_E=e.O()}]);