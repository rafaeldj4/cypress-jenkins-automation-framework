/// <reference types="Cypress" />

describe('Variables', () => {
    it('Get element text', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        cy.get('.maintext').invoke("text").as("mitexto")
        cy.get("@mitexto").then(($el)=>{
            cy.get('#ContactUsFrm_first_name').type($el)
        })
        


    });
});