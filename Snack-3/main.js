'use strict';

const nomi = ['Marco', 'Ciro', 'Anna', 'Paolo', 'Rita'];
const cognomi = ['Rossi', 'Ricci', 'Esposito', 'Colombo', 'Bianchi'];

const nomeCompleto = []

for (let i = 0; i < 3; i++){
    const generaN = Math.floor(Math.random() * nomi.length);
    const generaC = Math.floor(Math.random() * cognomi.length);

    const newCompleto = `${nomi[generaN]} ${cognomi[generaC]}`;

    nomeCompleto.push(newCompleto);
}

console.log(nomeCompleto);

