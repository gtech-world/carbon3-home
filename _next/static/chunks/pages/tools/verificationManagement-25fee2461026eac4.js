(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9075],{6867:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/verificationManagement",function(){return n(7537)}])},7390:function(e,t,n){"use strict";n.d(t,{Ph:function(){return u},dW:function(){return x},ub:function(){return m}});var l=n(1527),i=n(765),r=n(4875),a=n.n(r),s=n(959),d=n(7067),c=n(9592),o=n(8723);function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[n,l]=(0,s.useState)(t);return(0,s.useEffect)(()=>{l(t)},[e,t]),{onChange:l,items:e,current:n}}function u(e){let{items:t,current:n,onChange:r,className:x="bg-white text-black px-5 py-3 text-lg rounded-lg w-[31.25rem] mo:w-full mo:text-sm",currentClassName:u="flex justify-between items-center"}=e,m=t[n]?t[n].text:"",[f,h]=(0,c.Z)(!1),v=(0,s.useCallback)(e=>{n!==e&&r(e)},[n]),p=(0,i.E)("t-side");return((0,o.Z)(p,()=>f&&h(!1)),0===t.length)?null:(0,l.jsxs)("div",{ref:p,className:a()("relative cursor-pointer",x),onClick:()=>h(),children:[(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("span",{className:"truncate",children:m}),f?(0,l.jsx)(d.pzk,{}):(0,l.jsx)(d._i7,{})]}),f&&(0,l.jsx)("div",{className:"max-h-[18rem] absolute left-0 w-full bg-white  rounded-lg py-3 overflow-x-hidden overflow-y-auto",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,l.jsx)("div",{className:"",children:t.map((e,t)=>(0,l.jsx)("div",{style:{},className:a()("w-full break-all px-5 py-2 text-sm hover:bg-gray-16",{"text-green-2":t===n}),onClick:()=>v(t),children:e.text},"select_item_".concat(t)))})})]})}let m=e=>(0,l.jsx)(u,{className:"h-[50px] px-5 items-center bg-stone-50 rounded-lg border border-neutral-200",currentClassName:"h-full flex justify-between items-center",...e})},6020:function(e,t,n){"use strict";n.d(t,{H4:function(){return s},Kv:function(){return a},Tz:function(){return c},We:function(){return d}});var l=n(2699),i=n.n(l),r=n(1256);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,r.ZP)("/api/product-system/".concat(e,"/detail"),{refreshInterval:t})}function s(e){return(0,r.ZP)(i().isNil(e)?null:"/api/verifyRecord/".concat(e,"/detail"))}function d(e){return(0,r.ZP)(e?"/api/inventory/all":null)}function c(e){return(0,r.ZP)(e?"/api/verifyRecord/verifiers":null)}},7537:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var l=n(1527),i=n(1600),r=n(959),a=n(9346),s=n(9869),d=n(1191),c=n(834),o=n(5858),x=n(9049),u=n(7390),m=n(6020),f=n(6699),h=n(2699),v=n.n(h),p=n(8947);let g=e=>(0,l.jsxs)("div",{className:"w-full flex flex-col gap-2.5",children:[(0,l.jsxs)("span",{className:"font-normal leading-6 text-[16px]",children:[e.title,"："]}),e.children]}),j=e=>(0,l.jsx)("div",{className:"font-normal leading-[21.79px] text-[16px] text-gray-6",children:e.value});var N=e=>{var t,n,i,a,s,h,N,w;let{closeModal:b,recordId:y,type:k="new"}=e,F=(0,r.useRef)(null),{userData:C}=(0,c.oR)(),{isLoading:I,data:_}=(0,m.H4)(y),{isLoading:L,data:S}=(0,m.We)("new"===k||"editor"===k),{isLoading:U,data:z}=(0,m.Tz)("new"===k||"editor"===k),R=I||L||U,D=(0,r.useMemo)(()=>[(S||[]).map(e=>({...e,text:e.loadName})),v().findIndex(S,e=>e.loadNumber===(null==_?void 0:_.loadNumber))],[S,_]),E=(0,u.dW)(...D),P=(0,r.useMemo)(()=>[(z||[]).map(e=>({...e,text:e.name})),v().findIndex(z,e=>{var t;return e.id===(null==_?void 0:null===(t=_.verifyUser)||void 0===t?void 0:t.id)})],[z,_]),M=(0,u.dW)(...P),[T,Z]=(0,p.Z)({verifyState:!0}),W=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return t=>{let n=t,l=()=>{if(0===n.length)return;let e=n[0];return n=v().drop(n),{file:e,index:t.length-n.length-1}},i=v().min([e,n.length]),r=v().range(t.length),a=async()=>{for(;;){let e=l();if(!e)return;{let{file:t,index:n}=e,l=await (0,f.qM)(t);r[n]=l}}};return Promise.all(v().range(i).map(()=>a())).then(()=>r)}}(),H=!S||!z||!T.name||!T.desc||E.current<0||M.current<0||!T.files||T.files.length>20||v().findIndex(T.files,e=>e.size>=2147483648||e.name.length>=128)>=0,[A,O]=(0,r.useState)(!1),K=!_||!S||!z||(T.name||_.name)===_.name&&(T.desc||_.description)===_.description&&(null===(t=S[E.current])||void 0===t?void 0:t.loadNumber)===_.loadNumber&&(null===(n=z[M.current])||void 0===n?void 0:n.id)===_.verifyUserId&&(!T.files||0===T.files.length),X=!_||!T.files||0===T.files.length,q={directory:"",webkitdirectory:""},B="w-full shrink-0 px-5 border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg",Q="verify"===k;return(0,l.jsx)(r.Fragment,{children:(0,l.jsxs)(x.u_,{className:"rounded-lg",containerClassName:"mx-5 max-w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",title:"new"===k?"新建验证记录":"编辑验证记录",onClose:b,children:[(0,l.jsxs)("div",{className:"flex flex-col py-[1px] gap-5 px-5 w-[640px] min-h-[6.25rem] max-h-mc overflow-y-auto",children:[R&&(0,l.jsx)(o.g,{}),!R&&(0,l.jsx)(l.Fragment,{children:Q?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{title:"验证记录",children:(0,l.jsx)(j,{value:null==_?void 0:_.name})}),(0,l.jsx)(g,{title:"验证记录ID",children:(0,l.jsx)(j,{value:null==_?void 0:_.id})}),(0,l.jsx)(g,{title:"发起人",children:(0,l.jsx)(j,{value:null==_?void 0:null===(i=_.createUser)||void 0===i?void 0:i.name})}),(0,l.jsx)(g,{title:"组织机构",children:(0,l.jsx)(j,{value:null==_?void 0:null===(a=_.organization)||void 0===a?void 0:a.name})}),(0,l.jsx)(g,{title:"描述",children:(0,l.jsx)(j,{value:null==_?void 0:_.description})}),(0,l.jsx)(g,{title:"碳足迹批次",children:(0,l.jsx)(j,{value:null==_?void 0:null===(s=_.inventory)||void 0===s?void 0:s.loadName})}),(0,l.jsx)(g,{title:"碳足迹批次ID",children:(0,l.jsx)(j,{value:null==_?void 0:null===(h=_.inventory)||void 0===h?void 0:h.loadNumber})}),(0,l.jsx)(g,{title:"验证人",children:(0,l.jsx)(j,{value:null==_?void 0:null===(N=_.verifyUser)||void 0===N?void 0:N.name})}),(0,l.jsx)(g,{title:"验证文档",children:(0,l.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,l.jsx)("input",{...q,ref:F,type:"file",hidden:!0,onChange:e=>Z({files:e.target.files})}),(0,l.jsx)("img",{src:"/vector_icon.svg"}),(0,l.jsx)(j,{value:"验证文件"}),(0,l.jsx)("div",{onClick:e=>{var t;return null===(t=F.current)||void 0===t?void 0:t.click()},className:" flex cursor-pointer rounded-[4px] leading-4 text-[16px] bg-[#F1F1F1] w-[100px] h-[24px]  text-center items-center justify-center ",children:"选择文件夹"})]})})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{title:"验证记录",children:(0,l.jsx)("input",{value:T.name||(null==_?void 0:_.name),onChange:e=>Z({name:e.target.value}),maxLength:30,className:B})}),(0,l.jsx)(g,{title:"产品系统",children:(0,l.jsx)(u.ub,{...E})}),(0,l.jsx)(g,{title:"描述",children:(0,l.jsx)("input",{value:T.desc||(null==_?void 0:_.description),onChange:e=>Z({desc:e.target.value}),maxLength:30,className:B})}),(0,l.jsx)(g,{title:"发起人",children:(0,l.jsx)(j,{value:null==C?void 0:C.name})}),(0,l.jsx)(g,{title:"组织机构",children:(0,l.jsx)(j,{value:null==C?void 0:null===(w=C.organization)||void 0===w?void 0:w.name})}),(0,l.jsx)(g,{title:"附件",children:(0,l.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,l.jsx)("input",{...q,ref:F,type:"file",hidden:!0,onChange:e=>Z({files:e.target.files})}),(0,l.jsx)("img",{src:"/vector_icon.svg"}),(0,l.jsx)(j,{value:"验证文件"}),(0,l.jsx)("div",{onClick:e=>{var t;return null===(t=F.current)||void 0===t?void 0:t.click()},className:" flex cursor-pointer rounded-[4px] leading-4 text-[16px] bg-[#F1F1F1] w-[100px] h-[24px]  text-center items-center justify-center ",children:"选择文件夹"})]})}),(0,l.jsx)(g,{title:"选择验证人",children:(0,l.jsx)(u.ub,{...M})})]})})]}),!R&&(0,l.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5 w-full px-5",children:["new"===k&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:()=>b(!1),children:"取消"}),(0,l.jsx)(d.u,{busy:A,disabled:H,defStyle:"btn-primary",className:"flex-1",onClick:()=>{H||(O(!0),W(T.files).then(e=>(0,f._Q)({name:T.name,loadNumber:S[E.current].loadNumber,description:T.desc,fileList:e,verifyUserId:z[M.current].id}).then(()=>b(!0)).catch(console.error).finally(()=>{O(!1)})))},children:"确定"})]}),"editor"===k&&(0,l.jsx)(d.u,{busy:A,disabled:K,className:"flex-1",onClick:()=>{K||(O(!0),(T.files?W(T.files).then(e=>(0,f.u_)(_.id,{name:T.name||_.name,loadNumber:S[E.current].loadNumber,description:T.desc||_.description,fileList:e,verifyUserId:z[M.current].id})):(0,f.u_)(_.id,{name:T.name,loadNumber:S[E.current].loadNumber,description:T.desc,verifyUserId:z[M.current].id})).then(()=>b(!0)).catch(console.error).finally(()=>{O(!1)}))},children:"提交更新"}),"verify"===k&&(0,l.jsx)(d.u,{busy:A,disabled:X,className:"flex-1",onClick:()=>{!X&&T.files&&(O(!0),W(T.files).then(e=>(0,f.A6)(_.id,e,!0)).then(()=>b(!0)).catch(console.error).finally(()=>{O(!1)}))},children:"提交验证"})]})]})})},w=n(905),b=n.n(w),y=e=>{let{closeModal:t,fileList:n}=e,[i,a]=(0,r.useState)(!1),s=(0,c.h3)(),d=async()=>{a(!0);try{let e=new(b()),t="";n.forEach(n=>{t=n.fileName.split("/")[0],e.file(n.fileName,n.downloadUrl)});let l=await e.generateAsync({type:"blob"}),i=document.createElement("a");i.href=URL.createObjectURL(l),i.download="".concat(t,".zip"),i.click(),URL.revokeObjectURL(i.href)}catch(e){s("文件下载出错！")}finally{a(!1)}};return(0,l.jsx)(r.Fragment,{children:(0,l.jsx)(x.u_,{onClose:t,title:"查看文件夹",children:(0,l.jsxs)("div",{className:"px-5",children:[n.map((e,t)=>{let n=e.fileName.split("/");return(0,l.jsx)("div",{id:"view",className:"w-[640px] h-[34px] flex items-center ",children:(0,l.jsx)("span",{className:"ml-[10px] leading-5 text-[16px] font-normal",children:n[n.length-1]})},"file_".concat(t))}),(0,l.jsx)("button",{disabled:i,className:"bg-[#29953A] w-full h-[50px] rounded-lg text-[#FFFFFF] mt-5",onClick:d,children:i?(0,l.jsx)(o.g,{}):"下载"})]})})})},k=n(8422),F=n(58);async function C(e){var t;let n=await k.default.get((t="/api/verifyRecord/list/?pageNum=".concat(e,"&pageSize=10"),"".concat(F.Sg).concat(t)),function(){let e=(0,c.is)();return e?{headers:{Authorization:"Bearer ".concat(e.loginToken)}}:{}}());return function(e){var t;let n=e.data;if(!n||1e5!==n.code)throw n.message;return null===(t=e.data)||void 0===t?void 0:t.data}(n)}var I=function(){let{userData:e}=(0,c.oR)(),[t,n]=(0,r.useState)(1),[o,x]=(0,r.useState)({}),[u,m]=(0,r.useState)(!1),[f,h]=(0,r.useState)(!1),p=(0,r.useRef)([]),g=(0,r.useRef)(),j=e=>{p.current=null==e?void 0:e.attachmentFileList,h(!0)},w=(0,r.useMemo)(()=>[{title:"验证记录",dataIndex:"name",width:"10rem",render:e=>(0,l.jsx)("span",{className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:e})},{title:"验证记录ID",dataIndex:"id",width:"6rem",render:(e,t)=>(0,l.jsx)("div",{className:"flex  text-lg leading-[27px]  w-[8rem]",children:(0,l.jsx)("span",{className:"cursor-pointer ",children:e})})},{title:"发起人",dataIndex:"loadNumber",width:"8rem",render:(e,t)=>(0,l.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:" text-lg leading-[27px] w-[13rem]  truncate inline-block",children:t.createUser.name})},{title:"组织机构",width:"2rem",dataIndex:"productName",render:(e,t)=>(0,l.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:t.organization.name})},{title:"碳足迹批次",dataIndex:"loadName",width:"10rem",render:(e,t)=>(0,l.jsx)("span",{className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:t.inventory.loadName})},{title:"碳足迹批次ID",dataIndex:"loadNumber",width:"10rem",render:e=>(0,l.jsx)("span",{className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:e})},{title:"附件",dataIndex:"productDescription",width:"18.75rem",render:(e,t)=>(0,l.jsxs)("div",{onClick:()=>j(t),className:"w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded",children:[(0,l.jsx)("img",{src:"/vector_icon.svg"}),(0,l.jsx)("div",{className:"ml-2 ",children:"验证文件"})]})},{title:"最后编辑",dataIndex:"updateTime",width:"14rem",render:e=>(0,l.jsx)("span",{className:" text-lg leading-[27px] w-[14rem] ",children:e})},{title:"验证人",dataIndex:"name",width:"18.625rem",render:(e,t)=>(0,l.jsx)("span",{className:"max-w-[11rem] text-lg leading-[27px]  truncate inline-block",children:t.verifyUser.name})},{title:"验证文档",dataIndex:"verifyFileList",width:"8.125rem",render:(e,t)=>t.verifyFileList.length?(0,l.jsxs)("div",{onClick:()=>j(t),className:"w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded",children:[(0,l.jsx)("img",{src:"/vector_icon.svg"}),(0,l.jsx)("div",{className:"ml-2 ",children:"验证文件"})]}):null},{title:"验证状态",dataIndex:"state",width:"8.125rem",render:e=>(0,l.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:e?"已验证":""})},{title:"验证时间",dataIndex:"proofTime",width:"8.125rem",render:e=>(0,l.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:e})},{title:"",width:"20rem",render:(e,t)=>(0,l.jsx)("div",{className:"flex justify-between flex-1 text-green-2 break-keep",children:(0,l.jsx)("div",{className:"flex items-center font-normal justify-center cursor-pointer text-lg leading-[27px]",onClick:()=>k(t),children:"编辑"})})}],[]),b=async()=>{try{let e=await C(t);x(e)}catch(e){console.log("eeee",e)}};(0,r.useEffect)(()=>{b()},[t]);let k=t=>{m(!0),g.current={type:v().isEmpty(t)?"new":(null==e?void 0:e.role)==="verify"?"verify":"editor",recordId:t.id}};return(0,l.jsxs)(i.m,{isNew:!0,className:"flex flex-col justify-between flex-1 text-black ",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,l.jsx)("span",{children:"验证管理列表"}),(null==e?void 0:e.role)==="admin"&&(0,l.jsx)(d.z,{onClick:()=>k({}),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建验证记录"})]}),(0,l.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,l.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,l.jsx)("div",{className:"text-base leading-[1.625rem] min-w-[62.25rem]",children:(0,l.jsx)(a.i,{columns:w,columnsHeight:"h-[3.125rem] ",mouseHoverKey:"id",data:(null==o?void 0:o.records)||[],className:"",headerClassName:{background:"#fff",fontWeight:"700",fontSize:"18px",lineHeight:"27px"}})})})})]}),(0,l.jsx)(s.t,{className:"my-8",onChange:e=>{n(e)},total:o.total||0,pgSize:10,pgNum:t}),u&&g.current&&(0,l.jsx)(N,{type:g.current.type,recordId:g.current.recordId,closeModal:()=>{b(),m(!1),g.current=void 0}}),f&&(0,l.jsx)(y,{fileList:p.current,closeModal:()=>{h(!1)}})]})}}},function(e){e.O(0,[713,769,7307,6574,6740,5886,4469,2351,1340,9774,2888,179],function(){return e(e.s=6867)}),_N_E=e.O()}]);