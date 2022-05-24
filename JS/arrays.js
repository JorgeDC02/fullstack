/******************************
* EJERCICIOS DE LA PÀGINA 212 *
*******************************/
/*****************************************************************************************
* Ejercicio 1: escribe un programa que genere un array de 6 valores de tipo number y sean
* mostrados en pantalla utilizando un bucle for clásico y un bucle for...of
*****************************************************************************************/
let array1 = [8, 12, 4, 5];
for(i = 0; i <= array1.length-1 ; i++){
    console.log(`Valor del array ${i} => ${array1[i]}`);
}

for (let numero of array1){
    console.log(`Valor del array ${numero}`);
}

/*******************************************************************************************
* Ejercicio 2 : escribe un programa que almacene los nombres de tres colores en un array y
* los muestre por pantalla mediante un bucle for...of
********************************************************************************************/
const colores = ["blue", "yellow", "green"];
for(let color of colores){
    console.log(color);
}

/*******************************************************************************************
* Ejercicio 3 : escribe un programa con un array que almacene los nombres de tres colores.
* A continuación, crea otro array vacío e inserta en él todos los elementos del primer array
* mediante un for...of y el método push.
********************************************************************************************/
const colores2 = ["blue", "yellow", "green"];
let arrayColor = [];
for(let color2 of colores2){
    arrayColor = color2;
}

for(let i; i< colores2.length; i++){
    arrayColor.push(colores2[i]);
}

/******************************************************************************************
* Ejercicio 4: escribe un programa que dado dos arrays, devuelva el número de elementos
* que son iguales.
*******************************************************************************************/
const arrayA = ["Stellantis", "Volkswagen", "Ford", "Toyota"];
const arrayB = ["Bayer", "Allianz", "Fresenius", "Volkswagen"];
let arrayResultados = [];

let numElements = 0;
for(let valor of arrayA){
    for(let valor2 of arrayB){
        if(valor == valor2){
            numElements++;
            arrayResultados.push(valor);
        }
    }
}
console.log(`El número de elementos que son iguales es de: ${numElements}`);
console.log(`Este es valor repetido: ${arrayResultados}`);

/******************************************************************************************
* Ejercicio 5: escribe un programa que extraiga una porción del array a partir de una
* posición inferior y una superior y lo almacene en otro array.
*******************************************************************************************/
const array1A = ["Manzana", "Pera", "Sandías", "Melón", "Melocotón", "Uva"];
let array2A = [];
const posicionInferior = 1;
const posicionSuperior = 4;

let largeArray =  posicionSuperior - posicionInferior;

for(let i = posicionInferior; i < posicionSuperior; i++){
    array2A = array1A[i];
    console.log(`Valores del array2A: ${array2A}`);
}

let array3A = array1A.slice(posicionInferior, posicionSuperior);
console.log(`Valores del array3A: ${array3A}`);

/******************************************************************************************
* Ejercicio 2 del proyecto: escribe un programa que almacene los objetos creados en el
* ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A
* continuación, recorre cada uno de los arrays y muestra todas propiedades.
******************************************************************************************/
let myObjects = [{
    gestor : 'Federico',
    cliente : 'Jorge',
    mensaje : 'Mensaje de prueba',
    transferencia: '21/05/2022'
},
{
    gestor: 'Frederic',
    cliente: 'Pau',
    mensaje: 'Segundo mensaje',
    transferencia: '20/04/2021'
}];
console.log(myObjects[0].gestor);


