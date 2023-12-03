import React from "react";
import { View } from "react-native";
import { CardComments } from "@unifil/react-native";
import { colors } from '@unifil/tokens'

const CardCommentsMeta = {
  title: "CardComments",
  component: CardComments,
  args: {
    comments: "Comments",
    date: "01/01/1900",
    status: "Status",
    colorStatus: colors.gray300,
    buttons: <></>
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default CardCommentsMeta;

export const Default = {
  args: {
    comment: "Comments",
    date: "01/01/1900",
    status: "Status",
    colorStatus: colors.gray300,
    buttons: <></>
  },
};
