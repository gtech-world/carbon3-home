(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3517],{7077:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1474:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(1322).Z,r=o(6239).Z,l=n(o(959)),a=o(5314),u=o(1309),c=o(4829),f=o(9209),s=o(956),i=o(6283),d=o(7077),p=o(7465);const y=new Set;function h(e,t,o,n){if(a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){const r=t+"%"+o+"%"+("undefined"!==typeof n.locale?n.locale:"locale"in e?e.locale:void 0);if(y.has(r))return;y.add(r)}Promise.resolve(e.prefetch(t,o,n)).catch((e=>{0}))}}function v(e){return"string"===typeof e?e:u.formatUrl(e)}var b=l.default.forwardRef((function(e,t){let o;const{href:n,as:u,children:y,prefetch:b,passHref:g,replace:_,shallow:m,scroll:M,locale:C,onClick:k,onMouseEnter:j,onTouchStart:E,legacyBehavior:O=!1}=e,P=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=y,!O||"string"!==typeof o&&"number"!==typeof o||(o=l.default.createElement("a",null,o));const w=!1!==b,x=l.default.useContext(f.RouterContext),L=l.default.useContext(s.AppRouterContext),R=null!=x?x:L,S=!x;const{href:I,as:T}=l.default.useMemo((()=>{if(!x){const e=v(n);return{href:e,as:u?v(u):e}}const[e,t]=a.resolveHref(x,n,!0);return{href:e,as:u?a.resolveHref(x,u):t||e}}),[x,n,u]),N=l.default.useRef(I),D=l.default.useRef(T);let H;if(O)H=l.default.Children.only(o);else;const K=O?H&&"object"===typeof H&&H.ref:t,[U,B,A]=i.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback((e=>{D.current===T&&N.current===I||(A(),D.current=T,N.current=I),U(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[T,K,I,A,U]);l.default.useEffect((()=>{R&&B&&w&&h(R,I,T,{locale:C})}),[T,I,B,C,w,null==x?void 0:x.locale,R]);const q={ref:Z,onClick(e){O||"function"!==typeof k||k(e),O&&H.props&&"function"===typeof H.props.onClick&&H.props.onClick(e),R&&(e.defaultPrevented||function(e,t,o,n,r,u,c,f,s,i){const{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(o)))return;e.preventDefault();const p=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:u,locale:f,scroll:c}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!i})};s?l.default.startTransition(p):p()}(e,R,I,T,_,m,M,C,S,w))},onMouseEnter(e){O||"function"!==typeof j||j(e),O&&H.props&&"function"===typeof H.props.onMouseEnter&&H.props.onMouseEnter(e),R&&(!w&&S||h(R,I,T,{locale:C,priority:!0,bypassPrefetchedCheck:!0}))},onTouchStart(e){O||"function"!==typeof E||E(e),O&&H.props&&"function"===typeof H.props.onTouchStart&&H.props.onTouchStart(e),R&&(!w&&S||h(R,I,T,{locale:C,priority:!0,bypassPrefetchedCheck:!0}))}};if(!O||g||"a"===H.type&&!("href"in H.props)){const e="undefined"!==typeof C?C:null==x?void 0:x.locale,t=(null==x?void 0:x.isLocaleDomain)&&d.getDomainLocale(T,e,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);q.href=t||p.addBasePath(c.addLocale(T,e,null==x?void 0:x.defaultLocale))}return O?l.default.cloneElement(H,q):l.default.createElement("a",Object.assign({},P,q),o)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6283:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:c}=e;const f=c||!l,[s,i]=n.useState(!1),[d,p]=n.useState(null);n.useEffect((()=>{if(l){if(f||s)return;if(d&&d.tagName){const e=function(e,t,o){const{id:n,observer:r,elements:l}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},o=u.find((e=>e.root===t.root&&e.margin===t.margin));let n;if(o&&(n=a.get(o),n))return n;const r=new Map,l=new IntersectionObserver((e=>{e.forEach((e=>{const t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return n={id:t,observer:l,elements:r},u.push(t),a.set(t,n),n}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),a.delete(n);const e=u.findIndex((e=>e.root===n.root&&e.margin===n.margin));e>-1&&u.splice(e,1)}}}(d,(e=>e&&i(e)),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!s){const e=r.requestIdleCallback((()=>i(!0)));return()=>r.cancelIdleCallback(e)}}),[d,f,o,t,s]);const y=n.useCallback((()=>{i(!1)}),[]);return[p,s,y]};var n=o(959),r=o(5308);const l="function"===typeof IntersectionObserver,a=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3517:function(e,t,o){e.exports=o(1474)}}]);