function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const serie = fibonacci(n - 1);
    serie.push(serie[serie.length - 1] + serie[serie.length - 2]);
    return serie;
  }
}

const n = 100; // Cambia n al número de términos que deseas en la serie
const serieFibonacci = fibonacci(n);
console.log(serieFibonacci);
