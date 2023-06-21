import React from "react";
import { Text, View } from "react-native";
import { TitleProps } from "./Title.props";
import { colors, fontSizes, fontWeights, lineHeights } from "@unifil/tokens";

export const Title = ({
  color = colors.darkBlue,
  size = fontSizes.xl,
  weight = fontWeights.medium,
  lineHeight = lineHeights.xll,
  text,
}: TitleProps) => {
  return (
    <View>
      <Text
        style={{
          color: color,
          fontSize: size,
          fontWeight: weight,
          lineHeight: lineHeight,
        }}
      >
        {text}
      </Text>
    </View>
  );
};
