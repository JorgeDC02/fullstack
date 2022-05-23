//alert("hola");
let count = 0;
while (count <= 100){

    if( count %2 == 0){
        //console.log(`El número ${count} es: PAR`);
        console.log(`<p>El número ${count} es: PAR</p>`);
        let count2 = 1;
     
            while(count2 <= count){
                //setTimeout(function(){
                document.write("*");
                count2++;
            //}, 3000);
            }
       
       
        document.write("<br>");
    }else{
        console.log(`El número ${count} es: IMPAR`);
    }
    
    count++;
}


/**
 * TRY-CATCH
 */
try {
    //adddlert('a');
    let variable = 0;
    console.log(variable);
    //throw 'La función probada no existe o no es correcta';
}
catch (err) {
    // ReferenceError: adddlert is not defined
    alert(err);
}
// lanzar excepción personalizada
//throw 'La función probada no existe o no es correcta';

/********************************
 * EJERCICIO 2 PÁGINA 204********
 ********************************/

/**************************************************************************************
* Ejercicio 1: escribe un programa que dado dos string compruebe si los dos primeros
* caracteres son iguales.
**************************************************************************************/
const cadena1 = "Mi primera cadena";
const cadena2 = "Mi segunda cadena";
console.log(cadena1.substr(0, 2));

if(cadena1.substr(0,2) == cadena2.substr(0, 2)){
    console.log("Los dos primeros caracteres de los strings SON IGUALES");
}else{
    console.log("Los dos primeros caracteres de los strings NO SON IGUALES");
}

/*************************************************************************************
* Ejercicio 2: escribe un programa que dado dos string compruebe si los dos primeros
* caracteres y los dos últimos son iguales.
**************************************************************************************/
const cadena3 = "Mi tercera cadena";
const cadena4 = "Mi cuarta cadena";
console.log(cadena3.substr(cadena3.length-2, cadena3.length));

if(cadena3.substr(0,2) == cadena4.substr(0, 2) 
    && cadena3.substr(cadena3.length-2, cadena3.length) == cadena4.substr(cadena4.length-2, cadena4.length) ){
    console.log("Los dos primeros caracteres y los dos últimos caractares de las cadenas SON IGUALES");
}else{
    console.log("Los dos primeros caracteres y los dos últimos caractares de las cadenas NO SON IGUALES");
}

/*************************************************************************************
* Ejercicio 3: escribe un programa que compruebe que el substring "abc" existe en un
* string dado, pero no puede encontrarse ni al comienzo, ni al final.
**************************************************************************************/
const cadena5 ="Esta la cadena abc para la actividad 3 abc";
console.log(cadena5.indexOf("abc"));

if(cadena5.substr(0, 3) !== "abc" && cadena5.substr(cadena5.length-3, cadena5.length) !== "abc"){
    if(cadena5.indexOf("abc") > 0){
        console.log("Contiene el substring \'abc\'");
    }else{
        console.log("NO Contiene el substring \'abc\'");
    }
}else if((cadena5.indexOf("abc") > 0)){
    console.log("Contiene el substring \'abc\' al inicio o al final");
}else{
    console.log("NO Contiene el substring \'abc\'");
}

/*******************************************************************************
* Ejercicio 4: escribe un programa que dado un string y una determinado posición,
* compruebe que el carácter anterior y el posterior son iguales o no.
********************************************************************************/
const cadena7 = "Esto es un strin de prueba";
const posicion = 3;

if(cadena7.charAt(posicion-1) == cadena7.charAt(posicion+1)){
    console.log("El caràcter anterior y el posterior SON IGUALES");
}else{
    console.log("El caràcter anterior y el posterior NO SON IGUALES");
}

/*******************************************************************************
* Ejercicio 4: escribe un programa que muestre por pantalla la posición de la segunda y
* tercera ocurrencia del carácter 'a' en un string dado.
********************************************************************************/
const cadena8 = "Cadena para la actividad cuatro";
const arrCadena8 = cadena8.split("");
let arrCaracter = new Array();
let posiciones = 0;
for(let i = 0; i <= arrCadena8.length; i++){
    if (arrCadena8[i] == "a"){
        arrCaracter = i;
        console.log(`Caracter encontrado guardado: ${i}`);
        posiciones++;
    }
}

console.log(`Se han encontrado ${posiciones} caracteres a`);

/*******************************************************************************
* Ejercicio 7: escribe un programa que elimine el último carácter de un string.
********************************************************************************/
const cadena9 = "Buenas tardes";
const nuevaCadena9 = cadena9.slice(0, -1);
console.log(`Valor de la nueva cadena: ${nuevaCadena9}`);