(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t)}return o}t.Z=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},5202:function(){var e;(e=function(){"use strict";function e(e){var t=!0,n=!1,r=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList}function a(e){!e.classList.contains("focus-visible")&&(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function c(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(e){(!e.target.nodeName||"html"!==e.target.nodeName.toLowerCase())&&(t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",function(n){!n.metaKey&&!n.altKey&&!n.ctrlKey&&(i(e.activeElement)&&a(e.activeElement),t=!0)},!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",function(e){"hidden"===document.visibilityState&&(n&&(t=!0),c())},!0),c(),e.addEventListener("focus",function(e){var n,r,s;i(e.target)&&(t||(r=(n=e.target).type,"INPUT"===(s=n.tagName)&&o[r]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&a(e.target)},!0),e.addEventListener("blur",function(e){if(i(e.target)){var t;(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(r),r=window.setTimeout(function(){n=!1},100),t=e.target,!t.hasAttribute("data-focus-visible-added")||(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)})()},3837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4344)}])},8461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,o=n(4941).Z,i=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,s,c=e.src,A=e.sizes,x=e.unoptimized,w=void 0!==x&&x,j=e.priority,E=void 0!==j&&j,C=e.loading,L=e.className,O=e.quality,N=e.width,S=e.height,z=e.fill,_=e.style,M=e.onLoadingComplete,R=e.placeholder,I=void 0===R?"empty":R,k=e.blurDataURL,P=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoadingComplete","placeholder","blurDataURL"]),Z=u.useContext(p.ImageConfigContext),T=u.useMemo(function(){var e=v||Z||m.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[Z]),D=y;if("loader"in P){if(P.loader){var B=P.loader;D=function(e){e.config;var t=l(e,["config"]);return B(t)}}delete P.loader}var Q="",U=g(N),F=g(S);if(function(e){var t;return"object"==typeof e&&(h(e)||void 0!==e.src)}(c)){var W=h(c)?c.default:c;if(!W.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(!W.height||!W.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)));if(t=W.blurWidth,n=W.blurHeight,k=k||W.blurDataURL,Q=W.src,!z){if(U||F){if(U&&!F){var H=U/W.width;F=Math.round(W.height*H)}else if(!U&&F){var q=F/W.height;U=Math.round(W.width*q)}}else U=W.width,F=W.height}}c="string"==typeof c?c:Q;var G=!E&&("lazy"===C||void 0===C);(c.startsWith("data:")||c.startsWith("blob:"))&&(w=!0,G=!1),T.unoptimized&&(w=!0);var K=o(u.useState(!1),2),J=K[0],Y=K[1],V=o(u.useState(!1),2),X=V[0],$=V[1],ee=g(O),et=Object.assign(z?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},X?{}:{color:"transparent"},_),en="blur"===I&&k&&!J?{backgroundSize:et.objectFit||"cover",backgroundPosition:et.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(f.getImageBlurSvg({widthInt:U,heightInt:F,blurWidth:t,blurHeight:n,blurDataURL:k}),'")')}:{},er=function(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.width,a=e.quality,s=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var l=function(e,t,n){var r=e.deviceSizes,o=e.allSizes;if(n){for(var a=/(^|\s)(1?\d?\d)vw/g,s=[];c=a.exec(n);c)s.push(parseInt(c[2]));if(s.length){var c,l,u=.01*(l=Math).min.apply(l,i(s));return{widths:o.filter(function(e){return e>=r[0]*u}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:i(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,s),u=l.widths,d=l.kind,f=u.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:u.map(function(e,r){return"".concat(c({config:t,src:n,quality:a,width:e})," ").concat("w"===d?e:r+1).concat(d)}).join(", "),src:c({config:t,src:n,quality:a,width:u[f]})}}({config:T,src:c,unoptimized:w,width:U,quality:ee,sizes:A,loader:D}),eo=c,ei="imagesizes";ei="imageSizes";var ea=(r(s={},"imageSrcSet",er.srcSet),r(s,ei,er.sizes),r(s,"crossOrigin",P.crossOrigin),s),es=u.useRef(M);u.useEffect(function(){es.current=M},[M]);var ec=a({isLazy:G,imgAttributes:er,heightInt:F,widthInt:U,qualityInt:ee,className:L,imgStyle:et,blurStyle:en,loading:C,config:T,fill:z,unoptimized:w,placeholder:I,loader:D,srcString:eo,onLoadingCompleteRef:es,setBlurComplete:Y,setShowAltText:$},P);return u.default.createElement(u.default.Fragment,null,u.default.createElement(b,Object.assign({},ec)),E?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src},ea))):null)};var a=n(6495).Z,s=n(2648).Z,c=n(1598).Z,l=n(7273).Z,u=c(n(7294)),d=s(n(5443)),f=n(2730),m=n(9309),p=n(9977);n(3794);var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function A(e,t,n,r,o){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){e.parentNode&&("blur"===n&&o(!0),(null==r?void 0:r.current)&&r.current(e))}))}var b=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,o=(e.qualityInt,e.className),i=e.imgStyle,s=e.blurStyle,c=e.isLazy,d=e.fill,f=e.placeholder,m=e.loading,p=e.srcString,v=(e.config,e.unoptimized,e.loader,e.onLoadingCompleteRef),h=e.setBlurComplete,g=e.setShowAltText,b=e.onLoad,y=e.onError,x=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=c?"lazy":m,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},x,t,{width:r,height:n,decoding:"async","data-nimg":"future".concat(d?"-fill":""),className:o,loading:m,style:a({},i,s),ref:u.useCallback(function(e){e&&(y&&(e.src=e.src),e.complete&&A(e,p,f,v,h))},[p,f,v,h,y,]),onLoad:function(e){A(e.currentTarget,p,f,v,h),b&&b(e)},onError:function(e){g(!0),"blur"===f&&h(!0),y&&y(e)}})))};function y(e){var t=e.config,n=e.src,r=e.width,o=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1210:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,i=n(7273).Z,a=o(n(7294)),s=n(6273),c=n(2725),l=n(3462),u=n(1018),d=n(7190),f=n(1210),m=n(8684),p={};function v(e,t,n,r){if(e&&s.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var o=r&&void 0!==r.locale?r.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}}var h=a.default.forwardRef(function(e,t){var n,o,h=e.href,g=e.as,A=e.children,b=e.prefetch,y=e.passHref,x=e.replace,w=e.shallow,j=e.scroll,E=e.locale,C=e.onClick,L=e.onMouseEnter,O=e.onTouchStart,N=e.legacyBehavior,S=void 0===N?!0!==Boolean(!0):N,z=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=A,S&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var _=!1!==b,M=a.default.useContext(l.RouterContext),R=a.default.useContext(u.AppRouterContext);R&&(M=R);var I=a.default.useMemo(function(){var e=r(s.resolveHref(M,h,!0),2),t=e[0],n=e[1];return{href:t,as:g?s.resolveHref(M,g):n||t}},[M,h,g]),k=I.href,P=I.as,Z=a.default.useRef(k),T=a.default.useRef(P);S&&(o=a.default.Children.only(n));var D=S?o&&"object"==typeof o&&o.ref:t,B=r(d.useIntersection({rootMargin:"200px"}),3),Q=B[0],U=B[1],F=B[2],W=a.default.useCallback(function(e){(T.current!==P||Z.current!==k)&&(F(),T.current=P,Z.current=k),Q(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[P,D,k,F,Q]);a.default.useEffect(function(){var e=U&&_&&s.isLocalURL(k),t=void 0!==E?E:M&&M.locale,n=p[k+"%"+P+(t?"%"+t:"")];e&&!n&&v(M,k,P,{locale:t})},[P,k,U,E,_,M]);var H={ref:W,onClick:function(e){S||"function"!=typeof C||C(e),S&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,l,u,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(m=(f=e).currentTarget.target)||"_self"===m)&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey&&(!f.nativeEvent||2!==f.nativeEvent.which)&&s.isLocalURL(n)){e.preventDefault();var f,m,p=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:c}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!d})};u?a.default.startTransition(p):p()}}(e,M,k,P,x,w,j,E,Boolean(R),_)},onMouseEnter:function(e){S||"function"!=typeof L||L(e),S&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!_&&R)&&s.isLocalURL(k)&&v(M,k,P,{priority:!0})},onTouchStart:function(e){S||"function"!=typeof O||O(e),S&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!_&&R)&&s.isLocalURL(k)&&v(M,k,P,{priority:!0})}};if(!S||y||"a"===o.type&&!("href"in o.props)){var q=void 0!==E?E:M&&M.locale,G=M&&M.isLocaleDomain&&f.getDomainLocale(P,q,M.locales,M.domainLocales);H.href=G||m.addBasePath(c.addLocale(P,q,M&&M.defaultLocale))}return S?a.default.cloneElement(o,H):a.default.createElement("a",Object.assign({},z,H),n)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!a,u=r(o.useState(!1),2),d=u[0],f=u[1],m=r(o.useState(null),2),p=m[0],v=m[1];return o.useEffect(function(){if(a){if(!l&&!d&&p&&p.tagName){var e,r,o,u,m,v,h;return r=function(e){return e&&f(e)},m=(u=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=s.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},c.push(n),s.set(n,t),t}(o={root:null==t?void 0:t.current,rootMargin:n})).id,v=u.observer,(h=u.elements).set(p,r),v.observe(p),function(){if(h.delete(p),v.unobserve(p),0===h.size){v.disconnect(),s.delete(m);var e=c.findIndex(function(e){return e.root===m.root&&e.margin===m.margin});e>-1&&c.splice(e,1)}}}}else if(!d){var g=i.requestIdleCallback(function(){return f(!0)});return function(){return i.cancelIdleCallback(g)}}},[p,l,n,t,d]),[v,d,o.useCallback(function(){f(!1)},[])]};var o=n(7294),i=n(9311),a="function"==typeof IntersectionObserver,s=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var s=r.default.createContext(null);t.TemplateContext=s},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,n=e.heightInt,r=e.blurWidth,o=e.blurHeight,i=e.blurDataURL,a=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r||t," ").concat(o||n,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(a,"%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}},956:function(e,t,n){"use strict";n.d(t,{W:function(){return d}});var r=n(1799),o=n(9396),i=n(9534),a=n(5893),s=n(7294),c=n(6010),l=(0,s.forwardRef)(function(e,t){var n=e.className,s=e.children,l=(0,i.Z)(e,["className","children"]);return(0,a.jsx)("div",(0,o.Z)((0,r.Z)({ref:t,className:(0,c.Z)("sm:px-8",n)},l),{children:(0,a.jsx)("div",{className:"mx-auto max-w-7xl lg:px-8",children:s})}))}),u=(0,s.forwardRef)(function(e,t){var n=e.className,s=e.children,l=(0,i.Z)(e,["className","children"]);return(0,a.jsx)("div",(0,o.Z)((0,r.Z)({ref:t,className:(0,c.Z)("relative px-4 sm:px-8 lg:px-12",n)},l),{children:(0,a.jsx)("div",{className:"mx-auto max-w-2xl lg:max-w-5xl",children:s})}))}),d=(0,s.forwardRef)(function(e,t){var n=e.children,s=(0,i.Z)(e,["children"]);return(0,a.jsx)(l,(0,o.Z)((0,r.Z)({ref:t},s),{children:(0,a.jsx)(u,{children:n})}))});d.Outer=l,d.Inner=u},4344:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(1799),o=n(5893),i=n(7294),a=n(1664),s=n.n(a),c=n(956);function l(e){var t=e.href,n=e.children;return(0,o.jsx)(s(),{href:t,className:"transition hover:text-teal-500 dark:hover:text-teal-400",children:n})}function u(){return(0,o.jsx)("footer",{className:"mt-32",children:(0,o.jsx)(c.W.Outer,{children:(0,o.jsx)("div",{className:"border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40",children:(0,o.jsx)(c.W.Inner,{children:(0,o.jsxs)("div",{className:"flex flex-col items-center justify-between gap-6 sm:flex-row",children:[(0,o.jsxs)("div",{className:"flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200",children:[(0,o.jsx)(l,{href:"/#top",children:"Ja"}),(0,o.jsx)(l,{href:"/#content",children:"Ja Nonssens Op Doek"}),(0,o.jsx)(l,{href:"/#bottom",children:"Contact"})]}),(0,o.jsxs)("p",{className:"text-sm text-zinc-400 dark:text-zinc-500",children:["\xa9 ",new Date().getFullYear()," Jo Janssens. Alle rechten gereserveerd - Made by ",(0,o.jsx)("a",{href:"https://github.com/AlgoQ",className:"underline text-slate-800",children:"AlgoQ"})]})]})})})})})}var d=n(9396),f=n(9534),m=n(1608),p=n.n(m),v=n(1163),h=n(6010),g={src:"/_next/static/media/avatar.acb1c000.jpg",height:2015,width:2008,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIROn//EABoQAAIDAQEAAAAAAAAAAAAAAAIDAQQRAFH/2gAIAQEAAT8AQCQpOsmwiaWyMbkD5Gd//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPwCt66f/xAAWEQEBAQAAAAAAAAAAAAAAAAARAQD/2gAIAQMBAT8AJAhv/9k=",blurWidth:8,blurHeight:8};function A(e,t,n){return Math.min(Math.max(e,Math.min(t,n)),Math.max(t,n))}function b(e){var t=e.className,n=(0,f.Z)(e,["className"]);return(0,o.jsx)("div",(0,r.Z)({className:(0,h.Z)(t,"h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10")},n))}function y(e){var t=e.large,n=void 0!==t&&t,i=e.className,a=(0,f.Z)(e,["large","className"]);return(0,o.jsx)(s(),(0,d.Z)((0,r.Z)({href:"/","aria-label":"Home",className:(0,h.Z)(i,"pointer-events-auto")},a),{children:(0,o.jsx)(p(),{src:g,alt:"",sizes:n?"4rem":"2.25rem",className:(0,h.Z)("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",n?"h-16 w-16":"h-9 w-9"),priority:!0})}))}function x(){var e="/"===(0,v.useRouter)().pathname,t=(0,i.useRef)(),n=(0,i.useRef)(),r=(0,i.useRef)(!0);return(0,i.useEffect)(function(){var o,i,a=function(e,t){document.documentElement.style.setProperty(e,t)},s=function(e){document.documentElement.style.removeProperty(e)},c=function(){var e=t.current.getBoundingClientRect(),n=e.top,o=e.height,i=A(window.scrollY,0,document.body.scrollHeight-window.innerHeight);if(r.current&&a("--header-position","sticky"),a("--content-offset","".concat(d,"px")),r.current||i<d)a("--header-height","".concat(d+o,"px")),a("--header-mb","".concat(-d,"px"));else if(n+o<-f){var c=Math.max(o,i-f);a("--header-height","".concat(c,"px")),a("--header-mb","".concat(o-c,"px"))}else 0===n&&(a("--header-height","".concat(i+o,"px")),a("--header-mb","".concat(-i,"px")));0===n&&i>0&&i>=d?(a("--header-inner-position","fixed"),s("--header-top"),s("--avatar-top")):(s("--header-inner-position"),a("--header-top","0px"),a("--avatar-top","0px"))},l=function(){if(e){var t=36/64,n=2/16,r=d-window.scrollY,o=r*(1-t)/d+t;o=A(o,1,t);var i=r*(0-n)/d+n;i=A(i,0,n),a("--avatar-image-transform","translate3d(".concat(i,"rem, 0, 0) scale(").concat(o,")"));var s=1/(t/o),c=(-n+i)*s;a("--avatar-border-transform","translate3d(".concat(c,"rem, 0, 0) scale(").concat(s,")")),a("--avatar-border-opacity",o===t?1:0)}},u=function(){c(),l(),r.current=!1},d=null!==(i=null===(o=n.current)||void 0===o?void 0:o.offsetTop)&&void 0!==i?i:0,f=64;return u(),window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),function(){window.removeEventListener("scroll",u,{passive:!0}),window.removeEventListener("resize",u)}},[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("header",{className:"pointer-events-none relative z-50 flex flex-col",style:{height:"var(--header-height)",marginBottom:"var(--header-mb)"},children:[e&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{ref:n,className:"order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"}),(0,o.jsx)(c.W,{className:"top-0 order-last -mb-3 pt-3",style:{position:"var(--header-position)"},children:(0,o.jsx)("div",{className:"top-[var(--avatar-top,theme(spacing.3))] w-full",style:{position:"var(--header-inner-position)"},children:(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)(b,{className:"absolute left-0 top-3 origin-left transition-opacity",style:{opacity:"var(--avatar-border-opacity, 0)",transform:"var(--avatar-border-transform)"}}),(0,o.jsx)(y,{large:!0,className:"block h-16 w-16 origin-left",style:{transform:"var(--avatar-image-transform)"}})]})})})]}),(0,o.jsx)("div",{ref:t,className:"top-0 z-10 h-16 pt-6",style:{position:"var(--header-position)"},children:(0,o.jsx)(c.W,{className:"top-[var(--header-top,theme(spacing.6))] w-full",style:{position:"var(--header-inner-position)"},children:(0,o.jsxs)("div",{className:"relative flex gap-4",children:[(0,o.jsx)("div",{className:"flex flex-1",children:!e&&(0,o.jsx)(b,{children:(0,o.jsx)(y,{})})}),(0,o.jsx)("div",{className:"flex justify-end md:flex-1"})]})})})]}),e&&(0,o.jsx)("div",{style:{height:"var(--content-offset)"}})]})}function w(e){var t,n,a=e.Component,s=e.pageProps,c=(t=e.router.pathname,n=(0,i.useRef)(),(0,i.useEffect)(function(){n.current=t},[t]),n.current);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"fixed inset-0 flex justify-center sm:px-8",children:(0,o.jsx)("div",{className:"flex w-full max-w-7xl lg:px-8",children:(0,o.jsx)("div",{className:"w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"})})}),(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)(x,{}),(0,o.jsx)("main",{children:(0,o.jsx)(a,(0,r.Z)({previousPathname:c},s))}),(0,o.jsx)(u,{})]})]})}n(4316),n(5202)},4316:function(){},1608:function(e,t,n){e.exports=n(8461)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}n.d(t,{Z:function(){return o}})},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(3837),t(387)}),_N_E=e.O()}]);