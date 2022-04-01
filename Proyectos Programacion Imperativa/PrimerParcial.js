//const prompt = require("prompt-sync")({ sigint: true });

//------------------------------------------------- EJERCICIO 1 -----------------------------------------------------

// 1.
let estudiante = {
    nombre: "Adrian Stiven",
    apellido: "Olmos Ardila",
    camada: 5,
    esParcial: true
}

//2.
function situacion(x){
    let situacion;
    if(x < 4){
        return "desaprobado";
    }else if (x <= 4 && x < 7){
        return "debe rendir examen final.";
    }else if(x >= 7){
        return "promocionado";
    }
}
let nota = 7;
console.log("El alumno obtuvo una nota igual a " + nota + " por lo tanto su condición es " + situacion(nota));

//------------------------------------------------- EJERCICIO 2 -----------------------------------------------------

//1.
let clase = [];

//2. 
let Compañero1 ={
    nombre: "Esteban",
    apellido: "Piazza",
    bimestre: 1
}

let Compañero2 ={
    nombre: "Leandro",
    apellido: "Borrelli",
    bimestre: 1
}

let Compañero3 ={
    nombre: "Martín",
    apellido: "Cejas",
    bimestre: 1
}

//2. a)
clase.push(Compañero1,Compañero2,Compañero3);

//2. b)
console.log(clase);

//3. 
function siguienteCursada(unArray){
    for( let i = 0; i < unArray.length; i++){
        unArray[i].bimestre += 1;
    }
}

//4.
console.log(clase);
siguienteCursada(clase);
console.log(clase);

//------------------------------------------------- EJERCICIO 3 -----------------------------------------------------

//1. 
const asistenciaMinima = 23;

function aprobadoONo(numAsist, playGroundCompleto){
    if(numAsist >= asistenciaMinima && playGroundCompleto){
        return "aprobado";
    }else{
        return "desaprobado";
    }
}

console.log(aprobadoONo(28,true));