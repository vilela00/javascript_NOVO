let produtoInner = document.getElementById('produto_vitrine')

arrayNomeProduto = []

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
        arrayNomeProduto.push(vitrine.nome)
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
          <button class="bt_add_cart_home open" onclick="addCart()">ADD CARRINHO</button>
          <a href="./produto.html"><button class="bt_buy_home bt1">VER PRODUTO</button></a>
        </div>
    `
    produtoInnerComplementar.innerHTML = produtoVitrineComplementar
}

let arrayCarrinho = []
let arrayPreco = []

function addCart () {
    const modal = document.getElementById('modal')
    const closeModalBtn = document.querySelector('.close')
    closeModalBtn.addEventListener('click', () => modal.close())
    const closeModalBtnX = document.querySelector('.close_x')
    closeModalBtnX.addEventListener('click', () => modal.close())
    modal.showModal()

    let produtoModal = document.getElementById('produto_modal')

    let produtoCarrinho = ''
      produtoCarrinho = produtos.find((dados) => {
        return {
          nome: dados.nome,
          preco: dados.preco,
          imagem: dados.imagem
        }
    })

      let produtoCarrinhoTeste = `
      <div class="container_produto_modal">
          <div class="imagem_produto_modal"><img src="${produtoCarrinho.imagem}" alt=""></div>
          <div class="info_produto_modal">
              <h6>Produto</h6>
              <p>${produtoCarrinho.nome}</p>
          </div>
          <div class="quantidade_produto_modal">
              <h6>Quantidade</h6>
              <input class="quantidade" id="quantidadeCart" type="text" name="quantidadeCart" value="1">
          </div>
          <div class="preco_modal">
              <h6>Valor</h6>
              <p>${produtoCarrinho.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          </div>
          <div class="container_remove">
              <button class="remove_cart" onclick="removeCart()"><i class="fa-solid fa-trash-can"></i></button>
          </div>
      </div>
      `
      
    arrayCarrinho.push(produtoCarrinhoTeste)
    arrayPreco.push(produtoCarrinho.preco)
    produtoModal.innerHTML = arrayCarrinho

    let totalCarrinho = arrayPreco.reduce((soma, preco) => soma + preco, 0)

    let valorCarrinho = document.getElementById('valorTotal')

    let valorAVista = totalCarrinho * 0.9
    let valorAPrazo = totalCarrinho / 3

    let valorTotal = ''
      valorTotal = `
      <div  class="valor_total">
        <div>
          <h5>Valor total:</h5>
        </div>
        <div>
          <h4>${totalCarrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
        </div>
      </div>
      <div class="valor_total1">
        <div>
          <h6><i class="fa-solid fa-hand-holding-dollar"></i> Pague à vista:</h6>
        </div>
        <div>
          <h6>${valorAVista.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6>
        </div>
      </div>
      <div class="valor_total1">
        <div>
          <h6><i class="fa-solid fa-credit-card"></i> Divida em até 3x de:</h6>
        </div>
        <div>
          <h6>${valorAPrazo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6>
        </div>
      </div>  
      `
    valorCarrinho.innerHTML = valorTotal
    console.log(arrayCarrinho)
    console.log(arrayPreco)
}

function removeCart () {
  arrayCarrinho.splice(0,1)
  arrayPreco.splice(0,1)
}

