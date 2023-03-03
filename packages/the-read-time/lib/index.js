"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TheReadTime", {
  enumerable: true,
  get: function get() {
    return _TheReadTime["default"];
  }
});
Object.defineProperty(exports, "convertNumberToTime", {
  enumerable: true,
  get: function get() {
    return _convertNumberToTime["default"];
  }
});
Object.defineProperty(exports, "convertTimeToEmoji", {
  enumerable: true,
  get: function get() {
    return _convertTimeToEmoji["default"];
  }
});
exports["default"] = void 0;
Object.defineProperty(exports, "extractTextFromReactNode", {
  enumerable: true,
  get: function get() {
    return _extractTextFromReactNode["default"];
  }
});
Object.defineProperty(exports, "wordCount", {
  enumerable: true,
  get: function get() {
    return _wordCount["default"];
  }
});
var _TheReadTime = _interopRequireDefault(require("./TheReadTime"));
var _wordCount = _interopRequireDefault(require("./wordCount"));
var _extractTextFromReactNode = _interopRequireDefault(require("./extractTextFromReactNode"));
var _convertTimeToEmoji = _interopRequireDefault(require("./convertTimeToEmoji"));
var _convertNumberToTime = _interopRequireDefault(require("./convertNumberToTime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  TheReadTime: _TheReadTime["default"],
  wordCount: _wordCount["default"],
  extractTextFromReactNode: _extractTextFromReactNode["default"],
  convertTimeToEmoji: _convertTimeToEmoji["default"],
  convertNumberToTime: _convertNumberToTime["default"]
};
exports["default"] = _default;