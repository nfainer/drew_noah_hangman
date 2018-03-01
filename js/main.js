(() => {
  console.log('hangman script fired!');

  // create an array to hold the words to be guessed (MOZILLA DEV NET --> arrays)
  const words = ["blue", "orange", "yellow", "megenta", "violet"];

  // set up a variable stack
  let currentWord = null,
      wordHint = document.querySelector('.hint-string'),
      guessBox = document.querySelector('input');
      wrongGuesses = 0;
      resetScreen = document.querySelector('.reset-screen');
      resetButton = resetScreen.querySelector('button');
      wrongLetterList = document.querySelector('.wrong-letters');
      wrongLetterArray = [];

  function resetGame() {
  //  debugger;
    //reset the game and pick a new word
    let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
    gamePieces.forEach(piece => piece.classList.remove('show-piece'));
    wrongGuesses = 0;
    guessBox.value = "";// set the input text to nothing
  }

  function showResetScreen(){
    //user has lost, reset stuff and start over

    console.log('you lose, loser!');
    resetScreen.classList.add('show-piece');
  }

  function takeGuess() {

    // MDN -> 'this' Keyword
    console.log(this.value);

    if (this.value == "" || this.value.length < 1 ) {
      return;
    }
//set up the win and loose paths ( if / else)
    if (!currentWord.includes(this.value)) {
      console.log('invalid letter!');
      //store wrong guesses so we can
      wrongLetterArray.push(this.value);
      //add them to the paragraph tag
      wrongLetterList.textContent = wrongLetterArray.join(" ");
      //turn on the hangman piece
      document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

      if (wrongGuesses >= 6) {

        showResetScreen();
        wrongLetterList = 0;




      //add one to wrongGuesses

    } else {
      //you loose, reset the game
      //increment the wrongGuesses variable
      wrongGuesses++;
    }

    } else {
//winning path    }
  }
}


  function init() {
    //math object (MDN)
    currentWord = words[Math.floor(Math.random()*words.length)];

    //fill the hint with underscores
    wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

    let thisIndex = words.indexOf(currentWord);

    console.log(`guess this word: ${currentWord}. it's at ${thisIndex}`);
  }

// Event handling always goes at the bottom
//initButton.addEventListener('click', init);

  guessBox.addEventListener('keyup', takeGuess);
  resetButton.addEventListener('click', resetGame);

  init();

})();
