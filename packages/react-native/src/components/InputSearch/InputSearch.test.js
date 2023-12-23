import { InputSearch } from "/InputSearch";
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

//validar com a equipe de dev
describe('InputSearch Component', () => {

  
  it('renders correctly', () => {
    const { getByTestId, getByText } = render(<InputSearch label="Search" placeholder="Type here" />);
    expect(getByTestId('input-search')).toBeTruthy();
    expect(getByText('Search')).toBeTruthy();
  });

  
  it('displays the correct placeholder', () => {
    const { getByPlaceholderText } = render(<InputSearch placeholder="Type here" />);
    expect(getByPlaceholderText('Type here')).toBeTruthy();
  });

 
  it('calls onChangeText when input is changed', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(<InputSearch placeholder="Type here" onChangeText={onChangeTextMock} />);
    fireEvent.changeText(getByPlaceholderText('Type here'), 'New text');
    expect(onChangeTextMock).toHaveBeenCalledWith('New text');
  });

  
});

