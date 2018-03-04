alert("connected!");

var wordOptions = ["Apple", "Banana", "Watermelon", "Orange", "kiwi"];
var selectedWord = "";
var lettersInWord = [];
var blanksAndLetters = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame() {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  console.log(selectedWord);
  lettersInWord = selectedWord.split("");
  console.log(lettersInWord);

  guessesLeft = 9;
  wrongLetters = [];
  blanksAndLetters = [];
  
  for(var i = 0; i < lettersInWord.length; i++) {
    blanksAndLetters.push(" _ ");
    console.log(blanksAndLetters[i]);
  }

}
startGame();



 
  
  

  

    
//     console.log(selectedWord);
//     console.log(lettersInWord);
//     console.log(blanksAndLetters);
    
    
//     document.getElementById("wordToGuess").innerHTML = blanksAndLetters.join(" ");
//     document.getElementById("guessesLeft").innerHTML = guessesLeft;
//     document.getElementById("winCount").innerHTML = winCount;
//     document.getElementById("lossCount").innerHTML = lossCount;
    
//     console.log(selectedWord);
//     console.log(lettersInWord);
//     console.log(blanksAndLetters);
    
    
//     function checkLetters(letter){
//       console.log(letter);
//       var isLetterInWord = false;
      
//       for(var i = 0; i < lettersInWord.length; i++) {
//         if(selectedWord[i] == letter) {
//           console.log(letter);
//           isLetterInWord = true;
//           console.log("Letter found!");
//         }
//       }
     
//       if(isLetterInWord) {
//         for(var i = 0; i < lettersInWord.length; i++) {
//             if(selectedWord[i] == letter) {
//               blanksAndLetters[i] = letter;
//              } 
//          }
//      }  else {
//       wrongLetters.push(letter);
//       guessesLeft--;      
//     }
      
//       console.log(blanksAndLetters);
      
//     }
    
//     function roundComplete() {
//       console.log("Win Count:" + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);
      
//       document.getElementById("guessesLeft").innerHTML = guessesLeft;
//       document.getElementById("wordToGuess").innerHTML = blanksAndLetters.join(" ");
//       document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
      
//       if(lettersInWord.toString() == blanksAndLetters.toString()) {
//         winCount++;
//         alert("You Won!");
        
//         document.getElementById("winCount").innterHTML = winCount;       
//         startGame();
        
//       } else if(guessesLeft == 0){
//         lossCount++;
//         alert("You lost!!");
        
//         document.getElementById("lossCount").innterHTML = lossCount;
        
//         startGame();
//       }
//     }
    
    
//   }
// }


// startGame();

// document.onkeyup = function(event) {
//   var pressedLetter = String.fromCharCode(event.keyCode).toLowerCase();
//   console.log(pressedLetter);
  
//   checkLetters(pressedLetter);
  
//   roundComplete();
// }