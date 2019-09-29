import styled from './theme/styled';

const Container = styled.div`
  display: grid;
  position: absolute;
  background: ${props => props.theme.colors.background};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'settings app';
`;

const AppContainer = styled.div`
  grid-area: app;
  padding: 0 2rem 2rem 2rem;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  position: relative;
  height: auto;
  overflow: auto;
`;

export default {
  AppContainer,
  Container,
};
