import React from 'react';
import './ModalHeader.scss';

const ModalHeader = ({ handleCloseModal, removeTask, index }) => (
	<div className="modalHeader">
		<button className="close-modal  icon" icon="close" onClick={handleCloseModal}>
			<i className="fas fa-times" />
		</button>

		<button
			className="remove-modal  icon"
			onClick={() => {
				handleCloseModal();
				removeTask(index);
			}}
		>
			<i className="far fa-trash-alt" />
		</button>
	</div>
);

export default ModalHeader;
