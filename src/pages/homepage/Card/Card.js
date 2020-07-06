import React, { useState, useEffect } from 'react';
import Task from '../Task/Task';
import AddTask from '../Task/AddTask';
import './Card.css';

import { firestore } from '../../../firebase/firebase';

const Card = ({ card, uid, id, removeCard, docRef }) => {
	const [ tasks, setTask ] = useState([]);

	docRef = docRef.doc(card.id).collection('tasks');

	useEffect(() => {
		const getTasks = async () => {
			docRef.onSnapshot((querySnapshot) => {
				let tasksArray = [];
				// console.log(querySnapshot);
				querySnapshot.forEach((doc) => {
					tasksArray.push(doc.data());
				});
				// console.log(tasksArray);
				setTask(tasksArray);
			});
		};
		getTasks();
	}, []);

	const handleAddTask = (title, id) => {
		if (title.trim() !== '') {
			docRef
				.add({ title, id })
				.then((docRef) => {
					console.log('task written with id: ', docRef.id);
					const baseId = docRef.id;
					docRef.update({ baseId });
				})
				.catch((err) => {
					console.log('error: ', err);
				});
		}
	};

	const handleRemoveTask = (id) => {
		// const newTask = [...tasks];
		// newTask.splice(index, 1);
		// setTask(newTask);

		// const gameID = parseInt(e.target.parentNode.parentNode.id);

		docRef.onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				if (doc.data().id === id) {
					let key = doc.id;

					docRef
						.doc(key)
						.delete()
						.then(() => {
							console.log('deleted: ', key);
						})
						.catch((err) => {
							console.log('error');
						});
				}
			});
		});
	};

	const handleModifyTaskDescription = async (id, description) => {
		await docRef.doc(id).get();
		await docRef.doc(id).update({
			description
		});
	};

	const handleModifyTaskDate = (id, dueDate) => {
		console.log(id);
		docRef.onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				if (doc.data().id === id) {
					let key = doc.id;
					docRef
						.doc(key)
						.update({
							dueDate
						})
						.then(() => {
							console.log('modified: ', key);
						})
						.catch((err) => {
							console.log('error');
						});
				}
			});
		});
	};

	return (
		<div className="card non-empty-card">
			<div className="card-content">
				<h1 className="card-title">{card.title}</h1>
				<i
					className="far fa-trash-alt"
					onClick={() => {
						removeCard(card.id);
					}}
				/>

				<div className="tasks">
					{tasks.map((task) => (
						<Task
							key={task.id}
							index={task.id}
							id={id}
							task={task}
							removeTask={handleRemoveTask}
							handleModifyTaskDescription={handleModifyTaskDescription}
							handleModifyTaskDate={handleModifyTaskDate}
							baseId={task.baseId}
						/>
					))}
				</div>

				<AddTask addTask={handleAddTask} />
			</div>
		</div>
	);
};

export default Card;
