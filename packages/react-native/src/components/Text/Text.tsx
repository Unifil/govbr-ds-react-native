import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextProps } from "./Text.props";
import {
  fontWeights,
  fontSizes,
  lineHeights,
  colors,
} from "@unifil/tokens";

export const TextComponent = (props: TextProps) => {
  return (
    <View>
      <Text
        style={[
          styles.text,
          {
            color: props.color,
            fontSize: props.size,
            lineHeight: props?.lineHeight,
            fontWeight: props?.weight,
          },
        ]}
      >
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.blue,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.base,
    fontWeight: fontWeights.regular,
  },
});
