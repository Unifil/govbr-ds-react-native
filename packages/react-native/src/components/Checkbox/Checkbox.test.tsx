import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {Checkbox} from './Checkbox';

describe('Checkbox', () => {
  const mockOnPress = jest.fn();

  it('renders correctly', () => {
    const { getByTestId } = render(<Checkbox onPress={mockOnPress} />);
    expect(getByTestId('checkbox')).toBeTruthy();
  });

  it('calls onPress when clicked', () => {
    const { getByTestId } = render(<Checkbox onPress={mockOnPress} />);
    fireEvent.press(getByTestId('checkbox'));
    expect(mockOnPress).toHaveBeenCalled();
  });

});
