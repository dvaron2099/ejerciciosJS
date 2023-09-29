/*
  Cuanto es el X por ciento de X numero?

  Ejemplos:
  tantoPorCiento(20, 100)     // Devuelve: 20
  tantoPorCiento(43, 897)     // Devuelve: 385.71
  */

  function tantoPorCiento(numero, total) {
    let porcentaje = total*(numero/100)
    return porcentaje
  }

  console.log(tantoPorCiento(20, 100))
  console.log(tantoPorCiento(43, 897))
