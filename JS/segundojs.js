/* Ejercicio 2 y 3 de la página 165 */
let a = 2, b = 4, c = 6;
console.log(a+b+c);

c = 60;
console.log(a+b+c);

//document.write("Hello world");
console.log("2*3");
console.log(2*3);

let variable1 = "1", variable2 = 4, logeado = true;

console.log("Valor de String a number: "+parseInt(variable1));
console.log(typeof variable1);
console.log("Valor de number a String: "+toString(variable2));
console.log("Valor de number a String: "+String(variable2));
console.log(typeof variable2);
console.log("Valor de boolean a String: "+String(logeado));
/* FIN DE LA ACTIVAD 2 Y 3 PÁGINA 165 */

console.log(2-"3")

/** Actividades del dia: 18/05/2022 **/
const semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Sábado", "Domingo"];

console.log("El día de la semana con la posición 3 es: "+semana[3]);

const semana1 = {dia:"Lunes", tipo:"Laboral"}
const semana2 = {dia:"Martes", tipo:"Laboral"}
const semana3 = {dia:"Miercoles", tipo:"Laboral"}
const semana4 = {dia:"Jueves", tipo:"Laboral"}
const semana5 = {dia:"Viernes", tipo:"Laboral"}
const semana6 = {dia:"Sábado", tipo:"Festivo"}
const semana7 = {dia:"Domingo", tipo:"Festivo"}

console.table([semana1, semana2, semana3, semana4, semana5, semana6, semana7], ["tipo"]);

let miArray = new Array('Saab', 'Volvo', 'BMW');
console.log( miArray instanceof Array);

