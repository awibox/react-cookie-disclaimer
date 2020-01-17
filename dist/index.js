module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=0)}([function(e,t,o){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=((n=o(1))&&n.__esModule?n:{default:n}).default;t.default=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(o,r,i):o[r]=e[r]}o.default=e,t&&t.set(e,o);return o}(o(2)),i=(n=o(3))&&n.__esModule?n:{default:n},c=o(6);function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){g(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function f(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var b={position:"fixed",right:0,left:0,boxShadow:"0 0 3px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.24)"},m={textAlign:"center",position:"absolute",transform:"rotate(45deg)",cursor:"pointer",fontFamily:"-webkit-pictograph"},v=function(e){function t(e){var o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(o=!(r=p(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?d(n):r).state={close:!1,hasStorage:c.LocalStorage.get("react-cookie-disclaimer")},o.closeDisclaimer=o.closeDisclaimer.bind(d(o)),o}var o,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),o=t,(n=[{key:"closeDisclaimer",value:function(){this.setState({close:!0}),c.LocalStorage.set("react-cookie-disclaimer",!0),this.props.bottomPosition||(document.body.style.marginTop=0)}},{key:"componentDidMount",value:function(){if(!this.state.hasStorage&&!this.props.bottomPosition){var e=document.getElementById("cookie-disclaimer").offsetHeight;document.body.style.marginTop="".concat(e,"px")}}},{key:"render",value:function(){if(this.state.hasStorage)return null;var e=this.props,t=e.background,o=e.bottomPosition,n=e.children,i=e.color,c=e.cookiePolicyLink,a=e.cookiePolicyText,s=e.cookiePolicyName,l=e.closeIconSize,f=e.closeIconPositionTop,p=e.padding,d=e.text,y=o?{bottom:0}:{top:0},g=u({visibility:this.state.close?"hidden":"visible",backgroundColor:t,padding:"".concat(p,"px"),paddingRight:"".concat(l+p,"px"),color:i},y,{},b),v=u({lineHeight:"".concat(l,"px"),width:"".concat(l,"px"),height:"".concat(l,"px"),fontSize:"".concat(l,"px"),marginTop:f?0:"".concat(l/-2,"px"),right:"".concat(p/2,"px"),top:f?"".concat(p/2,"px"):"50%"},m);return r.default.createElement("div",{id:"cookie-disclaimer",style:g},r.default.createElement("div",{id:"cookie-disclaimer-close",onClick:this.closeDisclaimer,style:v},"+"),n||r.default.createElement("div",{id:"cookie-disclaimer-text"},d,r.default.createElement("span",{id:"cookie-policy",style:{display:c?"inline":"none"}}," ".concat(a," "),r.default.createElement("a",{id:"cookie-policy-link",href:c,style:{color:i}},s))))}}])&&f(o.prototype,n),i&&f(o,i),t}(r.Component);g(v,"propTypes",{background:i.default.string,bottomPosition:i.default.bool,children:i.default.any,color:i.default.string,cookiePolicyLink:i.default.string,cookiePolicyName:i.default.string,cookiePolicyText:i.default.string,closeIconSize:i.default.number,closeIconPositionTop:i.default.bool,padding:i.default.number,text:i.default.string}),g(v,"defaultProps",{background:"#fff",bottomPosition:!1,color:"#000",cookiePolicyLink:"",cookiePolicyName:"Cookie Policy",cookiePolicyText:"By continuing to use the service, you agree to our use of cookies as described in the",closeIconSize:28,closeIconPositionTop:!1,padding:20,text:"This website uses cookies to improve service, for analytical and advertising purposes."});var O=v;t.default=O},function(e,t){e.exports=require("react")},function(e,t,o){e.exports=o(4)()},function(e,t,o){"use strict";var n=o(5);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,o,r,i,c){if(c!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return o.PropTypes=o,o}},function(e,t,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){var o={Cookie:{get:function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},set:function(e,t,o={}){var n=Object.assign({path:"/"},o);n.expires&&(n.expires=n.expires.toUTCString());var r=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var i in n){r+="; "+i;var c=n[i];!0!==c&&(r+="="+c)}document.cookie=r},remove:function(e){this.set(e,"",{"max-age":-1})}},LocalStorage:{set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)?localStorage.getItem(e):null},setObject:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getObject:function(e){return JSON.parse(localStorage.getItem(e))?JSON.parse(localStorage.getItem(e)):{}},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}},SessionStorage:{set:function(e,t){sessionStorage.setItem(e,t)},get:function(e){return sessionStorage.getItem(e)?sessionStorage.getItem(e):null},setObject:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},getObject:function(e){return JSON.parse(sessionStorage.getItem(e))?JSON.parse(sessionStorage.getItem(e)):null},remove:function(e){sessionStorage.removeItem(e)},clear:function(){sessionStorage.clear()}}};e.exports=o}]);