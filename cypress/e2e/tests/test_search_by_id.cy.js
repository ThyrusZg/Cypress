require('@cypress/xpath');

describe('Check if njuskalo log in button is opening log in page', () => {
    it('passes', () => {
        // Navigte to the Njuskalo home page page  
        cy.visit('https://www.njuskalo.hr/');
        // Agree with data usage of web page
        cy.get('#didomi-notice-agree-button').click();
        // Click on Log in button
        cy.xpath('/html/body/div[3]/div[5]/div/header/div/form/div/div/div/div/input').click().type('1349039{enter}');
        cy.xpath('/html/body/div[7]/div[3]/main/article/div[1]/div/div[1]/div[2]/div/div[1]/h1').contains('TEST OGLAS NJUŠKALO TIM (prodaja)');
    })
  })