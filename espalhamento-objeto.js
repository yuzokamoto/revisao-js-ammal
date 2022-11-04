// O operador de espalhamento é utilizado para copiar um novo objeto e array

const obj = {
    prop1: 1,
    prop2: 2,
    propNull: null,
    method1: (a, b) => { return a * b },
    method2: function (a, b) { return a + b }
}

const copiaObj = {
    ...obj,
    prop3: 3,
    method3: () => {}
}

console.log(obj)
console.log(copiaObj)
