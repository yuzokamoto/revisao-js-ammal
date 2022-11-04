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
    },
    {
        id: 4,
        name: "Astrodev"
    },
    {
        id: 5,
        name: "Bananinha"
    }
]

// Remover o terceiro item (Beltrana)
// O splice é destrutivo, então para manter o array original, vamos criar uma cópia

const copiaUsers1 = [...users]
copiaUsers1.splice(2, 1)

console.log({
    nome: "original",
    users
})

console.log({
    nome: "cópia1",
    users: copiaUsers1
})

// Adicionar um novo item entre o terceiro item e o quarto

const copiaUsers2 = [...users]
copiaUsers2.splice(3, 0, {
    id: 3.5,
    name: "Beltranadev"
})

console.log({
    nome: "original",
    users
})

console.log({
    nome: "cópia2",
    users: copiaUsers2
})