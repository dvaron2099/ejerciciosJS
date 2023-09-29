/**
 * Create an Object with a "hello" method that writes "Hello <name> in the console"
 */

// 'use strict'

const p = {
  name: 'David',
  hello: () => console.log(`Hello ${p.name}`)
}

// p.hello()

/**
 * How would you make the name immutable?
 * (Can write or just describe)
 */

// Hacer la propiedad 'name' inmutable
// Object.defineProperty(p, 'name', { value: 'David', writable: false });

Object.freeze(p); // asi se intenten cambiar la propiedades, estas no se modificaran
p.hello();
p.name = 'Oscar';
p.hello();


const citiesList = [
  "nashville",
  "nashville",
  "los angeles",
  "nashville",
  "memphis",
  "barcelona",
  "los angeles",
  "sevilla",
  "madrid",
  "canary islands",
  "barcelona",
  "madrid",
  "nashville",
  "barcelona",
  "london",
  "berlin",
  "madrid",
  "nashville",
  "london",
  "madrid"
];

function logMostOcurrCities(numCities) {
  const cities = {}
  citiesList.forEach(city => {
    cities[city] = !cities[city] ? 1 : cities[city] +=1
  })
  return Object.keys(cities)
    .map(city => ({name:city, times: cities[city]}))
    .sort((a, b) => b.times - a.times)
    .slice(0, numCities)
    .map(city => city.name)

}

console.log(logMostOcurrCities(5));
