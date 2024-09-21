function calcular () {

    let resultado = document.getElementById('resultado_calculo')

    let campoValor = document.getElementById('valor_emprestimo').value
    let campoValorPonto = campoValor.replace('.', '')
    let campoValorVirgula = campoValorPonto.replace(',', '.')
    let campoJuros = document.getElementById('taxa_juros').value
    let campoJurosVirgula = campoJuros.replace(',', '.')
    let campoPrazo = document.getElementById('prazo').value

    if((campoValor === '') || (campoValor === ' ') || (campoJuros === '') || (campoJuros=== ' ') || (campoPrazo === '') || (campoPrazo === ' ')) {
        //resultado.innerHTML = `<p>Todos os campos devem ser preenchidos</p>`
        const modal = document.getElementById('modal')
        const closeModalBtn = document.querySelector('.close')
        closeModalBtn.addEventListener('click', () => modal.close())
        const closeModalBtnX = document.querySelector('.close_x')
        closeModalBtnX.addEventListener('click', () => modal.close())
        modal.showModal()
    } else {
        let jurosComposto =  campoValorVirgula * ((1 + (campoJurosVirgula/100))**campoPrazo)
        let emReal = jurosComposto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        let valorParcela = jurosComposto/ campoPrazo
        let valorParcelaReal = valorParcela.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        resultado.innerHTML = 
        `<p>Valor total do empréstimo: <i class="border1">${emReal}</i></p>
        <p>Você irá pagar <i class="border1">${campoPrazo}</i> parcelas de <i class="border1">${valorParcelaReal}</i></p>
        <button class="btn btn-secondary open">Análise da Operação</button>`
        
    let analise = document.getElementById('texto_analise')

    const modalAnalise = document.getElementById('modal_analise')
    const openModalBtn = document.querySelector('.open')
    openModalBtn.addEventListener('click', () => modalAnalise.showModal())
    const closeModalBtn = document.querySelector('.close_1')
    closeModalBtn.addEventListener('click', () => modalAnalise.close())
    const closeModalBtnX = document.querySelector('.close_x_1')
    closeModalBtnX.addEventListener('click', () => modalAnalise.close())

    if(campoJurosVirgula <= 1.5) {        
        analise.innerHTML = `<p>A taxa de juros de ${campoJuros}% ao mês é considerada uma taxa baixa em virtude da Selic atual. Apenas empréstimos consignados, com garantia, ou de programas do governo possuem essa taxa atualmente.</p>`
    } else if((campoJurosVirgula > 1.5) & (campoJurosVirgula <= 3)) {
        analise.innerHTML = `<p>A taxa de juros de ${campoJuros}% pode ser considerada média alta. Busque prazos menores nestes casos para evitar que os juros se acumulem e se torne muito altos no decorrer do tempo. Lembre-se de que o alto custo das taxas irão corroer o valor atual durante o tempo. Tente se programar para quitar este tipo de empréstimo.</p>`
    } else if((campoJurosVirgula > 3) & (campoJurosVirgula <= 5)) {
        analise.innerHTML = `<p>A taxa de juros de ${campoJuros}% é considerada alta. Alguns contratos são celebrados de maneira abusiva, e você pode recorrer junto à justiça comum para reduzir suas taxas de juros. Muitas vezes este tipos de contratação são de fácil acesso, normalmente já estão pré aprovados a um clique de serem contratados. Fuja dessa cilada.</p>`
    } else {
        analise.innerHTML = `<p>A taxa de juros de ${campoJuros}% é um absurdo. Fuja deste tipo de empréstimo e caso tenha alguma dívida com uma taxa igual a esta sendo aplicada, busque seus direitos e reduza bruscamente o valor final deste contrato.</p>`
    }
    }
}


