import React from 'react';
import { FLAG_ISO_CODE } from '../../types';
import './Question.css';

export interface Props {
  choices: FLAG_ISO_CODE[];
  data?: string;
  answerQuestion: (answer: FLAG_ISO_CODE) => void;
}

const Question = (props: Props) => {
  return (
    <div className="question-container">
      {props.data && (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </div>
  );
};

export default Question;
