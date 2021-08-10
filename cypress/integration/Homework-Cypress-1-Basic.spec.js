/// <reference types="cypress" />

describe('', () => {
    before('', () => {
        cy.visit('https://react-redux.realworld.io/#/?_k=a9ebwf');
    });

    it('to log in', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type('tsdfsdena@mailinator.com');
        cy.get(':nth-child(2) > .form-control').type('Sit_sdfdgfqua*#si_dfficis');
        cy.get('.btn').click();

        cy.get(':nth-child(4) > .nav-link').contains('Animus veritatsdis').should('exist');
    });
});