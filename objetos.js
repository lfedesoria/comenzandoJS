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
    // METODOS 

    sinStock: function(){
        return false;
    },
    disponible (){
        return true;
    }
    }

// LLAMAR O INVOCAR UN METODO 
// nombreDelObjeto.metodo()

console.log(funkoIronMan.sinStock());;

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

// MOSTRAR UN OBJETO USANDO UN BUCLE FOR TRADICIONAL

const mostrarObjeto = ()=> {
    // usando el metodo keys del objeto obtengo un array con las claves del objeto 
    let claves = Object.keys(funkoIronMan)
    console.log(claves);
    console.log(claves.length);

    for (let i = 0; i < claves.length; i++) {
        let clave = claves[i]
        let valor = funkoIronMan[clave]
        document.write(`<br>${clave} : ${valor}`)
    }
}

mostrarObjeto()

// MOSTRAR EL OBJETO USANDO SU AARAY DE KEYS CON UN FOR.OF

let keys = Object.keys(funkoIronMan)

for (const key of keys) {
    const value = funkoIronMan[key]
    console.log(key, value);
}

// MOSTRAR SOLO LOS VALORES DEL OBJETO POR MEDIO DEL METODO VALUES 
//  DEVUELVE UN ARRAY CON LOS VALORES DE MI OBJETO 

console.log(Object.values(funkoIronMan));

// MOSTRAR USANDO LAS KEYS Y MAPEANDO EL ARRAY DE KEYS 

const mapObjt = Object.keys(funkoIronMan).map(key => {
    const value = funkoIronMan[key]
    console.log(key, value);
})

// MOSTRAR EL OBJETO USANDO EL METODO -ENTRIES- -->

Object.entries (funkoIronMan).map (entry =>{
    const [key, value] = entry
    console.log(key, value);
})

// MODIFICAR UNA PROPIEDAD

funkoIronMan.precio = 6000;

funkoIronMan.version = "Iron Man 2"

mostrarObjeto();

// AGREGAR UNA NUEVA PROPPIEDAD AL OBJETO 

funkoIronMan.tamaño = ['pequeño', 'mediano', 'grande']

mostrarObjeto()

// BORRAR UNA PROPIEDAD DLE OBJETO 

delete funkoIronMan.version

mostrarObjeto()