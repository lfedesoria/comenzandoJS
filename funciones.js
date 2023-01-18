// DECLARAR UNA FUNCION

function holaMundo() {
  console.log("hola mundo, como estan?");
}
// invocar, ejecutar o llamar
holaMundo();

// FUNCIONES CON PARAMETROS
/* 
function nombreFuncion (parametro1, parametro2) {
    codigo a ejecutar
}
*/

function saludar(nombre, apellido) {
  console.log(`Hola mi nombre es ${nombre}, y mi apellido es ${apellido}`);
}

saludar("Federico", "Soria");

function sumarValores(valor1, valor2) {
  if (typeof valor1 !== "number" || typeof valor2 !== "number") {
    console.warn("debe ingresar un valor numerico");
  } else {
    return `${valor1} + ${valor2} = ${valor1 + valor2}`;
  }
}

console.log(sumarValores(8, 4));

// FUNCION CALCULADORA

let calculadora = (valor1, valor2, operador) => {
  if (typeof valor1 !== "number" || typeof valor2 !== "number") {
    console.warn("debe ingresar un valor numerico");
  }
  switch (operador) {
    case "+":
      return `${valor1} + ${valor2} = ${valor1 + valor2}`;

    case "-":
      return `${valor1} - ${valor2} = ${valor1 - valor2}`;

    case "*":
      return `${valor1} * ${valor2} = ${valor1 * valor2}`;

    case "/":
      return `${valor1} / ${valor2} = ${valor1 / valor2}`;

    default:
      return "La operacion ingresada no es valida";
  }
};

// FUNCIONES QUE NOS RETORNAN UN VALOR

function convertirDolaresPesos(dolares) {
  let pesos = dolares * 280;
  return pesos; //el return es la ultima linea de la funcion
}

let precioCelular = convertirDolaresPesos(100);
console.log(`el precio del celular es ${precioCelular}`);

console.log("el precio de la play 5 es " + convertirDolaresPesos(600));

// FUNCIONES FLECHA

/* 
let nombreFuncion()=> {
    codigo a ejecutar
}
*/

let sumar = (num1, num2) => {
  return num1 + num2;
};

console.log(sumar(2, 5));

let suma = (num3, num4) => num3 + num4;

console.log(suma(8, 9));

// SCOPE DE UNA FUNCION

// let heroe = 'Batman'

function mostrarHeroe() {
  let heroe = "Superman"; //gana la variale que este dentro del scope de la funcion
  // fuera de la funcion no existe
  return `Bienvenido ${heroe}`;
}

console.log(mostrarHeroe());

// FUNCION ANONIMA: SE DECLARAN COMO CONSTANTES

const square = function () {
}

