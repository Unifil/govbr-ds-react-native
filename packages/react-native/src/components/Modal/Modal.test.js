import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Modal} from './Modal';

//validar com a equipe de dev
describe('Modal', () => {

  it('renders correctly', () => {
    const { getByText } = render(
      <Modal>
        <Text>Test Modal Content</Text>
      </Modal>
    );
    expect(getByText('Test Modal Content')).toBeTruthy();
  });

 
  it('applies custom styles', () => {
    const customStyles = {
      height: 200,
      width: 200,
      borderRadius: 10,
    };
    const { getByText } = render(
      <Modal {...customStyles}>
        <Text>Test Modal Content</Text>
      </Modal>
    );
    const modalElement = getByText('Test Modal Content').parent;
    expect(modalElement.props.style).toMatchObject(customStyles);
  });

  it('calls onTouchEnd when the modal area is touched', () => {
    const handleTouchEnd = jest.fn();
    const { getByTestId } = render(
      <Modal onTouchEnd={handleTouchEnd}>
        <Text>Test Modal Content</Text>
      </Modal>
    );

    fireEvent(getByTestId('modal-backdrop'), 'onTouchEnd');
    expect(handleTouchEnd).toHaveBeenCalled();
  });

});
