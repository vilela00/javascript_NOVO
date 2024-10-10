function comprar () {

    let produtoModal = document.getElementById('dados_carrinho')
    let valorCarrinho = document.getElementById('valor_total')
  
    produtoModal.innerHTML = JSON.parse(localStorage.getItem('carrinho'))
    valorCarrinho.innerHTML = JSON.parse(localStorage.getItem('valorTotal'))
  }

comprar ()