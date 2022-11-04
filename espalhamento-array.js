// O operador de espalhamento é utilizado para copiar um novo objeto e array

const users = [
    {
        id: 1,
        name: "Fulano"
    },
    {
        id: 2,
        name: "Ciclana"
    },
    {
        id: 3,
        name: "Beltrana"
    }
]


const copiaUsers = [
    {
        id: 0,
        name: "Bananinha"
    },
    ...users,
    {
        id: 4,
        name: "Astrodev"
    }
]

console.log(users)
console.log(copiaUsers)







function somaNums(a, b) {
    return a + b
}

const arg = [5, 10]
console.log(somaNums(...arg))
// significa que os argumentos de uma função nada mais são que itens de um array