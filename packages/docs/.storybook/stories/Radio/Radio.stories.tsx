import React from "react";
import { View } from "react-native";
import { Radio } from "@unifil/react-native";

const RadioMeta = {
  title: "Radio",
  component: Radio,
  argTypes: {
    onPress: { action: "pressed the Radio" },
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default RadioMeta;

export const Default = {
  args: {
    label: "Label",
    isSelected: false,
    onPress: {}
  }
};
