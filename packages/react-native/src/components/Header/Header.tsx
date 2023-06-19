import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Avatar } from "../Avatar/Avatar";

export const Header = ({ onPress, logo, icon }: any) => {
  return (
    <View style={styles.container}>
      {onPress && <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>}

      <View>{logo}</View>

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
    backgroundColor: "white",
  },
  text: {
    color: "#274A67",
    fontSize: 24,
  },
});
