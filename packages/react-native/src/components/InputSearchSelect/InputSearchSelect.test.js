import {InputSearchSelect} from './InputSearchSelect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

const mockDataDropdown = [
  { name: 'Option 1', value: '1' },
  { name: 'Option 2', value: '2' }
];
//validar com a equipe de dev
describe('InputSearchSelect Component', () => {

  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<InputSearchSelect placeholder="Select an option" />);
    expect(getByPlaceholderText('Select an option')).toBeTruthy();
  });

  
  it('displays dropdown when isExpanded is true', () => {
    const { getByText } = render(<InputSearchSelect isExpanded={true} dataDropdown={mockDataDropdown} />);
    expect(getByText('Option 1')).toBeTruthy();
    expect(getByText('Option 2')).toBeTruthy();
  });

  =
  it('calls onSelect with correct value when an option is selected', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(<InputSearchSelect isExpanded={true} onSelect={onSelectMock} dataDropdown={mockDataDropdown} />);

    fireEvent.press(getByText('Option 1'));
    expect(onSelectMock).toHaveBeenCalledWith('Option 1', '1');
  });

});

