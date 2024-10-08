let abrirCarrinho = document.getElementById('abrir_carrinho')
let iFrame = document.getElementById('iframe_home')

abrirCarrinho.addEventListener('click', function () {
    iFrame.contentWindow.postMessage('abrirCarrinho', '*')
})



  