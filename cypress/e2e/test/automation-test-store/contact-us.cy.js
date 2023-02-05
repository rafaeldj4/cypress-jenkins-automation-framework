/// <reference types="Cypress" />

describe('Automation Store Test', () => {
    it('Contact Us Page', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a").contains("Contact Us").click().then((element) => {
            cy.log(`You have clicked on link: "${element.text()}"`)
            
        })

        //Contact page
        cy.get('input[name="first_name"]').type("Rafael")
        cy.get('#ContactUsFrm_email').type("test12@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("I Love Cypress!")
        cy.get('button[title="Submit"]').click()

        //Sucessfull message
        cy.get('.mb40 > :nth-child(3)').should("contain","Your enquiry has been successfully sent to the store owner!")

    });
});