!function(e){function o(o){for(var t,r,n=o[0],d=o[1],a=o[2],c=0,u=[];c<n.length;c++)r=n[c],D[r]&&u.push(D[r][0]),D[r]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);for(M&&M(o);u.length;)u.shift()();return I.push.apply(I,a||[]),s()}function s(){for(var e,o=0;o<I.length;o++){for(var s=I[o],t=!0,r=1;r<s.length;r++){var n=s[r];0!==D[n]&&(t=!1)}t&&(I.splice(o--,1),e=A(A.s=s[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,o){!function(e,o){if(!O[e]||!g[e])return;for(var s in g[e]=!1,o)Object.prototype.hasOwnProperty.call(o,s)&&(_[s]=o[s]);0==--y&&0===b&&E()}(e,o),t&&t(e,o)};var r,n=!0,d="5770a6f4562faccc6dc8",a=1e4,c={},u=[],l=[];function i(e){var o={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,s){if(void 0===e)o._selfAccepted=!0;else if("function"==typeof e)o._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)o._acceptedDependencies[e[t]]=s||function(){};else o._acceptedDependencies[e]=s||function(){}},decline:function(e){if(void 0===e)o._selfDeclined=!0;else if("object"==typeof e)for(var s=0;s<e.length;s++)o._declinedDependencies[e[s]]=!0;else o._declinedDependencies[e]=!0},dispose:function(e){o._disposeHandlers.push(e)},addDisposeHandler:function(e){o._disposeHandlers.push(e)},removeDisposeHandler:function(e){var s=o._disposeHandlers.indexOf(e);s>=0&&o._disposeHandlers.splice(s,1)},check:P,apply:x,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var o=p.indexOf(e);o>=0&&p.splice(o,1)},data:c[e]};return r=void 0,o}var p=[],f="idle";function m(e){f=e;for(var o=0;o<p.length;o++)p[o].call(null,e)}var j,_,h,y=0,b=0,v={},g={},O={};function w(e){return+e+""===e?+e:e}function P(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return n=e,m("check"),(o=a,o=o||1e4,new Promise(function(e,s){if("undefined"==typeof XMLHttpRequest)return s(new Error("No browser support"));try{var t=new XMLHttpRequest,r=A.p+"hot/hot-update.json";t.open("GET",r,!0),t.timeout=o,t.send(null)}catch(e){return s(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)s(new Error("Manifest request to "+r+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)s(new Error("Manifest request to "+r+" failed."));else{try{var o=JSON.parse(t.responseText)}catch(e){return void s(e)}e(o)}}})).then(function(e){if(!e)return m("idle"),null;g={},v={},O=e.c,h=e.h,m("prepare");var o=new Promise(function(e,o){j={resolve:e,reject:o}});for(var s in _={},D)C(s);return"prepare"===f&&0===b&&0===y&&E(),o});var o}function C(e){var o;O[e]?(g[e]=!0,y++,(o=document.createElement("script")).charset="utf-8",o.src=A.p+"hot/hot-update.js",document.head.appendChild(o)):v[e]=!0}function E(){m("ready");var e=j;if(j=null,e)if(n)Promise.resolve().then(function(){return x(n)}).then(function(o){e.resolve(o)},function(o){e.reject(o)});else{var o=[];for(var s in _)Object.prototype.hasOwnProperty.call(_,s)&&o.push(w(s));e.resolve(o)}}function x(o){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var s,t,r,n,a;function l(e){for(var o=[e],s={},t=o.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var r=t.pop(),d=r.id,a=r.chain;if((n=k[d])&&!n.hot._selfAccepted){if(n.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:d};if(n.hot._main)return{type:"unaccepted",chain:a,moduleId:d};for(var c=0;c<n.parents.length;c++){var u=n.parents[c],l=k[u];if(l){if(l.hot._declinedDependencies[d])return{type:"declined",chain:a.concat([u]),moduleId:d,parentId:u};-1===o.indexOf(u)&&(l.hot._acceptedDependencies[d]?(s[u]||(s[u]=[]),i(s[u],[d])):(delete s[u],o.push(u),t.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:o,outdatedDependencies:s}}function i(e,o){for(var s=0;s<o.length;s++){var t=o[s];-1===e.indexOf(t)&&e.push(t)}}o=o||{};var p={},j=[],y={},b=function(){console.warn("[HMR] unexpected require("+g.moduleId+") to disposed module")};for(var v in _)if(Object.prototype.hasOwnProperty.call(_,v)){var g;a=w(v);var P=!1,C=!1,E=!1,x="";switch((g=_[v]?l(a):{type:"disposed",moduleId:v}).chain&&(x="\nUpdate propagation: "+g.chain.join(" -> ")),g.type){case"self-declined":o.onDeclined&&o.onDeclined(g),o.ignoreDeclined||(P=new Error("Aborted because of self decline: "+g.moduleId+x));break;case"declined":o.onDeclined&&o.onDeclined(g),o.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+g.moduleId+" in "+g.parentId+x));break;case"unaccepted":o.onUnaccepted&&o.onUnaccepted(g),o.ignoreUnaccepted||(P=new Error("Aborted because "+a+" is not accepted"+x));break;case"accepted":o.onAccepted&&o.onAccepted(g),C=!0;break;case"disposed":o.onDisposed&&o.onDisposed(g),E=!0;break;default:throw new Error("Unexception type "+g.type)}if(P)return m("abort"),Promise.reject(P);if(C)for(a in y[a]=_[a],i(j,g.outdatedModules),g.outdatedDependencies)Object.prototype.hasOwnProperty.call(g.outdatedDependencies,a)&&(p[a]||(p[a]=[]),i(p[a],g.outdatedDependencies[a]));E&&(i(j,[g.moduleId]),y[a]=b)}var I,T=[];for(t=0;t<j.length;t++)a=j[t],k[a]&&k[a].hot._selfAccepted&&T.push({module:a,errorHandler:k[a].hot._selfAccepted});m("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete D[e]}(e)});for(var S,L,M=j.slice();M.length>0;)if(a=M.pop(),n=k[a]){var H={},N=n.hot._disposeHandlers;for(r=0;r<N.length;r++)(s=N[r])(H);for(c[a]=H,n.hot.active=!1,delete k[a],delete p[a],r=0;r<n.children.length;r++){var B=k[n.children[r]];B&&((I=B.parents.indexOf(a))>=0&&B.parents.splice(I,1))}}for(a in p)if(Object.prototype.hasOwnProperty.call(p,a)&&(n=k[a]))for(L=p[a],r=0;r<L.length;r++)S=L[r],(I=n.children.indexOf(S))>=0&&n.children.splice(I,1);for(a in m("apply"),d=h,y)Object.prototype.hasOwnProperty.call(y,a)&&(e[a]=y[a]);var q=null;for(a in p)if(Object.prototype.hasOwnProperty.call(p,a)&&(n=k[a])){L=p[a];var R=[];for(t=0;t<L.length;t++)if(S=L[t],s=n.hot._acceptedDependencies[S]){if(-1!==R.indexOf(s))continue;R.push(s)}for(t=0;t<R.length;t++){s=R[t];try{s(L)}catch(e){o.onErrored&&o.onErrored({type:"accept-errored",moduleId:a,dependencyId:L[t],error:e}),o.ignoreErrored||q||(q=e)}}}for(t=0;t<T.length;t++){var F=T[t];a=F.module,u=[a];try{A(a)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(s){o.onErrored&&o.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:s,originalError:e}),o.ignoreErrored||q||(q=s),q||(q=e)}else o.onErrored&&o.onErrored({type:"self-accept-errored",moduleId:a,error:e}),o.ignoreErrored||q||(q=e)}}return q?(m("fail"),Promise.reject(q)):(m("idle"),new Promise(function(e){e(j)}))}var k={},D={index:0},I=[];function A(o){if(k[o])return k[o].exports;var s=k[o]={i:o,l:!1,exports:{},hot:i(o),parents:(l=u,u=[],l),children:[]};return e[o].call(s.exports,s,s.exports,function(e){var o=k[e];if(!o)return A;var s=function(s){return o.hot.active?(k[s]?-1===k[s].parents.indexOf(e)&&k[s].parents.push(e):(u=[e],r=s),-1===o.children.indexOf(s)&&o.children.push(s)):(console.warn("[HMR] unexpected require("+s+") from disposed module "+e),u=[]),A(s)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(o){A[e]=o}}};for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&"e"!==n&&"t"!==n&&Object.defineProperty(s,n,t(n));return s.e=function(e){return"ready"===f&&m("prepare"),b++,A.e(e).then(o,function(e){throw o(),e});function o(){b--,"prepare"===f&&(v[e]||C(e),0===b&&0===y&&E())}},s.t=function(e,o){return 1&o&&(e=s(e)),A.t(e,-2&o)},s}(o)),s.l=!0,s.exports}A.m=e,A.c=k,A.d=function(e,o,s){A.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:s})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,o){if(1&o&&(e=A(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(A.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)A.d(s,t,function(o){return e[o]}.bind(null,t));return s},A.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(o,"a",o),o},A.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},A.p="/resources/lpf-tool/client/dist/",A.h=function(){return d};var T=window.webpackJsonp=window.webpackJsonp||[],S=T.push.bind(T);T.push=o,T=T.slice();for(var L=0;L<T.length;L++)o(T[L]);var M=S;I.push(["./src/index.js","vendors"]),s()}({"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/App.scss":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/scss/App.scss ***!
  \**********************************************************************************************/
/*! no static exports found */function(e,o,s){(e.exports=s(/*! ../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"",""])},"./src/actions/actionTypes.js":
/*!************************************!*\
  !*** ./src/actions/actionTypes.js ***!
  \************************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.ACTION_FETCH_BOOK_DETAILS="ACTION_FETCH_BOOK_DETAILS",o.ACTION_FETCH_BOOK_CHAPTER_LIST="ACTION_FETCH_BOOK_CHAPTER_LIST",o.ACTION_CHANGE_DISPLAY_PAGE="ACTION_CHANGE_DISPLAY_PAGE"},"./src/actions/changeDispalyPageName.js":
/*!**********************************************!*\
  !*** ./src/actions/changeDispalyPageName.js ***!
  \**********************************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.changeDispalyPageName=function(e){return{type:r.ACTION_CHANGE_DISPLAY_PAGE,data:e}};var t,r=s(/*! ./actionTypes */"./src/actions/actionTypes.js"),n=s(/*! ../services/DataService */"./src/services/DataService.js");(t=n)&&t.__esModule,s(/*! redux */"./node_modules/redux/es/redux.js"),s(/*! ./error */"./src/actions/error.js")},"./src/actions/error.js":
/*!******************************!*\
  !*** ./src/actions/error.js ***!
  \******************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.showError=function(e){return console.error(e),alert(e),{type:t.ACTION_SHOW_ERROR,error:e}};var t=s(/*! ./actionTypes */"./src/actions/actionTypes.js")},"./src/actions/fetchBookChapterList.js":
/*!*********************************************!*\
  !*** ./src/actions/fetchBookChapterList.js ***!
  \*********************************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.fetchBookChapterList=function(e){return function(o){d.default.fetchChaterList(e).then(function(e){o({type:r.ACTION_FETCH_BOOK_CHAPTER_LIST,data:e})}).catch(function(e){o((0,a.showError)(e))})}};var t,r=s(/*! ./actionTypes */"./src/actions/actionTypes.js"),n=s(/*! ../services/DataService */"./src/services/DataService.js"),d=(t=n)&&t.__esModule?t:{default:t},a=(s(/*! redux */"./node_modules/redux/es/redux.js"),s(/*! ./error */"./src/actions/error.js"))},"./src/actions/fetchBookCoverPage.js":
/*!*******************************************!*\
  !*** ./src/actions/fetchBookCoverPage.js ***!
  \*******************************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.fetchBookCoverPage=function(e){return function(o){d.default.fetchCoverPageDetail(e).then(function(e){o({type:r.ACTION_FETCH_BOOK_DETAILS,data:e})}).catch(function(e){o((0,a.showError)(e))})}};var t,r=s(/*! ./actionTypes */"./src/actions/actionTypes.js"),n=s(/*! ../services/DataService */"./src/services/DataService.js"),d=(t=n)&&t.__esModule?t:{default:t},a=(s(/*! redux */"./node_modules/redux/es/redux.js"),s(/*! ./error */"./src/actions/error.js"))},"./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=function(){function e(e,o){for(var s=0;s<o.length;s++){var t=o[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,s,t){return s&&e(o.prototype,s),t&&e(o,t),o}}(),r=s(/*! react */"./node_modules/react/index.js"),n=c(r);s(/*! react-redux */"./node_modules/react-redux/es/index.js");s(/*! ../scss/App.scss */"./src/scss/App.scss");var d=c(s(/*! ./BookCoverPageComponent */"./src/components/BookCoverPageComponent.js")),a=c(s(/*! ./ChapterListComponent */"./src/components/ChapterListComponent.js"));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function o(){return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),function(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,r.Component),t(o,[{key:"render",value:function(){return n.default.createElement("div",null,n.default.createElement(d.default,null),n.default.createElement(a.default,null))}}]),o}();o.default=u},"./src/components/BookCoverPageComponent.js":
/*!**************************************************!*\
  !*** ./src/components/BookCoverPageComponent.js ***!
  \**************************************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t,r=function(){function e(e,o){for(var s=0;s<o.length;s++){var t=o[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,s,t){return s&&e(o.prototype,s),t&&e(o,t),o}}(),n=s(/*! react */"./node_modules/react/index.js"),d=(t=n)&&t.__esModule?t:{default:t},a=s(/*! react-redux */"./node_modules/react-redux/es/index.js"),c=s(/*! ../actions/fetchBookCoverPage */"./src/actions/fetchBookCoverPage.js"),u=s(/*! ../actions/fetchBookChapterList */"./src/actions/fetchBookChapterList.js"),l=s(/*! ../actions/changeDispalyPageName */"./src/actions/changeDispalyPageName.js");var i=function(e){function o(){return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),function(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,n.Component),r(o,[{key:"componentDidMount",value:function(){this.props.dispatchFetchCoverPageAction("1")}},{key:"render",value:function(){var e=this;return"bookCoverPage"!==this.props.displayPage.Name?null:d.default.createElement("div",null,d.default.createElement("h2",null,this.props.bookCoverPage.Title),d.default.createElement("h3",null,this.props.bookCoverPage.Tagline),d.default.createElement("p",null,this.props.bookCoverPage.Intro),d.default.createElement("button",{onClick:function(){e.props.dispatchFetchChapterListAction(e.props.bookCoverPage.ID),e.props.dispatchChangeDisplayPageName({Name:"chapterList"})}},"Get Started"))}}]),o}();o.default=(0,a.connect)(function(e){return{bookCoverPage:e.dataState.bookCoverPage,displayPage:e.dataState.displayPage}},function(e,o){return{dispatchFetchCoverPageAction:function(){e((0,c.fetchBookCoverPage)("1"))},dispatchFetchChapterListAction:function(o){e((0,u.fetchBookChapterList)(o))},dispatchChangeDisplayPageName:function(o){e((0,l.changeDispalyPageName)(o))}}})(i)},"./src/components/ChapterListComponent.js":
