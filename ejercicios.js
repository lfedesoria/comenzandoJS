// 01
// alert('un mensaje')

// 02
// document.write('Hello World')
// document.write("<br>")

// 03
// document.write(3+5)
// document.write("<br>")

//04
// let nombre = prompt('Escriba su nombre')
// document.write('Hola '+ nombre)
// document.write("<br>")

//05
// let numero1 = parseInt(prompt('escriba un numero'))
// let numero2 = parseInt(prompt('escriba otro numero'))
// document.write(numero1 + numero2)
// document.write("<br>")

//06
// ESTRUCTURA CONDICIONALES
/*
if (condicion verdadera o falsa) {
    se ejecuta esta parte de codigo si la condicion es verdadera
}
*/

// let num1 = parseInt(prompt('ingrese un numero'))
// let num2 = parseInt(prompt('ingrese otro numero'))

// if (num1>num2) {
//     document.write(num1)
// } else {
//     document.write(num2)
// }

// 07
// let number1 = parseInt(prompt('ingrese un numero'))
// let number2 = parseInt(prompt('ingrese un numero diferente al anterior'))
// let number3 = parseInt(prompt('ingrese un numero diferente a los dos anteriores'))

// if (number1 > number2 && number1 > number3) {
//     document.write(number1)
// } else if (number2 > number1 && number2 > number3) {
//     document.write(number2)
// } else {
//     document.write(number3)
// }

// 08
// let number = parseInt(prompt('ingrese un numero'))

// if (number % 2 === 0) {
//     console.log("El numero es divisible en 2");
// } else {
//     console.log("El numero no es divisible en 2");
// }

// 09
// let frase = prompt("escriba una frase");

// for (i = 0; i < frase.length; i++) {
//   const caracter = frase.charAt(i);
//   switch (caracter) {
//     case "a":
//       document.write(frase.substring(i, i+1) + "<br>");
//       break;
//     case "e":
//       document.write(frase.substring(i, i+1) + "<br>");
//       break;
//     case "i":
//       document.write(frase.substring(i, i+1) + "<br>");
//       break;
//     case "o":
//       document.write(frase.substring(i, i+1) + "<br>");
//       break;
//     case "u":
//       document.write(frase.substring(i, i+1) + "<br>");
//       break;
//     default: 
//      console.log('no es una vocal');
//   }
// }

// 10
// let num = parseInt(prompt("ingrese un numero"));

// if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
//   document.write("El numero ingresado es divisible por 2, 3, 5 o 7");
// } else {
//   alert(
//     "El numero ingresado no es divisible en ninguno de los numeros establecidos"
//   );
// }

// 11 (CONSULTAR)

// let num = parseInt(prompt("ingrese un numero"));

// if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
//   if (num % 2 === 0) {
//     document.write("El numero es divisible en 2 <br>");
//   }
//   if (num % 3 === 0) {
//     document.write("El numero es divisible en 3 <br>");
//   }
//   if (num % 5 === 0) {
//     document.write("El numero es divisible en 5 <br>");
//   }
//   if (num % 7 === 0) {
//     document.write("El numero es divisible en 7 <br>");
//   }
// } else {
//   document.write("El numero no es divisible por 2, 3, 5 o 7");
// }

// EJERCICIOS BUCLES

// 03
/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. */

// let frase = ''
// let fraseNueva = ''

// while (confirm('desea ingresar texto?') === true) {
//   frase = prompt('ingrese texto');
//   if (frase !== null) {
//     fraseNueva = fraseNueva + frase + '-';
//   }
// }

// document.write(fraseNueva);
