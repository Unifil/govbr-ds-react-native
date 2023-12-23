import {Text} from './Text'
import React from 'react';
import { render } from '@testing-library/react-native';
//validar com a equipe de dev
describe('Text', () => {
  it('renders primary text correctly', () => {
    const { getByText } = render(
      <Text type="primary" text="Primary Text" testID="primaryText" />
    );
    expect(getByText('Primary Text')).toBeTruthy();
  });

  it('renders custom text with custom styles correctly', () => {
    const customProps = {
      type: 'custom',
      text: 'Custom Text',
      color: 'blue',
      size: 20,
      weight: 'bold',
      align: 'center',
      fontFamily: 'Arial',
      textDecoration: 'underline',
      testID: 'customText',
    };

    const { getByTestId } = render(<Text {...customProps} />);
    const customText = getByTestId('customText');

    expect(customText.props.style).toMatchObject({
      color: 'blue',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Arial',
      textDecorationLine: 'underline',
    });
    expect(customText.props.children).toBe('Custom Text');
  });

});
