// @ts-check

import colors from 'colors';
import game from '../index.js';

const randomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const isEven = (num) => num % 2 === 0;

const buildRounds = () => {
	const rounds = [];

	for (let i = 0; i < 3; i += 1) {
		const number = randomNumber(0, 20);
		const question = String(number);
		const answer = isEven(number) ? 'yes' : 'no';
		rounds.push({ question, answer });
	}

	return rounds;
};

const task = `Answer ${colors.red('"yes"')} ${colors.bold('if')} the number is even, otherwise answer ${colors.red('"no"')}.`;
const rounds = buildRounds();

export default () => game({ rounds, task });
