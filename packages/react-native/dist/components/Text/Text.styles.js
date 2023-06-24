"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _tokens = require("@unifil/tokens");
var _reactNative = require("react-native");
var styles = _reactNative.StyleSheet.create({
  text: {
    color: _tokens.colors.blue,
    fontSize: _tokens.fontSizes.xs,
    lineHeight: _tokens.lineHeights.xs,
    fontWeight: _tokens.fontWeights.regular
  }
});
exports.styles = styles;