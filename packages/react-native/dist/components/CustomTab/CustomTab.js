"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTab = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _tokens = require("@unifil/tokens");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CustomTab = function CustomTab(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.content
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
      style: styles.buttonTab
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
var styles = _reactNative.StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between"
  },
  content: {
    marginBottom: _reactNative.Platform.OS === "ios" ? 38 : 24,
    width: "100%",
    height: 84,
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 0,
    backgroundColor: _tokens.colors.white,
    flexDirection: "row",
    borderRadius: 15,
    gap: 8,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8
  },
  buttonTab: {
    justifyContent: "center",
    alignItems: "center"
  }
});