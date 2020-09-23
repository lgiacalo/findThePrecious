"use strict";

var buttonChecks = document.querySelectorAll(".button-check");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = buttonChecks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var btnCheck = _step.value;
    btnCheck.addEventListener('click', function (e) {
      e.target.classList.toggle("far");
      e.target.classList.toggle("fa-circle");
      e.target.classList.toggle("fas");
      e.target.classList.toggle("fa-check-circle");
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}