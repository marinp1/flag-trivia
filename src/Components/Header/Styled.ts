import styled from '../../theme/styled';

const Container = styled.div`
  grid-area: header;
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.background};
  padding-top: 2rem;
  h1 {
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 0.25rem;
  }
  box-shadow: ${props => props.theme.smallBoxShadow};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export default {
  Container,
};
