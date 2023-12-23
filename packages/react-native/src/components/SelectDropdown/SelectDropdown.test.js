import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { SelectDropdown } from './SelectDropdown';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
const mockOptions = [
  { id: 1, code: 'Option 1' },
  { id: 2, code: 'Option 2' }
];

describe('SelectDropdown', () => {
  it('renders correctly with placeholder', () => {
    const { getByText } = render(<SelectDropdown placeholder="Select an option" />);
    expect(getByText('Select an option')).toBeTruthy();
  });

  it('toggles dropdown on press', () => {
    const { getByText, queryByText } = render(<SelectDropdown options={mockOptions} />);
    
    fireEvent.press(getByText('Select an option'));
    expect(queryByText('Option 1')).toBeTruthy();
    
    fireEvent.press(getByText('Select an option'));
    expect(queryByText('Option 1')).toBeFalsy();
  });

  it('calls onChange with the correct value when an option is selected', () => {
    const handleChange = jest.fn();
    const { getByText } = render(<SelectDropdown options={mockOptions} onChange={handleChange} />);
    
    fireEvent.press(getByText('Select an option'));
    fireEvent.press(getByText('Option 1'));
    expect(handleChange).toHaveBeenCalledWith(1); 
  });

  it('displays selected value correctly', () => {
    const { getByText } = render(<SelectDropdown options={mockOptions} />);
    
    
    fireEvent.press(getByText('Select an option'));
    fireEvent.press(getByText('Option 1'));
    expect(getByText('Option 1')).toBeTruthy();
  });
});
