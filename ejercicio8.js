/*
  Dado un numero entero, invertirlo y devuelve de nuevo el numero entero.

  Ejemplos:
  invertirNumero(67)   // Devuelve: 76
*/

function invertirNumero(numero) {
  let numberString = String(numero);
  let inverString = numberString.split('').reverse().join('');
  let inverNumber = parseInt(inverString);

  return inverNumber
}

console.log(invertirNumero(67))
