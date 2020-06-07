
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
				console.log('mounted')
			})
		}
		getTasks(docRef);
	}, [])


	const addCard = async (title) => {

		if(title.length !== 0) {
			
			await docRef.add({title}).then(docRef => {
				console.log('card written with id: ', docRef.id);;
			}).catch(err => {
				console.log('error: ', err);
			})
		} else {
			console.log('error: empty input');
		}

	}
	const removeCard = (id) => {

		docRef.onSnapshot(querySnapshot => {
			querySnapshot.forEach(doc => {
				if(doc.id === id) {
					let key = doc.id;

					docRef.doc(key).delete().then(() => {
						console.log('deleted: ', key);
					}).catch(err => {
						console.log('error');
					})

				};
			});			
		});
    }

  	return (
    	<div className="homepage">
			<h1 className="title">Tasks</h1>
			<div className="board">
				{console.log(cards)}
				{
					cards.map(card => (
					<Card 
						key={card.id}
						card={card}
						id={card.id}
						uid={uid}
						removeCard={removeCard}
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
