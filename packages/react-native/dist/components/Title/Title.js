"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _tokens = require("@unifil/tokens");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Title = function Title(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [styles.text, {
      color: props.color,
      fontSize: props.size,
      fontWeight: props.weight,
      lineHeight: props.lineHeight
    }]
  }, props.text));
};
exports.Title = Title;
var styles = _reactNative.StyleSheet.create({
  text: {
    color: _tokens.colors.darkBlue,
    fontSize: _tokens.fontSizes.xl,
    fontWeight: _tokens.fontWeights.medium,
    lineHeight: _tokens.lineHeights.shorter
  }
});