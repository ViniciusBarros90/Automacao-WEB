// pageObjects/modalPage.cy.js
class ModalPage {
    get modal() { return cy.get('.modal'); }
    get form() { return cy.get('#form'); }
    get descriptionInput() { return cy.get('#description'); }
    get amountInput() { return cy.get('#amount'); }
    get dateInput() { return cy.get('#date'); }
    get cancelButton() { return cy.get('.button.cancel'); }
    get saveButton() { return cy.get('button'); }

    fillDescription(description) {
        this.descriptionInput.type(description);
    }

    fillAmount(amount) {
        this.amountInput.type(amount);
    }

    fillDate(date) {
        this.dateInput.type(date);
    }

    clickCancel() {
        this.cancelButton.click();
    }

    clickSave() {
        this.saveButton.click();
    }

    assertModalIsVisible() {
        this.modal.should('be.visible');
    }

    assertModalIsNotVisible() {
        this.modal.should('not.be.visible');

    }
}

export default new ModalPage();