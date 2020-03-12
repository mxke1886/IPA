/* eslint-disable no-undef */
describe('Admin can', () => {
    it('choose an entry from the customer list', () => {
        cy.visit('/login')
        cy.url().should('eq', 'http://localhost:3000/login')
        cy.get('.btn')
            .click()
        cy.url().should('eq', 'http://localhost:3000/customers')
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.url().should('eq', 'http://localhost:3000/customers/1')
        cy.visit('http://localhost:3000/customers')
        cy.get('tbody > :nth-child(2) > :nth-child(1)').click()
        cy.url().should('eq', 'http://localhost:3000/customers/2')
    })
})