import React from "react";
import { View } from "react-native";
import { ModalComponent } from "@unifil/react-native";

const ModalMeta = {
  title: "Modal",
  component: ModalComponent,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    onTouchEnd: {},
    children: <></>
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default ModalMeta;

export const Default = {
  args: {
    height: 480,
    width: '90%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0
  }
};
