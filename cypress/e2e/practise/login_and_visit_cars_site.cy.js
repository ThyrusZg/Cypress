describe('Check if loged in user can access cars section', () => {
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
      // visit cars section
      cy.visit('https://www.njuskalo.hr/auti');
    })
  })
