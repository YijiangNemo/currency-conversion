import React from 'react';
import RateDisplay from './modules/RateDisplay'
import RakeTask from './modules/RakeTask'
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Switch>
          <Route path='/' exact component={RakeTask} />
          <Route path="/rate_display" component={RateDisplay} />

        </Switch>
  );
}

export default App;
