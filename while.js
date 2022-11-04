// quando o for não for necessário ou implementável, o while é a melhor opção
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

let continuarJogando = true

while (continuarJogando) {
    console.log("Você está jogando")

    continuarJogando = confirm("Quer continuar jogando?")
}

console.log("Acabou o jogo.")