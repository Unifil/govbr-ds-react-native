import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders a primary button', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button type="primary" text="Primary Button" onPress={onPressMock} />
    );

    const button = getByText('Primary Button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders a secondary button', () => {
    const { getByText } = render(
      <Button type="secondary" text="Secondary Button" />
    );

    expect(getByText('Secondary Button')).toBeTruthy();
  });

  it('renders a disabled button', () => {
    const { getByText } = render(
      <Button type="disabled" text="Disabled Button" />
    );

    expect(getByText('Disabled Button')).toBeTruthy();
  });

  it('renders a custom button', () => {
    const { getByText } = render(
      <Button type="custom" text="Custom Button" backgroundColor="blue" />
    );

    expect(getByText('Custom Button')).toBeTruthy();
   
  });

});
