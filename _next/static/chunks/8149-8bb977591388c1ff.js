"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8149],{1201:function(e,t,n){n.d(t,{u:function(){return c},z:function(){return i}});var l=n(3342),r=n(8591),s=n.n(r),a=n(4209);function i(e){let{children:t,className:n,...r}=e;return(0,l.jsx)("button",{...r,className:s()(n),children:e.children})}function c(e){let{busy:t,disabled:n,className:r,defStyle:i="btn-primary",children:c,...o}=e;return(0,l.jsx)("button",{className:s()(r,{[i]:!n,"btn-disable":n}),...o,children:t?(0,l.jsx)(a.fCD,{className:"animate-spin"}):c})}},7266:function(e,t,n){n.d(t,{I:function(){return c},g:function(){return i}});var l=n(3342),r=n(8591),s=n.n(r),a=n(2138);function i(e){let{className:t,color:n,size:r="",...i}=e;return(0,l.jsx)("div",{...i,className:s()("text-black w-full h-full flex items-center justify-center",t),children:(0,l.jsx)(a.uur,{color:n,style:r?{fontSize:r}:{},className:"text-[3.125rem] animate-spin"})})}function c(){return(0,l.jsx)(i,{className:"fixed z-50 left-0 top-0 w-full !h-full bg-black/25"})}},7921:function(e,t,n){n.d(t,{t:function(){return c}});var l=n(3342),r=n(9685),s=n(8591),a=n.n(s),i=n(1882);function c(e){let t=(e,t)=>{let n=[];if(t){for(let l=e;l<t;l++)n.push(l);return n}for(let t=0;t<e;t++)n.push(t);return n},{total:n,pgSize:s,pgNum:c,onChange:o,className:m}=e,d=Math.ceil(n/s),x=(0,r.useMemo)(()=>d<=1?[]:d<=6?t(d).map(e=>({name:"".concat(e+1)})):c<=3?t(c+1).map(e=>({name:"".concat(e+1)})).concat([{name:"..."},{name:""+d}]):c>=d-2?[{name:"1"},{name:"..."}].concat(t(c-2,d).map(e=>({name:"".concat(e+1)}))):[{name:"1"},{name:"..."},{name:c-1+""},{name:c+""},{name:c+1+""},{name:"..."},{name:d+""}],[d,c]);return n<=s?null:(0,l.jsx)("div",{className:a()("flex justify-center text-[0.8125rem] text-center leading-8 font-semibold",m),children:(0,l.jsxs)("div",{className:"flex",children:[d>1&&(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("span",{onClick:()=>{1!==c&&o&&o(1,d)},className:"mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,l.jsx)(i.JHF,{})}),(0,l.jsx)("span",{onClick:()=>{o&&c>1&&o(c-1,d)},className:"mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,l.jsx)(i.YFh,{})})]}),x.map((e,t)=>(0,l.jsx)("div",{className:a()(e.name===""+c?"text-white bg-green-2":"bg-white",{omit:"..."===e.name},"mx-[0.185rem] flex items-center justify-center min-w-[32px] h-[32px] px-1.5 rounded-lg","..."!=e.name&&"border cursor-pointer"),onClick:()=>{o&&"..."!==e.name&&o(+e.name,d)},children:e.name},"key_page_".concat(t))),d>1&&(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("span",{onClick:()=>{o&&c<d&&o(c+1,d)},className:"mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,l.jsx)(i.Tfp,{})}),(0,l.jsx)("span",{onClick:()=>{d!==c&&o&&o(d)},className:" mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,l.jsx)(i.qhs,{})})]})]})})}},3956:function(e,t,n){n.d(t,{i:function(){return x}});var l=n(3342),r=n(8591),s=n.n(r),a=n(6786),i=n(1882),c=n(9685),o=n(7266),m=n(6852),d=n(1768);let x=e=>{let{columns:t,data:n,className:r,cellClassName:x,headerClassName:u,size:f="",maxHeight:p,loading:h=!1,hiddenHeader:j=!1,mouseHoverKey:v="",columnsHeight:N="",isSetBorder:g=!1,tableId:b,columnsClassName:w,onChangeColumn:y=e=>e}=e,[k,I]=(0,c.useState)(n||[]),[F,C]=(0,c.useState)({}),[O,_]=(0,c.useState)({}),E=(0,c.useRef)(null);(0,m.Z)(E,()=>{for(let e in F)F[e]&&(F[e].isFilterOpen=!1,C({...F}))}),(0,c.useEffect)(()=>{I(n)},[n]),(0,c.useEffect)(()=>{t.map(e=>{if(e.filterOptions){var t;F[e.dataIndex]={isFilterOpen:!1,filterValueIndex:(null===(t=F[e.dataIndex])||void 0===t?void 0:t.filterValueIndex)>-1?F[e.dataIndex].filterValueIndex:-1}}}),C(F)},[t]);let T=e=>{if(void 0===k[e].level&&(k[e].level=0),k[e].children.map(t=>{t.level=k[e].level+1}),k[e].open=!k[e].open,k[e].open)I(k.slice(0,e+1).concat(k[e].children).concat(k.slice(e+1)));else{let t=k[e].children.length;k[e].children.map(e=>{e.open&&(e.open=!1,t+=e.children.length)}),k.splice(e+1,t),I([...k])}},S=(e,t)=>{Object.assign(F,{[e.dataIndex]:{filterValueIndex:t,isFilterOpen:!1}}),e.onFilterChange&&e.onFilterChange(t>-1?e.filterOptions[t]:null),C(F)},V=e=>{F[e.dataIndex].isFilterOpen=!F[e.dataIndex].isFilterOpen,C({...F})};return(0,l.jsxs)("div",{className:s()("w-full",r,"small"===f&&"text-xs","big"===f&&"text-lg mo:text-[.9375rem] "),children:[(0,l.jsxs)("table",{border:1,cellSpacing:0,className:"w-full text-left ",id:b,children:[!j&&(0,l.jsx)("thead",{className:s()("bg-gray-14 ",{"border bg-[#E5E5E5]":g},r,"small"===f&&"text-sm"),style:u,children:(0,l.jsx)("tr",{className:"px-3",children:t&&t.map((e,n)=>{var r;return(0,l.jsxs)("th",{style:{width:e.width?e.width:"auto"},className:s()("px-3 relative break-keep",0===n&&" ".concat(!g&&"rounded-l"||""," overflow-hidden"),n===t.length-1&&"".concat(!g&&"rounded-r"||""," overflow-hidden"),d.NO[f]||"py-2"),children:[!!e.tip&&(0,l.jsx)(a.gL9,{"data-tooltip-id":"tooltip","data-tooltip-content":e.tip,className:"inline-block text-xl mt-[-0.15rem] mr-1"}),(0,l.jsx)("span",{children:e.title}),!!F[e.dataIndex]&&(0,l.jsxs)("div",{className:"inline-block",ref:E,children:[(0,l.jsx)(i.Ihx,{color:(null===(r=F[e.dataIndex])||void 0===r?void 0:r.filterValueIndex)>-1?"#29953A":"",onClick:()=>{V(e)},className:"inline-block text-xl mt-[-0.15rem] ml-1 cursor-pointer"}),F[e.dataIndex].isFilterOpen&&(0,l.jsx)("div",{className:"absolute left-0 font-normal top-10",children:(0,l.jsxs)("ul",{className:"bg-white w-[12.375rem] max-h-[14.875rem] overflow-auto text-sm rounded-lg py-3",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)"},children:[(0,l.jsx)("li",{className:s()("py-2.5 px-5 hover:bg-[#F3F3F3] cursor-pointer",-1===F[e.dataIndex].filterValueIndex&&"text-green-2"),onClick:()=>{S(e,-1)},children:"All"}),e.filterOptions.map((t,n)=>(0,l.jsx)("li",{onClick:()=>{S(e,n)},className:s()("py-1.5 hover:bg-[#F3F3F3] px-5 break-all cursor-pointer",F[e.dataIndex].filterValueIndex===n?"text-green-2":""),children:t.text},"productList".concat(n)))]})})]})]},"columns".concat(n))})})}),!h&&(0,l.jsx)("tbody",{style:{maxHeight:p},className:"w-full overflow-y-auto ",children:(k||[]).map((e,n)=>(0,l.jsx)("tr",{className:" column-level-".concat(e.level?e.level:0," ").concat(N," "),children:t.map((t,r)=>(0,l.jsx)("td",{className:s()(w,"px-3  ",{"bg-[#F3F3F3]":O[v]===e[v]&&v,border:g},d.NO[f]||"py-2",!!t.tip&&"pl-9",x&&x(t,r,n)),style:{width:t.width?t.width:"auto"},children:(0,l.jsxs)("div",{onMouseOver:()=>_(e),onClick:()=>"function"==typeof y?y(e):void 0,className:"flex items-center ",style:{marginLeft:(e.level&&0===r?e.level:0)*1.25+"rem"},children:[!!(null==e?void 0:e.children)&&(null==e?void 0:e.children.length)>0&&0===r&&(0,l.jsx)(i.Tfp,{onClick:()=>T(n),className:s()("mr-2 cursor-pointer text-gray-9",e.open&&"rotate-[90deg]")}),t.render?t.render(e[t.dataIndex],e):t.emptyText&&!e[t.dataIndex]?"-":e[t.dataIndex]]})},"data_column_".concat(r)))},"table_data_".concat(n)))})]}),h?(0,l.jsx)(o.g,{className:"pt-8"}):!(k&&k.length>0)&&(0,l.jsx)("div",{className:"flex justify-center w-full py-20",children:"无数据"})]})}},124:function(e,t,n){n.d(t,{m:function(){return h}});var l=n(3342),r=n(107),s=n(8996),a=n(1882),i=n(3958),c=n(8591),o=n.n(c),m=n(2577),d=n(3917),x=n(5390),u=n(1608),f=n(8881);function p(e){let{children:t,className:n,tits:s,showQuery:a,isManager:c,...p}=e,{push:h}=(0,r.useRouter)(),j=(0,f.fo)();return(0,i.dD)(),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:o()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0  h-[4.25rem] justify-between",n),...p,children:[(0,l.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:()=>h("/"),children:[(0,l.jsx)(m.Z,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,l.jsx)(d.Z,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,l.jsx)(x.R,{menus:j,children:(0,l.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,l.jsx)(u.otZ,{})})})]})})}function h(e){let{className:t,canBack:n,children:i,link:c,isNew:m,containerClassName:d,...x}=e,{push:u}=(0,r.useRouter)(),f=(0,s.R)();return(0,l.jsxs)("div",{className:"relative flex flex-col flex-1 w-full h-full min-h-fit bg-gray-16",children:[(0,l.jsx)(p,{showQuery:!0,style:{top:"".concat(f,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,l.jsxs)("div",{className:o()("w-full h-full mx-auto px-[60px] mo:px-5 flex flex-col flex-1",d,{" max-w-[90rem]":!m}),children:[n&&(0,l.jsxs)("div",{className:"flex items-center my-5 text-sm ".concat((null==c?void 0:c.pathName)?"cursor-default":"cursor-pointer"),onClick:()=>(null==c?void 0:c.pathName)?void 0:u("/carbon/service"),children:[!c&&(0,l.jsx)(a.YFh,{className:"text-lg"}),c&&"{}"!==JSON.stringify(c)?(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("span",{className:"text-[#000000] cursor-pointer font-bold  text-[14px]",onClick:()=>u(null==c?void 0:c.pathName),children:c.homeTitle}),(0,l.jsx)("div",{className:"mx-1 ",children:" / "}),(0,l.jsxs)("span",{className:"cu text-[#999999] font-normal text-[14px]",children:[" ",c.currentTitle]})]}):"返回"]}),(0,l.jsx)("div",{className:o()("flex flex-col ",t),children:i})]})]})}},8005:function(e,t,n){n.d(t,{Ux:function(){return s},iT:function(){return i},k3:function(){return a}});var l=n(5399),r=n.n(l);let s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss",n=r()(e),l=n.format(t);return l},a=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},i=(e,t)=>e.length>t?e:""}}]);