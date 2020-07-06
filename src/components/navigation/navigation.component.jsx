import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = ({ user }) => {
	const { displayName, photoUrl } = user;

	return (
		<div className="navigation">
			<Link to="/user" className="profil">
				<img src={photoUrl} alt="" />
				{displayName}
			</Link>
			<Link to="/">Task</Link>
			<Link to="/analitics">Analitics</Link>
		</div>
	);
};

export default Navigation;
