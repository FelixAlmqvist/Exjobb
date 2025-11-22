import { formPage } from "../support/pages/formPage"

describe('Datadriven testing of DemoQA form', () => {
  
  beforeEach(() =>{
    formPage.navigate()
  })

  it('Fills in the form with the data from fixtures', () => {
    cy.fixture('formData').then((users) =>{
      users.forEach((data) => {
        
        cy.fillForm(data)
        formPage.submitButton().click()

        cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')

        formPage.navigate()
      })
    })
  })

  
})