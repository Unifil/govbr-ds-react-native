import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Slider } from './Slider'; 
import { Text, View } from 'react-native';


const mockData = [
  { id: 'slide1', content: 'Conteúdo do Slide 1' },
  { id: 'slide2', content: 'Conteúdo do Slide 2' },
  { id: 'slide3', content: 'Conteúdo do Slide 3' },
 
];

const renderItem = ({ item }) => (
  <View>
    <Text>{item.content}</Text>
  </View>
);

describe('<Slider />', () => {
  it('renders correctly', () => {
    const onSlideChangeMock = jest.fn();
    const { getByText } = render(
      <Slider
        data={mockData}
        renderItem={renderItem}
        onSlideChange={onSlideChangeMock}
      />
    );

    expect(getByText('Conteúdo do Slide 1')).toBeTruthy();
  });
});
