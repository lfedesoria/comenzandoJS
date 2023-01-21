// LAS CLASES SON COMO LOS MOLDES DE LOS OBJETOS
// INSTANCIAMOS OBJETOS A PARTIR DE ELLAS

// function Person() {
//   this.name = "",
//   this.lastName = "", 
//   this.age = "";
// }

// ESTO ES EQUIVALENTE A ESCRIBIR CON LA NOTACION -CLASS-
// ES IMPORTANTE QUE EL NOMBRE D ELA CLASE VA LA PRIMERA LETRA CON MAYUSCULA

class Person {
  constructor(name, lastName, age) { // EN LOS PARAMETROS PUEOD PONER CUALQUIER COSA
    // es la funcion constructor. Es el primer metodo que se ejecuta
    this.name = name, 
    this.lastName = lastName, 
    this.age = age;
  }
  // los metodos se definen fuera del constructor 
  greet(){
    return `Hello i am ${this.name} ${this.lastName}`
  }
}

// PARA INSTANCIAR UN OBJETO SE UNA -NEW- SEGUIDO DE LA CLASE Y ENTRO LOS PARENTESIS IRAN LOS PARAMETROS
// QUE TOMA EL CONSTRUCTOR
const user = new Person('Abel', 'Cordoba', 30);

const alumno = new Person('Marcos', 'Gomez', 15);

console.log(user);

console.log(alumno); 

console.log(user.greet());