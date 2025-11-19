describe('Fills in the form with correct & minimal info', () => {
  
  it('Fills in the form', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    //Name
    cy.get('#firstName').type('tmp')
    cy.get('#lastName').type('pmt')
    //email
    cy.get('#userEmail').type('hej@tmp.se')
    //gender
    cy.contains('Male').click()
    //phone number
    cy.get('#userNumber').type('0123456789')
    //DOB 

    //Hobbies

    //Picture

    //Adress

    //State

    //City

    //Submit & assert
    cy.get('#submit').click()
    cy.get('.modal-header').should('be.visible')
  })

  
})