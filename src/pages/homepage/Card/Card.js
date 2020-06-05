import React, {useState, useEffect} from 'react';
import Task from '../Task/Task';
import AddTask from '../Task/AddTask'; 
import './Card.css';

import {firestore} from '../../../firebase/firebase';

const Card = ({card,uid,id,removeCard}) => {

    const [tasks, setTask] = useState([]);
    
    const docRef = firestore.collection('users').doc(uid).collection('cards').doc(id).collection('tasks');
    
	useEffect(() => {
		
		
		docRef.onSnapshot(querySnapshot => {
			const tasksArray = [];

			querySnapshot.forEach(doc => {

				tasksArray.push(doc.data());
			})
			setTask(tasksArray);
		})
	}, [])


    const addTask = (title, id) => {

			const newTask = [...tasks, {title, id}];

             if(title.trim() !== '') {
                setTask(newTask);

                docRef.add({title, id}).then(docRef => {
				    console.log('task written with id: ', docRef.id);;
                }).catch(err => {
                    console.log('error: ', err);
                })
            }

	}

    const removeTask = (id) => {
        // const newTask = [...tasks];
        // newTask.splice(index, 1);
        // setTask(newTask);

        // const gameID = parseInt(e.target.parentNode.parentNode.id);
		


		docRef.onSnapshot(querySnapshot => {
			querySnapshot.forEach(doc => {
				if(doc.data().id === id) {
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

    return(
        <div className="card non-empty-card">
            <div className="card-content">
                <h1 className="card-title">{card.title}</h1>
                <i className="far fa-trash-alt" onClick={()=>{removeCard(card.id)}}></i>
                
                <div className="tasks">
                    {
                        tasks.map((task, index) => (
                        <Task 
                            key={index} 
                            index={task.id} 
                            task={task} 
                            removeTask={removeTask} 
                        />))
                    }
                </div>

                <AddTask addTask={addTask} />
        
            </div>
        </div>
        
    );
        
}


export default Card;