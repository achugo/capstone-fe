import React from 'react'


describe('<ProductDetailModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductDetailModal />)
  })
})