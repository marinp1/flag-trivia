import styled from '../../../theme/styled';

interface Props {
  text: string;
  progress: number;
  statusText: string;
}

const Container = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 2rem;
  background: ${props => props.theme.elements.color2};
  border-radius: ${props => props.theme.borderRadius};
  padding: 0.2rem;
  box-shadow: ${props => props.theme.smallBoxShadow};
  &::before {
    font-size: 80%;
    z-index: 99;
    padding: 0.2rem 0.4rem;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.colors.background};
    opacity: 0.5;
    display: inline-block;
    position: absolute;
    left: 0.5rem;
    top: 50%;
    color: ${props => props.theme.colors.primary};
    transform: translateY(-50%);
    content: ${props =>
      `'${props.text} (${(props.progress * 100).toFixed(2)}%)'`};
  }
  &::after {
    font-size: 80%;
    z-index: 99;
    display: inline-block;
    padding: 0.2rem 0.4rem;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.colors.background};
    opacity: 0.5;
    position: absolute;
    right: 0.5rem;
    top: 50%;
    color: ${props => props.theme.colors.primary};
    transform: translateY(-50%);
    content: ${props => `'${props.statusText}'`};
  }
`;

// Progress between 0 and 1;
const Progress = styled.div<{ progress: number }>`
  height: 100%;
  box-sizing: border-box;
  background: ${props => props.theme.colors.highlight};
  border-radius: ${props => props.theme.borderRadius};
  border: ${props =>
    props.progress > 0 ? `1px solid ${props.theme.colors.border}` : 'none'};
  transition: width 0.5s;
  width: ${props => `${(props.progress * 100).toFixed(2)}%`};
  position: relative;
`;

export default {
  Container,
  Progress,
};
