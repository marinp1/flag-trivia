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

import translationsData from './translations';

import Styled from './Styled';

function useForceUpdate() {
  const [value, set] = React.useState(true); //boolean state
  return () => set(value => !value); // toggle the state to force render
}

const App = () => {
  const translations = React.useRef(translationsData);
  const [theme, setTheme] = React.useState(currentTheme());

  const forceUpdate = useForceUpdate();

  const changeLanguage = React.useCallback((language: string) => {
    translations.current.setLanguage(language);
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
          languages={translations.current.getAvailableLanguages()}
          selectedLanguage={translations.current.getLanguage()}
          selectLanguage={changeLanguage}
          selectedTheme={theme.name}
          selectTheme={selectTheme}
          translations={{
            ...translations.current.settings,
            ...translations.current.theme,
            ...translations.current.general,
          }}
        />
        <Styled.AppContainer>
          <Header />
          <Switch>
            <Route path="/" component={Landing} exact={true} />
            <Route path="/quiz" component={Game} />
          </Switch>
        </Styled.AppContainer>
      </Styled.Container>
    </ThemeProvider>
  );
};

export default App;
