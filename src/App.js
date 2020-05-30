import React,{useState, useEffect} from 'react';
import Navigation from './components/navigation/navigation.component';
import {auth} from './firebase/firebase'
import Homepage from './pages/homepage/homepage.component';
import Analitics from './pages/analitics/analitics.component';
import Authentification from './pages/authentification/authentification.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {

  const [user, setUser] = useState(null);

  

  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      setUser({currentUser:user});
    })
  
  })
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
