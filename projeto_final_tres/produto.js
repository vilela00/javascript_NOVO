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
  }
  
  window.addEventListener('message', function (event) {
    if (event.data === 'abrirCarrinho') {
      abrirCarrinho ()
    }
  })
    


 







