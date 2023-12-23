import {CardUser} from './CardUser';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CardUser } from './CardUser';
//validar com a equipe de dev
describe('CardUser Component', () => {
  const mockOnPress = jest.fn();
  const mockIcon = <Text>Icon</Text>;
  const mockIconPressed = <Text>IconPressed</Text>;

  it('renders name and description correctly', () => {
    const { getByText } = render(
      <CardUser
        name=" User Mec"
        description="Description here"
        icon={mockIcon}
        iconIsPressed={mockIconPressed}
        onPress={mockOnPress}
        testID="cardUser"
      />
    );

    expect(getByText('User Mec')).toBeTruthy();
    expect(getByText('Description here')).toBeTruthy();
  });

  it('responds to onPress event', () => {
    const { getByTestId } = render(
      <CardUser
        name="User Mec"
        onPress={mockOnPress}
        testID="cardUser"
      />
    );

    fireEvent.press(getByTestId('cardUser'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('shows correct initial letters in avatar', () => {
    const { getByText } = render(
      <CardUser
        name="User Mec"
        testID="cardUser"
      />
    );

    expect(getByText('JD')).toBeTruthy();
  });

  it('applies custom styles correctly', () => {
    const customStyles = {
      borderRadius: 10,
      height: 100,
      width: 200,
      marginTop: 20,
      marginBottom: 20
    };
    const { getByTestId } = render(
      <CardUser
        {...customStyles}
        testID="cardUser"
      />
    );

    const card = getByTestId('cardUser');
    expect(card.props.style).toMatchObject(customStyles);
  });

});