/*!************************************************!*\
  !*** ./src/components/ChapterListComponent.js ***!
  \************************************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=function(){function e(e,o){for(var s=0;s<o.length;s++){var t=o[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,s,t){return s&&e(o.prototype,s),t&&e(o,t),o}}(),r=s(/*! react */"./node_modules/react/index.js"),n=c(r),d=s(/*! react-redux */"./node_modules/react-redux/es/index.js"),a=(c(s(/*! react-bootstrap/Card */"./node_modules/react-bootstrap/Card.js")),s(/*! ../actions/changeDispalyPageName */"./src/actions/changeDispalyPageName.js"));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function o(){return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),function(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,r.Component),t(o,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;if(!this.props.bookChapterList.length||"chapterList"!==this.props.displayPage.Name)return null;var o=this.props.bookChapterList.map(function(o,s){return n.default.createElement("div",{key:"checkboxContainer_"+o.ID},n.default.createElement("input",{type:"checkbox",key:o.ID,index:s+1,onChange:function(){e.props.handleChange}}),n.default.createElement("label",{key:"checkboxLabel_"+o.ID,style:{verticalAlign:"bottom"}},o.Title),n.default.createElement("br",null))});return n.default.createElement("div",{style:{clear:"both"}},o,n.default.createElement("button",{onClick:function(){e.props.dispatchChangeDisplayPageName({Name:"bookCoverPage"})}},"Back"),n.default.createElement("button",{style:{marginLeft:"25px"}},"Next"))}}]),o}();o.default=(0,d.connect)(function(e){return{bookChapterList:e.dataState.bookChapterList,displayPage:e.dataState.displayPage}},function(e,o){return{dispatchChangeDisplayPageName:function(o){e((0,a.changeDispalyPageName)(o))}}})(u)},"./src/graphql/fetchBookDetails.graphql":
