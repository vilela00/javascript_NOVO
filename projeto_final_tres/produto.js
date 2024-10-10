document.addEventListener('DOMContentLoaded', function () {

let getListaProdutos = JSON.parse(localStorage.getItem('produto'))

let imgMini = document.querySelector('.mosaico_mini')

let imagemMini = ''
    imagemMini = `
        <div class="mini">
            <img src="${getListaProdutos.imagem}" alt="">                
        </div>
        <div class="mini">
            <img src="${getListaProdutos.imagem}" alt="">                
        </div>
        <div class="mini">
            <img src="${getListaProdutos.imagem}" alt="">                
        </div>
        <div class="mini">
            <img src="${getListaProdutos.imagem}" alt="">                
        </div>
    `
imgMini.innerHTML = imagemMini

let imgPrincipal = document.querySelector('.mosaico_main')

let imagemPrincipal = ''
    imagemPrincipal = `
        <img src="${getListaProdutos.imagem}" alt=""> 
    `
imgPrincipal.innerHTML = imagemPrincipal

let nomeProdutoInner = document.querySelector('.headline_produto')

let nomeProduto =''
    nomeProduto = `
        <h2 class="titulo_produto">${getListaProdutos.nome}</h2>
    `
nomeProdutoInner.innerHTML = nomeProduto

let avaliacoes = document.querySelector('.review')

let avaliacoesProduto = ''
    avaliacoesProduto = `
        <p>${getListaProdutos.avaliacoes} nas Avaliações dos Nossos Clientes</p>
    `

avaliacoes.innerHTML = avaliacoesProduto

let preco = document.querySelector('.valor')

let precoProduto = ''
    precoProduto = `
        <h1>${getListaProdutos.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
    `

preco.innerHTML = precoProduto

let precoComDesconto = getListaProdutos.preco * 0.9
let precoDividido = getListaProdutos.preco / 3

let formasPagamentInner = document.querySelector('.texto_formas')

let formasPagamento = ''
    formasPagamento = `
        <p class="texto_pg">${precoComDesconto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} com 10% de Desconto à Vista ou 3x de ${precoDividido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} sem juros no cartão</p>
    `

formasPagamentInner.innerHTML = formasPagamento

let descricao = document.querySelector('#flush-collapseOne')

let descricaoProduto = ''
    descricaoProduto = `
        <div class="accordion-body">${getListaProdutos.descricao}</div>
    `

descricao.innerHTML = descricaoProduto

let especificacoes = document.querySelector('#flush-collapseTwo')

let especificacoesProduto = ''
    especificacoesProduto = `
        <div class="accordion-body">${getListaProdutos.especificacoes}</div>
    `

especificacoes.innerHTML = especificacoesProduto

let guiaMedidas = document.querySelector('#flush-collapseThree')

let guiaMedidasProduto = ''
    guiaMedidasProduto = `
        <div class="accordion-body">${getListaProdutos.medidas}</div>
    `

guiaMedidas.innerHTML = guiaMedidasProduto
})

function abrirCarrinho () {
    const modal = document.getElementById('modal')
    const closeModalBtn = document.querySelector('.close')
    closeModalBtn.addEventListener('click', () => modal.close())
    const closeModalBtnX = document.querySelector('.close_x')
    closeModalBtnX.addEventListener('click', () => modal.close())
    modal.showModal()
    
    let produtoModal = document.getElementById('produto_modal')
    let valorCarrinho = document.getElementById('valorTotal')
  
    produtoModal.innerHTML = JSON.parse(localStorage.getItem('carrinho'))
    let localArrayCarrinhoObjeto = JSON.parse(localStorage.getItem('carrinho_objeto'))
    let totalCarrinho = localArrayCarrinhoObjeto.reduce((soma, preco) => soma + (preco.precoxQuantidade * preco.quantidade), 0)
  
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
    if (totalCarrinho !== 0) {
      valorCarrinho.innerHTML = valorTotal
    } else {
      valorCarrinho.innerHTML = `<h5 class="carrinho_vazio">Seu carrinho está vazio!</h5>`
    }
  }
  
  window.addEventListener('message', function (event) {
    if (event.data === 'abrirCarrinho') {
      abrirCarrinho ()
    }
  })

