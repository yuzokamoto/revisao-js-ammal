// console.log(funcaoNormal(10)) // vai funcionar
// console.log(funcaoSeta("10")) // vai dar erro, porque a funcaoSeta não é hoisteada (içada)

function funcaoNormal(param) {
    return param
} // hoist / içar = antes de executar linha a linha,
// o js pega a declaração e joga na primeira linha

const funcaoSeta = (param) => {
    return param
}

// exports
// só podemos ter um export default por arquivo

// somente function pode ser exportada como default na mesma linha da declaração
export default function f() {}

// mas qualquer uma das duas pode ser exportada como default depois da declaração
// export default funcaoNormal
// export default funcaoSeta

// É possível criar uma função sem dar nome e executá-la
// self calling anonymous function

(() => {
    // mais pra frente pode ser útil, quando estiver implementando
    // fluxos assíncronos
    console.log("Executei uma função anônima automaticamente")
})()
