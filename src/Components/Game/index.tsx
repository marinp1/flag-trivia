import React from 'react';
const Question = React.lazy(() => import('./Question'));

const Loading = () => {
  return <h1>Loading...</h1>;
};

const Game = () => {
  const [questionNumber, setQuestionNumber] = React.useState(1);
  return (
    <div>
      <h2>Question {questionNumber}</h2>
      <React.Suspense fallback={Loading}>
        <Question choices={[]} code={'fi'} />
      </React.Suspense>
    </div>
  );
};

export default Game;
