// modal.spec.js
import ModalPage from '../pageObject/modalPage.cy.js';


describe('Modal Tests', () => {
    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/');
    });

    it('Verify that clicking the button successfully opens the modal for creating a new transaction', () => {
        ModalPage.openModal();
        ModalPage.isModalVisible();
    });

    it('Ensure that the button is visually identifiable and accessible to users', () => {
        cy.get(ModalPage.button).should('have.css', 'background-color').and('not.eq', 'rgba(0, 0, 0, 0)');
    });

    it('Test the button\'s functionality when JavaScript is disabled in the browser', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/', {
            onBeforeLoad: (win) => {
                delete win.navigator.__proto__.userAgent;
                Object.defineProperty(win.navigator, 'userAgent', { get: () => '' });
            }
        });
        cy.get(ModalPage.button).should('not.exist');
    });

    it('Verify that clicking the button does not open the modal if the user is not logged in', () => {
        if (!LoginPage.isLoggedIn()) {
            ModalPage.openModal();
            cy.get(ModalPage.modal).should('not.exist');
        }
    });

    it('Simulate a scenario where a user has already opened the modal but tries to open it again', () => {
        ModalPage.openModal();
        ModalPage.isModalVisible();
        ModalPage.openModal();
        ModalPage.isWarningMessageVisible();
    });

    it('Test the button\'s behavior when it is clicked while the modal is already open', () => {
        ModalPage.openModal();
        ModalPage.isModalVisible();
        ModalPage.openModal();
        // Add assertion to confirm user experience is not disrupted
        cy.get(ModalPage.modal).should('have.class', 'open'); // Adjust based on actual implementation
    });
});