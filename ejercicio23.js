function capitalizarPrimerasLetras(frase) {
  const palabras = frase.split(' ');

  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];
    palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  }

  return palabras.join(' ');
}

const frase = "esto es una frase de ejemplo";
const fraseCapitalizada = capitalizarPrimerasLetras(frase);

console.log(fraseCapitalizada); // Esto imprimirá "Esto Es Una Frase De Ejemplo"
