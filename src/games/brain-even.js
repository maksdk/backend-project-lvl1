// @ts-check

import colors from 'colors';
import game from '../index.js';
import Utils from '../utils/index.js';

const MIN_NUMBER = 0;
const MAX_NUMBER = 20;
const ROUNDS_COUNT = 3;

const YES_ANSWER = 'yes';
const NO_ANSWER = 'no';

const isEven = (num) => num % 2 === 0;

const buildRounds = () => {
	const rounds = [];

	for (let i = 0; i < ROUNDS_COUNT; i += 1) {
		const number = Utils.randomNumber(MIN_NUMBER, MAX_NUMBER);
		const question = String(number);
		const answer = isEven(number) ? YES_ANSWER : NO_ANSWER;
		rounds.push({ question, answer });
	}

	return rounds;
};

const task = `Answer ${colors.red('"yes"')} ${colors.bold('if')} the number is even, otherwise answer ${colors.red('"no"')}.`;
const rounds = buildRounds();

export default () => game({ rounds, task });
