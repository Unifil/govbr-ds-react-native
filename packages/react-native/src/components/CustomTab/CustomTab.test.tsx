import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CustomTab } from './CustomTab'; 

const mockState = {
  index: 0,
  routes: [{ key: 'route1', name: 'Inicio' }, { key: 'route2', name: 'Atividades' }, { key: 'route3', name: 'Relatorio' } ],
};
const mockDescriptors = {
  route1: {
    options: {
      tabBarIcon: ({ color }) => <Text style={{ color }}>Icone 1</Text>,
      tabBarLabel: 'Inicio',
      tabBarAccessibilityLabel: 'Tab 1',
      tabBarTestID: 'tab1',
    },
  },
  route2: {
    options: {
      tabBarIcon: ({ color }) => <Text style={{ color }}>Icone 2</Text>,
      tabBarLabel: 'Atividades',
      tabBarAccessibilityLabel: 'Tab 2',
      tabBarTestID: 'tab2',
    },
  },
  route3: {
    options: {
      tabBarIcon: ({ color }) => <Text style={{ color }}>Icone 2</Text>,
      tabBarLabel: 'Relatorio',
      tabBarAccessibilityLabel: 'Tab3',
      tabBarTestID: 'tab3',
    },
  },

};
const mockProps = {
  showCustomTab: true,
  state: mockState,
  descriptors: mockDescriptors,
  navigation: {
    emit: jest.fn(),
    navigate: jest.fn(),
  },
  tabBarActiveTintColor: 'blue',
  tabBarInactiveTintColor: 'gray',
};

describe('<CustomTab />', () => {
  it('renders the component correctly', () => {
    const { getByText, getByTestId } = render(
      <CustomTab {...mockProps} />
    );
    
    expect(getByText('Inicio')).toBeTruthy();
    expect(getByText('Inicio')).toBeTruthy();
    expect(getByTestId('tab1')).toBeTruthy();

    expect(getByText('Atividades')).toBeTruthy();
    expect(getByText('Atividades')).toBeTruthy();
    expect(getByTestId('tab2')).toBeTruthy();

    expect(getByText('Relatorio')).toBeTruthy();
    expect(getByText('Relatorio')).toBeTruthy();
    expect(getByTestId('Relatorio')).toBeTruthy();
  });

  it('does not render when showCustomTab is false', () => {
    const { queryByText } = render(
      <CustomTab {...mockProps} showCustomTab={false} />
    );

    expect(queryByText('Inicio')).toBeFalsy();
    expect(queryByText('Inicio')).toBeFalsy();
    expect(queryByText('Atividades')).toBeFalsy();
    expect(queryByText('Atividades')).toBeFalsy();
    expect(queryByText('Relatorio')).toBeFalsy();
    expect(queryByText('Relatorio')).toBeFalsy();
  });

  it('navigates correctly when a tab is pressed', () => {
    const { getByTestId } = render(
      <CustomTab {...mockProps} />
    );

    fireEvent.press(getByTestId('tab1'));

    expect(mockProps.navigation.navigate).toHaveBeenCalledWith({
      name: 'Rota 1',
      merge: true
    });
  });

  it('emits the correct event when a tab is long-pressed', () => {
    const { getByTestId } = render(
      <CustomTab {...mockProps} />
    );

 
    fireEvent(getByTestId('tab1'), 'onLongPress');
 
    expect(mockProps.navigation.emit).toHaveBeenCalledWith({
      type: 'tabLongPress',
      target: 'route1'
    });
  });

  
});
