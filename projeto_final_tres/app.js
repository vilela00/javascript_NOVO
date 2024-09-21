let produtoInner = document.getElementById('produto_vitrine')

let nomeProdutoVitrine = ''

let produtoVitrine = ''
for (let vitrine of produtos) {
    let precoComDesconto = vitrine.preco * 0.9
    let precoDividido = vitrine.preco / 3
    produtoVitrine += `
        <div class="box_vitrine">
          <div class="imgg">
            <img src="${vitrine.imagem}" alt="" class="imagem_vitrine">
            <div class="botao_fav">
              <li style="--color:#424242;">
                <i class="fa-solid fa-heart"></i>
              </li>
            </div>
          </div>
          <p class="titulo_box_produto">${vitrine.nome}</p>
          <p class="preco_box_produto">${vitrine.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          <p class="detalhe_pagamento">${precoComDesconto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} com 10% de Desconto à Vista ou 3x de ${precoDividido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} sem juros no cartão</p>
          <button class="bt_add_cart_home open" onclick="addCart()">ADD CARRINHO</button>
          <a href="./produto.html"><button class="bt_buy_home bt1">VER PRODUTO</button></a>
        </div>
        `
        produtoInner.innerHTML = produtoVitrine
        nomeProdutoVitrine = vitrine.nome
        console.log(nomeProdutoVitrine)
}

let produtoInnerComplementar = document.getElementById('produto_vitrine_complementar')

let produtoVitrineComplementar = ''

for (let vitrineComplementar of produtosComplementares) {
    let precoComDesconto = vitrineComplementar.preco * 0.9
    let precoDividido = vitrineComplementar.preco / 3
    produtoVitrineComplementar += `
    <div class="box_vitrine1">
          <div class="imgg">
            <img src="${vitrineComplementar.imagem}" alt="" class="imagem_vitrine1">
          </div>
          <p class="titulo_box_produto">${vitrineComplementar.nome}</p>
          <p class="preco_box_produto">${vitrineComplementar.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          <p class="detalhe_pagamento">${precoComDesconto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} com 10% de Desconto à Vista ou 3x de ${precoDividido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} sem juros no cartão</p>
          <button class="bt_add_cart_home">ADD CARRINHO</button>
          <button class="bt_buy_home">VER PRODUTO</button>
        </div>
    `
    produtoInnerComplementar.innerHTML = produtoVitrineComplementar
}

let arrayCarrinho = []

function addCart () {
    const modal = document.getElementById('modal')
    const closeModalBtn = document.querySelector('.close')
    closeModalBtn.addEventListener('click', () => modal.close())
    const closeModalBtnX = document.querySelector('.close_x')
    closeModalBtnX.addEventListener('click', () => modal.close())
    modal.showModal()

    let produtoModal = document.getElementById('produto_modal')

    let produtoCarrinho = ''
    
    produtoCarrinho = produtos.find((dados) => dados.nome === nomeProdutoVitrine)
      produtoCarrinho = `
      <div class="container_produto_modal">
          <div class="imagem_produto_modal"><img src="${produtoCarrinho.imagem}" alt=""></div>
          <div class="info_produto_modal">
              <h6>Produto</h6>
              <p>${produtoCarrinho.nome}</p>
          </div>
          <div class="quantidade_produto_modal">
              <h6>Quantidade</h6>
              <input class="quantidade" type="text" name="quantidade" value="1">
          </div>
          <div class="preco_modal">
              <h6>Valor</h6>
              <p>${produtoCarrinho.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          </div>
      </div>
      `

    arrayCarrinho.push(produtoCarrinho)
    produtoModal.innerHTML = arrayCarrinho
}