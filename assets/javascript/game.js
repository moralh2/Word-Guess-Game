document.onkeyup = function(event) {
    enterGame(event);
    // gameSession(event):
}

// function gameSession(event) {
//     var userTyped = event.key;
//     var activeGameSession = 0;
//     var activePlay = 0;


// }

// function enterGame(event) {
//     game.runGame(event);
// }

var game = {
    wins: 0,
    plays: 0,
    active: 0,
    wrongCount: 0,
    guessLetters: [],
    guessDisplay: '',
    guessSolution: '',
    lastTyped: '',

    runGame: function(event) {
        this.lastTyped = event.key;
        if (this.active == 0) {
            this.preSteps();
        }
        else {
            this.gameSteps();
        }
    },

    preSteps: function() {
        var i = (this.plays%5);
        this.chooseWord(i);
        this.setVariables();
    },

    chooseWord: function(index) {
        var selection = ["Option1", "Option2 Combo", "Option3", "Option4", "Option5"];
        this.guessSolution = selection[index];
        this.guessDisplay = "-".repeat(this.guessSolution.length);
    },

    gameSteps: function() {
        if (this.guessLetters.indexOf(this.lastTyped) == -1) {
            this.plays+=1;
            this.guessLetters.push(this.lastTyped);
            this.checkIfCorrect();
            this.checkIfGameOver();
            this.setVariables();
        }
    },

    checkIfCorrect: function() {
        correct = 0;
        for (i = 0; i < this.guessSolution.length; i++) {
            if (this.guessSolution[i] == this.lastTyped) {
                correct = 1;
                this.guessDisplay[i] == this.lastTyped;
            }
        }
        if (correct == 0) {
            this.wrongCount=+1;
        }

    },

    checkIfGameOver: function() {
        if (this.guessSolution == this.guessDisplay) {
            this.wins =+ 1;
            this.active = 0;
        } 
        else if (this.wrongCount > 30) {
            this.active = 0;
        }
    },

    gameOverSeq: function() {
        // get media after win
    },

    setVariables: function() {
        var userTyped = document.getElementById("me-type");
        var currentGuess = document.getElementById("current-guess");
        var correctAnswer = document.getElementById("correct-answer");
        var myAttempts = document.getElementById("my-attempts");
        userTyped.textContent = this.lastTyped;
        currentGuess.textContent = this.guessDisplay;
        correctAnswer.textContent = this.guessSolution;
        myAttempts.textContent = 3;
    }

}

// type, if the game is active, run Game steps if not over
// if game is new, run preSteps
// preSteps
//      chooseWord
//      setVariables (guess, displayed guess), plays, wins
// gameSteps
//      getInput
//      validateAsNew -- if no, exit
//      enterPlay
//          increase play counter
//          add to played letters
//          check if correct
//          if true - update diplay guess
//          if false - update wrong guesses
//          verify if game over (guessed all or how many wrong)
//          if game over -- increase plays, losses, game-over mode
//          if not over, update varibles in display
// gameOver
//      showSolution, updatePlays, setActiveToFalse
// showSolution
//      displayGuess to show all
//      add some media on html related to guess
//
// 
// 
// update to have on-load variable init
// based on that choose whether to new-game, enter-game
// reuse for game over