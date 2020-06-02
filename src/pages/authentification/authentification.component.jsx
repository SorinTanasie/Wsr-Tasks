import React from "react";
import SignUp from './sign-up/sign-up.component';
import SignIn from './sign-in/sign-in.component';

import './authentification.styles.scss'

const Authentification = () => (
    <div className="authentification">
      
      <SignIn/>
      <SignUp/>
    </div>


  
);

export default Authentification;