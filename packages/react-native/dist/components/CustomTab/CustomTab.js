"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTab = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CustomTab = function CustomTab(_ref) {
  var state = _ref.state,
    descriptors = _ref.descriptors,
    navigation = _ref.navigation;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.content
  }, state.routes.map(function (route, index) {
    var options = descriptors[route.key].options;
    var isFocused = state.index === index;
    var onPress = function onPress() {
      var event = navigation.emit({
        type: "tabPress",
        target: route.key
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate({
          name: route.name,
          merge: true
        });
      }
    };
    var onLongPress = function onLongPress() {
      navigation.emit({
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
        alignItems: 'center',
        padding: 4
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: {
        padding: 8,
        borderRadius: 99
      }
    }, route.icon), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, route.name)));
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
    backgroundColor: "white",
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