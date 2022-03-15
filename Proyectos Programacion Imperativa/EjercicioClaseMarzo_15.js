const prompt = require("prompt-sync")({ sigint: true });


//-----------------------------------AGREGÁ CAMINOS-----------------------------------
/*
let edad = prompt("Tu edad:");

if (edad <= 0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
    }else{
        edad%2 == 1 ? console.log("¿Sabías que tu edad es impar?") : "";
        if(edad < 18){
            console.log("No puede pasar al bar.");
        }else if(edad <=21){
            edad == 21 ? console.log("Felicidades por haber alcanzado la mayoria de edad,") : "";
            console.log("Puede pasar al bar, pero no puede tomar alcohol.");
        }else{
            console.log("Puede pasar al bar y tomar alcohol.");
        }
    }
*/

//------------------------------------TOTAL A PAGAR---------------------------------------------
function TotalAPagar(Vehiculo, LitrosConsumidos){
    let ValorLitros;
    switch(Vehiculo){
        case 'coche':
            ValorLitros = LitrosConsumidos*86;
        break;

        case 'moto':
            ValorLitros = LitrosConsumidos*70;
        break;

        case 'autobus':
            ValorLitros = LitrosConsumidos*55;
        break;
    }
    if(LitrosConsumidos <= 25){
        ValorLitros += 50;
    }else{
        ValorLitros +=25;
    }

    return ValorLitros;
}
//------------------------------------LOCAL DE SANDWICHES---------------------------------------

function DeterminarValorSanduche(SanducheBase,TipoPan,Queso,Tomate,Lechuga,Cebolla,Mayonesa,Mostaza){
    let ValorTotal = 0; 
    switch(SanducheBase){
        case 'Pollo':
            ValorTotal += 150;
        break;

        case 'Carne':
            ValorTotal += 200;
        break;

        case 'Veggie':
            ValorTotal += 100;
        break;
    }
    switch(TipoPan){
        case 'blanco':
            ValorTotal += 50;
        break;

        case 'negro':
            ValorTotal += 60;
        break;

        case 's/gluten':
            ValorTotal += 75;
        break;
    }

    Queso ? ValorTotal += 20: "";
    Tomate ? ValorTotal += 15: "";
    Lechuga ? ValorTotal += 10: "";
    Cebolla ? ValorTotal += 15: "";
    Mayonesa ? ValorTotal += 5: "";
    Mostaza ? ValorTotal += 5: "";
    
    return ValorTotal;
}

//------------------------------------NUMERO SECRETO ----------------------------------------------
function NumeroSecreto (X){
    let NumSecreto = Math.floor(Math.random()*10);
    X == NumSecreto ? console.log("Felicidades acerto el numero secreto") : console.log("Se equivocó, El numero ingresado es: " + X + " y el numero secreto es: " + NumSecreto);
}

//------------------------------------ABRIR PARACAIDAS---------------------------------------------

function AbrirParacaidas(Velocidad, Altura){
    Velocidad < 1000 && Altura >= 2000 && Altura <= 3000 ? console.log("El paracaidas se abrió") : console.log("El paracaidas no se abrió")
}
//------------------------------------TRADUCTOR CONDICIONAL----------------------------------------

function TraductorCondicionla (Palabra){
    switch(Palabra){
        case 'casa':
            return 'house';

        case 'perro':
            return 'dog';

        case 'pelota':
            return 'ball';

        case 'árbol':
            return 'tree';   

        case 'genio':
            return 'genius';
        
        default:
            console.log("La palabra ingresada es incorrecta.");
    }
}
//------------------------------------ VALORACION DE PELICULAS-------------------------------------

function ValoracionPeliculas(Valoracion){
    switch (Valoracion) {
        case 'Muy Mala':
            console.log("Calificaste la pelicula como " + Valoracion + ". Lo lamentamos mucho.");
        break;
    
        case 'Mala':
            console.log("Calificaste la pelicula como " + Valoracion + ". Lo lamentamos mucho.");
        break;

        case 'Mediocre':
            console.log("Calificaste la pelicula como " + Valoracion + ". Lo lamentamos mucho.");
        break;
        
        case 'Buena':
            console.log("Calificaste la pelicula como " + Valoracion + ". Nos Alegra mucho.");
        break;
        
        case 'Muy buena':
            console.log("Calificaste la pelicula como " + Valoracion + ". Nos Alegra mucho.");
        break;

        default:
            console.log("Ingresaste un valor invalido.");
        break;
    }
    console.log("Gracias por su visita.");
}