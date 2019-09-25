import styled from './theme/styled';

const Container = styled.div`
  display: flex;
  position: absolute;
  background: ${props => props.theme.colors.background};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const AppContainer = styled.div`
  padding: 2rem;
`;

export default {
  AppContainer,
  Container,
};
