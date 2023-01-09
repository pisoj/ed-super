(()=>{"use strict";var e,t,n,r,o,a,c,l,i,s,u,d,p,f,h,v,m,g,y,b={426:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,".black {\n    color: black;\n}\n\n.table-end {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.logo-img {\n    height: 46px;\n}\n\n#header .logged-in-user {\n    display: block !important;\n}\n\n.footer {\n    display: none;\n}",""]);const l=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var l=0;l<this.length;l++){var i=this[l][0];null!=i&&(c[i]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],l=0;l<e.length;l++){var i=e[l],s=r.base?i[0]+r.base:i[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var p=n(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=l,t.splice(l,0,{identifier:d,updater:h,references:1})}c.push(d)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var l=n(a[c]);t[l].references--}for(var i=r(e,o),s=0;s<a.length;s++){var u=n(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},w={};function x(e){var t=w[e];if(void 0!==t)return t.exports;var n=w[e]={id:e,exports:{}};return b[e](n,n.exports,x),n.exports}x.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return x.d(t,{a:t}),t},x.d=(e,t)=>{for(var n in t)x.o(t,n)&&!x.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},x.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),x.nc=void 0,e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)},t=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},r=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.getGrades=function(){for(var e=document.getElementsByClassName("grade"),t=[],n=0;n<e.length;n++)for(var r=e[n].children,o=0;o<r.length;o++)for(var a=r[o].children,c=0;c<a.length;c++){var l=a[c];t.push(parseInt(l.innerHTML))}return t},n.prototype.show=function(){var t=document.getElementsByClassName("grades-table")[0],n=this.getGrades();e.prototype.showAverage.call(this,n,t)},n}(n=function(){function e(){}return e.calculate=function(e){return e.reduce((function(e,t){return e+t}),0)/e.length},e.format=function(e){return e.toFixed(2)},e.formatInt=function(e){return Math.round(e)},e.color=function(e){return"hsl(".concat(30*(e-1),", 71%, 90%)")},e.colored=function(t,n){t.setAttribute("style","background: ".concat(e.color(n),";"))},e.prototype.showAverage=function(t,n,r){void 0===r&&(r=0);for(var o=e.calculate(t),a=document.createElement("div"),c=["flex-table","row","table-end"],l=0;l<c.length;l++)a.classList.add(c[l]);for(e.colored(a,o),l=0;l<r;l++){var i=document.createElement("div");i.classList.add("flex-row"),a.appendChild(i)}var s=document.createElement("div");s.classList.add("flex-row"),s.classList.add("first");var u=document.createTextNode("Prosjek ocjena");s.appendChild(u);var d=document.createElement("div"),p=["flex-row","head","table-end"];for(l=0;l<p.length;l++)d.classList.add(p[l]);var f=document.createTextNode(e.format(o));d.appendChild(f),a.appendChild(s),a.appendChild(d),n.appendChild(a)},e}()),o=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.getSubjects=function(){return document.querySelectorAll(".new-grades-table")},r.prototype.getNotes=function(e){return e.querySelectorAll(".row")},r.prototype.getGrade=function(e){var t=e.querySelectorAll("div")[3];return t.children.length>0?parseInt(t.querySelector("span").innerHTML):null},r.prototype.getGrades=function(e){for(var t=this.getNotes(e),n=[],r=0;r<t.length;r++){var o=t[r],a=this.getGrade(o);null!=a&&n.push(a)}return n},r.prototype.calculateSubjectAverage=function(t){var r=this.getGrades(t);return 0===r.length?null:(e.prototype.showAverage.call(this,r,t,2),n.calculate(r))},r.prototype.calculateOverallSuccess=function(e,t,r,o){var a=n.calculate(o);n.color(a),n.colored(e,a),t.classList.add("black"),r.onclick=null,r.textContent=n.format(a)},r.prototype.showOverallSuccess=function(e){var t=this,n=document.querySelector(".dropdown-menu-wrapper");n.classList.remove("js-dropdown-menu"),n.querySelector(".dropdown-content").remove(),n.querySelector(".icon-angle-down").remove();var r=n.querySelector(".dropdown-title span");r.textContent="OPĆI USPJEH:";var o=document.createElement("span");o.textContent="Izračunaj",o.onclick=function(){t.calculateOverallSuccess(n,r,o,e)},n.appendChild(o)},r.prototype.show=function(){for(var e=[],t=this.getSubjects(),r=0;r<t.length;r++){var o=t[r],a=this.calculateSubjectAverage(o);null!==a&&e.push(n.formatInt(a))}this.showOverallSuccess(e)},r}(n),"undefined"!=typeof document&&(function(){var e=document.getElementsByClassName("logo")[0];e.innerHTML="";var t=document.createElement("a");t.classList.add("logo-link"),t.setAttribute("href","/");var n=document.createElement("img");n.classList.add("logo-img"),n.setAttribute("src","https://pisoj.github.io/ed-super/img/logo-256.webp"),n.setAttribute("alt","eD Super"),t.appendChild(n),e.appendChild(t)}(),-1===location.pathname.indexOf("grade")||-1===location.pathname.indexOf("all")?-1===location.pathname.indexOf("grade")||(new r).show():(new o).show()),a=x(379),c=x.n(a),l=x(795),i=x.n(l),s=x(569),u=x.n(s),d=x(565),p=x.n(d),f=x(216),h=x.n(f),v=x(589),m=x.n(v),g=x(426),(y={}).styleTagTransform=m(),y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=h(),c()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals})();