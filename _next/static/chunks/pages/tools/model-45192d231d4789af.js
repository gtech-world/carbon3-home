(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8200],{6220:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/model",function(){return l(1186)}])},4956:function(e,t,l){"use strict";l.d(t,{E:function(){return i},K:function(){return r}});var n=l(3342),a=l(8591),s=l.n(a);function i(e){let{value:t,bg:l="#dddddd",color:a="#29953A",className:i}=e;return(0,n.jsx)("div",{className:s()(i,"w-full h-[10px]"),style:{background:l},children:(0,n.jsx)("div",{style:{width:"".concat(t,"%"),transition:"width 200ms ease",background:a},className:"h-full"})})}function r(e){let{index:t,full:l,bg:a="#dddddd",color:i="#29953A",className:r}=e;return(0,n.jsx)("div",{className:s()(r,"w-full h-[10px]"),style:{background:a},children:(0,n.jsx)("div",{style:{marginLeft:l?"0":"".concat(25*t,"%"),width:l?"100%":"25%",background:i},className:"h-full"})})}},8469:function(e,t,l){"use strict";l.d(t,{d:function(){return u}});var n=l(3342),a=l(9455),s=l(9685);function i(){return(0,n.jsx)("tr",{className:" text-black text-center text-lg font-normal ",children:(0,n.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top",children:"无数据"})})}var r=e=>{let{header:t,data:l,empty:a=(0,n.jsx)(i,{}),className:s="min-w-full relative",headerClassName:r="bg-neutral-200 sticky top-0 text-left text-black text-lg font-bold leading-[27px]",headerItemClassName:o="p-3",tbodyClassName:d="bg-white ",rowClassName:c="text-black text-sm font-normal whitespace-nowrap",cellClassName:u="p-3"}=e;return(0,n.jsxs)("table",{className:s,children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{className:r,children:t.map((e,t)=>(0,n.jsx)("th",{scope:"col",className:o,children:e},t))})}),(0,n.jsxs)("tbody",{className:d,children:[l.map((e,t)=>(0,n.jsx)("tr",{className:c,children:e.map((e,t)=>(0,n.jsx)("td",{className:u,children:e},t))},t)),0===l.length&&a]})]})},o=l(5819),d=l(7207),c=l.n(d);function u(e){let{data:t,inputData:l,header:i=["参数名","过程名称","参考值","输入值"],...d}=e,u=(0,s.useMemo)(()=>{var e;if(!t)return[];let n=l?c().mapKeys("string"==typeof l?(0,o.OA)(l)||[]:l,e=>e.paramName):{},a=(0,o.OA)(t)||[],s=(null===(e=a[0])||void 0===e?void 0:e.parameters)||[];return s.map(e=>{var t;return[e.name,e.context.name,e.value,(null===(t=n[e.name])||void 0===t?void 0:t.paramValue)||""]})},[t,l]);return(0,n.jsx)(a.u_,{title:"实景数据",...d,children:(0,n.jsx)("div",{className:"w-[40rem] px-5 max-h-mc overflow-y-auto",children:(0,n.jsx)(r,{data:u,header:i})})})}},9749:function(e,t,l){"use strict";l.d(t,{H4:function(){return r},Kv:function(){return i},Tz:function(){return d},We:function(){return o}});var n=l(7207),a=l.n(n),s=l(6631);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,s.ZP)("/api/product-system/".concat(e,"/detail"),{refreshInterval:t})}function r(e){return(0,s.ZP)(a().isNil(e)?null:"/api/verifyRecord/".concat(e,"/detail"))}function o(e){return(0,s.ZP)(e?"/api/inventory/all":null)}function d(e){return(0,s.ZP)(e?"/api/verifyRecord/verifiers":null)}},9976:function(e,t,l){"use strict";l.d(t,{b:function(){return s},n:function(){return a}});var n=l(3958);function a(){let{userData:e,inited:t}=(0,n.oR)();return t&&(null==e?void 0:e.role)==="verify"}function s(){let{userData:e,inited:t}=(0,n.oR)();return t&&(null==e?void 0:e.role)!=="verify"}},1186:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return D}});var n=l(3342),a=l(1201),s=l(9455),i=l(7921),r=l(3956),o=l(124),d=l(9685),c=l(3958),u=l(7266),x=l(9749),m=l(9976),f=l(1844),h=l(5819),p=l(8591),v=l.n(p),g=l(7207),j=l.n(g),b=l(2239),w=l(8469),N=l(9252);let y={startOnLoad:!0,theme:"forest",logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,flowchart:{htmlLabels:!0},themeVariables:{primaryColor:"#00ff00",primaryTextColor:"#fff",primaryBorderColor:"#7C0000",lineColor:"black",secondaryColor:"#006100",tertiaryColor:"#fff"},sequence:{diagramMarginX:50,diagramMarginY:10,actorMargin:50,width:420,height:400,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,mirrorActors:!0,bottomMarginAdj:1,useMaxWidth:!0,rightAngles:!1,showSequenceNumbers:!1},gantt:{titleTopMargin:25,barHeight:16,barGap:4,topPadding:50,leftPadding:75,gridLineStartPadding:35,fontSize:11,numberSectionStyles:4,axisFormat:"%Y-%m-%d"}};function k(e){let{className:t,data:l="",ref:a}=e;return N.L.initialize(y),(0,d.useEffect)(()=>{N.L.contentLoaded()},[l]),(0,n.jsx)("pre",{ref:a,className:v()("mermaid",t),children:l})}var C=e=>{let{onClose:t,...l}=e,{modelBomInfo:a=""}=l,i=a&&JSON.parse(a),r=[],o="graph TD\n";(i||[]).forEach((e,t)=>{let{flowName:l,childFlowIds:n}=e;o+="".concat(t+1,'["').concat(l,'"]\n'),n&&n.length>0&&n.forEach(e=>{let l=i.findIndex(t=>t.flowId===e);-1!==l&&(o+="".concat(l+1," --> ").concat(t+1,"\n"),r.push("style ".concat(l+1," color:black,fill:#F1F1F1,stroke:black\n")),r.push("style ".concat(t+1," color:black,fill:#F1F1F1,stroke:black\n")))})});let d=[...new Set(r||[])].toString().replace(/,style/g," style"),c="".concat(o,"\n").concat(d);return(0,n.jsx)(s.u_,{...l,title:"查看BOM信息",onClose:t,children:(0,n.jsx)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] overflow-hidden",children:(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full flex-1 max-h-mc px-5 py-[1px] overflow-y-auto",children:[(0,n.jsx)(M,{tit:"BOM结构",value:(0,n.jsx)(k,{data:c,className:"flex justify-center  w-[800px] h-[200px] bg-[#F1F1F1]"})}),(0,n.jsx)(M,{tit:"Part Number信息",value:null}),(i||[]).map((e,t)=>(0,n.jsxs)("div",{className:"flex flex-row gap-10",children:[(0,n.jsx)("div",{className:"w-[200px] text-base text-[#666666] ",children:e.flowName}),(0,n.jsx)("div",{className:"flex flex-row ",children:((null==e?void 0:e.partNumbers)||[]).map((e,t)=>(0,n.jsx)("div",{className:"flex items-center w-[130px] mx-[5px] ",children:(0,n.jsxs)("div",{className:"h-6 w-full  font-normal  bg-[#F1F1F1] flex justify-center  rounded",children:["PN：",e]})},"value_".concat(t)))})]},"info_".concat(t)))]})})})};function S(e){var t,l,a,i;let{ps:r,...o}=e,[d,c]=(0,b.Z)(!1);return(0,n.jsxs)(s.u_,{title:r.name,...o,children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] px-5 py-[1px] max-h-mc overflow-y-auto",children:[(0,n.jsx)(M,{tit:"UID",value:r.uuid||"-"}),(0,n.jsx)(M,{tit:"版本",value:r.version||"-"}),(0,n.jsx)(M,{tit:"描述",value:r.description||"-"}),(0,n.jsx)(M,{tit:"状态",value:(0,n.jsx)(I,{status:r.state})}),(0,n.jsx)(M,{tit:"变更人",value:(null===(t=r.updateUser)||void 0===t?void 0:t.name)||"-"}),(0,n.jsx)(M,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{modelId:null===(l=r.model)||void 0===l?void 0:l.id,modelStatus:null===(a=r.model)||void 0===a?void 0:a.state,isRead:!0})}),(0,n.jsx)(M,{tit:"实景参数列表",value:(0,n.jsx)(F,{action:"查看",onClick:()=>c(!0)})}),(0,n.jsx)(T,{organization:r.org})]}),d&&(0,n.jsx)(w.d,{data:null===(i=r.model)||void 0===i?void 0:i.paramDetail,onClose:()=>c(!1)})]})}function I(e){let{status:t}=e;return j().isNil(t)?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-neutral-400",children:"草稿"}):(0,n.jsx)("div",{className:v()("w-min whitespace-nowrap h-6 px-2.5 py-1 bg-opacity-10 rounded justify-start items-center gap-2.5 inline-flex",{"bg-rose-500":1!==t,"bg-green-600":1===t}),children:(0,n.jsx)("div",{className:v()("text-green-600 text-base font-normal leading-none",{"text-rose-500":1!==t,"text-green-600":1===t}),children:1===t?"当前使用":"过去版本"})})}function F(e){let{action:t,onClick:l,to:a}=e;return a?(0,n.jsx)("a",{href:a,className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded text-black text-base font-normal leading-none",children:t}):(0,n.jsx)("div",{className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded justify-start items-center gap-2.5 inline-flex cursor-pointer",onClick:l,children:(0,n.jsx)("div",{className:"text-base font-normal leading-none text-black",children:t})})}function _(e){let{psId:t,disableSelectFile:l=!1,openNewTab:a=!1,hiddenUpdate:s,modelId:i,isNew:r,isRead:o,modelStatus:c,file:u,onFileChange:x}=e,m=(0,d.useRef)(null),f=()=>1!==c?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-amber-500",children:"等待解析"}):(0,n.jsx)(F,{onClick:()=>a?window.open("/model?id=".concat(i),"_blank"):void 0,to:a?void 0:"/model?id=".concat(i),action:"在线查看"});return(0,n.jsxs)("div",{className:"text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5",children:[(0,n.jsx)("input",{ref:m,type:"file",hidden:!0,accept:".zip",onChange:x}),!o&&(0,h.lS)(null==u?void 0:u.name,10,10),o?f():r?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(F,{action:"上传模型",onClick:e=>{var t;l||null===(t=m.current)||void 0===t||t.click()}})}):(0,n.jsx)(n.Fragment,{children:!u&&f()})]})}function M(e){let t="string"==typeof e.value||"number"==typeof e.value;return(0,n.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,n.jsxs)("div",{className:"text-base font-normal leading-normal text-black",children:[e.tit,": "]}),t?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-neutral-400",children:e.value}):e.value]})}function z(e){let{defaultValue:t,...l}=e;return(0,n.jsx)("input",{type:"text",className:"w-full px-5 py-[15px] bg-gray-28 rounded-lg border border-neutral-200 justify-start items-start gap-2.5 inline-flex text-black text-base font-normal leading-none",...l})}function T(e){let{userData:t}=(0,c.oR)(),l=e.organization||(null==t?void 0:t.organization);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(M,{tit:"组织名称",value:(null==l?void 0:l.name)||"-"}),(0,n.jsx)(M,{tit:"组织编号",value:(null==l?void 0:l.serialNumber)||"-"})]})}function E(e){var t,l,a,i;let{psId:r,onSuccess:o,...c}=e,{data:h,isLoading:p,error:v}=(0,x.Kv)(r,6e4),[g,j]=(0,d.useState)(""),N=(0,d.useRef)(!0);(0,d.useEffect)(()=>{h&&N.current&&(j(h.description||""),N.current=!1)},[h]),(0,d.useEffect)(()=>{v&&c.onClose&&c.onClose()},[v]);let[y,k]=(0,d.useState)(!1),[I,z]=(0,d.useState)(null),[E,L]=(0,d.useState)(!1),[A,P]=(0,d.useState)(),R=(0,d.useCallback)(e=>{var t;z(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},[]),[D,O]=(0,b.Z)(!1),[B,H]=(0,d.useState)(),U=(0,m.n)(),Z=()=>{(0,f.Gp)(r).then(e=>{P(e)})};return(0,d.useEffect)(()=>{Z()},[]),(0,n.jsxs)(s.u_,{...c,children:[p&&!h&&(0,n.jsx)(u.g,{className:"min-h-[100px]"}),h&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex flex-col gap-5  w-full min-w-[40rem] px-5 py-[1px] max-h-mc overflow-y-auto",children:[(0,n.jsx)(M,{tit:"产品系统ID",value:h.uuid||"-"}),(0,n.jsx)(M,{tit:"描述",value:(0,n.jsx)("span",{className:" w-[40rem] text-[16px] font-normal text-[#999999]",children:g})}),(0,n.jsx)(M,{tit:"操作人",value:(null==A?void 0:A.updateUser.name)||"-"}),(0,n.jsx)(M,{tit:"BOM信息",value:(0,n.jsx)(F,{action:"查看",onClick:()=>L(!0)})}),(0,n.jsx)(M,{tit:"实景参数列表",value:(0,n.jsx)(F,{action:"查看",onClick:()=>O(!0)})}),(0,n.jsx)(M,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{modelId:null===(t=h.model)||void 0===t?void 0:t.id,disableSelectFile:y,modelStatus:null===(l=h.model)||void 0===l?void 0:l.state,hiddenUpdate:U,file:I,onFileChange:R})}),(0,n.jsx)(T,{organization:null==h?void 0:h.org})]})}),D&&(0,n.jsx)(w.d,{header:["参数名","过程名称","参考值"],data:null==h?void 0:null===(a=h.model)||void 0===a?void 0:a.paramDetail,onClose:()=>O(!1)}),B&&(0,n.jsx)(S,{onClose:()=>H(void 0),ps:B}),E&&(0,n.jsx)(C,{modelBomInfo:null==A?void 0:null===(i=A.model)||void 0===i?void 0:i.modelBomInfo,onClose:()=>L(!1)})]})}var L=l(5631),A=l(4956);function P(e){let t;let{onSuccess:l,onClose:i,...r}=e,[o,c]=(0,d.useState)(""),[u,x]=(0,d.useState)(!1),[m,h]=(0,d.useState)(0),[p,v]=(0,d.useState)(null),[g,j]=(0,d.useState)("upload"),b=!p,N=(0,d.useRef)(),[y,k]=(0,d.useState)({id:0,modelBomInfo:"",paramDetail:"",modelName:""}),[S,I]=(0,d.useState)(!1),[T,E]=(0,d.useState)(!1),P=(0,d.useCallback)(e=>{var t;v(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},[]),R=(0,d.useRef)(),D=(0,d.useCallback)(()=>{var e;null===(e=R.current)||void 0===e||e.abort(),i&&i()},[i]),O=e=>{(0,f.Yp)(e).then(l=>{let{state:n,modelBomInfo:a}=l;if(1===n&&a){k(l),j("add"),x(!1),h(0),clearInterval(t);return}t=setInterval(()=>{O(e)},5e3)}).catch(e=>console.log(e)).finally(()=>{})},B=()=>{let e=new FormData;e.append("file",p),R.current=new AbortController,(0,f.av)(e,{signal:R.current.signal,onUploadProgress:e=>{h(Math.min(Math.round(100*(e.rate||0)),100))}}).then(e=>{N.current=e,O(e)}).catch(()=>{})},H=(0,L.R)(()=>{b||("upload"===g?(x(!0),B()):(0,f.bc)({name:null==y?void 0:y.modelName,description:o,modelId:N.current}).then(()=>{l&&l(),D()}).catch(e=>{console.log("err",e)}))});return(0,n.jsxs)(d.Fragment,{children:[(0,n.jsx)(s.u_,{...r,title:"新建产品系统",onClose:()=>{D(),clearInterval(t)},children:(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] overflow-hidden",children:[(0,n.jsx)("div",{className:"flex flex-col gap-5 w-full flex-1 max-h-mc px-5 py-[1px] overflow-y-auto",children:u?(0,n.jsx)(A.E,{value:m,className:"my-5 overflow-hidden rounded-lg"}):"upload"===g?(0,n.jsx)(M,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{isNew:!0,disableSelectFile:u,file:p,onFileChange:P})}):(0,n.jsxs)(d.Fragment,{children:[(0,n.jsx)(M,{tit:"产品系统名称",value:null==y?void 0:y.modelName}),(0,n.jsx)(M,{tit:"BOM信息",value:(0,n.jsx)(F,{action:"查看",onClick:()=>I(!0)})}),(0,n.jsx)(M,{tit:"实景参数列表",value:(0,n.jsx)(F,{action:"查看",onClick:()=>E(!0)})}),(0,n.jsx)(M,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{modelStatus:u?0:1,modelId:y.id,openNewTab:!0,onFileChange:P})}),(0,n.jsx)(M,{tit:"描述",value:(0,n.jsx)(z,{maxLength:100,value:o,onChange:e=>c(e.target.value)})})]})}),(0,n.jsx)("div",{className:"flex flex-shrink-0 w-full gap-5 px-5",children:!u&&(0,n.jsxs)(d.Fragment,{children:[(0,n.jsx)(a.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:D,children:"取消"}),(0,n.jsx)(a.u,{className:"flex-1",onClick:H,disabled:b,children:"upload"===g?"上传":"确定"})]})})]})}),T&&(0,n.jsx)(w.d,{data:null==y?void 0:y.paramDetail,onClose:()=>E(!1)}),S&&(0,n.jsx)(C,{...y,onClose:()=>I(!1)})]})}var R=l(8005),D=function(){var e,t,l,x;let[p,g]=(0,d.useState)(null),[j,b]=(0,d.useState)(null),[w,N]=(0,d.useState)(),[y,k]=(0,d.useState)(null),[C,S]=(0,d.useState)(!1),[I,F]=(0,d.useState)(1),[_,M]=(0,d.useState)(""),[z,T]=(0,d.useState)(null),[L,A]=(0,d.useState)(""),[D,O]=(0,d.useState)(null),[B,H]=(0,d.useState)(null),[U,Z]=(0,d.useState)(""),[K,W]=(0,d.useState)(-1),[X,Y]=(0,d.useState)(-1),[q,G]=(0,d.useState)(0),[V,J]=(0,d.useState)(0),[Q,$]=(0,d.useState)({}),[ee,et]=(0,d.useState)(0),[el,en]=(0,d.useState)([]),[ea,es]=(0,d.useState)([]);(0,d.useRef)(null);let{user:ei}=(0,c.aF)(),[er,eo]=(0,d.useState)(!0),ed=async()=>{let e=await (0,f.Ps)();en(e?function e(t,l){return t.filter(e=>void 0===l?0===e.parentId:e.parentId===l).map(l=>(l.children=e(t,l.id),l))}(null==e?void 0:e.records,0):[])},ec=(0,d.useCallback)(async()=>{try{let e=await (0,f.vz)(I);$(e),eo(!1)}catch(e){console.log("eee",e)}},[I]);(0,d.useEffect)(()=>{ec();let e=setInterval(()=>{ec()},1e4);return()=>{clearInterval(e)}},[ec]),(0,d.useEffect)(()=>{ed()},[]);let eu=(0,d.useMemo)(()=>[{title:"产品系统",dataIndex:"name",width:"200px",render:e=>(0,n.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-place":"top-start","data-tooltip-content":(0,R.iT)(e,20),className:"w-[200px] font-normal  text-lg leading-[27px] truncate inline-block",children:e})},{title:"产品系统ID",dataIndex:"uuid",width:"15rem",render:e=>(0,n.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-content":e,className:"text-lg w-[15rem] truncate inline-block font-normal leading-[27px]",children:(0,h.lS)(e,8,8)})},{title:"操作人",dataIndex:"name",width:"8rem",render:(e,t)=>(0,n.jsx)("span",{className:"w-[8rem] text-lg truncate inline-block font-normal leading-[27px]",children:t.updateUser.name})},{title:"描述",dataIndex:"description",width:"14rem",render:e=>(0,n.jsx)("div",{"data-tooltip-content":(0,R.iT)(e,11),"data-tooltip-id":"tooltip",className:"w-[14rem] text-lg truncate inline-block font-normal leading-[27px]",children:e||"-"})},{title:"上传时间",dataIndex:"createTime",width:"13rem",render:e=>(0,n.jsx)("span",{className:"w-[13rem] text-lg truncate inline-block font-normal leading-[27px]",children:e})},{title:"",width:"20rem",render:(e,t)=>(0,n.jsx)("div",{className:"flex justify-between flex-1 ml-10 text-green-2 break-keep",children:(0,n.jsx)("div",{className:"flex items-center font-normal justify-center cursor-pointer text-lg leading-[27px]",onClick:()=>N(t),children:"查看"})})}],[]),ex=(0,d.useMemo)(()=>[{title:"实景输入项",dataIndex:"context",width:"20%"},{title:"过程名称",dataIndex:"parameter",width:"30%"},{title:"参考值",dataIndex:"amount",width:"20%"},{title:"不确定性",dataIndex:"uncertainty",emptyText:"-",width:"30%"}],[]),em=async e=>{let t="更改状态";k({title:t,loading:!0}),await (0,f.pF)(p.id,e),G(q+1),k({title:t,loading:!1,resultText:"操作成功"}),g(null)};(0,d.useMemo)(()=>!!B&&!!U&&D>-1,[B,U,D]),(0,d.useMemo)(()=>!!_&&!!z,[_,z]),(0,d.useCallback)(e=>{M(e.target.value)},[]);let ef=(0,m.b)(),eh=()=>{F(1),1===I&&ec()};return(0,n.jsxs)(o.m,{isNew:!0,canBack:!0,link:{pathName:"/tools/tools",homeTitle:"产品碳足迹工具集",currentTitle:"产品碳足迹模型管理工具"},className:"flex flex-col justify-between flex-1 pb-12 text-black ",children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("h3",{className:"flex items-center justify-between text-2xl font-semibold",children:[(0,n.jsx)("span",{children:"我的产品系统"}),ef&&(0,n.jsx)(a.z,{onClick:()=>S(!0),className:v()("w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11 hover:bg-green-28"),children:"新建产品系统"})]}),(0,n.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,n.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,n.jsx)("div",{className:"min-h-[20.25rem] text-base leading-[1.625rem] min-w-[68.25rem]",children:(0,n.jsx)(r.i,{loading:er,columns:eu,columnsHeight:"h-[3.125rem]",mouseHoverKey:"id",data:(null==Q?void 0:Q.records)||[],columnsClassName:" cursor-pointer ",headerClassName:{background:"#fff",fontWeight:"700",fontSize:"18px",lineHeight:"27px"}})})})})]}),(0,n.jsx)(i.t,{onChange:e=>{F(e),(0,R.k3)(),eo(!0)},className:"my-8",total:(null==Q?void 0:Q.total)||0,pgSize:10,pgNum:I}),null!==p&&(0,n.jsx)(s.u_,{title:"更改状态",onClose:()=>g(null),children:(0,n.jsx)("div",{className:"flex",children:(null==y?void 0:y.loading)?(0,n.jsx)(u.g,{}):(0,n.jsxs)("div",{className:"flex flex-1",children:[p.state>-2&&(0,n.jsx)(a.z,{onClick:()=>em(1===p.state?0:1),className:"flex-1 w-full text-lg text-white rounded-lg bg-green-2 h-11",children:1===p.state?"弃用":"激活"}),-1===p.state&&(0,n.jsx)(a.z,{onClick:()=>em(-2),className:"flex-1 w-full ml-5 text-lg border-2 rounded-lg border-green-2 bg-green-2/10 text-green-2 hover:bg-green-2/20 h-11",children:"删除"})]})})}),!!j&&(0,n.jsx)(s.u_,{title:j.modelName+"模型中的实景输入项",onClose:()=>b(null),children:(0,n.jsxs)("div",{className:"flex w-[60rem] min-h-[16rem] flex-col pb-2",children:[(0,n.jsx)("ul",{className:"flex mb-1",children:ex.map((e,t)=>(0,n.jsx)("li",{className:"px-3 text-lg font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,n.jsx)("div",{className:"max-h-[15rem] min-h-[5rem] overflow-y-auto",children:(0,n.jsx)(r.i,{size:"big",hiddenHeader:!0,columns:ex,data:j.paramDetail})})]})}),y&&(0,n.jsx)(s.u_,{title:(null==y?void 0:y.title)||"操作",onClose:()=>k(null),children:(0,n.jsx)("div",{className:"pb-2 text-center",children:y.loading?(0,n.jsx)(u.g,{}):(0,n.jsx)("span",{children:y.resultText})})}),C&&(0,n.jsx)(P,{onClose:()=>S(!1),onSuccess:()=>eh()}),w&&(0,n.jsx)(E,{psId:w.id,title:w.name,onClose:()=>N(void 0),onSuccess:()=>eh()}),K>-1&&(0,n.jsx)(s.u_,{title:"查看产品",onClose:()=>W(-1),children:(0,n.jsxs)("ul",{className:"text-lg max-w-[32rem]",children:[(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"产品名称 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:null===(e=ea[K])||void 0===e?void 0:e.text})]}),(0,n.jsxs)("li",{className:"my-5",children:[(0,n.jsx)("label",{className:"inline-block w-[5.625rem]",children:"产品类型 :"}),(0,n.jsx)("span",{className:"text-gray-6",children:null===(t=ea[K])||void 0===t?void 0:t.type})]}),(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"描述 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:(null===(l=ea[K])||void 0===l?void 0:l.desc)?null===(x=ea[K])||void 0===x?void 0:x.desc:"-"})]})]})})]})}}},function(e){e.O(0,[3268,1271,7588,7038,8635,6257,701,7823,8881,8149,9774,2888,179],function(){return e(e.s=6220)}),_N_E=e.O()}]);