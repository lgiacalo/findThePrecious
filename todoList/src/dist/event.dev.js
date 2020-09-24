"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gestionInputTodo = gestionInputTodo;

var _localStorage = require("./localStorage.js");

var _gestionItems = require("./gestionItems.js");

var formTodo = document.querySelector(".js-form");

function gestionInputTodo() {
  formTodo.addEventListener("submit", function (e) {
    var inputTodo = document.querySelector(".js-todo-input");
    e.preventDefault();

    if (inputTodo.value.trim()) {
      var id = (0, _localStorage.recordItemLocalStorage)(inputTodo.value.trim());

      if (id) {
        var newItem = (0, _gestionItems.createNewItem)(inputTodo.value.trim(), id, false);
        (0, _gestionItems.setEventButton)(newItem);
      }
    }

    inputTodo.value = "";
  });
}