var wordOptions = ["Apple", "Banana", "Watermelon", "Orange"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame() {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  
  lettersInWord = selectedWord.split("");
  
  numBlanks = lettersInWord.length;
 
  
  //reset
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];
  
  for(var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
    
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
    
    //change HTML to reflect game conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
    
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
    
    
    function checkLetters(letter){
      console.log(letter);
      var isLetterInWord = false;
      
      for(var i = 0; i < numBlanks; i++) {
        if(selectedWord[i] == letter) {
          isLetterInWord = true;
          console.log("Letter found!");
        }
      }
     
      if(isLetterInWord) {
        for(var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
              blanksAndSuccesses[i] = letter;
             } 
         }
     }  else {
      wrongLetters.push(letter);
      guessesLeft--;      
    }
      
      console.log(blanksAndSuccesses);
      
    }
    
    function roundComplete() {
      console.log("Win Count:" + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);
      
      document.getElementById("numGuesses").innerHTML = guessesLeft;
      document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
      document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
      
      if(lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won!");
        // document.getElementById("image-div").innerhtml = "<img id='PBJ' src='https://images.unsplash.com/photo-1500259571355-332da5cb07aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=124d6dd6db2065958f8f5c6f414d7940&auto=format&fit=crop&w=634&q=80'/>";
        
        document.getElementById("winCounter").innterHTML = winCount;       
        startGame();
        
      } else if(guessesLeft == 0){
        lossCount++;
        alert("You lost!!");
        
        document.getElementById("lossCounter").innterHTML = lossCount;
        
        startGame();
      }
    }
    
    
  }
}

//start game
startGame();

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(letterGuessed);
  
  checkLetters(letterGuessed);
  
  roundComplete();
}