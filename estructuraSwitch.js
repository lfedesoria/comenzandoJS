// SWITCH REEMPLAZA A LOS IF ELSE CUNANDO TENEMOS VARIOS DE ESTOS 
// SE USA CUANDO TENEMOS MUCHAS CINDICIONES QUE EVALUAR

/* 
switch(condicion){
    case '1':
            codigo a ejecutar
    break
    case '2':
            codigo a ejecutar
    break
    case 'otros':
            codigo a ejecutar
    break
    default
        opcion por defecto 
}
*/

let estaciones = prompt('Ingrese el numero correspondiente a la estacion del año: 1. verano, 2. otoño, 3. invierno, 4. primavera');

switch (estaciones) {
    case '1':
            document.write('Eligio verano')
        break;
    case '2':
            document.write('Eligio otoño')
        break;
    case '3':
            document.write('Eligio invierno')
        break;
    case '4':
            document.write('Eligio primavera')
        break;
    default:
            alert('No eligio una opcion valida')
        break;
}
