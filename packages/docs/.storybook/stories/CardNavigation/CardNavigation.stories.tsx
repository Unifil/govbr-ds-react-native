import React from "react";
import { View } from "react-native";
import { CardNavigation } from "@govbr-ds-react-native/react-native";
import { radii, fontSizes, colors } from "@govbr-ds-react-native/tokens";

const CardNavigationMeta = {
  title: "CardNavigation",
  component: CardNavigation,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Title card",
    text: "Description card",
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default CardNavigationMeta;

export const Primary = {
  args: {
    title: "Title card",
    text: "Description card",
    colorTitle: colors.darkBlue,
    colorText: colors.blue,
    sizeTitle: fontSizes.md,
    sizeText: fontSizes.xs,
    borderRadius: radii.px,
    height: 105,
    width: "100%",
    icon: ">",
  },
};
