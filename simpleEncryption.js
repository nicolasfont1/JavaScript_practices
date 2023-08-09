function encrypt(text, n) {
  if(n <= 0 || text === "" || text === null) return text
  let odds = []
  let evens = []
  for (let i = 0; i < text.length; i++){
    if (i % 2 === 0) {
      evens.push(text[i])
    } else {
      odds.push(text[i])
    }
  }
  
  const result = odds.concat(evens).join("")

  return encrypt(result, n - 1)
}

console.log(encrypt("This is a test!", 1))//"hsi  etTi sats!"

// -------------------------------------------------------------------------------

function decrypt(text, n) {
  if(n <= 0 || text === "" || text === null) return text
  let odds = text.split("", text.length / 2)
  let evens = text.slice(text.length / 2).split("")
  let decryptedStr = []
  let evenCount = 0
  let oddCount = 0

  for (let i = 0; i < text.length; i++){
    if (i % 2 === 0) {
      decryptedStr.push(evens[evenCount])
      evenCount +=1
    } else {
      decryptedStr.push(odds[oddCount])
      oddCount +=1
    }
  }
  return decrypt(decryptedStr.join(""), n - 1)
}

console.log(decrypt("This is a test!", -1)) //"This is a test!"

// ------------------------------------------------------------------

// En una respuesta de CodeWars el usuario obtiene indices pares e impares jugando
// con el valor inicial de la variable iteradora y sumandole 2 en cada vuelta.