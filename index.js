/*1. Suma de dos números: Escribe una función que tome dos 
números como argumentos y devuelva su suma. 

function suma(num1, num2) {
  return console.log(num1 + num2);
}

suma(5, 8);
*/

/*2. Calculadora simple: Crea una calculadora que permita al usuario 
realizar operaciones de suma, resta, multiplicación y división. 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Selecciona una opción (1-4):\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n",
  (opcion) => {
    if (opcion >= 1 && opcion <= 4) {
      rl.question("Ingresa el primer valor: ", (num1) => {
        rl.question("Ingresa el segundo valor: ", (num2) => {
          console.log("Opción seleccionada:", opcion);
          console.log("Valores ingresados:", num1, num2);
          calculadora(parseInt(opcion), parseFloat(num1), parseFloat(num2));
          rl.close();
        });
      });
    } else {
      console.log(
        "La opción ingresada no es válida. Debe ser un número entre 1 y 4.",
      );
      rl.close();
    }
  },
);

function suma(num1, num2) {
  return console.log("Resultado de la suma:", num1 + num2);
}

function resta(num1, num2) {
  return console.log("Resultado de la resta:", num1 - num2);
}

function producto(num1, num2) {
  return console.log("Resultado de la multiplicación:", num1 * num2);
}

function division(num1, num2) {
  if (num2 !== 0) {
    return console.log("Resultado de la división:", num1 / num2);
  } else {
    return console.log("No se puede dividir por cero.");
  }
}

function calculadora(opcion, num1, num2) {
  switch (opcion) {
    case 1:
      suma(num1, num2);
      break;
    case 2:
      resta(num1, num2);
      break;
    case 3:
      producto(num1, num2);
      break;
    case 4:
      division(num1, num2);
      break;
    default:
      console.log("Opción no válida.");
  }
}
*/

/* 
3. Factorial: Escribe una función que calcule el factorial de un número dado. 
//Factorial es igual 5! = 5*4*3*2*1
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return console.log(result);
}

factorial(5);
*/
///probabndo commit
/* 4. Números primos: Crea una función que determine si un número dado es primo o no. 
function primos(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

const numero = 4;
if (primos(numero)) {
  console.log(numero + " es un número primo.");
} else {
  console.log(numero + " no es un número primo.");
} */

//5.Fibonacci: Escribe una función que genere los primeros n números de la secuencia de Fibonacci.

/* function fib(n) {
  const series = [0, 1];
  for (let i = 2; i <= n; i++) {
    const next = series[i - 1] + series[i - 2];
    series.push(next);
  }
  return series;
}

const fibonacciSeries = fib(1);
console.log(fibonacciSeries);
 */

//6.Invertir una cadena: Escribe una función que invierta una cadena de texto.

function Invertir(cadena) {
  return cadena.split("").reverse().join("");
}

const newInvertir = Invertir("Perro");
console.log(newInvertir);
