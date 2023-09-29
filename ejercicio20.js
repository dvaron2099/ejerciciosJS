/**
  Dadas dos cadenas de texto, crear un algoritmo que compruebe
  si son anagramas entre si.

  Una cadena es una anagrama de otra si usa los mismos caracteres
  en la misma cantidad.

  No tener en cuenta espacios, simbolos raos, puntos, etc
 */

const { count } = require("console");

function anagramas(word1, word2) {
  let palabra1 = word1.toLocaleLowerCase().split('').sort();
  let palabra2 = word2.toLocaleLowerCase().split('').sort();
  let count = 0
  for (let i = 0; i < palabra1.length; i++) {
    if (palabra1[i] === palabra2[i]) {
      count +=1
    }
  }
  if (count === palabra1.length) {
    return true
  } else {
    return false
  }
}


console.log(anagramas('Riesgo', 'Sergio'))
console.log(anagramas('Riesgddo', 'Sergio'))
