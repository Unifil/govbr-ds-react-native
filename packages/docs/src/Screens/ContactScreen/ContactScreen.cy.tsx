import React from 'react'
import { ContactScreen } from './ContactScreen'

describe('<ContactScreen />', () => {
  it('renders', () => {
    cy.mount(<ContactScreen />)
  })
})