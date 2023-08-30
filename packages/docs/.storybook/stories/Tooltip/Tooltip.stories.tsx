import React from "react";
import { View } from "react-native";
import { Tooltip } from "@unifil/react-native";

const TooltipMeta = {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: 'Dica',
    text: 'Text decription',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    iconClose: <>X</>,
    positionArrow: 'topLeft'
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default TooltipMeta;

export const Default = {};
