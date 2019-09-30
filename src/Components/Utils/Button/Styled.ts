import styled from '../../../theme/styled';

const Button = styled.button`
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.smallBoxShadow};
  background: ${props => props.theme.elements.color1};
  padding: 1rem;
  box-sizing: border-box;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  width: 100%;
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
  :active {
    filter: brightness(90%);
  }
`;

export default {
  Button,
};
