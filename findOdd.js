// function findOdd(A) {
//     for(let i = 0; i < A.length; i++){
//         let aux = A[i]
//         if(A.length < 2) return aux
//         let count = 0
//         for(let j = 0; j < A.length; j++){
//             if(A[j] === aux){
//                 count ++
//             }
//         }
//         if(count%2 === 1) return aux
//     }
// }

//-------------------------------------------------------

function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    console.log(obj)
    for(prop in obj) {
        console.log(obj[prop])
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }

// console.log(findOdd([7]))//7
// console.log(findOdd([1,1,2]))//2
// console.log(findOdd([0,1,0,1,0]))//0
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))//4

// Tengo que devolver el numero que se repita una cantidad de veces IMPAR.
// Recorrer el array con dos for, uno toma el primer numero y el otro lo compara con todos los que siguen.
// Crear una variable aux para guardar el puntero del primer for, y una variable count que cuente cuantas veces
// matchea aux con la iteracion del segundo for, en caso de que aux%2 != 0 devolver aux.