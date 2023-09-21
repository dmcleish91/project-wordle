import { range } from '../../utils';

const COLS = 5;
function Guess({ value }) {
  if (value) {
    return (
      <p className='guess'>
        {range(COLS).map((_, i) => {
          return <Cell status={value[i].status} letter={value[i].letter} key={i} />;
        })}
      </p>
    );
  }

  return (
    <p className='guess'>
      {range(COLS).map((_, i) => {
        return <span className={'cell'} key={i}></span>;
      })}
    </p>
  );
}

export default Guess;

function Cell({ status, letter }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}
