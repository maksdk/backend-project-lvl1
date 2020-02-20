// @ts-check
/* eslint-disable */

import game from "../index.js";
import colors from "colors";

const randomNumber = (min, max) => {
	return Math.floor(min + Math.random() * (max - min + 1));
};

const isPrime = (num) =>  {
	if (num === 1) return false;
	if (num === 2) return true;

	for (let x = 2; x < num; x += 1) {
      if (num % x === 0) return false;
	}
	
    return true; 
};

const buildRounds = () => {
	const rounds = [];
	for (let i = 0; i < 3; i++) {

		const number = randomNumber(1, 50);
		const question = String(number);
		const answer = isPrime(number) === true ? "yes" : "no";
		
		rounds.push({ question, answer });
	}
	return rounds;
};

const task = `Answer ${colors.red('"yes"')} ${colors.bold('if')} given number is prime. Otherwise answer ${colors.red('"no"')}.`;
const rounds = buildRounds();

export default () => game({ rounds, task });