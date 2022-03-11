const prompt = require("prompt-sync")({ sigint: true });

function Sumar(x , y ) {
    return parseInt(x) + parseInt(y);
}

function Restar( x , y ) {
    return x - y;
}

function Multiplicar( x , y ) {
    return x * y;
}

function Dividir( x , y ) {
    return x / y;
}

function CuadradoDeUnNumero(x){
    return Multiplicar(x,x);
}

function PromedioDeTresNumeros(x,y,z){
    return Dividir(Sumar(Sumar(x,y),z),3);
}

function CalcularPorcentaje (x, y){
    return Dividir(Multiplicar(y,x),100);
    
}

function generadorDePorcentaje(x, y){
    return Dividir(Multiplicar(x,100),y)
}

console.log("----------------TESTEO DE OPERACIONES / CALCULADORA ------------------");

//console.log(Sumar(prompt(), prompt()));
//console.log(Restar(prompt(), prompt()));
//console.log(Multiplicar(prompt(), prompt()));
//console.log(Dividir(0, prompt()));

