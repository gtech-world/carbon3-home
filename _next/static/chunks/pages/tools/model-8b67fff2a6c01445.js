(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8200],{9069:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/model",function(){return l(6929)}])},5266:function(e,t,l){"use strict";l.d(t,{E:function(){return i},K:function(){return r}});var n=l(1527),a=l(4875),s=l.n(a);function i(e){let{value:t,bg:l="#dddddd",color:a="#29953A",className:i}=e;return(0,n.jsx)("div",{className:s()(i,"w-full h-[.625rem]"),style:{background:l},children:(0,n.jsx)("div",{style:{width:"".concat(t,"%"),transition:"width 200ms ease",background:a},className:"h-full"})})}function r(e){let{index:t,full:l,bg:a="#dddddd",color:i="#29953A",className:r}=e;return(0,n.jsx)("div",{className:s()(r,"w-full h-[.625rem]"),style:{background:a},children:(0,n.jsx)("div",{style:{marginLeft:l?"0":"".concat(25*t,"%"),width:l?"100%":"25%",background:i},className:"h-full"})})}},5088:function(e,t,l){"use strict";l.d(t,{d:function(){return u}});var n=l(1527),a=l(9049),s=l(959);function i(){return(0,n.jsx)("tr",{className:" text-black text-center text-lg font-normal ",children:(0,n.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top",children:"无数据"})})}var r=e=>{let{header:t,data:l,empty:a=(0,n.jsx)(i,{}),className:s="min-w-full relative",headerClassName:r="bg-neutral-200 sticky top-0 text-left text-black text-lg font-bold leading-[27px]",headerItemClassName:o="p-3",tbodyClassName:d="bg-white ",rowClassName:c="text-black text-sm font-normal whitespace-nowrap",cellClassName:u="p-3"}=e;return(0,n.jsxs)("table",{className:s,children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{className:r,children:t.map((e,t)=>(0,n.jsx)("th",{scope:"col",className:o,children:e},t))})}),(0,n.jsxs)("tbody",{className:d,children:[l.map((e,t)=>(0,n.jsx)("tr",{className:c,children:e.map((e,t)=>(0,n.jsx)("td",{className:u,children:e},t))},t)),0===l.length&&a]})]})},o=l(9701),d=l(2699),c=l.n(d);function u(e){let{data:t,inputData:l,...i}=e,d=(0,s.useMemo)(()=>{var e;if(!t)return[];let n=l?c().mapKeys("string"==typeof l?(0,o.OA)(l)||[]:l,e=>e.paramName):{},a=(0,o.OA)(t)||[],s=(null===(e=a[0])||void 0===e?void 0:e.parameters)||[];return s.map(e=>{var t;return[e.name,e.context.name,e.value,(null===(t=n[e.name])||void 0===t?void 0:t.paramValue)||""]})},[t,l]);return(0,n.jsx)(a.u_,{title:"实景数据",...i,children:(0,n.jsx)("div",{className:"w-[40rem] max-h-mc overflow-y-auto",children:(0,n.jsx)(r,{data:d,header:["参数名","过程名称","参考值","输入值"]})})})}},6020:function(e,t,l){"use strict";l.d(t,{H4:function(){return r},Kv:function(){return i},Tz:function(){return d},We:function(){return o}});var n=l(2699),a=l.n(n),s=l(1256);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,s.ZP)("/api/product-system/".concat(e,"/detail"),{refreshInterval:t})}function r(e){return(0,s.ZP)(a().isNil(e)?null:"/api/verifyRecord/".concat(e,"/detail"))}function o(e){return(0,s.ZP)(e?"/api/inventory/all":null)}function d(e){return(0,s.ZP)(e?"/api/verifyRecord/verifiers":null)}},6929:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return P}});var n=l(1527),a=l(1191),s=l(9049),i=l(9869),r=l(9346),o=l(1600),d=l(959),c=l(834),u=l(5858),x=l(6699),m=l(9701),h=l(4875),f=l.n(h),v=l(9592),p=l(8723);function j(e){let{items:t,children:l,onClick:a,className:s}=e,[i,r]=(0,v.Z)(!1),o=(0,d.useRef)(null);return((0,p.Z)(o,()=>i&&r(!1)),0===t.length)?null:(0,n.jsxs)("div",{ref:o,className:f()("bg-white text-black px-5 py-3 text-lg rounded-lg relative cursor-pointer",s),onClick:()=>r(),children:[(0,n.jsx)("div",{className:"flex justify-between items-center",children:l}),i&&(0,n.jsx)("div",{className:"max-h-[18rem] absolute left-0 w-full bg-white  rounded-lg py-3 overflow-x-hidden overflow-y-auto",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,n.jsx)("div",{className:"",children:t.map((e,t)=>(0,n.jsx)("div",{className:f()("w-full break-all px-5 py-2 text-sm hover:bg-gray-16"),onClick:()=>a&&a(t),children:e.text},"select_item_".concat(t)))})})]})}var g=l(6020),b=l(3752),w=l(5088);function N(e){var t,l,a,i;let{ps:r,...o}=e,[d,c]=(0,v.Z)(!1);return(0,n.jsxs)(s.u_,{title:r.name,...o,children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] max-h-mc overflow-y-auto",children:[(0,n.jsx)(I,{tit:"UID",value:r.uuid||"-"}),(0,n.jsx)(I,{tit:"版本",value:r.version||"-"}),(0,n.jsx)(I,{tit:"描述",value:r.description||"-"}),(0,n.jsx)(I,{tit:"状态",value:(0,n.jsx)(C,{status:r.state})}),(0,n.jsx)(I,{tit:"变更人",value:(null===(t=r.updateUser)||void 0===t?void 0:t.name)||"-"}),(0,n.jsx)(I,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{modelId:null===(l=r.model)||void 0===l?void 0:l.id,modelStatus:null===(a=r.model)||void 0===a?void 0:a.state,isRead:!0})}),(0,n.jsx)(I,{tit:"实景参数列表",value:(0,n.jsx)(S,{action:"查看",onClick:()=>c(!0)})}),(0,n.jsx)(E,{})]}),d&&(0,n.jsx)(w.d,{data:null===(i=r.model)||void 0===i?void 0:i.paramDetail,onClose:()=>c(!1)})]})}var y=l(2699),k=l.n(y);function C(e){let{status:t}=e;return k().isNil(t)?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-neutral-400",children:"草稿"}):(0,n.jsx)("div",{className:f()("w-min whitespace-nowrap h-6 px-2.5 py-1 bg-opacity-10 rounded justify-start items-center gap-2.5 inline-flex",{"bg-rose-500":1!==t,"bg-green-600":1===t}),children:(0,n.jsx)("div",{className:f()("text-green-600 text-base font-normal leading-none",{"text-rose-500":1!==t,"text-green-600":1===t}),children:1===t?"当前使用":"过去版本"})})}function S(e){let{action:t,onClick:l,to:a}=e;return a?(0,n.jsx)("a",{href:a,className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded text-black text-base font-normal leading-none",children:t}):(0,n.jsx)("div",{className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded justify-start items-center gap-2.5 inline-flex cursor-pointer",onClick:l,children:(0,n.jsx)("div",{className:"text-base font-normal leading-none text-black",children:t})})}function _(e){let{psId:t,modelId:l,isNew:a,isRead:s,modelStatus:i,file:r,onFileChange:o}=e,c=(0,d.useRef)(null),u=()=>1!==i?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-amber-500",children:"等待解析"}):(0,n.jsx)(S,{to:"/model?id=".concat(l),action:"在线查看"});return(0,n.jsxs)("div",{className:"text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5",children:[(0,n.jsx)("input",{ref:c,type:"file",hidden:!0,accept:".zip",onChange:o}),!s&&(0,m.lS)(null==r?void 0:r.name),s?u():a?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(S,{action:"上传模型",onClick:e=>{var t;return null===(t=c.current)||void 0===t?void 0:t.click()}})}):(0,n.jsxs)(n.Fragment,{children:[!r&&u(),1===i&&(0,n.jsx)(S,{action:"更新模型",onClick:e=>{var t;return null===(t=c.current)||void 0===t?void 0:t.click()}})]})]})}function I(e){let t="string"==typeof e.value||"number"==typeof e.value;return(0,n.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,n.jsxs)("div",{className:"text-base font-normal leading-normal text-black",children:[e.tit,": "]}),t?(0,n.jsx)("div",{className:"text-base font-normal leading-none text-neutral-400",children:e.value}):e.value]})}function z(e){let{defaultValue:t,...l}=e;return(0,n.jsx)("input",{type:"text",className:"w-full px-5 py-4 bg-stone-50 rounded-lg border border-neutral-200 justify-start items-start gap-2.5 inline-flex text-black text-base font-normal leading-none",...l})}function E(){var e,t;let{userData:l}=(0,c.oR)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I,{tit:"组织名称",value:(null==l?void 0:null===(e=l.organization)||void 0===e?void 0:e.name)||"-"}),(0,n.jsx)(I,{tit:"组织编号",value:(null==l?void 0:null===(t=l.organization)||void 0===t?void 0:t.serialNumber)||"-"})]})}function F(e){var t,l,i,r;let{psId:o,onSuccess:c,...m}=e,{data:h,isLoading:f,error:p}=(0,g.Kv)(o,6e4),[y,F]=(0,d.useState)(""),R=(0,d.useRef)(!0);(0,d.useEffect)(()=>{h&&R.current&&(F(h.description||""),R.current=!1)},[h]),(0,d.useEffect)(()=>{p&&m.onClose&&m.onClose()},[p]);let[M,P]=(0,d.useState)(!1),[A,D]=(0,d.useState)(null),[L,T]=(0,d.useState)(0),Z=(0,d.useCallback)(e=>{var t;D(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},[]),U=!h||!A&&y===(null==h?void 0:h.description),H=(0,b.R)(()=>{let e;if(h&&!U){if(P(!0),A){let t=new FormData;t.append("file",A),t.append("name",A.name),e=(0,x.av)(t,{onUploadProgress:e=>T(Math.min(100,Math.round(100*(e.rate||0))))}).then(e=>(0,x.bc)({id:h.id,name:h.name,description:y,modelId:e}))}else e=(0,x.bc)({id:h.id,name:h.name,description:y});e.then(()=>{c&&c(),m.onClose&&m.onClose()}).catch(console.error).finally(()=>{T(0),P(!1)})}}),[K,O]=(0,v.Z)(!1),[W,X]=(0,d.useState)(),B=(0,d.useMemo)(()=>k().orderBy(((null==h?void 0:h.historyList)||[]).map(e=>({...e,text:"版本".concat(e.version)})),e=>k().toNumber(e.version),"desc"),[h]);return(0,n.jsxs)(s.u_,{title:(null==h?void 0:h.name)||"",...m,children:[f&&!h&&(0,n.jsx)(u.g,{className:"min-h-[100px]"}),h&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5  w-full min-w-[40rem] max-h-mc overflow-y-auto",children:[(0,n.jsx)(I,{tit:"UID",value:h.uuid||"-"}),(0,n.jsx)(I,{tit:"版本",value:(0,n.jsxs)("div",{className:"flex justify-between items-center gap-2.5 px-5 py-4 bg-stone-50 rounded-lg border border-neutral-200",children:[h.version||"-",(0,n.jsx)(j,{items:B,className:"!px-2.5 !py-1 bg-white rounded border border-neutral-200 text-stone-500 text-base font-normal leading-none",onClick:e=>{if(!B)return;let t=B[e];X(t)},children:"查看历史版本"})]})}),(0,n.jsx)(I,{tit:"描述",value:(0,n.jsx)(z,{maxLength:100,value:y,onChange:e=>F(e.target.value)})}),(0,n.jsx)(I,{tit:"状态",value:(0,n.jsx)(C,{status:h.state})}),(0,n.jsx)(I,{tit:"变更人",value:(null===(t=h.updateUser)||void 0===t?void 0:t.name)||"-"}),(0,n.jsx)(I,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{modelId:null===(l=h.model)||void 0===l?void 0:l.id,modelStatus:null===(i=h.model)||void 0===i?void 0:i.state,file:A,onFileChange:Z})}),(0,n.jsx)(I,{tit:"实景参数列表",value:(0,n.jsx)(S,{action:"查看",onClick:()=>O(!0)})}),(0,n.jsx)(E,{})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-2.5 mt-5",children:[(0,n.jsx)(a.u,{busy:M,disabled:U,onClick:H,children:"提交更新"}),(0,n.jsx)("div",{className:"text-sm font-normal text-black",children:"* 点击提交更新按钮后，当前的产品系统版本将自动更新。原先版本的信息可以在历史版本中查询。"})]})]}),K&&(0,n.jsx)(w.d,{data:null==h?void 0:null===(r=h.model)||void 0===r?void 0:r.paramDetail,onClose:()=>O(!1)}),W&&(0,n.jsx)(N,{onClose:()=>X(void 0),ps:W})]})}var R=l(5266);function M(e){let{onSuccess:t,onClose:l,...i}=e,[r,o]=(0,d.useState)(""),[c,u]=(0,d.useState)(""),[m,h]=(0,d.useState)(!1),[f,v]=(0,d.useState)(0),[p,j]=(0,d.useState)(null),g=!p||p.name.length>=128||!r,w=(0,d.useCallback)(e=>{var t;j(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},[]),N=(0,d.useRef)(),y=(0,d.useCallback)(()=>{var e;null===(e=N.current)||void 0===e||e.abort(),l&&l()},[l]),k=(0,b.R)(()=>{if(g)return;h(!0);let e=new FormData;e.append("name",p.name),e.append("file",p),N.current=new AbortController,(0,x.av)(e,{signal:N.current.signal,onUploadProgress:e=>{v(Math.min(Math.round(100*(e.rate||0)),100))}}).then(e=>(0,x.bc)({name:r,description:c,modelId:e})).then(()=>{t&&t(),y()}).catch(()=>{}).finally(()=>{h(!1),v(0)})});return(0,n.jsx)(s.u_,{...i,title:"新建产品系统",outClose:!1,onClose:y,children:(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] max-h-mc",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full flex-1 h-max overflow-y-auto",children:[(0,n.jsx)(I,{tit:"产品系统名称",value:(0,n.jsx)(z,{maxLength:30,value:r,onChange:e=>o(e.target.value)})}),(0,n.jsx)(I,{tit:"描述",value:(0,n.jsx)(z,{maxLength:100,value:c,onChange:e=>u(e.target.value)})}),(0,n.jsx)(I,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{isNew:!0,file:p,onFileChange:w})}),(0,n.jsx)(E,{})]}),(0,n.jsx)("div",{className:"flex gap-5 w-full",children:m?(0,n.jsx)(R.E,{value:f,className:"rounded-lg my-3 overflow-hidden"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:y,children:"取消"}),(0,n.jsx)(a.u,{className:"flex-1",onClick:k,disabled:g,children:"确定"})]})})]})})}var P=function(){var e,t,l,h;let[f,v]=(0,d.useState)(null),[p,j]=(0,d.useState)(null),[g,b]=(0,d.useState)(),[w,N]=(0,d.useState)(null),[y,k]=(0,d.useState)(!1),[C,S]=(0,d.useState)(1),[_,I]=(0,d.useState)(""),[z,E]=(0,d.useState)(null),[R,P]=(0,d.useState)(""),[A,D]=(0,d.useState)(null),[L,T]=(0,d.useState)(null),[Z,U]=(0,d.useState)(""),[H,K]=(0,d.useState)(-1),[O,W]=(0,d.useState)(-1),[X,B]=(0,d.useState)(0),[V,q]=(0,d.useState)(0),[G,J]=(0,d.useState)({}),[Q,Y]=(0,d.useState)(0),[$,ee]=(0,d.useState)([]),[et,el]=(0,d.useState)([]);(0,d.useRef)(null);let{user:en}=(0,c.aF)(),[ea,es]=(0,d.useState)(!1),ei=async()=>{let e=await (0,x.Ps)();ee(e?function e(t,l){return t.filter(e=>void 0===l?0===e.parentId:e.parentId===l).map(l=>(l.children=e(t,l.id),l))}(null==e?void 0:e.records,0):[])},er=async()=>{try{es(!0);let e=await (0,x.vz)(C);J(e),es(!1)}catch(e){console.log("eee",e)}};(0,d.useEffect)(()=>{er()},[C]),(0,d.useEffect)(()=>{ei()},[]);let eo=(0,d.useMemo)(()=>[{title:"产品系统",dataIndex:"name",width:"20rem",render:e=>(0,n.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-content":e,className:"w-[20rem] font-normal  text-lg leading-[27px] truncate inline-block",children:e})},{title:"产品系统ID",dataIndex:"uuid",width:"20rem",render:e=>(0,n.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-content":e,className:"text-lg w-[13rem] font-normal leading-[27px]",children:(0,m.lS)(e,8,8)})},{title:"变更人",dataIndex:"name",width:"12.5rem",render:(e,t)=>(0,n.jsx)("span",{className:"w-[13rem] text-lg truncate inline-block font-normal leading-[27px]",children:t.updateUser.name})},{title:"变更时间",dataIndex:"updateTime",width:"12.5rem",render:e=>(0,n.jsx)("div",{className:"text-lg  w-[13rem]  font-normal leading-[27px] break-keep whitespace-nowrap",children:e})},{title:"版本",dataIndex:"version",width:"9.375rem",render:e=>(0,n.jsx)("span",{className:"text-lg  font-normal leading-[27px]",children:e})},{title:"",width:"20rem",render:(e,t)=>(0,n.jsx)("div",{className:"flex justify-between flex-1 ml-10 text-green-2 break-keep",children:(0,n.jsx)("div",{className:"flex items-center font-normal justify-center cursor-pointer text-lg leading-[27px]",onClick:()=>b(t),children:"编辑"})})}],[]),ed=(0,d.useMemo)(()=>[{title:"实景输入项",dataIndex:"context",width:"20%"},{title:"过程名称",dataIndex:"parameter",width:"30%"},{title:"参考值",dataIndex:"amount",width:"20%"},{title:"不确定性",dataIndex:"uncertainty",emptyText:"-",width:"30%"}],[]),ec=async e=>{let t="更改状态";N({title:t,loading:!0}),await (0,x.pF)(f.id,e),B(X+1),N({title:t,loading:!1,resultText:"操作成功"}),v(null)};(0,d.useMemo)(()=>!!L&&!!Z&&A>-1,[L,Z,A]),(0,d.useMemo)(()=>!!_&&!!z,[_,z]),(0,d.useCallback)(e=>{I(e.target.value)},[]);let eu=()=>{window.scrollTo({top:0})};return(0,n.jsxs)(o.m,{isNew:!0,className:"flex flex-col justify-between flex-1 pb-12 text-black ",children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,n.jsx)("span",{children:"我的产品系统"}),(0,n.jsx)(a.z,{onClick:()=>k(!0),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建产品系统"})]}),(0,n.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,n.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,n.jsx)("div",{className:"min-h-[20.25rem] text-base leading-[1.625rem] min-w-[68.25rem]",children:(0,n.jsx)(r.i,{loading:ea,columns:eo,columnsHeight:"h-[3.125rem]",mouseHoverKey:"id",data:(null==G?void 0:G.records)||[],className:"",headerClassName:{background:"#fff",fontWeight:"700",fontSize:"18px",lineHeight:"27px"}})})})})]}),(0,n.jsx)(i.t,{onChange:e=>{S(e),eu()},className:"my-8",total:(null==G?void 0:G.total)||0,pgSize:10,pgNum:C}),null!==f&&(0,n.jsx)(s.u_,{title:"更改状态",onClose:()=>v(null),children:(0,n.jsx)("div",{className:"flex",children:(null==w?void 0:w.loading)?(0,n.jsx)(u.g,{}):(0,n.jsxs)("div",{className:"flex flex-1",children:[f.state>-2&&(0,n.jsx)(a.z,{onClick:()=>ec(1===f.state?0:1),className:"flex-1 w-full text-lg text-white rounded-lg bg-green-2 h-11",children:1===f.state?"弃用":"激活"}),-1===f.state&&(0,n.jsx)(a.z,{onClick:()=>ec(-2),className:"flex-1 w-full ml-5 text-lg border-2 rounded-lg border-green-2 bg-green-2/10 text-green-2 hover:bg-green-2/20 h-11",children:"删除"})]})})}),!!p&&(0,n.jsx)(s.u_,{title:p.modelName+"模型中的实景输入项",onClose:()=>j(null),children:(0,n.jsxs)("div",{className:"flex w-[60rem] min-h-[16rem] flex-col pb-2",children:[(0,n.jsx)("ul",{className:"flex mb-1",children:ed.map((e,t)=>(0,n.jsx)("li",{className:"px-3 text-lg font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,n.jsx)("div",{className:"max-h-[15rem] min-h-[5rem] overflow-y-auto",children:(0,n.jsx)(r.i,{size:"big",hiddenHeader:!0,columns:ed,data:p.paramDetail})})]})}),w&&(0,n.jsx)(s.u_,{title:(null==w?void 0:w.title)||"操作",onClose:()=>N(null),children:(0,n.jsx)("div",{className:"pb-2 text-center",children:w.loading?(0,n.jsx)(u.g,{}):(0,n.jsx)("span",{children:w.resultText})})}),y&&(0,n.jsx)(M,{onClose:()=>k(!1),onSuccess:()=>{er(),S(1)}}),g&&(0,n.jsx)(F,{psId:g.id,onClose:()=>b(void 0),onSuccess:()=>er()}),H>-1&&(0,n.jsx)(s.u_,{title:"查看产品",onClose:()=>K(-1),children:(0,n.jsxs)("ul",{className:"text-lg max-w-[32rem]",children:[(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"产品名称 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:null===(e=et[H])||void 0===e?void 0:e.text})]}),(0,n.jsxs)("li",{className:"my-5",children:[(0,n.jsx)("label",{className:"inline-block w-[5.625rem]",children:"产品类型 :"}),(0,n.jsx)("span",{className:"text-gray-6",children:null===(t=et[H])||void 0===t?void 0:t.type})]}),(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"描述 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:(null===(l=et[H])||void 0===l?void 0:l.desc)?null===(h=et[H])||void 0===h?void 0:h.desc:"-"})]})]})})]})}}},function(e){e.O(0,[713,769,7307,6574,6740,5886,2351,1340,9774,2888,179],function(){return e(e.s=9069)}),_N_E=e.O()}]);