(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1704],{2906:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/model",function(){return t(7179)}])},9003:function(e,n,t){"use strict";t.d(n,{T$:function(){return d},T8:function(){return s}});var o=t(1527),a=t(4875),r=t.n(a),i=t(834),l=t(5283),c=t(7265);function s(e){let{className:n,children:t,...a}=e,c=(0,i.dD)();return(0,o.jsxs)("div",{className:"flex-1 flex flex-col min-h-fit w-full bg-gray-16 relative",children:[c?(0,o.jsxs)("div",{className:"absolute z-0 top-0 w-full h-[43rem] overflow-hidden bg-green-2 ",children:[(0,o.jsx)("img",{className:"object-cover w-full absolute right-0 bottom-0",src:"/home-bg-r.jpg"}),(0,o.jsx)("div",{className:"w-full h-full absolute ssm:top-[calc(21.5rem_-_75vw)]",style:{background:"linear-gradient(180deg, #29953A 48.84%, rgba(34, 122, 48, 0) 96.76%)"}})]}):(0,o.jsxs)("div",{className:"absolute z-0 top-0 w-full h-[48.75rem] bg-green-2 overflow-hidden",children:[(0,o.jsx)("img",{className:"object-cover h-full absolute right-0 top-0",src:"/home-bg-r.jpg"}),(0,o.jsx)("div",{className:"w-full h-full absolute lg:left-[calc(50%_-_45rem)]",style:{background:"linear-gradient(182.16deg, #000000 -4.66%, rgba(0, 0, 0, 0) 17.13%)",transform:"matrix(-1, 0, 0, 1, 0, 0)"}}),(0,o.jsx)("div",{className:"w-full h-full absolute lg:left-[calc(50%_-_45rem)]",style:{background:"linear-gradient(270deg, #29953A 38.28%, rgba(34, 122, 48, 0) 77.8%)",transform:"matrix(-1, 0, 0, 1, 0, 0)"}})]}),(0,o.jsx)(l.h4,{className:"h-[6.75rem] mo:h-[4.25rem] mo:sticky mo:bg-white mo:text-green-2 mo:p-4"}),(0,o.jsx)("div",{className:r()("z-[2] flex-1 relative w-full mx-auto mo:mx-0 mo:flex mo:flex-col",n),...a,children:t})]})}function d(e){let{className:n,tits:t,isManager:a,children:s,...d}=e,u=(0,i.dD)(),f=(0,c.R)();return(0,o.jsxs)("div",{className:"flex-1 flex flex-col min-h-fit w-full relative",children:[u?(0,o.jsx)(l.DJ,{}):(0,o.jsx)(l.h4,{tits:t,isManager:a,style:{top:"".concat(f,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2"}),(0,o.jsx)("div",{className:r()("z-[2] flex-1 relative w-full py-6 px-[3.125rem] mx-auto mo:px-5",n),...d,children:s})]})}},5858:function(e,n,t){"use strict";t.d(n,{I:function(){return c},g:function(){return l}});var o=t(1527),a=t(4875),r=t.n(a),i=t(1671);function l(e){let{className:n,color:t,size:a="",...l}=e;return(0,o.jsx)("div",{...l,className:r()("text-black w-full h-full flex items-center justify-center",n),children:(0,o.jsx)(i.uur,{color:t,style:{fontSize:a},className:"text-[3.125rem] animate-spin"})})}function c(){return(0,o.jsx)(l,{className:"fixed z-50 left-0 top-0 w-full !h-full bg-black/25"})}},5913:function(e,n,t){"use strict";t.d(n,{k:function(){return r}});var o=t(959),a=t(6171);function r(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=(0,o.useRef)(!0),r=(0,o.useRef)(0),[,i]=(0,o.useState)(1),l=(0,o.useCallback)(e=>{t.current=e,i(e=>1-e)},[]),[c,s]=(0,a.Z)(e,n),d=()=>{t.current||l(!0);let e=r.current+1>1e5?0:r.current+1;r.current=e,s().finally(()=>r.current==e&&l(!1))};return(0,o.useEffect)(()=>{d()},n),(0,o.useMemo)(()=>({...c,value:t.current||c.error?void 0:c.value,loading:t.current,req:d}),[c,t.current])}},6699:function(e,n,t){"use strict";t.d(n,{AC:function(){return I},BI:function(){return h},Ii:function(){return g},Iv:function(){return P},LW:function(){return S},Mt:function(){return R},Pf:function(){return s},Ps:function(){return w},RN:function(){return x},RS:function(){return m},SO:function(){return j},Vd:function(){return v},av:function(){return O},eO:function(){return p},ep:function(){return y},fF:function(){return T},jw:function(){return f},pF:function(){return C},vz:function(){return _},x4:function(){return d}});var o=t(834),a=t(8422),r=t(58),i=t(9701);function l(e){return"".concat(r.Sg).concat(e)}function c(e){var n;let t=e.data;if(t){if(t.code&&1e5!==t.code)throw t.message;return null===(n=e.data)||void 0===n?void 0:n.data}}function s(e,n){return()=>n.some(e=>!e)?(0,i._v)():e()}async function d(e,n){let t=await a.default.post(l("/api/base/login"),{name:e,password:n});return c(t)}function u(){let e=(0,o.is)();return e?{headers:{Authorization:"Bearer ".concat(e.loginToken)}}:{}}async function f(){let e=await a.default.get(l("/api/npi/product/list"),u());return c(e)}async function m(e){let n=await a.default.get(l("/api/npi/product/".concat(e,"/pcf_accountable")),u());return c(n)}async function p(e){let n=await a.default.get(l("/api/npi/product/".concat(e,"/bom/list")),u());return c(n)}async function x(e){let n=await a.default.get(l("/api/npi/product_bom/".concat(e,"/activity_types")),u());return c(n)}async function v(e){let n=await a.default.get(l("/api/npi/product_process/query"),{...u(),params:{product_id:e,include_activity_types:!0}});return c(n)}async function y(e){let n=await a.default.get(l("/api/npi/product/serial_number/".concat(e,"/info")),u());return c(n)}async function g(e){let n=await a.default.get(l("/api/inventory/product/".concat(e,"/inventory")),u());return c(n)}async function h(e){let{pgNum:n,productId:t}=e,o=await a.default.get(l("/api/product-lca/model/query?pageNum=".concat(n,"&pageSize=10&productId=").concat(t>-1?t:"")),u());return c(o)}async function j(e){let{pgNum:n}=e,t=await a.default.get(l("/api/product-lca/result/query?pageNum=".concat(n,"&pageSize=10")),u());return c(t)}async function T(e){let n=await a.default.get(l("/api/product-lca/result/detail/".concat(e)),u());return c(n)}async function C(e,n){let t=await a.default.post(l("/api/product-lca/model/state/".concat(e,"/update/").concat(n)),null,u());return c(t)}async function O(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=u();return t.headers&&(t.headers["Content-Type"]="multipart/form-data"),await a.default.post(l("/api/product-lca/model/upload"),e,{...t,...n})}async function w(){let e=await a.default.get(l("/api/product/category/query"),u());return c(e)}async function R(e){let{name:n,categoryId:t,orgId:o,description:r}=e,i=await a.default.post(l("/api/product/upsert"),{name:n,categoryId:t,orgId:o,partNumber:"1",imageUrl:"",description:r},u());return c(i)}async function _(){let e=await a.default.get(l("/api/product/list?pageSize=500"),u());return c(e)}async function E(e){let n=await a.default.get(l("/api/product-lca/model/".concat(e,"/descriptors")),u());return JSON.parse(c(n))}async function N(e){let n=await a.default.get(l("/api/product-lca/model/".concat(e,"/categories")),u());return JSON.parse(c(n))}async function P(e){let n=await N(e),t=await E(e);return[n,t]}async function I(e,n,t){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=await a.default.get(l("/api/product-lca/model/".concat(e,"/item/").concat(n,"/").concat(t,"/info?fromMethod=").concat(o)),u());return JSON.parse(c(r))}async function S(e){let n=u(),t=await a.default.get(l("/api/product-lca/result/".concat(e,"/export")),Object.assign(n,{responseType:"blob"}));return t}},7179:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return eC}});var o,a,r=t(1527),i=t(5283),l=t(9003),c=t(7265),s=t(5858);(o=a||(a={})).PRODUCT_SYSTEM="PRODUCT_SYSTEM",o.PROCESS="PROCESS",o.FLOW="FLOW",o.EPD="EPD",o.IMPACT_METHOD="IMPACT_METHOD",o.IMPACT_CATEGORY="IMPACT_CATEGORY",o.SOCIAL_INDICATOR="SOCIAL_INDICATOR",o.PARAMETER="PARAMETER",o.DQ_SYSTEM="DQ_SYSTEM",o.FLOW_PROPERTY="FLOW_PROPERTY",o.UNIT_GROUP="UNIT_GROUP",o.CURRENCY="CURRENCY",o.ACTOR="ACTOR",o.SOURCE="SOURCE",o.LOCATION="LOCATION";var d=t(4875),u=t.n(d),f=t(959),m=t(1671),p=t(8370),x=t(9550);let v=(0,f.createContext)(void 0);function y(){return(0,f.useContext)(v)}function g(e){let[n,t]=(0,f.useState)([]),[o,a]=(0,f.useState)(),i=(0,f.useCallback)(e=>{n.find(n=>n===e)||(n.length>=20?t([e].concat(n.slice(0,19))):t([e,...n])),a(e)},[n,o]),l=(0,f.useCallback)(e=>{let r=n.filter(n=>n!==e);t(r),r.find(e=>e===o)||a(r[0])},[n,o]);return(0,r.jsx)(v.Provider,{value:{navs:n,add:i,del:l,active:o,setActive:a},children:e.children})}let h=(0,f.createContext)({descriptores:{}});var j=t(5591),T=t(1875),C=t(7661),O=t(3967),w=t(5452),R=t(2113);let _={Icon:C.G3d,color:"#9C27B0",needFixColor:!0},E={[a.PRODUCT_SYSTEM]:{Icon:j.TdV,color:"#1565C0"},[a.FLOW]:{Icon:T.nbt,color:"#0084FF"},[a.FLOW_PROPERTY]:{Icon:O.KOr,color:"#CE6D2F"},[a.UNIT_GROUP]:{Icon:w.YvB,color:"#1D4F64"},[a.ACTOR]:{Icon:j.Xws,color:"#556164"},[a.SOURCE]:{Icon:j.uYZ,color:"#556164"},[a.LOCATION]:{Icon:j.Nh4,color:"#556164"},[a.DQ_SYSTEM]:{Icon:O.USG,color:"#3A8772"},[a.IMPACT_METHOD]:{Icon:O.MnU,color:"#69B13E"},[a.IMPACT_CATEGORY]:{Icon:O.eG4,color:"#69B13E"},["folder-".concat(a.PRODUCT_SYSTEM)]:{Icon:j.$nz,color:"#1565C0"},["folder-".concat(a.PROCESS)]:{Icon:j.$nz,color:"#9C27B0"},["folder-".concat(a.FLOW)]:{Icon:j.$nz,color:"#CE6D2F"},["folder-".concat(a.FLOW_PROPERTY)]:{Icon:j.$nz,color:"#CE6D2F"},["folder-".concat(a.EPD)]:{Icon:j.$nz,color:"#21C393"},["folder-".concat(a.IMPACT_METHOD)]:{Icon:j.$nz,color:"#69B13E"},["folder-".concat(a.IMPACT_CATEGORY)]:{Icon:j.$nz,color:"#69B13E"},["folder-".concat(a.SOCIAL_INDICATOR)]:{Icon:j.$nz,color:"#EA9119"},["folder-".concat(a.DQ_SYSTEM)]:{Icon:j.$nz,color:"#37997D"},["folder-".concat(a.PARAMETER)]:{Icon:j.$nz,color:"#C60116"},["folder-".concat(a.UNIT_GROUP)]:{Icon:j.$nz,color:"#2F363A"},["folder-".concat(a.CURRENCY)]:{Icon:j.$nz,color:"#22614E"},["folder-".concat(a.ACTOR)]:{Icon:j.$nz,color:"#3388AF"},["folder-".concat(a.SOURCE)]:{Icon:j.$nz,color:"#577889"},["folder-".concat(a.LOCATION)]:{Icon:j.$nz,color:"#173855"},"folder-Indicators and parameters":{Icon:j.Mp$,color:"#556164"},"folder-Background data":{Icon:w.owA,color:"#999999"},PRODUCT_FLOW:{Icon:T.nbt,color:"#0084FF"},ELEMENTARY_FLOW:{Icon:R.jRM,color:"#2F5F39"},WASTE_FLOW:{Icon:R.SW4,color:"#9C462E"}};function N(e){let{Icon:n,color:t,needFixColor:o}=E[e.type]||_;return(0,r.jsx)(n,{color:t,className:u()(e.className,{fixGrColor:o})})}var P=t(6699),I=t(9701),S=t(8621),b=t.n(S);let A=b()(()=>t.e(9287).then(t.t.bind(t,9287,23)),{loadableGenerated:{webpack:()=>[9287]},ssr:!1});function F(e){return e.data?(0,r.jsx)(A,{src:e.data,collapsed:2}):null}function D(e){let{map:n,data:t}=e,o=Object.keys(n),[a,i]=(0,f.useState)(o[0]),l=n[a].json,c=l?null:n[a];return(0,r.jsxs)("div",{className:"flex-1 flex flex-col h-0",children:[(0,r.jsx)("div",{className:"h-[calc(100%-34px)] flex-1 flex flex-col overflow-auto p-5 gap-5",children:c?(0,r.jsx)(c,{data:t}):(0,r.jsx)(F,{data:l})}),(0,r.jsxs)("div",{className:"flex flex-shrink-0 overflow-x-auto",children:[o.map((e,n)=>(0,r.jsx)("div",{onClick:()=>i(e),className:u()("leading-[34px] text-sm px-[10px] border border-solid border-gray-14 cursor-pointer whitespace-nowrap",{"text-green-2 border-transparent":e===a,"text-black":e!==a}),children:e},"type_tab_".concat(n))),(0,r.jsx)("div",{className:"flex-1 border border-solid border-gray-14"})]})]})}var M=t(9592);function U(e){let{infos:n,title:t}=e,[o,a]=(0,M.Z)(!0);return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"flex items-center  font-bold cursor-pointer text-lg text-black",onClick:()=>a(),children:[t,o?(0,r.jsx)(j.IkZ,{className:"text-2xl "}):(0,r.jsx)(j.qL$,{className:"text-2xl"})]}),o&&(0,r.jsx)("div",{className:"mt-3 grid grid-cols-[auto_1fr] gap-x-5 gap-y-[10px] text-sm text-black",children:n.map((e,n)=>{let t=!e.length;if(t)return(0,r.jsx)("div",{className:"col-span-2",children:e},"infomation_".concat(n));let[o,a]=e;return(0,r.jsxs)(f.Fragment,{children:[(0,r.jsx)("div",{className:"font-bold",children:o}),(0,r.jsx)("div",{className:"whitespace-pre-wrap",children:a||"none"})]},"infomation_".concat(n))})})]})}function L(){return(0,r.jsx)("div",{className:"w-full h-[6px] flex-shrink-0 bg-gray-16"})}function k(e){let{type:n,name:t,def:o=""}=e;return t?n?(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[(0,r.jsx)(N,{type:n}),t]}):(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsx)(r.Fragment,{children:o})}let G={[a.PRODUCT_SYSTEM]:"Product systems",[a.PROCESS]:"Processes",[a.FLOW]:"Flows",[a.EPD]:"EPDs",[a.IMPACT_METHOD]:"Impact assessment methods",[a.IMPACT_CATEGORY]:"Impact categories",[a.SOCIAL_INDICATOR]:"Social indicators",[a.PARAMETER]:"Global parameters",[a.DQ_SYSTEM]:"Data quality systems",[a.FLOW_PROPERTY]:"Flow properties",[a.UNIT_GROUP]:"Unit groups",[a.CURRENCY]:"Currencies",[a.ACTOR]:"Actors",[a.SOURCE]:"Sources",[a.LOCATION]:"Locations"};function Y(e){if(!e)return"none";let{parameter1:n,parameter2:t,parameter3:o}=e;switch(e.distributionType){case"LOG_NORMAL":return"lognormal: gmean=".concat(n," gsigma=").concat(t);case"NORMAL":return"normal: mean=".concat(n," sigma=").concat(t);case"UNIFORM":return"uniform: min=".concat(n," max=").concat(t);case"TRIANGLE":return"triangular: min=".concat(n," mode=").concat(t," max=").concat(o);default:return"none"}}function W(e){if(!e)return"";let n=(e,t)=>{if(!t||!t.name)return e;let o=e?t.name+"/"+e:t.name;return t.category?n(o,t.category):o};return n("",e)}function z(e){var n,t,o,i,l,c,s,d,u;let{data:f}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U,{title:"General information",infos:[["Name",f.name],["Category",(0,r.jsx)(k,{type:"folder-".concat(a.PROCESS),name:W(f.category),def:"none"},"info_2")],["Description",f.description||""],["Tags",f.tags||""],["Infrastructure process",f.infrastructureProcess?"true":"false"]]}),(0,r.jsx)(L,{}),(0,r.jsx)(U,{title:"Time",infos:[["Start date",(0,I.pv)(null===(n=f.documentation)||void 0===n?void 0:n.validFrom)],["End date",(0,I.pv)(null===(t=f.documentation)||void 0===t?void 0:t.validUntil)],["Description",(null===(o=f.documentation)||void 0===o?void 0:o.time)||""]]}),(0,r.jsx)(L,{}),(0,r.jsx)(U,{title:"Geography",infos:[["Location",(null===(i=f.location)||void 0===i?void 0:i.name)||"none"],["Description",(null===(l=f.documentation)||void 0===l?void 0:l.geography)||""]]}),(0,r.jsx)(L,{}),(0,r.jsx)(U,{title:"Technology",infos:[["Description",(null===(c=f.documentation)||void 0===c?void 0:c.technology)||""]]}),(0,r.jsx)(L,{}),(0,r.jsx)(U,{title:"Data quality",infos:[["Process schema",(null===(s=f.location)||void 0===s?void 0:s.name)||"none"],["Data quality entry",f.dqEntry||"(not specified)"],["Flow schema",(null===(d=f.exchangeDqSystem)||void 0===d?void 0:d.name)||"none"],["Social schema",(null===(u=f.socialDqSystem)||void 0===u?void 0:u.name)||"none"]]})]})}var B=t(2699),q=t.n(B);function $(e){let{head:n,className:t,infos:o}=e;return(0,r.jsxs)("div",{style:{gridTemplateColumns:"repeat(".concat(n.length,", auto)")},className:u()("grid text-sm text-black overflow-x-auto",t),children:[n.map((e,n)=>(0,r.jsx)("div",{className:"px-3 py-2 font-bold text-sm whitespace-nowrap",children:e},"head_"+n)),o.map((e,n)=>(0,r.jsx)(f.Fragment,{children:e.map((t,o)=>(0,r.jsx)("div",{className:u()("text-xs leading-normal px-3 py-[1px] whitespace-nowrap",{"bg-gray-16":n%2==0,"rounded-l-[4px]":0===o,"rounded-r-[4px]":o===e.length-1}),children:t},"body_col_"+o))},"body_row_"+n))]})}function H(e){let{infos:n,title:t,head:o,className:a}=e,[i,l]=(0,M.Z)(!0);return(0,r.jsxs)("div",{className:a,children:[(0,r.jsxs)("div",{className:"flex items-center font-bold  cursor-pointer text-lg text-black",onClick:()=>l(),children:[t,i?(0,r.jsx)(j.IkZ,{className:"text-2xl "}):(0,r.jsx)(j.qL$,{className:"text-2xl"})]}),i&&(0,r.jsx)($,{head:o,infos:n,className:"mt-3"})]})}let Z=["Flow","Category","Amount","Unit","Costs/Revenuse","Uncertainty","Avoided waste","Provider","Data quality entry","Location","Description"];function Q(e){let{data:n}=e,{descriptores:t}=(0,f.useContext)(h),[o,i]=(0,f.useMemo)(()=>{let e=[],o=[],i=q().chain(t[a.PROCESS]).values().flatten().keyBy("id").value()||{};return n.exchanges.forEach((n,t)=>{var l,c,s,d;let u=i[n.defaultProviderId];(n.isInput?e:o).push([(0,r.jsx)(k,{type:(null===(l=n.flow)||void 0===l?void 0:l.flowType)||a.FLOW,name:n.flow.name},"exchanges_".concat(t,"_1")),W(null===(c=n.flow)||void 0===c?void 0:c.category),n.amount,(0,r.jsx)(k,{type:a.UNIT_GROUP,name:null===(s=n.unit)||void 0===s?void 0:s.name},"exchanges_".concat(t,"_2")),"",Y(n.uncertainty),"",(0,r.jsx)(k,{type:a.PROCESS,name:null==u?void 0:u.name},"exchanges_".concat(t,"_3")),n.dqEntry||"",(null===(d=n.location)||void 0===d?void 0:d.name)||"",n.description||""])}),[e,o]},[n,t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H,{title:"Inputs",head:Z,infos:o}),(0,r.jsx)(L,{}),(0,r.jsx)(H,{title:"Outputs",head:Z,infos:i})]})}function V(e){var n,t,o,i,l,c,s,d,u,f,m,p;let{data:x}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(U,{title:"Administrative infomation",infos:[["Intended application",(null===(n=x.documentation)||void 0===n?void 0:n.intendedApplication)||""],["Data set owner",(0,r.jsx)(k,{def:"none",type:a.ACTOR,name:null===(o=x.documentation)||void 0===o?void 0:null===(t=o.dataSetOwner)||void 0===t?void 0:t.name},1)],["Data generator",(0,r.jsx)(k,{def:"none",type:a.ACTOR,name:null===(l=x.documentation)||void 0===l?void 0:null===(i=l.dataGenerator)||void 0===i?void 0:i.name},2)],["Data documentor",(0,r.jsx)(k,{def:"none",type:a.ACTOR,name:null===(s=x.documentation)||void 0===s?void 0:null===(c=s.dataDocumentor)||void 0===c?void 0:c.name},3)],["Publication",(0,r.jsx)(k,{def:"none",type:a.SOURCE,name:null===(u=x.documentation)||void 0===u?void 0:null===(d=u.publication)||void 0===d?void 0:d.name},4)||""],["Access and use restrictions",(null===(f=x.documentation)||void 0===f?void 0:f.restrictions)||""],["Creation date",(0,I.pv)(null===(m=x.documentation)||void 0===m?void 0:m.creationDate)],["Copyright ",(null===(p=x.documentation)||void 0===p?void 0:p.copyright)?"true":"false"]]})})}function J(e){var n,t,o,i,l,c,s,d,u,f,m;let{data:p}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U,{title:"Modeling and validation",infos:[["Process type",(0,r.jsx)(k,{type:a.PROCESS,name:p.processType},1)],["LCI method",(null===(n=p.documentation)||void 0===n?void 0:n.inventoryMethod)||""],["Modeling constants",(null===(t=p.documentation)||void 0===t?void 0:t.modelingConstants)||""],["Data completeness",(null===(o=p.documentation)||void 0===o?void 0:o.completeness)||""],["Data selection",(null===(i=p.documentation)||void 0===i?void 0:i.dataSelection)||""],["Data treatment",(null===(l=p.documentation)||void 0===l?void 0:l.dataTreatment)||""]]}),(0,r.jsx)(L,{}),(0,r.jsx)(U,{title:"Data source infomation",infos:[["Simpling procedure",(null===(c=p.documentation)||void 0===c?void 0:c.sampling)||""],["Data collection period",(null===(s=p.documentation)||void 0===s?void 0:s.dataCollectionPeriod)||""]]}),(0,r.jsx)(L,{}),(0,r.jsx)(U,{title:"Process evaluation and validation",infos:[["Reviewer",(null===(u=p.documentation)||void 0===u?void 0:null===(d=u.reviewer)||void 0===d?void 0:d.name)||""],["Data set other evaluation",(null===(f=p.documentation)||void 0===f?void 0:f.reviewDetails)||""]]}),(0,r.jsx)(L,{}),(0,r.jsx)(U,{title:"Sources",infos:[(0,r.jsx)("div",{className:"flex flex-col px-3",children:((null===(m=p.documentation)||void 0===m?void 0:m.sources)||[]).map((e,n)=>(0,r.jsx)(k,{type:a.SOURCE,name:e.name},"source_".concat(n)))},1)]})]})}function X(e){let{data:n}=e,[t,o]=(0,f.useMemo)(()=>{let e=q().chain(n.parameters||[]).sortBy("name").groupBy(e=>e.isInputParameter?"input":"depend").value(),t=(e.input||[]).map(e=>[e.name||"",e.value||"",Y(e.uncertainty),e.description||""]),o=(e.depend||[]).map(e=>[e.name||"",e.formula||"",e.value||"",e.description||""]);return[t,o]},[n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H,{title:"Input parameters",head:["Name","Value","Uncertainty","Description"],infos:t}),(0,r.jsx)(L,{}),(0,r.jsx)(H,{title:"Dependent parameters",head:["Name","Formula","Value","Description"],infos:o})]})}function K(e){let{data:n}=e,[t,o]=(0,f.useMemo)(()=>{let e=q().groupBy(n.exchanges||[],e=>!function(e){if(!e||e.isAvoided||!e.flow)return!1;let n=e.flow.flowType;return!!n&&"ELEMENTARY_FLOW"!==n&&"PRODUCT_FLOW"==n!=e.isInput}(e)?"false":"true"),t=e.true.length<2;if(t)return[[],[]];let o=e.true.map(e=>{var n,t;return[(0,r.jsx)(k,{type:(null===(n=e.flow)||void 0===n?void 0:n.flowType)||a.FLOW,name:null===(t=e.flow)||void 0===t?void 0:t.name},1),"",""]}),i=e.false.map(e=>{var n,t,o,i;return[(0,r.jsx)(k,{type:(null===(n=e.flow)||void 0===n?void 0:n.flowType)||a.FLOW,name:null===(t=e.flow)||void 0===t?void 0:t.name},1),e.isInput?"Input":"Output",W(null===(o=e.flow)||void 0===o?void 0:o.category),e.amount+""+(null===(i=e.unit)||void 0===i?void 0:i.name),"",""]});return[o,i]},[n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex gap-6 text-sm",children:[(0,r.jsx)("div",{className:"font-bold",children:"Default method"}),(0,r.jsx)("div",{children:"None"})]}),(0,r.jsx)(H,{title:"Pyhsical & economic allocation",head:["Product","Physical","Economic"],infos:t}),(0,r.jsx)(L,{}),(0,r.jsx)(H,{title:"Causal allocation",head:["Flow","Direction","Category","Amount","Overburden(deposited)","transport in t*km"],infos:o})]})}function ee(e){var n,t,o,i;let{data:l}=e,c=null===(n=l.referenceExchange)||void 0===n?void 0:n.flow;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U,{title:"General information",infos:[["Name",l.name],["Category",(0,r.jsx)(k,{type:"folder-".concat(a.PRODUCT_SYSTEM),name:W(l.category),def:"none"},"info_2")],["Description",l.description],["Tags",l.tags||""]]}),(0,r.jsx)(L,{}),(0,r.jsx)(U,{title:"Reference",infos:[["Process",(0,r.jsx)(k,{type:a.PROCESS,name:null===(t=l.referenceProcess)||void 0===t?void 0:t.name,def:"none"},"ref_process")],["Product",(0,r.jsx)(k,{type:(null==c?void 0:c.flowType)==="PRODUCT_FLOW"?a.PRODUCT_SYSTEM:"",name:null==c?void 0:c.name,def:"none"},"ref_product")],["Flow property",(0,r.jsx)(k,{type:a.FLOW_PROPERTY,name:null==c?void 0:null===(o=c.referenceFlowProperty)||void 0===o?void 0:o.name,def:"none"},"ref_flow_pro")],["Unit",(0,r.jsx)(k,{type:a.UNIT_GROUP,name:null==c?void 0:null===(i=c.referenceUnit)||void 0===i?void 0:i.name,def:"none"},"ref_unit")],["Target amount",l.targetAmount+""]]})]})}function en(e){let{data:n}=e,{descriptores:t}=(0,f.useContext)(h),o=(0,f.useMemo)(()=>{var e;let o=null===(e=n.parameterSets)||void 0===e?void 0:e.find(e=>e.isBaseline);o||(o={name:"Baseline",description:"",parameters:[]});let a=q().sortBy((n.parameterSets||[]).filter(e=>e!==o),["isBaseline","name"]),r=(e,n)=>q().chain(t[e]).values().flatten().find(e=>e.id===n).value;return[o].concat(a).map(e=>({name:e.name,description:e.description,head:["Context","Parameter","Amount","Uncertainty","Description"],infos:(e.parameters||[]).map(n=>{var t;return[(null===(t=r(n.contextType,n.contextId))||void 0===t?void 0:t.name)||"",n.name||"",n.value||"",Y(e.uncertainty),n.description||""]})}))},[n]);return(0,r.jsx)(r.Fragment,{children:o.map((e,n)=>(0,r.jsxs)(f.Fragment,{children:[n>0&&(0,r.jsx)(L,{}),(0,r.jsx)(U,{title:e.name,infos:[["Name",e.name],["Description",e.description],(0,r.jsx)(H,{className:"ml-5",title:"Parameters",head:e.head,infos:e.infos},1)]})]},"parameter_".concat(n)))})}function et(e){var n,t;let{data:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U,{title:"General information",infos:[["Name",o.name],["Category",(0,r.jsx)(k,{type:"folder-".concat(a.FLOW),name:W(o.category),def:"none"},"info_2")],["Description",o.description||""],["Tags",o.tags||""],["Flow type",(0,r.jsx)(k,{type:o.flowType,name:(t=o.flowType)?"PRODUCT_FLOW"===t?"Product":"ELEMENTARY_FLOW"===t?"Elementary flow":"Waste":""},1)],["Infrastructure flow",o.infrastructureFlow?"true":"false"]]}),(0,r.jsx)(L,{}),(0,r.jsx)(U,{title:"Additional information",infos:[["CAS Number",o.casNumber||"none"],["Formula",o.formula||"none"],["Synonyms",o.synonyms||"none"],["Location",(null===(n=o.location)||void 0===n?void 0:n.name)||"none"]]})]})}function eo(e){let{data:n}=e,t=(0,f.useMemo)(()=>{let e=e=>{var t,o,a,r;let i=n.referenceFactor,l=null==i?void 0:null===(o=i.flowProperty)||void 0===o?void 0:null===(t=o.unitGroup)||void 0===t?void 0:t.referenceUnit,c=null==e?void 0:null===(r=e.flowProperty)||void 0===r?void 0:null===(a=r.unitGroup)||void 0===a?void 0:a.referenceUnit;return l&&c?"1.0 ".concat(l.name," = ").concat(e.conversionFactor," ").concat(c.name):""};return n.flowPropertyFactors.map(t=>{var o,i,l,c;return[(0,r.jsx)(k,{type:a.FLOW_PROPERTY,name:(null===(o=t.flowProperty)||void 0===o?void 0:o.name)||""},1),t.conversionFactor+"",(0,r.jsx)(k,{type:a.UNIT_GROUP,name:(null===(c=t.flowProperty)||void 0===c?void 0:null===(l=c.unitGroup)||void 0===l?void 0:null===(i=l.referenceUnit)||void 0===i?void 0:i.name)||""},2),e(t),n.referenceFactor===t?"true":"false"]})},[n]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(H,{title:"Flow properties",head:["Name","Conversion factor","Reference unit","Formula","Is reference"],infos:t},1)})}function ea(e){var n;let{data:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(U,{title:"General information",infos:[["Name",t.name],["Category",(0,r.jsx)(k,{type:"folder-".concat(a.FLOW_PROPERTY),name:W(t.category),def:"none"},"info_2")],["Description",t.description||""],["Tags",t.tags||""],["Unit group",(0,r.jsx)(k,{type:a.UNIT_GROUP,name:null===(n=t.unitGroup)||void 0===n?void 0:n.name},1)],["Flow property type",t.flowPropertyType]]})})}function er(e){var n;let{data:t}=e;return(0,f.useMemo)(()=>{},[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U,{title:"General information",infos:[["Name",t.name],["Category",(0,r.jsx)(k,{type:"folder-".concat(a.IMPACT_METHOD),name:W(t.category),def:"none"},"info_2")],["Description",t.description||""],["Tags",t.tags||""],["Source",(0,r.jsx)(k,{type:a.SOURCE,name:null===(n=t.source)||void 0===n?void 0:n.name,def:"none"},1)],["Code",t.code||""]]}),(0,r.jsx)(L,{}),(0,r.jsx)(H,{title:"Impact categories",head:["Name","Description","Reference unit"],infos:(t.impactCategories||[]).map(e=>[(0,r.jsx)(k,{type:a.IMPACT_CATEGORY,name:e.name},1),e.description||"",e.referenceUnit])})]})}function ei(e){var n;let{data:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(U,{title:"General information",infos:[["Name",t.name],["Category",(0,r.jsx)(k,{type:"folder-".concat(a.IMPACT_CATEGORY),name:W(t.category),def:"none"},"info_2")],["Description",t.description||""],["Tags",t.tags||""],["Source",(0,r.jsx)(k,{type:a.SOURCE,name:null===(n=t.source)||void 0===n?void 0:n.name,def:"none"},1)],["Code",t.code||""],["Reference unit",t.referenceUnit||""],["Impact direction",t.direction||"Unspecified"]]})})}var el=t(1255),ec=t.n(el);function es(e){let{data:n}=e,t=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,[t,o]=(0,f.useState)([]);return(0,f.useEffect)(()=>{let t=!1;o([]);let a=ec()(e,n),r=()=>{var e;e=e=>{e&&o(e=>{let o=Math.floor(e.length/n);return(console.info("index:",o),o>=a.length)?(t=!0,e):e.concat(a[o])}),t||r()},window.requestIdleCallback?window.requestIdleCallback(n=>e(n.timeRemaining()>1)):window.requestAnimationFrame?window.requestAnimationFrame(()=>e(!0)):window.setTimeout(()=>e(!0),2*n)};return r(),()=>{t=!0}},[e,n]),t}(n.impactFactors||[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(H,{title:"Characterization factors",head:["Flow","Category","Factor","Unit","Uncertainty","Location"],infos:t.map(e=>{var t,o,i,l,c;return[(0,r.jsx)(k,{name:null===(t=e.flow)||void 0===t?void 0:t.name,type:(null===(o=e.flow)||void 0===o?void 0:o.flowType)||a.FLOW},1),W(null===(i=e.flow)||void 0===i?void 0:i.category),e.formula||e.value||"",e.unit?"".concat(n.referenceUnit||"1","/").concat(e.unit.name):"",Y(e.uncertainty),(null===(c=e.flow)||void 0===c?void 0:null===(l=c.location)||void 0===l?void 0:l.name)||""]})})})}let ed={[a.PRODUCT_SYSTEM]:function(e){let{data:n}=e;return(0,r.jsx)(D,{map:{"General information":ee,Parameters:en},data:n})},[a.PROCESS]:function(e){let{data:n,json:t}=e;return(0,r.jsx)(D,{map:{"General information":z,"Inputs/Outputs":Q,"Administrative information":V,"Modeling and validation":J,Parameters:X,Allocation:K},data:n})},[a.FLOW]:function(e){let{data:n,json:t}=e;return(0,r.jsx)(D,{map:{"General information":et,"Flow properties":eo},data:n})},[a.FLOW_PROPERTY]:function(e){let{data:n}=e;return(0,r.jsx)(D,{map:{"General infomation":ea},data:n})},[a.IMPACT_METHOD]:function(e){let{data:n}=e;return(0,r.jsx)(D,{map:{"General infomation":er},data:n})},[a.IMPACT_CATEGORY]:function(e){let{data:n}=e;return(0,r.jsx)(D,{map:{"General infomation":ei,"Characterization factors":es},data:n})}},eu={};function ef(e){return(0,r.jsx)("div",{className:"flex-1 p-5 overflow-auto",children:(0,r.jsx)(F,{data:e.json})})}function em(e){if(!e)return;let n=e.data;return"".concat(e.modelType,"_").concat(n.id)}function ep(e){let{id:n}=e,{active:t}=y(),o=(0,f.useRef)(!0),[[a,i],l]=(0,f.useState)([void 0,void 0]),[c,d]=(0,f.useState)(!1),u=function(){let e=(0,f.useRef)(!0);return(0,f.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}();(0,f.useEffect)(()=>{if(o.current){for(let e in eu)delete eu[e];o.current=!1}if(!t||!t.data)return()=>{};let e=em(t);if(d(!0),!eu[e]){var a;eu[e]=(0,P.AC)(n,t.modelType,t.data.id,null===(a=t.data)||void 0===a?void 0:a.fromMethod).then(n=>{let t=(0,I.tV)(n);return t._key=e,[t,n]})}eu[e].then(e=>{console.info("value:",e),u.current&&l(e)}).catch(()=>{delete eu[e]}).finally(()=>{console.info("first:",u.current),u.current&&d(!1)})},[t,n]);let m=ed[(null==t?void 0:t.modelType)||""]||ef;return t?c?(0,r.jsx)(s.g,{}):a&&em(t)===a._key?(0,r.jsx)(m,{data:ed[(null==t?void 0:t.modelType)||""]?a:i,json:i}):null:null}let ex=(e,n)=>({data:{id:e.id.toString(),isLeaf:0===e.children.length,isOpenByDefault:e.modelType==a.PRODUCT_SYSTEM||0===n,name:e.name,nestingLevel:n,node:e},nestingLevel:n,node:e});function ev(e){let{style:n,data:{name:t,nestingLevel:o,isLeaf:i,node:l},isOpen:c,setOpen:s}=e,{active:d,add:f}=y();return(0,r.jsxs)("div",{style:{...n,marginLeft:"".concat(20*o,"px"),width:"max-content",paddingRight:20,background:l===d?"rgba(34, 122, 48, 0.1)":"none"},className:u()("flex items-center py-[2px]",{"":l===d}),children:[(0,r.jsx)("button",{onClick:()=>s(!c),className:u()("text-sm mr-[6px]",{invisible:i}),children:c?(0,r.jsx)(m.ZXJ,{}):(0,r.jsx)(m.jfD,{})}),(0,r.jsxs)("div",{onClick:()=>{"content"==l.type&&Object.keys(ed).includes(l.modelType)&&f(l),"folder"==l.type&&s(!c)},className:u()("flex text-sm gap-1 items-center cursor-pointer"),children:[(0,r.jsx)(N,{type:"folder"==l.type?"folder-".concat(l.modelType):l.modelType===a.FLOW.valueOf()?l.data.flowType||"FLOW":l.modelType}),(0,r.jsx)("span",{className:u()("text-black whitespace-nowrap"),children:t})]})]})}function ey(e){let{node:n}=e,t=(0,f.useCallback)(function*(){for(let e=0;e<n.children.length;e++)yield ex(n.children[e],0);for(;;){let e=yield;for(let n=0;n<e.node.children.length;n++)yield ex(e.node.children[n],e.nestingLevel+1)}},[n]);return(0,r.jsx)(p.Z,{children:e=>{let{height:n,width:o}=e;return(0,r.jsx)(x.NC,{useIsScrolling:!0,width:o,height:n,itemSize:18,treeWalker:t,children:ev})}})}function eg(){let{active:e,navs:n,del:t,setActive:o}=y();return(0,r.jsx)("div",{className:"flex-shrink-0 flex border-b border-solid border-b-gray-14 overflow-x-auto",children:n.map((n,a)=>(0,r.jsxs)("div",{onClick:()=>o(n),className:u()("flex gap-1  text-sm w-min leading-[14px] p-[.625rem] cursor-pointer",{"bg-gray-bg border border-solid border-gray-14 border-b-0":n===e}),children:[(0,r.jsx)(N,{type:n.modelType}),(0,r.jsx)("span",{className:"text-black whitespace-nowrap overflow-hidden text-ellipsis max-w-[600px]",children:n.name}),(0,r.jsx)(T.q5L,{className:"text-black cursor-pointer",onClick:e=>{t(n),e.stopPropagation()}})]},"tabs_".concat(a)))})}var eh=t(5913),ej=t(8948),eT=t(2493),eC=function(){let e=(0,ej.useRouter)(),n=e.query.id,{value:t,loading:o}=(0,eh.k)(()=>n?(0,P.Iv)(n):Promise.resolve(void 0),[n]),d=(0,f.useMemo)(()=>{if(!t)return;let[e,n]=t,o={id:"root",children:[],type:"folder",name:"database",modelType:"database"},r={},i={},l=(0,I.tV)(e);l.forEach(e=>{if(e.modelType){r[e.id]=e,i[e.modelType]||(i[e.modelType]={});let n=e.category?e.category.id:"null";i[e.modelType][n]||(i[e.modelType][n]=[]),i[e.modelType][n].push(e)}});let c=[a.PRODUCT_SYSTEM,a.PROCESS,a.FLOW,a.EPD],s=[a.IMPACT_METHOD,a.IMPACT_CATEGORY,a.SOCIAL_INDICATOR,a.PARAMETER,a.DQ_SYSTEM],d=[a.FLOW_PROPERTY,a.UNIT_GROUP,a.CURRENCY,a.ACTOR,a.SOURCE,a.LOCATION],u=(e,t)=>{let o=e.toString();i[o]||(i[o]={});let a=(i[o][t]||[]).map(n=>({id:n.refId+"_"+n.id,children:u(e,n.id),name:n.name,type:"folder",modelType:n.modelType,data:n}));n[o.toString()]||(n[o]={});let r=(n[o][t+""]||[]).map(e=>({id:e.refId+"_"+e.id,children:[],name:e.name,type:"content",modelType:e.type,data:e}));return q().sortBy([...a,...r],"name")},f=e=>{let n=[],t={};return e.forEach(e=>{"folder"===e.type?t[e.name]?t[e.name].children=f(t[e.name].children.concat(e.children)):(t[e.name]=e,n.push(e)):n.push(e)}),q().sortBy(n,"name")},m=(e,n)=>{if(null!=e){let t={id:e,name:e,type:"folder",modelType:e,children:[]};o.children.push(t),t.children=n.map(e=>({id:e,name:G[e],type:"folder",modelType:e,children:f(u(e,"null"))}))}else n.forEach(e=>{o.children.push({id:e,name:G[e],type:"folder",modelType:e,children:f(u(e,"null"))})})};return m(null,c),m("Indicators and parameters",s),m("Background data",d),console.info("root:",o),o},[t]),u=(0,i.to)(),m=(0,c.R)();return(0,r.jsxs)(l.T$,{isManager:!0,className:"h-0 flex py-0 !px-0",style:{maxHeight:"calc(100vh - ".concat(u+m,"px)")},children:[o&&(0,r.jsx)(s.I,{}),!!d&&(0,r.jsx)(g,{children:(0,r.jsx)(h.Provider,{value:{descriptores:t[1]},children:(0,r.jsxs)(eT.Z,{className:"split flex w-full",sizes:[1,99],minSize:260,snapOffset:1,gutterSize:6,gutterStyle:()=>({backgroundColor:"#f3f3f3",cursor:"col-resize"}),children:[(0,r.jsxs)("div",{className:"flex flex-col overflow-hidden",children:[(0,r.jsx)("div",{className:"border-b border-solid border-b-gray-16",children:(0,r.jsxs)("div",{className:"flex gap-[6px] text-sm w-min leading-[14px] p-[.625rem] bg-gray-bg border border-solid border-gray-14",children:[(0,r.jsx)(C.SxP,{className:"text-gray-9 fixGrColor"}),(0,r.jsx)("span",{className:"text-black",children:"Navigation"})]})}),(0,r.jsx)("div",{className:"flex-1 p-3",children:!!d&&(0,r.jsx)(ey,{node:d})})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(eg,{}),(0,r.jsx)(ep,{id:n})]})]})})})]})}}},function(e){e.O(0,[713,769,7307,6574,6740,1420,6556,3758,2295,2699,4799,2351,9774,2888,179],function(){return e(e.s=2906)}),_N_E=e.O()}]);