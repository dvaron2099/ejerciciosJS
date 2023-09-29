function numeroMayor(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} Es el numero mayor`)
  } else if(num1 < num2) {
    console.log(`${num2} Es el numero mayor`)
  } else {
    console.log(`${num1} y ${num1} son los mismos numeros`)
  }
}

numeroMayor(3, 5)
numeroMayor(10, 5)
numeroMayor(5, 5)
