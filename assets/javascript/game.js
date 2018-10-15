document.onkeyup = function(event) {
    setVariables(event);
}

function setVariables(event) {
    var userTypedInput = event.key;
    var userTyped = document.getElementById("me-type");
    var currentGuess = document.getElementById("current-guess");
    var correctAnswer = document.getElementById("correct-answer");
    var myAttempts = document.getElementById("my-attempts");

    userTyped.textContent = userTypedInput;
    currentGuess.textContent = "--LU--O-";
    correctAnswer.textContent = "SOLUTION";
    myAttempts.textContent = 3;
}

var game = {
    wins: 0,
    guessCount: 0,
    guessLetters: [],

        // check if entered before
        // if so exit and do nothing
        // if new
        // add to played guesses
        // increase counter
        // verify if correct or not
        // update variables 
        // verify if game ended
        // and exit


        
    chooseWord: function(index) {
        var selection = ["Option1", "Option2"];
        return selection[index]
    },

    displayGuess: function(guessLetters) {
        // create masked string
    },

    mapGuess: function(event) {
        userTypedInput = event.key;

    }




}