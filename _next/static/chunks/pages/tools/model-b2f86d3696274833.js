(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{1344:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/model",function(){return l(8725)}])},7921:function(e,t,l){"use strict";l.d(t,{z:function(){return r}});var n=l(1527),s=l(4875),a=l.n(s);function r(e){const{children:t,className:l,...s}=e;return(0,n.jsx)("button",{...s,className:a()(l,"hover:bg-green-28"),children:e.children})}},8503:function(e,t,l){"use strict";l.d(t,{P:function(){return m},d:function(){return x}});var n=l(1527),s=l(2132),a=l(4875),r=l.n(a),i=l(959),d=l(7067),c=l(9592),o=l(8723);function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const[l,n]=(0,i.useState)(t);return(0,i.useEffect)((()=>{n(t)}),[e,t]),{onChange:n,items:e,current:l}}function m(e){const{items:t,current:l,onChange:a,className:x}=e,m=t[l]?t[l].text:"",[u,h]=(0,c.Z)(!1),g=(0,i.useCallback)((e=>{l!==e&&a(e)}),[l]),p=(0,s.E)("t-side");return(0,o.Z)(p,(()=>u&&h(!1))),0===t.length?null:(0,n.jsxs)("div",{ref:p,className:r()("bg-white text-black px-5 py-3 text-lg rounded-lg relative w-[31.25rem] cursor-pointer mo:w-full mo:text-sm",x),onClick:()=>h(),children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("span",{className:"truncate",children:m}),u?(0,n.jsx)(d.pzk,{}):(0,n.jsx)(d._i7,{})]}),u&&(0,n.jsx)("div",{className:"max-h-[18rem] absolute left-0 w-full bg-white rounded-lg py-3 overflow-x-hidden overflow-y-auto",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,n.jsx)("div",{className:"",children:t.map(((e,t)=>(0,n.jsx)("div",{style:{},className:r()("w-full px-5 py-2 text-sm",{"text-green-2":t===l}),onClick:()=>g(t),children:e.text},"select_item_".concat(t))))})})]})}},8725:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return _}});var n=l(1527),s=l(7944),a=l(959),r=l(8288),i=l(3046),d=l(7921),c=l(9601),o=l(3190),x=l(2699),m=l.n(x),u=l(4726),h=l(818),g=l(4875),p=l.n(g),f=l(1671),j=l(9592),v=l(8723),b=l(8370),N=l(9077);const w=(e,t,l,n)=>{var s;return{data:{id:e.id.toString(),isLeaf:!(null===e||void 0===e?void 0:e.children)||0===(null===e||void 0===e||null===(s=e.children)||void 0===s?void 0:s.length),isOpenByDefault:!0,name:e.name,nestingLevel:t,node:e,onSelect:e=>{l&&l(e)},onSwitch:()=>{n&&n(e)}},nestingLevel:t,node:e}};function y(e){const{style:t,data:{name:l,nestingLevel:s,isLeaf:a,node:r,onSelect:i,onSwitch:d},isOpen:c,setOpen:o}=e;return(0,n.jsxs)("div",{style:{...t,paddingLeft:"".concat(20*s,"px"),width:"max-content",paddingRight:20},className:p()("flex items-center py-[2px]",{}),children:[(0,n.jsx)("button",{onClick:()=>o(!c),className:p()("text-xl text-gray-9 mr-[4px]",{invisible:a}),children:c?(0,n.jsx)(f.ZXJ,{}):(0,n.jsx)(f.jfD,{})}),(0,n.jsx)("div",{onClick:()=>{a?i(r):(d(),o(!c))},className:p()("flex text-sm gap-1 items-center cursor-pointer"),children:(0,n.jsx)("span",{className:p()("text-black whitespace-nowrap"),children:l})})]})}function C(e){const{node:t=[],onChange:l,classname:s}=e,[r,i]=(0,a.useState)(),d=(0,a.useRef)(null),c=(0,a.useRef)(null),[o,x]=(0,j.Z)(!1),[m,u]=(0,a.useState)(20);(0,v.Z)(c,(()=>o&&x(!1))),(0,a.useMemo)((()=>{l&&l(r)}),[r]);const h=()=>{setTimeout((()=>{var e;const t=null===(e=d.current)||void 0===e?void 0:e.firstElementChild.firstElementChild;t&&u(parseInt(t.style.height))}),0)};(0,a.useMemo)((()=>{o&&h()}),[o]);const g=(0,a.useCallback)((function*(){for(let n=0;n<t.length;n++)yield w(t[n],0,(e=>{i(e),x(!1)}),(()=>{h()}));for(;;){var e,l;const t=yield;for(let n=0;n<(null===(e=t.node)||void 0===e||null===(l=e.children)||void 0===l?void 0:l.length);n++)yield w(t.node.children[n],t.nestingLevel+1,(e=>{i(e),x(!1)}),(()=>{h()}))}}),[t]);return(0,n.jsxs)("div",{className:"",ref:c,children:[(0,n.jsx)("div",{className:p()("w-full h-10 cursor-pointer rounded-lg flex items-center px-3",s),onClick:()=>x(!o),children:r?r.name:""}),o&&(0,n.jsx)(b.Z,{children:e=>{let{width:t}=e;return(0,n.jsx)("div",{className:"bg-white rounded-lg mt-2.5 p-5 absolute",ref:d,style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)"},children:(0,n.jsx)(N.NC,{className:"",ref:d,useIsScrolling:!0,width:t-42,height:m,itemSize:22,treeWalker:g,children:y})})}})]})}var k=l(9270),S=l(8503),E=l(3273);var _=function(){var e,t,l,x;const[g,f]=(0,a.useState)(null),[j,v]=(0,a.useState)(null),[b,N]=(0,a.useState)(!1),[w,y]=(0,a.useState)(null),[_,I]=(0,a.useState)(!1),[z,T]=(0,a.useState)(1),[L,D]=(0,a.useState)(""),[M,O]=(0,a.useState)(null),[Z,P]=(0,a.useState)(""),[R,F]=(0,a.useState)(null),[U,X]=(0,a.useState)(null),[B,J]=(0,a.useState)(""),[W,q]=(0,a.useState)(-1),[A,G]=(0,a.useState)(-1),[H,K]=(0,a.useState)(0),[Q,V]=(0,a.useState)(0),[Y,$]=(0,a.useState)([]),[ee,te]=(0,a.useState)(!1),[le,ne]=(0,a.useState)(0),[se,ae]=(0,a.useState)([]),[re,ie]=(0,a.useState)([]),de=(0,a.useRef)(null),{user:ce}=(0,k.aF)(),{toast:oe}=((0,o.useRouter)(),(0,k.pm)());function xe(e,t){return e.filter((e=>void 0===t?0===e.parentId:e.parentId===t)).map((t=>(t.children=xe(e,t.id),t)))}const me=async()=>{const e=await(0,u.Ps)();ae(e?xe(null===e||void 0===e?void 0:e.records,0):[])};(0,a.useMemo)((()=>{(async()=>{te(!0);const e=await(0,u.BI)({pgNum:z,productId:A});te(!1);let t=[];e.records.map((e=>{t.push({id:e.id,modelName:e.modelName,modelUuid:e.modelUuid,productName:e.product.name,state:e.state,createTime:e.createTime,paramDetail:JSON.parse(e.paramDetail)[0].parameters.map((e=>{var t;return{context:e.name,parameter:e.context.name,amount:e.value,uncertainty:(null===e||void 0===e||null===(t=e.uncertainty)||void 0===t?void 0:t.distributionType)||null,description:e.description}}))})})),ne(e.total),$(t)})()}),[A,H,z]),(0,a.useEffect)((()=>{(async()=>{const e=await(0,u.vz)();let t=[];e.records.map((e=>{t.push({id:e.id,text:e.name,type:e.category.name,desc:e.description})})),ie(t)})()}),[Q]),(0,a.useEffect)((()=>{me()}),[]);const ue=[{title:"\u6a21\u578b\u540d\u79f0",dataIndex:"modelName",width:"220px",render:e=>(0,n.jsx)("span",{className:"max-w-[220px] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":e,children:e})},{title:"\u6a21\u578bID",dataIndex:"modelUuid",width:"210px",render:e=>(0,n.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-content":e,children:(0,E.lS)(e,8,8)})},{title:"\u4ea7\u54c1\u540d\u79f0",dataIndex:"productName",width:"190px",filterOptions:re,onFilterChange:e=>{G(e?e.id:-1)},render:e=>(0,n.jsx)("span",{className:"max-w-[150px] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":e,children:e})},{title:"\u72b6\u6001",dataIndex:"state",width:"100px",render:e=>{let t="";switch(e){case 0:t="\u5f03\u7528";break;case 1:t="\u6fc0\u6d3b";break;case-1:t="\u8349\u7a3f"}return(0,n.jsx)("span",{children:t})}},{title:"\u4e0a\u4f20\u65f6\u95f4",dataIndex:"createTime",width:"190px"},{title:"",width:"300px",render:(e,t)=>(0,n.jsxs)("div",{className:"flex flex-1 justify-between text-green-2",children:[(0,n.jsx)("span",{className:"cursor-pointer",onClick:()=>{window.open("/model?id=".concat(t.id),"_blank")},children:"\u67e5\u770b\u6a21\u578b"}),(0,n.jsx)("span",{className:"cursor-pointer",onClick:()=>v(t),children:"\u67e5\u770b\u5b9e\u666f\u6570\u636e"}),(0,n.jsx)("span",{className:"cursor-pointer",onClick:()=>f(t),children:"\u66f4\u6539\u72b6\u6001"})]})}],he=async e=>{const t="\u66f4\u6539\u72b6\u6001";y({title:t,loading:!0}),await(0,u.pF)(g.id,e),K(H+1),y({title:t,loading:!1,resultText:"\u64cd\u4f5c\u6210\u529f"}),f(null)};(0,a.useMemo)((()=>{b||(F(null),X(null))}),[b]);const ge=(0,a.useMemo)((()=>!!U&&!!B&&R>-1),[U,B,R]),pe=(0,a.useMemo)((()=>!!L&&!!M),[L,M]);return(0,n.jsxs)(s.m,{className:"text-black flex flex-col justify-between flex-1",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{className:"text-2xl font-semibold mt-8 flex justify-between items-center",children:[(0,n.jsx)("span",{children:"\u4ea7\u54c1\u5b9a\u4e49"}),(0,n.jsx)(d.z,{onClick:()=>I(!0),className:"text-lg bg-green-2 w-[7.25rem] text-white rounded-lg h-11 font-normal",children:"\u65b0\u5efa\u4ea7\u54c1"})]}),(0,n.jsx)("ul",{className:"flex flex-wrap ml-[-1.25rem]",children:re.map(((e,t)=>(0,n.jsx)("li",{onClick:()=>q(t),className:p()("bg-white px-5 py-2.5 border rounded-lg ml-5 mt-5 cursor-pointer hover:border-green-2 hover:text-green-2",W===t?"border-green-2":"border-white"),children:(0,n.jsx)("div",{className:"",children:e.text})},"productList".concat(t))))})]}),(0,n.jsxs)("h3",{className:"text-2xl font-semibold mt-6 flex justify-between items-center",children:[(0,n.jsx)("span",{children:"\u4ea7\u54c1\u78b3\u8db3\u8ff9\u6a21\u578b\u7ba1\u7406"}),(0,n.jsx)(d.z,{onClick:()=>N(!0),className:"text-lg bg-green-2 w-40 text-white rounded-lg h-11 font-normal",children:"\u4e0a\u4f20\u78b3\u8db3\u8ff9\u6a21\u578b"})]}),(0,n.jsx)("div",{className:"bg-white p-5 rounded-2xl text-base mt-5 leading-[1.625rem]",children:(0,n.jsx)(r.i,{columns:ue,loading:ee,cellClassName:(e,t,l)=>l%2===0?"bg-gray-16 ".concat(0===t&&"rounded-l-lg"," ").concat(t===ue.length-1&&"rounded-r-lg"):"",data:Y,className:"",headerStyle:{background:"#fff"}})})]}),(0,n.jsx)(c.t,{onChange:e=>{T(e)},className:"my-8",total:le,pgSize:10,pgNum:z}),null!==g&&(0,n.jsx)(i.u_,{title:"\u66f4\u6539\u72b6\u6001",onClose:()=>f(null),children:(0,n.jsx)("div",{className:"flex",children:(null===w||void 0===w?void 0:w.loading)?(0,n.jsx)(h.g,{}):(0,n.jsxs)("div",{className:"flex flex-1",children:[g.state>-2&&(0,n.jsx)(d.z,{onClick:()=>he(1===g.state?0:1),className:"text-lg bg-green-2 w-full text-white rounded-lg flex-1 h-11",children:1===g.state?"\u5f03\u7528":"\u6fc0\u6d3b"}),-1===g.state&&(0,n.jsx)(d.z,{onClick:()=>he(-2),className:"text-lg border-2 border-green-2 ml-5 bg-green-2/10 w-full text-green-2 hover:bg-green-2/20 rounded-lg flex-1 h-11",children:"\u5220\u9664"})]})})}),!!j&&(0,n.jsx)(i.u_,{title:j.modelName+"\u6a21\u578b\u4e2d\u7684\u5b9e\u666f\u8f93\u5165\u9879",onClose:()=>v(null),children:(0,n.jsx)("div",{className:"flex w-[60rem] min-h-[300px]",children:(0,n.jsx)(r.i,{columns:[{title:"\u5b9e\u666f\u8f93\u5165\u9879",dataIndex:"context"},{title:"\u8fc7\u7a0b\u540d\u79f0",dataIndex:"parameter"},{title:"\u53c2\u8003\u503c",dataIndex:"amount"},{title:"\u4e0d\u786e\u5b9a\u6027",dataIndex:"uncertainty",emptyText:"-"}],data:j.paramDetail})})}),w&&(0,n.jsx)(i.u_,{title:(null===w||void 0===w?void 0:w.title)||"\u64cd\u4f5c",onClose:()=>y(null),children:(0,n.jsx)("div",{className:"text-center pb-2",children:w.loading?(0,n.jsx)(h.g,{}):(0,n.jsx)("span",{children:w.resultText})})}),_&&(0,n.jsxs)(i.u_,{title:"\u65b0\u5efa\u4ea7\u54c1",onClose:()=>I(!1),children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("label",{className:"mr-2",children:"\u4ea7\u54c1\u540d\u79f0 :"}),(0,n.jsx)("input",{maxLength:30,type:"text",onChange:e=>(e=>{D(e.target.value)})(e),className:"border border-gray-14 bg-gray-28 w-[21.5rem] h-[3.125rem] rounded-lg px-3"})]}),(0,n.jsxs)("div",{className:"mt-6 flex items-center",children:[(0,n.jsx)("label",{className:"mr-2",children:"\u4ea7\u54c1\u7c7b\u578b :"}),(0,n.jsx)(C,{classname:"border border-gray-14 bg-gray-28 w-[21.5rem] h-[3.125rem]",onChange:e=>{O(e)},node:se})]}),(0,n.jsxs)("div",{className:"my-6 flex items-center",children:[(0,n.jsx)("label",{className:"mr-10",children:"\u63cf\u8ff0 :"}),(0,n.jsx)("input",{maxLength:100,className:"border border-gray-14 rounded-lg bg-gray-28 px-3 w-[21.5rem] h-[3.125rem]",onChange:e=>{P(e.target.value)}})]}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(d.z,{onClick:()=>I(!1),className:"text-lg flex-1 bg-green-2/10 border-2 border-green-2 text-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal hover:bg-green-2/20",children:"\u53d6\u6d88"}),(0,n.jsx)(d.z,{onClick:()=>pe&&(async()=>{if(!(null===M||void 0===M?void 0:M.id))return!1;if(m().find(re,(e=>e.text===L)))return oe({type:"error",msg:"\u4ea7\u54c1\u540d\u79f0\u5df2\u7ecf\u5b58\u5728"}),!1;I(!1),await(0,u.Mt)({name:L,categoryId:null===M||void 0===M?void 0:M.id,orgId:ce.orgId,description:Z}),oe({type:"info",msg:"\u64cd\u4f5c\u6210\u529f\uff01"}),V(Q+1)})(),className:p()("text-lg ml-5 flex-1 bg-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal",!pe&&"bg-[#CECECE] hover:bg-[#CECECE]"),children:"\u786e\u5b9a"})]})]}),b&&(0,n.jsxs)(i.u_,{title:"\u4e0a\u4f20\u78b3\u8db3\u8ff9\u6a21\u578b",onClose:()=>N(!1),children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("label",{className:"mr-2",children:"\u4ea7\u54c1\u540d\u79f0 : "}),(0,n.jsx)(S.P,{className:"border border-gray-14 bg-gray-28 w-[21.5rem] h-[3.125rem]",items:re,current:R,onChange:e=>{F(e)}})]}),(0,n.jsxs)("div",{className:"flex items-center mt-6",children:[(0,n.jsx)("label",{className:"mr-2",children:"\u6a21\u578b\u540d\u79f0 : "}),(0,n.jsx)("input",{type:"text",maxLength:30,onChange:e=>{J(e.target.value)},className:"border border-gray-14 bg-gray-28 rounded h-[3.125rem] w-[21.5rem] px-3"})]}),(0,n.jsxs)("div",{className:"flex items-center my-6",children:[(0,n.jsx)("label",{className:"mr-2",children:"\u78b3\u8db3\u8ff9\u6a21\u578b : "}),(0,n.jsx)("div",{className:"cursor-pointer underline text-blue-0 max-w-[20rem] truncate","data-tooltip-id":"tooltip","data-tooltip-content":U?U.name:"",onClick:()=>de.current.click(),children:U?U.name:"\u9009\u62e9\u6587\u4ef6"})]}),(0,n.jsx)("input",{ref:de,onChange:async e=>{X(e.target.files[0])},type:"file",hidden:!0}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(d.z,{onClick:()=>N(!1),className:"text-lg flex-1 bg-green-2/10 border-2 border-green-2 text-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal hover:bg-green-2/20",children:"\u53d6\u6d88"}),(0,n.jsx)(d.z,{onClick:()=>ge&&(async()=>{const e=new FormData;e.append("name",B),e.append("file",U),e.append("productId",re[R].id);const t="\u4e0a\u4f20\u78b3\u8db3\u8ff9\u6a21\u578b";y({title:t,loading:!0}),de.current.value="",N(!1),await(0,u.av)(e)?(y({title:t,loading:!1,resultText:"\u4e0a\u4f20\u6210\u529f\uff01"}),N(!1),K(H+1)):y({title:t,loading:!1,resultText:"\u4e0a\u4f20\u5931\u8d25\uff01"})})(),className:p()("text-lg ml-5 flex-1 bg-green-2 w-40 text-white rounded-lg h-[2.875rem] font-normal",!ge&&"bg-[#CECECE] hover:bg-[#CECECE]"),children:"\u786e\u5b9a"})]})]}),W>-1&&(0,n.jsx)(i.u_,{title:"\u67e5\u770b\u4ea7\u54c1",onClose:()=>q(-1),children:(0,n.jsxs)("ul",{className:"text-lg max-w-[32rem]",children:[(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"\u4ea7\u54c1\u540d\u79f0 :"}),(0,n.jsx)("span",{className:"text-gray-6",children:null===(e=re[W])||void 0===e?void 0:e.text})]}),(0,n.jsxs)("li",{className:"my-5",children:[(0,n.jsx)("label",{className:"inline-block w-[5.625rem]",children:"\u4ea7\u54c1\u7c7b\u578b :"}),(0,n.jsx)("span",{className:"text-gray-6",children:null===(t=re[W])||void 0===t?void 0:t.type})]}),(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"\u63cf\u8ff0 :"}),(0,n.jsx)("span",{className:"text-gray-6 break-all",children:(null===(l=re[W])||void 0===l?void 0:l.desc)?null===(x=re[W])||void 0===x?void 0:x.desc:"-"})]})]})})]})}}},function(e){e.O(0,[713,769,307,574,215,570,960,774,888,179],(function(){return t=1344,e(e.s=t);var t}));var t=e.O();_N_E=t}]);