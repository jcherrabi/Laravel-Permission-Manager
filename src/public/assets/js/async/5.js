(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{50:function(t,n,e){"use strict";e.r(n);var r=e(2),a=e.n(r),o=e(8),i=e(9);function s(t,n,e,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void e(t)}s.done?n(c):Promise.resolve(c).then(r,a)}var c=o.a.get("route"),l=o.a.get("permission"),d={name:"EditPermissionsComponent",components:{Drag:i.Drag,Drop:i.Drop},data:function(){return{permissions:[],error:"",over:!1}},props:{currentRoute:{}},created:function(){this.getAllPermissions()},methods:{getAllPermissions:function(){var t,n=(t=a.a.mark(function t(){var n,e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.get(!0);case 2:n=t.sent,e=n.data,this.permissions=e.data;case 5:case"end":return t.stop()}},t,this)}),function(){var n=this,e=arguments;return new Promise(function(r,a){var o=t.apply(n,e);function i(t){s(o,r,a,i,c,"next",t)}function c(t){s(o,r,a,i,c,"throw",t)}i(void 0)})});return function(){return n.apply(this,arguments)}}(),attachAbility:function(t){var n=this;if(this.over=!1,Array.isArray(t))t.forEach(function(t){-1===n.currentRoute.abilities.findIndex(function(n){return n.name===t.name})&&(n.currentRoute.abilities=n.currentRoute.abilities.concat(t))});else{var e=n.currentRoute.abilities.findIndex(function(n){return n.name===t.name});console.log(e),-1===e&&(n.currentRoute.abilities=n.currentRoute.abilities.concat(t))}c.create(n.currentRoute)},detachAbility:function(t,n){var e={route:this.currentRoute,ability:t};c.detachAbility(e),this.currentRoute.abilities.splice(n,1)},closeModal:function(){this.$parent.showPermissions=!this.$parent.showPermissions}}},f=(e(70),e(7)),p=Object(f.a)(d,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal fade",attrs:{id:"modal-edit-permissions",tabindex:"-1",role:"dialog","aria-labelledby":"modal-popout","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-popout modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"block block-themed block-transparent mb-0"},[e("div",{staticClass:"block-header bg-primary-dark"},[e("h3",{staticClass:"block-title"},[t._v("\n                        "+t._s(t.currentRoute.uri)+" | Permissions\n                    ")]),t._v(" "),e("div",{staticClass:"block-options"},[e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(n){return t.closeModal()}}},[e("i",{staticClass:"si si-close"})])])]),t._v(" "),e("div",{staticClass:"block-content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"program-modal modal-expense"},[e("div",{staticClass:"content"},[e("div",{staticClass:"table-content"},[e("table",[e("tbody",[e("tr",[t._l(t.permissions,function(n,r){return[e("drag",{staticClass:"drag parent",attrs:{tag:"td",transferData:n}},[e("label",{staticClass:"program-container"},[e("span",{staticClass:"name"},[t._v(t._s(r))]),t._v(" "),e("button",{staticClass:"btn btn-sm pull-right",on:{click:function(e){return t.attachAbility(n)}}},[e("i",{staticClass:"fa fa-arrow-right text-primary"})])])]),t._v(" "),t._l(n,function(n){return[e("drag",{staticClass:"drag",attrs:{tag:"td",transferData:n}},[e("label",{staticClass:"program-container ability"},[e("span",{staticClass:"name"},[t._v(t._s(n.title))]),t._v(" "),e("button",{staticClass:"btn btn-sm pull-right",on:{click:function(e){return t.attachAbility(n)}}},[e("i",{staticClass:"fa fa-arrow-right text-primary"})])])])]})]})],2)])])])])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"program-modal modal-expense"},[e("div",{staticClass:"content"},[e("div",{staticClass:"table-content"},[e("drop",{staticClass:"drop drop-section",class:{over:t.over},on:{dragover:function(n){t.over=!0},dragleave:function(n){t.over=!1},drop:t.attachAbility}},[e("table",[e("tbody",[e("tr",[t._l(t.currentRoute.abilities,function(n,r){return[e("td",{staticClass:"parent"},[e("label",{staticClass:"program-container"},[e("span",{staticClass:"name"},[t._v(t._s(n.title))]),t._v(" "),e("button",{staticClass:"btn btn-sm pull-right",on:{click:function(e){return t.detachAbility(n,r)}}},[e("i",{staticClass:"fa fa-remove text-danger"})])])])]})],2)])])])],1)])])])])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("div",{staticClass:"w-100 text-danger"},[t._v(t._s(t.error))]),t._v(" "),e("button",{staticClass:"btn btn-alt-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])},[],!1,null,"69f2fd42",null);n.default=p.exports},57:function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(o).concat([a]).join("\n")}var i;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),n.push(i))}},n}},58:function(t,n,e){var r,a,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var r=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}n[t]=r}return n[t]}}(),c=null,l=0,d=[],f=e(63);function p(t,n){for(var e=0;e<t.length;e++){var r=t[e],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(g(r.parts[i],n))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(g(r.parts[i],n));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(t,n){for(var e=[],r={},a=0;a<t.length;a++){var o=t[a],i=n.base?o[0]+n.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):e.push(r[i]={id:i,parts:[s]})}return e}function m(t,n){var e=s(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),d.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(t.insertAt.before,e);e.insertBefore(n,a)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=d.indexOf(t);n>=0&&d.splice(n,1)}function b(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return e.nc}();r&&(t.attrs.nonce=r)}return v(n,t.attrs),m(t,n),n}function v(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function g(t,n){var e,r,a,o;if(n.transform&&t.css){if(!(o="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=o}if(n.singleton){var i=l++;e=c||(c=b(n)),r=x.bind(null,e,i,!1),a=x.bind(null,e,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(n,t.attrs),m(t,n),n}(n),r=function(t,n,e){var r=e.css,a=e.sourceMap,o=void 0===n.convertToAbsoluteUrls&&a;(n.convertToAbsoluteUrls||o)&&(r=f(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,e,n),a=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(n),r=function(t,n){var e=n.css,r=n.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),a=function(){h(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else a()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=u(t,n);return p(e,n),function(t){for(var r=[],a=0;a<e.length;a++){var i=e[a];(s=o[i.id]).refs--,r.push(s)}t&&p(u(t,n),n);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var y,k=(y=[],function(t,n){return y[t]=n,y.filter(Boolean).join("\n")});function x(t,n,e,r){var a=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=k(n,a);else{var o=document.createTextNode(a),i=t.childNodes;i[n]&&t.removeChild(i[n]),i.length?t.insertBefore(o,i[n]):t.appendChild(o)}}},61:function(t,n,e){var r=e(71);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(58)(r,a);r.locals&&(t.exports=r.locals)},63:function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var a,o=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},70:function(t,n,e){"use strict";var r=e(61);e.n(r).a},71:function(t,n,e){(t.exports=e(57)(!1)).push([t.i,'.program-modal[data-v-69f2fd42] {\n  width: 100%;\n}\n.program-modal .content[data-v-69f2fd42] {\n  position: relative;\n  border-bottom: 0;\n  width: 100%;\n}\n.program-modal .content h3[data-v-69f2fd42] {\n  position: relative;\n  display: block;\n  font-size: 18px;\n  height: 30px;\n}\n.program-modal .content .table-content[data-v-69f2fd42] {\n  height: 350px;\n}\n.program-modal .content table[data-v-69f2fd42] {\n  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  height: 100%;\n}\n.program-modal .content table tbody[data-v-69f2fd42] {\n  width: 100%;\n  height: 100%;\n  display: inline-flex;\n  overflow-y: auto;\n}\n.program-modal .content table tbody[data-v-69f2fd42]::-webkit-scrollbar {\n  width: 8px;\n  position: relative;\n  left: 10px;\n}\n.program-modal .content table tbody[data-v-69f2fd42]::-webkit-scrollbar-thumb {\n  background: #F2F2F3;\n  border-radius: 5px;\n}\n.program-modal .content table tbody tr[data-v-69f2fd42] {\n  display: flex;\n  flex-flow: row wrap;\n  height: 50px;\n  flex: 1;\n}\n.program-modal .content table thead tr[data-v-69f2fd42] {\n  display: flex;\n}\n.program-modal .content table thead tr th[data-v-69f2fd42] {\n  flex: 1;\n}\n.program-modal .content table thead tr th .program-container[data-v-69f2fd42] {\n  margin: 15px 25px;\n}\n.program-modal .content table tr[data-v-69f2fd42] {\n  display: block;\n}\n.program-modal .content table tr td[data-v-69f2fd42], .program-modal .content table tr th[data-v-69f2fd42] {\n  font-size: 13px;\n  display: inline-block;\n  padding: 8px;\n  margin-right: 13px;\n}\n.program-modal .content table tr td .program-container[data-v-69f2fd42], .program-modal .content table tr th .program-container[data-v-69f2fd42] {\n  display: block;\n  position: relative;\n  padding-left: 15px;\n  margin: 15px 36px 15px 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* Hide the browser\'s default checkbox */\n  /* Create a custom checkbox */\n  /* On mouse-over, add a grey background color */\n}\n.program-modal .content table tr td .program-container.ability[data-v-69f2fd42], .program-modal .content table tr th .program-container.ability[data-v-69f2fd42] {\n  margin: 0 60px 0 15px;\n}\n.program-modal .content table tr td .program-container input[data-v-69f2fd42], .program-modal .content table tr th .program-container input[data-v-69f2fd42] {\n  position: absolute;\n  cursor: pointer;\n  opacity: 0;\n  /* When the checkbox is checked, add a blue background */\n  /* Show the checkmark when checked */\n}\n.program-modal .content table tr td .program-container input:checked ~ .checkmark[data-v-69f2fd42], .program-modal .content table tr th .program-container input:checked ~ .checkmark[data-v-69f2fd42] {\n  background-color: #1D86BF;\n}\n.program-modal .content table tr td .program-container input:checked ~ .checkmark[data-v-69f2fd42]:after, .program-modal .content table tr th .program-container input:checked ~ .checkmark[data-v-69f2fd42]:after {\n  display: block;\n}\n.program-modal .content table tr td .program-container .checkmark[data-v-69f2fd42], .program-modal .content table tr th .program-container .checkmark[data-v-69f2fd42] {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 16px;\n  width: 16px;\n  background-color: #F5F6FA;\n  border-radius: 3px;\n  /* Create the checkmark/indicator (hidden when not checked) */\n}\n.program-modal .content table tr td .program-container .checkmark[data-v-69f2fd42]:after, .program-modal .content table tr th .program-container .checkmark[data-v-69f2fd42]:after {\n  content: "";\n  position: absolute;\n  display: none;\n  left: 6px;\n  top: 2px;\n  width: 5px;\n  height: 9px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n.program-modal .content table tr td .program-container:hover input ~ .checkmark[data-v-69f2fd42], .program-modal .content table tr th .program-container:hover input ~ .checkmark[data-v-69f2fd42] {\n  background-color: #ccc;\n}\n.program-modal .content table tr td.parent[data-v-69f2fd42] {\n  font-weight: bold;\n  padding: 0;\n  text-align: left;\n  background-color: #F5F6FA;\n}\n.program-modal .content table tr td.parent .program-container .checkmark[data-v-69f2fd42] {\n  background-color: #fff;\n}\n.program-modal .content table tr td[data-v-69f2fd42] {\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  background: #FFFFFF;\n}\n.drop-section[data-v-69f2fd42] {\n  min-height: 100px;\n  height: 100%;\n}',""])}}]);