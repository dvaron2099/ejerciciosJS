function obtenerDivisores(numero) {
  const divisores = [];

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }

  return divisores;
}

const numero = 12; // Cambia esto al número del que deseas obtener los divisores
const divisores = obtenerDivisores(numero);
console.log(`Los divisores de ${numero} son: ${divisores.join(', ')}`);
