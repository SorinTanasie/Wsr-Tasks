import React, {useState} from 'react';
import Modal from 'react-modal';
import './TaskModal.scss';
import ModalHeader from './ModalHeader';


const TaskModal = ({index, removeTask, title, selectedTask, handleCloseModal}) => {

    const [description, setDescription] = useState('test');

    const handleEditDescription = e => {
        const existingDescription = e.target.parentNode.parentNode.childNodes[0].textContent;
        const newDescription = e.target.parentNode.parentNode.childNodes[0].value;


        if(existingDescription !== newDescription) {
            console.log(existingDescription);
            console.log(newDescription);

            console.log('saved!');
            setDescription(newDescription);
            handleCloseModal();
        } else {
            console.log('already saved!');
        }

    }


    return (
        <Modal
            isOpen={!!selectedTask}
            // isOpen={true}
            contentLabel="Task Modal"
            onRequestClose={handleCloseModal}
            ariaHideApp={false}
            className="modal"

        >
            <ModalHeader 
                handleCloseModal={handleCloseModal}
                removeTask={removeTask}
                index={index}
            />

            <div>
            
                <h1 className="modal-title">{title}</h1>

                <div className="description">
                    <textarea defaultValue={description}>
                        
                    </textarea>

                    <button
                        className="save-button"
                        onClick={handleEditDescription}
                    >
                        <i className="far fa-save"></i>
                    </button>
                </div>

    
            </div>


        </Modal>
    )

}

export default TaskModal;