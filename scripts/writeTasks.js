import fs from 'fs';

const writeTasks = tasks => {
	const sortedTasks = tasks.toSorted((a, b) =>
		a.id > b.id ? 1 : a.id < b.id ? -1 : 0
	);
	fs.writeFileSync('tasks.json', JSON.stringify(sortedTasks, null, 2), 'utf8');
};

export default writeTasks;
