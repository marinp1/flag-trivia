import React from 'react';
import Styled from './Styled';

const ProgressBar = ({
  text,
  progress,
  statusText,
}: {
  text: string;
  progress: number;
  statusText: string;
}) => {
  return (
    <Styled.Container text={text} progress={progress} statusText={statusText}>
      <Styled.Progress progress={progress} />
    </Styled.Container>
  );
};
export default ProgressBar;
