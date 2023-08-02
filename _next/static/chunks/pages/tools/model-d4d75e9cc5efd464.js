(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8200],{9069:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/model",function(){return n(6929)}])},5266:function(e,t,n){"use strict";n.d(t,{E:function(){return s},K:function(){return r}});var a=n(1527),l=n(4875),i=n.n(l);function s(e){let{value:t,bg:n="#dddddd",color:l="#29953A",className:s}=e;return(0,a.jsx)("div",{className:i()(s,"w-full h-[.625rem]"),style:{background:n},children:(0,a.jsx)("div",{style:{width:"".concat(t,"%"),transition:"width 200ms ease",background:l},className:"h-full"})})}function r(e){let{index:t,full:n,bg:l="#dddddd",color:s="#29953A",className:r}=e;return(0,a.jsx)("div",{className:i()(r,"w-full h-[.625rem]"),style:{background:l},children:(0,a.jsx)("div",{style:{marginLeft:n?"0":"".concat(25*t,"%"),width:n?"100%":"25%",background:s},className:"h-full"})})}},6929:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=n(1527),l=n(1191),i=n(9049),s=n(9869),r=n(9346),o=n(1600),d=n(959),c=n(834),u=n(5858),m=n(6699),x=n(9701);n(2699);var f=n(4875),h=n.n(f),p=n(9592),v=n(8723);function g(e){let{items:t,children:n,onClick:l,className:i}=e,[s,r]=(0,p.Z)(!1),o=(0,d.useRef)(null);return((0,v.Z)(o,()=>s&&r(!1)),0===t.length)?null:(0,a.jsxs)("div",{ref:o,className:h()("bg-white text-black px-5 py-3 text-lg rounded-lg relative cursor-pointer",i),onClick:()=>r(),children:[(0,a.jsx)("div",{className:"flex justify-between items-center",children:n}),s&&(0,a.jsx)("div",{className:"max-h-[18rem] absolute left-0 w-full bg-white  rounded-lg py-3 overflow-x-hidden overflow-y-auto",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,a.jsx)("div",{className:"",children:t.map((e,t)=>(0,a.jsx)("div",{className:h()("w-full break-all px-5 py-2 text-sm hover:bg-gray-16"),onClick:()=>l&&l(t),children:e.text},"select_item_".concat(t)))})})]})}var j=n(3752),b=n(5088);function w(e){let{ps:t,...n}=e,[l,s]=(0,p.Z)(!1),{userData:r}=(0,c.oR)();return(0,a.jsxs)(i.u_,{title:t.modelName,...n,children:[(0,a.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] max-h-[80vh]",children:[(0,a.jsx)(C,{tit:"UID",value:"PS-1"}),(0,a.jsx)(C,{tit:"版本",value:"1"}),(0,a.jsx)(C,{tit:"描述",value:"ES6 2023 120kWh Sports"}),(0,a.jsx)(C,{tit:"状态",value:(0,a.jsx)(y,{status:2})}),(0,a.jsx)(C,{tit:"变更人",value:(null==r?void 0:r.name)||"-"}),(0,a.jsx)(C,{tit:"产品系统LCA文件",value:(0,a.jsx)(k,{isRead:!0})}),(0,a.jsx)(C,{tit:"实景数据",value:(0,a.jsx)(N,{action:"查看"})}),(0,a.jsx)(E,{})]}),l&&(0,a.jsx)(b.d,{onClose:()=>s(!1)})]})}function y(e){let{status:t}=e;return 0===t?(0,a.jsx)("div",{className:"text-neutral-400 text-base font-normal leading-none",children:"草稿"}):(0,a.jsx)("div",{className:h()("w-min whitespace-nowrap h-6 px-2.5 py-1 bg-opacity-10 rounded justify-start items-center gap-2.5 inline-flex",{"bg-rose-500":1!==t,"bg-green-600":1===t}),children:(0,a.jsx)("div",{className:h()("text-green-600 text-base font-normal leading-none",{"text-rose-500":1!==t,"text-green-600":1===t}),children:1===t?"当前使用":"过去版本"})})}function N(e){let{action:t,onClick:n,to:l}=e;return l?(0,a.jsx)("a",{href:l,className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded text-black text-base font-normal leading-none",children:t}):(0,a.jsx)("div",{className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded justify-start items-center gap-2.5 inline-flex cursor-pointer",onClick:n,children:(0,a.jsx)("div",{className:"text-black text-base font-normal leading-none",children:t})})}function k(e){let{psId:t,modelId:n,isNew:l,isRead:i,file:s,onFileChange:r}=e,o=(0,d.useRef)(null);return(0,a.jsxs)("div",{className:"text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5",children:[l&&(null==s?void 0:s.name),i?(0,a.jsx)(N,{to:"/model?id=".concat(n),action:"在线查看"}):l?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{ref:o,type:"file",hidden:!0,accept:".zip",onChange:r}),(0,a.jsx)(N,{action:"选择模型",onClick:e=>{var t;null===(t=o.current)||void 0===t||t.click()}})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N,{to:"/model?id=".concat(n),action:"在线查看"}),(0,a.jsx)(N,{action:"更新模型"})]})]})}function C(e){let t="string"==typeof e.value||"number"==typeof e.value;return(0,a.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,a.jsxs)("div",{className:"text-black text-base font-normal leading-normal",children:[e.tit,": "]}),t?(0,a.jsx)("div",{className:"text-neutral-400 text-base font-normal leading-none",children:e.value}):e.value]})}function S(e){let{defaultValue:t,...n}=e;return(0,a.jsx)("input",{type:"text",className:"w-full px-5 py-4 bg-stone-50 rounded-lg border border-neutral-200 justify-start items-start gap-2.5 inline-flex text-black text-base font-normal leading-none",...n})}function E(){var e,t;let{userData:n}=(0,c.oR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{tit:"组织名称",value:(null==n?void 0:null===(e=n.organization)||void 0===e?void 0:e.name)||"-"}),(0,a.jsx)(C,{tit:"组织编号",value:(null==n?void 0:null===(t=n.organization)||void 0===t?void 0:t.id)||"-"})]})}function _(e){let{ps:t,...n}=e,{userData:s}=(0,c.oR)(),[r,o]=(0,d.useState)("ES6 2023 120kWh Sports"),[u,m]=(0,d.useState)(!1),x=(0,j.R)(()=>{}),[f,h]=(0,p.Z)(!1),[v,_]=(0,p.Z)(!1);return(0,a.jsxs)(i.u_,{title:t.modelName,...n,children:[(0,a.jsxs)("div",{className:"flex flex-col gap-5  w-full min-w-[40rem] max-h-[70vh] overflow-y-auto",children:[(0,a.jsx)(C,{tit:"UID",value:"PS-1"}),(0,a.jsx)(C,{tit:"版本",value:(0,a.jsxs)("div",{className:"flex justify-between items-center gap-2.5 px-5 py-4 bg-stone-50 rounded-lg border border-neutral-200",children:["3",(0,a.jsx)(g,{items:[{text:"版本3"},{text:"版本2"},{text:"版本1"}],className:"px-2.5 py-1 bg-white rounded border border-neutral-200 text-stone-500 text-base font-normal leading-none",onClick:()=>{_(!0)},children:"查看历史版本"})]})}),(0,a.jsx)(C,{tit:"描述",value:(0,a.jsx)(S,{value:r,onChange:e=>o(e.target.value)})}),(0,a.jsx)(C,{tit:"状态",value:(0,a.jsx)(y,{status:1})}),(0,a.jsx)(C,{tit:"变更人",value:(null==s?void 0:s.name)||"-"}),(0,a.jsx)(C,{tit:"产品系统LCA文件",value:(0,a.jsx)(k,{})}),(0,a.jsx)(C,{tit:"实景数据",value:(0,a.jsx)(N,{action:"查看",onClick:()=>h(!0)})}),(0,a.jsx)(E,{})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2.5 mt-5",children:[(0,a.jsx)(l.u,{busy:u,disabled:!1,onClick:x,children:"提交更新"}),(0,a.jsx)("div",{className:"text-black text-sm font-normal",children:"* 点击提交更新按钮后，当前的产品系统版本将自动更新。原先版本的信息可以在历史版本中查询。"})]}),f&&(0,a.jsx)(b.d,{onClose:()=>h(!1)}),v&&(0,a.jsx)(w,{onClose:()=>_(!1),ps:t})]})}var M=n(5266);function I(e){let{onSuccess:t,onClose:n,...s}=e,[r,o]=(0,d.useState)(""),[c,u]=(0,d.useState)(""),[x,f]=(0,d.useState)(!1),[h,p]=(0,d.useState)(0),[v,g]=(0,d.useState)(null),b=!v||!r||!c,w=(0,d.useCallback)(e=>{var t;g(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},[]),N=(0,d.useRef)(),_=(0,d.useCallback)(()=>{var e;null===(e=N.current)||void 0===e||e.abort(),n&&n()},[n]),I=(0,j.R)(()=>{if(!v)return;f(!0);let e=new FormData;e.append("name",v.name),e.append("file",v),N.current=new AbortController,(0,m.av)(e,{signal:N.current.signal,onUploadProgress:e=>{p(Math.min(Math.round(100*(e.rate||0)),100))}}).then(()=>{}).then(()=>{t&&t(),_()}).catch(()=>{}).finally(()=>{f(!1),p(0)})});return(0,a.jsx)(i.u_,{...s,title:"新建产品系统",outClose:!1,onClose:_,children:(0,a.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] max-h-[80vh]",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-5 w-full flex-1 h-max overflow-y-auto",children:[(0,a.jsx)(C,{tit:"产品系统名称",value:(0,a.jsx)(S,{value:r,onChange:e=>o(e.target.value)})}),(0,a.jsx)(C,{tit:"描述",value:(0,a.jsx)(S,{value:c,onChange:e=>u(e.target.value)})}),(0,a.jsx)(C,{tit:"状态",value:(0,a.jsx)(y,{status:0})}),(0,a.jsx)(C,{tit:"产品系统LCA文件",value:(0,a.jsx)(k,{isNew:!0,file:v,onFileChange:w})}),(0,a.jsx)(E,{})]}),(0,a.jsx)("div",{className:"flex gap-5 w-full",children:x?(0,a.jsx)(M.E,{value:h,className:"rounded-lg my-3 overflow-hidden"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:_,children:"取消"}),(0,a.jsx)(l.u,{className:"flex-1",onClick:I,disabled:b,children:"确定"})]})})]})})}var T=function(){var e,t,n,f;let[h,p]=(0,d.useState)(null),[v,g]=(0,d.useState)(null),[j,b]=(0,d.useState)(),[w,y]=(0,d.useState)(null),[N,k]=(0,d.useState)(!1),[C,S]=(0,d.useState)(1),[E,M]=(0,d.useState)(""),[T,L]=(0,d.useState)(null),[R,W]=(0,d.useState)(""),[z,O]=(0,d.useState)(null),[A,P]=(0,d.useState)(null),[$,F]=(0,d.useState)(""),[Z,D]=(0,d.useState)(-1),[U,B]=(0,d.useState)(-1),[H,q]=(0,d.useState)(0),[X,K]=(0,d.useState)(0),[J,V]=(0,d.useState)([]),[Y,G]=(0,d.useState)(!1),[Q,ee]=(0,d.useState)(0),[et,en]=(0,d.useState)([]),[ea,el]=(0,d.useState)([]);(0,d.useRef)(null);let{user:ei}=(0,c.aF)(),{toast:es}=(0,c.pm)(),er=async()=>{G(!0);let e=await (0,m.BI)({pgNum:C,productId:U});G(!1);let t=[];e.records.map(e=>{var n,a;t.push({id:e.id,modelName:e.modelName,modelUuid:e.modelUuid,productName:e.product.name,state:e.state,createTime:e.createTime,paramDetail:(null===(a=JSON.parse(e.paramDetail)[0])||void 0===a?void 0:null===(n=a.parameters)||void 0===n?void 0:n.map(e=>{var t;return{context:e.name,parameter:e.context.name,amount:e.value,uncertainty:(null==e?void 0:null===(t=e.uncertainty)||void 0===t?void 0:t.distributionType)||null,description:e.description}}))||[]})}),ee(e.total),V(t)},eo=async()=>{let e=await (0,m.Ps)();en(e?function e(t,n){return t.filter(e=>void 0===n?0===e.parentId:e.parentId===n).map(n=>(n.children=e(t,n.id),n))}(null==e?void 0:e.records,0):[])},ed=async()=>{let e=await (0,m.vz)(),t=[];e.records.map(e=>{t.push({id:e.id,text:e.name,type:e.category.name,desc:e.description})}),el(t)};(0,d.useEffect)(()=>{er()},[U,H,C]),(0,d.useEffect)(()=>{ed()},[X]),(0,d.useEffect)(()=>{eo()},[]);let ec=(0,d.useMemo)(()=>[{title:"产品系统",dataIndex:"modelName",width:"23.75rem",render:e=>(0,a.jsx)("span",{className:"max-w-[23.75rem] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":e,children:e})},{title:"产品系统ID",dataIndex:"modelUuid",width:"12.5rem",render:e=>(0,a.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-content":e,children:(0,x.lS)(e,8,8)})},{title:"变更人",dataIndex:"createTime",width:"12.5rem",render:e=>e},{title:"变更时间",dataIndex:"createTime",width:"12.5rem",render:e=>(0,a.jsx)("div",{className:"break-keep whitespace-nowrap",children:e})},{title:"版本",dataIndex:"createTime",width:"9.375rem",render:e=>1},{title:"",width:"20rem",render:(e,t)=>(0,a.jsx)("div",{className:"flex justify-between flex-1 text-green-2 break-keep",children:(0,a.jsx)("div",{className:"flex items-center justify-center cursor-pointer",onClick:()=>b(t),children:"编辑"})})}],[]),eu=(0,d.useMemo)(()=>[{title:"实景输入项",dataIndex:"context",width:"20%"},{title:"过程名称",dataIndex:"parameter",width:"30%"},{title:"参考值",dataIndex:"amount",width:"20%"},{title:"不确定性",dataIndex:"uncertainty",emptyText:"-",width:"30%"}],[]),em=async e=>{let t="更改状态";y({title:t,loading:!0}),await (0,m.pF)(h.id,e),q(H+1),y({title:t,loading:!1,resultText:"操作成功"}),p(null)};return(0,d.useMemo)(()=>!!A&&!!$&&z>-1,[A,$,z]),(0,d.useMemo)(()=>!!E&&!!T,[E,T]),(0,d.useCallback)(e=>{M(e.target.value)},[]),(0,a.jsxs)(o.m,{isNew:!0,className:"flex flex-col justify-between flex-1 pb-12 text-black ",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,a.jsx)("span",{children:"我的产品系统"}),(0,a.jsx)(l.z,{onClick:()=>k(!0),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建产品系统"})]}),(0,a.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,a.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,a.jsx)("div",{className:"min-h-[20.25rem] text-base leading-[1.625rem] min-w-[68.25rem]",children:(0,a.jsx)(r.i,{columns:ec,columnsHeight:"h-[3.125rem]",loading:Y,mouseHoverKey:"id",data:J,className:"",headerClassName:{background:"#fff"}})})})})]}),(0,a.jsx)(s.t,{onChange:e=>{S(e)},className:"my-8",total:Q,pgSize:10,pgNum:C}),null!==h&&(0,a.jsx)(i.u_,{title:"更改状态",onClose:()=>p(null),children:(0,a.jsx)("div",{className:"flex",children:(null==w?void 0:w.loading)?(0,a.jsx)(u.g,{}):(0,a.jsxs)("div",{className:"flex flex-1",children:[h.state>-2&&(0,a.jsx)(l.z,{onClick:()=>em(1===h.state?0:1),className:"flex-1 w-full text-lg text-white rounded-lg bg-green-2 h-11",children:1===h.state?"弃用":"激活"}),-1===h.state&&(0,a.jsx)(l.z,{onClick:()=>em(-2),className:"flex-1 w-full ml-5 text-lg border-2 rounded-lg border-green-2 bg-green-2/10 text-green-2 hover:bg-green-2/20 h-11",children:"删除"})]})})}),!!v&&(0,a.jsx)(i.u_,{title:v.modelName+"模型中的实景输入项",onClose:()=>g(null),children:(0,a.jsxs)("div",{className:"flex w-[60rem] min-h-[16rem] flex-col pb-2",children:[(0,a.jsx)("ul",{className:"flex mb-1",children:eu.map((e,t)=>(0,a.jsx)("li",{className:"px-3 text-lg font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,a.jsx)("div",{className:"max-h-[15rem] min-h-[5rem] overflow-y-auto",children:(0,a.jsx)(r.i,{size:"big",hiddenHeader:!0,columns:eu,data:v.paramDetail})})]})}),w&&(0,a.jsx)(i.u_,{title:(null==w?void 0:w.title)||"操作",onClose:()=>y(null),children:(0,a.jsx)("div",{className:"pb-2 text-center",children:w.loading?(0,a.jsx)(u.g,{}):(0,a.jsx)("span",{children:w.resultText})})}),N&&(0,a.jsx)(I,{onClose:()=>k(!1),onSuccess:()=>ed()}),j&&(0,a.jsx)(_,{ps:j,onClose:()=>b(void 0),onSuccess:()=>ed()}),Z>-1&&(0,a.jsx)(i.u_,{title:"查看产品",onClose:()=>D(-1),children:(0,a.jsxs)("ul",{className:"text-lg max-w-[32rem]",children:[(0,a.jsxs)("li",{className:"flex",children:[(0,a.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"产品名称 :"}),(0,a.jsx)("span",{className:"break-all text-gray-6",children:null===(e=ea[Z])||void 0===e?void 0:e.text})]}),(0,a.jsxs)("li",{className:"my-5",children:[(0,a.jsx)("label",{className:"inline-block w-[5.625rem]",children:"产品类型 :"}),(0,a.jsx)("span",{className:"text-gray-6",children:null===(t=ea[Z])||void 0===t?void 0:t.type})]}),(0,a.jsxs)("li",{className:"flex",children:[(0,a.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"描述 :"}),(0,a.jsx)("span",{className:"break-all text-gray-6",children:(null===(n=ea[Z])||void 0===n?void 0:n.desc)?null===(f=ea[Z])||void 0===f?void 0:f.desc:"-"})]})]})})]})}},8723:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(959),l=["mousedown","touchstart"],i=function(e,t,n){void 0===n&&(n=l);var i=(0,a.useRef)(t);(0,a.useEffect)(function(){i.current=t},[t]),(0,a.useEffect)(function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&i.current(t)},a=0,l=n;a<l.length;a++){var s=l[a];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,s,t)}return function(){for(var e=0,a=n;e<a.length;e++){var l=a[e];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,l,t)}}},[n,e])}},9592:function(e,t,n){"use strict";var a=n(959),l=function(e,t){return"boolean"==typeof t?t:!e};t.Z=function(e){return(0,a.useReducer)(l,e)}},732:function(e,t,n){"use strict";let a,l,i;n.d(t,{ZP:function(){return _}});let s=new Set,r=new WeakMap,o=new WeakMap,d=new WeakMap,c=new WeakMap,u=new WeakMap,m=new WeakMap,x=new WeakMap,f=new WeakSet,h="__aa_tgt",p="__aa_del";function v(e){clearTimeout(x.get(e));let t=k(e),n="function"==typeof t?500:t.duration;x.set(e,setTimeout(async()=>{let t=d.get(e);try{await (null==t?void 0:t.finished),r.set(e,y(e)),function(e){let t=c.get(e);null==t||t.disconnect();let n=r.get(e),l=0;n||(n=y(e),r.set(e,n));let{offsetWidth:i,offsetHeight:s}=a,o=[n.top-5,i-(n.left+5+n.width),s-(n.top+5+n.height),n.left-5],d=o.map(e=>`${-1*Math.floor(e)}px`).join(" "),u=new IntersectionObserver(()=>{++l>1&&v(e)},{root:a,threshold:1,rootMargin:d});u.observe(e),c.set(e,u)}(e)}catch{}},n))}function g(e){setTimeout(()=>{u.set(e,setInterval(()=>j(v.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function j(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function b(e,t){t||h in e?!t||h in t||Object.defineProperty(t,h,{value:e}):Object.defineProperty(e,h,{value:e})}function w(e){return Number(e.replace(/[^0-9.\-]/g,""))}function y(e){let t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function N(e,t,n){let a=t.width,l=t.height,i=n.width,s=n.height,r=getComputedStyle(e),o=r.getPropertyValue("box-sizing");if("content-box"===o){let e=w(r.paddingTop)+w(r.paddingBottom)+w(r.borderTopWidth)+w(r.borderBottomWidth),t=w(r.paddingLeft)+w(r.paddingRight)+w(r.borderRightWidth)+w(r.borderLeftWidth);a-=t,i-=t,l-=e,s-=e}return[a,i,l,s].map(Math.round)}function k(e){return h in e&&m.has(e[h])?m.get(e[h]):{duration:250,easing:"ease-in-out"}}function C(e){if(h in e)return e[h]}function S(e){let t=C(e);return!!t&&f.has(t)}function E(e,...t){t.forEach(t=>t(e,m.has(e)));for(let n=0;n<e.children.length;n++){let a=e.children.item(n);a&&t.forEach(e=>e(a,m.has(a)))}}function _(e,t={}){if(l&&i){let n=window.matchMedia("(prefers-reduced-motion: reduce)"),a=n.matches&&"function"!=typeof t&&!t.disrespectUserMotionPreference;a||(f.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),E(e,v,g,e=>null==i?void 0:i.observe(e)),"function"==typeof t?m.set(e,t):m.set(e,{duration:250,easing:"ease-in-out",...t}),l.observe(e,{childList:!0}),s.add(e))}return Object.freeze({parent:e,enable:()=>{f.add(e)},disable:()=>{f.delete(e)},isEnabled:()=>f.has(e)})}"undefined"!=typeof window&&(a=document.documentElement,l=new MutationObserver(e=>{let t=function(e){let t=e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]),n=t.every(e=>"#comment"===e.nodeName);return!n&&e.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(b(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let a=t.target.children.item(n);if(a){if(p in a)return!1;b(t.target,a),e.add(a)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let a=t.removedNodes[n];if(p in a)return!1;a instanceof Element&&(e.add(a),b(t.target,a),o.set(a,[t.previousSibling,t.nextSibling]))}}return e},new Set)}(e);t&&t.forEach(e=>(function(e){var t;let n=e.isConnected,a=r.has(e);n&&o.has(e)&&o.delete(e),d.has(e)&&(null===(t=d.get(e))||void 0===t||t.cancel()),a&&n?function(e){let t;let n=r.get(e),a=y(e);if(!S(e))return r.set(e,a);if(!n)return;let l=k(e);if("function"!=typeof l){let i=n.left-a.left,s=n.top-a.top,[r,o,d,c]=N(e,n,a),u={transform:`translate(${i}px, ${s}px)`},m={transform:"translate(0, 0)"};r!==o&&(u.width=`${r}px`,m.width=`${o}px`),d!==c&&(u.height=`${d}px`,m.height=`${c}px`),t=e.animate([u,m],{duration:l.duration,easing:l.easing})}else(t=new Animation(l(e,"remain",n,a))).play();d.set(e,t),r.set(e,a),t.addEventListener("finish",v.bind(null,e))}(e):a&&!n?function(e){var t;let n;if(!o.has(e)||!r.has(e))return;let[a,l]=o.get(e);function i(){var t;e.remove(),r.delete(e),o.delete(e),d.delete(e),null===(t=c.get(e))||void 0===t||t.disconnect()}if(Object.defineProperty(e,p,{value:!0}),l&&l.parentNode&&l.parentNode instanceof Element?l.parentNode.insertBefore(e,l):a&&a.parentNode?a.parentNode.appendChild(e):null===(t=C(e))||void 0===t||t.appendChild(e),!S(e))return i();let[s,u,m,x]=function(e){let t=r.get(e),[n,,a]=N(e,t,y(e)),l=e.parentElement;for(;l&&("static"===getComputedStyle(l).position||l instanceof HTMLBodyElement);)l=l.parentElement;l||(l=document.body);let i=getComputedStyle(l),s=r.get(l)||y(l),o=Math.round(t.top-s.top)-w(i.borderTopWidth),d=Math.round(t.left-s.left)-w(i.borderLeftWidth);return[o,d,n,a]}(e),f=k(e),h=r.get(e);Object.assign(e.style,{position:"absolute",top:`${s}px`,left:`${u}px`,width:`${m}px`,height:`${x}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!=typeof f?n=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:f.duration,easing:"ease-out"}):(n=new Animation(f(e,"remove",h))).play(),d.set(e,n),n.addEventListener("finish",i)}(e):function(e){let t;let n=y(e);r.set(e,n);let a=k(e);S(e)&&("function"!=typeof a?t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*a.duration,easing:"ease-in"}):(t=new Animation(a(e,"add",n))).play(),d.set(e,t),t.addEventListener("finish",v.bind(null,e)))}(e)})(e))}),(i=new ResizeObserver(e=>{e.forEach(e=>{e.target===a&&(clearTimeout(x.get(a)),x.set(a,setTimeout(()=>{s.forEach(e=>E(e,e=>j(()=>v(e))))},100))),r.has(e.target)&&v(e.target)})})).observe(a))}},function(e){e.O(0,[713,769,7307,6574,6740,2351,4393,9774,2888,179],function(){return e(e.s=9069)}),_N_E=e.O()}]);