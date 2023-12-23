import {CustomTab} from './CustomTab';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
//validar com a equipe de dev
const mockState = {
  routes: [
    { key: 'tab1', name: 'Tab1' },
    { key: 'tab2', name: 'Tab2' },
  ],
  index: 0,
};

const mockDescriptors = {
  tab1: {
    options: {
      tabBarIcon: jest.fn().mockReturnValue('Icon1'),
      tabBarLabel: 'Label1',
      tabBarTestID: 'tab1',
    },
  },
  tab2: {
    options: {
      tabBarIcon: jest.fn().mockReturnValue('Icon2'),
      tabBarLabel: 'Label2',
      tabBarTestID: 'tab2',
    },
  },
};

const mockNavigation = {
  emit: jest.fn(),
  navigate: jest.fn(),
};

describe('CustomTab Component', () => {
  it('renders tabs correctly', () => {
    const { getByTestId } = render(
      <CustomTab
        state={mockState}
        descriptors={mockDescriptors}
        navigation={mockNavigation}
        showCustomTab={true}
      />
    );

    expect(getByTestId('tab1')).toBeTruthy();
    expect(getByTestId('tab2')).toBeTruthy();
  });

  it('changes focus when a tab is pressed', () => {
    const { getByTestId } = render(
      <CustomTab
        state={mockState}
        descriptors={mockDescriptors}
        navigation={mockNavigation}
        showCustomTab={true}
      />
    );

    fireEvent.press(getByTestId('tab2'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith({
      name: 'Tab2',
      merge: true,
    });
  });

  it('applies active and inactive color correctly', () => {
    const { getByText } = render(
      <CustomTab
        state={mockState}
        descriptors={mockDescriptors}
        navigation={mockNavigation}
        showCustomTab={true}
        tabBarActiveTintColor="green"
        tabBarInactiveTintColor="red"
      />
    );

    expect(getByText('Label1').props.style.color).toBe('green');
    expect(getByText('Label2').props.style.color).toBe('red');
  });

});
