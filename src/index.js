// @ts-check

import readlineSync from 'readline-sync';

function askName() {
	return readlineSync.question('May I have your name? ');
}

function greet(name) {
	console.log(`Hello, ${name}!`);
}

export { greet, askName };
