// @ts-check
/* eslint-disable */

import game from "../index.js";

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

		let number1 = randomNumber(1, 20);
		number1 = isPrime(number1) ? number1 + 1 : number1;
		
		let number2 = randomNumber(1, 20);
		number2 = isPrime(number2) ? number2 + 1 : number2;

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