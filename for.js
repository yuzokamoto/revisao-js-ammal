// ele utiliza um contador e incremento
// exemplo: percorrer um array

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

// se um array tem 10 elementos
// a primeira posição é o 0
// a última posição (décima) é o 9

// é comum o contador ser chamado de i
for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}
