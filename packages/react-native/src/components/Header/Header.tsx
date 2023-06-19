import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Avatar } from "../Avatar/Avatar";
import { colors } from "@unifil/tokens";
import { HeaderProps } from "./Interface";

export const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      {props.onPress && <TouchableOpacity onPress={props.onPress}>{props.icon}</TouchableOpacity>}

      <View>{props.logo}</View>

      <Avatar></Avatar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
  },
});
