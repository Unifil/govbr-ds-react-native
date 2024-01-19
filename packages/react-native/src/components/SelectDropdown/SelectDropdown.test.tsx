import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SelectDropdown } from './SelectDropdown'; 

const mockOptions = [
  { id: '1', code: 'Opção 1' },
  { id: '2', code: 'Opção 2' },
];

describe('<SelectDropdown />', () => {
  it('renders correctly', () => {
    const onChangeMock = jest.fn();
    const placeholder = 'Selecione uma opção';
    const { getByText, queryByText } = render(
      <SelectDropdown
        options={mockOptions}
        onChange={onChangeMock}
        placeholder={placeholder}
      />
    );

    expect(getByText(placeholder)).toBeTruthy();

    fireEvent.press(getByText(placeholder));

    expect(getByText('Opção 1')).toBeTruthy();

    expect(getByText('Opção 2')).toBeTruthy();

    fireEvent.press(getByText('Opção 1'));

    expect(getByText('Opção 1')).toBeTruthy();
    
    expect(queryByText('Opção 2')).toBeFalsy();

    expect(onChangeMock).toHaveBeenCalledWith('1');
  });
   
});
