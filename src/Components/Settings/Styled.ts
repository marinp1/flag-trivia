import styled from '../../theme/styled';

const Container = styled.div`
  background: ${props => props.theme.colors.highlight};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 2rem;
  height: 100%;
  box-sizing: border-box;
`;

export default {
  Container,
};
