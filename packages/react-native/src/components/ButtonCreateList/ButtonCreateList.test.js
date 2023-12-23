import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ButtonCreateList } from './ButtonCreateList'; 
//validar com a equipe de dev
describe('ButtonCreateList Component', () => {
  const mockOnPress = jest.fn();
  const mockIcon = <Text>Icon</Text>;

  it('renders primary button and responds to press', () => {
    const { getByText } = render(
      <ButtonCreateList
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

  it('renders disabled button correctly', () => {
    const { getByText } = render(
      <ButtonCreateList
        type="primary"
        disabled={true}
        text="Disabled Button"
      />
    );

    const button = getByText('Disabled Button');
    expect(button.parent.props.style).toMatchObject({... props});
  });

  it('renders custom button with icon on the left', () => {
    const { getByText } = render(
      <ButtonCreateList
        type="custom"
        text="Custom Button"
        icon={mockIcon}
        iconLeft={true}
        testID="customButton"
      />
    );

    const button = getByText('Custom Button');
    expect(button.parent.props.children[0]).toEqual(mockIcon);
  });

  it('renders custom button with icon on the right', () => {
    const { getByText } = render(
      <ButtonCreateList
        type="custom"
        text="Custom Button"
        icon={mockIcon}
        iconRight={true}
        testID="customButtonRight"
      />
    );

    const button = getByText('Custom Button');
    expect(button.parent.props.children[2]).toEqual(mockIcon);
  });

  it('applies custom styles for custom button', () => {
    const customStyles = {
      backgroundColor: 'blue',
      borderRadius: 10,
    };
    const { getByTestId } = render(
      <ButtonCreateList
        type="custom"
        text="Custom Button"
        {...customStyles}
        testID="customButtonStyles"
      />
    );

    const button = getByTestId('customButtonStyles');
    expect(button.props.style).toMatchObject(customStyles);
  });
});
