import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Modal} from './Modal'; 
import { Text} from 'react-native';
describe('<Modal />', () => {
  it('renders correctly', () => {
    const onTouchEndMock = jest.fn();
    const mockProps = {
      borderRadius: 10,
      height: 200,
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 20,
      onTouchEnd: onTouchEndMock,
      children: <Text>Conteúdo do Modal</Text> 
    };

    const { getByText } = render(
      <Modal {...mockProps} />
    );

    expect(getByText('Content')).toBeTruthy();

    fireEvent(getByText('Content'), 'onTouchEnd');
    expect(onTouchEndMock).toHaveBeenCalled();
  });

});
