const prompt = require("prompt-sync")({ sigint: true });
/*
Situacion #1

Realizar una compra por internet

Al momento de realizar una compra por Internet de un articulo X en una plataforma X el proceso inicia con mirar si HayDinero para realizar la compra, Al mirar si hay o no se 
debe comprobar la CantidadDinero y saber si este EsSuficiente para realizar la compra comparandolo evidentemente con el ValorCompra, Si todo va bien el proceso avanza y me piden
los datos como NombreCompleto e Identificacion Cedula, Luego el NumeroTarjetaCuentaBancaria de donde se descontara el dinero y la DireccionEnvio como ya esta guardada 
de compras anteriores no la pide, Luego dice el ValorEnvio para finalmente mostrarme el Total y hacer click en comprar para ver si la Compra esta confirmada o no
*/
let HayDinero = true;
let CantidadDinero = 1000;
let EsSuficiente = true;
let ValorCompra = 400;
let NombreCompleto = prompt("Tu Nombre: ",0); 
let Cedula = prompt("Tu cedula: ",0); 
let NumeroTarjetaCuentaBancaria = prompt("Tu numero de tarjeta: ",0); 
let DireccionEnvio = "Calle 26Norte #2-32B sur";
let ValorEnvio = 20;
let Total = 420;
let CompraConfirmada = true;


/*
Situacion #2

Imprimir en mi impresora 3D

Primero compruebo si hay filamento y si tengo la memoria SD conmigo, Luego ingreso el nombre del archivo que deseo imprimir y como en ocasiones la impresion puede fallar en las
noches prefiero ponerle un tiempo de pausa, Dependiendo de en que momento del dia ponga a imprimir ese tiempo varia asi que tambien se ingresa de acuerdo a la situacion, Luego 
se mira al dia siguiente si esta reanudado o no y al final si esta finalizado o no.
*/

let HayFilamento = true;
let TengoMemoria = true;
let NombreArchivoAImprimir = prompt("Nombre del archivo: ",0); 
let MinutoPausa = prompt("Pausar al minuto: ",0); 
let Reanudado = true;
let Finalizado = true; 

//--------------- DESAFIO EXTRA ----------------------

let CajonPantalones ="Muchas Remeras.";
let CajonRemeras = "Muchos Pantalones.";

let SillaParaPonerRopa = CajonRemeras;
CajonRemeras = CajonPantalones;
CajonPantalones = SillaParaPonerRopa;

console.log("En el Cajon de pantalones hay: " + CajonPantalones);
console.log("En el Cajon de remeras hay: " + CajonRemeras);