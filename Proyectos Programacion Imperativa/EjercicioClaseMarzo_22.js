const prompt = require("prompt-sync")({ sigint: true });

//--------------------------------------- ¿QUÉ DEVUELVEN ESTOS CÓDIGOS?--------------------------------------------
/*
1R/- Indefinido, Intenta acceder a una posicion 5 que no existe.
2R/- Devuelve Ironman, El dato en la posicion #5
3R/- Devuelve la variable str = "un string cualquiera"
*/

//--------------------------------------- EJERCICIO 1--------------------------------------------
let Peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let PeliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function AMayusculas(UnArregloDeStrings){
    for(let i = 0; i < UnArregloDeStrings.length; i++){
        UnArregloDeStrings[i] = UnArregloDeStrings[i].toUpperCase();
    }
}

function UnirArrays(Array1, Array2){
    let UltimoElemento = Array2.pop();
    for(let i = 0; i < Array2.length; i++){
        Peliculas.push(Array2[i]);
    }
}

function CompararCalificaciones(Array1, Array2){
    for (let i = 0; i < Array1.length; i++){
        Array1[i] == Array2[i] ? console.log("Tienen la misma calificacion en Europa y Asia") : console.log("Tienen la diferente calificacion en Europa y Asia");
    }
}

/*
UnirArrays(Peliculas,PeliculasAnimadas);
AMayusculas(Peliculas);
CompararCalificaciones(asiaScores, euroScores);
*/

//--------------------------------------- ARRAY INVERSO --------------------------------------------

let Num = [1,2,3,4,5];

function ImprimirInverso(Array1){
    for(let i = Array1.length; i >= 0; i--){
        console.log(Array1[i]);
    }
}

function Invertir(Array1){
    return Array1.reverse();
}

/*
ImprimirInverso(Num);
let NumInv = ImprimirInverso(Num);
console.log(NumInv);
*/

//--------------------------------------- SUMA ARRAY --------------------------------------------

function SumaArray(X){
    return X[1] + X[2] + X[3];
}

//--------------------------------------- SIMULACION ARRAY JOIN--------------------------------------------
let A = ["h","o","l","a"]

function Join(ArSt){
    let Retornable = "";
    for(let i = 0; i < ArSt.length; i++){
        Retornable += ArSt[i];
    }
    return Retornable
}

//console.log(Join(A));

