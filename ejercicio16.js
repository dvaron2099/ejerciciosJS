/**
 * Dada una cadena de texto, devolver cuantas vocales (a, e, i, o, u) tiene.
 *
 * vocales("victorroblesweb.es")  // Devuelve: 6
 */

const { count } = require("console")


function vocales(frase) {
  let letters = ["a", "e", "i", "o", "u"];
  arr = frase.toLocaleLowerCase().split('');
  let count = 0;
  arr.forEach(element => {
    if (letters.includes(element)) {
      count += 1
    }
  });
  return count
}

console.log(vocales("victorroblesweb.es"))
