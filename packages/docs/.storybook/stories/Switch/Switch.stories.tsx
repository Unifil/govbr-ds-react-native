import React from "react";
import { View } from "react-native";
import { Switch } from "@unifil/react-native";

const SwitchMeta = {
  title: "Switch",
  component: Switch,
  args: {
    isEnabled: false,
    value: {},
    onValueChange: {},
    label: 'Label'
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default SwitchMeta;

export const Deafult = {
  args: {
    isEnabled: false,
    label: 'Label',
    value: {},
    onValueChange: {}
  },
};

