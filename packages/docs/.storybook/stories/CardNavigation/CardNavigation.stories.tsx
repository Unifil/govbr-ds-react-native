import React from "react";
import { Text, View } from "react-native";
import { CardNavigation } from "@unifil/react-native";
import { radii, fontSizes, colors } from "@unifil/tokens";

const CardNavigationMeta = {
  title: "CardNavigation",
  component: CardNavigation,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Title card",
    text: "Description card",
    icon: <Text>{">"}</Text>
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
    marginTop: 6,
    marginBottom: 6,
    colorIcon: colors.darkBlue
  },
};
