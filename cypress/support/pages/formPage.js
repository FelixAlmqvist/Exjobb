class FormPage {
    navigate() {
        cy.visit('https://demoqa.com/automation-practice-form')
    }

    firstName() {return cy.get('#firstName')}
    lastName() {return cy.get('#lastName')}
    email() {return cy.get('#userEmail')}
    genderOption(gender) {return cy.contains('.custom-control-label', gender)}
    phone() {return cy.get('#userNumber')}
    hobbyOption(hobby) { return cy.contains('.custom-control-label', hobby) }
    submitButton() { return cy.get('#submit') }
    
    fillForm(data) {
        //must haves
        this.firstName().type(data.firstName)
        this.lastName().type(data.lastName)
        this.genderOption(data.gender).click()
        this.phone().type(data.phone)
        //Optional TODO fix checks
        this.email().type(data.email)
        this.hobbyOption(data.hobby).click()
    }
  
}

export const formPage = new FormPage()