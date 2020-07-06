import React,{useState, useEffect} from 'react';
import {auth} from './firebase/firebase'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Homepage from './pages/homepage/homepage.component';
import Analitics from './pages/analitics/analitics.component';
import Authentification from './pages/authentification/authentification.component';
import User from './pages/User/user.component'

import './App.css';

const App = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      setUser(user);
      console.log(user);
    })
  }, [])

  return (
    <div className="App">
      
      {user ?
        (
          <Router>
            <Navigation user={user} />
              
            <Switch>
              <Route exact path="/" render={()=>(<Homepage user={user}/>)}/>
              <Route exact path="/analitics" component={Analitics} />
              <Route exact path="/user" render={()=>(<User user={user}/>)}/>
            </Switch>
        
          </Router>
        )
        : (<Authentification/>)
      }
      
    </div>
  );
}

export default App;
