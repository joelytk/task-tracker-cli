import getTasks from './getTasks.js';
import writeTasks from './writeTasks.js';

export const updateTask = (id, description) => {
	const tasks = getTasks();
	const task = tasks.find(task => task.id === parseInt(id));

	if (task) {
		task.description = description;
		task.updatedAt = new Date();
		writeTasks(tasks);
		console.log('Task updated successfully');
	} else {
		console.log('Task not found');
	}
};

export const markTaskAsInProgress = id => {
	const tasks = getTasks();
	const task = tasks.find(task => task.id === parseInt(id));

	if (task) {
		task.status = 'in-progress';
		writeTasks(tasks);
		console.log('Task marked as in progress');
	} else {
		console.log('Task not found');
	}
};

export const markTaskAsDone = id => {
	const tasks = getTasks();
	const task = tasks.find(task => task.id === parseInt(id));

	if (task) {
		task.status = 'done';
		writeTasks(tasks);
		console.log('Task marked as done');
	} else {
		console.log('Task not found');
	}
};
