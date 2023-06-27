import React from "react";
import { View, Text} from "react-native";
import { Header } from "@unifil/react-native";

const HeaderMeta = {
  title: "Header",
  component: Header,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    logo:  <Text>Logo</Text>,
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default HeaderMeta;

export const Primary = {};