window.onload = function () {

    var wins = 0;
    var losses = 0;
    var guessed = [];
    var guessesLeft = 7;

    // Computer randomly chooses a letter.
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var chosenLet = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(chosenLet);

    // User presses a key to guess chosen letter. This key is captured for eval.
    document.onkeyup = function(event) {
        var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(keyPressed);

        // User's guess is compared to chosen letter.
        if (keyPressed == chosenLet) {
            wins++;
            document.getElementById("winsDispl").innerHTML = "Wins: " + wins;
            console.log(wins);
            // Need to create restart function.
            // restart();
        } else {
            // Each wrong guess causes "Guesses Left" to decrease by 1.
            losses++;
            document.getElementById("lossesDispl").innerHTML = "Losses: " + losses;
            guessesLeft--;
            document.getElementById("guessesRem").innerHTML = "Guesses Left: " + guessesLeft;
            console.log(guessesLeft);
        }
        guessed.push(keyPressed);
        document.getElementById("guessedLet").innerHTML = "Guessed Letters: " + guessed;
        console.log(guessed);
    }
}