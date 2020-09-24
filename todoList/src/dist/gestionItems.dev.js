"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewItem = createNewItem;
exports.setEventButton = setEventButton;

var ls = _interopRequireWildcard(require("./localStorage.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var templateLi = document.querySelector(".d-none li");
var classNameButton = ["far", "fa-circle", "fas", "fa-check-circle"];
var listItems = document.getElementById("list-items");

var superToggle = function superToggle(el, classes) {
  classes.forEach(function (cl) {
    return el.classList.toggle(cl);
  });
};

function createNewItem(value, id, check) {
  var cloneli = templateLi.cloneNode(true);
  cloneli.querySelector("a").textContent = value;

  if (check) {
    superToggle(cloneli.querySelector("i"), classNameButton);
    cloneli.querySelector("span").classList.toggle("item-check");
  }

  listItems.insertAdjacentElement('afterbegin', cloneli);
  cloneli.querySelector("a").href += id;
  return cloneli;
}

function setEventButton(item) {
  var value = item.querySelector("a").textContent.trim();
  item.querySelector(".button-check").addEventListener("click", function (e) {
    superToggle(e.target, classNameButton);
    item.querySelector("span").classList.toggle("item-check");
    ls.toggleCheckLocalStorage(value);
  });
  item.querySelector(".button-delete").addEventListener("click", function (e) {
    var li = this.parentElement;
    li.remove();
    ls.removeItemLocalStorage(value);
  });
}