let produtoInner = document.getElementById('produto_vitrine')

let arrayListaProduto = []

let produtoVitrine = ''
for (let vitrine of produtos) {
    let precoComDesconto = vitrine.preco * 0.9
    let precoDividido = vitrine.preco / 3
    produtoVitrine += `
        <div class="box_vitrine">
          <div id="favorito">
            <button class="botao_fav" onclick="clicarFavorito(this)">
              <li style="--color:#424242;"><i class="fa-solid fa-heart"></i></li>
            </button>
          </div>
          <div class="imgg">
            <img src="${vitrine.imagem}" alt="" class="imagem_vitrine">
          </div>
          <p class="titulo_box_produto">${vitrine.nome}</p>
          <p class="preco_box_produto">${vitrine.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          <p class="detalhe_pagamento">${precoComDesconto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} com 10% de Desconto à Vista ou 3x de ${precoDividido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} sem juros no cartão</p>
          <button class="bt_add_cart_home open" onclick="addCart(this)">ADD CARRINHO</button>
          <a href="./produto.html"><button class="bt_buy_home bt1" onclick="verProduto(this)">VER PRODUTO</button></a>
        </div>
        `
        produtoInner.innerHTML = produtoVitrine
        let listaProdutos = {...vitrine}
        arrayListaProduto.push(listaProdutos)
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
          <button class="bt_add_cart_home open" onclick="addCart(this)">ADD CARRINHO</button>
          <a href="./produto.html"><button class="bt_buy_home bt1" onclick="verProduto(this)">VER PRODUTO</button></a>
        </div>
    `
    produtoInnerComplementar.innerHTML = produtoVitrineComplementar
    let listaProdutosComplementar = {...vitrineComplementar}
    arrayListaProduto.push(listaProdutosComplementar)
}

let arrayCarrinho = []
let arrayCarrinhoObjeto = []

function addCart (element) {
    const modal = document.getElementById('modal')
    const closeModalBtn = document.querySelector('.close')
    closeModalBtn.addEventListener('click', () => modal.close())
    const closeModalBtnX = document.querySelector('.close_x')
    closeModalBtnX.addEventListener('click', () => modal.close())
    modal.showModal()

    let produtoModal = document.getElementById('produto_modal')

    const elementoPai = element.parentElement;
    const nomeProduto = elementoPai.querySelector('.titulo_box_produto').innerHTML

    let produtoCarrinho = arrayListaProduto.find ((dados) => dados.nome === nomeProduto)
    
    let verificacaoCarrinho = arrayCarrinhoObjeto.find((dados) => dados.nome === nomeProduto)

    if (!verificacaoCarrinho) {
    let precoxQuantidade = produtoCarrinho.preco * produtoCarrinho.quantidade
    let produtoCarrinhoShow = `
      <div class="container_produto_modal" data-nome-produto="${produtoCarrinho.nome}">
          <div class="imagem_produto_modal"><img src="${produtoCarrinho.imagem}" alt=""></div>
          <div class="info_produto_modal">
              <h6>Produto</h6>
              <p class="nome_carrinho">${produtoCarrinho.nome}</p>
          </div>
          <button class="botao_quantidade" onclick="diminuiQuantidade(this)"><i class="fa-solid fa-minus"></i></button>
          <div class="quantidade_produto_modal">
              <h6>Quantidade</h6>
              <div class="container_quantidade">
                <div class="quantidade_carrinho"><input class="quantidade" id="quantidadeCart" type="text" name="quantidadeCart" value="${produtoCarrinho.quantidade}"></div>
              </div>
          </div>
          <button class="botao_quantidade1" onclick="aumentaQuantidade(this)"><i class="fa-solid fa-plus"></i></button>
          <div class="preco_modal">
              <h6>Valor</h6>
              <div class="novo_preco_quantidade"><p>${precoxQuantidade.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p></div>
          </div>
          <button class="remove_cart" onclick="removeCart(this)"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      `
    
    let listaProdutosCarrinho = {...produtoCarrinho, precoxQuantidade: precoxQuantidade}
    arrayCarrinhoObjeto.push(listaProdutosCarrinho)

    arrayCarrinho.push(produtoCarrinhoShow)
    produtoModal.innerHTML = arrayCarrinho.join('')

    let totalCarrinho = arrayCarrinhoObjeto.reduce((soma, preco) => soma + (preco.precoxQuantidade * preco.quantidade), 0)

    let valorCarrinho = document.getElementById('valorTotal')

    let valorAVista = totalCarrinho * 0.9
    let valorAPrazo = totalCarrinho / 3

    let valorTotal = ''
      valorTotal = `
        <div  class="valor_total">
          <div>
            <h5>Valor total:</h5>
          </div>
          <div id="total_carrinho">
            <h4>${totalCarrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
          </div>
        </div>
        <div class="valor_total1">
          <div>
            <h6><i class="fa-solid fa-hand-holding-dollar"></i> Pague à vista:</h6>
          </div>
          <div id="valor_a_vista">
            <h6>${valorAVista.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6>
          </div>
        </div>
        <div class="valor_total1">
          <div>
            <h6><i class="fa-solid fa-credit-card"></i> Divida em até 3x de:</h6>
          </div>
          <div id="valor_a_prazo">
            <h6>${valorAPrazo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6>
          </div>
        </div>  
      `
    valorCarrinho.innerHTML = valorTotal
} else {
  let containerProduto = document.querySelector(`[data-nome-produto="${nomeProduto}"]`)
  if (containerProduto) {
    let aumentarQuantidadeBtn = containerProduto.querySelector('.botao_quantidade1')
  aumentaQuantidade(aumentarQuantidadeBtn)
  }
}
}

function aumentaQuantidade(elementAumenta) {
  let elementoPaiCarrinho = elementAumenta.parentElement
  let nomeProdutoAumenta = elementoPaiCarrinho.querySelector('.nome_carrinho').innerHTML

  let buscaPrecoListaArray = arrayCarrinhoObjeto.find((dados) => dados.nome === nomeProdutoAumenta)

  let quantidade = ++buscaPrecoListaArray.quantidade
  let precoxQuantidade = buscaPrecoListaArray.preco * quantidade

  let novaQuantidadeInput = `
    <input class="quantidade" id="quantidadeCart" type="text" name="quantidadeCart" value="${quantidade}">
  `
  let novoPrecoQuantidadeInner = `
    <p>${precoxQuantidade.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
  `

  let novaQuantidade = elementoPaiCarrinho.querySelector('.quantidade_carrinho')
  let novoPrecoQuantidade = elementoPaiCarrinho.querySelector('.novo_preco_quantidade')
    novaQuantidade.innerHTML = novaQuantidadeInput
    novoPrecoQuantidade.innerHTML = novoPrecoQuantidadeInner

  let totalCarrinho = arrayCarrinhoObjeto.reduce((soma, preco) => soma + (preco.precoxQuantidade * preco.quantidade), 0)

  let valorAVista = totalCarrinho * 0.9
  let valorAPrazo = totalCarrinho / 3

  let elementoTotalCarrinho = document.getElementById('total_carrinho')
  let conteudoTotalCarrinho = ''
    conteudoTotalCarrinho = `
      <h4>${totalCarrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
    `
    elementoTotalCarrinho.innerHTML = conteudoTotalCarrinho

  let elementoPrecoAVistaCarrinho = document.getElementById('valor_a_vista')
  let conteudoPrecoAVistaCarrinho = ''
    conteudoPrecoAVistaCarrinho = `
      <h6>${valorAVista.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6>
    `
    elementoPrecoAVistaCarrinho.innerHTML = conteudoPrecoAVistaCarrinho

  let elementoPrecoAPrazoCarrinho = document.getElementById('valor_a_prazo')
  let conteudoPrecoAPrazoCarrinho = ''
    conteudoPrecoAPrazoCarrinho = `
      <h6>${valorAPrazo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6>
    `
    elementoPrecoAPrazoCarrinho.innerHTML = conteudoPrecoAPrazoCarrinho
    //console.log(arrayCarrinhoObjeto)
}

function diminuiQuantidade(elementDiminui) {
  let elementoPaiCarrinho = elementDiminui.parentElement
  let nomeProdutoDiminui = elementoPaiCarrinho.querySelector('.nome_carrinho').innerHTML

  let buscaPrecoListaArray = arrayCarrinhoObjeto.find((dados) => dados.nome === nomeProdutoDiminui)

  let quantidade = buscaPrecoListaArray.quantidade

  if (quantidade > 1) {
    quantidade = --buscaPrecoListaArray.quantidade
    let novoPrecoxQuantidade = buscaPrecoListaArray.preco * quantidade
    let novaQuantidadeInput = `
      <input class="quantidade" id="quantidadeCart" type="text" name="quantidadeCart" value="${quantidade}">
    `
    let novoPrecoQuantidadeInner = `
      <p>${novoPrecoxQuantidade.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
    `

    let novaQuantidade = elementoPaiCarrinho.querySelector('.quantidade_carrinho')
    let novoPrecoQuantidade = elementoPaiCarrinho.querySelector('.novo_preco_quantidade')
      novaQuantidade.innerHTML = novaQuantidadeInput
      novoPrecoQuantidade.innerHTML = novoPrecoQuantidadeInner

    let totalCarrinho = arrayCarrinhoObjeto.reduce((soma, preco) => soma + (preco.precoxQuantidade * preco.quantidade), 0)

    let valorAVista = totalCarrinho * 0.9
    let valorAPrazo = totalCarrinho / 3

    let elementoTotalCarrinho = document.getElementById('total_carrinho')
    let conteudoTotalCarrinho = ''
      conteudoTotalCarrinho = `
        <h4>${totalCarrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
      `
    elementoTotalCarrinho.innerHTML = conteudoTotalCarrinho

    let elementoPrecoAVistaCarrinho = document.getElementById('valor_a_vista')
    let conteudoPrecoAVistaCarrinho = ''
      conteudoPrecoAVistaCarrinho = `
        <h6>${valorAVista.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6>
      `
    elementoPrecoAVistaCarrinho.innerHTML = conteudoPrecoAVistaCarrinho

    let elementoPrecoAPrazoCarrinho = document.getElementById('valor_a_prazo')
    let conteudoPrecoAPrazoCarrinho = ''
      conteudoPrecoAPrazoCarrinho = `
        <h6>${valorAPrazo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6>
      `
    elementoPrecoAPrazoCarrinho.innerHTML = conteudoPrecoAPrazoCarrinho
  }
}

function removeCart (elementRemove) {
  const elementoPaiCarrinho = elementRemove.parentElement
  const nomeProdutoRemove = elementoPaiCarrinho.querySelector('.nome_carrinho').innerHTML

  let produtoRemoveCarrinho = arrayCarrinhoObjeto.find((dados) => dados.nome === nomeProdutoRemove)

  let index = arrayCarrinhoObjeto.indexOf(produtoRemoveCarrinho)
  
  arrayCarrinho.splice(index, 1)
  arrayCarrinhoObjeto.splice(index, 1)

  let produtoModalRemove = document.getElementById('produto_modal')
  produtoModalRemove.innerHTML = arrayCarrinho

  let valorCarrinhoRemove = document.getElementById('valorTotal')

  let totalCarrinhoRemove = ''
  if (arrayCarrinhoObjeto.length >= 1) {
    totalCarrinhoRemove = arrayCarrinhoObjeto.reduce((soma, preco) => soma + (preco.precoxQuantidade * preco.quantidade), 0)

  let valorAVistaRemove = totalCarrinhoRemove * 0.9
  let valorAPrazoRemove = totalCarrinhoRemove / 3

  let elementoTotalCarrinho = document.getElementById('total_carrinho')
    let conteudoTotalCarrinho = ''
      conteudoTotalCarrinho = `
        <h4>${totalCarrinhoRemove.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
      `
    elementoTotalCarrinho.innerHTML = conteudoTotalCarrinho

    let elementoPrecoAVistaCarrinho = document.getElementById('valor_a_vista')
    let conteudoPrecoAVistaCarrinho = ''
      conteudoPrecoAVistaCarrinho = `
        <h6>${valorAVistaRemove.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6>
      `
    elementoPrecoAVistaCarrinho.innerHTML = conteudoPrecoAVistaCarrinho

    let elementoPrecoAPrazoCarrinho = document.getElementById('valor_a_prazo')
    let conteudoPrecoAPrazoCarrinho = ''
      conteudoPrecoAPrazoCarrinho = `
        <h6>${valorAPrazoRemove.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6>
      `
    elementoPrecoAPrazoCarrinho.innerHTML = conteudoPrecoAPrazoCarrinho
} else {
  valorCarrinhoRemove.innerHTML = `<h5 class="carrinho_vazio">Seu carrinho está vazio!</h5>`
} 
}

function clicarFavorito() {

  let favorito = document.querySelector('.botao_fav')
  favorito.className = 'favorito_click'
  }

/*function verProduto (elementProduto) {

  let imgMini = document.querySelector('.mini')
  let imgPrincipal = document.querySelector('.mosaico_main')
  let nomeProduto = document.querySelector('.headline_produto')
  let avaliacoes = document.querySelector('.review')
  let preco = document.querySelector('.valor')
  let formasPagamento = document.querySelector('.texto_formas')
  let descricao = document.querySelector('.descricao_produto')
  let especificacoes = document.querySelector('.especificacao_produto')
  let guiaMedidas = document.querySelector('.guia_medidas')

  const elementoPai = elementProduto.parentElement;
  const nomeProdutoVerifica = elementoPai.querySelector('.titulo_box_produto').innerHTML
  console.log(elementoPai)

  let detalheProduto = arrayListaProduto.find ((dados) => dados.nome === nomeProdutoVerifica)

  let imagemMini = ''
    imagemMini = `
    <img src="${detalheProduto.imagem}" alt="">
  `
  imgMini.innerHTML = imagemMini

}*/

// Verifiquei que para levar os dados de um produto de uma pagina para a outra, sera necessario usar JSON e/ou local storage
// Clicar no carrinho na pagina index e abrir o modal na pagina home (iframe)
// proximas etapas: ver produto, aumentar ou diminuir quantidade no carrinho, pagina de checkout
// Ao adicionar um novo produto ao carrinho, todos os que ja estao adicionados estao assumindo a quantiade e valor iniciais, e depois quando aumenta ou diminui a qntd 
// ele adota o valor correto que estava armazenado