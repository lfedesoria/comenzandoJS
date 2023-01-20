let nombre = "Tony Stark"
let nroSerie = "123abc"
let precio = 5500
let version = "end-game"

// CREAR UN OBJETO VACIO DE MANETA LITERAL 

let objetoVacio = {}

// CREAR UN OBJETO DE MANERA LITERAL 

let funkoIronMan = {
    // Notacion KEY VALUE : value son las propiedades o atributos de un objeto  
    nombre : "Tony Stark",
    nroserie : "123abc",
    precio : 5500, 
    version : "end-game",
    
}

// MOSTRAR EL OBJETO EN CONSOLA 
console.log(funkoIronMan);

// MOSTRAR EL OBJETO EN EL DOCUMENTO 

document.write(funkoIronMan);

// MOSTRAR UNA PROPIEDAD DEL OBJETO 
// FORMA 1: nombreOBjeto.propiedad 

document.write("<br> Producto FunkoIronMAn" + funkoIronMan.nombre)

// FORMA 2: nombreObjeto['propiedad']

document.write("<br>Precio: "+ funkoIronMan['precio'])

// SI QUEREMOS UTILIZAR UN FOR.OF PARA ITERAR EL OBJETO --> NOS DIRA QUE EL OBJETO NO ES ITERABLE 
// SE PUEDE USAR EN CAMBIO UN FOR.IN 

for (const prop in funkoIronMan) {
    document.write(`<br><br> ${prop} : ${funkoIronMan[prop]}`)
}

