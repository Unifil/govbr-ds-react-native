import {Wrapper} from './Wrapper'
import React from 'react';
import { render } from '@testing-library/react-native';

describe('Wrapper Component', () => {
  it('renders its children correctly', () => {
    const testText = 'Test child';
    const { getByText } = render(
      <Wrapper>
        <Text>{testText}</Text>
      </Wrapper>
    );
    expect(getByText(testText)).toBeTruthy();
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'blue', padding: 10 };
    const { getByTestId } = render(
      <Wrapper style={customStyle} testID="wrapper">
        <Text>Test</Text>
      </Wrapper>
    );
    const wrapper = getByTestId('wrapper');

    expect(wrapper.props.style).toMatchObject(customStyle);
  });

});
