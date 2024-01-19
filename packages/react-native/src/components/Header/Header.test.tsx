import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Header } from './Header'; 
import { Text } from 'react-native';

describe('<Header />', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Header title="Title" subtitle="Subtitle" />
    );

   
    expect(getByText('Title')).toBeTruthy();
    expect(getByText('Subtitle')).toBeTruthy();
  });

  it('Executes onPress when the icon is pressed', () => {
    const onPressMock = jest.fn();
    const mockIcon = <Text>Ícone</Text>; 
    const { getByText } = render(
      <Header onPress={onPressMock} icon={mockIcon} title="Title" />
    );

    fireEvent.press(getByText('Icon'));

    expect(onPressMock).toHaveBeenCalled();
  });

  it('When divider is true', () => {
    const { getByTestId } = render(
      <Header title="Title" divider={true} />
    );

    expect(getByTestId('divider')).toBeTruthy();
  });

});
