import {Tooltip} from './Tooltip'
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

describe('Tooltip Component', () => {
  const defaultProps = {
    title: 'Title',
    text: 'Text',
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    positionArrow: 'topLeft',
    iconClose: <Text>X</Text>, 
  };

  it('renders correctly', () => {
    const { getByText } = render(<Tooltip {...defaultProps} />);
    expect(getByText(defaultProps.title)).toBeTruthy();
    expect(getByText(defaultProps.text)).toBeTruthy();
  });

  it('applies custom position styles', () => {
    const { getByTestId } = render(<Tooltip {...defaultProps} />);
    const tooltipContainer = getByTestId('tooltipContainer'); 

    expect(tooltipContainer.props.style).toMatchObject({
      top: defaultProps.top,
      right: defaultProps.right,
      bottom: defaultProps.bottom,
      left: defaultProps.left,
    });
  });

  it('renders the correct arrow based on the positionArrow prop', () => {
    const { getByTestId } = render(<Tooltip {...defaultProps} positionArrow="bottomRight" />);
    const arrow = getByTestId('arrowBottomRight'); 

    expect(arrow).toBeTruthy();
  });

  it('closes when the close icon is pressed', () => {
    const { getByText, queryByText } = render(<Tooltip {...defaultProps} />);
    const closeButton = getByText('X'); 
    fireEvent.press(closeButton);
    expect(queryByText(defaultProps.text)).toBeFalsy();
  });

});
