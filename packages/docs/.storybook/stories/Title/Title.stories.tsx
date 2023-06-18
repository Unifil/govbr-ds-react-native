import React from "react";
import { View } from "react-native";
import { Title } from "@unifil/react-native";
import { fontWeights, fontSizes, colors } from "@unifil/tokens";

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

export const Regular = {
  args: {
    text: "Hello world",
    color: colors.blue,
    size: fontSizes.xl,
    weight: fontWeights.medium,
  },
};

export const Medium = {
  args: {
    text: "Hello world",
    color: colors.blue,
    size: fontSizes.xl,
    weight: fontWeights.large,
  },
};

export const Large = {
  args: {
    text: "Hello world",
    color: colors.blue,
    size: fontSizes.xll,
    weight: fontWeights.large,
  },
};
