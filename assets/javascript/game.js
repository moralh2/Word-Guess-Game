var userTyped = ''
var initArray = [0,1,2,3,4,5,6,7]
var randomizedArray = []

window.onload = function () { 
    randomizedArray = initArray
    shuffleArray(randomizedArray)
}

document.onkeyup = function(event) {
    userTyped = event.key      //save input key
    game.runGame()
}

function shuffleArray(array) {                              //i did not create this method - this is from the internet
    for (let i = array.length - 1; i > 0; i--) {            //using it to shuffle the initial order of the solution array
        const j = Math.floor(Math.random() * (i + 1));      //see in line 49
        [array[i], array[j]] = [array[j], array[i]];        
    }
}

var game = {
    active: 0,                                      //save state (game is running or not)
    wins: 0,                                        //how many times the user has won
    plays: 0,
    losses: 0,                                       //how many times the user has played
    wrongCount: 0,                                  //how many letters the user has gotten wrong
    guessLetters: [],                               //letters guessed by user
    wrongLetters: [],
    guessDisplay: [],                               //the solution that is displayed with underscores
    guessSolution: [],                              //the correct solution

    runGame: function() {                           //this controls whether to keep playing or start a new game
        if (this.active == 0) {                     //if a game is not running, start a new one
            this.preSteps()
        }
        else {                                      //if game is running...
            if (this.validInput()) {                //verify that the input is a valid letter
                this.gameSteps()                   //if it is valid, play a turn in the game
            }
        }
    },

    preSteps: function() {
        this.active = 1
        this.wrongCount = 0
        this.guessDisplay = []
        wordIndex = randomizedArray[this.plays]
        this.chooseWord(wordIndex)
        userTyped = 'START'
        this.setVariables()
        this.setEmojis()
    },

    validInput: function() {
        var alpha = "abcdefghijklmnopqrstuvwxyz"
        var alphaArray = alpha.toUpperCase().split("")
        userTyped = userTyped.toUpperCase()
        if (alphaArray.indexOf(userTyped) != -1) {
            return true
        }
        else {
            return false
        }
    },

    chooseWord: function(index) {
        var selection = ["Disenchantment", "Stranger Things", "Black Mirror", "House Of Cards", "Daredevil", "Ozark", "Big Mouth", "Grace and Frankie"]          
        this.guessSolution = selection[index].toUpperCase().split("");
        for (i = 0; i < this.guessSolution.length; i++) {
            if (this.guessSolution[i] == " ") {
                this.guessDisplay.push("  ")
            }
            else {
                this.guessDisplay.push("_")
            }
        }
    },

    gameSteps: function() {
        if (this.guessLetters.indexOf(userTyped) == -1) {      //if the input is new
            this.guessLetters.push(userTyped)                 //add letter to arr of played letters
            this.checkIfCorrect()
            this.checkIfGameOver()
            this.setVariables()
        }
    },

    checkIfCorrect: function() {
        var correct = 0                                              //assume init not correct
        for (i = 0; i < this.guessSolution.length; i++) {           //loop through each letter
            if (this.guessSolution[i] == userTyped) {          //if any letters match
                correct++                                       //flag as correct
                this.guessDisplay[i] = userTyped             //swipe the dash for the letter
            }
        }
        if (correct == 0) {                                         //if flag was never set to correct
            this.wrongCount+=1
            this.wrongLetters.push(userTyped)                     //increase count for wrong -- needed?
            this.setBombita()                                      //add bomb emoji
        }

    },

    checkIfGameOver: function() {                                   
        if (this.guessDisplay.indexOf("_") == -1 ) {              //if the displayed and correct match
            this.wins++                               //the game has ended - user wins
            this.active = 0
            this.plays++
            this.gameOverSeq()
        } 
        else if (this.wrongCount >= 10) {                            //user losses and game ends at 30 tries
            this.active = 0
            this.plays++
            this.losses++
            this.gameOverSeq()
        }
    },

    gameOverSeq: function() {                                       
        this.guessLetters = []
        this.wrongLetters = []
        this.guessDisplay = this.guessSolution
        this.guessSolution = []
        if (this.plays >= 8) {
            alert("You played all the shows! Congrats!")
        }
    },

    setDisplaySolution: function() {
        var stringForDisplay = ''
        for (i = 0; i< this.guessDisplay.length; i++) {
            if (this.guessDisplay[i] == ' ') {
                stringForDisplay += '\xa0'
            }
            else {
                stringForDisplay += this.guessDisplay[i] + '\xa0'
            }
        }
        return stringForDisplay
    },

    setVariables: function() {
        var userTypedDisplay = document.getElementById("me-type")
        var currentGuess = document.getElementById("current-guess")
        var winsDisplay = document.getElementById("wins")
        var wrongLettersDisplay = document.getElementById("wrong-letters")
        var lossesDisplay = document.getElementById("losses")
        var triesRemainingDisplay = document.getElementById("tries-remaining")
        var triesLeft = (10 - this.wrongCount)

        userTypedDisplay.textContent = userTyped
        currentGuess.textContent = this.setDisplaySolution()
        winsDisplay.textContent = this.wins
        wrongLettersDisplay.textContent = this.wrongLetters
        lossesDisplay.textContent = this.losses
        triesRemainingDisplay.textContent = triesLeft
    },

    setEmojis: function() {
        var bombitas = [' 😕 ',' ☹️ ',' 😟 ',' 😞 ',' 😢 ',' 😭 ',' 😰 ',' 😱 ',' 😳 ',' 👻 ']
        for (i = 0; i < bombitas.length; i++) {        
            var counter = i + 1
            var lifeHere = document.getElementById("life-" + counter)
            lifeHere.textContent = bombitas[i]
        }
    },

    setBombita: function() {
        var bombita = ' 💣 '
        var lifeCurrent = document.getElementById("life-" + this.wrongCount)
        lifeCurrent.textContent = bombita
    }

}