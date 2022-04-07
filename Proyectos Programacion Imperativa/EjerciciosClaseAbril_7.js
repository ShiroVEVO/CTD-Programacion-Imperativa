const prompt = require("prompt-sync")({ sigint: true });

let Matriz = [
    [1,1,0,1,1],
    [1,1,0,1,1],
    [1,1,0,1,1],
    [1,1,0,1,1],
    [1,1,0,1,1]
]
// console.table(Matriz);

function SumarMatriz (X){
    let Total = 0;
    for(let i = 0; i < X.length; i++){
        for(let j = 0; j < X[i].length; j++){
            Total += X[i][j];
        }
    }
    return Total;
}
//console.log(SumarMatriz(Matriz));

function GenerarMatriz10(){

    let Matriz = [];
    let X = 1;
    for(let i = 0; i < 10; i++){
        let fila = [];
        for(let j = 0; j < 10; j++){
            fila.push(X++);
        }
        Matriz.push(fila);
    }
    return Matriz;
}

const Matriz3 = GenerarMatriz10();

function SumarDiagonales(X){
    let DiagPrinc = 0;
    let DiagInver = 0;
    let Aux = X.length - 1;
    for(let i = 0; i < X.length; i++){
        for(let j = 0; j < X[i].length; j++){
            i == j ? DiagPrinc += X[i][j] : "";
        }
        DiagInver += X[i][Aux];
        Aux--;
    }
    return (DiagPrinc, DiagInver);
}
console.log(SumarDiagonales(Matriz3));




