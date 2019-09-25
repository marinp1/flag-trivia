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

import Styled from './Styled';

const App = () => {
  const [theme, setTheme] = React.useState(currentTheme());

  const selectTheme = React.useCallback((themeName: APP_THEME) => {
    setTheme(getThemeByName(themeName));
  }, []);

  return (
    <ThemeProvider theme={theme.value}>
      <Global styles={globalStyle(theme.value)} />
      <Styled.Container>
        <Settings selectedTheme={theme.name} selectTheme={selectTheme} />
        <Header />
        <Switch>
          <Route path="/" component={Landing} exact={true} />
          <Route path="/quiz" component={Game} />
        </Switch>
      </Styled.Container>
    </ThemeProvider>
  );
};

export default App;
