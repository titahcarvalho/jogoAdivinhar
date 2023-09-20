alert("JOGO DE ADIVINHAR O NÚMERO");
let numero = parseInt(Math.random() * 10)+1;
let entrada = -1;
while (entrada != numero ) {
    entrada = prompt("ENTRE COM UM NÚMERO de 0 a 10.");
    if (entrada != numero) { alert ("Você errou");
                           }
 }
alert ("PARABÉNS! Você acertou!");