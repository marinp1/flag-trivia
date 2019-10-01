import React from 'react';

import { FLAG_ISO_CODE, Region, GameMode } from '../../types';

interface Props {
  game: {
    data: {
      answer: FLAG_ISO_CODE;
      guess: FLAG_ISO_CODE;
    }[];
    region: Region;
    mode: GameMode;
  };
}

const EndScreen: React.FC<Props> = props => {
  const { data } = props.game;

  const correctCount = React.useMemo(
    () => data.filter(datum => datum.answer === datum.guess).length,
    [data],
  );

  return (
    <div>
      <h1>Game over</h1>
      <h2>
        You got {correctCount} / {data.length} correct
      </h2>
      <div>
        <h3>Summary</h3>
        {data.map(d => (
          <div key={d.answer}>
            <div>{d.answer}</div>
            <div>{d.guess}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EndScreen;
