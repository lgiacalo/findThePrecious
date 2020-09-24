"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.superToggle = void 0;

var superToggle = function superToggle(el, classes) {
  classes.forEach(function (cl) {
    return el.classList.toggle(cl);
  });
};

exports.superToggle = superToggle;