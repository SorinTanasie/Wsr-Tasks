import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {firestore} from '../../../../firebase/firebase'
import "./TaskModal.scss";
import ModalHeader from "./ModalHeader";
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

const TaskModal = ({
  index,
  removeTask,
  uid,
  id,
  title,
  selectedTask,
  handleCloseModal,
  modifyTaskDate,
  modifyTaskDescription,
  baseId
}) => {
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState(null);

  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="custom-input" onClick={onClick}>
      {value? value : 'Due Date'} 
    </button>
  );
 
  useEffect(() => {

    if(baseId){
    
	
    const docRef = firestore.collection('users').doc(uid).collection('cards').doc(id).collection('tasks').doc(baseId);
        
         docRef.onSnapshot(querySnapshot => {
        
        if(querySnapshot.exists){
        // querySnapshot.forEach(doc => {

        //     tasksArray.push(doc.data());
        // })
        setDescription(querySnapshot.data().description);
        if(querySnapshot.data().dueDate){
        let time = querySnapshot.data().dueDate.toDate();
        setStartDate(time);
        }
    }
        
    })

    
}
}, [])



  const handleEditDescription = (e) => {
    const existingDescription =
      e.target.parentNode.parentNode.childNodes[0].textContent;
    const newDescription = e.target.parentNode.parentNode.childNodes[0].value;
    if (existingDescription !== newDescription) {
      console.log(existingDescription);
      console.log(newDescription);

      console.log("saved!");
      handleCloseModal();
      console.log(index);

      modifyTaskDescription(index,newDescription);


    } else {
      console.log("already saved!");
    }
    
  };
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
          <textarea defaultValue={description}></textarea>
          
            <button className="save-button" onClick={handleEditDescription}>
              <i className="far fa-save"></i>
            </button>

            <DatePicker
              selected={startDate}
              onChange={(date) =>{console.log(date);modifyTaskDate(index,date)}}
              minDate={new Date()}
              placeholderText="Due Date"
              customInput={<ExampleCustomInput />}
            />
          
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
