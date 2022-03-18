const prompt = require("prompt-sync")({ sigint: true });

//---------------------------------- EJERCICIO 1 ------------------------------------------------------
function EscribirFrase(){
    let Frase = prompt("Escribe una frase: ");
    console.log(Frase);
}


//---------------------------------- EJERCICIO 2 ------------------------------------------------------

function HolaNombre(){
    let Nombre = prompt("Tu nombre: ");
    console.log("Hola " + Nombre + "!");
}

//---------------------------------- EJERCICIO 3 ------------------------------------------------------

function Suma2Numeros(){
    let n1 = prompt("Escribe el numero 1: ");
    let n2 = prompt("Escribe el numero 2: ");
    console.log(parseInt(n1) + parseInt(n2));
}

//---------------------------------- EJERCICIO 4 ------------------------------------------------------

function TuEdad(){
    let AñoNac = prompt("Escribe el año de tu nacimiento: ");
    console.log(2022 - parseInt(AñoNac));
}

//---------------------------------- EJERCICIO 5 ------------------------------------------------------

function AdivinaNumeroAleatorio(){
    let NumAleatorio = Math.floor(Math.random()*10);
    console.log(NumAleatorio);
    let NumUsuario = prompt("Escribe el numero que crees que es: ");
    while(NumUsuario != NumAleatorio){
        console.log("Lo siento, intenta nuevamente!");
        NumUsuario = prompt("Escribe el numero que crees que es: ");
    }
    console.log("Felicitaciones, ese era!");
    }

//---------------------------------- EJERCICIO 6 ------------------------------------------------------
function Pares1a100(){
    for(let i = 1; i <=100; i++){
        i % 2 == 0 ? console.log(i) : "";
    }
}

//---------------------------------- EJERCICIO 7 ------------------------------------------------------

function IteracionNombres(){
    const nombres=["Pedro","Pablo","Maria","Juan","Diana"];
    for(let i = 0; i < 5; i++){
        console.log(nombres[i]);
    }
}

//---------------------------------- EJERCICIO 8 ------------------------------------------------------

function Diez8XCientoDe(){
    let Numero = prompt("Escribe el numero: ");
    Numero > 500 ? console.log(Numero*0.18) : "";
}

//---------------------------------- EJERCICIO 9 ------------------------------------------------------

function Elemento(Arreglo){
    let Tamaño = Arreglo.length;
    console.log("Tamaño: " + Tamaño);
    if(Tamaño < 3){
        return -1;
    }else{
        return Arreglo[2];
    }
}

//---------------------------------- EJERCICIO 10 ------------------------------------------------------

function NumeroNatural(){
    let Numero = prompt("Escribe el numero: ");
    Numero < 10 ? console.log(10 - Numero) : "" ;
    Numero >= 10 ? console.log(100 - Numero): "" ;
}

//---------------------------------- EJERCICIO 11 ------------------------------------------------------
function PromedioNNotas(){
    let NumeroNotas = prompt("Cuántas notas ingresará?: ");
    let Total = 0;
    for(let i = 1; i <= NumeroNotas; i++){
        let Nota = prompt ("Ingrese la nota #" + i + ": ");
        Total += parseInt(Nota);
    }
    console.log(Total/NumeroNotas);
}

//---------------------------------- EJERCICIO 12 ------------------------------------------------------

function SumaN1rosNumNaturales(){
    let N = parseInt(prompt("Cuantos naturales?: "));
    let Total = 0;
    for(let i = N; i > 0; i--){
        Total += i;
    }
    return Total;
}
