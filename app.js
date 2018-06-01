document.addEventListener('DOMContentLoaded', () => {
  let wordCount = 10;
  let guessCount = 4;
  let password = '';

  const start = document.getElementById('start');
  start.addEventListener('click', () => {
    toggleClasses(document.getElementById('start-screen'), 'hide', 'show');
    toggleClasses(document.getElementById('game-screen'), 'hide', 'show');
    startGame();
  });

  const toggleClasses = (element, ...classNames) => {
    classNames.forEach(className => element.classList.toggle(className));
  };

  const startGame = () => {
    // get random words and append them to the DOM
    const wordList = document.getElementById('word-list');
    const randomWords = getRandomValues(words);
    randomWords.forEach(word => {
      const li = document.createElement('li');
      li.innerText = word;
      wordList.appendChild(li);
    });

    // set a secret password and the guess count display
    password = getRandomValues(randomWords, 1)[0];
    setGuessCount(guessCount);

    // add update listener for clicking on a word
    wordList.addEventListener('click', updateGame);
  };

  const getRandomValues = (array, numberOfVals = wordCount) =>
    shuffle(array).slice(0, numberOfVals);

  const shuffle = array => {
    const arrayCopy = Array.from(array);
    for (let idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
      // generate a random index between 0 and idx1 (inclusive)
      const idx2 = Math.floor(Math.random() * (idx1 + 1));

      // swap elements at idx1 and idx2
      [arrayCopy[idx1], arrayCopy[idx2]] = [arrayCopy[idx2], arrayCopy[idx1]];
    }
    return arrayCopy;
  };
});
