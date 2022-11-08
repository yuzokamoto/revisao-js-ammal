const escritaNormal = (param) => {
    return param
}

const abreviado = (param) => (param)

console.log(escritaNormal({}))
console.log(abreviado({}))

// Só podemos abreviar arrow function quando temos um return de expressão, único
// só um único return dentro das chaves da função!

// técnico: para abreviar, só podemos ter uma única expressão, que deve ser retornada

// não podemos abreviar isso:
const naoAbrevia = (params) => {
    console.log(params) // expressão 1
    return params // expressão 2
}

// não podemos abreviar isso:
const somaDoisNums = (a, b) => {
    const result = a + b // instrução
    return result
}

// assim podemos abreviar isso:
const somaDoisNumsAbrev = (a, b) => (a + b)

















const nomes = [
    "Fulano",
    "Ciclana",
    "Beltrana"
]

console.log(
    nomes.map((nome) => ({
        id: Math.ceil(Math.random() * 100000),
        nome: nome,
        email: nome + "@gmail.com",
        senha: "bananinha-" + nome
    }))
)

console.log(
    [1, 2, 3].map(function (value) {
        return {
            value: value
        }
    })
)

console.log(
    [1, 2, 3].map((value) => ({
        value: value
    }))
)