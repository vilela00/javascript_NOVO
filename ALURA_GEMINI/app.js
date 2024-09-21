function pesquisarFrutas() {
    
    let resultadoFrutas = document.getElementById('resultado_frutas')

    let campoPesquisaFrutas = document.getElementById('campo_pesquisa_frutas').value    
    campoPesquisaFrutas = campoPesquisaFrutas.toLowerCase()

    if ((campoPesquisaFrutas === '') || (campoPesquisaFrutas === ' ')) {
        resultadoFrutas.innerHTML = `<p>Nada foi digitado</p>`
        return
    } else {
        let compilarResultadoFrutas = ''
        let nome = ''
        let cor = ''
            for (let pesquisaFrutas of frutas) {

                nome = pesquisaFrutas.nome.toLowerCase()
                cor = pesquisaFrutas.cor.toLowerCase()

                if((nome.includes(campoPesquisaFrutas)) || (cor.includes(campoPesquisaFrutas))) {
                    compilarResultadoFrutas += `
                    <div>
                        <h2>Nome: ${pesquisaFrutas.nome}</h2>
                        <p>Cor: ${pesquisaFrutas.cor}</p>
                        <p>Peso: ${pesquisaFrutas.peso}</p>
                        <p>Preco: ${pesquisaFrutas.preco}</p>
                    </div>
                    `
                }
            }
        if (!compilarResultadoFrutas) {
            compilarResultadoFrutas = `<p>Nenhum resultado a ser exibido</p>`
        }
        resultadoFrutas.innerHTML = compilarResultadoFrutas
    }
}

function pesquisar() {
    
    let resultado = document.getElementById('resultado_filmes')

    let campoPesquisa = document.getElementById('campo_pesquisa').value    
    campoPesquisa = campoPesquisa.toLowerCase()

    if ((campoPesquisa === '') || (campoPesquisa === ' ')) {
        resultado.innerHTML = `<p>Nada foi digitado.</p>`
        return
    } else {
        let compilarResultado = ''
        let titulo = ''
        let genero = ''
        let sinopse = ''
        let plataforma = ''
            for (let pesquisa of obras) {
                titulo = pesquisa.titulo.toLowerCase()
                genero = pesquisa.genero.toLowerCase()
                sinopse = pesquisa.descricao.toLowerCase()
                plataforma = pesquisa.plataforma.toLowerCase()

                if((titulo.includes(campoPesquisa)) || (genero.includes(campoPesquisa)) || (sinopse.includes(campoPesquisa)) || (plataforma.includes(campoPesquisa))) {

                    // Se utilizar o inner aqui chega no mesmo resultado mas nao e recomendado pois essa repeticao e considerada como dado critico, entao cria-se uma variavel que recebe a repeticao do for e entrega no inner
                    //resultado.innerHTML += `...`
                    compilarResultado += `
                    <div>
                        <h2>Titulo: ${pesquisa.titulo}</h2>
                        <p>Sinopse: ${pesquisa.descricao}</p>
                        <p>Genero: ${pesquisa.genero}</p>
                        <p>Atores: ${pesquisa.principaisAtores}</p>
                        <p>Lancamento: ${pesquisa.anoLancamento}</p>
                        <p>Avaliacoes do publico: ${pesquisa.avaliacoes.publico}</p>
                        <p>Avaliacoes dos criticos: ${pesquisa.avaliacoes.criticos}</p>
                        <p>Onde assistir: ${pesquisa.plataforma}</p>
                    </div>
                    `
                }
            }
        if (!compilarResultado) {
            compilarResultado = `<p>Nenhum resultado a ser exibido</p>`
        }
        // Estrutura mais utilizada para manipular dados criticos, cria-se uma variavel para que o inner chame apenas uma vez, uma variavel
        resultado.innerHTML = compilarResultado
    }
}
