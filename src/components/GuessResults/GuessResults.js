import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

const COLS = 5;
function GuessResults({ results }) {
  function getStyle(i, j) {
    let style = undefined;
    if (results[i] !== undefined) {
      style = results[i][j].status === 'correct' ? 'cell correct' : 'cell incorrect';
    }

    return style === undefined ? '' : style;
  }

  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((_, i) => {
        return (
          <p className='guess' key={i}>
            {range(COLS).map((_, j) => {
              const style = getStyle(i, j);
              return (
                <span className={style ? style : 'cell'} key={j}>
                  {results[i] !== undefined && results[i][j].letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
