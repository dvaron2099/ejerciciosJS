/*
  Dadon un texto y una busqueda, censurar todas las conincidencias de
  la busqueda en el texto con [-CENSURADO].

  Si el texto y la busqueda estan vacio mostrar.
  "No puedes leer el texto y la busqueda" en el caso de que ambos parametros
  no lleguen.

  Ejemplos:
  censurado("hola hola", "hola")    // Devuelve: [-CENSURADO] [-CENSURADO]
  censurado()     // Devuelve: "No puedes leer el texto y la busqueda"
  censurado("hola")     // Devuelve: "No puedes hacer la busqueda"
*/

function censurado(texto = "", busqueda = "") {
  if (texto === "" && busqueda === "")  {
    return "No puedes leer el texto y la busqueda"
  } else if (texto !== "" && busqueda === "") {
    return "No puedes hacer la busqueda"
  } else {
    let censor = "[-CENSURADO]";
    let censors = [];
    let arr = texto.split(' ')
    arr.forEach(e => {
      if (e === busqueda) {
        censors.push(censor)
      }
    });
    return censors.join(' ')
  }
}

console.log(censurado())
console.log(censurado("hola hola"))
console.log(censurado("hola hola", "hola"))
