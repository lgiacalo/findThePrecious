"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewComm = createNewComm;
exports.setEventButtonComm = setEventButtonComm;

var ls = _interopRequireWildcard(require("./localStorage.js"));

var _utils = require("./utils.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var templateLiComm = document.querySelector("#template-li-comm li"); // const classNameButton = ["far", "fa-circle", "fas", "fa-check-circle"];

var listComm = document.getElementById("list-comm");

function createNewComm(value, id_com) {
  var clonelicomm = templateLiComm.cloneNode(true);
  console.log('templateLiComm :>> ', templateLiComm);
  console.log('listComm :>> ', listComm);
  clonelicomm.querySelector("p").textContent = value; // if (check) {
  //     superToggle(clonelicomm.querySelector("i"), classNameButton);
  //     cloneli.querySelector("span").classList.toggle("item-check");
  // }

  listComm.insertAdjacentElement('afterbegin', clonelicomm); // clonelicomm.querySelector("a").href += id;

  return clonelicomm;
}

function setEventButtonComm(comm) {
  console.log("function setEventButtonComm");
}