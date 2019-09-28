import styled from '../../../theme/styled';

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
  background: ${props => props.theme.colors.highlight};
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
  }
  &:nth-child(2n + 1) {
    background: ${props => props.theme.colors.background};
  }
  :hover {
    filter: brightness(95%);
  }
  :active {
    filter: brightness(90%);
  }
`;

export default {
  Container,
  Selection,
};
