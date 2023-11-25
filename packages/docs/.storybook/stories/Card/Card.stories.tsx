import React from "react";
import { View } from "react-native";
import { Card } from "@unifil/react-native";
import { radii, fontSizes, colors } from "@unifil/tokens";

const CardMeta = {
  title: "Card",
  component: Card,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Title card",
    text: "Description card",
    local: "Description card",
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

export default CardMeta;

export const Primary = {
  args: {
    title: "Title card",
    text: "Name Local",
    description: "Description card",
    tag: "13082175",
    colorTitle: colors.darkBlue,
    colorLocal: colors.darkBlue,
    colorText: colors.blue,
    sizeTitle: fontSizes.md,
    sizeText: fontSizes.xs,
    borderRadius: radii.px,
    height: 105,
    width: "100%",
    marginTop: 6,
    marginBottom: 6,
    colorIcon: colors.darkBlue,
    textCapitalize: false,
    colorStatusGroup: colors.darkBlue
  },
};
