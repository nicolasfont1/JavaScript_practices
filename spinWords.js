// Recibo un string, con una o más palabaras, debo invertir todas las palabras
// que tengan cinco o más letras. El string puede tener letras y espacios, tengo que
// incluir los espacios solo cuando haya más de una palabra

function spinWords(string){
    if(!string.length) return ""

    if(string.trim().split(" ").length === 1){
        return string.trim().split("").reverse().join("")
    }
    
    let finalString = ""
    let separatedString = string.split(" ").map((word) => {
        if(word.length >= 5){
            finalString = finalString + word.split("").reverse().join("") + " "
        } else {
            finalString = finalString + word + " "
        }
    })
    return finalString.trim()
}

console.log(spinWords("Welcome"))//"emocleW"
console.log(spinWords("Hey fellow warriors"))//"Hey wollef sroirraw"
console.log(spinWords("This is a test"))//"This is a test"
console.log(spinWords("This is another test"))//"This is rehtona test"
console.log(spinWords("Just kidding there is still one more"))//"Just gniddik ereht is llits one more"