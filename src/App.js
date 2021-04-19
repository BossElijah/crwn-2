import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/hats" component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
