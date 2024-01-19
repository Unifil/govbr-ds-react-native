import React from "react";
import { View } from "react-native";
import { InputSearchSelect } from "@unifil/react-native";

const InputSearchSelectMeta = {
  title: "InputSearchSelect",
  component: InputSearchSelect,
  argTypes: {
    onPress: { action: "pressed the select" },
  },
  args: {
    placeholder: 'Select option',
    dataDropdown: ['Option 1', 'Option 2', 'Option 3'],
    isExpanded: true,
    icon: <></>,
    positionTop: 50,
    positionBottom: 0,
    positionLeft: 0,
    positionRight: 0,
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default InputSearchSelectMeta;

export const Primary = {
  args: {
    ...InputSearchSelectMeta.args,
    value: 'Option 1'
  },
};


