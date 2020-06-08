import React from 'react';
import Modal from 'react-modal';
import './employeemodal.scss';
import Autocomplete from 'react-autocomplete';

const EmployeeModal = ({toggle, handleCloseModal}) => {

    return (
        <Modal
            isOpen={!!toggle}
            contentLabel="Task Modal"
            onRequestClose={handleCloseModal}
            ariaHideApp={false}
            className="modal employeeModal"
            >
            
            

            <div className="employeeModal-body">
                <h1>Add Employee</h1>
                
                <form>
                    <input type="text" name="name" placeholder="Nume angajat" />
                    <input type="text" name="name" placeholder="Email angajat" />
                    
                    <button className="button">Adauga angajat</button>
                </form>


            </div>
        </Modal>
    )
}

export default EmployeeModal;