(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{404:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/inventory",function(){return n(6193)}])},7361:function(t,e,n){"use strict";n.d(e,{k:function(){return a}});var r=n(959),o=n(6171);function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=(0,r.useRef)(!0),a=(0,r.useRef)(0),[,c]=(0,r.useState)(1),u=(0,r.useCallback)((t=>{n.current=t,c((t=>1-t))}),[]),[i,l]=(0,o.Z)(t,e),s=()=>{n.current||u(!0);const t=a.current+1>1e5?0:a.current+1;a.current=t,l().finally((()=>a.current==t&&u(!1)))};return(0,r.useEffect)((()=>{s()}),e),(0,r.useMemo)((()=>({...i,value:n.current||i.error?void 0:i.value,loading:n.current,req:s})),[i,n.current])}},6193:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var r=n(1527),o=n(7944),a=n(959),c=n(8288),u=n(9601),i=n(7361),l=n(4726);var s=function(){const[t,e]=(0,a.useState)(1),[n,s]=(0,a.useState)([]),d=[{title:"\u4ea7\u54c1\u6279\u6b21\u53f7",dataIndex:"loadNumber",width:"300px",render:t=>(0,r.jsx)("span",{className:"max-w-[220px] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":t,children:t})},{title:"\u4ea7\u54c1\u540d\u79f0",dataIndex:"productName",render:t=>(0,r.jsx)("span",{className:"max-w-[200px] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":t,children:t})},{title:"\u6a21\u578b\u540d\u79f0",dataIndex:"modelName",render:t=>(0,r.jsx)("span",{className:"max-w-[150px] truncate inline-block","data-tooltip-id":"tooltip","data-tooltip-content":t,children:t})},{title:"\u62a5\u544a\u65f6\u95f4",dataIndex:"createTime"},{title:"",render:(t,e)=>(0,r.jsx)("div",{className:"flex justify-between text-green-2",children:(0,r.jsx)("span",{className:"cursor-pointer",onClick:()=>window.open("/tools/inventoryResult?id=".concat(e.id),"_blank"),children:"\u78b3\u8db3\u8ff9\u7ed3\u679c"})})}],{value:f,loading:p}=(0,i.k)((0,l.Pf)((()=>(0,l.SO)({pgNum:t})),[t]),[t]);return(0,a.useMemo)((()=>{if(!(null===f||void 0===f?void 0:f.records))return[];console.log(JSON.parse(f.records[0].lcaResult));let t=[];f.records.map((e=>{t.push({id:e.id,createTime:e.createTime,loadNumber:e.loadNumber,productName:e.product.name,modelName:e.model.modelName,description:e.model.description})})),s(t)}),[f]),(0,r.jsxs)(o.m,{className:"text-black flex flex-col justify-between flex-1",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-2xl font-semibold mt-8",children:"\u4ea7\u54c1\u78b3\u8db3\u8ff9\u5b9e\u666f\u6e05\u5355\u7ba1\u7406"}),(0,r.jsx)("div",{className:"bg-white p-5 rounded-2xl text-base mt-5 leading-[1.625rem]",children:(0,r.jsx)(c.i,{columns:d,cellClassName:(t,e,n)=>n%2===0?"bg-gray-16 ".concat(0===e&&"rounded-l-lg"," ").concat(e===d.length-1&&"rounded-r-lg"):"",data:n,loading:p,className:"",headerStyle:{background:"#fff"}})})]}),(0,r.jsx)(u.t,{className:"my-8",onChange:t=>{e(t)},total:(null===f||void 0===f?void 0:f.total)?f.total:0,pgSize:10,pgNum:t})]})}},6171:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(677),o=n(959);function a(t,e,n){void 0===e&&(e=[]),void 0===n&&(n={loading:!1});var a=(0,o.useRef)(0),c=function(){var t=(0,o.useRef)(!1),e=(0,o.useCallback)((function(){return t.current}),[]);return(0,o.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]),e}(),u=(0,o.useState)(n),i=u[0],l=u[1],s=(0,o.useCallback)((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=++a.current;return i.loading||l((function(t){return(0,r.pi)((0,r.pi)({},t),{loading:!0})})),t.apply(void 0,e).then((function(t){return c()&&o===a.current&&l({value:t,loading:!1}),t}),(function(t){return c()&&o===a.current&&l({error:t,loading:!1}),t}))}),e);return[i,s]}},9592:function(t,e,n){"use strict";var r=n(959),o=function(t,e){return"boolean"===typeof e?e:!t};e.Z=function(t){return(0,r.useReducer)(o,t)}},677:function(t,e,n){"use strict";n.d(e,{ZT:function(){return o},pi:function(){return a}});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};Object.create;Object.create}},function(t){t.O(0,[713,769,307,574,570,960,774,888,179],(function(){return e=404,t(t.s=e);var e}));var e=t.O();_N_E=e}]);