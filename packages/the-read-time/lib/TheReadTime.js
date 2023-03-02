"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TheReadTime = void 0;
var _react = _interopRequireDefault(require("react"));
var _wordCount = _interopRequireDefault(require("./wordCount"));
var _extractTextFromReactNode = _interopRequireDefault(require("./extractTextFromReactNode"));
var _misc = require("./misc");
var _convertTimeToEmoji = _interopRequireDefault(require("./convertTimeToEmoji"));
var _convertNumberToTime = _interopRequireDefault(require("./convertNumberToTime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TheReadTime = function TheReadTime(props) {
  var _props$steps = props.steps,
    steps = _props$steps === void 0 ? _misc.DEFAULT_STEPS : _props$steps,
    _props$speed = props.speed,
    speed = _props$speed === void 0 ? _misc.DEFAULT_READ_SPEED : _props$speed,
    time = props.time,
    displayRender = props.displayRender;
  var text = (0, _extractTextFromReactNode["default"])(props.children);
  var count = (0, _wordCount["default"])(text);
  var totalTime = time || count / speed;
  var totalTimeString = (0, _convertNumberToTime["default"])(totalTime);
  var processSteps = steps.sort(function (a, b) {
    return b.minutes - a.minutes;
  });
  var emoji = (0, _convertTimeToEmoji["default"])(processSteps, totalTime);
  return /*#__PURE__*/_react["default"].createElement("div", null, displayRender ? displayRender(emoji, totalTime) : /*#__PURE__*/_react["default"].createElement("div", null, emoji.flat().join(''), totalTimeString), props.children);
};
exports["default"] = exports.TheReadTime = TheReadTime;