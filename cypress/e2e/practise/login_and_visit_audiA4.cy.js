require('@cypress/xpath');

describe('Check if loged in user can access Audi A4 cars with value up to 15000 €', () => {
    it('passes', () => {
      // Navigte to the Njuskalo log in page  
      cy.visit('https://www.njuskalo.hr/prijava');
      // Agree with data usage of web page
      cy.get('#didomi-notice-agree-button').click();
      // Input username
      cy.get('#login_username').click();
      cy.get('#login_username').type('novi_korisnik_2023');
      // Input password
      cy.get('#login_password').click();
      cy.get('#login_password').type('123456789ABCabc!');
      // Click on submit button
      cy.get('#login_login').click();
      // Visit page with Audi A4 with price up to 15000€
      cy.visit('https://www.njuskalo.hr/auti/audi-a4?price%5Bmax%5D=15000');
      // Get title to be Audi A4
      cy.get('.ContentHeader-title').contains('Audi A4');
    })
  })
