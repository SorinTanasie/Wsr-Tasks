import React,{useState} from "react";
import SignUp from './sign-up/sign-up.component';
import SignIn from './sign-in/sign-in.component';

import './authentification.styles.scss'

const Authentification = () => {

  const [show,setShow] = useState(false)
  
  const switchh = () =>{
    setShow(!show)
  }


  return(
    <div className="authentification">
      <div className={`${show ? "" : "switch-active"}`}>
        <SignIn/>
        <h3 onClick={switchh}>Don't have an account? Sign Up</h3>
      </div>
      <div className={`${show ? "switch-active" : ""}`}>
        <SignUp/>
        <h3 onClick={switchh}>You have an account? Sign In</h3>
      </div>
     
    </div>
  )

  
};

export default Authentification;