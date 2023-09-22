require('@cypress/xpath');

describe('Check if user successfully loggs in and loggs out', () => {
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
      // Logout with link 
      cy.visit('https://www.njuskalo.hr/odjava');
      // Get log in button on the home page
      cy.xpath('//*[@id="pb-app"]/div[5]/div/header/nav/ul/li[1]/a');
    })
  })