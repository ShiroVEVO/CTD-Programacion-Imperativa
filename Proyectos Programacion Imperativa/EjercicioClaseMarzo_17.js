const prompt = require("prompt-sync")({ sigint: true });

//--------------------------------- EJERCICIO 1
function DiezSiguientes(x){
    for(let i = 0; i<10; i++){
        x++;
        console.log(x);
    }
}

//--------------------------------- EJERCICIO 2

function CincoA20(){
    for (let i = 5; i <= 20; i=i+3){
        console.log(i);
    }
}

//--------------------------------- EJERCICIO 3

function Sumatoria0100(){
    let Sumatoria = 0;
    for (let i = 0; i <=100; i++){
        Sumatoria += i;
    }
    console.log(Sumatoria);
}

//--------------------------------- EJERCICIO 4

function Factorial (x){
    let FactorialX = x;
    for (let i = x-1; i > 0; i--){
        FactorialX *= i;
    }
    console.log(FactorialX);
}

//--------------------------------- EJERCICIO 5


function FibonacciHasta(x){
    let TerminoA = 0;
    let TerminoB = 1;
    let Aux = 0;
    while(Aux <= x){
        let TerminoC = TerminoA + TerminoB;
        TerminoA = TerminoB;
        TerminoB = TerminoC;
        Aux = TerminoC;
        Aux <= x ? console.log(TerminoC) : "";
    }
}

FibonacciHasta(34);