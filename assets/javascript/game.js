// Computer randomly chooses a letter.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var chosenLet = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(chosenLet);

// User presses a key to guess chosen letter. This key is captured for eval.

document.onkeyup = function(event) {
    var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(keyPressed);
}

// Each guess causes "Guesses Left" to decrease by 1.

//User's guess is compared to chosen letter.