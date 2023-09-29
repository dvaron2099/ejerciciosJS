/*
  Dado un numero, mostrar una escalera con escalones de "[-]"
  usando el numero para los niveles de la escalera.

  Ejemplos:
  escalera(4) // Devuelve:

  [-]
  [-][-]
  [-][-][-]
  [-][-][-][-]
*/

function escalera(numero) {
  let escal = "[-]"
  for (let i = 1; i <= numero; i++) {
    console.log(escal.repeat(i))
  }
}

escalera(5)
