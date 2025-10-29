// cypress/integration/modalTests.js
import modalPage from '../pageObjects/modalPage';

//const modalPage = new ModalPage();

describe('Modal Tests', () => {
    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/', { timeout: 2000000 });
    });


    it('should display the modal when creating a new transaction', () => {
        cy.get('.button.new').contains('Nova Transação').click();
        modalPage.assertModalIsVisible();
    });

    it('should allow filling the form and saving a transaction', () => {
        cy.get('.button.new').contains('Nova Transação').click();
        modalPage.fillDescription('Test Transaction');
        modalPage.fillAmount('100.00');
        modalPage.fillDate('2023-10-01');
        modalPage.clickSave();
        // Add assertion to verify transaction is saved (this depends on the app's behavior)
    });

    it('should close the modal when clicking cancel', () => {
        cy.get('.button.new').contains('Nova Transação').click();
        modalPage.clickCancel();
        modalPage.assertModalIsNotVisible();
    });

    it('should not allow saving without a description', () => {
        cy.get('.button.new').contains('Nova Transação').click();
        modalPage.fillAmount('100.00');
        modalPage.fillDate('2023-10-01');
        modalPage.clickSave();
        // Add assertion to verify error message (this depends on the app's behavior)
    });

    it('should not allow saving without an amount', () => {
        cy.get('.button.new').contains('Nova Transação').click();
        modalPage.fillDescription('Test Transaction');
        modalPage.fillDate('2023-10-01');
        modalPage.clickSave();
        // Add assertion to verify error message (this depends on the app's behavior)
    });

    it('should not allow saving without a date', () => {
        cy.get('.button.new').contains('Nova Transação').click();
        modalPage.fillDescription('Test Transaction');
        modalPage.fillAmount('100.00');
        modalPage.clickSave();
        // Add assertion to verify error message (this depends on the app's behavior)
    });
});