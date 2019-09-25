import styled from './theme/styled';

const Container = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.background};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`;

const AppContainer = styled.div`
  display: inline-block;
  padding: 2rem;
`;

export default {
  AppContainer,
  Container,
};
