import fs from 'fs';

const getTasks = (status = '') => {
	if (fs.existsSync('tasks.json')) {
		const data = fs.readFileSync('tasks.json', 'utf8');
		const tasks = JSON.parse(data);

		if (status !== '') {
			return tasks.filter(task => task.status === status) || [];
		}

		return tasks || [];
	} else {
		return [];
	}
};

export default getTasks;
