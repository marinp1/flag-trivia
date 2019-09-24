import React from 'react';
import { FLAG_ISO_CODE } from '../../types';
import './Question.css';

export interface Props {
  choices: FLAG_ISO_CODE[];
  data: any;
  answerQuestion: (answer: FLAG_ISO_CODE) => void;
}

const Question = (props: Props) => {
  return (
    <div className="question-container">
      <div className="flag-container">
        <img src={props.data} />
      </div>
      <div className="question-grid">
        {props.choices.map(choice => (
          <button
            key={`choice-${choice}`}
            className="question"
            onClick={() => props.answerQuestion(choice)}
          >
            <p>{choice}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
