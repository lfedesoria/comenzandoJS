//  ENCINTRAR EL ELEMENTO MAS GRANDE DE UN ARREGLO ITERANDO UNA SOLA VEZ

const getBiggest = (arr) => arr.reduce ((acc, el)=> acc > el ? acc : el)

// si no agregamos el parametro inicial value => acc sera el 1er elemento del array
// y el 2do elemento sera desde donde empeza a iterar, es decir el=2do elemeno 

const result = getBiggest([50, -1500, 1000, 0, 1, 54])

console.log(result);

// ENCONTRAR LOS ELEMENTOS UNICOS USANDO FILTER 

const array = [18, 8, 9, 18, 18, 3, "4"]

let uniqueArray4 = array.filter((item, index) => array.indexOf(item) === index); 

console.log(uniqueArray4);

// ENCONTRAR ELEMENTOS UNICOS DE UN ARRAY USANDO -SET-
let dupeArray = [1, 1, 4, 5, 4, 4, 2, 1, 5]

let uniqueArray5 = Array.from(new Set(dupeArray));

let uniqueArray2 = [... new Set(dupeArray)];

console.log(uniqueArray5);

console.log(uniqueArray2);

