import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Tabs from './Tabs';
const mockDataTab = [
  { id: '1', title: 'Tab 1', content: 'Content 1' },
  { id: '2', title: 'Tab 2', content: 'Content 2' },
];
//validar com a equipe de dev
describe('Tabs', () => {
  it('renders all tabs correctly', () => {
    const { getByText } = render(<Tabs dataTab={mockDataTab} />);
    mockDataTab.forEach(tab => {
      expect(getByText(tab.title)).toBeTruthy();
    });
  });

  it('changes content when different tab is pressed', () => {
    const handleTabPress = jest.fn();
    const { getByText } = render(
      <Tabs dataTab={mockDataTab} handleTabPress={handleTabPress} />
    );

    fireEvent.press(getByText(mockDataTab[1].title));
    expect(handleTabPress).toHaveBeenCalledWith(1); 
    expect(getByText(mockDataTab[1].content)).toBeTruthy();
  });

  it('handles scroll event correctly', () => {
    const handleScrollEnd = jest.fn();
    const { getByTestId } = render(
      <Tabs dataTab={mockDataTab} handleScrollEnd={handleScrollEnd} />
    );

    fireEvent.scroll(getByTestId('flatlist-tabs'), {
      nativeEvent: {
        contentOffset: {
          x: 100, 
        },
      },
    });

    expect(handleScrollEnd).toHaveBeenCalled();
  });
});
