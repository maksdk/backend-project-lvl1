// @ts-check
/* eslint-disable */

import game from "../index.js";
import colors from 'colors';

const randomNumber = (min, max) => {
    return Math.floor(min + Math.random() * (max - min + 1));
};

const isEven = num => num % 2 === 0;

const buildRounds = () => {
	const rounds = [];
	for(let i = 0; i < 3; i++) {
		const number = randomNumber(0, 20);
		const question = String(number);
		const answer = isEven(number) ? "yes" : "no";
		rounds.push({ question, answer });
	}
	return rounds;
};

const task = `Answer ${colors.red('"yes"')} ${colors.bold("if")} the number is even, otherwise answer ${colors.red('"no"')}${colors.blue(".")}`;
const rounds = buildRounds();

export default () => game({ rounds, task });