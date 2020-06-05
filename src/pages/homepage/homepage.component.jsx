
import React, {useState, useEffect} from 'react';
import './homepage.styles.scss';

import AddCard from './Card/AddCard';
import Card from './Card/Card';

import {firestore} from '../../firebase/firebase';
const Homepage = ({user}) => {

	const [cards, setCard] = useState([
		
	]);
	const {uid} = user;
	const docRef = firestore.collection('users').doc(uid).collection('cards');
	console.log(docRef)
	console.log(cards);
	useEffect(() => {
		const {uid} = user;
		const docRef = firestore.collection('users').doc(uid).collection('cards');

		const getTasks = async(docRef) =>{
			const docReff = await docRef;
			docReff.onSnapshot(querySnapshot => {
				const cardsArray = [];

				querySnapshot.forEach(doc => {
					cardsArray.push({
						title: doc.data().title,
						id:doc.id});
					
				})
				setCard(cardsArray);
			})
		}
		getTasks(docRef);
	}, [])


	const addCard = async (title) => {

		if(title.length !== 0) {
			const newCards = [...cards, {title}];
			
			docRef.add({title}).then(docRef => {
				console.log('card written with id: ', docRef.id);;
			}).catch(err => {
				console.log('error: ', err);
			})
		} else {
			console.log('error: empty input');
		}

	}
	// const removeCard = (index) => {

	// 	docRef.onSnapshot(querySnapshot => {
	// 		querySnapshot.forEach(doc => {
	// 			if(doc.data().id === id) {
    //                 console.log(doc.data().id);
	// 				let key = doc.id;

	// 				docRef.doc(key).delete().then(() => {
	// 					console.log('deleted: ', key);
	// 				}).catch(err => {
	// 					console.log('error');
	// 				})

	// 			};
	// 		});			
	// 	});
    // }

  	return (
    	<div className="homepage">
			<h1 className="title">Tasks</h1>
			<div className="board">
				{
					cards.map((card, index) => (
					<Card 
						key={index} 
						card={card}
						id={card.id}
						uid={uid}
					/>))
				}

				<AddCard 
					addCard={addCard} 
					placeholder="Add new card" 
				/>

			</div>

    	</div>
  	);
}

export default Homepage;
