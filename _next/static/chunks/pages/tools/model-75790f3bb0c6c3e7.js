(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8200],{9069:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/model",function(){return l(4494)}])},1191:function(e,t,l){"use strict";l.d(t,{z:function(){return r}});var n=l(1527),a=l(4875),s=l.n(a);function r(e){let{children:t,className:l,...a}=e;return(0,n.jsx)("button",{...a,className:s()(l,"hover:bg-green-28"),children:e.children})}},7390:function(e,t,l){"use strict";l.d(t,{P:function(){return u},d:function(){return m}});var n=l(1527),a=l(765),s=l(4875),r=l.n(s),i=l(959),d=l(7067),c=l(9592),o=l(8723);function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[l,n]=(0,i.useState)(t);return(0,i.useEffect)(()=>{n(t)},[e,t]),{onChange:n,items:e,current:l}}function u(e){let{items:t,current:l,onChange:s,className:m}=e,u=t[l]?t[l].text:"",[x,h]=(0,c.Z)(!1),g=(0,i.useCallback)(e=>{l!==e&&s(e)},[l]),f=(0,a.E)("t-side");return((0,o.Z)(f,()=>x&&h(!1)),0===t.length)?null:(0,n.jsxs)("div",{ref:f,className:r()("bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",m),onClick:()=>h(),children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("span",{className:"truncate",children:u}),x?(0,n.jsx)(d.pzk,{}):(0,n.jsx)(d._i7,{})]}),x&&(0,n.jsx)("div",{className:"max-h-[18rem] absolute left-0 w-full bg-white  rounded-lg py-3 overflow-x-hidden overflow-y-auto",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,n.jsx)("div",{className:"",children:t.map((e,t)=>(0,n.jsx)("div",{style:{},className:r()("w-full break-all px-5 py-2 text-sm",{"text-green-2":t===l}),onClick:()=>g(t),children:e.text},"select_item_".concat(t)))})})]})}},4494:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return E}});var n=l(1527),a=l(1191),s=l(9049),r=l(9869),i=l(9346),d=l(1600),c=l(959),o=l(834),m=l(5858),u=l(7390),x=l(4875),h=l.n(x),g=l(1671),f=l(9592),p=l(8723),j=l(8370),v=l(9550);let b=(e,t,l,n)=>{var a;return{data:{id:e.id.toString(),isLeaf:!(null==e?void 0:e.children)||(null==e?void 0:null===(a=e.children)||void 0===a?void 0:a.length)===0,isOpenByDefault:!0,name:e.name,nestingLevel:t,node:e,onSelect:e=>{l&&l(e)},onSwitch:()=>{n&&n(e)}},nestingLevel:t,node:e}};function N(e){let{style:t,data:{name:l,nestingLevel:a,isLeaf:s,node:r,onSelect:i,onSwitch:d},isOpen:c,setOpen:o}=e;return(0,n.jsxs)("div",{style:{...t,paddingLeft:"".concat(20*a,"px"),width:"max-content",paddingRight:20},className:h()("flex items-center py-[2px]",{}),children:[(0,n.jsx)("button",{onClick:()=>o(!c),className:h()("text-xl text-gray-9 mr-[4px]",{invisible:s}),children:c?(0,n.jsx)(g.ZXJ,{}):(0,n.jsx)(g.jfD,{})}),(0,n.jsx)("div",{onClick:()=>{s?i(r):(d(),o(!c))},className:h()("flex text-sm gap-1 items-center cursor-pointer"),children:(0,n.jsx)("span",{className:h()("text-black whitespace-nowrap"),children:l})})]})}function w(e){let{node:t=[],onChange:l,classname:a}=e,[s,r]=(0,c.useState)(),i=(0,c.useRef)(null),d=(0,c.useRef)(null),[o,m]=(0,f.Z)(!1),[u,x]=(0,c.useState)(20);(0,p.Z)(d,()=>o&&m(!1)),(0,c.useEffect)(()=>{l&&l(s)},[s]);let w=()=>{setTimeout(()=>{var e;let t=null===(e=i.current)||void 0===e?void 0:e.firstElementChild.firstElementChild;t&&x(parseInt(t.style.height))},0)};(0,c.useEffect)(()=>{o&&w()},[o]);let y=(0,c.useCallback)(function*(){for(let e=0;e<t.length;e++)yield b(t[e],0,e=>{r(e),m(!1)},()=>{w()});for(;;){var e,l;let t=yield;for(let n=0;n<(null===(l=t.node)||void 0===l?void 0:null===(e=l.children)||void 0===e?void 0:e.length);n++)yield b(t.node.children[n],t.nestingLevel+1,e=>{r(e),m(!1)},()=>{w()})}},[t]);return(0,n.jsxs)("div",{className:"",ref:d,children:[(0,n.jsxs)("div",{className:h()("w-full justify-between h-10 cursor-pointer rounded-lg flex items-center px-3",a),onClick:()=>m(!o),children:[(0,n.jsx)("span",{children:s?s.name:""}),(0,n.jsx)("button",{onClick:()=>m(!o),className:h()("text-xl mr-[4px]"),children:o?(0,n.jsx)(g.jfD,{className:"rotate-[-90deg]"}):(0,n.jsx)(g.ZXJ,{})})]}),o&&(0,n.jsx)(j.Z,{children:e=>{let{width:t}=e;return(0,n.jsx)("div",{className:"bg-white rounded-lg mt-2.5 p-5 absolute",ref:i,style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)"},children:(0,n.jsx)(v.NC,{className:"",ref:i,useIsScrolling:!0,width:t-42,height:u,itemSize:22,treeWalker:y,children:N})})}})]})}var y=l(6699),C=l(9701),k=l(2699),S=l.n(k),E=function(){var e,t,l,x;let[g,f]=(0,c.useState)(null),[p,j]=(0,c.useState)(null),[v,b]=(0,c.useState)(!1),[N,k]=(0,c.useState)(null),[E,I]=(0,c.useState)(!1),[_,T]=(0,c.useState)(1),[z,D]=(0,c.useState)(""),[L,Z]=(0,c.useState)(null),[M,P]=(0,c.useState)(""),[H,O]=(0,c.useState)(null),[R,X]=(0,c.useState)(null),[B,F]=(0,c.useState)(""),[J,U]=(0,c.useState)(-1),[K,W]=(0,c.useState)(-1),[q,A]=(0,c.useState)(0),[G,Q]=(0,c.useState)(0),[V,Y]=(0,c.useState)([]),[$,ee]=(0,c.useState)(!1),[et,el]=(0,c.useState)(0),[en,ea]=(0,c.useState)([]),[es,er]=(0,c.useState)([]),ei=(0,c.useRef)(null),{user:ed}=(0,o.aF)(),{toast:ec}=(0,o.pm)(),eo=async()=>{ee(!0);let e=await (0,y.BI)({pgNum:_,productId:K});ee(!1);let t=[];e.records.map(e=>{var l,n;t.push({id:e.id,modelName:e.modelName,modelUuid:e.modelUuid,productName:e.product.name,state:e.state,createTime:e.createTime,paramDetail:(null===(n=JSON.parse(e.paramDetail)[0])||void 0===n?void 0:null===(l=n.parameters)||void 0===l?void 0:l.map(e=>{var t;return{context:e.name,parameter:e.context.name,amount:e.value,uncertainty:(null==e?void 0:null===(t=e.uncertainty)||void 0===t?void 0:t.distributionType)||null,description:e.description}}))||[]})}),el(e.total),Y(t)},em=async()=>{let e=await (0,y.Ps)();ea(e?function e(t,l){return t.filter(e=>void 0===l?0===e.parentId:e.parentId===l).map(l=>(l.children=e(t,l.id),l))}(null==e?void 0:e.records,0):[])},eu=async()=>{let e=await (0,y.vz)(),t=[];e.records.map(e=>{t.push({id:e.id,text:e.name,type:e.category.name,desc:e.description})}),er(t)};(0,c.useEffect)(()=>{eo()},[K,q,_]),(0,c.useEffect)(()=>{eu()},[G]),(0,c.useEffect)(()=>{em()},[]);let ex=async e=>{X(e.target.files[0])},eh=(0,c.useMemo)(()=>[{title:"产品系统",dataIndex:"modelName",width:"23.75rem",render:e=>(0,n.jsx)("span",{className:"max-w-[23.75rem] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":e,children:e})},{title:"产品系统ID",dataIndex:"modelUuid",width:"12.5rem",render:e=>(0,n.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-content":e,children:(0,C.lS)(e,8,8)})},{title:"变更人",dataIndex:"createTime",width:"12.5rem",render:e=>e},{title:"变更时间",dataIndex:"createTime",width:"12.5rem",render:e=>(0,n.jsx)("div",{className:"break-keep whitespace-nowrap",children:e})},{title:"版本",dataIndex:"createTime",width:"9.375rem",render:e=>(0,n.jsx)("div",{className:"break-keep whitespace-nowrap",children:e})},{title:"",width:"20rem",render:(e,t)=>(0,n.jsx)("div",{className:"flex justify-between flex-1 text-green-2 break-keep",children:(0,n.jsx)("div",{className:"flex items-center justify-center cursor-pointer",children:"编辑"})})}],[]),eg=(0,c.useMemo)(()=>[{title:"实景输入项",dataIndex:"context",width:"20%"},{title:"过程名称",dataIndex:"parameter",width:"30%"},{title:"参考值",dataIndex:"amount",width:"20%"},{title:"不确定性",dataIndex:"uncertainty",emptyText:"-",width:"30%"}],[]),ef=async e=>{let t="更改状态";k({title:t,loading:!0}),await (0,y.pF)(g.id,e),A(q+1),k({title:t,loading:!1,resultText:"操作成功"}),f(null)},ep=async()=>{if(!(null==L?void 0:L.id))return!1;let e=S().find(es,e=>e.text===z);if(e)return ec({type:"error",msg:"产品名称已经存在"}),!1;I(!1),await (0,y.Mt)({name:z,categoryId:null==L?void 0:L.id,orgId:ed.orgId,description:M}),ec({type:"info",msg:"新建成功！"});let t=document.getElementById("productList");t&&(t.scrollTop=t.scrollHeight),Q(G+1)},ej=async()=>{let e=new FormData;e.append("name",B),e.append("file",R),e.append("productId",es[H].id);let t="上传碳足迹模型";k({title:t,loading:!0}),ei.current.value="",b(!1);let l=await (0,y.av)(e);l?(k({title:t,loading:!1,resultText:"上传成功！"}),b(!1),T(1),A(q+1)):k({title:t,loading:!1,resultText:"上传失败！"})};(0,c.useEffect)(()=>{v||(O(null),X(null))},[v]);let ev=(0,c.useMemo)(()=>!!R&&!!B&&H>-1,[R,B,H]),eb=(0,c.useMemo)(()=>!!z&&!!L,[z,L]),eN=(0,c.useCallback)(e=>{D(e.target.value)},[]);return(0,n.jsxs)(d.m,{isNew:!0,className:"flex flex-col justify-between flex-1 pb-12 text-black ",children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,n.jsx)("span",{children:"我的产品系统"}),(0,n.jsx)(a.z,{onClick:()=>b(!0),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建产品系统"})]}),(0,n.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,n.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,n.jsx)("div",{className:"min-h-[20.25rem] text-base leading-[1.625rem] min-w-[68.25rem]",children:(0,n.jsx)(i.i,{columns:eh,columnsHeight:"h-[3.125rem]",loading:$,mouseHoverKey:"id",data:V,className:"",headerStyle:{background:"#fff"}})})})})]}),(0,n.jsx)(r.t,{onChange:e=>{T(e)},className:"my-8",total:et,pgSize:10,pgNum:_}),null!==g&&(0,n.jsx)(s.u_,{title:"更改状态",onClose:()=>f(null),children:(0,n.jsx)("div",{className:"flex",children:(null==N?void 0:N.loading)?(0,n.jsx)(m.g,{}):(0,n.jsxs)("div",{className:"flex flex-1",children:[g.state>-2&&(0,n.jsx)(a.z,{onClick:()=>ef(1===g.state?0:1),className:"flex-1 w-full text-lg text-white rounded-lg bg-green-2 h-11",children:1===g.state?"弃用":"激活"}),-1===g.state&&(0,n.jsx)(a.z,{onClick:()=>ef(-2),className:"flex-1 w-full ml-5 text-lg border-2 rounded-lg border-green-2 bg-green-2/10 text-green-2 hover:bg-green-2/20 h-11",children:"删除"})]})})}),!!p&&(0,n.jsx)(s.u_,{title:p.modelName+"模型中的实景输入项",onClose:()=>j(null),children:(0,n.jsxs)("div",{className:"flex w-[60rem] min-h-[16rem] flex-col pb-2",children:[(0,n.jsx)("ul",{className:"flex mb-1",children:eg.map((e,t)=>(0,n.jsx)("li",{className:"px-3 text-lg font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,n.jsx)("div",{className:"max-h-[15rem] min-h-[5rem] overflow-y-auto",children:(0,n.jsx)(i.i,{size:"big",hiddenHeader:!0,columns:eg,data:p.paramDetail})})]})}),N&&(0,n.jsx)(s.u_,{title:(null==N?void 0:N.title)||"操作",onClose:()=>k(null),children:(0,n.jsx)("div",{className:"pb-2 text-center",children:N.loading?(0,n.jsx)(m.g,{}):(0,n.jsx)("span",{children:N.resultText})})}),E&&(0,n.jsxs)(s.u_,{title:"新建产品",onClose:()=>I(!1),children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("label",{className:"mr-2",children:"产品名称 :"}),(0,n.jsx)("input",{maxLength:30,type:"text",onChange:eN,className:"border border-gray-14 bg-gray-28 w-[21.5rem] h-[3.125rem] rounded-lg px-3"})]}),(0,n.jsxs)("div",{className:"flex items-center mt-6",children:[(0,n.jsx)("label",{className:"mr-2",children:"产品类型 :"}),(0,n.jsx)(w,{classname:"border border-gray-14 bg-gray-28 w-[21.5rem] h-[3.125rem]",onChange:Z,node:en})]}),(0,n.jsxs)("div",{className:"flex items-center my-6",children:[(0,n.jsx)("label",{className:"mr-10",children:"描述 :"}),(0,n.jsx)("input",{maxLength:100,className:"border border-gray-14 rounded-lg bg-gray-28 px-3 w-[21.5rem] h-[3.125rem]",onChange:e=>{P(e.target.value)}})]}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(a.z,{onClick:()=>I(!1),className:"text-lg flex-1 bg-green-2/10 border-2 border-green-2 text-green-2 w-40 rounded-lg h-[2.875rem] font-normal hover:bg-green-2/20",children:"取消"}),(0,n.jsx)(a.z,{onClick:()=>eb&&ep(),className:h()("text-lg ml-5 flex-1 bg-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal",!eb&&"bg-[#CECECE] hover:bg-[#CECECE]"),children:"确定"})]})]}),v&&(0,n.jsxs)(s.u_,{title:"上传碳足迹模型",onClose:()=>b(!1),children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("label",{className:"mr-2",children:"产品名称 : "}),(0,n.jsx)(u.P,{className:"border border-gray-14 bg-gray-28 w-[21.5rem] py-[0.935rem] ",items:es,current:H,onChange:e=>{O(e)}})]}),(0,n.jsxs)("div",{className:"flex items-center mt-6",children:[(0,n.jsx)("label",{className:"mr-2",children:"模型名称 : "}),(0,n.jsx)("input",{type:"text",maxLength:30,onChange:e=>{F(e.target.value)},className:"border border-gray-14 bg-gray-28 rounded-lg h-[3.125rem] w-[21.5rem] px-3"})]}),(0,n.jsxs)("div",{className:"flex items-center my-6",children:[(0,n.jsx)("label",{className:"mr-2",children:"碳足迹模型 : "}),(0,n.jsx)("div",{className:"cursor-pointer underline text-blue-0 max-w-[20rem] truncate","data-tooltip-id":"tooltip","data-tooltip-content":R?R.name:"",onClick:()=>ei.current.click(),children:R?R.name:"选择文件"})]}),(0,n.jsx)("input",{ref:ei,onChange:ex,type:"file",hidden:!0}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(a.z,{onClick:()=>b(!1),className:"text-lg flex-1 bg-green-2/10 border-2 border-green-2 text-green-2 w-40 rounded-lg h-[2.875rem] font-normal hover:bg-green-2/20",children:"取消"}),(0,n.jsx)(a.z,{onClick:()=>ev&&ej(),className:h()("text-lg ml-5 flex-1 bg-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal",!ev&&"bg-[#CECECE] hover:bg-[#CECECE]"),children:"确定"})]})]}),J>-1&&(0,n.jsx)(s.u_,{title:"查看产品",onClose:()=>U(-1),children:(0,n.jsxs)("ul",{className:"text-lg max-w-[32rem]",children:[(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"产品名称 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:null===(e=es[J])||void 0===e?void 0:e.text})]}),(0,n.jsxs)("li",{className:"my-5",children:[(0,n.jsx)("label",{className:"inline-block w-[5.625rem]",children:"产品类型 :"}),(0,n.jsx)("span",{className:"text-gray-6",children:null===(t=es[J])||void 0===t?void 0:t.type})]}),(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"描述 :"}),(0,n.jsx)("span",{className:"break-all text-gray-6",children:(null===(l=es[J])||void 0===l?void 0:l.desc)?null===(x=es[J])||void 0===x?void 0:x.desc:"-"})]})]})})]})}}},function(e){e.O(0,[713,769,7307,6574,2865,2351,9829,9774,2888,179],function(){return e(e.s=9069)}),_N_E=e.O()}]);