/*
  Escriba un programa que use console.log para imprimir todos los numeors del 1 al 100,
  con dos excepciones. Para los numeros divisibles por 3, imprima "Fizz" en lugar del numero,
  y para los numeros divisibles por 5(y no 3), imprima "Buzz" en su lugar. Cuando tenga eso
  funcionando, modifique su programa para imprimir "FizzBuzz", para numeros que sean divisibles
  por 3 y 5 (y aun asi imprima "Fizz" o "Buzz" para numeros divisibles por solo uno de ellos).
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 != 0) {
    console.log("Fizz")
  } else if (i % 5 == 0 && i % 3 != 0) {
    console.log("Buzz")
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz")
  } else {
    console.log(i)
  }

}
