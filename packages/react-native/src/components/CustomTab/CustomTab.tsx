import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "@unifil/tokens";
import { TabProps } from "./Interface";

export const CustomTab = (props: TabProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {props.state.routes.map((route: any, index: any) => {
          const { options } = props.descriptors[route.key];
          
          const isFocused = props.state.index === index;
          const color = isFocused ? props.tabBarActiveTintColor : props.tabBarInactiveTintColor;

          if(!options.tabBarIcon) return null;
          const Icon = options.tabBarIcon({ focused: isFocused, color });
          
          const onPress = () => {
            const event = props.navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              props.navigation.navigate({
                name: route.name,
                merge: true,
              });
            }
          };
          const onLongPress = () => {
            props.navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <View style={{ alignItems: "center", padding: 4 }}>
                <View style={{ padding: 8, borderRadius: 99 }}>{Icon}</View>
                <Text
                  style={{
                    color: isFocused
                      ? props.tabBarActiveTintColor
                      : props.tabBarInactiveTintColor,
                  }}
                >
                  {route.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    marginBottom: Platform.OS === "ios" ? 38 : 24,
    width: "100%",
    height: 84,
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 0,
    backgroundColor: colors.white,
    flexDirection: "row",
    borderRadius: 15,
    gap: 8,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
  },
  buttonTab: {
    justifyContent: "center",
    alignItems: "center",
  },
});
