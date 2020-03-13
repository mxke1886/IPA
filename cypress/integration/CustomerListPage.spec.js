/* eslint-disable no-undef */
describe('Admin can', () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit('/login')
        cy.url().should('eq', 'http://localhost:3000/login')
        cy.get('div[name="email"] > .cornered').clear().type("test@mail.ch")
        cy.get('div[name="password"] > .cornered').clear().type("abcd")
        cy.get('.btn')
            .click()
        cy.url().should('eq', 'http://localhost:3000/customers')
    });
    it('choose an entry from the customer list', () => {
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.url().should('eq', 'http://localhost:3000/customers/1')
        cy.visit('http://localhost:3000/customers')
        cy.get('tbody > :nth-child(2) > :nth-child(1)').click()
        cy.url().should('eq', 'http://localhost:3000/customers/2')
    })
    it('see an error message when content fails to load', () => {
        cy.server()
        cy.route({ url: '/customers', status: 500, response: {} })
        cy.visit('http://localhost:3000/customers')
        cy.url().should('eq', 'http://localhost:3000/customers')
        cy.get('.fade').should('have.text', 'Laden der Daten fehlgeschlagen')
    })
})

