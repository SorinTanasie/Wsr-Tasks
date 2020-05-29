import React from 'react';
import Navigation from './components/navigation/navigation.component';
import {auth} from './firebase/firebase.utils'
import Homepage from './pages/homepage/homepage.component';
import Analitics from './pages/analitics/analitics.component';
import Authentification from './pages/authentification/authentification.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        
        <Switch>
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/analitics" component={Analitics} />
          <Route exact path="/authentification" component={Authentification} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
