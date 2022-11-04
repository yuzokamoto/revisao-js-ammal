// Utilizado para iterar objetos não iteráveis (que nada mais são que objetos comuns {})

const obj = {
    propA: "A",
    propB: "B",
    propC: "C",
    prop1: 1,
    prop2: 2,
    prop3: 3,
    propBool: false,
    propNull: null
}

for (let key in obj) {
    console.log(key) // chave
    console.log(obj[key]) // valor
}

// Objetos não-iteráveis são objetos comuns {}
// Para iterar a gente usa o FOR IN
{
    key: "valor"
}

// Objetos iteráveis são arrays comuns []
// Para iterar a gente usa o FOR OF
[ "valor" ] // no índice 0