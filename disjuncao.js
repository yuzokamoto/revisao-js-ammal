// || só resulta no final em falso quando tudo for falso
// então se existir um verdadeiro, o resultado final sempre será verdadeiro

// expressao1 || expressao2 || expressao3 || expressao4 || expressao5
// todas são falsas, com exceção da 3

const usernameGuardado = undefined

const username = usernameGuardado || "Visitante"

console.log(username)