import {Toast} from './Toast';
import React from 'react';
import { render, act } from '@testing-library/react-native';
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

//validar com a equipe de dev

describe('Toast Component', () => {
  const mockCloseToast = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with success message', () => {
    const { getByText } = render(
      <Toast
        type="success"
        message="This is a success message"
        closeToast={mockCloseToast}
      />
    );
    expect(getByText('This is a success message')).toBeTruthy();
  });

  it('renders correctly with error message', () => {
    const { getByText } = render(
      <Toast
        type="error"
        message="This is an error message"
        closeToast={mockCloseToast}
      />
    );
    expect(getByText('This is an error message')).toBeTruthy();
  });

  it('closes after the specified duration', () => {
    const customDuration = 1000; 
    render(
      <Toast
        type="success"
        message="This is a success message"
        duration={customDuration}
        closeToast={mockCloseToast}
      />
    );
    act(() => {
      jest.advanceTimersByTime(customDuration);
    });

    expect(mockCloseToast).toHaveBeenCalledWith(false);
  });

  
  it('applies custom styles', () => {
    const { getByText } = render(
      <Toast
        type="success"
        message="Custom styled message"
        colorText="blue"
        backgroundColor="yellow"
        closeToast={mockCloseToast}
      />
    );
    const messageElement = getByText('Custom styled message');
    expect(messageElement.props.style).toMatchObject({ color: 'blue' });
  });
});
