import React from "react";
import { View } from "react-native";
import { Title } from "@unifil/react-native";
import { fontWeights, fontSizes, colors, lineHeights } from "@unifil/tokens";

const TitleMeta = {
  title: "Title",
  component: Title,
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

export default TitleMeta;

export const Primary = {
  args: {
    type: "primary", 
    text: "Hello world",
    color: colors.dark,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.large
  },
};

export const Secondary = {
  args: {
    type: "secondary", 
    text: "Hello world",
    color: colors.dark,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.bold
  },
};

export const Custom = {
  args: {
    type: "custom", 
    text: "Hello world",
    color: colors.black,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xll,
    fontWeight: fontWeights.medium,
    textAlign: 'center'
  },
};
