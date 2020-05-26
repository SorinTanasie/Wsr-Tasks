import React, {useState} from 'react';
import Task from '../Task/Task';
import AddTask from '../Task/AddTask'; 
import './Card.css';


const Card = ({card}) => {

    const [tasks, setTask] = useState([{title: 'test'}]);


    const addTask = (title) => {
		const newTask = [...tasks, {title}];
        if(title.trim() !== '') {
		    setTask(newTask);
        }
		console.log('add task: ' + title);
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