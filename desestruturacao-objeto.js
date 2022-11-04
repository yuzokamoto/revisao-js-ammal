// Desestruturação serve para acessar propriedades de objeto e array

const props = {
    telaAtiva: "Produtos",
    carrinho: [],
    "super hero": "Batman",
    prop1: 1,
    prop2: 2,
    propNull: null
}

// desestruturação de objeto

function MeuComponente({telaAtiva, carrinho}) {
    // const {
    //     telaAtiva,
    //     carrinho
    // } = props

    console.log(telaAtiva)
    console.log(carrinho)

    return "jsx"
}

// MeuComponente(props)

// Podemos renomear as propriedades na desestruração
const {
    telaAtiva: novoNomeTela,
    carrinho: novoNomeCarrinho,
    "super hero": superHero
} = props

console.log(props)
console.log(novoNomeTela)
console.log(novoNomeCarrinho)
console.log(superHero)