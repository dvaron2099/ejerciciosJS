/*
  Dados dos arrays, devolver array con solo elementos comunes entre ambos.

  Ejemplos:
  elementosComunes([4,5,6,7], [7,8,9,7,5])    // Devuelve: [5, 7]

 */

  function elementosComunes(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const comunes = [];

    for (const elemento of set1) {
      if (set2.has(elemento)) {
        comunes.push(elemento);
      }
    }

    return comunes;
  }

  console.log(elementosComunes([4, 5, 6, 7], [7, 8, 9, 7, 5])); // Devuelve [5, 7]
