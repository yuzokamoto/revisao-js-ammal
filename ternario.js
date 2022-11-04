// tudo que entrar no console.log é uma expressão

// Ternário
// expressãoInicial ? expressao_se_inicial_verdadeiro : expressao_se_inicial_falso

function isOdd(n) {
    return n % 2 === 0 ? `O número ${n} é par.` : `O número ${n} é ímpar.`
}

console.log(isOdd(10))
console.log(isOdd(11))

function getLetterPosition(letter) {
    return letter === "a" ? 1
        : letter === "b" ? 2
        : letter === "c" ? 3
        : letter === "d" ? 4
        : letter === "e" ? 5
        : letter === "f" ? 6
        : 7
}

console.log(getLetterPosition("d"))