// Só servem para arrays de dados primitivos (como strings e numbers)

const arrDeStrings = [
    "Astrodev",
    "Fulano",
    "Ciclana"
]

const indexStr = arrDeStrings.indexOf("Fulano")
console.log(indexStr, arrDeStrings[indexStr])

const isCiclanaNaLista = arrDeStrings.includes("Ciclana")
console.log(isCiclanaNaLista)

const isCiclanoNaLista = arrDeStrings.includes("Ciclano")
console.log(isCiclanoNaLista)




const arrDeNumbers = [10, 20, 30, 40, 50]

const indexNum = arrDeNumbers.indexOf(50)
console.log(indexNum)

const is20NaLista = arrDeNumbers.includes(20)
console.log(isCiclanaNaLista)

