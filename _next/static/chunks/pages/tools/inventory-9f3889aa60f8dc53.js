(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{6763:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/inventory",function(){return n(5080)}])},5080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(1527),r=n(1600),i=n(959),l=n(9346),o=n(9869),d=n(6699),s=n(1191),c=n(5088),u=n(9049),m=n(5399),p=n.n(m);let f=()=>{let e=p()(),t=e.format("YYYY-MM-DD HH:mm:ss");return t};var x=e=>{let{onOpenModal:t,realData:n,tableData:r,realArr:o}=e,[d,s]=(0,i.useState)(r),c=()=>{var e;let a=null===(e=document)||void 0===e?void 0:e.getElementById("realDataTable"),i=a.getElementsByTagName("tr"),l=[];for(let e=0;e<i.length;e++){let t=[],n=i[e].getElementsByTagName("input");for(let e=0;e<n.length;e++){let a=n[e].value;t.push(a)}l.push(t)}let o=[];o=r.map((e,t)=>{let n={processId:e.context["@id"],paramValue:l.slice(1)[t][0]||e.value.toString(),paramName:e.name,dateTime:f()};return n});let d={lcaParamList:o};"function"==typeof t&&t(),"function"==typeof n&&n(d)};return(0,i.useEffect)(()=>{let e=null==r?void 0:r.map((e,t)=>(null==o?void 0:o.length)&&o[t].paramName===e.name?{...e,inputValue:o[t].paramValue}:{...e});s(e)},[o,r]),(0,a.jsxs)(u.u_,{title:"实景数据填报",containerClassName:"mx-5 max-w-[1000px] ",titleClassName:"text-[20px] leading-5 font-bold",onClose:"function"==typeof t&&t||void 0,children:[(0,a.jsx)("div",{className:"mx-5 max-w-[1000px] max-h-96 overflow-y-auto ",children:(0,a.jsx)(l.i,{columns:[{title:"参数名",dataIndex:"name",width:"9rem",render:e=>e},{title:"过程名称",dataIndex:"name",width:"7rem",render:(e,t)=>t.context.name},{title:"参考值",width:"10rem",dataIndex:"value",render:e=>e},{title:"填入值",width:"10rem",dataIndex:"createTime",render:(e,t)=>(0,a.jsx)("input",{defaultValue:t.inputValue,type:"number",className:"w-[10rem] h-[40px] bg-[#F3F3F3]"})}],tableId:"realDataTable",columnsHeight:"h-[3.125rem]",mouseHoverKey:"id",data:d||[],isSetBorder:!0,className:"",headerClassName:{background:"#DDDDDD",position:"sticky",top:"0",fontWeight:"bold"}})}),(0,a.jsx)("div",{className:"mx-5 ",children:(0,a.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5",children:[(0,a.jsx)("div",{onClick:"function"==typeof t&&t||void 0,className:" cursor-pointer bg-[#29953A1A] w-[450px] text-[18px] border-2 border-[#29953A] font-normal text-[#29953A] flex h-[50px] rounded-lg justify-center items-center",children:"取消"}),(0,a.jsx)("div",{onClick:()=>c(),className:"  cursor-pointer bg-[#29953A] w-[450px] text-[18px] font-normal  text-[#FFFFFF] flex h-[50px] rounded-lg justify-center items-center",children:"确定"})]})})]})};let h={loadName:"碳足迹批次",productId:"产品系统"},g={loadName:"",productId:""};var v=e=>{let{openResultModal:t,getList:n}=e,[r,l]=(0,i.useState)(!1),[o,s]=(0,i.useState)([]),[c,m]=(0,i.useState)({lcaParamList:[]}),[p,v]=(0,i.useState)([]),[w,N]=(0,i.useState)(g),[b,y]=(0,i.useState)(g),[j,I]=(0,i.useState)(!1),E=()=>{(0,d.ev)().then(e=>{(e||[]).unshift({name:"",id:""}),s(e||[])}).catch(e=>{}).finally()};(0,i.useEffect)(()=>{if(j){let e={};for(let t in b)b[t].trim()||(e[t]="".concat(h[t],"不能为空"));if(Object.keys(e).length>0){N(e);return}N({})}},[j,b]);let k=()=>{var e;I(!0);let{loadName:a,productId:r}=b;if(!a||!r)return;let i=p.map(e=>({processId:e.context["@id"],paramValue:e.value.toString(),paramName:e.name,dateTime:f()})),l=(null===(e=c.lcaParamList)||void 0===e?void 0:e.length)?c:{lcaParamList:i},o={...l,loadName:a,productId:r};(0,d.E)(o).then(e=>{"function"==typeof t&&t(),"function"==typeof n&&n()}).catch(e=>{}).finally(()=>{})};(0,i.useEffect)(()=>{E()},[]);let C=()=>{b.productId&&l(!0)},F=e=>{let{name:t,value:n}=e.target;y(e=>({...e,[t]:n}))},D=async()=>{(0,d.NF)(b.productId).then(e=>{var t;let n=JSON.parse(e.paramDetail);v("{}"===JSON.stringify(n)?[]:null===(t=n[0])||void 0===t?void 0:t.parameters)}).catch(e=>{}).finally()};return(0,i.useEffect)(()=>{b.productId&&D()},[b.productId]),(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(u.u_,{className:"rounded-lg",containerClassName:"mx-5 max-w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",title:"新建碳足迹结果",onClose:t,children:(0,a.jsxs)("div",{className:"mx-5 max-w-[640px] ",children:[(0,a.jsx)("span",{className:"font-normal leading-6 ",children:"碳足迹批次："}),(0,a.jsx)("input",{value:b.loadName,onChange:F,id:"loadName",name:"loadName",className:"w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg"}),w.loadName&&(0,a.jsxs)("div",{className:"mb-2.5 ",children:[(0,a.jsx)("span",{className:" text-[red]",children:w.loadName})," "]}),(0,a.jsx)("span",{className:"font-normal leading-6 ",children:"产品系统："}),(0,a.jsx)("select",{id:"productId",name:"productId",value:b.productId,onChange:F,className:"w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg",children:o.map((e,t)=>(0,a.jsx)("option",{selected:!!e.id,hidden:!e.id,value:e.id,children:e.name},"list_".concat(t)))}),w.productId&&(0,a.jsxs)("div",{className:"mb-2.5 ",children:[(0,a.jsx)("span",{className:" text-[red]",children:w.productId})," "]}),(0,a.jsx)("span",{className:"font-normal leading-6 ",children:"实景数据填报："}),(0,a.jsx)("div",{onClick:()=>C(),className:" cursor-pointer rounded-[4px] mt-[10px] bg-[#F1F1F1] max-w-[84px] max-h-[24px]  text-center",children:"前往填写"}),(0,a.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5",children:[(0,a.jsx)("div",{onClick:t,className:" cursor-pointer bg-[#29953A1A] w-[310px] text-[18px] border-2 border-[#29953A]   font-normal  text-[#29953A] flex h-[50px] rounded-lg justify-center items-center",children:"取消"}),(0,a.jsx)("button",{onClick:()=>k(),className:"  cursor-pointer bg-[#29953A] w-[310px] text-[18px] font-normal  text-[#FFFFFF] flex h-[50px] rounded-lg justify-center items-center",children:"计算碳结果"})]})]})}),r&&(0,a.jsx)(x,{realData:m,tableData:p,realArr:c.lcaParamList,onOpenModal:()=>l(!1)})]})},w=n(4875),N=n.n(w),b=function(){let[e,t]=(0,i.useState)(1),[n,u]=(0,i.useState)({}),[m,p]=(0,i.useState)(!1),[f,x]=(0,i.useState)(!1),h=(0,i.useRef)({inputData:"",data:""}),g=e=>{let{param:t,paramDetail:n}=e;h.current={inputData:t,data:n},x(!0)},w=(0,i.useMemo)(()=>[{title:"碳足迹批次",dataIndex:"loadName",width:"10rem",render:e=>(0,a.jsx)("span",{className:"max-w-[14rem] text-lg leading-[27px] truncate inline-block",children:e})},{title:"实景数据",dataIndex:"productName",width:"6rem",render:(e,t)=>(0,a.jsx)("div",{className:"flex justify-center text-lg leading-[27px]  w-[8rem] bg-[#F1F1F1] rounded",onClick:()=>g(t),children:(0,a.jsx)("span",{className:"cursor-pointer ",children:"查看实景数据"})})},{title:"批次结果ID",dataIndex:"loadNumber",width:"7.5rem",render:e=>(0,a.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:" text-lg leading-[27px] max-w-[14rem] truncate inline-block",children:e})},{title:"产品系统名称",width:"2em",dataIndex:"productName",render:e=>(0,a.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:e})},{title:"系统产品ID",width:"8.125rem",dataIndex:"productUuid",render:e=>(0,a.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:"max-w-[14rem] text-lg leading-[27px]  truncate inline-block",children:e})},{title:"产品系统版本",width:"1rem",dataIndex:"productVersion",render:e=>(0,a.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:e})},{title:"描述",dataIndex:"productDescription",width:"18.75rem",render:e=>(0,a.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:"max-w-[14rem]  text-lg leading-[27px] truncate inline-block",children:e})},{title:"操作人",dataIndex:"operator",width:"6.25rem",render:e=>(0,a.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:e})},{title:"生成时间",dataIndex:"calculateSuccessTime",width:"18.625rem",render:e=>(0,a.jsx)("span",{className:"max-w-[14rem] text-lg leading-[27px]  truncate inline-block",children:e})},{title:"碳足迹结果",dataIndex:"description",width:"8.125rem",render:(e,t)=>(0,a.jsx)("div",{className:N()("flex justify-between",{"text-[#FF9800] ":0===t.state,"text-green-2 ":1===t.state,"text-[red] ":-1===t.state}),children:(0,a.jsx)("span",{className:"cursor-pointer text-lg leading-[27px]",onClick:()=>1===t.state&&window.open("/tools/inventoryResult?id=".concat(t.loadNumber),"_blank"),children:0===t.state?"等待计算":1===t.state?"查看结果":"计算失败"})})},{title:"组织名称",dataIndex:"orgName",width:"8.125rem",render:e=>(0,a.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:e})},{title:"组织编号",dataIndex:"orgSerialNumber",width:"8.125rem",emptyText:"-",render:e=>(0,a.jsx)("span",{className:" text-lg leading-[27px] max-w-[14rem] ",children:e})}],[]),b=async()=>{try{let t=await (0,d.h4)(e);u(t)}catch(e){console.log("eeee",e)}};return(0,i.useEffect)(()=>{b();let e=setInterval(()=>{b()},1e4);return()=>{clearInterval(e)}},[e]),(0,a.jsxs)(r.m,{isNew:!0,className:"flex flex-col justify-between flex-1 text-black ",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,a.jsx)("span",{children:"我的产品碳足迹结果"}),(0,a.jsx)(s.z,{onClick:()=>p(!0),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建碳足迹结果"})]}),(0,a.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,a.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,a.jsx)("div",{className:"text-base leading-[1.625rem] min-w-[62.25rem]",children:(0,a.jsx)(l.i,{columns:w,columnsHeight:"h-[3.125rem] ",mouseHoverKey:"loadNumber",data:(null==n?void 0:n.records)||[],className:"",headerClassName:{background:"#fff",fontWeight:"700",fontSize:"18px",lineHeight:"27px"}})})})})]}),(0,a.jsx)(o.t,{className:"my-8",onChange:e=>{t(e)},total:n.total||0,pgSize:10,pgNum:e}),m&&(0,a.jsx)(v,{openResultModal:()=>p(!1),getList:()=>b()}),f&&(0,a.jsx)(c.d,{...h.current,onClose:()=>x(!1)})]})}},8723:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(959),r=["mousedown","touchstart"],i=function(e,t,n){void 0===n&&(n=r);var i=(0,a.useRef)(t);(0,a.useEffect)(function(){i.current=t},[t]),(0,a.useEffect)(function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&i.current(t)},a=0,r=n;a<r.length;a++){var l=r[a];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,l,t)}return function(){for(var e=0,a=n;e<a.length;e++){var r=a[e];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,r,t)}}},[n,e])}},9592:function(e,t,n){"use strict";var a=n(959),r=function(e,t){return"boolean"==typeof t?t:!e};t.Z=function(e){return(0,a.useReducer)(r,e)}},732:function(e,t,n){"use strict";let a,r,i;n.d(t,{ZP:function(){return F}});let l=new Set,o=new WeakMap,d=new WeakMap,s=new WeakMap,c=new WeakMap,u=new WeakMap,m=new WeakMap,p=new WeakMap,f=new WeakSet,x="__aa_tgt",h="__aa_del";function g(e){clearTimeout(p.get(e));let t=I(e),n="function"==typeof t?500:t.duration;p.set(e,setTimeout(async()=>{let t=s.get(e);try{await (null==t?void 0:t.finished),o.set(e,y(e)),function(e){let t=c.get(e);null==t||t.disconnect();let n=o.get(e),r=0;n||(n=y(e),o.set(e,n));let{offsetWidth:i,offsetHeight:l}=a,d=[n.top-5,i-(n.left+5+n.width),l-(n.top+5+n.height),n.left-5],s=d.map(e=>`${-1*Math.floor(e)}px`).join(" "),u=new IntersectionObserver(()=>{++r>1&&g(e)},{root:a,threshold:1,rootMargin:s});u.observe(e),c.set(e,u)}(e)}catch{}},n))}function v(e){setTimeout(()=>{u.set(e,setInterval(()=>w(g.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function w(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function N(e,t){t||x in e?!t||x in t||Object.defineProperty(t,x,{value:e}):Object.defineProperty(e,x,{value:e})}function b(e){return Number(e.replace(/[^0-9.\-]/g,""))}function y(e){let t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function j(e,t,n){let a=t.width,r=t.height,i=n.width,l=n.height,o=getComputedStyle(e),d=o.getPropertyValue("box-sizing");if("content-box"===d){let e=b(o.paddingTop)+b(o.paddingBottom)+b(o.borderTopWidth)+b(o.borderBottomWidth),t=b(o.paddingLeft)+b(o.paddingRight)+b(o.borderRightWidth)+b(o.borderLeftWidth);a-=t,i-=t,r-=e,l-=e}return[a,i,r,l].map(Math.round)}function I(e){return x in e&&m.has(e[x])?m.get(e[x]):{duration:250,easing:"ease-in-out"}}function E(e){if(x in e)return e[x]}function k(e){let t=E(e);return!!t&&f.has(t)}function C(e,...t){t.forEach(t=>t(e,m.has(e)));for(let n=0;n<e.children.length;n++){let a=e.children.item(n);a&&t.forEach(e=>e(a,m.has(a)))}}function F(e,t={}){if(r&&i){let n=window.matchMedia("(prefers-reduced-motion: reduce)"),a=n.matches&&"function"!=typeof t&&!t.disrespectUserMotionPreference;a||(f.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),C(e,g,v,e=>null==i?void 0:i.observe(e)),"function"==typeof t?m.set(e,t):m.set(e,{duration:250,easing:"ease-in-out",...t}),r.observe(e,{childList:!0}),l.add(e))}return Object.freeze({parent:e,enable:()=>{f.add(e)},disable:()=>{f.delete(e)},isEnabled:()=>f.has(e)})}"undefined"!=typeof window&&(a=document.documentElement,r=new MutationObserver(e=>{let t=function(e){let t=e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]),n=t.every(e=>"#comment"===e.nodeName);return!n&&e.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(N(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let a=t.target.children.item(n);if(a){if(h in a)return!1;N(t.target,a),e.add(a)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let a=t.removedNodes[n];if(h in a)return!1;a instanceof Element&&(e.add(a),N(t.target,a),d.set(a,[t.previousSibling,t.nextSibling]))}}return e},new Set)}(e);t&&t.forEach(e=>(function(e){var t;let n=e.isConnected,a=o.has(e);n&&d.has(e)&&d.delete(e),s.has(e)&&(null===(t=s.get(e))||void 0===t||t.cancel()),a&&n?function(e){let t;let n=o.get(e),a=y(e);if(!k(e))return o.set(e,a);if(!n)return;let r=I(e);if("function"!=typeof r){let i=n.left-a.left,l=n.top-a.top,[o,d,s,c]=j(e,n,a),u={transform:`translate(${i}px, ${l}px)`},m={transform:"translate(0, 0)"};o!==d&&(u.width=`${o}px`,m.width=`${d}px`),s!==c&&(u.height=`${s}px`,m.height=`${c}px`),t=e.animate([u,m],{duration:r.duration,easing:r.easing})}else(t=new Animation(r(e,"remain",n,a))).play();s.set(e,t),o.set(e,a),t.addEventListener("finish",g.bind(null,e))}(e):a&&!n?function(e){var t;let n;if(!d.has(e)||!o.has(e))return;let[a,r]=d.get(e);function i(){var t;e.remove(),o.delete(e),d.delete(e),s.delete(e),null===(t=c.get(e))||void 0===t||t.disconnect()}if(Object.defineProperty(e,h,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):a&&a.parentNode?a.parentNode.appendChild(e):null===(t=E(e))||void 0===t||t.appendChild(e),!k(e))return i();let[l,u,m,p]=function(e){let t=o.get(e),[n,,a]=j(e,t,y(e)),r=e.parentElement;for(;r&&("static"===getComputedStyle(r).position||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);let i=getComputedStyle(r),l=o.get(r)||y(r),d=Math.round(t.top-l.top)-b(i.borderTopWidth),s=Math.round(t.left-l.left)-b(i.borderLeftWidth);return[d,s,n,a]}(e),f=I(e),x=o.get(e);Object.assign(e.style,{position:"absolute",top:`${l}px`,left:`${u}px`,width:`${m}px`,height:`${p}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!=typeof f?n=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:f.duration,easing:"ease-out"}):(n=new Animation(f(e,"remove",x))).play(),s.set(e,n),n.addEventListener("finish",i)}(e):function(e){let t;let n=y(e);o.set(e,n);let a=I(e);k(e)&&("function"!=typeof a?t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*a.duration,easing:"ease-in"}):(t=new Animation(a(e,"add",n))).play(),s.set(e,t),t.addEventListener("finish",g.bind(null,e)))}(e)})(e))}),(i=new ResizeObserver(e=>{e.forEach(e=>{e.target===a&&(clearTimeout(p.get(a)),p.set(a,setTimeout(()=>{l.forEach(e=>C(e,e=>w(()=>g(e))))},100))),o.has(e.target)&&g(e.target)})})).observe(a))}},function(e){e.O(0,[713,769,307,574,740,351,973,774,888,179],function(){return e(e.s=6763)}),_N_E=e.O()}]);