/// <reference types="cypress" />

describe('', () => {
    it('realizar cadastro', () => {
        cy.visit('https://be-the-hero-kappa.vercel.app/register');

        cy.get('input[placeholder="Nome da ONG"]').type('Pets amores de nossas vidas');
    });

    it('realizar login', () => {
    });
});