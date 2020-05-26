import React, {useState} from 'react';
import './Task.css';


const Task = ({index, removeTask, task}) => {

    const [selectedTask, openTaskModal] = useState(false);

    const handleOpenModal = e => {
        openTaskModal(e.target);
        console.log('opened: ' + e.target);
    }

    const handleCloseModal = e => {
        openTaskModal(undefined);
        console.log('handled close');
    }

    return (
        <div>

            <div className="task">
                <p 
                    onClick={handleOpenModal} 
                    className="task-title"
                >
                    {task.title ? task.title : ''}
                </p>
            </div>

        </div>
    );


}


export default Task;