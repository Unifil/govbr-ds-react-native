import React from "react";
import { View } from "react-native";
import { FilterButton } from "@unifil/react-native";

const FilterButtonMeta = {
  title: "FilterButton",
  component: FilterButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    dataFilter: [
      {
        textFilter: 'Filtro A',
      },
      {
        textFilter: 'Filtro B',
      },
      {
        textFilter: 'Filtro C',
      },
    ]
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default FilterButtonMeta;

export const Default = {};
