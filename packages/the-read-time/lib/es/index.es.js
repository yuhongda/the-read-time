import React from 'react';

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
  if (React.isValidElement(node) && node.hasOwnProperty("props") && node.props.hasOwnProperty("children")) {
    return extractTextFromReactNode(node.props.children);
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

const TheReadTime = (props) => {
  const { steps = DEFAULT_STEPS, speed = DEFAULT_READ_SPEED, time, displayRender } = props;
  const text = extractTextFromReactNode(props.children);
  const count = wordCount(text);
  const totalTime = time || count / speed;
  const totalTimeString = convertNumberToTime(totalTime);
  const processSteps = steps.sort((a, b) => b.minutes - a.minutes);
  const emoji = convertTimeToEmoji(processSteps, totalTime);
  return /* @__PURE__ */ React.createElement("div", null, displayRender ? displayRender(emoji, totalTime) : /* @__PURE__ */ React.createElement("div", null, emoji.flat().join(""), totalTimeString), props.children);
};

var index = { TheReadTime };

export { TheReadTime, index as default };
