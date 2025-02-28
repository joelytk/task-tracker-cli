#!/usr/bin/env node
import { program } from 'commander';

import addTask from '../scripts/addTask.js';
import deleteTask from '../scripts/deleteTask.js';
import getTasks from '../scripts/getTasks.js';
import {
	markTaskAsDone,
	markTaskAsInProgress,
	updateTask
} from '../scripts/updateTask.js';

program
	.command('add <description>')
	.description('Adds a new task')
	.action(addTask);

program
	.command('update <id> <description>')
	.description('Updates an existing task')
	.action(updateTask);

program
	.command('delete <id>')
	.description('Deletes an existing task')
	.action(deleteTask);

program
	.command('mark-in-progress <id>')
	.description('Marks a task as in progress')
	.action(markTaskAsInProgress);

program
	.command('mark-done <id>')
	.description('Marks a task as done')
	.action(markTaskAsDone);

program
	.command('list [status]')
	.description('Lists all tasks (or by status)')
	.action(status => {
		const tasks = getTasks(status);
		console.log(tasks);
	});

program.parse(process.argv);
