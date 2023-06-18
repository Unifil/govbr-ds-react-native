import React from "react";
import { View } from "react-native";
import { TextComponent } from "@govbr-ds-react-native/react-native";
import { fontWeights, fontSizes, colors } from "@govbr-ds-react-native/tokens";

const TextMeta = {
  title: "Text",
  component: TextComponent,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default TextMeta;

export const Small = {
  args: {
    text: "Hello world",
    color: colors.darkBlue,
    size: fontSizes.xxs,
    weight: fontWeights.medium,
  },
};

export const Medium = {
  args: {
    text: "Hello world",
    color: colors.blue,
    size: fontSizes.xs,
    weight: fontWeights.regular,
  },
};

export const Large = {
  args: {
    text: "Hello world",
    color: colors.darkBlue,
    size: fontSizes.sm,
    weight: fontWeights.medium,
  },
};
