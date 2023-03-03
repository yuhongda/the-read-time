"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var extractTextFromReactNode = function extractTextFromReactNode(node) {
  if (node === null || node === undefined) {
    return '';
  }
  if (typeof node === 'string') {
    return node;
  }
  if (typeof node === 'number') {
    return "".concat(node);
  }
  if (typeof node === 'boolean') {
    return '';
  }
  if (Array.isArray(node)) {
    return node.map(function (n) {
      return extractTextFromReactNode(n);
    }).join('');
  }
  if ( /*#__PURE__*/_react["default"].isValidElement(node) && node.hasOwnProperty('props')) {
    if (node.props.hasOwnProperty('children')) {
      return extractTextFromReactNode(node.props.children);
    }
    if (node.props.hasOwnProperty('dangerouslySetInnerHTML') && node.props.dangerouslySetInnerHTML.hasOwnProperty('__html')) {
      return extractTextFromReactNode(node.props.dangerouslySetInnerHTML.__html);
    }
  }
  return '';
};
var _default = extractTextFromReactNode;
exports["default"] = _default;