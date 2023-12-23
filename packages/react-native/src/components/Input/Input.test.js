import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Input testID="input-test" />);
    expect(getByTestId('input-test')).toBeDefined();
  });

  it('applies styles based on props', () => {
    const { getByTestId } = render(
      <Input
        testID="input-test"
        marginTop={10}
        marginBottom={10}
        marginLeft={10}
        marginRight={10}
      />
    );
    const input = getByTestId('input-test');
    expect(input.parent.parent.props.style).toMatchObject({
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    });
  });

  it('formats text for CPF correctly', () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <Input cpf onChangeText={onChangeTextMock} testID="input-cpf" />
    );
    const input = getByTestId('input-cpf');

    fireEvent.changeText(input, '12345678901');
    expect(onChangeTextMock).toHaveBeenCalledWith('123.456.789-01');
  });

});


