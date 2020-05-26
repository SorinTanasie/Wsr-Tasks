import React from 'react';
import Navigation from './components/navigation/navigation.component';
import Homepage from './pages/homepage/homepage.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        
        <Switch>

          <Route  path="/" component={Homepage} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
