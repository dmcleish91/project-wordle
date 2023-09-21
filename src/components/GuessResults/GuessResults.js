import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessResults({ results }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((_, i) => {
        return <Guess value={results[i]} key={i} />;
      })}
    </div>
  );
}

export default GuessResults;
