import React from "react";
import { View } from "react-native";
import { InputSearch } from "@unifil/react-native";
import { colors } from "@unifil/tokens";

const InputSearchMeta = {
  title: "InputSearch",
  component: InputSearch,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    onChangeText: {},
    value: {},
    label: 'Label input',
    onSubmitEditing: {},
    icon: <></>,
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default InputSearchMeta;

export const Default = {
  args: {
    placeholder: "Busque atividades na sua lista desejada...",
    placeholderColor: colors.gray400,
    label: 'Label input',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0
  },
};