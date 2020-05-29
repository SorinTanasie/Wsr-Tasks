import React from "react";

import "./form-input.styles.scss";

const FormInput = ({input, handleChange, label,otherClass, ...otherProps }) => (
  <div className={`group ${otherClass}`}>
    {input?
    <input className="form-input" onChange={handleChange} {...otherProps} />
    :<textarea className="form-input" onChange={handleChange} {...otherProps} />}
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
