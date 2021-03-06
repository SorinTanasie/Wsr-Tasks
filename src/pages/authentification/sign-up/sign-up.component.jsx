import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../../firebase/firebase';

import FormInput from '../../../components/form-input/form-input.component';
import CustomButon from '../../../components/button/button.component';

import './sign-up.styles.scss';

const SignUp = () => {
	const [ userr, setUser ] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = userr;

		if (password !== confirmPassword) {
			alert('Password dont match');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await user.updateProfile({
				displayName: displayName
			});
			await createUserProfileDocument(user);

			setUser({
				...userr,
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});

			// console.log(user);
		} catch (error) {
			console.log('error', error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...userr, [name]: value });
	};

	const { displayName, email, password, confirmPassword } = userr;

	return (
		<div className="sign-up">
			<h2 className="title">Sign up</h2>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="name"
					required
				/>

				<FormInput type="email" name="email" value={email} onChange={handleChange} label="email" required />

				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="password"
					required
				/>

				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>

				<CustomButon type="submit"> SIGN UP </CustomButon>
			</form>
		</div>
	);
};

export default SignUp;
