import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Landing from './Components/Landing';
import Game from './Components/Game';
import Settings from './Components/Settings';

import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import globalStyle from './theme/globalStyle';
import { currentTheme, getThemeByName, APP_THEME } from './theme';

import translations from './translations';

import Styled from './Styled';

function useForceUpdate() {
  const [value, set] = React.useState(true); //boolean state
  return () => set(value => !value); // toggle the state to force render
}

const App = () => {
  const [theme, setTheme] = React.useState(currentTheme());

  const forceUpdate = useForceUpdate();

  const changeLanguage = React.useCallback((language: string) => {
    translations.setLanguage(language);
    forceUpdate();
  }, []);

  const selectTheme = React.useCallback((themeName: APP_THEME) => {
    setTheme(getThemeByName(themeName));
  }, []);

  return (
    <ThemeProvider theme={theme.value}>
      <Global styles={globalStyle(theme.value)} />
      <Styled.Container>
        <Settings
          selectLanguage={changeLanguage}
          selectedTheme={theme.name}
          selectTheme={selectTheme}
          translations={translations}
        />
        <Styled.AppContainer>
          <Header translations={translations} />
          <div
            style={{
              gridArea: 'content',
              paddingBottom: '2rem',
            }}
          >
            <Switch>
              <Route
                path="/"
                exact={true}
                render={() => <Landing translations={translations} />}
              />
              <Route
                path="/quiz"
                render={() => <Game translations={translations} />}
              />
            </Switch>
          </div>
        </Styled.AppContainer>
      </Styled.Container>
    </ThemeProvider>
  );
};

export default App;
