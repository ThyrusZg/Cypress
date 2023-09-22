describe('Check if njuskalo log in page is opening', () => {
    it('passes', () => {
      // Navigte to the Njuskalo log in page  
      cy.visit('https://www.njuskalo.hr/prijava');
    })
  })