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
    textCheckbox: ['option 1', 'Option 2'],
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
