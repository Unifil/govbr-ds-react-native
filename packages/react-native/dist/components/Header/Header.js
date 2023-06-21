"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Avatar = require("../Avatar/Avatar");
var _Header = require("./Header.styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Header = function Header(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: _Header.styles.container
  }, props.onPress && /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: props.onPress
  }, props.icon), /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, props.logo), /*#__PURE__*/_react["default"].createElement(_Avatar.Avatar, null));
};
exports.Header = Header;