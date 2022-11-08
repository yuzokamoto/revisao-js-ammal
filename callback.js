// É uma função enviada como argumento para outra função
// o exemplo clássico é a função () => {} dentro do .map e do .filter

const arr = [1, 2, 3]

console.log(
    arr.map((num) => {
        return num.toString()
    })
)

// for da posição 0 até a última posição

const result = []

for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    result.push(num.toString())
}

console.log(result)


function validaDados(email, senha) {
    if (typeof email !== "string") {
        return false
    }

    if (typeof senha !== "string") {
        return false
    }

    if (
        !email.includes("@gmail")
        && !email.includes("@protonmail")
    ) {
        return false
    }

    if (senha.length < 6) {
        return false
    }

    return true
}


function modelaCliente (email, senha, cbValidacao) {
    const isDadosValidos = cbValidacao(email, senha)

    const cliente = {
        email: email,
        senha: senha
    } 

    return isDadosValidos
        ? cliente
        : null
}

console.log(modelaCliente("bananinha@gmail.com", "abc123", validaDados))