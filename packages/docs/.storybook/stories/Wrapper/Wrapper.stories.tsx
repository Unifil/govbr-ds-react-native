import React from "react";
import { View, Text} from "react-native";
import { Wrapper } from "@unifil/react-native";

const WrapperMeta = {
  title: "Wrapper",
  component: Wrapper,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
        <Text>Wrapper Component</Text>
      </View>
    ),
  ],
};

export default WrapperMeta;

export const Primary = {};