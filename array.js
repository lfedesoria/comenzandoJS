// ARRAYS O ARREGLOS 

// ARREGO VACIO 
let arreglo = []

// ARREGLO CON ELEMENTOS 

let series = ['Game of Thrones', 8, 'House of Dragon', 1, 'Breaking Bad', 5, true]

console.log(series);

// LENGTH DEL ARREGLO SERIES 

document.write("Cantidad de series "+ series.length)

// AGREGAR UN ELEMENTO AL FINAL DEL ARRAY 

series.push('Los Sopranos')
console.log(series);

//PARA ACCEDER A UN ELEMENTO DE ARRAY 
document.write('El elemento de series en la posicion 3 es ' + series[2])

// ELIMINAR EL ULTIMO ELEMENTO 

series.pop();

console.log(series);

// AGREGAR UN ELEMENTO AL INICIO 

series.unshift('Dragon Ball')

console.log(series);

// ELIMINA EL PRIMER ELEMENTO 

series.shift();

console.log(series);

// AGREGAR UN ELEMENTO EN UNA POSICION ESPECIFICA 

series.splice(1, 0, 'Los Soprano', 'Rick and Morty')

// RECORRER Y/O MOSTRARLOS ELEMENTOS DEL ARRAY 

let array3 = [4,3,2,1]

for (let i = 0; i < array3.length; i++){
    console.log(array3[i]);
}

// RECORRER Y/O MOSTRARLOS ELEMENTOS DEL ARRAY usando FOR OF 

for (let elements of array3) {
    console.log(elements);
}

// RECORRER UN STRING USANDO FOR OF

let word = 'palabra'

for (let char of word) {
    console.log(char);
}
  
//OPERADOR SPREAD 

console.log(...array3);

// DADO UN ARREGLO DE EDADES ENCONTRAR EL MENOR

let edades = [45, 12, 88, 41]

console.log(Math.min(...edades));

// CONVERTIR UN STRING EN UN ARRAY

console.log(word.split(''));

let unaPalabra = 'Hola'

console.log(Array.from(unaPalabra));

// CONVERTIR EL ARRAY EN STRING

console.log(array3.join(''));

let word2 = ['mundo', 'hola']

console.log(String(word2));

// CONCATENAR O UNIR DOS ARRAY 

console.log(array3.concat(edades ));

// CONOCER EL INDICE DE UN ELEMENTO DEL ARRAY 

let arrayWord = word.split('')

console.log(arrayWord.indexOf('l'));

// SABER SI UN ELEMENTO ESTA INCLUIDO EN EL ARRAY 

console.log(arrayWord.includes(5));

console.log(arrayWord.includes('a'));

/* 
PROBLEMA: PEDIR POR PANTALLA EL NOMBRE DE 5 ALUMNOS DE UN CURSO, USANDO BUCLE WHILE.
GUARDARLOS EN UN ARRREGLO LLAMADO ALUMNOS
MOSTRAR POR CONSOLA POR CADA UN UN SALUDO DE BIENVENIDA
*/




