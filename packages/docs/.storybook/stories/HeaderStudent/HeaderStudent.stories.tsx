import React from "react";
import { View } from "react-native";
import { HeaderStudent } from "@unifil/react-native";

const HeaderStudentMeta = {
  title: "HeaderStudent",
  component: HeaderStudent,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    nameStudent: 'Name Student',
    class: 'Class and serie',
    shortName: 'AA',
    school: 'School',
    iconSchool: <></>
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export default HeaderStudentMeta;

export const Primary = {
  args: {
    nameStudent: 'Name Student',
    class: 'Class and serie',
    shortName: 'AA',
    school: 'School',
    iconSchool: <></>
  }
};