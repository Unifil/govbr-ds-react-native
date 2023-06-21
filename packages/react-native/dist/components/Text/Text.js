"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Text = require("./Text.styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TextComponent = function TextComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [_Text.styles.text, {
      color: props.color,
      fontSize: props.size,
      lineHeight: props === null || props === void 0 ? void 0 : props.lineHeight,
      fontWeight: props === null || props === void 0 ? void 0 : props.weight
    }]
  }, props.text));
};
exports.TextComponent = TextComponent;