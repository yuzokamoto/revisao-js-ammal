const obj = {
    id: "a1",
    name: "Bananinha"
}

// console.log(obj.id) // forma convencional (notação de ponto)
// console.log(obj["id"]) // (notação de colchetes)


const keyOfBananinha = "name"
console.log(obj[keyOfBananinha])
console.log(obj.keyOfBananinha) // vem undefined, porque não existe a prop keyOfBananinha


const pessoa = {
    "Nome completo": "Astrodev",
    "endereco-brasil": "blablabla",
    "conta-bancaria": null,
    "maior de idade": true,
    login: () => {},
    logout: function () {},
    pet: {},
    historicoDeCompras: [
        {},
        {}
    ]
}

console.log(pessoa["Nome completo"])
console.log(pessoa["endereco-brasil"])

// camelCase
// PascalCase
// kebab-case
// snake_case