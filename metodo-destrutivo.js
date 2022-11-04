// Não tem nada a ver com desestruturação!
// Métodos destrutivos alteram o dado original

const arr = [1, 2, 3, 4, 5]

// arr.pop() é destrutivo, altera o original

// qual é a saída?

const copiaArr = [...arr]

copiaArr.pop()

console.log(arr)
console.log(copiaArr)