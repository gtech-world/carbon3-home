(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8200],{9069:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/model",function(){return n(6929)}])},5266:function(e,t,n){"use strict";n.d(t,{E:function(){return s},K:function(){return r}});var l=n(1527),a=n(4875),i=n.n(a);function s(e){let{value:t,bg:n="#dddddd",color:a="#29953A",className:s}=e;return(0,l.jsx)("div",{className:i()(s,"w-full h-[.625rem]"),style:{background:n},children:(0,l.jsx)("div",{style:{width:"".concat(t,"%"),transition:"width 200ms ease",background:a},className:"h-full"})})}function r(e){let{index:t,full:n,bg:a="#dddddd",color:s="#29953A",className:r}=e;return(0,l.jsx)("div",{className:i()(r,"w-full h-[.625rem]"),style:{background:a},children:(0,l.jsx)("div",{style:{marginLeft:n?"0":"".concat(25*t,"%"),width:n?"100%":"25%",background:s},className:"h-full"})})}},6929:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var l=n(1527),a=n(1191),i=n(9049),s=n(9869),r=n(9346),o=n(1600),d=n(959),c=n(834),u=n(5858),x=n(6699),f=n(9701),m=n(4875),h=n.n(m),p=n(9592),v=n(8723);function g(e){let{items:t,children:n,onClick:a,className:i}=e,[s,r]=(0,p.Z)(!1),o=(0,d.useRef)(null);return((0,v.Z)(o,()=>s&&r(!1)),0===t.length)?null:(0,l.jsxs)("div",{ref:o,className:h()("bg-white text-black px-5 py-3 text-lg rounded-lg relative cursor-pointer",i),onClick:()=>r(),children:[(0,l.jsx)("div",{className:"flex justify-between items-center",children:n}),s&&(0,l.jsx)("div",{className:"max-h-[18rem] absolute left-0 w-full bg-white  rounded-lg py-3 overflow-x-hidden overflow-y-auto",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,l.jsx)("div",{className:"",children:t.map((e,t)=>(0,l.jsx)("div",{className:h()("w-full break-all px-5 py-2 text-sm hover:bg-gray-16"),onClick:()=>a&&a(t),children:e.text},"select_item_".concat(t)))})})]})}var j=n(3752),b=n(5088);function w(e){let{ps:t,...n}=e,[a,s]=(0,p.Z)(!1),{userData:r}=(0,c.oR)();return(0,l.jsxs)(i.u_,{title:t.modelName,...n,children:[(0,l.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] max-h-[80vh]",children:[(0,l.jsx)(C,{tit:"UID",value:"PS-1"}),(0,l.jsx)(C,{tit:"版本",value:"1"}),(0,l.jsx)(C,{tit:"描述",value:"ES6 2023 120kWh Sports"}),(0,l.jsx)(C,{tit:"状态",value:(0,l.jsx)(y,{status:2})}),(0,l.jsx)(C,{tit:"变更人",value:(null==r?void 0:r.name)||"-"}),(0,l.jsx)(C,{tit:"产品系统LCA文件",value:(0,l.jsx)(k,{isRead:!0})}),(0,l.jsx)(C,{tit:"实景数据",value:(0,l.jsx)(N,{action:"查看"})}),(0,l.jsx)(E,{})]}),a&&(0,l.jsx)(b.d,{onClose:()=>s(!1)})]})}function y(e){let{status:t}=e;return 0===t?(0,l.jsx)("div",{className:"text-neutral-400 text-base font-normal leading-none",children:"草稿"}):(0,l.jsx)("div",{className:h()("w-min whitespace-nowrap h-6 px-2.5 py-1 bg-opacity-10 rounded justify-start items-center gap-2.5 inline-flex",{"bg-rose-500":1!==t,"bg-green-600":1===t}),children:(0,l.jsx)("div",{className:h()("text-green-600 text-base font-normal leading-none",{"text-rose-500":1!==t,"text-green-600":1===t}),children:1===t?"当前使用":"过去版本"})})}function N(e){let{action:t,onClick:n,to:a}=e;return a?(0,l.jsx)("a",{href:a,className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded text-black text-base font-normal leading-none",children:t}):(0,l.jsx)("div",{className:"w-min whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded justify-start items-center gap-2.5 inline-flex cursor-pointer",onClick:n,children:(0,l.jsx)("div",{className:"text-black text-base font-normal leading-none",children:t})})}function k(e){let{psId:t,modelId:n,isNew:a,isRead:i,file:s,onFileChange:r}=e,o=(0,d.useRef)(null);return(0,l.jsxs)("div",{className:"text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5",children:[(0,l.jsx)("input",{ref:o,type:"file",hidden:!0,accept:".zip",onChange:r}),a&&(null==s?void 0:s.name),i?(0,l.jsx)(N,{to:"/model?id=".concat(n),action:"在线查看"}):a?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(N,{action:"选择模型",onClick:e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.click()}})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N,{to:"/model?id=".concat(n),action:"在线查看"}),(0,l.jsx)(N,{action:"更新模型",onClick:e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.click()}})]})]})}function C(e){let t="string"==typeof e.value||"number"==typeof e.value;return(0,l.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,l.jsxs)("div",{className:"text-black text-base font-normal leading-normal",children:[e.tit,": "]}),t?(0,l.jsx)("div",{className:"text-neutral-400 text-base font-normal leading-none",children:e.value}):e.value]})}function S(e){let{defaultValue:t,...n}=e;return(0,l.jsx)("input",{type:"text",className:"w-full px-5 py-4 bg-stone-50 rounded-lg border border-neutral-200 justify-start items-start gap-2.5 inline-flex text-black text-base font-normal leading-none",...n})}function E(){var e,t;let{userData:n}=(0,c.oR)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(C,{tit:"组织名称",value:(null==n?void 0:null===(e=n.organization)||void 0===e?void 0:e.name)||"-"}),(0,l.jsx)(C,{tit:"组织编号",value:(null==n?void 0:null===(t=n.organization)||void 0===t?void 0:t.id)||"-"})]})}function _(e){let{ps:t,onSuccess:n,...s}=e,{userData:r}=(0,c.oR)(),[o,u]=(0,d.useState)("ES6 2023 120kWh Sports"),[x,f]=(0,d.useState)(!1),[m,h]=(0,d.useState)(null),v=(0,d.useCallback)(e=>{var t;h(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},[]),_=(0,j.R)(()=>{}),[M,I]=(0,p.Z)(!1),[L,R]=(0,p.Z)(!1);return(0,l.jsxs)(i.u_,{title:t.modelName,...s,children:[(0,l.jsxs)("div",{className:"flex flex-col gap-5  w-full min-w-[40rem] max-h-[70vh] overflow-y-auto",children:[(0,l.jsx)(C,{tit:"UID",value:"PS-1"}),(0,l.jsx)(C,{tit:"版本",value:(0,l.jsxs)("div",{className:"flex justify-between items-center gap-2.5 px-5 py-4 bg-stone-50 rounded-lg border border-neutral-200",children:["3",(0,l.jsx)(g,{items:[{text:"版本3"},{text:"版本2"},{text:"版本1"}],className:"px-2.5 py-1 bg-white rounded border border-neutral-200 text-stone-500 text-base font-normal leading-none",onClick:()=>{R(!0)},children:"查看历史版本"})]})}),(0,l.jsx)(C,{tit:"描述",value:(0,l.jsx)(S,{value:o,onChange:e=>u(e.target.value)})}),(0,l.jsx)(C,{tit:"状态",value:(0,l.jsx)(y,{status:1})}),(0,l.jsx)(C,{tit:"变更人",value:(null==r?void 0:r.name)||"-"}),(0,l.jsx)(C,{tit:"产品系统LCA文件",value:(0,l.jsx)(k,{file:m,onFileChange:v})}),(0,l.jsx)(C,{tit:"实景数据",value:(0,l.jsx)(N,{action:"查看",onClick:()=>I(!0)})}),(0,l.jsx)(E,{})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2.5 mt-5",children:[(0,l.jsx)(a.u,{busy:x,disabled:!1,onClick:_,children:"提交更新"}),(0,l.jsx)("div",{className:"text-black text-sm font-normal",children:"* 点击提交更新按钮后，当前的产品系统版本将自动更新。原先版本的信息可以在历史版本中查询。"})]}),M&&(0,l.jsx)(b.d,{onClose:()=>I(!1)}),L&&(0,l.jsx)(w,{onClose:()=>R(!1),ps:t})]})}var M=n(5266);function I(e){let{onSuccess:t,onClose:n,...s}=e,[r,o]=(0,d.useState)(""),[c,u]=(0,d.useState)(""),[f,m]=(0,d.useState)(!1),[h,p]=(0,d.useState)(0),[v,g]=(0,d.useState)(null),b=!v||!r||!c,w=(0,d.useCallback)(e=>{var t;g(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},[]),N=(0,d.useRef)(),_=(0,d.useCallback)(()=>{var e;null===(e=N.current)||void 0===e||e.abort(),n&&n()},[n]),I=(0,j.R)(()=>{if(!v)return;m(!0);let e=new FormData;e.append("name",v.name),e.append("file",v),N.current=new AbortController,(0,x.av)(e,{signal:N.current.signal,onUploadProgress:e=>{p(Math.min(Math.round(100*(e.rate||0)),100))}}).then(()=>{}).then(()=>{t&&t(),_()}).catch(()=>{}).finally(()=>{m(!1),p(0)})});return(0,l.jsx)(i.u_,{...s,title:"新建产品系统",outClose:!1,onClose:_,children:(0,l.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] max-h-[80vh]",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-5 w-full flex-1 h-max overflow-y-auto",children:[(0,l.jsx)(C,{tit:"产品系统名称",value:(0,l.jsx)(S,{value:r,onChange:e=>o(e.target.value)})}),(0,l.jsx)(C,{tit:"描述",value:(0,l.jsx)(S,{value:c,onChange:e=>u(e.target.value)})}),(0,l.jsx)(C,{tit:"状态",value:(0,l.jsx)(y,{status:0})}),(0,l.jsx)(C,{tit:"产品系统LCA文件",value:(0,l.jsx)(k,{isNew:!0,file:v,onFileChange:w})}),(0,l.jsx)(E,{})]}),(0,l.jsx)("div",{className:"flex gap-5 w-full",children:f?(0,l.jsx)(M.E,{value:h,className:"rounded-lg my-3 overflow-hidden"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:_,children:"取消"}),(0,l.jsx)(a.u,{className:"flex-1",onClick:I,disabled:b,children:"确定"})]})})]})})}var L=function(){var e,t,n,m;let[h,p]=(0,d.useState)(null),[v,g]=(0,d.useState)(null),[j,b]=(0,d.useState)(),[w,y]=(0,d.useState)(null),[N,k]=(0,d.useState)(!1),[C,S]=(0,d.useState)(1),[E,M]=(0,d.useState)(""),[L,R]=(0,d.useState)(null),[W,z]=(0,d.useState)(""),[T,A]=(0,d.useState)(null),[O,P]=(0,d.useState)(null),[$,F]=(0,d.useState)(""),[Z,B]=(0,d.useState)(-1),[D,H]=(0,d.useState)(-1),[U,q]=(0,d.useState)(0),[X,K]=(0,d.useState)(0),[V,Y]=(0,d.useState)({}),[G,J]=(0,d.useState)(!1),[Q,ee]=(0,d.useState)(0),[et,en]=(0,d.useState)([]),[el,ea]=(0,d.useState)([]);(0,d.useRef)(null);let{user:ei}=(0,c.aF)(),es=async()=>{let e=await (0,x.Ps)();en(e?function e(t,n){return t.filter(e=>void 0===n?0===e.parentId:e.parentId===n).map(n=>(n.children=e(t,n.id),n))}(null==e?void 0:e.records,0):[])},er=async()=>{try{J(!0);let e=await (0,x.vz)(C);Y(e)}catch(e){console.log("eee",e)}finally{J(!1)}};(0,d.useEffect)(()=>{er()},[]),(0,d.useEffect)(()=>{es()},[]);let eo=(0,d.useMemo)(()=>[{title:"产品系统",dataIndex:"description",width:"23.75rem",render:e=>(0,l.jsx)("span",{className:"max-w-[23.75rem] truncate inline-block",children:e})},{title:"产品系统ID",dataIndex:"uuid",width:"12.5rem",render:e=>(0,l.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-content":e,children:(0,f.lS)(e,8,8)})},{title:"变更人",dataIndex:"name",width:"12.5rem",render:e=>e},{title:"变更时间",dataIndex:"updateTime",width:"12.5rem",render:e=>(0,l.jsx)("div",{className:"break-keep whitespace-nowrap",children:e})},{title:"版本",dataIndex:"version",width:"9.375rem",render:e=>e},{title:"",width:"20rem",render:(e,t)=>(0,l.jsx)("div",{className:"flex justify-between flex-1 text-green-2 break-keep",children:(0,l.jsx)("div",{className:"flex items-center justify-center cursor-pointer",onClick:()=>b(t),children:"编辑"})})}],[]),ed=(0,d.useMemo)(()=>[{title:"实景输入项",dataIndex:"context",width:"20%"},{title:"过程名称",dataIndex:"parameter",width:"30%"},{title:"参考值",dataIndex:"amount",width:"20%"},{title:"不确定性",dataIndex:"uncertainty",emptyText:"-",width:"30%"}],[]),ec=async e=>{let t="更改状态";y({title:t,loading:!0}),await (0,x.pF)(h.id,e),q(U+1),y({title:t,loading:!1,resultText:"操作成功"}),p(null)};return(0,d.useMemo)(()=>!!O&&!!$&&T>-1,[O,$,T]),(0,d.useMemo)(()=>!!E&&!!L,[E,L]),(0,d.useCallback)(e=>{M(e.target.value)},[]),(0,l.jsxs)(o.m,{isNew:!0,className:"flex flex-col justify-between flex-1 pb-12 text-black ",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,l.jsx)("span",{children:"我的产品系统"}),(0,l.jsx)(a.z,{onClick:()=>k(!0),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建产品系统"})]}),(0,l.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,l.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,l.jsx)("div",{className:"min-h-[20.25rem] text-base leading-[1.625rem] min-w-[68.25rem]",children:(0,l.jsx)(r.i,{columns:eo,columnsHeight:"h-[3.125rem]",loading:G,mouseHoverKey:"id",data:(null==V?void 0:V.records)||[],className:"",headerClassName:{background:"#fff"}})})})})]}),(0,l.jsx)(s.t,{onChange:e=>{S(e)},className:"my-8",total:(null==V?void 0:V.total)||0,pgSize:10,pgNum:C}),null!==h&&(0,l.jsx)(i.u_,{title:"更改状态",onClose:()=>p(null),children:(0,l.jsx)("div",{className:"flex",children:(null==w?void 0:w.loading)?(0,l.jsx)(u.g,{}):(0,l.jsxs)("div",{className:"flex flex-1",children:[h.state>-2&&(0,l.jsx)(a.z,{onClick:()=>ec(1===h.state?0:1),className:"flex-1 w-full text-lg text-white rounded-lg bg-green-2 h-11",children:1===h.state?"弃用":"激活"}),-1===h.state&&(0,l.jsx)(a.z,{onClick:()=>ec(-2),className:"flex-1 w-full ml-5 text-lg border-2 rounded-lg border-green-2 bg-green-2/10 text-green-2 hover:bg-green-2/20 h-11",children:"删除"})]})})}),!!v&&(0,l.jsx)(i.u_,{title:v.modelName+"模型中的实景输入项",onClose:()=>g(null),children:(0,l.jsxs)("div",{className:"flex w-[60rem] min-h-[16rem] flex-col pb-2",children:[(0,l.jsx)("ul",{className:"flex mb-1",children:ed.map((e,t)=>(0,l.jsx)("li",{className:"px-3 text-lg font-bold",style:{width:e.width},children:e.title},"columns".concat(t)))}),(0,l.jsx)("div",{className:"max-h-[15rem] min-h-[5rem] overflow-y-auto",children:(0,l.jsx)(r.i,{size:"big",hiddenHeader:!0,columns:ed,data:v.paramDetail})})]})}),w&&(0,l.jsx)(i.u_,{title:(null==w?void 0:w.title)||"操作",onClose:()=>y(null),children:(0,l.jsx)("div",{className:"pb-2 text-center",children:w.loading?(0,l.jsx)(u.g,{}):(0,l.jsx)("span",{children:w.resultText})})}),N&&(0,l.jsx)(I,{onClose:()=>k(!1),onSuccess:()=>er()}),j&&(0,l.jsx)(_,{ps:j,onClose:()=>b(void 0),onSuccess:()=>er()}),Z>-1&&(0,l.jsx)(i.u_,{title:"查看产品",onClose:()=>B(-1),children:(0,l.jsxs)("ul",{className:"text-lg max-w-[32rem]",children:[(0,l.jsxs)("li",{className:"flex",children:[(0,l.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"产品名称 :"}),(0,l.jsx)("span",{className:"break-all text-gray-6",children:null===(e=el[Z])||void 0===e?void 0:e.text})]}),(0,l.jsxs)("li",{className:"my-5",children:[(0,l.jsx)("label",{className:"inline-block w-[5.625rem]",children:"产品类型 :"}),(0,l.jsx)("span",{className:"text-gray-6",children:null===(t=el[Z])||void 0===t?void 0:t.type})]}),(0,l.jsxs)("li",{className:"flex",children:[(0,l.jsx)("label",{className:"inline-block min-w-[5.625rem]",children:"描述 :"}),(0,l.jsx)("span",{className:"break-all text-gray-6",children:(null===(n=el[Z])||void 0===n?void 0:n.desc)?null===(m=el[Z])||void 0===m?void 0:m.desc:"-"})]})]})})]})}},8723:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var l=n(959),a=["mousedown","touchstart"],i=function(e,t,n){void 0===n&&(n=a);var i=(0,l.useRef)(t);(0,l.useEffect)(function(){i.current=t},[t]),(0,l.useEffect)(function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&i.current(t)},l=0,a=n;l<a.length;l++){var s=a[l];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,s,t)}return function(){for(var e=0,l=n;e<l.length;e++){var a=l[e];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,a,t)}}},[n,e])}},9592:function(e,t,n){"use strict";var l=n(959),a=function(e,t){return"boolean"==typeof t?t:!e};t.Z=function(e){return(0,l.useReducer)(a,e)}},732:function(e,t,n){"use strict";let l,a,i;n.d(t,{ZP:function(){return _}});let s=new Set,r=new WeakMap,o=new WeakMap,d=new WeakMap,c=new WeakMap,u=new WeakMap,x=new WeakMap,f=new WeakMap,m=new WeakSet,h="__aa_tgt",p="__aa_del";function v(e){clearTimeout(f.get(e));let t=k(e),n="function"==typeof t?500:t.duration;f.set(e,setTimeout(async()=>{let t=d.get(e);try{await (null==t?void 0:t.finished),r.set(e,y(e)),function(e){let t=c.get(e);null==t||t.disconnect();let n=r.get(e),a=0;n||(n=y(e),r.set(e,n));let{offsetWidth:i,offsetHeight:s}=l,o=[n.top-5,i-(n.left+5+n.width),s-(n.top+5+n.height),n.left-5],d=o.map(e=>`${-1*Math.floor(e)}px`).join(" "),u=new IntersectionObserver(()=>{++a>1&&v(e)},{root:l,threshold:1,rootMargin:d});u.observe(e),c.set(e,u)}(e)}catch{}},n))}function g(e){setTimeout(()=>{u.set(e,setInterval(()=>j(v.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function j(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function b(e,t){t||h in e?!t||h in t||Object.defineProperty(t,h,{value:e}):Object.defineProperty(e,h,{value:e})}function w(e){return Number(e.replace(/[^0-9.\-]/g,""))}function y(e){let t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function N(e,t,n){let l=t.width,a=t.height,i=n.width,s=n.height,r=getComputedStyle(e),o=r.getPropertyValue("box-sizing");if("content-box"===o){let e=w(r.paddingTop)+w(r.paddingBottom)+w(r.borderTopWidth)+w(r.borderBottomWidth),t=w(r.paddingLeft)+w(r.paddingRight)+w(r.borderRightWidth)+w(r.borderLeftWidth);l-=t,i-=t,a-=e,s-=e}return[l,i,a,s].map(Math.round)}function k(e){return h in e&&x.has(e[h])?x.get(e[h]):{duration:250,easing:"ease-in-out"}}function C(e){if(h in e)return e[h]}function S(e){let t=C(e);return!!t&&m.has(t)}function E(e,...t){t.forEach(t=>t(e,x.has(e)));for(let n=0;n<e.children.length;n++){let l=e.children.item(n);l&&t.forEach(e=>e(l,x.has(l)))}}function _(e,t={}){if(a&&i){let n=window.matchMedia("(prefers-reduced-motion: reduce)"),l=n.matches&&"function"!=typeof t&&!t.disrespectUserMotionPreference;l||(m.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),E(e,v,g,e=>null==i?void 0:i.observe(e)),"function"==typeof t?x.set(e,t):x.set(e,{duration:250,easing:"ease-in-out",...t}),a.observe(e,{childList:!0}),s.add(e))}return Object.freeze({parent:e,enable:()=>{m.add(e)},disable:()=>{m.delete(e)},isEnabled:()=>m.has(e)})}"undefined"!=typeof window&&(l=document.documentElement,a=new MutationObserver(e=>{let t=function(e){let t=e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]),n=t.every(e=>"#comment"===e.nodeName);return!n&&e.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(b(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let l=t.target.children.item(n);if(l){if(p in l)return!1;b(t.target,l),e.add(l)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let l=t.removedNodes[n];if(p in l)return!1;l instanceof Element&&(e.add(l),b(t.target,l),o.set(l,[t.previousSibling,t.nextSibling]))}}return e},new Set)}(e);t&&t.forEach(e=>(function(e){var t;let n=e.isConnected,l=r.has(e);n&&o.has(e)&&o.delete(e),d.has(e)&&(null===(t=d.get(e))||void 0===t||t.cancel()),l&&n?function(e){let t;let n=r.get(e),l=y(e);if(!S(e))return r.set(e,l);if(!n)return;let a=k(e);if("function"!=typeof a){let i=n.left-l.left,s=n.top-l.top,[r,o,d,c]=N(e,n,l),u={transform:`translate(${i}px, ${s}px)`},x={transform:"translate(0, 0)"};r!==o&&(u.width=`${r}px`,x.width=`${o}px`),d!==c&&(u.height=`${d}px`,x.height=`${c}px`),t=e.animate([u,x],{duration:a.duration,easing:a.easing})}else(t=new Animation(a(e,"remain",n,l))).play();d.set(e,t),r.set(e,l),t.addEventListener("finish",v.bind(null,e))}(e):l&&!n?function(e){var t;let n;if(!o.has(e)||!r.has(e))return;let[l,a]=o.get(e);function i(){var t;e.remove(),r.delete(e),o.delete(e),d.delete(e),null===(t=c.get(e))||void 0===t||t.disconnect()}if(Object.defineProperty(e,p,{value:!0}),a&&a.parentNode&&a.parentNode instanceof Element?a.parentNode.insertBefore(e,a):l&&l.parentNode?l.parentNode.appendChild(e):null===(t=C(e))||void 0===t||t.appendChild(e),!S(e))return i();let[s,u,x,f]=function(e){let t=r.get(e),[n,,l]=N(e,t,y(e)),a=e.parentElement;for(;a&&("static"===getComputedStyle(a).position||a instanceof HTMLBodyElement);)a=a.parentElement;a||(a=document.body);let i=getComputedStyle(a),s=r.get(a)||y(a),o=Math.round(t.top-s.top)-w(i.borderTopWidth),d=Math.round(t.left-s.left)-w(i.borderLeftWidth);return[o,d,n,l]}(e),m=k(e),h=r.get(e);Object.assign(e.style,{position:"absolute",top:`${s}px`,left:`${u}px`,width:`${x}px`,height:`${f}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!=typeof m?n=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:m.duration,easing:"ease-out"}):(n=new Animation(m(e,"remove",h))).play(),d.set(e,n),n.addEventListener("finish",i)}(e):function(e){let t;let n=y(e);r.set(e,n);let l=k(e);S(e)&&("function"!=typeof l?t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*l.duration,easing:"ease-in"}):(t=new Animation(l(e,"add",n))).play(),d.set(e,t),t.addEventListener("finish",v.bind(null,e)))}(e)})(e))}),(i=new ResizeObserver(e=>{e.forEach(e=>{e.target===l&&(clearTimeout(f.get(l)),f.set(l,setTimeout(()=>{s.forEach(e=>E(e,e=>j(()=>v(e))))},100))),r.has(e.target)&&v(e.target)})})).observe(l))}},function(e){e.O(0,[713,769,7307,6574,6740,2351,4393,9774,2888,179],function(){return e(e.s=9069)}),_N_E=e.O()}]);