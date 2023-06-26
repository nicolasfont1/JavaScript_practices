function toCamelCase(str){
    if(!str.length) return ""

    const splittedStr = str.trim().split("")
    let formattedStr = ""
    
    for(let i = 0; i < splittedStr.length; i++){
        if(i === 0){
            formattedStr = formattedStr + splittedStr[i]
        } else if(splittedStr[i] === "-" || splittedStr[i] === "_"){
            formattedStr = formattedStr + splittedStr[i+ 1].toUpperCase()
            ++i
        } else {
            formattedStr = formattedStr + splittedStr[i]
        }
    }
    return formattedStr
}

// console.log(toCamelCase(''))//''
console.log(toCamelCase("the_stealth_warrior"))//"theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior"))//"TheStealthWarrior"
console.log(toCamelCase("A-B-C"))//"ABC"

// Tengo que convertir las palabras separadas por guiones/guiones bajos
// en camelCasing, si la primera letra está en mayúscula tambien
// tengo que pasarla como mayúscula (UpperCamelCasing).