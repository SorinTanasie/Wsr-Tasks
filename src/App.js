import React,{useState, useEffect} from 'react';
import Navigation from './components/navigation/navigation.component';
import {auth} from './firebase/firebase'
import Homepage from './pages/homepage/homepage.component';
import Analitics from './pages/analitics/analitics.component';
import Authentification from './pages/authentification/authentification.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {

  const [user, setUser] = useState({user: null});

  

  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      setUser({user});
    })
  
  },[])
  return (
    <div className="App">
      {console.log(user)}
      {user.user === null? console.log("nu e"):console.log('e ceva')}
      {user.user !== null?
      (
      <Router>
        <Navigation />
        
        <Switch>
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/analitics" component={Analitics} />
        </Switch>
        
      </Router>)
      : (<Authentification/>)}
      
    </div>
  );
}

export default App;
