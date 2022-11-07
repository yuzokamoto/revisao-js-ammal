const clientes = [
    {
        id: 1,
        nome: "Astrodev",
        idade: 18
    },
    {
        id: 2,
        nome: "Fulano",
        idade: 17
    },
    {
        id: 3,
        nome: "Ciclana",
        idade: 16
    },
    {
        id: 4,
        nome: "Beltrana",
        idade: 19
    }
]

// Gerar lista de possíveis clientes que podem comprar bebidas alcólicas


// return true significa que o item permanece
// return false significa que o item é removido
const clientesMaiorDeIdade = clientes.filter((cliente) => {
    if (cliente.idade >= 18) {
        return true
    } else {
        return false
    }

    return cliente.idade >= 18 // é true quando a pessoa for maior de idade
})

console.log(clientesMaiorDeIdade)

// agora eu quero apenas a lista com os nomes, ou seja, uma lista de strings
// das pessoas maiores de idade

const nomesMaiorDeIdade = clientesMaiorDeIdade.map((cliente) => {
    return cliente.nome
})

console.log(nomesMaiorDeIdade)