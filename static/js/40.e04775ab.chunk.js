"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[40],{7549:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7689),o=n(1087),a="MoviesEditorList_movielink__xaHBx",i="MoviesEditorList_link__gojY1",s=n(184),c=function(e){var t=e.movies,n=(0,r.TH)();return(0,s.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title;return(0,s.jsx)("li",{className:a,children:(0,s.jsx)(o.rU,{className:i,to:"/movies/".concat(t),state:{from:n},children:r})},t)}))})}},4040:function(e,t,n){n.r(t),n.d(t,{default:function(){return ae}});var r=n(5861),o=n(9439),a=n(4687),i=n.n(a),s=n(2791),c=n(1087),u=n(4731),l=n(7549),f="Searchbar_searchbar__vDSrm",d="Searchbar_searchForm__s2gDq",p="Searchbar_SearchForm__button__++TLT",m="Searchbar_SearchForm__button__label__7BGdM",v="Searchbar_SearchForm__input__wDW4k",h=n(184),g=function(e){var t=e.onSubmit,n=(0,s.useState)(""),r=(0,o.Z)(n,2),a=r[0],i=r[1];return(0,h.jsx)("div",{className:f,children:(0,h.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault(),t(a),i("")},children:["         ",(0,h.jsx)("input",{className:v,onChange:function(e){var t=e.target;i(t.value)},name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:a}),(0,h.jsx)("button",{type:"submit",className:p,children:(0,h.jsx)("span",{className:m,children:"Search"})})]})})},y=n(4699),b=n(9142);function E(e,t,n){return(t=(0,b.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C=n(3433);function w(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=w(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var x=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=w(e))&&(r&&(r+=" "),r+=t);return r},I=["theme","type"],L=["delay","staleId"],N=function(e){return"number"==typeof e&&!isNaN(e)},k=function(e){return"string"==typeof e},R=function(e){return"function"==typeof e},S=function(e){return k(e)||R(e)?e:null},j=function(e){return(0,s.isValidElement)(e)||k(e)||R(e)||N(e)};function P(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,a=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,p=o?"".concat(t,"--").concat(a):t,m=o?"".concat(n,"--").concat(a):n,v=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e,t=f.current,n=p.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,C.Z)(n)))};(e=t.classList).add.apply(e,(0,C.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,s.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};d||(c?t():(v.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[d]),s.createElement(s.Fragment,null,r)}}function M(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var D={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,C.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},Z=function(e){var t=e.theme,n=e.type,r=O(e,I);return s.createElement("svg",_({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},B={info:function(e){return s.createElement(Z,_({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(Z,_({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(Z,_({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(Z,_({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function A(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,s.useState)([]),a=(0,o.Z)(r,2),i=a[0],c=a[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,f=function(e){return-1!==i.indexOf(e)},d=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return l.get(e)}}).current;function p(e){var t=e.containerId;!d.props.limit||t&&d.containerId!==t||(d.count-=d.queue.length,d.queue=[])}function m(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function v(){var e=d.queue.shift();g(e.toastContent,e.toastProps,e.staleId)}function h(e,t){var r=t.delay,a=t.staleId,i=O(t,L);if(j(e)&&!function(e){return!u.current||d.props.enableMultiContainer&&e.containerId!==d.props.containerId||l.has(e.toastId)&&null==e.updateId}(i)){var c=i.toastId,f=i.updateId,p=i.data,h=d.props,y=function(){return m(c)},b=null==f;b&&d.count++;var E,T,C=_(_(_({},h),{},{style:h.toastStyle,key:d.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:f,data:p,closeToast:y,isIn:!1,className:S(i.className||h.toastClassName),bodyClassName:S(i.bodyClassName||h.bodyClassName),progressClassName:S(i.progressClassName||h.progressClassName),autoClose:!i.isLoading&&(E=i.autoClose,T=h.autoClose,!1===E||N(E)&&E>0?E:T),deleteToast:function(){var e=M(l.get(c),"removed");l.delete(c),D.emit(4,e);var t=d.queue.length;if(d.count=null==c?d.count-d.displayedToast:d.count-1,d.count<0&&(d.count=0),t>0){var r=null==c?d.props.limit:1;if(1===t||1===r)d.displayedToast++,v();else{var o=r>t?t:r;d.displayedToast=o;for(var a=0;a<o;a++)v()}}else n()}});C.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(R(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):k(o)||N(o)?a=o:r?a=B.spinner():function(e){return e in B}(n)&&(a=B[n](i))),a}(C),R(i.onOpen)&&(C.onOpen=i.onOpen),R(i.onClose)&&(C.onClose=i.onClose),C.closeButton=h.closeButton,!1===i.closeButton||j(i.closeButton)?C.closeButton=i.closeButton:!0===i.closeButton&&(C.closeButton=!j(h.closeButton)||h.closeButton);var w=e;(0,s.isValidElement)(e)&&!k(e.type)?w=(0,s.cloneElement)(e,{closeToast:y,toastProps:C,data:p}):R(e)&&(w=e({closeToast:y,toastProps:C,data:p})),h.limit&&h.limit>0&&d.count>h.limit&&b?d.queue.push({toastContent:w,toastProps:C,staleId:a}):N(r)?setTimeout((function(){g(w,C,a)}),r):g(w,C,a)}}function g(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat((0,C.Z)(e),[r]).filter((function(e){return e!==n}))})),D.emit(4,M(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return d.containerId=e.containerId,D.cancelEmit(3).on(0,h).on(1,(function(e){return u.current&&m(e)})).on(5,p).emit(2,d),function(){l.clear(),D.emit(3,d)}}),[]),(0,s.useEffect)((function(){d.props=e,d.isToastActive=f,d.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:f}}function z(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function F(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function q(e){var t=(0,s.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],f=(0,s.useRef)(null),d=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",C),document.addEventListener("touchmove",O),document.addEventListener("touchend",C);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=z(t.nativeEvent),d.y=F(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?_():T()}}function T(){a(!0)}function _(){a(!1)}function O(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&_(),d.x=z(t),d.y=F(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function C(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",C);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return f.current&&f.current.addEventListener("d",T,{once:!0}),R(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;R(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",T),window.addEventListener("blur",_)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&v&&(w.onMouseEnter=_,w.onMouseLeave=T),y&&(w.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:T,pauseToast:_,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:w}}function H(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Q(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,c=e.className,u=e.style,l=e.controlledProgress,f=e.progress,d=e.rtl,p=e.isIn,m=e.theme,v=i||l&&0===f,h=_(_({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:v?0:1});l&&(h.transform="scaleX(".concat(f,")"));var g=x("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":d}),y=R(c)?c({rtl:d,type:a,defaultClassName:g}):x(g,c);return s.createElement("div",E({role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:y,style:h},l&&f>=1?"onTransitionEnd":"onAnimationEnd",l&&f<1?null:function(){p&&r()}))}var U=function(e){var t=q(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,f=e.type,d=e.hideProgressBar,p=e.closeToast,m=e.transition,v=e.position,h=e.className,g=e.style,y=e.bodyClassName,b=e.bodyStyle,E=e.progressClassName,T=e.progressStyle,O=e.updateId,C=e.role,w=e.progress,I=e.rtl,L=e.toastId,N=e.deleteToast,k=e.isIn,S=e.isLoading,j=e.iconOut,P=e.closeOnClick,M=e.theme,D=x("Toastify__toast","Toastify__toast-theme--".concat(M),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":I},{"Toastify__toast--close-on-click":P}),Z=R(h)?h({rtl:I,position:v,type:f,defaultClassName:D}):x(D,h),B=!!w||!u,A={closeToast:p,type:f,theme:M},z=null;return!1===i||(z=R(i)?i(A):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,A):H(A)),s.createElement(m,{isIn:k,done:N,position:v,preventExitTransition:r,nodeRef:o},s.createElement("div",_(_({id:L,onClick:l,className:Z},a),{},{style:g,ref:o}),s.createElement("div",_(_({},k&&{role:C}),{},{className:R(y)?y({type:f}):x("Toastify__toast-body",y),style:b}),null!=j&&s.createElement("div",{className:x("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},j),s.createElement("div",null,c)),z,s.createElement(Q,_(_({},O&&!B?{key:"pb-".concat(O)}:{}),{},{rtl:I,theme:M,delay:u,isRunning:n,isIn:k,closeToast:p,hide:d,type:f,style:T,className:E,controlledProgress:B,progress:w||0}))))},V=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},Y=P(V("bounce",!0)),G=(P(V("slide",!0)),P(V("zoom")),P(V("flip")),(0,s.forwardRef)((function(e,t){var n=A(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,u=e.rtl,l=e.containerId;function f(e){var t=x("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return R(i)?i({position:e,rtl:u,defaultClassName:t}):x(t,S(i))}return(0,s.useEffect)((function(){t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?_({},c):_(_({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return s.createElement(U,_(_({},o),{},{isIn:a(o.toastId),style:_(_({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));G.displayName="ToastContainer",G.defaultProps={position:"top-right",transition:Y,autoClose:5e3,closeButton:H,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var W,X=new Map,K=[],J=1;function $(){return""+J++}function ee(e){return e&&(k(e.toastId)||N(e.toastId))?e.toastId:$()}function te(e,t){return X.size>0?D.emit(0,e,t):K.push({content:e,options:t}),t.toastId}function ne(e,t){return _(_({},t),{},{type:t&&t.type||e,toastId:ee(t)})}function re(e){return function(t,n){return te(t,ne(e,n))}}function oe(e,t){return te(e,ne("default",t))}oe.loading=function(e,t){return te(e,ne("default",_({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},oe.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=k(o)?oe.loading(o,n):oe.loading(o.render,_(_({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=_(_(_({type:e},s),n),{},{data:o}),i=k(t)?{render:t}:t;return r?oe.update(r,_(_({},a),i)):oe(i.render,_(_({},a),i)),o}oe.dismiss(r)},u=R(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},oe.success=re("success"),oe.info=re("info"),oe.error=re("error"),oe.warning=re("warning"),oe.warn=oe.warning,oe.dark=function(e,t){return te(e,ne("default",_({theme:"dark"},t)))},oe.dismiss=function(e){X.size>0?D.emit(1,e):K=K.filter((function(t){return null!=e&&t.options.toastId!==e}))},oe.clearWaitingQueue=function(e){return void 0===e&&(e={}),D.emit(5,e)},oe.isActive=function(e){var t=!1;return X.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},oe.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=X.get(n||W);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=_(_(_({delay:100},r),t),{},{toastId:t.toastId||e,updateId:$()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,te(i,a)}}),0)},oe.done=function(e){oe.update(e,{progress:1})},oe.onChange=function(e){return D.on(4,e),function(){D.off(4,e)}},oe.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},oe.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},D.on(2,(function(e){W=e.containerId||e,X.set(W,e),K.forEach((function(e){D.emit(0,e.content,e.options)})),K=[]})).on(3,(function(e){X.delete(e.containerId||e),0===X.size&&D.off(0).off(1).off(5)}));var ae=function(){var e=(0,s.useState)([]),t=(0,o.Z)(e,2),n=t[0],a=t[1],f=(0,s.useState)(null),d=(0,o.Z)(f,2),p=d[0],m=d[1],v=(0,s.useState)(!1),b=(0,o.Z)(v,2),E=b[0],T=b[1],_=(0,c.lr)(),O=(0,o.Z)(_,2),C=O[0],w=O[1],x=C.get("query");(0,s.useEffect)((function(){if(x){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.prev=1,e.next=4,(0,u.z1)(x);case 4:t=e.sent,0===(n=t.results).length&&oe.error("There are no movies matching your request"),a(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),m(e.t0.message);case 13:return e.prev=13,T(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]);return(0,h.jsxs)("div",{children:[(0,h.jsx)(g,{onSubmit:function(e){""===e.trim()&&oe.error("Enter a search term"),a([]),w({query:e})}}),(0,h.jsx)(G,{position:"top-right",autoClose:3e3}),E&&(0,h.jsx)(y.Z,{}),n&&(0,h.jsx)(l.Z,{movies:n}),p&&(0,h.jsx)("p",{children:"Something goes wrong"})]})}},4731:function(e,t,n){n.d(t,{Hx:function(){return d},PQ:function(){return f},Y5:function(){return l},wr:function(){return c},yA:function(){return s},z1:function(){return u}});var r=n(5861),o=n(4687),a=n.n(o),i=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9f483b2fd7e828c71a7a1dd0e1411689",language:"en-US"}}),s="https://image.tmdb.org/t/p/w500",c=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie",{params:{page:1,include_adult:!1,query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=40.e04775ab.chunk.js.map