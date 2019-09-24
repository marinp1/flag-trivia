import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Landing from './Components/Landing';
import Game from './Components/Game';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Landing} exact={true} />
        <Route path="/quiz" component={Game} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
