import React from "react";
import { View, Text } from "react-native";
import { Header } from "@unifil/react-native";

const HeaderProfileMeta = {
  title: "HeaderProfile",
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

export default HeaderProfileMeta;

export const Primary = {
  args: {
    nameProfile: 'Title header profile',
    text: 'Subtitle header profile',
    children: <></>,
    textButton: 'Logout',
    initialLetterProfile: 'AA'
  }
};