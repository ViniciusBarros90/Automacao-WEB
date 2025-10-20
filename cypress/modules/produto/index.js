import userData from '../../fixtures/example.json'  

class produto{

    clicarVisualizarProduto() {
        cy.get('a[href="/product_details/1"]').click()
    }

    preencherCampoDePesquisaDeProduto(){
        cy.get('input[name="search"]').type('Winter Top')
    }

    clicarNaLupadePesquisa(){
        cy.get('button[id="submit_search"]').click()
    }

    preencherEmailNoSubscricao(){
        cy.get('input[id="susbscribe_email"]').type(userData.user)        
       
    }

    clicarNoBotaoPesquisarSubscricao(){
        cy.get('button[id="subscribe"]').click()

    }

    clicarEmAdicionarProdutoNoCarrinho(){
        cy.get('a[data-product-id="2"].btn.btn-default.add-to-cart').eq(0).click();

    }

    clicarEmVisualizarCarrinho(){
        cy.get('u').click();
    }

}

export default new produto();