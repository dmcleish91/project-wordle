function GameOverMessage({ status, answer, numOfGuesses }) {
  if (status === 'win') {
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{numOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  }

  if (status === 'lose') {
    return (
      <div className='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return null;
}

export default GameOverMessage;
