(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{6763:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/inventory",function(){return n(5080)}])},5088:function(e,t,n){"use strict";n.d(t,{d:function(){return u}});var a=n(1527),r=n(9049),l=n(959);function i(){return(0,a.jsx)("tr",{className:" text-black text-center text-lg font-normal ",children:(0,a.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top",children:"无数据"})})}var o=e=>{let{header:t,data:n,empty:r=(0,a.jsx)(i,{}),className:l="min-w-full divide-y divide-neutral-200",headerClassName:o="bg-neutral-200 text-left text-black text-lg font-bold leading-[27px]",headerItemClassName:d="p-3",tbodyClassName:s="bg-white divide-y divide-neutral-200",rowClassName:c="text-black text-sm font-normal whitespace-nowrap",cellClassName:u="p-3"}=e;return(0,a.jsxs)("table",{className:l,children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{className:o,children:t.map((e,t)=>(0,a.jsx)("th",{scope:"col",className:d,children:e},t))})}),(0,a.jsxs)("tbody",{className:s,children:[n.map((e,t)=>(0,a.jsx)("tr",{className:c,children:e.map((e,t)=>(0,a.jsx)("td",{className:u,children:e},t))},t)),0===n.length&&r]})]})},d=n(9701),s=n(2699),c=n.n(s);function u(e){let{data:t,inputData:n,...i}=e,s=(0,l.useMemo)(()=>{var e;if(!t)return[];let a=n?c().mapKeys("string"==typeof n?(0,d.OA)(n)||[]:n,e=>e.paramName):{},r=(0,d.OA)(t)||[],l=(null===(e=r[0])||void 0===e?void 0:e.parameters)||[];return l.map(e=>{var t;return[e.name,e.context.name,e.value,(null===(t=a[e.name])||void 0===t?void 0:t.paramValue)||""]})},[t,n]);return(0,a.jsx)(r.u_,{title:"实景数据",...i,children:(0,a.jsx)(o,{className:"w-[40rem] max-h-mc",data:s,header:["参数名","过程名称","参考值","输入值"]})})}},5080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(1527),r=n(1600),l=n(959),i=n(9346),o=n(9869),d=n(6699),s=n(1191),c=n(5088),u=n(9049),m=n(5399),p=n.n(m);let f=()=>{let e=p()(),t=e.format("YYYY-MM-DD HH:mm:ss");return t};var x=e=>{let{onOpenModal:t,realData:n,tableData:r,realArr:o}=e,[d,c]=(0,l.useState)(r);return(0,l.useEffect)(()=>{let e=null==r?void 0:r.map((e,t)=>(null==o?void 0:o.length)&&o[t].paramName===e.name?{...e,inputValue:o[t].paramValue}:{...e});c(e)},[o,r]),(0,a.jsxs)(u.u_,{title:"实景数据填报",containerClassName:"mx-5 max-w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",onClose:"function"==typeof t&&t||void 0,children:[(0,a.jsx)("div",{className:" mx-5 w-[640px] max-h-[400px] overflow-y-auto ",children:(0,a.jsx)(i.i,{columns:[{title:"参数名",dataIndex:"name",width:"9rem",render:e=>(0,a.jsx)("div",{className:" flex items-center h-[33px] font-normal leading-[21px] text-[14px] ",children:e})},{title:"过程名称",dataIndex:"name",width:"7rem",render:(e,t)=>(0,a.jsx)("div",{className:"flex items-center  h-[33px] font-normal leading-[21px] text-[14px] ",children:t.context.name})},{title:"参考值",width:"10rem",dataIndex:"value",render:e=>(0,a.jsx)("div",{className:"flex items-center h-[33px] font-normal leading-[21px] text-[14px] ",children:e})},{title:"填入值",width:"10rem",dataIndex:"createTime",render:(e,t)=>(0,a.jsx)("input",{defaultValue:t.inputValue,type:"number",className:"font-normal  leading-[21px] text-[14px] w-[10rem] h-[33px] "})}],tableId:"realDataTable",data:d||[],isSetBorder:!0,headerClassName:{background:"#DDDDDD",position:"sticky",top:"0",fontWeight:"700",fontSize:"18px",lineHeight:"30px",height:"50px"}})}),(0,a.jsx)("div",{className:"mx-5 ",children:(0,a.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5",children:[(0,a.jsx)(s.u,{onClick:"function"==typeof t&&t||void 0,defStyle:"btn-primary-1",className:"flex-1  font-normal  h-[50px] border-2 text-[18px]",children:"取消"}),(0,a.jsx)(s.u,{className:"flex-1 h-[50px]  font-normal  text-[18px]",onClick:()=>{var e;let a=null===(e=document)||void 0===e?void 0:e.getElementById("realDataTable"),l=a.getElementsByTagName("tr"),i=[];for(let e=0;e<l.length;e++){let t=[],n=l[e].getElementsByTagName("input");for(let e=0;e<n.length;e++){let a=n[e].value;t.push(a)}i.push(t)}let o=[];o=r.map((e,t)=>{let n={processId:e.context["@id"],paramValue:i.slice(1)[t][0]||e.value.toString(),paramName:e.name,dateTime:f()};return n});let d={lcaParamList:o};"function"==typeof t&&t(),"function"==typeof n&&n(d)},children:"确定"})]})})]})};let h={loadName:"碳足迹批次",productId:"产品系统"},g={loadName:"",productId:""};var v=e=>{let{openResultModal:t,getList:n}=e,[r,i]=(0,l.useState)(!1),[o,c]=(0,l.useState)([]),[m,p]=(0,l.useState)({lcaParamList:[]}),[v,N]=(0,l.useState)([]),[w,b]=(0,l.useState)(g),[j,y]=(0,l.useState)(g),[I,k]=(0,l.useState)(!1),E=()=>{(0,d.ev)().then(e=>{(e||[]).unshift({name:"",id:""}),c(e||[])}).catch(e=>{}).finally()};(0,l.useEffect)(()=>{if(I){let e={};for(let t in j)j[t].trim()||(e[t]="".concat(h[t],"不能为空"));if(Object.keys(e).length>0){b(e);return}b({})}},[I,j]),(0,l.useEffect)(()=>{E()},[]);let S=()=>{j.productId&&i(!0)},C=e=>{let{name:t,value:n}=e.target;y(e=>({...e,[t]:n}))},D=async()=>{(0,d.NF)(j.productId).then(e=>{var t;let n=JSON.parse(e.paramDetail);N("{}"===JSON.stringify(n)?[]:null===(t=n[0])||void 0===t?void 0:t.parameters)}).catch(e=>{}).finally()};return(0,l.useEffect)(()=>{j.productId&&D()},[j.productId]),(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)(u.u_,{className:"rounded-lg",containerClassName:"mx-5 max-w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",title:"新建碳足迹结果",onClose:t,children:(0,a.jsxs)("div",{className:"mx-5 w-[640px] ",children:[(0,a.jsx)("span",{className:"font-normal leading-6 ",children:"碳足迹批次："}),(0,a.jsx)("input",{value:j.loadName,onChange:C,id:"loadName",name:"loadName",maxLength:30,className:"w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg"}),(0,a.jsx)("span",{className:"font-normal leading-6 ",children:"产品系统："}),(0,a.jsx)("select",{id:"productId",name:"productId",value:j.productId,onChange:C,className:"w-full mb-[20px] mt-[10px] border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg",children:o.map((e,t)=>(0,a.jsx)("option",{selected:!!e.id,hidden:!e.id,value:e.id,children:e.name},"list_".concat(t)))}),(0,a.jsx)("span",{className:"font-normal leading-6 ",children:"实景数据填报："}),(0,a.jsx)("div",{onClick:()=>S(),className:" flex cursor-pointer rounded-[4px] leading-4 text-[16px] mt-[10px] bg-[#F1F1F1] max-w-[84px] h-[24px]  text-center items-center justify-center ",children:"前往填写"}),(0,a.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5",children:[(0,a.jsx)(s.u,{onClick:t,defStyle:"btn-primary-1",className:"flex-1  font-normal  h-[50px] border-2 text-[18px]",children:"取消"}),(0,a.jsx)(s.u,{className:"flex-1 h-[50px]  font-normal  text-[18px]",onClick:()=>{var e;k(!0);let{loadName:a,productId:r}=j;if(!a||!r)return;let l=v.map(e=>({processId:e.context["@id"],paramValue:e.value.toString(),paramName:e.name,dateTime:f()})),i=(null===(e=m.lcaParamList)||void 0===e?void 0:e.length)?m:{lcaParamList:l},o={...i,loadName:a,productId:r};(0,d.E)(o).then(e=>{"function"==typeof t&&t(),"function"==typeof n&&n()}).catch(e=>{}).finally(()=>{})},disabled:!j.productId||!j.loadName,children:"计算碳结果"})]})]})}),r&&(0,a.jsx)(x,{realData:p,tableData:v,realArr:m.lcaParamList,onOpenModal:()=>i(!1)})]})},N=n(4875),w=n.n(N),b=n(70),j=n(9701),y=function(){let[e,t]=(0,l.useState)(1),[n,u]=(0,l.useState)({}),[m,p]=(0,l.useState)(!1),[f,x]=(0,l.useState)(!1),h=(0,l.useRef)({inputData:"",data:""}),[g,N]=(0,l.useState)(!1),y=e=>{let{param:t,paramDetail:n}=e;h.current={inputData:t,data:n},x(!0)},I=(0,l.useMemo)(()=>[{title:"碳足迹批次",dataIndex:"loadName",width:"10rem",render:e=>(0,a.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:"w-[13rem] text-lg leading-[27px] truncate inline-block",children:e})},{title:"实景数据",dataIndex:"productName",width:"6rem",render:(e,t)=>(0,a.jsx)("div",{className:"flex justify-center text-lg leading-[27px]  w-[8rem] bg-[#F1F1F1] rounded",onClick:()=>y(t),children:(0,a.jsx)("span",{className:"cursor-pointer ",children:"查看实景数据"})})},{title:"批次结果ID",dataIndex:"loadNumber",width:"8rem",render:e=>(0,a.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:" text-lg leading-[27px] w-[13rem]  truncate inline-block",children:(0,j.lS)(e,8,8)})},{title:"产品系统名称",width:"2rem",dataIndex:"productName",render:e=>(0,a.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:" text-lg  truncate inline-block leading-[27px] max-w-[14rem] ",children:e})},{title:"系统产品ID",width:"7rem",dataIndex:"productUuid",render:e=>(0,a.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:"w-[13rem] text-lg leading-[27px]  truncate inline-block",children:(0,j.lS)(e,8,8)})},{title:"产品系统版本",width:"1rem",dataIndex:"productVersion",render:e=>(0,a.jsx)("span",{className:" text-lg leading-[27px] max-w-[1rem] ",children:e})},{title:"描述",dataIndex:"productDescription",width:"18.75rem",render:e=>(0,a.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:"w-[13rem]  text-lg leading-[27px] truncate inline-block",children:e})},{title:"操作人",dataIndex:"operator",width:"6.25rem",render:e=>(0,a.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:" truncate inline-block text-lg leading-[27px] max-w-[14rem] ",children:e})},{title:"生成时间",dataIndex:"calculateSuccessTime",width:"18.625rem",render:e=>(0,a.jsx)("span",{className:"max-w-[11rem] text-lg leading-[27px]  truncate inline-block",children:e})},{title:"碳足迹结果",dataIndex:"description",width:"8.125rem",render:(e,t)=>(0,a.jsx)("div",{className:w()("flex justify-between",{"text-[#FF9800] ":0===t.state,"text-green-2 ":1===t.state,"text-[red] ":-1===t.state}),children:(0,a.jsx)(b.Z,{className:"cursor-pointer text-lg leading-[27px]",href:1===t.state&&"/tools/inventoryResult?id=".concat(t.loadNumber),children:0===t.state?"等待计算":1===t.state?"查看结果":"计算失败"})})},{title:"组织名称",dataIndex:"orgName",width:"8.125rem",render:e=>(0,a.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:"truncate inline-block text-lg leading-[27px] max-w-[14rem] ",children:e})},{title:"组织编号",dataIndex:"orgSerialNumber",width:"8.125rem",emptyText:"-",render:e=>(0,a.jsx)("span",{"data-tooltip-content":e,"data-tooltip-id":"tooltip",className:"truncate inline-block text-lg leading-[27px] max-w-[14rem] ",children:e})}],[]),k=async()=>{try{let t=await (0,d.h4)(e);u(t),N(!1)}catch(e){console.log("eeee",e)}};return(0,l.useEffect)(()=>{k();let e=setInterval(()=>{k()},1e4);return()=>{clearInterval(e)}},[e]),(0,a.jsxs)(r.m,{isNew:!0,className:"flex flex-col justify-between flex-1 text-black ",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("h3",{className:"flex items-center justify-between mt-8 text-2xl font-semibold",children:[(0,a.jsx)("span",{children:"我的产品碳足迹结果"}),(0,a.jsx)(s.z,{onClick:()=>p(!0),className:"w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11",children:"新建碳足迹结果"})]}),(0,a.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,a.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,a.jsx)("div",{className:"text-base leading-[1.625rem] min-w-[62.25rem]",children:(0,a.jsx)(i.i,{loading:g,columns:I,columnsHeight:"h-[3.125rem] ",mouseHoverKey:"loadNumber",data:(null==n?void 0:n.records)||[],className:"",headerClassName:{background:"#fff",fontWeight:"700",fontSize:"18px",lineHeight:"27px",height:"3.125rem"}})})})})]}),(0,a.jsx)(o.t,{className:"my-8",onChange:e=>{t(e),N(!0)},total:n.total||0,pgSize:10,pgNum:e}),m&&(0,a.jsx)(v,{openResultModal:()=>p(!1),getList:()=>{t(1)}}),f&&(0,a.jsx)(c.d,{...h.current,onClose:()=>x(!1)})]})}},8723:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(959),r=["mousedown","touchstart"],l=function(e,t,n){void 0===n&&(n=r);var l=(0,a.useRef)(t);(0,a.useEffect)(function(){l.current=t},[t]),(0,a.useEffect)(function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&l.current(t)},a=0,r=n;a<r.length;a++){var i=r[a];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,i,t)}return function(){for(var e=0,a=n;e<a.length;e++){var r=a[e];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,r,t)}}},[n,e])}},9592:function(e,t,n){"use strict";var a=n(959),r=function(e,t){return"boolean"==typeof t?t:!e};t.Z=function(e){return(0,a.useReducer)(r,e)}},732:function(e,t,n){"use strict";let a,r,l;n.d(t,{ZP:function(){return C}});let i=new Set,o=new WeakMap,d=new WeakMap,s=new WeakMap,c=new WeakMap,u=new WeakMap,m=new WeakMap,p=new WeakMap,f=new WeakSet,x="__aa_tgt",h="__aa_del";function g(e){clearTimeout(p.get(e));let t=I(e),n="function"==typeof t?500:t.duration;p.set(e,setTimeout(async()=>{let t=s.get(e);try{await (null==t?void 0:t.finished),o.set(e,j(e)),function(e){let t=c.get(e);null==t||t.disconnect();let n=o.get(e),r=0;n||(n=j(e),o.set(e,n));let{offsetWidth:l,offsetHeight:i}=a,d=[n.top-5,l-(n.left+5+n.width),i-(n.top+5+n.height),n.left-5],s=d.map(e=>`${-1*Math.floor(e)}px`).join(" "),u=new IntersectionObserver(()=>{++r>1&&g(e)},{root:a,threshold:1,rootMargin:s});u.observe(e),c.set(e,u)}(e)}catch{}},n))}function v(e){setTimeout(()=>{u.set(e,setInterval(()=>N(g.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function N(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function w(e,t){t||x in e?!t||x in t||Object.defineProperty(t,x,{value:e}):Object.defineProperty(e,x,{value:e})}function b(e){return Number(e.replace(/[^0-9.\-]/g,""))}function j(e){let t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function y(e,t,n){let a=t.width,r=t.height,l=n.width,i=n.height,o=getComputedStyle(e),d=o.getPropertyValue("box-sizing");if("content-box"===d){let e=b(o.paddingTop)+b(o.paddingBottom)+b(o.borderTopWidth)+b(o.borderBottomWidth),t=b(o.paddingLeft)+b(o.paddingRight)+b(o.borderRightWidth)+b(o.borderLeftWidth);a-=t,l-=t,r-=e,i-=e}return[a,l,r,i].map(Math.round)}function I(e){return x in e&&m.has(e[x])?m.get(e[x]):{duration:250,easing:"ease-in-out"}}function k(e){if(x in e)return e[x]}function E(e){let t=k(e);return!!t&&f.has(t)}function S(e,...t){t.forEach(t=>t(e,m.has(e)));for(let n=0;n<e.children.length;n++){let a=e.children.item(n);a&&t.forEach(e=>e(a,m.has(a)))}}function C(e,t={}){if(r&&l){let n=window.matchMedia("(prefers-reduced-motion: reduce)"),a=n.matches&&"function"!=typeof t&&!t.disrespectUserMotionPreference;a||(f.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),S(e,g,v,e=>null==l?void 0:l.observe(e)),"function"==typeof t?m.set(e,t):m.set(e,{duration:250,easing:"ease-in-out",...t}),r.observe(e,{childList:!0}),i.add(e))}return Object.freeze({parent:e,enable:()=>{f.add(e)},disable:()=>{f.delete(e)},isEnabled:()=>f.has(e)})}"undefined"!=typeof window&&(a=document.documentElement,r=new MutationObserver(e=>{let t=function(e){let t=e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]),n=t.every(e=>"#comment"===e.nodeName);return!n&&e.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(w(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let a=t.target.children.item(n);if(a){if(h in a)return!1;w(t.target,a),e.add(a)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let a=t.removedNodes[n];if(h in a)return!1;a instanceof Element&&(e.add(a),w(t.target,a),d.set(a,[t.previousSibling,t.nextSibling]))}}return e},new Set)}(e);t&&t.forEach(e=>(function(e){var t;let n=e.isConnected,a=o.has(e);n&&d.has(e)&&d.delete(e),s.has(e)&&(null===(t=s.get(e))||void 0===t||t.cancel()),a&&n?function(e){let t;let n=o.get(e),a=j(e);if(!E(e))return o.set(e,a);if(!n)return;let r=I(e);if("function"!=typeof r){let l=n.left-a.left,i=n.top-a.top,[o,d,s,c]=y(e,n,a),u={transform:`translate(${l}px, ${i}px)`},m={transform:"translate(0, 0)"};o!==d&&(u.width=`${o}px`,m.width=`${d}px`),s!==c&&(u.height=`${s}px`,m.height=`${c}px`),t=e.animate([u,m],{duration:r.duration,easing:r.easing})}else(t=new Animation(r(e,"remain",n,a))).play();s.set(e,t),o.set(e,a),t.addEventListener("finish",g.bind(null,e))}(e):a&&!n?function(e){var t;let n;if(!d.has(e)||!o.has(e))return;let[a,r]=d.get(e);function l(){var t;e.remove(),o.delete(e),d.delete(e),s.delete(e),null===(t=c.get(e))||void 0===t||t.disconnect()}if(Object.defineProperty(e,h,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):a&&a.parentNode?a.parentNode.appendChild(e):null===(t=k(e))||void 0===t||t.appendChild(e),!E(e))return l();let[i,u,m,p]=function(e){let t=o.get(e),[n,,a]=y(e,t,j(e)),r=e.parentElement;for(;r&&("static"===getComputedStyle(r).position||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);let l=getComputedStyle(r),i=o.get(r)||j(r),d=Math.round(t.top-i.top)-b(l.borderTopWidth),s=Math.round(t.left-i.left)-b(l.borderLeftWidth);return[d,s,n,a]}(e),f=I(e),x=o.get(e);Object.assign(e.style,{position:"absolute",top:`${i}px`,left:`${u}px`,width:`${m}px`,height:`${p}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!=typeof f?n=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:f.duration,easing:"ease-out"}):(n=new Animation(f(e,"remove",x))).play(),s.set(e,n),n.addEventListener("finish",l)}(e):function(e){let t;let n=j(e);o.set(e,n);let a=I(e);E(e)&&("function"!=typeof a?t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*a.duration,easing:"ease-in"}):(t=new Animation(a(e,"add",n))).play(),s.set(e,t),t.addEventListener("finish",g.bind(null,e)))}(e)})(e))}),(l=new ResizeObserver(e=>{e.forEach(e=>{e.target===a&&(clearTimeout(p.get(a)),p.set(a,setTimeout(()=>{i.forEach(e=>S(e,e=>N(()=>g(e))))},100))),o.has(e.target)&&g(e.target)})})).observe(a))}},function(e){e.O(0,[713,769,307,574,740,351,340,774,888,179],function(){return e(e.s=6763)}),_N_E=e.O()}]);