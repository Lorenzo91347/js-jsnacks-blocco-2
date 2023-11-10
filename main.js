'use strict'

const word1 = prompt('inserire una parola');
const word2 = prompt('inserire una seconda parola');
const stamp = document.getElementById('result');

if (word1.length > word2.length) {
    stamp.innerHTML(word1 + 'e piu lunga di' + word2 + 'con' + word1.length + 'lettere');

} else if (word1.length < word2.length) {
    stamp.innerHTML(word2 + 'e piu lunga di' + word1 + 'con' + word2.length + 'lettere');

} else if (word1.length = word2.length) {
    stamp.innerHTML('Entrambe le parole hanno' + word1.length + 'lettere');
}