import React from "react";
import { View } from "react-native";
import { CardListActivities } from "@unifil/react-native";
import { radii, fontSizes, colors } from "@unifil/tokens";

const CardListActivitiesMeta = {
  title: "CardListActivities",
  component: CardListActivities,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Title card",
    subtitle: "Description card",
    textGroup: "Group",
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default CardListActivitiesMeta;

export const Primary = {
  args: {
    title: "Soma e subtração de integrantes",
    subtitle: " - (EF01MA06)",
    subtitleBold: "Atividade 1",
    textGroup: "Recomendado para Grupo 1",
    colorTitle: colors.darkBlue,
    colorText: colors.gray300,
    sizeTitle: fontSizes.md,
    sizeText: fontSizes.xs,
    borderRadius: radii.px,
    height: 105,
    width: "100%",
    marginTop: 6,
    marginBottom: 6,
    colorGroup: colors.gray100,
    colorTextGroup: colors.gray800,
    isChecked: false,
    button: "Button"
  },
};
