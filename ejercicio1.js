/*
  Dado un numero, devolver su tabla de multiplicar completa.

  Ejemplos:
  - Ejecuta esta funcion:
  tablaMultiplicar(5)

  - Me devuelve este resultado:

  # Tabla del 5 #
  1 x 5 = 5
  2 x 5 = 10
  3 x 5 = 15
  4 x 5 = 20
  5 x 5 = 25
  6 x 5 = 30
  7 x 5 = 35
  8 x 5 = 40
  9 x 5 = 45
  1 x 50 = 50
*/

function tablaMultiplicar(numero) {
  let header = `# Tabla del ${numero} #`
  console.log(header)
  let num = numero
  for (let i = 1; i <= 10; i++) {
    let multi = i * num
    console.log(`${i} x ${num} = ${multi}`)
  }
}

tablaMultiplicar(5)
