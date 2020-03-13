/* eslint-disable no-undef */
context("Login", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
    });
    describe('Admin can', () => {
        it('login and gets automatically redirected', () => {
            cy.visit('/login')
            cy.url().should('eq', 'http://localhost:3000/login')
            cy.get('div[name="email"] > .cornered').clear().type("test@mail.ch")
            cy.get('div[name="password"] > .cornered').clear().type("abcd")
            cy.get('.btn')
                .click()
            cy.url().should('eq', 'http://localhost:3000/customers')
        })
        it('not login when entering wrong data and error message gets displayed', () => {
            cy.visit('/login')
            cy.url().should('eq', 'http://localhost:3000/login')
            cy.get('div[name="password"] > .cornered').clear().type('wrongPassword')
            cy.get('.btn')
                .click()
            expect(cy.get('.fade').should("have.text", "Login fehlgeschlagen"))
        })
    })
})

