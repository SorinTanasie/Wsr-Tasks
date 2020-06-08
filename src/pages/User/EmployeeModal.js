import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import './employeemodal.scss';
import Autocomplete from 'react-autocomplete';

import {firestore} from '../../firebase/firebase';


const EmployeeModal = ({toggle, handleCloseModal}) => {



    const [user, setUser] = useState({});
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');

  

    const handleSubmitUser = (e) => {
        e.preventDefault();
        
        if(!name && !email) return;
        if(name.trim() === '' && email.trim() === '') return;
        
        addUser(name, email);
        setName = "";
        setEmail = "";
    }


   
    const docRef = firestore.collection('users-test');


    const addUser = async (name, email) => {
        console.log(name);
        console.log(email);

        if(name !== undefined && email !== undefined) {
            await docRef.add({name, email}).then(docRef => {
                console.log('employee added with id: ' + docRef.id);
            }).catch(err => {
                console.log('error adding new employee: ', err);
            })
        }

           
    }


    
    return (
        <Modal
            isOpen={!toggle}
            contentLabel="Task Modal"
            onRequestClose={handleCloseModal}
            ariaHideApp={false}
            className="modal employeeModal"
            >
            
            

            <div className="employeeModal-body">
                <h1>Add Employee</h1>
                
                <form onSubmit={handleSubmitUser}>
                    <input 
                        type="text" 
                        placeholder="Nume angajat" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        />

                    <input 
                        type="text" 
                        placeholder="Email angajat" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    
                    <button className="button" onClick={addUser}>Adauga angajat</button>
                </form>


            </div>
        </Modal>
    )
}

export default EmployeeModal;