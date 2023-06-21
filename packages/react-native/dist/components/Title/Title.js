"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _tokens = require("@unifil/tokens");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Title = function Title(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? _tokens.colors.darkBlue : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? _tokens.fontSizes.xl : _ref$size,
    _ref$weight = _ref.weight,
    weight = _ref$weight === void 0 ? _tokens.fontWeights.medium : _ref$weight,
    _ref$lineHeight = _ref.lineHeight,
    lineHeight = _ref$lineHeight === void 0 ? _tokens.lineHeights.xll : _ref$lineHeight,
    text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: {
      color: color,
      fontSize: size,
      fontWeight: weight,
      lineHeight: lineHeight
    }
  }, text));
};
exports.Title = Title;