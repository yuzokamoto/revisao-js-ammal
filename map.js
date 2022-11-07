const sistema = []

const listaNomes = [
    "Astrodev",
    "Fulano",
    "Ciclana",
    "Beltrana"
]

// Objetivo: é criar uma conta para cada estudante da lista listaNomes
// Sistema: cada estudante tenha uma id, nome e senha

const novosEstudantes = listaNomes.map((nome, i) => {
    const conta = {
        id: i + 1,
        nome: nome,
        senha: nome + (i + 1) // String + Number = String + String(number) = String concatenada
    }

    return conta
})

console.log(listaNomes)
console.log(novosEstudantes)

sistema.push(...novosEstudantes)
console.log(sistema)
