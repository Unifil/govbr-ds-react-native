import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  it('renders primary button and responds to press', () => {
    const { getByText } = render(
      <Button
        type="primary"
        text="Primary Button"
        onPress={mockOnPress}
        testID="primaryButton"
      />
    );

    const button = getByText('Primary Button');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('renders secondary button with custom width', () => {
    const customWidth = 200;
    const { getByText } = render(
      <Button type="secondary" text="Secondary Button" width={customWidth} />
    );

    const button = getByText('Secondary Button');
    expect(button.parent.props.style).toMatchObject({ width: customWidth });
  });

  it('renders disabled button and does not respond to press', () => {
    const { getByTestId } = render(
      <Button type="disabled" text="Disabled Button" testID="disabledButton" />
    );

    const button = getByTestId('disabledButton');
    fireEvent.press(button);
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('shows ActivityIndicator when loading', () => {
    const { getByTestId } = render(
      <Button isLoading={true} text="Loading Button" testID="loadingButton" />
    );

    expect(getByTestId('loadingButton').findByType(ActivityIndicator)).toBeTruthy();
  });

  it('applies custom styles for custom button', () => {
    const customStyles = {
      backgroundColor: 'blue',
      borderRadius: 10,
    };
    const { getByTestId } = render(
      <Button
        type="custom"
        text="Custom Button"
        {...customStyles}
        testID="customButton"
      />
    );

    const button = getByTestId('customButton');
    expect(button.props.style).toMatchObject(customStyles);
  });
});
