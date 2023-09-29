/*
  Dibujar un cuadrado hueco con asteriscos.

  Ejemplos:
  cuadrado(4)

  // Devuelve:

  ****
  *  *
  *  *
  ****
*/

function cuadrado(tamano) {
  if (tamano < 1) {
    console.log("El tamaño debe ser igual o mayor que 1");
    return;
  }

  for (let fila = 1; fila <= tamano; fila++) {
    let linea = '';
    if (fila === 1 || fila === tamano) {
      // Dibuja una línea completa de asteriscos para la primera y última fila.
      for (let col = 1; col <= tamano; col++) {
        linea += '*';
      }
    } else {
      // Dibuja asterisco en la primera columna y la última columna, espacios en el medio.
      for (let col = 1; col <= tamano; col++) {
        if (col === 1 || col === tamano) {
          linea += '*';
        } else {
          linea += ' ';
        }
      }
    }
    console.log(linea);
  }
}

// Ejemplo de uso:
cuadrado(2);
