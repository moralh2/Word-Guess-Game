var userTyped = ''
window.onload = function () { 
    // alert("Let's play a game!");
    // prepare for new game
        // methods should re-use after game is lost or won by user
        // maybe check how many games (if options are all used up)
        // setup
        // listen for key
    // load all of the variables
}

// add alert to control flow before and after game -- buffer
// 
// the button 
document.onkeyup = function(event) {
    userTyped = event.key;
    evaluateLetter();
    enterGame(event);
}

var alphaUpperArray = str.toUpperCase().split("");
var str = "abcdefghijklmnopqrstuvwxyz";

var alphaArray = str.split(""); // the argument is a null string, "".
function evaluateLetter(input) {
    function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }

}

// document.onload = function() {
//     game.runGame(event)
// }


function gameSession(event) {
    // var userTyped = event.key;

    var activeGameSession = 0;
    var activePlay = 0;


}

function enterGame(event) {
    game.runGame(event);
}

var game = {
    active: 0,
    wins: 0,
    // can combine and maybe use the guessLetters array length for logic to end game
        plays: 0,
        wrongCount: 0,
        guessLetters: [],
    // last comment
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
        // zero all variables before printing
        // set variables should be elsewhere
        this.setVariables();
    },

    chooseWord: function(index) {
        var selection = ["Option1", "Option2 Combo", "Option3", "Option4", "Option5"];
        this.guessSolution = selection[index];
        this.guessDisplay = "-".repeat(this.guessSolution.length);
    },

    gameSteps: function() {
        if (this.guessLetters.indexOf(this.lastTyped) == -1) {      //if the input is new
            this.plays+=1;                                          //increase play count
            this.guessLetters.push(this.lastTyped);                 //add letter to arr of played letters
            this.checkIfCorrect();
            this.checkIfGameOver();
            this.setVariables();
        }
    },

    checkIfCorrect: function() {
        correct = 0;                                                //assume init not correct
        for (i = 0; i < this.guessSolution.length; i++) {           //loop through each letter
            if (this.guessSolution[i] == this.lastTyped) {          //if any letters match
                correct = 1;                                        //flag as correct
                this.guessDisplay[i] == this.lastTyped;             //swipe the dash for the letter
            }
        }
        if (correct == 0) {                                         //if flag was never set to correct
            this.wrongCount=+1;                                     //increase count for wrong -- needed?
        }

    },

    checkIfGameOver: function() {                                   
        if (this.guessSolution == this.guessDisplay) {              //if the displayed and correct match
            this.wins =+ 1;                                         //the game has ended - user wins
            this.active = 0;
        } 
        else if (this.wrongCount > 30) {                            //user losses and game ends at 30 tries
            this.active = 0;
        }
    },

    gameOverSeq: function() {                                       //sequence for the end of the game
        // get media after win                                      //maybe add loss/won logic
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