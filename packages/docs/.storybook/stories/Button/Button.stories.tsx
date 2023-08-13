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
  args: {
    icon: <></>,
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
    height: 45,
    borderRadius: 19, 
    backgroundColor: colors.blueSecondary,
    colorText: colors.white,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    text: "Secondary",
    height: 45,
    borderRadius: 19, 
    backgroundColor: colors.blueSecondary,
    colorText: colors.white,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md
  },
};

export const Disabled = {
  args: {
    type: "disabled",
    text: "Disabled",
    height: 45,
    borderRadius: 19, 
    backgroundColor: colors.blueSecondary,
    colorText: colors.white,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md
  },
};

export const Custom = {
  args: {
    type: "custom",
    text: "Custom",
    height: 45,
    borderRadius: 19, 
    backgroundColor: colors.gray600,
    colorText: colors.white,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
    marginTop: 5,
    marginBottom: 5
  },
};
