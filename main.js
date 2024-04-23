// document
let currentElement = document.getElementById('password');
let currentText = currentElement.innerHTML;

// prompt nome
const userName = prompt('Inserisci il tuo nome');
// prompt cognome
const userLastName = prompt('Inserisci il tuo cognome');
//prompt colore preferito
const favColor = prompt('Inserisci il tuo colore preferito');

// generating  a random number
const a = Math.floor(Math.random() * (0 - 99));

currentText = `${currentText}${userName}${userLastName}${favColor}${a}`;

// console input
console.log(currentText);
// browser input
currentElement.innerHTML = currentText;