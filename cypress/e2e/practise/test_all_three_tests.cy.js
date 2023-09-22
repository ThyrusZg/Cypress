require('@cypress/xpath');

describe('Njuskalo home page', () => {
    beforeEach(() => {
        cy.visit('https://www.njuskalo.hr/')
        cy.get('#didomi-notice-agree-button').click()

        cy.get('#login_username').click()
        cy.get('#login_username').type('novi_korisnik_2023')
  
        cy.get('#login_password').click()
        cy.get('#login_password').type('123456789ABCabc!')

        cy.get('#login_login').click()

        cy.visit('https://www.njuskalo.hr')
    })
  
    it('searches by typing ID and pressing ENTER', () => {
      cy.xpath('/html/body/div[3]/div[5]/div/header/div/form/div/div/div/div/input').click().type('1349039{enter}')
      
      cy.xpath('/html/body/div[7]/div[3]/main/article/div[1]/div/div[1]/div[2]/div/div[1]/h1').contains('TEST OGLAS NJUŠKALO TIM (prodaja)')
    })
    it('Logs out user that is logged in', () => {
      cy.xpath('/html/body/div[3]/div[5]/div/header/nav/ul[2]/li/a').click()

      cy.contains('Prijava')
    })
    it('Clicks on car category and searches by filter paramaters Audi A4 car with price up to 15000€', () => {
      cy.xpath('/html/body/div[3]/div[5]/div/div/div/div/main/div/div/div/nav/ul/li[1]').click()

      cy.xpath('/html/body/div[2]/div[5]/div/div[2]/div[3]/div[1]/main/div/div[2]/div[2]/div/ul/li[2]/a').click()

      cy.xpath('/html/body/div[12]/div[3]/div[1]/main/form/div/div[1]/div[4]/div/div/div/ul[1]/li[7]/a').click()

      cy.xpath('/html/body/div[12]/div[3]/div[1]/main/form/div/div[1]/div[4]/div/div/div/div/fieldset[1]/div/div[3]/div[2]/div/div/div/div/div[3]/input').click().type(15000)

      cy.xpath('/html/body/div[12]/div[3]/div[1]/main/form/div/div[1]/div[4]/div/div/div/div/div/div[2]/div/button').click()

      cy.get('.ContentHeader-title').contains('Audi A4')
    })
  })