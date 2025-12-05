/// <reference types="cypress" />

describe('', () => {
    it('realizar cadastro', () => {
        cy.visit('https://be-the-hero-kappa.vercel.app/register');

        cy.get('input[placeholder="Nome da ONG"]').type('Pets amores de nossas vidas');
        cy.get('input[placeholder="E-mail"]').type('petsdoacao@auaumiau.com');
        cy.get('input[placeholder="WhatsApp"]').type('51999999999');
        cy.get('input[placeholder="Cidade"]').type('Porto Alegre');
        cy.get('input[placeholder="UF"]').type('RS');

        cy.get('button[class="button"]').click();

    });

    it('realizar login', () => {
        

    });
});