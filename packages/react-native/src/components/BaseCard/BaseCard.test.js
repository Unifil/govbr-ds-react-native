import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { BaseCard } from './BaseCard';

describe('BaseCard (ListItem) Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <BaseCard>
        <Text>Child Content</Text>
      </BaseCard>
    );
    expect(getByText('Child Content')).toBeTruthy(); 
  });

  it('handles onPress and onLongPress events', () => {
    const onPressMock = jest.fn();
    const onLongPressMock = jest.fn();
    const { getByTestId } = render(
      <BaseCard onPress={onPressMock} onLongPress={onLongPressMock} testID="baseCard">
        <Text>Pressable Content</Text>
      </BaseCard>
    );

    fireEvent.press(getByTestId('baseCard'));
    expect(onPressMock).toHaveBeenCalled();

    fireEvent(getByTestId('baseCard'), 'onLongPress');
    expect(onLongPressMock).toHaveBeenCalled();
  });

  it('applies custom styles and dividers', () => {
    const customStyle = { backgroundColor: 'blue' };
    const { getByTestId } = render(
      <BaseCard
        containerStyle={customStyle}
        topDivider
        bottomDivider
        testID="baseCard"
      />
    );

    const baseCard = getByTestId('baseCard');
    expect(baseCard.props.style).toMatchObject(customStyle);
    expect(baseCard.props.style).toHaveProperty('borderTopWidth');
    expect(baseCard.props.style).toHaveProperty('borderBottomWidth');
  });

  it('renders correctly when disabled', () => {
    const disabledStyle = { opacity: 0.5 };
    const { getByTestId } = render(
      <BaseCard disabled disabledStyle={disabledStyle} testID="baseCard" />
    );

    const baseCard = getByTestId('baseCard');
    expect(baseCard.props.style).toMatchObject(disabledStyle);
  });
});
