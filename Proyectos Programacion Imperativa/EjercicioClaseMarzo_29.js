const prompt = require("prompt-sync")({ sigint: true });

//----------------------------------------- EJERCICIO 1 -------------------------------------------------

function LoopDePares(X){
    for(let i = 0; i <= 100; i++){
        (i + X) % 2 == 0 ? console.log("el numero " + (i + X) + " es par.") : console.log(i);
    }
}
//LoopDePares(3);

//----------------------------------------- EJERCICIO 2 -------------------------------------------------

function LoopDeImpares(X, Palabra){
    for( let i = 0; i <= 100; i++){
        (i + X) % 2 != 0 ? console.log(Palabra) : console.log(i);
    }
}

//LoopDeImpares(3,"Perro");

//----------------------------------------- EJERCICIO 3 -------------------------------------------------

function Sumatoria (X){
    let Suma = 0;
    for(let i = 0; i <= X; i++){
        Suma += i;
    }
    return Suma;
}
//console.log(Sumatoria(5));

//----------------------------------------- EJERCICIO 4 -------------------------------------------------

function NuevoArreglo(X){
    let Arreglo = [];
    for(let i = 1; i <= X; i++){
        Arreglo.push(i);
    }
    return Arreglo;
}
//console.log(NuevoArreglo(10));

//----------------------------------------- EJERCICIO 5 -------------------------------------------------

function Split(Palabra){
    let Cortada = [];
    for(let i = 0; i < Palabra.length; i++){
        Cortada[i] = Palabra[i];
    }
    return Cortada;
}

//console.log(Split("Hola"));

//----------------------------------------- EJERCICIO 6 -------------------------------------------------

function CaracterDelMedio(Cadena){
    if(Cadena.length % 2 == 0){
        return Cadena[(Cadena.length/2)-1] + Cadena[(Cadena.length/2)];
    }else{
        return Cadena[Math.ceil(("Cosas".length)/2)-1];
    }
    
}

//console.log(CaracterDelMedio("cosas"));

//----------------------------------------- EJERCICIO 7 -------------------------------------------------

function MoverCeros(Arreglo){
    let Nuevo = [];
    let Movidos = 0;
    for(let i = 0; i < Arreglo.length; i++){
        if(Arreglo[i] === 0){
            Movidos += 1;
        }else{
            Nuevo.push(Arreglo[i]);
        }
    }
    for(let i = 0; i < Movidos; i++){
        Nuevo.push(0);
    }
    console.log(Nuevo);
    console.log(Movidos);
    
}
//MoverCeros([1,2,0,1,0,1,0,3,0,1]);

//----------------------------------------- EJERCICIO 8 -------------------------------------------------
function ArrayHandler(Arreglo1, Arreglo2){
    for(let i = 0; i < Arreglo1.length; i++){
        console.log("Soy " + Arreglo1[i] + " y yo soy " + Arreglo2[i]);
    }
}

//ArrayHandler([1,2,3,4], ["h","o","l","a"])

//----------------------------------------- EJERCICIO 9 -------------------------------------------------

function ConversorLetra (Cadena){
    let Opcion = []; 
    let Retornable = "";
    if(Cadena.indexOf("-") == -1){
        Opcion = Cadena.split("_");
    }else{
        Opcion = Cadena.split("-");
    }

    for(let i = 1; i < Opcion.length; i++){
        Opcion[i] = Opcion[i][0].toUpperCase() + Opcion[i].slice(1);
    }
    for(let i = 0; i < Opcion.length; i++){
        Retornable += Opcion[i];
    }
    return Retornable;
}
//console.log(ConversorLetra("Esto_es_una_prueba"));


//----------------------------------------- EJERCICIO 10 ------------------------------------------------

function EsPalindromo(Palabra){
    let j = Palabra.length - 1;
    for(let i = 0 ; i < Palabra.length; i++){
            console.log(i + " - " + Palabra[i]);
            console.log(j + " - " + Palabra[j]);
            if(Palabra[i] != Palabra[j]){
                return false
            }
            j--; 
        }
    return true;
}
//console.log(EsPalindromo("anilina"));
//console.log(EsPalindromo("Juan"));
