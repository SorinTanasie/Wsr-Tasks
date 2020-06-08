import React, {useState} from 'react';
import './Task.css';
import TaskModal from './TaskModal/TaskModal';

const Task = ({index, removeTask, task,modifyTaskDate,modifyTaskDescription,baseId,uid,id}) => {

    const [selectedTask, openTaskModal] = useState(false);
    console.log(task)

    const handleOpenModal = e => {
        openTaskModal(e.target);
        // console.log('opened: ' + e.target);
    }

    const handleCloseModal = e => {
        openTaskModal(undefined);
        console.log('handled close');
    }

    return (
        <div>

            <TaskModal 
                title={task.title}
                selectedTask={selectedTask}
                handleCloseModal={handleCloseModal}
                index={index}
                removeTask={removeTask}
                modifyTaskDescription={modifyTaskDescription}
                modifyTaskDate={modifyTaskDate}
                uid={uid}
                id={id}
                baseId={baseId}
                task={task}
            />

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