function comprar () {

    let produtoCarrinho = document.getElementById('dados_carrinho')
    let valorCarrinho = document.getElementById('valorTotal')
  
    produtoCarrinho.innerHTML = JSON.parse(localStorage.getItem('carrinho'))
    valorCarrinho.innerHTML = JSON.parse(localStorage.getItem('valor_total'))
  }

let arrayCarrinho = JSON.parse(localStorage.getItem('carrinho'))
let arrayCarrinhoObjeto = JSON.parse(localStorage.getItem('carrinho_objeto'))
let innerValorTotal = JSON.parse(localStorage.getItem('valor_total'))

if (arrayCarrinho == '') {
  let valorCarrinho = document.getElementById('valorTotal')
  valorCarrinho.classList = 'valorTotalVazio'
  valorCarrinho.innerHTML = `
    <h5 class="carrinho_vazio">Seu carrinho está vazio!</h5>
    <a href="./index.html"><button class="btn btn-secondary">Voltar para a Pagina Inicial</button></a>
  `
} else {
  comprar ()
}

function aumentaQuantidade(elementAumenta) {
  let elementoPaiCarrinho = elementAumenta.parentElement
  let nomeProdutoAumenta = elementoPaiCarrinho.querySelector('.nome_carrinho').innerHTML

  let valorCarrinho = document.getElementById('valorTotal')
  let buscaProduto = arrayCarrinhoObjeto.find((dados) => dados.nome === nomeProdutoAumenta)

  let index = arrayCarrinhoObjeto.indexOf(buscaProduto)
  arrayCarrinhoObjeto.splice(index, 1)
  let pushProduto = {...buscaProduto, quantidade: (++buscaProduto.quantidade)}
  arrayCarrinhoObjeto.push(pushProduto)

  let novoContainerProduto = ''
  novoContainerProduto = `
        <div class="container_produto_modal" data-nome-produto="${buscaProduto.nome}">
          <div class="imagem_produto_modal"><img src="${buscaProduto.imagem}" alt=""></div>
          <div class="info_produto_modal">
              <h6>Produto</h6>
              <p class="nome_carrinho">${buscaProduto.nome}</p>
          </div>
          <button class="botao_quantidade" onclick="diminuiQuantidade(this)"><i class="fa-solid fa-minus"></i></button>
          <div class="quantidade_produto_modal">
              <h6>Quantidade</h6>
              <div class="container_quantidade">
                <div class="quantidade_carrinho"><input class="quantidade" id="quantidadeCart" type="text" name="quantidadeCart" value="${buscaProduto.quantidade}"></div>
              </div>
          </div>
          <button class="botao_quantidade1" onclick="aumentaQuantidade(this)"><i class="fa-solid fa-plus"></i></button>
          <div class="preco_modal">
              <h6>Valor</h6>
              <div class="novo_preco_quantidade"><p>${(buscaProduto.preco * buscaProduto.quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p></div>
          </div>
          <button class="remove_cart" onclick="removeCart(this)"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `
  arrayCarrinho.splice(index, 1)
  arrayCarrinho.push(novoContainerProduto)

  localStorage.setItem('carrinho_objeto', JSON.stringify(arrayCarrinhoObjeto))
  localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho))

  let novaQuantidadeInput = `
    <input class="quantidade" id="quantidadeCart" type="text" name="quantidadeCart" value="${buscaProduto.quantidade}">
  `
  let novoPrecoQuantidadeInner = `
    <p>${(buscaProduto.quantidade * buscaProduto.preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
  `

  let novaQuantidade = elementoPaiCarrinho.querySelector('.quantidade_carrinho')
  let novoPrecoQuantidade = elementoPaiCarrinho.querySelector('.novo_preco_quantidade')
    novaQuantidade.innerHTML = novaQuantidadeInput
    novoPrecoQuantidade.innerHTML = novoPrecoQuantidadeInner

    let totalCarrinho = JSON.parse(localStorage.getItem('carrinho_objeto')).reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0)

    let valorAVista = totalCarrinho * 0.9
    let valorAPrazo = totalCarrinho / 3

    let valorTotal = ''
      valorTotal = `
        <div class="valor_total">
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
    innerValorTotal = valorTotal
    localStorage.setItem('valor_total', JSON.stringify(innerValorTotal))
    valorCarrinho.innerHTML = JSON.parse(localStorage.getItem('valor_total'))
}

function diminuiQuantidade(elementDiminui) {
  let elementoPaiCarrinho = elementDiminui.parentElement
  let nomeProdutoDiminui = elementoPaiCarrinho.querySelector('.nome_carrinho').innerHTML

  let valorCarrinho = document.getElementById('valorTotal')
  let buscaProduto = arrayCarrinhoObjeto.find((dados) => dados.nome === nomeProdutoDiminui)

  if (buscaProduto.quantidade > 1) {

  let index = arrayCarrinhoObjeto.indexOf(buscaProduto)
  arrayCarrinhoObjeto.splice(index, 1)
  let pushProduto = {...buscaProduto, quantidade: (--buscaProduto.quantidade)}
  arrayCarrinhoObjeto.push(pushProduto)

  let novoContainerProduto = ''
  novoContainerProduto = `
        <div class="container_produto_modal" data-nome-produto="${buscaProduto.nome}">
          <div class="imagem_produto_modal"><img src="${buscaProduto.imagem}" alt=""></div>
          <div class="info_produto_modal">
              <h6>Produto</h6>
              <p class="nome_carrinho">${buscaProduto.nome}</p>
          </div>
          <button class="botao_quantidade" onclick="diminuiQuantidade(this)"><i class="fa-solid fa-minus"></i></button>
          <div class="quantidade_produto_modal">
              <h6>Quantidade</h6>
              <div class="container_quantidade">
                <div class="quantidade_carrinho"><input class="quantidade" id="quantidadeCart" type="text" name="quantidadeCart" value="${buscaProduto.quantidade}"></div>
              </div>
          </div>
          <button class="botao_quantidade1" onclick="aumentaQuantidade(this)"><i class="fa-solid fa-plus"></i></button>
          <div class="preco_modal">
              <h6>Valor</h6>
              <div class="novo_preco_quantidade"><p>${(buscaProduto.preco * buscaProduto.quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p></div>
          </div>
          <button class="remove_cart" onclick="removeCart(this)"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `
  arrayCarrinho.splice(index, 1)
  arrayCarrinho.push(novoContainerProduto)

  localStorage.setItem('carrinho_objeto', JSON.stringify(arrayCarrinhoObjeto))
  localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho))

    let novaQuantidadeInput = `
      <input class="quantidade" id="quantidadeCart" type="text" name="quantidadeCart" value="${buscaProduto.quantidade}">
    `
    let novoPrecoQuantidadeInner = `
      <p>${(buscaProduto.preco * buscaProduto.quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
    `

    let novaQuantidade = elementoPaiCarrinho.querySelector('.quantidade_carrinho')
    let novoPrecoQuantidade = elementoPaiCarrinho.querySelector('.novo_preco_quantidade')
      novaQuantidade.innerHTML = novaQuantidadeInput
      novoPrecoQuantidade.innerHTML = novoPrecoQuantidadeInner

      let totalCarrinho = JSON.parse(localStorage.getItem('carrinho_objeto')).reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0)

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
      innerValorTotal = valorTotal
      localStorage.setItem('valor_total', JSON.stringify(innerValorTotal))
      valorCarrinho.innerHTML = JSON.parse(localStorage.getItem('valor_total'))
  }
}

function removeCart (elementRemove) {
  const elementoPaiCarrinho = elementRemove.parentElement
  const nomeProdutoRemove = elementoPaiCarrinho.querySelector('.nome_carrinho').innerHTML

  let produtoRemoveCarrinho = arrayCarrinhoObjeto.find((dados) => dados.nome === nomeProdutoRemove)

  let index = arrayCarrinhoObjeto.indexOf(produtoRemoveCarrinho)
  
  arrayCarrinho.splice(index, 1)
  arrayCarrinhoObjeto.splice(index, 1)
  localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho))
  localStorage.setItem('carrinho_objeto', JSON.stringify(arrayCarrinhoObjeto))

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
  if (innerValorTotal) {
    innerValorTotal = `<h5 class="carrinho_vazio">Seu carrinho está vazio!</h5>`
    let novoInnerValorTotal = JSON.stringify(innerValorTotal)
    localStorage.setItem('valor_total', novoInnerValorTotal)
  }

  let produtoModalRemove = document.getElementById('dados_carrinho')
  produtoModalRemove.innerHTML = arrayCarrinho

  let valorCarrinho = document.getElementById('valorTotal')

  let totalCarrinho = ''
  if (arrayCarrinhoObjeto.length >= 1) {
    totalCarrinho = JSON.parse(localStorage.getItem('carrinho_objeto')).reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0)

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
    innerValorTotal = valorTotal
    localStorage.setItem('valor_total', JSON.stringify(innerValorTotal))
    valorCarrinho.innerHTML = JSON.parse(localStorage.getItem('valor_total'))
} else {
  valorCarrinho.classList = 'valorTotalVazio'
  valorCarrinho.innerHTML = `
    <h5 class="carrinho_vazio">Seu carrinho está vazio!</h5>
    <a href="./index.html"><button class="btn btn-secondary">Voltar para a Pagina Inicial</button></a>
  `
} 
}

function finalizarCompra () {
const modal = document.getElementById('modal')
    const closeModalBtn = document.querySelector('.close')
    closeModalBtn.addEventListener('click', () => modal.close())
    const closeModalBtnX = document.querySelector('.close_x')
    closeModalBtnX.addEventListener('click', () => modal.close())
    modal.showModal()

    let listaPedido = document.querySelector('.modal_body')
    let listaArray = JSON.parse(localStorage.getItem('carrinho'))
    let listaPreco = JSON.parse(localStorage.getItem('carrinho_objeto'))
    let precoFInal = listaPreco.reduce((soma, preco) => soma + (preco.preco * preco.quantidade), 0)

    new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(listaPedido.innerHTML = `
            <p>Uhuu!</p>
            <p><strong>Marcos,</strong> recebemos o seu pedido e seu pagamento ja foi aprovado!</p>
            <p>Segue abaixo o resumo do seu pedido:</p>
            <p>${listaArray}</p>
            <h5>O valor total da sua compra foi de: <strong>${precoFInal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></h5>
            <p>O seu pedido sera enviado conforme opcao de envio selecionada. Agradecemos a preferencia!</p>
          `)
      }, 3000)
    })
}

function limparCarrinho () {
  let arrayCarrinho = JSON.parse(localStorage.getItem('carrinho'))
  let arrayCarrinhoObjeto = JSON.parse(localStorage.getItem('carrinho_objeto'))
  let innerValorTotal = JSON.parse(localStorage.getItem('valor_total'))

    arrayCarrinho = []
    arrayCarrinhoObjeto = []
    innerValorTotal = `
      <h5 class="carrinho_vazio">Seu carrinho está vazio!</h5>
    `

    localStorage.setItem('valor_total', JSON.stringify(innerValorTotal))
    localStorage.setItem('carrinho_objeto', JSON.stringify(arrayCarrinhoObjeto))
    localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho))

    window.location.href = './home.html'
}