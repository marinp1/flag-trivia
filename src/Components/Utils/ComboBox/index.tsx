import React from 'react';

import Styled from './Styled';

interface Props<T> {
  selection: T;
  choices: { key: T; value: string | number }[];
  setSelection: (selectedValue: T) => void;
}

function ComboBox<T extends string | number>(props: Props<T>) {
  const { selection, choices, setSelection } = props;

  return (
    <Styled.Container>
      {choices.map(choice => (
        <Styled.Selection
          key={`cb-choice-${choice.key}`}
          className={choice.key === selection ? 'selected' : undefined}
          onClick={() => setSelection(choice.key)}
        >
          {choice.value}
        </Styled.Selection>
      ))}
    </Styled.Container>
  );
}

export default ComboBox;
