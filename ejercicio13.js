/*
  Dado un array.
  Dividirlo en arrays de X elementos.

  Ejemplos:
  divideArray([7,8,9,10,5], 2)

  // Devuelva:
  [[7,8], [9,10], [5]]
*/

function divideArray(arr, X) {
  const resultado = [];

  for (let i = 0; i < arr.length; i += X) {
    const subarray = arr.slice(i, i + X);
    resultado.push(subarray);
  }

  return resultado;
}

const arrayOriginal = [7, 8, 9, 10, 5];
const X = 2;

const arrayDividido = divideArray(arrayOriginal, X);

console.log(arrayDividido);
