(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2350:function(){},3454:function(e,t,n){"use strict";var i,r;e.exports=(null==(i=n.g.process)?void 0:i.env)&&"object"==typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8755)}])},9578:function(e,t,n){var i=n(3454);n(2350);var r=n(7294),o=r&&"object"==typeof r&&"default"in r?r:{default:r};function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=void 0!==i&&i.env&&!0,c=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,r=t.optimizeForSpeed,o=void 0===r?l:r;u(c(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",u("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var s=document.querySelector('meta[property="csp-nonce"]');this._nonce=s?s.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(l||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(u(c(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return l||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){l||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];u(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&u(c(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return n?r.insertBefore(i,n):r.appendChild(i),i},s(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&s(e,t),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var p=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},h={};function d(e,t){if(!t)return"jsx-"+e;var n=String(t),i=e+n;return h[i]||(h[i]="jsx-"+p(e+"-"+n)),h[i]}function x(e,t){var n=e+t;return h[n]||(h[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[n]}var f=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,r=t.optimizeForSpeed,o=void 0!==r&&r;this._sheet=i||new a({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var o=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=o,this._instancesCounts[i]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],i=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,i=e.id;if(n){var r=d(i,n);return{styleId:r,rules:Array.isArray(t)?t.map(function(e){return x(r,e)}):[x(r,t)]}}return{styleId:d(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=r.createContext(null);m.displayName="StyleSheetContext";var _=o.default.useInsertionEffect||o.default.useLayoutEffect,y=new f;function g(e){var t=y||r.useContext(m);return t&&_(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}g.dynamic=function(e){return e.map(function(e){return d(e[0],e[1])}).join(" ")},t.style=g},6465:function(e,t,n){"use strict";e.exports=n(9578).style},8755:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(5893),r=n(9008),o=n.n(r),s=n(6465),l=n.n(s),c=n(8235);function a(){return(0,i.jsx)(l(),{id:"dff571f0539bc806",dynamic:[c.r.typography.fontFamily],children:"*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0}a{text-decoration:none}body{font-family:".concat(c.r.typography.fontFamily,",sans-serif}img,video{max-width:100%;height:auto}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}html{height:100%}body,#__next{height:100%}#__next{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}#__next>*{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}")})}function u(e){let{Component:t,pageProps:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",rel:"stylesheet"})]}),(0,i.jsx)(a,{}),(0,i.jsx)(t,{...n})]})}},8235:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});let i={breakpoints:{"Breakpoints.xs":0,"Breakpoints.sm":480,"Breakpoints.md":768,"Breakpoints.lg":992,"Breakpoints.xl":1200},colors:{primary:{"050":"#EAE2F8",100:"#CFBCF2",200:"#A081D9",300:"#8662C7",400:"#724BB7",500:"#653CAD",600:"#51279B",700:"#421987",800:"#34126F",900:"#240754"},neutral:{"000":"#FFFFFF","050":"#F7F7F7",100:"#E1E1E1",200:"#CFCFCF",300:"#B1B1B1",400:"#9E9E9E",500:"#7E7E7E",600:"#626262",700:"#515151",800:"#3B3B3B",900:"#222222",999:"#111111"}},typography:{fontFamily:"Open Sans",variants:{display1:{fontSize:{xs:"48px",md:"60px"},letterSpacing:{xs:"-0.04px"},fontWeight:{xs:"900"}},heading1:{fontSize:{xs:"36px",md:"48px"},letterSpacing:{xs:"-0.04px"},fontWeight:{xs:"900"}},heading2:{fontSize:{xs:"24px",md:"36px"},letterSpacing:{xs:"-0.04px"},fontWeight:{xs:"900"}},heading3:{fontSize:{xs:"20px",md:"30px"},letterSpacing:{xs:"-0.04px"},fontWeight:{xs:"bold"}},heading4:{fontSize:{xs:"16px",md:"20px"},letterSpacing:{xs:"-0.04px"},fontWeight:{xs:"bold"}},heading5:{fontSize:{xs:"14px",md:"16px"},letterSpacing:{xs:"-0.04px"},fontWeight:{xs:"bold"}},body1:{fontSize:{xs:"18px"},fontWeight:{xs:"400"}},body2:{fontSize:{xs:"16px"},fontWeight:{xs:"400"}},body3:{fontSize:{xs:"14px"},fontWeight:{xs:"400"}},body4:{fontSize:{xs:"12px"},fontWeight:{xs:"400"}}}},space:{"x1/1":"100%","x1/2":"50%","x1/3":"33.333333%","x2/3":"66.666667%","x1/4":"25%","x2/4":"50%","x3/4":"75%","x1/5":"20%","x2/5":"40%","x3/5":"60%","x4/5":"80%","x1/6":"16.666667%","x2/6":"33.333333%","x3/6":"50%","x4/6":"66.666667%","x5/6":"83.333333%","x1/12":"8.333333%","x2/12":"16.666667%","x3/12":"25%","x4/12":"33.333333%","x5/12":"41.666667%","x6/12":"50%","x7/12":"58.333333%","x8/12":"66.666667%","x9/12":"75%","x10/12":"83.333333%","x11/12":"91.666667%",xcontainer_xs:"0",xcontainer_sm:"640px",xcontainer_md:"768px",xcontainer_lg:"1024px",xcontainer_xl:"1280px",x0:"0",xpx:"1px","x0.5":"2px",x1:"4px","x1.5":"6px",x2:"8px","x2.5":"10px",x3:"12px","x3.5":"14px",x4:"16px",x5:"20px",x6:"24px",x7:"1.75rem",x8:"32px",x9:"36px",x10:"40px",x11:"44px",x12:"48px",x14:"56px",x16:"64px",x20:"80px",x24:"96px",x28:"112px",x32:"128px",x36:"144px",x40:"160px",x44:"176px",x48:"192px",x52:"208px",x56:"224px",x60:"240px",x64:"256px",x72:"288px",x80:"320px",x96:"384px"}}},7663:function(e){!function(){var t={229:function(e){var t,n,i,r=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var c=[],a=!1,u=-1;function p(){a&&i&&(a=!1,i.length?c=i.concat(c):u=-1,c.length&&h())}function h(){if(!a){var e=l(p);a=!0;for(var t=c.length;t;){for(i=c,c=[];++u<t;)i&&i[u].run();u=-1,t=c.length}i=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function x(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||a||l(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=x,r.addListener=x,r.once=x,r.off=x,r.removeListener=x,r.removeAllListeners=x,r.emit=x,r.prependListener=x,r.prependOnceListener=x,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},s=!0;try{t[e](o,o.exports,i),s=!1}finally{s&&delete n[e]}return o.exports}i.ab="//";var r=i(229);e.exports=r}()},9008:function(e,t,n){e.exports=n(2636)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);