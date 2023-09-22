require('@cypress/xpath');

describe('Check if njuskalo log in button is opening log in page', () => {
    it('passes', () => {
        // Navigte to the Njuskalo home page page  
        cy.visit('https://www.njuskalo.hr/');
        // Agree with data usage of web page
        cy.get('#didomi-notice-agree-button').click();
        // Click on Log in button
        cy.xpath('//*[@id="pb-app"]/div[5]/div/header/nav/ul/li[1]/a').click();
    })
  })