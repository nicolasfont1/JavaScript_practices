// La funcion debe meter un espacio donde haya camelCasing y retornar ese string.

// function solution(string) {
//     if(!string) return ""
//     let result = ""

//     for(let i = 0; i < string.length; i++){
//         let nextLetter = string[i+1]
//         if(nextLetter === undefined || nextLetter === nextLetter.toUpperCase()){
//             result = result+string[i]+" "
//         } else {
//             result = result+string[i]
//         }
//     }
//     return result.trim()
// }

//----------------------------------------------------------------------------------

function solution(string) {
    string = string.split('').map((letter) => {
      if (letter === letter.toUpperCase()) {
        letter = ' ' + letter
      }
      return letter
    })
    return string.join('')
}

console.log(solution('camelCasing'))//'camel Casing'
console.log(solution('camelCasingTest'))//'camel Casing Test'
console.log(solution('identifier'))//'identifier'
console.log(solution(''))//''