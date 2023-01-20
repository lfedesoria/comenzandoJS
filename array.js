// // ARRAYS O ARREGLOS 

// // ARREGO VACIO 
// let arreglo = []

// // ARREGLO CON ELEMENTOS 

// let series = ['Game of Thrones', 8, 'House of Dragon', 1, 'Breaking Bad', 5, true]

// console.log(series);

// // LENGTH DEL ARREGLO SERIES 

// document.write("Cantidad de series "+ series.length)

// // AGREGAR UN ELEMENTO AL FINAL DEL ARRAY 

// series.push('Los Sopranos')
// console.log(series);

// //PARA ACCEDER A UN ELEMENTO DE ARRAY 
// document.write('El elemento de series en la posicion 3 es ' + series[2])

// // ELIMINAR EL ULTIMO ELEMENTO 

// series.pop();

// console.log(series);

// // AGREGAR UN ELEMENTO AL INICIO 

// series.unshift('Dragon Ball')

// console.log(series);

// // ELIMINA EL PRIMER ELEMENTO 

// series.shift();

// console.log(series);

// // AGREGAR UN ELEMENTO EN UNA POSICION ESPECIFICA 

// series.splice(1, 0, 'Los Soprano', 'Rick and Morty')

// // RECORRER Y/O MOSTRARLOS ELEMENTOS DEL ARRAY 

// let array3 = [4,3,2,1]

// for (let i = 0; i < array3.length; i++){
//     console.log(array3[i]);
// }

// // RECORRER Y/O MOSTRARLOS ELEMENTOS DEL ARRAY usando FOR OF 

// for (let elements of array3) {
//     console.log(elements);
// }

// // RECORRER UN STRING USANDO FOR OF

// let word = 'palabra'

// for (let char of word) {
//     console.log(char);
// }
  
// //OPERADOR SPREAD 

// console.log(...array3);

// // DADO UN ARREGLO DE EDADES ENCONTRAR EL MENOR

// let edades = [45, 12, 88, 41]

// console.log(Math.min(...edades)); //

// // CONVERTIR UN STRING EN UN ARRAY

// console.log(word.split(''));

// let unaPalabra = 'Hola'

// console.log(Array.from(unaPalabra));

// // CONVERTIR EL ARRAY EN STRING

// console.log(array3.join(''));

// let word2 = ['mundo', 'hola']

// console.log(String(word2));

// // CONCATENAR O UNIR DOS ARRAY 

// console.log(array3.concat(edades ));

// // CONOCER EL INDICE DE UN ELEMENTO DEL ARRAY 

// let arrayWord = word.split('')

// console.log(arrayWord.indexOf('l'));

// // SABER SI UN ELEMENTO ESTA INCLUIDO EN EL ARRAY 

// console.log(arrayWord.includes(5));

// console.log(arrayWord.includes('a'));

/* 
PROBLEMA: PEDIR POR PANTALLA EL NOMBRE DE 5 ALUMNOS DE UN CURSO, USANDO BUCLE WHILE.
GUARDARLOS EN UN ARRREGLO LLAMADO ALUMNOS
MOSTRAR POR CONSOLA POR CADA UN UN SALUDO DE BIENVENIDA
*/

// let alumnos = [];

// while (alumnos.length <5) {
//     alumnos.push(prompt('ingrese nombre de alumno'))
// }

// //document.write(alumnos)
// //console.log(alumnos.length);

// for (let i=0; i< alumnos.length; i++) {
//     console.log(`hola ${alumnos[i]}, bienvenido al curso`);
// }


// CALLBACKS 
// son funciones que se pasan o envian como parametros en una funcion 
// Una funcion de primer orden es una funcion que se puede mandar como parametro en una funcion 

 let abecedario = ['c','a','d','f','z','x','e','i','o','b']

 // METODOS MUTABLES SON LOS QUE CAMBIAN EL ARREGLO ORIGINAL
 // SORT MUTA EL ARREGLO ORIGINAL

 console.log(abecedario.sort());

 let numeros = [37, 11, 2, 15, 26, 52, 48, 8, 100, 255]

 console.log (numeros.sort(function (a,b){
    return a-b
 }));

 console.log(abecedario.reverse());

// si ingresa una palabra por ejemplo hola --> aloh

 let revertirPalabra = (word)=> {
    return word.split('').reverse().join('')
 }

console.log(revertirPalabra('palabra')); 

// FILTER
// es mutable: modifica el array oroginal 

let pares = numeros.filter((num)=>{
    return num % 2 === 0;
})

console.log(pares);

let mayor10 = numeros.filter((num) => num > 10)

console.log(mayor10);

// FIND 
// DEVUELVE EL PRIMER ELELEMENTO QUE CUMPLE CON LA CONDICION O UNDEFINED

let alumnos = ['juan', 'pedro', 'carla', 'pablo', 'maria']

let resultadoBusqueda = alumnos.find(alumnos => alumnos === 'juan')

console.log(resultadoBusqueda);

// MAP (metodo inmutable)
// DEVUELVE UN NUEVO ARREGLO CON LOS RESULTADOS DE APLICAR UN LLAMADO A LA FUNCION (CALLBACK)
// A CADA UNO DE LOS ELEMENTOS DEL ARRAY 
// ¡¡¡ SIRVE PARA HACER UNA COPIA DEL ORIGINAL !!!

let numerosDobles = numeros.map (num => num *2)
// array original 
console.log(numeros);
// nuevo array mapeado
console.log(numerosDobles);

let alumnosCopia = alumnos.map(alumnos => alumnos)

console.log(alumnos);
console.log(alumnosCopia);

// FOREACH
// NO MUTA EL ARREGLO ORIGINAL Y NO GENERA UN NUEVO ARREGLO 
// SI QUIERO GUARDAR/COPIAR UN NUEVO ARRAY USO MAP, SI NO USO FOREACH   
 
alumnos.forEach((alumno) => {
    let nombreMayus = alumno.toUpperCase();
    console.log(`Los nombres en mayuscula ${nombreMayus}`)
})

// EJERCICIO: FILTRAR DE UN ARREGLO DE PERSONAS LOS NOMBRES QUE CONTENGAN LA LETRA 'M'

let personas = ['Joaquin','Abel','Mariano','Emmanuel','Mirta','Ambar','Horacio']

let nombresFiltrados = (letra) => {
    let nombres = personas.filter(nombres => nombres.toUpperCase().includes(letra.toUpperCase()))
    return nombres
}

console.log(nombresFiltrados('m'));

// con este ejemplo vemos como aplicar un buscador 
// trim() metodo de String que elimina espacios vacios al inicio y al final de la cadena de caracteres 

// REDUCE 
// METODO QUE ME DEVUELVE UN VALOR RESULTADO DE APLICAR A CADA ELEMENTO UN CALLBACK 

let numbers = [1,2,5,6]
let sum = numbers.reduce((resultado, actual)=> {
    return resultado + actual
})
console.log(sum);

// encontrar elementos unicos con reduce

const array = ["🐈", 1, 2, "🐈", "🐈", 3, 4]

const array2 = [1,2,3,5,2,1]

// se puede clonar el array usando spread oparator 

console.log(...array2, 118);

let uniqueArray = array.reduce(
    (unique, item) =>(unique.includes(item) ? unique : [...unique, item]),
    []
  );

  console.log(uniqueArray); 

// ENCONTRAR UNICOS CON FILTER 

let uniqueArray4 = array.filter((item, index) => array.indexOf(item) === index); 

console.log(uniqueArray4);
