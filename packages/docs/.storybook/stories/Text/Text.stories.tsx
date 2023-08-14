import React from "react";
import { View } from "react-native";
import { TextComponent } from "@unifil/react-native";
import { fontWeights, fontSizes, colors } from "@unifil/tokens";

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

export const Primary = {
  args: {
    type: "primary",
    text: "Hello world",
    color: colors.dark,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular
  },
};

export const Custom = {
  args: {
    type: "custom",
    text: "Hello world",
    color: colors.dark,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Rawline-Regular'
  },
};
