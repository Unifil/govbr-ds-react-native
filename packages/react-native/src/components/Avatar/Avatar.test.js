import React from 'react';
import { render } from '@testing-library/react-native';
import { Avatar } from './Avatar'; 

describe('Avatar Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Avatar />);
    expect(getByText('MC')).toBeTruthy();
  });

  it('applies style correctly', () => {
    const { getByText } = render(<Avatar />);
    const textElement = getByText('MC');

    expect(textElement.props.style).toMatchObject({
      color: 'white', 
      fontSize: 16,
      fontWeight: 'normal', 
    });

  });

});



