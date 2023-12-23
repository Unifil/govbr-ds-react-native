import {Checkbox} from './Checkbox';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
//validar com a equipe de dev
describe('Checkbox Component', () => {
  const mockSetCheckboxStates = jest.fn();
  const mockIcon = <Text>Checked</Text>;
  const mockOnPress = jest.fn();

  it('renders correctly', () => {
    const { getByText } = render(
      <Checkbox
        textCheckbox="Check this"
        checkboxStates={false}
        setCheckboxStates={mockSetCheckboxStates}
        onPress={mockOnPress}
      />
    );
    expect(getByText('Check this')).toBeTruthy();
  });

  it('responds to onPress event', () => {
    const { getByTestId } = render(
      <Checkbox
        textCheckbox="Check this"
        checkboxStates={false}
        setCheckboxStates={mockSetCheckboxStates}
        onPress={mockOnPress}
        testID="checkbox"
      />
    );

    fireEvent.press(getByTestId('checkbox'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('shows icon when checkboxStates is true', () => {
    const { getByText } = render(
      <Checkbox
        checkboxStates={true}
        icon={mockIcon}
      />
    );

    expect(getByText('Checked')).toBeTruthy();
  });

});
