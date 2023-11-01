import SimilarItems from "../../src/components/Product/SimilarItems";

describe('Test SimilarItems component', () => {

  beforeEach(()=>{
    cy.mount(<SimilarItems/>)
  })

  it('Check component header is visible', () => {
    cy.get('[data-cy="si-header-title"]').should('be.visible')
  })

  it('Check component header title has correct title name', () => {
    cy.get('[data-cy="si-header-title"]').should('have.text','Similar Items')
  })

  it('Check item title is not empty', () => {
    cy.get('[data-cy="item-title"]').should('not.be.empty')
  })

  it('Check item title is not empty', () => {
    cy.get('[data-cy="item-price"]').should('not.be.empty')
  })
})