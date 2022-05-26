const hacerAlgo1 = (arg1, arg2) => {

    // apunta al objeto global/window
    console.log(this);

    // la variables se convierten en globales
    this.a = arg1;
    this.b = arg2;

    // pepito
    console.log(a);

    // juanito
    console.log(b);
}

const result = hacerAlgo1('pepito', 'juanito');

/*******************************
 * VARIABLE GLOBAL
 * > pepito
 ******************************/
console.log(a);

// juanito
console.log(b);

// error
//console.log(c);

// error
//console.log(d);



function hacerAlgo2(c, d) {

    // hacerAlgo {}
    console.log(this);
    this.a = c;
    this.b = d;

    // a
    console.log(this.a);

    // undefined
    console.log(this.c);

    // error
    // console.log(a);

    // error
    // console.log(b);
}

let resultado = new hacerAlgo2('a', 'b');

/*******************************
* VARIABLES DEL PROPIO OBJETO **
********************************/
// a
console.log(resultado.a);

// b
console.log(resultado.b);

// error
// console.log(a);

// error
// console.log(b);

// error
// console.log(c);

// error
// console.log(d);

/*****************************
 * ARGUMENTOS EN UNA FUNCION *
 *****************************/
 function saludar() {
    const saludo = arguments[0];
    const nombre = arguments[1];

    // undefined
    console.log(arguments[2]);

    // Adiós, Carlos!
    console.log(saludo + ', ' + nombre + '!');
}

saludar('Adiós', 'Carlos');