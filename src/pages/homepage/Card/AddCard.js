import React, {useState} from 'react';
import './AddCard.css';

const AddCard = ({addCard}) => {

    const [value, setValue] = useState('');

    const handleSubmitCard = (e) => {
        e.preventDefault();
        
        if(!value) return;
        if(value.trim() == '') return;
        addCard(value);
        setValue('');
    }


    return (
        <div className="empty-card card">

            <form className="addCard-form" onSubmit={handleSubmitCard}>
                <input
                    type="text"
                    className="addCard-input"
                    placeholder="Add new task"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    
                />
            </form>

        </div>
    )
}

export default AddCard;