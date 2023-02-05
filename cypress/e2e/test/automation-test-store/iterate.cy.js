/// <reference types="Cypress" />

describe('Iterate elements', () => {
    it('Each', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("nav ul li a").contains("Fragrance").click()
        cy.get("div.fixed a.prdocutname").each(($el,index,$list)=>{
            if($el.text() == "Armani Code Pour Femme"){
                cy.log(index)
                cy.wrap($el).click()
            }
        })
    });
});