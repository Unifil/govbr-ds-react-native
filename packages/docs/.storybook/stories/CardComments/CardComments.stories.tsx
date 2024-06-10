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
    comment: "Texte comments",
    date: "01/01/1900",
    status: "Status",
    colorStatus: colors.gray300,
    buttons: <></>,
    title: "Title card",
    onPressDelete: {},
    disabledDelete: false,
    iconButtonDelete: {},
    onPressUpdate: {},
    iconButtonUpdate: {},
    disabledUpdate: false,
    onPressCheck: {},
    iconButtonCheck: {},
    disabledCheck: false,
    updateDate: "01/01/1900",
    skill: ""
  },
};
