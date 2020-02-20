// @ts-check

import colors from 'colors';
import game from '../index.js';

const operations = {
	'+': (num1, num2) => num1 + num2,
	'-': (num1, num2) => num1 - num2
};

const randomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const calcRange = (startNum, progressRange, operation) => {
	const ranges = [];
	let temp = startNum;
	for (let i = 0; i < 10; i += 1) {
		ranges.push(temp);
		temp = operation(temp, progressRange);
	}
	return ranges;
};


const buildRounds = () => {
	const operationsNames = Object.keys(operations);
	const rounds = [];

	for (let i = 0; i < 3; i += 1) {
		const startNumber = randomNumber(-50, 50);

		let progressRange = randomNumber(-5, 5);
		progressRange = progressRange === 0 ? progressRange + 3 : progressRange;

		const operationName = operationsNames[randomNumber(0, operationsNames.length - 1)];
		const operation = operations[operationName];

		const range = calcRange(startNumber, progressRange, operation);
		const randomIndex = randomNumber(0, range.length - 1);

		const answer = String(range[randomIndex]);

		range[randomIndex] = '..';
		const question = range.join(' ');
		
		rounds.push({ question, answer });
	}
	return rounds;
};

const task = `What number is missing ${colors.bold('in')} the progression?`;
const rounds = buildRounds();
 
export default () => game({ rounds, task });
