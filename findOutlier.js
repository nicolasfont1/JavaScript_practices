// function findOutlier(integers){
//     let evens = 0, odds = 0
//     let evenAux = 0, oddAux = 0
//     integers.forEach((elem) => {
//         if(elem === 0) return (evens ++, evenAux = elem)
//         if(elem%2 === 0){
//             evens ++
//             evenAux = elem
//         } else {
//             odds ++
//             oddAux = elem
//         }
//     })
//     if(evens < 2){
//         return evenAux
//     } else {
//         return oddAux
//     }
// }

// ---------------------------------------------------------------

function findOutlier(integers){
  const even = integers.filter(int => int % 2 === 0);
  const odd  = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]))//1
console.log(findOutlier([1, 2, 3]))//2
console.log(findOutlier([2,6,8,10,3]))//3
console.log(findOutlier([0,0,3,0,0]))//3
console.log(findOutlier([1,1,0,1,1]))//0

// Recibo un array de enteros. Este array va a estar compuesto
// por todos pares o impares, excepto por un numero que va a ser
// el opuesto al resto. Tengo que devolver ese numero.