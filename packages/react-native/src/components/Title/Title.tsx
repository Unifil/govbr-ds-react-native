import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const Title = ({ text }: any) => {
  return (
    <View>
      <Text style={[styles.text]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    width: "100%",
  },
  text: {
    color: "#274A67",
    fontSize: 24,
  },
});
