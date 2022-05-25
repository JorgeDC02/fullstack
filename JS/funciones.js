//alert("hola");
/**************************************************************************************
* Ejercicio 1: escribir una programa con cuatro funciones de flecha: sumar, restar,
* multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el
* resultado). Posteriormente invocar a las cuatro funciones con valores arbitrarios.
***************************************************************************************/
function suma(a, b){
    return a + b;
}

const suma2 = (a, b) => {
    return a + b;
}

console.log(`Valor de suma = ${suma(2, 4)} y valor de suma2 = ${suma2(2, 4)}`);

function resta(a, b){
    return a - b;
}

const resta2 = (a, b) => {
    return a - b;
}

console.log(`Valor de resta = ${resta(8, 4)} y valor de resta2 = ${resta2(8, 4)}`);

function multiplicar(a, b){
    return a * b;
}

const multiplicar2 = (a, b) => {
    return a * b;
}

console.log(`Valor de multiplicar = ${multiplicar(2, 4)} y valor de multiplicar2 = ${multiplicar2(2, 4)}`);

function dividir(a, b){
    return a / b;
}

const dividir2 = (a, b) => {
    return a / b;
}

console.log(`Valor de dividir = ${dividir(12, 4)} y valor de dividir2 = ${dividir(12, 4)}`);


/**************************************************************************************
* Ejercicio 2: adaptar el programa del ejercicio anterior simplificando las funciones de
* flecha eliminando las llaves y el return.
***************************************************************************************/
const suma3 = (a, b) => a + b;
console.log(`El valor de suma3 = ${suma3(2, 5)}`)

const resta3 = (a,b) => a - b;
console.log(`El valor de resta3 = ${resta3(2, 5)}`)

const multiplicar3 = (a, b) => a * b;
console.log(`El valor de multiplicar3 = ${multiplicar3(2, 5)}`)

const dividir3 = (a, b) => a / b;
console.log(`El valor de dividir3 = ${dividir3(2, 5)}`)

/**************************************************************************************
* Ejercicio 3: adaptar las cuatro funciones del Ejercicio 2 para que reciban un callback que
* sea invocado dentro de la función con el resultado de la operación. Posteriormente
* invocar a las cuatro funciones creando una función de callback por separado y pasándola
* después por parámetro. Utilizar la herramienta de depuración de Chrome (Herramientas
* de desarrollador --> Source) para comprobar cómo se ejecuta el programa.
***************************************************************************************/

const suma4 = (a, b, callback) => {
    callback(a + b);
}

//Declaración del callback
const callback = (resultado) =>{
    console.log(`El valor de la operación es: ${resultado}`);
}

//Invocación de la función
suma4(4, 2, callback)

const resta4 = (a, b, callback2) =>{
    callback2(a - b);    
}

//CALLBACK integrado en la invocación de la función
resta4(8, 5, (resultado) =>{
    console.log(`El valor de la resta es: ${resultado}`);
});

const multiplicar4 = (a, b, callback3) =>{
    callback3(a * b);
}

//CALLBACK integrado en la invocación de la función
multiplicar4(8, 7, (resultado) =>{
    console.log(`El valor de la multiplicación es: ${resultado}`);
});

const dividir4 = (a, b, callback4) =>{
    callback4(a /b);
}

//CALLBACK integrado en la invocación de la función
dividir4(12, 3, (resultado)=>{
    console.log(`El valor de la división es: ${resultado}`);
})

const suma5 = (a, b, callback5) =>  callback5(a + b);
const resta5 = (a, b, callback5) =>  callback5(a - b);
const multiplicacion5 = (a, b, callback5) =>  callback5(a * b);
const dividir5 = (a, b, callback5) =>  callback5(a / b);

/*const callback5 = (resultado)=>{
    console.log(`El valor de la operación es: ${resultado}`);
}*/

suma5(4, 5, callback5);
resta5(4, 5, callback5);
multiplicacion5(4, 5, callback5);
dividir5(4, 5, callback5);

/**************************************************************************************
* Ejercicio 4: adaptar el ejercicio anterior para integrar el callback en la invocación de las
* cuatro funciones, en lugar de creándola como una función de callback por separado.
* Utilizar la herramienta de depuración de Chrome para comprobar cómo se ejecuta el
* programa.
***************************************************************************************/
suma5(4, 5 (resultado) => {
    console.log(`El valor de la operación es: ${resultado}`);
});





