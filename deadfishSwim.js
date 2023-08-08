function deadfishSwim(data) {
  const validLetter = ["i", "d", "s", "o"]
  const returnArray = []
  let value = 0
  for (let i = 0; i < data.length; i++){
    if (validLetter.includes(data[i])) {
      if (data[i] === "i") {
        value += 1
      } else if (data[i] === "d") {
        value -= 1
      } else if (data[i] === "s") {
        value = value ** 2
      } else {
        returnArray.push(value)
      }
    }
  }
  return returnArray
}

console.log(deadfishSwim("iiisdoso"))//[ 8, 64 ]
// console.log(deadfishSwim("iiisxxxdoso"))//[ 8, 64 ]

// Escribir un parser que corra Deadfish
// Deadfish solo tiene 4 comandos, cada uno tiene una letra de largo.
// "i" = incrementa el valor (inicia en 0) !! Voy a tener un valor inicial en 0
// "d" = decrementa ese valor ?? Podrá ser menor que cero?
// "s" = eleva el valor al cuadrado
// "o" = agrega el valor al array de return, pero no lo resetea
// !! Ignorar caracteres invalidos