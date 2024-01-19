import React from 'react';
import { render } from '@testing-library/react-native';
import { TextComponent } from './TextComponent'; 

describe('TextComponent', () => {
  it('renders a primary text', () => {
    const textContent = "Primary Text";
    const { getByText } = render(
      <TextComponent type="primary" text={textContent} />
    );

    expect(getByText(textContent)).toBeTruthy();
  });

  it('renders correctly', () => {
    const customText = "Custom Text";
    const customColor = "blue";
    const customSize = 20;
    const customWeight = "bold";
    const customAlign = "center";

    const { getByText } = render(
      <TextComponent
        type="custom"
        text={customText}
        color={customColor}
        size={customSize}
        weight={customWeight}
        align={customAlign}
      />
    );

    const textElement = getByText(customText);
    expect(textElement.props.style).toMatchObject({
      color: customColor,
      fontSize: customSize,
      fontWeight: customWeight,
      textAlign: customAlign,
    });
  });

});
