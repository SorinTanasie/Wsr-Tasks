import React,{useState} from "react";
import SignUp from './sign-up/sign-up.component';
import SignIn from './sign-in/sign-in.component';

import './authentification.styles.scss'

const Authentification = () => {

  const [show,setShow] = useState(true)
  
  
  const switchh = () =>{
    setShow(!show)
  }


  return(
    <div className="authentification">
      <div className={`${show ? "": 'right'} container`}>
        <div className={`${show ? "" : "switch-active"} anim`}>
          <SignIn/>
        </div>
        <div className={`${show ? "switch-active" : ""} anim`}>
          <SignUp/>
        </div>
      </div>
     <div className={`switch-container ${show ? "left": ''}`}>
       <div className={`${show ? "" : "switch-active"} left-container`}>
        <h3>SignUp</h3>
        <p>Fill up you personal information and start your jurney with us</p>
        <button onClick={switchh}>Sign up</button>
       </div>
       <div className={`${show ? "switch-active" : ""} right-container`}>
        <h3>SignIn</h3>
        <p>To keep connected with us please log in with you personal information</p>
        <button onClick={switchh}>Sign in</button>
      </div>
     </div>
    </div>
  )

  
};

export default Authentification;