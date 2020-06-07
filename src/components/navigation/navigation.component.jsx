import React from 'react';
import './navigation.styles.scss';
import {Link} from 'react-router-dom';

const Navigation =({user}) =>{
    const {displayName,photoUrl} = user;
    console.log(user);
    console.log(displayName);
    return(
        <div className="navigation">
            <Link to="/user" className="profil"><img src={photoUrl} alt=""/>{displayName}</Link>
            <Link to="/">Task</Link>
            <Link to="/analitics">Analitics</Link>
        </div>
    )
}

export default Navigation;