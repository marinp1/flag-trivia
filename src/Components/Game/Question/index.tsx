import React from 'react';

import StyledRaw from '../Styled';
import { FLAG_ISO_CODE } from '../../../types';

import { Button } from '../../Utils';

const Styled = StyledRaw.Question;

export interface Props {
  choices: { code: FLAG_ISO_CODE; name: string }[];
  data?: string;
  answerQuestion: (answer: FLAG_ISO_CODE) => void;
}

const Question = (props: Props) => {
  if (!props.data) {
    return <div>Loading...</div>;
  }

  return (
    <Styled.Container>
      <Styled.FlagContainer>
        <img src={props.data} />
      </Styled.FlagContainer>
      <Styled.ChoiceContainer>
        {props.choices.map(choice => (
          <Button
            key={`choice-${choice.code}`}
            onClick={() => props.answerQuestion(choice.code)}
          >
            {choice.name}
          </Button>
        ))}
      </Styled.ChoiceContainer>
    </Styled.Container>
  );
};

export default Question;
