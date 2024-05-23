'use strict';

/* Snack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi. */

// array di animali
const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'topo comune', famiglia: 'muridae', classe: 'mammiferi' },
    { nome: 'orata', famiglia: 'sparidae', classe: 'pesci' },
    { nome: 'merlo', famiglia: 'turdidae', classe: 'uccelli' },
    { nome: 'riccio comune', famiglia: 'erinaceidae', classe: 'mammiferi' },
    { nome: 'tortora dal collare', famiglia: 'columbidae', classe: 'uccelli' },
    { nome: 'geco', famiglia: 'gekkonidae', classe: 'rettili' },
];

// inizializzo array mammiferi vuoto
const mammiferi = [];

// ciclo for che scorre gli elementi di animali
for (let i = 0; i < animali.length; i++) {
    // se l'elemento ha la proprietà classe: 'mammiferi'
    // viene aggiunto all'array mammiferi
    if (animali[i].classe === 'mammiferi') {
        mammiferi.push(animali[i]);
    }
}

// visualizza in console l'array mammiferi
console.log(mammiferi);