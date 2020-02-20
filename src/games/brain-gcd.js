// @ts-check
/* eslint-disable */

import game from "../index.js";

const randomNumber = (min, max) => {
	return Math.floor(min + Math.random() * (max - min + 1));
};

const getGreatestCommonDivisor = (num1, num2) => {
	num1 = Math.abs(num1);
	num2 = Math.abs(num2);

	while (num2) {
		const temp = num2;
		num2 = num1 % num2;
		num1 = temp;
	}

	return num1;
};

const buildRounds = () => {
	const rounds = [];
	for (let i = 0; i < 3; i++) {
		const number1 = randomNumber(1, 20);
		const number2 = randomNumber(1, 20);
		const question = `${number1} ${number2}`;
		const answer = String(getGreatestCommonDivisor(number1, number2));
		
		rounds.push({
			question,
			answer
		});
	}
	return rounds;
};

const task = `Find the greatest common divisor of given numbers.`;
const rounds = buildRounds();

export default () => game({ rounds, task });