window.onload = function () {

    var wins = 0;
    var losses = 0;
    var guessesLeft = 7;
    var guessed = [];

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
            restart();
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
    };

    // Not working: Restart when there are no more guesses left.
    if(guessesLeft == 0) {
        restart();
    };

    var restart = function() {
        // Not working: getting the computer to choose a new random letter.
        chosenLet = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessesLeft = 7;
        document.getElementById("guessesRem").innerHTML = "Guesses Left: " + guessesLeft;
        // Need to not allow the correct letter from previous game to occupy `guessed` array.
        guessed = [];
        document.getElementById("guessedLet").innerHTML = "Guessed Letters: ";
    };
};

// Need to not allow letter repeats.
// Need to not allow symbols other than letters. 