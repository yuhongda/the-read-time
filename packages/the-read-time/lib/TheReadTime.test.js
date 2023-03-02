"use strict";

var _vitest = require("vitest");
var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _TheReadTime = _interopRequireDefault(require("./TheReadTime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _vitest.describe)('<TheReadTime />', function () {
  (0, _vitest.afterEach)(function () {
    (0, _react.cleanup)();
  });
  (0, _vitest.it)('The article is show', function () {
    (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_TheReadTime["default"], null, /*#__PURE__*/_react2["default"].createElement("p", null, "Many resources indicate that the average reading speed of most adults is around 200 to 250 words per minute, which translates to two minutes per page. College students, probably because they must practice reading, move that pace up a notch to about 300 words per minute. Admittedly, not everyone can read fast and hit the average reading speed regardless of one\u2019s age. Many factors play a role in how fast a person can read, such as practice, reading material, and their health. However, this does not mean that they can\u2019t improve their reading pace. Tag along as we discuss average reading speed, factors affecting one\u2019s reading speed and comprehension, and ways to improve reading speed."), "The Article ", /*#__PURE__*/_react2["default"].createElement("strong", null, "blablabla..."), " ha-ha!! \u54C8\u54C8\u54C8"));
    (0, _vitest.expect)(_react.screen.getByText(/The Article/i)).toBeDefined();
  });
  (0, _vitest.it)('The Read Time is show in text, 37"', function () {
    (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_TheReadTime["default"], null, /*#__PURE__*/_react2["default"].createElement("p", null, "Many resources indicate that the average reading speed of most adults is around 200 to 250 words per minute, which translates to two minutes per page. College students, probably because they must practice reading, move that pace up a notch to about 300 words per minute. Admittedly, not everyone can read fast and hit the average reading speed regardless of one\u2019s age. Many factors play a role in how fast a person can read, such as practice, reading material, and their health. However, this does not mean that they can\u2019t improve their reading pace. Tag along as we discuss average reading speed, factors affecting one\u2019s reading speed and comprehension, and ways to improve reading speed."), "The Article ", /*#__PURE__*/_react2["default"].createElement("strong", null, "blablabla..."), " ha-ha!! \u54C8\u54C8\u54C8"));
    (0, _vitest.expect)(_react.screen.getByText(/37"/i)).toBeDefined();
  });
  (0, _vitest.it)('The Read Time is show in Emoji and text, 🍣1\'15"', function () {
    (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_TheReadTime["default"], {
      speed: 100
    }, /*#__PURE__*/_react2["default"].createElement("p", null, "Many resources indicate that the average reading speed of most adults is around 200 to 250 words per minute, which translates to two minutes per page. College students, probably because they must practice reading, move that pace up a notch to about 300 words per minute. Admittedly, not everyone can read fast and hit the average reading speed regardless of one\u2019s age. Many factors play a role in how fast a person can read, such as practice, reading material, and their health. However, this does not mean that they can\u2019t improve their reading pace. Tag along as we discuss average reading speed, factors affecting one\u2019s reading speed and comprehension, and ways to improve reading speed."), "The Article ", /*#__PURE__*/_react2["default"].createElement("strong", null, "blablabla..."), " ha-ha!! \u54C8\u54C8\u54C8"));
    (0, _vitest.expect)(_react.screen.getByText(/🍣/i)).toBeDefined();
    (0, _vitest.expect)(_react.screen.getByText(/1\'15"/i)).toBeDefined();
  });
  (0, _vitest.it)('The Read Time is show in Emoji and text, 🍔🍔🍣🍣12\'30"', function () {
    (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_TheReadTime["default"], {
      speed: 10
    }, /*#__PURE__*/_react2["default"].createElement("p", null, "Many resources indicate that the average reading speed of most adults is around 200 to 250 words per minute, which translates to two minutes per page. College students, probably because they must practice reading, move that pace up a notch to about 300 words per minute. Admittedly, not everyone can read fast and hit the average reading speed regardless of one\u2019s age. Many factors play a role in how fast a person can read, such as practice, reading material, and their health. However, this does not mean that they can\u2019t improve their reading pace. Tag along as we discuss average reading speed, factors affecting one\u2019s reading speed and comprehension, and ways to improve reading speed."), "The Article ", /*#__PURE__*/_react2["default"].createElement("strong", null, "blablabla..."), " ha-ha!! \u54C8\u54C8\u54C8"));
    (0, _vitest.expect)(_react.screen.getByText(/🍔🍔🍣🍣/i)).toBeDefined();
    (0, _vitest.expect)(_react.screen.getByText(/12\'30"/i)).toBeDefined();
  });
  (0, _vitest.it)('The Read Time is show in Emoji and text, 🍱🍔🍔25\'', function () {
    (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_TheReadTime["default"], {
      speed: 5
    }, /*#__PURE__*/_react2["default"].createElement("p", null, "Many resources indicate that the average reading speed of most adults is around 200 to 250 words per minute, which translates to two minutes per page. College students, probably because they must practice reading, move that pace up a notch to about 300 words per minute. Admittedly, not everyone can read fast and hit the average reading speed regardless of one\u2019s age. Many factors play a role in how fast a person can read, such as practice, reading material, and their health. However, this does not mean that they can\u2019t improve their reading pace. Tag along as we discuss average reading speed, factors affecting one\u2019s reading speed and comprehension, and ways to improve reading speed."), "The Article ", /*#__PURE__*/_react2["default"].createElement("strong", null, "blablabla..."), " ha-ha!! \u54C8\u54C8\u54C8"));
    (0, _vitest.expect)(_react.screen.getByText(/🍱🍔🍔/i)).toBeDefined();
    (0, _vitest.expect)(_react.screen.getByText(/25\'/i)).toBeDefined();
  });
  (0, _vitest.it)('The Read Time is show in Emoji and text, 🍱🍱🍔🍔🍣41\'40"', function () {
    (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_TheReadTime["default"], {
      speed: 3
    }, /*#__PURE__*/_react2["default"].createElement("p", null, "Many resources indicate that the average reading speed of most adults is around 200 to 250 words per minute, which translates to two minutes per page. College students, probably because they must practice reading, move that pace up a notch to about 300 words per minute. Admittedly, not everyone can read fast and hit the average reading speed regardless of one\u2019s age. Many factors play a role in how fast a person can read, such as practice, reading material, and their health. However, this does not mean that they can\u2019t improve their reading pace. Tag along as we discuss average reading speed, factors affecting one\u2019s reading speed and comprehension, and ways to improve reading speed."), "The Article ", /*#__PURE__*/_react2["default"].createElement("strong", null, "blablabla..."), " ha-ha!! \u54C8\u54C8\u54C8"));
    (0, _vitest.expect)(_react.screen.getByText(/🍱🍱🍔🍔🍣/i)).toBeDefined();
    (0, _vitest.expect)(_react.screen.getByText(/41\'40"/i)).toBeDefined();
  });
});