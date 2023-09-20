import React, { useState } from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';
import GameOverMessage from '../GameOverMessage';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const results = [];
  let status = undefined;

  function handleSubmitGuess(guess) {
    setGuesses([...guesses, { id: crypto.randomUUID(), label: guess }])
  }

  range(guesses.length).map((_, i) => {
    const element = guesses[i];
    return results.push(checkGuess(element.label, answer));
  });

  const gameOver = results.find((result) => {
    return result.every((item) => item.status === 'correct');
  });

  if (guesses.length === 6) {
    status = 'lose';
  }

  if (gameOver) {
    status = 'win';
  }



  return (
    <>
      <GuessResults results={results} answer={answer} />
      <GuessInput guesses={guesses} handleSubmitGuess={handleSubmitGuess} gameOver={gameOver !== undefined} />
      <GameOverMessage status={status} answer={answer} numOfGuesses={guesses.length} />
    </>
  );
}

export default Game;
