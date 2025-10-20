/// <reference types="cypress" />


describe('Automation Exercise', () => {
    it('Cadastrar um usuário', () => {
        //Arrange
        const timestamp = new Date().getTime();

        cy.visit('https://automationexercise.com/')
        
        cy.get('a[href="/login"]').click()

        cy.get('[data-qa="signup-name"]').type('QA Tester')
        cy.get('[data-qa="signup-email"]').type(`qa-tester-${timestamp}@test.com`)
        cy.contains('button','Signup').click()

        // radio ou checkboxes -> check()
        cy.get('input[type=radio]').check('Mrs')

        cy.get('input#password').type('123456', { log: false })

        // Para comboboxes ou selects -> select()
        cy.get('[data-qa=days]').select('23')
        cy.get('[data-qa=months]').select('September')
        cy.get('[data-qa=years]').select('1990')

        // radio ou checkboxes -> check()
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('input#first_name').type('QA')
        cy.get('input#last_name').type('Tester')
        cy.get('input#company').type('QA Company')
        cy.get('input#address1').type('Aveninda Selenium, 2004')
        cy.get('input#address2').type('Apt 4B')
        cy.get('select#country').select('Canada')
        cy.get('input#state').type('California')
        cy.get('input#city').type('Los Angeles')
        cy.get('input#zipcode').type('90001')
        cy.get('input#mobile_number').type('1234567890')

        // Act
        cy.get('[data-qa="create-account"]').click()

        // Assert
        cy.url().should('include', '/account_created')
        cy.contains('b', 'Account Created!')   


    
   });

});
    