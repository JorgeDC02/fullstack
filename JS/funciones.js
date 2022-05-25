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
* Ejercicio 1: adaptar el programa del ejercicio anterior simplificando las funciones de
flecha eliminando las llaves y el return.
***************************************************************************************/
const suma3 = (a, b) => a + b;
console.log(`El valor de suma3 = ${suma3(2, 5)}`)

const resta3 = (a,b) => a - b;
console.log(`El valor de resta3 = ${resta3(2, 5)}`)

const multiplicar3 = (a, b) => a * b;
console.log(`El valor de multiplicar3 = ${multiplicar3(2, 5)}`)

const dividir3 = (a, b) => a / b;
console.log(`El valor de dividir3 = ${dividir3(2, 5)}`)


