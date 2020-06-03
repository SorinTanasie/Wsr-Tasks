import React  from 'react';
import {auth} from '../../firebase/firebase'

import './user.styles.scss'

const User = ({user}) =>{
    
    const {displayName,email,phoneNumber,photoUrl} = user;

    const logOut = () =>{
        auth.signOut();
    }

    return(
        <div className="user">
            <h2>Profil</h2>
            <h4 onClick={logOut}>Log Out</h4>
            <div className="profile">
                <img src={photoUrl} alt=""/>
                <h5>Nume:{displayName}</h5>
                <h5>Email:{email}</h5>
                <h5>Telefon:{phoneNumber}</h5>
            </div>
        </div>
    )
}

export default User;