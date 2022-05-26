/********************************************************************************************
* Ejercicio 5: adaptar las cinco funciones del Ejercicio 4 para que las cuatro funciones
* invoquen el callback una vez han transcurrido 1 segundo (para la función sumar), 2
* segundos (para la función restar), 3 segundos (para la función multiplicar) y 4 segundos
* para dividir (para la función dividir). Añadir un console.log en la última línea del código
* del programa. Utilizar la herramienta de depuración de Chrome para comprobar cómo se
* ejecuta el programa.
*********************************************************************************************/
//alert("hola");
const sumar = (a, b, callback) => callback(a + b);
const restar = (a, b, callback) =>  callback(a - b);
const multiplicacion = (a, b, callback) =>  callback(a * b);
const dividir = (a, b, callback) =>  callback(a / b);

setTimeout(() => {
    sumar(4, 5, (resultado) => {
        console.log(`El valor de la operación suma es: ${resultado}`);
    });

    setTimeout(() => {
        restar(12, 8, (resultado) =>{
            console.log(`El valor de la operación resta es: ${resultado}`);
        });
        console.log("Se han realizado la operacion correctamente");
    }, 2000);

    setTimeout(() => {
        multiplicacion(42,5, (resultado) => {
            console.log(`El valor de la operación multiplicacion es: ${resultado}`);
        });
        console.log("Se han realizado la operacion correctamente");
    }, 3000);

    setTimeout(() => {
        dividir(82, 6, (resultado) => {
            console.log(`El valor de la operación division es: ${resultado}`);
        });
        console.log("Se han realizado la operacion correctamente");
    }, 4000);

    console.log("Se han realizado la operacion correctamente");

}, 1000)
console.log("Se ejecutará el setTimeout de operaciones");
/*******************
* CÓDIGO SÍNCRONO **
********************/
/*
setTimeout(() => {
    sumar(4, 5, (resultado) => {
        console.log(`El valor de la operación es: ${resultado}`);
    });

}, 1000);

setTimeout(() => {
    restar(4, 5, (resultado) => {
        console.log(`El valor de la operación es: ${resultado}`);
    });
}, 2000);
*/

/****************************************
 * find the time left in a setTimeout()?*
 ****************************************/
/*
(function () {
    var nativeSetTimeout = window.setTimeout;
    
    window.bindTimeout = function (listener, interval) {
        function setTimeout(code, delay) {
            var elapsed = 0,
                h;
    
            h = window.setInterval(function () {
                    elapsed += interval;
                    if (elapsed < delay) {
                        listener(delay - elapsed);
                    } else {
                        window.clearInterval(h);
                    }
                }, interval);
            return nativeSetTimeout(code, delay);
        }
    
        window.setTimeout = setTimeout;
        setTimeout._native = nativeSetTimeout;
    };
}());
    window.bindTimeout(function (t) {
        console.log(t + "ms remaining");
    }, 100);

    window.setTimeout(function () {
        console.log("All done.");
    }, 1000);
*/

/*****************************
* código síncrono página 178 *
*****************************/
const consultarDatabase = () => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 2000);
    return "Consulta realizada";
}

console.log("Primera consulta al servidor");
const consulta1 = consultarDatabase();
console.log(consulta1);

console.log("Segunda consulta al servidor");
const consulta2 = consultarDatabase();
console.log(consulta2);

console.log("Más tareas a realizar...");

/********************
* código asíncrono **
********************/
const consultarDatabaseAsincrono = (callback) => {
    setTimeout(() => {
    callback("Consulta realizada");
    }, 2000);
}

console.log("Primera consulta al servidor");
consultarDatabaseAsincrono(function(consulta) {
    console.log(consulta);
});

console.log("Segunda consulta al servidor");
consultarDatabaseAsincrono(function(consulta) {
    console.log(consulta);
});

console.log("Más tareas a realizar...");