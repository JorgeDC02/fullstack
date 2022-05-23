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