/*!**********************************************!*\
  !*** ./src/graphql/fetchBookDetails.graphql ***!
  \**********************************************/
/*! no static exports found */function(e,o){e.exports="query($id:ID!){readBookDetails(ID:$id){ID Title Intro Tagline}}"},"./src/graphql/fetchChapters.graphql":
/*!*******************************************!*\
  !*** ./src/graphql/fetchChapters.graphql ***!
  \*******************************************/
/*! no static exports found */function(e,o){e.exports="query($bookID:String!){readChapters(BookID:$bookID){ID Title BookID}}"},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,o,s){"use strict";s(/*! core-js/modules/es6.typed.array-buffer */"./node_modules/core-js/modules/es6.typed.array-buffer.js"),s(/*! core-js/modules/es6.typed.data-view */"./node_modules/core-js/modules/es6.typed.data-view.js"),s(/*! core-js/modules/es6.typed.int8-array */"./node_modules/core-js/modules/es6.typed.int8-array.js"),s(/*! core-js/modules/es6.typed.uint8-array */"./node_modules/core-js/modules/es6.typed.uint8-array.js"),s(/*! core-js/modules/es6.typed.uint8-clamped-array */"./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js"),s(/*! core-js/modules/es6.typed.int16-array */"./node_modules/core-js/modules/es6.typed.int16-array.js"),s(/*! core-js/modules/es6.typed.uint16-array */"./node_modules/core-js/modules/es6.typed.uint16-array.js"),s(/*! core-js/modules/es6.typed.int32-array */"./node_modules/core-js/modules/es6.typed.int32-array.js"),s(/*! core-js/modules/es6.typed.uint32-array */"./node_modules/core-js/modules/es6.typed.uint32-array.js"),s(/*! core-js/modules/es6.typed.float32-array */"./node_modules/core-js/modules/es6.typed.float32-array.js"),s(/*! core-js/modules/es6.typed.float64-array */"./node_modules/core-js/modules/es6.typed.float64-array.js"),s(/*! core-js/modules/es6.map */"./node_modules/core-js/modules/es6.map.js"),s(/*! core-js/modules/es6.set */"./node_modules/core-js/modules/es6.set.js"),s(/*! core-js/modules/es6.weak-map */"./node_modules/core-js/modules/es6.weak-map.js"),s(/*! core-js/modules/es6.weak-set */"./node_modules/core-js/modules/es6.weak-set.js"),s(/*! core-js/modules/es6.reflect.apply */"./node_modules/core-js/modules/es6.reflect.apply.js"),s(/*! core-js/modules/es6.reflect.construct */"./node_modules/core-js/modules/es6.reflect.construct.js"),s(/*! core-js/modules/es6.reflect.define-property */"./node_modules/core-js/modules/es6.reflect.define-property.js"),s(/*! core-js/modules/es6.reflect.delete-property */"./node_modules/core-js/modules/es6.reflect.delete-property.js"),s(/*! core-js/modules/es6.reflect.get */"./node_modules/core-js/modules/es6.reflect.get.js"),s(/*! core-js/modules/es6.reflect.get-own-property-descriptor */"./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js"),s(/*! core-js/modules/es6.reflect.get-prototype-of */"./node_modules/core-js/modules/es6.reflect.get-prototype-of.js"),s(/*! core-js/modules/es6.reflect.has */"./node_modules/core-js/modules/es6.reflect.has.js"),s(/*! core-js/modules/es6.reflect.is-extensible */"./node_modules/core-js/modules/es6.reflect.is-extensible.js"),s(/*! core-js/modules/es6.reflect.own-keys */"./node_modules/core-js/modules/es6.reflect.own-keys.js"),s(/*! core-js/modules/es6.reflect.prevent-extensions */"./node_modules/core-js/modules/es6.reflect.prevent-extensions.js"),s(/*! core-js/modules/es6.reflect.set */"./node_modules/core-js/modules/es6.reflect.set.js"),s(/*! core-js/modules/es6.reflect.set-prototype-of */"./node_modules/core-js/modules/es6.reflect.set-prototype-of.js"),s(/*! core-js/modules/es6.promise */"./node_modules/core-js/modules/es6.promise.js"),s(/*! core-js/modules/es6.symbol */"./node_modules/core-js/modules/es6.symbol.js"),s(/*! core-js/modules/es6.object.freeze */"./node_modules/core-js/modules/es6.object.freeze.js"),s(/*! core-js/modules/es6.object.seal */"./node_modules/core-js/modules/es6.object.seal.js"),s(/*! core-js/modules/es6.object.prevent-extensions */"./node_modules/core-js/modules/es6.object.prevent-extensions.js"),s(/*! core-js/modules/es6.object.is-frozen */"./node_modules/core-js/modules/es6.object.is-frozen.js"),s(/*! core-js/modules/es6.object.is-sealed */"./node_modules/core-js/modules/es6.object.is-sealed.js"),s(/*! core-js/modules/es6.object.is-extensible */"./node_modules/core-js/modules/es6.object.is-extensible.js"),s(/*! core-js/modules/es6.object.get-own-property-descriptor */"./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js"),s(/*! core-js/modules/es6.object.get-prototype-of */"./node_modules/core-js/modules/es6.object.get-prototype-of.js"),s(/*! core-js/modules/es6.object.keys */"./node_modules/core-js/modules/es6.object.keys.js"),s(/*! core-js/modules/es6.object.get-own-property-names */"./node_modules/core-js/modules/es6.object.get-own-property-names.js"),s(/*! core-js/modules/es6.object.assign */"./node_modules/core-js/modules/es6.object.assign.js"),s(/*! core-js/modules/es6.object.is */"./node_modules/core-js/modules/es6.object.is.js"),s(/*! core-js/modules/es6.object.set-prototype-of */"./node_modules/core-js/modules/es6.object.set-prototype-of.js"),s(/*! core-js/modules/es6.function.name */"./node_modules/core-js/modules/es6.function.name.js"),s(/*! core-js/modules/es6.string.raw */"./node_modules/core-js/modules/es6.string.raw.js"),s(/*! core-js/modules/es6.string.from-code-point */"./node_modules/core-js/modules/es6.string.from-code-point.js"),s(/*! core-js/modules/es6.string.code-point-at */"./node_modules/core-js/modules/es6.string.code-point-at.js"),s(/*! core-js/modules/es6.string.repeat */"./node_modules/core-js/modules/es6.string.repeat.js"),s(/*! core-js/modules/es6.string.starts-with */"./node_modules/core-js/modules/es6.string.starts-with.js"),s(/*! core-js/modules/es6.string.ends-with */"./node_modules/core-js/modules/es6.string.ends-with.js"),s(/*! core-js/modules/es6.string.includes */"./node_modules/core-js/modules/es6.string.includes.js"),s(/*! core-js/modules/es6.regexp.flags */"./node_modules/core-js/modules/es6.regexp.flags.js"),s(/*! core-js/modules/es6.regexp.match */"./node_modules/core-js/modules/es6.regexp.match.js"),s(/*! core-js/modules/es6.regexp.replace */"./node_modules/core-js/modules/es6.regexp.replace.js"),s(/*! core-js/modules/es6.regexp.split */"./node_modules/core-js/modules/es6.regexp.split.js"),s(/*! core-js/modules/es6.regexp.search */"./node_modules/core-js/modules/es6.regexp.search.js"),s(/*! core-js/modules/es6.array.from */"./node_modules/core-js/modules/es6.array.from.js"),s(/*! core-js/modules/es6.array.of */"./node_modules/core-js/modules/es6.array.of.js"),s(/*! core-js/modules/es6.array.copy-within */"./node_modules/core-js/modules/es6.array.copy-within.js"),s(/*! core-js/modules/es6.array.find */"./node_modules/core-js/modules/es6.array.find.js"),s(/*! core-js/modules/es6.array.find-index */"./node_modules/core-js/modules/es6.array.find-index.js"),s(/*! core-js/modules/es6.array.fill */"./node_modules/core-js/modules/es6.array.fill.js"),s(/*! core-js/modules/es6.array.iterator */"./node_modules/core-js/modules/es6.array.iterator.js"),s(/*! core-js/modules/es6.number.is-finite */"./node_modules/core-js/modules/es6.number.is-finite.js"),s(/*! core-js/modules/es6.number.is-integer */"./node_modules/core-js/modules/es6.number.is-integer.js"),s(/*! core-js/modules/es6.number.is-safe-integer */"./node_modules/core-js/modules/es6.number.is-safe-integer.js"),s(/*! core-js/modules/es6.number.is-nan */"./node_modules/core-js/modules/es6.number.is-nan.js"),s(/*! core-js/modules/es6.number.epsilon */"./node_modules/core-js/modules/es6.number.epsilon.js"),s(/*! core-js/modules/es6.number.min-safe-integer */"./node_modules/core-js/modules/es6.number.min-safe-integer.js"),s(/*! core-js/modules/es6.number.max-safe-integer */"./node_modules/core-js/modules/es6.number.max-safe-integer.js"),s(/*! core-js/modules/es6.math.acosh */"./node_modules/core-js/modules/es6.math.acosh.js"),s(/*! core-js/modules/es6.math.asinh */"./node_modules/core-js/modules/es6.math.asinh.js"),s(/*! core-js/modules/es6.math.atanh */"./node_modules/core-js/modules/es6.math.atanh.js"),s(/*! core-js/modules/es6.math.cbrt */"./node_modules/core-js/modules/es6.math.cbrt.js"),s(/*! core-js/modules/es6.math.clz32 */"./node_modules/core-js/modules/es6.math.clz32.js"),s(/*! core-js/modules/es6.math.cosh */"./node_modules/core-js/modules/es6.math.cosh.js"),s(/*! core-js/modules/es6.math.expm1 */"./node_modules/core-js/modules/es6.math.expm1.js"),s(/*! core-js/modules/es6.math.fround */"./node_modules/core-js/modules/es6.math.fround.js"),s(/*! core-js/modules/es6.math.hypot */"./node_modules/core-js/modules/es6.math.hypot.js"),s(/*! core-js/modules/es6.math.imul */"./node_modules/core-js/modules/es6.math.imul.js"),s(/*! core-js/modules/es6.math.log1p */"./node_modules/core-js/modules/es6.math.log1p.js"),s(/*! core-js/modules/es6.math.log10 */"./node_modules/core-js/modules/es6.math.log10.js"),s(/*! core-js/modules/es6.math.log2 */"./node_modules/core-js/modules/es6.math.log2.js"),s(/*! core-js/modules/es6.math.sign */"./node_modules/core-js/modules/es6.math.sign.js"),s(/*! core-js/modules/es6.math.sinh */"./node_modules/core-js/modules/es6.math.sinh.js"),s(/*! core-js/modules/es6.math.tanh */"./node_modules/core-js/modules/es6.math.tanh.js"),s(/*! core-js/modules/es6.math.trunc */"./node_modules/core-js/modules/es6.math.trunc.js"),s(/*! core-js/modules/es7.array.includes */"./node_modules/core-js/modules/es7.array.includes.js"),s(/*! core-js/modules/es7.object.values */"./node_modules/core-js/modules/es7.object.values.js"),s(/*! core-js/modules/es7.object.entries */"./node_modules/core-js/modules/es7.object.entries.js"),s(/*! core-js/modules/es7.object.get-own-property-descriptors */"./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js"),s(/*! core-js/modules/es7.string.pad-start */"./node_modules/core-js/modules/es7.string.pad-start.js"),s(/*! core-js/modules/es7.string.pad-end */"./node_modules/core-js/modules/es7.string.pad-end.js"),s(/*! core-js/modules/web.timers */"./node_modules/core-js/modules/web.timers.js"),s(/*! core-js/modules/web.immediate */"./node_modules/core-js/modules/web.immediate.js"),s(/*! core-js/modules/web.dom.iterable */"./node_modules/core-js/modules/web.dom.iterable.js"),s(/*! regenerator-runtime/runtime */"./node_modules/regenerator-runtime/runtime.js");var t=c(s(/*! react */"./node_modules/react/index.js")),r=c(s(/*! react-dom */"./node_modules/react-dom/index.js")),n=c(s(/*! ./components/App */"./src/components/App.js")),d=s(/*! react-redux */"./node_modules/react-redux/es/index.js"),a=s(/*! ./store */"./src/store.js");function c(e){return e&&e.__esModule?e:{default:e}}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),window.addEventListener("load",function(e){r.default.render(t.default.createElement(d.Provider,{store:a.store},t.default.createElement(n.default,null)),document.getElementById("book-container"))})},"./src/reducers/dataState.js":
/*!***********************************!*\
  !*** ./src/reducers/dataState.js ***!
  \***********************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.dataState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,o=arguments[1];switch(o.type){case t.ACTION_FETCH_BOOK_DETAILS:return Object.assign({},e,{bookCoverPage:o.data});case t.ACTION_FETCH_BOOK_CHAPTER_LIST:return Object.assign({},e,{bookChapterList:o.data});case t.ACTION_CHANGE_DISPLAY_PAGE:return Object.assign({},e,{displayPage:o.data});default:return e}};var t=s(/*! ../actions/actionTypes */"./src/actions/actionTypes.js"),r={bookCoverPage:[],bookChapterList:[],displayPage:{Name:"bookCoverPage"}}},"./src/reducers/root.js":
