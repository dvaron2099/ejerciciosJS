/*
  Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
  la frase y la palabra deben ser parametros de una funcion.

  Ejemplos:
  coincidencias("hola soy una palabra en una frase, PALABRA.", "palabra") // Devuelve = 2
  coincidencias("soy la frase", "palabra") // Devuelve = 0
*/

// function coincidencias(frase, palabra) {
//   let textClean = frase.toLocaleLowerCase().replace(/[^\w\s]/gi, '')
//   let count = 0

//   textClean.split(' ').forEach(e => {
//     if (e === palabra) {
//       count++
//     }
//   });
//   console.log(count)
// }

function coincidencias(frase, palabra) {
  let textClean = frase.toLocaleLowerCase().replace(/[^\w\s]/gi, '')
  let textSeparate = textClean.split(' ')
  let count = 0

  if (textClean.includes(palabra)) {
    let mapa = {}
    for (let busqueda of textSeparate) {
      if (mapa[busqueda]) {
        mapa[busqueda]++
      } else {
        mapa[busqueda] = 1
      }
    }
    count = mapa[palabra]
  } else {
    count = 0
  }
  return count
}

console.log(
  "Numero de coincidencias en la frase:",
  coincidencias("hola, que tal, soy VICTOR robles. victor victor", "victor")
)
// coincidencias("soy la frase", "palabra")
