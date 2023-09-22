require('@cypress/xpath');

describe('Check if njuskalo log in will fail', () => {
    it('passes', () => {
      // Navigte to the Njuskalo log in page  
      cy.visit('https://www.njuskalo.hr/prijava');
      // Agree with data usage of web page
      cy.get('#didomi-notice-agree-button').click();
      // Input username
      cy.get('#login_username').click();
      cy.get('#login_username').type('Test_korisnik123');
      // Input password
      cy.get('#login_password').click();
      cy.get('#login_password').type('Lozinka123!');
      // Click on submit button
      cy.get('#login_login').click();
      // Get notification that log in failed
      cy.xpath('/html/body/div[4]/div[2]/div/main/div/form/div[1]/div');
    })
  })