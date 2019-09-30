import styled from '../../theme/styled';
import { breakpoints } from '../../theme/index';

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'progress'
    'question';
`;

const ProgressBar = styled.div`
  grid-area: progress;
  width: 100%;
  height: auto;
`;

const QuestonContainer = styled.div`
  grid-area: question;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  column-gap: 2rem;
  row-gap: 2rem;
  grid-template-areas:
    'flag'
    'choice';
  ${breakpoints.tablet} {
    grid-template-columns: 1fr min-content;
    grid-template-rows: 1fr;
    grid-template-areas: 'flag choice';
  }
`;

const QuestionFlagContainer = styled.div`
  grid-area: flag;
  width: 100%;
  height: 100%;
  position: relative;
  > img {
    width: inherit;
    max-height: 100%;
    object-position: center;
    object-fit: contain;
    position: absolute;
    background: transparent;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
    box-sizing: border-box;
  }
`;

const QuestionChoiceContainer = styled.div`
  grid-area: choice;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 1rem;
    &:first-child {
      margin-top: 0rem;
    }
  }
  ${breakpoints.tablet} {
    min-width: 200px;
  }
`;

const ToastContainer = styled.div<{ src: string }>`
  display: flex;
  align-items: center;
  > div {
    width: 64px;
    height: 32px;
    margin: 0.5rem;
    box-shadow: ${props => props.theme.boxShadow};
    background-image: ${props => `url(${props.src})`};
    background-size: cover;
    background-position: center center;
    margin-right: 1rem;
  }
`;

export default {
  Container,
  ProgressBar,
  ToastContainer,
  Question: {
    Container: QuestonContainer,
    FlagContainer: QuestionFlagContainer,
    ChoiceContainer: QuestionChoiceContainer,
  },
};
