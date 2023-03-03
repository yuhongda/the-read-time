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
var _excluded = ["steps", "speed", "time", "displayRender"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TheReadTime = function TheReadTime(props) {
  var _props$steps = props.steps,
    steps = _props$steps === void 0 ? _misc.DEFAULT_STEPS : _props$steps,
    _props$speed = props.speed,
    speed = _props$speed === void 0 ? _misc.DEFAULT_READ_SPEED : _props$speed,
    time = props.time,
    displayRender = props.displayRender,
    rest = _objectWithoutProperties(props, _excluded);
  var totalTime;
  if (time) {
    totalTime = time;
  } else {
    var text = (0, _extractTextFromReactNode["default"])(props.children);
    var count = (0, _wordCount["default"])(text);
    totalTime = count / speed;
  }
  var totalTimeString = (0, _convertNumberToTime["default"])(totalTime);
  var processSteps = steps.sort(function (a, b) {
    return b.minutes - a.minutes;
  });
  var emoji = (0, _convertTimeToEmoji["default"])(processSteps, totalTime);
  return /*#__PURE__*/_react["default"].createElement("div", rest, displayRender ? displayRender(emoji, totalTime) : /*#__PURE__*/_react["default"].createElement("div", null, emoji.flat().join(''), totalTimeString), props.children);
};
exports["default"] = exports.TheReadTime = TheReadTime;