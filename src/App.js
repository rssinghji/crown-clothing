import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
);

function App() { // exact without = means true i.e. exact <=> exact={true}
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />  
        <Route exact path='/hats' component={HatsPage} />  
      </Switch>
    </div>
  );
}

export default App;
