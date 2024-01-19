import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { InputSearchSelect } from './InputSearchSelect'; 

const mockDataDropdown = [
  { name: 'Opção 1', value: '1' },
  { name: 'Opção 2', value: '2' },
  
];

describe('<InputSearchSelect />', () => {
  it('Renders correctly', () => {
    const onSelectMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <InputSearchSelect
        dataDropdown={mockDataDropdown}
        onSelect={onSelectMock}
        placeholder="Digite para pesquisar"
        isExpanded={true}
      />
    );

    fireEvent.changeText(getByPlaceholderText('Digite para pesquisar'), 'Opção');

    expect(getByText('Opção 1')).toBeTruthy();
    expect(getByText('Opção 2')).toBeTruthy();

    fireEvent.press(getByText('Opção 1'));

    expect(onSelectMock).toHaveBeenCalledWith('Opção 1', '1');
  });

});
