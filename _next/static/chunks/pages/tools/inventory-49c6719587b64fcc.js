(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4704],{6763:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/inventory",function(){return n(1722)}])},5913:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var r=n(959),i=n(6171);function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(0,r.useRef)(!0),l=(0,r.useRef)(0),[,a]=(0,r.useState)(1),d=(0,r.useCallback)(e=>{n.current=e,a(e=>1-e)},[]),[s,o]=(0,i.Z)(e,t),c=()=>{n.current||d(!0);let e=l.current+1>1e5?0:l.current+1;l.current=e,o().finally(()=>l.current==e&&d(!1))};return(0,r.useEffect)(()=>{c()},t),(0,r.useMemo)(()=>({...s,value:n.current||s.error?void 0:s.value,loading:n.current,req:c}),[s,n.current])}},1722:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(1527),i=n(1600),l=n(959),a=n(9346),d=n(9869),s=n(5913),o=n(6699),c=n(1191),m=n(9049),x=function(){let[e,t]=(0,l.useState)(1),[n,x]=(0,l.useState)([]),[u,p]=(0,l.useState)(!1),h=[{title:"碳足迹批次",dataIndex:"loadNumber",width:"18.75rem",render:e=>(0,r.jsx)("span",{className:"max-w-[14rem] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":e,children:e})},{title:"实景数据",dataIndex:"productName",width:"18.75rem",render:e=>(0,r.jsx)("span",{className:"max-w-[14rem] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":e,children:e})},{title:"批次结果ID",dataIndex:"modelName",width:"7.5rem",render:e=>"PCFI-1"},{title:"产品系统名称",width:"18.75rem",dataIndex:"createTime",render:e=>"PCFI-1"},{title:"系统产品ID",width:"8.125rem",dataIndex:"createTime",render:e=>"PCFI-1"},{title:"产品系统版本",width:"9.375rem",dataIndex:"createTime",render:e=>"1"},{title:"描述",dataIndex:"description",width:"18.75rem",emptyText:"-"},{title:"操作人",dataIndex:"description",width:"6.25rem",emptyText:"-"},{title:"生成时间",dataIndex:"description",width:"10.625rem",emptyText:"-"},{title:"碳足迹结果",dataIndex:"description",width:"8.125rem",render:(e,t)=>(0,r.jsx)("div",{className:"flex justify-between text-green-2",children:(0,r.jsx)("span",{className:"cursor-pointer",onClick:()=>window.open("/tools/inventoryResult?id=".concat(t.id),"_blank"),children:"查看结果"})})},{title:"组织名称",dataIndex:"description",width:"8.125rem",emptyText:"-"},{title:"组织编号",dataIndex:"description",width:"8.125rem",emptyText:"-"},{title:"",width:"7.2rem",render:(e,t)=>(0,r.jsx)("div",{className:"flex justify-between text-green-2"})}],{value:f,loading:w}=(0,s.k)((0,o.Pf)(()=>(0,o.SO)({pgNum:e}),[e]),[e]);return(0,l.useMemo)(()=>{if(!(null==f?void 0:f.records))return[];let e=[];f.records.map(t=>{e.push({id:t.id,createTime:t.createTime,loadNumber:t.loadNumber,productName:t.product.name,modelName:t.model.modelName,description:t.model.description})}),x(e)},[f]),(0,r.jsxs)(i.m,{isNew:!0,className:"flex flex-col justify-between flex-1 text-black ",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,r.jsx)("span",{children:"我的产品碳足迹结果"}),(0,r.jsx)(c.z,{onClick:()=>p(!0),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建碳足迹结果"})]}),(0,r.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,r.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,r.jsx)("div",{className:"text-base leading-[1.625rem] min-w-[62.25rem]",children:(0,r.jsx)(a.i,{columns:h,columnsHeight:"h-[3.125rem]",mouseHoverKey:"id",data:n,loading:w,className:"",headerStyle:{background:"#fff"}})})})})]}),(0,r.jsx)(d.t,{className:"my-8",onChange:e=>{t(e)},total:(null==f?void 0:f.total)?f.total:0,pgSize:10,pgNum:e}),u?(0,r.jsx)(m.u_,{className:"rounded-lg",containerStyle:"mx-5 max-w-[640px] ",titleStyle:"text-[20px] leading-5 font-bold",title:"新建碳足迹结果",onClose:()=>p(!1),children:(0,r.jsxs)("div",{className:"mx-5 max-w-[640px] ",children:[(0,r.jsx)("span",{className:"font-normal leading-6 ",children:"碳足迹批次："}),(0,r.jsx)("input",{className:"w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg"}),(0,r.jsx)("span",{className:"font-normal leading-6 ",children:"产品系统："}),(0,r.jsxs)("select",{id:"select",className:"w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg",children:[(0,r.jsx)("option",{value:"option1",children:"Option 1"}),(0,r.jsx)("option",{value:"option2",children:"Option 2"}),(0,r.jsx)("option",{value:"option3",children:"Option 3"})]}),(0,r.jsx)("span",{className:"font-normal leading-6 ",children:"实景数据填报："}),(0,r.jsx)("div",{onClick:()=>{alert("点击了")},className:" cursor-pointer rounded-[4px] mt-[10px] bg-[#F1F1F1] max-w-[84px] max-h-[24px]  text-center",children:"前往填写"}),(0,r.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5",children:[(0,r.jsx)("div",{onClick:()=>p(!1),className:" cursor-pointer bg-[#29953A1A] w-[310px] text-[18px] border-2 border-[#29953A]   font-normal  text-[#29953A] flex h-[50px] rounded-lg justify-center items-center",children:"取消"}),(0,r.jsx)("div",{className:"  cursor-pointer bg-[#29953A] w-[310px] text-[18px] font-normal  text-[#FFFFFF] flex h-[50px] rounded-lg justify-center items-center",children:"计算碳结果"})]})]})}):null]})}}},function(e){e.O(0,[713,769,7307,6574,6740,4534,2351,2290,9774,2888,179],function(){return e(e.s=6763)}),_N_E=e.O()}]);