import styled from '../../../theme/styled';

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.smallBoxShadow};
`;

const Selection = styled.div`
  user-select: none;
  cursor: pointer;
  font-weight: normal;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.elements.color1};
  &.selected {
    font-weight: bolder;
  }
  &:first-child {
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
  }
  &:last-child {
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    border-bottom: none;
  }
  &:nth-child(2n + 1) {
    background: ${props => props.theme.elements.color2};
  }
  :hover {
    filter: brightness(95%);
  }
  :active {
    filter: brightness(90%);
  }
`;

export default {
  Title,
  Container,
  Selection,
};
