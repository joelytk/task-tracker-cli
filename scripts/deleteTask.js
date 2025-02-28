import getTasks from './getTasks.js';
import writeTasks from './writeTasks.js';

const deleteTask = id => {
	const tasks = getTasks();
	const newTasks = tasks.filter(task => task.id !== parseInt(id));
	writeTasks(newTasks);
	console.log('Task deleted successfully');
};

export default deleteTask;
