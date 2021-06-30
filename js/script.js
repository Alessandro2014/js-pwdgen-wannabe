/*
1 creare variabile richiesta nome
2 creare variabile richiesta cognome
3 creare variabile richiesta colore preferito
4 creare variabile per numerto 21
5 prendere riferimento id password
6 inserire risultato in HTML
*/

// VARIABILI
var message = "La tua Password è: "
var passwordPlaceholder = document.getElementById("password");
var name = prompt("Inserisci il tuo nome");
var lastName = prompt("Inserisci il tuo cognome");
var color = prompt("Inserisci il tuo colore preferito");
var number = 21;

//CALCOLO PASSWORD

var yourPassword = name + lastName + color + number;
console.log("password utente: ", yourPassword);

//MOSTRARE PASSWORD ALL'UTENTE

passwordPlaceholder.innerHTML = message + yourPassword;