/*!******************************!*\
  !*** ./src/reducers/root.js ***!
  \******************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.root=void 0;var t=s(/*! redux */"./node_modules/redux/es/redux.js"),r=s(/*! ./dataState */"./src/reducers/dataState.js");o.root=(0,t.combineReducers)({dataState:r.dataState})},"./src/scss/App.scss":
/*!***************************!*\
  !*** ./src/scss/App.scss ***!
  \***************************/
/*! no static exports found */function(e,o,s){var t=s(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./App.scss */"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/App.scss");"string"==typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},n=s(/*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(t,r);t.locals&&(e.exports=t.locals),e.hot.accept(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./App.scss */"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/App.scss",function(){var o=s(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./App.scss */"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/App.scss");if("string"==typeof o&&(o=[[e.i,o,""]]),!function(e,o){var s,t=0;for(s in e){if(!o||e[s]!==o[s])return!1;t++}for(s in o)t--;return 0===t}(t.locals,o.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");n(o)}),e.hot.dispose(function(){n()})},"./src/services/AxiosService.js":
/*!**************************************!*\
  !*** ./src/services/AxiosService.js ***!
  \**************************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=function(){function e(e,o){for(var s=0;s<o.length;s++){var t=o[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,s,t){return s&&e(o.prototype,s),t&&e(o,t),o}}(),r=d(s(/*! axios */"./node_modules/axios/index.js")),n=d(s(/*! graphql-query-compress */"./node_modules/graphql-query-compress/lib/graphql-query-compress.browser.js"));function d(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e)}return t(e,null,[{key:"getInstance",value:function(e,o){var s={query:(0,n.default)(e),variables:Object.assign({},{versionInput:{Mode:"LIVE",Status:["PUBLISHED"]}},o)};return r.default.create({url:"/graphql",method:"post",data:s,headers:{}})}}]),e}();o.default=a},"./src/services/DataService.js":
