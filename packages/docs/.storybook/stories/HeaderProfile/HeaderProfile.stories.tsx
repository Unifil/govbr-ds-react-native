import React from "react";
import { View } from "react-native";
import { HeaderProfile } from "@unifil/react-native";

const HeaderProfileMeta = {
  title: "HeaderProfile",
  component: HeaderProfile,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    nameProfile: 'Title header profile',
    text: 'Subtitle header profile',
    children: <></>,
    textButton: 'Logout',
    initialLetterProfile: 'AA'
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