// Utilizado para iterar Arrays (que nada mais são que objetos iteráveis)

const users = [
    {
        id: 1,
        name: "Fulano",
        accounts: [
            {
                id: "conta-1",
                balance: 500000
            },
            {
                id: "conta-2",
                balance: 100000
            },
            {
                id: "conta-3",
                balance: 200000
            }
        ]
    },
    {
        id: 2,
        name: "Ciclana",
        accounts: [
            {
                id: "conta-1",
                balance: 499999
            },
            {
                id: "conta-2",
                balance: 100000
            },
            {
                id: "conta-3",
                balance: 200000
            }
        ]
    },
    {
        id: 3,
        name: "Beltrana",
        accounts: [
            {
                id: "conta-1",
                balance: 1000000
            },
            {
                id: "conta-2",
                balance: 100000
            },
            {
                id: "conta-3",
                balance: 200000
            }
        ]
    }
]

const result = []

for (let user of users) {
    for (let account of user.accounts) {
        if (account.balance >= 500000) {
            result.push(user)
        }
    }
}

console.log(result)