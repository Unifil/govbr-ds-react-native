import React from "react";
import { View } from "react-native";
import { CardUser } from "@unifil/react-native";
import { colors } from "@unifil/tokens";

const CardUserMeta = {
  title: "CardUser",
  component: CardUser,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    name: "Title card",
    description: "Description card",
    rightComponent: <></>
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default CardUserMeta;

export const Default = {
  args: {
    name: "Title card",
    description: "Description card",
    colorTitle: colors.darkBlue,
    marginTop: 6,
    marginBottom: 6
  },
};
