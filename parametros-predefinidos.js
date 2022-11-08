// É possível definir um valor padrão para parâmetro(s) nas funções

// Aqui declaramos que o segundo parâmetro "b" irá inicializar como 1
// caso não seja enviado um argumento para ele
function divideDoisNums(a = 1, b = 1) {
    return a / b
}

// console.log(divideDoisNums(10))
// console.log(divideDoisNums(10, 2))
// console.log(divideDoisNums())

function geraQuantidade(arr = []) {
    return arr.length
}

console.log(geraQuantidade(["a", "b", "c"]))
console.log(geraQuantidade())
