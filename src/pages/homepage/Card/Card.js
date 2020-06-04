import React, {useState, useEffect} from 'react';
import Task from '../Task/Task';
import AddTask from '../Task/AddTask'; 
import './Card.css';

import {firestore} from '../../../firebase/firebase';

const Card = ({card}) => {

    const [tasks, setTask] = useState([{}]);


	useEffect(() => {
		const docRef = firestore.collection('tasks');
		
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

                firestore.collection("tasks").add({title, id}).then(docRef => {
				    console.log('task written with id: ', docRef.id);;
                }).catch(err => {
                    console.log('error: ', err);
                })
            }

	}

    const removeTask = (index) => {
        const newTask = [...tasks];
        newTask.splice(index, 1);
        setTask(newTask);
    }

    return(
        <div className="card non-empty-card">
            <div className="card-content">
                <h1 className="card-title">{card.title}</h1>


                
                <div className="tasks">
                    {
                        tasks.map((task, index) => (
                        <Task 
                            key={index} 
                            index={index} 
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