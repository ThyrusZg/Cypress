require('@cypress/xpath');

describe('Check if user successfully loggs in and loggs out', () => {
    it('passes', () => {
      // Navigte to the Njuskalo log in page  
      cy.visit('https://www.njuskalo.hr/prijava')
      // Agree with data usage of web page
      cy.get('#didomi-notice-agree-button').click()
      // Input username
      cy.get('#login_username').click()
      cy.get('#login_username').type('novi_korisnik_2023')
      // Input password
      cy.get('#login_password').click()
      cy.get('#login_password').type('123456789ABCabc!')
      // Click on submit button
      cy.get('#login_login').click()
      // Logout with link 
      cy.visit('https://www.njuskalo.hr')
      // Click on logout button
      cy.xpath('/html/body/div[3]/div[5]/div/header/nav/ul[2]/li/a').click()
      // Check that login text is pressent (if user is logged in, that text will not be present)
      cy.contains('Prijava')
    })
  })