import React from "react";
import { View } from "react-native";
import { ProgressBar } from "@unifil/react-native";

const ProgressBarMeta = {
  title: "ProgressBar",
  component: ProgressBar,
  args: {
    progress: 50,
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default ProgressBarMeta;

export const Default = {
  args: {
    progress: 50
  },
};
