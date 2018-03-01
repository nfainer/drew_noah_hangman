(() => {
  console.log('hangman script fired!');

  // create an array to hold the words to be guessed (MOZILLA DEV NET --> arrays)
  const words = ["blue", "orange", "yellow", "megenta", "violet"];

  // set up a variable stack
  let currentWord = null,
      wordHint = document.querySelector('.hint-string'),
      guessBox = document.querySelector('input');



  function takeGuess() {
    console.log(this.value);

    if (this.value == "" || this.value.length < 1 ) {
      return;
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

  init();

})();
