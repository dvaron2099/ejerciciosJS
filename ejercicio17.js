/**
  Dado un numero, mostrar los numeros de 1 hasta el numero. Pero para mulstiplos de tres
  imprimir buzz en lugar del numero, para los multiplos de 5 imprimir "lightyear".
  Para mulstiplos de tres y cinco imprimen "BuzzLightyear".
 */



function buzzLightyear(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
      console.log("Buzz")
    } else if (i % 5 == 0 && i % 3 != 0) {
      console.log("Lightyear")
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log("BuzzLightyear")
    } else {
      console.log(i)
    }
  }
}

buzzLightyear(100)
