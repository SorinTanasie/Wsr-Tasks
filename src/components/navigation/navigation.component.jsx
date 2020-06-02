import React from 'react';
import './navigation.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase'

const Navigation =() =>{

    const logOut = () =>{
        auth.signOut();
    }

    return(
        <div className="navigation">
            <h3 onClick={logOut}>Log Out</h3>
            <Link to="/homepage">Task</Link>
            <Link to="/analitics">Analitics</Link>
        </div>
    )
}

export default Navigation;