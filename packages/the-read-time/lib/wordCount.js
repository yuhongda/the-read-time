"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var wordCount = function wordCount(text) {
  var chinese = Array.from(text).filter(function (ch) {
    return /[\u4e00-\u9fa5]/.test(ch);
  }).length;
  var english = Array.from(text).map(function (ch) {
    return /[a-zA-Z0-9\-\s]/.test(ch) ? ch : ' ';
  }).join('').split(/\s+/).filter(function (s) {
    return s;
  }).length;
  return chinese + english;
};
var _default = wordCount;
exports["default"] = _default;