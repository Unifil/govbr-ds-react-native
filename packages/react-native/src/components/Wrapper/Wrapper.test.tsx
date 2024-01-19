import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Wrapper } from './Wrapper';

describe('Wrapper Component', () => {
  it('Testeando se é renderizado corretamente', () => {
    const testMessage = 'Teste';
    const { getByText } = render(
      <Wrapper>
        <Text>{testMessage}</Text>
      </Wrapper>
    );

    expect(getByText(testMessage)).toBeTruthy();
  });

});