/*!*************************************!*\
  !*** ./src/services/DataService.js ***!
  \*************************************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=function(){function e(e,o){for(var s=0;s<o.length;s++){var t=o[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,s,t){return s&&e(o.prototype,s),t&&e(o,t),o}}(),r=a(s(/*! ./AxiosService */"./src/services/AxiosService.js")),n=a(s(/*! ../graphql/fetchBookDetails.graphql */"./src/graphql/fetchBookDetails.graphql")),d=a(s(/*! ../graphql/fetchChapters.graphql */"./src/graphql/fetchChapters.graphql"));function a(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e)}return t(e,null,[{key:"fetchCoverPageDetail",value:function(e){var o={id:e};return r.default.getInstance(n.default,o).request().then(function(e){return e.data}).then(function(e){return e.data.readBookDetails})}},{key:"fetchChaterList",value:function(e){var o={bookID:e};return r.default.getInstance(d.default,o).request().then(function(e){return e.data}).then(function(e){return e.data.readChapters})}}]),e}();o.default=c},"./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.store=void 0;var t,r=s(/*! redux */"./node_modules/redux/es/redux.js"),n=s(/*! ./reducers/root */"./src/reducers/root.js"),d=s(/*! redux-thunk */"./node_modules/redux-thunk/es/index.js"),a=(t=d)&&t.__esModule?t:{default:t};o.store=(0,r.createStore)(n.root,(0,r.applyMiddleware)(a.default))}});
//# sourceMappingURL=index.bundle.js.map