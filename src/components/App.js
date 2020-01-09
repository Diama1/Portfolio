import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import '../assets/scss/App.scss';
import Portfolio from './pages/Home';
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component= {Portfolio} />
    </Switch>
  </BrowserRouter>
)

export default App;
