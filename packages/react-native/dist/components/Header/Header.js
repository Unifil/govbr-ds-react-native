"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Avatar = require("../Avatar/Avatar");
var _tokens = require("@unifil/tokens");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Header = function Header(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.container
  }, props.onPress && /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: props.onPress
  }, props.icon), /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, props.logo), /*#__PURE__*/_react["default"].createElement(_Avatar.Avatar, null));
};
exports.Header = Header;
var styles = _reactNative.StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: _tokens.colors.white
  }
});