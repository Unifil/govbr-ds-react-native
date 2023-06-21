"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTab = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _CustomTab = require("./CustomTab.styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CustomTab = function CustomTab(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: _CustomTab.styles.container
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: _CustomTab.styles.content
  }, props.state.routes.map(function (route, index) {
    var options = props.descriptors[route.key].options;
    var isFocused = props.state.index === index;
    var color = isFocused ? props.tabBarActiveTintColor : props.tabBarInactiveTintColor;
    if (!options.tabBarIcon) return null;
    var Icon = options.tabBarIcon({
      focused: isFocused,
      color: color
    });
    var onPress = function onPress() {
      var event = props.navigation.emit({
        type: "tabPress",
        target: route.key
      });
      if (!isFocused && !event.defaultPrevented) {
        props.navigation.navigate({
          name: route.name,
          merge: true
        });
      }
    };
    var onLongPress = function onLongPress() {
      props.navigation.emit({
        type: "tabLongPress",
        target: route.key
      });
    };
    return /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
      key: route.key,
      accessibilityRole: "button",
      accessibilityState: isFocused ? {
        selected: true
      } : {},
      accessibilityLabel: options.tabBarAccessibilityLabel,
      testID: options.tabBarTestID,
      onPress: onPress,
      onLongPress: onLongPress,
      style: _CustomTab.styles.buttonTab
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: {
        alignItems: "center",
        padding: 4
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: {
        padding: 8,
        borderRadius: 99
      }
    }, Icon), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: {
        color: isFocused ? props.tabBarActiveTintColor : props.tabBarInactiveTintColor
      }
    }, route.name)));
  })));
};
exports.CustomTab = CustomTab;