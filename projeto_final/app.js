const nomeUsuario = prompt('Seja bem vindo ao buscador de filmes e séries Mooviez App! Para continuar, por favor digite o seu nome: ')

const user = document.getElementById('user')

nomeUsuario === '' ?  user.innerHTML = `<h2>Olá visitante!</h2>` : user.innerHTML = `<h2>Olá ${nomeUsuario}!</h2>`
/*if(nomeUsuario === '') {
    user.innerHTML = `<h2>Olá visitante!</h2>`
} else {
    user.innerHTML = `<h2>Olá ${nomeUsuario}!</h2>`
}*/
console.log(`Olá ${nomeUsuario}`) || console.log('Ola visitante')

let enter = document.getElementById('campo_pesquisa')

enter.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        event.preventDefault()
        document.getElementById('btn_pesquisar').click()
    }
})

function pesquisar() {
    
    let resultado = document.getElementById('resultado_filmes')

    let campoPesquisa = document.getElementById('campo_pesquisa').value    
    campoPesquisa = campoPesquisa.toLowerCase()

    let rangeBar = Number(document.getElementById('range').value)

    if ((campoPesquisa === '') || (campoPesquisa === ' ')) {
        resultado.innerHTML = `<p>Nada foi digitado.</p>`
        return
    } else {
        let compilarResultado = ''
        let titulo = ''
        let genero = ''
        let sinopse = ''
        let plataforma = ''
        let range = ''
            for (let pesquisa of obras) {
                titulo = pesquisa.titulo.toLowerCase()
                genero = pesquisa.genero.toLowerCase()
                sinopse = pesquisa.descricao.toLowerCase()
                plataforma = pesquisa.plataforma.toLowerCase()
                range = Number(pesquisa.avaliacoes.publico)

                if(((titulo.includes(campoPesquisa)) || (genero.includes(campoPesquisa)) || (sinopse.includes(campoPesquisa)) || (plataforma.includes(campoPesquisa))) & (range >= rangeBar)) {

                    // Se utilizar o inner aqui chega no mesmo resultado mas nao e recomendado pois essa repeticao e considerada como dado critico, entao cria-se uma variavel que recebe a repeticao do for e entrega no inner
                    //resultado.innerHTML += `...`
                    compilarResultado += `
                    <div class="resultado_filme">
                        <h2>${pesquisa.titulo}</h2>
                        <p>Sinopse: ${pesquisa.descricao}</p>
                        <p>Gênero: ${pesquisa.genero}</p>
                        <p>Atores: ${pesquisa.principaisAtores}</p>
                        <p>Lançamento: ${pesquisa.anoLancamento}</p>
                        <p>Avaliações do público: ${pesquisa.avaliacoes.publico}</p>
                        <p>Avaliações dos críticos: ${pesquisa.avaliacoes.criticos}</p>
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
        console.log(`Você pesquisou pelo seguinte termo: ${campoPesquisa}. O resultado pode ser visualizado no navegador.`)
    }
}

const [filme1, filme2, filme3, filme4, filme5] = obras
console.log(filme1, filme2, filme3, filme4, filme5)

const {titulo, descricao, genero} = filme4
console.log(titulo, descricao, genero)

const spreadFilme = {
    ...filme1
}
console.log(spreadFilme)

const novosFilmes = [
    ...obras,
    {
        titulo: "Filme de Teste",
        descricao: "Inclusao via spread",
        genero: "Teste",
        anoLancamento: 2023,
        principaisAtores: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
        avaliacoes: {
          publico: 8.5,
          criticos: 8.7
        },
        plataforma: "Teste"
      }
]
console.log(novosFilmes)