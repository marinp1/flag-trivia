import React from 'react';

import Styled from './Styled';

interface Choice<T> {
  key: T;
  value: string | number;
  extra?: string | number;
}

interface Props<T> {
  title?: any;
  selection: T;
  choices: Choice<T>[];
  setSelection: (selectedValue: T) => void;
}

function ComboBox<T extends string | number>(props: Props<T>) {
  const { title, selection, choices, setSelection } = props;

  return (
    <React.Fragment>
      {title && <Styled.Title>{title}</Styled.Title>}
      <Styled.Container>
        {choices.map((choice: Choice<T>) => (
          <React.Fragment>
            <Styled.Selection
              tag={choice.extra ? { content: choice.extra } : undefined}
              key={`cb-choice-${choice.key}`}
              className={choice.key === selection ? 'selected' : undefined}
              onClick={() => setSelection(choice.key)}
            >
              {choice.value}
            </Styled.Selection>
          </React.Fragment>
        ))}
      </Styled.Container>
    </React.Fragment>
  );
}

export default ComboBox;
