import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Tabs } from './Tabs' 

const mockDataTab = [
  { name: 'Tab 1', icon: <Text>Tab 1 Ícone</Text>, iconActive: <Text>Tab 1 Ícone Ativo</Text> },
  { name: 'Tab 2', icon: <Text>Tab 2 Ícone</Text>, iconActive: <Text>Tab 2 Ícone Ativo</Text> },
  
]

describe('<Tabs />', () => {
  it('renders correctly', () => {
    const handleTabPressMock = jest.fn()
    const { getByText, getAllByRole } = render(
      <Tabs dataTab={mockDataTab} handleTabPress={handleTabPressMock} />
    )

    expect(getByText('Tab 1')).toBeTruthy()
    expect(getByText('Tab 2')).toBeTruthy()

    const tabButtons = getAllByRole('button')
    fireEvent.press(tabButtons[1])

    expect(handleTabPressMock).toHaveBeenCalledWith(1)
  })
})
