import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebase/firebase';
import Button from '../../components/button/button.component';
import AddEmployee from './AddEmployee';

import './user.styles.scss';

const User = ({ user }) => {
	const [ show, setShow ] = useState(false);
	const [ company, setCompany ] = useState({ name: '' });
	const [ employee, setEmployee ] = useState({ name: '' });
	const [ admin, setAdmin ] = useState(false);
	const [ users, setUsers ] = useState();

	const docRef = firestore.collection('companies');

	/* modal */
	const [ toggle, setToggle ] = useState(false);

	const handleOpenModal = () => {
		setToggle(true);
	};

	const handleCloseModal = () => {
		setToggle(false);
	};

	/* modal */

	useEffect(() => {
		const { uid } = user;
		const userRef = firestore.collection('users').doc(uid);

		const userFunc = async () => {
			await userRef.get().then((userInfo) => {
				if (userInfo.data().companyId) {
					setShow(true);
					getEmployees(userInfo.data().companyId);
					console.log('company id', userInfo.data().companyId);
				} else {
					console.log('nu are companie');
				}
			});
		};

		userFunc();

	}, []);

	// useEffect(
	// 	() => {
	// 		if (admin === true) {
	// 			const userRef = firestore.collection('users');
	// 			const getUsers = async () => {
	// 				await userRef.get().then((user) => {
	// 					const usersArray = [];

	// 					user.forEach((doc) => {
	// 						usersArray.push({
	// 							displayName: doc.data().displayName,
	// 							id: doc.id
	// 						});
	// 					});
	// 					setUsers(usersArray);
	// 					console.log(usersArray);
	// 				});
	// 			};
	// 			getUsers();
	// 		}
	// 	},
	// 	[ admin ]
	// );

	// Get Company employees and set to state
	const getEmployees = async (companyRef) => {
		const adminRef = docRef.doc(companyRef);
		await adminRef.get().then((admin) => {
			if (admin.data().adminId == user.uid) {
				setAdmin(true);
			}
		});

		const docReff = docRef.doc(companyRef).collection('employees');
		docReff.onSnapshot((querySnapshot) => {
			const employees = [];

			querySnapshot.forEach((doc) => {
				employees.push({
					name: doc.data().name,
					id: doc.data().id
				});
			});
			setEmployee(employees);
		});
	};

	const handleSubmit = async () => {
		if (company.name.length !== 0) {
			await docRef
				.add({
					companyName: company.name,
					adminId: user.uid,
					adminName: user.displayName
				})
				.then((docRef) => {
					setUserCompanyId(docRef);
					console.log('company written with id: ', docRef.id);
				})
				.catch((err) => {
					console.log('error: ', err);
				});
		} else {
			console.log('error: empty input');
		}
	};

	const setUserCompanyId = async (docRef) => {
		const userRef = firestore.collection('users').doc(user.uid);
		await userRef.get();
		await userRef.update({ companyId: docRef.id });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setCompany({ ...company, [name]: value });
	};

	const { displayName, email, phoneNumber, photoUrl, uid } = user;
	const logOut = () => {
		auth.signOut();
	};

	return (
		<div className="about-user">
			<div className="user">
				<h2>Profil</h2>
				<h4 onClick={logOut}>Log Out</h4>
				<div className="profile">
					<img src={photoUrl} alt="" />
					<h5>Nume:{displayName}</h5>
					<h5>Email:{email}</h5>
					<h5>Telefon:{phoneNumber}</h5>
				</div>
			</div>

			<div className="organizatie">
				<h2>Company</h2>
				<div className={`${show ? 'd-none' : ' '} `}>
					<button className="create-company" onClick={console.log('modal')}>
						Create a Company
					</button>
					<div className="d-none create-company-container">
						<h3>Company Name:</h3>
						<input type="text" name="name" onChange={handleChange} />
						<button className="submit" onClick={handleSubmit}>
							Create
						</button>
					</div>
				</div>

				<div className={` ${show ? 'd-none' : ' '}company-members`}>
					<div className={`${admin ? '' : 'd-none'}`}>
						<Button onClick={handleOpenModal}>Adauga angajati</Button>

						<AddEmployee toggle={!toggle} handleCloseModal={handleCloseModal} />

						<div className="users">
							{/* aici sa apara userii in lista dupa ce apesi pe buton si sa i poti adauga comapniei */}
						</div>
					</div>
					<h3>employees:</h3>
					<div className="members-container">{/* aici sa apara agajatii companiei */}</div>
				</div>
			</div>
		</div>
	);
};

export default User;
