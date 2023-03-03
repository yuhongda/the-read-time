'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const wordCount = (text) => {
  const chinese = Array.from(text).filter((ch) => /[\u4e00-\u9fa5]/.test(ch)).length;
  const english = Array.from(text).map((ch) => /[a-zA-Z0-9\-\s]/.test(ch) ? ch : " ").join("").split(/\s+/).filter((s) => s).length;
  return chinese + english;
};

const extractTextFromReactNode = (node) => {
  if (node === null || node === void 0) {
    return "";
  }
  if (typeof node === "string") {
    return node;
  }
  if (typeof node === "number") {
    return `${node}`;
  }
  if (typeof node === "boolean") {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map((n) => extractTextFromReactNode(n)).join("");
  }
  if (React__default["default"].isValidElement(node) && node.hasOwnProperty("props")) {
    if (node.props.hasOwnProperty("children")) {
      return extractTextFromReactNode(node.props.children);
    }
    if (node.props.hasOwnProperty("dangerouslySetInnerHTML") && node.props.dangerouslySetInnerHTML.hasOwnProperty("__html")) {
      return extractTextFromReactNode(node.props.dangerouslySetInnerHTML.__html);
    }
  }
  return "";
};

const DEFAULT_STEPS = [
  {
    icon: "\u{1F363}",
    minutes: 1
  },
  {
    icon: "\u{1F354}",
    minutes: 5
  },
  {
    icon: "\u{1F371}",
    minutes: 15
  }
];
const DEFAULT_READ_SPEED = 200;

const convertTimeToEmoji = (steps, totalTime) => {
  if (steps.length === 0) {
    return [];
  }
  const [step, ...rest] = steps;
  const num = Math.floor(totalTime / step.minutes);
  return [new Array(num).fill(step.icon), ...convertTimeToEmoji(rest, totalTime % step.minutes)];
};

const convertNumberToTime = (minute) => {
  const [hour, minutes, seconds] = new Date(minute * 60 * 1e3).toISOString().substring(11, 11 + 8).split(":").map((item) => Number(item));
  return `${hour ? `${hour}h` : ""}${minutes ? `${minutes}'` : ""}${seconds ? `${seconds}"` : ""}`;
};

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TheReadTime = (props) => {
  const _a = props, { steps = DEFAULT_STEPS, speed = DEFAULT_READ_SPEED, time, displayRender } = _a, rest = __objRest(_a, ["steps", "speed", "time", "displayRender"]);
  let totalTime;
  if (time) {
    totalTime = time;
  } else {
    const text = extractTextFromReactNode(props.children);
    const count = wordCount(text);
    totalTime = count / speed;
  }
  const totalTimeString = convertNumberToTime(totalTime);
  const processSteps = steps.sort((a, b) => b.minutes - a.minutes);
  const emoji = convertTimeToEmoji(processSteps, totalTime);
  return /* @__PURE__ */ React__default["default"].createElement("div", __spreadValues({}, rest), displayRender ? displayRender(emoji, totalTime) : /* @__PURE__ */ React__default["default"].createElement("div", null, emoji.flat().join(""), totalTimeString), props.children);
};

var index = {
  TheReadTime,
  wordCount,
  extractTextFromReactNode,
  convertTimeToEmoji,
  convertNumberToTime
};

exports.TheReadTime = TheReadTime;
exports.convertNumberToTime = convertNumberToTime;
exports.convertTimeToEmoji = convertTimeToEmoji;
exports["default"] = index;
exports.extractTextFromReactNode = extractTextFromReactNode;
exports.wordCount = wordCount;
