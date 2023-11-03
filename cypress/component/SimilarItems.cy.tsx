import SimilarItems from "../../src/components/Product/SimilarItems";

describe('Test SimilarItems component', () => {

    beforeEach(() => {
        let sm = [];
        cy.request('GET', 'https://api.grocery-guru.de/api/items/similar/?item_id=TOyPOIsBfDAjQiShCgRJ').then((response) => {
            sm = response.body
            console.log(sm)
        })
        cy.mount(<SimilarItems similarItems={sm}/>)
    })

    it('Check component header is visible', () => {
        cy.get('[data-cy="si-header-title"]').should('be.visible')
    })

    it('Check component header title has correct title name', () => {
        cy.get('[data-cy="si-header-title"]').should('have.text', 'Similar Items')
    })

    it('Check item image is visible', () => {
        cy.get('[data-cy="item-img"]').should('be.visible')
    })


    it('Check item title is not empty', () => {
        cy.get('[data-cy="item-title"]').should('not.be.empty')
    })

    it('Check item title is not empty', () => {
        cy.get('[data-cy="item-price"]').should('not.be.empty')
    })
})