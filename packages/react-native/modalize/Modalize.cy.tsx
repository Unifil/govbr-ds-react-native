import React from 'react'
import { Modalize } from './Modalize'

describe('<Modalize />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Modalize />)
  })
})