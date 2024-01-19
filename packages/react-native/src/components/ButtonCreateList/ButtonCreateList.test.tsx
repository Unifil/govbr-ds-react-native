import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ButtonCreateList } from './ButtonCreateList'; 

describe('ButtonCreateList Component', () => {
  it('renders a primary button', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonCreateList type="primary" text="Primary Button" onPress={onPressMock} />
    );

    const button = getByText('Primary Button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders a disabled button', () => {
    const { getByText } = render(
      <ButtonCreateList type="primary" text="Disabled Button" disabled />
    );

    expect(getByText('Disabled Button')).toBeTruthy();
    
  });

  it('renders a custom button with custom properties', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonCreateList
        type="custom"
        text="Custom Button"
        onPress={onPressMock}
        backgroundColor="blue"
        
      />
    );

    const button = getByText('Custom Button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

});
