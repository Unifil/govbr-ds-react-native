import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ButtonIcon } from '.ButtonIcon';

describe('ButtonIcon Component', () => {
  const mockOnPress = jest.fn();
  const mockIcon = <Text>Icon</Text>;

  it('renders correctly', () => {
    const { getByText } = render(
      <ButtonIcon onPress={mockOnPress} icon={mockIcon} />
    );
    expect(getByText('Icon')).toBeTruthy(); 
  });

  it('responds to onPress event', () => {
    const { getByText } = render(
      <ButtonIcon onPress={mockOnPress} icon={mockIcon} testID="buttonIcon" />
    );

    const button = getByText('Icon');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled(); 
  });

});
