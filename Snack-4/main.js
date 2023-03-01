'use strict';
let somma = 0;

// for(let i = 0; i < 5; i++){
//     const numeri = Number(prompt('Inserisci un numero'));
//     somma += numeri;
// }
    
// alert(somma);

let i = 0;
while(i < 5){
    const numeri = Number(prompt('Inserisci un numero'));
    somma += numeri;
    i++;
}

alert(somma);
