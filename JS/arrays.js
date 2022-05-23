//alert("hola");
/*****************************************************************************************
* Ejercicio 1: escribe un programa que genere un array de 6 valores de tipo number y sean
* mostrados en pantalla utilizando un bucle for clásico y un bucle for...of
 ****************************************************************************************/
let array1 = [8, 12, 4, 5];
for(i = 0; i <= array1.length-1 ; i++){
    console.log(`Valor del array ${i} => ${array1[i]}`);
}

for (let numero of array1){
    console.log(`Valor del array ${numero}`);
}