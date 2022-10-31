/// <reference types="cypress"/>

const { Utils } = require("../support/Utils.js");

describe('Teste Automation', () => {

  it('Deve conseguir realizar  o cadastro', () => {

    var email = Utils.generateRandomString(6).concat('-').concat(Utils.generateRandomString(6)).concat('@').concat(Utils.generateRandomString(4)).concat('.com');
    var passwd = Utils.generateRandomString(8);
    var firstname = Utils.generateRandomString(8);
    var secondname = Utils.generateRandomString(6);

    cy.visit('http://automationpractice.com/index.php');
    cy.get('.login').click();
    cy.get('#email_create').type(email);
    cy.get('#SubmitCreate').click();

    cy.get('#uniform-id_gender1', {timeout: 10000}).click();

    cy.get('#customer_firstname').type(firstname);
    cy.get('#customer_lastname').type(secondname);

    cy.get('#passwd').type(passwd);

    cy.get('#days').select('10');
    cy.get('#months').select('4');
    cy.get('#years').select('1998')

    cy.get('#optin').click();

    cy.get('#company').type(Utils.generateRandomString(10));
    cy.get('#address1').type(Utils.generateRandomString(8));
    cy.get('#address2').type(Utils.generateRandomString(6));
    cy.get('#city').type(Utils.generateRandomString(10));
    cy.get('#id_state').select('Kansas');
    cy.get('#postcode').type(Utils.generateRandomNumbers(5));
    cy.get('#phone').type(Utils.generateRandomNumbers(8));
    cy.get('#phone_mobile').type(Utils.generateRandomNumbers(8));
    cy.get('#alias').type(Utils.generateRandomString(10));

    cy.get('#submitAccount').click();

    cy.scrollTo(0, 0);
    cy.get("[title='View my customer account'] span").should('have.text', firstname.concat(' ').concat(secondname));

  });
    
  it('Deve poder realizar login', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('.login').click();
    cy.get('#email').type('cypress-test@automation.com');
    cy.get('#passwd').type('valid123');

    cy.intercept('POST', 'http://automationpractice.com/index.php?controller=authentication').as('loginLog');
    cy.get('#SubmitLogin').click();
    cy.wait('@loginLog').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(302);
    })

    cy.scrollTo(0, 0);
    cy.get("[title='View my customer account'] span").should('have.text', 'Cypress Automation');

  });


});
