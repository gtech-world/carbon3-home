(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8200],{6220:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/model",function(){return t(2497)}])},1201:function(e,l,t){"use strict";t.d(l,{u:function(){return o},z:function(){return r}});var n=t(3342),a=t(8591),s=t.n(a),i=t(4209);function r(e){let{children:l,className:t,...a}=e;return(0,n.jsx)("button",{...a,className:s()(t,"hover:bg-green-28"),children:e.children})}function o(e){let{busy:l,disabled:t,className:a,defStyle:r="btn-primary",children:o,...c}=e;return(0,n.jsx)("button",{className:s()(a,{[r]:!t,"btn-disable":t}),...c,children:l?(0,n.jsx)(i.fCD,{className:"animate-spin"}):o})}},4956:function(e,l,t){"use strict";t.d(l,{E:function(){return i},K:function(){return r}});var n=t(3342),a=t(8591),s=t.n(a);function i(e){let{value:l,bg:t="#dddddd",color:a="#29953A",className:i}=e;return(0,n.jsx)("div",{className:s()(i,"w-full h-[10px]"),style:{background:t},children:(0,n.jsx)("div",{style:{width:"".concat(l,"%"),transition:"width 200ms ease",background:a},className:"h-full"})})}function r(e){let{index:l,full:t,bg:a="#dddddd",color:i="#29953A",className:r}=e;return(0,n.jsx)("div",{className:s()(r,"w-full h-[10px]"),style:{background:a},children:(0,n.jsx)("div",{style:{marginLeft:t?"0":"".concat(25*l,"%"),width:t?"100%":"25%",background:i},className:"h-full"})})}},124:function(e,l,t){"use strict";t.d(l,{m:function(){return v}});var n=t(3342),a=t(107),s=t(8996),i=t(1882),r=t(3958),o=t(8591),c=t.n(o),d=t(2577),u=t(3917),x=t(5390),m=t(1608),h=t(8761);function f(e){let{children:l,className:t,tits:s,showQuery:i,isManager:o,...f}=e,{push:v}=(0,a.useRouter)(),p=(0,h.fo)();return(0,r.dD)(),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:c()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0 px-[7.5rem] h-[4.25rem] justify-between",t),...f,children:[(0,n.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>v("/"),children:[(0,n.jsx)(d.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,n.jsx)(u.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,n.jsx)(x.R,{menus:p,children:(0,n.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,n.jsx)(m.otZ,{})})})]})})}function v(e){let{className:l,canBack:t,children:r,link:o,isNew:d,containerClassName:u,...x}=e,{push:m}=(0,a.useRouter)(),h=(0,s.R)();return(0,n.jsxs)("div",{className:"relative flex flex-col flex-1 w-full h-full min-h-fit bg-gray-16",children:[(0,n.jsx)(f,{showQuery:!0,style:{top:"".concat(h,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,n.jsxs)("div",{className:c()("w-full h-full mx-auto px-[60px] flex flex-col flex-1",u,{" max-w-[90rem]":!d}),children:[t&&(0,n.jsxs)("div",{className:"flex items-center my-5 text-sm ".concat((null==o?void 0:o.pathName)?"cursor-default":"cursor-pointer"),onClick:()=>(null==o?void 0:o.pathName)?void 0:m("/carbon/service"),children:[!o&&(0,n.jsx)(i.YFh,{className:"text-lg"}),o&&"{}"!==JSON.stringify(o)?(0,n.jsxs)("div",{className:"flex flex-row",children:[(0,n.jsx)("span",{className:"text-[#000000] cursor-pointer font-bold  text-[14px]",onClick:()=>m(null==o?void 0:o.pathName),children:o.homeTitle}),(0,n.jsx)("div",{className:"mx-1 ",children:" / "}),(0,n.jsxs)("span",{className:"cu text-[#999999] font-normal text-[14px]",children:[" ",o.currentTitle]})]}):"返回"]}),(0,n.jsx)("div",{className:c()("flex flex-col ",l),children:r})]})]})}},8469:function(e,l,t){"use strict";t.d(l,{d:function(){return u}});var n=t(3342),a=t(9455),s=t(9685);function i(){return(0,n.jsx)("tr",{className:" text-black text-center text-lg font-normal ",children:(0,n.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top",children:"无数据"})})}var r=e=>{let{header:l,data:t,empty:a=(0,n.jsx)(i,{}),className:s="min-w-full relative",headerClassName:r="bg-neutral-200 sticky top-0 text-left text-black text-lg font-bold leading-[27px]",headerItemClassName:o="p-3",tbodyClassName:c="bg-white ",rowClassName:d="text-black text-sm font-normal whitespace-nowrap",cellClassName:u="p-3"}=e;return(0,n.jsxs)("table",{className:s,children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{className:r,children:l.map((e,l)=>(0,n.jsx)("th",{scope:"col",className:o,children:e},l))})}),(0,n.jsxs)("tbody",{className:c,children:[t.map((e,l)=>(0,n.jsx)("tr",{className:d,children:e.map((e,l)=>(0,n.jsx)("td",{className:u,children:e},l))},l)),0===t.length&&a]})]})},o=t(5819),c=t(7207),d=t.n(c);function u(e){let{data:l,inputData:t,...i}=e,c=(0,s.useMemo)(()=>{var e;if(!l)return[];let n=t?d().mapKeys("string"==typeof t?(0,o.OA)(t)||[]:t,e=>e.paramName):{},a=(0,o.OA)(l)||[],s=(null===(e=a[0])||void 0===e?void 0:e.parameters)||[];return s.map(e=>{var l;return[e.name,e.context.name,e.value,(null===(l=n[e.name])||void 0===l?void 0:l.paramValue)||""]})},[l,t]);return(0,n.jsx)(a.u_,{title:"实景数据",...i,children:(0,n.jsx)("div",{className:"w-[40rem] px-5 max-h-mc overflow-y-auto",children:(0,n.jsx)(r,{data:c,header:["参数名","过程名称","参考值","输入值"]})})})}},9749:function(e,l,t){"use strict";t.d(l,{H4:function(){return r},Kv:function(){return i},Tz:function(){return c},We:function(){return o}});var n=t(7207),a=t.n(n),s=t(6631);function i(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,s.ZP)("/api/product-system/".concat(e,"/detail"),{refreshInterval:l})}function r(e){return(0,s.ZP)(a().isNil(e)?null:"/api/verifyRecord/".concat(e,"/detail"))}function o(e){return(0,s.ZP)(e?"/api/inventory/all":null)}function c(e){return(0,s.ZP)(e?"/api/verifyRecord/verifiers":null)}},9976:function(e,l,t){"use strict";t.d(l,{b:function(){return s},n:function(){return a}});var n=t(3958);function a(){let{userData:e,inited:l}=(0,n.oR)();return l&&(null==e?void 0:e.role)==="verify"}function s(){let{userData:e,inited:l}=(0,n.oR)();return l&&(null==e?void 0:e.role)!=="verify"}},2497:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return E}});var n=t(3342),a=t(1201),s=t(9455),i=t(3187),r=t(124),o=t(9685),c=t(7266),d=t(3958),u=t(8591),x=t.n(u),m=t(2239),h=t(367);function f(e){let{items:l,children:t,onClick:a,className:s}=e,[i,r]=(0,m.Z)(!1),c=(0,o.useRef)(null);return((0,h.Z)(c,()=>i&&r(!1)),0===l.length)?null:(0,n.jsxs)("div",{ref:c,className:x()("bg-white text-black px-5 py-3 text-lg rounded-lg relative cursor-pointer",s),onClick:()=>r(),children:[(0,n.jsx)("div",{className:"flex justify-between items-center",children:t}),i&&(0,n.jsx)("div",{className:"max-h-[18rem] absolute left-0 w-full bg-white  rounded-lg py-3 overflow-x-hidden overflow-y-auto",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,n.jsx)("div",{className:"",children:l.map((e,l)=>(0,n.jsx)("div",{className:x()("w-full break-all px-5 py-2 text-sm hover:bg-gray-16"),onClick:()=>a&&a(l),children:e.text},"select_item_".concat(l)))})})]})}var v=t(9749),p=t(5631),j=t(9976),g=t(1844),b=t(5819),N=t(7207),w=t.n(N),y=t(8469);function k(e){var l,t,a,i;let{ps:r,...o}=e,[c,d]=(0,m.Z)(!1);return(0,n.jsxs)(s.u_,{title:r.name,...o,children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] px-5 py-[1px] max-h-mc overflow-y-auto",children:[(0,n.jsx)(R,{tit:"UID",value:r.uuid||"-"}),(0,n.jsx)(R,{tit:"版本",value:r.version||"-"}),(0,n.jsx)(R,{tit:"描述",value:r.description||"-"}),(0,n.jsx)(R,{tit:"状态",value:(0,n.jsx)(C,{status:r.state})}),(0,n.jsx)(R,{tit:"变更人",value:(null===(l=r.updateUser)||void 0===l?void 0:l.name)||"-"}),(0,n.jsx)(R,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{modelId:null===(t=r.model)||void 0===t?void 0:t.id,modelStatus:null===(a=r.model)||void 0===a?void 0:a.state,isRead:!0})}),(0,n.jsx)(R,{tit:"实景参数列表",value:(0,n.jsx)(S,{action:"查看",onClick:()=>d(!0)})}),(0,n.jsx)(z,{organization:r.org})]}),c&&(0,n.jsx)(y.d,{data:null===(i=r.model)||void 0===i?void 0:i.paramDetail,onClose:()=>d(!1)})]})}function C(e){let{status:l}=e;return w().isNil(l)?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-neutral-400",children:"草稿"}):(0,n.jsx)("div",{className:x()("w-min whitespace-nowrap h-6 px-2.5 py-1 bg-opacity-10 rounded justify-start items-center gap-2.5 inline-flex",{"bg-rose-500":1!==l,"bg-green-600":1===l}),children:(0,n.jsx)("div",{className:x()("text-green-600 text-base font-normal leading-none",{"text-rose-500":1!==l,"text-green-600":1===l}),children:1===l?"当前使用":"过去版本"})})}function S(e){let{action:l,onClick:t,to:a}=e;return a?(0,n.jsx)("a",{href:a,className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded text-black text-base font-normal leading-none",children:l}):(0,n.jsx)("div",{className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded justify-start items-center gap-2.5 inline-flex cursor-pointer",onClick:t,children:(0,n.jsx)("div",{className:"text-base font-normal leading-none text-black",children:l})})}function _(e){let{psId:l,disableSelectFile:t=!1,hiddenUpdate:a,modelId:s,isNew:i,isRead:r,modelStatus:c,file:d,onFileChange:u}=e,x=(0,o.useRef)(null),m=()=>1!==c?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-amber-500",children:"等待解析"}):(0,n.jsx)(S,{to:"/model?id=".concat(s),action:"在线查看"}),h=e=>{var l;t||null===(l=x.current)||void 0===l||l.click()};return(0,n.jsxs)("div",{className:"text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5",children:[(0,n.jsx)("input",{ref:x,type:"file",hidden:!0,accept:".zip",onChange:u}),!r&&(0,b.lS)(null==d?void 0:d.name,10,10),r?m():i?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(S,{action:"上传模型",onClick:h})}):(0,n.jsxs)(n.Fragment,{children:[!d&&m(),1===c&&!a&&(0,n.jsx)(S,{action:"更新模型",onClick:h})]})]})}function R(e){let l="string"==typeof e.value||"number"==typeof e.value;return(0,n.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,n.jsxs)("div",{className:"text-base font-normal leading-normal text-black",children:[e.tit,": "]}),l?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-neutral-400",children:e.value}):e.value]})}function I(e){let{defaultValue:l,...t}=e;return(0,n.jsx)("input",{type:"text",className:"w-full px-5 py-[15px] bg-gray-28 rounded-lg border border-neutral-200 justify-start items-start gap-2.5 inline-flex text-black text-base font-normal leading-none",...t})}function z(e){let{userData:l}=(0,d.oR)(),t=e.organization||(null==l?void 0:l.organization);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(R,{tit:"组织名称",value:(null==t?void 0:t.name)||"-"}),(0,n.jsx)(R,{tit:"组织编号",value:(null==t?void 0:t.serialNumber)||"-"})]})}function F(e){var l,t,i,r;let{psId:d,onSuccess:u,...h}=e,{data:b,isLoading:N,error:F}=(0,v.Kv)(d,6e4),[T,Z]=(0,o.useState)(""),D=(0,o.useRef)(!0);(0,o.useEffect)(()=>{b&&D.current&&(Z(b.description||""),D.current=!1)},[b]),(0,o.useEffect)(()=>{F&&h.onClose&&h.onClose()},[F]);let[E,M]=(0,o.useState)(!1),[A,L]=(0,o.useState)(null),[P,U]=(0,o.useState)(0),H=(0,o.useCallback)(e=>{var l;L(null===(l=e.target.files)||void 0===l?void 0:l.item(0))},[]),K=!b||!A&&T===(null==b?void 0:b.description),O=(0,p.R)(()=>{let e;if(b&&!K){if(M(!0),A){let l=new FormData;l.append("file",A),l.append("name",A.name),e=(0,g.av)(l,{onUploadProgress:e=>U(Math.min(100,Math.round(100*(e.rate||0))))}).then(e=>(0,g.bc)({id:b.id,name:b.name,description:T,modelId:e}))}else e=(0,g.bc)({id:b.id,name:b.name,description:T});e.then(()=>{u&&u(),h.onClose&&h.onClose()}).catch(console.error).finally(()=>{U(0),M(!1)})}}),[B,W]=(0,m.Z)(!1),[X,J]=(0,o.useState)(),Q=(0,o.useMemo)(()=>w().orderBy(((null==b?void 0:b.historyList)||[]).map(e=>({...e,text:"版本".concat(e.version)})),e=>w().toNumber(e.version),"desc"),[b]),V=(0,j.n)();return(0,n.jsxs)(s.u_,{...h,children:[N&&!b&&(0,n.jsx)(c.g,{className:"min-h-[100px]"}),b&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5  w-full min-w-[40rem] px-5 py-[1px] max-h-mc overflow-y-auto",children:[(0,n.jsx)(R,{tit:"UID",value:b.uuid||"-"}),(0,n.jsx)(R,{tit:"版本",value:(0,n.jsxs)("div",{className:"flex justify-between items-center gap-2.5 px-5 h-[50px] bg-gray-28 rounded-lg border border-neutral-200",children:[b.version||"-",(0,n.jsx)(f,{items:Q,className:"!px-2.5 !py-1 bg-white rounded border border-neutral-200 text-black text-base font-normal leading-none",onClick:e=>{if(!Q)return;let l=Q[e];J(l)},children:"查看历史版本"})]})}),(0,n.jsx)(R,{tit:"描述",value:(0,n.jsx)(I,{disabled:V,maxLength:100,value:T,onChange:e=>Z(e.target.value)})}),(0,n.jsx)(R,{tit:"状态",value:(0,n.jsx)(C,{status:b.state})}),(0,n.jsx)(R,{tit:"变更人",value:(null===(l=b.updateUser)||void 0===l?void 0:l.name)||"-"}),(0,n.jsx)(R,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{modelId:null===(t=b.model)||void 0===t?void 0:t.id,disableSelectFile:E,modelStatus:null===(i=b.model)||void 0===i?void 0:i.state,hiddenUpdate:V,file:A,onFileChange:H})}),(0,n.jsx)(R,{tit:"实景参数列表",value:(0,n.jsx)(S,{action:"查看",onClick:()=>W(!0)})}),(0,n.jsx)(z,{organization:null==b?void 0:b.org})]}),(0,n.jsxs)("div",{className:x()("flex flex-col gap-2.5 mt-5 px-5",{hidden:V}),children:[(0,n.jsx)(a.u,{busy:E,disabled:K,onClick:O,children:"提交更新"}),(0,n.jsx)("div",{className:"text-sm font-normal text-black",children:"* 点击提交更新按钮后，当前的产品系统版本将自动更新。原先版本的信息可以在历史版本中查询。"})]})]}),B&&(0,n.jsx)(y.d,{data:null==b?void 0:null===(r=b.model)||void 0===r?void 0:r.paramDetail,onClose:()=>W(!1)}),X&&(0,n.jsx)(k,{onClose:()=>J(void 0),ps:X})]})}var T=t(4956);function Z(e){let{onSuccess:l,onClose:t,...i}=e,[r,c]=(0,o.useState)(""),[d,u]=(0,o.useState)(""),[x,m]=(0,o.useState)(!1),[h,f]=(0,o.useState)(0),[v,j]=(0,o.useState)(null),b=!v||!r||x,N=(0,o.useCallback)(e=>{var l;j(null===(l=e.target.files)||void 0===l?void 0:l.item(0))},[]),w=(0,o.useRef)(),y=(0,o.useCallback)(()=>{var e;null===(e=w.current)||void 0===e||e.abort(),t&&t()},[t]),k=(0,p.R)(()=>{if(b)return;m(!0);let e=new FormData;e.append("file",v),w.current=new AbortController,(0,g.av)(e,{signal:w.current.signal,onUploadProgress:e=>{f(Math.min(Math.round(100*(e.rate||0)),100))}}).then(e=>(0,g.bc)({name:r,description:d,modelId:e})).then(()=>{l&&l(),y()}).catch(()=>{}).finally(()=>{m(!1),f(0)})});return(0,n.jsx)(s.u_,{...i,title:"新建产品系统",onClose:y,children:(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] overflow-hidden",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full flex-1 max-h-mc px-5 py-[1px] overflow-y-auto",children:[(0,n.jsx)(R,{tit:"产品系统名称",value:(0,n.jsx)(I,{maxLength:30,value:r,onChange:e=>c(e.target.value)})}),(0,n.jsx)(R,{tit:"描述",value:(0,n.jsx)(I,{maxLength:100,value:d,onChange:e=>u(e.target.value)})}),(0,n.jsx)(R,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{isNew:!0,disableSelectFile:x,file:v,onFileChange:N})}),(0,n.jsx)(z,{})]}),(0,n.jsx)("div",{className:"flex flex-shrink-0 gap-5 px-5 w-full",children:x?(0,n.jsx)(T.E,{value:h,className:"rounded-lg my-5 overflow-hidden"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:y,children:"取消"}),(0,n.jsx)(a.u,{className:"flex-1",onClick:k,disabled:b,children:"确定"})]})})]})})}var D=t(8344),E=function(){var e,l,t,d;let[u,m]=(0,o.useState)(null),[h,f]=(0,o.useState)(null),[v,p]=(0,o.useState)(),[N,w]=(0,o.useState)(null),[y,k]=(0,o.useState)(!1),[C,S]=(0,o.useState)(""),[_,R]=(0,o.useState)(null),[I,z]=(0,o.useState)(""),[T,E]=(0,o.useState)(null),[M,A]=(0,o.useState)(null),[L,P]=(0,o.useState)(""),[U,H]=(0,o.useState)(-1),[K,O]=(0,o.useState)(-1),[B,W]=(0,o.useState)(0),[X,J]=(0,o.useState)([]),[Q,V]=(0,o.useState)([]),Y=(0,o.useRef)(),q=[{title:"产品系统",dataIndex:"name",width:"200px",render:e=>(0,n.jsx)(D.Tooltip,{theme:"light",html:(0,n.jsx)("div",{className:" flex flex-1 flex-wrap w-[13rem]",children:e}),disabled:e.length<11,arrow:!0,followCursor:!0,className:"text-lg w-[13rem] truncate inline-block font-normal leading-[27px]",children:(0,n.jsx)("span",{children:e})})},{title:"产品系统ID",dataIndex:"uuid",width:"20rem",render:e=>(0,n.jsx)(D.Tooltip,{title:e,theme:"light",arrow:!0,followCursor:!0,className:"text-lg w-[13rem] truncate inline-block font-normal leading-[27px]",children:(0,n.jsx)("span",{children:(0,b.lS)(e,8,8)})})},{title:"变更人",dataIndex:"name",width:"12.5rem",render:(e,l)=>(0,n.jsx)("span",{className:"w-[13rem] text-lg truncate inline-block font-normal leading-[27px]",children:l.updateUser.name})},{title:"变更时间",dataIndex:"updateTime",width:"12.5rem",render:e=>(0,n.jsx)("div",{className:"text-lg  w-[13rem]  font-normal leading-[27px] break-keep whitespace-nowrap",children:e})},{title:"版本",dataIndex:"version",width:"9.375rem",render:e=>(0,n.jsx)("span",{className:"text-lg  font-normal leading-[27px]",children:e})},{title:"",width:"20rem",dataIndex:"",render:(e,l)=>(0,n.jsx)("div",{className:"flex justify-between flex-1 ml-10 text-green-2 break-keep",children:(0,n.jsx)("div",{className:"flex items-center font-normal justify-center cursor-pointer text-lg leading-[27px]",onClick:()=>p(l),children:"编辑"})})}],G=(0,o.useMemo)(()=>[{title:"实景输入项",dataIndex:"context",width:"20%"},{title:"过程名称",dataIndex:"parameter",width:"30%"},{title:"参考值",dataIndex:"amount",width:"20%"},{title:"不确定性",dataIndex:"uncertainty",emptyText:"-",width:"30%"}],[]),$=async e=>{let l="更改状态";w({title:l,loading:!0}),await (0,g.pF)(u.id,e),W(B+1),w({title:l,loading:!1,resultText:"操作成功"}),m(null)};(0,o.useMemo)(()=>!!M&&!!L&&T>-1,[M,L,T]),(0,o.useMemo)(()=>!!C&&!!_,[C,_]),(0,o.useCallback)(e=>{S(e.target.value)},[]);let ee=(0,j.b)(),el=()=>{var e;null===(e=Y.current)||void 0===e||e.reload(1)},et=e=>{p(e)};return(0,n.jsxs)(r.m,{isNew:!0,canBack:!0,link:{pathName:"/tools/tools",homeTitle:"产品碳足迹工具集",currentTitle:"产品碳足迹模型管理工具"},className:"flex flex-col justify-between pb-12 text-black ",children:[(0,n.jsxs)("h3",{className:"flex items-center justify-between text-2xl font-semibold",children:[(0,n.jsx)("span",{children:"我的产品系统"}),ee&&(0,n.jsx)(a.z,{onClick:()=>k(!0),className:x()("w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11"),children:"新建产品系统"})]}),(0,n.jsx)(i.i,{columns:q,columnsHeight:"h-[3.125rem]",mouseHoverKey:"id",api:g.vz,tableRef:Y,onChangeColumn:e=>et(e),columnsClassName:" cursor-pointer ",headerClassName:{background:"#fff",fontWeight:"700",fontSize:"18px",lineHeight:"27px"}}),null!==u&&(0,n.jsx)(s.u_,{title:"更改状态",onClose:()=>m(null),children:(0,n.jsx)("div",{className:"flex",children:(null==N?void 0:N.loading)?(0,n.jsx)(c.g,{}):(0,n.jsxs)("div",{className:"flex flex-1",children:[u.state>-2&&(0,n.jsx)(a.z,{onClick:()=>$(1===u.state?0:1),className:"flex-1 w-full text-lg text-white rounded-lg bg-green-2 h-11",children:1===u.state?"弃用":"激活"}),-1===u.state&&(0,n.jsx)(a.z,{onClick:()=>$(-2),className:"flex-1 w-full ml-5 text-lg border-2 rounded-lg border-green-2 bg-green-2/10 text-green-2 hover:bg-green-2/20 h-11",children:"删除"})]})})}),!!h&&(0,n.jsx)(s.u_,{title:h.modelName+"模型中的实景输入项",onClose:()=>f(null),children:(0,n.jsxs)("div",{className:"flex w-[60rem] min-h-[16rem] flex-col pb-2",children:[(0,n.jsx)("ul",{className:"flex mb-1",children:G.map((e,l)=>(0,n.jsx)("li",{className:"px-3 text-lg font-bold",style:{width:e.width},children:e.title},"columns".concat(l)))}),(0,n.jsx)("div",{className:"max-h-[15rem] min-h-[5rem] overflow-y-auto",children:(0,n.jsx)(i.i,{size:"big",hiddenHeader:!0,columns:G,data:h.paramDetail})})]})}),N&&(0,n.jsx)(s.u_,{title:(null==N?void 0:N.title)||"操作",onClose:()=>w(null),children:(0,n.jsx)("div",{className:"pb-2 text-center",children:N.loading?(0,n.jsx)(c.g,{}):(0,n.jsx)("span",{children:N.resultText})})}),y&&(0,n.jsx)(Z,{onClose:()=>k(!1),onSuccess:()=>el()}),v&&(0,n.jsx)(F,{psId:v.id,title:v.name,onClose:()=>p(void 0),onSuccess:()=>el()}),U>-1&&(0,n.jsx)(s.u_,{title:"查看产品",onClose:()=>H(-1),children:(0,n.jsxs)("ul",{className:"text-lg max-w-[32rem]",children:[(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"产品名称 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:null===(e=Q[U])||void 0===e?void 0:e.text})]}),(0,n.jsxs)("li",{className:"my-5",children:[(0,n.jsx)("label",{className:"inline-block w-[5.625rem]",children:"产品类型 :"}),(0,n.jsx)("span",{className:"text-gray-6",children:null===(l=Q[U])||void 0===l?void 0:l.type})]}),(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"描述 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:(null===(t=Q[U])||void 0===t?void 0:t.desc)?null===(d=Q[U])||void 0===d?void 0:d.desc:"-"})]})]})})]})}}},function(e){e.O(0,[3268,1271,7588,7038,8635,5070,6631,8761,3187,9774,2888,179],function(){return e(e.s=6220)}),_N_E=e.O()}]);