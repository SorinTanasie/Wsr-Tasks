import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/button/button.component";
import SignUp from './sign-up/sign-up.component';

import './authentification.styles.scss'

const Authentification = () => (
    <div className="authentification">
      <h2>Sign in</h2>
      <form className="form">
        <FormInput
           name="email"
           type="email"
           value={''}
           handleChange={''}
           input="input"
           required
           label="Email"
        />
        <FormInput
          name="password"
          type="password"
          input="input"
          value={''}
            handleChange={''}
          required
          label="password"
        />
        <CustomButton
          type="submit"
          value="Submit"
        >AASDDASDASD</CustomButton>
      </form>

      <SignUp/>
    </div>


  
);

export default Authentification;