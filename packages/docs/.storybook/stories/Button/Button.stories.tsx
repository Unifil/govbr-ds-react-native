import React from "react";
import { View } from "react-native";
import { Checkbox } from "@unifil/react-native";

const CheckboxMeta = {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    onPress: { action: "pressed the Checkbox" },
  },
  args: {
    textCheckbox: ['Checkbox 1', 'Checkbox 2'],
    multipleSelection: false,
    flexDirection: "row",
    icon: "√",
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default CheckboxMeta;

export const Primary = {};
