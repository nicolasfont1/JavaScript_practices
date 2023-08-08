//UNSOLVED :(

function firstNonRepeatingLetter(s) {
  // Convertimos la cadena a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas
  let str = s.toLowerCase();
  
  // Iteramos a través de cada caracter en la cadena
  for(let i = 0; i < str.length; i++) {
    // Si el índice de la primera aparición es igual al índice de la última aparición
    // significa que esta letra no se repite en la cadena
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      // Devolvemos la letra original de la cadena (sin convertir a minúsculas)
      return s[i];
    }
  }
  
  // Si no encontramos ninguna letra no repetida, devolvemos una cadena vacía
  return "";
}



// console.log(firstNonRepeatingLetter('a'))// 'a'
// console.log(firstNonRepeatingLetter('stress'))// 't'
console.log(firstNonRepeatingLetter('moonmen'))// 'e'

// Escribir una función que tome un string como input y retorne el primer caracter
// que no se vuelve a repetir en todo el string. Deduzco que será un nested for.

// Por ejemplo, si la palabra es "stress" la funcion debe retornar "t", ya que solo aparece una vez
// en el string y aparece primero, la letra "e" tampoco se repite pero va despues.

// Como extra, las letras en minuscula y mayuscula son consideradas el mismo caracter, pero la funcion
// debe retornar el case correcto para esa letra. Ej "sTreSS" debe retornar "T" y no "t".

// Si un string contiene todos caracteres repetidos debe retornar None.