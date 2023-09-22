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
      // Visit home page
      cy.visit('https://www.njuskalo.hr')
      // Get cars
      cy.xpath('/html/body/div[3]/div[5]/div/div/div/div/main/div/div/div/nav/ul/li[1]').click();
      // Get Audi
      cy.xpath('/html/body/div[2]/div[5]/div/div[2]/div[3]/div[1]/main/div/div[2]/div[2]/div/ul/li[2]/a').click();
      // Get A4
      cy.xpath('/html/body/div[12]/div[3]/div[1]/main/form/div/div[1]/div[4]/div/div/div/ul[1]/li[7]/a').click();
      // Set price
      cy.xpath('/html/body/div[12]/div[3]/div[1]/main/form/div/div[1]/div[4]/div/div/div/div/fieldset[1]/div/div[3]/div[2]/div/div/div/div/div[3]/input').click().type(15000);
      // Apply Filter
      cy.xpath('/html/body/div[12]/div[3]/div[1]/main/form/div/div[1]/div[4]/div/div/div/div/div/div[2]/div/button').click();
      // Get title to be Audi A4
      cy.get('.ContentHeader-title').contains('Audi A4');
    })
  })