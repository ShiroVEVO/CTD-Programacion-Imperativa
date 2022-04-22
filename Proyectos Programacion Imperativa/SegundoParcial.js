//const prompt = require("prompt-sync")({ sigint: true });

const alumnos = [
    {
      id: 0,
      nombre: "Leandro",
      apellido: "Borrelli",
      legajo: 20210308,
      notas: [],
    },
    {
      id: 1,
      nombre: "Esteban",
      apellido: "Piazza",
      legajo: 20210211,
      notas: [],
    },
    {
      id: 2,
      nombre: "Martin",
      apellido: "Cejas",
      legajo: 20210218,
      notas: [],
    },
    {
      id: 3,
      nombre: "Karina",
      apellido: "Borgna",
      legajo: 20210516,
      notas: [],
    },
    {
      id: 5,
      nombre: "Javier",
      apellido: "Riera",
      legajo: 20220125,
      notas: [],
    },
  ];

//------------------------------------------------- EJERCICIO 1 -----------------------------------------------------

//1.1).

    //A. R/- Es un tipo de dato Object

    //B. Id, Nombre, Apellido, Legajo, Notas

//1.2).

    function ordenamientoPorLegajo (x){
        for (let i = 0; i < x.length; i++) { 
            for (let j = 0; j < (x.length - i - 1); j++) { 
                if(x[j].legajo < x[j+1].legajo) {
                    let aux = x[j]; 
                    x[j] = x[j+1]; 
                    x[j+1] = aux; 
                }
            }        
        }
    }

    console.log("EJERCICIO 1.2 -------------------------------------------------");
    console.log(alumnos);
    ordenamientoPorLegajo(alumnos)
    console.log("Cambio.......");
    console.log(alumnos);


//------------------------------------------------- EJERCICIO 2 -----------------------------------------------------

//2.3)
    otroAlumno = {
        id: 5,
        nombre: "Lucas",
        apellido: "Astrada",
        legajo: 20220125,
        notas: [10,6,8,7,9],
    
        promedioNotas: function(notas){
            let total = 0;
            for(let i = 0; i < notas.length; i++){
                total += notas[i];
            }
            return total/notas.length;
        }
    }

    console.log("EJERCICIO 2.3 -------------------------------------------------");
    console.log("Notas: " + otroAlumno.notas + " - #Notas: " + otroAlumno.notas.length);
    console.log("Promedio: ")
    console.log(otroAlumno.promedioNotas(otroAlumno.notas));


// 2.4)

    function ordenarNotasAscendente(alumno){
        for (let i = 0; i < alumno.notas.length; i++) { 
            for (let j = 0; j < (alumno.notas.length - i - 1); j++) { 
                     if(alumno.notas[j] > alumno.notas[j+1]) {
                             let aux = alumno.notas[j]; 
                             alumno.notas[j] = alumno.notas[j+1]; 
                             alumno.notas[j+1] = aux; 
                     }
            }
        }
        return alumno;
    }
    console.log("EJERCICIO 2.4 -------------------------------------------------");
    console.log(otroAlumno.notas);
    console.log("Cambio...");
    console.log(ordenarNotasAscendente(otroAlumno).notas);
    
    
//------------------------------------------------- EJERCICIO 3 -----------------------------------------------------

//A)

    let matriz = [[],[],[]];

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < 3; j++){
            matriz[i][j] = Math.round(Math.random()*10)*-1;
        }
    }
    console.log("EJERCICIO 3A -------------------------------------------------");
    console.table(matriz);

//B)

    function sumaNumerosMultiplos5(unaMatriz){
        let total = 0;
        for(let i = 0; i < unaMatriz.length; i++){
            for(let j = 0; j < unaMatriz[i].length; j++){
                if(unaMatriz[i][j] % 5 == 0){
                    total += unaMatriz[i][j]
                }
            }
        }
    return total;
    }
    console.log("EJERCICIO 3B -------------------------------------------------");
    console.log(sumaNumerosMultiplos5(matriz));

//C)

    function totalImparOPar(unaMatriz){
        let total = 0;
        for(let i = 0; i < unaMatriz.length; i++){
            for(let j = 0; j < unaMatriz[i].length; j++){
                total += unaMatriz[i][j];
            }
        }
        console.log(total);
        return total % 2 != 0 ? true : false
    }
    console.log("EJERCICIO 3C -------------------------------------------------");
    console.log(totalImparOPar(matriz));

//D)

    function multiplicacionDiagonales (unaMatriz){
        let diagonalPrincipal = 1;
        let diagonalSecundaria = 1;
        for(let i = 0; i < unaMatriz.length; i++){
            for(let j = 0; j < unaMatriz[i].length; j++){
                i == j ? diagonalPrincipal *= unaMatriz[i][j] : "";
                i + j == unaMatriz.length - 1 ? diagonalSecundaria *= unaMatriz[i][j] : "";
            }
        }
        console.log("EJERCICIO 3D -------------------------------------------------"); 
        console.log("Valor de la Diagonal Principal: ");
        console.log(diagonalPrincipal);
        console.log("Valor de la Diagonal Secundaria: ");
        console.log(diagonalSecundaria);    
        return diagonalPrincipal * diagonalSecundaria;
    }
    console.log("Multiplicacion de las diagonales: " + multiplicacionDiagonales(matriz));
    