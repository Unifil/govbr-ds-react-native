"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
var _tokens = require("@unifil/tokens");
var styles = _reactNative.StyleSheet.create({
  text: {
    color: _tokens.colors.darkBlue,
    fontSize: _tokens.fontSizes.xl,
    fontWeight: _tokens.fontWeights.medium,
    lineHeight: _tokens.lineHeights.xll
  }
});
exports.styles = styles;