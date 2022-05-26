//alert("hola");
const countryListAlpha2 = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas (the)",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia (Plurinational State of)",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory (the)",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands (the)",
    "CF": "Central African Republic (the)",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands (the)",
    "CO": "Colombia",
    "KM": "Comoros (the)",
    "CD": "Congo (the Democratic Republic of the)",
    "CG": "Congo (the)",
    "CK": "Cook Islands (the)",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic (the)",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (the) [Malvinas]",
    "FO": "Faroe Islands (the)",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories (the)",
    "GA": "Gabon",
    "GM": "Gambia (the)",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See (the)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran (Islamic Republic of)",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea (the Republic of)",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic (the)",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands (the)",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova (the Republic of)",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands (the)",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger (the)",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands (the)",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines (the)",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation (the)",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan (the)",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands (the)",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates (the)",
    "GB": "United Kingdom of Great Britain and Northern Ireland (the)",
    "UM": "United States Minor Outlying Islands (the)",
    "US": "United States of America (the)",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};

let size = Object.keys(countryListAlpha2).length;
console.log(`Se ha encontrado ${size} paises`);
let claves = Object.keys(countryListAlpha2);
let countA = 0, countB = 0, countC = 0, countD = 0, countE = 0, countF = 0, countG = 0, countH = 0, countI = 0, countJ = 0, countK = 0, countL = 0;
for(let i = 0; i < claves.length; i++){
    let clave = claves[i]
    //console.log(countryListAlpha2[clave]);
    switch(countryListAlpha2[clave].charAt(0)){
        case "A": countA++; 
            document.getElementById("vista").innerHTML += "*</br>"; 
            //document.write("*</br>");
        break;
        case "B": countB++;
            document.getElementById("vista2").innerHTML += "*</br>"; 
            //document.write("*</br>");
        break;
        case "C": countC++;
            document.getElementById("vista3").innerHTML += "*</br>"; 
        break;
        case "D": countD++;
            document.getElementById("vista4").innerHTML += "*</br>"; 
        break;
        case "E": countE++;
            document.getElementById("vista5").innerHTML += "*</br>"; 
        break;
        case "F": countF++;
            document.getElementById("vista6").innerHTML += "*</br>"; 
        break;
        case "G": countG++;
            document.getElementById("vista7").innerHTML += "*</br>"; 
        break;
        case "H": countH++;
            document.getElementById("vista8").innerHTML += "*</br>"; 
        break;
        case "I": countI++;
        break;
        case "J": countJ++;
        break;
        case "K": countK++;
        break;
        case "L": countL++;
        break;

    }
}
console.log(`Se han encontrado ${countA} paises con la letra A`);
console.log(`Se han encontrado ${countB} paises con la letra B`);
console.log(`Se han encontrado ${countC} paises con la letra C`);
console.log(`Se han encontrado ${countD} paises con la letra D`);
console.log(`Se han encontrado ${countE} paises con la letra E`);
console.log(`Se han encontrado ${countF} paises con la letra F`);
console.log(`Se han encontrado ${countG} paises con la letra G`);
console.log(`Se han encontrado ${countH} paises con la letra H`);
console.log(`Se han encontrado ${countI} paises con la letra I`);
console.log(`Se han encontrado ${countJ} paises con la letra J`);
console.log(`Se han encontrado ${countK} paises con la letra K`);
console.log(`Se han encontrado ${countL} paises con la letra L`);

/*******************************
 * ACTIVIDADES DE LA PÁGINA 196*
 ******************************/

/******************************************************************************************
* Ejercicio 1 del proyecto: escribe un programa que declare 3 objetos de cada modelo de
* datos considerado: gestor, cliente, mensaje y transferencia. Los valores de las
* propiedades de los objetos pueden ser arbitrarios.
******************************************************************************************/
const myObject = {
    gestor: "Jorge Duran",
    cliente: "Federico",
    mensaje: "Mensaje de prueba",
    transferencia: () => {
        "Hola"+this.cliente
    }
}
console.log(`Resultado de la llamada al objeto myObject: ${myObject.gestor}`);

const myObject2 = function(nombre){
    this.name = nombre,
    this.cliente = "Federico",
    this.mensaje= function(){
        console.log(`El cliente ${this.cliente} ha enviado un mensaje`);
    },
    this.transferencia = "Hola "+this.cliente
}
let instancia = new myObject2("Jorge Duran");
instancia.mensaje();
console.log(`Resultado de la llamada al objeto myObject2: ${instancia.transferencia}`);
let instancia2 = new myObject2("Pau Duran");

/******************************************************************************************
* Ejercicio 2 del proyecto: escribe un programa que almacene los objetos creados en el
* ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A
* continuación, recorre cada uno de los arrays y muestra todas propiedades.
******************************************************************************************/
arrayObject = Object.keys(myObject);


arrayObject2 = Object.keys(myObject2);
//console.log(arrayObject2);
let lon1 = arrayObject.length;
let lon2 = arrayObject2.length
console.log(lon1);

console.log(myObject[arrayObject[3]]);

console.log(instancia[arrayObject2[0]]);

//console.log(arrayObject[2].toString()+"()");
//console.log("Resultado: "+instancia[arrayObject[2]]());

/*for(let i = 0; i < lon1; i++){
    if(typeof arrayObject2[i] === 'function'    ){
        console.log(myObject[arrayObject[i]()]);
    }else{
        console.log(myObject[arrayObject[i]]);
    }
}

for(let i = 0; i < lon2; i++){
    if(typeof arrayObject2[i] === 'function'    ){
        console.log(myObject2[arrayObject2[i]()]);
    }else{
        console.log(myObject2[arrayObject2[i]]);
    }
   
}*/


//Ejercicio 1 Resuelto Alex Macho Salas
const banco1 = {
    gestor: "10",
    cliente: "Carlos",
    mensaje() {
        console.log("Hola cliente " + this.cliente)
    },
    trasferencia() {
        console.log("Su tranferencia ha sido realizada por el gestor " + this.gestor)
    }
}
const banco2 = {
    gestor: "25",
    cliente: "Carla",
    mensaje() {
        console.log("Hola cliente " + this.cliente)
    },
    trasferencia() {
        console.log("Su tranferencia ha sido realizada por el gestor " + this.gestor)
    }
}
const banco3 = {
    gestor: "12",
    cliente: "Esteban",
    mensaje() {
        console.log("Hola cliente " + this.cliente)
    },
    trasferencia() {
        console.log("Su tranferencia ha sido realizada por el gestor " + this.gestor)
    }
}
arraybnc1=Object.keys(banco1)
arraybnc2=Object.keys(banco2)
arraybnc3=Object.keys(banco3)
console.log(arraybnc1)
console.log(arraybnc2)
console.log(arraybnc3)
for (let i = 0; i < arraybnc1.length; i++) {
    if (typeof(banco1[arraybnc1[i]])=="function") {
        banco1[arraybnc1[i]]();
    } else {
        console.log(banco1[arraybnc1[i]]);
    }
}
for (let i = 0; i < arraybnc2.length; i++) {
    if (typeof(banco2[arraybnc2[i]])=="function") {
        banco2[arraybnc2[i]]();
    } else {
        console.log(banco2[arraybnc2[i]]);
    }
}
for (let i = 0; i < arraybnc3.length; i++) {
    if (typeof(banco3[arraybnc3[i]])=="function") {
        banco3[arraybnc3[i]]();
    } else {
        console.log(banco3[arraybnc3[i]]);
    }
}
