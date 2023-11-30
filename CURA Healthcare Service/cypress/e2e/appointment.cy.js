describe('make appointment', () => {
    beforeEach(()=>{
      cy.visit('/')
      cy.login('John Doe','ThisIsNotAPassword')
    })
  
    it('success make appointment', () => {
      cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
      cy.get('#chk_hospotal_readmission').check()
      cy.get('#radio_program_medicaid').check()
      cy.get('#txt_visit_date').type('08/09/2023')
      cy.get('#txt_comment').type('This is a test appointment.');
      cy.get('#btn-book-appointment').click();
      cy.contains('Appointment Confirmation');
    })
  
    it('failed make appointment', () => {
      cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
      cy.get('#chk_hospotal_readmission').check()
      cy.get('#btn-book-appointment').click();
      cy.get('#txt_visit_date').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.');
      });
    }) 
})