/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import userData from '../fixtures/example.json'     
import { getRandomEmail, getSenha } from "../support/helpers.js"
import {faker} from '@faker-js/faker';

describe('Exercicio 01', () => {
    
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
        cy.xpath('//*[@href="/login"]').click()
        
    });

    const firstname = faker.person.firstName()
    const lastname = faker.person.lastName()
    const senha = getSenha()
    const login = getRandomEmail()


    it('Cadastrar um usuário', () => {
       
        cy.xpath('//*[@data-qa="signup-name"]').type(`${firstname} ${lastname}`);
        cy.xpath('//*[@data-qa="signup-email"]').type(login)
        cy.contains('button','Signup').click()


        cy.xpath('//*[@value="Mrs"]').check()

        cy.xpath('//*[@id="password"]').type(senha, { log: false });

        //para comboboxes ou selects -> select()
        cy.xpath('//*[@id="days"]').select('23')
        cy.xpath('//*[@id="months"]').select('September')
        cy.xpath('//*[@id="years"]').select('1990')

        // radio ou checkboxes -> check()
        cy.xpath('//*[@id="newsletter"]').check()
        cy.xpath('//*[@id="optin"]').check()

        cy.xpath('//*[@id="first_name"]').type(firstname)
        cy.xpath('//*[@id="last_name"]').type(lastname)
        cy.xpath('//*[@id="company"]').type(`PGATS ${faker.company.name()}`)
        cy.xpath('//*[@id="address1"]').type(faker.location.streetAddress())
        cy.xpath('//*[@id="address2"]').type(faker.location.secondaryAddress())
        cy.xpath('//*[@id="country"]').select('Canada')
        cy.xpath('//*[@id="state"]').type(faker.location.state())
        cy.xpath('//*[@id="city"]').type(faker.location.city())
        cy.xpath('//*[@id="zipcode"]').type(faker.location.zipCode())
        cy.xpath('//*[@id="mobile_number"]').type(faker.phone.number())

        // Act
        cy.xpath('//*[@id="form"]//button').click()

        // Assert
        cy.url().should('include', '/account_created')
        cy.contains('b', 'Account Created!')
   
    });

    it('Login com email e senha corretas', () => {
        cy.contains('Login to your account').should('be.visible');

        cy.xpath('//input[@data-qa="login-email"]').type(login)
        cy.xpath('//input[@data-qa="login-password"]').type(senha, { log: false })
        cy.contains('button','Login').click()

       //Assertions 
        cy.contains(`Logged in as ${firstname} ${lastname}`).should('be.visible');
        cy.get('i.fa-user').parent().should('contain', firstname);

    });

    it('Login com email e senha incorreta', () => {
        cy.contains('Login to your account').should('be.visible');  

        cy.xpath('//input[@data-qa="login-email"]').type('teste@teste.com')
        cy.xpath('//input[@data-qa="login-password"]').type(123, { log: false })
        cy.contains('button','Login').click()

        cy.contains('Your email or password is incorrect!')
        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!');

            
    });

    it('Logout', () => {
        cy.contains('Login to your account').should('be.visible');

        cy.xpath('//input[@data-qa="login-email"]').type(login)
        cy.xpath('//input[@data-qa="login-password"]').type(senha)
        cy.contains('button','Login').click()

        cy.contains(`Logged in as ${firstname} ${lastname}`).should('be.visible');

        cy.xpath('//a[@href="/logout"]').click()
        cy.url().should('include', '/login')

    });

    it('Registrar um usuário com email existente', () => {
        cy.contains('New User Signup!').should('be.visible');

        cy.xpath('//*[@data-qa="signup-name"]').type(userData.name)
        cy.xpath('//*[@data-qa="signup-email"]').type(login)
        cy.contains('button','Signup').click()

        cy.contains('Email Address already exist!').should('be.visible');
        cy.xpath('//p[text()="Email Address already exist!"]').should('be.visible');
         
   
    });

    it('Deletar conta', () => {
        cy.contains('Login to your account').should('be.visible');

        cy.xpath('//input[@data-qa="login-email"]').type(login)
        cy.xpath('//input[@data-qa="login-password"]').type(senha, { log: false })
        cy.contains('button','Login').click()

        cy.contains(`Logged in as ${firstname} ${lastname}`).should('be.visible');

       cy.xpath('//a[@href="/delete_account"]').click()
       cy.contains('Account Deleted!').should('be.visible');
      

    });

    it('Preencher o formulário de contato', () => {
        cy.xpath('//a[@href="/contact_us"]').click()

        cy.xpath('//*[@data-qa="name"]').type(userData.name)
        cy.xpath('//*[@data-qa="email"]').type(userData.email)
        cy.xpath('//*[@data-qa="subject"]').type(userData.subject)
        cy.xpath('//*[@data-qa="message"]').type(userData.message)

        cy.fixture('example.json').as('arquivo')    
        cy.get('input[type=file]').selectFile('@arquivo')

        cy.xpath('//*[@data-qa="submit-button"]').click()

        //Assert
        cy.get('.status').should('be.visible')
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
             
      

    });



});
    