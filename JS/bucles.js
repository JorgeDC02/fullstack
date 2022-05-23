 /*******************************************************************
*Ejercicio 8: escribe un programa que muestre todos los números desde el 1 al 50.
********************************************************************/
for(let i = 1; i <= 50; i++){
    console.log(i);
}

/*******************************************************************
*Ejercicio 9: escribe un programa que imprima toda la tabla de multiplicar del 5 (desde 0 hasta 10).
********************************************************************/
//let resultado;
for(let i = 0; i <= 10; i++){
    //resultado = 5*i;
    document.write(`5 * ${i} = ${5*i} <br>`);
}

/*******************************************************************
*Ejercicio 10: Ejercicio 10: escribe un programa que pida al usuario una palabra (mediante la función prompt) y lo muestre por pantalla 10 veces.
********************************************************************/
let palabra = prompt("Ingrese una palabra");
for(let i = 0 ; i <= 9; i++){
    document.write(`${i+1} - Se ha ingresado la palabra: ${palabra}<br>`);
}

/*******************************************************************
* Ejercicio 11: escribe un programa que pida al usuario un número entero positivo
*(mediante la función prompt) y muestre por pantalla la cuenta atrás desde ese número
*hasta cero, utilizando comas como separación.
********************************************************************/
var numero2 = prompt("Ingrese un número entero positivo");
console.log(numero2);
console.log(typeof parseInt(numero2));
let entero = parseInt(numero2);

if(numero2 < 0){
    alert("Ingrese un número entero positivo");
    numero2 = prompt("Ingrese un número positivo");
}else if(Number.isInteger(numero2)){
    alert("Ingrese un número entero");
    numero2 = prompt("Ingrese un número positivo");
}

for(let z = numero2; z >= 0; z--){
    
    console.log(`${z},`);
}

