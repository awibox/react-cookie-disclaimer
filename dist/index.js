module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=5)}([function(e,t,o){e.exports=o(3)()},function(e,t){e.exports=require("react")},function(e,t){e.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=0)}([function(e,t,o){"use strict";function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}o.r(t);var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cookie=t}var t,o;return t=e,(o=[{key:"get",value:function(e){var t=this.cookie.match(new RegExp("(?:^|; )".concat(e.replace(/([.$?*|{}()[\]\\/+^])/g,"\\$1"),"=([^;]*)")));return t?decodeURIComponent(t[1]):void 0}},{key:"set",value:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r({path:"/"},o);n.expires&&(n.expires=n.expires.toUTCString());var i="".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t));for(var c in n)if({}.hasOwnProperty.call(n,c)){i+="; ".concat(c);var a=n[c];!0!==a&&(i+="=".concat(a))}this.cookie=i}},{key:"remove",value:function(e){this.set(e,"",{"max-age":-1})}}])&&c(t.prototype,o),e}();function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storage=t}var t,o;return t=e,(o=[{key:"set",value:function(e,t){this.storage.setItem(e,"string"==typeof t?t:JSON.stringify(t))}},{key:"get",value:function(e){var t=this.storage.getItem(e),o=t&&(t.indexOf("}")>t.indexOf("{")||t.indexOf("]")>t.indexOf("["))?JSON.parse(t):t;return t?o:null}},{key:"remove",value:function(e){this.storage.removeItem(e)}},{key:"clear",value:function(){this.storage.clear()}},{key:"setObject",value:function(e,t){this.storage.setItem(e,JSON.stringify(t))}},{key:"getObject",value:function(e){return this.storage.getItem(e)?JSON.parse(this.storage.getItem(e)):{}}}])&&u(t.prototype,o),e}();o.d(t,"Cookie",(function(){return l})),o.d(t,"LocalStorage",(function(){return f})),o.d(t,"SessionStorage",(function(){return p}));var l=new a(document.cookie),f=new s(localStorage),p=new s(sessionStorage)}])},function(e,t,o){"use strict";var n=o(4);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,o,r,i,c){if(c!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return o.PropTypes=o,o}},function(e,t,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),i=o(0),c=o.n(i),a=o(2);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){d(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function f(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var g={position:"fixed",right:0,left:0,boxShadow:"0 0 3px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.24)",zIndex:900},m={textAlign:"center",position:"absolute",transform:"rotate(45deg)",cursor:"pointer",fontFamily:"-webkit-pictograph"},v=function(e){function t(e){var o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(o=!(r=p(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?y(n):r).state={close:!1,hasStorage:a.LocalStorage.get("react-cookie-disclaimer")},o.closeDisclaimer=o.closeDisclaimer.bind(y(o)),o}var o,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),o=t,(n=[{key:"closeDisclaimer",value:function(){this.setState({close:!0}),a.LocalStorage.set("react-cookie-disclaimer",!0),this.props.bottomPosition||(document.body.style.marginTop=0)}},{key:"componentDidMount",value:function(){if(!this.state.hasStorage&&!this.props.bottomPosition){var e=document.getElementById("cookie-disclaimer").offsetHeight;document.body.style.marginTop="".concat(e,"px")}}},{key:"render",value:function(){if(this.state.hasStorage)return null;var e=this.props,t=e.background,o=e.bottomPosition,n=e.children,i=e.className,c=e.color,a=e.cookiePolicyLink,u=e.cookiePolicyText,s=e.cookiePolicyName,f=e.closeIconSize,p=e.closeIconPositionTop,y=e.padding,b=e.text,d=o?{bottom:0}:{top:0},v=l({visibility:this.state.close?"hidden":"visible",backgroundColor:t,padding:"".concat(y,"px"),paddingRight:"".concat(f+y,"px"),color:c},d,{},g),O=l({lineHeight:"".concat(f,"px"),width:"".concat(f,"px"),height:"".concat(f,"px"),fontSize:"".concat(f,"px"),marginTop:p?0:"".concat(f/-2,"px"),right:"".concat(y/2,"px"),top:p?"".concat(y/2,"px"):"50%"},m);return r.a.createElement("div",{id:"cookie-disclaimer",className:i,style:i?{}:v},r.a.createElement("div",{id:"cookie-disclaimer-close",onClick:this.closeDisclaimer,style:O},"+"),n||r.a.createElement("div",{id:"cookie-disclaimer-text"},b,r.a.createElement("span",{id:"cookie-policy",style:{display:a?"inline":"none"}}," ".concat(u," "),r.a.createElement("a",{id:"cookie-policy-link",href:a,style:{color:c}},s))))}}])&&f(o.prototype,n),i&&f(o,i),t}(n.Component);d(v,"propTypes",{background:c.a.string,bottomPosition:c.a.bool,children:c.a.any,className:c.a.string,color:c.a.string,cookiePolicyLink:c.a.string,cookiePolicyName:c.a.string,cookiePolicyText:c.a.string,closeIconSize:c.a.number,closeIconPositionTop:c.a.bool,padding:c.a.number,text:c.a.string}),d(v,"defaultProps",{background:"#fff",bottomPosition:!1,color:"#000",cookiePolicyLink:"",cookiePolicyName:"Cookie Policy",cookiePolicyText:"By continuing to use the service, you agree to our use of cookies as described in the",closeIconSize:28,closeIconPositionTop:!1,padding:20,text:"This website uses cookies to improve service, for analytical and advertising purposes."});var O=v;t.default=O}]);