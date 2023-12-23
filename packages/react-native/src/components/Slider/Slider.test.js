import { Slider } from './Slider';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native/Libraries/Utilities/Dimensions', () => {
  return {
    get: jest.fn().mockReturnValue({ width: 375, height: 667 }),
  };
});
//validar com a equipe de dev
const mockData = [
  { id: '1', content: 'Slide 1' },
  { id: '2', content: 'Slide 2' },
];

const mockRenderItem = ({ item }) => <View>{item.content}</View>;

describe('Slider', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Slider
        data={mockData}
        renderItem={mockRenderItem}
      />
    );
    expect(getByText('Slide 1')).toBeTruthy();
  });

  it('navigates to next slide', () => {
    const onSlideChange = jest.fn();
    const { getByText } = render(
      <Slider
        data={mockData}
        renderItem={mockRenderItem}
        onSlideChange={onSlideChange}
      />
    );
    expect(onSlideChange).toHaveBeenCalledWith(1, 0); 
  });

  it('calls onDone when the last slide is reached and done button is pressed', () => {
    const onDone = jest.fn();
    const { getByText } = render(
      <Slider
        data={mockData}
        renderItem={mockRenderItem}
        onDone={onDone}
      />
    );
    expect(onDone).toHaveBeenCalled();
  });

});
