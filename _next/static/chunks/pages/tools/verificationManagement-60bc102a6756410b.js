(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{6867:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/verificationManagement",function(){return n(7786)}])},7390:function(e,t,n){"use strict";n.d(t,{Ph:function(){return x},dW:function(){return u},ub:function(){return m}});var l=n(1527),i=n(765),r=n(4875),a=n.n(r),s=n(959),d=n(7067),c=n(9592),o=n(8723);function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[n,l]=(0,s.useState)(t);return(0,s.useEffect)(()=>{l(t)},[e,t]),{onChange:l,items:e,current:n}}function x(e){let{items:t,current:n,onChange:r,className:u="bg-white text-black px-5 py-3 text-lg rounded-lg w-[31.25rem] mo:w-full mo:text-sm",currentClassName:x="flex justify-between items-center"}=e,m=t[n]?t[n].text:"",[f,h]=(0,c.Z)(!1),v=(0,s.useCallback)(e=>{n!==e&&r(e)},[n]),p=(0,i.E)("t-side");return((0,o.Z)(p,()=>f&&h(!1)),0===t.length)?null:(0,l.jsxs)("div",{ref:p,className:a()("relative cursor-pointer",u),onClick:()=>h(),children:[(0,l.jsxs)("div",{className:x,children:[(0,l.jsx)("span",{className:"truncate",children:m}),f?(0,l.jsx)(d.pzk,{}):(0,l.jsx)(d._i7,{})]}),f&&(0,l.jsx)("div",{className:"max-h-[18rem] absolute left-0 w-full bg-white  rounded-lg py-3 overflow-x-hidden overflow-y-auto",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,l.jsx)("div",{className:"",children:t.map((e,t)=>(0,l.jsx)("div",{style:{},className:a()("w-full break-all px-5 py-2 text-sm",{"text-green-2":t===n}),onClick:()=>v(t),children:e.text},"select_item_".concat(t)))})})]})}let m=e=>(0,l.jsx)(x,{className:"h-[50px] px-5 items-center bg-stone-50 rounded-lg border border-neutral-200",currentClassName:"h-full flex justify-between items-center",...e})},6020:function(e,t,n){"use strict";n.d(t,{H4:function(){return s},Kv:function(){return a},Tz:function(){return c},We:function(){return d}});var l=n(2699),i=n.n(l),r=n(1256);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,r.ZP)("/api/product-system/".concat(e,"/detail"),{refreshInterval:t})}function s(e){return(0,r.ZP)(i().isNil(e)?null:"/api/verifyRecord/".concat(e,"/detail"))}function d(e){return(0,r.ZP)(e?"/api/inventory/all":null)}function c(e){return(0,r.ZP)(e?"/api/verifyRecord/verifiers":null)}},7786:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var l=n(1527),i=n(1600),r=n(959),a=n(9346),s=n(9869),d=n(1191),c=n(834),o=n(5858),u=n(9049),x=n(7390),m=n(6020),f=n(6699),h=n(2699),v=n.n(h),p=function(e){void 0===e&&(e={});var t=(0,r.useState)(e),n=t[0],l=t[1];return[n,(0,r.useCallback)(function(e){l(function(t){return Object.assign({},t,e instanceof Function?e(t):e)})},[])]};let g=e=>(0,l.jsxs)("div",{className:"w-full flex flex-col gap-2.5",children:[(0,l.jsxs)("span",{className:"font-normal leading-6 text-[16px]",children:[e.title,"："]}),e.children]}),j=e=>(0,l.jsx)("div",{className:"font-normal leading-[21.79px] text-[16px] text-gray-6",children:e.value});var N=e=>{var t,n,i,a,s,h;let{closeModal:N,recordId:w,type:b="new"}=e,y=(0,r.useRef)(null),{userData:k}=(0,c.oR)(),{isLoading:F,data:C}=(0,m.H4)(w),{isLoading:I,data:_}=(0,m.We)("new"===b||"editor"===b),{isLoading:S,data:E}=(0,m.Tz)("new"===b||"editor"===b),z=F||I||S,D=(0,r.useMemo)(()=>[(_||[]).map(e=>({...e,text:e.loadName})),v().findIndex(_,e=>e.loadNumber===(null==C?void 0:C.loadNumber))],[_,C]),W=(0,x.dW)(...D),P=(0,r.useMemo)(()=>[(E||[]).map(e=>({...e,text:e.name})),v().findIndex(E,e=>{var t;return e.id===(null==C?void 0:null===(t=C.verifyUser)||void 0===t?void 0:t.id)})],[E,C]),R=(0,x.dW)(...P),[T,L]=p({verifyState:!0}),M=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return t=>{let n=t,l=()=>{if(0===n.length)return;let e=n[0];return n=v().drop(n),{file:e,index:t.length-n.length-1}},i=v().min([e,n.length]),r=v().range(t.length),a=async()=>{for(;;){let e=l();if(!e)return;{let{file:t,index:n}=e,l=await (0,f.qM)(t);r[n]=l}}};return Promise.all(v().range(i).map(()=>a())).then(()=>r)}}(),U=!_||!E||!T.name||!T.desc||W.current<0||R.current<0||!T.files||T.files.length>20||v().findIndex(T.files,e=>e.size>=2147483648||e.name.length>=128)>=0,[Z,H]=(0,r.useState)(!1),A={directory:"",webkitdirectory:""},O="w-full shrink-0 px-5 border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg",K="verify"===b;return(0,l.jsx)(r.Fragment,{children:(0,l.jsxs)(u.u_,{className:"rounded-lg",containerClassName:"mx-5 max-w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",title:"new"===b?"新建验证记录":"编辑验证记录",onClose:N,children:[(0,l.jsxs)("div",{className:"flex flex-col py-2 gap-5 mx-5 w-[640px] min-h-[6.25rem] max-h-mc overflow-y-auto",children:[z&&(0,l.jsx)(o.g,{}),!z&&(0,l.jsx)(l.Fragment,{children:K?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{title:"验证记录",children:(0,l.jsx)(j,{value:null==C?void 0:C.name})}),(0,l.jsx)(g,{title:"验证记录ID",children:(0,l.jsx)(j,{value:null==C?void 0:C.id})}),(0,l.jsx)(g,{title:"发起人",children:(0,l.jsx)(j,{value:null==C?void 0:null===(t=C.createUser)||void 0===t?void 0:t.name})}),(0,l.jsx)(g,{title:"组织机构",children:(0,l.jsx)(j,{value:null==C?void 0:null===(n=C.organization)||void 0===n?void 0:n.name})}),(0,l.jsx)(g,{title:"描述",children:(0,l.jsx)(j,{value:null==C?void 0:C.description})}),(0,l.jsx)(g,{title:"碳足迹批次",children:(0,l.jsx)(j,{value:null==C?void 0:null===(i=C.inventory)||void 0===i?void 0:i.loadName})}),(0,l.jsx)(g,{title:"碳足迹批次ID",children:(0,l.jsx)(j,{value:null==C?void 0:null===(a=C.inventory)||void 0===a?void 0:a.loadNumber})}),(0,l.jsx)(g,{title:"验证人",children:(0,l.jsx)(j,{value:null==C?void 0:null===(s=C.verifyUser)||void 0===s?void 0:s.name})}),(0,l.jsx)(g,{title:"验证文档",children:(0,l.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,l.jsx)("input",{...A,ref:y,type:"file",hidden:!0,onChange:e=>L({files:e.target.files})}),(0,l.jsx)("img",{src:"/vector_icon.svg"}),(0,l.jsx)(j,{value:"验证文件"}),(0,l.jsx)("div",{onClick:e=>{var t;return null===(t=y.current)||void 0===t?void 0:t.click()},className:" flex cursor-pointer rounded-[4px] leading-4 text-[16px] bg-[#F1F1F1] w-[100px] h-[24px]  text-center items-center justify-center ",children:"选择文件夹"})]})})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{title:"验证记录",children:(0,l.jsx)("input",{value:T.name||(null==C?void 0:C.name),onChange:e=>L({name:e.target.value}),maxLength:30,className:O})}),(0,l.jsx)(g,{title:"产品系统",children:(0,l.jsx)(x.ub,{...W})}),(0,l.jsx)(g,{title:"描述",children:(0,l.jsx)("input",{value:T.desc||(null==C?void 0:C.description),onChange:e=>L({desc:e.target.value}),maxLength:30,className:O})}),(0,l.jsx)(g,{title:"发起人",children:(0,l.jsx)(j,{value:null==k?void 0:k.name})}),(0,l.jsx)(g,{title:"组织机构",children:(0,l.jsx)(j,{value:null==k?void 0:null===(h=k.organization)||void 0===h?void 0:h.name})}),(0,l.jsx)(g,{title:"附件",children:(0,l.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,l.jsx)("input",{...A,ref:y,type:"file",hidden:!0,onChange:e=>L({files:e.target.files})}),(0,l.jsx)("img",{src:"/vector_icon.svg"}),(0,l.jsx)(j,{value:"验证文件"}),(0,l.jsx)("div",{onClick:e=>{var t;return null===(t=y.current)||void 0===t?void 0:t.click()},className:" flex cursor-pointer rounded-[4px] leading-4 text-[16px] bg-[#F1F1F1] w-[100px] h-[24px]  text-center items-center justify-center ",children:"选择文件夹"})]})}),(0,l.jsx)(g,{title:"选择验证人",children:(0,l.jsx)(x.ub,{...R})})]})})]}),(0,l.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5 w-full px-5",children:["new"===b&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:()=>N(!1),children:"取消"}),(0,l.jsx)(d.u,{busy:Z,disabled:U,defStyle:"btn-primary",className:"flex-1",onClick:()=>{U||(H(!0),M(T.files).then(e=>(0,f._Q)({name:T.name,loadNumber:_[W.current].loadNumber,description:T.desc,fileList:e,verifyUserId:E[R.current].id}).then(()=>N(!0)).catch(console.error).finally(()=>{H(!1)})))},children:"确定"})]}),"editor"===b&&(0,l.jsx)(d.u,{busy:Z,className:"flex-1",onClick:()=>{C&&_&&E&&(H(!0),(T.files?M(T.files).then(e=>(0,f.u_)(C.id,{name:T.name,loadNumber:_[W.current].loadNumber,description:T.desc,fileList:e,verifyUserId:E[R.current].id})):(0,f.u_)(C.id,{name:T.name,loadNumber:_[W.current].loadNumber,description:T.desc,verifyUserId:E[R.current].id})).then(()=>N(!0)).catch(console.error).finally(()=>{H(!1)}))},children:"提交更新"}),"verify"===b&&(0,l.jsx)(d.u,{busy:Z,className:"flex-1",onClick:()=>{C&&T.files&&(H(!0),M(T.files).then(e=>(0,f.A6)(C.id,e,!0)).then(()=>N(!0)).catch(console.error).finally(()=>{H(!1)}))},children:"提交验证"})]})]})})};let w=[{file:"",name:"ES6 2023 100kWh 运动版200-300"},{file:"",name:"ES6 2023 100kWh 运动版200-300"},{file:"",name:"ES6 2023 100kWh 运动版200-300"},{file:"",name:"ES6 2023 100kWh 运动版200-300"},{file:"",name:"ES6 2023 100kWh 运动版200-300"}];var b=e=>{let{closeModal:t}=e;return(0,l.jsx)(r.Fragment,{children:(0,l.jsxs)(u.u_,{onClose:t,title:"查看文件夹",children:[w.map((e,t)=>(0,l.jsx)("div",{id:"view",className:"w-[640px] h-[34px] flex items-center ",children:(0,l.jsx)("span",{className:"ml-[10px] leading-5 text-[16px] font-normal",children:e.name})},"file_".concat(t))),(0,l.jsx)("button",{className:"bg-[#29953A] w-full h-[50px] rounded-lg text-[#FFFFFF] mt-5",children:"下载"})]})})},y=n(8422),k=n(58);async function F(e){var t;let n=await y.default.get((t="/api/verifyRecord/list/?pageNum=".concat(e,"&pageSize=10"),"".concat(k.Sg).concat(t)),function(){let e=(0,c.is)();return e?{headers:{Authorization:"Bearer ".concat(e.loginToken)}}:{}}());return function(e){var t;let n=e.data;if(!n||1e5!==n.code)throw n.message;return null===(t=e.data)||void 0===t?void 0:t.data}(n)}var C=function(){let{userData:e}=(0,c.oR)(),[t,n]=(0,r.useState)(1),[o,u]=(0,r.useState)({}),[x,m]=(0,r.useState)(!1),[f,h]=(0,r.useState)(!1);(0,r.useRef)({inputData:"",data:""});let p=(0,r.useRef)(),g=e=>{h(!0)},j=(0,r.useMemo)(()=>[{title:"验证记录",dataIndex:"name",width:"10rem",render:e=>(0,l.jsx)("span",{className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:e})},{title:"验证记录ID",dataIndex:"id",width:"6rem",render:(e,t)=>(0,l.jsx)("div",{className:"flex  text-lg leading-[27px]  w-[8rem]",children:(0,l.jsx)("span",{className:"cursor-pointer ",children:e})})},{title:"发起人",dataIndex:"loadNumber",width:"8rem",render:(e,t)=>(0,l.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:" text-lg leading-[27px] w-[13rem]  truncate inline-block",children:t.createUser.name})},{title:"组织机构",width:"2rem",dataIndex:"productName",render:(e,t)=>(0,l.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:t.organization.name})},{title:"碳足迹批次",dataIndex:"loadName",width:"10rem",render:(e,t)=>(0,l.jsx)("span",{className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:t.inventory.loadName})},{title:"碳足迹批次ID",dataIndex:"loadNumber",width:"10rem",render:e=>(0,l.jsx)("span",{className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:e})},{title:"附件",dataIndex:"productDescription",width:"18.75rem",render:e=>(0,l.jsxs)("div",{onClick:()=>g(),className:"w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded",children:[(0,l.jsx)("img",{src:"/vector_icon.svg"}),(0,l.jsx)("div",{className:"ml-2 ",children:"验证文件"})]})},{title:"最后编辑",dataIndex:"updateTime",width:"14rem",render:e=>(0,l.jsx)("span",{className:" text-lg leading-[27px] w-[14rem] ",children:e})},{title:"验证人",dataIndex:"calculateSuccessTime",width:"18.625rem",render:e=>(0,l.jsx)("span",{className:"max-w-[11rem] text-lg leading-[27px]  truncate inline-block",children:e})},{title:"验证文档",dataIndex:"description",width:"8.125rem",render:e=>(0,l.jsxs)("div",{className:"w-[112px] flex flex-row bg-[#F1F1F1] justify-center rounded",children:[(0,l.jsx)("img",{src:"/vector_icon.svg"}),(0,l.jsx)("div",{className:"ml-2 ",children:"验证文件"})]})},{title:"验证状态",dataIndex:"state",width:"8.125rem",render:e=>(0,l.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:e?"已验证":""})},{title:"验证时间",dataIndex:"orgSerialNumber",width:"8.125rem",emptyText:"-",render:e=>(0,l.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:e})},{title:"",width:"20rem",render:(e,t)=>(0,l.jsx)("div",{className:"flex justify-between flex-1 text-green-2 break-keep",children:(0,l.jsx)("div",{className:"flex items-center font-normal justify-center cursor-pointer text-lg leading-[27px]",onClick:()=>y(t),children:"编辑"})})}],[]),w=async()=>{try{let e=await F(t);u(e)}catch(e){console.log("eeee",e)}};(0,r.useEffect)(()=>{w()},[t]);let y=t=>{m(!0),p.current={type:v().isEmpty(t)?"new":(null==e?void 0:e.role)==="verify"?"verify":"editor",recordId:t.id}};return(0,l.jsxs)(i.m,{isNew:!0,className:"flex flex-col justify-between flex-1 text-black ",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,l.jsx)("span",{children:"验证管理列表"}),(null==e?void 0:e.role)==="admin"&&(0,l.jsx)(d.z,{onClick:()=>y({}),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建验证记录"})]}),(0,l.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,l.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,l.jsx)("div",{className:"text-base leading-[1.625rem] min-w-[62.25rem]",children:(0,l.jsx)(a.i,{columns:j,columnsHeight:"h-[3.125rem] ",mouseHoverKey:"loadNumber",data:(null==o?void 0:o.records)||[],className:"",headerClassName:{background:"#fff",fontWeight:"700",fontSize:"18px",lineHeight:"27px"}})})})})]}),(0,l.jsx)(s.t,{className:"my-8",onChange:e=>{n(e)},total:o.total||0,pgSize:10,pgNum:t}),x&&p.current&&(0,l.jsx)(N,{type:p.current.type,recordId:p.current.recordId,closeModal:()=>{w(),m(!1),p.current=void 0}}),f&&(0,l.jsx)(b,{closeModal:()=>{h(!1)}})]})}}},function(e){e.O(0,[713,769,307,574,740,886,351,340,774,888,179],function(){return e(e.s=6867)}),_N_E=e.O()}]);