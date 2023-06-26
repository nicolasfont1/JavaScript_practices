function likes(names) {
   let arrayLength = names.length
   if(!arrayLength) return 'no one likes this';

   if(arrayLength === 1) return `${names[0]} likes this`
   if(arrayLength === 2) return `${names[0]} and ${names[1]} like this`
   if(arrayLength === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
   if(arrayLength >= 4) return `${names[0]}, ${names[1]} and ${arrayLength-2} others like this`
}


//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// console.log(likes([]))//'no one likes this'
// console.log(likes(['Peter']))//'Peter likes this'
// console.log(likes(['Jacob', 'Alex']))//'Jacob and Alex like this'
// console.log(likes(['Max', 'John', 'Mark']))//'Max, John and Mark like this'
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))//'Alex, Jacob and 2 others like this'
