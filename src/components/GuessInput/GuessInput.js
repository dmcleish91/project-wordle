import { useState } from 'react';

function GuessInput({ guesses, setGuesses, gameOver }) {
  const [input, setInput] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setGuesses([...guesses, { id: crypto.randomUUID(), label: input }]);
    setInput('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={input}
        disabled={gameOver}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
        pattern='.{5}'
      />
    </form>
  );
}

export default GuessInput;
