// @ts-check

import colors from 'colors';
import game from '../index.js';
import Utils from '../utils/index.js';

const MIN_START_NUMBER = -50;
const MAX_START_NUMBER = 50;

const MIN_PROGRESS_STEP_NUMBER = -5;
const MAX_PROGRESS_STEP_NUMBER = 5;

const ROUNDS_COUNT = 3;
const RANGE_LENGTH = 10;

const calcProgressRange = (startNum, step) => {
	const ranges = [];
	for (let i = 0; i < RANGE_LENGTH; i += 1) {
		const randgeValue = startNum + step * i;
		ranges.push(randgeValue);
	}
	return ranges;
};

const buildRounds = () => {
	const rounds = [];

	for (let i = 0; i < ROUNDS_COUNT; i += 1) {
		const startNumber = Utils.randomNumber(MIN_START_NUMBER, MAX_START_NUMBER);

		let progressStep = Utils.randomNumber(MIN_PROGRESS_STEP_NUMBER, MAX_PROGRESS_STEP_NUMBER);
		progressStep = progressStep === 0 ? progressStep + MAX_PROGRESS_STEP_NUMBER : progressStep;

		const progressRange = calcProgressRange(startNumber, progressStep);
		const randomIndex = Utils.randomNumber(0, progressRange.length - 1);

		const answer = String(progressRange[randomIndex]);

		progressRange[randomIndex] = '..';
		const question = progressRange.join(' ');
		
		rounds.push({ question, answer });
	}
	return rounds;
};

const task = `What number is missing ${colors.bold('in')} the progression?`;
const rounds = buildRounds();
 
export default () => game({ rounds, task });
