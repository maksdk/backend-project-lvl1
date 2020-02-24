// @ts-check

import colors from 'colors';
import game from '../index.js';
import Utils from '../utils/index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 50;
const ROUNDS_COUNT = 3;

const YES_ANSWER = 'yes';
const NO_ANSWER = 'no';

// const Utils.randomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const isPrime = (num) => {
	if (num === 1) return false;
	if (num === 2) return true;

	for (let x = 2; x < num; x += 1) {
		if (num % x === 0) return false;
	}

	return true;
};

const buildRounds = () => {
	const rounds = [];

	for (let i = 0; i < ROUNDS_COUNT; i += 1) {
		const number = Utils.randomNumber(MIN_NUMBER, MAX_NUMBER);
		const question = String(number);
		const answer = isPrime(number) === true ? YES_ANSWER : NO_ANSWER;
		
		rounds.push({ question, answer });
	}

	return rounds;
};

const task = `Answer ${colors.red('"yes"')} ${colors.bold('if')} given number is prime. Otherwise answer ${colors.red('"no"')}.`;
const rounds = buildRounds();

export default () => game({ rounds, task });
