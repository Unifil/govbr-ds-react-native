import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Tooltip } from './Tooltip'; 
import {View} from 'react-native';

describe('Tooltip Component', () => {
  const mockIconClose = <View testID="icon-close"></View>; 

  it('renders tooltip correctly', () => {
    const { getByText } = render(
      <Tooltip 
        text="Test Tooltip" 
        title="Test Title"
        iconClose={mockIconClose}
      />
    );

    expect(getByText('Test Tooltip')).toBeTruthy();
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('closes the tooltip on pressing close icon', () => {
    const { getByTestId, queryByText } = render(
      <Tooltip 
        text="Test Tooltip" 
        title="Test Title" 
        iconClose={mockIconClose}
      />
    );

    fireEvent.press(getByTestId('icon-close'));
    expect(queryByText('Test Tooltip')).toBeNull();
  });

  // Testes para diferentes posições da seta, por exemplo:
  it('renders the arrow in top left position', () => {
    const { getByTestId } = render(
      <Tooltip 
        positionArrow="topLeft"
        text="Test Tooltip"
        iconClose={mockIconClose}
      />
    );
  });
  it('renders the arrow in top right position', () => {
    const { getByTestId } = render(
      <Tooltip 
        positionArrow="topRight"
        text="Test Tooltip"
        iconClose={mockIconClose}
      />
    );
  });
  it('renders the arrow in bottom right position', () => {
    const { getByTestId } = render(
      <Tooltip 
        positionArrow="bottomRight"
        text="Test Tooltip"
        iconClose={mockIconClose}
      />
    );
  });
  it('renders the arrow in bottom left position', () => {
    const { getByTestId } = render(
      <Tooltip 
        positionArrow="bottomLeft"
        text="Test Tooltip"
        iconClose={mockIconClose}
      />
    );
  });
});
