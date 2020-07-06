import React, { useState } from 'react';
import './AddTask.css';

const AddTask = ({ addTask, placeholder }) => {
	const [ value, setValue ] = useState('');
	const handleSubmitTask = (e) => {
		e.preventDefault();

		addTask(value, Date.now());
		setValue('');
	};

	return (
		<form className="input-form" onSubmit={handleSubmitTask}>
			<input
				className="task-input"
				type="text"
				placeholder="Add new task"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
};

export default AddTask;
