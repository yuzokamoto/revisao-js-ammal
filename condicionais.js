const telaA = "Componente A" // componente
const telaB = "Componente B" // componente
const telaC = "Componente C" // componente

// O QUE É o break?
// é uma palavra-chave do JS que encerra um loop ou um switch case

let telaAtiva = "C"

function renderizaTela() {
    switch (telaAtiva) {
        case "A":
            console.log("o caso A")
            return telaA
        case "B":
            console.log("o caso B")
            return telaB
        case "C":
            console.log("o caso C")
            return telaC
        default:
            console.log("o caso default")
    }
}

console.log(renderizaTela())