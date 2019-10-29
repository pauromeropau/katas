//  Persistent Bugger.
//  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
//  which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let counter = 0;
  num = num.toString();
  while (num.length > 1) {
    counter++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
    //split. If an empty string ("") is used as the separator, the string is split between each character.
    //map. El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    //reduce. El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
    //to.String.
  }
  return counter;
}
