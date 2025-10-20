describe('Cadastrar entradas e saídas com bugs', () => {
beforeEach(() => {
  cy.visit('https://devfinance-agilizei.netlify.app', { timeout: 120000 })
})

  it('Cadastrar uma nova transação de entrada - falha 1', () => {
        
    cy.contains("Nova Transação").click()
    cy.get('input#description').type("Mesada")
    cy.get('input#amount').type(100)
    cy.get('input#date').type("2023-02-01")

    cy.contains('button', 'Salvar').click()

    cy.get("tbody tr").should("have.length", 1)

  });

  it('Cadastrar uma nova transação de entrada - falha 2', () => {
    cy.visit("https://devfinance-agilizei.netlify.app")

    cy.contains("Nova Transação").click()
    cy.get('input#description').type("Mesada")
    cy.get('input#amount').type(100)
    cy.get('input#date').type("2023-02-01")

    cy.contains('button', 'Salvar').click()
    
    cy.get("tbody tr").should("have.length", 1)
  });  

  it('Cadastrar uma nova transação de entrada - falha 3', () => {
    cy.visit("https://devfinance-agilizei.netlify.app")

    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")

    cy.contains("Salvar").click()
    
    cy.get("tbody tr").should("have.length", 1)
  });

  it('Cadastrar uma nova transação de entrada - falha 4', () => {
    cy.visit("https://devfinance-agilizei.netlify.app")

    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)    
    cy.get("#date").type("2023-02-01")
    
    cy.contains("Salvar").click()

    cy.get("tbody tr").should("have.length", 1)
  });

  it('Cadastrar uma nova transação de entrada - falha 5', () => {
    cy.visit("https://devfinance-agilizei.netlify.app")

    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")

    cy.contains("Salvar").click()

    cy.get("tbody tr").should("have.length", 1)
  });

  it('Cadastrar uma nova transação de entrada - falha 6', () => {
    cy.visit("https://devfinance-agilizei.netlify.app")

    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")

    cy.contains("Salvar").click()

    cy.get("tbody tr").should("have.length", 1)
  });
}); 