// && só resulta no final em verdadeiro quando tudo for verdadeiro
// então se existir um falso, o resultado final sempre será falso

// expressao1 && expressao2 && expressao3 && expressao4 && expressao5
// todas são verdadeiras, com exceção da 3

const obj = {
    prop1: "bananinha"
}

obj.prop2 = {
    color: "red"
}

console.log(obj.prop2 && obj.prop2.color)

function isOdd(n) {
    return n % 2 === 0 && `O número ${n} é par.`
}

console.log(isOdd(19))