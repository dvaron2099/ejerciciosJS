/**
  Dada una cadena de texto, devolver el caracter mas usado.

  Ejemplos:
  masUsado("victorroblesweb.es")

  // Devuelve :

  Lo que mas se repite es: e

 */

  function masUsado(texto) {
    // Objeto para mantener el recuento de caracteres
    const contador = {};

    // Recorre la cadena y cuenta la frecuencia de cada carácter
    for (let i = 0; i < texto.length; i++) {
      const caracter = texto[i];
      if (contador[caracter]) {
        contador[caracter]++;
      } else {
        contador[caracter] = 1;
      }
    }

    // Encuentra el carácter más frecuente
    let caracterMasFrecuente = '';
    let maxFrecuencia = 0;

    for (const caracter in contador) {
      if (contador[caracter] > maxFrecuencia) {
        caracterMasFrecuente = caracter;
        maxFrecuencia = contador[caracter];
      }
    }

    return `Lo que más se repite es: ${caracterMasFrecuente}`;
  }

  const resultado = masUsado("victorroblesweb.es");
  console.log(resultado);
