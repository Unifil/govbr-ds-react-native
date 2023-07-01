import React from "react";
import { View } from "react-native";
import { Button } from "@unifil/react-native";
import { fontWeights, fontSizes, colors } from "@unifil/tokens";

const ButtonMeta = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Primary = {
  args: {
    type: "primary",
    text: "Primary",
    height: 31,
    borderRadius: 19, 
    backgroundColor: colors.darkBlue,
    colorText: colors.white,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xs
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    text: "Secondary",
    height: 31,
    borderRadius: 19, 
    backgroundColor: colors.darkBlue,
    colorText: colors.white,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xs
  },
};

export const Custom = {
  args: {
    type: "custom",
    text: "Custom",
    height: 31,
    borderRadius: 19, 
    backgroundColor: colors.gray600,
    colorText: colors.white,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xs,
    marginTop: 5,
    marginBottom: 5
  },
};
