(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8200],{9069:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/model",function(){return t(6519)}])},5266:function(e,l,t){"use strict";t.d(l,{E:function(){return i},K:function(){return r}});var n=t(1527),a=t(4875),s=t.n(a);function i(e){let{value:l,bg:t="#dddddd",color:a="#29953A",className:i}=e;return(0,n.jsx)("div",{className:s()(i,"w-full h-[.625rem]"),style:{background:t},children:(0,n.jsx)("div",{style:{width:"".concat(l,"%"),transition:"width 200ms ease",background:a},className:"h-full"})})}function r(e){let{index:l,full:t,bg:a="#dddddd",color:i="#29953A",className:r}=e;return(0,n.jsx)("div",{className:s()(r,"w-full h-[.625rem]"),style:{background:a},children:(0,n.jsx)("div",{style:{marginLeft:t?"0":"".concat(25*l,"%"),width:t?"100%":"25%",background:i},className:"h-full"})})}},6519:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return D}});var n=t(1527),a=t(1191),s=t(9049),i=t(9869),r=t(9346),d=t(1600),o=t(959),c=t(834),u=t(5858),x=t(6699),m=t(9701),h=t(4875),v=t.n(h),f=t(9592),j=t(8723);function p(e){let{items:l,children:t,onClick:a,className:s}=e,[i,r]=(0,f.Z)(!1),d=(0,o.useRef)(null);return((0,j.Z)(d,()=>i&&r(!1)),0===l.length)?null:(0,n.jsxs)("div",{ref:d,className:v()("bg-white text-black px-5 py-3 text-lg rounded-lg relative cursor-pointer",s),onClick:()=>r(),children:[(0,n.jsx)("div",{className:"flex justify-between items-center",children:t}),i&&(0,n.jsx)("div",{className:"max-h-[18rem] absolute left-0 w-full bg-white  rounded-lg py-3 overflow-x-hidden overflow-y-auto",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,n.jsx)("div",{className:"",children:l.map((e,l)=>(0,n.jsx)("div",{className:v()("w-full break-all px-5 py-2 text-sm hover:bg-gray-16"),onClick:()=>a&&a(l),children:e.text},"select_item_".concat(l)))})})]})}var g=t(1256),b=t(3752),w=t(5088);function N(e){var l,t,a;let{ps:i,...r}=e,[d,o]=(0,f.Z)(!1);return(0,n.jsxs)(s.u_,{title:i.name,...r,children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] max-h-[80vh]",children:[(0,n.jsx)(I,{tit:"UID",value:i.uuid||"-"}),(0,n.jsx)(I,{tit:"版本",value:i.version||"-"}),(0,n.jsx)(I,{tit:"描述",value:i.description||"-"}),(0,n.jsx)(I,{tit:"状态",value:(0,n.jsx)(C,{status:i.state})}),(0,n.jsx)(I,{tit:"变更人",value:(null===(l=i.updateUser)||void 0===l?void 0:l.name)||"-"}),(0,n.jsx)(I,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{modelId:null===(t=i.model)||void 0===t?void 0:t.id,isRead:!0})}),(0,n.jsx)(I,{tit:"实景参数列表",value:(0,n.jsx)(S,{action:"查看",onClick:()=>o(!0)})}),(0,n.jsx)(E,{})]}),d&&(0,n.jsx)(w.d,{data:null===(a=i.model)||void 0===a?void 0:a.paramDetail,onClose:()=>o(!1)})]})}var y=t(2699),k=t.n(y);function C(e){let{status:l}=e;return k().isNil(l)?(0,n.jsx)("div",{className:"text-neutral-400 text-base font-normal leading-none",children:"草稿"}):(0,n.jsx)("div",{className:v()("w-min whitespace-nowrap h-6 px-2.5 py-1 bg-opacity-10 rounded justify-start items-center gap-2.5 inline-flex",{"bg-rose-500":1!==l,"bg-green-600":1===l}),children:(0,n.jsx)("div",{className:v()("text-green-600 text-base font-normal leading-none",{"text-rose-500":1!==l,"text-green-600":1===l}),children:1===l?"当前使用":"过去版本"})})}function S(e){let{action:l,onClick:t,to:a}=e;return a?(0,n.jsx)("a",{href:a,className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded text-black text-base font-normal leading-none",children:l}):(0,n.jsx)("div",{className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded justify-start items-center gap-2.5 inline-flex cursor-pointer",onClick:t,children:(0,n.jsx)("div",{className:"text-black text-base font-normal leading-none",children:l})})}function _(e){let{psId:l,modelId:t,isNew:a,isRead:s,file:i,onFileChange:r}=e,d=(0,o.useRef)(null);return(0,n.jsxs)("div",{className:"text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5",children:[(0,n.jsx)("input",{ref:d,type:"file",hidden:!0,accept:".zip",onChange:r}),!s&&(null==i?void 0:i.name),s?(0,n.jsx)(S,{to:"/model?id=".concat(t),action:"在线查看"}):a?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(S,{action:"选择模型",onClick:e=>{var l;return null===(l=d.current)||void 0===l?void 0:l.click()}})}):(0,n.jsxs)(n.Fragment,{children:[!i&&(0,n.jsx)(S,{to:"/model?id=".concat(t),action:"在线查看"}),(0,n.jsx)(S,{action:"更新模型",onClick:e=>{var l;return null===(l=d.current)||void 0===l?void 0:l.click()}})]})]})}function I(e){let l="string"==typeof e.value||"number"==typeof e.value;return(0,n.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,n.jsxs)("div",{className:"text-black text-base font-normal leading-normal",children:[e.tit,": "]}),l?(0,n.jsx)("div",{className:"text-neutral-400 text-base font-normal leading-none",children:e.value}):e.value]})}function z(e){let{defaultValue:l,...t}=e;return(0,n.jsx)("input",{type:"text",className:"w-full px-5 py-4 bg-stone-50 rounded-lg border border-neutral-200 justify-start items-start gap-2.5 inline-flex text-black text-base font-normal leading-none",...t})}function E(){var e,l;let{userData:t}=(0,c.oR)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I,{tit:"组织名称",value:(null==t?void 0:null===(e=t.organization)||void 0===e?void 0:e.name)||"-"}),(0,n.jsx)(I,{tit:"组织编号",value:(null==t?void 0:null===(l=t.organization)||void 0===l?void 0:l.serialNumber)||"-"})]})}function F(e){var l,t,i;let{psId:r,onSuccess:d,...c}=e,{data:m,isLoading:h,error:v}=(0,g.ZP)("/api/product-system/".concat(r,"/detail"),x.k8),[j,y]=(0,o.useState)(""),k=(0,o.useRef)(!0);(0,o.useEffect)(()=>{m&&y(m.description||""),k.current=!1},[m]),(0,o.useEffect)(()=>{v&&c.onClose&&c.onClose()},[v]);let[F,M]=(0,o.useState)(!1),[R,D]=(0,o.useState)(null),[L,U]=(0,o.useState)(0),A=(0,o.useCallback)(e=>{var l;D(null===(l=e.target.files)||void 0===l?void 0:l.item(0))},[]),P=!m||!R&&j===(null==m?void 0:m.description),T=(0,b.R)(()=>{let e;if(m&&!P){if(M(!0),R){let l=new FormData;l.append("file",R),l.append("name",R.name),e=(0,x.av)(l,{onUploadProgress:e=>U(Math.min(100,Math.round(100*(e.rate||0))))}).then(e=>(0,x.bc)({id:m.id,name:m.name,description:j,modelId:e}))}else e=(0,x.bc)({id:m.id,name:m.name,description:j});e.then(()=>{d&&d(),c.onClose&&c.onClose()}).catch(console.error).finally(()=>{U(0),M(!1)})}}),[Z,H]=(0,f.Z)(!1),[K,O]=(0,o.useState)(),X=(0,o.useMemo)(()=>((null==m?void 0:m.historyList)||[]).map(e=>({text:"版本".concat(e.version)})),[m]);return(0,n.jsxs)(s.u_,{title:(null==m?void 0:m.name)||"",...c,children:[h&&!m&&(0,n.jsx)(u.g,{className:"min-h-[100px]"}),m&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5  w-full min-w-[40rem] max-h-[70vh] overflow-y-auto",children:[(0,n.jsx)(I,{tit:"UID",value:m.uuid||"-"}),(0,n.jsx)(I,{tit:"版本",value:(0,n.jsxs)("div",{className:"flex justify-between items-center gap-2.5 px-5 py-4 bg-stone-50 rounded-lg border border-neutral-200",children:[m.version||"-",(0,n.jsx)(p,{items:X,className:"!px-2.5 !py-1 bg-white rounded border border-neutral-200 text-stone-500 text-base font-normal leading-none",onClick:e=>{if(!m.historyList)return;let l=m.historyList[e];O(l)},children:"查看历史版本"})]})}),(0,n.jsx)(I,{tit:"描述",value:(0,n.jsx)(z,{value:j,onChange:e=>y(e.target.value)})}),(0,n.jsx)(I,{tit:"状态",value:(0,n.jsx)(C,{status:m.state})}),(0,n.jsx)(I,{tit:"变更人",value:(null===(l=m.updateUser)||void 0===l?void 0:l.name)||"-"}),(0,n.jsx)(I,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{modelId:null===(t=m.model)||void 0===t?void 0:t.id,file:R,onFileChange:A})}),(0,n.jsx)(I,{tit:"实景参数列表",value:(0,n.jsx)(S,{action:"查看",onClick:()=>H(!0)})}),(0,n.jsx)(E,{})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-2.5 mt-5",children:[(0,n.jsx)(a.u,{busy:F,disabled:P,onClick:T,children:"提交更新"}),(0,n.jsx)("div",{className:"text-black text-sm font-normal",children:"* 点击提交更新按钮后，当前的产品系统版本将自动更新。原先版本的信息可以在历史版本中查询。"})]})]}),Z&&(0,n.jsx)(w.d,{data:null==m?void 0:null===(i=m.model)||void 0===i?void 0:i.paramDetail,onClose:()=>H(!1)}),K&&(0,n.jsx)(N,{onClose:()=>O(void 0),ps:K})]})}var M=t(5266);function R(e){let{onSuccess:l,onClose:t,...i}=e,[r,d]=(0,o.useState)(""),[c,u]=(0,o.useState)(""),[m,h]=(0,o.useState)(!1),[v,f]=(0,o.useState)(0),[j,p]=(0,o.useState)(null),g=!j||!r||!c,w=(0,o.useCallback)(e=>{var l;p(null===(l=e.target.files)||void 0===l?void 0:l.item(0))},[]),N=(0,o.useRef)(),y=(0,o.useCallback)(()=>{var e;null===(e=N.current)||void 0===e||e.abort(),t&&t()},[t]),k=(0,b.R)(()=>{if(g)return;h(!0);let e=new FormData;e.append("name",j.name),e.append("file",j),N.current=new AbortController,(0,x.av)(e,{signal:N.current.signal,onUploadProgress:e=>{f(Math.min(Math.round(100*(e.rate||0)),100))}}).then(e=>(0,x.bc)({name:r,description:c,modelId:e})).then(()=>{l&&l(),y()}).catch(()=>{}).finally(()=>{h(!1),f(0)})});return(0,n.jsx)(s.u_,{...i,title:"新建产品系统",outClose:!1,onClose:y,children:(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] max-h-[80vh]",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5 w-full flex-1 h-max overflow-y-auto",children:[(0,n.jsx)(I,{tit:"产品系统名称",value:(0,n.jsx)(z,{value:r,onChange:e=>d(e.target.value)})}),(0,n.jsx)(I,{tit:"描述",value:(0,n.jsx)(z,{value:c,onChange:e=>u(e.target.value)})}),(0,n.jsx)(I,{tit:"状态",value:(0,n.jsx)(C,{})}),(0,n.jsx)(I,{tit:"产品系统LCA文件",value:(0,n.jsx)(_,{isNew:!0,file:j,onFileChange:w})}),(0,n.jsx)(E,{})]}),(0,n.jsx)("div",{className:"flex gap-5 w-full",children:m?(0,n.jsx)(M.E,{value:v,className:"rounded-lg my-3 overflow-hidden"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:y,children:"取消"}),(0,n.jsx)(a.u,{className:"flex-1",onClick:k,disabled:g,children:"确定"})]})})]})})}var D=function(){var e,l,t,h;let[v,f]=(0,o.useState)(null),[j,p]=(0,o.useState)(null),[g,b]=(0,o.useState)(),[w,N]=(0,o.useState)(null),[y,k]=(0,o.useState)(!1),[C,S]=(0,o.useState)(1),[_,I]=(0,o.useState)(""),[z,E]=(0,o.useState)(null),[M,D]=(0,o.useState)(""),[L,U]=(0,o.useState)(null),[A,P]=(0,o.useState)(null),[T,Z]=(0,o.useState)(""),[H,K]=(0,o.useState)(-1),[O,X]=(0,o.useState)(-1),[q,B]=(0,o.useState)(0),[G,J]=(0,o.useState)(0),[Q,V]=(0,o.useState)({}),[W,Y]=(0,o.useState)(!1),[$,ee]=(0,o.useState)(0),[el,et]=(0,o.useState)([]),[en,ea]=(0,o.useState)([]);(0,o.useRef)(null);let{user:es}=(0,c.aF)(),ei=async()=>{let e=await (0,x.Ps)();et(e?function e(l,t){return l.filter(e=>void 0===t?0===e.parentId:e.parentId===t).map(t=>(t.children=e(l,t.id),t))}(null==e?void 0:e.records,0):[])},er=async()=>{try{Y(!0);let e=await (0,x.vz)(C);V(e)}catch(e){console.log("eee",e)}finally{Y(!1)}};(0,o.useEffect)(()=>{er()},[C]),(0,o.useEffect)(()=>{ei()},[]);let ed=(0,o.useMemo)(()=>[{title:"产品系统",dataIndex:"name",width:"23.75rem",render:e=>(0,n.jsx)("span",{className:"max-w-[23.75rem] truncate inline-block",children:e})},{title:"产品系统ID",dataIndex:"uuid",width:"12.5rem",render:e=>(0,n.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-content":e,children:(0,m.lS)(e,8,8)})},{title:"变更人",dataIndex:"name",width:"12.5rem",render:(e,l)=>l.updateUser.name},{title:"变更时间",dataIndex:"updateTime",width:"12.5rem",render:e=>(0,n.jsx)("div",{className:"break-keep whitespace-nowrap",children:e})},{title:"版本",dataIndex:"version",width:"9.375rem",render:e=>e},{title:"",width:"20rem",render:(e,l)=>(0,n.jsx)("div",{className:"flex justify-between flex-1 text-green-2 break-keep",children:(0,n.jsx)("div",{className:"flex items-center justify-center cursor-pointer",onClick:()=>b(l),children:"编辑"})})}],[]),eo=(0,o.useMemo)(()=>[{title:"实景输入项",dataIndex:"context",width:"20%"},{title:"过程名称",dataIndex:"parameter",width:"30%"},{title:"参考值",dataIndex:"amount",width:"20%"},{title:"不确定性",dataIndex:"uncertainty",emptyText:"-",width:"30%"}],[]),ec=async e=>{let l="更改状态";N({title:l,loading:!0}),await (0,x.pF)(v.id,e),B(q+1),N({title:l,loading:!1,resultText:"操作成功"}),f(null)};return(0,o.useMemo)(()=>!!A&&!!T&&L>-1,[A,T,L]),(0,o.useMemo)(()=>!!_&&!!z,[_,z]),(0,o.useCallback)(e=>{I(e.target.value)},[]),(0,n.jsxs)(d.m,{isNew:!0,className:"flex flex-col justify-between flex-1 pb-12 text-black ",children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,n.jsx)("span",{children:"我的产品系统"}),(0,n.jsx)(a.z,{onClick:()=>k(!0),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建产品系统"})]}),(0,n.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,n.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,n.jsx)("div",{className:"min-h-[20.25rem] text-base leading-[1.625rem] min-w-[68.25rem]",children:(0,n.jsx)(r.i,{columns:ed,columnsHeight:"h-[3.125rem]",loading:W,mouseHoverKey:"id",data:(null==Q?void 0:Q.records)||[],className:"",headerClassName:{background:"#fff"}})})})})]}),(0,n.jsx)(i.t,{onChange:e=>{S(e)},className:"my-8",total:(null==Q?void 0:Q.total)||0,pgSize:10,pgNum:C}),null!==v&&(0,n.jsx)(s.u_,{title:"更改状态",onClose:()=>f(null),children:(0,n.jsx)("div",{className:"flex",children:(null==w?void 0:w.loading)?(0,n.jsx)(u.g,{}):(0,n.jsxs)("div",{className:"flex flex-1",children:[v.state>-2&&(0,n.jsx)(a.z,{onClick:()=>ec(1===v.state?0:1),className:"flex-1 w-full text-lg text-white rounded-lg bg-green-2 h-11",children:1===v.state?"弃用":"激活"}),-1===v.state&&(0,n.jsx)(a.z,{onClick:()=>ec(-2),className:"flex-1 w-full ml-5 text-lg border-2 rounded-lg border-green-2 bg-green-2/10 text-green-2 hover:bg-green-2/20 h-11",children:"删除"})]})})}),!!j&&(0,n.jsx)(s.u_,{title:j.modelName+"模型中的实景输入项",onClose:()=>p(null),children:(0,n.jsxs)("div",{className:"flex w-[60rem] min-h-[16rem] flex-col pb-2",children:[(0,n.jsx)("ul",{className:"flex mb-1",children:eo.map((e,l)=>(0,n.jsx)("li",{className:"px-3 text-lg font-bold",style:{width:e.width},children:e.title},"columns".concat(l)))}),(0,n.jsx)("div",{className:"max-h-[15rem] min-h-[5rem] overflow-y-auto",children:(0,n.jsx)(r.i,{size:"big",hiddenHeader:!0,columns:eo,data:j.paramDetail})})]})}),w&&(0,n.jsx)(s.u_,{title:(null==w?void 0:w.title)||"操作",onClose:()=>N(null),children:(0,n.jsx)("div",{className:"pb-2 text-center",children:w.loading?(0,n.jsx)(u.g,{}):(0,n.jsx)("span",{children:w.resultText})})}),y&&(0,n.jsx)(R,{onClose:()=>k(!1),onSuccess:()=>er()}),g&&(0,n.jsx)(F,{psId:g.id,onClose:()=>b(void 0),onSuccess:()=>er()}),H>-1&&(0,n.jsx)(s.u_,{title:"查看产品",onClose:()=>K(-1),children:(0,n.jsxs)("ul",{className:"text-lg max-w-[32rem]",children:[(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"产品名称 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:null===(e=en[H])||void 0===e?void 0:e.text})]}),(0,n.jsxs)("li",{className:"my-5",children:[(0,n.jsx)("label",{className:"inline-block w-[5.625rem]",children:"产品类型 :"}),(0,n.jsx)("span",{className:"text-gray-6",children:null===(l=en[H])||void 0===l?void 0:l.type})]}),(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"描述 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:(null===(t=en[H])||void 0===t?void 0:t.desc)?null===(h=en[H])||void 0===h?void 0:h.desc:"-"})]})]})})]})}}},function(e){e.O(0,[713,769,7307,6574,6740,5886,2351,4393,9774,2888,179],function(){return e(e.s=9069)}),_N_E=e.O()}]);