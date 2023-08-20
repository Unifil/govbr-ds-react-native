import React from "react";
import { View } from "react-native";
import { Toast } from "@unifil/react-native";
import { colors, fontSizes, fontWeights } from "@unifil/tokens";

const ToastMeta = {
  title: "Toast",
  component: Toast,
  args: {
    icon: <></>,
    duration: 3000
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default ToastMeta;

export const Success = {
  args: {
    type: "success",
    message: "Toast success",
    color: colors.lightGreen,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
    colorText: colors.dark,
  },
};

export const Error = {
  args: {
    type: "error",
    message: "Toast error",
    color: colors.weakRed,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
    colorText: colors.dark,
  },
};
