const prompt = require("prompt-sync")({ sigint: true });

const Edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

//----------------------------------------------- EJERCICIO 1 -------------------------------------

// ------------------ Edades < 18
function EdadesMenores18(X){
    let Nuevo = [];
    for(let i = 0; i < X.length; i++){
        X[i] < 18 ? Nuevo.push(X[i]) : "";
    }
    return Nuevo;
}
// console.log(EdadesMenores18(Edades));

// ------------------ Edades >= 18

function EdadesMayorIgual18(X){
    let Nuevo = [];
    for(let i = 0; i < X.length; i++){
        X[i] >= 18 ? Nuevo.push(X[i]) : "";
    }
    return Nuevo;
}
//console.log(EdadesMayorIgual18(Edades));

// ------------------ Edades = 18

function EdadesIgual18(X){
    let Nuevo = [];
    for(let i = 0; i < X.length; i++){
        X[i] == 18 ? Nuevo.push(X[i]) : "";
    }
    return Nuevo;
}
//console.log(EdadesIgual18(Edades));

// ------------------ El Menor

function ElMenor(X){
    let Menor = 1000;
    for(let i = 0; i < X.length; i++){
        X[i] < Menor ? Menor = X[i] : "";
    }
    return Menor;
}
//console.log(ElMenor(Edades));

// ------------------ El Mayor

function ElMayor(X){
    let Mayor = -1;
    for(let i = 0; i < X.length; i++){
        X[i] > Mayor ? Mayor = X[i] : "";
    }
    return Mayor;
}
//console.log(ElMayor(Edades));

// ------------------  Promedio Edades 

function PromedioEdades(X){
    let Prom = 0;
    for(let i = 0; i < X.length; i++){
        Prom += X[i];
    }
    Prom /= X.length;
    return Prom;
}
//console.log(PromedioEdades(Edades));

// ------------------ Edades + 1

function EdadesMas1(X){
    for(let i = 0; i < X.length; i++){
        X[i] += 1;
    }
    console.log(X);
}
//EdadesMas1(Edades);

const ArrayCuentas = [
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: "$3,253.40",
        edadTitular:33,
        tipocuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: "$3,229.45",
        edadTitular: 27,
        tipocuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: "$1,360.19",
        edadTitular: 34,
        tipocuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: "$3,627.12",
        edadTitular: 30,
        tipocuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: "$1,616.52",
        edadTitular: 34,
        tipocuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: "$1,408.68",
        edadTitular: 25,
        tipocuenta: "corriente"
    }
]

// ------------------ Edades < 30
function EdadesMenores30(X){
    let Nuevo = [];
    for(let i = 0; i < X.length; i++){
        X[i].edadTitular < 30 ? Nuevo.push(X[i]) : "";
    }
    return Nuevo;
}
//console.log(EdadesMenores30(ArrayCuentas));

// ------------------ Edades >= 30
function EdadesMayorIgual30(X){
    let Nuevo = [];
    for(let i = 0; i < X.length; i++){
        X[i].edadTitular >= 30 ? Nuevo.push(X[i]) : "";
    }
    return Nuevo;
}
//console.log(EdadesMayorIgual30(ArrayCuentas));

// ------------------ Edades = 30

function EdadesIgual30(X){
    let Nuevo = [];
    for(let i = 0; i < X.length; i++){
        X[i].edadTitular == 30 ? Nuevo.push(X[i]) : "";
    }
    return Nuevo;
}
//console.log(EdadesIgual30(ArrayCuentas));

// ------------------ Titular Mas joven 

function MasJoven(X){
    let MasJoven;
    let Edad = 1000;
    for(let i = 0; i < X.length; i++){
        X[i].edadTitular < Edad ? MasJoven = X[i] : "";
    }
    return MasJoven;
}
//console.log(MasJoven(ArrayCuentas));

// ------------------ Array Tipos de Cuenta

function TiposCuenta(X){
    let Retornable = [[],[]];
    for(let i = 0; i < X.length; i++){
        X[i].tipocuenta == "sueldo" ? Retornable[0].push(X[i]) : Retornable[1].push(X[i]);
    }
    return Retornable;
}
//console.log(TiposCuenta(ArrayCuentas));

// ------------------ Habilitadas

function Habilitadas(X){
    let Retornable = [];
    for(let i = 0; i < X.length; i++){
        X[i].estaHabilitada ? Retornable.push(X[i]) : "";
    }
    return Retornable;
}
//console.log(Habilitadas(ArrayCuentas));

// ------------------ Deshabilitadas

function Deshabilitadas(X){
    let Retornable = [];
    for(let i = 0; i < X.length; i++){
        !X[i].estaHabilitada ? Retornable.push(X[i]) : "";
    }
    return Retornable;
}
//console.log(Deshabilitadas(ArrayCuentas));

// ------------------ Menor Saldo

function MenorSaldo(X){
    for(let i = 0; i < X.length; i++){
        X[i].saldo = X[i].saldo.replace("$", "");
        X[i].saldo = X[i].saldo.replace(",", "");
        X[i].saldo = parseFloat(X[i].saldo);
    }
    let MenorSaldo = X[0].saldo;
    let CuentaConMenorSaldo;
    for(let i = 0; i < X.length; i++){
        if(X[i].saldo < MenorSaldo){
            MenorSaldo = X[i].saldo;
            CuentaConMenorSaldo = X[i];    
        }
    }
    return CuentaConMenorSaldo;
}
//console.log(MenorSaldo(ArrayCuentas));

// ------------------ Mayor Saldo

function MayorSaldo(X){
    for(let i = 0; i < X.length; i++){
        X[i].saldo = X[i].saldo.replace("$", "");
        X[i].saldo = X[i].saldo.replace(",", "");
        X[i].saldo = parseFloat(X[i].saldo);
    }
    let MayorSaldo = X[0].saldo;
    let CuentaConMayorSaldo;
    for(let i = 0; i < X.length; i++){
        if(X[i].saldo > MayorSaldo){
            MayorSaldo = X[i].saldo;
            CuentaConMayorSaldo = X[i];    
        }
    }
    return CuentaConMayorSaldo;
}
//console.log(MayorSaldo(ArrayCuentas));