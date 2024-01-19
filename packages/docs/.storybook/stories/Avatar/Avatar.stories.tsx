import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar} from "@unifil/react-native";

export default {
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

