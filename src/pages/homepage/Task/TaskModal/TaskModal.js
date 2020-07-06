import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ModalHeader from './ModalHeader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './TaskModal.scss';

const TaskModal = ({
	index,
	removeTask,
	id,
	title,
	selectedTask,
	handleCloseModal,
	handleModifyTaskDate,
	handleModifyTaskDescription,
	baseId,
	task
}) => {
	const [ description, setDescription ] = useState();
	const [ startDate, setStartDate ] = useState(null);

	const ExampleCustomInput = ({ value, onClick }) => (
		<button className="custom-input" onClick={onClick}>
			{value ? value : 'Due Date'}
		</button>
	);

	useEffect(
		() => {
			setDescription(task.description);
			if (task.dueDate) {
				let time = task.dueDate.toDate();
				setStartDate(time);
			}
		},
		[ task ]
	);

	const handleEditDescription = (e) => {
		const existingDescription = e.target.parentNode.parentNode.childNodes[0].textContent;
		const newDescription = e.target.parentNode.parentNode.childNodes[0].value;
		if (existingDescription !== newDescription) {

			handleCloseModal();

			handleModifyTaskDescription(baseId, newDescription);
		} else {
			console.log('already saved!');
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
			<ModalHeader handleCloseModal={handleCloseModal} removeTask={removeTask} index={index} />

			<div>
				<h1 className="modal-title">{title}</h1>

				<div className="description">
					<textarea defaultValue={description} />

					<button className="save-button" onClick={handleEditDescription}>
						<i className="far fa-save" />
					</button>

					<DatePicker
						selected={startDate}
						onChange={(date) => {
							console.log(date);
							handleModifyTaskDate(index, date);
						}}
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
