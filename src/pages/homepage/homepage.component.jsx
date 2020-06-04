
import React, {useState, useEffect} from 'react';
import './homepage.styles.scss';

import AddCard from './Card/AddCard';
import Card from './Card/Card';

import {firestore} from '../../firebase/firebase';
const Homepage = () => {

	const [cards, setCard] = useState([
		{
			title: 'test'
		}
	]);


	useEffect(() => {
		const docRef = firestore.collection('cards');
		
		docRef.onSnapshot(querySnapshot => {
			const cardsArray = [];

			querySnapshot.forEach(doc => {

				cardsArray.push(doc.data());
			})
			setCard(cardsArray);
		})
	}, [])


	const addCard = (title) => {

		if(title.length !== 0) {
			const newCards = [...cards, {title}];
			setCard(newCards);

			firestore.collection("cards").add({title}).then(docRef => {
				console.log('card written with id: ', docRef.id);;
			}).catch(err => {
				console.log('error: ', err);
			})
		} else {
			console.log('error: empty input');
		}

	}

  	return (
    	<div className="homepage">
			<h1 className="title">Tasks</h1>
			<div className="board">
				{
					cards.map((card, index) => (
					<Card 
						key={index} 
						card={card}
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