let arrayCarrinho = JSON.parse(localStorage.getItem('carrinho'))
let arrayCarrinhoObjeto = JSON.parse(localStorage.getItem('carrinho_objeto'))

function addCart () {
  
    if (!arrayCarrinho) {
      arrayCarrinho = []
    }
    if (!arrayCarrinhoObjeto) {
      arrayCarrinhoObjeto = []
    }

    const modal = document.getElementById('modal')
    const closeModalBtn = document.querySelector('.close')
    closeModalBtn.addEventListener('click', () => modal.close())
    const closeModalBtnX = document.querySelector('.close_x')
    closeModalBtnX.addEventListener('click', () => modal.close())
    modal.showModal()

    let produtoModal = document.getElementById('produto_modal')
    let valorCarrinho = document.getElementById('valorTotal')
    
    let produtoCarrinho = JSON.parse(localStorage.getItem('produto'))
    let localArrayCarrinhoObjeto = JSON.parse(localStorage.getItem('carrinho_objeto'))
    let verificacaoCarrinho = localArrayCarrinhoObjeto.find ((dados) => dados.nome === produtoCarrinho.nome)
    let quantidade = 1

    if (!verificacaoCarrinho) {
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
                <div class="quantidade_carrinho"><input class="quantidade" id="quantidadeCart" type="text" name="quantidadeCart" value="${quantidade}"></div>
              </div>
          </div>
          <button class="botao_quantidade1" onclick="aumentaQuantidade(this)"><i class="fa-solid fa-plus"></i></button>
          <div class="preco_modal">
              <h6>Valor</h6>
              <div class="novo_preco_quantidade"><p>${produtoCarrinho.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p></div>
          </div>
          <button class="remove_cart" onclick="removeCart(this)"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      `
    let listaProdutosCarrinho = {...produtoCarrinho}
    arrayCarrinhoObjeto.push(listaProdutosCarrinho)

    localStorage.setItem('carrinho_objeto', JSON.stringify(arrayCarrinhoObjeto))
    let localArrayCarrinhoObjeto = JSON.parse(localStorage.getItem('carrinho_objeto'))

    arrayCarrinho.push(produtoCarrinhoShow)
    localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho))
    let localArrayCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    produtoModal.innerHTML = localArrayCarrinho.join('')

    let totalCarrinho = localArrayCarrinhoObjeto.reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0)

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
  produtoModal.innerHTML = JSON.parse(localStorage.getItem('carrinho'))

  let localArrayCarrinhoObjeto = JSON.parse(localStorage.getItem('carrinho_objeto'))

  let totalCarrinho = localArrayCarrinhoObjeto.reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0)

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
  
  let containerProduto = document.querySelector(`[data-nome-produto="${produtoCarrinho.nome}"]`)
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

  localStorage.setItem('carrinho_objeto', JSON.stringify(arrayCarrinhoObjeto))
  localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho))

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

  let totalCarrinho = arrayCarrinhoObjeto.reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0)

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

    let totalCarrinho = arrayCarrinhoObjeto.reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0)

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

  if (arrayCarrinho) {
    delete arrayCarrinho.index
    let novaArrayCarrinho = JSON.stringify(arrayCarrinho)
    localStorage.setItem('carrinho', novaArrayCarrinho)
  }
  if (arrayCarrinhoObjeto) {
    delete arrayCarrinho.index
    let novaArrayCarrinhoObjeto = JSON.stringify(arrayCarrinhoObjeto)
    localStorage.setItem('carrinho_objeto', novaArrayCarrinhoObjeto)
  }

  let produtoModalRemove = document.getElementById('produto_modal')
  produtoModalRemove.innerHTML = arrayCarrinho

  let valorCarrinhoRemove = document.getElementById('valorTotal')

  let totalCarrinhoRemove = ''
  if (arrayCarrinhoObjeto.length >= 1) {
    totalCarrinhoRemove = arrayCarrinhoObjeto.reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0)

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
    


 







