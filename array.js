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

