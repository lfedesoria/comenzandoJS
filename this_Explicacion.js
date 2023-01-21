const auto = {
    marca: 'Ford',
    modelo: 'Fiesta',
    año: 2018,
    avanzar: function() {
        return 'moviendose hacia adelante'
    },
    retroceder (){
        return 'moviendose hacia atras'
    },
    bocina: ()=> {
        return 'bang bang'
    },
    mostrarMarcaModelo: function(){
        //console.log(this);
        return`${this.marca} ${this.modelo}`
    }
}

console.log(auto.mostrarMarcaModelo());

// KEYWORD -THIS- HACE REFERENCIA AL OBJETO ACTUAL. SIRVE PARA OBTENER TODO LO QUE TIENE UN OBJETO 

const cuenta = {
    nroCuenta : '545645546546',
    saldo: 100,
    deposito(cantidad){
        this.saldo = this.saldo + cantidad
    },
    retiro(cantidad){
        return this.saldo = this.saldo - cantidad
    }
}
// PUEDO PASAR PARAMETROS A LOS METODOS DEL OBJETO 
cuenta.deposito(150)
cuenta.deposito(50)
cuenta.deposito(10)
console.log(cuenta.saldo);
cuenta.retiro(10)
cuenta.retiro(150)
cuenta.retiro(150)
console.log(cuenta.saldo);
