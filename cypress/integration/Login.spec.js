/* eslint-disable no-undef */
context("user can only login with correct data", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
    });

    describe('Login', () => {
        it('works and redirects', () => {
            cy.visit('/login')
            cy.url().should('eq', 'http://localhost:3000/login')
            cy.get('.btn')
                .click()
            cy.url().should('eq', 'http://localhost:3000/customers')
        })
        it('fails when user enters wrong data and displays error message', () => {
            cy.visit('/login')
            cy.url().should('eq', 'http://localhost:3000/login')
            cy.get('div[name="password"] > .cornered').clear().type('falschesPW')
            cy.get('.btn')
                .click()
            expect(cy.get('.fade').should("have.text", "Login fehlgeschlagen"))
        })
    })
})