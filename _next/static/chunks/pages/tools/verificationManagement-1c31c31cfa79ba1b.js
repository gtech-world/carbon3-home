(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9075],{2792:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/verificationManagement",function(){return l(6024)}])},4247:function(e,t,l){"use strict";l.d(t,{Ph:function(){return x},dW:function(){return u},ub:function(){return m}});var n=l(3342),i=l(5361),r=l(8591),a=l.n(r),s=l(9685),d=l(5295),o=l(2239),c=l(367);function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[l,n]=(0,s.useState)(t);return(0,s.useEffect)(()=>{n(t)},[e,t]),{onChange:n,items:e,current:l}}function x(e){let{items:t,current:l,onChange:r,className:u="bg-white text-black px-5 py-3 text-lg rounded-lg w-[31.25rem] mo:w-full mo:text-sm",currentClassName:x="flex justify-between items-center",openClassName:m="max-h-[18rem] bg-white  rounded-lg py-3 "}=e,f=t[l]?t[l].text:"",[h,p]=(0,o.Z)(!1),v=(0,s.useCallback)(e=>{l!==e&&r(e)},[l]),g=(0,i.E)("t-side");return((0,c.Z)(g,()=>h&&p(!1)),0===t.length)?null:(0,n.jsxs)("div",{ref:g,className:a()("relative cursor-pointer",u),onClick:()=>p(),children:[(0,n.jsxs)("div",{className:x,children:[(0,n.jsx)("span",{className:"truncate",children:f}),h?(0,n.jsx)(d.pzk,{}):(0,n.jsx)(d._i7,{})]}),h&&(0,n.jsx)("div",{className:a()("absolute z-[100] left-0 w-full overflow-x-hidden overflow-y-auto",m),style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,n.jsx)("div",{className:"",children:t.map((e,t)=>(0,n.jsx)("div",{style:{},className:a()("w-full break-all px-5 py-2 text-sm hover:bg-gray-16",{"text-green-2":t===l}),onClick:()=>v(t),children:e.text},"select_item_".concat(t)))})})]})}let m=e=>(0,n.jsx)(x,{className:"h-[50px] px-5 items-center bg-stone-50 rounded-lg border border-neutral-200",currentClassName:"h-full flex justify-between items-center",...e})},9749:function(e,t,l){"use strict";l.d(t,{H4:function(){return s},Kv:function(){return a},Tz:function(){return o},We:function(){return d}});var n=l(7207),i=l.n(n),r=l(6631);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,r.ZP)("/api/product-system/".concat(e,"/detail"),{refreshInterval:t})}function s(e){return(0,r.ZP)(i().isNil(e)?null:"/api/verifyRecord/".concat(e,"/detail"))}function d(e){return(0,r.ZP)(e?"/api/inventory/all":null)}function o(e){return(0,r.ZP)(e?"/api/verifyRecord/verifiers":null)}},6024:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return U}});var n=l(3342),i=l(124),r=l(9685),a=l(3956),s=l(7921),d=l(1201),o=l(3958),c=l(7266),u=l(9455),x=l(4247),m=l(9749),f=l(1844),h=l(7207),p=l.n(h),v=l(5819),g=l(8591),j=l.n(g),N=l(8919);let w=e=>(0,n.jsxs)("div",{className:"w-full flex flex-col gap-2.5",children:[(0,n.jsxs)("span",{className:"font-normal leading-6 text-[16px]",children:[e.title,"："]}),e.children]}),b=e=>(0,n.jsx)("div",{className:"font-normal leading-[21.79px] text-[16px] text-gray-9",children:e.value});var y=e=>{var t,l,i,a,s,h,g;let{closeModal:y,recordId:k,type:C="new"}=e,F=(0,r.useRef)(null),{userData:I}=(0,o.oR)(),{isLoading:_,data:S}=(0,m.H4)(k),{isLoading:L,data:U}=(0,m.We)("new"===C||"editor"===C),{isLoading:z,data:R}=(0,m.Tz)("new"===C||"editor"===C),T=_||L||z,E=(0,r.useMemo)(()=>[(U||[]).map(e=>({...e,text:e.loadName})),p().findIndex(U,e=>e.loadNumber===(null==S?void 0:S.loadNumber))],[U,S]),D=(0,x.dW)(...E),P=(0,r.useMemo)(()=>[(R||[]).map(e=>({...e,text:e.name})),p().findIndex(R,e=>{var t;return e.id===(null==S?void 0:null===(t=S.verifyUser)||void 0===t?void 0:t.id)})],[R,S]),M=(0,x.dW)(...P),[Z,W]=(0,N.Z)({verifyState:!0}),[A,H]=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=(0,r.useRef)(new AbortController);return[l=>{let n=l,i=()=>{if(0===n.length)return;let e=n[0];return n=p().drop(n),{file:e,index:l.length-n.length-1}},r=p().min([e,n.length]),a=p().range(l.length),s=async()=>{for(;;){let e=i();if(!e)return;{let{file:l,index:n}=e,i=await (0,f.qM)(l,{signal:t.current.signal});a[n]=i}}};return Promise.all(p().range(r).map(()=>s())).then(()=>a)},()=>{try{t.current.abort()}catch(e){console.info("abort upfiles")}}]}();(0,r.useEffect)(()=>H,[]);let O=!Z.files||0===Z.files.length||Z.files.length>20||p().findIndex(Z.files,e=>e.size>=2147483648||e.name.length>=128)>=0,B=!U||!R||!Z.name||D.current<0||M.current<0||O,[K,X]=(0,r.useState)(!1),q=!S||!U||!R||(Z.name||S.name)===S.name&&(Z.desc||S.description)===S.description&&(null===(t=U[D.current])||void 0===t?void 0:t.loadNumber)===S.loadNumber&&(null===(l=R[M.current])||void 0===l?void 0:l.id)===S.verifyUserId&&O,Q=!S||O,G={directory:"",webkitdirectory:""},J="w-full shrink-0 px-5 border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg",V="verify"===C,Y=(0,r.useMemo)(()=>{var e;if(O||!Z.files)return"验证文件";let t=(null===(e=Z.files.item(0))||void 0===e?void 0:e.webkitRelativePath.split("/")[0])||"验证文件";return(0,v.lS)(t,10,10)},[Z.files,O]),$=()=>(0,n.jsx)(w,{title:V?"验证文档":"附件",children:(0,n.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,n.jsx)("input",{...G,ref:F,type:"file",hidden:!0,onChange:e=>W({files:e.target.files})}),(0,n.jsx)("img",{src:"/vector_icon.svg"}),(0,n.jsx)(b,{value:Y}),(0,n.jsx)("div",{onClick:e=>{var t;return!K&&(null===(t=F.current)||void 0===t?void 0:t.click())},className:j()("flex  rounded-[4px] leading-4 text-[16px] bg-[#F1F1F1] w-[100px] h-[24px]  text-center items-center justify-center ",K?"cursor-not-allowed":"cursor-pointer"),children:"选择文件夹"})]})});return(0,n.jsx)(r.Fragment,{children:(0,n.jsxs)(u.u_,{className:"rounded-lg",containerClassName:"mx-5 max-w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",title:"new"===C?"新建验证记录":"编辑验证记录",onClose:y,children:[(0,n.jsxs)("div",{className:"flex flex-col py-[1px] gap-5 px-5 w-[640px] min-h-[6.25rem] max-h-mc overflow-y-auto",children:[T&&(0,n.jsx)(c.g,{}),!T&&(0,n.jsx)(n.Fragment,{children:V?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w,{title:"验证记录",children:(0,n.jsx)(b,{value:null==S?void 0:S.name})}),(0,n.jsx)(w,{title:"验证记录ID",children:(0,n.jsx)(b,{value:null==S?void 0:S.id})}),(0,n.jsx)(w,{title:"发起人",children:(0,n.jsx)(b,{value:null==S?void 0:null===(i=S.createUser)||void 0===i?void 0:i.name})}),(0,n.jsx)(w,{title:"组织机构",children:(0,n.jsx)(b,{value:null==S?void 0:null===(a=S.organization)||void 0===a?void 0:a.name})}),(0,n.jsx)(w,{title:"描述",children:(0,n.jsx)(b,{value:null==S?void 0:S.description})}),(0,n.jsx)(w,{title:"碳足迹批次",children:(0,n.jsx)(b,{value:null==S?void 0:null===(s=S.inventory)||void 0===s?void 0:s.loadName})}),(0,n.jsx)(w,{title:"碳足迹批次ID",children:(0,n.jsx)(b,{value:null==S?void 0:S.loadNumber})}),(0,n.jsx)(w,{title:"验证人",children:(0,n.jsx)(b,{value:null==S?void 0:null===(h=S.verifyUser)||void 0===h?void 0:h.name})}),$()]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w,{title:"验证记录",children:(0,n.jsx)("input",{value:Z.name||(null==S?void 0:S.name),onChange:e=>W({name:e.target.value}),maxLength:30,className:J})}),(0,n.jsx)(w,{title:"碳足迹批次",children:(0,n.jsx)(x.ub,{...D})}),(0,n.jsx)(w,{title:"描述",children:(0,n.jsx)("input",{value:Z.desc||(null==S?void 0:S.description),onChange:e=>W({desc:e.target.value}),maxLength:100,className:J})}),(0,n.jsx)(w,{title:"选择验证人",children:(0,n.jsx)(x.ub,{...M})}),(0,n.jsx)(w,{title:"发起人",children:(0,n.jsx)(b,{value:null==I?void 0:I.name})}),(0,n.jsx)(w,{title:"组织机构",children:(0,n.jsx)(b,{value:null==I?void 0:null===(g=I.organization)||void 0===g?void 0:g.name})}),$()]})})]}),!T&&(0,n.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5 w-full px-5",children:["new"===C&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:()=>y(!1),children:"取消"}),(0,n.jsx)(d.u,{busy:K,disabled:B,defStyle:"btn-primary",className:"flex-1",onClick:()=>{B||K||(X(!0),A(Z.files).then(e=>(0,f._Q)({name:Z.name,loadNumber:U[D.current].loadNumber,description:Z.desc||"",fileList:e,verifyUserId:R[M.current].id}).then(()=>y(!0)).catch(console.error).finally(()=>{X(!1)})))},children:"确定"})]}),"editor"===C&&(0,n.jsx)(d.u,{busy:K,disabled:q,className:"flex-1",onClick:()=>{q||K||(X(!0),(Z.files?A(Z.files).then(e=>(0,f.u_)(S.id,{name:Z.name||S.name,loadNumber:U[D.current].loadNumber,description:Z.desc||S.description,fileList:e,verifyUserId:R[M.current].id})):(0,f.u_)(S.id,{name:Z.name,loadNumber:U[D.current].loadNumber,description:Z.desc,verifyUserId:R[M.current].id})).then(()=>y(!0)).catch(console.error).finally(()=>{X(!1)}))},children:"提交更新"}),"verify"===C&&(0,n.jsx)(d.u,{busy:K,disabled:Q,className:"flex-1",onClick:()=>{Q||!Z.files||K||(X(!0),A(Z.files).then(e=>(0,f.A6)(S.id,e,!0)).then(()=>y(!0)).catch(console.error).finally(()=>{X(!1)}))},children:"提交验证"})]})]})})},k=l(905),C=l.n(k),F=e=>{let{closeModal:t,fileList:l}=e,[i,a]=(0,r.useState)(!1),s=(0,o.h3)(),d=async()=>{a(!0);try{let e=new(C()),t="";l.forEach(l=>{t=l.fileName.split("/")[0],e.file(l.fileName,l.downloadUrl)});let n=await e.generateAsync({type:"blob"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download="".concat(t,".zip"),i.click(),URL.revokeObjectURL(i.href)}catch(e){s("文件下载出错！")}finally{a(!1)}};return(0,n.jsx)(r.Fragment,{children:(0,n.jsxs)(u.u_,{onClose:t,title:"查看文件夹",children:[(0,n.jsx)("div",{className:"px-5 overflow-y-auto  max-h-[260px]",children:l.map((e,t)=>{let l=e.fileName.split("/");return(0,n.jsx)("div",{id:"view",className:"w-[640px] h-[34px] flex items-center ",children:(0,n.jsx)("span",{className:"ml-[10px] leading-5 text-[16px] font-normal",children:l[l.length-1]})},"file_".concat(t))})}),(0,n.jsx)("button",{disabled:i,className:"bg-[#29953A] w-full h-[50px] rounded-lg text-[#FFFFFF] mt-5",onClick:d,children:"下载"})]})})},I=l(8172),_=l(3140);async function S(e){var t;let l=await I.default.get((t="/api/verifyRecord/list/?pageNum=".concat(e,"&pageSize=10"),"".concat(_.Sg).concat(t)),function(){let e=(0,o.is)();return e?{headers:{Authorization:"Bearer ".concat(e.loginToken)}}:{}}());return function(e){var t;let l=e.data;if(!l||1e5!==l.code)throw l.message;return null===(t=e.data)||void 0===t?void 0:t.data}(l)}var L=l(8005),U=function(){let{userData:e}=(0,o.oR)(),[t,l]=(0,r.useState)(1),[c,u]=(0,r.useState)({}),[x,m]=(0,r.useState)(!1),[f,h]=(0,r.useState)(!1),g=(0,r.useRef)([]),[j,N]=(0,r.useState)(!1),w=(0,r.useRef)(),b=e=>{g.current=e,h(!0)},k=(0,r.useCallback)(t=>{m(!0),w.current={type:p().isEmpty(t)?"new":(null==e?void 0:e.role)==="verify"?"verify":"editor",recordId:t.id}},[e]),C=(0,r.useMemo)(()=>[{title:"验证记录",dataIndex:"name",width:"10rem",render:e=>(0,n.jsx)("span",{"data-tooltip-content":(0,L.iT)(e,20),"data-tooltip-id":"tooltip",className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:e})},{title:"验证记录ID",dataIndex:"id",width:"6rem",render:(e,t)=>(0,n.jsx)("div",{className:"flex  text-lg leading-[27px]  w-[6rem]",children:(0,n.jsx)("span",{className:"",children:e})})},{title:"发起人",dataIndex:"loadNumber",width:"8rem",render:(e,t)=>(0,n.jsx)("span",{"data-tooltip-content":(0,L.iT)(t.createUser.name,20),"data-tooltip-id":"tooltip",className:"text-lg leading-[27px] max-w-[13rem]  truncate inline-block",children:t.createUser.name})},{title:"组织机构",width:"2rem",dataIndex:"productName",render:(e,t)=>(0,n.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] truncate inline-block ",children:t.organization.name})},{title:"碳足迹批次",dataIndex:"loadName",width:"10rem",render:(e,t)=>(0,n.jsx)("span",{"data-tooltip-content":(0,L.iT)(t.inventory.loadName,11),"data-tooltip-id":"tooltip",className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:t.inventory.loadName})},{title:"碳足迹批次ID",dataIndex:"loadNumber",width:"10rem",render:e=>(0,n.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:(0,v.lS)(e,8,8)})},{title:"附件",dataIndex:"productDescription",width:"18.75rem",render:(e,t)=>(0,n.jsxs)("div",{onClick:()=>b(t.attachmentFileList),className:"w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded cursor-pointer",children:[(0,n.jsx)("img",{src:"/vector_icon.svg"}),(0,n.jsx)("div",{className:"ml-2 ",children:"文件夹"})]})},{title:"最后编辑",dataIndex:"updateTime",width:"14rem",render:e=>(0,n.jsx)("span",{className:" text-lg leading-[27px] w-[12rem] ",children:e})},{title:"验证人",dataIndex:"name",width:"18.625rem",render:(e,t)=>(0,n.jsx)("span",{"data-tooltip-content":(0,L.iT)(t.verifyUser.name,11),"data-tooltip-id":"tooltip",className:"max-w-[11rem] text-lg leading-[27px]  truncate inline-block",children:t.verifyUser.name})},{title:"验证文档",dataIndex:"verifyFileList",width:"8.125rem",render:(e,t)=>t.verifyFileList.length?(0,n.jsxs)("div",{onClick:()=>b(t.verifyFileList),className:"w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded cursor-pointer",children:[(0,n.jsx)("img",{src:"/vector_icon.svg"}),(0,n.jsx)("div",{className:"ml-2 ",children:"文件夹"})]}):null},{title:"验证状态",dataIndex:"state",width:"8.125rem",render:e=>(0,n.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:e?"已验证":""})},{title:"验证时间",dataIndex:"proofTime",width:"8.125rem",render:e=>(0,n.jsx)("span",{className:"text-lg leading-[27px] w-[13rem] ",children:e})},{title:"",width:"20rem",render:(e,t)=>!t.state&&(0,n.jsx)("div",{className:"flex justify-between flex-1 text-green-2 break-keep",children:(0,n.jsx)("div",{className:"flex items-center font-normal justify-center cursor-pointer text-lg leading-[27px]",onClick:()=>k(t),children:"编辑"})})}],[k]),I=async()=>{try{N(!0);let e=await S(t);u(e)}catch(e){console.log("eeee",e)}finally{N(!1)}};return(0,r.useEffect)(()=>{I()},[t]),(0,n.jsxs)(i.m,{isNew:!0,className:"flex flex-col justify-between flex-1 text-black ",canBack:!0,link:{pathName:"/tools/tools",homeTitle:"产品碳足迹工具集",currentTitle:"验证管理"},children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("h3",{className:"flex items-center justify-between text-2xl font-semibold",children:[(0,n.jsx)("span",{children:"验证管理列表"}),(null==e?void 0:e.role)==="admin"&&(0,n.jsx)(d.z,{onClick:()=>k({}),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建验证记录"})]}),(0,n.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,n.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,n.jsx)("div",{className:"text-base leading-[1.625rem] min-w-[62.25rem]",children:(0,n.jsx)(a.i,{columns:C,loading:j,columnsHeight:"h-[3.125rem] ",mouseHoverKey:"id",data:(null==c?void 0:c.records)||[],className:"",columnsClassName:" cursor-default ",headerClassName:{background:"#fff",fontWeight:"700",fontSize:"18px",lineHeight:"27px"}})})})})]}),(0,n.jsx)(s.t,{className:"my-8",onChange:e=>{l(e)},total:c.total||0,pgSize:10,pgNum:t}),x&&w.current&&(0,n.jsx)(y,{type:w.current.type,recordId:w.current.recordId,closeModal:()=>{l(1),1===t&&I(),m(!1),w.current=void 0}}),f&&(0,n.jsx)(F,{fileList:g.current,closeModal:()=>{h(!1)}})]})}}},function(e){e.O(0,[3268,1271,7588,7038,8635,701,8352,8761,8149,9774,2888,179],function(){return e(e.s=2792)}),_N_E=e.O()}]);