import React from 'react';
import _ from 'lodash';
import LazyFlags from '../../Flags';

import { FLAG_ISO_CODES, COUNTRIES } from '../../utils';
import { FLAG_ISO_CODE } from '../../types';

import Translations, { LANGUAGES } from '../../translations';

const Question = React.lazy(() => import('./Question'));

const CHOICE_COUNT = 4;

const Loading = () => {
  return <h1>Loading...</h1>;
};

interface IQuestion {
  answer: FLAG_ISO_CODE;
  choices: FLAG_ISO_CODE[];
}

const generateQuestions = (questionCount: number): IQuestion[] => {
  const FLAGS = _.shuffle(FLAG_ISO_CODES);
  const pickRandom = () =>
    FLAG_ISO_CODES[_.random(0, FLAG_ISO_CODES.length - 1)];

  const getChoices = (answer: FLAG_ISO_CODE): FLAG_ISO_CODE[] => {
    const choices = [answer];
    while (choices.length < CHOICE_COUNT) {
      const randomFlag = pickRandom();
      if (!choices.includes(randomFlag)) {
        choices.push(randomFlag);
      }
    }
    return _.shuffle(choices);
  };

  return [...new Array(questionCount)].map((a, ind) => ({
    answer: FLAGS[ind],
    choices: getChoices(FLAGS[ind]),
  }));
};

const Game = ({ translations }: { translations: typeof Translations }) => {
  const [questions, setQuestions] = React.useState<IQuestion[]>([]);

  const [questionNumber, setQuestionNumber] = React.useState(-1);
  const [correct, setCorrect] = React.useState(0);
  const [incorrect, setIncorrect] = React.useState(0);
  const [imageData, setImageData] = React.useState<string>();

  const preloadedImages = React.useRef<
    Partial<{ [code in FLAG_ISO_CODE]: any }>
  >({});

  const preloadImage = async (questionNumber: number) => {
    if (questionNumber >= questions.length || questionNumber < 0) {
      return;
    }
    const code = questions[questionNumber].answer;
    if (!preloadedImages.current[code]) {
      const data = LazyFlags[code];
      const img = new Image();
      img.src = data;
      img.onload = () => {
        if (questionNumber === 0) {
          setImageData(data);
        }
        preloadedImages.current[code] = data;
      };
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
    const questions = generateQuestions(FLAG_ISO_CODES.length);
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
    preloadImage(questionNumber + 4);
    preloadImage(questionNumber + 5);
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
    return <h1>{translations.general['loading-text']}</h1>;
  }

  if (questionNumber >= questions.length) {
    return (
      <React.Fragment>
        <h1>{translations.game['game-over-text']}</h1>
        <h3>
          You got {correct} / {questions.length} correct
        </h3>
      </React.Fragment>
    );
  }

  const language = translations.getLanguage() as LANGUAGES;

  return (
    <div>
      <h2>
        {translations.formatString(
          translations.game['question-title-label'],
          questionNumber + 1,
          questions.length,
        )}
        <br />
        Correct: {correct}
        <br />
        Incorrect: {incorrect}
      </h2>
      <React.Suspense fallback={<Loading />}>
        <Question
          choices={questions[questionNumber].choices.map(code => ({
            code,
            name: COUNTRIES[code][language],
          }))}
          data={imageData}
          answerQuestion={answerQuestion}
        />
      </React.Suspense>
    </div>
  );
};

export default Game;
