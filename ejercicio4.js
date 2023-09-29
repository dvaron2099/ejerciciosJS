/*
  Dada una cadena de texto, darle la vuelta e invertir el orden
  de sus caracteres, sin usar metodos propios del leguaje,
  solo estructuras de control.

  Ejemplos"
  invertir('hola')        // Devuelve: 'aloh'
  invertir('victor')      // Devuelve: 'rotciv'
  invertir('robles')      // Devuelve: 'selbor'
*/

function invertir(texto) {
  let invertido = '';
  for (let letra of texto) {
    invertido = letra + invertido ;
  }
  console.log(invertido)
}

invertir('robles')
