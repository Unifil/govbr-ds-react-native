import React from 'react';
import { render } from '@testing-library/react-native';
import { Avatar } from './Avatar';
import {describe, expect, test} from '@jest/globals';
describe('Avatar', () => {
  it('renders the component', () => {
    const { getByText } = render(<Avatar />);
    expect(getByText('HS')).toBeTruthy();
  });

  it('Style', () => {
    const { getByText } = render(<Avatar />);
    const textComponent = getByText('HS');

    expect(textComponent.props.style).toMatchObject({
      color: '#FFFFFF', 
      fontSize: 16,
      fontWeight: 'normal' 
    });

    const viewComponent = textComponent.parent;
    if (viewComponent) {
      expect(viewComponent.props.style).toMatchObject({
        width: 37,
        height: 37,
        borderRadius: 50,
        backgroundColor: 'green', 
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      });
    } else {
      fail("viewComponent não foi encontrado");
    }
  });

  it('não deve renderizar texto vazio', () => {
    const { queryByText } = render(<Avatar />);
    expect(queryByText('Texto Incorreto')).toBeNull();
  });
});
