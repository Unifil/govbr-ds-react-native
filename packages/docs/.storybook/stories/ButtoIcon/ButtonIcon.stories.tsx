import React from "react";
import { View } from "react-native";
import { ButtonIcon } from "@unifil/react-native";
import { colors } from "@unifil/tokens";

const ButtonIconMeta = {
  title: "ButtonIcon",
  component: ButtonIcon,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    icon: <></>,
    height: 30,
    width: 30,
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
    height: 32,
    width: 64,
    backgroundColor: colors.blueSecondary,
    icon: <></>
  },
};
