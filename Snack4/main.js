'use strict';

/* Snack4
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase 
con il nome e cognome e l’indicazione se può guidare, in base all’età. */

// creo l'array persone
const persone = [
    { nome: 'Federico', cognome: 'Fusaro', eta: '28' },
    { nome: 'Marco', cognome: 'Rossi', eta: '30' },
    { nome: 'Giuseppe', cognome: 'Verdi', eta: '75' },
    { nome: 'Giacomino', cognome: 'Bianchi', eta: '8' },
    { nome: 'Giulia', cognome: 'Costa', eta: '14' },
    { nome: 'Paolo', cognome: 'Ricci', eta: '46' },
    { nome: 'Giulio', cognome: 'Marino', eta: '59' },
    { nome: 'Alessia', cognome: 'Mancini', eta: '26' },
    { nome: 'Pippo', cognome: 'Villa', eta: '61' },
    { nome: 'Domenico', cognome: 'Esposito', eta: '17' },
];

// nuovo array
const personeCheGuidano = [];

// ciclo for che scorre gli elementi di persone
for (let i = 0; i < persone.length; i++) {
    // genero un nuovo oggetto e ci copio le proprietà di persona[i]
    const personaCorrente = {};
    personaCorrente.nome = persone[i].nome;
    personaCorrente.cognome = persone[i].cognome;
    personaCorrente.eta = persone[i].eta;

    if (Number(personaCorrente.eta) >= 18) {
        // se .eta è >= 18 aggiunge la proprietà info: '.nome .cognome può guidare' 
        personaCorrente.info = `${personaCorrente.nome} ${personaCorrente.cognome} può guidare`;
    } else {
        // altrimenti aggiunge la proprietà info: '.nome .cognome NON può guidare'
        personaCorrente.info = `${personaCorrente.nome} ${personaCorrente.cognome} NON può guidare`;
    }

    // aggiunge personaCorrente all'array personeCheGuidano
    personeCheGuidano.push(personaCorrente);
}

// visualizza in console i due array
console.log(persone);
console.log(personeCheGuidano);