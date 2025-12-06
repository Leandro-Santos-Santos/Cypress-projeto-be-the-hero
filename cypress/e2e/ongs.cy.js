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
        //cy.request({
           //method: 'POST',
           //url: 'http://localhost:3333/ongs',     
          // body: {
            //name: "Pets amores de nossas vidas",
           // email: "petsdoacao@auaumiau.com",
            //whatsapp: "51999999999",
            //city: "Porto Alegre",
            //uf: "RS"
           //} 
        //})

        cy.visit('https://be-the-hero-kappa.vercel.app/');
        cy.get('input[placeholder="Sua ID"]').type('b1c8f6d7');

        cy.get('button[class="button"]').click();
    });
});