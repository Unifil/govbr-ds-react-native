import React from "react";
import { View } from "react-native";
import { ButtonIcon } from "@unifil/react-native";
import { fontWeights, fontSizes, colors } from "@unifil/tokens";

const ButtonIconMeta = {
  title: "ButtonIcon",
  component: ButtonIcon,
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

export default ButtonIconMeta;

export const Default = {
  args: {
    height: 30,
    windth: 30,
    borderRadius: 50, 
    backgroundColor: colors.darkBlue,
    colorText: colors.white,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xs
  },
};
