import React from "react";
import { View } from "react-native";
import { Title } from "@unifil/react-native";

const TitleMeta = {
  title: "Title",
  component: Title,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Story />
      </View>
    ),
  ],
};

export default TitleMeta;

export const Primary = {
  args: {
    text: "Hello world",
    textColor: "#274A67", 
  },
};

export const Secondary = {
  args: {
    text: "Hello world",
    textColor: "#000", 
  },
};
