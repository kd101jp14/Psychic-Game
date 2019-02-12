window.onload = function() {
    var wins = 0;
    var losses = 0;
    var guessesLeft = 7;
    var guessed = [];

    var winAudio = new Audio("assets/sound/Positive-game-notification.mp3.");
    var loseAudio = new Audio("assets/sound/Cartoon-falling-down-stairs.mp3.");

    // Computer randomly chooses a letter.
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var chosenLet = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(chosenLet);

    // User presses a key to guess chosen letter. This key is captured for eval.
    document.onkeyup = function(event) {
        var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(keyPressed);

        // User's guess is compared to chosen letter.
        // Game only works if a key from a-z is pressed.
        if (event.keyCode >= 65 && event.keyCode <= 90) {

            // Declared a restart function to be used at different points in the game.
            var restart = function() {
                chosenLet = alphabet[Math.floor(Math.random() * alphabet.length)];
                console.log(chosenLet);
                guessesLeft = 7;
                document.getElementById("guessesRem").innerHTML = "Guesses Left: " + guessesLeft;
                // Need to not allow the correct letter from previous game to occupy `guessed` array.
                guessed = [];
                document.getElementById("guessedLet").innerHTML = "Guessed Letters: ";
            };
            // If the user chooses the correct letter, the game has been won. Game restarts.
            if (keyPressed == chosenLet) {
                wins++;
                document.getElementById("winsDispl").innerHTML = "Wins: " + wins;
                winAudio.play();
                console.log(wins);
                restart();

            } else {
                // If the key has not been pressed before...
                if (guessed.includes(" " + keyPressed) === false) {
                    console.log(guessed);
                    console.log(guessed.includes(keyPressed));
                    // Each wrong guess causes "Guesses Left" to decrease by 1.
                    guessesLeft--;
                    document.getElementById("guessesRem").innerHTML = "Guesses Left: " + guessesLeft;
                    console.log(guessesLeft);
                    guessed.push(" " + keyPressed);
                    document.getElementById("guessedLet").innerHTML = "Guessed Letters: " + guessed;
                    console.log(guessed);
                }
            };
            // Restart game if there are no more guesses left.
            if (guessesLeft == 0) {
                losses++;
                document.getElementById("lossesDispl").innerHTML = "Losses: " + losses;
                loseAudio.play();
                console.log(losses);
                restart();
            };
        };
    };
};