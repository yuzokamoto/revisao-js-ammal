// Desestruturação serve para acessar propriedades de objeto e array

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

// desestruturação de array

const [ , , beltrana ] = users

console.log(beltrana)

