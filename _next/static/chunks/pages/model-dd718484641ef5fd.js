(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[704],{8722:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/model",function(){return t(5279)}])},8485:function(e,n,t){"use strict";t.d(n,{T$:function(){return d},T8:function(){return s}});var o=t(1527),a=t(4875),r=t.n(a),i=t(9270),c=t(570),l=t(7007);function s(e){const{className:n,children:t,...a}=e,l=(0,i.dD)();return(0,o.jsxs)("div",{className:"flex-1 flex flex-col min-h-fit w-full bg-gray-16 relative",children:[l?(0,o.jsxs)("div",{className:"absolute z-0 top-0 w-full h-[43rem] overflow-hidden bg-green-2 ",children:[(0,o.jsx)("img",{className:"object-cover w-full absolute right-0 bottom-0",src:"/home-bg-r.jpg"}),(0,o.jsx)("div",{className:"w-full h-full absolute ssm:top-[calc(21.5rem_-_75vw)]",style:{background:"linear-gradient(180deg, #29953A 48.84%, rgba(34, 122, 48, 0) 96.76%)"}})]}):(0,o.jsxs)("div",{className:"absolute z-0 top-0 w-full h-[48.75rem] bg-green-2 overflow-hidden",children:[(0,o.jsx)("img",{className:"object-cover h-full absolute right-0 top-0",src:"/home-bg-r.jpg"}),(0,o.jsx)("div",{className:"w-full h-full absolute lg:left-[calc(50%_-_45rem)]",style:{background:"linear-gradient(182.16deg, #000000 -4.66%, rgba(0, 0, 0, 0) 17.13%)",transform:"matrix(-1, 0, 0, 1, 0, 0)"}}),(0,o.jsx)("div",{className:"w-full h-full absolute lg:left-[calc(50%_-_45rem)]",style:{background:"linear-gradient(270deg, #29953A 38.28%, rgba(34, 122, 48, 0) 77.8%)",transform:"matrix(-1, 0, 0, 1, 0, 0)"}})]}),(0,o.jsx)(c.h4,{className:"h-[6.75rem] mo:h-[4.25rem] mo:sticky mo:bg-white mo:text-green-2 mo:p-4"}),(0,o.jsx)("div",{className:r()("z-[2] flex-1 relative w-full mx-auto mo:mx-0 mo:flex mo:flex-col",n),...a,children:t})]})}function d(e){const{className:n,tits:t,isManager:a,children:s,...d}=e,u=(0,i.dD)(),m=(0,l.R)();return(0,o.jsxs)("div",{className:"flex-1 flex flex-col min-h-fit w-full relative",children:[u?(0,o.jsx)(c.DJ,{}):(0,o.jsx)(c.h4,{tits:t,isManager:a,style:{top:"".concat(m,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2"}),(0,o.jsx)("div",{className:r()("z-[2] flex-1 relative w-full py-6 px-[3.125rem] mx-auto mo:px-5",n),...d,children:s})]})}},7361:function(e,n,t){"use strict";t.d(n,{k:function(){return r}});var o=t(959),a=t(6171);function r(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const t=(0,o.useRef)(!0),r=(0,o.useRef)(0),[,i]=(0,o.useState)(1),c=(0,o.useCallback)((e=>{t.current=e,i((e=>1-e))}),[]),[l,s]=(0,a.Z)(e,n),d=()=>{t.current||c(!0);const e=r.current+1>1e5?0:r.current+1;r.current=e,s().finally((()=>r.current==e&&c(!1)))};return(0,o.useEffect)((()=>{d()}),n),(0,o.useMemo)((()=>({...l,value:t.current||l.error?void 0:l.value,loading:t.current,req:d})),[l,t.current])}},4726:function(e,n,t){"use strict";t.d(n,{AC:function(){return E},BI:function(){return h},Ii:function(){return g},Iv:function(){return N},Mt:function(){return w},Pf:function(){return s},Ps:function(){return R},RN:function(){return v},RS:function(){return f},SO:function(){return j},Vd:function(){return x},av:function(){return O},eO:function(){return p},ep:function(){return y},fF:function(){return T},jw:function(){return m},pF:function(){return C},vz:function(){return _},x4:function(){return d}});var o=t(9270),a=t(8422),r=t(3993),i=t(3273);function c(e){return"".concat(r.Sg).concat(e)}function l(e){var n;const t=e.data;if(t){if(t.code&&1e5!==t.code)throw t.message;return null===(n=e.data)||void 0===n?void 0:n.data}}function s(e,n){return()=>n.some((e=>!e))?(0,i._v)():e()}async function d(e,n){return l(await a.Z.post(c("/api/base/login"),{name:e,password:n}))}function u(){const e=(0,o.is)();return e?{headers:{Authorization:"Bearer ".concat(e.loginToken)}}:{}}async function m(){return l(await a.Z.get(c("/api/npi/product/list"),u()))}async function f(e){return l(await a.Z.get(c("/api/npi/product/".concat(e,"/pcf_accountable")),u()))}async function p(e){return l(await a.Z.get(c("/api/npi/product/".concat(e,"/bom/list")),u()))}async function v(e){return l(await a.Z.get(c("/api/npi/product_bom/".concat(e,"/activity_types")),u()))}async function x(e){return l(await a.Z.get(c("/api/npi/product_process/query"),{...u(),params:{product_id:e,include_activity_types:!0}}))}async function y(e){return l(await a.Z.get(c("/api/npi/product/serial_number/".concat(e,"/info")),u()))}async function g(e){return l(await a.Z.get(c("/api/inventory/product/".concat(e,"/inventory")),u()))}async function h(e){let{pgNum:n,productId:t}=e;return l(await a.Z.get(c("/api/product-lca/model/query?pageNum=".concat(n,"&pageSize=10&productId=").concat(t>-1?t:"")),u()))}async function j(e){let{pgNum:n}=e;return l(await a.Z.get(c("/api/product-lca/result/query?pageNum=".concat(n,"&pageSize=10")),u()))}async function T(e){return l(await a.Z.get(c("/api/product-lca/result/detail/".concat(e)),u()))}async function C(e,n){return l(await a.Z.post(c("/api/product-lca/model/state/".concat(e,"/update/").concat(n)),null,u()))}async function O(e){let n=u();n.headers&&(n.headers["Content-Type"]="multipart/form-data");try{return await a.Z.post(c("/api/product-lca/model/upload"),e,n)}catch(t){console.log(t)}}async function R(){return l(await a.Z.get(c("/api/product/category/query"),u()))}async function w(e){let{name:n,categoryId:t,orgId:o,description:r}=e;return l(await a.Z.post(c("/api/product/upsert"),{name:n,categoryId:t,orgId:o,partNumber:"1",imageUrl:"",description:r},u()))}async function _(){return l(await a.Z.get(c("/api/product/list?pageSize=500"),u()))}async function N(e){const n=await async function(e){const n=await a.Z.get(c("/api/product-lca/model/".concat(e,"/categories")),u());return JSON.parse(l(n))}(e),t=await async function(e){const n=await a.Z.get(c("/api/product-lca/model/".concat(e,"/descriptors")),u());return JSON.parse(l(n))}(e);return[n,t]}async function E(e,n,t){const o=await a.Z.get(c("/api/product-lca/model/".concat(e,"/item/").concat(n,"/").concat(t,"/info")),u());return JSON.parse(l(o))}},5279:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return xe}});var o,a=t(1527),r=t(570),i=t(8485),c=t(7007),l=t(818);!function(e){e.PRODUCT_SYSTEM="PRODUCT_SYSTEM",e.PROCESS="PROCESS",e.FLOW="FLOW",e.EPD="EPD",e.IMPACT_METHOD="IMPACT_METHOD",e.IMPACT_CATEGORY="IMPACT_CATEGORY",e.SOCIAL_INDICATOR="SOCIAL_INDICATOR",e.PARAMETER="PARAMETER",e.DQ_SYSTEM="DQ_SYSTEM",e.FLOW_PROPERTY="FLOW_PROPERTY",e.UNIT_GROUP="UNIT_GROUP",e.CURRENCY="CURRENCY",e.ACTOR="ACTOR",e.SOURCE="SOURCE",e.LOCATION="LOCATION"}(o||(o={}));var s=t(4875),d=t.n(s),u=t(959),m=t(1671),f=t(8370),p=t(9077);const v=(0,u.createContext)(void 0);function x(){return(0,u.useContext)(v)}function y(e){const[n,t]=(0,u.useState)([]),[o,r]=(0,u.useState)(),i=(0,u.useCallback)((e=>{n.find((n=>n===e))||(n.length>=20?t([e].concat(n.slice(0,19))):t([e,...n])),r(e)}),[n,o]),c=(0,u.useCallback)((e=>{const a=n.filter((n=>n!==e));t(a),a.find((e=>e===o))||r(a[0])}),[n,o]);return(0,a.jsx)(v.Provider,{value:{navs:n,add:i,del:c,active:o,setActive:r},children:e.children})}const g=(0,u.createContext)({descriptores:{}});var h=t(5591),j=t(1875),T=t(7661),C=t(3967),O=t(5452),R=t(5462);const w={Icon:T.G3d,color:"#9C27B0",needFixColor:!0},_={[o.PRODUCT_SYSTEM]:{Icon:h.TdV,color:"#1565C0"},[o.FLOW]:{Icon:j.nbt,color:"#0084FF"},[o.FLOW_PROPERTY]:{Icon:C.KOr,color:"#CE6D2F"},[o.UNIT_GROUP]:{Icon:O.YvB,color:"#1D4F64"},[o.ACTOR]:{Icon:h.Xws,color:"#556164"},[o.SOURCE]:{Icon:h.uYZ,color:"#556164"},[o.LOCATION]:{Icon:h.Nh4,color:"#556164"},[o.DQ_SYSTEM]:{Icon:C.USG,color:"#3A8772"},[o.IMPACT_METHOD]:{Icon:C.MnU,color:"#69B13E"},[o.IMPACT_CATEGORY]:{Icon:C.eG4,color:"#69B13E"},["folder-".concat(o.PRODUCT_SYSTEM)]:{Icon:h.$nz,color:"#1565C0"},["folder-".concat(o.PROCESS)]:{Icon:h.$nz,color:"#9C27B0"},["folder-".concat(o.FLOW)]:{Icon:h.$nz,color:"#CE6D2F"},["folder-".concat(o.FLOW_PROPERTY)]:{Icon:h.$nz,color:"#CE6D2F"},["folder-".concat(o.EPD)]:{Icon:h.$nz,color:"#21C393"},["folder-".concat(o.IMPACT_METHOD)]:{Icon:h.$nz,color:"#69B13E"},["folder-".concat(o.IMPACT_CATEGORY)]:{Icon:h.$nz,color:"#69B13E"},["folder-".concat(o.SOCIAL_INDICATOR)]:{Icon:h.$nz,color:"#EA9119"},["folder-".concat(o.DQ_SYSTEM)]:{Icon:h.$nz,color:"#37997D"},["folder-".concat(o.PARAMETER)]:{Icon:h.$nz,color:"#C60116"},["folder-".concat(o.UNIT_GROUP)]:{Icon:h.$nz,color:"#2F363A"},["folder-".concat(o.CURRENCY)]:{Icon:h.$nz,color:"#22614E"},["folder-".concat(o.ACTOR)]:{Icon:h.$nz,color:"#3388AF"},["folder-".concat(o.SOURCE)]:{Icon:h.$nz,color:"#577889"},["folder-".concat(o.LOCATION)]:{Icon:h.$nz,color:"#173855"},"folder-Indicators and parameters":{Icon:h.Mp$,color:"#556164"},"folder-Background data":{Icon:O.owA,color:"#999999"},PRODUCT_FLOW:{Icon:j.nbt,color:"#0084FF"},ELEMENTARY_FLOW:{Icon:R.jRM,color:"#2F5F39"},WASTE_FLOW:{Icon:R.SW4,color:"#9C462E"}};function N(e){const{Icon:n,color:t,needFixColor:o}=_[e.type]||w;return(0,a.jsx)(n,{color:t,className:d()(e.className,{fixGrColor:o})})}var E=t(4726),P=t(3273),I=t(6101);const S=t.n(I)()((()=>t.e(287).then(t.t.bind(t,9287,23))),{loadableGenerated:{webpack:()=>[9287]},ssr:!1});function b(e){return e.data?(0,a.jsx)(S,{src:e.data,collapsed:2}):null}function A(e){const{map:n,data:t}=e,o=Object.keys(n),[r,i]=(0,u.useState)(o[0]),c=n[r].json,l=c?null:n[r];return(0,a.jsxs)("div",{className:"flex-1 flex flex-col h-0",children:[(0,a.jsx)("div",{className:"h-[calc(100%-34px)] flex-1 flex flex-col overflow-auto p-5 gap-5",children:l?(0,a.jsx)(l,{data:t}):(0,a.jsx)(b,{data:c})}),(0,a.jsxs)("div",{className:"flex flex-shrink-0 overflow-x-auto",children:[o.map(((e,n)=>(0,a.jsx)("div",{onClick:()=>i(e),className:d()("leading-[34px] text-sm px-[10px] border border-solid border-gray-14 cursor-pointer whitespace-nowrap",{"text-green-2 border-transparent":e===r,"text-black":e!==r}),children:e},"type_tab_".concat(n)))),(0,a.jsx)("div",{className:"flex-1 border border-solid border-gray-14"})]})]})}var F=t(9592);function D(e){const{infos:n,title:t}=e,[o,r]=(0,F.Z)(!0);return(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{className:"flex items-center font-bold cursor-pointer text-lg text-black",onClick:()=>r(),children:[t,o?(0,a.jsx)(h.IkZ,{className:"text-2xl "}):(0,a.jsx)(h.qL$,{className:"text-2xl"})]}),o&&(0,a.jsx)("div",{className:"mt-3 grid grid-cols-[auto_1fr] gap-x-5 gap-y-[10px] text-sm text-black",children:n.map(((e,n)=>{if(!e.length)return(0,a.jsx)("div",{className:"col-span-2",children:e},"infomation_".concat(n));const[t,o]=e;return(0,a.jsxs)(u.Fragment,{children:[(0,a.jsx)("div",{className:"font-bold",children:t}),(0,a.jsx)("div",{className:"whitespace-pre-wrap",children:o||"none"})]},"infomation_".concat(n))}))})]})}function U(){return(0,a.jsx)("div",{className:"w-full h-[6px] flex-shrink-0 bg-gray-16"})}function M(e){const{type:n,name:t,def:o=""}=e;return t?n?(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)(N,{type:n}),t]}):(0,a.jsx)(a.Fragment,{children:t}):(0,a.jsx)(a.Fragment,{children:o})}function L(e){var n,t,r,i,c,l,s,d,u,m;const{data:f}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{title:"General information",infos:[["Name",f.name],["Category",(0,a.jsx)(M,{type:"folder-".concat(o.PROCESS),name:null===(n=f.category)||void 0===n?void 0:n.name,def:"none"},"info_2")],["Description",f.description||""],["Tags",f.tags||""],["Infrastructure process",f.infrastructureProcess?"true":"false"]]}),(0,a.jsx)(U,{}),(0,a.jsx)(D,{title:"Time",infos:[["Start date",(0,P.pv)(null===(t=f.documentation)||void 0===t?void 0:t.validFrom)],["End date",(0,P.pv)(null===(r=f.documentation)||void 0===r?void 0:r.validUntil)],["Description",(null===(i=f.documentation)||void 0===i?void 0:i.time)||""]]}),(0,a.jsx)(U,{}),(0,a.jsx)(D,{title:"Geography",infos:[["Location",(null===(c=f.location)||void 0===c?void 0:c.name)||"none"],["Description",(null===(l=f.documentation)||void 0===l?void 0:l.geography)||""]]}),(0,a.jsx)(U,{}),(0,a.jsx)(D,{title:"Technology",infos:[["Description",(null===(s=f.documentation)||void 0===s?void 0:s.technology)||""]]}),(0,a.jsx)(U,{}),(0,a.jsx)(D,{title:"Data quality",infos:[["Process schema",(null===(d=f.location)||void 0===d?void 0:d.name)||"none"],["Data quality entry",f.dqEntry||"(not specified)"],["Flow schema",(null===(u=f.exchangeDqSystem)||void 0===u?void 0:u.name)||"none"],["Social schema",(null===(m=f.socialDqSystem)||void 0===m?void 0:m.name)||"none"]]})]})}var k=t(2699),G=t.n(k);function Y(e){const{infos:n,title:t,head:o,className:r}=e,[i,c]=(0,F.Z)(!0);return(0,a.jsxs)("div",{className:r,children:[(0,a.jsxs)("div",{className:"flex items-center cursor-pointer text-lg text-black",onClick:()=>c(),children:[t,i?(0,a.jsx)(h.IkZ,{className:"text-2xl "}):(0,a.jsx)(h.qL$,{className:"text-2xl"})]}),i&&(0,a.jsxs)("div",{style:{gridTemplateColumns:"repeat(".concat(o.length,", auto)")},className:"mt-3 grid text-sm text-black overflow-x-auto",children:[o.map(((e,n)=>(0,a.jsx)("div",{className:"px-3 py-2 font-bold text-sm whitespace-nowrap",children:e},"head_"+n))),n.map(((e,n)=>(0,a.jsx)(u.Fragment,{children:e.map(((t,o)=>(0,a.jsx)("div",{className:d()("text-xs leading-normal px-3 py-[1px] whitespace-nowrap",{"bg-gray-16":n%2===0,"rounded-l-[4px]":0===o,"rounded-r-[4px]":o===e.length-1}),children:t},"body_col_"+o)))},"body_row_"+n)))]})]})}const W={[o.PRODUCT_SYSTEM]:"Product systems",[o.PROCESS]:"Processes",[o.FLOW]:"Flows",[o.EPD]:"EPDs",[o.IMPACT_METHOD]:"Impact assessment methods",[o.IMPACT_CATEGORY]:"Impact categories",[o.SOCIAL_INDICATOR]:"Social indicators",[o.PARAMETER]:"Global parameters",[o.DQ_SYSTEM]:"Data quality systems",[o.FLOW_PROPERTY]:"Flow properties",[o.UNIT_GROUP]:"Unit groups",[o.CURRENCY]:"Currencies",[o.ACTOR]:"Actors",[o.SOURCE]:"Sources",[o.LOCATION]:"Locations"};function z(e){if(!e)return"none";const{parameter1:n,parameter2:t,parameter3:o}=e;switch(e.distributionType){case"LOG_NORMAL":return"lognormal: gmean=".concat(n," gsigma=").concat(t);case"NORMAL":return"normal: gmean=".concat(n," sigma=").concat(t);case"UNIFORM":return"uniform: min=".concat(n," max=").concat(t);case"TRIANGLE":return"triangular: min=".concat(n," mode=").concat(t," max=").concat(o);default:return"none"}}const Z=["Flow","Category","Amount","Unit","Costs/Revenuse","Uncertainty","Avoided waste","Provider","Data quality entry","Location","Description"];function $(e){const{data:n}=e,{descriptores:t}=(0,u.useContext)(g),[r,i]=(0,u.useMemo)((()=>{const e=[],r=[],i=G().chain(t[o.PROCESS]).values().flatten().keyBy("id").value()||{};return n.exchanges.forEach(((n,t)=>{var c,l,s,d,u;const m=i[n.defaultProviderId];(n.isInput?e:r).push([(0,a.jsx)(M,{type:(null===(c=n.flow)||void 0===c?void 0:c.flowType)||o.FLOW,name:n.flow.name},"exchanges_".concat(t,"_1")),null===(l=n.flow)||void 0===l||null===(s=l.category)||void 0===s?void 0:s.name,n.amount,(0,a.jsx)(M,{type:o.UNIT_GROUP,name:null===(d=n.unit)||void 0===d?void 0:d.name},"exchanges_".concat(t,"_2")),"",z(n.uncertainty),"",(0,a.jsx)(M,{type:o.PROCESS,name:null===m||void 0===m?void 0:m.name},"exchanges_".concat(t,"_3")),n.dqEntry||"",(null===(u=n.location)||void 0===u?void 0:u.name)||"",n.description||""])})),[e,r]}),[n,t]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Y,{title:"Inputs",head:Z,infos:r}),(0,a.jsx)(U,{}),(0,a.jsx)(Y,{title:"Outputs",head:Z,infos:i})]})}function B(e){var n,t,r,i,c,l,s,d,u,m,f,p;const{data:v}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(D,{title:"Administrative infomation",infos:[["Intended application",(null===(n=v.documentation)||void 0===n?void 0:n.intendedApplication)||""],["Data set owner",(0,a.jsx)(M,{def:"none",type:o.ACTOR,name:null===(t=v.documentation)||void 0===t||null===(r=t.dataSetOwner)||void 0===r?void 0:r.name},1)],["Data generator",(0,a.jsx)(M,{def:"none",type:o.ACTOR,name:null===(i=v.documentation)||void 0===i||null===(c=i.dataGenerator)||void 0===c?void 0:c.name},2)],["Data documentor",(0,a.jsx)(M,{def:"none",type:o.ACTOR,name:null===(l=v.documentation)||void 0===l||null===(s=l.dataDocumentor)||void 0===s?void 0:s.name},3)],["Publication",(0,a.jsx)(M,{def:"none",type:o.SOURCE,name:null===(d=v.documentation)||void 0===d||null===(u=d.publication)||void 0===u?void 0:u.name},4)||""],["Access and use restrictions",(null===(m=v.documentation)||void 0===m?void 0:m.restrictions)||""],["Creation date",(0,P.pv)(null===(f=v.documentation)||void 0===f?void 0:f.creationDate)],["Copyright ",(null===(p=v.documentation)||void 0===p?void 0:p.copyright)?"true":"false"]]})})}function q(e){var n,t,r,i,c,l,s,d,u,m,f;const{data:p}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{title:"Modeling and validation",infos:[["Process type",(0,a.jsx)(M,{type:o.PROCESS,name:p.processType},1)],["LCI method",(null===(n=p.documentation)||void 0===n?void 0:n.inventoryMethod)||""],["Modeling constants",(null===(t=p.documentation)||void 0===t?void 0:t.modelingConstants)||""],["Data completeness",(null===(r=p.documentation)||void 0===r?void 0:r.completeness)||""],["Data selection",(null===(i=p.documentation)||void 0===i?void 0:i.dataSelection)||""],["Data treatment",(null===(c=p.documentation)||void 0===c?void 0:c.dataTreatment)||""]]}),(0,a.jsx)(U,{}),(0,a.jsx)(D,{title:"Data source infomation",infos:[["Simpling procedure",(null===(l=p.documentation)||void 0===l?void 0:l.sampling)||""],["Data collection period",(null===(s=p.documentation)||void 0===s?void 0:s.dataCollectionPeriod)||""]]}),(0,a.jsx)(U,{}),(0,a.jsx)(D,{title:"Process evaluation and validation",infos:[["Reviewer",(null===(d=p.documentation)||void 0===d||null===(u=d.reviewer)||void 0===u?void 0:u.name)||""],["Data set other evaluation",(null===(m=p.documentation)||void 0===m?void 0:m.reviewDetails)||""]]}),(0,a.jsx)(U,{}),(0,a.jsx)(D,{title:"Sources",infos:[(0,a.jsx)("div",{className:"flex flex-col px-3",children:((null===(f=p.documentation)||void 0===f?void 0:f.sources)||[]).map(((e,n)=>(0,a.jsx)(M,{type:o.SOURCE,name:e.name},"source_".concat(n))))},1)]})]})}function H(e){const{data:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Y,{title:"Input parameters",head:["Name","Value","Uncertainty","Description"],infos:[]}),(0,a.jsx)(U,{}),(0,a.jsx)(Y,{title:"Dependent parameters",head:["Name","Formula","Value","Description"],infos:[]})]})}function Q(e){const{data:n}=e,[t,r]=(0,u.useMemo)((()=>{const e=G().groupBy(n.exchanges||[],(e=>function(e){if(!e||e.isAvoided||!e.flow)return!1;const n=e.flow.flowType;return!(!n||"ELEMENTARY_FLOW"===n)&&"PRODUCT_FLOW"==n!=e.isInput}(e)?"true":"false"));if(e.true.length<2)return[[],[]];return[e.true.map((e=>{var n,t;return[(0,a.jsx)(M,{type:(null===(n=e.flow)||void 0===n?void 0:n.flowType)||o.FLOW,name:null===(t=e.flow)||void 0===t?void 0:t.name},1),"",""]})),e.false.map((e=>{var n,t,r,i,c;return[(0,a.jsx)(M,{type:(null===(n=e.flow)||void 0===n?void 0:n.flowType)||o.FLOW,name:null===(t=e.flow)||void 0===t?void 0:t.name},1),e.isInput?"Input":"Output",(null===(r=e.flow)||void 0===r||null===(i=r.category)||void 0===i?void 0:i.name)||"",e.amount+""+(null===(c=e.unit)||void 0===c?void 0:c.name),"",""]}))]}),[n]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex gap-6 text-sm",children:[(0,a.jsx)("div",{className:"font-bold",children:"Default method"}),(0,a.jsx)("div",{children:"None"})]}),(0,a.jsx)(Y,{title:"Pyhsical & economic allocation",head:["Product","Physical","Economic"],infos:t}),(0,a.jsx)(U,{}),(0,a.jsx)(Y,{title:"Causal allocation",head:["Flow","Direction","Category","Amount","Overburden(deposited)","transport in t*km"],infos:r})]})}function V(e){var n,t,r,i,c;const{data:l}=e,s=null===(n=l.referenceExchange)||void 0===n?void 0:n.flow;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{title:"General information",infos:[["Name",l.name],["Category",(0,a.jsx)(M,{type:"folder-".concat(o.PRODUCT_SYSTEM),name:null===(t=l.category)||void 0===t?void 0:t.name,def:"none"},"info_2")],["Description",l.description],["Tags",l.tags||""]]}),(0,a.jsx)(U,{}),(0,a.jsx)(D,{title:"Reference",infos:[["Process",(0,a.jsx)(M,{type:o.PROCESS,name:null===(r=l.referenceProcess)||void 0===r?void 0:r.name,def:"none"},"ref_process")],["Product",(0,a.jsx)(M,{type:"PRODUCT_FLOW"===(null===s||void 0===s?void 0:s.flowType)?o.PRODUCT_SYSTEM:"",name:null===s||void 0===s?void 0:s.name,def:"none"},"ref_product")],["Flow property",(0,a.jsx)(M,{type:o.FLOW_PROPERTY,name:null===s||void 0===s||null===(i=s.referenceFlowProperty)||void 0===i?void 0:i.name,def:"none"},"ref_flow_pro")],["Unit",(0,a.jsx)(M,{type:o.UNIT_GROUP,name:null===s||void 0===s||null===(c=s.referenceUnit)||void 0===c?void 0:c.name,def:"none"},"ref_unit")],["Target amount",l.targetAmount+""]]})]})}function J(e){const{data:n}=e,{descriptores:t}=(0,u.useContext)(g),o=(0,u.useMemo)((()=>{var e;let o=null===(e=n.parameterSets)||void 0===e?void 0:e.find((e=>e.isBaseLine));o||(o={name:"Baseline",description:"",head:["Context","Parameter","Amount","Uncertainty","Description"],infos:[]});const a=G().sortBy((n.parameterSets||[]).filter((e=>e!==o)),["isBaseline","name"]);return a.map((e=>({name:e.name,description:e.description,head:["Context","Parameter","Amount","Uncertainty","Description"],infos:(e.parameters||[]).map((n=>{var o,a,r;return[(null===(a=n.contextType,r=n.contextId,o=G().chain(t[a]).values().flatten().find((e=>e.id===r)).value)||void 0===o?void 0:o.name)||"",n.name||"",n.value||"",z(e.uncertainty),n.description||""]}))})))}),[n]);return(0,a.jsx)(a.Fragment,{children:o.map(((e,n)=>(0,a.jsxs)(u.Fragment,{children:[n>0&&(0,a.jsx)(U,{}),(0,a.jsx)(D,{title:e.name,infos:[["Name",e.name],["Description",e.description],(0,a.jsx)(Y,{className:"ml-5",title:"Parameters",head:e.head,infos:e.infos},1)]})]},"parameter_".concat(n))))})}function X(e){var n,t;const{data:r}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{title:"General information",infos:[["Name",r.name],["Category",(0,a.jsx)(M,{type:"folder-".concat(o.FLOW),name:null===(n=r.category)||void 0===n?void 0:n.name,def:"none"},"info_2")],["Description",r.description||""],["Tags",r.tags||""],["Flow type",(0,a.jsx)(M,{type:r.flowType,name:(i=r.flowType,i?"PRODUCT_FLOW"===i?"Product":"ELEMENTARY_FLOW"===i?"Elementary flow":"Waste":"")},1)],["Infrastructure flow",r.infrastructureFlow?"true":"false"]]}),(0,a.jsx)(U,{}),(0,a.jsx)(D,{title:"Additional information",infos:[["CAS Number",r.casNumber||"none"],["Formula",r.formula||"none"],["Synonyms",r.synonyms||"none"],["Location",(null===(t=r.location)||void 0===t?void 0:t.name)||"none"]]})]});var i}function K(e){const{data:n}=e,t=(0,u.useMemo)((()=>{const e=e=>{var t,o,a,r;const i=n.referenceFactor,c=null===i||void 0===i||null===(t=i.flowProperty)||void 0===t||null===(o=t.unitGroup)||void 0===o?void 0:o.referenceUnit,l=null===e||void 0===e||null===(a=e.flowProperty)||void 0===a||null===(r=a.unitGroup)||void 0===r?void 0:r.referenceUnit;return c&&l?"1.0 ".concat(c.name," = ").concat(e.conversionFactor," ").concat(l.name):""};return n.flowPropertyFactors.map((t=>{var r,i,c,l;return[(0,a.jsx)(M,{type:o.FLOW_PROPERTY,name:(null===(r=t.flowProperty)||void 0===r?void 0:r.name)||""},1),t.conversionFactor+"",(0,a.jsx)(M,{type:o.UNIT_GROUP,name:(null===(i=t.flowProperty)||void 0===i||null===(c=i.unitGroup)||void 0===c||null===(l=c.referenceUnit)||void 0===l?void 0:l.name)||""},2),e(t),n.referenceFactor===t?"true":"false"]}))}),[n]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Y,{title:"Flow properties",head:["Name","Conversion factor","Reference unit","Formula","Is reference"],infos:t},1)})}function ee(e){var n,t;const{data:r}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(D,{title:"General information",infos:[["Name",r.name],["Category",(0,a.jsx)(M,{type:"folder-".concat(o.FLOW_PROPERTY),name:null===(n=r.category)||void 0===n?void 0:n.name,def:"none"},"info_2")],["Description",r.description||""],["Tags",r.tags||""],["Unit group",(0,a.jsx)(M,{type:o.UNIT_GROUP,name:null===(t=r.unitGroup)||void 0===t?void 0:t.name},1)],["Flow property type",r.flowPropertyType]]})})}function ne(e){var n,t;const{data:r}=e;return(0,u.useMemo)((()=>{}),[r]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{title:"General information",infos:[["Name",r.name],["Category",(0,a.jsx)(M,{type:"folder-".concat(o.IMPACT_METHOD),name:null===(n=r.category)||void 0===n?void 0:n.name,def:"none"},"info_2")],["Description",r.description||""],["Tags",r.tags||""],["Source",(0,a.jsx)(M,{type:o.SOURCE,name:null===(t=r.source)||void 0===t?void 0:t.name,def:"none"},1)],["Code",r.code||""]]}),(0,a.jsx)(U,{}),(0,a.jsx)(Y,{title:"Impact categories",head:["Name","Description","Reference unit"],infos:(r.impactCategories||[]).map((e=>[(0,a.jsx)(M,{type:o.IMPACT_CATEGORY,name:e.name},1),e.description||"",e.referenceUnit]))})]})}function te(e){var n,t;const{data:r}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(D,{title:"General information",infos:[["Name",r.name],["Category",(0,a.jsx)(M,{type:"folder-".concat(o.IMPACT_CATEGORY),name:null===(n=r.category)||void 0===n?void 0:n.name,def:"none"},"info_2")],["Description",r.description||""],["Tags",r.tags||""],["Source",(0,a.jsx)(M,{type:o.SOURCE,name:null===(t=r.source)||void 0===t?void 0:t.name,def:"none"},1)],["Code",r.code||""],["Reference unit",r.referenceUnit||""],["Impact direction",r.direction||"Unspecified"]]})})}function oe(e){const{data:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Y,{title:"Characterization factors",head:["Flow","Category","Factor","Unit","Uncertainty","Location"],infos:(n.impactFactors||[]).map((e=>{var t,r,i,c,l,s;return[(0,a.jsx)(M,{name:null===(t=e.flow)||void 0===t?void 0:t.name,type:(null===(r=e.flow)||void 0===r?void 0:r.flowType)||o.FLOW},1),(null===(i=e.flow)||void 0===i||null===(c=i.category)||void 0===c?void 0:c.name)||"",e.formula||e.value||"",e.unit?"".concat(n.referenceUnit||"1","/").concat(e.unit.name):"",z(e.uncertainty),(null===(l=e.flow)||void 0===l||null===(s=l.location)||void 0===s?void 0:s.name)||""]}))})})}const ae={[o.PRODUCT_SYSTEM]:function(e){const{data:n}=e;return(0,a.jsx)(A,{map:{"General information":V,Parameters:J},data:n})},[o.PROCESS]:function(e){const{data:n,json:t}=e;return(0,a.jsx)(A,{map:{"General information":L,"Inputs/Outputs":$,"Administrative information":B,"Modeling and validation":q,Parameters:H,Allocation:Q},data:n})},[o.FLOW]:function(e){const{data:n,json:t}=e;return(0,a.jsx)(A,{map:{"General information":X,"Flow properties":K},data:n})},[o.FLOW_PROPERTY]:function(e){const{data:n}=e;return(0,a.jsx)(A,{map:{"General infomation":ee},data:n})},[o.IMPACT_METHOD]:function(e){const{data:n}=e;return(0,a.jsx)(A,{map:{"General infomation":ne},data:n})},[o.IMPACT_CATEGORY]:function(e){const{data:n}=e;return(0,a.jsx)(A,{map:{"General infomation":te,"Characterization factors":oe},data:n})}},re={};function ie(e){return(0,a.jsx)("div",{className:"flex-1 p-5 overflow-auto",children:(0,a.jsx)(b,{data:e.json})})}function ce(e){if(!e)return;const n=e.data;return"".concat(e.modelType,"_").concat(n.id)}function le(e){const{id:n}=e,{active:t}=x(),o=(0,u.useRef)(!0),[[r,i],c]=(0,u.useState)([void 0,void 0]),[s,d]=(0,u.useState)(!1),m=function(){const e=(0,u.useRef)(!0);return(0,u.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}();(0,u.useEffect)((()=>{if(o.current){for(const e in re)delete re[e];o.current=!1}if(!t||!t.data)return()=>{};const e=ce(t);d(!0),re[e]||(re[e]=(0,E.AC)(n,t.modelType,t.data.id).then((n=>{const t=(0,P.tV)(n);return t._key=e,[t,n]}))),re[e].then((e=>{console.info("value:",e),m.current&&c(e)})).catch((()=>{delete re[e]})).finally((()=>{console.info("first:",m.current),m.current&&d(!1)}))}),[t,n]);const f=ae[(null===t||void 0===t?void 0:t.modelType)||""]||ie;return t?s?(0,a.jsx)(l.g,{}):r&&ce(t)===r._key?(0,a.jsx)(f,{data:ae[(null===t||void 0===t?void 0:t.modelType)||""]?r:i,json:i}):null:null}const se=(e,n)=>({data:{id:e.id.toString(),isLeaf:0===e.children.length,isOpenByDefault:e.modelType==o.PRODUCT_SYSTEM||0===n,name:e.name,nestingLevel:n,node:e},nestingLevel:n,node:e});function de(e){const{style:n,data:{name:t,nestingLevel:r,isLeaf:i,node:c},isOpen:l,setOpen:s}=e,u=c,{active:f,add:p}=x();return(0,a.jsxs)("div",{style:{...n,marginLeft:"".concat(20*r,"px"),width:"max-content",paddingRight:20,background:c===f?"rgba(34, 122, 48, 0.1)":"none"},className:d()("flex items-center py-[2px]",{"":c===f}),children:[(0,a.jsx)("button",{onClick:()=>s(!l),className:d()("text-sm mr-[6px]",{invisible:i}),children:l?(0,a.jsx)(m.ZXJ,{}):(0,a.jsx)(m.jfD,{})}),(0,a.jsxs)("div",{onClick:()=>{"content"==u.type&&Object.keys(ae).includes(u.modelType)&&p(c),"folder"==u.type&&s(!l)},className:d()("flex text-sm gap-1 items-center cursor-pointer"),children:[(0,a.jsx)(N,{type:"folder"==u.type?"folder-".concat(u.modelType):u.modelType===o.FLOW.valueOf()?u.data.flowType||"FLOW":u.modelType}),(0,a.jsx)("span",{className:d()("text-black whitespace-nowrap"),children:t})]})]})}function ue(e){const{node:n}=e,t=(0,u.useCallback)((function*(){for(let e=0;e<n.children.length;e++)yield se(n.children[e],0);for(;;){const e=yield;for(let n=0;n<e.node.children.length;n++)yield se(e.node.children[n],e.nestingLevel+1)}}),[n]);return(0,a.jsx)(f.Z,{children:e=>{let{height:n,width:o}=e;return(0,a.jsx)(p.NC,{useIsScrolling:!0,width:o,height:n,itemSize:18,treeWalker:t,children:de})}})}function me(){const{active:e,navs:n,del:t,setActive:o}=x();return(0,a.jsx)("div",{className:"flex-shrink-0 flex border-b border-solid border-b-gray-14 overflow-x-auto",children:n.map(((n,r)=>(0,a.jsxs)("div",{onClick:()=>o(n),className:d()("flex gap-1  text-sm w-min leading-[14px] p-[.625rem] cursor-pointer",{"bg-gray-bg border border-solid border-gray-14 border-b-0":n===e}),children:[(0,a.jsx)(N,{type:n.modelType}),(0,a.jsx)("span",{className:"text-black whitespace-nowrap overflow-hidden text-ellipsis max-w-[600px]",children:n.name}),(0,a.jsx)(j.q5L,{className:"text-black cursor-pointer",onClick:e=>{t(n),e.stopPropagation()}})]},"tabs_".concat(r))))})}var fe=t(7361),pe=t(3190),ve=t(2493);var xe=function(){const e=(0,pe.useRouter)().query.id,{value:n,loading:t}=(0,fe.k)((()=>e?(0,E.Iv)(e):Promise.resolve(void 0)),[e]),s=(0,u.useMemo)((()=>{if(!n)return;const[e,t]=n,a={id:"root",children:[],type:"folder",name:"database",modelType:"database"},r={},i={};(0,P.tV)(e).forEach((e=>{if(e.modelType){r[e.id]=e,i[e.modelType]||(i[e.modelType]={});const n=e.category?e.category.id:"null";i[e.modelType][n]||(i[e.modelType][n]=[]);i[e.modelType][n].find((n=>n.refId===e.refId))||i[e.modelType][n].push(e)}}));const c=[o.PRODUCT_SYSTEM,o.PROCESS,o.FLOW,o.EPD],l=[o.IMPACT_METHOD,o.IMPACT_CATEGORY,o.SOCIAL_INDICATOR,o.PARAMETER,o.DQ_SYSTEM],s=[o.FLOW_PROPERTY,o.UNIT_GROUP,o.CURRENCY,o.ACTOR,o.SOURCE,o.LOCATION],d=(e,n)=>{const o=e.toString();i[o]||(i[o]={});const a=(i[o][n]||[]).map((n=>({id:n.refId,children:d(e,n.id),name:n.name,type:"folder",modelType:n.modelType,data:n})));t[o.toString()]||(t[o]={});const r=(t[o][n+""]||[]).map((n=>({id:n.refId,children:d(e,n.id),name:n.name,type:"content",modelType:n.type,data:n})));return G().sortBy([...a,...r],"name")},u=(e,n)=>{if(null!=e){const t={id:e,name:e,type:"folder",modelType:e,children:[]};a.children.push(t),t.children=n.map((e=>({id:e,name:W[e],type:"folder",modelType:e,children:d(e,"null")})))}else n.forEach((e=>{a.children.push({id:e,name:W[e],type:"folder",modelType:e,children:d(e,"null")})}))};return u(null,c),u("Indicators and parameters",l),u("Background data",s),console.info("root:",a),a}),[n]),d=(0,r.to)()+(0,c.R)();return(0,a.jsxs)(i.T$,{isManager:!0,className:"h-0 flex py-0 !px-0",style:{maxHeight:"calc(100vh - ".concat(d,"px)")},children:[t&&(0,a.jsx)(l.I,{}),!!s&&(0,a.jsx)(y,{children:(0,a.jsx)(g.Provider,{value:{descriptores:n[1]},children:(0,a.jsxs)(ve.Z,{className:"split flex w-full",sizes:[1,99],minSize:260,snapOffset:1,gutterSize:6,gutterStyle:()=>({backgroundColor:"#f3f3f3",cursor:"col-resize"}),children:[(0,a.jsxs)("div",{className:"flex flex-col overflow-hidden",children:[(0,a.jsx)("div",{className:"border-b border-solid border-b-gray-16",children:(0,a.jsxs)("div",{className:"flex gap-[6px] text-sm w-min leading-[14px] p-[.625rem] bg-gray-bg border border-solid border-gray-14",children:[(0,a.jsx)(T.SxP,{className:"text-gray-9 fixGrColor"}),(0,a.jsx)("span",{className:"text-black",children:"Navigation"})]})}),(0,a.jsx)("div",{className:"flex-1 p-3",children:!!s&&(0,a.jsx)(ue,{node:s})})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)(me,{}),(0,a.jsx)(le,{id:e})]})]})})})]})}}},function(e){e.O(0,[713,769,307,574,740,758,420,556,295,215,159,570,774,888,179],(function(){return n=8722,e(e.s=n);var n}));var n=e.O();_N_E=n}]);