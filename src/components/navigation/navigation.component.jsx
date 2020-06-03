import React from 'react';
import './navigation.styles.scss';
import {Link} from 'react-router-dom';

const Navigation =({displayName}) =>{


    return(
        <div className="navigation">
            <Link to="/user">Salut,<br></br>{displayName}</Link>
            <Link to="/">Task</Link>
            <Link to="/analitics">Analitics</Link>
        </div>
    )
}

export default Navigation;