import React from "react";
import { Text, View } from "react-native";
import { Header } from "@unifil/react-native";

const HeaderMeta = {
  title: "Header",
  component: Header,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: 'Title header',
    subtitle: 'Subtitle header',
    divider: true,
    icon: <Text>Voltar</Text>
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