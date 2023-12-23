import {Header} from './Header';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
//validar com a equipe de dev
describe('Header Component', () => {
  it('renders title and subtitle correctly', () => {
    const { getByText } = render(
      <Header title="Test Title" subtitle="Test Subtitle" />
    );
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Subtitle')).toBeTruthy();
  });

  it('calls onPress when the icon is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Header
        onPress={mockOnPress}
        icon={<Text testID="icon">Icon</Text>}
      />
    );

    fireEvent.press(getByTestId('icon'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('renders children when provided', () => {
    const { getByText } = render(
      <Header>
        <Text>Child Component</Text>
      </Header>
    );
    expect(getByText('Child Component')).toBeTruthy();
  });

  it('shows a divider when the divider prop is true', () => {
    const { getByTestId } = render(
      <Header divider={true} testID="headerWithDivider" />
    );
    expect(getByTestId('divider')).toBeTruthy();
  });
});
