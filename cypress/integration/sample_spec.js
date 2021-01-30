describe('my fist cypress test', () => {
    it('first assert', () => {
        expect(true).to.equal(true)
    })
    it('search a product in jumbo', () => {
        cy.visit('http://localhost:8080/#/Home')
        cy.get('#input-9').type('ipad')
        cy.get('.mdi-magnify').click()
        cy.get('.v-card__title:first').click()
    })
}
)