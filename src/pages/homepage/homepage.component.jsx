
import React, {useState} from 'react';
import './homepage.styles.scss';

import AddCard from './Card/AddCard';
import Card from './Card/Card';

const Homepage = () => {

	const [cards, setCard] = useState([
		{
			title: 'test'
		}
	]);


	const addCard = (title) => {
		const newCard = [...cards, {title}];
		setCard(newCard);
		console.log('add card:' + title);
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
