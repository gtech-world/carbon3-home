(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8200],{1344:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/model",function(){return l(8725)}])},7921:function(e,t,l){"use strict";l.d(t,{z:function(){return r}});var n=l(1527),s=l(4875),a=l.n(s);function r(e){let{children:t,className:l,...s}=e;return(0,n.jsx)("button",{...s,className:a()(l,"hover:bg-green-28"),children:e.children})}},8503:function(e,t,l){"use strict";l.d(t,{P:function(){return x},d:function(){return m}});var n=l(1527),s=l(5933),a=l(4875),r=l.n(a),i=l(959),d=l(7067),c=l(9592),o=l(8723);function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[l,n]=(0,i.useState)(t);return(0,i.useEffect)(()=>{n(t)},[e,t]),{onChange:n,items:e,current:l}}function x(e){let{items:t,current:l,onChange:a,className:m}=e,x=t[l]?t[l].text:"",[u,h]=(0,c.Z)(!1),g=(0,i.useCallback)(e=>{l!==e&&a(e)},[l]),p=(0,s.E)("t-side");return((0,o.Z)(p,()=>u&&h(!1)),0===t.length)?null:(0,n.jsxs)("div",{ref:p,className:r()("bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",m),onClick:()=>h(),children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("span",{className:"truncate",children:x}),u?(0,n.jsx)(d.pzk,{}):(0,n.jsx)(d._i7,{})]}),u&&(0,n.jsx)("div",{className:"max-h-[18rem] absolute left-0 w-full bg-white rounded-lg py-3 overflow-x-hidden overflow-y-auto",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,n.jsx)("div",{className:"",children:t.map((e,t)=>(0,n.jsx)("div",{style:{},className:r()("w-full break-all px-5 py-2 text-sm",{"text-green-2":t===l}),onClick:()=>g(t),children:e.text},"select_item_".concat(t)))})})]})}},8725:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return I}});var n=l(1527),s=l(7944),a=l(959),r=l(8288),i=l(3046),d=l(7921),c=l(9601),o=l(3190),m=l(2699),x=l.n(m),u=l(4726),h=l(818),g=l(4875),p=l.n(g),f=l(1671),j=l(9592),b=l(8723),v=l(8370),N=l(9077);let w=(e,t,l,n)=>{var s;return{data:{id:e.id.toString(),isLeaf:!(null==e?void 0:e.children)||(null==e?void 0:null===(s=e.children)||void 0===s?void 0:s.length)===0,isOpenByDefault:!0,name:e.name,nestingLevel:t,node:e,onSelect:e=>{l&&l(e)},onSwitch:()=>{n&&n(e)}},nestingLevel:t,node:e}};function y(e){let{style:t,data:{name:l,nestingLevel:s,isLeaf:a,node:r,onSelect:i,onSwitch:d},isOpen:c,setOpen:o}=e;return(0,n.jsxs)("div",{style:{...t,paddingLeft:"".concat(20*s,"px"),width:"max-content",paddingRight:20},className:p()("flex items-center py-[2px]",{}),children:[(0,n.jsx)("button",{onClick:()=>o(!c),className:p()("text-xl text-gray-9 mr-[4px]",{invisible:a}),children:c?(0,n.jsx)(f.ZXJ,{}):(0,n.jsx)(f.jfD,{})}),(0,n.jsx)("div",{onClick:()=>{a?i(r):(d(),o(!c))},className:p()("flex text-sm gap-1 items-center cursor-pointer"),children:(0,n.jsx)("span",{className:p()("text-black whitespace-nowrap"),children:l})})]})}function C(e){let{node:t=[],onChange:l,classname:s}=e,[r,i]=(0,a.useState)(),d=(0,a.useRef)(null),c=(0,a.useRef)(null),[o,m]=(0,j.Z)(!1),[x,u]=(0,a.useState)(20);(0,b.Z)(c,()=>o&&m(!1)),(0,a.useMemo)(()=>{l&&l(r)},[r]);let h=()=>{setTimeout(()=>{var e;let t=null===(e=d.current)||void 0===e?void 0:e.firstElementChild.firstElementChild;t&&u(parseInt(t.style.height))},0)};(0,a.useMemo)(()=>{o&&h()},[o]);let g=(0,a.useCallback)(function*(){for(let e=0;e<t.length;e++)yield w(t[e],0,e=>{i(e),m(!1)},()=>{h()});for(;;){var l,n;let s=yield;for(let a=0;a<(null===(l=s.node)||void 0===l?void 0:null===(n=l.children)||void 0===n?void 0:n.length);a++)yield w(s.node.children[a],s.nestingLevel+1,e=>{i(e),m(!1)},()=>{h()})}},[t]);return(0,n.jsxs)("div",{className:"",ref:c,children:[(0,n.jsxs)("div",{className:p()("w-full justify-between h-10 cursor-pointer rounded-lg flex items-center px-3",s),onClick:()=>m(!o),children:[(0,n.jsx)("span",{children:r?r.name:""}),(0,n.jsx)("button",{onClick:()=>m(!o),className:p()("text-xl mr-[4px]"),children:o?(0,n.jsx)(f.jfD,{className:"rotate-[-90deg]"}):(0,n.jsx)(f.ZXJ,{})})]}),o&&(0,n.jsx)(v.Z,{children:e=>{let{width:t}=e;return(0,n.jsx)("div",{className:"bg-white rounded-lg mt-2.5 p-5 absolute",ref:d,style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)"},children:(0,n.jsx)(N.NC,{className:"",ref:d,useIsScrolling:!0,width:t-42,height:x,itemSize:22,treeWalker:g,children:y})})}})]})}var k=l(9270),S=l(8503),E=l(3273),I=function(){var e,t,l,m;let[g,f]=(0,a.useState)(null),[j,b]=(0,a.useState)(null),[v,N]=(0,a.useState)(!1),[w,y]=(0,a.useState)(null),[I,_]=(0,a.useState)(!1),[z,T]=(0,a.useState)(1),[L,D]=(0,a.useState)(""),[M,Z]=(0,a.useState)(null),[O,P]=(0,a.useState)(""),[R,F]=(0,a.useState)(null),[X,B]=(0,a.useState)(null),[J,U]=(0,a.useState)(""),[H,W]=(0,a.useState)(-1),[q,A]=(0,a.useState)(-1),[G,K]=(0,a.useState)(0),[Q,V]=(0,a.useState)(0),[Y,$]=(0,a.useState)([]),[ee,et]=(0,a.useState)(!1),[el,en]=(0,a.useState)(0),[es,ea]=(0,a.useState)([]),[er,ei]=(0,a.useState)([]),ed=(0,a.useRef)(null),{user:ec}=(0,k.aF)(),{push:eo}=(0,o.useRouter)(),{toast:em}=(0,k.pm)(),ex=async()=>{et(!0);let e=await (0,u.BI)({pgNum:z,productId:q});et(!1);let t=[];e.records.map(e=>{var l,n;t.push({id:e.id,modelName:e.modelName,modelUuid:e.modelUuid,productName:e.product.name,state:e.state,createTime:e.createTime,paramDetail:(null===(l=JSON.parse(e.paramDetail)[0])||void 0===l?void 0:null===(n=l.parameters)||void 0===n?void 0:n.map(e=>{var t;return{context:e.name,parameter:e.context.name,amount:e.value,uncertainty:(null==e?void 0:null===(t=e.uncertainty)||void 0===t?void 0:t.distributionType)||null,description:e.description}}))||[]})}),en(e.total),$(t)},eu=async()=>{let e=await (0,u.Ps)();ea(e?function e(t,l){return t.filter(e=>void 0===l?0===e.parentId:e.parentId===l).map(l=>(l.children=e(t,l.id),l))}(null==e?void 0:e.records,0):[])},eh=async()=>{let e=await (0,u.vz)(),t=[];e.records.map(e=>{t.push({id:e.id,text:e.name,type:e.category.name,desc:e.description})}),ei(t)};(0,a.useMemo)(()=>{ex()},[q,G,z]),(0,a.useEffect)(()=>{eh()},[Q]),(0,a.useEffect)(()=>{eu()},[]);let eg=async e=>{B(e.target.files[0])},ep=[{title:"模型名称",dataIndex:"modelName",width:"14rem",render:e=>(0,n.jsx)("span",{className:"max-w-[14rem] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":e,children:e})},{title:"模型ID",dataIndex:"modelUuid",width:"13rem",render:e=>(0,n.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-content":e,children:(0,E.lS)(e,8,8)})},{title:"产品名称",dataIndex:"productName",width:"14rem",filterOptions:er,onFilterChange:e=>{A(e?e.id:-1)},render:e=>(0,n.jsx)("span",{className:"max-w-[14rem] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":e,children:e})},{title:"状态",dataIndex:"state",width:"100px",render:e=>{let t="";switch(e){case 0:t="弃用";break;case 1:t="激活";break;case -1:t="草稿"}return(0,n.jsx)("span",{children:t})}},{title:"上传时间",dataIndex:"createTime",width:"13rem",render:e=>(0,n.jsx)("div",{className:"break-keep whitespace-nowrap",children:e})},{title:"",width:"20rem",render:(e,t)=>(0,n.jsxs)("div",{className:"flex justify-between flex-1 text-green-2 break-keep",children:[(0,n.jsx)("a",{href:"/model?id=".concat(t.id),className:"flex items-center justify-center cursor-pointer",children:"查看模型"}),(0,n.jsx)("span",{className:"mx-2 cursor-pointer",onClick:()=>b(t),children:"查看实景数据"}),(0,n.jsx)("span",{className:"cursor-pointer",onClick:()=>f(t),children:"更改状态"})]})}],ef=[{title:"实景输入项",dataIndex:"context",width:"20%"},{title:"过程名称",dataIndex:"parameter",width:"30%"},{title:"参考值",dataIndex:"amount",width:"20%"},{title:"不确定性",dataIndex:"uncertainty",emptyText:"-",width:"30%"}],ej=async e=>{let t="更改状态";y({title:t,loading:!0}),await (0,u.pF)(g.id,e),K(G+1),y({title:t,loading:!1,resultText:"操作成功"}),f(null)},eb=async()=>{if(!(null==M?void 0:M.id))return!1;let e=x().find(er,e=>e.text===L);if(e)return em({type:"error",msg:"产品名称已经存在"}),!1;_(!1),await (0,u.Mt)({name:L,categoryId:null==M?void 0:M.id,orgId:ec.orgId,description:O}),em({type:"info",msg:"新建成功！"});let t=document.getElementById("productList");t&&(t.scrollTop=t.scrollHeight),V(Q+1)},ev=async()=>{let e=new FormData;e.append("name",J),e.append("file",X),e.append("productId",er[R].id);let t="上传碳足迹模型";y({title:t,loading:!0}),ed.current.value="",N(!1);let l=await (0,u.av)(e);l?(y({title:t,loading:!1,resultText:"上传成功！"}),N(!1),T(1),K(G+1)):y({title:t,loading:!1,resultText:"上传失败！"})};(0,a.useMemo)(()=>{v||(F(null),B(null))},[v]);let eN=(0,a.useMemo)(()=>!!X&&!!J&&R>-1,[X,J,R]),ew=(0,a.useMemo)(()=>!!L&&!!M,[L,M]),ey=e=>{D(e.target.value)};return(0,n.jsxs)(s.m,{className:"flex flex-col justify-between flex-1 pb-12 text-black",children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{className:"flex items-center justify-between pb-5 mt-8 text-2xl font-semibold",children:[(0,n.jsx)("span",{children:"产品定义"}),(0,n.jsx)(d.z,{onClick:()=>_(!0),className:"text-lg bg-green-2 w-[7.25rem] text-white rounded-lg h-11 font-normal",children:"新建产品"})]}),(0,n.jsx)("div",{className:"max-h-[15.5rem] overflow-y-auto",id:"productList",children:(0,n.jsx)("ul",{className:"flex flex-wrap ml-[-1.25rem]",children:er.map((e,t)=>(0,n.jsx)("li",{onClick:()=>W(t),className:p()("bg-white px-5 py-2.5 border rounded-lg ml-5 mb-5 cursor-pointer hover:border-green-2 hover:text-green-2",H===t?"border-green-2 text-green-2":"border-white"),children:(0,n.jsx)("div",{className:"",children:e.text})},"productList".concat(t)))})})]}),(0,n.jsxs)("h3",{className:"flex items-center justify-between mt-6 text-2xl font-semibold",children:[(0,n.jsx)("span",{children:"产品碳足迹模型管理"}),(0,n.jsx)(d.z,{onClick:()=>N(!0),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"上传碳足迹模型"})]}),(0,n.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,n.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,n.jsx)("div",{className:"min-h-[20.25rem] text-base leading-[1.625rem] min-w-[68.25rem]",children:(0,n.jsx)(r.i,{columns:ep,loading:ee,cellClassName:(e,t,l)=>l%2==0?"bg-gray-16 ".concat(0===t&&"rounded-l-lg"," ").concat(t===ep.length-1&&"rounded-r-lg"):"",data:Y,className:"",headerStyle:{background:"#fff"}})})})})]}),(0,n.jsx)(c.t,{onChange:e=>{T(e)},className:"my-8",total:el,pgSize:10,pgNum:z}),null!==g&&(0,n.jsx)(i.u_,{title:"更改状态",onClose:()=>f(null),children:(0,n.jsx)("div",{className:"flex",children:(null==w?void 0:w.loading)?(0,n.jsx)(h.g,{}):(0,n.jsxs)("div",{className:"flex flex-1",children:[g.state>-2&&(0,n.jsx)(d.z,{onClick:()=>ej(1===g.state?0:1),className:"flex-1 w-full text-lg text-white rounded-lg bg-green-2 h-11",children:1===g.state?"弃用":"激活"}),-1===g.state&&(0,n.jsx)(d.z,{onClick:()=>ej(-2),className:"flex-1 w-full ml-5 text-lg border-2 rounded-lg border-green-2 bg-green-2/10 text-green-2 hover:bg-green-2/20 h-11",children:"删除"})]})})}),!!j&&(0,n.jsx)(i.u_,{title:j.modelName+"模型中的实景输入项",onClose:()=>b(null),children:(0,n.jsxs)("div",{className:"flex w-[60rem] min-h-[16rem] flex-col pb-2",children:[(0,n.jsx)("ul",{className:"flex mb-1",children:ef.map((e,t)=>(0,n.jsx)("li",{className:"px-3 text-lg font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,n.jsx)("div",{className:"max-h-[15rem] min-h-[5rem] overflow-y-auto",children:(0,n.jsx)(r.i,{size:"big",hiddenHeader:!0,columns:ef,data:j.paramDetail})})]})}),w&&(0,n.jsx)(i.u_,{title:(null==w?void 0:w.title)||"操作",onClose:()=>y(null),children:(0,n.jsx)("div",{className:"pb-2 text-center",children:w.loading?(0,n.jsx)(h.g,{}):(0,n.jsx)("span",{children:w.resultText})})}),I&&(0,n.jsxs)(i.u_,{title:"新建产品",onClose:()=>_(!1),children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("label",{className:"mr-2",children:"产品名称 :"}),(0,n.jsx)("input",{maxLength:30,type:"text",onChange:e=>ey(e),className:"border border-gray-14 bg-gray-28 w-[21.5rem] h-[3.125rem] rounded-lg px-3"})]}),(0,n.jsxs)("div",{className:"flex items-center mt-6",children:[(0,n.jsx)("label",{className:"mr-2",children:"产品类型 :"}),(0,n.jsx)(C,{classname:"border border-gray-14 bg-gray-28 w-[21.5rem] h-[3.125rem]",onChange:e=>{Z(e)},node:es})]}),(0,n.jsxs)("div",{className:"flex items-center my-6",children:[(0,n.jsx)("label",{className:"mr-10",children:"描述 :"}),(0,n.jsx)("input",{maxLength:100,className:"border border-gray-14 rounded-lg bg-gray-28 px-3 w-[21.5rem] h-[3.125rem]",onChange:e=>{P(e.target.value)}})]}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(d.z,{onClick:()=>_(!1),className:"text-lg flex-1 bg-green-2/10 border-2 border-green-2 text-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal hover:bg-green-2/20",children:"取消"}),(0,n.jsx)(d.z,{onClick:()=>ew&&eb(),className:p()("text-lg ml-5 flex-1 bg-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal",!ew&&"bg-[#CECECE] hover:bg-[#CECECE]"),children:"确定"})]})]}),v&&(0,n.jsxs)(i.u_,{title:"上传碳足迹模型",onClose:()=>N(!1),children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("label",{className:"mr-2",children:"产品名称 : "}),(0,n.jsx)(S.P,{className:"border border-gray-14 bg-gray-28 w-[21.5rem] py-[0.935rem] ",items:er,current:R,onChange:e=>{F(e)}})]}),(0,n.jsxs)("div",{className:"flex items-center mt-6",children:[(0,n.jsx)("label",{className:"mr-2",children:"模型名称 : "}),(0,n.jsx)("input",{type:"text",maxLength:30,onChange:e=>{U(e.target.value)},className:"border border-gray-14 bg-gray-28 rounded-lg h-[3.125rem] w-[21.5rem] px-3"})]}),(0,n.jsxs)("div",{className:"flex items-center my-6",children:[(0,n.jsx)("label",{className:"mr-2",children:"碳足迹模型 : "}),(0,n.jsx)("div",{className:"cursor-pointer underline text-blue-0 max-w-[20rem] truncate","data-tooltip-id":"tooltip","data-tooltip-content":X?X.name:"",onClick:()=>ed.current.click(),children:X?X.name:"选择文件"})]}),(0,n.jsx)("input",{ref:ed,onChange:eg,type:"file",hidden:!0}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(d.z,{onClick:()=>N(!1),className:"text-lg flex-1 bg-green-2/10 border-2 border-green-2 text-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal hover:bg-green-2/20",children:"取消"}),(0,n.jsx)(d.z,{onClick:()=>eN&&ev(),className:p()("text-lg ml-5 flex-1 bg-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal",!eN&&"bg-[#CECECE] hover:bg-[#CECECE]"),children:"确定"})]})]}),H>-1&&(0,n.jsx)(i.u_,{title:"查看产品",onClose:()=>W(-1),children:(0,n.jsxs)("ul",{className:"text-lg max-w-[32rem]",children:[(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"产品名称 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:null===(e=er[H])||void 0===e?void 0:e.text})]}),(0,n.jsxs)("li",{className:"my-5",children:[(0,n.jsx)("label",{className:"inline-block w-[5.625rem]",children:"产品类型 :"}),(0,n.jsx)("span",{className:"text-gray-6",children:null===(t=er[H])||void 0===t?void 0:t.type})]}),(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"描述 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:(null===(l=er[H])||void 0===l?void 0:l.desc)?null===(m=er[H])||void 0===m?void 0:m.desc:"-"})]})]})})]})}}},function(e){e.O(0,[713,769,7307,6574,2009,570,4960,9774,2888,179],function(){return e(e.s=1344)}),_N_E=e.O()}]);