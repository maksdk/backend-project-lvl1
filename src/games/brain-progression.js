// @ts-check

import colors from 'colors';
import game from '../index.js';
import Utils from '../utils/index.js';

const MIN_START_NUMBER = -50;
const MAX_START_NUMBER = 50;

const MIN_PROGRESS_RANGE_NUMBER = -5;
const MAX_PROGRESS_RANGE_NUMBER = 5;

const ROUNDS_COUNT = 3;
const RANGE_LENGTH = 10;

const operations = {
	'+': (num1, num2) => num1 + num2,
	'-': (num1, num2) => num1 - num2
};

// const Utils.randomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const calcRange = (startNum, progressRange, operation) => {
	const ranges = [];
	let temp = startNum;
	for (let i = 0; i < RANGE_LENGTH; i += 1) {
		ranges.push(temp);
		temp = operation(temp, progressRange);
	}
	return ranges;
};


const buildRounds = () => {
	const operationsNames = Object.keys(operations);
	const rounds = [];

	for (let i = 0; i < ROUNDS_COUNT; i += 1) {
		const startNumber = Utils.randomNumber(MIN_START_NUMBER, MAX_START_NUMBER);

		let progressRange = Utils.randomNumber(MIN_PROGRESS_RANGE_NUMBER, MAX_PROGRESS_RANGE_NUMBER);
		progressRange = progressRange === 0 ? progressRange + MAX_PROGRESS_RANGE_NUMBER : progressRange;

		const operationName = operationsNames[Utils.randomNumber(0, operationsNames.length - 1)];
		const operation = operations[operationName];

		const range = calcRange(startNumber, progressRange, operation);
		const randomIndex = Utils.randomNumber(0, range.length - 1);

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
