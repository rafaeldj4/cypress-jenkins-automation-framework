/// <reference types="Cypress" />

describe('Invoke', () => {
    it('Invoke Challenge', () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").as("productBox")
        cy.get("@productBox").should("have.length",16)
        cy.get("@productBox").find(".pricetag a")
    });
});