console.log("Hello world desde NODE.js");
//alert("Hola mundo");
console.log('en', 'un', 'lugar', 'de', 'la', 'Mancha');
console.info('Info');
//console.warn('Warning');
//console.error('Error');

$(document).ready(function(){
    console.log('Librería jQuery cargada');
});


const car1 = {name:"Audi", model:"A4"};
const car2 = {name:"Volvo", model:"XC90"};
const car3 = {name:"Ford", model:"Fusion"};

console.table([car1, car2, car3]);
const nombre = prompt("Escriba su nombre", "Escriba aquí");
//document.write("Tu nombre es: "+nombre);



const conf = confirm("Sí o no");
// true o fase
console.log("Valor de funcion conf: "+conf);