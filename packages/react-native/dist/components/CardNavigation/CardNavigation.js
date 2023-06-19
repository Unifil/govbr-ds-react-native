"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardNavigation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _tokens = require("@unifil/tokens");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CardNavigation = function CardNavigation(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPressed = _useState2[0],
    setIsPressed = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableHighlight, {
    style: [{
      borderRadius: props.borderRadius,
      height: props.height,
      width: props.width
    }, styles.container],
    onPress: props.onPress,
    activeOpacity: 0.8,
    underlayColor: _tokens.colors.blueLight,
    onShowUnderlay: function onShowUnderlay() {
      setIsPressed(true);
    },
    onHideUnderlay: function onHideUnderlay() {
      setIsPressed(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [styles.containerContent]
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [styles.title, {
      color: isPressed ? _tokens.colors.white : props.colorTitle,
      fontSize: props.sizeTitle
    }]
  }, props.title), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [styles.text, {
      color: isPressed ? _tokens.colors.white : props.colorText,
      opacity: isPressed ? 1 : 0.5,
      fontSize: props.sizeText
    }]
  }, props.text)), /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, props.icon)));
};
exports.CardNavigation = CardNavigation;
var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 17,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: _tokens.radii.px,
    width: "100%",
    height: 105,
    elevation: 10,
    shadowColor: "#00000040",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  containerContent: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  title: {
    color: _tokens.colors.darkBlue,
    fontSize: _tokens.fontSizes.md,
    fontWeight: _tokens.fontWeights.medium,
    marginBottom: 6
  },
  text: {
    color: _tokens.colors.blue,
    fontSize: _tokens.fontSizes.xs,
    fontWeight: _tokens.fontWeights.regular,
    opacity: 0.5
  }
});