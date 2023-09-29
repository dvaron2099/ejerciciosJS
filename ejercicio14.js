/**
  Dado un string y un numero, repetir el string tantas veces como el numero lo indique.

  Ejemplos:
  repiteme("victor", 2)

  // Devuelve:
  victorvictor
 */

function repiteme(palabra, repeticion) {
  return palabra.repeat(repeticion)
}

console.log(repiteme("victor", 2))
