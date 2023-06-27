import React from "react";
import { View } from "react-native";
import { CustomTab } from "@unifil/react-native";

const CustomTabMeta = {
  title: "CustomTab",
  component: CustomTab,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    state: {
      routes: [
        { key: "first", name: "Inicio" },
        { key: "second", name: "Atividades" },
        { key: "third", name: "Relatorio" },
      ],
      index: 0,
    },
    descriptors: {
      first: {
        key: "first",
        name: "Inicio",

        options: {
          tabBarIcon: "home",
          tabBarLabel: "Home",
          tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          },
        },
      },
      second: {
        key: "second",
        name: "Atividades",
        options: {
          tabBarIcon: "credit-card",
          tabBarLabel: "credit-card",
          tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            activeBackgroundColor: "green",
          },
        },
      },
      third: {
        key: "third",
        name: "Relatorio",
        options: {
          tabBarIcon: "credit-card",
          tabBarLabel: "credit-card",
          tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          },
        },
      },
    },
  },
  decorators: [
    (Story: any) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          flex: 1,
        }}
      >
      </View>
    ),
  ],
};

export default CustomTabMeta;

export const Primary = {};
