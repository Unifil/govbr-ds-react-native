import React from "react";
import { View } from "react-native";
import { ButtonCreateList } from "@unifil/react-native";
import { fontWeights, fontSizes, colors } from "@unifil/tokens";
import { boolean } from "yup";

const ButtonCreateListMeta = {
  title: "ButtonCreateList",
  component: ButtonCreateList,
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

export default ButtonCreateListMeta;

export const Primary = {
  args: {
    type: "primary",
    text: "Primary",
    height: 45,
    borderRadius: 50, 
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
    borderRadius: 50, 
    backgroundColor: colors.gray800,
    iconBackground: colors.white,
    colorText: colors.white,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
    marginTop: 5,
    marginBottom: 5
  },
};
