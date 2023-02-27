'use strict';

const nomi = ['Marco', 'Ciro', 'Anna', 'Paolo', 'Rita'];
const cognomi = ['Rossi', 'Ricci', 'Esposito', 'Colombo', 'Bianchi'];

console.log(nomi);
const generaN1 = Math.floor(Math.random() * nomi.length);
const generaC1 = Math.floor(Math.random() * cognomi.length);
console.log((generaN1, nomi[generaN1]) + (' ') + (generaC1, cognomi[generaC1]));

const generaN2 = Math.floor(Math.random() * nomi.length);
const generaC2 = Math.floor(Math.random() * cognomi.length);
console.log((generaN2, nomi[generaN2]) + (' ') + (generaC2, cognomi[generaC2]));

const generaN3 = Math.floor(Math.random() * nomi.length);
const generaC3 = Math.floor(Math.random() * cognomi.length);
console.log((generaN3, nomi[generaN3]) + (' ') + (generaC3, cognomi[generaC3]));

