(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4704],{6763:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/inventory",function(){return n(9194)}])},9194:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(1527),r=n(1600),i=n(959),o=n(9346),l=n(9869),d=n(6699),s=n(1191),c=n(5088),u=n(9049),m=e=>{let{onOpenModal:t,productId:n}=e,[r,l]=(0,i.useState)([]),s=async()=>{(0,d.NF)(n).then(e=>{var t;l(null===(t=JSON.parse(e.paramDetail||[])[0])||void 0===t?void 0:t.parameters)}).catch(e=>{}).finally()};(0,i.useEffect)(()=>{s()},[n]);let c=()=>{var e;let n=null===(e=document)||void 0===e?void 0:e.getElementById("realDataTable"),a=n.getElementsByTagName("tr"),r=[];for(let e=0;e<a.length;e++){let t=[],n=a[e].getElementsByTagName("input");for(let e=0;e<n.length;e++){console.log("dadsa",n[e].value);let a=["name","id","type","data","inputData","res"],r=a[e],i=n[e].value,o={[r]:i};t.push(o)}r.push(t)}"function"==typeof t&&t(),console.log("值-----",r.slice(1))};return(0,a.jsxs)(u.u_,{title:"实景数据填报",containerClassName:"mx-5 max-w-[1000px] ",titleClassName:"text-[20px] leading-5 font-bold",onClose:"function"==typeof t&&t||void 0,children:[(0,a.jsx)("div",{className:"mx-5 max-w-[1000px] max-h-96 overflow-y-auto ",children:(0,a.jsx)(o.i,{columns:[{title:"参数名",dataIndex:"name",width:"9rem",render:e=>e},{title:"描述",dataIndex:"productName",width:"5.5rem",render:e=>"ss"},{title:"过程名称",dataIndex:"name",width:"7rem",render:(e,t)=>t.name},{title:"类型",width:"5.5rem",dataIndex:"createTime",render:e=>"ss"},{title:"参考值",width:"10rem",dataIndex:"createTime",render:e=>"ss"},{title:"填入值",width:"10rem",dataIndex:"createTime",render:e=>(0,a.jsx)("input",{className:"w-[10rem] h-[40px] bg-[#F3F3F3]"})}],tableId:"realDataTable",columnsHeight:"h-[3.125rem]",mouseHoverKey:"id",data:r,isSetBorder:!0,className:"",headerClassName:{background:"#DDDDDD",position:"sticky",top:"0",fontWeight:"bold"}})}),(0,a.jsx)("div",{className:"mx-5 ",children:(0,a.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5",children:[(0,a.jsx)("div",{onClick:"function"==typeof t&&t||void 0,className:" cursor-pointer bg-[#29953A1A] w-[450px] text-[18px] border-2 border-[#29953A] font-normal text-[#29953A] flex h-[50px] rounded-lg justify-center items-center",children:"取消"}),(0,a.jsx)("div",{onClick:()=>c(),className:"  cursor-pointer bg-[#29953A] w-[450px] text-[18px] font-normal  text-[#FFFFFF] flex h-[50px] rounded-lg justify-center items-center",children:"确定"})]})})]})},f=e=>{let{openResultModal:t}=e,[n,r]=(0,i.useState)(""),[o,l]=(0,i.useState)(!1),[s,c]=(0,i.useState)([]),f=()=>{(0,d.ev)().then(e=>{(e||[]).unshift({name:"",id:""}),console.log("logg",e),c(e||[])}).catch(e=>{}).finally()};console.log("productList",s),(0,i.useEffect)(()=>{f()},[]);let p=()=>{console.log("selectValue",n),n&&l(!0)};return console.log("selectValue",n),(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(u.u_,{className:"rounded-lg",containerClassName:"mx-5 max-w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",title:"新建碳足迹结果",onClose:t,children:(0,a.jsxs)("div",{className:"mx-5 max-w-[640px] ",children:[(0,a.jsx)("span",{className:"font-normal leading-6 ",children:"碳足迹批次："}),(0,a.jsx)("input",{className:"w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg"}),(0,a.jsx)("span",{className:"font-normal leading-6 ",children:"产品系统："}),(0,a.jsx)("select",{id:"select",value:n,onChange:e=>r(e.target.value),className:"w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg",children:s.map((e,t)=>(0,a.jsx)("option",{selected:!!e.id,hidden:!e.id,value:e.id,children:e.name},"list_".concat(t)))}),(0,a.jsx)("span",{className:"font-normal leading-6 ",children:"实景数据填报："}),(0,a.jsx)("div",{onClick:()=>p(),className:" cursor-pointer rounded-[4px] mt-[10px] bg-[#F1F1F1] max-w-[84px] max-h-[24px]  text-center",children:"前往填写"}),(0,a.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5",children:[(0,a.jsx)("div",{onClick:t,className:" cursor-pointer bg-[#29953A1A] w-[310px] text-[18px] border-2 border-[#29953A]   font-normal  text-[#29953A] flex h-[50px] rounded-lg justify-center items-center",children:"取消"}),(0,a.jsx)("div",{className:"  cursor-pointer bg-[#29953A] w-[310px] text-[18px] font-normal  text-[#FFFFFF] flex h-[50px] rounded-lg justify-center items-center",children:"计算碳结果"})]})]})}),o&&(0,a.jsx)(m,{productId:Number(n),onOpenModal:()=>l(!1)})]})},p=function(){let[e,t]=(0,i.useState)(1),[n,u]=(0,i.useState)([]),[m,p]=(0,i.useState)(!1),[h,x]=(0,i.useState)(!1),g=()=>{x(!0)},w=[{title:"碳足迹批次",dataIndex:"loadNumber",width:"18.75rem",render:e=>(0,a.jsx)("span",{className:"max-w-[14rem] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":e,children:e})},{title:"实景数据",dataIndex:"productName",width:"18.75rem",render:e=>(0,a.jsx)("div",{onClick:()=>g(),className:"max-w-[14rem] truncate inline-block",children:e})},{title:"批次结果ID",dataIndex:"modelName",width:"7.5rem",render:e=>"PCFI-1"},{title:"产品系统名称",width:"18.75rem",dataIndex:"createTime",render:e=>"PCFI-1"},{title:"系统产品ID",width:"8.125rem",dataIndex:"createTime",render:e=>"PCFI-1"},{title:"产品系统版本",width:"9.375rem",dataIndex:"createTime",render:e=>"1"},{title:"描述",dataIndex:"description",width:"18.75rem",emptyText:"-"},{title:"操作人",dataIndex:"description",width:"6.25rem",emptyText:"-"},{title:"生成时间",dataIndex:"description",width:"10.625rem",emptyText:"-"},{title:"碳足迹结果",dataIndex:"description",width:"8.125rem",render:(e,t)=>(0,a.jsx)("div",{className:"flex justify-between text-green-2",children:(0,a.jsx)("span",{className:"cursor-pointer",onClick:()=>window.open("/tools/inventoryResult?id=".concat(t.id),"_blank"),children:"查看结果"})})},{title:"组织名称",dataIndex:"description",width:"8.125rem",emptyText:"-"},{title:"组织编号",dataIndex:"description",width:"8.125rem",emptyText:"-"},{title:"",width:"7.2rem",render:(e,t)=>(0,a.jsx)("div",{className:"flex justify-between text-green-2"})}],v=async()=>{let t=await (0,d.SO)(e);console.log("valvalueue",t)};return(0,i.useEffect)(()=>{v()},[e]),(0,a.jsxs)(r.m,{isNew:!0,className:"flex flex-col justify-between flex-1 text-black ",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,a.jsx)("span",{children:"我的产品碳足迹结果"}),(0,a.jsx)(s.z,{onClick:()=>p(!0),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建碳足迹结果"})]}),(0,a.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,a.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,a.jsx)("div",{className:"text-base leading-[1.625rem] min-w-[62.25rem]",children:(0,a.jsx)(o.i,{columns:w,columnsHeight:"h-[3.125rem]",mouseHoverKey:"id",data:n,className:"",headerClassName:{background:"#fff"}})})})})]}),(0,a.jsx)(l.t,{className:"my-8",onChange:e=>{t(e)},total:0,pgSize:10,pgNum:e}),m&&(0,a.jsx)(f,{openResultModal:()=>p(!1)}),h&&(0,a.jsx)(c.d,{onClose:()=>x(!1)})]})}},8723:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(959),r=["mousedown","touchstart"],i=function(e,t,n){void 0===n&&(n=r);var i=(0,a.useRef)(t);(0,a.useEffect)(function(){i.current=t},[t]),(0,a.useEffect)(function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&i.current(t)},a=0,r=n;a<r.length;a++){var o=r[a];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,o,t)}return function(){for(var e=0,a=n;e<a.length;e++){var r=a[e];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,r,t)}}},[n,e])}},9592:function(e,t,n){"use strict";var a=n(959),r=function(e,t){return"boolean"==typeof t?t:!e};t.Z=function(e){return(0,a.useReducer)(r,e)}},732:function(e,t,n){"use strict";let a,r,i;n.d(t,{ZP:function(){return k}});let o=new Set,l=new WeakMap,d=new WeakMap,s=new WeakMap,c=new WeakMap,u=new WeakMap,m=new WeakMap,f=new WeakMap,p=new WeakSet,h="__aa_tgt",x="__aa_del";function g(e){clearTimeout(f.get(e));let t=E(e),n="function"==typeof t?500:t.duration;f.set(e,setTimeout(async()=>{let t=s.get(e);try{await (null==t?void 0:t.finished),l.set(e,N(e)),function(e){let t=c.get(e);null==t||t.disconnect();let n=l.get(e),r=0;n||(n=N(e),l.set(e,n));let{offsetWidth:i,offsetHeight:o}=a,d=[n.top-5,i-(n.left+5+n.width),o-(n.top+5+n.height),n.left-5],s=d.map(e=>`${-1*Math.floor(e)}px`).join(" "),u=new IntersectionObserver(()=>{++r>1&&g(e)},{root:a,threshold:1,rootMargin:s});u.observe(e),c.set(e,u)}(e)}catch{}},n))}function w(e){setTimeout(()=>{u.set(e,setInterval(()=>v(g.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function v(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function b(e,t){t||h in e?!t||h in t||Object.defineProperty(t,h,{value:e}):Object.defineProperty(e,h,{value:e})}function y(e){return Number(e.replace(/[^0-9.\-]/g,""))}function N(e){let t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function j(e,t,n){let a=t.width,r=t.height,i=n.width,o=n.height,l=getComputedStyle(e),d=l.getPropertyValue("box-sizing");if("content-box"===d){let e=y(l.paddingTop)+y(l.paddingBottom)+y(l.borderTopWidth)+y(l.borderBottomWidth),t=y(l.paddingLeft)+y(l.paddingRight)+y(l.borderRightWidth)+y(l.borderLeftWidth);a-=t,i-=t,r-=e,o-=e}return[a,i,r,o].map(Math.round)}function E(e){return h in e&&m.has(e[h])?m.get(e[h]):{duration:250,easing:"ease-in-out"}}function C(e){if(h in e)return e[h]}function I(e){let t=C(e);return!!t&&p.has(t)}function F(e,...t){t.forEach(t=>t(e,m.has(e)));for(let n=0;n<e.children.length;n++){let a=e.children.item(n);a&&t.forEach(e=>e(a,m.has(a)))}}function k(e,t={}){if(r&&i){let n=window.matchMedia("(prefers-reduced-motion: reduce)"),a=n.matches&&"function"!=typeof t&&!t.disrespectUserMotionPreference;a||(p.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),F(e,g,w,e=>null==i?void 0:i.observe(e)),"function"==typeof t?m.set(e,t):m.set(e,{duration:250,easing:"ease-in-out",...t}),r.observe(e,{childList:!0}),o.add(e))}return Object.freeze({parent:e,enable:()=>{p.add(e)},disable:()=>{p.delete(e)},isEnabled:()=>p.has(e)})}"undefined"!=typeof window&&(a=document.documentElement,r=new MutationObserver(e=>{let t=function(e){let t=e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]),n=t.every(e=>"#comment"===e.nodeName);return!n&&e.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(b(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let a=t.target.children.item(n);if(a){if(x in a)return!1;b(t.target,a),e.add(a)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let a=t.removedNodes[n];if(x in a)return!1;a instanceof Element&&(e.add(a),b(t.target,a),d.set(a,[t.previousSibling,t.nextSibling]))}}return e},new Set)}(e);t&&t.forEach(e=>(function(e){var t;let n=e.isConnected,a=l.has(e);n&&d.has(e)&&d.delete(e),s.has(e)&&(null===(t=s.get(e))||void 0===t||t.cancel()),a&&n?function(e){let t;let n=l.get(e),a=N(e);if(!I(e))return l.set(e,a);if(!n)return;let r=E(e);if("function"!=typeof r){let i=n.left-a.left,o=n.top-a.top,[l,d,s,c]=j(e,n,a),u={transform:`translate(${i}px, ${o}px)`},m={transform:"translate(0, 0)"};l!==d&&(u.width=`${l}px`,m.width=`${d}px`),s!==c&&(u.height=`${s}px`,m.height=`${c}px`),t=e.animate([u,m],{duration:r.duration,easing:r.easing})}else(t=new Animation(r(e,"remain",n,a))).play();s.set(e,t),l.set(e,a),t.addEventListener("finish",g.bind(null,e))}(e):a&&!n?function(e){var t;let n;if(!d.has(e)||!l.has(e))return;let[a,r]=d.get(e);function i(){var t;e.remove(),l.delete(e),d.delete(e),s.delete(e),null===(t=c.get(e))||void 0===t||t.disconnect()}if(Object.defineProperty(e,x,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):a&&a.parentNode?a.parentNode.appendChild(e):null===(t=C(e))||void 0===t||t.appendChild(e),!I(e))return i();let[o,u,m,f]=function(e){let t=l.get(e),[n,,a]=j(e,t,N(e)),r=e.parentElement;for(;r&&("static"===getComputedStyle(r).position||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);let i=getComputedStyle(r),o=l.get(r)||N(r),d=Math.round(t.top-o.top)-y(i.borderTopWidth),s=Math.round(t.left-o.left)-y(i.borderLeftWidth);return[d,s,n,a]}(e),p=E(e),h=l.get(e);Object.assign(e.style,{position:"absolute",top:`${o}px`,left:`${u}px`,width:`${m}px`,height:`${f}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!=typeof p?n=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:p.duration,easing:"ease-out"}):(n=new Animation(p(e,"remove",h))).play(),s.set(e,n),n.addEventListener("finish",i)}(e):function(e){let t;let n=N(e);l.set(e,n);let a=E(e);I(e)&&("function"!=typeof a?t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*a.duration,easing:"ease-in"}):(t=new Animation(a(e,"add",n))).play(),s.set(e,t),t.addEventListener("finish",g.bind(null,e)))}(e)})(e))}),(i=new ResizeObserver(e=>{e.forEach(e=>{e.target===a&&(clearTimeout(f.get(a)),f.set(a,setTimeout(()=>{o.forEach(e=>F(e,e=>v(()=>g(e))))},100))),l.has(e.target)&&g(e.target)})})).observe(a))}},function(e){e.O(0,[713,769,7307,6574,6740,2351,4393,9774,2888,179],function(){return e(e.s=6763)}),_N_E=e.O()}]);