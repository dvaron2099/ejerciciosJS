/*
  Dados dos numeros, devolver cuantos numeros impares hay entre ellos.
  impares

  Ejemplos:
  impares(1, 100)     // Devuelve: 49
*/

function impares(inicio, final) {
  let count = 0
  for (let i = inicio+1; i <= final; i++) {
    if (i % 2 !== 0 ) {
      count++;
    }

  }
  return count
}

console.log(impares(1, 100))
