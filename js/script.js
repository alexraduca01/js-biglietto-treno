// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

let distance = parseInt(prompt('Inserire distanza da percorrere: (in chilometri)'));

let age = parseInt(prompt('Inserire età del passeggero:'));

const kmPrice = 0.21;

let total = (distance * kmPrice);

let finalPrice;

if (isNaN(distance) || (isNaN(age))) {
    location.reload();
}

if (age < 18){
    finalPrice = (total - (total * 20 / 100)).toFixed(2) + " €";
    document.getElementById("prezzo").innerHTML = "Il prezzo finale è " + finalPrice;
} else if (65 <= age) {
    finalPrice = (total - (total * 40 / 100)).toFixed(2) + " €";
    document.getElementById("prezzo").innerHTML = "Il prezzo finale è " + finalPrice;
} else {
    total = (total.toFixed(2) + " €");
    document.getElementById("prezzo").innerHTML = "Il prezzo finale è " + total;
} 