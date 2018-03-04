alert("Enter alphabets to guess the word!");

var wordOptions = ["apple", "banana", "watermelon", "orange", "kiwi"];
var selectedWord = "";
var lettersInWord = [];
var blanksAndLetters = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;



function startGame() {

  blanksAndLetters = [];
  wrongLetters = [];
  guessesLeft = 9;
  winCount = 0;
  lossCount = 0;

  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  console.log(selectedWord);
  lettersInWord = selectedWord.split("");
  console.log(lettersInWord);


  for(var i = 0; i < lettersInWord.length; i++) {
    blanksAndLetters.push("_");
    console.log(blanksAndLetters[i]);
  }

  document.getElementById("wordToGuess").innerHTML = blanksAndLetters.join(" ");
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("winCount").innerHTML = winCount;
  document.getElementById("lossCount").innerHTML = lossCount;

}



function checkLetters(letter){

  var isCorrectGuess = false;

for(var i = 0; i < lettersInWord.length; i++) {
  if(selectedWord[i] === letter && blanksAndLetters[i] === "_") {
    blanksAndLetters[i] = letter;
    winCount++;
    isCorrectGuess = true;
  } else if(selectedWord[i] === letter) {
    alert("You already guessed that letter!");
    isCorrectGuess = true;
  }
}

 if(!isCorrectGuess) {
   guessesLeft--;
  }

}


    function roundComplete() {
      console.log("Win Count:" + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);
      
      document.getElementById("guessesLeft").innerHTML = guessesLeft;
      document.getElementById("wordToGuess").innerHTML = blanksAndLetters.join(" ");
      document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
      
      if(lettersInWord.toString() == blanksAndLetters.toString()) {
        winCount++;
        alert("You Won!");
        document.getElementById("winCount").innterHTML = winCount;       
        document.getElementById("resultImage").innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTT-TSCo9_xJm9ainCPgOm0j0eu-35WQTUZI8rawEmDvfBWM6TZA" />';
        startGame();
      }

      else if(guessesLeft == 0) {
        lossCount++;
        alert("You Lost!");
        document.getElementById("lossCount").innterHTML = lossCount;
        document.getElementById("resultImage").innerHTML = '<img src="data:image/jpeg;base64,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" />';       
        startGame();
      }
    }
      
     


startGame();

    
document.onkeyup = function(event) {
  var pressedLetter = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(pressedLetter);
  
  checkLetters(pressedLetter);

  roundComplete();
}  