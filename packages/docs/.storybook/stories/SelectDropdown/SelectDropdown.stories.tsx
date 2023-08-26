import React from "react";
import { View } from "react-native";
import { SelectDropdown } from "@unifil/react-native";

const SelectDropdownMeta = {
  title: "Select Dropdown",
  component: SelectDropdown,
  argTypes: {
    onPress: { action: "pressed the select" },
  },
  args: {
    placeholder: 'Select option',
    options: ['Option 1', 'Option 2', 'Option 3'],
    icon: <></>,
    noRotation: false,
    expandIcon: false,
    leftRotate: false,
    positionTop: 0,
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

export default SelectDropdownMeta;

export const Primary = {};
