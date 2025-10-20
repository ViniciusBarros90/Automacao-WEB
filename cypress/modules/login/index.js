import {faker} from '@faker-js/faker';
import { getRandomEmail } from '../../support/helpers.js'

class Login {
    preencherFormularioNewUserSignup(email) {

        const firstname = faker.person.firstName()
        const lastname = faker.person.lastName()
    
        cy.get('[data-qa="signup-name"]').type(`${firstname} ${lastname}`)
        cy.get('[data-qa="signup-email"]').type(String(email)) 
        cy.contains('button','Signup').click()

   }

   PreencherOFormularioLoginToYourAccount(email, pass) {
        cy.contains('Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type(email)
        cy.get('[data-qa="login-password"]').type(pass)
        cy.contains('button','Login').click()
   }

   registrarUmUsuarioComEmailExistente(name, email){
    cy.contains('New User Signup!').should('be.visible');

    cy.get('[data-qa="signup-name"]').type(name)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.contains('button','Signup').click()

   }

}

export default new Login();