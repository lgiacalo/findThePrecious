parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=function(e,t){t.forEach(function(t){return e.classList.toggle(t)})};function t(e){return o().find(function(t){return t.id==e})}function o(){return JSON.parse(localStorage.getItem("items"))}function n(e){var t=JSON.parse(localStorage.getItem("items")).filter(function(t){return t.title!==e});localStorage.setItem("items",JSON.stringify(t))}function r(e){var t,o=null!==(t=JSON.parse(localStorage.getItem("items")))&&void 0!==t?t:[],n=o.length?o[o.length-1].id+1:1;return!o.some(function(t){return t.title===e})&&(o.push({id:n,title:e,check:!1,comm:{}}),localStorage.setItem("items",JSON.stringify(o)),n)}function c(e){var t=JSON.parse(localStorage.getItem("items")),o=t.find(function(t){return t.title===e});o.check=!o.check,localStorage.setItem("items",JSON.stringify(t))}var i=document.querySelector(".d-none li"),l=["far","fa-circle","fas","fa-check-circle"],u=document.getElementById("list-items");function a(){var e;(null!==(e=o())&&void 0!==e?e:[]).forEach(function(e){d(s(e.title,e.id,e.check))})}function s(t,o,n){var r=i.cloneNode(!0);return r.querySelector("a").textContent=t,n&&(e(r.querySelector("i"),l),r.querySelector("span").classList.toggle("item-check")),u.insertAdjacentElement("afterbegin",r),r.querySelector("a").href+=o,r}function d(t){var o=t.querySelector("a").textContent.trim();t.querySelector(".button-check").addEventListener("click",function(n){e(n.target,l),t.querySelector("span").classList.toggle("item-check"),c(o)}),t.querySelector(".button-delete").addEventListener("click",function(e){this.parentElement.remove(),n(o)})}var m=document.querySelector(".js-form");function f(e){m.onsubmit=function(e){var t=document.querySelector(".js-todo-input");e.preventDefault(),t.value.trim()&&console.log("input :>> ",t.value),t.value=""}}function v(){m.onsubmit=function(e){var t=document.querySelector(".js-todo-input");if(e.preventDefault(),t.value.trim()){var o=r(t.value.trim());if(o)d(s(t.value.trim(),o,!1))}t.value=""}}a(),y("todo");var g=document.querySelector(".description");function S(e){e.preventDefault(),console.log("e :>> ",e);var o=e.params.id||0;y("item"),document.querySelector(".description").textContent="What comment would you like to add?";var n=t(o);if(!n)return console.log("pas d'item"),void page.redirect("/");var r=document.querySelector(".title-todo");console.log("h2 :>> ",r),r.textContent=n.title,f(o)}function y(e){var t=document.querySelector("#list-items"),o=document.getElementById("show-item"),n=document.querySelector(".img");console.log("imgShow :>> ",n),"todo"===e?(t.classList.remove("d-none"),o.classList.add("d-none"),n.classList.remove("d-none")):(t.classList.add("d-none"),o.classList.remove("d-none"),n.classList.add("d-none"))}g.textContent="What do you want to get done today?",v();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.5287823f.js.map