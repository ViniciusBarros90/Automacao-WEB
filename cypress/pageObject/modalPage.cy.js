// modalPage.js
class ModalPage {
    get button() {
        return 'a.button.new';
    }

    get modal() {
        return '.modal'; // Adjust selector based on actual modal implementation
    }

    get warningMessage() {
        return '.warning-message'; // Adjust selector based on actual warning message implementation
    }

    openModal() {
        cy.get(this.button).click();
    }

    isModalVisible() {
        cy.get(this.modal).should('be.visible');
    }

    isWarningMessageVisible() {
        cy.get(this.warningMessage).should('be.visible');
    }
}

export default new ModalPage();
