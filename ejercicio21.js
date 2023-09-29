/**
 * recortar('Cursos Desarrollo Web', 6)   // Devuelve: 'Cursos'
 */

function recortar(frase, numero) {
  let recorte = frase.replace(/\s+/g, '').split('').slice(0, numero).join('')
  return recorte
}

console.log(recortar('Cursos Desarrollo Web', 6))
