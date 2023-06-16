"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Title = function Title(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [styles.text]
  }, text));
};
exports.Title = Title;
var styles = _reactNative.StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    width: "100%"
  },
  text: {
    color: "#274A67",
    fontSize: 24
  }
});