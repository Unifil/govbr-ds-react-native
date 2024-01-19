import {Slider} from "@unifil/react-native";
import React from 'react';
import { View, Text } from 'react-native';

export default {
  title: 'Slider',
  component: Slider,
};

const mockData = [
  
  { key: '1', content: 'Slide 1' },
  { key: '2', content: 'Slide 2' },
  { key: '3', content: 'Slide 3' },
];

const renderItem = ({ item }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{item.content}</Text>
  </View>
);

export const Default = () => (
  <Slider
    data={mockData}
    renderItem={renderItem}
    
  />
);


