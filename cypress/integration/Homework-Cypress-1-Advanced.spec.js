/// <reference types="cypress" />

describe('', () => {
    let user;
    before('', () => {
        cy.visit('https://react-redux.realworld.io/#/?_k=a9ebwf');
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

    it('', () => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type(user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password);
        cy.get('.btn').click();

        cy.get('.swal-modal').should('contain', 'Your registration was succesful!');
    });
});