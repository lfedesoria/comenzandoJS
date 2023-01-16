// WILE 
/* 
while (condicion logica) {
    codigo a ejecutar x camtidad de veces

    variable que cambia la cond logica
}
*/

// let contador = 1 

// while (contador <= 20) {
//     // codigo a ejecutar
//     document.write('Elemento' + contador + '<br>')
    
//     contador++
//     //contador = contador +2 // para aumentar de a 2 
// }

// DO WHILE 
/* 
do {
    codigo a ejecutar 
    variable que cambia la condicion logica 
} while (condicion logica)
*/
//  let cont = 1;

//  do {
//     // codigo a ejecutar 
//     document.write('Contador '+ cont + '<br>')

//     cont ++ 
//  } while (cont == 1);

// BUCLE FOR 

/* 
for (crear una variable; condicion logica; incremental o decremental){
    // codigo a ejecutar
}
*/
for (let i = 1; i <= 20; i++) {
    // codigo a ejecutar tantas veces
   document.write('Estrcutura for '+ i + '<br>')
}

let palabra = 'tomate'

console.log(palabra.length);

for(c = 0; c < palabra.length; c++){
    document.write('letras de palabra '+ palabra.charAt(c) + '<br>')
}