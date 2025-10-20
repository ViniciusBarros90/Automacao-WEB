import {faker} from '@faker-js/faker';
import userData from '../../fixtures/example.json'    

class Cadastro {  
    preencherFormularioDeCadastroCompleto(senha) {
        cy.get('input[type=radio]').check('Mrs')
    
        cy.get('input#password').type(senha)
    
        //para comboboxes ou selects -> select()
        cy.get('[data-qa=days]').select('23')
        cy.get('[data-qa=months]').select('September')
        cy.get('[data-qa=years]').select('1990')
    
        // radio ou checkboxes -> check()
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
    
        cy.get('input#first_name').type(userData.name)
        cy.get('input#last_name').type(userData.lastName)
        cy.get('input#company').type(`PGATS ${faker.company.name()}`)
        cy.get('input#address1').type(faker.location.streetAddress())
        cy.get('input#address2').type(faker.location.secondaryAddress())
        cy.get('select#country').select('Canada')
        cy.get('input#state').type(faker.location.state())
        cy.get('input#city').type(faker.location.city())
        cy.get('input#zipcode').type(faker.location.zipCode())
        cy.get('input#mobile_number').type(faker.phone.number())
    
        // Act
        cy.get('[data-qa="create-account"]').click()

   }    
   
   clicarNoBotãoContinuar(){
        cy.get('[data-qa="continue-button"]').click()
   }
}

export default new Cadastro();