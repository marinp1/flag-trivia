import React from 'react';
import _ from 'lodash';
import LazyFlags from '../../Flags';

import { FLAG_ISO_CODE, FLAG_ISO_CODES } from '../../types';
const Question = React.lazy(() => import('./Question'));

const Loading = () => {
  return <h1>Loading...</h1>;
};

interface IQuestion {
  answer: FLAG_ISO_CODE;
  choices: FLAG_ISO_CODE[];
}

const generateQuestions = (questionCount: number): IQuestion[] => {
  const FLAGS = _.shuffle(FLAG_ISO_CODES);
  const pickRandom = (skip: FLAG_ISO_CODE) =>
    FLAGS.filter(c => c !== skip)[Math.floor(Math.random() * FLAGS.length)];
  const RandomPool = (skip: FLAG_ISO_CODE) =>
    _.uniq([...new Array(100)].map(() => pickRandom(skip)));

  return [...new Array(questionCount)].map((a, ind) => ({
    answer: FLAGS[ind],
    choices: _.shuffle([FLAGS[ind]].concat(RandomPool(FLAGS[ind]).slice(0, 3))),
  }));
};

const Game = () => {
  const [questions, setQuestions] = React.useState<IQuestion[]>([]);

  const [questionNumber, setQuestionNumber] = React.useState(-1);
  const [correct, setCorrect] = React.useState(0);
  const [incorrect, setIncorrect] = React.useState(0);
  const [imageData, setImageData] = React.useState<any>();

  const preloadedImages = React.useRef<
    Partial<{ [code in FLAG_ISO_CODE]: any }>
  >({});

  const preloadImage = async (questionNumber: number) => {
    if (questionNumber >= questions.length || questionNumber < 0) {
      return;
    }
    const code = questions[questionNumber].answer;
    if (!preloadedImages.current[code]) {
      const data = (await LazyFlags[code]).default;
      if (questionNumber === 0) {
        setImageData(data);
      }
      preloadedImages.current[code] = data;
    }
  };

  const answerQuestion = (answer: FLAG_ISO_CODE) => {
    if (answer === questions[questionNumber].answer) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
    setQuestionNumber(questionNumber + 1);
  };

  React.useEffect(() => {
    const questions = generateQuestions(20);
    setQuestions(questions);
  }, []);

  React.useEffect(() => {
    if (questionNumber < 0 || questionNumber >= questions.length) {
      return;
    }
    if (questionNumber >= 1) {
      setImageData(preloadedImages.current[questions[questionNumber].answer]);
    }
    preloadImage(questionNumber + 1);
    preloadImage(questionNumber + 2);
    preloadImage(questionNumber + 3);
    if (questionNumber <= 0) {
      return;
    }
    const prevCode = questions[questionNumber - 1].answer;
    preloadedImages.current[prevCode] = undefined;
  }, [questionNumber]);

  React.useEffect(() => {
    if (questions.length > 0) {
      preloadImage(0);
      setCorrect(0);
      setIncorrect(0);
      setQuestionNumber(0);
    }
  }, [questions]);

  if (questionNumber === -1) {
    return <h1>Loading...</h1>;
  }

  if (questionNumber >= questions.length) {
    return <h1>Game over</h1>;
  }

  return (
    <div>
      <h2>
        Question {questionNumber + 1} ({incorrect} / {correct})
      </h2>
      <React.Suspense fallback={<Loading />}>
        <Question
          choices={questions[questionNumber].choices}
          data={imageData}
          answerQuestion={answerQuestion}
        />
      </React.Suspense>
    </div>
  );
};

export default Game;
