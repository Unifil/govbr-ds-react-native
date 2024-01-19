import React from 'react';
import { render } from '@testing-library/react-native';
import { Title } from './Title'; // Ajuste o caminho de importação conforme necessário

describe('Title Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Title type="primary" text="Primary Title" />
    );

    expect(getByText('Primary Title')).toBeTruthy();
  });

  it('renders a secondary title', () => {
    const { getByText } = render(
      <Title type="secondary" text="Secondary Title" />
    );

    expect(getByText('Secondary Title')).toBeTruthy();
  });

  it('renders a custom title with custom properties', () => {
    const customText = "Custom Title";
    const customColor = "blue";
    const customSize = 20;

    const { getByText } = render(
      <Title
        type="custom"
        text={customText}
        color={customColor}
        size={customSize}
      />
    );

    const titleElement = getByText(customText);
    expect(titleElement.props.style).toMatchObject({
      color: customColor,
      fontSize: customSize,
    });
  });
});
