"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _tokens = require("@unifil/tokens");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Avatar = function Avatar() {
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: {
      width: 37,
      height: 37,
      borderRadius: 50,
      backgroundColor: _tokens.colors.green,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: {
      color: _tokens.colors.white,
      fontSize: 16,
      fontWeight: _tokens.fontWeights.bold
    }
  }, "HS"));
};
exports.Avatar = Avatar;