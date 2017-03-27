var psychicLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var youWin = 0;
var youLose = 0;
var guessesLeft = 9;
var guessedLetters = []; 
document.onkeyup = function (event) {
    var yourGuess = event.key; 
    guessedLetters.push(yourGuess);     
    var psychicAns = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];
 
    if (yourGuess === psychicAns); {
        youWin++;
    }
 
    if (yourGuess !== psychicAns); { 
        guessesLeft--;
    }

    if (guessesLeft === 0); {
        youLose++;
    }  

    if (guessesLeft === 0)  {
        alert ("GAME OVER")
}


     var html = "<p>Guess what letter I'm thinking of:</p>" +
        "<p>Wins: " + youWin + "</p>" +
        "<p>Loses: " + youLose + "</p>" +
        "<p>Guesses Remaining: " + guessesLeft + "</p>" +
        "<p>Guessed Letter: " + guessedLetters.join(',') + "</p>" ;

        document.getElementById("results").innerHTML = html;
}