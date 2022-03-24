const prompt = require("prompt-sync")({ sigint: true });
//------------------------------------------- EJERCICIO 1 ------------------------------------------
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
];

let Banco = {
    Clientes: arrayCuentas,

    ConsultarCliente: function (Nombre){
        for(let i = 0; i < this.Clientes.length; i++){
            if(this.Clientes[i].titularCuenta == Nombre){
                return this.Clientes[i];
            }
        }
    },

    Deposito: function(Titular, DineroADepositar){
        for(let i = 0; i < this.Clientes.length; i++){
            if(this.Clientes[i].titularCuenta == Titular){
               this.Clientes[i].saldoEnPesos += DineroADepositar;
               console.log("Depósito realizado, Su nuevo saldo es: " + this.Clientes[i].saldoEnPesos);
            }
        }
    },

    Extraccion: function (Titular, DineroAExtraer){
        for(let i = 0; i < this.Clientes.length; i++){
            if(this.Clientes[i].titularCuenta == Titular){
               if(this.Clientes[i].saldoEnPesos <= 0){
                    console.log("Fondos Insuficientes.");
               }else{
                    this.Clientes[i].saldoEnPesos -= DineroAExtraer;
                    console.log("Extracción realizada, Su nuevo saldo es: " + this.Clientes[i].saldoEnPesos);
               }
            }
        }    
    }

}

/*
Banco.Extraccion("Jacki Shurmer", 2000);
let ClienteB = Banco.ConsultarCliente("Jacki Shurmer");
console.log(ClienteB);
*/

//------------------------------------------- PROPIEDAD UNICA ------------------------------------------
let Array = [{nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ];

function PropiedadUnica(ArregloObj, UnString){
    let NuevoArreglo = [];
    for(let i = 0; i < ArregloObj.length; i++){
        NuevoArreglo[i] = {
            [UnString]: ArregloObj[i][UnString]
        }
    }
    return NuevoArreglo;
}

//console.log(PropiedadUnica(Array, "nombre"));

//------------------------------------------- CALCULADOR DE NOTAS --------------------------------------

let Alumno = {
    nombre: "Adrian",
    NumeroLegajo: 12345,
    ListadoDeNotas: [45,21,60,89,100],
    NotaAprobacion: 60,
    AprobadoONo: function(){
        let Promedio = 0;
        for(let i = 0; i < this.ListadoDeNotas.length; i++){
            Promedio += this.ListadoDeNotas[i]
        }
        Promedio /= this.ListadoDeNotas.length;
        Promedio >= this.NotaAprobacion ? console.log("Aprobó con: " + Promedio) : console.log("No Aprobó con: " + Promedio);
    }
}

Alumno.AprobadoONo();