import React from "react";

import FormInput from "../../../components/form-input/form-input.component";
import CustomButton from "../../../components/button/button.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  return (
    <div>
      <h2>Sign in</h2>
      <form className="form">
        <FormInput
          name="email"
          type="email"
          value={""}
          handleChange={""}
          input="input"
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          input="input"
          value={""}
          handleChange={""}
          required
          label="password"
        />
        <CustomButton type="submit" value="Submit">
          AASDDASDASD
        </CustomButton>
      </form>
    </div>
    
  );
};

export default SignIn;