import getTasks from './getTasks.js';
import writeTasks from './writeTasks.js';

import { getNextId } from '../utils.js';

const addTask = description => {
	const tasks = getTasks();
	const newTask = {
		id: getNextId(tasks),
		description,
		status: 'todo',
		createdAt: new Date(),
		updatedAt: new Date()
	};
	tasks.push(newTask);
	writeTasks(tasks);
	console.log(`Task added successfully (ID: ${newTask.id})`);
};

export default addTask;
