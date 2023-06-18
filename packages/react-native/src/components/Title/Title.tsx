import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TitleProps } from "./Interface";
import {
  fontWeights,
  fontSizes,
  lineHeights,
  colors,
} from "@unifil/tokens";

export const Title = (props: TitleProps) => {
  return (
    <View>
      <Text
        style={[
          styles.text,
          {
            color: props.color,
            fontSize: props.size,
            fontWeight: props.weight,
            lineHeight: props.lineHeight,
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
    color: colors.darkBlue,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.shorter,
  },
});
