import React from 'react';
import _ from 'lodash';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyFlags from '../../Flags';

import { ProgressBar } from '../Utils';

import Styled from './Styled';

import {
  FLAG_ISO_CODES_BY_REGION,
  COUNTRIES,
  REGIONS,
  GAME_MODES,
} from '../../utils';

import { FLAG_ISO_CODE, Region, GameMode } from '../../types';

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

const generateQuestions = (
  ANSWER_ARRAY: FLAG_ISO_CODE[],
  CHOICE_ARRAY: FLAG_ISO_CODE[],
): IQuestion[] => {
  const FLAGS = _.shuffle(ANSWER_ARRAY);
  const CHOICES = _.shuffle(CHOICE_ARRAY);
  const pickRandom = () => CHOICES[_.random(0, CHOICES.length - 1)];

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

  return [...new Array(ANSWER_ARRAY.length)].map((a, ind) => ({
    answer: FLAGS[ind],
    choices: getChoices(FLAGS[ind]),
  }));
};

type Props = {
  translations: typeof Translations;
} & RouteComponentProps<{ mode: GameMode; region: Region }>;

const Game: React.FC<Props> = ({ translations, ...rest }) => {
  const { match } = rest;
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

  const nextQuestion = (prevCorrect: boolean) => {
    if (prevCorrect) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
    setQuestionNumber(questionNumber + 1);
  };

  const answerQuestion = (answer: FLAG_ISO_CODE) => {
    const wasCorrect = answer === questions[questionNumber].answer;
    toast.dismiss('status-toast');
    const src = preloadedImages.current[questions[questionNumber].answer];
    const answerName = COUNTRIES[answer].name[language];
    const correctName =
      COUNTRIES[questions[questionNumber].answer].name[language];

    if (wasCorrect) {
      /*
        toast(
          <Styled.ToastContainer src={src}>
            <div />
            <span>
              {translations.formatString(
                translations.game['prev-answer-correct-label'],
                <b>{answerName}</b>,
              )}
            </span>
          </Styled.ToastContainer>,
          {
            toastId: 'status-toast',
          },
        );
        */
    } else {
      toast(
        <Styled.ToastContainer src={src}>
          <div />
          <span>
            {translations.formatString(
              translations.game['prev-answer-incorrect-label'],
              <b>{answerName}</b>,
              <b>{correctName}</b>,
            )}
          </span>
        </Styled.ToastContainer>,
        {
          toastId: 'status-toast',
        },
      );
    }
    nextQuestion(wasCorrect);
  };

  React.useEffect(() => {
    if (!GAME_MODES.includes(match.params.mode)) {
      return;
    }
    if (!REGIONS.includes(match.params.region)) {
      return;
    }
    const ANSWER_FLAGS = FLAG_ISO_CODES_BY_REGION[match.params.region];
    const CHOICE_FLAGS =
      match.params.mode === 'region'
        ? ANSWER_FLAGS
        : FLAG_ISO_CODES_BY_REGION.world;
    const questions = generateQuestions(ANSWER_FLAGS, CHOICE_FLAGS);
    setQuestions(questions);
  }, [match.params.region]);

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
  const headerText = String(
    translations.formatString(
      translations.game['question-title-label'],
      questionNumber + 1,
      questions.length,
    ),
  );

  const statusText = String(
    translations.formatString<string | number>(
      translations.game['status-label'],
      correct,
      questions.length,
      ((correct / questions.length) * 100).toFixed(2),
    ),
  );

  return (
    <React.Fragment>
      <Styled.Container>
        <Styled.ProgressBar>
          <ProgressBar
            text={headerText}
            progress={questionNumber / questions.length}
            statusText={statusText}
          />
        </Styled.ProgressBar>
        <React.Suspense fallback={<Loading />}>
          <Question
            choices={questions[questionNumber].choices.map(code => ({
              code,
              name: COUNTRIES[code].name[language],
            }))}
            data={imageData}
            answerQuestion={answerQuestion}
          />
        </React.Suspense>
      </Styled.Container>
      <ToastContainer />
    </React.Fragment>
  );
};

export default withRouter(Game);
