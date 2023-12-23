import {Card} from './Card';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
//validar com a equipe de dev
describe('Card Component', () => {
  const mockOnPress = jest.fn();
  const mockIcon = <Text>Icon</Text>;
  const mockIconPressed = <Text>IconPressed</Text>;

  it('renders title and description correctly', () => {
    const { getByText } = render(
      <Card
        title="Card Title"
        description="Card Description"
        testID="card"
      />
    );

    expect(getByText('Card Title')).toBeTruthy();
    expect(getByText('Card Description')).toBeTruthy();
  });

  it('responds to onPress event', () => {
    const { getByTestId } = render(
      <Card onPress={mockOnPress} testID="card" />
    );

    fireEvent.press(getByTestId('card'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('renders icons correctly based on press state', () => {
    const { getByText, rerender } = render(
      <Card icon={mockIcon} iconIsPressed={mockIconPressed} testID="card" />
    );

    expect(getByText('Icon')).toBeTruthy();
    
    rerender(
      <Card icon={mockIcon} iconIsPressed={mockIconPressed} testID="card" />
    );

    expect(getByText('IconPressed')).toBeTruthy();
  });

  it('applies custom styles correctly', () => {
    const customStyles = {
      borderRadius: 10,
      height: 150,
      width: 200,
      marginTop: 20,
      marginBottom: 20,
      colorTitle: 'red',
      colorLocal: 'green',
      colorText: 'blue',
    };
    const { getByTestId } = render(
      <Card {...customStyles} testID="card" />
    );

    const card = getByTestId('card');
    expect(card.props.style).toMatchObject({
      borderRadius: customStyles.borderRadius,
      height: customStyles.height,
      width: customStyles.width,
      marginTop: customStyles.marginTop,
      marginBottom: customStyles.marginBottom,
    });
  });
});
