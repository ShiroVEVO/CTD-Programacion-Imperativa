const prompt = require("prompt-sync")({ sigint: true });
/*
Desafio #1

R/- Devuelve 30

Desafio #2

R/- 20
*/

// ------------ SOLUCION "FUNCIONES SIMPLES" ------------------

//1.R/- --------------------------------------------------------

function PulgadasCentimetros(Pulgadas){
    return Pulgadas*2.54;
}

let PulgadasCentimetrosExpresada = function(Pulgadas){
    return Pulgadas*2.54;
}

let PulgadasCentimetrosFlecha = Pulgadas => Pulgadas*2.54;

//2.R/- --------------------------------------------------------

function StringUrl (Cadena){
    return ("http://www." + Cadena + ".com");
}

let StringUrlExpresada = function(Cadena){
    return ("http://www." + Cadena + ".com");
}

let StringUrlFlecha = (Cadena) => ("http://www." + Cadena + ".com");

//3.R/- --------------------------------------------------------

function Admiracion (Cadena){
    return "¡" + Cadena + "!";
}

let AdmiracionExpresada = function(Cadena){
    return "¡" + Cadena + "!";
}

let AdmiracionFlecha = (Cadena) => "¡" + Cadena + "!";

//4.R/- --------------------------------------------------------

function EdadPerros (EdadPerro){
    return EdadPerro * 7;
}

let EdadPerrosExpresada = function(EdadPerro){
    return EdadPerro * 7;
}

let EdadPerrosFlecha = (EdadPerro) => EdadPerro * 7;

//5.R/- --------------------------------------------------------

function HoraLaboral (Sueldo){
    return Sueldo/40;
}

let HoraLaboralExpresada = function(Sueldo){
    return Sueldo/40;
}

let HoraLaboralFlecha = (Sueldo) => Sueldo/40;

//6.R/- --------------------------------------------------------

function calculadorIMC(Altura, Peso){
    return Peso/Math.pow(Altura,2);
}

let calculadorIMCExpresado = function (Altura, Peso){
    return Peso/Math.pow(Altura,2);
}

let calculadorIMCFlecha = (Altura, Peso) => Peso/Math.pow(Altura,2);

/*
let Altura = prompt("Tu Altura(En metros): ",0); 
let Peso = prompt("Tu Peso(En kilogramos): ",0); 
console.log(calculadorIMC(Altura,Peso));
*/

//7.R/- --------------------------------------------------------

function MinusculasAMayusculas (Cadena){
    return Cadena.toUpperCase();
}

let MinusculasAMayusculasExpresada = function (Cadena){
    return Cadena.toUpperCase();
}

let MinusculasAMayusculasFlecha = (Cadena) => Cadena.toUpperCase();

//8.R/- --------------------------------------------------------

function TipoDato(Dato){
    return typeof Dato;
}

let TipoDatoExpresado = function(Dato){
    return typeof Dato;
}

let TipoDatoFlecha = (Dato) => typeof Dato;

//9.R/- --------------------------------------------------------

function LongitudCircunferencia(Radio){
    return 2*Math.PI*Radio;
}

let LongitudCircunferenciaExpresada = function(Radio){
    return 2*Math.PI*Radio;
}

let LongitudCircunferenciaFlecha = (Radio) => 2*Math.PI*Radio;