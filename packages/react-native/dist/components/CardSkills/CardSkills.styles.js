"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _tokens = require("@unifil/tokens");
var _reactNative = require("react-native");
var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: _tokens.colors.white,
    paddingLeft: 30,
    paddingRight: 17,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: _tokens.radii.px,
    width: '100%',
    marginTop: 6,
    marginBottom: 6,
    minHeight: 105,
    elevation: 10,
    shadowColor: '#00000040',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  containerContent: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  title: {
    color: _tokens.colors.darkBlue,
    fontSize: _tokens.fontSizes.md,
    fontWeight: _tokens.fontWeights.medium,
    marginBottom: 6
  },
  text: {
    color: _tokens.colors.darkBlue,
    fontSize: _tokens.fontSizes.xs,
    fontWeight: _tokens.fontWeights.regular,
    opacity: 0.5,
    maxWidth: 300
  },
  textTag: {
    color: _tokens.colors.darkBlue,
    fontSize: _tokens.fontSizes.xxs,
    fontWeight: _tokens.fontWeights.medium
  },
  containerTag: {
    backgroundColor: _tokens.colors.weakBlue,
    height: 20,
    maxWidth: 80,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
exports.styles = styles;