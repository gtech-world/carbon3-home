(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{404:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/inventory",function(){return n(6193)}])},7361:function(e,t,n){"use strict";n.d(t,{k:function(){return u}});var r=n(959),o=n(6171);function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=(0,r.useRef)(!0),u=(0,r.useRef)(0),[,c]=(0,r.useState)(1),a=(0,r.useCallback)((e=>{n.current=e,c((e=>1-e))}),[]),[i,l]=(0,o.Z)(e,t),s=()=>{n.current||a(!0);const e=u.current+1>1e5?0:u.current+1;u.current=e,l().finally((()=>u.current==e&&a(!1)))};return(0,r.useEffect)((()=>{s()}),t),(0,r.useMemo)((()=>({...i,value:n.current||i.error?void 0:i.value,loading:n.current,req:s})),[i,n.current])}},6193:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(1527),o=n(7944),u=n(959),c=n(8288),a=n(9601),i=n(7361),l=n(4726);var s=function(){const[e,t]=(0,u.useState)(1),[n,s]=(0,u.useState)([]),d=[{title:"\u4ea7\u54c1\u6279\u6b21\u53f7",dataIndex:"loadNumber"},{title:"\u4ea7\u54c1\u540d\u79f0",dataIndex:"productName"},{title:"\u6a21\u578b\u540d\u79f0",dataIndex:"modelName"},{title:"\u63cf\u8ff0",dataIndex:"description",emptyText:"-"},{title:"\u62a5\u544a\u65f6\u95f4",dataIndex:"createTime"},{title:"",render:(e,t)=>(0,r.jsx)("div",{className:"flex justify-between text-green-2",children:(0,r.jsx)("span",{className:"cursor-pointer",onClick:()=>window.open("/tools/inventoryResult?id=".concat(t.id),"_blank"),children:"\u78b3\u8db3\u8ff9\u7ed3\u679c"})})}],{value:f,loading:p}=(0,i.k)((0,l.Pf)((()=>(0,l.SO)({pgNum:e})),[e]),[e]);return(0,u.useMemo)((()=>{if(!(null===f||void 0===f?void 0:f.records))return[];console.log(JSON.parse(f.records[0].lcaResult));let e=[];f.records.map((t=>{e.push({id:t.id,createTime:t.createTime,loadNumber:t.loadNumber,productName:t.product.name,modelName:t.model.modelName,description:t.model.description})})),s(e)}),[f]),(0,r.jsxs)(o.m,{className:"text-black flex flex-col justify-between flex-1",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-2xl font-semibold mt-8",children:"\u4ea7\u54c1\u78b3\u8db3\u8ff9\u5b9e\u666f\u6e05\u5355\u7ba1\u7406"}),(0,r.jsx)("div",{className:"bg-white p-5 rounded-2xl text-base mt-5 leading-[1.625rem]",children:(0,r.jsx)(c.i,{columns:d,cellClassName:(e,t,n)=>n%2===0?"bg-gray-16 ".concat(0===t&&"rounded-l-lg"," ").concat(t===d.length-1&&"rounded-r-lg"):"",data:n,loading:p,className:"",headerStyle:{background:"#fff"}})})]}),(0,r.jsx)(a.t,{className:"my-8",onChange:e=>{t(e)},total:(null===f||void 0===f?void 0:f.total)?f.total:0,pgSize:10,pgNum:e})]})}},6171:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(677),o=n(959);function u(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var u=(0,o.useRef)(0),c=function(){var e=(0,o.useRef)(!1),t=(0,o.useCallback)((function(){return e.current}),[]);return(0,o.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t}(),a=(0,o.useState)(n),i=a[0],l=a[1],s=(0,o.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o=++u.current;return i.loading||l((function(e){return(0,r.pi)((0,r.pi)({},e),{loading:!0})})),e.apply(void 0,t).then((function(e){return c()&&o===u.current&&l({value:e,loading:!1}),e}),(function(e){return c()&&o===u.current&&l({error:e,loading:!1}),e}))}),t);return[i,s]}},9592:function(e,t,n){"use strict";var r=n(959),o=function(e,t){return"boolean"===typeof t?t:!e};t.Z=function(e){return(0,r.useReducer)(o,e)}},677:function(e,t,n){"use strict";n.d(t,{ZT:function(){return o},pi:function(){return u}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)};Object.create;Object.create}},function(e){e.O(0,[713,769,307,574,570,960,774,888,179],(function(){return t=404,e(e.s=t);var t}));var t=e.O();_N_E=t}]);