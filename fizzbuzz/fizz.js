/**
 * [numeros valor total a imprimir en pantalla]
 * @type {Number}
 */
var numeros = 100;

/**
 * divisible variable que servirá para saber si un número es divisible
 * @type {Boolean}
 */
var divisible = false;


for (var i = 1; i <= numeros; i++) {
  //reinicio el valor de divisible.
  divisible = false;
  //valido si el número es divisible en 3
  if (i % 3 == 0) {
    //se escribe el término
    document.write('Fizz');
    //cambio el valor de divisible
    divisible = true;
  }
  //valido si el número es divisible en 5
  if (i % 5 == 0) {
    //se escribe el término
    document.write(' Buzz');
    //cambio el valor de divisible
    divisible = true;
  }
  //si no es divisible entre 3 o 5 se escribe el número
  if (!divisible) {
    document.write(i);
  }
  //se imprime el salto de línea
  document.write('<br />');
}
