import React from "react";
import { View } from "react-native";
import { CardSkills } from "@unifil/react-native";
import { radii, fontSizes, colors } from "@unifil/tokens";

const CardSkillsMeta = {
  title: "CardSkills",
  component: CardSkills,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Title card",
    text: "Description card",
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

export default CardSkillsMeta;

export const Primary = {
  args: {
    tag: "(EF01MA06)",
    title: "Title card skills",
    text: "Description card skills",
    colorTitle: colors.darkBlue,
    colorText: colors.blue,
    sizeTitle: fontSizes.md,
    sizeText: fontSizes.xs,
    borderRadius: radii.px,
    height: 105,
    width: "100%",
    marginTop: 6,
    marginBottom: 6,
    colorIcon: colors.darkBlue,
  },
};
