// Servem para arrays de dados não primitivos (objetos e arrays)

const carrinho = [
    {
        id: 1,
        produto: "Veja",
        preco: 5,
        quantidade: 2
    },
    {
        id: 2,
        produto: "Leite integral 1L",
        preco: 8,
        quantidade: 12
    },
    {
        id: 3,
        produto: "Ventilador",
        preco: 120,
        quantidade: 1
    },
    {
        id: 4,
        produto: "Rodo",
        preco: 10,
        quantidade: 1
    }
]

// Vamos adicionar um novo produto no carrinho
// 1) Checar se o produto já existe no carrinho:
// 1.1 ) Se existir, aumenta a quantidade
// 1.2 ) Se não existir, adiciona o produto no carrinho com quantidade 1


// Adicionar um Leite integral 1L
// Sabemos que o id do leite é 2

const produtoASerAdicionado = {
    // id: 2,
    // produto: "Leite integral 1L",
    // preco: 8

    id: 5,
    produto: "Balde",
    preco: 15
}

const produtoExistente = carrinho.find((produtoNoCarrinho) => {
    return produtoNoCarrinho.id === produtoASerAdicionado.id
})

if (produtoExistente) {
    produtoExistente.quantidade++
} else {
    carrinho.push({
        ...produtoASerAdicionado,
        quantidade: 1
    })
}

console.log(produtoExistente)
console.log(carrinho)





const indexProdutoExistente = carrinho.findIndex((produtoNoCarrinho) => {
    return produtoNoCarrinho.id === 4
})

if (indexProdutoExistente >= 0) {
    console.log("Existe")
} else {
    console.log("Não existe")
}

console.log(indexProdutoExistente)