import React, { useState } from "react";
import { auth } from "../../../firebase/firebase";

import FormInput from "../../../components/form-input/form-input.component";
import CustomButton from "../../../components/button/button.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [userr, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userr;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUser({ email: "", password: "", error: "" });
    } catch (error) {
      setUser({ error: "eroare" });
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setUser({...userr, [name]: value })
  };
  return (
    <div>
      <h2>Sign in</h2>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="email"
          required
        />
        
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />

        <CustomButton type="submit" value="Submit">
          Sign in
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
