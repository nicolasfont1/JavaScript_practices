function humanReadable(seconds) {
  let segundos = 0
  let minutos = 0
  let horas = 0

  for (let i = 0; i < seconds; i++){
    segundos += 1
    if (segundos === 60) {
      minutos += 1
      segundos = 0 
    }
    if (minutos === 60) {
      horas += 1
      minutos = 0
    }
  }

  return `${horas < 10 ? "0" : ""}${horas}:${minutos < 10 ? "0" : ""}${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;
}

console.log(humanReadable(59))//'00:00:59
console.log(humanReadable(60))//'00:01:00
console.log(humanReadable(90))//'00:01:30
console.log(humanReadable(3599))//'00:59:59
console.log(humanReadable(86399))//'23:59:59
console.log(humanReadable(86400))//'24:00:00

// Recibo un entero no negativo que representa segundos, tengo que devolver
// la cantidad de horas minutos y segundos que sumarian.