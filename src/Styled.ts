import styled from './theme/styled';
import { breakpoints } from './theme';

interface Props {
  settingsOpen: boolean;
}

const Container = styled.div<Props>`
  display: grid;
  position: absolute;
  background: ${props => props.theme.colors.background};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  grid-template-rows: 1fr;
  grid-template-areas: 'settings app';
  grid-template-columns: ${props =>
    props.settingsOpen ? '100% 0%' : 'auto 1fr'};
  ${breakpoints.tablet} {
    grid-template-columns: auto 1fr;
  }
`;

const AppContainer = styled.div`
  grid-area: app;
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
