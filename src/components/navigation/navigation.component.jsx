import React from 'react';
import './navigation.styles.scss';
import {Link} from 'react-router-dom'

const Navigation =() =>(
    <div className="navigation">
        <Link to="/homepage">Task</Link>
        <Link to="/analitics">Analitics</Link>
    </div>
)

export default Navigation;