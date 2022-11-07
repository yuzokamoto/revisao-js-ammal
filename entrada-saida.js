// podemos dar export default diretamente
export default function f1() {}

// não podemos dar export default diretamente
export const f2 = () => {}

// Entrada
// A função recebe como entrada uma lista de números
// entrada = parâmetro/argumento

function minhaFuncao(params) {
    return params
}

// chama a funcao e envia os dados de entrada
console.log(
    minhaFuncao([1, 2, 3, 4, 5, 6, 7, 8, 9])
)


// Saída
// É o que vem do lado direito do return na função

