(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[641],{7741:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/carbon/tag",function(){return n(6575)}])},5768:function(e,t,n){"use strict";n.d(t,{n:function(){return l}});var a=n(3342);n(9685);var r=n(8591),c=n.n(r),i=n(9321);function l(e){let{qrText:t,className:n,qrcodeDisable:r,data:l,orgName:o,name:d="Certified"}=e;return console.log("data",l),(0,a.jsx)("div",{className:c()("",n),children:(0,a.jsx)("div",{className:"p-1 border-[4px] border-green-2 rounded-[2.25rem]",children:(0,a.jsxs)("div",{className:c()("py-2 px-6 rounded-[1.90rem] border-[1.75px] border-green-2 flex justify-center items-center mo:px-3"),children:[(0,a.jsxs)("div",{className:"border-r-[3px] border-green-4 pr-5 mr-5 flex flex-col justify-between h-full",children:[(0,a.jsx)("img",{className:"mb-2",src:"/carbon3_name.svg",alt:""}),(0,a.jsx)("img",{className:"w-[6.875rem]",src:"/earth_1.png",alt:""})]}),(0,a.jsxs)("div",{className:"w-[7.125rem] flex flex-col items-center",children:[(0,a.jsx)("p",{className:"text-[0.6875rem] mmd:text text-center mb-2 leading-[0.945rem] font-semibold mo:leading-[0.865rem]",children:t||"Product Carbon Footprint ".concat(d," ")}),(0,a.jsx)(i.ZP,{style:{width:"100%",height:"100%"},value:l})]})]})})})}},2821:function(e,t,n){"use strict";n.d(t,{Cd:function(){return l},Ni:function(){return c},gI:function(){return i}});var a=n(1645),r=n(8172);async function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=await r.default.get((0,a.uJ)("/api/sbt/token/list/?pageNum=".concat(e,"&pageSize=999")),(0,a.aH)());return(0,a.Yu)(t)}async function i(e){let t=await r.default.get("https://api-v2.gtech.world/api/sbt/token/uuid/".concat(e));return(0,a.Yu)(t)}async function l(e){let t=await r.default.get("https://api-v2.gtech.world/api/sbt/token/nft/".concat(e));return(0,a.Yu)(t)}},1645:function(e,t,n){"use strict";n.d(t,{Yu:function(){return o},aH:function(){return l},pd:function(){return d},uJ:function(){return i}});var a=n(3958),r=n(8172),c=n(3140);function i(e){return"".concat(c.Sg).concat(e)}function l(){let e=(0,a.is)();return e?{headers:{Authorization:"Bearer ".concat(e.loginToken)}}:{}}function o(e){var t;let n=e.data;if(!n||1e5!==n.code)throw n.message;return null===(t=e.data)||void 0===t?void 0:t.data}async function d(e){let t=await r.default.get(i("/api/verifyRecord/list/?pageNum=".concat(e,"&pageSize=10")),l());return o(t)}},6575:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(3342),r=n(4367),c=n(5768),i=n(2821),l=n(4092),o=n(8245),d=n.n(o),s=n(9685),u=n(8005);function f(e){let{title:t,icon:n,qrcodeDisable:r,by:i,id:l,link:o,qrCode:s,orgName:u,name:f}=e.data;return(0,a.jsxs)("div",{className:"flex flex-col justify-between p-5 mb-5 text-base bg-white rounded-lg mo:w-full mo:mr-0",children:[(0,a.jsx)(c.n,{qrcodeDisable:r,data:s,orgName:u,name:f}),(0,a.jsxs)("div",{className:"flex flex-col mt-5 ",children:[(0,a.jsxs)("h3",{className:"text-xl font-semibold",children:["完成[",t,"]产品碳足迹测算"]}),(0,a.jsx)("span",{children:i}),(0,a.jsxs)("span",{children:["标签ID : ",l]})]}),(0,a.jsx)("div",{className:"flex flex-col text-blue-0 underline mt-2.5 font-semibold",children:o.map((e,t)=>(0,a.jsx)(d(),{target:e.target,className:"mt-2.5",href:e.href,children:e.text},"link".concat(t)))})]})}var b=function(){let[e,t]=(0,s.useState)(),[n,c]=(0,s.useState)(""),o=async()=>{let e=await (0,i.Ni)();e.records=((null==e?void 0:e.records)||[]).map(e=>{let{loadName:t,proofTime:r,tokenId:c,tokenUrl:i,orgName:o,orgType:d,uuid:s,verifyUserName:f}=e,b="aicp"!==d?"Certified":"Verified";return{title:t,icon:(0,a.jsx)(l.Z,{className:"w-[2.75rem]"}),by:"".concat((0,u.Ux)(r,"YYYY年MM月DD日"),"签发 by ").concat(o),id:s,qrcodeDisable:!1,name:b,link:[{text:"标签信息",href:"/car?vin=".concat(s)},{text:"在区块链浏览器查看",target:"_blank",href:"/blockchain?tokenId=".concat(c,"&name=").concat(b)}],tokenId:c,orgName:o,qrCode:"".concat(n||"https://aicp.gtech.world","/car?vin=").concat(s)}}),t(e)};return(0,s.useEffect)(()=>{var e,t;o(),c(null===(t=window)||void 0===t?void 0:null===(e=t.location)||void 0===e?void 0:e.origin)},[]),console.log("current",e),(0,a.jsx)(r.N,{className:"h-full bg-gray-16",children:(0,a.jsx)("div",{className:"grid grid-cols-3 gap-5 mo:flex mo:flex-wrap ",children:[{title:"碳足迹谈批次-某某型号车辆LCA示例模型",icon:{key:null,ref:null,props:{className:"w-[2.75rem]"},_owner:null},by:"2023年10月07日签发 by 测试机构",id:"3e49b334-baa5-4b49-ad8d-43a46cd5a6ac-1696646530",qrcodeDisable:!1,name:"Certified",link:[{text:"标签信息",href:"/car?vin=3e49b334-baa5-4b49-ad8d-43a46cd5a6ac-1696646530"},{text:"在区块链浏览器查看",target:"_blank",href:"/blockchain?tokenId=7000000&name=Certified"}],tokenId:7e6,orgName:"测试机构",qrCode:"https://aicp.gtech.world/car?vin=3e49b334-baa5-4b49-ad8d-43a46cd5a6ac-1696646530"},{title:"碳足迹谈批次-某某型号车辆LCA示例模型",icon:{key:null,ref:null,props:{className:"w-[2.75rem]"},_owner:null},by:"2023年09月28日签发 by 测试机构",id:"0938ba31-abcd-455c-a687-e772009e5a26-1695889014",qrcodeDisable:!1,name:"Certified",link:[{text:"标签信息",href:"/car?vin=0938ba31-abcd-455c-a687-e772009e5a26-1695889014"},{text:"在区块链浏览器查看",target:"_blank",href:"/blockchain?tokenId=6000000&name=Certified"}],tokenId:6e6,orgName:"测试机构",qrCode:"https://aicp.gtech.world/car?vin=0938ba31-abcd-455c-a687-e772009e5a26-1695889014"},{title:"3",icon:{key:null,ref:null,props:{className:"w-[2.75rem]"},_owner:null},by:"2023年09月28日签发 by 测试机构",id:"24f96502-9e20-4cb1-a060-111255cb2a69-1695884327",qrcodeDisable:!1,name:"Certified",link:[{text:"标签信息",href:"/car?vin=24f96502-9e20-4cb1-a060-111255cb2a69-1695884327"},{text:"在区块链浏览器查看",target:"_blank",href:"/blockchain?tokenId=5000000&name=Certified"}],tokenId:5e6,orgName:"测试机构",qrCode:"https://aicp.gtech.world/car?vin=24f96502-9e20-4cb1-a060-111255cb2a69-1695884327"},{title:"1",icon:{key:null,ref:null,props:{className:"w-[2.75rem]"},_owner:null},by:"2023年09月26日签发 by 测试机构",id:"b5387977-9615-4528-aa14-7fbcd7b51ba5-1695716134",qrcodeDisable:!1,name:"Certified",link:[{text:"标签信息",href:"/car?vin=b5387977-9615-4528-aa14-7fbcd7b51ba5-1695716134"},{text:"在区块链浏览器查看",target:"_blank",href:"/blockchain?tokenId=4000000&name=Certified"}],tokenId:4e6,orgName:"测试机构",qrCode:"https://aicp.gtech.world/car?vin=b5387977-9615-4528-aa14-7fbcd7b51ba5-1695716134"},{title:"2",icon:{key:null,ref:null,props:{className:"w-[2.75rem]"},_owner:null},by:"2023年09月15日签发 by 测试机构",id:"bd7d4203-60d0-49de-b00e-5946cfe0cd04-1695016205",qrcodeDisable:!1,name:"Certified",link:[{text:"标签信息",href:"/car?vin=bd7d4203-60d0-49de-b00e-5946cfe0cd04-1695016205"},{text:"在区块链浏览器查看",target:"_blank",href:"/blockchain?tokenId=3000000&name=Certified"}],tokenId:3e6,orgName:"测试机构",qrCode:"https://aicp.gtech.world/car?vin=bd7d4203-60d0-49de-b00e-5946cfe0cd04-1695016205"}].map((e,t)=>(0,a.jsx)(f,{data:e},"tagData".concat(t)))})})}},8005:function(e,t,n){"use strict";n.d(t,{EX:function(){return o},Ux:function(){return c},iT:function(){return l},k3:function(){return i}});var a=n(5399),r=n.n(a);let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss",n=r()(e),a=n.format(t);return a},i=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},l=(e,t)=>e.length>t?e:"",o=e=>{let t=null==e?void 0:e.match(/(\d+\.\d{2})/);if(!t||!(t.length>1))return"";{let e=parseFloat(t[1]).toFixed(2);return"".concat(e,"kg")}}}},function(e){e.O(0,[3268,1271,7588,3309,8245,1637,4367,9774,2888,179],function(){return e(e.s=7741)}),_N_E=e.O()}]);