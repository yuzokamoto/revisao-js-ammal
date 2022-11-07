const numbers = [1, 2, 3, 4]

// 0 + 1 + 2 + 3 + 4

const totalSum = numbers.reduce(
  (previousValue, currentValue) => {
    return previousValue + currentValue
  },
  0 // valor inicial
)

console.log(totalSum)
// expected output: 10

// [1, 2, 3, 4].reduce(() => {}, 0)