// É utilizado para proteger acesso à propriedades undefined (?.)

const bank = {
    clients: [
        {
            id: 1,
            name: "Astrodev",
            accounts: [
                {
                    id: "acc1",
                    balance: 500000
                }
            ]
        }
    ]
}

console.log(bank?.clients[1]?.accounts[0]?.balance)