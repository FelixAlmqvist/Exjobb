import { formPage } from "../support/pages/formPage"

describe('Datadriven testing of DemoQA form', () => {
  
  beforeEach(() =>{
    formPage.navigate()
  })

  it('valid users', () => {
    cy.fixture('formData').then((users) =>{
      const validUsers = users.filter(u => 
        u.firstName && u.lastName &&
        u.gender && u.phone?.length == 10
      )
      cy.log(validUsers.length)
      validUsers.forEach((data) => {
        
        cy.fillForm(data)
        formPage.submitButton().click()

        cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')

        formPage.navigate()
      })
    })
  })

  it('Fills in the form with all the users with a gmail from fixtures', () => {
    cy.fixture('formData').then((users) =>{
      const gmailUsers = users.filter(u => u.email?.endsWith('@gmail.com'))

      gmailUsers.forEach((data) => {
        
        cy.fillForm(data)
        formPage.submitButton().click()

        cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')

        formPage.navigate()
      })
    })
  })

  it('Missing email', () => {
    cy.fixture('formData').then((users) =>{
      const noEmailUsers = users.filter(u => !u.email)

      noEmailUsers.forEach((data) => {
        
        cy.fillForm(data)
        formPage.submitButton().click()

        cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')

        formPage.navigate()
      })
    })
  })

  it('Invalid emails', () => {
    cy.fixture('formData').then((users) =>{
      const invalidEmailUsers = users.filter(u => u.email && 
        !u.email.includes('.') || u.email && !u.email.includes('@'))

      invalidEmailUsers.forEach((data) => {
        
        cy.fillForm(data)
        formPage.submitButton().click()

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

        formPage.navigate()
      })
    })
  })

  it('invalid phone numbers', () => {
    cy.fixture('formData').then((users) => {

      const invalidPhoneUsers = users.filter(u =>
        !u.phone || u.phone.length < 10)

      invalidPhoneUsers.forEach((data) => {
        cy.fillForm(data)
        formPage.submitButton().click()

        cy.get('#example-modal-sizes-title-lg').should('not.exist')

        formPage.navigate()
      })
    })
  })

  
})