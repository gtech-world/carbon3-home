(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9075],{6867:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/verificationManagement",function(){return l(7537)}])},7390:function(e,t,l){"use strict";l.d(t,{Ph:function(){return x},dW:function(){return u},ub:function(){return m}});var n=l(1527),i=l(765),r=l(4875),a=l.n(r),s=l(959),d=l(7067),c=l(9592),o=l(8723);function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[l,n]=(0,s.useState)(t);return(0,s.useEffect)(()=>{n(t)},[e,t]),{onChange:n,items:e,current:l}}function x(e){let{items:t,current:l,onChange:r,className:u="bg-white text-black px-5 py-3 text-lg rounded-lg w-[31.25rem] mo:w-full mo:text-sm",currentClassName:x="flex justify-between items-center",openClassName:m="max-h-[18rem] bg-white  rounded-lg py-3 "}=e,f=t[l]?t[l].text:"",[h,v]=(0,c.Z)(!1),p=(0,s.useCallback)(e=>{l!==e&&r(e)},[l]),g=(0,i.E)("t-side");return((0,o.Z)(g,()=>h&&v(!1)),0===t.length)?null:(0,n.jsxs)("div",{ref:g,className:a()("relative cursor-pointer",u),onClick:()=>v(),children:[(0,n.jsxs)("div",{className:x,children:[(0,n.jsx)("span",{className:"truncate",children:f}),h?(0,n.jsx)(d.pzk,{}):(0,n.jsx)(d._i7,{})]}),h&&(0,n.jsx)("div",{className:a()("absolute z-[100] left-0 w-full overflow-x-hidden overflow-y-auto",m),style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,n.jsx)("div",{className:"",children:t.map((e,t)=>(0,n.jsx)("div",{style:{},className:a()("w-full break-all px-5 py-2 text-sm hover:bg-gray-16",{"text-green-2":t===l}),onClick:()=>p(t),children:e.text},"select_item_".concat(t)))})})]})}let m=e=>(0,n.jsx)(x,{className:"h-[50px] px-5 items-center bg-stone-50 rounded-lg border border-neutral-200",currentClassName:"h-full flex justify-between items-center",...e})},6020:function(e,t,l){"use strict";l.d(t,{H4:function(){return s},Kv:function(){return a},Tz:function(){return c},We:function(){return d}});var n=l(2699),i=l.n(n),r=l(1256);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,r.ZP)("/api/product-system/".concat(e,"/detail"),{refreshInterval:t})}function s(e){return(0,r.ZP)(i().isNil(e)?null:"/api/verifyRecord/".concat(e,"/detail"))}function d(e){return(0,r.ZP)(e?"/api/inventory/all":null)}function c(e){return(0,r.ZP)(e?"/api/verifyRecord/verifiers":null)}},7537:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return _}});var n=l(1527),i=l(1600),r=l(959),a=l(9346),s=l(9869),d=l(1191),c=l(834),o=l(5858),u=l(9049),x=l(7390),m=l(6020),f=l(6699),h=l(2699),v=l.n(h),p=l(9701),g=l(8947);let j=e=>(0,n.jsxs)("div",{className:"w-full flex flex-col gap-2.5",children:[(0,n.jsxs)("span",{className:"font-normal leading-6 text-[16px]",children:[e.title,"："]}),e.children]}),N=e=>(0,n.jsx)("div",{className:"font-normal leading-[21.79px] text-[16px] text-gray-9",children:e.value});var w=e=>{var t,l,i,a,s,h,w;let{closeModal:b,recordId:y,type:k="new"}=e,F=(0,r.useRef)(null),{userData:C}=(0,c.oR)(),{isLoading:I,data:_}=(0,m.H4)(y),{isLoading:S,data:L}=(0,m.We)("new"===k||"editor"===k),{isLoading:z,data:U}=(0,m.Tz)("new"===k||"editor"===k),R=I||S||z,D=(0,r.useMemo)(()=>[(L||[]).map(e=>({...e,text:e.loadName})),v().findIndex(L,e=>e.loadNumber===(null==_?void 0:_.loadNumber))],[L,_]),E=(0,x.dW)(...D),P=(0,r.useMemo)(()=>[(U||[]).map(e=>({...e,text:e.name})),v().findIndex(U,e=>{var t;return e.id===(null==_?void 0:null===(t=_.verifyUser)||void 0===t?void 0:t.id)})],[U,_]),M=(0,x.dW)(...P),[T,Z]=(0,g.Z)({verifyState:!0}),W=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return t=>{let l=t,n=()=>{if(0===l.length)return;let e=l[0];return l=v().drop(l),{file:e,index:t.length-l.length-1}},i=v().min([e,l.length]),r=v().range(t.length),a=async()=>{for(;;){let e=n();if(!e)return;{let{file:t,index:l}=e,n=await (0,f.qM)(t);r[l]=n}}};return Promise.all(v().range(i).map(()=>a())).then(()=>r)}}(),H=!T.files||0===T.files.length||T.files.length>20||v().findIndex(T.files,e=>e.size>=2147483648||e.name.length>=128)>=0,A=!L||!U||!T.name||E.current<0||M.current<0||H,[O,K]=(0,r.useState)(!1),X=!_||!L||!U||(T.name||_.name)===_.name&&(T.desc||_.description)===_.description&&(null===(t=L[E.current])||void 0===t?void 0:t.loadNumber)===_.loadNumber&&(null===(l=U[M.current])||void 0===l?void 0:l.id)===_.verifyUserId&&H,q=!_||H,B={directory:"",webkitdirectory:""},Q="w-full shrink-0 px-5 border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg",G="verify"===k,J=(0,r.useMemo)(()=>{var e;if(H||!T.files)return"验证文件";let t=(null===(e=T.files.item(0))||void 0===e?void 0:e.webkitRelativePath.split("/")[0])||"验证文件";return(0,p.lS)(t,10,10)},[T.files,H]);return(0,n.jsx)(r.Fragment,{children:(0,n.jsxs)(u.u_,{className:"rounded-lg",containerClassName:"mx-5 max-w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",title:"new"===k?"新建验证记录":"编辑验证记录",onClose:b,children:[(0,n.jsxs)("div",{className:"flex flex-col py-[1px] gap-5 px-5 w-[640px] min-h-[6.25rem] max-h-mc overflow-y-auto",children:[R&&(0,n.jsx)(o.g,{}),!R&&(0,n.jsx)(n.Fragment,{children:G?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,{title:"验证记录",children:(0,n.jsx)(N,{value:null==_?void 0:_.name})}),(0,n.jsx)(j,{title:"验证记录ID",children:(0,n.jsx)(N,{value:null==_?void 0:_.id})}),(0,n.jsx)(j,{title:"发起人",children:(0,n.jsx)(N,{value:null==_?void 0:null===(i=_.createUser)||void 0===i?void 0:i.name})}),(0,n.jsx)(j,{title:"组织机构",children:(0,n.jsx)(N,{value:null==_?void 0:null===(a=_.organization)||void 0===a?void 0:a.name})}),(0,n.jsx)(j,{title:"描述",children:(0,n.jsx)(N,{value:null==_?void 0:_.description})}),(0,n.jsx)(j,{title:"碳足迹批次",children:(0,n.jsx)(N,{value:null==_?void 0:null===(s=_.inventory)||void 0===s?void 0:s.loadName})}),(0,n.jsx)(j,{title:"碳足迹批次ID",children:(0,n.jsx)(N,{value:null==_?void 0:_.loadNumber})}),(0,n.jsx)(j,{title:"验证人",children:(0,n.jsx)(N,{value:null==_?void 0:null===(h=_.verifyUser)||void 0===h?void 0:h.name})}),(0,n.jsx)(j,{title:"验证文档",children:(0,n.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,n.jsx)("input",{...B,ref:F,type:"file",hidden:!0,onChange:e=>Z({files:e.target.files})}),(0,n.jsx)("img",{src:"/vector_icon.svg"}),(0,n.jsx)(N,{value:J}),(0,n.jsx)("div",{onClick:e=>{var t;return null===(t=F.current)||void 0===t?void 0:t.click()},className:" flex cursor-pointer rounded-[4px] leading-4 text-[16px] bg-[#F1F1F1] w-[100px] h-[24px]  text-center items-center justify-center ",children:"选择文件夹"})]})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,{title:"验证记录",children:(0,n.jsx)("input",{value:T.name||(null==_?void 0:_.name),onChange:e=>Z({name:e.target.value}),maxLength:30,className:Q})}),(0,n.jsx)(j,{title:"碳足迹批次",children:(0,n.jsx)(x.ub,{...E})}),(0,n.jsx)(j,{title:"描述",children:(0,n.jsx)("input",{value:T.desc||(null==_?void 0:_.description),onChange:e=>Z({desc:e.target.value}),maxLength:100,className:Q})}),(0,n.jsx)(j,{title:"选择验证人",children:(0,n.jsx)(x.ub,{...M})}),(0,n.jsx)(j,{title:"发起人",children:(0,n.jsx)(N,{value:null==C?void 0:C.name})}),(0,n.jsx)(j,{title:"组织机构",children:(0,n.jsx)(N,{value:null==C?void 0:null===(w=C.organization)||void 0===w?void 0:w.name})}),(0,n.jsx)(j,{title:"附件",children:(0,n.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,n.jsx)("input",{...B,ref:F,type:"file",hidden:!0,onChange:e=>Z({files:e.target.files})}),(0,n.jsx)("img",{src:"/vector_icon.svg"}),(0,n.jsx)(N,{value:J}),(0,n.jsx)("div",{onClick:e=>{var t;return null===(t=F.current)||void 0===t?void 0:t.click()},className:" flex cursor-pointer rounded-[4px] leading-4 text-[16px] bg-[#F1F1F1] w-[100px] h-[24px]  text-center items-center justify-center ",children:"选择文件夹"})]})})]})})]}),!R&&(0,n.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5 w-full px-5",children:["new"===k&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:()=>b(!1),children:"取消"}),(0,n.jsx)(d.u,{busy:O,disabled:A,defStyle:"btn-primary",className:"flex-1",onClick:()=>{A||(K(!0),W(T.files).then(e=>(0,f._Q)({name:T.name,loadNumber:L[E.current].loadNumber,description:T.desc||"",fileList:e,verifyUserId:U[M.current].id}).then(()=>b(!0)).catch(console.error).finally(()=>{K(!1)})))},children:"确定"})]}),"editor"===k&&(0,n.jsx)(d.u,{busy:O,disabled:X,className:"flex-1",onClick:()=>{X||(K(!0),(T.files?W(T.files).then(e=>(0,f.u_)(_.id,{name:T.name||_.name,loadNumber:L[E.current].loadNumber,description:T.desc||_.description,fileList:e,verifyUserId:U[M.current].id})):(0,f.u_)(_.id,{name:T.name,loadNumber:L[E.current].loadNumber,description:T.desc,verifyUserId:U[M.current].id})).then(()=>b(!0)).catch(console.error).finally(()=>{K(!1)}))},children:"提交更新"}),"verify"===k&&(0,n.jsx)(d.u,{busy:O,disabled:q,className:"flex-1",onClick:()=>{!q&&T.files&&(K(!0),W(T.files).then(e=>(0,f.A6)(_.id,e,!0)).then(()=>b(!0)).catch(console.error).finally(()=>{K(!1)}))},children:"提交验证"})]})]})})},b=l(905),y=l.n(b),k=e=>{let{closeModal:t,fileList:l}=e,[i,a]=(0,r.useState)(!1),s=(0,c.h3)(),d=async()=>{a(!0);try{let e=new(y()),t="";l.forEach(l=>{t=l.fileName.split("/")[0],e.file(l.fileName,l.downloadUrl)});let n=await e.generateAsync({type:"blob"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download="".concat(t,".zip"),i.click(),URL.revokeObjectURL(i.href)}catch(e){s("文件下载出错！")}finally{a(!1)}};return(0,n.jsx)(r.Fragment,{children:(0,n.jsx)(u.u_,{onClose:t,title:"查看文件夹",children:(0,n.jsxs)("div",{className:"px-5",children:[l.map((e,t)=>{let l=e.fileName.split("/");return(0,n.jsx)("div",{id:"view",className:"w-[640px] h-[34px] flex items-center ",children:(0,n.jsx)("span",{className:"ml-[10px] leading-5 text-[16px] font-normal",children:l[l.length-1]})},"file_".concat(t))}),(0,n.jsx)("button",{disabled:i,className:"bg-[#29953A] w-full h-[50px] rounded-lg text-[#FFFFFF] mt-5",onClick:d,children:i?(0,n.jsx)(o.g,{}):"下载"})]})})})},F=l(8422),C=l(58);async function I(e){var t;let l=await F.default.get((t="/api/verifyRecord/list/?pageNum=".concat(e,"&pageSize=10"),"".concat(C.Sg).concat(t)),function(){let e=(0,c.is)();return e?{headers:{Authorization:"Bearer ".concat(e.loginToken)}}:{}}());return function(e){var t;let l=e.data;if(!l||1e5!==l.code)throw l.message;return null===(t=e.data)||void 0===t?void 0:t.data}(l)}var _=function(){let{userData:e}=(0,c.oR)(),[t,l]=(0,r.useState)(1),[o,u]=(0,r.useState)({}),[x,m]=(0,r.useState)(!1),[f,h]=(0,r.useState)(!1),p=(0,r.useRef)([]),g=(0,r.useRef)(),j=e=>{p.current=null==e?void 0:e.attachmentFileList,h(!0)},N=(0,r.useCallback)(t=>{m(!0),g.current={type:v().isEmpty(t)?"new":(null==e?void 0:e.role)==="verify"?"verify":"editor",recordId:t.id}},[e]),b=(0,r.useMemo)(()=>[{title:"验证记录",dataIndex:"name",width:"10rem",render:e=>(0,n.jsx)("span",{className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:e})},{title:"验证记录ID",dataIndex:"id",width:"6rem",render:(e,t)=>(0,n.jsx)("div",{className:"flex  text-lg leading-[27px]  w-[8rem]",children:(0,n.jsx)("span",{className:"cursor-pointer ",children:e})})},{title:"发起人",dataIndex:"loadNumber",width:"8rem",render:(e,t)=>(0,n.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:" text-lg leading-[27px] w-[13rem]  truncate inline-block",children:t.createUser.name})},{title:"组织机构",width:"2rem",dataIndex:"productName",render:(e,t)=>(0,n.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:t.organization.name})},{title:"碳足迹批次",dataIndex:"loadName",width:"10rem",render:(e,t)=>(0,n.jsx)("span",{className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:t.inventory.loadName})},{title:"碳足迹批次ID",dataIndex:"loadNumber",width:"10rem",render:e=>(0,n.jsx)("span",{className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:e})},{title:"附件",dataIndex:"productDescription",width:"18.75rem",render:(e,t)=>(0,n.jsxs)("div",{onClick:()=>j(t),className:"w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded",children:[(0,n.jsx)("img",{src:"/vector_icon.svg"}),(0,n.jsx)("div",{className:"ml-2 ",children:"验证文件"})]})},{title:"最后编辑",dataIndex:"updateTime",width:"14rem",render:e=>(0,n.jsx)("span",{className:" text-lg leading-[27px] w-[14rem] ",children:e})},{title:"验证人",dataIndex:"name",width:"18.625rem",render:(e,t)=>(0,n.jsx)("span",{className:"max-w-[11rem] text-lg leading-[27px]  truncate inline-block",children:t.verifyUser.name})},{title:"验证文档",dataIndex:"verifyFileList",width:"8.125rem",render:(e,t)=>t.verifyFileList.length?(0,n.jsxs)("div",{onClick:()=>j(t),className:"w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded",children:[(0,n.jsx)("img",{src:"/vector_icon.svg"}),(0,n.jsx)("div",{className:"ml-2 ",children:"验证文件"})]}):null},{title:"验证状态",dataIndex:"state",width:"8.125rem",render:e=>(0,n.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:e?"已验证":""})},{title:"验证时间",dataIndex:"proofTime",width:"8.125rem",render:e=>(0,n.jsx)("span",{className:"text-lg leading-[27px] w-[13rem] ",children:e})},{title:"",width:"20rem",render:(e,t)=>!t.state&&(0,n.jsx)("div",{className:"flex justify-between flex-1 text-green-2 break-keep",children:(0,n.jsx)("div",{className:"flex items-center font-normal justify-center cursor-pointer text-lg leading-[27px]",onClick:()=>N(t),children:"编辑"})})}],[N]),y=async()=>{try{let e=await I(t);u(e)}catch(e){console.log("eeee",e)}};return(0,r.useEffect)(()=>{y()},[t]),(0,n.jsxs)(i.m,{isNew:!0,className:"flex flex-col justify-between flex-1 text-black ",children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,n.jsx)("span",{children:"验证管理列表"}),(null==e?void 0:e.role)==="admin"&&(0,n.jsx)(d.z,{onClick:()=>N({}),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建验证记录"})]}),(0,n.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,n.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,n.jsx)("div",{className:"text-base leading-[1.625rem] min-w-[62.25rem]",children:(0,n.jsx)(a.i,{columns:b,columnsHeight:"h-[3.125rem] ",mouseHoverKey:"id",data:(null==o?void 0:o.records)||[],className:"",headerClassName:{background:"#fff",fontWeight:"700",fontSize:"18px",lineHeight:"27px"}})})})})]}),(0,n.jsx)(s.t,{className:"my-8",onChange:e=>{l(e)},total:o.total||0,pgSize:10,pgNum:t}),x&&g.current&&(0,n.jsx)(w,{type:g.current.type,recordId:g.current.recordId,closeModal:()=>{y(),m(!1),g.current=void 0}}),f&&(0,n.jsx)(k,{fileList:p.current,closeModal:()=>{h(!1)}})]})}}},function(e){e.O(0,[713,769,7307,6574,6740,5886,4469,2351,1340,9774,2888,179],function(){return e(e.s=6867)}),_N_E=e.O()}]);