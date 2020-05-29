import React from 'react';
import './button.styles.scss';

const Button = ({children,clas,...otherProps}) =>(
    <button className={`button ${clas}`} {...otherProps}>{children}</button>
);

export default Button;