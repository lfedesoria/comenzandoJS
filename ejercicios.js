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
let frase = prompt('escriba una frase')

for (i = 0; i < frase.length; i++) {
  document.write(frase.charAt(i) + '<br>')   
} 