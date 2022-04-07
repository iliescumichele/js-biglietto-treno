/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca
*/

//const age=10;
//const km=10;

const km = parseInt (prompt('Write km you will travel by train'));
const age = parseInt (prompt('Write your age'));
let price = km * 0.21;

console.log(price);

if (age < 18 && age >= 0){
    price *= 0.8;
} else if(age > 65){
    price *= 0.6;
}

console.log("Prezzo finale è: " + price);

document.getElementById('msg_price').innerHTML = "Il prezzo per il biglietto del treno è: " + price.toFixed(2) + "€";
