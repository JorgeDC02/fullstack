const a = 4, b = 2;

if(a > b){
    console.log(`a (${a}) es mayor que b (${b})`)
}


/* Actividades de la página  168*/

//ACTIVIDAD 2
let var1 = 9, var2 = 15, var3 = 8, var4 = 12;
if((var1 + var2) > (var3 + var4)){
    console.log(`La suma de (a (${var1})+b (${var2})) es mayor que (c (${var3})+d (${var4}))`);
}else{
    console.log(`La suma de (c (${var3})+d ${var4}) es mayor que (a (${var1})+b (${var2}))`);
}

//ACTIVIDAD EXTRA
const hor1 = 9;

if(hor1 >= 9 && hor1 <=14){
   console.log("Sant Boi"); 
}else if(hor1 >= 15 && hor1 <= 20){
    console.log("Castelldefels");
}else{
    console.log("NO ESTOY EN CLASE");
}

//ACTIVIDAD 3
const angulo1 = prompt("Ingrese el primer ángulo");
const angulo2 = prompt("Ingrese el segundo ángulo");
const angulo3 = prompt("Ingrese el tercer ángulo");

const resultado = parseInt(angulo1) + parseInt(angulo2) + parseInt(angulo3);

if(resultado >= 180){
    document.write(`La suma de los tres ángulos ${resultado} pueden formar un ángulo de 180º`);
}else{
    document.write(`La suma de los tres ángulos ${resultado} NO pueden formar un ángulo de 180º`);

}

//ACTIVIDAD 4
/*********************************************************************
*Ejercicio 4: escribe un programa con una variable de tipo number (a) y un condicional
*que evalúe si el entero es par o impar utilizando el operador %.
**********************************************************************/
const numero = prompt("Ingrese número para ver si es par o impar");
const verificar = parseInt(numero);
if((verificar % 2) == 0){
    console.log(`Número ${verificar}  es PAR`);
}else{
    console.log(`Número ${verificar} IMPAR`);
}

//ACTIVIDAD 5
/**************************************************
*Ejercicio 5: escribe un programa que dado tres números imprima por pantalla cuál es el
*mayor.
***************************************************/
const numero1 = prompt("Ingrese el primer número para comparar");
const numero2 = prompt("Ingrese el segundo número comparar");
const numero3 = prompt("Ingrese el tercer número para comparar");

if(numero1 > numero2 && numero1 > numero3){
    console.log("El número 1 es mayor");
}else if(numero2 > numero1 && numero2 > numero3){
    console.log("El número 2 es mayor");
}else if(numero3 > numero1 && numero3 > numero2){
    console.log("El número 3 es mayor");
}else{
    console.log("NO hay mayor única");
}
