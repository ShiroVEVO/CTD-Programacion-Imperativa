const prompt = require("prompt-sync")({ sigint: true });

//------------------------------------------- EJERCICIO 1 ---------------------------------------
 let alicia = [10,80,75];
 let bob = [90,20,25];

let Concurso = {
        Etapas: ["","",""],

        Ganador: "",

        EncontrarGanador: function(ConcursanteA, ConcursanteB){
            let PuntosA = 0;
            let PuntosB = 0;
            for(let i = 0; i < 3; i++){
                if(ConcursanteA[i] > ConcursanteB[i]){
                    PuntosA += 1;
                    this.Etapas[i] = "A";
                }else if(ConcursanteB[i] > ConcursanteA[i]){
                    PuntosB +=1;
                    this.Etapas[i] = "B";
                }
            }
            if(PuntosA > PuntosB){
                this.Ganador = "A";
            }else if(PuntosB > PuntosA){
                this.Ganador = "B";
            }else{
                this.Ganador = "_";
            }
            return this;
        },

        ExportarResultados: function(){
            return JSON.stringify(this.Etapas);
        }

    }

    //console.log(Concurso.EncontrarGanador(alicia,bob));

//------------------------------------------- EJERCICIO 2 ----------------------------------------

function DigitalHouse(X, Y){
    for(let i = 1; i <= 100; i++){
        if(i%X == 0 && i%Y == 0){
            console.log("Digital House");
        }else if(i%X == 0 && i%Y != 0){
            console.log("Digital");
        }else if(i%Y == 0 && i%X != 0){
            console.log("House");
        }else{
            console.log(i);
        }
    }
}

//DigitalHouse(2,3);

//------------------------------------------- EJERCICIO 3 -----------------------------------------

function SumArray (UnArreglo){
    let Total = 0;
    for(let i = 0; i < UnArreglo.length; i++){
        Total += UnArreglo[i];
    }
    return Total;
}

//console.log(SumArray([1,2,3,4,5,6]));

//------------------------------------------- EJERCICIO 4 -----------------------------------------

let join = (ArregloString) => {
    let Retornable = "";
    for(let i = 0; i < ArregloString.length; i++){
        Retornable += ArregloString[i];
    }
    return Retornable;
}

//console.log(join(["c","h","a","u","X","Y"]));