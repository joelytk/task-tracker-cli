export const getNextId = tasks => {
	const ids = tasks.map(task => task.id);

	ids.sort((a, b) => a - b);

	let nextId = 1;

	for (const id of ids) {
		if (id !== nextId) {
			break;
		}

		nextId += 1;
	}

	return nextId;
};
