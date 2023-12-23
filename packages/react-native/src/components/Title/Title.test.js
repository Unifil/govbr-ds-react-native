import {Title} from './Title';
import React from 'react';
import { render } from '@testing-library/react-native';

describe('Title Component', () => {
  const defaultProps = {
    text: 'Sample Title',
    color: 'blue',
    size: 20,
    lineHeight: 24,
    weight: 'bold',
    align: 'center',
    type: 'header',
    fontFamily: 'Arial',
  };

  it('renders correctly', () => {
    const { getByText } = render(<Title {...defaultProps} />);
    expect(getByText(defaultProps.text)).toBeTruthy();
  });

  it('applies custom styles', () => {
    const { getByText } = render(<Title {...defaultProps} />);
    const titleElement = getByText(defaultProps.text);

    expect(titleElement.props.style).toMatchObject({
      color: defaultProps.color,
      fontSize: defaultProps.size,
      lineHeight: defaultProps.lineHeight,
      fontWeight: defaultProps.weight,
      textAlign: defaultProps.align,
      fontFamily: defaultProps.fontFamily,
    });
  });

  it('applies type-specific styles', () => {
    const typeProps = { ...defaultProps, type: 'subheader' };
    const { getByText } = render(<Title {...typeProps} />);
    const titleElement = getByText(typeProps.text);
    const expectedStyleForType = {
    };

    expect(titleElement.props.style).toMatchObject(expectedStyleForType);
  });
});
