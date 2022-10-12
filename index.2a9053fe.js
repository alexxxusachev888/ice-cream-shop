function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _construct(t,e,n){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&_setPrototypeOf(o,n.prototype),o}).apply(null,arguments)}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var _typeof=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(n,t)},_wrapNativeSuper(t)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}var LiteYTEmbed=function(t){"use strict";_inherits(n,t);var e=_createSuper(n);function n(){return _classCallCheck(this,n),e.apply(this,arguments)}return _createClass(n,[{key:"connectedCallback",value:function(){var t=this;this.videoId=this.getAttribute("videoid");var e=this.querySelector(".lty-playbtn");if(this.playLabel=e&&e.textContent.trim()||this.getAttribute("playlabel")||"Play",this.style.backgroundImage||(this.posterUrl="https://i.ytimg.com/vi/".concat(this.videoId,"/hqdefault.jpg"),n.addPrefetch("preload",this.posterUrl,"image"),this.style.backgroundImage='url("'.concat(this.posterUrl,'")')),e||((e=document.createElement("button")).type="button",e.classList.add("lty-playbtn"),this.append(e)),!e.textContent){var r=document.createElement("span");r.className="lyt-visually-hidden",r.textContent=this.playLabel,e.append(r)}this.addEventListener("pointerover",n.warmConnections,{once:!0}),this.addEventListener("click",(function(e){return t.addIframe()}))}},{key:"addIframe",value:function(){var t=new URLSearchParams(this.getAttribute("params")||[]);t.append("autoplay","1");var e=document.createElement("iframe");e.width=560,e.height=315,e.title=this.playLabel,e.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",e.allowFullscreen=!0,e.src="https://www.youtube-nocookie.com/embed/".concat(encodeURIComponent(this.videoId),"?").concat(t.toString()),this.append(e),this.classList.add("lyt-activated"),this.querySelector("iframe").focus()}}],[{key:"addPrefetch",value:function(t,e,n){var r=document.createElement("link");r.rel=t,r.href=e,n&&(r.as=n),document.head.append(r)}},{key:"warmConnections",value:function(){n.preconnected||(n.addPrefetch("preconnect","https://www.youtube-nocookie.com"),n.addPrefetch("preconnect","https://www.google.com"),n.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),n.addPrefetch("preconnect","https://static.doubleclick.net"),n.preconnected=!0)}}]),n}(_wrapNativeSuper(HTMLElement));customElements.define("lite-youtube",LiteYTEmbed);
//# sourceMappingURL=index.2a9053fe.js.map
