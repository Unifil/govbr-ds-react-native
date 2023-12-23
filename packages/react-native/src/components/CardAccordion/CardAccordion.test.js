import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CardAccordion } from './CardAccordion'; 

describe('CardAccordion Component', () => {
  const mockOnChange = jest.fn();
  const mockTextCheckbox = ['Option 1', 'Option 2'];

  it('renders correctly when collapsed', () => {
    const { getByText } = render(
      <CardAccordion
        textCheckbox={mockTextCheckbox}
        isExpanded={false}
      />
    );
    expect(getByText(mockTextCheckbox[0])).toBeTruthy();
  });

  it('expands and collapses when pressed', () => {
    const { getByText, queryByText } = render(
      <CardAccordion
        textCheckbox={mockTextCheckbox}
        isExpanded={true}
        onChange={mockOnChange}
        testID="cardAccordion"
      />
    );

    
    fireEvent.press(getByText(mockTextCheckbox[0]));
    expect(mockOnChange).toHaveBeenCalledWith(expect.anything());
    expect(queryByText(mockTextCheckbox[1])).toBeFalsy();
  });

  it('handles checkbox selection correctly', () => {
    const { getByTestId } = render(
      <CardAccordion
        textCheckbox={mockTextCheckbox}
        isExpanded={true}
        onChange={mockOnChange}
        value={[0]} 
      />
    );

    const firstCheckbox = getByTestId('checkbox-0');
    fireEvent.press(firstCheckbox);

    expect(mockOnChange).toHaveBeenCalledWith(expect.anything());
  });

});
   